// Compiled by ClojureScript 0.0-2080
goog.provide('cljs.core.logic');
goog.require('cljs.core');
goog.require('cljs.core.logic.protocols');
goog.require('cljs.reader');
goog.require('cljs.reader');
goog.require('cljs.core.logic.protocols');
goog.require('cljs.core.logic.protocols');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('clojure.set');
cljs.core.logic._STAR_logic_dbs_STAR_ = cljs.core.PersistentVector.EMPTY;
cljs.core.logic.fk = (new Error());
cljs.core.logic.assoc_meta = (function assoc_meta(x,k,v){return cljs.core.with_meta.call(null,x,cljs.core.assoc.call(null,cljs.core.meta.call(null,x),k,v));
});
cljs.core.logic.dissoc_meta = (function dissoc_meta(x,k){return cljs.core.with_meta.call(null,x,cljs.core.dissoc.call(null,cljs.core.meta.call(null,x),k));
});
cljs.core.logic.assoc_dom = (function assoc_dom(x,k,v){return cljs.core.assoc.call(null,x,new cljs.core.Keyword(null,"doms","doms",1016993507),cljs.core.assoc.call(null,x.doms,k,v));
});
cljs.core.logic.dissoc_dom = (function dissoc_dom(x,k){return cljs.core.assoc.call(null,x,new cljs.core.Keyword(null,"doms","doms",1016993507),cljs.core.dissoc.call(null,x.doms,k));
});
cljs.core.logic.record_QMARK_ = (function record_QMARK_(x){var G__87099 = x;if(G__87099)
{var bit__7442__auto__ = (G__87099.cljs$lang$protocol_mask$partition0$ & 67108864);if((bit__7442__auto__) || (G__87099.cljs$core$IRecord$))
{return true;
} else
{if((!G__87099.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IRecord,G__87099);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IRecord,G__87099);
}
});

/**
* @constructor
*/
cljs.core.logic.Pair = (function (lhs,rhs){
this.lhs = lhs;
this.rhs = rhs;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2149583122;
})
cljs.core.logic.Pair.cljs$lang$type = true;
cljs.core.logic.Pair.cljs$lang$ctorStr = "cljs.core.logic/Pair";
cljs.core.logic.Pair.cljs$lang$ctorPrWriter = (function (this__7360__auto__,writer__7361__auto__,opt__7362__auto__){return cljs.core._write.call(null,writer__7361__auto__,"cljs.core.logic/Pair");
});
cljs.core.logic.Pair.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (x,writer,opts){var self__ = this;
var x__$1 = this;return cljs.core._write.call(null,writer,[cljs.core.str("("),cljs.core.str(x__$1.lhs),cljs.core.str(" . "),cljs.core.str(x__$1.rhs),cljs.core.str(")")].join(''));
});
cljs.core.logic.Pair.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,o){var self__ = this;
var ___$1 = this;if((o instanceof cljs.core.logic.Pair))
{return ((self__.lhs === o.lhs)) && ((self__.rhs === o.rhs));
} else
{return false;
}
});
cljs.core.logic.Pair.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.lhs;
});
cljs.core.logic.Pair.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.rhs;
});
cljs.core.logic.Pair.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,i){var self__ = this;
var this$__$1 = this;var pred__87100 = cljs.core._EQ__EQ_;var expr__87101 = i;if(cljs.core.truth_(pred__87100.call(null,0,expr__87101)))
{return self__.lhs;
} else
{if(cljs.core.truth_(pred__87100.call(null,1,expr__87101)))
{return self__.rhs;
} else
{throw cljs.core.ex_info.call(null,"Index out of bounds",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"index","index",1114250308),i,new cljs.core.Keyword(null,"coll","coll",1016963678),this$__$1], null));
}
}
});
cljs.core.logic.Pair.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (_,i,not_found){var self__ = this;
var ___$1 = this;var pred__87103 = cljs.core._EQ__EQ_;var expr__87104 = i;if(cljs.core.truth_(pred__87103.call(null,0,expr__87104)))
{return self__.lhs;
} else
{if(cljs.core.truth_(pred__87103.call(null,1,expr__87104)))
{return self__.rhs;
} else
{return not_found;
}
}
});
cljs.core.logic.Pair.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return 2;
});
cljs.core.logic.Pair.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){var self__ = this;
var this$__$1 = this;return cljs.core._lookup.call(null,this$__$1,k,null);
});
cljs.core.logic.Pair.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){var self__ = this;
var this$__$1 = this;var G__87106 = k;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"rhs","rhs",1014017135),G__87106))
{return self__.rhs;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"lhs","lhs",1014011369),G__87106))
{return self__.lhs;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.logic.Pair.prototype.toString = (function (){var self__ = this;
var _ = this;return [cljs.core.str("("),cljs.core.str(self__.lhs),cljs.core.str(" . "),cljs.core.str(self__.rhs),cljs.core.str(")")].join('');
});
cljs.core.logic.__GT_Pair = (function __GT_Pair(lhs,rhs){return (new cljs.core.logic.Pair(lhs,rhs));
});
cljs.core.logic.pair = (function pair(lhs,rhs){return (new cljs.core.logic.Pair(lhs,rhs));
});
cljs.core.logic.var_rands = (function var_rands(a,c){return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,cljs.core.logic.lvar_QMARK_,cljs.core.map.call(null,(function (p1__87107_SHARP_){return cljs.core.logic.protocols.root_var.call(null,a,p1__87107_SHARP_);
}),cljs.core.logic.protocols._rands.call(null,c))));
});
cljs.core.logic.unbound_rands = (function unbound_rands(a,c){return cljs.core.filter.call(null,(function (p1__87108_SHARP_){return cljs.core.logic.lvar_QMARK_.call(null,cljs.core.logic.protocols.root_val.call(null,a,p1__87108_SHARP_));
}),cljs.core.logic.var_rands.call(null,a,c));
});

/**
* @constructor
*/
cljs.core.logic.ConstraintStore = (function (km,cm,cid,running){
this.km = km;
this.cm = cm;
this.cid = cid;
this.running = running;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.logic.ConstraintStore.cljs$lang$type = true;
cljs.core.logic.ConstraintStore.cljs$lang$ctorStr = "cljs.core.logic/ConstraintStore";
cljs.core.logic.ConstraintStore.cljs$lang$ctorPrWriter = (function (this__7360__auto__,writer__7361__auto__,opt__7362__auto__){return cljs.core._write.call(null,writer__7361__auto__,"cljs.core.logic/ConstraintStore");
});
cljs.core.logic.ConstraintStore.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.count.call(null,self__.cm);
});
cljs.core.logic.ConstraintStore.prototype.cljs$core$logic$protocols$IConstraintStore$ = true;
cljs.core.logic.ConstraintStore.prototype.cljs$core$logic$protocols$IConstraintStore$addc$arity$3 = (function (this$,a,c){var self__ = this;
var this$__$1 = this;var vars = cljs.core.logic.var_rands.call(null,a,c);var c__$1 = cljs.core.logic.protocols.with_id.call(null,c,self__.cid);var cs = cljs.core.reduce.call(null,((function (vars,c__$1){
return (function (cs,v){return cljs.core.logic.add_var.call(null,cs,v,c__$1);
});})(vars,c__$1))
,this$__$1,vars);return (new cljs.core.logic.ConstraintStore(cs.km,cs.cm,(self__.cid + 1),self__.running));
});
cljs.core.logic.ConstraintStore.prototype.cljs$core$logic$protocols$IConstraintStore$updatec$arity$3 = (function (this$,a,c){var self__ = this;
var this$__$1 = this;var oc = self__.cm.call(null,cljs.core.logic.protocols.id.call(null,c));var nkm = (((function (){var G__87110 = c;if(G__87110)
{var bit__7442__auto__ = null;if(cljs.core.truth_((function (){var or__6816__auto__ = bit__7442__auto__;if(cljs.core.truth_(or__6816__auto__))
{return or__6816__auto__;
} else
{return G__87110.cljs$core$logic$protocols$IEntailedVar$;
}
})()))
{return true;
} else
{if((!G__87110.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.logic.protocols.IEntailedVar,G__87110);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.logic.protocols.IEntailedVar,G__87110);
}
})())?cljs.core.reduce.call(null,((function (oc){
return (function (km__$1,x){if(cljs.core.truth_(cljs.core.logic.protocols._entailed_var_QMARK_.call(null,c,x)))
{return cljs.core.dissoc.call(null,km__$1,x);
} else
{return km__$1;
}
});})(oc))
,self__.km,cljs.core.logic.var_rands.call(null,a,oc)):self__.km);return (new cljs.core.logic.ConstraintStore(nkm,cljs.core.assoc.call(null,self__.cm,cljs.core.logic.protocols.id.call(null,c),c),self__.cid,self__.running));
});
cljs.core.logic.ConstraintStore.prototype.cljs$core$logic$protocols$IConstraintStore$remc$arity$3 = (function (this$,a,c){var self__ = this;
var this$__$1 = this;var vs = cljs.core.logic.var_rands.call(null,a,c);var ocid = cljs.core.logic.protocols.id.call(null,c);var nkm = cljs.core.reduce.call(null,((function (vs,ocid){
return (function (km__$1,v){var vcs = cljs.core.disj.call(null,cljs.core.get.call(null,km__$1,v),ocid);if(cljs.core.empty_QMARK_.call(null,vcs))
{return cljs.core.dissoc.call(null,km__$1,v);
} else
{return cljs.core.assoc.call(null,km__$1,v,vcs);
}
});})(vs,ocid))
,self__.km,vs);var ncm = cljs.core.dissoc.call(null,self__.cm,ocid);return (new cljs.core.logic.ConstraintStore(nkm,ncm,self__.cid,self__.running));
});
cljs.core.logic.ConstraintStore.prototype.cljs$core$logic$protocols$IConstraintStore$runc$arity$3 = (function (this$,c,state){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(state))
{return (new cljs.core.logic.ConstraintStore(self__.km,self__.cm,self__.cid,cljs.core.conj.call(null,self__.running,cljs.core.logic.protocols.id.call(null,c))));
} else
{return (new cljs.core.logic.ConstraintStore(self__.km,self__.cm,self__.cid,cljs.core.disj.call(null,self__.running,cljs.core.logic.protocols.id.call(null,c))));
}
});
cljs.core.logic.ConstraintStore.prototype.cljs$core$logic$protocols$IConstraintStore$constraints_for$arity$4 = (function (this$,a,x,ws){var self__ = this;
var this$__$1 = this;var temp__4098__auto__ = cljs.core.get.call(null,self__.km,cljs.core.logic.protocols.root_var.call(null,a,x));if(cljs.core.truth_(temp__4098__auto__))
{var ids = temp__4098__auto__;return cljs.core.filter.call(null,(function (p1__87109_SHARP_){return cljs.core.logic.protocols._watched_stores.call(null,p1__87109_SHARP_).call(null,ws);
}),cljs.core.map.call(null,self__.cm,cljs.core.remove.call(null,self__.running,ids)));
} else
{return null;
}
});
cljs.core.logic.ConstraintStore.prototype.cljs$core$logic$protocols$IConstraintStore$migrate$arity$3 = (function (this$,x,root){var self__ = this;
var this$__$1 = this;var xcs = self__.km.call(null,x);var rootcs = self__.km.call(null,root,cljs.core.PersistentHashSet.EMPTY);var nkm = cljs.core.assoc.call(null,cljs.core.dissoc.call(null,self__.km,x),root,cljs.core.into.call(null,rootcs,xcs));return (new cljs.core.logic.ConstraintStore(nkm,self__.cm,self__.cid,self__.running));
});
cljs.core.logic.ConstraintStore.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){var self__ = this;
var this$__$1 = this;return cljs.core._lookup.call(null,this$__$1,k,null);
});
cljs.core.logic.ConstraintStore.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){var self__ = this;
var this$__$1 = this;var G__87111 = k;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"running","running",2564688177),G__87111))
{return self__.running;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"cid","cid",1014002736),G__87111))
{return self__.cid;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"cm","cm",1013907420),G__87111))
{return self__.cm;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"km","km",1013907668),G__87111))
{return self__.km;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return not_found;
} else
{return null;
}
}
}
}
}
});
cljs.core.logic.__GT_ConstraintStore = (function __GT_ConstraintStore(km,cm,cid,running){return (new cljs.core.logic.ConstraintStore(km,cm,cid,running));
});
cljs.core.logic.add_var = (function add_var(cs,x,c){if(cljs.core.truth_(cljs.core.logic.lvar_QMARK_.call(null,x)))
{} else
{throw cljs.core.ex_info.call(null,[cljs.core.str("constraint store assoc expected logic var key: "),cljs.core.str(x)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
var cm = cs.cm;var km = cs.km;var cid = cs.cid;var nkm = cljs.core.update_in.call(null,km,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),cljs.core.fnil.call(null,((function (cm,km,cid){
return (function (s){return cljs.core.conj.call(null,s,cid);
});})(cm,km,cid))
,cljs.core.PersistentHashSet.EMPTY));var ncm = cljs.core.assoc.call(null,cm,cid,c);return (new cljs.core.logic.ConstraintStore(nkm,ncm,cid,cs.running));
});
cljs.core.logic.make_cs = (function make_cs(){return (new cljs.core.logic.ConstraintStore(cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,0,cljs.core.PersistentHashSet.EMPTY));
});

/**
* @constructor
* @param {*} v
* @param {*} doms
* @param {*} eset
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
cljs.core.logic.SubstValue = (function (v,doms,eset,__meta,__extmap){
this.v = v;
this.doms = doms;
this.eset = eset;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
if(arguments.length>3){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
cljs.core.logic.SubstValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7373__auto__){var self__ = this;
var this__7373__auto____$1 = this;var h__7227__auto__ = self__.__hash;if(!((h__7227__auto__ == null)))
{return h__7227__auto__;
} else
{var h__7227__auto____$1 = cljs.core.hash_imap.call(null,this__7373__auto____$1);self__.__hash = h__7227__auto____$1;
return h__7227__auto____$1;
}
});
cljs.core.logic.SubstValue.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7378__auto__,k__7379__auto__){var self__ = this;
var this__7378__auto____$1 = this;return cljs.core._lookup.call(null,this__7378__auto____$1,k__7379__auto__,null);
});
cljs.core.logic.SubstValue.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7380__auto__,k87113,else__7381__auto__){var self__ = this;
var this__7380__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k87113,new cljs.core.Keyword(null,"v","v",1013904360)))
{return self__.v;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k87113,new cljs.core.Keyword(null,"doms","doms",1016993507)))
{return self__.doms;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k87113,new cljs.core.Keyword(null,"eset","eset",1017026895)))
{return self__.eset;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k87113,else__7381__auto__);
} else
{return null;
}
}
}
}
});
cljs.core.logic.SubstValue.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7385__auto__,k__7386__auto__,G__87112){var self__ = this;
var this__7385__auto____$1 = this;var pred__87115 = cljs.core.keyword_identical_QMARK_;var expr__87116 = k__7386__auto__;if(cljs.core.truth_(pred__87115.call(null,new cljs.core.Keyword(null,"v","v",1013904360),expr__87116)))
{return (new cljs.core.logic.SubstValue(G__87112,self__.doms,self__.eset,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__87115.call(null,new cljs.core.Keyword(null,"doms","doms",1016993507),expr__87116)))
{return (new cljs.core.logic.SubstValue(self__.v,G__87112,self__.eset,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__87115.call(null,new cljs.core.Keyword(null,"eset","eset",1017026895),expr__87116)))
{return (new cljs.core.logic.SubstValue(self__.v,self__.doms,G__87112,self__.__meta,self__.__extmap,null));
} else
{return (new cljs.core.logic.SubstValue(self__.v,self__.doms,self__.eset,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7386__auto__,G__87112),null));
}
}
}
});
cljs.core.logic.SubstValue.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7392__auto__,writer__7393__auto__,opts__7394__auto__){var self__ = this;
var this__7392__auto____$1 = this;var pr_pair__7395__auto__ = (function (keyval__7396__auto__){return cljs.core.pr_sequential_writer.call(null,writer__7393__auto__,cljs.core.pr_writer,""," ","",opts__7394__auto__,keyval__7396__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__7393__auto__,pr_pair__7395__auto__,"#cljs.core.logic.SubstValue{",", ","}",opts__7394__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"v","v",1013904360),self__.v],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"doms","doms",1016993507),self__.doms],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"eset","eset",1017026895),self__.eset],null))], null),self__.__extmap));
});
cljs.core.logic.SubstValue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7383__auto__,entry__7384__auto__){var self__ = this;
var this__7383__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__7384__auto__))
{return cljs.core._assoc.call(null,this__7383__auto____$1,cljs.core._nth.call(null,entry__7384__auto__,0),cljs.core._nth.call(null,entry__7384__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__7383__auto____$1,entry__7384__auto__);
}
});
cljs.core.logic.SubstValue.prototype.toString = (function (){var self__ = this;
var _ = this;return [cljs.core.str(self__.v)].join('');
});
cljs.core.logic.SubstValue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7390__auto__){var self__ = this;
var this__7390__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"v","v",1013904360),self__.v],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"doms","doms",1016993507),self__.doms],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"eset","eset",1017026895),self__.eset],null))], null),self__.__extmap));
});
cljs.core.logic.SubstValue.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7382__auto__){var self__ = this;
var this__7382__auto____$1 = this;return (3 + cljs.core.count.call(null,self__.__extmap));
});
cljs.core.logic.SubstValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7374__auto__,other__7375__auto__){var self__ = this;
var this__7374__auto____$1 = this;if(cljs.core.truth_((function (){var and__6804__auto__ = other__7375__auto__;if(cljs.core.truth_(and__6804__auto__))
{return ((this__7374__auto____$1.constructor === other__7375__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__7374__auto____$1,other__7375__auto__));
} else
{return and__6804__auto__;
}
})()))
{return true;
} else
{return false;
}
});
cljs.core.logic.SubstValue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7377__auto__,G__87112){var self__ = this;
var this__7377__auto____$1 = this;return (new cljs.core.logic.SubstValue(self__.v,self__.doms,self__.eset,G__87112,self__.__extmap,self__.__hash));
});
cljs.core.logic.SubstValue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7376__auto__){var self__ = this;
var this__7376__auto____$1 = this;return self__.__meta;
});
cljs.core.logic.SubstValue.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7387__auto__,k__7388__auto__){var self__ = this;
var this__7387__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"eset","eset",1017026895),null,new cljs.core.Keyword(null,"v","v",1013904360),null,new cljs.core.Keyword(null,"doms","doms",1016993507),null], null), null),k__7388__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7387__auto____$1),self__.__meta),k__7388__auto__);
} else
{return (new cljs.core.logic.SubstValue(self__.v,self__.doms,self__.eset,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7388__auto__)),null));
}
});
cljs.core.logic.SubstValue.cljs$lang$type = true;
cljs.core.logic.SubstValue.cljs$lang$ctorPrSeq = (function (this__7412__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.core.logic/SubstValue");
});
cljs.core.logic.SubstValue.cljs$lang$ctorPrWriter = (function (this__7412__auto__,writer__7413__auto__){return cljs.core._write.call(null,writer__7413__auto__,"cljs.core.logic/SubstValue");
});
cljs.core.logic.__GT_SubstValue = (function __GT_SubstValue(v,doms,eset){return (new cljs.core.logic.SubstValue(v,doms,eset));
});
cljs.core.logic.map__GT_SubstValue = (function map__GT_SubstValue(G__87114){return (new cljs.core.logic.SubstValue(new cljs.core.Keyword(null,"v","v",1013904360).cljs$core$IFn$_invoke$arity$1(G__87114),new cljs.core.Keyword(null,"doms","doms",1016993507).cljs$core$IFn$_invoke$arity$1(G__87114),new cljs.core.Keyword(null,"eset","eset",1017026895).cljs$core$IFn$_invoke$arity$1(G__87114),null,cljs.core.dissoc.call(null,G__87114,new cljs.core.Keyword(null,"v","v",1013904360),new cljs.core.Keyword(null,"doms","doms",1016993507),new cljs.core.Keyword(null,"eset","eset",1017026895))));
});
cljs.core.logic.subst_val_QMARK_ = (function subst_val_QMARK_(x){return (x instanceof cljs.core.logic.SubstValue);
});
cljs.core.logic.subst_val = (function() {
var subst_val = null;
var subst_val__1 = (function (x){return (new cljs.core.logic.SubstValue(x,null,null));
});
var subst_val__2 = (function (x,doms){return (new cljs.core.logic.SubstValue(x,doms,null));
});
var subst_val__3 = (function (x,doms,_meta){return cljs.core.with_meta.call(null,(new cljs.core.logic.SubstValue(x,doms,null)),_meta);
});
var subst_val__4 = (function (x,doms,eset,_meta){return cljs.core.with_meta.call(null,(new cljs.core.logic.SubstValue(x,doms,eset)),_meta);
});
subst_val = function(x,doms,eset,_meta){
switch(arguments.length){
case 1:
return subst_val__1.call(this,x);
case 2:
return subst_val__2.call(this,x,doms);
case 3:
return subst_val__3.call(this,x,doms,eset);
case 4:
return subst_val__4.call(this,x,doms,eset,_meta);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
subst_val.cljs$core$IFn$_invoke$arity$1 = subst_val__1;
subst_val.cljs$core$IFn$_invoke$arity$2 = subst_val__2;
subst_val.cljs$core$IFn$_invoke$arity$3 = subst_val__3;
subst_val.cljs$core$IFn$_invoke$arity$4 = subst_val__4;
return subst_val;
})()
;
cljs.core.logic.occurs_check = (function occurs_check(s,u,v){var v__$1 = cljs.core.logic.protocols.walk.call(null,s,v);return cljs.core.logic.protocols.occurs_check_term.call(null,v__$1,u,s);
});
cljs.core.logic.ext = (function ext(s,u,v){if(cljs.core.truth_((function (){var and__6804__auto__ = s.oc;if(cljs.core.truth_(and__6804__auto__))
{return cljs.core.logic.occurs_check.call(null,s,u,((cljs.core.logic.subst_val_QMARK_.call(null,v))?v.v:v));
} else
{return and__6804__auto__;
}
})()))
{return null;
} else
{return cljs.core.logic.protocols.ext_no_check.call(null,s,u,v);
}
});
cljs.core.logic.walk_STAR_ = (function walk_STAR_(s,v){var v__$1 = cljs.core.logic.protocols.walk.call(null,s,v);return cljs.core.logic.protocols.walk_term.call(null,v__$1,(function (x){var x__$1 = cljs.core.logic.protocols.walk.call(null,s,x);if(cljs.core.truth_(cljs.core.logic.tree_term_QMARK_.call(null,x__$1)))
{return walk_STAR_.call(null,s,x__$1);
} else
{return x__$1;
}
}));
});
cljs.core.logic.unify = (function unify(s,u,v){if((u === v))
{return s;
} else
{var u__$1 = cljs.core.logic.protocols.walk.call(null,s,u);var v__$1 = cljs.core.logic.protocols.walk.call(null,s,v);if(cljs.core.truth_((function (){var and__6804__auto__ = cljs.core.logic.lvar_QMARK_.call(null,u__$1);if(cljs.core.truth_(and__6804__auto__))
{return cljs.core._EQ_.call(null,u__$1,v__$1);
} else
{return and__6804__auto__;
}
})()))
{return s;
} else
{if(cljs.core.truth_((function (){var and__6804__auto__ = cljs.core.not.call(null,cljs.core.logic.lvar_QMARK_.call(null,u__$1));if(and__6804__auto__)
{return cljs.core.logic.lvar_QMARK_.call(null,v__$1);
} else
{return and__6804__auto__;
}
})()))
{return cljs.core.logic.protocols.unify_terms.call(null,v__$1,u__$1,s);
} else
{return cljs.core.logic.protocols.unify_terms.call(null,u__$1,v__$1,s);
}
}
}
});
cljs.core.logic.unbound_names = (function (){var r = cljs.core.range.call(null,100);return cljs.core.zipmap.call(null,r,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.symbol,cljs.core.str),cljs.core.repeat.call(null,"_"),r));
})();
cljs.core.logic.reify_lvar_name = (function reify_lvar_name(s){var c = cljs.core.count.call(null,s);if((c < 100))
{return cljs.core.logic.unbound_names.call(null,c);
} else
{return cljs.core.symbol.call(null,[cljs.core.str("_"),cljs.core.str(cljs.core.count.call(null,s))].join(''));
}
});
cljs.core.logic._reify_STAR_ = (function _reify_STAR_(s,v){var v__$1 = cljs.core.logic.protocols.walk.call(null,s,v);return cljs.core.logic.protocols.reify_term.call(null,v__$1,s);
});
cljs.core.logic._reify = (function() {
var _reify = null;
var _reify__2 = (function (s,v){var v__$1 = cljs.core.logic.walk_STAR_.call(null,s,v);return cljs.core.logic.walk_STAR_.call(null,cljs.core.logic._reify_STAR_.call(null,cljs.core.with_meta.call(null,cljs.core.logic.empty_s,cljs.core.meta.call(null,s)),v__$1),v__$1);
});
var _reify__3 = (function (s,v,r){var v__$1 = cljs.core.logic.walk_STAR_.call(null,s,v);return cljs.core.logic.walk_STAR_.call(null,cljs.core.logic._reify_STAR_.call(null,r,v__$1),v__$1);
});
_reify = function(s,v,r){
switch(arguments.length){
case 2:
return _reify__2.call(this,s,v);
case 3:
return _reify__3.call(this,s,v,r);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_reify.cljs$core$IFn$_invoke$arity$2 = _reify__2;
_reify.cljs$core$IFn$_invoke$arity$3 = _reify__3;
return _reify;
})()
;
cljs.core.logic.build = (function build(s,u){return cljs.core.logic.protocols.build_term.call(null,u,s);
});

/**
* @constructor
*/
cljs.core.logic.Substitutions = (function (s,vs,ts,cs,cq,cqs,oc,_meta){
this.s = s;
this.vs = vs;
this.ts = ts;
this.cs = cs;
this.cq = cq;
this.cqs = cqs;
this.oc = oc;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2491150;
})
cljs.core.logic.Substitutions.cljs$lang$type = true;
cljs.core.logic.Substitutions.cljs$lang$ctorStr = "cljs.core.logic/Substitutions";
cljs.core.logic.Substitutions.cljs$lang$ctorPrWriter = (function (this__7360__auto__,writer__7361__auto__,opt__7362__auto__){return cljs.core._write.call(null,writer__7361__auto__,"cljs.core.logic/Substitutions");
});
cljs.core.logic.Substitutions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){var self__ = this;
var this$__$1 = this;return cljs.core._lookup.call(null,this$__$1,k,null);
});
cljs.core.logic.Substitutions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){var self__ = this;
var this$__$1 = this;var G__87118 = k;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"oc","oc",1013907782),G__87118))
{return self__.oc;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"cqs","cqs",1014002999),G__87118))
{return self__.cqs;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"cq","cq",1013907424),G__87118))
{return self__.cq;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"cs","cs",1013907426),G__87118))
{return self__.cs;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ts","ts",1013907953),G__87118))
{return self__.ts;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"vs","vs",1013908015),G__87118))
{return self__.vs;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"s","s",1013904357),G__87118))
{return self__.s;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return not_found;
} else
{return null;
}
}
}
}
}
}
}
}
});
cljs.core.logic.Substitutions.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this$,k){var self__ = this;
var this$__$1 = this;return cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cqs","cqs",1014002999),null,new cljs.core.Keyword(null,"vs","vs",1013908015),null,new cljs.core.Keyword(null,"oc","oc",1013907782),null,new cljs.core.Keyword(null,"cq","cq",1013907424),null,new cljs.core.Keyword(null,"cs","cs",1013907426),null,new cljs.core.Keyword(null,"s","s",1013904357),null], null), null),k);
});
cljs.core.logic.Substitutions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,k,v){var self__ = this;
var this$__$1 = this;var G__87119 = k;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"oc","oc",1013907782),G__87119))
{return (new cljs.core.logic.Substitutions(self__.s,self__.vs,self__.ts,self__.cs,self__.cq,self__.cqs,v,self__._meta));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"cqs","cqs",1014002999),G__87119))
{return (new cljs.core.logic.Substitutions(self__.s,self__.vs,self__.ts,self__.cs,self__.cq,v,self__.oc,self__._meta));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"cq","cq",1013907424),G__87119))
{return (new cljs.core.logic.Substitutions(self__.s,self__.vs,self__.ts,self__.cs,v,self__.cqs,self__.oc,self__._meta));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"cs","cs",1013907426),G__87119))
{return (new cljs.core.logic.Substitutions(self__.s,self__.vs,self__.ts,v,self__.cq,self__.cqs,self__.oc,self__._meta));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ts","ts",1013907953),G__87119))
{return (new cljs.core.logic.Substitutions(self__.s,self__.vs,v,self__.cs,self__.cq,self__.cqs,self__.oc,self__._meta));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"vs","vs",1013908015),G__87119))
{return (new cljs.core.logic.Substitutions(self__.s,v,self__.ts,self__.cs,self__.cq,self__.cqs,self__.oc,self__._meta));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"s","s",1013904357),G__87119))
{return (new cljs.core.logic.Substitutions(v,self__.vs,self__.ts,self__.cs,self__.cq,self__.cqs,self__.oc,self__._meta));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.ex_info.call(null,[cljs.core.str("Substitutions has no field for key"),cljs.core.str(k)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else
{return null;
}
}
}
}
}
}
}
}
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$protocols$IMPlus$ = true;
cljs.core.logic.Substitutions.prototype.cljs$core$logic$protocols$IMPlus$mplus$arity$2 = (function (this$,f){var self__ = this;
var this$__$1 = this;return cljs.core.logic.choice.call(null,this$__$1,f);
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$protocols$IBind$ = true;
cljs.core.logic.Substitutions.prototype.cljs$core$logic$protocols$IBind$bind$arity$2 = (function (this$,g){var self__ = this;
var this$__$1 = this;return g.call(null,this$__$1);
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$protocols$ITake$ = true;
cljs.core.logic.Substitutions.prototype.cljs$core$logic$protocols$ITake$take_STAR_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return this$__$1;
});
cljs.core.logic.Substitutions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,p__87120){var self__ = this;
var vec__87121 = p__87120;var k = cljs.core.nth.call(null,vec__87121,0,null);var v = cljs.core.nth.call(null,vec__87121,1,null);var this$__$1 = this;if(cljs.core.truth_(cljs.core.logic.lvar_QMARK_.call(null,k)))
{return cljs.core.assoc.call(null,this$__$1,k,v);
} else
{throw cljs.core.ex_info.call(null,[cljs.core.str("key must be a logic var")].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});
cljs.core.logic.Substitutions.prototype.toString = (function (){var self__ = this;
var _ = this;return [cljs.core.str(self__.s)].join('');
});
cljs.core.logic.Substitutions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.count.call(null,self__.s);
});
cljs.core.logic.Substitutions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,o){var self__ = this;
var this$__$1 = this;return ((this$__$1 === o)) || (((o instanceof cljs.core.logic.Substitutions)) && (cljs.core._EQ_.call(null,self__.s,o.s)));
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$protocols$ISubstitutions$ = true;
cljs.core.logic.Substitutions.prototype.cljs$core$logic$protocols$ISubstitutions$ext_no_check$arity$3 = (function (this$,u,v){var self__ = this;
var this$__$1 = this;var u__$1 = ((cljs.core.not.call(null,cljs.core.logic.lvar_QMARK_.call(null,v)))?cljs.core.logic.assoc_meta.call(null,u,new cljs.core.Keyword("cljs.core.logic","root","cljs.core.logic/root",3673158879),true):u);return (new cljs.core.logic.Substitutions(cljs.core.assoc.call(null,self__.s,u__$1,v),(cljs.core.truth_(self__.vs)?cljs.core.conj.call(null,self__.vs,u__$1):null),self__.ts,self__.cs,self__.cq,self__.cqs,self__.oc,self__._meta));
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$protocols$ISubstitutions$walk$arity$2 = (function (this$,v){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(cljs.core.logic.bindable_QMARK_.call(null,v)))
{var lv = v;var me = cljs.core.find.call(null,self__.s,v);while(true){
if((me == null))
{return lv;
} else
{var v__$1 = cljs.core.key.call(null,me);var vp = cljs.core.val.call(null,me);if(cljs.core.not.call(null,cljs.core.logic.bindable_QMARK_.call(null,vp)))
{if(cljs.core.logic.subst_val_QMARK_.call(null,vp))
{var sv = vp.v;if(cljs.core.keyword_identical_QMARK_.call(null,sv,new cljs.core.Keyword("cljs.core.logic","unbound","cljs.core.logic/unbound",1803671316)))
{return cljs.core.with_meta.call(null,v__$1,cljs.core.assoc.call(null,cljs.core.meta.call(null,vp),new cljs.core.Keyword("cljs.core.logic","unbound","cljs.core.logic/unbound",1803671316),true));
} else
{return sv;
}
} else
{return vp;
}
} else
{{
var G__87130 = vp;
var G__87131 = cljs.core.find.call(null,self__.s,vp);
lv = G__87130;
me = G__87131;
continue;
}
}
}
break;
}
} else
{return v;
}
});
cljs.core.logic.Substitutions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,new_meta){var self__ = this;
var this$__$1 = this;return (new cljs.core.logic.Substitutions(self__.s,self__.vs,self__.ts,self__.cs,self__.cq,self__.cqs,self__.oc,new_meta));
});
cljs.core.logic.Substitutions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__._meta;
});
cljs.core.logic.Substitutions.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.logic.empty_s;
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$protocols$ISubstitutionsCLP$ = true;
cljs.core.logic.Substitutions.prototype.cljs$core$logic$protocols$ISubstitutionsCLP$root_val$arity$2 = (function (this$,v){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(cljs.core.logic.lvar_QMARK_.call(null,v)))
{var lv = v;var G__87123 = cljs.core.find.call(null,self__.s,v);var vec__87124 = G__87123;var v__$1 = cljs.core.nth.call(null,vec__87124,0,null);var vp = cljs.core.nth.call(null,vec__87124,1,null);var me = vec__87124;var lv__$1 = lv;var G__87123__$1 = G__87123;while(true){
var lv__$2 = lv__$1;var vec__87125 = G__87123__$1;var v__$2 = cljs.core.nth.call(null,vec__87125,0,null);var vp__$1 = cljs.core.nth.call(null,vec__87125,1,null);var me__$1 = vec__87125;if((me__$1 == null))
{return lv__$2;
} else
{if(cljs.core.not.call(null,cljs.core.logic.lvar_QMARK_.call(null,vp__$1)))
{return vp__$1;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__87132 = vp__$1;
var G__87133 = cljs.core.find.call(null,self__.s,vp__$1);
lv__$1 = G__87132;
G__87123__$1 = G__87133;
continue;
}
} else
{return null;
}
}
}
break;
}
} else
{return v;
}
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$protocols$ISubstitutionsCLP$root_var$arity$2 = (function (this$,v){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(cljs.core.logic.lvar_QMARK_.call(null,v)))
{if(cljs.core.truth_(new cljs.core.Keyword("cljs.core.logic","root","cljs.core.logic/root",3673158879).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v))))
{return v;
} else
{var lv = v;var G__87127 = cljs.core.find.call(null,self__.s,v);var vec__87128 = G__87127;var v__$1 = cljs.core.nth.call(null,vec__87128,0,null);var vp = cljs.core.nth.call(null,vec__87128,1,null);var me = vec__87128;var lv__$1 = lv;var G__87127__$1 = G__87127;while(true){
var lv__$2 = lv__$1;var vec__87129 = G__87127__$1;var v__$2 = cljs.core.nth.call(null,vec__87129,0,null);var vp__$1 = cljs.core.nth.call(null,vec__87129,1,null);var me__$1 = vec__87129;if((me__$1 == null))
{return lv__$2;
} else
{if(cljs.core.not.call(null,cljs.core.logic.lvar_QMARK_.call(null,vp__$1)))
{if(cljs.core.logic.subst_val_QMARK_.call(null,vp__$1))
{return cljs.core.with_meta.call(null,v__$2,cljs.core.meta.call(null,vp__$1));
} else
{return v__$2;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__87134 = vp__$1;
var G__87135 = cljs.core.find.call(null,self__.s,vp__$1);
lv__$1 = G__87134;
G__87127__$1 = G__87135;
continue;
}
} else
{return null;
}
}
}
break;
}
}
} else
{return v;
}
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$protocols$ISubstitutionsCLP$ext_run_cs$arity$3 = (function (this$,x,v){var self__ = this;
var this$__$1 = this;var x__$1 = cljs.core.logic.protocols.root_var.call(null,this$__$1,x);var xs = (cljs.core.truth_(cljs.core.logic.lvar_QMARK_.call(null,v))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,cljs.core.logic.protocols.root_var.call(null,this$__$1,v)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1], null));var s__$1 = (cljs.core.truth_(self__.oc)?cljs.core.logic.ext.call(null,this$__$1,x__$1,v):cljs.core.logic.protocols.ext_no_check.call(null,this$__$1,x__$1,v));if(cljs.core.truth_(s__$1))
{return cljs.core.logic.run_constraints_STAR_.call(null,xs,self__.cs,new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440)).call(null,s__$1);
} else
{return null;
}
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$protocols$ISubstitutionsCLP$queue$arity$2 = (function (this$,c){var self__ = this;
var this$__$1 = this;var id = cljs.core.logic.protocols.id.call(null,c);if(cljs.core.not.call(null,self__.cqs.call(null,id)))
{return cljs.core.assoc.call(null,cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"cq","cq",1013907424),cljs.core.conj.call(null,(function (){var or__6816__auto__ = self__.cq;if(cljs.core.truth_(or__6816__auto__))
{return or__6816__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),c)),new cljs.core.Keyword(null,"cqs","cqs",1014002999),cljs.core.conj.call(null,self__.cqs,id));
} else
{return this$__$1;
}
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$protocols$ISubstitutionsCLP$update_var$arity$3 = (function (this$,x,v){var self__ = this;
var this$__$1 = this;return cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"s","s",1013904357),cljs.core.assoc.call(null,this$__$1.s,x,v));
});
cljs.core.logic.__GT_Substitutions = (function __GT_Substitutions(s,vs,ts,cs,cq,cqs,oc,_meta){return (new cljs.core.logic.Substitutions(s,vs,ts,cs,cq,cqs,oc,_meta));
});
cljs.core.logic.add_attr = (function add_attr(s,x,attr,attrv){var x__$1 = cljs.core.logic.protocols.root_var.call(null,s,x);var v = cljs.core.logic.protocols.root_val.call(null,s,x__$1);if(cljs.core.logic.subst_val_QMARK_.call(null,v))
{return cljs.core.logic.protocols.update_var.call(null,s,x__$1,cljs.core.logic.assoc_meta.call(null,v,attr,attrv));
} else
{var v__$1 = (cljs.core.truth_(cljs.core.logic.lvar_QMARK_.call(null,v))?new cljs.core.Keyword("cljs.core.logic","unbound","cljs.core.logic/unbound",1803671316):v);return cljs.core.logic.protocols.ext_no_check.call(null,s,x__$1,cljs.core.with_meta.call(null,cljs.core.logic.subst_val.call(null,v__$1),new cljs.core.PersistentArrayMap.fromArray([attr,attrv], true, false)));
}
});
cljs.core.logic.rem_attr = (function rem_attr(s,x,attr){var x__$1 = cljs.core.logic.protocols.root_var.call(null,s,x);var v = cljs.core.logic.protocols.root_val.call(null,s,x__$1);if(cljs.core.logic.subst_val_QMARK_.call(null,v))
{var new_meta = cljs.core.dissoc.call(null,cljs.core.meta.call(null,v),attr);if(((cljs.core.count.call(null,new_meta) === 0)) && (cljs.core.not_EQ_.call(null,v.v,new cljs.core.Keyword("cljs.core.logic","unbound","cljs.core.logic/unbound",1803671316))))
{return cljs.core.logic.protocols.update_var.call(null,s,x__$1,v.v);
} else
{return cljs.core.logic.protocols.update_var.call(null,s,x__$1,cljs.core.with_meta.call(null,v,new_meta));
}
} else
{return s;
}
});
cljs.core.logic.get_attr = (function get_attr(s,x,attr){var v = cljs.core.logic.protocols.root_val.call(null,s,x);if(cljs.core.logic.subst_val_QMARK_.call(null,v))
{return attr.call(null,cljs.core.meta.call(null,v));
} else
{return null;
}
});
cljs.core.logic.sync_eset = (function sync_eset(s,v,seenset,f){if(cljs.core.not_EQ_.call(null,seenset,new cljs.core.Keyword("cljs.core.logic","no-prop","cljs.core.logic/no-prop",1476398058)))
{return cljs.core.reduce.call(null,(function (s__$1,y){var y__$1 = cljs.core.logic.protocols.root_var.call(null,s__$1,y);if(!(cljs.core.contains_QMARK_.call(null,seenset,y__$1)))
{return f.call(null,s__$1,y__$1);
} else
{return s__$1;
}
}),s,v.eset);
} else
{return s;
}
});
cljs.core.logic.add_dom = (function() {
var add_dom = null;
var add_dom__4 = (function (s,x,dom,domv){var x__$1 = cljs.core.logic.protocols.root_var.call(null,s,x);return add_dom.call(null,s,x__$1,dom,domv,null);
});
var add_dom__5 = (function (s,x,dom,domv,seenset){var v = cljs.core.logic.protocols.root_val.call(null,s,x);var s__$1 = ((cljs.core.logic.subst_val_QMARK_.call(null,v))?cljs.core.logic.protocols.update_var.call(null,s,x,cljs.core.logic.assoc_dom.call(null,v,dom,domv)):(function (){var v__$1 = (cljs.core.truth_(cljs.core.logic.lvar_QMARK_.call(null,v))?new cljs.core.Keyword("cljs.core.logic","unbound","cljs.core.logic/unbound",1803671316):v);return cljs.core.logic.protocols.ext_no_check.call(null,s,x,cljs.core.logic.subst_val.call(null,v__$1,new cljs.core.PersistentArrayMap.fromArray([dom,domv], true, false)));
})());return cljs.core.logic.sync_eset.call(null,s__$1,v,seenset,(function (s__$2,y){return add_dom.call(null,s__$2,y,dom,domv,cljs.core.conj.call(null,(function (){var or__6816__auto__ = seenset;if(cljs.core.truth_(or__6816__auto__))
{return or__6816__auto__;
} else
{return cljs.core.PersistentHashSet.EMPTY;
}
})(),x));
}));
});
add_dom = function(s,x,dom,domv,seenset){
switch(arguments.length){
case 4:
return add_dom__4.call(this,s,x,dom,domv);
case 5:
return add_dom__5.call(this,s,x,dom,domv,seenset);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_dom.cljs$core$IFn$_invoke$arity$4 = add_dom__4;
add_dom.cljs$core$IFn$_invoke$arity$5 = add_dom__5;
return add_dom;
})()
;
cljs.core.logic.update_dom = (function() {
var update_dom = null;
var update_dom__4 = (function (s,x,dom,f){var x__$1 = cljs.core.logic.protocols.root_var.call(null,s,x);return update_dom.call(null,s,x__$1,dom,f,null);
});
var update_dom__5 = (function (s,x,dom,f,seenset){var v = cljs.core.logic.protocols.root_val.call(null,s,x);var v__$1 = (cljs.core.truth_(cljs.core.logic.lvar_QMARK_.call(null,v))?cljs.core.logic.subst_val.call(null,new cljs.core.Keyword("cljs.core.logic","unbound","cljs.core.logic/unbound",1803671316)):v);var doms = v__$1.doms;var s__$1 = cljs.core.logic.protocols.update_var.call(null,s,x,cljs.core.logic.assoc_dom.call(null,v__$1,dom,f.call(null,cljs.core.get.call(null,doms,dom))));return cljs.core.logic.sync_eset.call(null,s__$1,v__$1,seenset,(function (s__$2,y){return update_dom.call(null,s__$2,y,dom,f,cljs.core.conj.call(null,(function (){var or__6816__auto__ = seenset;if(cljs.core.truth_(or__6816__auto__))
{return or__6816__auto__;
} else
{return cljs.core.PersistentHashSet.EMPTY;
}
})(),x));
}));
});
update_dom = function(s,x,dom,f,seenset){
switch(arguments.length){
case 4:
return update_dom__4.call(this,s,x,dom,f);
case 5:
return update_dom__5.call(this,s,x,dom,f,seenset);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_dom.cljs$core$IFn$_invoke$arity$4 = update_dom__4;
update_dom.cljs$core$IFn$_invoke$arity$5 = update_dom__5;
return update_dom;
})()
;
cljs.core.logic.rem_dom = (function() {
var rem_dom = null;
var rem_dom__3 = (function (s,x,dom){var x__$1 = cljs.core.logic.protocols.root_var.call(null,s,x);return rem_dom.call(null,s,x__$1,dom,null);
});
var rem_dom__4 = (function (s,x,dom,seenset){var v = cljs.core.logic.protocols.root_val.call(null,s,x);var s__$1 = ((cljs.core.logic.subst_val_QMARK_.call(null,v))?(function (){var new_doms = cljs.core.dissoc.call(null,v.doms,dom);if(((cljs.core.count.call(null,new_doms) === 0)) && (cljs.core.not_EQ_.call(null,v.v,new cljs.core.Keyword("cljs.core.logic","unbound","cljs.core.logic/unbound",1803671316))))
{return cljs.core.logic.protocols.update_var.call(null,s,x,v.v);
} else
{return cljs.core.logic.protocols.update_var.call(null,s,x,cljs.core.assoc.call(null,v,new cljs.core.Keyword(null,"doms","doms",1016993507),new_doms));
}
})():s);return cljs.core.logic.sync_eset.call(null,s__$1,v,seenset,(function (s__$2,y){return rem_dom.call(null,s__$2,y,dom,cljs.core.conj.call(null,(function (){var or__6816__auto__ = seenset;if(cljs.core.truth_(or__6816__auto__))
{return or__6816__auto__;
} else
{return cljs.core.PersistentHashSet.EMPTY;
}
})(),x));
}));
});
rem_dom = function(s,x,dom,seenset){
switch(arguments.length){
case 3:
return rem_dom__3.call(this,s,x,dom);
case 4:
return rem_dom__4.call(this,s,x,dom,seenset);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rem_dom.cljs$core$IFn$_invoke$arity$3 = rem_dom__3;
rem_dom.cljs$core$IFn$_invoke$arity$4 = rem_dom__4;
return rem_dom;
})()
;
cljs.core.logic.get_dom = (function get_dom(s,x,dom){var v = cljs.core.logic.protocols.root_val.call(null,s,x);if(cljs.core.logic.subst_val_QMARK_.call(null,v))
{var v_SINGLEQUOTE_ = v.v;if(cljs.core.not_EQ_.call(null,v_SINGLEQUOTE_,new cljs.core.Keyword("cljs.core.logic","unbound","cljs.core.logic/unbound",1803671316)))
{return v_SINGLEQUOTE_;
} else
{return dom.call(null,new cljs.core.Keyword(null,"doms","doms",1016993507).cljs$core$IFn$_invoke$arity$1(v));
}
} else
{if(cljs.core.not.call(null,cljs.core.logic.lvar_QMARK_.call(null,v)))
{return v;
} else
{return null;
}
}
});
cljs.core.logic.make_s = (function() {
var make_s = null;
var make_s__0 = (function (){return make_s.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
var make_s__1 = (function (m){return make_s.call(null,m,cljs.core.logic.make_cs.call(null));
});
var make_s__2 = (function (m,cs){return (new cljs.core.logic.Substitutions(m,null,null,cs,null,cljs.core.PersistentHashSet.EMPTY,true,null));
});
make_s = function(m,cs){
switch(arguments.length){
case 0:
return make_s__0.call(this);
case 1:
return make_s__1.call(this,m);
case 2:
return make_s__2.call(this,m,cs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
make_s.cljs$core$IFn$_invoke$arity$0 = make_s__0;
make_s.cljs$core$IFn$_invoke$arity$1 = make_s__1;
make_s.cljs$core$IFn$_invoke$arity$2 = make_s__2;
return make_s;
})()
;
cljs.core.logic.tabled_s = (function() {
var tabled_s = null;
var tabled_s__0 = (function (){return tabled_s.call(null,false);
});
var tabled_s__1 = (function (oc){return tabled_s.call(null,oc,null);
});
var tabled_s__2 = (function (oc,meta){return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.with_meta.call(null,cljs.core.logic.make_s.call(null),meta),new cljs.core.Keyword(null,"oc","oc",1013907782),oc),new cljs.core.Keyword(null,"ts","ts",1013907953),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY));
});
tabled_s = function(oc,meta){
switch(arguments.length){
case 0:
return tabled_s__0.call(this);
case 1:
return tabled_s__1.call(this,oc);
case 2:
return tabled_s__2.call(this,oc,meta);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tabled_s.cljs$core$IFn$_invoke$arity$0 = tabled_s__0;
tabled_s.cljs$core$IFn$_invoke$arity$1 = tabled_s__1;
tabled_s.cljs$core$IFn$_invoke$arity$2 = tabled_s__2;
return tabled_s;
})()
;
cljs.core.logic.empty_s = cljs.core.logic.make_s.call(null);
cljs.core.logic.empty_f = (function empty_f(){return null;
});
cljs.core.logic.subst_QMARK_ = (function subst_QMARK_(x){return (x instanceof cljs.core.logic.Substitutions);
});
cljs.core.logic.to_s = (function to_s(v){var s = cljs.core.reduce.call(null,(function (m,p__87138){var vec__87139 = p__87138;var k = cljs.core.nth.call(null,vec__87139,0,null);var v__$1 = cljs.core.nth.call(null,vec__87139,1,null);return cljs.core.assoc.call(null,m,k,v__$1);
}),cljs.core.PersistentArrayMap.EMPTY,v);return cljs.core.logic.make_s.call(null,s,cljs.core.logic.make_cs.call(null));
});
cljs.core.logic.annotate = (function annotate(k,v){return (function (a){return cljs.core.vary_meta.call(null,a,cljs.core.assoc,k,v);
});
});
cljs.core.logic.merge_doms = (function merge_doms(s,x,doms){var xdoms = cljs.core.logic.protocols.root_val.call(null,s,x).doms;var doms__$1 = cljs.core.seq.call(null,doms);var s__$1 = s;while(true){
if(doms__$1)
{var vec__87141 = cljs.core.first.call(null,doms__$1);var dom = cljs.core.nth.call(null,vec__87141,0,null);var domv = cljs.core.nth.call(null,vec__87141,1,null);var xdomv = cljs.core.get.call(null,xdoms,dom,new cljs.core.Keyword("cljs.core.logic","not-found","cljs.core.logic/not-found",3358757009));var ndomv = ((cljs.core.keyword_identical_QMARK_.call(null,xdomv,new cljs.core.Keyword("cljs.core.logic","not-found","cljs.core.logic/not-found",3358757009)))?domv:cljs.core.logic.protocols._merge_doms.call(null,domv,xdomv));if(cljs.core.truth_(ndomv))
{{
var G__87142 = cljs.core.next.call(null,doms__$1);
var G__87143 = cljs.core.logic.add_dom.call(null,s__$1,x,dom,ndomv,cljs.core.PersistentHashSet.EMPTY);
doms__$1 = G__87142;
s__$1 = G__87143;
continue;
}
} else
{return null;
}
} else
{return s__$1;
}
break;
}
});
cljs.core.logic.update_eset = (function update_eset(s,doms,eset){var eset__$1 = cljs.core.seq.call(null,eset);var s__$1 = s;while(true){
if(eset__$1)
{var temp__4098__auto__ = cljs.core.logic.merge_doms.call(null,s__$1,cljs.core.logic.protocols.root_var.call(null,s__$1,cljs.core.first.call(null,eset__$1)),doms);if(cljs.core.truth_(temp__4098__auto__))
{var s__$2 = temp__4098__auto__;{
var G__87144 = cljs.core.next.call(null,eset__$1);
var G__87145 = s__$2;
eset__$1 = G__87144;
s__$1 = G__87145;
continue;
}
} else
{return null;
}
} else
{return s__$1;
}
break;
}
});
cljs.core.logic.merge_with_root = (function merge_with_root(s,x,root){var xv = cljs.core.logic.protocols.root_val.call(null,s,x);var rootv = cljs.core.logic.protocols.root_val.call(null,s,root);var eset = clojure.set.union.call(null,rootv.eset,xv.eset);var doms = (function (){var xd = cljs.core.seq.call(null,xv.doms);var rd = rootv.doms;var r = cljs.core.PersistentArrayMap.EMPTY;while(true){
if(xd)
{var vec__87148 = cljs.core.first.call(null,xd);var xk = cljs.core.nth.call(null,vec__87148,0,null);var xv__$1 = cljs.core.nth.call(null,vec__87148,1,null);var temp__4096__auto__ = cljs.core.find.call(null,rd,xk);if(cljs.core.truth_(temp__4096__auto__))
{var vec__87149 = temp__4096__auto__;var _ = cljs.core.nth.call(null,vec__87149,0,null);var rv = cljs.core.nth.call(null,vec__87149,1,null);var nd = cljs.core.logic.protocols._merge_doms.call(null,xv__$1,rv);if(cljs.core.truth_(nd))
{{
var G__87150 = cljs.core.next.call(null,xd);
var G__87151 = cljs.core.dissoc.call(null,rd,xk);
var G__87152 = cljs.core.assoc.call(null,r,xk,nd);
xd = G__87150;
rd = G__87151;
r = G__87152;
continue;
}
} else
{return null;
}
} else
{{
var G__87153 = cljs.core.next.call(null,xd);
var G__87154 = rd;
var G__87155 = cljs.core.assoc.call(null,r,xk,xv__$1);
xd = G__87153;
rd = G__87154;
r = G__87155;
continue;
}
}
} else
{return cljs.core.merge.call(null,r,rd);
}
break;
}
})();var nv = (cljs.core.truth_(doms)?cljs.core.logic.subst_val.call(null,rootv.v,doms,eset,cljs.core.merge.call(null,cljs.core.meta.call(null,xv),cljs.core.meta.call(null,rootv))):null);if(cljs.core.truth_(nv))
{return cljs.core.logic.update_eset.call(null,cljs.core.logic.protocols.ext_no_check.call(null,s,root,nv),doms,eset);
} else
{return null;
}
});
cljs.core.logic.to_subst_val = (function to_subst_val(v){if(cljs.core.logic.subst_val_QMARK_.call(null,v))
{return v;
} else
{return cljs.core.logic.subst_val.call(null,new cljs.core.Keyword("cljs.core.logic","unbound","cljs.core.logic/unbound",1803671316));
}
});
cljs.core.logic.entangle = (function entangle(s,x,y){var x__$1 = cljs.core.logic.protocols.root_var.call(null,s,x);var y__$1 = cljs.core.logic.protocols.root_var.call(null,s,y);var xv = cljs.core.logic.to_subst_val.call(null,cljs.core.logic.protocols.root_val.call(null,s,x__$1));var yv = cljs.core.logic.to_subst_val.call(null,cljs.core.logic.protocols.root_val.call(null,s,y__$1));return cljs.core.logic.protocols.update_var.call(null,cljs.core.logic.protocols.update_var.call(null,s,x__$1,cljs.core.assoc.call(null,xv,new cljs.core.Keyword(null,"eset","eset",1017026895),cljs.core.conj.call(null,(function (){var or__6816__auto__ = xv.eset;if(cljs.core.truth_(or__6816__auto__))
{return or__6816__auto__;
} else
{return cljs.core.PersistentHashSet.EMPTY;
}
})(),y__$1))),y__$1,cljs.core.assoc.call(null,yv,new cljs.core.Keyword(null,"eset","eset",1017026895),cljs.core.conj.call(null,(function (){var or__6816__auto__ = yv.eset;if(cljs.core.truth_(or__6816__auto__))
{return or__6816__auto__;
} else
{return cljs.core.PersistentHashSet.EMPTY;
}
})(),x__$1)));
});

/**
* @constructor
*/
cljs.core.logic.LVar = (function (id,unique,name,oname,hash,meta){
this.id = id;
this.unique = unique;
this.name = name;
this.oname = oname;
this.hash = hash;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2154168576;
})
cljs.core.logic.LVar.cljs$lang$type = true;
cljs.core.logic.LVar.cljs$lang$ctorStr = "cljs.core.logic/LVar";
cljs.core.logic.LVar.cljs$lang$ctorPrWriter = (function (this__7360__auto__,writer__7361__auto__,opt__7362__auto__){return cljs.core._write.call(null,writer__7361__auto__,"cljs.core.logic/LVar");
});
cljs.core.logic.LVar.prototype.cljs$core$logic$protocols$IReifyTerm$ = true;
cljs.core.logic.LVar.prototype.cljs$core$logic$protocols$IReifyTerm$reify_term$arity$2 = (function (v,s){var self__ = this;
var v__$1 = this;var rf = new cljs.core.Keyword(null,"reify-vars","reify-vars",4368745730).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,s));if(cljs.core.fn_QMARK_.call(null,rf))
{return rf.call(null,v__$1,s);
} else
{if(cljs.core.truth_(rf))
{return cljs.core.logic.ext.call(null,s,v__$1,cljs.core.logic.reify_lvar_name.call(null,s));
} else
{return cljs.core.logic.ext.call(null,s,v__$1,v__$1.oname);
}
}
});
cljs.core.logic.LVar.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.hash;
});
cljs.core.logic.LVar.prototype.cljs$core$logic$protocols$IUnifyTerms$ = true;
cljs.core.logic.LVar.prototype.cljs$core$logic$protocols$IUnifyTerms$unify_terms$arity$3 = (function (u,v,s){var self__ = this;
var u__$1 = this;if(cljs.core.truth_(cljs.core.logic.lvar_QMARK_.call(null,v)))
{var repoint = (cljs.core.truth_(new cljs.core.Keyword("cljs.core.logic","unbound","cljs.core.logic/unbound",1803671316).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,u__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [u__$1,v], null):(cljs.core.truth_(new cljs.core.Keyword("cljs.core.logic","unbound","cljs.core.logic/unbound",1803671316).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,u__$1], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)));if(cljs.core.truth_(repoint))
{var vec__87156 = repoint;var root = cljs.core.nth.call(null,vec__87156,0,null);var other = cljs.core.nth.call(null,vec__87156,1,null);var s__$1 = cljs.core.assoc.call(null,s,new cljs.core.Keyword(null,"cs","cs",1013907426),cljs.core.logic.protocols.migrate.call(null,s.cs,other,root));var s__$2 = (cljs.core.truth_(new cljs.core.Keyword("cljs.core.logic","unbound","cljs.core.logic/unbound",1803671316).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,other)))?cljs.core.logic.merge_with_root.call(null,s__$1,other,root):s__$1);if(cljs.core.truth_(s__$2))
{return cljs.core.logic.protocols.ext_no_check.call(null,s__$2,other,root);
} else
{return null;
}
} else
{return cljs.core.logic.protocols.ext_no_check.call(null,s,u__$1,v);
}
} else
{if(cljs.core.logic.protocols.non_storable_QMARK_.call(null,v))
{throw cljs.core.ex_info.call(null,[cljs.core.str(v),cljs.core.str(" is non-storable")].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else
{if(cljs.core.not_EQ_.call(null,v,new cljs.core.Keyword("cljs.core.logic","not-found","cljs.core.logic/not-found",3358757009)))
{if(cljs.core.truth_(cljs.core.logic.tree_term_QMARK_.call(null,v)))
{return cljs.core.logic.ext.call(null,s,u__$1,v);
} else
{if(cljs.core.truth_(new cljs.core.Keyword("cljs.core.logic","unbound","cljs.core.logic/unbound",1803671316).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,u__$1))))
{return cljs.core.logic.protocols.ext_no_check.call(null,s,u__$1,cljs.core.assoc.call(null,cljs.core.logic.protocols.root_val.call(null,s,u__$1),new cljs.core.Keyword(null,"v","v",1013904360),v));
} else
{return cljs.core.logic.protocols.ext_no_check.call(null,s,u__$1,v);
}
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return null;
} else
{return null;
}
}
}
}
});
cljs.core.logic.LVar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){var self__ = this;
var this$__$1 = this;return cljs.core._lookup.call(null,this$__$1,k,null);
});
cljs.core.logic.LVar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){var self__ = this;
var this$__$1 = this;var G__87157 = k;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597),G__87157))
{return self__.id;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"oname","oname",1119788780),G__87157))
{return self__.oname;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1017277949),G__87157))
{return self__.name;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return not_found;
} else
{return null;
}
}
}
}
});
cljs.core.logic.LVar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (x,writer,opts){var self__ = this;
var x__$1 = this;return cljs.core._write.call(null,writer,[cljs.core.str("<lvar:"),cljs.core.str(x__$1.name),cljs.core.str(">")].join(''));
});
cljs.core.logic.LVar.prototype.cljs$core$logic$protocols$IWalkTerm$ = true;
cljs.core.logic.LVar.prototype.cljs$core$logic$protocols$IWalkTerm$walk_term$arity$2 = (function (v,f){var self__ = this;
var v__$1 = this;return f.call(null,v__$1);
});
cljs.core.logic.LVar.prototype.toString = (function (){var self__ = this;
var _ = this;return [cljs.core.str("<lvar:"),cljs.core.str(self__.name),cljs.core.str(">")].join('');
});
cljs.core.logic.LVar.prototype.cljs$core$logic$protocols$IVar$ = true;
cljs.core.logic.LVar.prototype.cljs$core$logic$protocols$IOccursCheckTerm$ = true;
cljs.core.logic.LVar.prototype.cljs$core$logic$protocols$IOccursCheckTerm$occurs_check_term$arity$3 = (function (v,x,s){var self__ = this;
var v__$1 = this;return cljs.core._EQ_.call(null,cljs.core.logic.protocols.walk.call(null,s,v__$1),x);
});
cljs.core.logic.LVar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,o){var self__ = this;
var this$__$1 = this;if((function (){var G__87158 = o;if(G__87158)
{var bit__7442__auto__ = null;if(cljs.core.truth_((function (){var or__6816__auto__ = bit__7442__auto__;if(cljs.core.truth_(or__6816__auto__))
{return or__6816__auto__;
} else
{return G__87158.cljs$core$logic$protocols$IVar$;
}
})()))
{return true;
} else
{if((!G__87158.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.logic.protocols.IVar,G__87158);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.logic.protocols.IVar,G__87158);
}
})())
{if(cljs.core.truth_(self__.unique))
{return (self__.id === o.id);
} else
{return (self__.name === o.name);
}
} else
{return false;
}
});
cljs.core.logic.LVar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,new_meta){var self__ = this;
var this$__$1 = this;return (new cljs.core.logic.LVar(self__.id,self__.unique,self__.name,self__.oname,self__.hash,new_meta));
});
cljs.core.logic.LVar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.meta;
});
cljs.core.logic.LVar.prototype.cljs$core$logic$protocols$IBuildTerm$ = true;
cljs.core.logic.LVar.prototype.cljs$core$logic$protocols$IBuildTerm$build_term$arity$2 = (function (u,s){var self__ = this;
var u__$1 = this;var m = s.s;var cs = s.cs;var lv = (new cljs.core.logic.LVar(87159,true,"ignore__87159",new cljs.core.Symbol(null,"ignore","ignore",1464039307,null),459240772,null));if(cljs.core.contains_QMARK_.call(null,m,u__$1))
{return s;
} else
{return cljs.core.logic.make_s.call(null,cljs.core.assoc.call(null,m,u__$1,lv),cs);
}
});
cljs.core.logic.__GT_LVar = (function __GT_LVar(id,unique,name,oname,hash,meta){return (new cljs.core.logic.LVar(id,unique,name,oname,hash,meta));
});
cljs.core.logic.lvar_QMARK_ = (function lvar_QMARK_(x){var G__87161 = x;if(G__87161)
{var bit__7442__auto__ = null;if(cljs.core.truth_((function (){var or__6816__auto__ = bit__7442__auto__;if(cljs.core.truth_(or__6816__auto__))
{return or__6816__auto__;
} else
{return G__87161.cljs$core$logic$protocols$IVar$;
}
})()))
{return true;
} else
{if((!G__87161.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.logic.protocols.IVar,G__87161);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.logic.protocols.IVar,G__87161);
}
});
cljs.core.logic.lvars = (function lvars(n){return cljs.core.repeatedly.call(null,n,(function (){return (new cljs.core.logic.LVar(87163,true,"87163",null,53404495,null));
}));
});
cljs.core.logic.bindable_QMARK_ = (function bindable_QMARK_(x){var or__6816__auto__ = cljs.core.logic.lvar_QMARK_.call(null,x);if(or__6816__auto__)
{return or__6816__auto__;
} else
{var G__87167 = x;if(G__87167)
{var bit__7442__auto__ = null;if(cljs.core.truth_((function (){var or__6816__auto____$1 = bit__7442__auto__;if(cljs.core.truth_(or__6816__auto____$1))
{return or__6816__auto____$1;
} else
{return G__87167.cljs$core$logic$protocols$IBindable$;
}
})()))
{return true;
} else
{if((!G__87167.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.logic.protocols.IBindable,G__87167);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.logic.protocols.IBindable,G__87167);
}
}
});

/**
* @constructor
*/
cljs.core.logic.LCons = (function (a,d,cache,meta){
this.a = a;
this.d = d;
this.cache = cache;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2154168320;
})
cljs.core.logic.LCons.cljs$lang$type = true;
cljs.core.logic.LCons.cljs$lang$ctorStr = "cljs.core.logic/LCons";
cljs.core.logic.LCons.cljs$lang$ctorPrWriter = (function (this__7360__auto__,writer__7361__auto__,opt__7362__auto__){return cljs.core._write.call(null,writer__7361__auto__,"cljs.core.logic/LCons");
});
cljs.core.logic.LCons.prototype.cljs$core$logic$protocols$IReifyTerm$ = true;
cljs.core.logic.LCons.prototype.cljs$core$logic$protocols$IReifyTerm$reify_term$arity$2 = (function (v,s){var self__ = this;
var v__$1 = this;var v__$2 = v__$1;var s__$1 = s;while(true){
if(cljs.core.truth_(cljs.core.logic.lcons_QMARK_.call(null,v__$2)))
{{
var G__87168 = cljs.core.logic.protocols.lnext.call(null,v__$2);
var G__87169 = cljs.core.logic._reify_STAR_.call(null,s__$1,cljs.core.logic.protocols.lfirst.call(null,v__$2));
v__$2 = G__87168;
s__$1 = G__87169;
continue;
}
} else
{return cljs.core.logic._reify_STAR_.call(null,s__$1,v__$2);
}
break;
}
});
cljs.core.logic.LCons.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if((self__.cache === -1))
{self__.cache = (((31 | 0) * cljs.core.hash.call(null,self__.d)) + cljs.core.hash.call(null,self__.a));
return self__.cache;
} else
{return self__.cache;
}
});
cljs.core.logic.LCons.prototype.cljs$core$logic$protocols$IUnifyTerms$ = true;
cljs.core.logic.LCons.prototype.cljs$core$logic$protocols$IUnifyTerms$unify_terms$arity$3 = (function (u,v,s){var self__ = this;
var u__$1 = this;if(cljs.core.sequential_QMARK_.call(null,v))
{var u__$2 = u__$1;var v__$1 = cljs.core.seq.call(null,v);var s__$1 = s;while(true){
if(!((v__$1 == null)))
{if(cljs.core.truth_(cljs.core.logic.lcons_QMARK_.call(null,u__$2)))
{var temp__4096__auto__ = cljs.core.logic.unify.call(null,s__$1,cljs.core.logic.protocols.lfirst.call(null,u__$2),cljs.core.first.call(null,v__$1));if(cljs.core.truth_(temp__4096__auto__))
{var s__$2 = temp__4096__auto__;{
var G__87170 = cljs.core.logic.protocols.lnext.call(null,u__$2);
var G__87171 = cljs.core.next.call(null,v__$1);
var G__87172 = s__$2;
u__$2 = G__87170;
v__$1 = G__87171;
s__$1 = G__87172;
continue;
}
} else
{return null;
}
} else
{return cljs.core.logic.unify.call(null,s__$1,u__$2,v__$1);
}
} else
{if(cljs.core.logic.lvar_QMARK_.call(null,u__$2))
{var temp__4096__auto__ = cljs.core.logic.unify.call(null,s__$1,u__$2,cljs.core.List.EMPTY);if(cljs.core.truth_(temp__4096__auto__))
{var s__$2 = temp__4096__auto__;return s__$2;
} else
{return cljs.core.logic.unify.call(null,s__$1,u__$2,null);
}
} else
{return null;
}
}
break;
}
} else
{if(cljs.core.truth_(cljs.core.logic.lcons_QMARK_.call(null,v)))
{var u__$2 = u__$1;var v__$1 = v;var s__$1 = s;while(true){
if(cljs.core.logic.lvar_QMARK_.call(null,u__$2))
{return cljs.core.logic.unify.call(null,s__$1,u__$2,v__$1);
} else
{if(cljs.core.logic.lvar_QMARK_.call(null,v__$1))
{return cljs.core.logic.unify.call(null,s__$1,v__$1,u__$2);
} else
{if(cljs.core.truth_((function (){var and__6804__auto__ = cljs.core.logic.lcons_QMARK_.call(null,u__$2);if(cljs.core.truth_(and__6804__auto__))
{return cljs.core.logic.lcons_QMARK_.call(null,v__$1);
} else
{return and__6804__auto__;
}
})()))
{var temp__4096__auto__ = cljs.core.logic.unify.call(null,s__$1,cljs.core.logic.protocols.lfirst.call(null,u__$2),cljs.core.logic.protocols.lfirst.call(null,v__$1));if(cljs.core.truth_(temp__4096__auto__))
{var s__$2 = temp__4096__auto__;{
var G__87173 = cljs.core.logic.protocols.lnext.call(null,u__$2);
var G__87174 = cljs.core.logic.protocols.lnext.call(null,v__$1);
var G__87175 = s__$2;
u__$2 = G__87173;
v__$1 = G__87174;
s__$1 = G__87175;
continue;
}
} else
{return null;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.logic.unify.call(null,s__$1,u__$2,v__$1);
} else
{return null;
}
}
}
}
break;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return null;
} else
{return null;
}
}
}
});
cljs.core.logic.LCons.prototype.cljs$core$logic$protocols$LConsSeq$ = true;
cljs.core.logic.LCons.prototype.cljs$core$logic$protocols$LConsSeq$lfirst$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.a;
});
cljs.core.logic.LCons.prototype.cljs$core$logic$protocols$LConsSeq$lnext$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.d;
});
cljs.core.logic.LCons.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (x,writer,opts){var self__ = this;
var x__$1 = this;return cljs.core._write.call(null,writer,[cljs.core.str(x__$1)].join(''));
});
cljs.core.logic.LCons.prototype.cljs$core$logic$protocols$IWalkTerm$ = true;
cljs.core.logic.LCons.prototype.cljs$core$logic$protocols$IWalkTerm$walk_term$arity$2 = (function (v,f){var self__ = this;
var v__$1 = this;return cljs.core.logic.lcons.call(null,f.call(null,cljs.core.logic.protocols.lfirst.call(null,v__$1)),f.call(null,cljs.core.logic.protocols.lnext.call(null,v__$1)));
});
cljs.core.logic.LCons.prototype.toString = (function (){var self__ = this;
var this$ = this;if((self__.d instanceof cljs.core.logic.LCons))
{return [cljs.core.str("("),cljs.core.str(self__.a),cljs.core.str(" "),cljs.core.str(cljs.core.logic.protocols.toShortString.call(null,self__.d)),cljs.core.str(")")].join('');
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return [cljs.core.str("("),cljs.core.str(self__.a),cljs.core.str(" . "),cljs.core.str(self__.d),cljs.core.str(")")].join('');
} else
{return null;
}
}
});
cljs.core.logic.LCons.prototype.cljs$core$logic$protocols$LConsPrint$ = true;
cljs.core.logic.LCons.prototype.cljs$core$logic$protocols$LConsPrint$toShortString$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if((self__.d instanceof cljs.core.logic.LCons))
{return [cljs.core.str(self__.a),cljs.core.str(" "),cljs.core.str(cljs.core.logic.protocols.toShortString.call(null,self__.d))].join('');
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return [cljs.core.str(self__.a),cljs.core.str(" . "),cljs.core.str(self__.d)].join('');
} else
{return null;
}
}
});
cljs.core.logic.LCons.prototype.cljs$core$logic$protocols$ITreeTerm$ = true;
cljs.core.logic.LCons.prototype.cljs$core$logic$protocols$IOccursCheckTerm$ = true;
cljs.core.logic.LCons.prototype.cljs$core$logic$protocols$IOccursCheckTerm$occurs_check_term$arity$3 = (function (v,x,s){var self__ = this;
var v__$1 = this;var v__$2 = v__$1;var x__$1 = x;var s__$1 = s;while(true){
if(cljs.core.truth_(cljs.core.logic.lcons_QMARK_.call(null,v__$2)))
{var or__6816__auto__ = cljs.core.logic.occurs_check.call(null,s__$1,x__$1,cljs.core.logic.protocols.lfirst.call(null,v__$2));if(cljs.core.truth_(or__6816__auto__))
{return or__6816__auto__;
} else
{{
var G__87176 = cljs.core.logic.protocols.lnext.call(null,v__$2);
var G__87177 = x__$1;
var G__87178 = s__$1;
v__$2 = G__87176;
x__$1 = G__87177;
s__$1 = G__87178;
continue;
}
}
} else
{return cljs.core.logic.occurs_check.call(null,s__$1,x__$1,v__$2);
}
break;
}
});
cljs.core.logic.LCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,o){var self__ = this;
var this$__$1 = this;var or__6816__auto__ = (this$__$1 === o);if(or__6816__auto__)
{return or__6816__auto__;
} else
{var and__6804__auto__ = (o instanceof cljs.core.logic.LCons);if(and__6804__auto__)
{var me = this$__$1;var you = o;while(true){
if((me == null))
{return (you == null);
} else
{if(cljs.core.logic.lvar_QMARK_.call(null,me))
{return true;
} else
{if(cljs.core.logic.lvar_QMARK_.call(null,you))
{return true;
} else
{if(cljs.core.truth_((function (){var and__6804__auto____$1 = cljs.core.logic.lcons_QMARK_.call(null,me);if(cljs.core.truth_(and__6804__auto____$1))
{return cljs.core.logic.lcons_QMARK_.call(null,you);
} else
{return and__6804__auto____$1;
}
})()))
{var mef = cljs.core.logic.protocols.lfirst.call(null,me);var youf = cljs.core.logic.protocols.lfirst.call(null,you);var and__6804__auto____$1 = (cljs.core._EQ_.call(null,mef,youf)) || (cljs.core.logic.lvar_QMARK_.call(null,mef)) || (cljs.core.logic.lvar_QMARK_.call(null,youf));if(and__6804__auto____$1)
{{
var G__87179 = cljs.core.logic.protocols.lnext.call(null,me);
var G__87180 = cljs.core.logic.protocols.lnext.call(null,you);
me = G__87179;
you = G__87180;
continue;
}
} else
{return and__6804__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core._EQ_.call(null,me,you);
} else
{return null;
}
}
}
}
}
break;
}
} else
{return and__6804__auto__;
}
}
});
cljs.core.logic.LCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,new_meta){var self__ = this;
var this$__$1 = this;return (new cljs.core.logic.LCons(self__.a,self__.d,self__.cache,new_meta));
});
cljs.core.logic.LCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.meta;
});
cljs.core.logic.LCons.prototype.cljs$core$logic$protocols$IBuildTerm$ = true;
cljs.core.logic.LCons.prototype.cljs$core$logic$protocols$IBuildTerm$build_term$arity$2 = (function (u,s){var self__ = this;
var u__$1 = this;var u__$2 = u__$1;var s__$1 = s;while(true){
if(cljs.core.truth_(cljs.core.logic.lcons_QMARK_.call(null,u__$2)))
{{
var G__87181 = cljs.core.logic.protocols.lnext.call(null,u__$2);
var G__87182 = cljs.core.logic.build.call(null,s__$1,cljs.core.logic.protocols.lfirst.call(null,u__$2));
u__$2 = G__87181;
s__$1 = G__87182;
continue;
}
} else
{return cljs.core.logic.build.call(null,s__$1,u__$2);
}
break;
}
});
cljs.core.logic.__GT_LCons = (function __GT_LCons(a,d,cache,meta){return (new cljs.core.logic.LCons(a,d,cache,meta));
});
/**
* Constructs a sequence a with an improper tail d if d is a logic variable.
*/
cljs.core.logic.lcons = (function lcons(a,d){if((cljs.core.coll_QMARK_.call(null,d)) || ((d == null)))
{return cljs.core.cons.call(null,a,cljs.core.seq.call(null,d));
} else
{return (new cljs.core.logic.LCons(a,d,-1,null));
}
});
cljs.core.logic.lcons_QMARK_ = (function lcons_QMARK_(x){return (x instanceof cljs.core.logic.LCons);
});
cljs.core.logic.tree_term_QMARK_ = (function tree_term_QMARK_(x){var or__6816__auto__ = cljs.core.coll_QMARK_.call(null,x);if(or__6816__auto__)
{return or__6816__auto__;
} else
{var G__87186 = x;if(G__87186)
{var bit__7442__auto__ = null;if(cljs.core.truth_((function (){var or__6816__auto____$1 = bit__7442__auto__;if(cljs.core.truth_(or__6816__auto____$1))
{return or__6816__auto____$1;
} else
{return G__87186.cljs$core$logic$protocols$ITreeTerm$;
}
})()))
{return true;
} else
{if((!G__87186.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.logic.protocols.ITreeTerm,G__87186);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.logic.protocols.ITreeTerm,G__87186);
}
}
});
cljs.core.logic.unify_with_sequential_STAR_ = (function unify_with_sequential_STAR_(u,v,s){if(cljs.core.sequential_QMARK_.call(null,v))
{if((cljs.core.counted_QMARK_.call(null,u)) && (cljs.core.counted_QMARK_.call(null,v)) && (!(cljs.core._EQ_.call(null,cljs.core.count.call(null,u),cljs.core.count.call(null,v)))))
{return null;
} else
{var u__$1 = cljs.core._seq.call(null,u);var v__$1 = cljs.core._seq.call(null,v);var s__$1 = s;while(true){
if(!((u__$1 == null)))
{if(!((v__$1 == null)))
{var temp__4096__auto__ = cljs.core.logic.unify.call(null,s__$1,cljs.core.first.call(null,u__$1),cljs.core.first.call(null,v__$1));if(cljs.core.truth_(temp__4096__auto__))
{var s__$2 = temp__4096__auto__;{
var G__87187 = cljs.core.next.call(null,u__$1);
var G__87188 = cljs.core.next.call(null,v__$1);
var G__87189 = s__$2;
u__$1 = G__87187;
v__$1 = G__87188;
s__$1 = G__87189;
continue;
}
} else
{return null;
}
} else
{return null;
}
} else
{if(!((v__$1 == null)))
{return null;
} else
{return s__$1;
}
}
break;
}
}
} else
{if(cljs.core.logic.lcons_QMARK_.call(null,v))
{return cljs.core.logic.protocols.unify_terms.call(null,v,u,s);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return null;
} else
{return null;
}
}
}
});
cljs.core.logic.unify_with_map_STAR_ = (function unify_with_map_STAR_(u,v,s){if(cljs.core._EQ_.call(null,cljs.core.count.call(null,u),cljs.core.count.call(null,v)))
{var ks = cljs.core.keys.call(null,u);var s__$1 = s;while(true){
if(cljs.core.seq.call(null,ks))
{var kf = cljs.core.first.call(null,ks);var vf = cljs.core.get.call(null,v,kf,new cljs.core.Keyword("cljs.core.logic","not-found","cljs.core.logic/not-found",3358757009));if(cljs.core.keyword_identical_QMARK_.call(null,vf,new cljs.core.Keyword("cljs.core.logic","not-found","cljs.core.logic/not-found",3358757009)))
{return null;
} else
{var temp__4096__auto__ = cljs.core.logic.unify.call(null,s__$1,cljs.core.get.call(null,u,kf),vf);if(cljs.core.truth_(temp__4096__auto__))
{var s__$2 = temp__4096__auto__;{
var G__87190 = cljs.core.next.call(null,ks);
var G__87191 = s__$2;
ks = G__87190;
s__$1 = G__87191;
continue;
}
} else
{return null;
}
}
} else
{return s__$1;
}
break;
}
} else
{return null;
}
});
(cljs.core.logic.protocols.IUnifyTerms["_"] = true);
(cljs.core.logic.protocols.unify_terms["_"] = (function (u,v,s){if(cljs.core.sequential_QMARK_.call(null,u))
{return cljs.core.logic.unify_with_sequential_STAR_.call(null,u,v,s);
} else
{if(cljs.core.map_QMARK_.call(null,u))
{if((function (){var G__87192 = v;if(G__87192)
{var bit__7442__auto__ = null;if(cljs.core.truth_((function (){var or__6816__auto__ = bit__7442__auto__;if(cljs.core.truth_(or__6816__auto__))
{return or__6816__auto__;
} else
{return G__87192.cljs$core$logic$protocols$IUnifyWithRecord$;
}
})()))
{return true;
} else
{if((!G__87192.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.logic.protocols.IUnifyWithRecord,G__87192);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.logic.protocols.IUnifyWithRecord,G__87192);
}
})())
{return cljs.core.logic.protocols.unify_with_record.call(null,v,u,s);
} else
{if(cljs.core.map_QMARK_.call(null,v))
{return cljs.core.logic.unify_with_map_STAR_.call(null,u,v,s);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return null;
} else
{return null;
}
}
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core._EQ_.call(null,u,v))
{return s;
} else
{return null;
}
} else
{return null;
}
}
}
}));
(cljs.core.logic.protocols.IUnifyTerms["null"] = true);
(cljs.core.logic.protocols.unify_terms["null"] = (function (u,v,s){if((v == null))
{return s;
} else
{return null;
}
}));
(cljs.core.logic.protocols.IReifyTerm["_"] = true);
(cljs.core.logic.protocols.reify_term["_"] = (function (v,s){if(cljs.core.coll_QMARK_.call(null,v))
{var v__$1 = v;var s__$1 = s;while(true){
if(cljs.core.seq.call(null,v__$1))
{{
var G__87193 = cljs.core.next.call(null,v__$1);
var G__87194 = cljs.core.logic._reify_STAR_.call(null,s__$1,cljs.core.first.call(null,v__$1));
v__$1 = G__87193;
s__$1 = G__87194;
continue;
}
} else
{return s__$1;
}
break;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return s;
} else
{return null;
}
}
}));
(cljs.core.logic.protocols.IReifyTerm["null"] = true);
(cljs.core.logic.protocols.reify_term["null"] = (function (v,s){return s;
}));
cljs.core.logic.walk_record_term = (function walk_record_term(v,f){return cljs.core.with_meta.call(null,(function (){var v__$1 = v;var r = cljs.core.logic.protocols._uninitialized.call(null,v__$1);while(true){
if(cljs.core.seq.call(null,v__$1))
{var vec__87196 = cljs.core.first.call(null,v__$1);var vfk = cljs.core.nth.call(null,vec__87196,0,null);var vfv = cljs.core.nth.call(null,vec__87196,1,null);{
var G__87197 = cljs.core.next.call(null,v__$1);
var G__87198 = cljs.core.assoc.call(null,r,cljs.core.logic.protocols.walk_term.call(null,f.call(null,vfk),f),cljs.core.logic.protocols.walk_term.call(null,f.call(null,vfv),f));
v__$1 = G__87197;
r = G__87198;
continue;
}
} else
{return r;
}
break;
}
})(),cljs.core.meta.call(null,v));
});
cljs.core.logic.walk_term_map_STAR_ = (function walk_term_map_STAR_(v,f){return cljs.core.with_meta.call(null,(function (){var v__$1 = v;var r = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);while(true){
if(cljs.core.seq.call(null,v__$1))
{var vec__87200 = cljs.core.first.call(null,v__$1);var vfk = cljs.core.nth.call(null,vec__87200,0,null);var vfv = cljs.core.nth.call(null,vec__87200,1,null);{
var G__87201 = cljs.core.next.call(null,v__$1);
var G__87202 = cljs.core.assoc_BANG_.call(null,r,cljs.core.logic.protocols.walk_term.call(null,f.call(null,vfk),f),cljs.core.logic.protocols.walk_term.call(null,f.call(null,vfv),f));
v__$1 = G__87201;
r = G__87202;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,r);
}
break;
}
})(),cljs.core.meta.call(null,v));
});
cljs.core.PersistentVector.prototype.cljs$core$logic$protocols$IWalkTerm$ = true;
cljs.core.PersistentVector.prototype.cljs$core$logic$protocols$IWalkTerm$walk_term$arity$2 = (function (v,f){var v__$1 = this;return cljs.core.with_meta.call(null,(function (){var v__$2 = v__$1;var r = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);while(true){
if(cljs.core.seq.call(null,v__$2))
{{
var G__87204 = cljs.core.next.call(null,v__$2);
var G__87205 = cljs.core.conj_BANG_.call(null,r,cljs.core.logic.protocols.walk_term.call(null,f.call(null,cljs.core.first.call(null,v__$2)),f));
v__$2 = G__87204;
r = G__87205;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,r);
}
break;
}
})(),cljs.core.meta.call(null,v__$1));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$logic$protocols$IWalkTerm$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$logic$protocols$IWalkTerm$walk_term$arity$2 = (function (v,f){var v__$1 = this;return cljs.core.logic.walk_term_map_STAR_.call(null,v__$1,f);
});
cljs.core.PersistentHashMap.prototype.cljs$core$logic$protocols$IWalkTerm$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$logic$protocols$IWalkTerm$walk_term$arity$2 = (function (v,f){var v__$1 = this;return cljs.core.logic.walk_term_map_STAR_.call(null,v__$1,f);
});
(cljs.core.logic.protocols.IWalkTerm["_"] = true);
(cljs.core.logic.protocols.walk_term["_"] = (function (v,f){if(cljs.core.seq_QMARK_.call(null,v))
{return cljs.core.with_meta.call(null,cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__87203_SHARP_){return cljs.core.logic.protocols.walk_term.call(null,f.call(null,p1__87203_SHARP_),f);
}),v)),cljs.core.meta.call(null,v));
} else
{if(cljs.core.logic.record_QMARK_.call(null,v))
{return cljs.core.logic.walk_record_term.call(null,v,f);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return f.call(null,v);
} else
{return null;
}
}
}
}));
(cljs.core.logic.protocols.IWalkTerm["null"] = true);
(cljs.core.logic.protocols.walk_term["null"] = (function (v,f){return f.call(null,null);
}));
(cljs.core.logic.protocols.IOccursCheckTerm["_"] = true);
(cljs.core.logic.protocols.occurs_check_term["_"] = (function (v,x,s){if(cljs.core.coll_QMARK_.call(null,v))
{var v__$1 = v;var x__$1 = x;var s__$1 = s;while(true){
if(cljs.core.seq.call(null,v__$1))
{var or__6816__auto__ = cljs.core.logic.occurs_check.call(null,s__$1,x__$1,cljs.core.first.call(null,v__$1));if(cljs.core.truth_(or__6816__auto__))
{return or__6816__auto__;
} else
{{
var G__87206 = cljs.core.next.call(null,v__$1);
var G__87207 = x__$1;
var G__87208 = s__$1;
v__$1 = G__87206;
x__$1 = G__87207;
s__$1 = G__87208;
continue;
}
}
} else
{return false;
}
break;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return false;
} else
{return null;
}
}
}));
(cljs.core.logic.protocols.IOccursCheckTerm["null"] = true);
(cljs.core.logic.protocols.occurs_check_term["null"] = (function (v,x,s){return false;
}));
(cljs.core.logic.protocols.IBuildTerm["_"] = true);
(cljs.core.logic.protocols.build_term["_"] = (function (u,s){if(cljs.core.coll_QMARK_.call(null,u))
{return cljs.core.reduce.call(null,cljs.core.logic.build,s,u);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return s;
} else
{return null;
}
}
}));
(cljs.core.logic.protocols.IBuildTerm["null"] = true);
(cljs.core.logic.protocols.build_term["null"] = (function (u,s){return s;
}));
cljs.core.logic.composeg = (function() {
var composeg = null;
var composeg__0 = (function (){return cljs.core.identity;
});
var composeg__2 = (function (g0,g1){return (function (a){var a__$1 = g0.call(null,a);var and__6804__auto__ = a__$1;if(cljs.core.truth_(and__6804__auto__))
{return g1.call(null,a__$1);
} else
{return and__6804__auto__;
}
});
});
composeg = function(g0,g1){
switch(arguments.length){
case 0:
return composeg__0.call(this);
case 2:
return composeg__2.call(this,g0,g1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
composeg.cljs$core$IFn$_invoke$arity$0 = composeg__0;
composeg.cljs$core$IFn$_invoke$arity$2 = composeg__2;
return composeg;
})()
;

/**
* @constructor
*/
cljs.core.logic.Choice = (function (a,f){
this.a = a;
this.f = f;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 256;
})
cljs.core.logic.Choice.cljs$lang$type = true;
cljs.core.logic.Choice.cljs$lang$ctorStr = "cljs.core.logic/Choice";
cljs.core.logic.Choice.cljs$lang$ctorPrWriter = (function (this__7360__auto__,writer__7361__auto__,opt__7362__auto__){return cljs.core._write.call(null,writer__7361__auto__,"cljs.core.logic/Choice");
});
cljs.core.logic.Choice.prototype.cljs$core$logic$protocols$ITake$ = true;
cljs.core.logic.Choice.prototype.cljs$core$logic$protocols$ITake$take_STAR_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,self__.a,(new cljs.core.LazySeq(null,(function (){return cljs.core.logic.protocols.take_STAR_.call(null,self__.f);
}),null,null)));
}),null,null));
});
cljs.core.logic.Choice.prototype.cljs$core$logic$protocols$IMPlus$ = true;
cljs.core.logic.Choice.prototype.cljs$core$logic$protocols$IMPlus$mplus$arity$2 = (function (this$,fp){var self__ = this;
var this$__$1 = this;return (new cljs.core.logic.Choice(self__.a,(function (){return cljs.core.logic.protocols.mplus.call(null,fp.call(null),self__.f);
})));
});
cljs.core.logic.Choice.prototype.cljs$core$logic$protocols$IBind$ = true;
cljs.core.logic.Choice.prototype.cljs$core$logic$protocols$IBind$bind$arity$2 = (function (this$,g){var self__ = this;
var this$__$1 = this;return cljs.core.logic.protocols.mplus.call(null,g.call(null,self__.a),(function (){return cljs.core.logic.protocols.bind.call(null,self__.f,g);
}));
});
cljs.core.logic.Choice.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){var self__ = this;
var this$__$1 = this;return cljs.core._lookup.call(null,this$__$1,k,null);
});
cljs.core.logic.Choice.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){var self__ = this;
var this$__$1 = this;var G__87209 = k;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"a","a",1013904339),G__87209))
{return self__.a;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return not_found;
} else
{return null;
}
}
});
cljs.core.logic.__GT_Choice = (function __GT_Choice(a,f){return (new cljs.core.logic.Choice(a,f));
});
cljs.core.logic.choice = (function choice(a,f){return (new cljs.core.logic.Choice(a,f));
});
(cljs.core.logic.protocols.ITake["null"] = true);
(cljs.core.logic.protocols.take_STAR_["null"] = (function (_){return cljs.core.List.EMPTY;
}));
(cljs.core.logic.protocols.IMPlus["null"] = true);
(cljs.core.logic.protocols.mplus["null"] = (function (_,f){return f.call(null);
}));
(cljs.core.logic.protocols.IBind["null"] = true);
(cljs.core.logic.protocols.bind["null"] = (function (_,g){return null;
}));
(cljs.core.logic.protocols.IBind["_"] = true);
(cljs.core.logic.protocols.bind["_"] = (function (this$,g){if(cljs.core.fn_QMARK_.call(null,this$))
{return (function _inc(){return cljs.core.logic.protocols.bind.call(null,this$.call(null),g);
});
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.ex_info.call(null,"No protocol method",cljs.core.PersistentArrayMap.EMPTY);
} else
{return null;
}
}
}));
(cljs.core.logic.protocols.IMPlus["_"] = true);
(cljs.core.logic.protocols.mplus["_"] = (function (this$,f){if(cljs.core.fn_QMARK_.call(null,this$))
{return (function _inc(){return cljs.core.logic.protocols.mplus.call(null,f.call(null),this$);
});
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return (new cljs.core.logic.Choice(this$,f));
} else
{return null;
}
}
}));
(cljs.core.logic.protocols.ITake["_"] = true);
(cljs.core.logic.protocols.take_STAR_["_"] = (function (this$){if(cljs.core.fn_QMARK_.call(null,this$))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.logic.protocols.take_STAR_.call(null,this$.call(null));
}),null,null));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return this$;
} else
{return null;
}
}
}));
/**
* A goal that always succeeds.
*/
cljs.core.logic.succeed = (function succeed(a){return a;
});
/**
* A goal that always fails.
*/
cljs.core.logic.fail = (function fail(a){return null;
});
cljs.core.logic.s_SHARP_ = cljs.core.logic.succeed;
cljs.core.logic.u_SHARP_ = cljs.core.logic.fail;
cljs.core.logic.ext_run_csg = (function ext_run_csg(u,v){return (function (a){return cljs.core.logic.protocols.ext_run_cs.call(null,a,u,v);
});
});
/**
* A goal that attempts to unify terms u and v.
*/
cljs.core.logic._EQ__EQ_ = (function _EQ__EQ_(u,v){return (function (a){var has_cs_QMARK_ = (cljs.core.count.call(null,a.cs) > 0);var ap = cljs.core.logic.unify.call(null,((has_cs_QMARK_)?cljs.core.assoc.call(null,a,new cljs.core.Keyword(null,"vs","vs",1013908015),cljs.core.PersistentVector.EMPTY):a),u,v);var vs = ((has_cs_QMARK_)?new cljs.core.Keyword(null,"vs","vs",1013908015).cljs$core$IFn$_invoke$arity$1(ap):null);var changed_QMARK_ = (cljs.core.count.call(null,vs) > 0);if(changed_QMARK_)
{return cljs.core.logic.run_constraints_STAR_.call(null,vs,ap.cs,new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440)).call(null,cljs.core.assoc.call(null,ap,new cljs.core.Keyword(null,"vs","vs",1013908015),null));
} else
{return ap;
}
});
});
cljs.core.logic.solutions = (function() {
var solutions = null;
var solutions__2 = (function (s,g){return solutions.call(null,s,(new cljs.core.logic.LVar(87211,true,"87211",null,53405299,null)),g);
});
var solutions__3 = (function (s,q,g){return cljs.core.logic.protocols.take_STAR_.call(null,(function (a__64688__auto__){return cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,a__64688__auto__,g),cljs.core.logic.reifyg.call(null,q));
}).call(null,s));
});
solutions = function(s,q,g){
switch(arguments.length){
case 2:
return solutions__2.call(this,s,q);
case 3:
return solutions__3.call(this,s,q,g);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
solutions.cljs$core$IFn$_invoke$arity$2 = solutions__2;
solutions.cljs$core$IFn$_invoke$arity$3 = solutions__3;
return solutions;
})()
;
cljs.core.logic.Choice.prototype.cljs$core$logic$protocols$IIfA$ = true;
cljs.core.logic.Choice.prototype.cljs$core$logic$protocols$IIfA$ifa$arity$3 = (function (b,gs,c){var b__$1 = this;return cljs.core.reduce.call(null,cljs.core.logic.protocols.bind,b__$1,gs);
});
(cljs.core.logic.protocols.IIfA["_"] = true);
(cljs.core.logic.protocols.ifa["_"] = (function (b,gs,c){if(cljs.core.fn_QMARK_.call(null,b))
{return (function _inc(){return cljs.core.logic.protocols.ifa.call(null,b.call(null),gs,c);
});
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return null;
} else
{return null;
}
}
}));
cljs.core.logic.Substitutions.prototype.cljs$core$logic$protocols$IIfA$ = true;
cljs.core.logic.Substitutions.prototype.cljs$core$logic$protocols$IIfA$ifa$arity$3 = (function (b,gs,c){var b__$1 = this;return cljs.core.reduce.call(null,cljs.core.logic.protocols.bind,b__$1,gs);
});
(cljs.core.logic.protocols.IIfA["null"] = true);
(cljs.core.logic.protocols.ifa["null"] = (function (b,gs,c){if(cljs.core.truth_(c))
{return cljs.core.force.call(null,c);
} else
{return null;
}
}));
cljs.core.logic.Choice.prototype.cljs$core$logic$protocols$IIfU$ = true;
cljs.core.logic.Choice.prototype.cljs$core$logic$protocols$IIfU$ifu$arity$3 = (function (b,gs,c){var b__$1 = this;return cljs.core.reduce.call(null,cljs.core.logic.protocols.bind,b__$1.a,gs);
});
(cljs.core.logic.protocols.IIfU["_"] = true);
(cljs.core.logic.protocols.ifu["_"] = (function (b,gs,c){if(cljs.core.fn_QMARK_.call(null,b))
{return (function _inc(){return cljs.core.logic.protocols.ifu.call(null,b.call(null),gs,c);
});
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return null;
} else
{return null;
}
}
}));
cljs.core.logic.Substitutions.prototype.cljs$core$logic$protocols$IIfU$ = true;
cljs.core.logic.Substitutions.prototype.cljs$core$logic$protocols$IIfU$ifu$arity$3 = (function (b,gs,c){var b__$1 = this;return cljs.core.reduce.call(null,cljs.core.logic.protocols.bind,b__$1,gs);
});
(cljs.core.logic.protocols.IIfU["null"] = true);
(cljs.core.logic.protocols.ifu["null"] = (function (b,gs,c){if(cljs.core.truth_(c))
{return cljs.core.force.call(null,c);
} else
{return null;
}
}));
cljs.core.logic.onceo = (function onceo(g){return (function (a87213){return cljs.core.logic.protocols.ifu.call(null,g.call(null,a87213),cljs.core.PersistentVector.EMPTY,null);
});
});
/**
* Copies a term u into v. Non-relational.
*/
cljs.core.logic.copy_term = (function copy_term(u,v){return (function (a87215){var u__$1 = cljs.core.logic.walk_STAR_.call(null,a87215,u);return (function (a__64637__auto__){return (function _inc(){return cljs.core.logic.protocols.bind.call(null,a__64637__auto__,cljs.core.logic._EQ__EQ_.call(null,cljs.core.logic.walk_STAR_.call(null,cljs.core.logic.build.call(null,cljs.core.logic.empty_s,u__$1),u__$1),v));
});
}).call(null,a87215);
});
});
/**
* A relation where a is nil
*/
cljs.core.logic.nilo = (function nilo(a){return cljs.core.logic._EQ__EQ_.call(null,null,a);
});
/**
* A relation where a is the empty list
*/
cljs.core.logic.emptyo = (function emptyo(a){return cljs.core.logic._EQ__EQ_.call(null,cljs.core.List.EMPTY,a);
});
/**
* A relation where l is a collection, such that a is the first of l
* and d is the rest of l. If ground d must be bound to a proper tail.
*/
cljs.core.logic.conso = (function conso(a,d,l){return cljs.core.logic._EQ__EQ_.call(null,cljs.core.logic.lcons.call(null,a,d),l);
});
/**
* A relation where l is a collection, such that a is the first of l
*/
cljs.core.logic.firsto = (function firsto(l,a){return (function (a__64637__auto__){return (function _inc(){var d = (new cljs.core.logic.LVar(87219,true,"d__87219",new cljs.core.Symbol(null,"d","d",-1640531427,null),-625947209,null));return cljs.core.logic.protocols.bind.call(null,a__64637__auto__,cljs.core.logic.conso.call(null,a,d,l));
});
});
});
/**
* A relation where l is a collection, such that d is the rest of l
*/
cljs.core.logic.resto = (function resto(l,d){return (function (a__64637__auto__){return (function _inc(){var a = (new cljs.core.logic.LVar(87223,true,"a__87223",new cljs.core.Symbol(null,"a","a",-1640531430,null),-1559410893,null));return cljs.core.logic.protocols.bind.call(null,a__64637__auto__,cljs.core.logic._EQ__EQ_.call(null,cljs.core.logic.lcons.call(null,a,d),l));
});
});
});
/**
* A pseudo-relation that takes a coll and ensures that the goal g
* succeeds on every element of the collection.
*/
cljs.core.logic.everyg = (function everyg(g,coll){return (function (a){var coll__$1 = cljs.core.logic.protocols.walk.call(null,a,coll);return (function everyg_STAR_(g__$1,coll__$2){if(cljs.core.seq.call(null,coll__$2))
{return (function (a__64688__auto__){return cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,a__64688__auto__,g__$1.call(null,cljs.core.first.call(null,coll__$2))),everyg_STAR_.call(null,g__$1,cljs.core.next.call(null,coll__$2)));
});
} else
{return cljs.core.logic.s_SHARP_;
}
}).call(null,g,coll__$1).call(null,a);
});
});
/**
* A relation where l is a collection, such that l contains x.
*/
cljs.core.logic.membero = (function membero(x,l){return (function (a87237){return (function _inc(){return cljs.core.logic.protocols.mplus.call(null,cljs.core.logic.protocols.bind.call(null,a87237,(function (a__64637__auto__){return (function _inc__$1(){var tail = (new cljs.core.logic.LVar(87245,true,"tail__87245",new cljs.core.Symbol(null,"tail","tail",-1636979191,null),-247424860,null));return cljs.core.logic.protocols.bind.call(null,a__64637__auto__,cljs.core.logic._EQ__EQ_.call(null,cljs.core.logic.lcons.call(null,x,tail),l));
});
})),(function (){return cljs.core.logic.protocols.bind.call(null,a87237,(function (a__64637__auto__){return (function _inc__$1(){var head = (new cljs.core.logic.LVar(87248,true,"head__87248",new cljs.core.Symbol(null,"head","head",-1637333095,null),-427746025,null));var tail = (new cljs.core.logic.LVar(87249,true,"tail__87249",new cljs.core.Symbol(null,"tail","tail",-1636979191,null),-247424856,null));return cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,a__64637__auto__,cljs.core.logic._EQ__EQ_.call(null,cljs.core.logic.lcons.call(null,head,tail),l)),membero.call(null,x,tail));
});
}));
}));
});
});
});
/**
* Like membero but uses to disequality further constraining
* the results. For example, if x and l are ground and x occurs
* multiple times in l, member1o will succeed only once.
*/
cljs.core.logic.member1o = (function member1o(x,l){return (function (a87263){return (function _inc(){return cljs.core.logic.protocols.mplus.call(null,cljs.core.logic.protocols.bind.call(null,a87263,(function (a__64637__auto__){return (function _inc__$1(){var tail = (new cljs.core.logic.LVar(87271,true,"tail__87271",new cljs.core.Symbol(null,"tail","tail",-1636979191,null),-247424771,null));return cljs.core.logic.protocols.bind.call(null,a__64637__auto__,cljs.core.logic._EQ__EQ_.call(null,cljs.core.logic.lcons.call(null,x,tail),l));
});
})),(function (){return cljs.core.logic.protocols.bind.call(null,a87263,(function (a__64637__auto__){return (function _inc__$1(){var head = (new cljs.core.logic.LVar(87274,true,"head__87274",new cljs.core.Symbol(null,"head","head",-1637333095,null),-427745936,null));var tail = (new cljs.core.logic.LVar(87275,true,"tail__87275",new cljs.core.Symbol(null,"tail","tail",-1636979191,null),-247424767,null));return cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,a__64637__auto__,cljs.core.logic._EQ__EQ_.call(null,cljs.core.logic.lcons.call(null,head,tail),l)),cljs.core.logic._BANG__EQ_.call(null,x,head)),member1o.call(null,x,tail));
});
}));
}));
});
});
});
/**
* A relation where x, y, and z are proper collections,
* such that z is x appended to y
*/
cljs.core.logic.appendo = (function appendo(x,y,z){return (function (a87293){return (function _inc(){return cljs.core.logic.protocols.mplus.call(null,cljs.core.logic.protocols.bind.call(null,a87293,(function (a__64637__auto__){return (function _inc__$1(){return cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,a__64637__auto__,cljs.core.logic._EQ__EQ_.call(null,cljs.core.List.EMPTY,x)),(function (a__64637__auto____$1){return (function _inc__$1(){return cljs.core.logic.protocols.bind.call(null,a__64637__auto____$1,cljs.core.logic._EQ__EQ_.call(null,y,z));
});
}));
});
})),(function (){return cljs.core.logic.protocols.bind.call(null,a87293,(function (a__64637__auto__){return (function _inc__$1(){var a = (new cljs.core.logic.LVar(87306,true,"a__87306",new cljs.core.Symbol(null,"a","a",-1640531430,null),-1559409991,null));var d = (new cljs.core.logic.LVar(87307,true,"d__87307",new cljs.core.Symbol(null,"d","d",-1640531427,null),-625946281,null));return cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,a__64637__auto__,cljs.core.logic._EQ__EQ_.call(null,cljs.core.logic.lcons.call(null,a,d),x)),(function (a__64637__auto____$1){return (function _inc__$1(){var r = (new cljs.core.logic.LVar(87309,true,"r__87309",new cljs.core.Symbol(null,"r","r",-1640531413,null),-1996405365,null));return cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,a__64637__auto____$1,cljs.core.logic._EQ__EQ_.call(null,cljs.core.logic.lcons.call(null,a,r),z)),appendo.call(null,d,y,r));
});
}));
});
}));
}));
});
});
});
/**
* A relation that will permute xl into the yl. May not
* terminate if xl is not ground.
*/
cljs.core.logic.permuteo = (function permuteo(xl,yl){return (function (a87327){return (function _inc(){return cljs.core.logic.protocols.mplus.call(null,cljs.core.logic.protocols.bind.call(null,a87327,(function (a__64637__auto__){return (function _inc__$1(){return cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,a__64637__auto__,cljs.core.logic._EQ__EQ_.call(null,cljs.core.List.EMPTY,xl)),(function (a__64637__auto____$1){return (function _inc__$1(){return cljs.core.logic.protocols.bind.call(null,a__64637__auto____$1,cljs.core.logic._EQ__EQ_.call(null,cljs.core.List.EMPTY,yl));
});
}));
});
})),(function (){return cljs.core.logic.protocols.bind.call(null,a87327,(function (a__64637__auto__){return (function _inc__$1(){var xs = (new cljs.core.logic.LVar(87340,true,"xs__87340",new cljs.core.Symbol(null,"xs","xs",-1640527692,null),1895201621,null));var x = (new cljs.core.logic.LVar(87341,true,"x__87341",new cljs.core.Symbol(null,"x","x",-1640531407,null),-129477831,null));return cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,a__64637__auto__,cljs.core.logic._EQ__EQ_.call(null,cljs.core.logic.lcons.call(null,x,xs),xl)),(function (a__64637__auto____$1){return (function _inc__$1(){var ys = (new cljs.core.logic.LVar(87343,true,"ys__87343",new cljs.core.Symbol(null,"ys","ys",-1640527661,null),87747161,null));return cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,a__64637__auto____$1,permuteo.call(null,xs,ys)),cljs.core.logic.rembero.call(null,x,yl,ys));
});
}));
});
}));
}));
});
});
});
cljs.core.logic.to_stream = (function to_stream(aseq){var aseq__$1 = cljs.core.drop_while.call(null,cljs.core.nil_QMARK_,aseq);if(cljs.core.seq.call(null,aseq__$1))
{return cljs.core.logic.choice.call(null,cljs.core.first.call(null,aseq__$1),(function (){return to_stream.call(null,cljs.core.next.call(null,aseq__$1));
}));
} else
{return null;
}
});

/**
* @constructor
*/
cljs.core.logic.AnswerCache = (function (ansl,anss,_meta){
this.ansl = ansl;
this.anss = anss;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2147877120;
})
cljs.core.logic.AnswerCache.cljs$lang$type = true;
cljs.core.logic.AnswerCache.cljs$lang$ctorStr = "cljs.core.logic/AnswerCache";
cljs.core.logic.AnswerCache.cljs$lang$ctorPrWriter = (function (this__7360__auto__,writer__7361__auto__,opt__7362__auto__){return cljs.core._write.call(null,writer__7361__auto__,"cljs.core.logic/AnswerCache");
});
cljs.core.logic.AnswerCache.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (x,writer,opts){var self__ = this;
var x__$1 = this;return cljs.core._write.call(null,writer,[cljs.core.str(x__$1)].join(''));
});
cljs.core.logic.AnswerCache.prototype.cljs$core$logic$protocols$IAnswerCache$ = true;
cljs.core.logic.AnswerCache.prototype.cljs$core$logic$protocols$IAnswerCache$_add$arity$2 = (function (this$,x){var self__ = this;
var this$__$1 = this;return (new cljs.core.logic.AnswerCache(cljs.core.conj.call(null,self__.ansl,x),cljs.core.conj.call(null,self__.anss,x),self__._meta));
});
cljs.core.logic.AnswerCache.prototype.cljs$core$logic$protocols$IAnswerCache$_cached_QMARK_$arity$2 = (function (_,x){var self__ = this;
var ___$1 = this;var anss__$1 = self__.anss;return cljs.core.contains_QMARK_.call(null,anss__$1,x);
});
cljs.core.logic.AnswerCache.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){var self__ = this;
var this$__$1 = this;return cljs.core._lookup.call(null,this$__$1,k,null);
});
cljs.core.logic.AnswerCache.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){var self__ = this;
var this$__$1 = this;var G__87344 = k;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"anss","anss",1016903359),G__87344))
{return self__.anss;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ansl","ansl",1016903352),G__87344))
{return self__.ansl;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.logic.AnswerCache.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){var self__ = this;
var ___$1 = this;return (new cljs.core.logic.AnswerCache(self__.ansl,self__.anss,new_meta));
});
cljs.core.logic.AnswerCache.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__._meta;
});
cljs.core.logic.AnswerCache.prototype.toString = (function (){var self__ = this;
var this$ = this;return [cljs.core.str("<answer-cache:"),cljs.core.str(cljs.core.pr_str.call(null,self__.ansl)),cljs.core.str(">")].join('');
});
cljs.core.logic.__GT_AnswerCache = (function __GT_AnswerCache(ansl,anss,_meta){return (new cljs.core.logic.AnswerCache(ansl,anss,_meta));
});
cljs.core.logic.answer_cache = (function answer_cache(){return (new cljs.core.logic.AnswerCache(cljs.core.List.EMPTY,cljs.core.PersistentHashSet.EMPTY,null));
});

/**
* @constructor
* @param {*} cache
* @param {*} ansv_STAR_
* @param {*} f
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
cljs.core.logic.SuspendedStream = (function (cache,ansv_STAR_,f,__meta,__extmap){
this.cache = cache;
this.ansv_STAR_ = ansv_STAR_;
this.f = f;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
if(arguments.length>3){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
cljs.core.logic.SuspendedStream.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7373__auto__){var self__ = this;
var this__7373__auto____$1 = this;var h__7227__auto__ = self__.__hash;if(!((h__7227__auto__ == null)))
{return h__7227__auto__;
} else
{var h__7227__auto____$1 = cljs.core.hash_imap.call(null,this__7373__auto____$1);self__.__hash = h__7227__auto____$1;
return h__7227__auto____$1;
}
});
cljs.core.logic.SuspendedStream.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7378__auto__,k__7379__auto__){var self__ = this;
var this__7378__auto____$1 = this;return cljs.core._lookup.call(null,this__7378__auto____$1,k__7379__auto__,null);
});
cljs.core.logic.SuspendedStream.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7380__auto__,k87346,else__7381__auto__){var self__ = this;
var this__7380__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k87346,new cljs.core.Keyword(null,"cache","cache",1108321012)))
{return self__.cache;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k87346,new cljs.core.Keyword(null,"ansv*","ansv*",1106877004)))
{return self__.ansv_STAR_;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k87346,new cljs.core.Keyword(null,"f","f",1013904344)))
{return self__.f;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k87346,else__7381__auto__);
} else
{return null;
}
}
}
}
});
cljs.core.logic.SuspendedStream.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7385__auto__,k__7386__auto__,G__87345){var self__ = this;
var this__7385__auto____$1 = this;var pred__87348 = cljs.core.keyword_identical_QMARK_;var expr__87349 = k__7386__auto__;if(cljs.core.truth_(pred__87348.call(null,new cljs.core.Keyword(null,"cache","cache",1108321012),expr__87349)))
{return (new cljs.core.logic.SuspendedStream(G__87345,self__.ansv_STAR_,self__.f,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__87348.call(null,new cljs.core.Keyword(null,"ansv*","ansv*",1106877004),expr__87349)))
{return (new cljs.core.logic.SuspendedStream(self__.cache,G__87345,self__.f,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__87348.call(null,new cljs.core.Keyword(null,"f","f",1013904344),expr__87349)))
{return (new cljs.core.logic.SuspendedStream(self__.cache,self__.ansv_STAR_,G__87345,self__.__meta,self__.__extmap,null));
} else
{return (new cljs.core.logic.SuspendedStream(self__.cache,self__.ansv_STAR_,self__.f,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7386__auto__,G__87345),null));
}
}
}
});
cljs.core.logic.SuspendedStream.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7392__auto__,writer__7393__auto__,opts__7394__auto__){var self__ = this;
var this__7392__auto____$1 = this;var pr_pair__7395__auto__ = (function (keyval__7396__auto__){return cljs.core.pr_sequential_writer.call(null,writer__7393__auto__,cljs.core.pr_writer,""," ","",opts__7394__auto__,keyval__7396__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__7393__auto__,pr_pair__7395__auto__,"#cljs.core.logic.SuspendedStream{",", ","}",opts__7394__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cache","cache",1108321012),self__.cache],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ansv*","ansv*",1106877004),self__.ansv_STAR_],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"f","f",1013904344),self__.f],null))], null),self__.__extmap));
});
cljs.core.logic.SuspendedStream.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7383__auto__,entry__7384__auto__){var self__ = this;
var this__7383__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__7384__auto__))
{return cljs.core._assoc.call(null,this__7383__auto____$1,cljs.core._nth.call(null,entry__7384__auto__,0),cljs.core._nth.call(null,entry__7384__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__7383__auto____$1,entry__7384__auto__);
}
});
cljs.core.logic.SuspendedStream.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7390__auto__){var self__ = this;
var this__7390__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cache","cache",1108321012),self__.cache],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ansv*","ansv*",1106877004),self__.ansv_STAR_],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"f","f",1013904344),self__.f],null))], null),self__.__extmap));
});
cljs.core.logic.SuspendedStream.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7382__auto__){var self__ = this;
var this__7382__auto____$1 = this;return (3 + cljs.core.count.call(null,self__.__extmap));
});
cljs.core.logic.SuspendedStream.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7374__auto__,other__7375__auto__){var self__ = this;
var this__7374__auto____$1 = this;if(cljs.core.truth_((function (){var and__6804__auto__ = other__7375__auto__;if(cljs.core.truth_(and__6804__auto__))
{return ((this__7374__auto____$1.constructor === other__7375__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__7374__auto____$1,other__7375__auto__));
} else
{return and__6804__auto__;
}
})()))
{return true;
} else
{return false;
}
});
cljs.core.logic.SuspendedStream.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7377__auto__,G__87345){var self__ = this;
var this__7377__auto____$1 = this;return (new cljs.core.logic.SuspendedStream(self__.cache,self__.ansv_STAR_,self__.f,G__87345,self__.__extmap,self__.__hash));
});
cljs.core.logic.SuspendedStream.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7376__auto__){var self__ = this;
var this__7376__auto____$1 = this;return self__.__meta;
});
cljs.core.logic.SuspendedStream.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7387__auto__,k__7388__auto__){var self__ = this;
var this__7387__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"f","f",1013904344),null,new cljs.core.Keyword(null,"ansv*","ansv*",1106877004),null,new cljs.core.Keyword(null,"cache","cache",1108321012),null], null), null),k__7388__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7387__auto____$1),self__.__meta),k__7388__auto__);
} else
{return (new cljs.core.logic.SuspendedStream(self__.cache,self__.ansv_STAR_,self__.f,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7388__auto__)),null));
}
});
cljs.core.logic.SuspendedStream.prototype.cljs$core$logic$protocols$ISuspendedStream$ = true;
cljs.core.logic.SuspendedStream.prototype.cljs$core$logic$protocols$ISuspendedStream$ready_QMARK_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return !((cljs.core.deref.call(null,self__.cache).ansl === self__.ansv_STAR_));
});
cljs.core.logic.SuspendedStream.cljs$lang$type = true;
cljs.core.logic.SuspendedStream.cljs$lang$ctorPrSeq = (function (this__7412__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.core.logic/SuspendedStream");
});
cljs.core.logic.SuspendedStream.cljs$lang$ctorPrWriter = (function (this__7412__auto__,writer__7413__auto__){return cljs.core._write.call(null,writer__7413__auto__,"cljs.core.logic/SuspendedStream");
});
cljs.core.logic.__GT_SuspendedStream = (function __GT_SuspendedStream(cache,ansv_STAR_,f){return (new cljs.core.logic.SuspendedStream(cache,ansv_STAR_,f));
});
cljs.core.logic.map__GT_SuspendedStream = (function map__GT_SuspendedStream(G__87347){return (new cljs.core.logic.SuspendedStream(new cljs.core.Keyword(null,"cache","cache",1108321012).cljs$core$IFn$_invoke$arity$1(G__87347),new cljs.core.Keyword(null,"ansv*","ansv*",1106877004).cljs$core$IFn$_invoke$arity$1(G__87347),new cljs.core.Keyword(null,"f","f",1013904344).cljs$core$IFn$_invoke$arity$1(G__87347),null,cljs.core.dissoc.call(null,G__87347,new cljs.core.Keyword(null,"cache","cache",1108321012),new cljs.core.Keyword(null,"ansv*","ansv*",1106877004),new cljs.core.Keyword(null,"f","f",1013904344))));
});
cljs.core.logic.make_suspended_stream = (function make_suspended_stream(cache,ansv_STAR_,f){return (new cljs.core.logic.SuspendedStream(cache,ansv_STAR_,f));
});
cljs.core.logic.suspended_stream_QMARK_ = (function suspended_stream_QMARK_(x){return (x instanceof cljs.core.logic.SuspendedStream);
});
cljs.core.logic.waiting_stream_QMARK_ = (function waiting_stream_QMARK_(x){return cljs.core.vector_QMARK_.call(null,x);
});
/**
* Take a waiting stream, a success continuation, and a failure continuation.
* If we don't find any ready suspended streams, invoke the failure
* continuation.
* If we find a ready suspended stream calculate the remainder of the waiting
* stream. If we've reached the fixpoint just call the thunk of the suspended
* stream, otherwise call mplus on the result of the thunk and the remainder
* of the waiting stream. Pass this result to the success contination.
*/
cljs.core.logic.waiting_stream_check = (function waiting_stream_check(w,success_cont,failure_cont){var w__$1 = w;var a = cljs.core.PersistentVector.EMPTY;while(true){
if((w__$1 == null))
{return failure_cont.call(null);
} else
{if(cljs.core.truth_(cljs.core.logic.protocols.ready_QMARK_.call(null,cljs.core.first.call(null,w__$1))))
{return success_cont.call(null,((function (w__$1,a){
return (function (){var ss = cljs.core.first.call(null,w__$1);var f = ss.f;var w__$2 = cljs.core.into.call(null,a,cljs.core.next.call(null,w__$1));if(cljs.core.empty_QMARK_.call(null,w__$2))
{return f.call(null);
} else
{return cljs.core.logic.protocols.mplus.call(null,f.call(null),((function (w__$1,a,ss,f,w__$2){
return (function (){return w__$2;
});})(w__$1,a,ss,f,w__$2))
);
}
});})(w__$1,a))
);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__87351 = cljs.core.next.call(null,w__$1);
var G__87352 = cljs.core.conj.call(null,a,cljs.core.first.call(null,w__$1));
w__$1 = G__87351;
a = G__87352;
continue;
}
} else
{return null;
}
}
}
break;
}
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$protocols$ITabled$ = true;
cljs.core.logic.Substitutions.prototype.cljs$core$logic$protocols$ITabled$_reify_tabled$arity$2 = (function (this$,v){var this$__$1 = this;var v__$1 = cljs.core.logic.protocols.walk.call(null,this$__$1,v);if(cljs.core.logic.lvar_QMARK_.call(null,v__$1))
{return cljs.core.logic.protocols.ext_no_check.call(null,this$__$1,v__$1,(new cljs.core.logic.LVar(87353,true,"(count (.-s this))__87353",cljs.core.count.call(null,this$__$1.s),-143225863,null)));
} else
{if(cljs.core.coll_QMARK_.call(null,v__$1))
{return cljs.core.logic.protocols._reify_tabled.call(null,cljs.core.logic.protocols._reify_tabled.call(null,this$__$1,cljs.core.first.call(null,v__$1)),cljs.core.next.call(null,v__$1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return this$__$1;
} else
{return null;
}
}
}
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$protocols$ITabled$reify_tabled$arity$2 = (function (this$,v){var this$__$1 = this;var v__$1 = cljs.core.logic.walk_STAR_.call(null,this$__$1,v);return cljs.core.logic.walk_STAR_.call(null,cljs.core.logic.protocols._reify_tabled.call(null,cljs.core.logic.empty_s,v__$1),v__$1);
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$protocols$ITabled$reuse$arity$5 = (function (this$,argv,cache,start,end){var this$__$1 = this;var start__$1 = (function (){var or__6816__auto__ = start;if(cljs.core.truth_(or__6816__auto__))
{return or__6816__auto__;
} else
{return cljs.core.deref.call(null,cache).ansl;
}
})();var end__$1 = (function (){var or__6816__auto__ = end;if(cljs.core.truth_(or__6816__auto__))
{return or__6816__auto__;
} else
{return 0;
}
})();var reuse_loop = (function reuse_loop(ansv_STAR_){if(cljs.core._EQ_.call(null,cljs.core.count.call(null,ansv_STAR_),end__$1))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.logic.make_suspended_stream.call(null,cache,start__$1,(function (){return cljs.core.logic.protocols.reuse.call(null,this$__$1,argv,cache,cljs.core.deref.call(null,cache).ansl,cljs.core.count.call(null,start__$1));
}))], null);
} else
{var ans = cljs.core.first.call(null,ansv_STAR_);return (new cljs.core.logic.Choice(cljs.core.logic.protocols.subunify.call(null,this$__$1,argv,cljs.core.logic.protocols.reify_tabled.call(null,this$__$1,ans)),(function (){return reuse_loop.call(null,cljs.core.rest.call(null,ansv_STAR_));
})));
}
});
return reuse_loop.call(null,start__$1);
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$protocols$ITabled$subunify$arity$3 = (function (this$,arg,ans){var this$__$1 = this;var arg__$1 = cljs.core.logic.protocols.walk.call(null,this$__$1,arg);if(cljs.core._EQ_.call(null,arg__$1,ans))
{return this$__$1;
} else
{if(cljs.core.logic.lvar_QMARK_.call(null,arg__$1))
{return cljs.core.logic.protocols.ext_no_check.call(null,this$__$1,arg__$1,ans);
} else
{if(cljs.core.coll_QMARK_.call(null,arg__$1))
{return cljs.core.logic.protocols.subunify.call(null,cljs.core.logic.protocols.subunify.call(null,this$__$1,cljs.core.next.call(null,arg__$1),cljs.core.next.call(null,ans)),cljs.core.first.call(null,arg__$1),cljs.core.first.call(null,ans));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return this$__$1;
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$logic$protocols$ITake$ = true;
cljs.core.PersistentVector.prototype.cljs$core$logic$protocols$ITake$take_STAR_$arity$1 = (function (this$){var this$__$1 = this;return cljs.core.logic.waiting_stream_check.call(null,this$__$1,(function (f){return cljs.core.logic.protocols.take_STAR_.call(null,f);
}),(function (){return cljs.core.List.EMPTY;
}));
});
cljs.core.PersistentVector.prototype.cljs$core$logic$protocols$IMPlus$ = true;
cljs.core.PersistentVector.prototype.cljs$core$logic$protocols$IMPlus$mplus$arity$2 = (function (this$,f){var this$__$1 = this;return cljs.core.logic.waiting_stream_check.call(null,this$__$1,(function (fp){return cljs.core.logic.protocols.mplus.call(null,fp,f);
}),(function (){var a_inf = f.call(null);if(cljs.core.logic.waiting_stream_QMARK_.call(null,a_inf))
{return cljs.core.into.call(null,a_inf,this$__$1);
} else
{return cljs.core.logic.protocols.mplus.call(null,a_inf,(function (){return this$__$1;
}));
}
}));
});
cljs.core.PersistentVector.prototype.cljs$core$logic$protocols$IBind$ = true;
cljs.core.PersistentVector.prototype.cljs$core$logic$protocols$IBind$bind$arity$2 = (function (this$,g){var this$__$1 = this;return cljs.core.logic.waiting_stream_check.call(null,this$__$1,(function (f){return cljs.core.logic.protocols.bind.call(null,f,g);
}),(function (){return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (ss){return cljs.core.logic.make_suspended_stream.call(null,ss.cache,ss.ansv_STAR_,(function (){return cljs.core.logic.protocols.bind.call(null,ss.f.call(null),g);
}));
}),this$__$1));
}));
});
/**
* Take the argument to the goal and check that we don't
* have an alpha equivalent cached answer term in the cache.
* If it doesn't already exist in the cache add the new
* answer term.
*/
cljs.core.logic.master = (function master(argv,cache){return (function (a){var rargv = cljs.core.logic._reify.call(null,a,argv);if(cljs.core.truth_(cljs.core.logic.protocols._cached_QMARK_.call(null,cljs.core.deref.call(null,cache),rargv)))
{return null;
} else
{cljs.core.swap_BANG_.call(null,cache,(function (cache__$1){if(cljs.core.truth_(cljs.core.logic.protocols._cached_QMARK_.call(null,cache__$1,rargv)))
{return cache__$1;
} else
{return cljs.core.logic.protocols._add.call(null,cache__$1,cljs.core.logic.protocols.reify_tabled.call(null,a,argv));
}
}));
return a;
}
});
});
cljs.core.logic.addcg = (function addcg(c){return (function (a){var a__$1 = cljs.core.reduce.call(null,(function (a__$1,x){return cljs.core.logic.protocols.ext_no_check.call(null,a__$1,x,cljs.core.logic.subst_val.call(null,new cljs.core.Keyword("cljs.core.logic","unbound","cljs.core.logic/unbound",1803671316)));
}),a,cljs.core.logic.unbound_rands.call(null,a,c));return cljs.core.assoc.call(null,a__$1,new cljs.core.Keyword(null,"cs","cs",1013907426),cljs.core.logic.protocols.addc.call(null,a__$1.cs,a__$1,c));
});
});
cljs.core.logic.updatecg = (function updatecg(c){return (function (a){return cljs.core.assoc.call(null,a,new cljs.core.Keyword(null,"cs","cs",1013907426),cljs.core.logic.protocols.updatec.call(null,a.cs,a,c));
});
});
cljs.core.logic.remcg = (function remcg(c){return (function (a){return cljs.core.assoc.call(null,a,new cljs.core.Keyword(null,"cs","cs",1013907426),cljs.core.logic.protocols.remc.call(null,a.cs,a,c));
});
});
cljs.core.logic.runcg = (function runcg(c){return (function (a){return cljs.core.assoc.call(null,a,new cljs.core.Keyword(null,"cs","cs",1013907426),cljs.core.logic.protocols.runc.call(null,a.cs,c,true));
});
});
cljs.core.logic.stopcg = (function stopcg(c){return (function (a){return cljs.core.assoc.call(null,a,new cljs.core.Keyword(null,"cs","cs",1013907426),cljs.core.logic.protocols.runc.call(null,a.cs,c,false));
});
});
cljs.core.logic.ientailed_QMARK_ = (function ientailed_QMARK_(c){var G__87355 = c;if(G__87355)
{var bit__7442__auto__ = null;if(cljs.core.truth_((function (){var or__6816__auto__ = bit__7442__auto__;if(cljs.core.truth_(or__6816__auto__))
{return or__6816__auto__;
} else
{return G__87355.cljs$core$logic$protocols$IEntailed$;
}
})()))
{return true;
} else
{if((!G__87355.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.logic.protocols.IEntailed,G__87355);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.logic.protocols.IEntailed,G__87355);
}
});
cljs.core.logic.entailed_QMARK_ = (function entailed_QMARK_(c,c_SINGLEQUOTE_,a){var id = cljs.core.logic.protocols.id.call(null,c);var and__6804__auto__ = (function (){var or__6816__auto__ = new cljs.core.Keyword(null,"cm","cm",1013907420).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"cs","cs",1013907426).cljs$core$IFn$_invoke$arity$1(a)).call(null,id);if(cljs.core.truth_(or__6816__auto__))
{return or__6816__auto__;
} else
{return (id == null);
}
})();if(cljs.core.truth_(and__6804__auto__))
{return cljs.core.logic.protocols._entailed_QMARK_.call(null,c_SINGLEQUOTE_);
} else
{return and__6804__auto__;
}
});
cljs.core.logic.run_constraint = (function run_constraint(c){return (function (a){var c_SINGLEQUOTE_ = cljs.core.logic.protocols._step.call(null,c,a);if((!(cljs.core.logic.ientailed_QMARK_.call(null,c_SINGLEQUOTE_))) || (!(cljs.core.logic.entailed_QMARK_.call(null,c,c_SINGLEQUOTE_,a))))
{if(cljs.core.truth_(cljs.core.logic.protocols._runnable_QMARK_.call(null,c_SINGLEQUOTE_)))
{return cljs.core.logic.composeg.call(null,cljs.core.logic.runcg.call(null,c),cljs.core.logic.composeg.call(null,c_SINGLEQUOTE_,cljs.core.logic.stopcg.call(null,c))).call(null,a);
} else
{return a;
}
} else
{return cljs.core.logic.remcg.call(null,c).call(null,a);
}
});
});
/**
* A goal to run the constraints in cq until it is empty. Of
* course running a constraint may grow cq so this function
* finds the fixpoint.
*/
cljs.core.logic.fix_constraints = (function fix_constraints(a){var a__$1 = a;while(true){
if(cljs.core.truth_(a__$1))
{var cq = a__$1.cq;if((cljs.core.count.call(null,cq) === 0))
{return cljs.core.assoc.call(null,a__$1,new cljs.core.Keyword(null,"cq","cq",1013907424),null);
} else
{var c = cljs.core.first.call(null,cq);{
var G__87356 = cljs.core.logic.run_constraint.call(null,c).call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,a__$1,new cljs.core.Keyword(null,"cq","cq",1013907424),cljs.core.subvec.call(null,a__$1.cq,1)),new cljs.core.Keyword(null,"cqs","cqs",1014002999),cljs.core.disj.call(null,a__$1.cqs,cljs.core.logic.protocols.id.call(null,c))));
a__$1 = G__87356;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.logic.run_constraints = (function run_constraints(xcs){return (function (a){var cq = a.cq;var a__$1 = cljs.core.reduce.call(null,((function (cq){
return (function (a__$1,c){return cljs.core.logic.protocols.queue.call(null,a__$1,c);
});})(cq))
,cljs.core.assoc.call(null,a,new cljs.core.Keyword(null,"cq","cq",1013907424),(function (){var or__6816__auto__ = cq;if(cljs.core.truth_(or__6816__auto__))
{return or__6816__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})()),xcs);if(cljs.core.truth_(cq))
{return a__$1;
} else
{return cljs.core.logic.fix_constraints.call(null,a__$1);
}
});
});
cljs.core.logic.run_constraints_STAR_ = (function run_constraints_STAR_(xs,cs,ws){if(((cljs.core.count.call(null,cs) === 0)) || ((cljs.core.seq.call(null,xs) == null)))
{return cljs.core.logic.s_SHARP_;
} else
{return (function (a){var xcs = cljs.core.logic.protocols.constraints_for.call(null,cs,a,cljs.core.first.call(null,xs),ws);if(cljs.core.seq.call(null,xcs))
{return cljs.core.logic.composeg.call(null,cljs.core.logic.run_constraints.call(null,xcs),run_constraints_STAR_.call(null,cljs.core.next.call(null,xs),cs,ws)).call(null,a);
} else
{return run_constraints_STAR_.call(null,cljs.core.next.call(null,xs),cs,ws).call(null,a);
}
});
}
});
cljs.core.logic.verify_all_bound = (function verify_all_bound(a,constrained){var verify_all_bound_STAR_ = (function verify_all_bound_STAR_(a__$1,constrained__$1){while(true){
if(cljs.core.truth_(constrained__$1))
{var x = cljs.core.first.call(null,constrained__$1);if((cljs.core.logic.lvar_QMARK_.call(null,x)) && ((cljs.core.logic.lvar_QMARK_.call(null,cljs.core.logic.protocols.walk.call(null,a__$1,x))) && ((cljs.core.logic.get_dom.call(null,a__$1,x,new cljs.core.Keyword("cljs.core.logic","fd","cljs.core.logic/fd",3673845947)) == null))))
{throw cljs.core.ex_info.call(null,[cljs.core.str("Constrained variable "),cljs.core.str(x),cljs.core.str(" without domain")].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else
{{
var G__87357 = a__$1;
var G__87358 = cljs.core.next.call(null,constrained__$1);
a__$1 = G__87357;
constrained__$1 = G__87358;
continue;
}
}
} else
{return null;
}
break;
}
});
return verify_all_bound_STAR_.call(null,a,cljs.core.seq.call(null,constrained));
});
cljs.core.logic.enforceable_constrained = (function enforceable_constrained(a){var cs = a.cs;var km = cs.km;var cm = cs.cm;var vs = cljs.core.keys.call(null,km);return cljs.core.filter.call(null,(function (v){return cljs.core.some.call(null,(function (cid){var temp__4098__auto__ = cljs.core.get.call(null,cm,cid);if(cljs.core.truth_(temp__4098__auto__))
{var c = temp__4098__auto__;return cljs.core.logic.protocols.enforceable_QMARK_.call(null,c);
} else
{return null;
}
}),cljs.core.get.call(null,km,v));
}),vs);
});
cljs.core.logic.enforce_constraints = (function enforce_constraints(x){return (function (a__64688__auto__){return cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,a__64688__auto__,cljs.core.logic.force_ans.call(null,x)),(function (a){var constrained = cljs.core.logic.enforceable_constrained.call(null,a);cljs.core.logic.verify_all_bound.call(null,a,constrained);
return cljs.core.logic.onceo.call(null,cljs.core.logic.force_ans.call(null,constrained)).call(null,a);
}));
});
});
cljs.core.logic.reify_constraints = (function reify_constraints(v,r,a){var cs = a.cs;var rcs = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (cs){
return (function (p1__87360_SHARP_){return !((p1__87360_SHARP_ == null));
});})(cs))
,cljs.core.map.call(null,((function (cs){
return (function (p1__87359_SHARP_){return cljs.core.logic.protocols._reifyc.call(null,p1__87359_SHARP_,v,r,a);
});})(cs))
,cljs.core.filter.call(null,cljs.core.logic.protocols.reifiable_QMARK_,cljs.core.vals.call(null,cs.cm)))));if(cljs.core.empty_QMARK_.call(null,rcs))
{return cljs.core.logic.choice.call(null,v,cljs.core.logic.empty_f);
} else
{return cljs.core.logic.choice.call(null,cljs.core.with_meta.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,v),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"-","-",1013904287)),rcs)),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,1596),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,16),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,1596),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,29))))),cljs.core.logic.empty_f);
}
});
cljs.core.logic.reifyg = (function reifyg(x){return (function (a__64688__auto__){return cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,a__64688__auto__,cljs.core.logic.enforce_constraints.call(null,x)),(function (a){var v = cljs.core.logic.walk_STAR_.call(null,a,x);var r = cljs.core.logic._reify_STAR_.call(null,cljs.core.with_meta.call(null,cljs.core.logic.empty_s,cljs.core.meta.call(null,a)),v);if((cljs.core.count.call(null,r) === 0))
{return cljs.core.logic.choice.call(null,v,cljs.core.logic.empty_f);
} else
{var v__$1 = cljs.core.logic.walk_STAR_.call(null,r,v);return cljs.core.logic.reify_constraints.call(null,v__$1,r,a);
}
}));
});
});
cljs.core.logic.cgoal = (function cgoal(c){if(typeof cljs.core.logic.t87365 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.t87365 = (function (c,cgoal,meta87366){
this.c = c;
this.cgoal = cgoal;
this.meta87366 = meta87366;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.logic.t87365.cljs$lang$type = true;
cljs.core.logic.t87365.cljs$lang$ctorStr = "cljs.core.logic/t87365";
cljs.core.logic.t87365.cljs$lang$ctorPrWriter = (function (this__7360__auto__,writer__7361__auto__,opt__7362__auto__){return cljs.core._write.call(null,writer__7361__auto__,"cljs.core.logic/t87365");
});
cljs.core.logic.t87365.prototype.cljs$core$logic$protocols$IUnwrapConstraint$ = true;
cljs.core.logic.t87365.prototype.cljs$core$logic$protocols$IUnwrapConstraint$_unwrap$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.c;
});
cljs.core.logic.t87365.prototype.call = (function (self__,a){var self__ = this;
var self____$1 = this;var _ = self____$1;var c_SINGLEQUOTE_ = cljs.core.logic.protocols._step.call(null,self__.c,a);if(cljs.core.truth_(cljs.core.logic.protocols._runnable_QMARK_.call(null,c_SINGLEQUOTE_)))
{var temp__4098__auto__ = c_SINGLEQUOTE_.call(null,a);if(cljs.core.truth_(temp__4098__auto__))
{var a__$1 = temp__4098__auto__;var c_SINGLEQUOTE___$1 = cljs.core.logic.protocols._step.call(null,self__.c,a__$1);if((cljs.core.logic.ientailed_QMARK_.call(null,c_SINGLEQUOTE___$1)) && (!(cljs.core.logic.entailed_QMARK_.call(null,self__.c,c_SINGLEQUOTE___$1,a__$1))))
{return cljs.core.logic.addcg.call(null,self__.c).call(null,a__$1);
} else
{return a__$1;
}
} else
{return null;
}
} else
{return cljs.core.logic.addcg.call(null,self__.c).call(null,a);
}
});
cljs.core.logic.t87365.prototype.apply = (function (self__,args87368){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args87368)));
});
cljs.core.logic.t87365.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){var self__ = this;
var _ = this;var c_SINGLEQUOTE_ = cljs.core.logic.protocols._step.call(null,self__.c,a);if(cljs.core.truth_(cljs.core.logic.protocols._runnable_QMARK_.call(null,c_SINGLEQUOTE_)))
{var temp__4098__auto__ = c_SINGLEQUOTE_.call(null,a);if(cljs.core.truth_(temp__4098__auto__))
{var a__$1 = temp__4098__auto__;var c_SINGLEQUOTE___$1 = cljs.core.logic.protocols._step.call(null,self__.c,a__$1);if((cljs.core.logic.ientailed_QMARK_.call(null,c_SINGLEQUOTE___$1)) && (!(cljs.core.logic.entailed_QMARK_.call(null,self__.c,c_SINGLEQUOTE___$1,a__$1))))
{return cljs.core.logic.addcg.call(null,self__.c).call(null,a__$1);
} else
{return a__$1;
}
} else
{return null;
}
} else
{return cljs.core.logic.addcg.call(null,self__.c).call(null,a);
}
});
cljs.core.logic.t87365.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_87367){var self__ = this;
var _87367__$1 = this;return self__.meta87366;
});
cljs.core.logic.t87365.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_87367,meta87366__$1){var self__ = this;
var _87367__$1 = this;return (new cljs.core.logic.t87365(self__.c,self__.cgoal,meta87366__$1));
});
cljs.core.logic.__GT_t87365 = (function __GT_t87365(c__$1,cgoal__$1,meta87366){return (new cljs.core.logic.t87365(c__$1,cgoal__$1,meta87366));
});
}
return (new cljs.core.logic.t87365(c,cgoal,null));
});
cljs.core.logic.get_dom_fd = (function get_dom_fd(a,x){if(cljs.core.logic.lvar_QMARK_.call(null,x))
{return cljs.core.logic.get_dom.call(null,a,x,new cljs.core.Keyword("cljs.core.logic","fd","cljs.core.logic/fd",3673845947));
} else
{return x;
}
});
cljs.core.logic.sort_by_member_count = (function sort_by_member_count(a){return (function (x,y){var dx = cljs.core.logic.get_dom_fd.call(null,a,x);var dy = cljs.core.logic.get_dom_fd.call(null,a,y);return (cljs.core.logic.protocols._member_count.call(null,dx) < cljs.core.logic.protocols._member_count.call(null,dy));
});
});
cljs.core.logic.sort_by_strategy = (function sort_by_strategy(v,x,a){var G__87370 = new cljs.core.Keyword("cljs.core.logic","strategy","cljs.core.logic/strategy",3884554094).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,x));if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.core.logic","ff","cljs.core.logic/ff",3673845945),G__87370))
{return cljs.core.seq.call(null,cljs.core.sort.call(null,cljs.core.logic.sort_by_member_count.call(null,a),v));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return v;
} else
{return null;
}
}
});
cljs.core.logic.LCons.prototype.cljs$core$logic$protocols$IForceAnswerTerm$ = true;
cljs.core.logic.LCons.prototype.cljs$core$logic$protocols$IForceAnswerTerm$_force_ans$arity$2 = (function (v,x){var v__$1 = this;var loop = (function loop(ys){return (function (a__64688__auto__){return cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,a__64688__auto__,cljs.core.logic.force_ans.call(null,cljs.core.logic.protocols.lfirst.call(null,ys))),((cljs.core.logic.lcons_QMARK_.call(null,cljs.core.logic.protocols.lnext.call(null,ys)))?loop.call(null,cljs.core.logic.protocols.lnext.call(null,ys)):cljs.core.logic.s_SHARP_));
});
});
return loop.call(null,v__$1);
});
(cljs.core.logic.protocols.IForceAnswerTerm["_"] = true);
(cljs.core.logic.protocols._force_ans["_"] = (function (v,x){if(cljs.core.sequential_QMARK_.call(null,v))
{var loop = (function loop(ys){if(cljs.core.truth_(ys))
{return (function (a__64688__auto__){return cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,a__64688__auto__,cljs.core.logic.force_ans.call(null,cljs.core.first.call(null,ys))),(function (a){var temp__4096__auto__ = cljs.core.logic.sort_by_strategy.call(null,cljs.core.next.call(null,ys),x,a);if(cljs.core.truth_(temp__4096__auto__))
{var ys__$1 = temp__4096__auto__;return loop.call(null,ys__$1).call(null,a);
} else
{return a;
}
}));
});
} else
{return cljs.core.logic.s_SHARP_;
}
});
return loop.call(null,cljs.core.seq.call(null,v));
} else
{if(cljs.core.map_QMARK_.call(null,v))
{var loop = (function loop(ys){if(cljs.core.truth_(ys))
{return (function (a__64688__auto__){return cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,a__64688__auto__,cljs.core.logic.force_ans.call(null,cljs.core.val.call(null,cljs.core.first.call(null,ys)))),loop.call(null,cljs.core.next.call(null,ys)));
});
} else
{return cljs.core.logic.s_SHARP_;
}
});
return loop.call(null,cljs.core.seq.call(null,v));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.logic.lvar_QMARK_.call(null,x))
{return cljs.core.logic.ext_run_csg.call(null,x,v);
} else
{return cljs.core.logic.s_SHARP_;
}
} else
{return null;
}
}
}
}));
(cljs.core.logic.protocols.IForceAnswerTerm["null"] = true);
(cljs.core.logic.protocols._force_ans["null"] = (function (v,x){return cljs.core.logic.s_SHARP_;
}));
cljs.core.logic.force_ans = (function force_ans(x){return (function (a){return (function (){var v = cljs.core.logic.protocols.walk.call(null,a,x);if(cljs.core.logic.lvar_QMARK_.call(null,v))
{return cljs.core.logic.protocols._force_ans.call(null,cljs.core.logic.get_dom_fd.call(null,a,x),v);
} else
{var x__$1 = cljs.core.logic.protocols.root_var.call(null,a,x);if(cljs.core.sequential_QMARK_.call(null,v))
{return cljs.core.logic.protocols._force_ans.call(null,cljs.core.logic.sort_by_strategy.call(null,v,x__$1,a),x__$1);
} else
{return cljs.core.logic.protocols._force_ans.call(null,v,x__$1);
}
}
})().call(null,a);
});
});
cljs.core.logic.distribute = (function distribute(v_STAR_,strategy){return (function (a){return cljs.core.logic.add_attr.call(null,a,v_STAR_,new cljs.core.Keyword("cljs.core.logic","strategy","cljs.core.logic/strategy",3884554094),new cljs.core.Keyword("cljs.core.logic","ff","cljs.core.logic/ff",3673845945));
});
});
cljs.core.logic.disunify = (function() {
var disunify = null;
var disunify__3 = (function (s,u,v){return disunify.call(null,s,u,v,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"prefixc","prefixc",695243651),cljs.core.PersistentArrayMap.EMPTY], null));
});
var disunify__4 = (function (s,u,v,cs){if((u === v))
{return cs;
} else
{var u__$1 = cljs.core.logic.protocols.walk.call(null,s,u);var v__$1 = cljs.core.logic.protocols.walk.call(null,s,v);if((u__$1 === v__$1))
{return cs;
} else
{if((!(cljs.core.logic.lvar_QMARK_.call(null,u__$1))) && (cljs.core.logic.lvar_QMARK_.call(null,v__$1)))
{return cljs.core.logic.protocols._disunify_terms.call(null,v__$1,u__$1,s,cs);
} else
{return cljs.core.logic.protocols._disunify_terms.call(null,u__$1,v__$1,s,cs);
}
}
}
});
disunify = function(s,u,v,cs){
switch(arguments.length){
case 3:
return disunify__3.call(this,s,u,v);
case 4:
return disunify__4.call(this,s,u,v,cs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
disunify.cljs$core$IFn$_invoke$arity$3 = disunify__3;
disunify.cljs$core$IFn$_invoke$arity$4 = disunify__4;
return disunify;
})()
;
(cljs.core.logic.protocols.IDisunifyTerms["_"] = true);
(cljs.core.logic.protocols._disunify_terms["_"] = (function (u,v,s,cs){if(cljs.core.sequential_QMARK_.call(null,u))
{if(cljs.core.sequential_QMARK_.call(null,v))
{var u__$1 = cljs.core.seq.call(null,u);var v__$1 = cljs.core.seq.call(null,v);var cs__$1 = cs;while(true){
if(u__$1)
{if(v__$1)
{var uv = cljs.core.first.call(null,u__$1);var vv = cljs.core.first.call(null,v__$1);var cs__$2 = cljs.core.logic.disunify.call(null,s,uv,vv,cs__$1);if(cljs.core.truth_(cs__$2))
{{
var G__87373 = cljs.core.next.call(null,u__$1);
var G__87374 = cljs.core.next.call(null,v__$1);
var G__87375 = cs__$2;
u__$1 = G__87373;
v__$1 = G__87374;
cs__$1 = G__87375;
continue;
}
} else
{return null;
}
} else
{return null;
}
} else
{if((v__$1 == null))
{return cs__$1;
} else
{return null;
}
}
break;
}
} else
{return null;
}
} else
{if(cljs.core.map_QMARK_.call(null,u))
{if((cljs.core.map_QMARK_.call(null,v)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,u),cljs.core.count.call(null,v))))
{var ks = cljs.core.seq.call(null,cljs.core.keys.call(null,u));var cs__$1 = cs;while(true){
if(ks)
{var kf = cljs.core.first.call(null,ks);var vf = cljs.core.get.call(null,v,kf,new cljs.core.Keyword("cljs.core.logic","not-found","cljs.core.logic/not-found",3358757009));if(cljs.core._EQ_.call(null,vf,new cljs.core.Keyword("cljs.core.logic","not-found","cljs.core.logic/not-found",3358757009)))
{return null;
} else
{var temp__4096__auto__ = cljs.core.logic.disunify.call(null,s,cljs.core.get.call(null,u,kf),vf,cs__$1);if(cljs.core.truth_(temp__4096__auto__))
{var cs__$2 = temp__4096__auto__;{
var G__87376 = cljs.core.next.call(null,ks);
var G__87377 = cs__$2;
ks = G__87376;
cs__$1 = G__87377;
continue;
}
} else
{return null;
}
}
} else
{return cs__$1;
}
break;
}
} else
{return null;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(!(cljs.core._EQ_.call(null,u,v)))
{return null;
} else
{return cs;
}
} else
{return null;
}
}
}
}));
cljs.core.logic.LVar.prototype.cljs$core$logic$protocols$IDisunifyTerms$ = true;
cljs.core.logic.LVar.prototype.cljs$core$logic$protocols$IDisunifyTerms$_disunify_terms$arity$4 = (function (u,v,s,p__87371){var map__87372 = p__87371;var map__87372__$1 = ((cljs.core.seq_QMARK_.call(null,map__87372))?cljs.core.apply.call(null,cljs.core.hash_map,map__87372):map__87372);var cs = map__87372__$1;var pc = cljs.core.get.call(null,map__87372__$1,new cljs.core.Keyword(null,"prefixc","prefixc",695243651));var u__$1 = this;return cljs.core.assoc.call(null,cs,new cljs.core.Keyword(null,"prefixc","prefixc",695243651),cljs.core.assoc.call(null,pc,u__$1,v));
});
(cljs.core.logic.protocols.IDisunifyTerms["null"] = true);
(cljs.core.logic.protocols._disunify_terms["null"] = (function (u,v,s,cs){if(!((v == null)))
{return null;
} else
{return cs;
}
}));
cljs.core.logic.recover_vars_from_term = (function recover_vars_from_term(x){var r = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);cljs.core.logic.protocols.walk_term.call(null,x,(function (x__$1){if(cljs.core.logic.lvar_QMARK_.call(null,x__$1))
{cljs.core.swap_BANG_.call(null,r,cljs.core.conj,x__$1);
return x__$1;
} else
{return x__$1;
}
}));
return cljs.core.deref.call(null,r);
});
cljs.core.logic.recover_vars = (function recover_vars(p){var p__$1 = cljs.core.seq.call(null,p);var r = cljs.core.PersistentHashSet.EMPTY;while(true){
if(p__$1)
{var vec__87379 = cljs.core.first.call(null,p__$1);var u = cljs.core.nth.call(null,vec__87379,0,null);var v = cljs.core.nth.call(null,vec__87379,1,null);{
var G__87380 = cljs.core.next.call(null,p__$1);
var G__87381 = clojure.set.union.call(null,r,cljs.core.logic.recover_vars_from_term.call(null,u),cljs.core.logic.recover_vars_from_term.call(null,v));
p__$1 = G__87380;
r = G__87381;
continue;
}
} else
{return r;
}
break;
}
});
cljs.core.logic._BANG__EQ_c = (function _BANG__EQ_c(p){if(typeof cljs.core.logic.t87394 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.t87394 = (function (p,_BANG__EQ_c,meta87395){
this.p = p;
this._BANG__EQ_c = _BANG__EQ_c;
this.meta87395 = meta87395;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.logic.t87394.cljs$lang$type = true;
cljs.core.logic.t87394.cljs$lang$ctorStr = "cljs.core.logic/t87394";
cljs.core.logic.t87394.cljs$lang$ctorPrWriter = (function (this__7360__auto__,writer__7361__auto__,opt__7362__auto__){return cljs.core._write.call(null,writer__7361__auto__,"cljs.core.logic/t87394");
});
cljs.core.logic.t87394.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$ = true;
cljs.core.logic.t87394.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$_watched_stores$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440),null], null), null);
});
cljs.core.logic.t87394.prototype.cljs$core$logic$protocols$IConstraintOp$ = true;
cljs.core.logic.t87394.prototype.cljs$core$logic$protocols$IConstraintOp$_rator$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic","!=","cljs.core.logic/!=",1019412108,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,1816),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,18),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,1816),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,36)))));
});
cljs.core.logic.t87394.prototype.cljs$core$logic$protocols$IConstraintOp$_rands$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.seq.call(null,cljs.core.logic.recover_vars.call(null,self__.p));
});
cljs.core.logic.t87394.prototype.cljs$core$logic$protocols$IReifiableConstraint$ = true;
cljs.core.logic.t87394.prototype.cljs$core$logic$protocols$IReifiableConstraint$_reifyc$arity$4 = (function (this$,v,r,a){var self__ = this;
var this$__$1 = this;var p_STAR_ = cljs.core.logic._reify.call(null,a,cljs.core.map.call(null,(function (p__87397){var vec__87398 = p__87397;var lhs = cljs.core.nth.call(null,vec__87398,0,null);var rhs = cljs.core.nth.call(null,vec__87398,1,null);return cljs.core.with_meta.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,lhs),cljs.core._conj.call(null,cljs.core.List.EMPTY,rhs))),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,1811),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,48),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,1811),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,59)))));
}),self__.p),r);if(cljs.core.empty_QMARK_.call(null,p_STAR_))
{return cljs.core.List.EMPTY;
} else
{return cljs.core.with_meta.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"!=","!=",-1640530443,null)),p_STAR_)),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,1814),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,12),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,1814),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,23)))));
}
});
cljs.core.logic.t87394.prototype.cljs$core$logic$protocols$IWithPrefix$ = true;
cljs.core.logic.t87394.prototype.cljs$core$logic$protocols$IWithPrefix$_with_prefix$arity$2 = (function (_,p__$2){var self__ = this;
var ___$1 = this;return self__._BANG__EQ_c.call(null,p__$2);
});
cljs.core.logic.t87394.prototype.cljs$core$logic$protocols$IPrefix$ = true;
cljs.core.logic.t87394.prototype.cljs$core$logic$protocols$IPrefix$_prefix$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.p;
});
cljs.core.logic.t87394.prototype.cljs$core$logic$protocols$IConstraintStep$ = true;
cljs.core.logic.t87394.prototype.cljs$core$logic$protocols$IConstraintStep$_step$arity$2 = (function (this$,s){var self__ = this;
var this$__$1 = this;if(typeof cljs.core.logic.t87399 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.t87399 = (function (s,this$,meta87395,p,_BANG__EQ_c,meta87400){
this.s = s;
this.this$ = this$;
this.meta87395 = meta87395;
this.p = p;
this._BANG__EQ_c = _BANG__EQ_c;
this.meta87400 = meta87400;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.logic.t87399.cljs$lang$type = true;
cljs.core.logic.t87399.cljs$lang$ctorStr = "cljs.core.logic/t87399";
cljs.core.logic.t87399.cljs$lang$ctorPrWriter = (function (this__7360__auto__,writer__7361__auto__,opt__7362__auto__){return cljs.core._write.call(null,writer__7361__auto__,"cljs.core.logic/t87399");
});
cljs.core.logic.t87399.prototype.cljs$core$logic$protocols$IEntailed$ = true;
cljs.core.logic.t87399.prototype.cljs$core$logic$protocols$IEntailed$_entailed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.empty_QMARK_.call(null,self__.p);
});
cljs.core.logic.t87399.prototype.cljs$core$logic$protocols$IRunnable$ = true;
cljs.core.logic.t87399.prototype.cljs$core$logic$protocols$IRunnable$_runnable_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.some.call(null,(function (p1__87382_SHARP_){return cljs.core.not_EQ_.call(null,cljs.core.logic.protocols.walk.call(null,self__.s,p1__87382_SHARP_),p1__87382_SHARP_);
}),cljs.core.logic.recover_vars.call(null,self__.p));
});
cljs.core.logic.t87399.prototype.call = (function (self__,s__$2){var self__ = this;
var self____$1 = this;var _ = self____$1;var p__$3 = (function (){var sp = cljs.core.seq.call(null,self__.p);var p__$3 = self__.p;while(true){
if(sp)
{var vec__87403 = cljs.core.first.call(null,sp);var x = cljs.core.nth.call(null,vec__87403,0,null);var v = cljs.core.nth.call(null,vec__87403,1,null);var xv = cljs.core.logic.walk_STAR_.call(null,s__$2,x);var vv = cljs.core.logic.walk_STAR_.call(null,s__$2,v);if(cljs.core._EQ_.call(null,xv,vv))
{{
var G__87405 = cljs.core.next.call(null,sp);
var G__87406 = cljs.core.dissoc.call(null,p__$3,x);
sp = G__87405;
p__$3 = G__87406;
continue;
}
} else
{if((cljs.core.logic.unify.call(null,s__$2,xv,vv) == null))
{return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__87407 = cljs.core.next.call(null,sp);
var G__87408 = cljs.core.assoc.call(null,cljs.core.dissoc.call(null,p__$3,x),xv,vv);
sp = G__87407;
p__$3 = G__87408;
continue;
}
} else
{return null;
}
}
}
} else
{return p__$3;
}
break;
}
})();if(cljs.core.truth_(p__$3))
{if(cljs.core.empty_QMARK_.call(null,p__$3))
{return null;
} else
{return cljs.core.logic.composeg.call(null,cljs.core.logic.remcg.call(null,self__.this$),cljs.core.logic.cgoal.call(null,self__._BANG__EQ_c.call(null,p__$3))).call(null,s__$2);
}
} else
{return cljs.core.logic.remcg.call(null,self__.this$).call(null,s__$2);
}
});
cljs.core.logic.t87399.prototype.apply = (function (self__,args87402){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args87402)));
});
cljs.core.logic.t87399.prototype.cljs$core$IFn$_invoke$arity$1 = (function (s__$2){var self__ = this;
var _ = this;var p__$3 = (function (){var sp = cljs.core.seq.call(null,self__.p);var p__$3 = self__.p;while(true){
if(sp)
{var vec__87404 = cljs.core.first.call(null,sp);var x = cljs.core.nth.call(null,vec__87404,0,null);var v = cljs.core.nth.call(null,vec__87404,1,null);var xv = cljs.core.logic.walk_STAR_.call(null,s__$2,x);var vv = cljs.core.logic.walk_STAR_.call(null,s__$2,v);if(cljs.core._EQ_.call(null,xv,vv))
{{
var G__87409 = cljs.core.next.call(null,sp);
var G__87410 = cljs.core.dissoc.call(null,p__$3,x);
sp = G__87409;
p__$3 = G__87410;
continue;
}
} else
{if((cljs.core.logic.unify.call(null,s__$2,xv,vv) == null))
{return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__87411 = cljs.core.next.call(null,sp);
var G__87412 = cljs.core.assoc.call(null,cljs.core.dissoc.call(null,p__$3,x),xv,vv);
sp = G__87411;
p__$3 = G__87412;
continue;
}
} else
{return null;
}
}
}
} else
{return p__$3;
}
break;
}
})();if(cljs.core.truth_(p__$3))
{if(cljs.core.empty_QMARK_.call(null,p__$3))
{return null;
} else
{return cljs.core.logic.composeg.call(null,cljs.core.logic.remcg.call(null,self__.this$),cljs.core.logic.cgoal.call(null,self__._BANG__EQ_c.call(null,p__$3))).call(null,s__$2);
}
} else
{return cljs.core.logic.remcg.call(null,self__.this$).call(null,s__$2);
}
});
cljs.core.logic.t87399.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_87401){var self__ = this;
var _87401__$1 = this;return self__.meta87400;
});
cljs.core.logic.t87399.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_87401,meta87400__$1){var self__ = this;
var _87401__$1 = this;return (new cljs.core.logic.t87399(self__.s,self__.this$,self__.meta87395,self__.p,self__._BANG__EQ_c,meta87400__$1));
});
cljs.core.logic.__GT_t87399 = (function __GT_t87399(s__$1,this$__$2,meta87395__$1,p__$2,_BANG__EQ_c__$2,meta87400){return (new cljs.core.logic.t87399(s__$1,this$__$2,meta87395__$1,p__$2,_BANG__EQ_c__$2,meta87400));
});
}
return (new cljs.core.logic.t87399(s,this$__$1,self__.meta87395,self__.p,self__._BANG__EQ_c,null));
});
cljs.core.logic.t87394.prototype.cljs$core$logic$protocols$ITreeConstraint$ = true;
cljs.core.logic.t87394.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_87396){var self__ = this;
var _87396__$1 = this;return self__.meta87395;
});
cljs.core.logic.t87394.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_87396,meta87395__$1){var self__ = this;
var _87396__$1 = this;return (new cljs.core.logic.t87394(self__.p,self__._BANG__EQ_c,meta87395__$1));
});
cljs.core.logic.__GT_t87394 = (function __GT_t87394(p__$1,_BANG__EQ_c__$1,meta87395){return (new cljs.core.logic.t87394(p__$1,_BANG__EQ_c__$1,meta87395));
});
}
return (new cljs.core.logic.t87394(p,_BANG__EQ_c,null));
});
/**
* Disequality constraint. Ensures that u and v will never
* unify. u and v can be complex terms.
*/
cljs.core.logic._BANG__EQ_ = (function _BANG__EQ_(u,v){return (function (a){var cs = cljs.core.logic.disunify.call(null,a,u,v);if(!((cs == null)))
{var p = new cljs.core.Keyword(null,"prefixc","prefixc",695243651).cljs$core$IFn$_invoke$arity$1(cs);if(cljs.core.empty_QMARK_.call(null,p))
{return null;
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p__87415){var vec__87416 = p__87415;var u__$1 = cljs.core.nth.call(null,vec__87416,0,null);var v__$1 = cljs.core.nth.call(null,vec__87416,1,null);return (cljs.core.logic.unify.call(null,a,u__$1,v__$1) == null);
}),p)))
{return a;
} else
{return cljs.core.logic.cgoal.call(null,cljs.core.logic._BANG__EQ_c.call(null,p)).call(null,a);
}
}
} else
{return a;
}
});
});
/**
* A relation which guarantees no element of l will unify
* with another element of l.
*/
cljs.core.logic.distincto = (function distincto(l){return (function (a87434){return (function _inc(){return cljs.core.logic.protocols.mplus.call(null,cljs.core.logic.protocols.bind.call(null,a87434,(function (a__64637__auto__){return (function _inc__$1(){return cljs.core.logic.protocols.bind.call(null,a__64637__auto__,cljs.core.logic._EQ__EQ_.call(null,cljs.core.List.EMPTY,l));
});
})),(function (){return cljs.core.logic.protocols.mplus.call(null,cljs.core.logic.protocols.bind.call(null,a87434,(function (a__64637__auto__){return (function _inc__$1(){var h = (new cljs.core.logic.LVar(87444,true,"h__87444",new cljs.core.Symbol(null,"h","h",-1640531423,null),2050328845,null));return cljs.core.logic.protocols.bind.call(null,a__64637__auto__,cljs.core.logic._EQ__EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [h], null),l));
});
})),(function (){return cljs.core.logic.protocols.bind.call(null,a87434,(function (a__64637__auto__){return (function _inc__$1(){var t = (new cljs.core.logic.LVar(87448,true,"t__87448",new cljs.core.Symbol(null,"t","t",-1640531411,null),1489216389,null));var h1 = (new cljs.core.logic.LVar(87449,true,"h1__87449",new cljs.core.Symbol(null,"h1","h1",-1640528254,null),1688337809,null));var h0 = (new cljs.core.logic.LVar(87450,true,"h0__87450",new cljs.core.Symbol(null,"h0","h0",-1640528255,null),-54472504,null));return cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,a__64637__auto__,cljs.core.logic._EQ__EQ_.call(null,cljs.core.logic.lcons.call(null,h0,cljs.core.logic.lcons.call(null,h1,t)),l)),cljs.core.logic._BANG__EQ_.call(null,h0,h1)),distincto.call(null,cljs.core.logic.lcons.call(null,h0,t))),distincto.call(null,cljs.core.logic.lcons.call(null,h1,t)));
});
}));
}));
}));
});
});
});
/**
* A relation between l and o where is removed from
* l exactly one time.
*/
cljs.core.logic.rembero = (function rembero(x,l,o){return (function (a87472){return (function _inc(){return cljs.core.logic.protocols.mplus.call(null,cljs.core.logic.protocols.bind.call(null,a87472,(function (a__64637__auto__){return (function _inc__$1(){var xs = (new cljs.core.logic.LVar(87484,true,"xs__87484",new cljs.core.Symbol(null,"xs","xs",-1640527692,null),1895202710,null));return cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,a__64637__auto__,cljs.core.logic._EQ__EQ_.call(null,cljs.core.logic.lcons.call(null,x,xs),l)),(function (a__64637__auto____$1){return (function _inc__$1(){return cljs.core.logic.protocols.bind.call(null,a__64637__auto____$1,cljs.core.logic._EQ__EQ_.call(null,xs,o));
});
}));
});
})),(function (){return cljs.core.logic.protocols.bind.call(null,a87472,(function (a__64637__auto__){return (function _inc__$1(){var ys = (new cljs.core.logic.LVar(87489,true,"ys__87489",new cljs.core.Symbol(null,"ys","ys",-1640527661,null),87748252,null));var y = (new cljs.core.logic.LVar(87490,true,"y__87490",new cljs.core.Symbol(null,"y","y",-1640531406,null),1613333619,null));return cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,a__64637__auto__,cljs.core.logic._EQ__EQ_.call(null,cljs.core.logic.lcons.call(null,y,ys),l)),(function (a__64637__auto____$1){return (function _inc__$1(){var zs = (new cljs.core.logic.LVar(87492,true,"zs__87492",new cljs.core.Symbol(null,"zs","zs",-1640527630,null),-1719706187,null));return cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,a__64637__auto____$1,cljs.core.logic._EQ__EQ_.call(null,cljs.core.logic.lcons.call(null,y,zs),o)),cljs.core.logic._BANG__EQ_.call(null,y,x)),rembero.call(null,x,ys,zs));
});
}));
});
}));
}));
});
});
});
cljs.core.logic.unify_with_pmap_STAR_ = (function unify_with_pmap_STAR_(u,v,s){var ks = cljs.core.keys.call(null,u);var s__$1 = s;while(true){
if(cljs.core.seq.call(null,ks))
{var kf = cljs.core.first.call(null,ks);var vf = cljs.core.get.call(null,v,kf,new cljs.core.Keyword("cljs.core.logic","not-found","cljs.core.logic/not-found",3358757009));if(cljs.core._EQ_.call(null,vf,new cljs.core.Keyword("cljs.core.logic","not-found","cljs.core.logic/not-found",3358757009)))
{return null;
} else
{var uf = cljs.core.get.call(null,u,kf);if(cljs.core.logic.lvar_QMARK_.call(null,vf))
{{
var G__87493 = cljs.core.next.call(null,ks);
var G__87494 = cljs.core.logic.featurec.call(null,vf,uf).call(null,s__$1);
ks = G__87493;
s__$1 = G__87494;
continue;
}
} else
{if(cljs.core.map_QMARK_.call(null,uf))
{var temp__4096__auto__ = cljs.core.logic.unify.call(null,s__$1,cljs.core.logic.partial_map.call(null,uf),vf);if(cljs.core.truth_(temp__4096__auto__))
{var s__$2 = temp__4096__auto__;{
var G__87495 = cljs.core.next.call(null,ks);
var G__87496 = s__$2;
ks = G__87495;
s__$1 = G__87496;
continue;
}
} else
{return null;
}
} else
{var temp__4096__auto__ = cljs.core.logic.unify.call(null,s__$1,uf,vf);if(cljs.core.truth_(temp__4096__auto__))
{var s__$2 = temp__4096__auto__;{
var G__87497 = cljs.core.next.call(null,ks);
var G__87498 = s__$2;
ks = G__87497;
s__$1 = G__87498;
continue;
}
} else
{return null;
}
}
}
}
} else
{return s__$1;
}
break;
}
});

/**
* @constructor
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
cljs.core.logic.PMap = (function (__meta,__extmap){
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
if(arguments.length>0){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
cljs.core.logic.PMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7373__auto__){var self__ = this;
var this__7373__auto____$1 = this;var h__7227__auto__ = self__.__hash;if(!((h__7227__auto__ == null)))
{return h__7227__auto__;
} else
{var h__7227__auto____$1 = cljs.core.hash_imap.call(null,this__7373__auto____$1);self__.__hash = h__7227__auto____$1;
return h__7227__auto____$1;
}
});
cljs.core.logic.PMap.prototype.cljs$core$logic$protocols$IUnifyTerms$ = true;
cljs.core.logic.PMap.prototype.cljs$core$logic$protocols$IUnifyTerms$unify_terms$arity$3 = (function (u,v,s){var self__ = this;
var u__$1 = this;if(cljs.core.map_QMARK_.call(null,v))
{return cljs.core.logic.unify_with_pmap_STAR_.call(null,u__$1,v,s);
} else
{return null;
}
});
cljs.core.logic.PMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7378__auto__,k__7379__auto__){var self__ = this;
var this__7378__auto____$1 = this;return cljs.core._lookup.call(null,this__7378__auto____$1,k__7379__auto__,null);
});
cljs.core.logic.PMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7380__auto__,k87500,else__7381__auto__){var self__ = this;
var this__7380__auto____$1 = this;if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k87500,else__7381__auto__);
} else
{return null;
}
});
cljs.core.logic.PMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7385__auto__,k__7386__auto__,G__87499){var self__ = this;
var this__7385__auto____$1 = this;var pred__87502 = cljs.core.keyword_identical_QMARK_;var expr__87503 = k__7386__auto__;return (new cljs.core.logic.PMap(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7386__auto__,G__87499),null));
});
cljs.core.logic.PMap.prototype.cljs$core$logic$protocols$IUnifyWithRecord$ = true;
cljs.core.logic.PMap.prototype.cljs$core$logic$protocols$IUnifyWithRecord$unify_with_record$arity$3 = (function (u,v,s){var self__ = this;
var u__$1 = this;if(cljs.core.map_QMARK_.call(null,v))
{return cljs.core.logic.unify_with_pmap_STAR_.call(null,u__$1,v,s);
} else
{return null;
}
});
cljs.core.logic.PMap.prototype.cljs$core$logic$protocols$IUninitialized$ = true;
cljs.core.logic.PMap.prototype.cljs$core$logic$protocols$IUninitialized$_uninitialized$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.logic.PMap());
});
cljs.core.logic.PMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7392__auto__,writer__7393__auto__,opts__7394__auto__){var self__ = this;
var this__7392__auto____$1 = this;var pr_pair__7395__auto__ = (function (keyval__7396__auto__){return cljs.core.pr_sequential_writer.call(null,writer__7393__auto__,cljs.core.pr_writer,""," ","",opts__7394__auto__,keyval__7396__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__7393__auto__,pr_pair__7395__auto__,"#cljs.core.logic.PMap{",", ","}",opts__7394__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});
cljs.core.logic.PMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7383__auto__,entry__7384__auto__){var self__ = this;
var this__7383__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__7384__auto__))
{return cljs.core._assoc.call(null,this__7383__auto____$1,cljs.core._nth.call(null,entry__7384__auto__,0),cljs.core._nth.call(null,entry__7384__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__7383__auto____$1,entry__7384__auto__);
}
});
cljs.core.logic.PMap.prototype.cljs$core$logic$protocols$INonStorable$ = true;
cljs.core.logic.PMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7390__auto__){var self__ = this;
var this__7390__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});
cljs.core.logic.PMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7382__auto__){var self__ = this;
var this__7382__auto____$1 = this;return (0 + cljs.core.count.call(null,self__.__extmap));
});
cljs.core.logic.PMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7374__auto__,other__7375__auto__){var self__ = this;
var this__7374__auto____$1 = this;if(cljs.core.truth_((function (){var and__6804__auto__ = other__7375__auto__;if(cljs.core.truth_(and__6804__auto__))
{return ((this__7374__auto____$1.constructor === other__7375__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__7374__auto____$1,other__7375__auto__));
} else
{return and__6804__auto__;
}
})()))
{return true;
} else
{return false;
}
});
cljs.core.logic.PMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7377__auto__,G__87499){var self__ = this;
var this__7377__auto____$1 = this;return (new cljs.core.logic.PMap(G__87499,self__.__extmap,self__.__hash));
});
cljs.core.logic.PMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7376__auto__){var self__ = this;
var this__7376__auto____$1 = this;return self__.__meta;
});
cljs.core.logic.PMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7387__auto__,k__7388__auto__){var self__ = this;
var this__7387__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__7388__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7387__auto____$1),self__.__meta),k__7388__auto__);
} else
{return (new cljs.core.logic.PMap(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7388__auto__)),null));
}
});
cljs.core.logic.PMap.cljs$lang$type = true;
cljs.core.logic.PMap.cljs$lang$ctorPrSeq = (function (this__7412__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.core.logic/PMap");
});
cljs.core.logic.PMap.cljs$lang$ctorPrWriter = (function (this__7412__auto__,writer__7413__auto__){return cljs.core._write.call(null,writer__7413__auto__,"cljs.core.logic/PMap");
});
cljs.core.logic.__GT_PMap = (function __GT_PMap(){return (new cljs.core.logic.PMap());
});
cljs.core.logic.map__GT_PMap = (function map__GT_PMap(G__87501){return (new cljs.core.logic.PMap(null,cljs.core.dissoc.call(null,G__87501)));
});
/**
* Given map m, returns partial map that unifies with maps even if it
* doesn't share all of the keys of that map.
*/
cljs.core.logic.partial_map = (function partial_map(m){return cljs.core.logic.map__GT_PMap.call(null,m);
});
cljs.core.logic.partial_map_QMARK_ = (function partial_map_QMARK_(x){return (x instanceof cljs.core.logic.PMap);
});
(cljs.core.logic.protocols.IFeature["_"] = true);
(cljs.core.logic.protocols._feature["_"] = (function (x){if(cljs.core.map_QMARK_.call(null,x))
{return cljs.core.logic.partial_map.call(null,x);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return null;
} else
{return null;
}
}
}));
cljs.core.logic._featurec = (function _featurec(x,fs){if(typeof cljs.core.logic.t87512 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.t87512 = (function (fs,x,_featurec,meta87513){
this.fs = fs;
this.x = x;
this._featurec = _featurec;
this.meta87513 = meta87513;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.logic.t87512.cljs$lang$type = true;
cljs.core.logic.t87512.cljs$lang$ctorStr = "cljs.core.logic/t87512";
cljs.core.logic.t87512.cljs$lang$ctorPrWriter = (function (this__7360__auto__,writer__7361__auto__,opt__7362__auto__){return cljs.core._write.call(null,writer__7361__auto__,"cljs.core.logic/t87512");
});
cljs.core.logic.t87512.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$ = true;
cljs.core.logic.t87512.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$_watched_stores$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440),null], null), null);
});
cljs.core.logic.t87512.prototype.cljs$core$logic$protocols$IReifiableConstraint$ = true;
cljs.core.logic.t87512.prototype.cljs$core$logic$protocols$IReifiableConstraint$_reifyc$arity$4 = (function (_,v,r,a){var self__ = this;
var ___$1 = this;var fs__$2 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,self__.fs);var r__$1 = cljs.core.logic._reify_STAR_.call(null,r,cljs.core.logic.walk_STAR_.call(null,a,fs__$2));return cljs.core.with_meta.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic","featurec","cljs.core.logic/featurec",-851976461,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,1933),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,11),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,1933),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,19)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.logic.walk_STAR_.call(null,r__$1,self__.x)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.logic.walk_STAR_.call(null,r__$1,fs__$2)))),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,1933),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,10),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,1933),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,47)))));
});
cljs.core.logic.t87512.prototype.cljs$core$logic$protocols$IConstraintOp$ = true;
cljs.core.logic.t87512.prototype.cljs$core$logic$protocols$IConstraintOp$_rator$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic","featurec","cljs.core.logic/featurec",-851976461,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,1927),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,18),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,1927),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,42)))));
});
cljs.core.logic.t87512.prototype.cljs$core$logic$protocols$IConstraintOp$_rands$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.x], null);
});
cljs.core.logic.t87512.prototype.cljs$core$logic$protocols$IConstraintStep$ = true;
cljs.core.logic.t87512.prototype.cljs$core$logic$protocols$IConstraintStep$_step$arity$2 = (function (this$,s){var self__ = this;
var this$__$1 = this;if(typeof cljs.core.logic.t87515 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.t87515 = (function (s,this$,meta87513,fs,x,_featurec,meta87516){
this.s = s;
this.this$ = this$;
this.meta87513 = meta87513;
this.fs = fs;
this.x = x;
this._featurec = _featurec;
this.meta87516 = meta87516;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.logic.t87515.cljs$lang$type = true;
cljs.core.logic.t87515.cljs$lang$ctorStr = "cljs.core.logic/t87515";
cljs.core.logic.t87515.cljs$lang$ctorPrWriter = (function (this__7360__auto__,writer__7361__auto__,opt__7362__auto__){return cljs.core._write.call(null,writer__7361__auto__,"cljs.core.logic/t87515");
});
cljs.core.logic.t87515.prototype.cljs$core$logic$protocols$IRunnable$ = true;
cljs.core.logic.t87515.prototype.cljs$core$logic$protocols$IRunnable$_runnable_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return !(cljs.core.logic.lvar_QMARK_.call(null,cljs.core.logic.protocols.walk.call(null,self__.s,self__.x)));
});
cljs.core.logic.t87515.prototype.call = (function (self__,s__$2){var self__ = this;
var self____$1 = this;var _ = self____$1;return cljs.core.logic.composeg.call(null,cljs.core.logic._EQ__EQ_.call(null,self__.fs,self__.x),cljs.core.logic.remcg.call(null,self__.this$)).call(null,s__$2);
});
cljs.core.logic.t87515.prototype.apply = (function (self__,args87518){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args87518)));
});
cljs.core.logic.t87515.prototype.cljs$core$IFn$_invoke$arity$1 = (function (s__$2){var self__ = this;
var _ = this;return cljs.core.logic.composeg.call(null,cljs.core.logic._EQ__EQ_.call(null,self__.fs,self__.x),cljs.core.logic.remcg.call(null,self__.this$)).call(null,s__$2);
});
cljs.core.logic.t87515.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_87517){var self__ = this;
var _87517__$1 = this;return self__.meta87516;
});
cljs.core.logic.t87515.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_87517,meta87516__$1){var self__ = this;
var _87517__$1 = this;return (new cljs.core.logic.t87515(self__.s,self__.this$,self__.meta87513,self__.fs,self__.x,self__._featurec,meta87516__$1));
});
cljs.core.logic.__GT_t87515 = (function __GT_t87515(s__$1,this$__$2,meta87513__$1,fs__$2,x__$2,_featurec__$2,meta87516){return (new cljs.core.logic.t87515(s__$1,this$__$2,meta87513__$1,fs__$2,x__$2,_featurec__$2,meta87516));
});
}
return (new cljs.core.logic.t87515(s,this$__$1,self__.meta87513,self__.fs,self__.x,self__._featurec,null));
});
cljs.core.logic.t87512.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_87514){var self__ = this;
var _87514__$1 = this;return self__.meta87513;
});
cljs.core.logic.t87512.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_87514,meta87513__$1){var self__ = this;
var _87514__$1 = this;return (new cljs.core.logic.t87512(self__.fs,self__.x,self__._featurec,meta87513__$1));
});
cljs.core.logic.__GT_t87512 = (function __GT_t87512(fs__$1,x__$1,_featurec__$1,meta87513){return (new cljs.core.logic.t87512(fs__$1,x__$1,_featurec__$1,meta87513));
});
}
return (new cljs.core.logic.t87512(fs,x,_featurec,null));
});
/**
* Ensure that a map contains at least the key-value pairs
* in the map fs. fs must be partially instantiated - that is,
* it may contain values which are logic variables to support
* feature extraction.
*/
cljs.core.logic.featurec = (function featurec(x,fs){return cljs.core.logic.cgoal.call(null,cljs.core.logic._featurec.call(null,x,cljs.core.logic.partial_map.call(null,fs)));
});
cljs.core.logic.ground_term_QMARK_ = (function ground_term_QMARK_(x,s){var _ground_term_QMARK_ = (function _ground_term_QMARK_(x__$1,s__$1){var x__$2 = cljs.core.logic.protocols.walk.call(null,s__$1,x__$1);if(cljs.core.logic.lvar_QMARK_.call(null,x__$2))
{throw cljs.core.logic.fk;
} else
{return cljs.core.logic.protocols.walk_term.call(null,x__$2,(function (x__$3){var x__$4 = cljs.core.logic.protocols.walk.call(null,s__$1,x__$3);if(cljs.core.logic.lvar_QMARK_.call(null,x__$4))
{throw cljs.core.logic.fk;
} else
{if(cljs.core.logic.tree_term_QMARK_.call(null,x__$4))
{return _ground_term_QMARK_.call(null,x__$4,s__$1);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return x__$4;
} else
{return null;
}
}
}
}));
}
});
try{_ground_term_QMARK_.call(null,x,s);
return true;
}catch (e87520){if((e87520 instanceof Error))
{var e = e87520;return false;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e87520;
} else
{return null;
}
}
}});
cljs.core.logic._predc = (function() {
var _predc = null;
var _predc__2 = (function (x,p){return _predc.call(null,x,p,p);
});
var _predc__3 = (function (x,p,pform){if(typeof cljs.core.logic.t87528 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.t87528 = (function (pform,p,x,_predc,meta87529){
this.pform = pform;
this.p = p;
this.x = x;
this._predc = _predc;
this.meta87529 = meta87529;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.logic.t87528.cljs$lang$type = true;
cljs.core.logic.t87528.cljs$lang$ctorStr = "cljs.core.logic/t87528";
cljs.core.logic.t87528.cljs$lang$ctorPrWriter = (function (this__7360__auto__,writer__7361__auto__,opt__7362__auto__){return cljs.core._write.call(null,writer__7361__auto__,"cljs.core.logic/t87528");
});
cljs.core.logic.t87528.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$ = true;
cljs.core.logic.t87528.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$_watched_stores$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440),null], null), null);
});
cljs.core.logic.t87528.prototype.cljs$core$logic$protocols$IReifiableConstraint$ = true;
cljs.core.logic.t87528.prototype.cljs$core$logic$protocols$IReifiableConstraint$_reifyc$arity$4 = (function (c,v,r,s){var self__ = this;
var c__$1 = this;if((cljs.core.not_EQ_.call(null,self__.p,self__.pform)) && (cljs.core.fn_QMARK_.call(null,self__.pform)))
{return self__.pform.call(null,c__$1,v,r,s);
} else
{return self__.pform;
}
});
cljs.core.logic.t87528.prototype.cljs$core$logic$protocols$IConstraintOp$ = true;
cljs.core.logic.t87528.prototype.cljs$core$logic$protocols$IConstraintOp$_rator$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(cljs.core.seq_QMARK_.call(null,self__.pform))
{return cljs.core.with_meta.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic","predc","cljs.core.logic/predc",895622310,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,1986),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,24),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,1986),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,29)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,self__.pform))),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,1986),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,23),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,1986),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,37)))));
} else
{return cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic","predc","cljs.core.logic/predc",895622310,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,1987),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,23),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,1987),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,44)))));
}
});
cljs.core.logic.t87528.prototype.cljs$core$logic$protocols$IConstraintOp$_rands$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.x], null);
});
cljs.core.logic.t87528.prototype.cljs$core$logic$protocols$IConstraintStep$ = true;
cljs.core.logic.t87528.prototype.cljs$core$logic$protocols$IConstraintStep$_step$arity$2 = (function (this$,s){var self__ = this;
var this$__$1 = this;if(typeof cljs.core.logic.t87531 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.t87531 = (function (s,this$,meta87529,pform,p,x,_predc,meta87532){
this.s = s;
this.this$ = this$;
this.meta87529 = meta87529;
this.pform = pform;
this.p = p;
this.x = x;
this._predc = _predc;
this.meta87532 = meta87532;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.logic.t87531.cljs$lang$type = true;
cljs.core.logic.t87531.cljs$lang$ctorStr = "cljs.core.logic/t87531";
cljs.core.logic.t87531.cljs$lang$ctorPrWriter = (function (this__7360__auto__,writer__7361__auto__,opt__7362__auto__){return cljs.core._write.call(null,writer__7361__auto__,"cljs.core.logic/t87531");
});
cljs.core.logic.t87531.prototype.cljs$core$logic$protocols$IRunnable$ = true;
cljs.core.logic.t87531.prototype.cljs$core$logic$protocols$IRunnable$_runnable_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return !(cljs.core.logic.lvar_QMARK_.call(null,cljs.core.logic.protocols.walk.call(null,self__.s,self__.x)));
});
cljs.core.logic.t87531.prototype.call = (function (self__,s__$2){var self__ = this;
var self____$1 = this;var _ = self____$1;var x__$3 = cljs.core.logic.protocols.walk.call(null,s__$2,self__.x);if(cljs.core.truth_(self__.p.call(null,x__$3)))
{return cljs.core.logic.remcg.call(null,self__.this$).call(null,s__$2);
} else
{return null;
}
});
cljs.core.logic.t87531.prototype.apply = (function (self__,args87534){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args87534)));
});
cljs.core.logic.t87531.prototype.cljs$core$IFn$_invoke$arity$1 = (function (s__$2){var self__ = this;
var _ = this;var x__$3 = cljs.core.logic.protocols.walk.call(null,s__$2,self__.x);if(cljs.core.truth_(self__.p.call(null,x__$3)))
{return cljs.core.logic.remcg.call(null,self__.this$).call(null,s__$2);
} else
{return null;
}
});
cljs.core.logic.t87531.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_87533){var self__ = this;
var _87533__$1 = this;return self__.meta87532;
});
cljs.core.logic.t87531.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_87533,meta87532__$1){var self__ = this;
var _87533__$1 = this;return (new cljs.core.logic.t87531(self__.s,self__.this$,self__.meta87529,self__.pform,self__.p,self__.x,self__._predc,meta87532__$1));
});
cljs.core.logic.__GT_t87531 = (function __GT_t87531(s__$1,this$__$2,meta87529__$1,pform__$2,p__$2,x__$2,_predc__$2,meta87532){return (new cljs.core.logic.t87531(s__$1,this$__$2,meta87529__$1,pform__$2,p__$2,x__$2,_predc__$2,meta87532));
});
}
return (new cljs.core.logic.t87531(s,this$__$1,self__.meta87529,self__.pform,self__.p,self__.x,self__._predc,null));
});
cljs.core.logic.t87528.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_87530){var self__ = this;
var _87530__$1 = this;return self__.meta87529;
});
cljs.core.logic.t87528.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_87530,meta87529__$1){var self__ = this;
var _87530__$1 = this;return (new cljs.core.logic.t87528(self__.pform,self__.p,self__.x,self__._predc,meta87529__$1));
});
cljs.core.logic.__GT_t87528 = (function __GT_t87528(pform__$1,p__$1,x__$1,_predc__$1,meta87529){return (new cljs.core.logic.t87528(pform__$1,p__$1,x__$1,_predc__$1,meta87529));
});
}
return (new cljs.core.logic.t87528(pform,p,x,_predc,null));
});
_predc = function(x,p,pform){
switch(arguments.length){
case 2:
return _predc__2.call(this,x,p);
case 3:
return _predc__3.call(this,x,p,pform);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_predc.cljs$core$IFn$_invoke$arity$2 = _predc__2;
_predc.cljs$core$IFn$_invoke$arity$3 = _predc__3;
return _predc;
})()
;
cljs.core.logic.predc = (function() {
var predc = null;
var predc__2 = (function (x,p){return predc.call(null,x,p,p);
});
var predc__3 = (function (x,p,pform){return cljs.core.logic.cgoal.call(null,cljs.core.logic._predc.call(null,x,p,pform));
});
predc = function(x,p,pform){
switch(arguments.length){
case 2:
return predc__2.call(this,x,p);
case 3:
return predc__3.call(this,x,p,pform);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
predc.cljs$core$IFn$_invoke$arity$2 = predc__2;
predc.cljs$core$IFn$_invoke$arity$3 = predc__3;
return predc;
})()
;
cljs.core.logic.tramp = (function tramp(f){var f__$1 = f;while(true){
if(cljs.core.fn_QMARK_.call(null,f__$1))
{{
var G__87535 = f__$1.call(null);
f__$1 = G__87535;
continue;
}
} else
{return f__$1;
}
break;
}
});
cljs.core.logic._nafc = (function _nafc(c,args){if(typeof cljs.core.logic.t87544 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.t87544 = (function (args,c,_nafc,meta87545){
this.args = args;
this.c = c;
this._nafc = _nafc;
this.meta87545 = meta87545;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.logic.t87544.cljs$lang$type = true;
cljs.core.logic.t87544.cljs$lang$ctorStr = "cljs.core.logic/t87544";
cljs.core.logic.t87544.cljs$lang$ctorPrWriter = (function (this__7360__auto__,writer__7361__auto__,opt__7362__auto__){return cljs.core._write.call(null,writer__7361__auto__,"cljs.core.logic/t87544");
});
cljs.core.logic.t87544.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$ = true;
cljs.core.logic.t87544.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$_watched_stores$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440),null], null), null);
});
cljs.core.logic.t87544.prototype.cljs$core$logic$protocols$IReifiableConstraint$ = true;
cljs.core.logic.t87544.prototype.cljs$core$logic$protocols$IReifiableConstraint$_reifyc$arity$4 = (function (_,v,r,s){var self__ = this;
var ___$1 = this;return cljs.core.with_meta.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic","nafc","cljs.core.logic/nafc",1019102320,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2029),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,12),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2029),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,16)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,self__.c),cljs.core.logic._reify.call(null,s,self__.args,r))),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2029),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,11),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2029),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,40)))));
});
cljs.core.logic.t87544.prototype.cljs$core$logic$protocols$IConstraintOp$ = true;
cljs.core.logic.t87544.prototype.cljs$core$logic$protocols$IConstraintOp$_rator$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic","nafc","cljs.core.logic/nafc",1019102320,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2025),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,21),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2025),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,41)))));
});
cljs.core.logic.t87544.prototype.cljs$core$logic$protocols$IConstraintOp$_rands$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.c], null),self__.args));
});
cljs.core.logic.t87544.prototype.cljs$core$logic$protocols$IConstraintStep$ = true;
cljs.core.logic.t87544.prototype.cljs$core$logic$protocols$IConstraintStep$_step$arity$2 = (function (this$,s){var self__ = this;
var this$__$1 = this;if(typeof cljs.core.logic.t87547 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.t87547 = (function (s,this$,meta87545,args,c,_nafc,meta87548){
this.s = s;
this.this$ = this$;
this.meta87545 = meta87545;
this.args = args;
this.c = c;
this._nafc = _nafc;
this.meta87548 = meta87548;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.logic.t87547.cljs$lang$type = true;
cljs.core.logic.t87547.cljs$lang$ctorStr = "cljs.core.logic/t87547";
cljs.core.logic.t87547.cljs$lang$ctorPrWriter = (function (this__7360__auto__,writer__7361__auto__,opt__7362__auto__){return cljs.core._write.call(null,writer__7361__auto__,"cljs.core.logic/t87547");
});
cljs.core.logic.t87547.prototype.cljs$core$logic$protocols$IRunnable$ = true;
cljs.core.logic.t87547.prototype.cljs$core$logic$protocols$IRunnable$_runnable_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.every_QMARK_.call(null,(function (p1__87536_SHARP_){return cljs.core.logic.ground_term_QMARK_.call(null,p1__87536_SHARP_,self__.s);
}),self__.args);
});
cljs.core.logic.t87547.prototype.call = (function (self__,s__$2){var self__ = this;
var self____$1 = this;var _ = self____$1;if(cljs.core.truth_(cljs.core.logic.tramp.call(null,cljs.core.apply.call(null,self__.c,self__.args).call(null,s__$2))))
{return null;
} else
{return cljs.core.logic.remcg.call(null,self__.this$).call(null,s__$2);
}
});
cljs.core.logic.t87547.prototype.apply = (function (self__,args87550){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args87550)));
});
cljs.core.logic.t87547.prototype.cljs$core$IFn$_invoke$arity$1 = (function (s__$2){var self__ = this;
var _ = this;if(cljs.core.truth_(cljs.core.logic.tramp.call(null,cljs.core.apply.call(null,self__.c,self__.args).call(null,s__$2))))
{return null;
} else
{return cljs.core.logic.remcg.call(null,self__.this$).call(null,s__$2);
}
});
cljs.core.logic.t87547.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_87549){var self__ = this;
var _87549__$1 = this;return self__.meta87548;
});
cljs.core.logic.t87547.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_87549,meta87548__$1){var self__ = this;
var _87549__$1 = this;return (new cljs.core.logic.t87547(self__.s,self__.this$,self__.meta87545,self__.args,self__.c,self__._nafc,meta87548__$1));
});
cljs.core.logic.__GT_t87547 = (function __GT_t87547(s__$1,this$__$2,meta87545__$1,args__$2,c__$2,_nafc__$2,meta87548){return (new cljs.core.logic.t87547(s__$1,this$__$2,meta87545__$1,args__$2,c__$2,_nafc__$2,meta87548));
});
}
return (new cljs.core.logic.t87547(s,this$__$1,self__.meta87545,self__.args,self__.c,self__._nafc,null));
});
cljs.core.logic.t87544.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_87546){var self__ = this;
var _87546__$1 = this;return self__.meta87545;
});
cljs.core.logic.t87544.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_87546,meta87545__$1){var self__ = this;
var _87546__$1 = this;return (new cljs.core.logic.t87544(self__.args,self__.c,self__._nafc,meta87545__$1));
});
cljs.core.logic.__GT_t87544 = (function __GT_t87544(args__$1,c__$1,_nafc__$1,meta87545){return (new cljs.core.logic.t87544(args__$1,c__$1,_nafc__$1,meta87545));
});
}
return (new cljs.core.logic.t87544(args,c,_nafc,null));
});
/**
* EXPERIMENTAL: negation as failure constraint. All arguments to the goal c
* must be ground. If some argument is not ground the execution of this
* constraint will be delayed.
* @param {...*} var_args
*/
cljs.core.logic.nafc = (function() { 
var nafc__delegate = function (c,args){return cljs.core.logic.cgoal.call(null,cljs.core.logic._nafc.call(null,c,args));
};
var nafc = function (c,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return nafc__delegate.call(this,c,args);};
nafc.cljs$lang$maxFixedArity = 1;
nafc.cljs$lang$applyTo = (function (arglist__87551){
var c = cljs.core.first(arglist__87551);
var args = cljs.core.rest(arglist__87551);
return nafc__delegate(c,args);
});
nafc.cljs$core$IFn$_invoke$arity$variadic = nafc__delegate;
return nafc;
})()
;
(cljs.core.logic.protocols.IConstrainTree["_"] = true);
(cljs.core.logic.protocols._constrain_tree["_"] = (function (t,fc,s){if(cljs.core.sequential_QMARK_.call(null,t))
{var t__$1 = cljs.core.seq.call(null,t);var s__$1 = s;while(true){
if(t__$1)
{var temp__4098__auto__ = fc.call(null,cljs.core.first.call(null,t__$1),s__$1);if(cljs.core.truth_(temp__4098__auto__))
{var s__$2 = temp__4098__auto__;{
var G__87553 = cljs.core.next.call(null,t__$1);
var G__87554 = s__$2;
t__$1 = G__87553;
s__$1 = G__87554;
continue;
}
} else
{return null;
}
} else
{return s__$1;
}
break;
}
} else
{if(cljs.core.map_QMARK_.call(null,t))
{var t__$1 = cljs.core.seq.call(null,t);var s__$1 = s;while(true){
if(t__$1)
{var vec__87552 = cljs.core.first.call(null,t__$1);var _ = cljs.core.nth.call(null,vec__87552,0,null);var v = cljs.core.nth.call(null,vec__87552,1,null);var s__$2 = fc.call(null,v,s__$1);if(cljs.core.truth_(s__$2))
{{
var G__87555 = cljs.core.next.call(null,t__$1);
var G__87556 = s__$2;
t__$1 = G__87555;
s__$1 = G__87556;
continue;
}
} else
{return null;
}
} else
{return s__$1;
}
break;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return null;
} else
{return null;
}
}
}
}));
cljs.core.logic.LCons.prototype.cljs$core$logic$protocols$IConstrainTree$ = true;
cljs.core.logic.LCons.prototype.cljs$core$logic$protocols$IConstrainTree$_constrain_tree$arity$3 = (function (t,fc,s){var t__$1 = this;var t__$2 = t__$1;var s__$1 = s;while(true){
if(cljs.core.logic.lvar_QMARK_.call(null,t__$2))
{return fc.call(null,t__$2,s__$1);
} else
{var temp__4098__auto__ = fc.call(null,cljs.core.logic.protocols.lfirst.call(null,t__$2),s__$1);if(cljs.core.truth_(temp__4098__auto__))
{var s__$2 = temp__4098__auto__;{
var G__87557 = cljs.core.logic.protocols.lnext.call(null,t__$2);
var G__87558 = s__$2;
t__$2 = G__87557;
s__$1 = G__87558;
continue;
}
} else
{return null;
}
}
break;
}
});
cljs.core.logic.constrain_tree = (function constrain_tree(t,fc){return (function (a){return cljs.core.logic.protocols._constrain_tree.call(null,t,fc,a);
});
});
cljs.core.logic._fixc = (function() {
var _fixc = null;
var _fixc__3 = (function (x,f,reifier){return _fixc.call(null,x,f,null,reifier);
});
var _fixc__4 = (function (x,f,runnable,reifier){if(typeof cljs.core.logic.t87566 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.t87566 = (function (reifier,runnable,f,x,_fixc,meta87567){
this.reifier = reifier;
this.runnable = runnable;
this.f = f;
this.x = x;
this._fixc = _fixc;
this.meta87567 = meta87567;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.logic.t87566.cljs$lang$type = true;
cljs.core.logic.t87566.cljs$lang$ctorStr = "cljs.core.logic/t87566";
cljs.core.logic.t87566.cljs$lang$ctorPrWriter = (function (this__7360__auto__,writer__7361__auto__,opt__7362__auto__){return cljs.core._write.call(null,writer__7361__auto__,"cljs.core.logic/t87566");
});
cljs.core.logic.t87566.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$ = true;
cljs.core.logic.t87566.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$_watched_stores$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440),null], null), null);
});
cljs.core.logic.t87566.prototype.cljs$core$logic$protocols$IReifiableConstraint$ = true;
cljs.core.logic.t87566.prototype.cljs$core$logic$protocols$IReifiableConstraint$_reifyc$arity$4 = (function (c,v,r,s){var self__ = this;
var c__$1 = this;if(cljs.core.fn_QMARK_.call(null,self__.reifier))
{return self__.reifier.call(null,c__$1,self__.x,v,r,s);
} else
{var x__$2 = cljs.core.logic.walk_STAR_.call(null,r,self__.x);return cljs.core.with_meta.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic","fixc","cljs.core.logic/fixc",1018347826,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2100),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,16),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2100),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,20)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,x__$2),cljs.core._conj.call(null,cljs.core.List.EMPTY,self__.reifier))),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2100),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,15),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2100),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,33)))));
}
});
cljs.core.logic.t87566.prototype.cljs$core$logic$protocols$IConstraintOp$ = true;
cljs.core.logic.t87566.prototype.cljs$core$logic$protocols$IConstraintOp$_rator$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic","fixc","cljs.core.logic/fixc",1018347826,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2093),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,21),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2093),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,41)))));
});
cljs.core.logic.t87566.prototype.cljs$core$logic$protocols$IConstraintOp$_rands$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(cljs.core.vector_QMARK_.call(null,self__.x))
{return self__.x;
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.x], null);
}
});
cljs.core.logic.t87566.prototype.cljs$core$logic$protocols$IConstraintStep$ = true;
cljs.core.logic.t87566.prototype.cljs$core$logic$protocols$IConstraintStep$_step$arity$2 = (function (this$,s){var self__ = this;
var this$__$1 = this;var xv = cljs.core.logic.protocols.walk.call(null,s,self__.x);if(typeof cljs.core.logic.t87569 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.t87569 = (function (xv,s,this$,meta87567,reifier,runnable,f,x,_fixc,meta87570){
this.xv = xv;
this.s = s;
this.this$ = this$;
this.meta87567 = meta87567;
this.reifier = reifier;
this.runnable = runnable;
this.f = f;
this.x = x;
this._fixc = _fixc;
this.meta87570 = meta87570;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.logic.t87569.cljs$lang$type = true;
cljs.core.logic.t87569.cljs$lang$ctorStr = "cljs.core.logic/t87569";
cljs.core.logic.t87569.cljs$lang$ctorPrWriter = (function (this__7360__auto__,writer__7361__auto__,opt__7362__auto__){return cljs.core._write.call(null,writer__7361__auto__,"cljs.core.logic/t87569");
});
cljs.core.logic.t87569.prototype.cljs$core$logic$protocols$IRunnable$ = true;
cljs.core.logic.t87569.prototype.cljs$core$logic$protocols$IRunnable$_runnable_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(cljs.core.fn_QMARK_.call(null,self__.runnable))
{return self__.runnable.call(null,self__.x,self__.s);
} else
{return !(cljs.core.logic.lvar_QMARK_.call(null,self__.xv));
}
});
cljs.core.logic.t87569.prototype.call = (function (self__,s__$2){var self__ = this;
var self____$1 = this;var _ = self____$1;return cljs.core.logic.composeg.call(null,self__.f.call(null,self__.xv,s__$2,self__.reifier),cljs.core.logic.remcg.call(null,self__.this$)).call(null,s__$2);
});
cljs.core.logic.t87569.prototype.apply = (function (self__,args87572){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args87572)));
});
cljs.core.logic.t87569.prototype.cljs$core$IFn$_invoke$arity$1 = (function (s__$2){var self__ = this;
var _ = this;return cljs.core.logic.composeg.call(null,self__.f.call(null,self__.xv,s__$2,self__.reifier),cljs.core.logic.remcg.call(null,self__.this$)).call(null,s__$2);
});
cljs.core.logic.t87569.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_87571){var self__ = this;
var _87571__$1 = this;return self__.meta87570;
});
cljs.core.logic.t87569.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_87571,meta87570__$1){var self__ = this;
var _87571__$1 = this;return (new cljs.core.logic.t87569(self__.xv,self__.s,self__.this$,self__.meta87567,self__.reifier,self__.runnable,self__.f,self__.x,self__._fixc,meta87570__$1));
});
cljs.core.logic.__GT_t87569 = (function __GT_t87569(xv__$1,s__$1,this$__$2,meta87567__$1,reifier__$2,runnable__$2,f__$2,x__$2,_fixc__$2,meta87570){return (new cljs.core.logic.t87569(xv__$1,s__$1,this$__$2,meta87567__$1,reifier__$2,runnable__$2,f__$2,x__$2,_fixc__$2,meta87570));
});
}
return (new cljs.core.logic.t87569(xv,s,this$__$1,self__.meta87567,self__.reifier,self__.runnable,self__.f,self__.x,self__._fixc,null));
});
cljs.core.logic.t87566.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_87568){var self__ = this;
var _87568__$1 = this;return self__.meta87567;
});
cljs.core.logic.t87566.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_87568,meta87567__$1){var self__ = this;
var _87568__$1 = this;return (new cljs.core.logic.t87566(self__.reifier,self__.runnable,self__.f,self__.x,self__._fixc,meta87567__$1));
});
cljs.core.logic.__GT_t87566 = (function __GT_t87566(reifier__$1,runnable__$1,f__$1,x__$1,_fixc__$1,meta87567){return (new cljs.core.logic.t87566(reifier__$1,runnable__$1,f__$1,x__$1,_fixc__$1,meta87567));
});
}
return (new cljs.core.logic.t87566(reifier,runnable,f,x,_fixc,null));
});
_fixc = function(x,f,runnable,reifier){
switch(arguments.length){
case 3:
return _fixc__3.call(this,x,f,runnable);
case 4:
return _fixc__4.call(this,x,f,runnable,reifier);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_fixc.cljs$core$IFn$_invoke$arity$3 = _fixc__3;
_fixc.cljs$core$IFn$_invoke$arity$4 = _fixc__4;
return _fixc;
})()
;
cljs.core.logic.fixc = (function() {
var fixc = null;
var fixc__3 = (function (x,f,reifier){return fixc.call(null,x,f,null,reifier);
});
var fixc__4 = (function (x,f,runnable,reifier){return cljs.core.logic.cgoal.call(null,cljs.core.logic._fixc.call(null,x,f,runnable,reifier));
});
fixc = function(x,f,runnable,reifier){
switch(arguments.length){
case 3:
return fixc__3.call(this,x,f,runnable);
case 4:
return fixc__4.call(this,x,f,runnable,reifier);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fixc.cljs$core$IFn$_invoke$arity$3 = fixc__3;
fixc.cljs$core$IFn$_invoke$arity$4 = fixc__4;
return fixc;
})()
;
cljs.core.logic.treec = (function treec(x,fc,reifier){return cljs.core.logic.fixc.call(null,x,(function loop(t,a,reifier__$1){if(cljs.core.logic.tree_term_QMARK_.call(null,t))
{return cljs.core.logic.composeg.call(null,fc.call(null,t),cljs.core.logic.constrain_tree.call(null,t,(function (t__$1,a__$1){return cljs.core.logic.fixc.call(null,t__$1,loop,reifier__$1).call(null,a__$1);
})));
} else
{return fc.call(null,t);
}
}),reifier);
});
cljs.core.logic.seqc = (function seqc(v){return cljs.core.logic.fixc.call(null,v,(function (t,_,___$1){if(cljs.core.sequential_QMARK_.call(null,t))
{return cljs.core.logic.succeed;
} else
{if(cljs.core.logic.lcons_QMARK_.call(null,t))
{return seqc.call(null,cljs.core.logic.protocols.lnext.call(null,t));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.logic.fail;
} else
{return null;
}
}
}
}),(function (_,v__$1,___$1,r,a){return cljs.core.with_meta.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic","seqc","cljs.core.logic/seqc",1018702372,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2127),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,13),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2127),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,17)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.logic._reify.call(null,a,v__$1,r)))),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2127),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,12),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2127),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,34)))));
}));
});
