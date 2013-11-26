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
cljs.core.logic.record_QMARK_ = (function record_QMARK_(x){var G__39285 = x;if(G__39285)
{var bit__11814__auto__ = (G__39285.cljs$lang$protocol_mask$partition0$ & 67108864);if((bit__11814__auto__) || (G__39285.cljs$core$IRecord$))
{return true;
} else
{if((!G__39285.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IRecord,G__39285);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IRecord,G__39285);
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
cljs.core.logic.Pair.cljs$lang$ctorPrWriter = (function (this__11732__auto__,writer__11733__auto__,opt__11734__auto__){return cljs.core._write.call(null,writer__11733__auto__,"cljs.core.logic/Pair");
});
cljs.core.logic.Pair.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (x,writer,opts){var self__ = this;
var x__$1 = this;return cljs.core._write.call(null,writer,[cljs.core.str("("),cljs.core.str(x__$1.lhs),cljs.core.str(" . "),cljs.core.str(x__$1.rhs),cljs.core.str(")")].join(''));
});
cljs.core.logic.Pair.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,o){var self__ = this;
var ___$1 = this;if((o instanceof cljs.core.logic.Pair))
{return (((self__.lhs === o.lhs)) || (cljs.core._EQ_.call(null,self__.lhs,o.lhs))) && (((self__.rhs === o.rhs)) || (cljs.core._EQ_.call(null,self__.rhs,o.rhs)));
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
var this$__$1 = this;var G__39286 = i;if(cljs.core._EQ_.call(null,1,G__39286))
{return self__.rhs;
} else
{if(cljs.core._EQ_.call(null,0,G__39286))
{return self__.lhs;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.ex_info.call(null,"Index out of bounds",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"index","index",1114250308),i,new cljs.core.Keyword(null,"coll","coll",1016963678),this$__$1], null));
} else
{return null;
}
}
}
});
cljs.core.logic.Pair.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (_,i,not_found){var self__ = this;
var ___$1 = this;var G__39287 = i;if(cljs.core._EQ_.call(null,1,G__39287))
{return self__.rhs;
} else
{if(cljs.core._EQ_.call(null,0,G__39287))
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
cljs.core.logic.Pair.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return 2;
});
cljs.core.logic.Pair.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){var self__ = this;
var this$__$1 = this;return cljs.core._lookup.call(null,this$__$1,k,null);
});
cljs.core.logic.Pair.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){var self__ = this;
var this$__$1 = this;var pred__39288 = cljs.core.keyword_identical_QMARK_;var expr__39289 = k;if(cljs.core.truth_(pred__39288.call(null,new cljs.core.Keyword(null,"lhs","lhs",1014011369),expr__39289)))
{return self__.lhs;
} else
{if(cljs.core.truth_(pred__39288.call(null,new cljs.core.Keyword(null,"rhs","rhs",1014017135),expr__39289)))
{return self__.rhs;
} else
{return not_found;
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
cljs.core.logic.var_rands = (function var_rands(a,c){return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,cljs.core.logic.lvar_QMARK_,cljs.core.map.call(null,(function (p1__39291_SHARP_){return cljs.core.logic.protocols.root_var.call(null,a,p1__39291_SHARP_);
}),cljs.core.logic.protocols._rands.call(null,c))));
});
cljs.core.logic.unbound_rands = (function unbound_rands(a,c){return cljs.core.filter.call(null,(function (p1__39292_SHARP_){return cljs.core.logic.lvar_QMARK_.call(null,cljs.core.logic.protocols.root_val.call(null,a,p1__39292_SHARP_));
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
cljs.core.logic.ConstraintStore.cljs$lang$ctorPrWriter = (function (this__11732__auto__,writer__11733__auto__,opt__11734__auto__){return cljs.core._write.call(null,writer__11733__auto__,"cljs.core.logic/ConstraintStore");
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
var this$__$1 = this;var oc = self__.cm.call(null,cljs.core.logic.protocols.id.call(null,c));var nkm = (((function (){var G__39294 = c;if(G__39294)
{var bit__11814__auto__ = null;if(cljs.core.truth_((function (){var or__11188__auto__ = bit__11814__auto__;if(cljs.core.truth_(or__11188__auto__))
{return or__11188__auto__;
} else
{return G__39294.cljs$core$logic$protocols$IEntailedVar$;
}
})()))
{return true;
} else
{if((!G__39294.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.logic.protocols.IEntailedVar,G__39294);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.logic.protocols.IEntailedVar,G__39294);
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
{var ids = temp__4098__auto__;return cljs.core.filter.call(null,(function (p1__39293_SHARP_){return cljs.core.logic.protocols._watched_stores.call(null,p1__39293_SHARP_).call(null,ws);
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
var this$__$1 = this;var pred__39295 = cljs.core.keyword_identical_QMARK_;var expr__39296 = k;if(cljs.core.truth_(pred__39295.call(null,new cljs.core.Keyword(null,"km","km",1013907668),expr__39296)))
{return self__.km;
} else
{if(cljs.core.truth_(pred__39295.call(null,new cljs.core.Keyword(null,"cm","cm",1013907420),expr__39296)))
{return self__.cm;
} else
{if(cljs.core.truth_(pred__39295.call(null,new cljs.core.Keyword(null,"cid","cid",1014002736),expr__39296)))
{return self__.cid;
} else
{if(cljs.core.truth_(pred__39295.call(null,new cljs.core.Keyword(null,"running","running",2564688177),expr__39296)))
{return self__.running;
} else
{return not_found;
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
cljs.core.logic.SubstValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11745__auto__){var self__ = this;
var this__11745__auto____$1 = this;var h__11599__auto__ = self__.__hash;if(!((h__11599__auto__ == null)))
{return h__11599__auto__;
} else
{var h__11599__auto____$1 = cljs.core.hash_imap.call(null,this__11745__auto____$1);self__.__hash = h__11599__auto____$1;
return h__11599__auto____$1;
}
});
cljs.core.logic.SubstValue.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11750__auto__,k__11751__auto__){var self__ = this;
var this__11750__auto____$1 = this;return cljs.core._lookup.call(null,this__11750__auto____$1,k__11751__auto__,null);
});
cljs.core.logic.SubstValue.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11752__auto__,k39299,else__11753__auto__){var self__ = this;
var this__11752__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k39299,new cljs.core.Keyword(null,"v","v",1013904360)))
{return self__.v;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k39299,new cljs.core.Keyword(null,"doms","doms",1016993507)))
{return self__.doms;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k39299,new cljs.core.Keyword(null,"eset","eset",1017026895)))
{return self__.eset;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k39299,else__11753__auto__);
} else
{return null;
}
}
}
}
});
cljs.core.logic.SubstValue.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11757__auto__,k__11758__auto__,G__39298){var self__ = this;
var this__11757__auto____$1 = this;var pred__39301 = cljs.core.keyword_identical_QMARK_;var expr__39302 = k__11758__auto__;if(cljs.core.truth_(pred__39301.call(null,new cljs.core.Keyword(null,"v","v",1013904360),expr__39302)))
{return (new cljs.core.logic.SubstValue(G__39298,self__.doms,self__.eset,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__39301.call(null,new cljs.core.Keyword(null,"doms","doms",1016993507),expr__39302)))
{return (new cljs.core.logic.SubstValue(self__.v,G__39298,self__.eset,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__39301.call(null,new cljs.core.Keyword(null,"eset","eset",1017026895),expr__39302)))
{return (new cljs.core.logic.SubstValue(self__.v,self__.doms,G__39298,self__.__meta,self__.__extmap,null));
} else
{return (new cljs.core.logic.SubstValue(self__.v,self__.doms,self__.eset,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__11758__auto__,G__39298),null));
}
}
}
});
cljs.core.logic.SubstValue.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11764__auto__,writer__11765__auto__,opts__11766__auto__){var self__ = this;
var this__11764__auto____$1 = this;var pr_pair__11767__auto__ = (function (keyval__11768__auto__){return cljs.core.pr_sequential_writer.call(null,writer__11765__auto__,cljs.core.pr_writer,""," ","",opts__11766__auto__,keyval__11768__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__11765__auto__,pr_pair__11767__auto__,"#cljs.core.logic.SubstValue{",", ","}",opts__11766__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"v","v",1013904360),self__.v],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"doms","doms",1016993507),self__.doms],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"eset","eset",1017026895),self__.eset],null))], null),self__.__extmap));
});
cljs.core.logic.SubstValue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11755__auto__,entry__11756__auto__){var self__ = this;
var this__11755__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__11756__auto__))
{return cljs.core._assoc.call(null,this__11755__auto____$1,cljs.core._nth.call(null,entry__11756__auto__,0),cljs.core._nth.call(null,entry__11756__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__11755__auto____$1,entry__11756__auto__);
}
});
cljs.core.logic.SubstValue.prototype.toString = (function (){var self__ = this;
var _ = this;return [cljs.core.str(self__.v)].join('');
});
cljs.core.logic.SubstValue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11762__auto__){var self__ = this;
var this__11762__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"v","v",1013904360),self__.v],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"doms","doms",1016993507),self__.doms],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"eset","eset",1017026895),self__.eset],null))], null),self__.__extmap));
});
cljs.core.logic.SubstValue.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11754__auto__){var self__ = this;
var this__11754__auto____$1 = this;return (3 + cljs.core.count.call(null,self__.__extmap));
});
cljs.core.logic.SubstValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__11746__auto__,other__11747__auto__){var self__ = this;
var this__11746__auto____$1 = this;if(cljs.core.truth_((function (){var and__11176__auto__ = other__11747__auto__;if(cljs.core.truth_(and__11176__auto__))
{return ((this__11746__auto____$1.constructor === other__11747__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__11746__auto____$1,other__11747__auto__));
} else
{return and__11176__auto__;
}
})()))
{return true;
} else
{return false;
}
});
cljs.core.logic.SubstValue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11749__auto__,G__39298){var self__ = this;
var this__11749__auto____$1 = this;return (new cljs.core.logic.SubstValue(self__.v,self__.doms,self__.eset,G__39298,self__.__extmap,self__.__hash));
});
cljs.core.logic.SubstValue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11748__auto__){var self__ = this;
var this__11748__auto____$1 = this;return self__.__meta;
});
cljs.core.logic.SubstValue.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11759__auto__,k__11760__auto__){var self__ = this;
var this__11759__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"eset","eset",1017026895),null,new cljs.core.Keyword(null,"v","v",1013904360),null,new cljs.core.Keyword(null,"doms","doms",1016993507),null], null), null),k__11760__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__11759__auto____$1),self__.__meta),k__11760__auto__);
} else
{return (new cljs.core.logic.SubstValue(self__.v,self__.doms,self__.eset,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__11760__auto__)),null));
}
});
cljs.core.logic.SubstValue.cljs$lang$type = true;
cljs.core.logic.SubstValue.cljs$lang$ctorPrSeq = (function (this__11784__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.core.logic/SubstValue");
});
cljs.core.logic.SubstValue.cljs$lang$ctorPrWriter = (function (this__11784__auto__,writer__11785__auto__){return cljs.core._write.call(null,writer__11785__auto__,"cljs.core.logic/SubstValue");
});
cljs.core.logic.__GT_SubstValue = (function __GT_SubstValue(v,doms,eset){return (new cljs.core.logic.SubstValue(v,doms,eset));
});
cljs.core.logic.map__GT_SubstValue = (function map__GT_SubstValue(G__39300){return (new cljs.core.logic.SubstValue(new cljs.core.Keyword(null,"v","v",1013904360).cljs$core$IFn$_invoke$arity$1(G__39300),new cljs.core.Keyword(null,"doms","doms",1016993507).cljs$core$IFn$_invoke$arity$1(G__39300),new cljs.core.Keyword(null,"eset","eset",1017026895).cljs$core$IFn$_invoke$arity$1(G__39300),null,cljs.core.dissoc.call(null,G__39300,new cljs.core.Keyword(null,"v","v",1013904360),new cljs.core.Keyword(null,"doms","doms",1016993507),new cljs.core.Keyword(null,"eset","eset",1017026895))));
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
cljs.core.logic.ext = (function ext(s,u,v){if(cljs.core.truth_((function (){var and__11176__auto__ = s.oc;if(cljs.core.truth_(and__11176__auto__))
{return cljs.core.logic.occurs_check.call(null,s,u,((cljs.core.logic.subst_val_QMARK_.call(null,v))?v.v:v));
} else
{return and__11176__auto__;
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
{var u__$1 = cljs.core.logic.protocols.walk.call(null,s,u);var v__$1 = cljs.core.logic.protocols.walk.call(null,s,v);if(cljs.core.truth_((function (){var and__11176__auto__ = cljs.core.logic.lvar_QMARK_.call(null,u__$1);if(cljs.core.truth_(and__11176__auto__))
{return cljs.core._equiv.call(null,u__$1,v__$1);
} else
{return and__11176__auto__;
}
})()))
{return s;
} else
{if(cljs.core.truth_((function (){var and__11176__auto__ = cljs.core.not.call(null,cljs.core.logic.lvar_QMARK_.call(null,u__$1));if(and__11176__auto__)
{return cljs.core.logic.lvar_QMARK_.call(null,v__$1);
} else
{return and__11176__auto__;
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
cljs.core.logic.Substitutions.cljs$lang$ctorPrWriter = (function (this__11732__auto__,writer__11733__auto__,opt__11734__auto__){return cljs.core._write.call(null,writer__11733__auto__,"cljs.core.logic/Substitutions");
});
cljs.core.logic.Substitutions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){var self__ = this;
var this$__$1 = this;return cljs.core._lookup.call(null,this$__$1,k,null);
});
cljs.core.logic.Substitutions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){var self__ = this;
var this$__$1 = this;var pred__39304 = cljs.core.keyword_identical_QMARK_;var expr__39305 = k;if(cljs.core.truth_(pred__39304.call(null,new cljs.core.Keyword(null,"s","s",1013904357),expr__39305)))
{return self__.s;
} else
{if(cljs.core.truth_(pred__39304.call(null,new cljs.core.Keyword(null,"vs","vs",1013908015),expr__39305)))
{return self__.vs;
} else
{if(cljs.core.truth_(pred__39304.call(null,new cljs.core.Keyword(null,"ts","ts",1013907953),expr__39305)))
{return self__.ts;
} else
{if(cljs.core.truth_(pred__39304.call(null,new cljs.core.Keyword(null,"cs","cs",1013907426),expr__39305)))
{return self__.cs;
} else
{if(cljs.core.truth_(pred__39304.call(null,new cljs.core.Keyword(null,"cq","cq",1013907424),expr__39305)))
{return self__.cq;
} else
{if(cljs.core.truth_(pred__39304.call(null,new cljs.core.Keyword(null,"cqs","cqs",1014002999),expr__39305)))
{return self__.cqs;
} else
{if(cljs.core.truth_(pred__39304.call(null,new cljs.core.Keyword(null,"oc","oc",1013907782),expr__39305)))
{return self__.oc;
} else
{return not_found;
}
}
}
}
}
}
}
});
cljs.core.logic.Substitutions.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this$,k){var self__ = this;
var this$__$1 = this;return ((new cljs.core.Keyword(null,"s","s",1013904357) === k)) || ((new cljs.core.Keyword(null,"vs","vs",1013908015) === k)) || ((new cljs.core.Keyword(null,"cs","cs",1013907426) === k)) || ((new cljs.core.Keyword(null,"cq","cq",1013907424) === k)) || ((new cljs.core.Keyword(null,"cqs","cqs",1014002999) === k)) || ((new cljs.core.Keyword(null,"oc","oc",1013907782) === k));
});
cljs.core.logic.Substitutions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,k,v){var self__ = this;
var this$__$1 = this;var pred__39307 = cljs.core.keyword_identical_QMARK_;var expr__39308 = k;if(cljs.core.truth_(pred__39307.call(null,new cljs.core.Keyword(null,"s","s",1013904357),expr__39308)))
{return (new cljs.core.logic.Substitutions(v,self__.vs,self__.ts,self__.cs,self__.cq,self__.cqs,self__.oc,self__._meta));
} else
{if(cljs.core.truth_(pred__39307.call(null,new cljs.core.Keyword(null,"vs","vs",1013908015),expr__39308)))
{return (new cljs.core.logic.Substitutions(self__.s,v,self__.ts,self__.cs,self__.cq,self__.cqs,self__.oc,self__._meta));
} else
{if(cljs.core.truth_(pred__39307.call(null,new cljs.core.Keyword(null,"ts","ts",1013907953),expr__39308)))
{return (new cljs.core.logic.Substitutions(self__.s,self__.vs,v,self__.cs,self__.cq,self__.cqs,self__.oc,self__._meta));
} else
{if(cljs.core.truth_(pred__39307.call(null,new cljs.core.Keyword(null,"cs","cs",1013907426),expr__39308)))
{return (new cljs.core.logic.Substitutions(self__.s,self__.vs,self__.ts,v,self__.cq,self__.cqs,self__.oc,self__._meta));
} else
{if(cljs.core.truth_(pred__39307.call(null,new cljs.core.Keyword(null,"cq","cq",1013907424),expr__39308)))
{return (new cljs.core.logic.Substitutions(self__.s,self__.vs,self__.ts,self__.cs,v,self__.cqs,self__.oc,self__._meta));
} else
{if(cljs.core.truth_(pred__39307.call(null,new cljs.core.Keyword(null,"cqs","cqs",1014002999),expr__39308)))
{return (new cljs.core.logic.Substitutions(self__.s,self__.vs,self__.ts,self__.cs,self__.cq,v,self__.oc,self__._meta));
} else
{if(cljs.core.truth_(pred__39307.call(null,new cljs.core.Keyword(null,"oc","oc",1013907782),expr__39308)))
{return (new cljs.core.logic.Substitutions(self__.s,self__.vs,self__.ts,self__.cs,self__.cq,self__.cqs,v,self__._meta));
} else
{throw cljs.core.ex_info.call(null,[cljs.core.str("Substitutions has no field for key"),cljs.core.str(k)].join(''),cljs.core.PersistentArrayMap.EMPTY);
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
cljs.core.logic.Substitutions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,p__39310){var self__ = this;
var vec__39311 = p__39310;var k = cljs.core.nth.call(null,vec__39311,0,null);var v = cljs.core.nth.call(null,vec__39311,1,null);var this$__$1 = this;if(cljs.core.truth_(cljs.core.logic.lvar_QMARK_.call(null,k)))
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
var this$__$1 = this;return ((this$__$1 === o)) || (((o instanceof cljs.core.logic.Substitutions)) && (((self__.s === o.s)) || (cljs.core._EQ_.call(null,self__.s,o.s))));
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
var G__39320 = vp;
var G__39321 = cljs.core.find.call(null,self__.s,vp);
lv = G__39320;
me = G__39321;
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
{var lv = v;var G__39313 = cljs.core.find.call(null,self__.s,v);var vec__39314 = G__39313;var v__$1 = cljs.core.nth.call(null,vec__39314,0,null);var vp = cljs.core.nth.call(null,vec__39314,1,null);var me = vec__39314;var lv__$1 = lv;var G__39313__$1 = G__39313;while(true){
var lv__$2 = lv__$1;var vec__39315 = G__39313__$1;var v__$2 = cljs.core.nth.call(null,vec__39315,0,null);var vp__$1 = cljs.core.nth.call(null,vec__39315,1,null);var me__$1 = vec__39315;if((me__$1 == null))
{return lv__$2;
} else
{if(cljs.core.not.call(null,cljs.core.logic.lvar_QMARK_.call(null,vp__$1)))
{return vp__$1;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__39322 = vp__$1;
var G__39323 = cljs.core.find.call(null,self__.s,vp__$1);
lv__$1 = G__39322;
G__39313__$1 = G__39323;
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
{var lv = v;var G__39317 = cljs.core.find.call(null,self__.s,v);var vec__39318 = G__39317;var v__$1 = cljs.core.nth.call(null,vec__39318,0,null);var vp = cljs.core.nth.call(null,vec__39318,1,null);var me = vec__39318;var lv__$1 = lv;var G__39317__$1 = G__39317;while(true){
var lv__$2 = lv__$1;var vec__39319 = G__39317__$1;var v__$2 = cljs.core.nth.call(null,vec__39319,0,null);var vp__$1 = cljs.core.nth.call(null,vec__39319,1,null);var me__$1 = vec__39319;if((me__$1 == null))
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
var G__39324 = vp__$1;
var G__39325 = cljs.core.find.call(null,self__.s,vp__$1);
lv__$1 = G__39324;
G__39317__$1 = G__39325;
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
{return cljs.core.assoc.call(null,cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"cq","cq",1013907424),cljs.core.conj.call(null,(function (){var or__11188__auto__ = self__.cq;if(cljs.core.truth_(or__11188__auto__))
{return or__11188__auto__;
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
})());return cljs.core.logic.sync_eset.call(null,s__$1,v,seenset,(function (s__$2,y){return add_dom.call(null,s__$2,y,dom,domv,cljs.core.conj.call(null,(function (){var or__11188__auto__ = seenset;if(cljs.core.truth_(or__11188__auto__))
{return or__11188__auto__;
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
var update_dom__5 = (function (s,x,dom,f,seenset){var v = cljs.core.logic.protocols.root_val.call(null,s,x);var v__$1 = (cljs.core.truth_(cljs.core.logic.lvar_QMARK_.call(null,v))?cljs.core.logic.subst_val.call(null,new cljs.core.Keyword("cljs.core.logic","unbound","cljs.core.logic/unbound",1803671316)):v);var doms = v__$1.doms;var s__$1 = cljs.core.logic.protocols.update_var.call(null,s,x,cljs.core.logic.assoc_dom.call(null,v__$1,dom,f.call(null,cljs.core.get.call(null,doms,dom))));return cljs.core.logic.sync_eset.call(null,s__$1,v__$1,seenset,(function (s__$2,y){return update_dom.call(null,s__$2,y,dom,f,cljs.core.conj.call(null,(function (){var or__11188__auto__ = seenset;if(cljs.core.truth_(or__11188__auto__))
{return or__11188__auto__;
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
})():s);return cljs.core.logic.sync_eset.call(null,s__$1,v,seenset,(function (s__$2,y){return rem_dom.call(null,s__$2,y,dom,cljs.core.conj.call(null,(function (){var or__11188__auto__ = seenset;if(cljs.core.truth_(or__11188__auto__))
{return or__11188__auto__;
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
cljs.core.logic.to_s = (function to_s(v){var s = cljs.core.reduce.call(null,(function (m,p__39328){var vec__39329 = p__39328;var k = cljs.core.nth.call(null,vec__39329,0,null);var v__$1 = cljs.core.nth.call(null,vec__39329,1,null);return cljs.core.assoc.call(null,m,k,v__$1);
}),cljs.core.PersistentArrayMap.EMPTY,v);return cljs.core.logic.make_s.call(null,s,cljs.core.logic.make_cs.call(null));
});
cljs.core.logic.annotate = (function annotate(k,v){return (function (a){return cljs.core.vary_meta.call(null,a,cljs.core.assoc,k,v);
});
});
cljs.core.logic.merge_doms = (function merge_doms(s,x,doms){var xdoms = cljs.core.logic.protocols.root_val.call(null,s,x).doms;var doms__$1 = cljs.core.seq.call(null,doms);var s__$1 = s;while(true){
if(doms__$1)
{var vec__39331 = cljs.core.first.call(null,doms__$1);var dom = cljs.core.nth.call(null,vec__39331,0,null);var domv = cljs.core.nth.call(null,vec__39331,1,null);var xdomv = cljs.core.get.call(null,xdoms,dom,new cljs.core.Keyword("cljs.core.logic","not-found","cljs.core.logic/not-found",3358757009));var ndomv = ((cljs.core.keyword_identical_QMARK_.call(null,xdomv,new cljs.core.Keyword("cljs.core.logic","not-found","cljs.core.logic/not-found",3358757009)))?domv:cljs.core.logic.protocols._merge_doms.call(null,domv,xdomv));if(cljs.core.truth_(ndomv))
{{
var G__39332 = cljs.core.next.call(null,doms__$1);
var G__39333 = cljs.core.logic.add_dom.call(null,s__$1,x,dom,ndomv,cljs.core.PersistentHashSet.EMPTY);
doms__$1 = G__39332;
s__$1 = G__39333;
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
var G__39334 = cljs.core.next.call(null,eset__$1);
var G__39335 = s__$2;
eset__$1 = G__39334;
s__$1 = G__39335;
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
{var vec__39338 = cljs.core.first.call(null,xd);var xk = cljs.core.nth.call(null,vec__39338,0,null);var xv__$1 = cljs.core.nth.call(null,vec__39338,1,null);var temp__4096__auto__ = cljs.core.find.call(null,rd,xk);if(cljs.core.truth_(temp__4096__auto__))
{var vec__39339 = temp__4096__auto__;var _ = cljs.core.nth.call(null,vec__39339,0,null);var rv = cljs.core.nth.call(null,vec__39339,1,null);var nd = cljs.core.logic.protocols._merge_doms.call(null,xv__$1,rv);if(cljs.core.truth_(nd))
{{
var G__39340 = cljs.core.next.call(null,xd);
var G__39341 = cljs.core.dissoc.call(null,rd,xk);
var G__39342 = cljs.core.assoc.call(null,r,xk,nd);
xd = G__39340;
rd = G__39341;
r = G__39342;
continue;
}
} else
{return null;
}
} else
{{
var G__39343 = cljs.core.next.call(null,xd);
var G__39344 = rd;
var G__39345 = cljs.core.assoc.call(null,r,xk,xv__$1);
xd = G__39343;
rd = G__39344;
r = G__39345;
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
cljs.core.logic.entangle = (function entangle(s,x,y){var x__$1 = cljs.core.logic.protocols.root_var.call(null,s,x);var y__$1 = cljs.core.logic.protocols.root_var.call(null,s,y);var xv = cljs.core.logic.to_subst_val.call(null,cljs.core.logic.protocols.root_val.call(null,s,x__$1));var yv = cljs.core.logic.to_subst_val.call(null,cljs.core.logic.protocols.root_val.call(null,s,y__$1));return cljs.core.logic.protocols.update_var.call(null,cljs.core.logic.protocols.update_var.call(null,s,x__$1,cljs.core.assoc.call(null,xv,new cljs.core.Keyword(null,"eset","eset",1017026895),cljs.core.conj.call(null,(function (){var or__11188__auto__ = xv.eset;if(cljs.core.truth_(or__11188__auto__))
{return or__11188__auto__;
} else
{return cljs.core.PersistentHashSet.EMPTY;
}
})(),y__$1))),y__$1,cljs.core.assoc.call(null,yv,new cljs.core.Keyword(null,"eset","eset",1017026895),cljs.core.conj.call(null,(function (){var or__11188__auto__ = yv.eset;if(cljs.core.truth_(or__11188__auto__))
{return or__11188__auto__;
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
cljs.core.logic.LVar.cljs$lang$ctorPrWriter = (function (this__11732__auto__,writer__11733__auto__,opt__11734__auto__){return cljs.core._write.call(null,writer__11733__auto__,"cljs.core.logic/LVar");
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
{var vec__39346 = repoint;var root = cljs.core.nth.call(null,vec__39346,0,null);var other = cljs.core.nth.call(null,vec__39346,1,null);var s__$1 = cljs.core.assoc.call(null,s,new cljs.core.Keyword(null,"cs","cs",1013907426),cljs.core.logic.protocols.migrate.call(null,s.cs,other,root));var s__$2 = (cljs.core.truth_(new cljs.core.Keyword("cljs.core.logic","unbound","cljs.core.logic/unbound",1803671316).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,other)))?cljs.core.logic.merge_with_root.call(null,s__$1,other,root):s__$1);if(cljs.core.truth_(s__$2))
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
var this$__$1 = this;var pred__39347 = cljs.core.keyword_identical_QMARK_;var expr__39348 = k;if(cljs.core.truth_(pred__39347.call(null,new cljs.core.Keyword(null,"name","name",1017277949),expr__39348)))
{return self__.name;
} else
{if(cljs.core.truth_(pred__39347.call(null,new cljs.core.Keyword(null,"oname","oname",1119788780),expr__39348)))
{return self__.oname;
} else
{if(cljs.core.truth_(pred__39347.call(null,new cljs.core.Keyword(null,"id","id",1013907597),expr__39348)))
{return self__.id;
} else
{return not_found;
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
var v__$1 = this;return ((cljs.core.logic.protocols.walk.call(null,s,v__$1) === x)) || (cljs.core._EQ_.call(null,cljs.core.logic.protocols.walk.call(null,s,v__$1),x));
});
cljs.core.logic.LVar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,o){var self__ = this;
var this$__$1 = this;if((function (){var G__39350 = o;if(G__39350)
{var bit__11814__auto__ = null;if(cljs.core.truth_((function (){var or__11188__auto__ = bit__11814__auto__;if(cljs.core.truth_(or__11188__auto__))
{return or__11188__auto__;
} else
{return G__39350.cljs$core$logic$protocols$IVar$;
}
})()))
{return true;
} else
{if((!G__39350.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.logic.protocols.IVar,G__39350);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.logic.protocols.IVar,G__39350);
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
var u__$1 = this;var m = s.s;var cs = s.cs;var lv = (function (){var id__34892__auto__ = ((true)?39351:new cljs.core.Symbol(null,"ignore","ignore",1464039307,null));var name__34893__auto__ = ((true)?[cljs.core.str(new cljs.core.Symbol(null,"ignore","ignore",1464039307,null)),cljs.core.str("__"),cljs.core.str(id__34892__auto__)].join(''):[cljs.core.str(new cljs.core.Symbol(null,"ignore","ignore",1464039307,null))].join(''));return (new cljs.core.logic.LVar(id__34892__auto__,true,name__34893__auto__,new cljs.core.Symbol(null,"ignore","ignore",1464039307,null),cljs.core.hash.call(null,new cljs.core.Symbol(null,"ignore","ignore",1464039307,null)),null));
})();if(cljs.core.contains_QMARK_.call(null,m,u__$1))
{return s;
} else
{return cljs.core.logic.make_s.call(null,cljs.core.assoc.call(null,m,u__$1,lv),cs);
}
});
cljs.core.logic.__GT_LVar = (function __GT_LVar(id,unique,name,oname,hash,meta){return (new cljs.core.logic.LVar(id,unique,name,oname,hash,meta));
});
cljs.core.logic.next_id = (function next_id(){return cljs.reader.read_string.call(null,clojure.string.replace.call(null,[cljs.core.str(cljs.core.gensym.call(null))].join(''),/G__/,""));
});
cljs.core.logic.__GT_lvar = (function() {
var __GT_lvar = null;
var __GT_lvar__0 = (function (){var id = cljs.core.logic.next_id.call(null);var name = [cljs.core.str(id)].join('');return (new cljs.core.logic.LVar(id,true,name,null,cljs.core.hash.call(null,name),null));
});
var __GT_lvar__1 = (function (name){return __GT_lvar.call(null,name,true);
});
var __GT_lvar__2 = (function (name,unique){var oname = name;var id = (cljs.core.truth_(unique)?cljs.core.logic.next_id.call(null):name);var name__$1 = (cljs.core.truth_(unique)?[cljs.core.str(name),cljs.core.str("__"),cljs.core.str(id)].join(''):[cljs.core.str(name)].join(''));return (new cljs.core.logic.LVar(id,unique,name__$1,oname,cljs.core.hash.call(null,name__$1),null));
});
__GT_lvar = function(name,unique){
switch(arguments.length){
case 0:
return __GT_lvar__0.call(this);
case 1:
return __GT_lvar__1.call(this,name);
case 2:
return __GT_lvar__2.call(this,name,unique);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_lvar.cljs$core$IFn$_invoke$arity$0 = __GT_lvar__0;
__GT_lvar.cljs$core$IFn$_invoke$arity$1 = __GT_lvar__1;
__GT_lvar.cljs$core$IFn$_invoke$arity$2 = __GT_lvar__2;
return __GT_lvar;
})()
;
cljs.core.logic.lvar_QMARK_ = (function lvar_QMARK_(x){var G__39353 = x;if(G__39353)
{var bit__11814__auto__ = null;if(cljs.core.truth_((function (){var or__11188__auto__ = bit__11814__auto__;if(cljs.core.truth_(or__11188__auto__))
{return or__11188__auto__;
} else
{return G__39353.cljs$core$logic$protocols$IVar$;
}
})()))
{return true;
} else
{if((!G__39353.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.logic.protocols.IVar,G__39353);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.logic.protocols.IVar,G__39353);
}
});
cljs.core.logic.lvars = (function lvars(n){return cljs.core.repeatedly.call(null,n,cljs.core.logic.lvar);
});
cljs.core.logic.bindable_QMARK_ = (function bindable_QMARK_(x){var or__11188__auto__ = cljs.core.logic.lvar_QMARK_.call(null,x);if(or__11188__auto__)
{return or__11188__auto__;
} else
{var G__39357 = x;if(G__39357)
{var bit__11814__auto__ = null;if(cljs.core.truth_((function (){var or__11188__auto____$1 = bit__11814__auto__;if(cljs.core.truth_(or__11188__auto____$1))
{return or__11188__auto____$1;
} else
{return G__39357.cljs$core$logic$protocols$IBindable$;
}
})()))
{return true;
} else
{if((!G__39357.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.logic.protocols.IBindable,G__39357);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.logic.protocols.IBindable,G__39357);
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
cljs.core.logic.LCons.cljs$lang$ctorPrWriter = (function (this__11732__auto__,writer__11733__auto__,opt__11734__auto__){return cljs.core._write.call(null,writer__11733__auto__,"cljs.core.logic/LCons");
});
cljs.core.logic.LCons.prototype.cljs$core$logic$protocols$IReifyTerm$ = true;
cljs.core.logic.LCons.prototype.cljs$core$logic$protocols$IReifyTerm$reify_term$arity$2 = (function (v,s){var self__ = this;
var v__$1 = this;var v__$2 = v__$1;var s__$1 = s;while(true){
if(cljs.core.truth_(cljs.core.logic.lcons_QMARK_.call(null,v__$2)))
{{
var G__39358 = cljs.core.logic.protocols.lnext.call(null,v__$2);
var G__39359 = cljs.core.logic._reify_STAR_.call(null,s__$1,cljs.core.logic.protocols.lfirst.call(null,v__$2));
v__$2 = G__39358;
s__$1 = G__39359;
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
var G__39360 = cljs.core.logic.protocols.lnext.call(null,u__$2);
var G__39361 = cljs.core.next.call(null,v__$1);
var G__39362 = s__$2;
u__$2 = G__39360;
v__$1 = G__39361;
s__$1 = G__39362;
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
{if(cljs.core.truth_((function (){var and__11176__auto__ = cljs.core.logic.lcons_QMARK_.call(null,u__$2);if(cljs.core.truth_(and__11176__auto__))
{return cljs.core.logic.lcons_QMARK_.call(null,v__$1);
} else
{return and__11176__auto__;
}
})()))
{var temp__4096__auto__ = cljs.core.logic.unify.call(null,s__$1,cljs.core.logic.protocols.lfirst.call(null,u__$2),cljs.core.logic.protocols.lfirst.call(null,v__$1));if(cljs.core.truth_(temp__4096__auto__))
{var s__$2 = temp__4096__auto__;{
var G__39363 = cljs.core.logic.protocols.lnext.call(null,u__$2);
var G__39364 = cljs.core.logic.protocols.lnext.call(null,v__$1);
var G__39365 = s__$2;
u__$2 = G__39363;
v__$1 = G__39364;
s__$1 = G__39365;
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
{var or__11188__auto__ = cljs.core.logic.occurs_check.call(null,s__$1,x__$1,cljs.core.logic.protocols.lfirst.call(null,v__$2));if(cljs.core.truth_(or__11188__auto__))
{return or__11188__auto__;
} else
{{
var G__39366 = cljs.core.logic.protocols.lnext.call(null,v__$2);
var G__39367 = x__$1;
var G__39368 = s__$1;
v__$2 = G__39366;
x__$1 = G__39367;
s__$1 = G__39368;
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
var this$__$1 = this;var or__11188__auto__ = (this$__$1 === o);if(or__11188__auto__)
{return or__11188__auto__;
} else
{var and__11176__auto__ = (o instanceof cljs.core.logic.LCons);if(and__11176__auto__)
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
{if(cljs.core.truth_((function (){var and__11176__auto____$1 = cljs.core.logic.lcons_QMARK_.call(null,me);if(cljs.core.truth_(and__11176__auto____$1))
{return cljs.core.logic.lcons_QMARK_.call(null,you);
} else
{return and__11176__auto____$1;
}
})()))
{var mef = cljs.core.logic.protocols.lfirst.call(null,me);var youf = cljs.core.logic.protocols.lfirst.call(null,you);var and__11176__auto____$1 = ((mef === youf)) || (cljs.core._EQ_.call(null,mef,youf)) || (cljs.core.logic.lvar_QMARK_.call(null,mef)) || (cljs.core.logic.lvar_QMARK_.call(null,youf));if(and__11176__auto____$1)
{{
var G__39369 = cljs.core.logic.protocols.lnext.call(null,me);
var G__39370 = cljs.core.logic.protocols.lnext.call(null,you);
me = G__39369;
you = G__39370;
continue;
}
} else
{return and__11176__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return ((me === you)) || (cljs.core._EQ_.call(null,me,you));
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
{return and__11176__auto__;
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
var G__39371 = cljs.core.logic.protocols.lnext.call(null,u__$2);
var G__39372 = cljs.core.logic.build.call(null,s__$1,cljs.core.logic.protocols.lfirst.call(null,u__$2));
u__$2 = G__39371;
s__$1 = G__39372;
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
cljs.core.logic.tree_term_QMARK_ = (function tree_term_QMARK_(x){var or__11188__auto__ = cljs.core.coll_QMARK_.call(null,x);if(or__11188__auto__)
{return or__11188__auto__;
} else
{var G__39376 = x;if(G__39376)
{var bit__11814__auto__ = null;if(cljs.core.truth_((function (){var or__11188__auto____$1 = bit__11814__auto__;if(cljs.core.truth_(or__11188__auto____$1))
{return or__11188__auto____$1;
} else
{return G__39376.cljs$core$logic$protocols$ITreeTerm$;
}
})()))
{return true;
} else
{if((!G__39376.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.logic.protocols.ITreeTerm,G__39376);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.logic.protocols.ITreeTerm,G__39376);
}
}
});
cljs.core.logic.unify_with_sequential_STAR_ = (function unify_with_sequential_STAR_(u,v,s){if(cljs.core.sequential_QMARK_.call(null,v))
{if((cljs.core.counted_QMARK_.call(null,u)) && (cljs.core.counted_QMARK_.call(null,v)) && (!((cljs.core.count.call(null,u) === cljs.core.count.call(null,v)))))
{return null;
} else
{var u__$1 = cljs.core._seq.call(null,u);var v__$1 = cljs.core._seq.call(null,v);var s__$1 = s;while(true){
if(!((u__$1 == null)))
{if(!((v__$1 == null)))
{var temp__4096__auto__ = cljs.core.logic.unify.call(null,s__$1,cljs.core.first.call(null,u__$1),cljs.core.first.call(null,v__$1));if(cljs.core.truth_(temp__4096__auto__))
{var s__$2 = temp__4096__auto__;{
var G__39377 = cljs.core.next.call(null,u__$1);
var G__39378 = cljs.core.next.call(null,v__$1);
var G__39379 = s__$2;
u__$1 = G__39377;
v__$1 = G__39378;
s__$1 = G__39379;
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
cljs.core.logic.unify_with_map_STAR_ = (function unify_with_map_STAR_(u,v,s){if((cljs.core.count.call(null,u) === cljs.core.count.call(null,v)))
{var ks = cljs.core.keys.call(null,u);var s__$1 = s;while(true){
if(cljs.core.seq.call(null,ks))
{var kf = cljs.core.first.call(null,ks);var vf = cljs.core.get.call(null,v,kf,new cljs.core.Keyword("cljs.core.logic","not-found","cljs.core.logic/not-found",3358757009));if(cljs.core.keyword_identical_QMARK_.call(null,vf,new cljs.core.Keyword("cljs.core.logic","not-found","cljs.core.logic/not-found",3358757009)))
{return null;
} else
{var temp__4096__auto__ = cljs.core.logic.unify.call(null,s__$1,cljs.core.get.call(null,u,kf),vf);if(cljs.core.truth_(temp__4096__auto__))
{var s__$2 = temp__4096__auto__;{
var G__39380 = cljs.core.next.call(null,ks);
var G__39381 = s__$2;
ks = G__39380;
s__$1 = G__39381;
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
{if((function (){var G__39382 = v;if(G__39382)
{var bit__11814__auto__ = null;if(cljs.core.truth_((function (){var or__11188__auto__ = bit__11814__auto__;if(cljs.core.truth_(or__11188__auto__))
{return or__11188__auto__;
} else
{return G__39382.cljs$core$logic$protocols$IUnifyWithRecord$;
}
})()))
{return true;
} else
{if((!G__39382.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.logic.protocols.IUnifyWithRecord,G__39382);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.logic.protocols.IUnifyWithRecord,G__39382);
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
var G__39383 = cljs.core.next.call(null,v__$1);
var G__39384 = cljs.core.logic._reify_STAR_.call(null,s__$1,cljs.core.first.call(null,v__$1));
v__$1 = G__39383;
s__$1 = G__39384;
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
{var vec__39386 = cljs.core.first.call(null,v__$1);var vfk = cljs.core.nth.call(null,vec__39386,0,null);var vfv = cljs.core.nth.call(null,vec__39386,1,null);{
var G__39387 = cljs.core.next.call(null,v__$1);
var G__39388 = cljs.core.assoc.call(null,r,cljs.core.logic.protocols.walk_term.call(null,f.call(null,vfk),f),cljs.core.logic.protocols.walk_term.call(null,f.call(null,vfv),f));
v__$1 = G__39387;
r = G__39388;
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
{var vec__39390 = cljs.core.first.call(null,v__$1);var vfk = cljs.core.nth.call(null,vec__39390,0,null);var vfv = cljs.core.nth.call(null,vec__39390,1,null);{
var G__39391 = cljs.core.next.call(null,v__$1);
var G__39392 = cljs.core.assoc_BANG_.call(null,r,cljs.core.logic.protocols.walk_term.call(null,f.call(null,vfk),f),cljs.core.logic.protocols.walk_term.call(null,f.call(null,vfv),f));
v__$1 = G__39391;
r = G__39392;
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
var G__39394 = cljs.core.next.call(null,v__$2);
var G__39395 = cljs.core.conj_BANG_.call(null,r,cljs.core.logic.protocols.walk_term.call(null,f.call(null,cljs.core.first.call(null,v__$2)),f));
v__$2 = G__39394;
r = G__39395;
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
{return cljs.core.with_meta.call(null,cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__39393_SHARP_){return cljs.core.logic.protocols.walk_term.call(null,f.call(null,p1__39393_SHARP_),f);
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
{var or__11188__auto__ = cljs.core.logic.occurs_check.call(null,s__$1,x__$1,cljs.core.first.call(null,v__$1));if(cljs.core.truth_(or__11188__auto__))
{return or__11188__auto__;
} else
{{
var G__39396 = cljs.core.next.call(null,v__$1);
var G__39397 = x__$1;
var G__39398 = s__$1;
v__$1 = G__39396;
x__$1 = G__39397;
s__$1 = G__39398;
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
var composeg__2 = (function (g0,g1){return (function (a){var a__$1 = g0.call(null,a);var and__11176__auto__ = a__$1;if(cljs.core.truth_(and__11176__auto__))
{return g1.call(null,a__$1);
} else
{return and__11176__auto__;
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
cljs.core.logic.Choice.cljs$lang$ctorPrWriter = (function (this__11732__auto__,writer__11733__auto__,opt__11734__auto__){return cljs.core._write.call(null,writer__11733__auto__,"cljs.core.logic/Choice");
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
var this$__$1 = this;var G__39399 = k;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"a","a",1013904339),G__39399))
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
var solutions__2 = (function (s,g){return solutions.call(null,s,(new cljs.core.logic.LVar(39401,true,"39401",null,48849167,null)),g);
});
var solutions__3 = (function (s,q,g){return cljs.core.logic.protocols.take_STAR_.call(null,(function (a__34512__auto__){return cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,a__34512__auto__,g),cljs.core.logic.reifyg.call(null,q));
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
cljs.core.logic.onceo = (function onceo(g){return (function (a39403){return cljs.core.logic.protocols.ifu.call(null,g.call(null,a39403),cljs.core.PersistentVector.EMPTY,null);
});
});
/**
* Copies a term u into v. Non-relational.
*/
cljs.core.logic.copy_term = (function copy_term(u,v){return (function (a39405){var u__$1 = cljs.core.logic.walk_STAR_.call(null,a39405,u);return (function (a__34461__auto__){return (function _inc(){return cljs.core.logic.protocols.bind.call(null,a__34461__auto__,cljs.core.logic._EQ__EQ_.call(null,cljs.core.logic.walk_STAR_.call(null,cljs.core.logic.build.call(null,cljs.core.logic.empty_s,u__$1),u__$1),v));
});
}).call(null,a39405);
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
cljs.core.logic.firsto = (function firsto(l,a){return (function (a__34461__auto__){return (function _inc(){var d = (function (){var id__34892__auto__ = ((true)?39409:new cljs.core.Symbol(null,"d","d",-1640531427,null));var name__34893__auto__ = ((true)?[cljs.core.str(new cljs.core.Symbol(null,"d","d",-1640531427,null)),cljs.core.str("__"),cljs.core.str(id__34892__auto__)].join(''):[cljs.core.str(new cljs.core.Symbol(null,"d","d",-1640531427,null))].join(''));return (new cljs.core.logic.LVar(id__34892__auto__,true,name__34893__auto__,new cljs.core.Symbol(null,"d","d",-1640531427,null),cljs.core.hash.call(null,new cljs.core.Symbol(null,"d","d",-1640531427,null)),null));
})();return cljs.core.logic.protocols.bind.call(null,a__34461__auto__,cljs.core.logic.conso.call(null,a,d,l));
});
});
});
/**
* A relation where l is a collection, such that d is the rest of l
*/
cljs.core.logic.resto = (function resto(l,d){return (function (a__34461__auto__){return (function _inc(){var a = (function (){var id__34892__auto__ = ((true)?39413:new cljs.core.Symbol(null,"a","a",-1640531430,null));var name__34893__auto__ = ((true)?[cljs.core.str(new cljs.core.Symbol(null,"a","a",-1640531430,null)),cljs.core.str("__"),cljs.core.str(id__34892__auto__)].join(''):[cljs.core.str(new cljs.core.Symbol(null,"a","a",-1640531430,null))].join(''));return (new cljs.core.logic.LVar(id__34892__auto__,true,name__34893__auto__,new cljs.core.Symbol(null,"a","a",-1640531430,null),cljs.core.hash.call(null,new cljs.core.Symbol(null,"a","a",-1640531430,null)),null));
})();return cljs.core.logic.protocols.bind.call(null,a__34461__auto__,cljs.core.logic._EQ__EQ_.call(null,cljs.core.logic.lcons.call(null,a,d),l));
});
});
});
/**
* A pseudo-relation that takes a coll and ensures that the goal g
* succeeds on every element of the collection.
*/
cljs.core.logic.everyg = (function everyg(g,coll){return (function (a){var coll__$1 = cljs.core.logic.protocols.walk.call(null,a,coll);return (function everyg_STAR_(g__$1,coll__$2){if(cljs.core.seq.call(null,coll__$2))
{return (function (a__34512__auto__){return cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,a__34512__auto__,g__$1.call(null,cljs.core.first.call(null,coll__$2))),everyg_STAR_.call(null,g__$1,cljs.core.next.call(null,coll__$2)));
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
cljs.core.logic.membero = (function membero(x,l){return (function (a39427){return (function _inc(){return cljs.core.logic.protocols.mplus.call(null,cljs.core.logic.protocols.bind.call(null,a39427,(function (a__34461__auto__){return (function _inc__$1(){var tail = (function (){var id__34892__auto__ = ((true)?39435:new cljs.core.Symbol(null,"tail","tail",-1636979191,null));var name__34893__auto__ = ((true)?[cljs.core.str(new cljs.core.Symbol(null,"tail","tail",-1636979191,null)),cljs.core.str("__"),cljs.core.str(id__34892__auto__)].join(''):[cljs.core.str(new cljs.core.Symbol(null,"tail","tail",-1636979191,null))].join(''));return (new cljs.core.logic.LVar(id__34892__auto__,true,name__34893__auto__,new cljs.core.Symbol(null,"tail","tail",-1636979191,null),cljs.core.hash.call(null,new cljs.core.Symbol(null,"tail","tail",-1636979191,null)),null));
})();return cljs.core.logic.protocols.bind.call(null,a__34461__auto__,cljs.core.logic._EQ__EQ_.call(null,cljs.core.logic.lcons.call(null,x,tail),l));
});
})),(function (){return cljs.core.logic.protocols.bind.call(null,a39427,(function (a__34461__auto__){return (function _inc__$1(){var head = (function (){var id__34892__auto__ = ((true)?39438:new cljs.core.Symbol(null,"head","head",-1637333095,null));var name__34893__auto__ = ((true)?[cljs.core.str(new cljs.core.Symbol(null,"head","head",-1637333095,null)),cljs.core.str("__"),cljs.core.str(id__34892__auto__)].join(''):[cljs.core.str(new cljs.core.Symbol(null,"head","head",-1637333095,null))].join(''));return (new cljs.core.logic.LVar(id__34892__auto__,true,name__34893__auto__,new cljs.core.Symbol(null,"head","head",-1637333095,null),cljs.core.hash.call(null,new cljs.core.Symbol(null,"head","head",-1637333095,null)),null));
})();var tail = (function (){var id__34892__auto__ = ((true)?39439:new cljs.core.Symbol(null,"tail","tail",-1636979191,null));var name__34893__auto__ = ((true)?[cljs.core.str(new cljs.core.Symbol(null,"tail","tail",-1636979191,null)),cljs.core.str("__"),cljs.core.str(id__34892__auto__)].join(''):[cljs.core.str(new cljs.core.Symbol(null,"tail","tail",-1636979191,null))].join(''));return (new cljs.core.logic.LVar(id__34892__auto__,true,name__34893__auto__,new cljs.core.Symbol(null,"tail","tail",-1636979191,null),cljs.core.hash.call(null,new cljs.core.Symbol(null,"tail","tail",-1636979191,null)),null));
})();return cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,a__34461__auto__,cljs.core.logic._EQ__EQ_.call(null,cljs.core.logic.lcons.call(null,head,tail),l)),membero.call(null,x,tail));
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
cljs.core.logic.member1o = (function member1o(x,l){return (function (a39453){return (function _inc(){return cljs.core.logic.protocols.mplus.call(null,cljs.core.logic.protocols.bind.call(null,a39453,(function (a__34461__auto__){return (function _inc__$1(){var tail = (function (){var id__34892__auto__ = ((true)?39461:new cljs.core.Symbol(null,"tail","tail",-1636979191,null));var name__34893__auto__ = ((true)?[cljs.core.str(new cljs.core.Symbol(null,"tail","tail",-1636979191,null)),cljs.core.str("__"),cljs.core.str(id__34892__auto__)].join(''):[cljs.core.str(new cljs.core.Symbol(null,"tail","tail",-1636979191,null))].join(''));return (new cljs.core.logic.LVar(id__34892__auto__,true,name__34893__auto__,new cljs.core.Symbol(null,"tail","tail",-1636979191,null),cljs.core.hash.call(null,new cljs.core.Symbol(null,"tail","tail",-1636979191,null)),null));
})();return cljs.core.logic.protocols.bind.call(null,a__34461__auto__,cljs.core.logic._EQ__EQ_.call(null,cljs.core.logic.lcons.call(null,x,tail),l));
});
})),(function (){return cljs.core.logic.protocols.bind.call(null,a39453,(function (a__34461__auto__){return (function _inc__$1(){var head = (function (){var id__34892__auto__ = ((true)?39464:new cljs.core.Symbol(null,"head","head",-1637333095,null));var name__34893__auto__ = ((true)?[cljs.core.str(new cljs.core.Symbol(null,"head","head",-1637333095,null)),cljs.core.str("__"),cljs.core.str(id__34892__auto__)].join(''):[cljs.core.str(new cljs.core.Symbol(null,"head","head",-1637333095,null))].join(''));return (new cljs.core.logic.LVar(id__34892__auto__,true,name__34893__auto__,new cljs.core.Symbol(null,"head","head",-1637333095,null),cljs.core.hash.call(null,new cljs.core.Symbol(null,"head","head",-1637333095,null)),null));
})();var tail = (function (){var id__34892__auto__ = ((true)?39465:new cljs.core.Symbol(null,"tail","tail",-1636979191,null));var name__34893__auto__ = ((true)?[cljs.core.str(new cljs.core.Symbol(null,"tail","tail",-1636979191,null)),cljs.core.str("__"),cljs.core.str(id__34892__auto__)].join(''):[cljs.core.str(new cljs.core.Symbol(null,"tail","tail",-1636979191,null))].join(''));return (new cljs.core.logic.LVar(id__34892__auto__,true,name__34893__auto__,new cljs.core.Symbol(null,"tail","tail",-1636979191,null),cljs.core.hash.call(null,new cljs.core.Symbol(null,"tail","tail",-1636979191,null)),null));
})();return cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,a__34461__auto__,cljs.core.logic._EQ__EQ_.call(null,cljs.core.logic.lcons.call(null,head,tail),l)),cljs.core.logic._BANG__EQ_.call(null,x,head)),member1o.call(null,x,tail));
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
cljs.core.logic.appendo = (function appendo(x,y,z){return (function (a39483){return (function _inc(){return cljs.core.logic.protocols.mplus.call(null,cljs.core.logic.protocols.bind.call(null,a39483,(function (a__34461__auto__){return (function _inc__$1(){return cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,a__34461__auto__,cljs.core.logic._EQ__EQ_.call(null,cljs.core.List.EMPTY,x)),(function (a__34461__auto____$1){return (function _inc__$1(){return cljs.core.logic.protocols.bind.call(null,a__34461__auto____$1,cljs.core.logic._EQ__EQ_.call(null,y,z));
});
}));
});
})),(function (){return cljs.core.logic.protocols.bind.call(null,a39483,(function (a__34461__auto__){return (function _inc__$1(){var a = (function (){var id__34892__auto__ = ((true)?39496:new cljs.core.Symbol(null,"a","a",-1640531430,null));var name__34893__auto__ = ((true)?[cljs.core.str(new cljs.core.Symbol(null,"a","a",-1640531430,null)),cljs.core.str("__"),cljs.core.str(id__34892__auto__)].join(''):[cljs.core.str(new cljs.core.Symbol(null,"a","a",-1640531430,null))].join(''));return (new cljs.core.logic.LVar(id__34892__auto__,true,name__34893__auto__,new cljs.core.Symbol(null,"a","a",-1640531430,null),cljs.core.hash.call(null,new cljs.core.Symbol(null,"a","a",-1640531430,null)),null));
})();var d = (function (){var id__34892__auto__ = ((true)?39497:new cljs.core.Symbol(null,"d","d",-1640531427,null));var name__34893__auto__ = ((true)?[cljs.core.str(new cljs.core.Symbol(null,"d","d",-1640531427,null)),cljs.core.str("__"),cljs.core.str(id__34892__auto__)].join(''):[cljs.core.str(new cljs.core.Symbol(null,"d","d",-1640531427,null))].join(''));return (new cljs.core.logic.LVar(id__34892__auto__,true,name__34893__auto__,new cljs.core.Symbol(null,"d","d",-1640531427,null),cljs.core.hash.call(null,new cljs.core.Symbol(null,"d","d",-1640531427,null)),null));
})();return cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,a__34461__auto__,cljs.core.logic._EQ__EQ_.call(null,cljs.core.logic.lcons.call(null,a,d),x)),(function (a__34461__auto____$1){return (function _inc__$1(){var r = (function (){var id__34892__auto__ = ((true)?39499:new cljs.core.Symbol(null,"r","r",-1640531413,null));var name__34893__auto__ = ((true)?[cljs.core.str(new cljs.core.Symbol(null,"r","r",-1640531413,null)),cljs.core.str("__"),cljs.core.str(id__34892__auto__)].join(''):[cljs.core.str(new cljs.core.Symbol(null,"r","r",-1640531413,null))].join(''));return (new cljs.core.logic.LVar(id__34892__auto__,true,name__34893__auto__,new cljs.core.Symbol(null,"r","r",-1640531413,null),cljs.core.hash.call(null,new cljs.core.Symbol(null,"r","r",-1640531413,null)),null));
})();return cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,a__34461__auto____$1,cljs.core.logic._EQ__EQ_.call(null,cljs.core.logic.lcons.call(null,a,r),z)),appendo.call(null,d,y,r));
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
cljs.core.logic.permuteo = (function permuteo(xl,yl){return (function (a39517){return (function _inc(){return cljs.core.logic.protocols.mplus.call(null,cljs.core.logic.protocols.bind.call(null,a39517,(function (a__34461__auto__){return (function _inc__$1(){return cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,a__34461__auto__,cljs.core.logic._EQ__EQ_.call(null,cljs.core.List.EMPTY,xl)),(function (a__34461__auto____$1){return (function _inc__$1(){return cljs.core.logic.protocols.bind.call(null,a__34461__auto____$1,cljs.core.logic._EQ__EQ_.call(null,cljs.core.List.EMPTY,yl));
});
}));
});
})),(function (){return cljs.core.logic.protocols.bind.call(null,a39517,(function (a__34461__auto__){return (function _inc__$1(){var xs = (function (){var id__34892__auto__ = ((true)?39530:new cljs.core.Symbol(null,"xs","xs",-1640527692,null));var name__34893__auto__ = ((true)?[cljs.core.str(new cljs.core.Symbol(null,"xs","xs",-1640527692,null)),cljs.core.str("__"),cljs.core.str(id__34892__auto__)].join(''):[cljs.core.str(new cljs.core.Symbol(null,"xs","xs",-1640527692,null))].join(''));return (new cljs.core.logic.LVar(id__34892__auto__,true,name__34893__auto__,new cljs.core.Symbol(null,"xs","xs",-1640527692,null),cljs.core.hash.call(null,new cljs.core.Symbol(null,"xs","xs",-1640527692,null)),null));
})();var x = (function (){var id__34892__auto__ = ((true)?39531:new cljs.core.Symbol(null,"x","x",-1640531407,null));var name__34893__auto__ = ((true)?[cljs.core.str(new cljs.core.Symbol(null,"x","x",-1640531407,null)),cljs.core.str("__"),cljs.core.str(id__34892__auto__)].join(''):[cljs.core.str(new cljs.core.Symbol(null,"x","x",-1640531407,null))].join(''));return (new cljs.core.logic.LVar(id__34892__auto__,true,name__34893__auto__,new cljs.core.Symbol(null,"x","x",-1640531407,null),cljs.core.hash.call(null,new cljs.core.Symbol(null,"x","x",-1640531407,null)),null));
})();return cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,a__34461__auto__,cljs.core.logic._EQ__EQ_.call(null,cljs.core.logic.lcons.call(null,x,xs),xl)),(function (a__34461__auto____$1){return (function _inc__$1(){var ys = (function (){var id__34892__auto__ = ((true)?39533:new cljs.core.Symbol(null,"ys","ys",-1640527661,null));var name__34893__auto__ = ((true)?[cljs.core.str(new cljs.core.Symbol(null,"ys","ys",-1640527661,null)),cljs.core.str("__"),cljs.core.str(id__34892__auto__)].join(''):[cljs.core.str(new cljs.core.Symbol(null,"ys","ys",-1640527661,null))].join(''));return (new cljs.core.logic.LVar(id__34892__auto__,true,name__34893__auto__,new cljs.core.Symbol(null,"ys","ys",-1640527661,null),cljs.core.hash.call(null,new cljs.core.Symbol(null,"ys","ys",-1640527661,null)),null));
})();return cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,a__34461__auto____$1,permuteo.call(null,xs,ys)),cljs.core.logic.rembero.call(null,x,yl,ys));
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
cljs.core.logic.AnswerCache.cljs$lang$ctorPrWriter = (function (this__11732__auto__,writer__11733__auto__,opt__11734__auto__){return cljs.core._write.call(null,writer__11733__auto__,"cljs.core.logic/AnswerCache");
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
var this$__$1 = this;var pred__39534 = cljs.core.keyword_identical_QMARK_;var expr__39535 = k;if(cljs.core.truth_(pred__39534.call(null,new cljs.core.Keyword(null,"ansl","ansl",1016903352),expr__39535)))
{return self__.ansl;
} else
{if(cljs.core.truth_(pred__39534.call(null,new cljs.core.Keyword(null,"anss","anss",1016903359),expr__39535)))
{return self__.anss;
} else
{return not_found;
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
cljs.core.logic.SuspendedStream.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11745__auto__){var self__ = this;
var this__11745__auto____$1 = this;var h__11599__auto__ = self__.__hash;if(!((h__11599__auto__ == null)))
{return h__11599__auto__;
} else
{var h__11599__auto____$1 = cljs.core.hash_imap.call(null,this__11745__auto____$1);self__.__hash = h__11599__auto____$1;
return h__11599__auto____$1;
}
});
cljs.core.logic.SuspendedStream.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11750__auto__,k__11751__auto__){var self__ = this;
var this__11750__auto____$1 = this;return cljs.core._lookup.call(null,this__11750__auto____$1,k__11751__auto__,null);
});
cljs.core.logic.SuspendedStream.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11752__auto__,k39538,else__11753__auto__){var self__ = this;
var this__11752__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k39538,new cljs.core.Keyword(null,"cache","cache",1108321012)))
{return self__.cache;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k39538,new cljs.core.Keyword(null,"ansv*","ansv*",1106877004)))
{return self__.ansv_STAR_;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k39538,new cljs.core.Keyword(null,"f","f",1013904344)))
{return self__.f;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k39538,else__11753__auto__);
} else
{return null;
}
}
}
}
});
cljs.core.logic.SuspendedStream.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11757__auto__,k__11758__auto__,G__39537){var self__ = this;
var this__11757__auto____$1 = this;var pred__39540 = cljs.core.keyword_identical_QMARK_;var expr__39541 = k__11758__auto__;if(cljs.core.truth_(pred__39540.call(null,new cljs.core.Keyword(null,"cache","cache",1108321012),expr__39541)))
{return (new cljs.core.logic.SuspendedStream(G__39537,self__.ansv_STAR_,self__.f,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__39540.call(null,new cljs.core.Keyword(null,"ansv*","ansv*",1106877004),expr__39541)))
{return (new cljs.core.logic.SuspendedStream(self__.cache,G__39537,self__.f,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__39540.call(null,new cljs.core.Keyword(null,"f","f",1013904344),expr__39541)))
{return (new cljs.core.logic.SuspendedStream(self__.cache,self__.ansv_STAR_,G__39537,self__.__meta,self__.__extmap,null));
} else
{return (new cljs.core.logic.SuspendedStream(self__.cache,self__.ansv_STAR_,self__.f,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__11758__auto__,G__39537),null));
}
}
}
});
cljs.core.logic.SuspendedStream.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11764__auto__,writer__11765__auto__,opts__11766__auto__){var self__ = this;
var this__11764__auto____$1 = this;var pr_pair__11767__auto__ = (function (keyval__11768__auto__){return cljs.core.pr_sequential_writer.call(null,writer__11765__auto__,cljs.core.pr_writer,""," ","",opts__11766__auto__,keyval__11768__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__11765__auto__,pr_pair__11767__auto__,"#cljs.core.logic.SuspendedStream{",", ","}",opts__11766__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cache","cache",1108321012),self__.cache],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ansv*","ansv*",1106877004),self__.ansv_STAR_],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"f","f",1013904344),self__.f],null))], null),self__.__extmap));
});
cljs.core.logic.SuspendedStream.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11755__auto__,entry__11756__auto__){var self__ = this;
var this__11755__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__11756__auto__))
{return cljs.core._assoc.call(null,this__11755__auto____$1,cljs.core._nth.call(null,entry__11756__auto__,0),cljs.core._nth.call(null,entry__11756__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__11755__auto____$1,entry__11756__auto__);
}
});
cljs.core.logic.SuspendedStream.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11762__auto__){var self__ = this;
var this__11762__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cache","cache",1108321012),self__.cache],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ansv*","ansv*",1106877004),self__.ansv_STAR_],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"f","f",1013904344),self__.f],null))], null),self__.__extmap));
});
cljs.core.logic.SuspendedStream.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11754__auto__){var self__ = this;
var this__11754__auto____$1 = this;return (3 + cljs.core.count.call(null,self__.__extmap));
});
cljs.core.logic.SuspendedStream.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__11746__auto__,other__11747__auto__){var self__ = this;
var this__11746__auto____$1 = this;if(cljs.core.truth_((function (){var and__11176__auto__ = other__11747__auto__;if(cljs.core.truth_(and__11176__auto__))
{return ((this__11746__auto____$1.constructor === other__11747__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__11746__auto____$1,other__11747__auto__));
} else
{return and__11176__auto__;
}
})()))
{return true;
} else
{return false;
}
});
cljs.core.logic.SuspendedStream.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11749__auto__,G__39537){var self__ = this;
var this__11749__auto____$1 = this;return (new cljs.core.logic.SuspendedStream(self__.cache,self__.ansv_STAR_,self__.f,G__39537,self__.__extmap,self__.__hash));
});
cljs.core.logic.SuspendedStream.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11748__auto__){var self__ = this;
var this__11748__auto____$1 = this;return self__.__meta;
});
cljs.core.logic.SuspendedStream.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11759__auto__,k__11760__auto__){var self__ = this;
var this__11759__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"f","f",1013904344),null,new cljs.core.Keyword(null,"ansv*","ansv*",1106877004),null,new cljs.core.Keyword(null,"cache","cache",1108321012),null], null), null),k__11760__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__11759__auto____$1),self__.__meta),k__11760__auto__);
} else
{return (new cljs.core.logic.SuspendedStream(self__.cache,self__.ansv_STAR_,self__.f,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__11760__auto__)),null));
}
});
cljs.core.logic.SuspendedStream.prototype.cljs$core$logic$protocols$ISuspendedStream$ = true;
cljs.core.logic.SuspendedStream.prototype.cljs$core$logic$protocols$ISuspendedStream$ready_QMARK_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return !((cljs.core.deref.call(null,self__.cache).ansl === self__.ansv_STAR_));
});
cljs.core.logic.SuspendedStream.cljs$lang$type = true;
cljs.core.logic.SuspendedStream.cljs$lang$ctorPrSeq = (function (this__11784__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.core.logic/SuspendedStream");
});
cljs.core.logic.SuspendedStream.cljs$lang$ctorPrWriter = (function (this__11784__auto__,writer__11785__auto__){return cljs.core._write.call(null,writer__11785__auto__,"cljs.core.logic/SuspendedStream");
});
cljs.core.logic.__GT_SuspendedStream = (function __GT_SuspendedStream(cache,ansv_STAR_,f){return (new cljs.core.logic.SuspendedStream(cache,ansv_STAR_,f));
});
cljs.core.logic.map__GT_SuspendedStream = (function map__GT_SuspendedStream(G__39539){return (new cljs.core.logic.SuspendedStream(new cljs.core.Keyword(null,"cache","cache",1108321012).cljs$core$IFn$_invoke$arity$1(G__39539),new cljs.core.Keyword(null,"ansv*","ansv*",1106877004).cljs$core$IFn$_invoke$arity$1(G__39539),new cljs.core.Keyword(null,"f","f",1013904344).cljs$core$IFn$_invoke$arity$1(G__39539),null,cljs.core.dissoc.call(null,G__39539,new cljs.core.Keyword(null,"cache","cache",1108321012),new cljs.core.Keyword(null,"ansv*","ansv*",1106877004),new cljs.core.Keyword(null,"f","f",1013904344))));
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
var G__39543 = cljs.core.next.call(null,w__$1);
var G__39544 = cljs.core.conj.call(null,a,cljs.core.first.call(null,w__$1));
w__$1 = G__39543;
a = G__39544;
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
{return cljs.core.logic.protocols.ext_no_check.call(null,this$__$1,v__$1,(function (){var id__34892__auto__ = ((true)?39545:cljs.core.count.call(null,this$__$1.s));var name__34893__auto__ = ((true)?[cljs.core.str(cljs.core.count.call(null,this$__$1.s)),cljs.core.str("__"),cljs.core.str(id__34892__auto__)].join(''):[cljs.core.str(cljs.core.count.call(null,this$__$1.s))].join(''));return (new cljs.core.logic.LVar(id__34892__auto__,true,name__34893__auto__,cljs.core.count.call(null,this$__$1.s),cljs.core.hash.call(null,cljs.core.count.call(null,this$__$1.s)),null));
})());
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
cljs.core.logic.Substitutions.prototype.cljs$core$logic$protocols$ITabled$reuse$arity$5 = (function (this$,argv,cache,start,end){var this$__$1 = this;var start__$1 = (function (){var or__11188__auto__ = start;if(cljs.core.truth_(or__11188__auto__))
{return or__11188__auto__;
} else
{return cljs.core.deref.call(null,cache).ansl;
}
})();var end__$1 = (function (){var or__11188__auto__ = end;if(cljs.core.truth_(or__11188__auto__))
{return or__11188__auto__;
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
cljs.core.logic.ientailed_QMARK_ = (function ientailed_QMARK_(c){var G__39547 = c;if(G__39547)
{var bit__11814__auto__ = null;if(cljs.core.truth_((function (){var or__11188__auto__ = bit__11814__auto__;if(cljs.core.truth_(or__11188__auto__))
{return or__11188__auto__;
} else
{return G__39547.cljs$core$logic$protocols$IEntailed$;
}
})()))
{return true;
} else
{if((!G__39547.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.logic.protocols.IEntailed,G__39547);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.logic.protocols.IEntailed,G__39547);
}
});
cljs.core.logic.entailed_QMARK_ = (function entailed_QMARK_(c,c_SINGLEQUOTE_,a){var id = cljs.core.logic.protocols.id.call(null,c);var and__11176__auto__ = (function (){var or__11188__auto__ = new cljs.core.Keyword(null,"cm","cm",1013907420).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"cs","cs",1013907426).cljs$core$IFn$_invoke$arity$1(a)).call(null,id);if(cljs.core.truth_(or__11188__auto__))
{return or__11188__auto__;
} else
{return (id == null);
}
})();if(cljs.core.truth_(and__11176__auto__))
{return cljs.core.logic.protocols._entailed_QMARK_.call(null,c_SINGLEQUOTE_);
} else
{return and__11176__auto__;
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
var G__39548 = cljs.core.logic.run_constraint.call(null,c).call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,a__$1,new cljs.core.Keyword(null,"cq","cq",1013907424),cljs.core.subvec.call(null,a__$1.cq,1)),new cljs.core.Keyword(null,"cqs","cqs",1014002999),cljs.core.disj.call(null,a__$1.cqs,cljs.core.logic.protocols.id.call(null,c))));
a__$1 = G__39548;
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
,cljs.core.assoc.call(null,a,new cljs.core.Keyword(null,"cq","cq",1013907424),(function (){var or__11188__auto__ = cq;if(cljs.core.truth_(or__11188__auto__))
{return or__11188__auto__;
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
var G__39549 = a__$1;
var G__39550 = cljs.core.next.call(null,constrained__$1);
a__$1 = G__39549;
constrained__$1 = G__39550;
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
cljs.core.logic.enforce_constraints = (function enforce_constraints(x){return (function (a__34512__auto__){return cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,a__34512__auto__,cljs.core.logic.force_ans.call(null,x)),(function (a){var constrained = cljs.core.logic.enforceable_constrained.call(null,a);cljs.core.logic.verify_all_bound.call(null,a,constrained);
return cljs.core.logic.onceo.call(null,cljs.core.logic.force_ans.call(null,constrained)).call(null,a);
}));
});
});
cljs.core.logic.reify_constraints = (function reify_constraints(v,r,a){var cs = a.cs;var rcs = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (cs){
return (function (p1__39552_SHARP_){return !((p1__39552_SHARP_ == null));
});})(cs))
,cljs.core.map.call(null,((function (cs){
return (function (p1__39551_SHARP_){return cljs.core.logic.protocols._reifyc.call(null,p1__39551_SHARP_,v,r,a);
});})(cs))
,cljs.core.filter.call(null,cljs.core.logic.protocols.reifiable_QMARK_,cljs.core.vals.call(null,cs.cm)))));if(cljs.core.empty_QMARK_.call(null,rcs))
{return cljs.core.logic.choice.call(null,v,cljs.core.logic.empty_f);
} else
{return cljs.core.logic.choice.call(null,cljs.core.with_meta.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,v),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"-","-",1013904287)),rcs)),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,1612),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,16),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,1612),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,29))))),cljs.core.logic.empty_f);
}
});
cljs.core.logic.reifyg = (function reifyg(x){return (function (a__34512__auto__){return cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,a__34512__auto__,cljs.core.logic.enforce_constraints.call(null,x)),(function (a){var v = cljs.core.logic.walk_STAR_.call(null,a,x);var r = cljs.core.logic._reify_STAR_.call(null,cljs.core.with_meta.call(null,cljs.core.logic.empty_s,cljs.core.meta.call(null,a)),v);if((cljs.core.count.call(null,r) === 0))
{return cljs.core.logic.choice.call(null,v,cljs.core.logic.empty_f);
} else
{var v__$1 = cljs.core.logic.walk_STAR_.call(null,r,v);return cljs.core.logic.reify_constraints.call(null,v__$1,r,a);
}
}));
});
});
cljs.core.logic.cgoal = (function cgoal(c){if(typeof cljs.core.logic.t39557 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.t39557 = (function (c,cgoal,meta39558){
this.c = c;
this.cgoal = cgoal;
this.meta39558 = meta39558;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.logic.t39557.cljs$lang$type = true;
cljs.core.logic.t39557.cljs$lang$ctorStr = "cljs.core.logic/t39557";
cljs.core.logic.t39557.cljs$lang$ctorPrWriter = (function (this__11732__auto__,writer__11733__auto__,opt__11734__auto__){return cljs.core._write.call(null,writer__11733__auto__,"cljs.core.logic/t39557");
});
cljs.core.logic.t39557.prototype.cljs$core$logic$protocols$IUnwrapConstraint$ = true;
cljs.core.logic.t39557.prototype.cljs$core$logic$protocols$IUnwrapConstraint$_unwrap$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.c;
});
cljs.core.logic.t39557.prototype.call = (function (self__,a){var self__ = this;
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
cljs.core.logic.t39557.prototype.apply = (function (self__,args39560){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args39560)));
});
cljs.core.logic.t39557.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){var self__ = this;
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
cljs.core.logic.t39557.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39559){var self__ = this;
var _39559__$1 = this;return self__.meta39558;
});
cljs.core.logic.t39557.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39559,meta39558__$1){var self__ = this;
var _39559__$1 = this;return (new cljs.core.logic.t39557(self__.c,self__.cgoal,meta39558__$1));
});
cljs.core.logic.__GT_t39557 = (function __GT_t39557(c__$1,cgoal__$1,meta39558){return (new cljs.core.logic.t39557(c__$1,cgoal__$1,meta39558));
});
}
return (new cljs.core.logic.t39557(c,cgoal,null));
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
cljs.core.logic.sort_by_strategy = (function sort_by_strategy(v,x,a){var G__39562 = new cljs.core.Keyword("cljs.core.logic","strategy","cljs.core.logic/strategy",3884554094).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,x));if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.core.logic","ff","cljs.core.logic/ff",3673845945),G__39562))
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
cljs.core.logic.LCons.prototype.cljs$core$logic$protocols$IForceAnswerTerm$_force_ans$arity$2 = (function (v,x){var v__$1 = this;var loop = (function loop(ys){return (function (a__34512__auto__){return cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,a__34512__auto__,cljs.core.logic.force_ans.call(null,cljs.core.logic.protocols.lfirst.call(null,ys))),((cljs.core.logic.lcons_QMARK_.call(null,cljs.core.logic.protocols.lnext.call(null,ys)))?loop.call(null,cljs.core.logic.protocols.lnext.call(null,ys)):cljs.core.logic.s_SHARP_));
});
});
return loop.call(null,v__$1);
});
(cljs.core.logic.protocols.IForceAnswerTerm["_"] = true);
(cljs.core.logic.protocols._force_ans["_"] = (function (v,x){if(cljs.core.sequential_QMARK_.call(null,v))
{var loop = (function loop(ys){if(cljs.core.truth_(ys))
{return (function (a__34512__auto__){return cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,a__34512__auto__,cljs.core.logic.force_ans.call(null,cljs.core.first.call(null,ys))),(function (a){var temp__4096__auto__ = cljs.core.logic.sort_by_strategy.call(null,cljs.core.next.call(null,ys),x,a);if(cljs.core.truth_(temp__4096__auto__))
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
{return (function (a__34512__auto__){return cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,a__34512__auto__,cljs.core.logic.force_ans.call(null,cljs.core.val.call(null,cljs.core.first.call(null,ys)))),loop.call(null,cljs.core.next.call(null,ys)));
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
var G__39565 = cljs.core.next.call(null,u__$1);
var G__39566 = cljs.core.next.call(null,v__$1);
var G__39567 = cs__$2;
u__$1 = G__39565;
v__$1 = G__39566;
cs__$1 = G__39567;
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
var G__39568 = cljs.core.next.call(null,ks);
var G__39569 = cs__$2;
ks = G__39568;
cs__$1 = G__39569;
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
cljs.core.logic.LVar.prototype.cljs$core$logic$protocols$IDisunifyTerms$_disunify_terms$arity$4 = (function (u,v,s,p__39563){var map__39564 = p__39563;var map__39564__$1 = ((cljs.core.seq_QMARK_.call(null,map__39564))?cljs.core.apply.call(null,cljs.core.hash_map,map__39564):map__39564);var cs = map__39564__$1;var pc = cljs.core.get.call(null,map__39564__$1,new cljs.core.Keyword(null,"prefixc","prefixc",695243651));var u__$1 = this;return cljs.core.assoc.call(null,cs,new cljs.core.Keyword(null,"prefixc","prefixc",695243651),cljs.core.assoc.call(null,pc,u__$1,v));
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
{var vec__39571 = cljs.core.first.call(null,p__$1);var u = cljs.core.nth.call(null,vec__39571,0,null);var v = cljs.core.nth.call(null,vec__39571,1,null);{
var G__39572 = cljs.core.next.call(null,p__$1);
var G__39573 = clojure.set.union.call(null,r,cljs.core.logic.recover_vars_from_term.call(null,u),cljs.core.logic.recover_vars_from_term.call(null,v));
p__$1 = G__39572;
r = G__39573;
continue;
}
} else
{return r;
}
break;
}
});
cljs.core.logic._BANG__EQ_c = (function _BANG__EQ_c(p){if(typeof cljs.core.logic.t39586 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.t39586 = (function (p,_BANG__EQ_c,meta39587){
this.p = p;
this._BANG__EQ_c = _BANG__EQ_c;
this.meta39587 = meta39587;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.logic.t39586.cljs$lang$type = true;
cljs.core.logic.t39586.cljs$lang$ctorStr = "cljs.core.logic/t39586";
cljs.core.logic.t39586.cljs$lang$ctorPrWriter = (function (this__11732__auto__,writer__11733__auto__,opt__11734__auto__){return cljs.core._write.call(null,writer__11733__auto__,"cljs.core.logic/t39586");
});
cljs.core.logic.t39586.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$ = true;
cljs.core.logic.t39586.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$_watched_stores$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440),null], null), null);
});
cljs.core.logic.t39586.prototype.cljs$core$logic$protocols$IConstraintOp$ = true;
cljs.core.logic.t39586.prototype.cljs$core$logic$protocols$IConstraintOp$_rator$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic","!=","cljs.core.logic/!=",1019412108,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,1832),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,18),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,1832),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,36)))));
});
cljs.core.logic.t39586.prototype.cljs$core$logic$protocols$IConstraintOp$_rands$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.seq.call(null,cljs.core.logic.recover_vars.call(null,self__.p));
});
cljs.core.logic.t39586.prototype.cljs$core$logic$protocols$IReifiableConstraint$ = true;
cljs.core.logic.t39586.prototype.cljs$core$logic$protocols$IReifiableConstraint$_reifyc$arity$4 = (function (this$,v,r,a){var self__ = this;
var this$__$1 = this;var p_STAR_ = cljs.core.logic._reify.call(null,a,cljs.core.map.call(null,(function (p__39589){var vec__39590 = p__39589;var lhs = cljs.core.nth.call(null,vec__39590,0,null);var rhs = cljs.core.nth.call(null,vec__39590,1,null);return cljs.core.with_meta.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,lhs),cljs.core._conj.call(null,cljs.core.List.EMPTY,rhs))),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,1827),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,48),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,1827),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,59)))));
}),self__.p),r);if(cljs.core.empty_QMARK_.call(null,p_STAR_))
{return cljs.core.List.EMPTY;
} else
{return cljs.core.with_meta.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"!=","!=",-1640530443,null)),p_STAR_)),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,1830),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,12),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,1830),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,23)))));
}
});
cljs.core.logic.t39586.prototype.cljs$core$logic$protocols$IWithPrefix$ = true;
cljs.core.logic.t39586.prototype.cljs$core$logic$protocols$IWithPrefix$_with_prefix$arity$2 = (function (_,p__$2){var self__ = this;
var ___$1 = this;return self__._BANG__EQ_c.call(null,p__$2);
});
cljs.core.logic.t39586.prototype.cljs$core$logic$protocols$IPrefix$ = true;
cljs.core.logic.t39586.prototype.cljs$core$logic$protocols$IPrefix$_prefix$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.p;
});
cljs.core.logic.t39586.prototype.cljs$core$logic$protocols$IConstraintStep$ = true;
cljs.core.logic.t39586.prototype.cljs$core$logic$protocols$IConstraintStep$_step$arity$2 = (function (this$,s){var self__ = this;
var this$__$1 = this;if(typeof cljs.core.logic.t39591 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.t39591 = (function (s,this$,meta39587,p,_BANG__EQ_c,meta39592){
this.s = s;
this.this$ = this$;
this.meta39587 = meta39587;
this.p = p;
this._BANG__EQ_c = _BANG__EQ_c;
this.meta39592 = meta39592;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.logic.t39591.cljs$lang$type = true;
cljs.core.logic.t39591.cljs$lang$ctorStr = "cljs.core.logic/t39591";
cljs.core.logic.t39591.cljs$lang$ctorPrWriter = (function (this__11732__auto__,writer__11733__auto__,opt__11734__auto__){return cljs.core._write.call(null,writer__11733__auto__,"cljs.core.logic/t39591");
});
cljs.core.logic.t39591.prototype.cljs$core$logic$protocols$IEntailed$ = true;
cljs.core.logic.t39591.prototype.cljs$core$logic$protocols$IEntailed$_entailed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.empty_QMARK_.call(null,self__.p);
});
cljs.core.logic.t39591.prototype.cljs$core$logic$protocols$IRunnable$ = true;
cljs.core.logic.t39591.prototype.cljs$core$logic$protocols$IRunnable$_runnable_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.some.call(null,(function (p1__39574_SHARP_){return cljs.core.not_EQ_.call(null,cljs.core.logic.protocols.walk.call(null,self__.s,p1__39574_SHARP_),p1__39574_SHARP_);
}),cljs.core.logic.recover_vars.call(null,self__.p));
});
cljs.core.logic.t39591.prototype.call = (function (self__,s__$2){var self__ = this;
var self____$1 = this;var _ = self____$1;var p__$3 = (function (){var sp = cljs.core.seq.call(null,self__.p);var p__$3 = self__.p;while(true){
if(sp)
{var vec__39595 = cljs.core.first.call(null,sp);var x = cljs.core.nth.call(null,vec__39595,0,null);var v = cljs.core.nth.call(null,vec__39595,1,null);var xv = cljs.core.logic.walk_STAR_.call(null,s__$2,x);var vv = cljs.core.logic.walk_STAR_.call(null,s__$2,v);if(cljs.core._EQ_.call(null,xv,vv))
{{
var G__39597 = cljs.core.next.call(null,sp);
var G__39598 = cljs.core.dissoc.call(null,p__$3,x);
sp = G__39597;
p__$3 = G__39598;
continue;
}
} else
{if((cljs.core.logic.unify.call(null,s__$2,xv,vv) == null))
{return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__39599 = cljs.core.next.call(null,sp);
var G__39600 = cljs.core.assoc.call(null,cljs.core.dissoc.call(null,p__$3,x),xv,vv);
sp = G__39599;
p__$3 = G__39600;
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
cljs.core.logic.t39591.prototype.apply = (function (self__,args39594){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args39594)));
});
cljs.core.logic.t39591.prototype.cljs$core$IFn$_invoke$arity$1 = (function (s__$2){var self__ = this;
var _ = this;var p__$3 = (function (){var sp = cljs.core.seq.call(null,self__.p);var p__$3 = self__.p;while(true){
if(sp)
{var vec__39596 = cljs.core.first.call(null,sp);var x = cljs.core.nth.call(null,vec__39596,0,null);var v = cljs.core.nth.call(null,vec__39596,1,null);var xv = cljs.core.logic.walk_STAR_.call(null,s__$2,x);var vv = cljs.core.logic.walk_STAR_.call(null,s__$2,v);if(cljs.core._EQ_.call(null,xv,vv))
{{
var G__39601 = cljs.core.next.call(null,sp);
var G__39602 = cljs.core.dissoc.call(null,p__$3,x);
sp = G__39601;
p__$3 = G__39602;
continue;
}
} else
{if((cljs.core.logic.unify.call(null,s__$2,xv,vv) == null))
{return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__39603 = cljs.core.next.call(null,sp);
var G__39604 = cljs.core.assoc.call(null,cljs.core.dissoc.call(null,p__$3,x),xv,vv);
sp = G__39603;
p__$3 = G__39604;
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
cljs.core.logic.t39591.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39593){var self__ = this;
var _39593__$1 = this;return self__.meta39592;
});
cljs.core.logic.t39591.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39593,meta39592__$1){var self__ = this;
var _39593__$1 = this;return (new cljs.core.logic.t39591(self__.s,self__.this$,self__.meta39587,self__.p,self__._BANG__EQ_c,meta39592__$1));
});
cljs.core.logic.__GT_t39591 = (function __GT_t39591(s__$1,this$__$2,meta39587__$1,p__$2,_BANG__EQ_c__$2,meta39592){return (new cljs.core.logic.t39591(s__$1,this$__$2,meta39587__$1,p__$2,_BANG__EQ_c__$2,meta39592));
});
}
return (new cljs.core.logic.t39591(s,this$__$1,self__.meta39587,self__.p,self__._BANG__EQ_c,null));
});
cljs.core.logic.t39586.prototype.cljs$core$logic$protocols$ITreeConstraint$ = true;
cljs.core.logic.t39586.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39588){var self__ = this;
var _39588__$1 = this;return self__.meta39587;
});
cljs.core.logic.t39586.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39588,meta39587__$1){var self__ = this;
var _39588__$1 = this;return (new cljs.core.logic.t39586(self__.p,self__._BANG__EQ_c,meta39587__$1));
});
cljs.core.logic.__GT_t39586 = (function __GT_t39586(p__$1,_BANG__EQ_c__$1,meta39587){return (new cljs.core.logic.t39586(p__$1,_BANG__EQ_c__$1,meta39587));
});
}
return (new cljs.core.logic.t39586(p,_BANG__EQ_c,null));
});
/**
* Disequality constraint. Ensures that u and v will never
* unify. u and v can be complex terms.
*/
cljs.core.logic._BANG__EQ_ = (function _BANG__EQ_(u,v){return (function (a){var cs = cljs.core.logic.disunify.call(null,a,u,v);if(!((cs == null)))
{var p = new cljs.core.Keyword(null,"prefixc","prefixc",695243651).cljs$core$IFn$_invoke$arity$1(cs);if(cljs.core.empty_QMARK_.call(null,p))
{return null;
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p__39607){var vec__39608 = p__39607;var u__$1 = cljs.core.nth.call(null,vec__39608,0,null);var v__$1 = cljs.core.nth.call(null,vec__39608,1,null);return (cljs.core.logic.unify.call(null,a,u__$1,v__$1) == null);
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
cljs.core.logic.distincto = (function distincto(l){return (function (a39626){return (function _inc(){return cljs.core.logic.protocols.mplus.call(null,cljs.core.logic.protocols.bind.call(null,a39626,(function (a__34461__auto__){return (function _inc__$1(){return cljs.core.logic.protocols.bind.call(null,a__34461__auto__,cljs.core.logic._EQ__EQ_.call(null,cljs.core.List.EMPTY,l));
});
})),(function (){return cljs.core.logic.protocols.mplus.call(null,cljs.core.logic.protocols.bind.call(null,a39626,(function (a__34461__auto__){return (function _inc__$1(){var h = (function (){var id__34892__auto__ = ((true)?39636:new cljs.core.Symbol(null,"h","h",-1640531423,null));var name__34893__auto__ = ((true)?[cljs.core.str(new cljs.core.Symbol(null,"h","h",-1640531423,null)),cljs.core.str("__"),cljs.core.str(id__34892__auto__)].join(''):[cljs.core.str(new cljs.core.Symbol(null,"h","h",-1640531423,null))].join(''));return (new cljs.core.logic.LVar(id__34892__auto__,true,name__34893__auto__,new cljs.core.Symbol(null,"h","h",-1640531423,null),cljs.core.hash.call(null,new cljs.core.Symbol(null,"h","h",-1640531423,null)),null));
})();return cljs.core.logic.protocols.bind.call(null,a__34461__auto__,cljs.core.logic._EQ__EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [h], null),l));
});
})),(function (){return cljs.core.logic.protocols.bind.call(null,a39626,(function (a__34461__auto__){return (function _inc__$1(){var t = (function (){var id__34892__auto__ = ((true)?39640:new cljs.core.Symbol(null,"t","t",-1640531411,null));var name__34893__auto__ = ((true)?[cljs.core.str(new cljs.core.Symbol(null,"t","t",-1640531411,null)),cljs.core.str("__"),cljs.core.str(id__34892__auto__)].join(''):[cljs.core.str(new cljs.core.Symbol(null,"t","t",-1640531411,null))].join(''));return (new cljs.core.logic.LVar(id__34892__auto__,true,name__34893__auto__,new cljs.core.Symbol(null,"t","t",-1640531411,null),cljs.core.hash.call(null,new cljs.core.Symbol(null,"t","t",-1640531411,null)),null));
})();var h1 = (function (){var id__34892__auto__ = ((true)?39641:new cljs.core.Symbol(null,"h1","h1",-1640528254,null));var name__34893__auto__ = ((true)?[cljs.core.str(new cljs.core.Symbol(null,"h1","h1",-1640528254,null)),cljs.core.str("__"),cljs.core.str(id__34892__auto__)].join(''):[cljs.core.str(new cljs.core.Symbol(null,"h1","h1",-1640528254,null))].join(''));return (new cljs.core.logic.LVar(id__34892__auto__,true,name__34893__auto__,new cljs.core.Symbol(null,"h1","h1",-1640528254,null),cljs.core.hash.call(null,new cljs.core.Symbol(null,"h1","h1",-1640528254,null)),null));
})();var h0 = (function (){var id__34892__auto__ = ((true)?39642:new cljs.core.Symbol(null,"h0","h0",-1640528255,null));var name__34893__auto__ = ((true)?[cljs.core.str(new cljs.core.Symbol(null,"h0","h0",-1640528255,null)),cljs.core.str("__"),cljs.core.str(id__34892__auto__)].join(''):[cljs.core.str(new cljs.core.Symbol(null,"h0","h0",-1640528255,null))].join(''));return (new cljs.core.logic.LVar(id__34892__auto__,true,name__34893__auto__,new cljs.core.Symbol(null,"h0","h0",-1640528255,null),cljs.core.hash.call(null,new cljs.core.Symbol(null,"h0","h0",-1640528255,null)),null));
})();return cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,a__34461__auto__,cljs.core.logic._EQ__EQ_.call(null,cljs.core.logic.lcons.call(null,h0,cljs.core.logic.lcons.call(null,h1,t)),l)),cljs.core.logic._BANG__EQ_.call(null,h0,h1)),distincto.call(null,cljs.core.logic.lcons.call(null,h0,t))),distincto.call(null,cljs.core.logic.lcons.call(null,h1,t)));
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
cljs.core.logic.rembero = (function rembero(x,l,o){return (function (a39664){return (function _inc(){return cljs.core.logic.protocols.mplus.call(null,cljs.core.logic.protocols.bind.call(null,a39664,(function (a__34461__auto__){return (function _inc__$1(){var xs = (function (){var id__34892__auto__ = ((true)?39676:new cljs.core.Symbol(null,"xs","xs",-1640527692,null));var name__34893__auto__ = ((true)?[cljs.core.str(new cljs.core.Symbol(null,"xs","xs",-1640527692,null)),cljs.core.str("__"),cljs.core.str(id__34892__auto__)].join(''):[cljs.core.str(new cljs.core.Symbol(null,"xs","xs",-1640527692,null))].join(''));return (new cljs.core.logic.LVar(id__34892__auto__,true,name__34893__auto__,new cljs.core.Symbol(null,"xs","xs",-1640527692,null),cljs.core.hash.call(null,new cljs.core.Symbol(null,"xs","xs",-1640527692,null)),null));
})();return cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,a__34461__auto__,cljs.core.logic._EQ__EQ_.call(null,cljs.core.logic.lcons.call(null,x,xs),l)),(function (a__34461__auto____$1){return (function _inc__$1(){return cljs.core.logic.protocols.bind.call(null,a__34461__auto____$1,cljs.core.logic._EQ__EQ_.call(null,xs,o));
});
}));
});
})),(function (){return cljs.core.logic.protocols.bind.call(null,a39664,(function (a__34461__auto__){return (function _inc__$1(){var ys = (function (){var id__34892__auto__ = ((true)?39681:new cljs.core.Symbol(null,"ys","ys",-1640527661,null));var name__34893__auto__ = ((true)?[cljs.core.str(new cljs.core.Symbol(null,"ys","ys",-1640527661,null)),cljs.core.str("__"),cljs.core.str(id__34892__auto__)].join(''):[cljs.core.str(new cljs.core.Symbol(null,"ys","ys",-1640527661,null))].join(''));return (new cljs.core.logic.LVar(id__34892__auto__,true,name__34893__auto__,new cljs.core.Symbol(null,"ys","ys",-1640527661,null),cljs.core.hash.call(null,new cljs.core.Symbol(null,"ys","ys",-1640527661,null)),null));
})();var y = (function (){var id__34892__auto__ = ((true)?39682:new cljs.core.Symbol(null,"y","y",-1640531406,null));var name__34893__auto__ = ((true)?[cljs.core.str(new cljs.core.Symbol(null,"y","y",-1640531406,null)),cljs.core.str("__"),cljs.core.str(id__34892__auto__)].join(''):[cljs.core.str(new cljs.core.Symbol(null,"y","y",-1640531406,null))].join(''));return (new cljs.core.logic.LVar(id__34892__auto__,true,name__34893__auto__,new cljs.core.Symbol(null,"y","y",-1640531406,null),cljs.core.hash.call(null,new cljs.core.Symbol(null,"y","y",-1640531406,null)),null));
})();return cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,a__34461__auto__,cljs.core.logic._EQ__EQ_.call(null,cljs.core.logic.lcons.call(null,y,ys),l)),(function (a__34461__auto____$1){return (function _inc__$1(){var zs = (function (){var id__34892__auto__ = ((true)?39684:new cljs.core.Symbol(null,"zs","zs",-1640527630,null));var name__34893__auto__ = ((true)?[cljs.core.str(new cljs.core.Symbol(null,"zs","zs",-1640527630,null)),cljs.core.str("__"),cljs.core.str(id__34892__auto__)].join(''):[cljs.core.str(new cljs.core.Symbol(null,"zs","zs",-1640527630,null))].join(''));return (new cljs.core.logic.LVar(id__34892__auto__,true,name__34893__auto__,new cljs.core.Symbol(null,"zs","zs",-1640527630,null),cljs.core.hash.call(null,new cljs.core.Symbol(null,"zs","zs",-1640527630,null)),null));
})();return cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,a__34461__auto____$1,cljs.core.logic._EQ__EQ_.call(null,cljs.core.logic.lcons.call(null,y,zs),o)),cljs.core.logic._BANG__EQ_.call(null,y,x)),rembero.call(null,x,ys,zs));
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
var G__39685 = cljs.core.next.call(null,ks);
var G__39686 = cljs.core.logic.featurec.call(null,vf,uf).call(null,s__$1);
ks = G__39685;
s__$1 = G__39686;
continue;
}
} else
{if(cljs.core.map_QMARK_.call(null,uf))
{var temp__4096__auto__ = cljs.core.logic.unify.call(null,s__$1,cljs.core.logic.partial_map.call(null,uf),vf);if(cljs.core.truth_(temp__4096__auto__))
{var s__$2 = temp__4096__auto__;{
var G__39687 = cljs.core.next.call(null,ks);
var G__39688 = s__$2;
ks = G__39687;
s__$1 = G__39688;
continue;
}
} else
{return null;
}
} else
{var temp__4096__auto__ = cljs.core.logic.unify.call(null,s__$1,uf,vf);if(cljs.core.truth_(temp__4096__auto__))
{var s__$2 = temp__4096__auto__;{
var G__39689 = cljs.core.next.call(null,ks);
var G__39690 = s__$2;
ks = G__39689;
s__$1 = G__39690;
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
cljs.core.logic.PMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11745__auto__){var self__ = this;
var this__11745__auto____$1 = this;var h__11599__auto__ = self__.__hash;if(!((h__11599__auto__ == null)))
{return h__11599__auto__;
} else
{var h__11599__auto____$1 = cljs.core.hash_imap.call(null,this__11745__auto____$1);self__.__hash = h__11599__auto____$1;
return h__11599__auto____$1;
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
cljs.core.logic.PMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11750__auto__,k__11751__auto__){var self__ = this;
var this__11750__auto____$1 = this;return cljs.core._lookup.call(null,this__11750__auto____$1,k__11751__auto__,null);
});
cljs.core.logic.PMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11752__auto__,k39692,else__11753__auto__){var self__ = this;
var this__11752__auto____$1 = this;if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k39692,else__11753__auto__);
} else
{return null;
}
});
cljs.core.logic.PMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11757__auto__,k__11758__auto__,G__39691){var self__ = this;
var this__11757__auto____$1 = this;var pred__39694 = cljs.core.keyword_identical_QMARK_;var expr__39695 = k__11758__auto__;return (new cljs.core.logic.PMap(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__11758__auto__,G__39691),null));
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
cljs.core.logic.PMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11764__auto__,writer__11765__auto__,opts__11766__auto__){var self__ = this;
var this__11764__auto____$1 = this;var pr_pair__11767__auto__ = (function (keyval__11768__auto__){return cljs.core.pr_sequential_writer.call(null,writer__11765__auto__,cljs.core.pr_writer,""," ","",opts__11766__auto__,keyval__11768__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__11765__auto__,pr_pair__11767__auto__,"#cljs.core.logic.PMap{",", ","}",opts__11766__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});
cljs.core.logic.PMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11755__auto__,entry__11756__auto__){var self__ = this;
var this__11755__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__11756__auto__))
{return cljs.core._assoc.call(null,this__11755__auto____$1,cljs.core._nth.call(null,entry__11756__auto__,0),cljs.core._nth.call(null,entry__11756__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__11755__auto____$1,entry__11756__auto__);
}
});
cljs.core.logic.PMap.prototype.cljs$core$logic$protocols$INonStorable$ = true;
cljs.core.logic.PMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11762__auto__){var self__ = this;
var this__11762__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});
cljs.core.logic.PMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11754__auto__){var self__ = this;
var this__11754__auto____$1 = this;return (0 + cljs.core.count.call(null,self__.__extmap));
});
cljs.core.logic.PMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__11746__auto__,other__11747__auto__){var self__ = this;
var this__11746__auto____$1 = this;if(cljs.core.truth_((function (){var and__11176__auto__ = other__11747__auto__;if(cljs.core.truth_(and__11176__auto__))
{return ((this__11746__auto____$1.constructor === other__11747__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__11746__auto____$1,other__11747__auto__));
} else
{return and__11176__auto__;
}
})()))
{return true;
} else
{return false;
}
});
cljs.core.logic.PMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11749__auto__,G__39691){var self__ = this;
var this__11749__auto____$1 = this;return (new cljs.core.logic.PMap(G__39691,self__.__extmap,self__.__hash));
});
cljs.core.logic.PMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11748__auto__){var self__ = this;
var this__11748__auto____$1 = this;return self__.__meta;
});
cljs.core.logic.PMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11759__auto__,k__11760__auto__){var self__ = this;
var this__11759__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__11760__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__11759__auto____$1),self__.__meta),k__11760__auto__);
} else
{return (new cljs.core.logic.PMap(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__11760__auto__)),null));
}
});
cljs.core.logic.PMap.cljs$lang$type = true;
cljs.core.logic.PMap.cljs$lang$ctorPrSeq = (function (this__11784__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.core.logic/PMap");
});
cljs.core.logic.PMap.cljs$lang$ctorPrWriter = (function (this__11784__auto__,writer__11785__auto__){return cljs.core._write.call(null,writer__11785__auto__,"cljs.core.logic/PMap");
});
cljs.core.logic.__GT_PMap = (function __GT_PMap(){return (new cljs.core.logic.PMap());
});
cljs.core.logic.map__GT_PMap = (function map__GT_PMap(G__39693){return (new cljs.core.logic.PMap(null,cljs.core.dissoc.call(null,G__39693)));
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
cljs.core.logic._featurec = (function _featurec(x,fs){if(typeof cljs.core.logic.t39704 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.t39704 = (function (fs,x,_featurec,meta39705){
this.fs = fs;
this.x = x;
this._featurec = _featurec;
this.meta39705 = meta39705;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.logic.t39704.cljs$lang$type = true;
cljs.core.logic.t39704.cljs$lang$ctorStr = "cljs.core.logic/t39704";
cljs.core.logic.t39704.cljs$lang$ctorPrWriter = (function (this__11732__auto__,writer__11733__auto__,opt__11734__auto__){return cljs.core._write.call(null,writer__11733__auto__,"cljs.core.logic/t39704");
});
cljs.core.logic.t39704.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$ = true;
cljs.core.logic.t39704.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$_watched_stores$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440),null], null), null);
});
cljs.core.logic.t39704.prototype.cljs$core$logic$protocols$IReifiableConstraint$ = true;
cljs.core.logic.t39704.prototype.cljs$core$logic$protocols$IReifiableConstraint$_reifyc$arity$4 = (function (_,v,r,a){var self__ = this;
var ___$1 = this;var fs__$2 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,self__.fs);var r__$1 = cljs.core.logic._reify_STAR_.call(null,r,cljs.core.logic.walk_STAR_.call(null,a,fs__$2));return cljs.core.with_meta.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic","featurec","cljs.core.logic/featurec",-851976461,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,1949),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,11),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,1949),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,19)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.logic.walk_STAR_.call(null,r__$1,self__.x)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.logic.walk_STAR_.call(null,r__$1,fs__$2)))),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,1949),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,10),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,1949),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,47)))));
});
cljs.core.logic.t39704.prototype.cljs$core$logic$protocols$IConstraintOp$ = true;
cljs.core.logic.t39704.prototype.cljs$core$logic$protocols$IConstraintOp$_rator$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic","featurec","cljs.core.logic/featurec",-851976461,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,1943),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,18),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,1943),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,42)))));
});
cljs.core.logic.t39704.prototype.cljs$core$logic$protocols$IConstraintOp$_rands$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.x], null);
});
cljs.core.logic.t39704.prototype.cljs$core$logic$protocols$IConstraintStep$ = true;
cljs.core.logic.t39704.prototype.cljs$core$logic$protocols$IConstraintStep$_step$arity$2 = (function (this$,s){var self__ = this;
var this$__$1 = this;if(typeof cljs.core.logic.t39707 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.t39707 = (function (s,this$,meta39705,fs,x,_featurec,meta39708){
this.s = s;
this.this$ = this$;
this.meta39705 = meta39705;
this.fs = fs;
this.x = x;
this._featurec = _featurec;
this.meta39708 = meta39708;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.logic.t39707.cljs$lang$type = true;
cljs.core.logic.t39707.cljs$lang$ctorStr = "cljs.core.logic/t39707";
cljs.core.logic.t39707.cljs$lang$ctorPrWriter = (function (this__11732__auto__,writer__11733__auto__,opt__11734__auto__){return cljs.core._write.call(null,writer__11733__auto__,"cljs.core.logic/t39707");
});
cljs.core.logic.t39707.prototype.cljs$core$logic$protocols$IRunnable$ = true;
cljs.core.logic.t39707.prototype.cljs$core$logic$protocols$IRunnable$_runnable_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return !(cljs.core.logic.lvar_QMARK_.call(null,cljs.core.logic.protocols.walk.call(null,self__.s,self__.x)));
});
cljs.core.logic.t39707.prototype.call = (function (self__,s__$2){var self__ = this;
var self____$1 = this;var _ = self____$1;return cljs.core.logic.composeg.call(null,cljs.core.logic._EQ__EQ_.call(null,self__.fs,self__.x),cljs.core.logic.remcg.call(null,self__.this$)).call(null,s__$2);
});
cljs.core.logic.t39707.prototype.apply = (function (self__,args39710){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args39710)));
});
cljs.core.logic.t39707.prototype.cljs$core$IFn$_invoke$arity$1 = (function (s__$2){var self__ = this;
var _ = this;return cljs.core.logic.composeg.call(null,cljs.core.logic._EQ__EQ_.call(null,self__.fs,self__.x),cljs.core.logic.remcg.call(null,self__.this$)).call(null,s__$2);
});
cljs.core.logic.t39707.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39709){var self__ = this;
var _39709__$1 = this;return self__.meta39708;
});
cljs.core.logic.t39707.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39709,meta39708__$1){var self__ = this;
var _39709__$1 = this;return (new cljs.core.logic.t39707(self__.s,self__.this$,self__.meta39705,self__.fs,self__.x,self__._featurec,meta39708__$1));
});
cljs.core.logic.__GT_t39707 = (function __GT_t39707(s__$1,this$__$2,meta39705__$1,fs__$2,x__$2,_featurec__$2,meta39708){return (new cljs.core.logic.t39707(s__$1,this$__$2,meta39705__$1,fs__$2,x__$2,_featurec__$2,meta39708));
});
}
return (new cljs.core.logic.t39707(s,this$__$1,self__.meta39705,self__.fs,self__.x,self__._featurec,null));
});
cljs.core.logic.t39704.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39706){var self__ = this;
var _39706__$1 = this;return self__.meta39705;
});
cljs.core.logic.t39704.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39706,meta39705__$1){var self__ = this;
var _39706__$1 = this;return (new cljs.core.logic.t39704(self__.fs,self__.x,self__._featurec,meta39705__$1));
});
cljs.core.logic.__GT_t39704 = (function __GT_t39704(fs__$1,x__$1,_featurec__$1,meta39705){return (new cljs.core.logic.t39704(fs__$1,x__$1,_featurec__$1,meta39705));
});
}
return (new cljs.core.logic.t39704(fs,x,_featurec,null));
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
}catch (e39712){if((e39712 instanceof Error))
{var e = e39712;return false;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e39712;
} else
{return null;
}
}
}});
cljs.core.logic._predc = (function() {
var _predc = null;
var _predc__2 = (function (x,p){return _predc.call(null,x,p,p);
});
var _predc__3 = (function (x,p,pform){if(typeof cljs.core.logic.t39720 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.t39720 = (function (pform,p,x,_predc,meta39721){
this.pform = pform;
this.p = p;
this.x = x;
this._predc = _predc;
this.meta39721 = meta39721;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.logic.t39720.cljs$lang$type = true;
cljs.core.logic.t39720.cljs$lang$ctorStr = "cljs.core.logic/t39720";
cljs.core.logic.t39720.cljs$lang$ctorPrWriter = (function (this__11732__auto__,writer__11733__auto__,opt__11734__auto__){return cljs.core._write.call(null,writer__11733__auto__,"cljs.core.logic/t39720");
});
cljs.core.logic.t39720.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$ = true;
cljs.core.logic.t39720.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$_watched_stores$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440),null], null), null);
});
cljs.core.logic.t39720.prototype.cljs$core$logic$protocols$IReifiableConstraint$ = true;
cljs.core.logic.t39720.prototype.cljs$core$logic$protocols$IReifiableConstraint$_reifyc$arity$4 = (function (c,v,r,s){var self__ = this;
var c__$1 = this;if((cljs.core.not_EQ_.call(null,self__.p,self__.pform)) && (cljs.core.fn_QMARK_.call(null,self__.pform)))
{return self__.pform.call(null,c__$1,v,r,s);
} else
{return self__.pform;
}
});
cljs.core.logic.t39720.prototype.cljs$core$logic$protocols$IConstraintOp$ = true;
cljs.core.logic.t39720.prototype.cljs$core$logic$protocols$IConstraintOp$_rator$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.println.call(null,((cljs.core.seq_QMARK_.call(null,self__.pform))?cljs.core.with_meta.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic","predc","cljs.core.logic/predc",895622310,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2004),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,14),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2004),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,19)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,self__.pform))),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2004),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,13),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2004),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,27))))):cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic","predc","cljs.core.logic/predc",895622310,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2005),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,13),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2005),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,34)))))));
if(cljs.core.seq_QMARK_.call(null,self__.pform))
{return cljs.core.with_meta.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic","predc","cljs.core.logic/predc",895622310,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2007),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,14),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2007),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,19)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,self__.pform))),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2007),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,13),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2007),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,27)))));
} else
{return cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic","predc","cljs.core.logic/predc",895622310,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2008),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,13),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2008),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,34)))));
}
});
cljs.core.logic.t39720.prototype.cljs$core$logic$protocols$IConstraintOp$_rands$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.x], null);
});
cljs.core.logic.t39720.prototype.cljs$core$logic$protocols$IConstraintStep$ = true;
cljs.core.logic.t39720.prototype.cljs$core$logic$protocols$IConstraintStep$_step$arity$2 = (function (this$,s){var self__ = this;
var this$__$1 = this;if(typeof cljs.core.logic.t39723 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.t39723 = (function (s,this$,meta39721,pform,p,x,_predc,meta39724){
this.s = s;
this.this$ = this$;
this.meta39721 = meta39721;
this.pform = pform;
this.p = p;
this.x = x;
this._predc = _predc;
this.meta39724 = meta39724;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.logic.t39723.cljs$lang$type = true;
cljs.core.logic.t39723.cljs$lang$ctorStr = "cljs.core.logic/t39723";
cljs.core.logic.t39723.cljs$lang$ctorPrWriter = (function (this__11732__auto__,writer__11733__auto__,opt__11734__auto__){return cljs.core._write.call(null,writer__11733__auto__,"cljs.core.logic/t39723");
});
cljs.core.logic.t39723.prototype.cljs$core$logic$protocols$IRunnable$ = true;
cljs.core.logic.t39723.prototype.cljs$core$logic$protocols$IRunnable$_runnable_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return !(cljs.core.logic.lvar_QMARK_.call(null,cljs.core.logic.protocols.walk.call(null,self__.s,self__.x)));
});
cljs.core.logic.t39723.prototype.call = (function (self__,s__$2){var self__ = this;
var self____$1 = this;var _ = self____$1;var x__$3 = cljs.core.logic.protocols.walk.call(null,s__$2,self__.x);if(cljs.core.truth_(self__.p.call(null,x__$3)))
{return cljs.core.logic.remcg.call(null,self__.this$).call(null,s__$2);
} else
{return null;
}
});
cljs.core.logic.t39723.prototype.apply = (function (self__,args39726){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args39726)));
});
cljs.core.logic.t39723.prototype.cljs$core$IFn$_invoke$arity$1 = (function (s__$2){var self__ = this;
var _ = this;var x__$3 = cljs.core.logic.protocols.walk.call(null,s__$2,self__.x);if(cljs.core.truth_(self__.p.call(null,x__$3)))
{return cljs.core.logic.remcg.call(null,self__.this$).call(null,s__$2);
} else
{return null;
}
});
cljs.core.logic.t39723.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39725){var self__ = this;
var _39725__$1 = this;return self__.meta39724;
});
cljs.core.logic.t39723.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39725,meta39724__$1){var self__ = this;
var _39725__$1 = this;return (new cljs.core.logic.t39723(self__.s,self__.this$,self__.meta39721,self__.pform,self__.p,self__.x,self__._predc,meta39724__$1));
});
cljs.core.logic.__GT_t39723 = (function __GT_t39723(s__$1,this$__$2,meta39721__$1,pform__$2,p__$2,x__$2,_predc__$2,meta39724){return (new cljs.core.logic.t39723(s__$1,this$__$2,meta39721__$1,pform__$2,p__$2,x__$2,_predc__$2,meta39724));
});
}
return (new cljs.core.logic.t39723(s,this$__$1,self__.meta39721,self__.pform,self__.p,self__.x,self__._predc,null));
});
cljs.core.logic.t39720.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39722){var self__ = this;
var _39722__$1 = this;return self__.meta39721;
});
cljs.core.logic.t39720.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39722,meta39721__$1){var self__ = this;
var _39722__$1 = this;return (new cljs.core.logic.t39720(self__.pform,self__.p,self__.x,self__._predc,meta39721__$1));
});
cljs.core.logic.__GT_t39720 = (function __GT_t39720(pform__$1,p__$1,x__$1,_predc__$1,meta39721){return (new cljs.core.logic.t39720(pform__$1,p__$1,x__$1,_predc__$1,meta39721));
});
}
return (new cljs.core.logic.t39720(pform,p,x,_predc,null));
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
var G__39727 = f__$1.call(null);
f__$1 = G__39727;
continue;
}
} else
{return f__$1;
}
break;
}
});
cljs.core.logic._nafc = (function _nafc(c,args){if(typeof cljs.core.logic.t39736 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.t39736 = (function (args,c,_nafc,meta39737){
this.args = args;
this.c = c;
this._nafc = _nafc;
this.meta39737 = meta39737;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.logic.t39736.cljs$lang$type = true;
cljs.core.logic.t39736.cljs$lang$ctorStr = "cljs.core.logic/t39736";
cljs.core.logic.t39736.cljs$lang$ctorPrWriter = (function (this__11732__auto__,writer__11733__auto__,opt__11734__auto__){return cljs.core._write.call(null,writer__11733__auto__,"cljs.core.logic/t39736");
});
cljs.core.logic.t39736.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$ = true;
cljs.core.logic.t39736.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$_watched_stores$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440),null], null), null);
});
cljs.core.logic.t39736.prototype.cljs$core$logic$protocols$IReifiableConstraint$ = true;
cljs.core.logic.t39736.prototype.cljs$core$logic$protocols$IReifiableConstraint$_reifyc$arity$4 = (function (_,v,r,s){var self__ = this;
var ___$1 = this;return cljs.core.with_meta.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic","nafc","cljs.core.logic/nafc",1019102320,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2056),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,12),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2056),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,16)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,self__.c),cljs.core.logic._reify.call(null,s,self__.args,r))),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2056),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,11),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2056),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,40)))));
});
cljs.core.logic.t39736.prototype.cljs$core$logic$protocols$IConstraintOp$ = true;
cljs.core.logic.t39736.prototype.cljs$core$logic$protocols$IConstraintOp$_rator$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic","nafc","cljs.core.logic/nafc",1019102320,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2052),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,21),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2052),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,41)))));
});
cljs.core.logic.t39736.prototype.cljs$core$logic$protocols$IConstraintOp$_rands$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.c], null),self__.args));
});
cljs.core.logic.t39736.prototype.cljs$core$logic$protocols$IConstraintStep$ = true;
cljs.core.logic.t39736.prototype.cljs$core$logic$protocols$IConstraintStep$_step$arity$2 = (function (this$,s){var self__ = this;
var this$__$1 = this;if(typeof cljs.core.logic.t39739 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.t39739 = (function (s,this$,meta39737,args,c,_nafc,meta39740){
this.s = s;
this.this$ = this$;
this.meta39737 = meta39737;
this.args = args;
this.c = c;
this._nafc = _nafc;
this.meta39740 = meta39740;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.logic.t39739.cljs$lang$type = true;
cljs.core.logic.t39739.cljs$lang$ctorStr = "cljs.core.logic/t39739";
cljs.core.logic.t39739.cljs$lang$ctorPrWriter = (function (this__11732__auto__,writer__11733__auto__,opt__11734__auto__){return cljs.core._write.call(null,writer__11733__auto__,"cljs.core.logic/t39739");
});
cljs.core.logic.t39739.prototype.cljs$core$logic$protocols$IRunnable$ = true;
cljs.core.logic.t39739.prototype.cljs$core$logic$protocols$IRunnable$_runnable_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.every_QMARK_.call(null,(function (p1__39728_SHARP_){return cljs.core.logic.ground_term_QMARK_.call(null,p1__39728_SHARP_,self__.s);
}),self__.args);
});
cljs.core.logic.t39739.prototype.call = (function (self__,s__$2){var self__ = this;
var self____$1 = this;var _ = self____$1;if(cljs.core.truth_(cljs.core.logic.tramp.call(null,cljs.core.apply.call(null,self__.c,self__.args).call(null,s__$2))))
{return null;
} else
{return cljs.core.logic.remcg.call(null,self__.this$).call(null,s__$2);
}
});
cljs.core.logic.t39739.prototype.apply = (function (self__,args39742){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args39742)));
});
cljs.core.logic.t39739.prototype.cljs$core$IFn$_invoke$arity$1 = (function (s__$2){var self__ = this;
var _ = this;if(cljs.core.truth_(cljs.core.logic.tramp.call(null,cljs.core.apply.call(null,self__.c,self__.args).call(null,s__$2))))
{return null;
} else
{return cljs.core.logic.remcg.call(null,self__.this$).call(null,s__$2);
}
});
cljs.core.logic.t39739.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39741){var self__ = this;
var _39741__$1 = this;return self__.meta39740;
});
cljs.core.logic.t39739.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39741,meta39740__$1){var self__ = this;
var _39741__$1 = this;return (new cljs.core.logic.t39739(self__.s,self__.this$,self__.meta39737,self__.args,self__.c,self__._nafc,meta39740__$1));
});
cljs.core.logic.__GT_t39739 = (function __GT_t39739(s__$1,this$__$2,meta39737__$1,args__$2,c__$2,_nafc__$2,meta39740){return (new cljs.core.logic.t39739(s__$1,this$__$2,meta39737__$1,args__$2,c__$2,_nafc__$2,meta39740));
});
}
return (new cljs.core.logic.t39739(s,this$__$1,self__.meta39737,self__.args,self__.c,self__._nafc,null));
});
cljs.core.logic.t39736.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39738){var self__ = this;
var _39738__$1 = this;return self__.meta39737;
});
cljs.core.logic.t39736.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39738,meta39737__$1){var self__ = this;
var _39738__$1 = this;return (new cljs.core.logic.t39736(self__.args,self__.c,self__._nafc,meta39737__$1));
});
cljs.core.logic.__GT_t39736 = (function __GT_t39736(args__$1,c__$1,_nafc__$1,meta39737){return (new cljs.core.logic.t39736(args__$1,c__$1,_nafc__$1,meta39737));
});
}
return (new cljs.core.logic.t39736(args,c,_nafc,null));
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
nafc.cljs$lang$applyTo = (function (arglist__39743){
var c = cljs.core.first(arglist__39743);
var args = cljs.core.rest(arglist__39743);
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
var G__39745 = cljs.core.next.call(null,t__$1);
var G__39746 = s__$2;
t__$1 = G__39745;
s__$1 = G__39746;
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
{var vec__39744 = cljs.core.first.call(null,t__$1);var _ = cljs.core.nth.call(null,vec__39744,0,null);var v = cljs.core.nth.call(null,vec__39744,1,null);var s__$2 = fc.call(null,v,s__$1);if(cljs.core.truth_(s__$2))
{{
var G__39747 = cljs.core.next.call(null,t__$1);
var G__39748 = s__$2;
t__$1 = G__39747;
s__$1 = G__39748;
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
var G__39749 = cljs.core.logic.protocols.lnext.call(null,t__$2);
var G__39750 = s__$2;
t__$2 = G__39749;
s__$1 = G__39750;
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
var _fixc__4 = (function (x,f,runnable,reifier){if(typeof cljs.core.logic.t39758 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.t39758 = (function (reifier,runnable,f,x,_fixc,meta39759){
this.reifier = reifier;
this.runnable = runnable;
this.f = f;
this.x = x;
this._fixc = _fixc;
this.meta39759 = meta39759;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.logic.t39758.cljs$lang$type = true;
cljs.core.logic.t39758.cljs$lang$ctorStr = "cljs.core.logic/t39758";
cljs.core.logic.t39758.cljs$lang$ctorPrWriter = (function (this__11732__auto__,writer__11733__auto__,opt__11734__auto__){return cljs.core._write.call(null,writer__11733__auto__,"cljs.core.logic/t39758");
});
cljs.core.logic.t39758.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$ = true;
cljs.core.logic.t39758.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$_watched_stores$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440),null], null), null);
});
cljs.core.logic.t39758.prototype.cljs$core$logic$protocols$IReifiableConstraint$ = true;
cljs.core.logic.t39758.prototype.cljs$core$logic$protocols$IReifiableConstraint$_reifyc$arity$4 = (function (c,v,r,s){var self__ = this;
var c__$1 = this;if(cljs.core.fn_QMARK_.call(null,self__.reifier))
{return self__.reifier.call(null,c__$1,self__.x,v,r,s);
} else
{var x__$2 = cljs.core.logic.walk_STAR_.call(null,r,self__.x);return cljs.core.with_meta.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic","fixc","cljs.core.logic/fixc",1018347826,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2127),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,16),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2127),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,20)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,x__$2),cljs.core._conj.call(null,cljs.core.List.EMPTY,self__.reifier))),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2127),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,15),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2127),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,33)))));
}
});
cljs.core.logic.t39758.prototype.cljs$core$logic$protocols$IConstraintOp$ = true;
cljs.core.logic.t39758.prototype.cljs$core$logic$protocols$IConstraintOp$_rator$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic","fixc","cljs.core.logic/fixc",1018347826,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2120),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,21),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2120),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,41)))));
});
cljs.core.logic.t39758.prototype.cljs$core$logic$protocols$IConstraintOp$_rands$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(cljs.core.vector_QMARK_.call(null,self__.x))
{return self__.x;
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.x], null);
}
});
cljs.core.logic.t39758.prototype.cljs$core$logic$protocols$IConstraintStep$ = true;
cljs.core.logic.t39758.prototype.cljs$core$logic$protocols$IConstraintStep$_step$arity$2 = (function (this$,s){var self__ = this;
var this$__$1 = this;var xv = cljs.core.logic.protocols.walk.call(null,s,self__.x);if(typeof cljs.core.logic.t39761 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.t39761 = (function (xv,s,this$,meta39759,reifier,runnable,f,x,_fixc,meta39762){
this.xv = xv;
this.s = s;
this.this$ = this$;
this.meta39759 = meta39759;
this.reifier = reifier;
this.runnable = runnable;
this.f = f;
this.x = x;
this._fixc = _fixc;
this.meta39762 = meta39762;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.logic.t39761.cljs$lang$type = true;
cljs.core.logic.t39761.cljs$lang$ctorStr = "cljs.core.logic/t39761";
cljs.core.logic.t39761.cljs$lang$ctorPrWriter = (function (this__11732__auto__,writer__11733__auto__,opt__11734__auto__){return cljs.core._write.call(null,writer__11733__auto__,"cljs.core.logic/t39761");
});
cljs.core.logic.t39761.prototype.cljs$core$logic$protocols$IRunnable$ = true;
cljs.core.logic.t39761.prototype.cljs$core$logic$protocols$IRunnable$_runnable_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(cljs.core.fn_QMARK_.call(null,self__.runnable))
{return self__.runnable.call(null,self__.x,self__.s);
} else
{return !(cljs.core.logic.lvar_QMARK_.call(null,self__.xv));
}
});
cljs.core.logic.t39761.prototype.call = (function (self__,s__$2){var self__ = this;
var self____$1 = this;var _ = self____$1;return cljs.core.logic.composeg.call(null,self__.f.call(null,self__.xv,s__$2,self__.reifier),cljs.core.logic.remcg.call(null,self__.this$)).call(null,s__$2);
});
cljs.core.logic.t39761.prototype.apply = (function (self__,args39764){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args39764)));
});
cljs.core.logic.t39761.prototype.cljs$core$IFn$_invoke$arity$1 = (function (s__$2){var self__ = this;
var _ = this;return cljs.core.logic.composeg.call(null,self__.f.call(null,self__.xv,s__$2,self__.reifier),cljs.core.logic.remcg.call(null,self__.this$)).call(null,s__$2);
});
cljs.core.logic.t39761.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39763){var self__ = this;
var _39763__$1 = this;return self__.meta39762;
});
cljs.core.logic.t39761.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39763,meta39762__$1){var self__ = this;
var _39763__$1 = this;return (new cljs.core.logic.t39761(self__.xv,self__.s,self__.this$,self__.meta39759,self__.reifier,self__.runnable,self__.f,self__.x,self__._fixc,meta39762__$1));
});
cljs.core.logic.__GT_t39761 = (function __GT_t39761(xv__$1,s__$1,this$__$2,meta39759__$1,reifier__$2,runnable__$2,f__$2,x__$2,_fixc__$2,meta39762){return (new cljs.core.logic.t39761(xv__$1,s__$1,this$__$2,meta39759__$1,reifier__$2,runnable__$2,f__$2,x__$2,_fixc__$2,meta39762));
});
}
return (new cljs.core.logic.t39761(xv,s,this$__$1,self__.meta39759,self__.reifier,self__.runnable,self__.f,self__.x,self__._fixc,null));
});
cljs.core.logic.t39758.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39760){var self__ = this;
var _39760__$1 = this;return self__.meta39759;
});
cljs.core.logic.t39758.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39760,meta39759__$1){var self__ = this;
var _39760__$1 = this;return (new cljs.core.logic.t39758(self__.reifier,self__.runnable,self__.f,self__.x,self__._fixc,meta39759__$1));
});
cljs.core.logic.__GT_t39758 = (function __GT_t39758(reifier__$1,runnable__$1,f__$1,x__$1,_fixc__$1,meta39759){return (new cljs.core.logic.t39758(reifier__$1,runnable__$1,f__$1,x__$1,_fixc__$1,meta39759));
});
}
return (new cljs.core.logic.t39758(reifier,runnable,f,x,_fixc,null));
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
}),(function (_,v__$1,___$1,r,a){return cljs.core.with_meta.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic","seqc","cljs.core.logic/seqc",1018702372,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2154),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,13),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2154),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,17)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.logic._reify.call(null,a,v__$1,r)))),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2154),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,12),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2154),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,34)))));
}));
});