// Compiled by ClojureScript 0.0-2030
goog.provide('cljs.core.logic.nominal');
goog.require('cljs.core');
goog.require('cljs.core.logic.protocols');
goog.require('cljs.core.logic');
goog.require('cljs.core.logic.LCons');
goog.require('cljs.core.logic.LVar');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('cljs.core.logic.protocols');
goog.require('cljs.core.logic.protocols');
goog.require('cljs.core.logic');
goog.require('cljs.core.logic');
cljs.core.logic.nominal.INomSwap = {};
cljs.core.logic.nominal.swap_noms = (function swap_noms(t,swap,s){if((function (){var and__4695__auto__ = t;if(and__4695__auto__)
{return t.cljs$core$logic$nominal$INomSwap$swap_noms$arity$3;
} else
{return and__4695__auto__;
}
})())
{return t.cljs$core$logic$nominal$INomSwap$swap_noms$arity$3(t,swap,s);
} else
{var x__5300__auto__ = (((t == null))?null:t);return (function (){var or__4704__auto__ = (cljs.core.logic.nominal.swap_noms[goog.typeOf(x__5300__auto__)]);if(or__4704__auto__)
{return or__4704__auto__;
} else
{var or__4704__auto____$1 = (cljs.core.logic.nominal.swap_noms["_"]);if(or__4704__auto____$1)
{return or__4704__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"INomSwap.swap-noms",t);
}
}
})().call(null,t,swap,s);
}
});
cljs.core.logic.nominal.nom_swap = (function nom_swap(a,swap){if(cljs.core._EQ_.call(null,a,cljs.core.first.call(null,swap)))
{return cljs.core.second.call(null,swap);
} else
{if(cljs.core._EQ_.call(null,a,cljs.core.second.call(null,swap)))
{return cljs.core.first.call(null,swap);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return a;
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$logic$nominal$INomSwap$ = true;
cljs.core.PersistentVector.prototype.cljs$core$logic$nominal$INomSwap$swap_noms$arity$3 = (function (t,swap,s){var t__$1 = this;var vec__270658 = cljs.core.logic.nominal.swap_noms.call(null,cljs.core.seq.call(null,t__$1),swap,s);var ts = cljs.core.nth.call(null,vec__270658,0,null);var s__$1 = cljs.core.nth.call(null,vec__270658,1,null);return cljs.core.PersistentVector.fromArray([cljs.core.vec.call(null,ts),s__$1], true);
});
cljs.core.logic.LCons.prototype.cljs$core$logic$nominal$INomSwap$ = true;
cljs.core.logic.LCons.prototype.cljs$core$logic$nominal$INomSwap$swap_noms$arity$3 = (function (t,swap,s){var t__$1 = this;var vec__270659 = cljs.core.logic.nominal.swap_noms.call(null,cljs.core.logic.nominal.lfirst.call(null,t__$1),swap,s);var tfirst = cljs.core.nth.call(null,vec__270659,0,null);var s__$1 = cljs.core.nth.call(null,vec__270659,1,null);var vec__270660 = cljs.core.logic.nominal.swap_noms.call(null,cljs.core.logic.nominal.lnext.call(null,t__$1),swap,s__$1);var tnext = cljs.core.nth.call(null,vec__270660,0,null);var s__$2 = cljs.core.nth.call(null,vec__270660,1,null);return cljs.core.PersistentVector.fromArray([cljs.core.with_meta.call(null,cljs.core.logic.lcons.call(null,tfirst,tnext),cljs.core.meta.call(null,t__$1)),s__$2], true);
});
cljs.core.logic.LVar.prototype.cljs$core$logic$nominal$INomSwap$ = true;
cljs.core.logic.LVar.prototype.cljs$core$logic$nominal$INomSwap$swap_noms$arity$3 = (function (t,swap,s){var t__$1 = this;var t__$2 = cljs.core.logic.protocols.walk.call(null,s,t__$1);if(cljs.core.truth_(cljs.core.logic.nominal.lvar_QMARK_.call(null,t__$2)))
{var v = cljs.core.with_meta.call(null,cljs.core.logic.lvar.call(null),cljs.core.meta.call(null,t__$2));var rt = cljs.core.logic.nominal.root_val.call(null,s,t__$2);var s__$1 = cljs.core.logic.nominal.suspc.call(null,v,t__$2,swap).call(null,cljs.core.logic.entangle.call(null,(cljs.core.truth_(cljs.core.logic.nominal.subst_val_QMARK_.call(null,rt))?cljs.core.logic.nominal.ext_no_check.call(null,s,v,rt):s),t__$2,v));return cljs.core.PersistentVector.fromArray([v,s__$1], true);
} else
{return cljs.core.logic.nominal.swap_noms.call(null,t__$2,swap,s);
}
});
(cljs.core.logic.nominal.INomSwap["_"] = true);
(cljs.core.logic.nominal.swap_noms["_"] = (function (t,swap,s){if(cljs.core.coll_QMARK_.call(null,t))
{if(cljs.core.seq.call(null,t))
{var vec__270661 = cljs.core.logic.nominal.swap_noms.call(null,cljs.core.first.call(null,t),swap,s);var tfirst = cljs.core.nth.call(null,vec__270661,0,null);var s__$1 = cljs.core.nth.call(null,vec__270661,1,null);var vec__270662 = cljs.core.logic.nominal.swap_noms.call(null,cljs.core.next.call(null,t),swap,s__$1);var tnext = cljs.core.nth.call(null,vec__270662,0,null);var s__$2 = cljs.core.nth.call(null,vec__270662,1,null);return cljs.core.PersistentVector.fromArray([cljs.core.with_meta.call(null,cljs.core.cons.call(null,tfirst,tnext),cljs.core.meta.call(null,t)),s__$2], true);
} else
{return cljs.core.PersistentVector.fromArray([t,s], true);
}
} else
{if(cljs.core.map_QMARK_.call(null,t))
{var vec__270663 = cljs.core.logic.nominal.swap_noms.call(null,cljs.core.seq.call(null,t),swap,s);var tkvs = cljs.core.nth.call(null,vec__270663,0,null);var s__$1 = cljs.core.nth.call(null,vec__270663,1,null);return cljs.core.PersistentVector.fromArray([cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,tkvs),s__$1], true);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.PersistentVector.fromArray([t,s], true);
} else
{return null;
}
}
}
}));
(cljs.core.logic.nominal.INomSwap["null"] = true);
(cljs.core.logic.nominal.swap_noms["null"] = (function (t,swap,s){return cljs.core.PersistentVector.fromArray([t,s], true);
}));

/**
* @constructor
*/
cljs.core.logic.nominal.Nom = (function (lvar){
this.lvar = lvar;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2154168576;
})
cljs.core.logic.nominal.Nom.cljs$lang$type = true;
cljs.core.logic.nominal.Nom.cljs$lang$ctorStr = "cljs.core.logic.nominal/Nom";
cljs.core.logic.nominal.Nom.cljs$lang$ctorPrWriter = (function (this__5241__auto__,writer__5242__auto__,opt__5243__auto__){return cljs.core._write.call(null,writer__5242__auto__,"cljs.core.logic.nominal/Nom");
});
cljs.core.logic.nominal.Nom.prototype.cljs$core$logic$protocols$IReifyTerm$ = true;
cljs.core.logic.nominal.Nom.prototype.cljs$core$logic$protocols$IReifyTerm$reify_term$arity$2 = (function (v,s){var self__ = this;
var v__$1 = this;return cljs.core.logic.nominal.ext.call(null,s,v__$1,cljs.core.symbol.call(null,[cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"reify-noms","reify-noms",4368520701).cljs$core$IFn$_invoke$arity$2(cljs.core.meta.call(null,s),true))?"a":new cljs.core.Keyword(null,"oname","oname",1119788780).cljs$core$IFn$_invoke$arity$1(v__$1))),cljs.core.str("_"),cljs.core.str(cljs.core.count.call(null,s))].join('')));
});
cljs.core.logic.nominal.Nom.prototype.cljs$core$logic$nominal$INomSwap$ = true;
cljs.core.logic.nominal.Nom.prototype.cljs$core$logic$nominal$INomSwap$swap_noms$arity$3 = (function (t,swap,s){var self__ = this;
var t__$1 = this;return cljs.core.PersistentVector.fromArray([cljs.core.logic.nominal.nom_swap.call(null,t__$1,swap),s], true);
});
cljs.core.logic.nominal.Nom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.meta.call(null,self__.lvar);
});
cljs.core.logic.nominal.Nom.prototype.cljs$core$logic$protocols$IBindable$ = true;
cljs.core.logic.nominal.Nom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,o){var self__ = this;
var this$__$1 = this;return ((o instanceof cljs.core.logic.nominal.Nom)) && (cljs.core._EQ_.call(null,self__.lvar,new cljs.core.Keyword(null,"lvar","lvar",1017238189).cljs$core$IFn$_invoke$arity$1(o)));
});
cljs.core.logic.nominal.Nom.prototype.hash$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.hash.call(null,self__.lvar);
});
cljs.core.logic.nominal.Nom.prototype.toString = (function (){var self__ = this;
var _ = this;return [cljs.core.str("<nom:"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.lvar)),cljs.core.str(">")].join('');
});
cljs.core.logic.nominal.Nom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (x,writer,opts){var self__ = this;
var x__$1 = this;return cljs.core._write.call(null,writer,[cljs.core.str("<nom:"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(x__$1)),cljs.core.str(">")].join(''));
});
cljs.core.logic.nominal.Nom.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,new_meta){var self__ = this;
var this$__$1 = this;return cljs.core.logic.nominal.nom.call(null,cljs.core.with_meta.call(null,self__.lvar,new_meta));
});
cljs.core.logic.nominal.Nom.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){var self__ = this;
var this$__$1 = this;return cljs.core._lookup.call(null,this$__$1,k,null);
});
cljs.core.logic.nominal.Nom.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){var self__ = this;
var ___$1 = this;var G__270664 = k;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"oname","oname",1119788780),G__270664))
{return new cljs.core.Keyword(null,"oname","oname",1119788780).cljs$core$IFn$_invoke$arity$1(self__.lvar);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1017277949),G__270664))
{return new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.lvar);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"lvar","lvar",1017238189),G__270664))
{return self__.lvar;
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
cljs.core.logic.nominal.__GT_Nom = (function __GT_Nom(lvar){return (new cljs.core.logic.nominal.Nom(lvar));
});
cljs.core.logic.nominal.nom = (function nom(lvar){return (new cljs.core.logic.nominal.Nom(lvar));
});
cljs.core.logic.nominal.nom_QMARK_ = (function nom_QMARK_(x){return (x instanceof cljs.core.logic.nominal.Nom);
});
cljs.core.logic.nominal._hash = (function _hash(a,x){if(typeof cljs.core.logic.nominal.t270672 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.nominal.t270672 = (function (x,a,_hash,meta270673){
this.x = x;
this.a = a;
this._hash = _hash;
this.meta270673 = meta270673;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.logic.nominal.t270672.cljs$lang$type = true;
cljs.core.logic.nominal.t270672.cljs$lang$ctorStr = "cljs.core.logic.nominal/t270672";
cljs.core.logic.nominal.t270672.cljs$lang$ctorPrWriter = (function (this__5241__auto__,writer__5242__auto__,opt__5243__auto__){return cljs.core._write.call(null,writer__5242__auto__,"cljs.core.logic.nominal/t270672");
});
cljs.core.logic.nominal.t270672.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$ = true;
cljs.core.logic.nominal.t270672.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$_watched_stores$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440),null], true);
});
cljs.core.logic.nominal.t270672.prototype.cljs$core$logic$protocols$IReifiableConstraint$ = true;
cljs.core.logic.nominal.t270672.prototype.cljs$core$logic$protocols$IReifiableConstraint$_reifyc$arity$4 = (function (_,v,r,s){var self__ = this;
var ___$1 = this;var x__$2 = cljs.core.logic.walk_STAR_.call(null,r,cljs.core.logic.walk_STAR_.call(null,s,self__.x));var a__$2 = cljs.core.logic.walk_STAR_.call(null,r,cljs.core.logic.walk_STAR_.call(null,s,self__.a));if(((a__$2 instanceof cljs.core.Symbol)) && (cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,cljs.core.logic.nominal.lvar_QMARK_,cljs.core.flatten.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,x__$2))))))
{return cljs.core.symbol.call(null,[cljs.core.str(a__$2),cljs.core.str("#"),cljs.core.str(x__$2)].join(''));
} else
{return null;
}
});
cljs.core.logic.nominal.t270672.prototype.cljs$core$logic$protocols$IConstraintOp$ = true;
cljs.core.logic.nominal.t270672.prototype.cljs$core$logic$protocols$IConstraintOp$_rator$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic.nominal","hash","cljs.core.logic.nominal/hash",99352748,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,182),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,18)))));
});
cljs.core.logic.nominal.t270672.prototype.cljs$core$logic$protocols$IConstraintOp$_rands$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.PersistentVector.fromArray([self__.a,self__.x], true);
});
cljs.core.logic.nominal.t270672.prototype.cljs$core$logic$protocols$IConstraintStep$ = true;
cljs.core.logic.nominal.t270672.prototype.cljs$core$logic$protocols$IConstraintStep$_step$arity$2 = (function (this$,s){var self__ = this;
var this$__$1 = this;var a__$2 = cljs.core.logic.protocols.walk.call(null,s,self__.a);var x__$2 = cljs.core.logic.protocols.walk.call(null,s,self__.x);if(typeof cljs.core.logic.nominal.t270675 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.nominal.t270675 = (function (s,this$,meta270673,x,a,_hash,meta270676){
this.s = s;
this.this$ = this$;
this.meta270673 = meta270673;
this.x = x;
this.a = a;
this._hash = _hash;
this.meta270676 = meta270676;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.logic.nominal.t270675.cljs$lang$type = true;
cljs.core.logic.nominal.t270675.cljs$lang$ctorStr = "cljs.core.logic.nominal/t270675";
cljs.core.logic.nominal.t270675.cljs$lang$ctorPrWriter = (function (this__5241__auto__,writer__5242__auto__,opt__5243__auto__){return cljs.core._write.call(null,writer__5242__auto__,"cljs.core.logic.nominal/t270675");
});
cljs.core.logic.nominal.t270675.prototype.cljs$core$logic$protocols$IRunnable$ = true;
cljs.core.logic.nominal.t270675.prototype.cljs$core$logic$protocols$IRunnable$_runnable_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(cljs.core.logic.nominal.lvar_QMARK_.call(null,self__.a)))
{var or__4704__auto__ = (function (){var and__4695__auto__ = cljs.core.logic.nominal.lvar_QMARK_.call(null,self__.x);if(cljs.core.truth_(and__4695__auto__))
{return cljs.core._EQ_.call(null,self__.x,self__.a);
} else
{return and__4695__auto__;
}
})();if(cljs.core.truth_(or__4704__auto__))
{return or__4704__auto__;
} else
{var and__4695__auto__ = cljs.core.logic.tree_term_QMARK_.call(null,self__.x);if(cljs.core.truth_(and__4695__auto__))
{return cljs.core.not.call(null,cljs.core.logic.nominal.tie_QMARK_.call(null,self__.x));
} else
{return and__4695__auto__;
}
}
} else
{return (cljs.core.not.call(null,cljs.core.logic.nominal.nom_QMARK_.call(null,self__.a))) || (cljs.core.not.call(null,cljs.core.logic.nominal.lvar_QMARK_.call(null,self__.x)));
}
});
cljs.core.logic.nominal.t270675.prototype.call = (function (self__,s__$2){var self__ = this;
var self____$1 = this;var _ = self____$1;return cljs.core.logic.composeg.call(null,cljs.core.logic.nominal.remcg.call(null,self__.this$),(function (s__$3){if(cljs.core.truth_((function (){var and__4695__auto__ = cljs.core.logic.nominal.lvar_QMARK_.call(null,self__.a);if(cljs.core.truth_(and__4695__auto__))
{var and__4695__auto____$1 = cljs.core.logic.nominal.lvar_QMARK_.call(null,self__.x);if(cljs.core.truth_(and__4695__auto____$1))
{return cljs.core._EQ_.call(null,self__.x,self__.a);
} else
{return and__4695__auto____$1;
}
} else
{return and__4695__auto__;
}
})()))
{return null;
} else
{if(cljs.core.truth_((function (){var and__4695__auto__ = cljs.core.logic.nominal.nom_QMARK_.call(null,self__.a);if(cljs.core.truth_(and__4695__auto__))
{var and__4695__auto____$1 = cljs.core.logic.nominal.nom_QMARK_.call(null,self__.x);if(cljs.core.truth_(and__4695__auto____$1))
{return cljs.core._EQ_.call(null,self__.x,self__.a);
} else
{return and__4695__auto____$1;
}
} else
{return and__4695__auto__;
}
})()))
{return null;
} else
{if((cljs.core.not.call(null,cljs.core.logic.nominal.lvar_QMARK_.call(null,self__.a))) && (cljs.core.not.call(null,cljs.core.logic.nominal.nom_QMARK_.call(null,self__.a))))
{return null;
} else
{if(cljs.core.truth_((function (){var and__4695__auto__ = cljs.core.logic.nominal.nom_QMARK_.call(null,self__.a);if(cljs.core.truth_(and__4695__auto__))
{var and__4695__auto____$1 = cljs.core.logic.nominal.tie_QMARK_.call(null,self__.x);if(cljs.core.truth_(and__4695__auto____$1))
{return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"binding-nom","binding-nom",727512822).cljs$core$IFn$_invoke$arity$1(self__.x),self__.a);
} else
{return and__4695__auto____$1;
}
} else
{return and__4695__auto__;
}
})()))
{return s__$3;
} else
{if(cljs.core.truth_((function (){var and__4695__auto__ = cljs.core.logic.tree_term_QMARK_.call(null,self__.x);if(cljs.core.truth_(and__4695__auto__))
{var or__4704__auto__ = cljs.core.not.call(null,cljs.core.logic.nominal.tie_QMARK_.call(null,self__.x));if(or__4704__auto__)
{return or__4704__auto__;
} else
{return cljs.core.logic.nominal.nom_QMARK_.call(null,self__.a);
}
} else
{return and__4695__auto__;
}
})()))
{return cljs.core.logic.nominal.constrain_tree.call(null,self__.x,(function (t,s__$4){return cljs.core.logic.nominal.hash.call(null,self__.a,t).call(null,s__$4);
})).call(null,s__$3);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return s__$3;
} else
{return null;
}
}
}
}
}
}
})).call(null,s__$2);
});
cljs.core.logic.nominal.t270675.prototype.apply = (function (self__,args270678){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(args270678.slice()));
});
cljs.core.logic.nominal.t270675.prototype.cljs$core$IFn$_invoke$arity$1 = (function (s__$2){var self__ = this;
var _ = this;return cljs.core.logic.composeg.call(null,cljs.core.logic.nominal.remcg.call(null,self__.this$),(function (s__$3){if(cljs.core.truth_((function (){var and__4695__auto__ = cljs.core.logic.nominal.lvar_QMARK_.call(null,self__.a);if(cljs.core.truth_(and__4695__auto__))
{var and__4695__auto____$1 = cljs.core.logic.nominal.lvar_QMARK_.call(null,self__.x);if(cljs.core.truth_(and__4695__auto____$1))
{return cljs.core._EQ_.call(null,self__.x,self__.a);
} else
{return and__4695__auto____$1;
}
} else
{return and__4695__auto__;
}
})()))
{return null;
} else
{if(cljs.core.truth_((function (){var and__4695__auto__ = cljs.core.logic.nominal.nom_QMARK_.call(null,self__.a);if(cljs.core.truth_(and__4695__auto__))
{var and__4695__auto____$1 = cljs.core.logic.nominal.nom_QMARK_.call(null,self__.x);if(cljs.core.truth_(and__4695__auto____$1))
{return cljs.core._EQ_.call(null,self__.x,self__.a);
} else
{return and__4695__auto____$1;
}
} else
{return and__4695__auto__;
}
})()))
{return null;
} else
{if((cljs.core.not.call(null,cljs.core.logic.nominal.lvar_QMARK_.call(null,self__.a))) && (cljs.core.not.call(null,cljs.core.logic.nominal.nom_QMARK_.call(null,self__.a))))
{return null;
} else
{if(cljs.core.truth_((function (){var and__4695__auto__ = cljs.core.logic.nominal.nom_QMARK_.call(null,self__.a);if(cljs.core.truth_(and__4695__auto__))
{var and__4695__auto____$1 = cljs.core.logic.nominal.tie_QMARK_.call(null,self__.x);if(cljs.core.truth_(and__4695__auto____$1))
{return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"binding-nom","binding-nom",727512822).cljs$core$IFn$_invoke$arity$1(self__.x),self__.a);
} else
{return and__4695__auto____$1;
}
} else
{return and__4695__auto__;
}
})()))
{return s__$3;
} else
{if(cljs.core.truth_((function (){var and__4695__auto__ = cljs.core.logic.tree_term_QMARK_.call(null,self__.x);if(cljs.core.truth_(and__4695__auto__))
{var or__4704__auto__ = cljs.core.not.call(null,cljs.core.logic.nominal.tie_QMARK_.call(null,self__.x));if(or__4704__auto__)
{return or__4704__auto__;
} else
{return cljs.core.logic.nominal.nom_QMARK_.call(null,self__.a);
}
} else
{return and__4695__auto__;
}
})()))
{return cljs.core.logic.nominal.constrain_tree.call(null,self__.x,(function (t,s__$4){return cljs.core.logic.nominal.hash.call(null,self__.a,t).call(null,s__$4);
})).call(null,s__$3);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return s__$3;
} else
{return null;
}
}
}
}
}
}
})).call(null,s__$2);
});
cljs.core.logic.nominal.t270675.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_270677){var self__ = this;
var _270677__$1 = this;return self__.meta270676;
});
cljs.core.logic.nominal.t270675.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_270677,meta270676__$1){var self__ = this;
var _270677__$1 = this;return (new cljs.core.logic.nominal.t270675(self__.s,self__.this$,self__.meta270673,self__.x,self__.a,self__._hash,meta270676__$1));
});
cljs.core.logic.nominal.__GT_t270675 = (function __GT_t270675(s__$1,this$__$2,meta270673__$1,x__$3,a__$3,_hash__$2,meta270676){return (new cljs.core.logic.nominal.t270675(s__$1,this$__$2,meta270673__$1,x__$3,a__$3,_hash__$2,meta270676));
});
}
return (new cljs.core.logic.nominal.t270675(s,this$__$1,self__.meta270673,x__$2,a__$2,self__._hash,null));
});
cljs.core.logic.nominal.t270672.prototype.toString = (function (){var self__ = this;
var _ = this;return [cljs.core.str(self__.a),cljs.core.str("#"),cljs.core.str(self__.x)].join('');
});
cljs.core.logic.nominal.t270672.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_270674){var self__ = this;
var _270674__$1 = this;return self__.meta270673;
});
cljs.core.logic.nominal.t270672.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_270674,meta270673__$1){var self__ = this;
var _270674__$1 = this;return (new cljs.core.logic.nominal.t270672(self__.x,self__.a,self__._hash,meta270673__$1));
});
cljs.core.logic.nominal.__GT_t270672 = (function __GT_t270672(x__$1,a__$1,_hash__$1,meta270673){return (new cljs.core.logic.nominal.t270672(x__$1,a__$1,_hash__$1,meta270673));
});
}
return (new cljs.core.logic.nominal.t270672(x,a,_hash,null));
});
cljs.core.logic.nominal.hash = (function hash(a,t){return cljs.core.logic.cgoal.call(null,cljs.core.logic.nominal._hash.call(null,a,t));
});
cljs.core.logic.nominal._do_suspc = (function _do_suspc(t1,t2,swap,a){var x = (function (){var vs = cljs.core.PersistentHashSet.fromArray([t2,null], true);var seen = cljs.core.PersistentHashSet.EMPTY;while(true){
var vs__$1 = clojure.set.difference.call(null,vs,seen);if(cljs.core.empty_QMARK_.call(null,vs__$1))
{return true;
} else
{if(cljs.core.truth_(cljs.core.some.call(null,((function (vs,seen,vs__$1){
return (function (p1__270679_SHARP_){return cljs.core.logic.nominal.occurs_check.call(null,a,p1__270679_SHARP_,t1);
});})(vs,seen,vs__$1))
,vs__$1)))
{return false;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__270682 = cljs.core.reduce.call(null,((function (vs,seen,vs__$1){
return (function (s0,s1){return clojure.set.union.call(null,s0,new cljs.core.Keyword(null,"eset","eset",1017026895).cljs$core$IFn$_invoke$arity$1(cljs.core.logic.nominal.root_val.call(null,a,s1)));
});})(vs,seen,vs__$1))
,cljs.core.PersistentHashSet.EMPTY,vs__$1);
var G__270683 = clojure.set.union.call(null,vs__$1,seen);
vs = G__270682;
seen = G__270683;
continue;
}
} else
{return null;
}
}
}
break;
}
})();if(cljs.core.truth_(x))
{var vec__270681 = cljs.core.logic.nominal.swap_noms.call(null,t1,swap,a);var t1__$1 = cljs.core.nth.call(null,vec__270681,0,null);var a__$1 = cljs.core.nth.call(null,vec__270681,1,null);return cljs.core.logic._EQ__EQ_.call(null,t1__$1,t2).call(null,a__$1);
} else
{return null;
}
});
cljs.core.logic.nominal._suspc = (function _suspc(v1,v2,swap){if(typeof cljs.core.logic.nominal.t270691 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.nominal.t270691 = (function (swap,v2,v1,_suspc,meta270692){
this.swap = swap;
this.v2 = v2;
this.v1 = v1;
this._suspc = _suspc;
this.meta270692 = meta270692;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.logic.nominal.t270691.cljs$lang$type = true;
cljs.core.logic.nominal.t270691.cljs$lang$ctorStr = "cljs.core.logic.nominal/t270691";
cljs.core.logic.nominal.t270691.cljs$lang$ctorPrWriter = (function (this__5241__auto__,writer__5242__auto__,opt__5243__auto__){return cljs.core._write.call(null,writer__5242__auto__,"cljs.core.logic.nominal/t270691");
});
cljs.core.logic.nominal.t270691.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$ = true;
cljs.core.logic.nominal.t270691.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$_watched_stores$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440),null], true);
});
cljs.core.logic.nominal.t270691.prototype.cljs$core$logic$protocols$IReifiableConstraint$ = true;
cljs.core.logic.nominal.t270691.prototype.cljs$core$logic$protocols$IReifiableConstraint$_reifyc$arity$4 = (function (c,v,r,a){var self__ = this;
var c__$1 = this;var t1 = cljs.core.logic.walk_STAR_.call(null,r,cljs.core.logic.walk_STAR_.call(null,a,self__.v1));var t2 = cljs.core.logic.walk_STAR_.call(null,r,cljs.core.logic.walk_STAR_.call(null,a,self__.v2));var swap__$2 = cljs.core.logic.walk_STAR_.call(null,r,self__.swap);if((cljs.core.not.call(null,cljs.core.logic.nominal.lvar_QMARK_.call(null,t1))) && (cljs.core.not.call(null,cljs.core.logic.nominal.lvar_QMARK_.call(null,t2))) && ((cljs.core.first.call(null,swap__$2) instanceof cljs.core.Symbol)) && ((cljs.core.second.call(null,swap__$2) instanceof cljs.core.Symbol)))
{return cljs.core.with_meta.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"swap","swap",-1636988084,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,swap__$2),cljs.core._conj.call(null,cljs.core.List.EMPTY,t1),cljs.core._conj.call(null,cljs.core.List.EMPTY,t2))),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,255),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,12)))));
} else
{return null;
}
});
cljs.core.logic.nominal.t270691.prototype.cljs$core$logic$protocols$IConstraintOp$ = true;
cljs.core.logic.nominal.t270691.prototype.cljs$core$logic$protocols$IConstraintOp$_rator$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic.nominal","suspc","cljs.core.logic.nominal/suspc",54642610,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,243),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,18)))));
});
cljs.core.logic.nominal.t270691.prototype.cljs$core$logic$protocols$IConstraintOp$_rands$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.PersistentVector.fromArray([self__.v1,self__.v2], true);
});
cljs.core.logic.nominal.t270691.prototype.cljs$core$logic$protocols$IConstraintStep$ = true;
cljs.core.logic.nominal.t270691.prototype.cljs$core$logic$protocols$IConstraintStep$_step$arity$2 = (function (this$,a){var self__ = this;
var this$__$1 = this;var t1 = cljs.core.logic.protocols.walk.call(null,a,self__.v1);var t2 = cljs.core.logic.protocols.walk.call(null,a,self__.v2);if(typeof cljs.core.logic.nominal.t270694 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.nominal.t270694 = (function (t2,t1,a,this$,meta270692,swap,v2,v1,_suspc,meta270695){
this.t2 = t2;
this.t1 = t1;
this.a = a;
this.this$ = this$;
this.meta270692 = meta270692;
this.swap = swap;
this.v2 = v2;
this.v1 = v1;
this._suspc = _suspc;
this.meta270695 = meta270695;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.logic.nominal.t270694.cljs$lang$type = true;
cljs.core.logic.nominal.t270694.cljs$lang$ctorStr = "cljs.core.logic.nominal/t270694";
cljs.core.logic.nominal.t270694.cljs$lang$ctorPrWriter = (function (this__5241__auto__,writer__5242__auto__,opt__5243__auto__){return cljs.core._write.call(null,writer__5242__auto__,"cljs.core.logic.nominal/t270694");
});
cljs.core.logic.nominal.t270694.prototype.cljs$core$logic$protocols$IRunnable$ = true;
cljs.core.logic.nominal.t270694.prototype.cljs$core$logic$protocols$IRunnable$_runnable_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (cljs.core.not.call(null,cljs.core.logic.nominal.lvar_QMARK_.call(null,self__.t1))) || (cljs.core.not.call(null,cljs.core.logic.nominal.lvar_QMARK_.call(null,self__.t2))) || (cljs.core._EQ_.call(null,self__.t1,self__.t2));
});
cljs.core.logic.nominal.t270694.prototype.call = (function (self__,a__$2){var self__ = this;
var self____$1 = this;var _ = self____$1;return cljs.core.logic.composeg.call(null,cljs.core.logic.nominal.remcg.call(null,self__.this$),(function (a__$3){if(cljs.core.not.call(null,cljs.core.logic.nominal.lvar_QMARK_.call(null,self__.t1)))
{return cljs.core.logic.nominal._do_suspc.call(null,self__.t1,self__.t2,self__.swap,a__$3);
} else
{if(cljs.core.not.call(null,cljs.core.logic.nominal.lvar_QMARK_.call(null,self__.t2)))
{return cljs.core.logic.nominal._do_suspc.call(null,self__.t2,self__.t1,self__.swap,a__$3);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var a_STAR_ = self__.swap;var a__$4 = a__$3;while(true){
if(cljs.core.empty_QMARK_.call(null,a_STAR_))
{return a__$4;
} else
{{
var G__270698 = cljs.core.rest.call(null,a_STAR_);
var G__270699 = cljs.core.logic.nominal.hash.call(null,cljs.core.first.call(null,a_STAR_),self__.t2).call(null,a__$4);
a_STAR_ = G__270698;
a__$4 = G__270699;
continue;
}
}
break;
}
} else
{return null;
}
}
}
})).call(null,a__$2);
});
cljs.core.logic.nominal.t270694.prototype.apply = (function (self__,args270697){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(args270697.slice()));
});
cljs.core.logic.nominal.t270694.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a__$2){var self__ = this;
var _ = this;return cljs.core.logic.composeg.call(null,cljs.core.logic.nominal.remcg.call(null,self__.this$),(function (a__$3){if(cljs.core.not.call(null,cljs.core.logic.nominal.lvar_QMARK_.call(null,self__.t1)))
{return cljs.core.logic.nominal._do_suspc.call(null,self__.t1,self__.t2,self__.swap,a__$3);
} else
{if(cljs.core.not.call(null,cljs.core.logic.nominal.lvar_QMARK_.call(null,self__.t2)))
{return cljs.core.logic.nominal._do_suspc.call(null,self__.t2,self__.t1,self__.swap,a__$3);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var a_STAR_ = self__.swap;var a__$4 = a__$3;while(true){
if(cljs.core.empty_QMARK_.call(null,a_STAR_))
{return a__$4;
} else
{{
var G__270700 = cljs.core.rest.call(null,a_STAR_);
var G__270701 = cljs.core.logic.nominal.hash.call(null,cljs.core.first.call(null,a_STAR_),self__.t2).call(null,a__$4);
a_STAR_ = G__270700;
a__$4 = G__270701;
continue;
}
}
break;
}
} else
{return null;
}
}
}
})).call(null,a__$2);
});
cljs.core.logic.nominal.t270694.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_270696){var self__ = this;
var _270696__$1 = this;return self__.meta270695;
});
cljs.core.logic.nominal.t270694.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_270696,meta270695__$1){var self__ = this;
var _270696__$1 = this;return (new cljs.core.logic.nominal.t270694(self__.t2,self__.t1,self__.a,self__.this$,self__.meta270692,self__.swap,self__.v2,self__.v1,self__._suspc,meta270695__$1));
});
cljs.core.logic.nominal.__GT_t270694 = (function __GT_t270694(t2__$1,t1__$1,a__$1,this$__$2,meta270692__$1,swap__$2,v2__$2,v1__$2,_suspc__$2,meta270695){return (new cljs.core.logic.nominal.t270694(t2__$1,t1__$1,a__$1,this$__$2,meta270692__$1,swap__$2,v2__$2,v1__$2,_suspc__$2,meta270695));
});
}
return (new cljs.core.logic.nominal.t270694(t2,t1,a,this$__$1,self__.meta270692,self__.swap,self__.v2,self__.v1,self__._suspc,null));
});
cljs.core.logic.nominal.t270691.prototype.toString = (function (){var self__ = this;
var _ = this;return [cljs.core.str("suspc"),cljs.core.str(self__.v1),cljs.core.str(self__.v2),cljs.core.str(self__.swap)].join('');
});
cljs.core.logic.nominal.t270691.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_270693){var self__ = this;
var _270693__$1 = this;return self__.meta270692;
});
cljs.core.logic.nominal.t270691.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_270693,meta270692__$1){var self__ = this;
var _270693__$1 = this;return (new cljs.core.logic.nominal.t270691(self__.swap,self__.v2,self__.v1,self__._suspc,meta270692__$1));
});
cljs.core.logic.nominal.__GT_t270691 = (function __GT_t270691(swap__$1,v2__$1,v1__$1,_suspc__$1,meta270692){return (new cljs.core.logic.nominal.t270691(swap__$1,v2__$1,v1__$1,_suspc__$1,meta270692));
});
}
return (new cljs.core.logic.nominal.t270691(swap,v2,v1,_suspc,null));
});
cljs.core.logic.nominal.suspc = (function suspc(v1,v2,swap){return cljs.core.logic.cgoal.call(null,cljs.core.logic.nominal._suspc.call(null,v1,v2,swap));
});

/**
* @constructor
* @param {*} binding_nom
* @param {*} body
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
cljs.core.logic.nominal.Tie = (function (binding_nom,body,__meta,__extmap){
this.binding_nom = binding_nom;
this.body = body;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
if(arguments.length>2){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
cljs.core.logic.nominal.Tie.prototype.cljs$core$logic$protocols$IReifyTerm$ = true;
cljs.core.logic.nominal.Tie.prototype.cljs$core$logic$protocols$IReifyTerm$reify_term$arity$2 = (function (v,s){var self__ = this;
var v__$1 = this;var s__$1 = cljs.core.logic.nominal._reify_STAR_.call(null,s,self__.binding_nom);var s__$2 = cljs.core.logic.nominal._reify_STAR_.call(null,s__$1,self__.body);return s__$2;
});
cljs.core.logic.nominal.Tie.prototype.cljs$core$logic$nominal$INomSwap$ = true;
cljs.core.logic.nominal.Tie.prototype.cljs$core$logic$nominal$INomSwap$swap_noms$arity$3 = (function (t,swap,s){var self__ = this;
var t__$1 = this;var vec__270705 = cljs.core.logic.nominal.swap_noms.call(null,new cljs.core.Keyword(null,"body","body",1016933652).cljs$core$IFn$_invoke$arity$1(t__$1),swap,s);var tbody = cljs.core.nth.call(null,vec__270705,0,null);var s__$1 = cljs.core.nth.call(null,vec__270705,1,null);return cljs.core.PersistentVector.fromArray([cljs.core.with_meta.call(null,cljs.core.logic.nominal.tie.call(null,cljs.core.logic.nominal.nom_swap.call(null,new cljs.core.Keyword(null,"binding-nom","binding-nom",727512822).cljs$core$IFn$_invoke$arity$1(t__$1),swap),tbody),cljs.core.meta.call(null,t__$1)),s__$1], true);
});
cljs.core.logic.nominal.Tie.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5254__auto__){var self__ = this;
var this__5254__auto____$1 = this;var h__5108__auto__ = self__.__hash;if(!((h__5108__auto__ == null)))
{return h__5108__auto__;
} else
{var h__5108__auto____$1 = cljs.core.hash_imap.call(null,this__5254__auto____$1);self__.__hash = h__5108__auto____$1;
return h__5108__auto____$1;
}
});
cljs.core.logic.nominal.Tie.prototype.cljs$core$logic$protocols$IUnifyTerms$ = true;
cljs.core.logic.nominal.Tie.prototype.cljs$core$logic$protocols$IUnifyTerms$unify_terms$arity$3 = (function (v,u,s){var self__ = this;
var v__$1 = this;if(cljs.core.truth_(cljs.core.logic.nominal.tie_QMARK_.call(null,u)))
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"binding-nom","binding-nom",727512822).cljs$core$IFn$_invoke$arity$1(v__$1),new cljs.core.Keyword(null,"binding-nom","binding-nom",727512822).cljs$core$IFn$_invoke$arity$1(u)))
{return cljs.core.logic.nominal.unify.call(null,s,new cljs.core.Keyword(null,"body","body",1016933652).cljs$core$IFn$_invoke$arity$1(v__$1),new cljs.core.Keyword(null,"body","body",1016933652).cljs$core$IFn$_invoke$arity$1(u));
} else
{var vec__270706 = cljs.core.logic.nominal.swap_noms.call(null,new cljs.core.Keyword(null,"body","body",1016933652).cljs$core$IFn$_invoke$arity$1(v__$1),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"binding-nom","binding-nom",727512822).cljs$core$IFn$_invoke$arity$1(v__$1),new cljs.core.Keyword(null,"binding-nom","binding-nom",727512822).cljs$core$IFn$_invoke$arity$1(u)], true),s);var t = cljs.core.nth.call(null,vec__270706,0,null);var s__$1 = cljs.core.nth.call(null,vec__270706,1,null);return cljs.core.logic.composeg.call(null,cljs.core.logic.nominal.hash.call(null,new cljs.core.Keyword(null,"binding-nom","binding-nom",727512822).cljs$core$IFn$_invoke$arity$1(u),new cljs.core.Keyword(null,"body","body",1016933652).cljs$core$IFn$_invoke$arity$1(v__$1)),cljs.core.logic._EQ__EQ_.call(null,t,new cljs.core.Keyword(null,"body","body",1016933652).cljs$core$IFn$_invoke$arity$1(u))).call(null,s__$1);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return null;
} else
{return null;
}
}
});
cljs.core.logic.nominal.Tie.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5259__auto__,k__5260__auto__){var self__ = this;
var this__5259__auto____$1 = this;return cljs.core._lookup.call(null,this__5259__auto____$1,k__5260__auto__,null);
});
cljs.core.logic.nominal.Tie.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5261__auto__,k270703,else__5262__auto__){var self__ = this;
var this__5261__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k270703,new cljs.core.Keyword(null,"binding-nom","binding-nom",727512822)))
{return self__.binding_nom;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k270703,new cljs.core.Keyword(null,"body","body",1016933652)))
{return self__.body;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k270703,else__5262__auto__);
} else
{return null;
}
}
}
});
cljs.core.logic.nominal.Tie.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5266__auto__,k__5267__auto__,G__270702){var self__ = this;
var this__5266__auto____$1 = this;var pred__270707 = cljs.core.keyword_identical_QMARK_;var expr__270708 = k__5267__auto__;if(pred__270707.call(null,new cljs.core.Keyword(null,"binding-nom","binding-nom",727512822),expr__270708))
{return (new cljs.core.logic.nominal.Tie(G__270702,self__.body,self__.__meta,self__.__extmap,null));
} else
{if(pred__270707.call(null,new cljs.core.Keyword(null,"body","body",1016933652),expr__270708))
{return (new cljs.core.logic.nominal.Tie(self__.binding_nom,G__270702,self__.__meta,self__.__extmap,null));
} else
{return (new cljs.core.logic.nominal.Tie(self__.binding_nom,self__.body,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5267__auto__,G__270702),null));
}
}
});
cljs.core.logic.nominal.Tie.prototype.cljs$core$logic$protocols$IForceAnswerTerm$ = true;
cljs.core.logic.nominal.Tie.prototype.cljs$core$logic$protocols$IForceAnswerTerm$_force_ans$arity$2 = (function (v,x){var self__ = this;
var v__$1 = this;return cljs.core.logic.force_ans.call(null,new cljs.core.Keyword(null,"body","body",1016933652).cljs$core$IFn$_invoke$arity$1(v__$1));
});
cljs.core.logic.nominal.Tie.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5273__auto__,writer__5274__auto__,opts__5275__auto__){var self__ = this;
var this__5273__auto____$1 = this;var pr_pair__5276__auto__ = (function (keyval__5277__auto__){return cljs.core.pr_sequential_writer.call(null,writer__5274__auto__,cljs.core.pr_writer,""," ","",opts__5275__auto__,keyval__5277__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__5274__auto__,pr_pair__5276__auto__,"#cljs.core.logic.nominal.Tie{",", ","}",opts__5275__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray.call(null,[new cljs.core.Keyword(null,"binding-nom","binding-nom",727512822),self__.binding_nom],true),cljs.core.PersistentVector.fromArray.call(null,[new cljs.core.Keyword(null,"body","body",1016933652),self__.body],true)], true),self__.__extmap));
});
cljs.core.logic.nominal.Tie.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5264__auto__,entry__5265__auto__){var self__ = this;
var this__5264__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__5265__auto__))
{return cljs.core._assoc.call(null,this__5264__auto____$1,cljs.core._nth.call(null,entry__5265__auto__,0),cljs.core._nth.call(null,entry__5265__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__5264__auto____$1,entry__5265__auto__);
}
});
cljs.core.logic.nominal.Tie.prototype.cljs$core$logic$protocols$IWalkTerm$ = true;
cljs.core.logic.nominal.Tie.prototype.cljs$core$logic$protocols$IWalkTerm$walk_term$arity$2 = (function (v,f){var self__ = this;
var v__$1 = this;return cljs.core.with_meta.call(null,cljs.core.logic.nominal.tie.call(null,cljs.core.logic.nominal.walk_term.call(null,new cljs.core.Keyword(null,"binding-nom","binding-nom",727512822).cljs$core$IFn$_invoke$arity$1(v__$1),f),cljs.core.logic.nominal.walk_term.call(null,new cljs.core.Keyword(null,"body","body",1016933652).cljs$core$IFn$_invoke$arity$1(v__$1),f)),cljs.core.meta.call(null,v__$1));
});
cljs.core.logic.nominal.Tie.prototype.cljs$core$logic$protocols$IConstrainTree$ = true;
cljs.core.logic.nominal.Tie.prototype.cljs$core$logic$protocols$IConstrainTree$_constrain_tree$arity$3 = (function (t,fc,s){var self__ = this;
var t__$1 = this;return fc.call(null,new cljs.core.Keyword(null,"body","body",1016933652).cljs$core$IFn$_invoke$arity$1(t__$1),s);
});
cljs.core.logic.nominal.Tie.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5271__auto__){var self__ = this;
var this__5271__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray.call(null,[new cljs.core.Keyword(null,"binding-nom","binding-nom",727512822),self__.binding_nom],true),cljs.core.PersistentVector.fromArray.call(null,[new cljs.core.Keyword(null,"body","body",1016933652),self__.body],true)], true),self__.__extmap));
});
cljs.core.logic.nominal.Tie.prototype.cljs$core$logic$protocols$ITreeTerm$ = true;
cljs.core.logic.nominal.Tie.prototype.cljs$core$logic$protocols$IOccursCheckTerm$ = true;
cljs.core.logic.nominal.Tie.prototype.cljs$core$logic$protocols$IOccursCheckTerm$occurs_check_term$arity$3 = (function (v,x,s){var self__ = this;
var v__$1 = this;return cljs.core.logic.nominal.occurs_check.call(null,s,x,new cljs.core.Keyword(null,"body","body",1016933652).cljs$core$IFn$_invoke$arity$1(v__$1));
});
cljs.core.logic.nominal.Tie.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (x,writer,opts){var self__ = this;
var x__$1 = this;cljs.core._write.call(null,writer,"[");
cljs.core.pr_writer.call(null,new cljs.core.Keyword(null,"binding-nom","binding-nom",727512822).cljs$core$IFn$_invoke$arity$1(x__$1),writer,opts);
cljs.core._write.call(null,writer,"] ");
return cljs.core.pr_writer.call(null,new cljs.core.Keyword(null,"body","body",1016933652).cljs$core$IFn$_invoke$arity$1(x__$1),writer,opts);
});
cljs.core.logic.nominal.Tie.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5263__auto__){var self__ = this;
var this__5263__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
cljs.core.logic.nominal.Tie.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5255__auto__,other__5256__auto__){var self__ = this;
var this__5255__auto____$1 = this;if(cljs.core.truth_((function (){var and__4695__auto__ = other__5256__auto__;if(cljs.core.truth_(and__4695__auto__))
{var and__4695__auto____$1 = (this__5255__auto____$1.constructor === other__5256__auto__.constructor);if(and__4695__auto____$1)
{return cljs.core.equiv_map.call(null,this__5255__auto____$1,other__5256__auto__);
} else
{return and__4695__auto____$1;
}
} else
{return and__4695__auto__;
}
})()))
{return true;
} else
{return false;
}
});
cljs.core.logic.nominal.Tie.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5258__auto__,G__270702){var self__ = this;
var this__5258__auto____$1 = this;return (new cljs.core.logic.nominal.Tie(self__.binding_nom,self__.body,G__270702,self__.__extmap,self__.__hash));
});
cljs.core.logic.nominal.Tie.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5257__auto__){var self__ = this;
var this__5257__auto____$1 = this;return self__.__meta;
});
cljs.core.logic.nominal.Tie.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5268__auto__,k__5269__auto__){var self__ = this;
var this__5268__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword(null,"binding-nom","binding-nom",727512822),null,new cljs.core.Keyword(null,"body","body",1016933652),null], true),k__5269__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5268__auto____$1),self__.__meta),k__5269__auto__);
} else
{return (new cljs.core.logic.nominal.Tie(self__.binding_nom,self__.body,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5269__auto__)),null));
}
});
cljs.core.logic.nominal.Tie.cljs$lang$type = true;
cljs.core.logic.nominal.Tie.cljs$lang$ctorPrSeq = (function (this__5293__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.core.logic.nominal/Tie");
});
cljs.core.logic.nominal.Tie.cljs$lang$ctorPrWriter = (function (this__5293__auto__,writer__5294__auto__){return cljs.core._write.call(null,writer__5294__auto__,"cljs.core.logic.nominal/Tie");
});
cljs.core.logic.nominal.__GT_Tie = (function __GT_Tie(binding_nom,body){return (new cljs.core.logic.nominal.Tie(binding_nom,body));
});
cljs.core.logic.nominal.map__GT_Tie = (function map__GT_Tie(G__270704){return (new cljs.core.logic.nominal.Tie(new cljs.core.Keyword(null,"binding-nom","binding-nom",727512822).cljs$core$IFn$_invoke$arity$1(G__270704),new cljs.core.Keyword(null,"body","body",1016933652).cljs$core$IFn$_invoke$arity$1(G__270704),null,cljs.core.dissoc.call(null,G__270704,new cljs.core.Keyword(null,"binding-nom","binding-nom",727512822),new cljs.core.Keyword(null,"body","body",1016933652))));
});
cljs.core.logic.nominal.tie = (function tie(binding_nom,body){return (new cljs.core.logic.nominal.Tie(binding_nom,body));
});
cljs.core.logic.nominal.tie_QMARK_ = (function tie_QMARK_(x){return (x instanceof cljs.core.logic.nominal.Tie);
});
