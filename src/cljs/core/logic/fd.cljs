(ns cljs.core.logic.fd
  (:refer-clojure :exclude [== < > <= >= + - * quot distinct ISet])
  (:require [cljs.core.logic :as l]
            [clojure.set :as set]
            [clojure.string :as string]
            [cljs.core :as core])
  (:require-macros [cljs.core.logic.macros :as l
                    :refer [defne extend-to-fd let-dom]]))

(defprotocol IInterval
  (-lb [this])
  (-ub [this]))

(defprotocol IIntervals
  (-intervals [this]))

(defprotocol ISortedDomain
  (-drop-one [this])
  (-drop-before [this n])
  (-keep-before [this n]))

(defprotocol ISet
  (-member? [this n])
  (-disjoint? [this that])
  (-intersection [this that])
  (-difference [this that]))

(declare domain sorted-set->domain
         difference* intersection* disjoint?*
         unify-with-domain* finite-domain?
         interval multi-interval)

(defn bounds [i]
  [(-lb i) (-ub i)])

(defn interval-< [i j]
  (core/< (-ub i) (-lb j)))

(defn interval-<= [i j]
  (core/<= (-ub i) (-lb j)))

(defn interval-> [i j]
  (core/> (-lb i) (-ub j)))

(defn interval->= [i j]
  (core/>= (-lb i) (-ub j)))

;; FiniteDomain
;; -----
;; wrapper around Clojure sorted sets. Used to represent small
;; domains. Optimization when interval arithmetic provides little
;; benefit.
;;
;; s - a sorted set
;; min - the minimum value, an optimization
;; max - the maximum value, an optimization

(deftype FiniteDomain [s min max]
  IEquiv
  (-equiv [this that]
    (if (finite-domain? that)
      (if (= (l/-member-count this) (l/-member-count that))
        (= s (:s that))
        false)
      false))

  ILookup
  (-lookup [this k]
    (-lookup this k nil))
  (-lookup [this k not-found]
    (case k
      :s s
      :min min
      :max max
      not-found))

  l/IMemberCount
  (-member-count [this] (count s))

  IInterval
  (-lb [_] min)
  (-ub [_] max)

  ISortedDomain
  (-drop-one [_]
    (let [s (disj s min)
          c (count s)]
      (cond
        (= c 1) (first s)
        (core/> c 1) (FiniteDomain. s (first s) max)
        :else nil)))

  (-drop-before [_ n]
    (apply domain (drop-while #(core/< % n) s)))

  (-keep-before [this n]
    (apply domain (take-while #(core/< % n) s)))

  ISet
  (-member? [this n]
    (if (s n) true false))

  (-disjoint? [this that]
    (cond
      (integer? that)
      (if (s that) false true)
      (instance? FiniteDomain that)
      (cond
        (core/< max (:min that)) true
        (core/> min (:max that)) true
        :else (empty? (set/intersection s (:s that))))
      :else (disjoint?* this that)))

  (-intersection [this that]
    (cond
      (integer? that)
      (when (-member? this that) that)
      (instance? FiniteDomain that)
      (sorted-set->domain (set/intersection s (:s that)))
      :else
      (intersection* this that)))

  (-difference [this that]
    (cond
      (integer? that)
      (sorted-set->domain (disj s that))
      (instance? FiniteDomain that)
      (sorted-set->domain (set/difference s (:s that)))
      :else
      (difference* this that)))

  IIntervals
  (-intervals [_] (seq s))

  l/IMergeDomains
  (-merge-doms [this that]
    (-intersection this that))

  IPrintWithWriter
  (-pr-writer [x writer opts]
    (-write writer (str "<domain:" (seq (:s x)) ">"))))

(defn finite-domain? [x]
  (instance? FiniteDomain x))

(defn sorted-set->domain [s]
  (let [c (count s)]
    (cond
      (zero? c) nil
      (= c 1) (first s)
      :else (FiniteDomain. s (first s) (first (rseq s))))))

(defn domain
  "Construct a domain for assignment to a var. Arguments should
   be integers given in sorted order. domains may be more efficient
   than intervals when only a few values are possible."
  [& args]
  (when (seq args)
    (sorted-set->domain (into (sorted-set) args))))

(declare interval?)

(extend-to-fd number)

(declare interval)

;; IntervalFD
;; -----
;; Type optimized for interval arithmetic. Only stores bounds.
;;
;; lb - lower bound
;; ub - upper bound

(deftype IntervalFD [lb ub]
  IEquiv
  (-equiv [_ o]
    (if (instance? IntervalFD o)
      (and (= lb (-lb o))
           (= ub (-ub o)))
      false))

  Object
  (toString [this]
    (pr-str this))

  l/IMemberCount
  (-member-count [this] (inc (core/- ub lb)))

  IInterval
  (-lb [_] lb)
  (-ub [_] ub)

  ISortedDomain
  (-drop-one [_]
    (let [nlb (inc lb)]
      (when (core/<= nlb ub)
        (interval nlb ub))))

  (-drop-before [this n]
    (cond
      (= n ub) n
      (core/< n lb) this
      (core/> n ub) nil
      :else (interval n ub)))

  (-keep-before [this n]
    (cond
      (core/<= n lb) nil
      (core/> n ub) this
      :else (interval lb (dec n))))

  ISet
  (-member? [this n]
    (and (core/>= n lb) (core/<= n ub)))

  (-disjoint? [this that]
    (cond
      (integer? that)
      (not (-member? this that))

      (interval? that)
      (let [i this
            j that
            [imin imax] (bounds i)
            [jmin jmax] (bounds j)]
        (or (core/> imin jmax)
            (core/< imax jmin)))

      :else (disjoint?* this that)))

  (-intersection [this that]
    (cond
      (integer? that)
      (if (-member? this that)
        that
        nil)

      (interval? that)
      (let [i this j that
            imin (-lb i) imax (-ub i)
            jmin (-lb j) jmax (-ub j)]
        (cond
          (core/< imax jmin) nil
          (core/< jmax imin) nil
          (and (core/<= imin jmin)
               (core/>= imax jmax)) j
               (and (core/<= jmin imin)
                    (core/>= jmax imax)) i
                    (and (core/<= imin jmin)
                         (core/<= imax jmax)) (interval jmin imax)
                         (and (core/<= jmin imin)
                              (core/<= jmax imax)) (interval imin jmax)
                              :else (throw (ex-info (str "Interval intersection not defined " i " " j) {}))))

      :else (intersection* this that)))

  (-difference [this that]
    (cond
      (integer? that)
      (cond
        (= lb that) (interval (inc lb) ub)
        (= ub that) (interval lb (dec ub))
        :else (if (-member? this that)
                (multi-interval (interval lb (dec that))
                                (interval (inc that) ub))
                this))

      (interval? that)
      (let [i this j that
            imin (-lb i) imax (-ub i)
            jmin (-lb j) jmax (-ub j)]
        (cond
          (core/> jmin imax) i
          (and (core/<= jmin imin)
               (core/>= jmax imax)) nil
               (and (core/< imin jmin)
                    (core/> imax jmax))
               (multi-interval (interval imin (dec jmin))
                               (interval (inc jmax) imax))
               (and (core/< imin jmin)
                    (core/<= jmin imax)) (interval imin (dec jmin))
                    (and (core/> imax jmax)
                         (core/<= jmin imin)) (interval (inc jmax) imax)
                         :else (throw (ex-info (str "Interval difference not defined " i " " j) {}))))

      :else (difference* this that)))

  IIntervals
  (-intervals [this]
    (list this))

  l/IMergeDomains
  (-merge-doms [this that]
    (-intersection this that))

  IPrintWithWriter
  (-pr-writer [x writer opts]
    (-write writer (str "<interval:" (-lb x) ".." (-ub x) ">"))))

(defn interval? [x]
  (instance? IntervalFD x))

(defn interval
  "Construct an interval for an assignment to a var. intervals may
   be more efficient that the domain type when the range of possiblities
   is large."
  ([ub] (IntervalFD. 0 ub))
  ([lb ub]
     (if (zero? (core/- ub lb))
       ub
       (IntervalFD. lb ub))))

(defn intersection* [is js]
  (loop [is (seq (-intervals is)) js (seq (-intervals js)) r []]
    (if (and is js)
      (let [i (first is)
            j (first js)]
        (cond
          (interval-< i j) (recur (next is) js r)
          (interval-> i j) (recur is (next js) r)
          :else
          (let [[imin imax] (bounds i)
                [jmin jmax] (bounds j)]
            (cond
              (core/<= imin jmin)
              (cond
                (core/< imax jmax)
                (recur (next is)
                       (cons (interval (inc imax) jmax) (next js))
                       (conj r (interval jmin imax)))
                (core/> imax jmax)
                (recur (cons (interval (inc jmax) imax) (next is))
                       (next js)
                       (conj r j))
                :else
                (recur (next is) (next js)
                       (conj r (interval jmin jmax))))
              (core/> imin jmin)
              (cond
                (core/> imax jmax)
                (recur (cons (interval (inc jmax) imax) (next is))
                       (next js)
                       (conj r (interval imin jmax)))
                (core/< imax jmax)
                (recur is (cons (interval (inc imax) jmax) (next js))
                       (conj r i))
                :else
                (recur (next is) (next js)
                       (conj r (interval imin imax))))))))
      (apply multi-interval r))))

(defn difference* [is js]
  (loop [is (seq (-intervals is)) js (seq (-intervals js)) r []]
    (if is
      (if js
        (let [i (first is)
              j (first js)]
          (cond
            (interval-< i j) (recur (next is) js (conj r i))
            (interval-> i j) (recur is (next js) r)
            :else
            (let [[imin imax] (bounds i)
                  [jmin jmax] (bounds j)]
              (cond
                (core/< imin jmin)
                (cond
                  (core/< jmax imax)
                  (recur (cons (interval (inc jmax) imax) (next is))
                         (next js)
                         (conj r (interval imin (dec jmin))))
                  (core/> jmax imax)
                  (recur (next is)
                         (cons (interval (inc imax) jmax) (next js))
                         (conj r (interval imin (dec jmin))))
                  :else
                  (recur (next is) (next js)
                         (conj r (interval imin (dec jmin)))))
                (core/>= imin jmin)
                (cond
                  (core/< imax jmax)
                  (recur (next is)
                         (cons (interval (inc imax) jmax) (next js))
                         r)
                  (core/> imax jmax)
                  (recur (cons (interval (inc jmax) imax) (next is))
                         (next js)
                         r)
                  :else (recur (next is) (next js)
                               r))))))
        (apply multi-interval (into r is)))
      (apply multi-interval r))))

(defn disjoint?* [is js]
  (if (-disjoint? (interval (-lb is) (-ub is))
                  (interval (-lb js) (-ub js)))
    true
    (let [d0 (-intervals is)
          d1 (-intervals js)]
      (loop [d0 d0 d1 d1]
        (if (or (nil? d0) (nil? d1))
          true
          (let [i (first d0)
                j (first d1)]
            (cond
              (interval-< i j) (recur (next d0) d1)
              (interval-> i j) (recur d0 (next d1))
              (-disjoint? i j)  (recur (next d0) d1)
              :else false)))))))

(declare normalize-intervals singleton-dom? multi-interval)

;; MultiIntervalFD
;; -----
;; Running difference operations on IntervalFD will result in
;; a series of intervals.
;;
;; min - minimum value of all contained intervals
;; max - maximum value of all contained intervals
;; is  - the intervals

(deftype MultiIntervalFD [min max is]
  ILookup
  (-lookup [this k]
    (-lookup this k nil))
  (-lookup [this k not-found]
    (case k
      :is is
      :min min
      :max max
      not-found))

  IEquiv
  (-equiv [this j]
    (if (instance? MultiIntervalFD j)
      (let [i this
            [jmin jmax] (bounds j)]
        (if (and (= min jmin) (= max jmax))
          (let [is (normalize-intervals is)
                js (normalize-intervals (-intervals j))]
            (= is js))
          false))
      false))

  l/IMemberCount
  (-member-count [this]
    (reduce core/+ 0 (map #(l/-member-count %) is)))

  IInterval
  (-lb [_] min)
  (-ub [_] max)

  ISortedDomain
  (-drop-one [_]
    (let [i (first is)]
      (if (singleton-dom? i)
        (let [nis (rest is)]
          (MultiIntervalFD. (-lb (first nis)) max nis))
        (let [ni (-drop-one i)]
          (MultiIntervalFD. (-lb ni) max (cons ni (rest is)))))))

  (-drop-before [_ n]
    (let [is (seq is)]
      (loop [is is r []]
        (if is
          (let [i (-drop-before (first is) n)]
            (if i
              (recur (next is) (conj r i))
              (recur (next is) r)))
          (when (pos? (count r))
            (apply multi-interval r))))))

  (-keep-before [_ n]
    (let [is (seq is)]
      (loop [is is r []]
        (if is
          (let [i (-keep-before (first is) n)]
            (if i
              (recur (next is) (conj r i))
              (recur (next is) r)))
          (when (pos? (count r))
            (apply multi-interval r))))))

  ISet
  (-member? [this n]
    (if (some #(-member? % n) is)
      true
      false))
  (-disjoint? [this that]
    (disjoint?* this that))
  (-intersection [this that]
    (intersection* this that))
  (-difference [this that]
    (difference* this that))

  IIntervals
  (-intervals [this]
    (seq is))

  l/IMergeDomains
  (-merge-doms [this that]
    (-intersection this that))

  IPrintWithWriter
  (-pr-writer [x writer opts]
    (-write writer (str "<intervals:" (apply pr-str (:is x)) ">"))))

(defn normalize-intervals [is]
  (reduce (fn [r i]
            (if (zero? (count r))
              (conj r i)
              (let [j (peek r)
                    jmax (-ub j)
                    imin (-lb i)]
                (if (core/<= (dec imin) jmax)
                  (conj (pop r) (interval (-lb j) (-ub i)))
                  (conj r i)))))
          [] is))

(defn multi-interval
  ([] nil)
  ([i0] i0)
  ([i0 i1]
     (let [is [i0 i1]]
       (MultiIntervalFD. (reduce min (map -lb is))
                         (reduce max (map -ub is)) is)))
  ([i0 i1 & ir]
     (let [is (into [] (concat (list i0 i1) ir))]
       (MultiIntervalFD. (reduce min (map -lb is))
                         (reduce max (map -ub is)) is))))

;; ===========================================================================
;; CLP(FD)

(defn get-dom
  [a x]
  (if (l/lvar? x)
    (l/get-dom a x :cljs.core.logic/fd)
    x))

(defn ext-dom-fd
  [a x dom domp]
  (let [a (l/add-dom a x :cljs.core.logic/fd dom)]
    (if (not= domp dom)
      ((l/run-constraints* [x] (:cs a) :cljs.core.logic/fd) a)
      a)))

(defn singleton-dom? [x]
  (integer? x))

(defn resolve-storable-dom
  [a x dom domp]
  (if (singleton-dom? dom)
    (let [xv (l/-walk a x)]
      (if (l/lvar? xv)
        (l/-ext-run-cs (l/rem-dom a x :cljs.core.logic/fd) x dom)
        a))
    (ext-dom-fd a x dom domp)))

(defn process-dom
  "If x is a var we update its domain. If it's an integer
   we check that it's a member of the given domain. dom is
   then new domain, it should have already been calculated from
   domp which was the previous domain."
  [x dom domp]
  (fn [a]
    (when dom
      (cond
        (l/lvar? x) (resolve-storable-dom a x dom domp)
        (-member? dom x) a
        :else nil))))

(declare domc)

(defn dom
  "Assign a var x a domain."
  [x dom]
  (fn [a]
    (let [domp (get-dom a x)
          dom  (if domp
                 (-intersection dom domp)
                 dom)]
      ((l/composeg
        (process-dom x dom domp)
        (if (and (nil? domp)
                 (not (singleton-dom? dom)))
          (domc x)
          identity)) a))))

(defn map-sum [f]
  (fn loop [ls]
    (if (empty? ls)
      (fn [a] nil)
      (fn [a]
        (l/mplus
         ((f (first ls)) a)
         (fn []
           ((loop (rest ls)) a)))))))

(defn to-vals [dom]
  (letfn [(to-vals* [is]
            (when is
              (let [i (first is)]
                (lazy-seq
                 (cons (-lb i)
                       (if-let [ni (-drop-one i)]
                         (to-vals* (cons ni (next is)))
                         (to-vals* (next is))))))))]
    (to-vals* (seq (-intervals dom)))))

(extend-protocol l/IForceAnswerTerm
  FiniteDomain
  (-force-ans [v x]
    ((map-sum (fn [n] (l/ext-run-csg x n))) (to-vals v)))

  IntervalFD
  (-force-ans [v x]
    ((map-sum (fn [n] (l/ext-run-csg x n))) (to-vals v)))

  MultiIntervalFD
  (-force-ans [v x]
    ((map-sum (fn [n] (l/ext-run-csg x n))) (to-vals v))))

(defn -domc [x]
  (reify
    l/IEnforceableConstraint
    l/IConstraintStep
    (-step [this s]
      (let [xv (l/-walk s x)
            xd (-> (l/-root-val s x) :doms :cljs.core.logic/fd)]
        (reify
          IFn
          (-invoke [_ s]
            (if xd
              (when (-member? xd xv)
                (l/rem-dom s x :cljs.core.logic/fd))
              s))
          l/IEntailed
          (-entailed? [_]
            (nil? xd))
          l/IRunnable
          (-runnable? [_]
            (not (l/lvar? xv))))))
    l/IConstraintOp
    (-rator [_] `cljs.core.logic.fd/domc)
    (-rands [_] [x])
    l/IConstraintWatchedStores
    (-watched-stores [this] #{:cljs.core.logic/subst})))

(defn domc [x]
  (l/cgoal (-domc x)))

(defn ==c [u v]
  (reify
    l/IEnforceableConstraint
    l/IConstraintStep
    (-step [this s]
      (let-dom s [u du v dv]
               (reify
                 core/IFn
                 (-invoke [_ s]
                   (let [i (-intersection du dv)]
                     ((l/composeg
                       (process-dom u i du)
                       (process-dom v i dv)) s)))
                 l/IEntailed
                 (-entailed? [_]
                   (and (singleton-dom? du)
                        (singleton-dom? dv)
                        (= du dv)))
                 l/IRunnable
                 (-runnable? [_]
                   (and du dv)))))
    l/IConstraintOp
    (-rator [_] `cljs.core.logic.fd/==)
    (-rands [_] [u v])
    l/IConstraintWatchedStores
    (-watched-stores [this]
      #{:cljs.core.logic/subst :cljs.core.logic/fd})))

(defn ==
  "A finite domain constraint. u and v must be equal. u and v must
   eventually be given domains if vars."
  [u v]
  (l/cgoal (==c u v)))

(defn !=c [u v]
  (reify
    l/IEnforceableConstraint
    l/IConstraintStep
    (-step [this s]
      (let-dom s [u du v dv]
               (let [su? (singleton-dom? du)
                     sv? (singleton-dom? dv)]
                 (reify
                   IFn
                   (-invoke [_ s]
                     (cond
                       (and su? sv? (= du dv)) nil
                       (-disjoint? du dv) s
                       su? (when-let [vdiff (-difference dv du)]
                             ((process-dom v vdiff dv) s))
                       :else (when-let [udiff (-difference du dv)]
                               ((process-dom u udiff du) s))))
                   l/IEntailed
                   (-entailed? [_]
                     (and du dv (-disjoint? du dv)))
                   l/IRunnable
                   (-runnable? [_]
                     (and du dv (or su? sv?)))))))
    l/IConstraintOp
    (-rator [_] `cljs.core.logic.fd/!=)
    (-rands [_] [u v])
    l/IConstraintWatchedStores
    (-watched-stores [this]
      #{:cljs.core.logic/subst :cljs.core.logic/fd})))

(defn !=
  "A finite domain constraint. u and v must not be equal. u and v
   must eventually be given domains if vars."
  [u v]
  (l/cgoal (!=c u v)))

(defn <=c [u v]
  (reify
    l/IEnforceableConstraint
    l/IConstraintStep
    (-step [this s]
      (let-dom s [u du v dv]
               (reify
                 IFn
                 (-invoke [_ s]
                   (let [umin (-lb du)
                         vmax (-ub dv)]
                     ((l/composeg*
                       (process-dom u (-keep-before du (inc vmax)) du)
                       (process-dom v (-drop-before dv umin) dv)) s)))
                 l/IEntailed
                 (-entailed? [_]
                   (and du dv (interval-<= du dv)))
                 l/IRunnable
                 (-runnable? [_]
                   (and du dv)))))
    l/IConstraintOp
    (-rator [_] `cljs.core.logic.fd/<=)
    (-rands [_] [u v])
    l/IConstraintWatchedStores
    (-watched-stores [this]
      #{:cljs.core.logic/subst :cljs.core.logic/fd})))

(defn <=
  "A finite domain constraint. u must be less than or equal to v.
   u and v must eventually be given domains if vars."
  [u v]
  (l/cgoal (<=c u v)))

(defn <
  "A finite domain constraint. u must be less than v. u and v
   must eventually be given domains if vars."
  [u v]
  (l/all
   (<= u v)
   (!= u v)))

(defn >
  "A finite domain constraint. u must be greater than v. u and v
   must eventually be given domains if vars."
  [u v]
  (< v u))

(defn >=
  "A finite domain constraint. u must be greater than or equal to v.
   u and v must eventually be given domains if vars."
  [u v]
  (<= v u))

(defn +c [u v w]
  (reify
    l/IEnforceableConstraint
    l/IConstraintStep
    (-step [this s]
      (let-dom s [u du v dv w dw]
               (reify
                 IFn
                 (-invoke [_ s]
                   (let [[wmin wmax]
                         (if dw
                           (bounds dw)
                           [(core/+ (-lb du) (-lb dv))
                            (core/+ (-ub du) (-ub dv))])
                         [umin umax]
                         (if du
                           (bounds du)
                           [(core/- (-lb dw) (-ub dv))
                            (core/- (-ub dw) (-lb dv))])
                         [vmin vmax]
                         (if dv
                           (bounds dv)
                           [(core/- (-lb dw) (-ub du))
                            (core/- (-ub dw) (-lb du))])
                         wi (interval (core/+ umin vmin)
                                      (core/+ umax vmax))
                         ui (interval (core/- wmin vmax)
                                      (core/- wmax vmin))
                         vi (interval (core/- wmin umax)
                                      (core/- wmax umin))]
                     (when-let [wi (if (and wi dw) (-intersection wi dw) wi)]
                       (when-let [ui (if (and ui du)
                                       (-intersection ui du)
                                       ui)]
                         (when-let [vi (if (and vi dv)
                                         (-intersection vi dv)
                                         vi)]
                           (when (or (not (every? singleton-dom? [wi ui vi]))
                                     (core/= (core/+ ui vi) wi))
                             ((l/composeg*
                               (process-dom w wi dw)
                               (process-dom u ui du)
                               (process-dom v vi dv))
                              s)))))))
                 l/IEntailed
                 (-entailed? [_]
                   (and (singleton-dom? du)
                        (singleton-dom? dv)
                        (singleton-dom? dw)
                        (= (core/+ du dv) dw)))
                 l/IRunnable
                 (-runnable? [_]
                   (cond
                     du (or dv dw)
                     dv (or du dw)
                     dw (or du dv)
                     :else false)))))
    l/IConstraintOp
    (-rator [_] `cljs.core.logic.fd/+)
    (-rands [_] [u v w])
    l/IConstraintWatchedStores
    (-watched-stores [this]
      #{:cljs.core.logic/subst :cljs.core.logic/fd})))

(defn +
  "A finite domain constraint for addition and subtraction.
   u, v & w must eventually be given domains if vars."
  [u v w]
  (l/cgoal (+c u v w)))

(defn -
  [u v w]
  (+ v w u))

(defn *c [u v w]
  (letfn [(safe-div [n c a t]
            (if (zero? n)
              c
              (let [q (core/quot a n)]
                (case t
                  :lower (if (pos? (rem a n))
                           (inc q)
                           q)
                  :upper q))))]
    (reify
      l/IEnforceableConstraint
      l/IConstraintStep
      (-step [this s]
        (let-dom s [u du v dv w dw]
                 (reify
                   IFn
                   (-invoke [_ s]
                     (let [[wmin wmax]
                           (if dw
                             (bounds dw)
                             [(core/* (-lb du) (-lb dv))
                              (core/* (-ub du) (-ub dv))])
                           [umin umax]
                           (if du
                             (bounds du)
                             [(safe-div (-ub dv) (-lb dw) (-lb dw) :lower)
                              (safe-div (-lb dv) (-lb dw) (-ub dw) :upper)])
                           [vmin vmax]
                           (if dv
                             (bounds dv)
                             [(safe-div (-ub du) (-lb dw) (-lb dw) :lower)
                              (safe-div (-lb du) (-lb dw) (-ub dw) :upper)])
                           wi (interval (core/* umin vmin) (core/* umax vmax))
                           ui (interval (safe-div vmax umin wmin :lower)
                                        (safe-div vmin umax wmax :upper))
                           vi (interval (safe-div umax vmin wmin :lower)
                                        (safe-div umin vmax wmax :upper))]
                       (when-let [wi (if (and wi dw)
                                       (-intersection wi dw)
                                       wi)]
                         (when-let [ui (if (and ui du)
                                         (-intersection ui du)
                                         ui)]
                           (when-let [vi (if (and vi dv)
                                           (-intersection vi dv)
                                           vi)]
                             (when (or (not (every? singleton-dom?
                                                    [wi ui vi]))
                                       (core/= (core/* ui vi) wi))
                               ((l/composeg*
                                 (process-dom w wi dw)
                                 (process-dom u ui du)
                                 (process-dom v vi dv)) s)))))))
                   l/IEntailed
                   (-entailed? [_]
                     (and (singleton-dom? du)
                          (singleton-dom? dv)
                          (singleton-dom? dw)
                          (= (core/* du dv) dw)))
                   l/IRunnable
                   (-runnable? [_]
                     (cond
                       du (or dv dw)
                       dv (or du dw)
                       dw (or du dv)
                       :else false)))))
      l/IConstraintOp
      (-rator [_] `cljs.core.logic.fd/*)
      (-rands [_] [u v w])
      l/IConstraintWatchedStores
      (-watched-stores [this]
        #{:cljs.core.logic/subst :cljs.core.logic/fd}))))

(defn *
  "A finite domain constraint for multiplication and
   thus division. u, v & w must be eventually be given
   domains if vars."
  [u v w]
  (l/cgoal (*c u v w)))

(defn quot [u v w]
  (* v w u))

(defn -distinctc
  "The real *individual* distinct constraint. x is a var that now is bound to
   a single value. y* were the non-singleton bound vars that existed at the
   construction of the constraint. n* is the set of singleton domain values
   that existed at the construction of the constraint. We use categorize to
   determine the current non-singleton bound vars and singleton vlaues. if x
   is in n* or the new singletons we have failed. If not we simply remove
   the value of x from the remaining non-singleton domains bound to vars."
  [x y* n*]
  (reify
    l/IEnforceableConstraint
    l/IConstraintStep
    (-step [this s]
      (let [x (l/-walk s x)]
        (reify
          IFn
          (-invoke [_ s]
            (when-not (n* x)
              (loop [y* (seq y*) s s]
                (if y*
                  (let [y (first y*)
                        v (or (get-dom s y) (l/-walk s y))
                        s (if-not (l/lvar? v)
                            (cond
                              (= x v) nil
                              (-member? v x)
                              ((process-dom y (-difference v x) v) s)
                              :else s)
                            s)]
                    (when s
                      (recur (next y*) s)))
                  ((l/remcg this) s)))))
          l/IRunnable
          (-runnable? [_]
            (singleton-dom? x)))))
    l/IConstraintOp
    (-rator [_] `cljs.core.logic.fd/-distinct)
    (-rands [_] [x])
    l/IConstraintWatchedStores
    (-watched-stores [this] #{:cljs.core.logic/subst})))

(defn -distinct [x y* n*]
  (l/cgoal (-distinctc x y* n*)))

(defn list-sorted? [pred ls]
  (if (empty? ls)
    true
    (loop [f (first ls) ls (next ls)]
      (if ls
        (let [s (first ls)]
          (if (pred f s)
            (recur s (next ls))
            false))
        true))))

(defn distinctc
  "The real distinct constraint. v* can be seq of logic vars and
   values or it can be a logic var itself. This constraint does not
   run until v* has become ground. When it has become ground we group
   v* into a set of logic vars and a sorted set of known singleton
   values. We then construct the individual constraint for each var."
  [v*]
  (reify
    l/IEnforceableConstraint
    l/IConstraintStep
    (-step [this s]
      (let [v* (l/-walk s v*)]
        (reify
          IFn
          (-invoke [_ s]
            (let [{x* true n* false} (group-by l/lvar? v*)
                  n* (sort core/< n*)]
              (when (list-sorted? core/< n*)
                (let [x* (into #{} x*)
                      n* (into (sorted-set) n*)]
                  (loop [xs (seq x*) s s]
                    (if xs
                      (let [x (first xs)]
                        (when-let [s ((-distinct x (disj x* x) n*) s)]
                          (recur (next xs) s)))
                      ((l/remcg this) s)))))))
          l/IRunnable
          (-runnable? [_]
            (not (l/lvar? v*))))))
    l/IConstraintOp
    (-rator [_] `cljs.core.logic.fd/distinct)
    (-rands [_] [v*])
    l/IConstraintWatchedStores
    (-watched-stores [this] #{:cljs.core.logic/subst})))

(defn distinct
  "A finite domain constraint that will guarantee that
   all vars that occur in v* will be unified with unique
   values. v* need not be ground. Any vars in v* should
   eventually be given a domain."
  [v*]
  (l/cgoal (distinctc v*)))

(defne bounded-listo
  "Ensure that the list l never grows beyond bound n.
   n must have been assigned a domain."
  [l n]
  ([() _] (<= 0 n))
  ([[h . t] n]
     (fresh [m]
       (in m (interval 0 js/Number.MAX_VALUE))
       (+ m 1 n)
       (bounded-listo t m))))

;; ---------------------------------------------------------------------------
;; FD Equation Sugar

(def binops->fd
  '{+  cljs.core.logic.fd/+
    -  cljs.core.logic.fd/-
    *  cljs.core.logic.fd/*
    /  cljs.core.logic.fd/quot
    =  cljs.core.logic.fd/==
    != cljs.core.logic.fd/!=
    <= cljs.core.logic.fd/<=
    <  cljs.core.logic.fd/<
    >= cljs.core.logic.fd/>=
    >  cljs.core.logic.fd/>})

(def binops (set (keys binops->fd)))

(defn expand [form]
  (if (seq? form)
    (let [[op & args] form]
      (if (and (binops op) (core/> (count args) 2))
        (list op (expand (first args))
              (expand (cons op (rest args))))
        (cons op (map expand args))))
    form))

(defn eq*
  ([form vars] (eq* form vars nil))
  ([form vars out]
     (if (seq? form)
       (let [[op r1 r2] form
             [outl outlv?] (if (seq? r1)
                             (let [s (gensym)]
                               (swap! vars conj s)
                               [s true])
                             [r1 false])
             [outr outrv?] (if (seq? r2)
                             (let [s (gensym)]
                               (swap! vars conj s)
                               [s true])
                             [r2 false])
             op (binops->fd op)]
         (cons (if out
                 (list op outl outr out)
                 (list op outl outr))
               (concat (when (seq? r1)
                         (eq* r1 vars (when outlv? outl)))
                       (when (seq? r2)
                         (eq* r2 vars (when outrv? outr))))))
       form)))

(defn ->fd [vars exprs]
  `(fresh [~@vars]
     ~@(reverse exprs)))

(defn eq-form [form]
  (let [vars (atom [])
        exprs (eq* (expand form) vars)]
    (->fd @vars exprs)))

