// Compiled by ClojureScript 0.0-2080
goog.provide('cljs.core.logic');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('clojure.set');
cljs.core.logic._STAR_logic_dbs_STAR_ = cljs.core.PersistentVector.EMPTY;
cljs.core.logic._STAR_occurs_check_STAR_ = true;
cljs.core.logic.IUnifyTerms = (function (){var obj467484 = {};return obj467484;
})();
cljs.core.logic._unify_terms = (function _unify_terms(u,v,s){if((function (){var and__6833__auto__ = u;if(and__6833__auto__)
{return u.cljs$core$logic$IUnifyTerms$_unify_terms$arity$3;
} else
{return and__6833__auto__;
}
})())
{return u.cljs$core$logic$IUnifyTerms$_unify_terms$arity$3(u,v,s);
} else
{var x__7448__auto__ = (((u == null))?null:u);return (function (){var or__6845__auto__ = (cljs.core.logic._unify_terms[goog.typeOf(x__7448__auto__)]);if(or__6845__auto__)
{return or__6845__auto__;
} else
{var or__6845__auto____$1 = (cljs.core.logic._unify_terms["_"]);if(or__6845__auto____$1)
{return or__6845__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IUnifyTerms.-unify-terms",u);
}
}
})().call(null,u,v,s);
}
});
cljs.core.logic.IUnifyWithNil = (function (){var obj467486 = {};return obj467486;
})();
cljs.core.logic._unify_with_nil = (function _unify_with_nil(v,u,s){if((function (){var and__6833__auto__ = v;if(and__6833__auto__)
{return v.cljs$core$logic$IUnifyWithNil$_unify_with_nil$arity$3;
} else
{return and__6833__auto__;
}
})())
{return v.cljs$core$logic$IUnifyWithNil$_unify_with_nil$arity$3(v,u,s);
} else
{var x__7448__auto__ = (((v == null))?null:v);return (function (){var or__6845__auto__ = (cljs.core.logic._unify_with_nil[goog.typeOf(x__7448__auto__)]);if(or__6845__auto__)
{return or__6845__auto__;
} else
{var or__6845__auto____$1 = (cljs.core.logic._unify_with_nil["_"]);if(or__6845__auto____$1)
{return or__6845__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IUnifyWithNil.-unify-with-nil",v);
}
}
})().call(null,v,u,s);
}
});
cljs.core.logic.IUnifyWithObject = (function (){var obj467488 = {};return obj467488;
})();
cljs.core.logic._unify_with_object = (function _unify_with_object(v,u,s){if((function (){var and__6833__auto__ = v;if(and__6833__auto__)
{return v.cljs$core$logic$IUnifyWithObject$_unify_with_object$arity$3;
} else
{return and__6833__auto__;
}
})())
{return v.cljs$core$logic$IUnifyWithObject$_unify_with_object$arity$3(v,u,s);
} else
{var x__7448__auto__ = (((v == null))?null:v);return (function (){var or__6845__auto__ = (cljs.core.logic._unify_with_object[goog.typeOf(x__7448__auto__)]);if(or__6845__auto__)
{return or__6845__auto__;
} else
{var or__6845__auto____$1 = (cljs.core.logic._unify_with_object["_"]);if(or__6845__auto____$1)
{return or__6845__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IUnifyWithObject.-unify-with-object",v);
}
}
})().call(null,v,u,s);
}
});
cljs.core.logic.IUnifyWithLVar = (function (){var obj467490 = {};return obj467490;
})();
cljs.core.logic._unify_with_lvar = (function _unify_with_lvar(v,u,s){if((function (){var and__6833__auto__ = v;if(and__6833__auto__)
{return v.cljs$core$logic$IUnifyWithLVar$_unify_with_lvar$arity$3;
} else
{return and__6833__auto__;
}
})())
{return v.cljs$core$logic$IUnifyWithLVar$_unify_with_lvar$arity$3(v,u,s);
} else
{var x__7448__auto__ = (((v == null))?null:v);return (function (){var or__6845__auto__ = (cljs.core.logic._unify_with_lvar[goog.typeOf(x__7448__auto__)]);if(or__6845__auto__)
{return or__6845__auto__;
} else
{var or__6845__auto____$1 = (cljs.core.logic._unify_with_lvar["_"]);if(or__6845__auto____$1)
{return or__6845__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IUnifyWithLVar.-unify-with-lvar",v);
}
}
})().call(null,v,u,s);
}
});
cljs.core.logic.IUnifyWithLSeq = (function (){var obj467492 = {};return obj467492;
})();
cljs.core.logic._unify_with_lseq = (function _unify_with_lseq(v,u,s){if((function (){var and__6833__auto__ = v;if(and__6833__auto__)
{return v.cljs$core$logic$IUnifyWithLSeq$_unify_with_lseq$arity$3;
} else
{return and__6833__auto__;
}
})())
{return v.cljs$core$logic$IUnifyWithLSeq$_unify_with_lseq$arity$3(v,u,s);
} else
{var x__7448__auto__ = (((v == null))?null:v);return (function (){var or__6845__auto__ = (cljs.core.logic._unify_with_lseq[goog.typeOf(x__7448__auto__)]);if(or__6845__auto__)
{return or__6845__auto__;
} else
{var or__6845__auto____$1 = (cljs.core.logic._unify_with_lseq["_"]);if(or__6845__auto____$1)
{return or__6845__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IUnifyWithLSeq.-unify-with-lseq",v);
}
}
})().call(null,v,u,s);
}
});
cljs.core.logic.IUnifyWithSequential = (function (){var obj467494 = {};return obj467494;
})();
cljs.core.logic._unify_with_seq = (function _unify_with_seq(v,u,s){if((function (){var and__6833__auto__ = v;if(and__6833__auto__)
{return v.cljs$core$logic$IUnifyWithSequential$_unify_with_seq$arity$3;
} else
{return and__6833__auto__;
}
})())
{return v.cljs$core$logic$IUnifyWithSequential$_unify_with_seq$arity$3(v,u,s);
} else
{var x__7448__auto__ = (((v == null))?null:v);return (function (){var or__6845__auto__ = (cljs.core.logic._unify_with_seq[goog.typeOf(x__7448__auto__)]);if(or__6845__auto__)
{return or__6845__auto__;
} else
{var or__6845__auto____$1 = (cljs.core.logic._unify_with_seq["_"]);if(or__6845__auto____$1)
{return or__6845__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IUnifyWithSequential.-unify-with-seq",v);
}
}
})().call(null,v,u,s);
}
});
cljs.core.logic.IUnifyWithMap = (function (){var obj467496 = {};return obj467496;
})();
cljs.core.logic._unify_with_map = (function _unify_with_map(v,u,s){if((function (){var and__6833__auto__ = v;if(and__6833__auto__)
{return v.cljs$core$logic$IUnifyWithMap$_unify_with_map$arity$3;
} else
{return and__6833__auto__;
}
})())
{return v.cljs$core$logic$IUnifyWithMap$_unify_with_map$arity$3(v,u,s);
} else
{var x__7448__auto__ = (((v == null))?null:v);return (function (){var or__6845__auto__ = (cljs.core.logic._unify_with_map[goog.typeOf(x__7448__auto__)]);if(or__6845__auto__)
{return or__6845__auto__;
} else
{var or__6845__auto____$1 = (cljs.core.logic._unify_with_map["_"]);if(or__6845__auto____$1)
{return or__6845__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IUnifyWithMap.-unify-with-map",v);
}
}
})().call(null,v,u,s);
}
});
cljs.core.logic.IUnifyWithRecord = (function (){var obj467498 = {};return obj467498;
})();
cljs.core.logic._unify_with_record = (function _unify_with_record(v,u,s){if((function (){var and__6833__auto__ = v;if(and__6833__auto__)
{return v.cljs$core$logic$IUnifyWithRecord$_unify_with_record$arity$3;
} else
{return and__6833__auto__;
}
})())
{return v.cljs$core$logic$IUnifyWithRecord$_unify_with_record$arity$3(v,u,s);
} else
{var x__7448__auto__ = (((v == null))?null:v);return (function (){var or__6845__auto__ = (cljs.core.logic._unify_with_record[goog.typeOf(x__7448__auto__)]);if(or__6845__auto__)
{return or__6845__auto__;
} else
{var or__6845__auto____$1 = (cljs.core.logic._unify_with_record["_"]);if(or__6845__auto____$1)
{return or__6845__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IUnifyWithRecord.-unify-with-record",v);
}
}
})().call(null,v,u,s);
}
});
cljs.core.logic.IReifyTerm = (function (){var obj467500 = {};return obj467500;
})();
cljs.core.logic._reify_term = (function _reify_term(v,s){if((function (){var and__6833__auto__ = v;if(and__6833__auto__)
{return v.cljs$core$logic$IReifyTerm$_reify_term$arity$2;
} else
{return and__6833__auto__;
}
})())
{return v.cljs$core$logic$IReifyTerm$_reify_term$arity$2(v,s);
} else
{var x__7448__auto__ = (((v == null))?null:v);return (function (){var or__6845__auto__ = (cljs.core.logic._reify_term[goog.typeOf(x__7448__auto__)]);if(or__6845__auto__)
{return or__6845__auto__;
} else
{var or__6845__auto____$1 = (cljs.core.logic._reify_term["_"]);if(or__6845__auto____$1)
{return or__6845__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IReifyTerm.-reify-term",v);
}
}
})().call(null,v,s);
}
});
cljs.core.logic.IWalkTerm = (function (){var obj467502 = {};return obj467502;
})();
cljs.core.logic._walk_term = (function _walk_term(v,f){if((function (){var and__6833__auto__ = v;if(and__6833__auto__)
{return v.cljs$core$logic$IWalkTerm$_walk_term$arity$2;
} else
{return and__6833__auto__;
}
})())
{return v.cljs$core$logic$IWalkTerm$_walk_term$arity$2(v,f);
} else
{var x__7448__auto__ = (((v == null))?null:v);return (function (){var or__6845__auto__ = (cljs.core.logic._walk_term[goog.typeOf(x__7448__auto__)]);if(or__6845__auto__)
{return or__6845__auto__;
} else
{var or__6845__auto____$1 = (cljs.core.logic._walk_term["_"]);if(or__6845__auto____$1)
{return or__6845__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWalkTerm.-walk-term",v);
}
}
})().call(null,v,f);
}
});
cljs.core.logic.IOccursCheckTerm = (function (){var obj467504 = {};return obj467504;
})();
cljs.core.logic._occurs_check_term = (function _occurs_check_term(v,u,s){if((function (){var and__6833__auto__ = v;if(and__6833__auto__)
{return v.cljs$core$logic$IOccursCheckTerm$_occurs_check_term$arity$3;
} else
{return and__6833__auto__;
}
})())
{return v.cljs$core$logic$IOccursCheckTerm$_occurs_check_term$arity$3(v,u,s);
} else
{var x__7448__auto__ = (((v == null))?null:v);return (function (){var or__6845__auto__ = (cljs.core.logic._occurs_check_term[goog.typeOf(x__7448__auto__)]);if(or__6845__auto__)
{return or__6845__auto__;
} else
{var or__6845__auto____$1 = (cljs.core.logic._occurs_check_term["_"]);if(or__6845__auto____$1)
{return or__6845__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IOccursCheckTerm.-occurs-check-term",v);
}
}
})().call(null,v,u,s);
}
});
cljs.core.logic.IBuildTerm = (function (){var obj467506 = {};return obj467506;
})();
cljs.core.logic._build_term = (function _build_term(u,s){if((function (){var and__6833__auto__ = u;if(and__6833__auto__)
{return u.cljs$core$logic$IBuildTerm$_build_term$arity$2;
} else
{return and__6833__auto__;
}
})())
{return u.cljs$core$logic$IBuildTerm$_build_term$arity$2(u,s);
} else
{var x__7448__auto__ = (((u == null))?null:u);return (function (){var or__6845__auto__ = (cljs.core.logic._build_term[goog.typeOf(x__7448__auto__)]);if(or__6845__auto__)
{return or__6845__auto__;
} else
{var or__6845__auto____$1 = (cljs.core.logic._build_term["_"]);if(or__6845__auto____$1)
{return or__6845__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IBuildTerm.-build-term",u);
}
}
})().call(null,u,s);
}
});
cljs.core.logic.IBind = (function (){var obj467508 = {};return obj467508;
})();
cljs.core.logic._bind = (function _bind(this$,g){if((function (){var and__6833__auto__ = this$;if(and__6833__auto__)
{return this$.cljs$core$logic$IBind$_bind$arity$2;
} else
{return and__6833__auto__;
}
})())
{return this$.cljs$core$logic$IBind$_bind$arity$2(this$,g);
} else
{var x__7448__auto__ = (((this$ == null))?null:this$);return (function (){var or__6845__auto__ = (cljs.core.logic._bind[goog.typeOf(x__7448__auto__)]);if(or__6845__auto__)
{return or__6845__auto__;
} else
{var or__6845__auto____$1 = (cljs.core.logic._bind["_"]);if(or__6845__auto____$1)
{return or__6845__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IBind.-bind",this$);
}
}
})().call(null,this$,g);
}
});
cljs.core.logic.IMPlus = (function (){var obj467510 = {};return obj467510;
})();
cljs.core.logic._mplus = (function _mplus(a,f){if((function (){var and__6833__auto__ = a;if(and__6833__auto__)
{return a.cljs$core$logic$IMPlus$_mplus$arity$2;
} else
{return and__6833__auto__;
}
})())
{return a.cljs$core$logic$IMPlus$_mplus$arity$2(a,f);
} else
{var x__7448__auto__ = (((a == null))?null:a);return (function (){var or__6845__auto__ = (cljs.core.logic._mplus[goog.typeOf(x__7448__auto__)]);if(or__6845__auto__)
{return or__6845__auto__;
} else
{var or__6845__auto____$1 = (cljs.core.logic._mplus["_"]);if(or__6845__auto____$1)
{return or__6845__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMPlus.-mplus",a);
}
}
})().call(null,a,f);
}
});
cljs.core.logic.ITake = (function (){var obj467512 = {};return obj467512;
})();
cljs.core.logic._take_STAR_ = (function _take_STAR_(a){if((function (){var and__6833__auto__ = a;if(and__6833__auto__)
{return a.cljs$core$logic$ITake$_take_STAR_$arity$1;
} else
{return and__6833__auto__;
}
})())
{return a.cljs$core$logic$ITake$_take_STAR_$arity$1(a);
} else
{var x__7448__auto__ = (((a == null))?null:a);return (function (){var or__6845__auto__ = (cljs.core.logic._take_STAR_[goog.typeOf(x__7448__auto__)]);if(or__6845__auto__)
{return or__6845__auto__;
} else
{var or__6845__auto____$1 = (cljs.core.logic._take_STAR_["_"]);if(or__6845__auto____$1)
{return or__6845__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITake.-take*",a);
}
}
})().call(null,a);
}
});
cljs.core.logic.IMemberCount = (function (){var obj467514 = {};return obj467514;
})();
cljs.core.logic._member_count = (function _member_count(_){if((function (){var and__6833__auto__ = _;if(and__6833__auto__)
{return _.cljs$core$logic$IMemberCount$_member_count$arity$1;
} else
{return and__6833__auto__;
}
})())
{return _.cljs$core$logic$IMemberCount$_member_count$arity$1(_);
} else
{var x__7448__auto__ = (((_ == null))?null:_);return (function (){var or__6845__auto__ = (cljs.core.logic._member_count[goog.typeOf(x__7448__auto__)]);if(or__6845__auto__)
{return or__6845__auto__;
} else
{var or__6845__auto____$1 = (cljs.core.logic._member_count["_"]);if(or__6845__auto____$1)
{return or__6845__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMemberCount.-member-count",_);
}
}
})().call(null,_);
}
});
cljs.core.logic.not_found = (function (){var obj467516 = {};return obj467516;
})();
cljs.core.logic.assoc_meta = (function assoc_meta(x,k,v){return cljs.core.with_meta.call(null,x,cljs.core.assoc.call(null,cljs.core.meta.call(null,x),k,v));
});
cljs.core.logic.dissoc_meta = (function dissoc_meta(x,k){return cljs.core.with_meta.call(null,x,cljs.core.dissoc.call(null,cljs.core.meta.call(null,x),k));
});
cljs.core.logic.assoc_dom = (function assoc_dom(x,k,v){return cljs.core.logic.subst_val.call(null,x.v,cljs.core.assoc.call(null,x.doms,k,v),x.eset,cljs.core.meta.call(null,x));
});
cljs.core.logic.dissoc_dom = (function dissoc_dom(x,k){return cljs.core.logic.subst_val.call(null,x.v,cljs.core.dissoc.call(null,x.doms,k),x.eset,cljs.core.meta.call(null,x));
});
cljs.core.logic.unbound_names = (function (){var r = cljs.core.range.call(null,100);return cljs.core.zipmap.call(null,r,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.symbol,cljs.core.str),cljs.core.repeat.call(null,"_"),r));
})();
cljs.core.logic.record_QMARK_ = (function record_QMARK_(x){var G__467518 = x;if(G__467518)
{var bit__7464__auto__ = (G__467518.cljs$lang$protocol_mask$partition0$ & 67108864);if((bit__7464__auto__) || (G__467518.cljs$core$IRecord$))
{return true;
} else
{return false;
}
} else
{return false;
}
});
cljs.core.logic.bindable_QMARK_ = (function bindable_QMARK_(x){var or__6845__auto__ = cljs.core.logic.lvar_QMARK_.call(null,x);if(cljs.core.truth_(or__6845__auto__))
{return or__6845__auto__;
} else
{var G__467520 = x;if(G__467520)
{var bit__7464__auto__ = null;if(cljs.core.truth_((function (){var or__6845__auto____$1 = bit__7464__auto__;if(cljs.core.truth_(or__6845__auto____$1))
{return or__6845__auto____$1;
} else
{return G__467520.cljs$core$logic$IBindable$;
}
})()))
{return true;
} else
{return false;
}
} else
{return false;
}
}
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
cljs.core.logic.SubstValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7402__auto__){var self__ = this;
var this__7402__auto____$1 = this;var h__7256__auto__ = self__.__hash;if(!((h__7256__auto__ == null)))
{return h__7256__auto__;
} else
{var h__7256__auto____$1 = cljs.core.hash_imap.call(null,this__7402__auto____$1);self__.__hash = h__7256__auto____$1;
return h__7256__auto____$1;
}
});
cljs.core.logic.SubstValue.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7407__auto__,k__7408__auto__){var self__ = this;
var this__7407__auto____$1 = this;return cljs.core._lookup.call(null,this__7407__auto____$1,k__7408__auto__,null);
});
cljs.core.logic.SubstValue.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7409__auto__,k467522,else__7410__auto__){var self__ = this;
var this__7409__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k467522,new cljs.core.Keyword(null,"v","v",1013904360)))
{return self__.v;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k467522,new cljs.core.Keyword(null,"doms","doms",1016993507)))
{return self__.doms;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k467522,new cljs.core.Keyword(null,"eset","eset",1017026895)))
{return self__.eset;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k467522,else__7410__auto__);
} else
{return null;
}
}
}
}
});
cljs.core.logic.SubstValue.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7414__auto__,k__7415__auto__,G__467521){var self__ = this;
var this__7414__auto____$1 = this;var pred__467524 = cljs.core.keyword_identical_QMARK_;var expr__467525 = k__7415__auto__;if(cljs.core.truth_(pred__467524.call(null,new cljs.core.Keyword(null,"v","v",1013904360),expr__467525)))
{return (new cljs.core.logic.SubstValue(G__467521,self__.doms,self__.eset,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__467524.call(null,new cljs.core.Keyword(null,"doms","doms",1016993507),expr__467525)))
{return (new cljs.core.logic.SubstValue(self__.v,G__467521,self__.eset,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__467524.call(null,new cljs.core.Keyword(null,"eset","eset",1017026895),expr__467525)))
{return (new cljs.core.logic.SubstValue(self__.v,self__.doms,G__467521,self__.__meta,self__.__extmap,null));
} else
{return (new cljs.core.logic.SubstValue(self__.v,self__.doms,self__.eset,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7415__auto__,G__467521),null));
}
}
}
});
cljs.core.logic.SubstValue.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7421__auto__,writer__7422__auto__,opts__7423__auto__){var self__ = this;
var this__7421__auto____$1 = this;var pr_pair__7424__auto__ = (function (keyval__7425__auto__){return cljs.core.pr_sequential_writer.call(null,writer__7422__auto__,cljs.core.pr_writer,""," ","",opts__7423__auto__,keyval__7425__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__7422__auto__,pr_pair__7424__auto__,"#cljs.core.logic.SubstValue{",", ","}",opts__7423__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"v","v",1013904360),self__.v],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"doms","doms",1016993507),self__.doms],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"eset","eset",1017026895),self__.eset],null))], null),self__.__extmap));
});
cljs.core.logic.SubstValue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7412__auto__,entry__7413__auto__){var self__ = this;
var this__7412__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__7413__auto__))
{return cljs.core._assoc.call(null,this__7412__auto____$1,cljs.core._nth.call(null,entry__7413__auto__,0),cljs.core._nth.call(null,entry__7413__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__7412__auto____$1,entry__7413__auto__);
}
});
cljs.core.logic.SubstValue.prototype.toString = (function (){var self__ = this;
var _ = this;return [cljs.core.str(self__.v)].join('');
});
cljs.core.logic.SubstValue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7419__auto__){var self__ = this;
var this__7419__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"v","v",1013904360),self__.v],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"doms","doms",1016993507),self__.doms],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"eset","eset",1017026895),self__.eset],null))], null),self__.__extmap));
});
cljs.core.logic.SubstValue.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7411__auto__){var self__ = this;
var this__7411__auto____$1 = this;return (3 + cljs.core.count.call(null,self__.__extmap));
});
cljs.core.logic.SubstValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7403__auto__,other__7404__auto__){var self__ = this;
var this__7403__auto____$1 = this;if(cljs.core.truth_((function (){var and__6833__auto__ = other__7404__auto__;if(cljs.core.truth_(and__6833__auto__))
{return ((this__7403__auto____$1.constructor === other__7404__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__7403__auto____$1,other__7404__auto__));
} else
{return and__6833__auto__;
}
})()))
{return true;
} else
{return false;
}
});
cljs.core.logic.SubstValue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7406__auto__,G__467521){var self__ = this;
var this__7406__auto____$1 = this;return (new cljs.core.logic.SubstValue(self__.v,self__.doms,self__.eset,G__467521,self__.__extmap,self__.__hash));
});
cljs.core.logic.SubstValue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7405__auto__){var self__ = this;
var this__7405__auto____$1 = this;return self__.__meta;
});
cljs.core.logic.SubstValue.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7416__auto__,k__7417__auto__){var self__ = this;
var this__7416__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"eset","eset",1017026895),null,new cljs.core.Keyword(null,"v","v",1013904360),null,new cljs.core.Keyword(null,"doms","doms",1016993507),null], null), null),k__7417__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7416__auto____$1),self__.__meta),k__7417__auto__);
} else
{return (new cljs.core.logic.SubstValue(self__.v,self__.doms,self__.eset,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7417__auto__)),null));
}
});
cljs.core.logic.SubstValue.cljs$lang$type = true;
cljs.core.logic.SubstValue.cljs$lang$ctorPrSeq = (function (this__7441__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.core.logic/SubstValue");
});
cljs.core.logic.SubstValue.cljs$lang$ctorPrWriter = (function (this__7441__auto__,writer__7442__auto__){return cljs.core._write.call(null,writer__7442__auto__,"cljs.core.logic/SubstValue");
});
cljs.core.logic.__GT_SubstValue = (function __GT_SubstValue(v,doms,eset){return (new cljs.core.logic.SubstValue(v,doms,eset));
});
cljs.core.logic.map__GT_SubstValue = (function map__GT_SubstValue(G__467523){return (new cljs.core.logic.SubstValue(new cljs.core.Keyword(null,"v","v",1013904360).cljs$core$IFn$_invoke$arity$1(G__467523),new cljs.core.Keyword(null,"doms","doms",1016993507).cljs$core$IFn$_invoke$arity$1(G__467523),new cljs.core.Keyword(null,"eset","eset",1017026895).cljs$core$IFn$_invoke$arity$1(G__467523),null,cljs.core.dissoc.call(null,G__467523,new cljs.core.Keyword(null,"v","v",1013904360),new cljs.core.Keyword(null,"doms","doms",1016993507),new cljs.core.Keyword(null,"eset","eset",1017026895))));
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
cljs.core.logic.var_rands = (function var_rands(a,c){return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,cljs.core.logic.lvar_QMARK_,cljs.core.map.call(null,(function (p1__467527_SHARP_){return cljs.core.logic._root_var.call(null,a,p1__467527_SHARP_);
}),cljs.core.logic._rands.call(null,c))));
});
cljs.core.logic.unbound_rands = (function unbound_rands(a,c){return cljs.core.filter.call(null,(function (p1__467528_SHARP_){return cljs.core.logic.lvar_QMARK_.call(null,cljs.core.logic._root_val.call(null,a,p1__467528_SHARP_));
}),cljs.core.logic.var_rands.call(null,a,c));
});
cljs.core.logic.IConstraintStore = (function (){var obj467530 = {};return obj467530;
})();
cljs.core.logic._addc = (function _addc(cs,a,c){if((function (){var and__6833__auto__ = cs;if(and__6833__auto__)
{return cs.cljs$core$logic$IConstraintStore$_addc$arity$3;
} else
{return and__6833__auto__;
}
})())
{return cs.cljs$core$logic$IConstraintStore$_addc$arity$3(cs,a,c);
} else
{var x__7448__auto__ = (((cs == null))?null:cs);return (function (){var or__6845__auto__ = (cljs.core.logic._addc[goog.typeOf(x__7448__auto__)]);if(or__6845__auto__)
{return or__6845__auto__;
} else
{var or__6845__auto____$1 = (cljs.core.logic._addc["_"]);if(or__6845__auto____$1)
{return or__6845__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IConstraintStore.-addc",cs);
}
}
})().call(null,cs,a,c);
}
});
cljs.core.logic._updatec = (function _updatec(cs,a,c){if((function (){var and__6833__auto__ = cs;if(and__6833__auto__)
{return cs.cljs$core$logic$IConstraintStore$_updatec$arity$3;
} else
{return and__6833__auto__;
}
})())
{return cs.cljs$core$logic$IConstraintStore$_updatec$arity$3(cs,a,c);
} else
{var x__7448__auto__ = (((cs == null))?null:cs);return (function (){var or__6845__auto__ = (cljs.core.logic._updatec[goog.typeOf(x__7448__auto__)]);if(or__6845__auto__)
{return or__6845__auto__;
} else
{var or__6845__auto____$1 = (cljs.core.logic._updatec["_"]);if(or__6845__auto____$1)
{return or__6845__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IConstraintStore.-updatec",cs);
}
}
})().call(null,cs,a,c);
}
});
cljs.core.logic._remc = (function _remc(cs,a,c){if((function (){var and__6833__auto__ = cs;if(and__6833__auto__)
{return cs.cljs$core$logic$IConstraintStore$_remc$arity$3;
} else
{return and__6833__auto__;
}
})())
{return cs.cljs$core$logic$IConstraintStore$_remc$arity$3(cs,a,c);
} else
{var x__7448__auto__ = (((cs == null))?null:cs);return (function (){var or__6845__auto__ = (cljs.core.logic._remc[goog.typeOf(x__7448__auto__)]);if(or__6845__auto__)
{return or__6845__auto__;
} else
{var or__6845__auto____$1 = (cljs.core.logic._remc["_"]);if(or__6845__auto____$1)
{return or__6845__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IConstraintStore.-remc",cs);
}
}
})().call(null,cs,a,c);
}
});
cljs.core.logic._runc = (function _runc(cs,c,state){if((function (){var and__6833__auto__ = cs;if(and__6833__auto__)
{return cs.cljs$core$logic$IConstraintStore$_runc$arity$3;
} else
{return and__6833__auto__;
}
})())
{return cs.cljs$core$logic$IConstraintStore$_runc$arity$3(cs,c,state);
} else
{var x__7448__auto__ = (((cs == null))?null:cs);return (function (){var or__6845__auto__ = (cljs.core.logic._runc[goog.typeOf(x__7448__auto__)]);if(or__6845__auto__)
{return or__6845__auto__;
} else
{var or__6845__auto____$1 = (cljs.core.logic._runc["_"]);if(or__6845__auto____$1)
{return or__6845__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IConstraintStore.-runc",cs);
}
}
})().call(null,cs,c,state);
}
});
cljs.core.logic._constraints_for = (function _constraints_for(cs,a,x,ws){if((function (){var and__6833__auto__ = cs;if(and__6833__auto__)
{return cs.cljs$core$logic$IConstraintStore$_constraints_for$arity$4;
} else
{return and__6833__auto__;
}
})())
{return cs.cljs$core$logic$IConstraintStore$_constraints_for$arity$4(cs,a,x,ws);
} else
{var x__7448__auto__ = (((cs == null))?null:cs);return (function (){var or__6845__auto__ = (cljs.core.logic._constraints_for[goog.typeOf(x__7448__auto__)]);if(or__6845__auto__)
{return or__6845__auto__;
} else
{var or__6845__auto____$1 = (cljs.core.logic._constraints_for["_"]);if(or__6845__auto____$1)
{return or__6845__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IConstraintStore.-constraints-for",cs);
}
}
})().call(null,cs,a,x,ws);
}
});
cljs.core.logic._migrate = (function _migrate(cs,s,root){if((function (){var and__6833__auto__ = cs;if(and__6833__auto__)
{return cs.cljs$core$logic$IConstraintStore$_migrate$arity$3;
} else
{return and__6833__auto__;
}
})())
{return cs.cljs$core$logic$IConstraintStore$_migrate$arity$3(cs,s,root);
} else
{var x__7448__auto__ = (((cs == null))?null:cs);return (function (){var or__6845__auto__ = (cljs.core.logic._migrate[goog.typeOf(x__7448__auto__)]);if(or__6845__auto__)
{return or__6845__auto__;
} else
{var or__6845__auto____$1 = (cljs.core.logic._migrate["_"]);if(or__6845__auto____$1)
{return or__6845__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IConstraintStore.-migrate",cs);
}
}
})().call(null,cs,s,root);
}
});
cljs.core.logic.IWithConstraintId = (function (){var obj467532 = {};return obj467532;
})();
cljs.core.logic._with_id = (function _with_id(c,id){if((function (){var and__6833__auto__ = c;if(and__6833__auto__)
{return c.cljs$core$logic$IWithConstraintId$_with_id$arity$2;
} else
{return and__6833__auto__;
}
})())
{return c.cljs$core$logic$IWithConstraintId$_with_id$arity$2(c,id);
} else
{var x__7448__auto__ = (((c == null))?null:c);return (function (){var or__6845__auto__ = (cljs.core.logic._with_id[goog.typeOf(x__7448__auto__)]);if(or__6845__auto__)
{return or__6845__auto__;
} else
{var or__6845__auto____$1 = (cljs.core.logic._with_id["_"]);if(or__6845__auto____$1)
{return or__6845__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWithConstraintId.-with-id",c);
}
}
})().call(null,c,id);
}
});
cljs.core.logic.IConstraintId = (function (){var obj467534 = {};return obj467534;
})();
cljs.core.logic._id = (function _id(c){if((function (){var and__6833__auto__ = c;if(and__6833__auto__)
{return c.cljs$core$logic$IConstraintId$_id$arity$1;
} else
{return and__6833__auto__;
}
})())
{return c.cljs$core$logic$IConstraintId$_id$arity$1(c);
} else
{var x__7448__auto__ = (((c == null))?null:c);return (function (){var or__6845__auto__ = (cljs.core.logic._id[goog.typeOf(x__7448__auto__)]);if(or__6845__auto__)
{return or__6845__auto__;
} else
{var or__6845__auto____$1 = (cljs.core.logic._id["_"]);if(or__6845__auto____$1)
{return or__6845__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IConstraintId.-id",c);
}
}
})().call(null,c);
}
});
cljs.core.logic.id = (function id(c){if((function (){var G__467536 = c;if(G__467536)
{var bit__7464__auto__ = null;if(cljs.core.truth_((function (){var or__6845__auto__ = bit__7464__auto__;if(cljs.core.truth_(or__6845__auto__))
{return or__6845__auto__;
} else
{return G__467536.cljs$core$logic$IConstraintId$;
}
})()))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core.logic._id.call(null,c);
} else
{return new cljs.core.Keyword("cljs.core.logic","id","cljs.core.logic/id",3673846182).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,c));
}
});
cljs.core.logic.with_id = (function with_id(c,id){if((function (){var G__467538 = c;if(G__467538)
{var bit__7464__auto__ = null;if(cljs.core.truth_((function (){var or__6845__auto__ = bit__7464__auto__;if(cljs.core.truth_(or__6845__auto__))
{return or__6845__auto__;
} else
{return G__467538.cljs$core$logic$IWithConstraintId$;
}
})()))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core.logic._with_id.call(null,c,id);
} else
{return cljs.core.vary_meta.call(null,c,cljs.core.assoc,new cljs.core.Keyword("cljs.core.logic","id","cljs.core.logic/id",3673846182),id);
}
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
this.cljs$lang$protocol_mask$partition0$ = 2;
})
cljs.core.logic.ConstraintStore.cljs$lang$type = true;
cljs.core.logic.ConstraintStore.cljs$lang$ctorStr = "cljs.core.logic/ConstraintStore";
cljs.core.logic.ConstraintStore.cljs$lang$ctorPrWriter = (function (this__7389__auto__,writer__7390__auto__,opt__7391__auto__){return cljs.core._write.call(null,writer__7390__auto__,"cljs.core.logic/ConstraintStore");
});
cljs.core.logic.ConstraintStore.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.count.call(null,self__.cm);
});
cljs.core.logic.ConstraintStore.prototype.cljs$core$logic$IConstraintStore$ = true;
cljs.core.logic.ConstraintStore.prototype.cljs$core$logic$IConstraintStore$_addc$arity$3 = (function (this$,a,c){var self__ = this;
var this$__$1 = this;var vars = cljs.core.logic.var_rands.call(null,a,c);var c__$1 = cljs.core.logic.with_id.call(null,c,self__.cid);var cs = cljs.core.reduce.call(null,((function (vars,c__$1){
return (function (cs,v){return cljs.core.logic.add_var.call(null,cs,v,c__$1);
});})(vars,c__$1))
,this$__$1,vars);return (new cljs.core.logic.ConstraintStore(cs.km,cs.cm,(self__.cid + 1),self__.running));
});
cljs.core.logic.ConstraintStore.prototype.cljs$core$logic$IConstraintStore$_updatec$arity$3 = (function (this$,a,c){var self__ = this;
var this$__$1 = this;var oc = self__.cm.call(null,cljs.core.logic.id.call(null,c));return (new cljs.core.logic.ConstraintStore(self__.km,cljs.core.assoc.call(null,self__.cm,cljs.core.logic.id.call(null,c),c),self__.cid,self__.running));
});
cljs.core.logic.ConstraintStore.prototype.cljs$core$logic$IConstraintStore$_remc$arity$3 = (function (this$,a,c){var self__ = this;
var this$__$1 = this;var vs = cljs.core.logic.var_rands.call(null,a,c);var ocid = cljs.core.logic.id.call(null,c);var nkm = cljs.core.reduce.call(null,((function (vs,ocid){
return (function (km__$1,v){var vcs = cljs.core.disj.call(null,cljs.core.get.call(null,km__$1,v),ocid);if(cljs.core.empty_QMARK_.call(null,vcs))
{return cljs.core.dissoc.call(null,km__$1,v);
} else
{return cljs.core.assoc.call(null,km__$1,v,vcs);
}
});})(vs,ocid))
,self__.km,vs);var ncm = cljs.core.dissoc.call(null,self__.cm,ocid);return (new cljs.core.logic.ConstraintStore(nkm,ncm,self__.cid,self__.running));
});
cljs.core.logic.ConstraintStore.prototype.cljs$core$logic$IConstraintStore$_runc$arity$3 = (function (this$,c,state){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(state))
{return (new cljs.core.logic.ConstraintStore(self__.km,self__.cm,self__.cid,cljs.core.conj.call(null,self__.running,cljs.core.logic.id.call(null,c))));
} else
{return (new cljs.core.logic.ConstraintStore(self__.km,self__.cm,self__.cid,cljs.core.disj.call(null,self__.running,cljs.core.logic.id.call(null,c))));
}
});
cljs.core.logic.ConstraintStore.prototype.cljs$core$logic$IConstraintStore$_constraints_for$arity$4 = (function (this$,a,x,ws){var self__ = this;
var this$__$1 = this;var temp__4098__auto__ = cljs.core.get.call(null,self__.km,cljs.core.logic._root_var.call(null,a,x));if(cljs.core.truth_(temp__4098__auto__))
{var ids = temp__4098__auto__;return cljs.core.filter.call(null,(function (p1__467539_SHARP_){return cljs.core.logic._watched_stores.call(null,p1__467539_SHARP_).call(null,ws);
}),cljs.core.map.call(null,self__.cm,cljs.core.remove.call(null,self__.running,ids)));
} else
{return null;
}
});
cljs.core.logic.ConstraintStore.prototype.cljs$core$logic$IConstraintStore$_migrate$arity$3 = (function (this$,x,root){var self__ = this;
var this$__$1 = this;var xcs = self__.km.call(null,x);var rootcs = self__.km.call(null,root,cljs.core.PersistentHashSet.EMPTY);var nkm = cljs.core.assoc.call(null,cljs.core.dissoc.call(null,self__.km,x),root,cljs.core.into.call(null,rootcs,xcs));return (new cljs.core.logic.ConstraintStore(nkm,self__.cm,self__.cid,self__.running));
});
cljs.core.logic.__GT_ConstraintStore = (function __GT_ConstraintStore(km,cm,cid,running){return (new cljs.core.logic.ConstraintStore(km,cm,cid,running));
});
cljs.core.logic.add_var = (function add_var(cs,x,c){if(cljs.core.truth_(cljs.core.logic.lvar_QMARK_.call(null,x)))
{} else
{throw (new Error([cljs.core.str("constraint store assoc expected logic var key: "),cljs.core.str(x)].join('')));
}
var cm = cs.cm;var km = cs.km;var cid = cs.cid;var nkm = cljs.core.update_in.call(null,km,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),cljs.core.fnil.call(null,((function (cm,km,cid){
return (function (s){return cljs.core.conj.call(null,s,cid);
});})(cm,km,cid))
,cljs.core.PersistentHashSet.EMPTY));var ncm = cljs.core.assoc.call(null,cm,cid,c);return (new cljs.core.logic.ConstraintStore(nkm,ncm,cid,cs.running));
});
cljs.core.logic.make_cs = (function make_cs(){return (new cljs.core.logic.ConstraintStore(cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,0,cljs.core.PersistentHashSet.EMPTY));
});
cljs.core.logic.ISubstitutions = (function (){var obj467541 = {};return obj467541;
})();
cljs.core.logic._occurs_check = (function _occurs_check(this$,u,v){if((function (){var and__6833__auto__ = this$;if(and__6833__auto__)
{return this$.cljs$core$logic$ISubstitutions$_occurs_check$arity$3;
} else
{return and__6833__auto__;
}
})())
{return this$.cljs$core$logic$ISubstitutions$_occurs_check$arity$3(this$,u,v);
} else
{var x__7448__auto__ = (((this$ == null))?null:this$);return (function (){var or__6845__auto__ = (cljs.core.logic._occurs_check[goog.typeOf(x__7448__auto__)]);if(or__6845__auto__)
{return or__6845__auto__;
} else
{var or__6845__auto____$1 = (cljs.core.logic._occurs_check["_"]);if(or__6845__auto____$1)
{return or__6845__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISubstitutions.-occurs-check",this$);
}
}
})().call(null,this$,u,v);
}
});
cljs.core.logic._ext = (function _ext(this$,u,v){if((function (){var and__6833__auto__ = this$;if(and__6833__auto__)
{return this$.cljs$core$logic$ISubstitutions$_ext$arity$3;
} else
{return and__6833__auto__;
}
})())
{return this$.cljs$core$logic$ISubstitutions$_ext$arity$3(this$,u,v);
} else
{var x__7448__auto__ = (((this$ == null))?null:this$);return (function (){var or__6845__auto__ = (cljs.core.logic._ext[goog.typeOf(x__7448__auto__)]);if(or__6845__auto__)
{return or__6845__auto__;
} else
{var or__6845__auto____$1 = (cljs.core.logic._ext["_"]);if(or__6845__auto____$1)
{return or__6845__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISubstitutions.-ext",this$);
}
}
})().call(null,this$,u,v);
}
});
cljs.core.logic._ext_no_check = (function _ext_no_check(this$,u,v){if((function (){var and__6833__auto__ = this$;if(and__6833__auto__)
{return this$.cljs$core$logic$ISubstitutions$_ext_no_check$arity$3;
} else
{return and__6833__auto__;
}
})())
{return this$.cljs$core$logic$ISubstitutions$_ext_no_check$arity$3(this$,u,v);
} else
{var x__7448__auto__ = (((this$ == null))?null:this$);return (function (){var or__6845__auto__ = (cljs.core.logic._ext_no_check[goog.typeOf(x__7448__auto__)]);if(or__6845__auto__)
{return or__6845__auto__;
} else
{var or__6845__auto____$1 = (cljs.core.logic._ext_no_check["_"]);if(or__6845__auto____$1)
{return or__6845__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISubstitutions.-ext-no-check",this$);
}
}
})().call(null,this$,u,v);
}
});
cljs.core.logic._walk = (function _walk(this$,v){if((function (){var and__6833__auto__ = this$;if(and__6833__auto__)
{return this$.cljs$core$logic$ISubstitutions$_walk$arity$2;
} else
{return and__6833__auto__;
}
})())
{return this$.cljs$core$logic$ISubstitutions$_walk$arity$2(this$,v);
} else
{var x__7448__auto__ = (((this$ == null))?null:this$);return (function (){var or__6845__auto__ = (cljs.core.logic._walk[goog.typeOf(x__7448__auto__)]);if(or__6845__auto__)
{return or__6845__auto__;
} else
{var or__6845__auto____$1 = (cljs.core.logic._walk["_"]);if(or__6845__auto____$1)
{return or__6845__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISubstitutions.-walk",this$);
}
}
})().call(null,this$,v);
}
});
cljs.core.logic._walk_STAR_ = (function _walk_STAR_(this$,v){if((function (){var and__6833__auto__ = this$;if(and__6833__auto__)
{return this$.cljs$core$logic$ISubstitutions$_walk_STAR_$arity$2;
} else
{return and__6833__auto__;
}
})())
{return this$.cljs$core$logic$ISubstitutions$_walk_STAR_$arity$2(this$,v);
} else
{var x__7448__auto__ = (((this$ == null))?null:this$);return (function (){var or__6845__auto__ = (cljs.core.logic._walk_STAR_[goog.typeOf(x__7448__auto__)]);if(or__6845__auto__)
{return or__6845__auto__;
} else
{var or__6845__auto____$1 = (cljs.core.logic._walk_STAR_["_"]);if(or__6845__auto____$1)
{return or__6845__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISubstitutions.-walk*",this$);
}
}
})().call(null,this$,v);
}
});
cljs.core.logic._unify = (function _unify(this$,u,v){if((function (){var and__6833__auto__ = this$;if(and__6833__auto__)
{return this$.cljs$core$logic$ISubstitutions$_unify$arity$3;
} else
{return and__6833__auto__;
}
})())
{return this$.cljs$core$logic$ISubstitutions$_unify$arity$3(this$,u,v);
} else
{var x__7448__auto__ = (((this$ == null))?null:this$);return (function (){var or__6845__auto__ = (cljs.core.logic._unify[goog.typeOf(x__7448__auto__)]);if(or__6845__auto__)
{return or__6845__auto__;
} else
{var or__6845__auto____$1 = (cljs.core.logic._unify["_"]);if(or__6845__auto____$1)
{return or__6845__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISubstitutions.-unify",this$);
}
}
})().call(null,this$,u,v);
}
});
cljs.core.logic._reify_lvar_name = (function _reify_lvar_name(_){if((function (){var and__6833__auto__ = _;if(and__6833__auto__)
{return _.cljs$core$logic$ISubstitutions$_reify_lvar_name$arity$1;
} else
{return and__6833__auto__;
}
})())
{return _.cljs$core$logic$ISubstitutions$_reify_lvar_name$arity$1(_);
} else
{var x__7448__auto__ = (((_ == null))?null:_);return (function (){var or__6845__auto__ = (cljs.core.logic._reify_lvar_name[goog.typeOf(x__7448__auto__)]);if(or__6845__auto__)
{return or__6845__auto__;
} else
{var or__6845__auto____$1 = (cljs.core.logic._reify_lvar_name["_"]);if(or__6845__auto____$1)
{return or__6845__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISubstitutions.-reify-lvar-name",_);
}
}
})().call(null,_);
}
});
cljs.core.logic._reify_STAR_ = (function _reify_STAR_(this$,v){if((function (){var and__6833__auto__ = this$;if(and__6833__auto__)
{return this$.cljs$core$logic$ISubstitutions$_reify_STAR_$arity$2;
} else
{return and__6833__auto__;
}
})())
{return this$.cljs$core$logic$ISubstitutions$_reify_STAR_$arity$2(this$,v);
} else
{var x__7448__auto__ = (((this$ == null))?null:this$);return (function (){var or__6845__auto__ = (cljs.core.logic._reify_STAR_[goog.typeOf(x__7448__auto__)]);if(or__6845__auto__)
{return or__6845__auto__;
} else
{var or__6845__auto____$1 = (cljs.core.logic._reify_STAR_["_"]);if(or__6845__auto____$1)
{return or__6845__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISubstitutions.-reify*",this$);
}
}
})().call(null,this$,v);
}
});
cljs.core.logic._reify = (function() {
var _reify = null;
var _reify__2 = (function (s,v){if((function (){var and__6833__auto__ = s;if(and__6833__auto__)
{return s.cljs$core$logic$ISubstitutions$_reify$arity$2;
} else
{return and__6833__auto__;
}
})())
{return s.cljs$core$logic$ISubstitutions$_reify$arity$2(s,v);
} else
{var x__7448__auto__ = (((s == null))?null:s);return (function (){var or__6845__auto__ = (cljs.core.logic._reify[goog.typeOf(x__7448__auto__)]);if(or__6845__auto__)
{return or__6845__auto__;
} else
{var or__6845__auto____$1 = (cljs.core.logic._reify["_"]);if(or__6845__auto____$1)
{return or__6845__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISubstitutions.-reify",s);
}
}
})().call(null,s,v);
}
});
var _reify__3 = (function (s,v,r){if((function (){var and__6833__auto__ = s;if(and__6833__auto__)
{return s.cljs$core$logic$ISubstitutions$_reify$arity$3;
} else
{return and__6833__auto__;
}
})())
{return s.cljs$core$logic$ISubstitutions$_reify$arity$3(s,v,r);
} else
{var x__7448__auto__ = (((s == null))?null:s);return (function (){var or__6845__auto__ = (cljs.core.logic._reify[goog.typeOf(x__7448__auto__)]);if(or__6845__auto__)
{return or__6845__auto__;
} else
{var or__6845__auto____$1 = (cljs.core.logic._reify["_"]);if(or__6845__auto____$1)
{return or__6845__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISubstitutions.-reify",s);
}
}
})().call(null,s,v,r);
}
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
cljs.core.logic.ISubstitutionsCLP = (function (){var obj467543 = {};return obj467543;
})();
cljs.core.logic._root_val = (function _root_val(s,v){if((function (){var and__6833__auto__ = s;if(and__6833__auto__)
{return s.cljs$core$logic$ISubstitutionsCLP$_root_val$arity$2;
} else
{return and__6833__auto__;
}
})())
{return s.cljs$core$logic$ISubstitutionsCLP$_root_val$arity$2(s,v);
} else
{var x__7448__auto__ = (((s == null))?null:s);return (function (){var or__6845__auto__ = (cljs.core.logic._root_val[goog.typeOf(x__7448__auto__)]);if(or__6845__auto__)
{return or__6845__auto__;
} else
{var or__6845__auto____$1 = (cljs.core.logic._root_val["_"]);if(or__6845__auto____$1)
{return or__6845__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISubstitutionsCLP.-root-val",s);
}
}
})().call(null,s,v);
}
});
cljs.core.logic._root_var = (function _root_var(s,v){if((function (){var and__6833__auto__ = s;if(and__6833__auto__)
{return s.cljs$core$logic$ISubstitutionsCLP$_root_var$arity$2;
} else
{return and__6833__auto__;
}
})())
{return s.cljs$core$logic$ISubstitutionsCLP$_root_var$arity$2(s,v);
} else
{var x__7448__auto__ = (((s == null))?null:s);return (function (){var or__6845__auto__ = (cljs.core.logic._root_var[goog.typeOf(x__7448__auto__)]);if(or__6845__auto__)
{return or__6845__auto__;
} else
{var or__6845__auto____$1 = (cljs.core.logic._root_var["_"]);if(or__6845__auto____$1)
{return or__6845__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISubstitutionsCLP.-root-var",s);
}
}
})().call(null,s,v);
}
});
cljs.core.logic._ext_run_cs = (function _ext_run_cs(s,x,v){if((function (){var and__6833__auto__ = s;if(and__6833__auto__)
{return s.cljs$core$logic$ISubstitutionsCLP$_ext_run_cs$arity$3;
} else
{return and__6833__auto__;
}
})())
{return s.cljs$core$logic$ISubstitutionsCLP$_ext_run_cs$arity$3(s,x,v);
} else
{var x__7448__auto__ = (((s == null))?null:s);return (function (){var or__6845__auto__ = (cljs.core.logic._ext_run_cs[goog.typeOf(x__7448__auto__)]);if(or__6845__auto__)
{return or__6845__auto__;
} else
{var or__6845__auto____$1 = (cljs.core.logic._ext_run_cs["_"]);if(or__6845__auto____$1)
{return or__6845__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISubstitutionsCLP.-ext-run-cs",s);
}
}
})().call(null,s,x,v);
}
});
cljs.core.logic._queue = (function _queue(s,c){if((function (){var and__6833__auto__ = s;if(and__6833__auto__)
{return s.cljs$core$logic$ISubstitutionsCLP$_queue$arity$2;
} else
{return and__6833__auto__;
}
})())
{return s.cljs$core$logic$ISubstitutionsCLP$_queue$arity$2(s,c);
} else
{var x__7448__auto__ = (((s == null))?null:s);return (function (){var or__6845__auto__ = (cljs.core.logic._queue[goog.typeOf(x__7448__auto__)]);if(or__6845__auto__)
{return or__6845__auto__;
} else
{var or__6845__auto____$1 = (cljs.core.logic._queue["_"]);if(or__6845__auto____$1)
{return or__6845__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISubstitutionsCLP.-queue",s);
}
}
})().call(null,s,c);
}
});
cljs.core.logic._update_var = (function _update_var(s,x,v){if((function (){var and__6833__auto__ = s;if(and__6833__auto__)
{return s.cljs$core$logic$ISubstitutionsCLP$_update_var$arity$3;
} else
{return and__6833__auto__;
}
})())
{return s.cljs$core$logic$ISubstitutionsCLP$_update_var$arity$3(s,x,v);
} else
{var x__7448__auto__ = (((s == null))?null:s);return (function (){var or__6845__auto__ = (cljs.core.logic._update_var[goog.typeOf(x__7448__auto__)]);if(or__6845__auto__)
{return or__6845__auto__;
} else
{var or__6845__auto____$1 = (cljs.core.logic._update_var["_"]);if(or__6845__auto____$1)
{return or__6845__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISubstitutionsCLP.-update-var",s);
}
}
})().call(null,s,x,v);
}
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
this.cljs$lang$protocol_mask$partition0$ = 2149974018;
})
cljs.core.logic.Substitutions.cljs$lang$type = true;
cljs.core.logic.Substitutions.cljs$lang$ctorStr = "cljs.core.logic/Substitutions";
cljs.core.logic.Substitutions.cljs$lang$ctorPrWriter = (function (this__7389__auto__,writer__7390__auto__,opt__7391__auto__){return cljs.core._write.call(null,writer__7390__auto__,"cljs.core.logic/Substitutions");
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$ISubstitutions$ = true;
cljs.core.logic.Substitutions.prototype.cljs$core$logic$ISubstitutions$_walk$arity$2 = (function (this$,v){var self__ = this;
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
var G__467552 = vp;
var G__467553 = cljs.core.find.call(null,self__.s,vp);
lv = G__467552;
me = G__467553;
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
cljs.core.logic.Substitutions.prototype.cljs$core$logic$ISubstitutions$_reify_STAR_$arity$2 = (function (this$,v){var self__ = this;
var this$__$1 = this;var v__$1 = cljs.core.logic._walk.call(null,this$__$1,v);return cljs.core.logic._reify_term.call(null,v__$1,this$__$1);
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$ISubstitutions$_walk_STAR_$arity$2 = (function (this$,v){var self__ = this;
var this$__$1 = this;var v__$1 = cljs.core.logic._walk.call(null,this$__$1,v);return cljs.core.logic._walk_term.call(null,v__$1,(function (x){var x__$1 = cljs.core.logic._walk.call(null,this$__$1,x);if(cljs.core.truth_(cljs.core.logic.tree_term_QMARK_.call(null,x__$1)))
{return cljs.core.logic._walk_STAR_.call(null,this$__$1,x__$1);
} else
{return x__$1;
}
}));
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$ISubstitutions$_reify_lvar_name$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var c = cljs.core.count.call(null,self__.s);if((c < 100))
{return cljs.core.logic.unbound_names.call(null,c);
} else
{return cljs.core.symbol.call(null,[cljs.core.str("_"),cljs.core.str(cljs.core.count.call(null,self__.s))].join(''));
}
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$ISubstitutions$_reify$arity$2 = (function (this$,v){var self__ = this;
var this$__$1 = this;var v__$1 = cljs.core.logic._walk_STAR_.call(null,this$__$1,v);return cljs.core.logic._walk_STAR_.call(null,cljs.core.logic._reify_STAR_.call(null,cljs.core.with_meta.call(null,cljs.core.logic.empty_s,self__._meta),v__$1),v__$1);
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$ISubstitutions$_reify$arity$3 = (function (this$,v,r){var self__ = this;
var this$__$1 = this;var v__$1 = cljs.core.logic._walk_STAR_.call(null,this$__$1,v);return cljs.core.logic._walk_STAR_.call(null,cljs.core.logic._reify_STAR_.call(null,r,v__$1),v__$1);
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$ISubstitutions$_unify$arity$3 = (function (this$,u,v){var self__ = this;
var this$__$1 = this;if((u === v))
{return this$__$1;
} else
{var u__$1 = cljs.core.logic._walk.call(null,this$__$1,u);var v__$1 = cljs.core.logic._walk.call(null,this$__$1,v);if(cljs.core.truth_((function (){var and__6833__auto__ = cljs.core.logic.lvar_QMARK_.call(null,u__$1);if(cljs.core.truth_(and__6833__auto__))
{return cljs.core._EQ_.call(null,u__$1,v__$1);
} else
{return and__6833__auto__;
}
})()))
{return this$__$1;
} else
{if(cljs.core.truth_((function (){var and__6833__auto__ = cljs.core.not.call(null,cljs.core.logic.lvar_QMARK_.call(null,u__$1));if(and__6833__auto__)
{return cljs.core.logic.lvar_QMARK_.call(null,v__$1);
} else
{return and__6833__auto__;
}
})()))
{return cljs.core.logic._unify_terms.call(null,v__$1,u__$1,this$__$1);
} else
{return cljs.core.logic._unify_terms.call(null,u__$1,v__$1,this$__$1);
}
}
}
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$ISubstitutions$_ext$arity$3 = (function (this$,u,v){var self__ = this;
var this$__$1 = this;if((cljs.core.logic._STAR_occurs_check_STAR_) && (cljs.core.logic._occurs_check.call(null,this$__$1,u,((cljs.core.logic.subst_val_QMARK_.call(null,v))?v.v:v))))
{return null;
} else
{return cljs.core.logic._ext_no_check.call(null,this$__$1,u,v);
}
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$ISubstitutions$_ext_no_check$arity$3 = (function (this$,u,v){var self__ = this;
var this$__$1 = this;var u__$1 = ((cljs.core.not.call(null,cljs.core.logic.lvar_QMARK_.call(null,v)))?cljs.core.logic.assoc_meta.call(null,u,new cljs.core.Keyword("cljs.core.logic","root","cljs.core.logic/root",3673158879),true):u);return (new cljs.core.logic.Substitutions(cljs.core.assoc.call(null,self__.s,u__$1,v),(cljs.core.truth_(self__.vs)?cljs.core.conj.call(null,self__.vs,u__$1):null),self__.ts,self__.cs,self__.cq,self__.cqs,self__.oc,self__._meta));
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$ISubstitutions$_occurs_check$arity$3 = (function (this$,u,v){var self__ = this;
var this$__$1 = this;var v__$1 = cljs.core.logic._walk.call(null,this$__$1,v);return cljs.core.logic._occurs_check_term.call(null,v__$1,u,this$__$1);
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$IBind$ = true;
cljs.core.logic.Substitutions.prototype.cljs$core$logic$IBind$_bind$arity$2 = (function (this$,g){var self__ = this;
var this$__$1 = this;return g.call(null,this$__$1);
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$ISubstitutionsCLP$ = true;
cljs.core.logic.Substitutions.prototype.cljs$core$logic$ISubstitutionsCLP$_root_val$arity$2 = (function (this$,v){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(cljs.core.logic.lvar_QMARK_.call(null,v)))
{var lv = v;var G__467545 = cljs.core.find.call(null,self__.s,v);var vec__467546 = G__467545;var v__$1 = cljs.core.nth.call(null,vec__467546,0,null);var vp = cljs.core.nth.call(null,vec__467546,1,null);var me = vec__467546;var lv__$1 = lv;var G__467545__$1 = G__467545;while(true){
var lv__$2 = lv__$1;var vec__467547 = G__467545__$1;var v__$2 = cljs.core.nth.call(null,vec__467547,0,null);var vp__$1 = cljs.core.nth.call(null,vec__467547,1,null);var me__$1 = vec__467547;if((me__$1 == null))
{return lv__$2;
} else
{if(cljs.core.not.call(null,cljs.core.logic.lvar_QMARK_.call(null,vp__$1)))
{return vp__$1;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__467554 = vp__$1;
var G__467555 = cljs.core.find.call(null,self__.s,vp__$1);
lv__$1 = G__467554;
G__467545__$1 = G__467555;
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
cljs.core.logic.Substitutions.prototype.cljs$core$logic$ISubstitutionsCLP$_root_var$arity$2 = (function (this$,v){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(cljs.core.logic.lvar_QMARK_.call(null,v)))
{if(cljs.core.truth_(new cljs.core.Keyword("cljs.core.logic","root","cljs.core.logic/root",3673158879).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v))))
{return v;
} else
{var lv = v;var G__467549 = cljs.core.find.call(null,self__.s,v);var vec__467550 = G__467549;var v__$1 = cljs.core.nth.call(null,vec__467550,0,null);var vp = cljs.core.nth.call(null,vec__467550,1,null);var me = vec__467550;var lv__$1 = lv;var G__467549__$1 = G__467549;while(true){
var lv__$2 = lv__$1;var vec__467551 = G__467549__$1;var v__$2 = cljs.core.nth.call(null,vec__467551,0,null);var vp__$1 = cljs.core.nth.call(null,vec__467551,1,null);var me__$1 = vec__467551;if((me__$1 == null))
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
var G__467556 = vp__$1;
var G__467557 = cljs.core.find.call(null,self__.s,vp__$1);
lv__$1 = G__467556;
G__467549__$1 = G__467557;
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
cljs.core.logic.Substitutions.prototype.cljs$core$logic$ISubstitutionsCLP$_ext_run_cs$arity$3 = (function (this$,x,v){var self__ = this;
var this$__$1 = this;var x__$1 = cljs.core.logic._root_var.call(null,this$__$1,x);var xs = (cljs.core.truth_(cljs.core.logic.lvar_QMARK_.call(null,v))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,cljs.core.logic._root_var.call(null,this$__$1,v)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1], null));var s__$1 = (cljs.core.truth_(self__.oc)?cljs.core.logic._ext.call(null,this$__$1,x__$1,v):cljs.core.logic._ext_no_check.call(null,this$__$1,x__$1,v));if(cljs.core.truth_(s__$1))
{return cljs.core.logic.run_constraints_STAR_.call(null,xs,self__.cs,new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440)).call(null,s__$1);
} else
{return null;
}
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$ISubstitutionsCLP$_queue$arity$2 = (function (this$,c){var self__ = this;
var this$__$1 = this;var id = cljs.core.logic.id.call(null,c);if(cljs.core.not.call(null,self__.cqs.call(null,id)))
{return (new cljs.core.logic.Substitutions(self__.s,self__.vs,self__.ts,self__.cs,cljs.core.conj.call(null,(function (){var or__6845__auto__ = self__.cq;if(cljs.core.truth_(or__6845__auto__))
{return or__6845__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),c),cljs.core.conj.call(null,self__.cqs,id),self__.oc,self__._meta));
} else
{return this$__$1;
}
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$ISubstitutionsCLP$_update_var$arity$3 = (function (this$,x,v){var self__ = this;
var this$__$1 = this;return (new cljs.core.logic.Substitutions(cljs.core.assoc.call(null,self__.s,x,v),self__.vs,self__.ts,self__.cs,self__.cq,self__.cqs,self__.oc,self__._meta));
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$ITake$ = true;
cljs.core.logic.Substitutions.prototype.cljs$core$logic$ITake$_take_STAR_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return this$__$1;
});
cljs.core.logic.Substitutions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var self__ = this;
var this$__$1 = this;return cljs.core._pr_writer.call(null,self__.s,writer,opts);
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$IMPlus$ = true;
cljs.core.logic.Substitutions.prototype.cljs$core$logic$IMPlus$_mplus$arity$2 = (function (this$,f){var self__ = this;
var this$__$1 = this;return cljs.core.logic.choice.call(null,this$__$1,f);
});
cljs.core.logic.Substitutions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.count.call(null,self__.s);
});
cljs.core.logic.Substitutions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,o){var self__ = this;
var this$__$1 = this;return ((this$__$1 === o)) || (((o instanceof cljs.core.logic.Substitutions)) && (cljs.core._EQ_.call(null,self__.s,o.s)));
});
cljs.core.logic.Substitutions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,new_meta){var self__ = this;
var this$__$1 = this;return (new cljs.core.logic.Substitutions(self__.s,self__.vs,self__.ts,self__.cs,self__.cq,self__.cqs,self__.oc,new_meta));
});
cljs.core.logic.Substitutions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__._meta;
});
cljs.core.logic.__GT_Substitutions = (function __GT_Substitutions(s,vs,ts,cs,cq,cqs,oc,_meta){return (new cljs.core.logic.Substitutions(s,vs,ts,cs,cq,cqs,oc,_meta));
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
var tabled_s__2 = (function (oc,meta){return (new cljs.core.logic.Substitutions(cljs.core.PersistentArrayMap.EMPTY,null,cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),cljs.core.logic.make_cs.call(null),null,cljs.core.PersistentHashSet.EMPTY,oc,meta));
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
cljs.core.logic.subst_QMARK_ = (function subst_QMARK_(x){return (x instanceof cljs.core.logic.Substitutions);
});
cljs.core.logic.to_s = (function to_s(v){var s = cljs.core.reduce.call(null,(function (m,p__467560){var vec__467561 = p__467560;var k = cljs.core.nth.call(null,vec__467561,0,null);var v__$1 = cljs.core.nth.call(null,vec__467561,1,null);return cljs.core.assoc.call(null,m,k,v__$1);
}),cljs.core.PersistentArrayMap.EMPTY,v);return (new cljs.core.logic.Substitutions(s,null,null,cljs.core.logic.make_cs.call(null),null,cljs.core.PersistentHashSet.EMPTY,true,null));
});

/**
* @constructor
*/
cljs.core.logic.LVar = (function (id,unique,name,oname,__hash,meta){
this.id = id;
this.unique = unique;
this.name = name;
this.oname = oname;
this.__hash = __hash;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2154168320;
})
cljs.core.logic.LVar.cljs$lang$type = true;
cljs.core.logic.LVar.cljs$lang$ctorStr = "cljs.core.logic/LVar";
cljs.core.logic.LVar.cljs$lang$ctorPrWriter = (function (this__7389__auto__,writer__7390__auto__,opt__7391__auto__){return cljs.core._write.call(null,writer__7390__auto__,"cljs.core.logic/LVar");
});
cljs.core.logic.LVar.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.__hash;
});
cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithLVar$ = true;
cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithLVar$_unify_with_lvar$arity$3 = (function (v,u,s){var self__ = this;
var v__$1 = this;return cljs.core.logic._ext_no_check.call(null,s,u,v__$1);
});
cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithSequential$ = true;
cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithSequential$_unify_with_seq$arity$3 = (function (v,u,s){var self__ = this;
var v__$1 = this;return cljs.core.logic._ext.call(null,s,v__$1,u);
});
cljs.core.logic.LVar.prototype.cljs$core$logic$IReifyTerm$ = true;
cljs.core.logic.LVar.prototype.cljs$core$logic$IReifyTerm$_reify_term$arity$2 = (function (v,s){var self__ = this;
var v__$1 = this;var rf = new cljs.core.Keyword(null,"reify-vars","reify-vars",4368745730).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,s));if(cljs.core.fn_QMARK_.call(null,rf))
{return rf.call(null,v__$1,s);
} else
{if(cljs.core.truth_(rf))
{return cljs.core.logic._ext.call(null,s,v__$1,cljs.core.logic._reify_lvar_name.call(null,s));
} else
{return cljs.core.logic._ext.call(null,s,v__$1,v__$1.oname);
}
}
});
cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyTerms$ = true;
cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyTerms$_unify_terms$arity$3 = (function (u,v,s){var self__ = this;
var u__$1 = this;if(cljs.core.truth_(cljs.core.logic.lvar_QMARK_.call(null,v)))
{var repoint = (cljs.core.truth_(new cljs.core.Keyword("cljs.core.logic","unbound","cljs.core.logic/unbound",1803671316).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,u__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [u__$1,v], null):(cljs.core.truth_(new cljs.core.Keyword("cljs.core.logic","unbound","cljs.core.logic/unbound",1803671316).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,u__$1], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)));if(cljs.core.truth_(repoint))
{var vec__467562 = repoint;var root = cljs.core.nth.call(null,vec__467562,0,null);var other = cljs.core.nth.call(null,vec__467562,1,null);var s__$1 = (new cljs.core.logic.Substitutions(s.s,s.vs,s.ts,cljs.core.logic._migrate.call(null,s.cs,other,root),s.cq,s.cqs,s.oc,s._meta));var s__$2 = (cljs.core.truth_(new cljs.core.Keyword("cljs.core.logic","unbound","cljs.core.logic/unbound",1803671316).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,other)))?cljs.core.logic.merge_with_root.call(null,s__$1,other,root):s__$1);if(cljs.core.truth_(s__$2))
{return cljs.core.logic._ext_no_check.call(null,s__$2,other,root);
} else
{return null;
}
} else
{return cljs.core.logic._ext_no_check.call(null,s,u__$1,v);
}
} else
{if(cljs.core.truth_(cljs.core.logic.non_storable_QMARK_.call(null,v)))
{throw (new Error([cljs.core.str(v),cljs.core.str(" is non-storable")].join('')));
} else
{if(cljs.core.not_EQ_.call(null,v,cljs.core.logic.not_found))
{if(cljs.core.truth_(cljs.core.logic.tree_term_QMARK_.call(null,v)))
{return cljs.core.logic._ext.call(null,s,u__$1,v);
} else
{if(cljs.core.truth_(new cljs.core.Keyword("cljs.core.logic","unbound","cljs.core.logic/unbound",1803671316).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,u__$1))))
{return cljs.core.logic._ext_no_check.call(null,s,u__$1,cljs.core.assoc.call(null,cljs.core.logic._root_val.call(null,s,u__$1),new cljs.core.Keyword(null,"v","v",1013904360),v));
} else
{return cljs.core.logic._ext_no_check.call(null,s,u__$1,v);
}
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.logic._ext_no_check.call(null,s,u__$1,v);
} else
{return null;
}
}
}
}
});
cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithNil$ = true;
cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithNil$_unify_with_nil$arity$3 = (function (v,u,s){var self__ = this;
var v__$1 = this;return cljs.core.logic._ext_no_check.call(null,s,v__$1,u);
});
cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithMap$ = true;
cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithMap$_unify_with_map$arity$3 = (function (v,u,s){var self__ = this;
var v__$1 = this;return cljs.core.logic._ext.call(null,s,v__$1,u);
});
cljs.core.logic.LVar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (x,writer,opts){var self__ = this;
var x__$1 = this;return cljs.core._write.call(null,writer,[cljs.core.str("<lvar:"),cljs.core.str(self__.name),cljs.core.str(">")].join(''));
});
cljs.core.logic.LVar.prototype.cljs$core$logic$IOccursCheckTerm$ = true;
cljs.core.logic.LVar.prototype.cljs$core$logic$IOccursCheckTerm$_occurs_check_term$arity$3 = (function (v,x,s){var self__ = this;
var v__$1 = this;return cljs.core._EQ_.call(null,cljs.core.logic._walk.call(null,s,v__$1),x);
});
cljs.core.logic.LVar.prototype.toString = (function (){var self__ = this;
var _ = this;return cljs.core.pr_str.call(null,cljs.core.logic.this$);
});
cljs.core.logic.LVar.prototype.cljs$core$logic$IBuildTerm$ = true;
cljs.core.logic.LVar.prototype.cljs$core$logic$IBuildTerm$_build_term$arity$2 = (function (u,s){var self__ = this;
var u__$1 = this;var m = s.s;var cs = s.cs;var lv = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"ignore","ignore",1464039307,null));if(cljs.core.contains_QMARK_.call(null,m,u__$1))
{return s;
} else
{return cljs.core.logic.make_s.call(null,cljs.core.assoc.call(null,m,u__$1,lv),cs);
}
});
cljs.core.logic.LVar.prototype.cljs$core$logic$IWalkTerm$ = true;
cljs.core.logic.LVar.prototype.cljs$core$logic$IWalkTerm$_walk_term$arity$2 = (function (v,f){var self__ = this;
var v__$1 = this;return f.call(null,v__$1);
});
cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithObject$ = true;
cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithObject$_unify_with_object$arity$3 = (function (v,u,s){var self__ = this;
var v__$1 = this;return cljs.core.logic._ext.call(null,s,v__$1,u);
});
cljs.core.logic.LVar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,o){var self__ = this;
var this$__$1 = this;var and__6833__auto__ = (o instanceof cljs.core.logic.LVar);if(and__6833__auto__)
{if(cljs.core.truth_(self__.unique))
{return (self__.id === o.id);
} else
{return (self__.name === o.name);
}
} else
{return and__6833__auto__;
}
});
cljs.core.logic.LVar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,new_meta){var self__ = this;
var this$__$1 = this;return (new cljs.core.logic.LVar(self__.id,self__.unique,self__.name,self__.oname,self__.__hash,new_meta));
});
cljs.core.logic.LVar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.meta;
});
cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithLSeq$ = true;
cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithLSeq$_unify_with_lseq$arity$3 = (function (v,u,s){var self__ = this;
var v__$1 = this;return cljs.core.logic._ext.call(null,s,v__$1,u);
});
cljs.core.logic.__GT_LVar = (function __GT_LVar(id,unique,name,oname,__hash,meta){return (new cljs.core.logic.LVar(id,unique,name,oname,__hash,meta));
});
cljs.core.logic.lvar_sym_counter = [0];
cljs.core.logic.next_id = (function next_id(){return [cljs.core.str("_"),cljs.core.str((cljs.core.logic.lvar_sym_counter[0] = ((cljs.core.logic.lvar_sym_counter[0]) + 1)))].join('');
});
cljs.core.logic.lvar = (function() {
var lvar = null;
var lvar__0 = (function (){return lvar.call(null,new cljs.core.Symbol(null,"gen","gen",-1640429303,null));
});
var lvar__1 = (function (name){return lvar.call(null,name,true);
});
var lvar__2 = (function (name,unique){var oname = name;var id = (cljs.core.truth_(unique)?cljs.core.logic.next_id.call(null):name);var name__$1 = (cljs.core.truth_(unique)?[cljs.core.str(name),cljs.core.str(id)].join(''):[cljs.core.str(name)].join(''));return (new cljs.core.logic.LVar(id,unique,name__$1,oname,cljs.core.hash.call(null,name__$1),null));
});
lvar = function(name,unique){
switch(arguments.length){
case 0:
return lvar__0.call(this);
case 1:
return lvar__1.call(this,name);
case 2:
return lvar__2.call(this,name,unique);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lvar.cljs$core$IFn$_invoke$arity$0 = lvar__0;
lvar.cljs$core$IFn$_invoke$arity$1 = lvar__1;
lvar.cljs$core$IFn$_invoke$arity$2 = lvar__2;
return lvar;
})()
;
cljs.core.logic.lvar_QMARK_ = (function lvar_QMARK_(x){return (x instanceof cljs.core.logic.LVar);
});
cljs.core.logic.lvars = (function lvars(n){return cljs.core.repeatedly.call(null,n,cljs.core.logic.lvar);
});
cljs.core.logic.ITreeTerm = (function (){var obj467564 = {};return obj467564;
})();
cljs.core.logic.LConsSeq = (function (){var obj467566 = {};return obj467566;
})();
cljs.core.logic._lfirst = (function _lfirst(this$){if((function (){var and__6833__auto__ = this$;if(and__6833__auto__)
{return this$.cljs$core$logic$LConsSeq$_lfirst$arity$1;
} else
{return and__6833__auto__;
}
})())
{return this$.cljs$core$logic$LConsSeq$_lfirst$arity$1(this$);
} else
{var x__7448__auto__ = (((this$ == null))?null:this$);return (function (){var or__6845__auto__ = (cljs.core.logic._lfirst[goog.typeOf(x__7448__auto__)]);if(or__6845__auto__)
{return or__6845__auto__;
} else
{var or__6845__auto____$1 = (cljs.core.logic._lfirst["_"]);if(or__6845__auto____$1)
{return or__6845__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"LConsSeq.-lfirst",this$);
}
}
})().call(null,this$);
}
});
cljs.core.logic._lnext = (function _lnext(this$){if((function (){var and__6833__auto__ = this$;if(and__6833__auto__)
{return this$.cljs$core$logic$LConsSeq$_lnext$arity$1;
} else
{return and__6833__auto__;
}
})())
{return this$.cljs$core$logic$LConsSeq$_lnext$arity$1(this$);
} else
{var x__7448__auto__ = (((this$ == null))?null:this$);return (function (){var or__6845__auto__ = (cljs.core.logic._lnext[goog.typeOf(x__7448__auto__)]);if(or__6845__auto__)
{return or__6845__auto__;
} else
{var or__6845__auto____$1 = (cljs.core.logic._lnext["_"]);if(or__6845__auto____$1)
{return or__6845__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"LConsSeq.-lnext",this$);
}
}
})().call(null,this$);
}
});
cljs.core.logic.LConsPrint = (function (){var obj467568 = {};return obj467568;
})();
cljs.core.logic._pr_seq = (function _pr_seq(lcons){if((function (){var and__6833__auto__ = lcons;if(and__6833__auto__)
{return lcons.cljs$core$logic$LConsPrint$_pr_seq$arity$1;
} else
{return and__6833__auto__;
}
})())
{return lcons.cljs$core$logic$LConsPrint$_pr_seq$arity$1(lcons);
} else
{var x__7448__auto__ = (((lcons == null))?null:lcons);return (function (){var or__6845__auto__ = (cljs.core.logic._pr_seq[goog.typeOf(x__7448__auto__)]);if(or__6845__auto__)
{return or__6845__auto__;
} else
{var or__6845__auto____$1 = (cljs.core.logic._pr_seq["_"]);if(or__6845__auto____$1)
{return or__6845__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"LConsPrint.-pr-seq",lcons);
}
}
})().call(null,lcons);
}
});
cljs.core.logic.lcons_pr_seq = (function lcons_pr_seq(x){if(cljs.core.truth_(cljs.core.logic.lcons_QMARK_.call(null,x)))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,cljs.core.logic._lfirst.call(null,x),lcons_pr_seq.call(null,cljs.core.logic._lnext.call(null,x)));
}),null,null));
} else
{return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,x),new cljs.core.Symbol(null,".",".",-1640531481,null));
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
cljs.core.logic.LCons.cljs$lang$ctorPrWriter = (function (this__7389__auto__,writer__7390__auto__,opt__7391__auto__){return cljs.core._write.call(null,writer__7390__auto__,"cljs.core.logic/LCons");
});
cljs.core.logic.LCons.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if((self__.cache === -1))
{return this$__$1.cache = (((31 | 0) * cljs.core.hash.call(null,self__.d)) + cljs.core.hash.call(null,self__.a));
} else
{return self__.cache;
}
});
cljs.core.logic.LCons.prototype.cljs$core$logic$IUnifyWithSequential$ = true;
cljs.core.logic.LCons.prototype.cljs$core$logic$IUnifyWithSequential$_unify_with_seq$arity$3 = (function (v,u,s){var self__ = this;
var v__$1 = this;return cljs.core.logic._unify_with_lseq.call(null,u,v__$1,s);
});
cljs.core.logic.LCons.prototype.cljs$core$logic$IReifyTerm$ = true;
cljs.core.logic.LCons.prototype.cljs$core$logic$IReifyTerm$_reify_term$arity$2 = (function (v,s){var self__ = this;
var v__$1 = this;var v__$2 = v__$1;var s__$1 = s;while(true){
if(cljs.core.truth_(cljs.core.logic.lcons_QMARK_.call(null,v__$2)))
{{
var G__467569 = cljs.core.logic._lnext.call(null,v__$2);
var G__467570 = cljs.core.logic._reify_STAR_.call(null,s__$1,cljs.core.logic._lfirst.call(null,v__$2));
v__$2 = G__467569;
s__$1 = G__467570;
continue;
}
} else
{return cljs.core.logic._reify_STAR_.call(null,s__$1,v__$2);
}
break;
}
});
cljs.core.logic.LCons.prototype.cljs$core$logic$IUnifyTerms$ = true;
cljs.core.logic.LCons.prototype.cljs$core$logic$IUnifyTerms$_unify_terms$arity$3 = (function (u,v,s){var self__ = this;
var u__$1 = this;if(cljs.core.sequential_QMARK_.call(null,v))
{return cljs.core.logic._unify_with_seq.call(null,u__$1,v,s);
} else
{if(cljs.core.truth_(cljs.core.logic.lcons_QMARK_.call(null,v)))
{return cljs.core.logic._unify_with_lseq.call(null,v,u__$1,s);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return null;
} else
{return null;
}
}
}
});
cljs.core.logic.LCons.prototype.cljs$core$logic$IUnifyWithNil$ = true;
cljs.core.logic.LCons.prototype.cljs$core$logic$IUnifyWithNil$_unify_with_nil$arity$3 = (function (v,u,s){var self__ = this;
var v__$1 = this;return null;
});
cljs.core.logic.LCons.prototype.cljs$core$logic$IUnifyWithMap$ = true;
cljs.core.logic.LCons.prototype.cljs$core$logic$IUnifyWithMap$_unify_with_map$arity$3 = (function (v,u,s){var self__ = this;
var v__$1 = this;return null;
});
cljs.core.logic.LCons.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (x,writer,opts){var self__ = this;
var x__$1 = this;return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,cljs.core.logic.lcons_pr_seq.call(null,x__$1));
});
cljs.core.logic.LCons.prototype.cljs$core$logic$ITreeTerm$ = true;
cljs.core.logic.LCons.prototype.cljs$core$logic$IOccursCheckTerm$ = true;
cljs.core.logic.LCons.prototype.cljs$core$logic$IOccursCheckTerm$_occurs_check_term$arity$3 = (function (v,x,s){var self__ = this;
var v__$1 = this;var v__$2 = v__$1;var x__$1 = x;var s__$1 = s;while(true){
if(cljs.core.truth_(cljs.core.logic.lcons_QMARK_.call(null,v__$2)))
{var or__6845__auto__ = cljs.core.logic._occurs_check.call(null,s__$1,x__$1,cljs.core.logic._lfirst.call(null,v__$2));if(cljs.core.truth_(or__6845__auto__))
{return or__6845__auto__;
} else
{{
var G__467571 = cljs.core.logic._lnext.call(null,v__$2);
var G__467572 = x__$1;
var G__467573 = s__$1;
v__$2 = G__467571;
x__$1 = G__467572;
s__$1 = G__467573;
continue;
}
}
} else
{return cljs.core.logic._occurs_check.call(null,s__$1,x__$1,v__$2);
}
break;
}
});
cljs.core.logic.LCons.prototype.toString = (function (){var self__ = this;
var this$ = this;if(cljs.core.truth_(cljs.core.logic.lcons_QMARK_.call(null,self__.d)))
{return [cljs.core.str("("),cljs.core.str(self__.a),cljs.core.str(" "),cljs.core.str(cljs.core.logic.lcons_pr_seq.call(null,self__.d)),cljs.core.str(")")].join('');
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return [cljs.core.str("("),cljs.core.str(self__.a),cljs.core.str(" . "),cljs.core.str(self__.d),cljs.core.str(")")].join('');
} else
{return null;
}
}
});
cljs.core.logic.LCons.prototype.cljs$core$logic$IBuildTerm$ = true;
cljs.core.logic.LCons.prototype.cljs$core$logic$IBuildTerm$_build_term$arity$2 = (function (u,s){var self__ = this;
var u__$1 = this;var u__$2 = u__$1;var s__$1 = s;while(true){
if(cljs.core.truth_(cljs.core.logic.lcons_QMARK_.call(null,u__$2)))
{{
var G__467574 = cljs.core.logic._lnext.call(null,u__$2);
var G__467575 = cljs.core.logic.build.call(null,s__$1,cljs.core.logic._lfirst.call(null,u__$2));
u__$2 = G__467574;
s__$1 = G__467575;
continue;
}
} else
{return cljs.core.logic.build.call(null,s__$1,u__$2);
}
break;
}
});
cljs.core.logic.LCons.prototype.cljs$core$logic$IWalkTerm$ = true;
cljs.core.logic.LCons.prototype.cljs$core$logic$IWalkTerm$_walk_term$arity$2 = (function (v,f){var self__ = this;
var v__$1 = this;return cljs.core.logic.lcons.call(null,f.call(null,cljs.core.logic._lfirst.call(null,v__$1)),f.call(null,cljs.core.logic._lnext.call(null,v__$1)));
});
cljs.core.logic.LCons.prototype.cljs$core$logic$IUnifyWithObject$ = true;
cljs.core.logic.LCons.prototype.cljs$core$logic$IUnifyWithObject$_unify_with_object$arity$3 = (function (v,u,s){var self__ = this;
var v__$1 = this;return null;
});
cljs.core.logic.LCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,o){var self__ = this;
var this$__$1 = this;var or__6845__auto__ = (this$__$1 === o);if(or__6845__auto__)
{return or__6845__auto__;
} else
{var and__6833__auto__ = (o instanceof cljs.core.logic.LCons);if(and__6833__auto__)
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
{if(cljs.core.truth_((function (){var and__6833__auto____$1 = cljs.core.logic.lcons_QMARK_.call(null,me);if(cljs.core.truth_(and__6833__auto____$1))
{return cljs.core.logic.lcons_QMARK_.call(null,you);
} else
{return and__6833__auto____$1;
}
})()))
{var mef = cljs.core.logic._lfirst.call(null,me);var youf = cljs.core.logic._lfirst.call(null,you);var and__6833__auto____$1 = (cljs.core._EQ_.call(null,mef,youf)) || (cljs.core.logic.lvar_QMARK_.call(null,mef)) || (cljs.core.logic.lvar_QMARK_.call(null,youf));if(and__6833__auto____$1)
{{
var G__467576 = cljs.core.logic._lnext.call(null,me);
var G__467577 = cljs.core.logic._lnext.call(null,you);
me = G__467576;
you = G__467577;
continue;
}
} else
{return and__6833__auto____$1;
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
{return and__6833__auto__;
}
}
});
cljs.core.logic.LCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,new_meta){var self__ = this;
var this$__$1 = this;return (new cljs.core.logic.LCons(self__.a,self__.d,self__.cache,new_meta));
});
cljs.core.logic.LCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.meta;
});
cljs.core.logic.LCons.prototype.cljs$core$logic$LConsSeq$ = true;
cljs.core.logic.LCons.prototype.cljs$core$logic$LConsSeq$_lfirst$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.a;
});
cljs.core.logic.LCons.prototype.cljs$core$logic$LConsSeq$_lnext$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.d;
});
cljs.core.logic.LCons.prototype.cljs$core$logic$IUnifyWithLSeq$ = true;
cljs.core.logic.LCons.prototype.cljs$core$logic$IUnifyWithLSeq$_unify_with_lseq$arity$3 = (function (v,u,s){var self__ = this;
var v__$1 = this;var u__$1 = u;var v__$2 = v__$1;var s__$1 = s;while(true){
if(cljs.core.logic.lvar_QMARK_.call(null,u__$1))
{return cljs.core.logic._unify.call(null,s__$1,u__$1,v__$2);
} else
{if(cljs.core.logic.lvar_QMARK_.call(null,v__$2))
{return cljs.core.logic._unify.call(null,s__$1,v__$2,u__$1);
} else
{if(cljs.core.truth_((function (){var and__6833__auto__ = cljs.core.logic.lcons_QMARK_.call(null,u__$1);if(cljs.core.truth_(and__6833__auto__))
{return cljs.core.logic.lcons_QMARK_.call(null,v__$2);
} else
{return and__6833__auto__;
}
})()))
{var s__$2 = cljs.core.logic._unify.call(null,s__$1,cljs.core.logic._lfirst.call(null,u__$1),cljs.core.logic._lfirst.call(null,v__$2));if(cljs.core.not.call(null,cljs.core.logic.failed_QMARK_.call(null,s__$2)))
{{
var G__467578 = cljs.core.logic._lnext.call(null,u__$1);
var G__467579 = cljs.core.logic._lnext.call(null,v__$2);
var G__467580 = s__$2;
u__$1 = G__467578;
v__$2 = G__467579;
s__$1 = G__467580;
continue;
}
} else
{return s__$2;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.logic._unify.call(null,s__$1,u__$1,v__$2);
} else
{return null;
}
}
}
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
cljs.core.logic.tree_term_QMARK_ = (function tree_term_QMARK_(x){var or__6845__auto__ = cljs.core.coll_QMARK_.call(null,x);if(or__6845__auto__)
{return or__6845__auto__;
} else
{var G__467584 = x;if(G__467584)
{var bit__7464__auto__ = null;if(cljs.core.truth_((function (){var or__6845__auto____$1 = bit__7464__auto__;if(cljs.core.truth_(or__6845__auto____$1))
{return or__6845__auto____$1;
} else
{return G__467584.cljs$core$logic$ITreeTerm$;
}
})()))
{return true;
} else
{return false;
}
} else
{return false;
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$logic$IUnifyTerms$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$logic$IUnifyTerms$_unify_terms$arity$3 = (function (u,v,s){var u__$1 = this;return cljs.core.logic._unify_with_map.call(null,v,u__$1,s);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$logic$IUnifyTerms$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$logic$IUnifyTerms$_unify_terms$arity$3 = (function (u,v,s){var u__$1 = this;return cljs.core.logic._unify_with_map.call(null,v,u__$1,s);
});
(cljs.core.logic.IUnifyTerms["_"] = true);
(cljs.core.logic._unify_terms["_"] = (function (u,v,s){if(cljs.core.sequential_QMARK_.call(null,u))
{return cljs.core.logic._unify_with_seq.call(null,v,u,s);
} else
{return cljs.core.logic._unify_with_object.call(null,v,u,s);
}
}));
(cljs.core.logic.IUnifyTerms["null"] = true);
(cljs.core.logic._unify_terms["null"] = (function (u,v,s){return cljs.core.logic._unify_with_nil.call(null,v,u,s);
}));
(cljs.core.logic.IUnifyWithNil["_"] = true);
(cljs.core.logic._unify_with_nil["_"] = (function (v,u,s){return null;
}));
(cljs.core.logic.IUnifyWithNil["null"] = true);
(cljs.core.logic._unify_with_nil["null"] = (function (v,u,s){return s;
}));
(cljs.core.logic.IUnifyWithObject["_"] = true);
(cljs.core.logic._unify_with_object["_"] = (function (v,u,s){if(cljs.core._EQ_.call(null,u,v))
{return s;
} else
{return null;
}
}));
(cljs.core.logic.IUnifyWithObject["null"] = true);
(cljs.core.logic._unify_with_object["null"] = (function (v,u,s){return null;
}));
(cljs.core.logic.IUnifyWithLVar["_"] = true);
(cljs.core.logic._unify_with_lvar["_"] = (function (v,u,s){return cljs.core.logic._ext.call(null,s,u,v);
}));
(cljs.core.logic.IUnifyWithLVar["null"] = true);
(cljs.core.logic._unify_with_lvar["null"] = (function (v,u,s){return cljs.core.logic._ext_no_check.call(null,s,u,v);
}));
(cljs.core.logic.IUnifyWithLSeq["_"] = true);
(cljs.core.logic._unify_with_lseq["_"] = (function (v,u,s){if(cljs.core.sequential_QMARK_.call(null,v))
{var u__$1 = u;var v__$1 = cljs.core.seq.call(null,v);var s__$1 = s;while(true){
if(cljs.core.truth_(v__$1))
{if(cljs.core.logic.lcons_QMARK_.call(null,u__$1))
{var s__$2 = cljs.core.logic._unify.call(null,s__$1,cljs.core.logic._lfirst.call(null,u__$1),cljs.core.first.call(null,v__$1));if(cljs.core.not.call(null,cljs.core.logic.failed_QMARK_.call(null,s__$2)))
{{
var G__467585 = cljs.core.logic._lnext.call(null,u__$1);
var G__467586 = cljs.core.next.call(null,v__$1);
var G__467587 = s__$2;
u__$1 = G__467585;
v__$1 = G__467586;
s__$1 = G__467587;
continue;
}
} else
{return s__$2;
}
} else
{return cljs.core.logic._unify.call(null,s__$1,u__$1,v__$1);
}
} else
{if(cljs.core.logic.lvar_QMARK_.call(null,u__$1))
{return cljs.core.logic._unify.call(null,s__$1,u__$1,cljs.core.List.EMPTY);
} else
{return null;
}
}
break;
}
} else
{return null;
}
}));
(cljs.core.logic.IUnifyWithLSeq["null"] = true);
(cljs.core.logic._unify_with_lseq["null"] = (function (v,u,s){return null;
}));
(cljs.core.logic.IUnifyWithSequential["_"] = true);
(cljs.core.logic._unify_with_seq["_"] = (function (v,u,s){if(cljs.core.sequential_QMARK_.call(null,v))
{var u__$1 = cljs.core.seq.call(null,u);var v__$1 = cljs.core.seq.call(null,v);var s__$1 = s;while(true){
if(!((u__$1 == null)))
{if(!((v__$1 == null)))
{var s__$2 = cljs.core.logic._unify.call(null,s__$1,cljs.core.first.call(null,u__$1),cljs.core.first.call(null,v__$1));if(cljs.core.not.call(null,cljs.core.logic.failed_QMARK_.call(null,s__$2)))
{{
var G__467588 = cljs.core.next.call(null,u__$1);
var G__467589 = cljs.core.next.call(null,v__$1);
var G__467590 = s__$2;
u__$1 = G__467588;
v__$1 = G__467589;
s__$1 = G__467590;
continue;
}
} else
{return s__$2;
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
} else
{return null;
}
}));
(cljs.core.logic.IUnifyWithSequential["null"] = true);
(cljs.core.logic._unify_with_seq["null"] = (function (v,u,s){return null;
}));
cljs.core.logic.unify_with_map_STAR_ = (function unify_with_map_STAR_(v,u,s){if(!((cljs.core.count.call(null,u) === cljs.core.count.call(null,v))))
{return null;
} else
{var ks = cljs.core.seq.call(null,cljs.core.keys.call(null,u));var s__$1 = s;while(true){
if(cljs.core.truth_(ks))
{var kf = cljs.core.first.call(null,ks);var vf = cljs.core.get.call(null,v,kf,cljs.core.logic.not_found);if((vf === cljs.core.logic.not_found))
{return null;
} else
{var s__$2 = cljs.core.logic._unify.call(null,s__$1,cljs.core.get.call(null,u,kf),vf);if(cljs.core.not.call(null,cljs.core.logic.failed_QMARK_.call(null,s__$2)))
{{
var G__467591 = cljs.core.next.call(null,ks);
var G__467592 = s__$2;
ks = G__467591;
s__$1 = G__467592;
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
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$logic$IUnifyWithMap$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$logic$IUnifyWithMap$_unify_with_map$arity$3 = (function (v,u,s){var v__$1 = this;return cljs.core.logic.unify_with_map_STAR_.call(null,v__$1,u,s);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$logic$IUnifyWithMap$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$logic$IUnifyWithMap$_unify_with_map$arity$3 = (function (v,u,s){var v__$1 = this;return cljs.core.logic.unify_with_map_STAR_.call(null,v__$1,u,s);
});
(cljs.core.logic.IUnifyWithMap["_"] = true);
(cljs.core.logic._unify_with_map["_"] = (function (v,u,s){return null;
}));
(cljs.core.logic.IUnifyWithMap["null"] = true);
(cljs.core.logic._unify_with_map["null"] = (function (v,u,s){return null;
}));
(cljs.core.logic.IReifyTerm["_"] = true);
(cljs.core.logic._reify_term["_"] = (function (v,s){if(cljs.core.coll_QMARK_.call(null,v))
{var v__$1 = v;var s__$1 = s;while(true){
if(cljs.core.seq.call(null,v__$1))
{{
var G__467593 = cljs.core.next.call(null,v__$1);
var G__467594 = cljs.core.logic._reify_STAR_.call(null,s__$1,cljs.core.first.call(null,v__$1));
v__$1 = G__467593;
s__$1 = G__467594;
continue;
}
} else
{return s__$1;
}
break;
}
} else
{return s;
}
}));
(cljs.core.logic.IReifyTerm["null"] = true);
(cljs.core.logic._reify_term["null"] = (function (v,s){return s;
}));
cljs.core.logic.walk_term_record = (function walk_term_record(v,f){return cljs.core.with_meta.call(null,(function (){var v__$1 = v;var r = cljs.core.logic._uninitialized.call(null,v__$1);while(true){
if(cljs.core.seq.call(null,v__$1))
{var vec__467596 = cljs.core.first.call(null,v__$1);var vfk = cljs.core.nth.call(null,vec__467596,0,null);var vfv = cljs.core.nth.call(null,vec__467596,1,null);{
var G__467597 = cljs.core.next.call(null,v__$1);
var G__467598 = cljs.core.assoc.call(null,r,cljs.core.logic._walk_term.call(null,f.call(null,vfk),f),cljs.core.logic._walk_term.call(null,f.call(null,vfv),f));
v__$1 = G__467597;
r = G__467598;
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
{var vec__467600 = cljs.core.first.call(null,v__$1);var vfk = cljs.core.nth.call(null,vec__467600,0,null);var vfv = cljs.core.nth.call(null,vec__467600,1,null);{
var G__467601 = cljs.core.next.call(null,v__$1);
var G__467602 = cljs.core._assoc_BANG_.call(null,r,cljs.core.logic._walk_term.call(null,f.call(null,vfk),f),cljs.core.logic._walk_term.call(null,f.call(null,vfv),f));
v__$1 = G__467601;
r = G__467602;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,r);
}
break;
}
})(),cljs.core.meta.call(null,v));
});
cljs.core.PersistentVector.prototype.cljs$core$logic$IWalkTerm$ = true;
cljs.core.PersistentVector.prototype.cljs$core$logic$IWalkTerm$_walk_term$arity$2 = (function (v,f){var v__$1 = this;return cljs.core.with_meta.call(null,(function (){var v__$2 = cljs.core.seq.call(null,v__$1);var r = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);while(true){
if(cljs.core.truth_(v__$2))
{{
var G__467604 = cljs.core.next.call(null,v__$2);
var G__467605 = cljs.core._conj_BANG_.call(null,r,cljs.core.logic._walk_term.call(null,f.call(null,cljs.core.first.call(null,v__$2)),f));
v__$2 = G__467604;
r = G__467605;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,r);
}
break;
}
})(),cljs.core.meta.call(null,v__$1));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$logic$IWalkTerm$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$logic$IWalkTerm$_walk_term$arity$2 = (function (v,f){var v__$1 = this;return cljs.core.logic.walk_term_map_STAR_.call(null,v__$1,f);
});
cljs.core.PersistentHashMap.prototype.cljs$core$logic$IWalkTerm$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$logic$IWalkTerm$_walk_term$arity$2 = (function (v,f){var v__$1 = this;return cljs.core.logic.walk_term_map_STAR_.call(null,v__$1,f);
});
(cljs.core.logic.IWalkTerm["_"] = true);
(cljs.core.logic._walk_term["_"] = (function (v,f){if(cljs.core.sequential_QMARK_.call(null,v))
{return cljs.core.with_meta.call(null,cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__467603_SHARP_){return cljs.core.logic._walk_term.call(null,f.call(null,p1__467603_SHARP_),f);
}),v)),cljs.core.meta.call(null,v));
} else
{if(cljs.core.logic.record_QMARK_.call(null,v))
{return cljs.core.logic.walk_term_record.call(null,v,f);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return f.call(null,v);
} else
{return null;
}
}
}
}));
(cljs.core.logic.IWalkTerm["null"] = true);
(cljs.core.logic._walk_term["null"] = (function (v,f){return f.call(null,null);
}));
(cljs.core.logic.IOccursCheckTerm["_"] = true);
(cljs.core.logic._occurs_check_term["_"] = (function (v,x,s){if(cljs.core.sequential_QMARK_.call(null,v))
{var v__$1 = cljs.core.seq.call(null,v);var x__$1 = x;var s__$1 = s;while(true){
if(!((v__$1 == null)))
{var or__6845__auto__ = cljs.core.logic._occurs_check.call(null,s__$1,x__$1,cljs.core.first.call(null,v__$1));if(cljs.core.truth_(or__6845__auto__))
{return or__6845__auto__;
} else
{{
var G__467606 = cljs.core.next.call(null,v__$1);
var G__467607 = x__$1;
var G__467608 = s__$1;
v__$1 = G__467606;
x__$1 = G__467607;
s__$1 = G__467608;
continue;
}
}
} else
{return false;
}
break;
}
} else
{return false;
}
}));
(cljs.core.logic.IOccursCheckTerm["null"] = true);
(cljs.core.logic._occurs_check_term["null"] = (function (v,x,s){return false;
}));
(cljs.core.logic.IBuildTerm["_"] = true);
(cljs.core.logic._build_term["_"] = (function (u,s){if(cljs.core.sequential_QMARK_.call(null,u))
{return cljs.core.reduce.call(null,cljs.core.logic.build,s,u);
} else
{return s;
}
}));
(cljs.core.logic.IBuildTerm["null"] = true);
(cljs.core.logic._build_term["null"] = (function (u,s){return s;
}));
cljs.core.logic.mplus = (function mplus(a,f){if((function (){var G__467610 = a;if(G__467610)
{var bit__7471__auto__ = null;if(cljs.core.truth_((function (){var or__6845__auto__ = bit__7471__auto__;if(cljs.core.truth_(or__6845__auto__))
{return or__6845__auto__;
} else
{return G__467610.cljs$core$logic$IMPlus$;
}
})()))
{return true;
} else
{if((!G__467610.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.logic.IMPlus,G__467610);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.logic.IMPlus,G__467610);
}
})())
{return cljs.core.logic._mplus.call(null,a,f);
} else
{return (new cljs.core.logic.Choice(a,f));
}
});
cljs.core.logic.take_STAR_ = (function take_STAR_(x){if((function (){var G__467612 = x;if(G__467612)
{var bit__7471__auto__ = null;if(cljs.core.truth_((function (){var or__6845__auto__ = bit__7471__auto__;if(cljs.core.truth_(or__6845__auto__))
{return or__6845__auto__;
} else
{return G__467612.cljs$core$logic$ITake$;
}
})()))
{return true;
} else
{if((!G__467612.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.logic.ITake,G__467612);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.logic.ITake,G__467612);
}
})())
{return cljs.core.logic._take_STAR_.call(null,x);
} else
{return x;
}
});

/**
* @constructor
*/
cljs.core.logic.Choice = (function (a,f){
this.a = a;
this.f = f;
})
cljs.core.logic.Choice.cljs$lang$type = true;
cljs.core.logic.Choice.cljs$lang$ctorStr = "cljs.core.logic/Choice";
cljs.core.logic.Choice.cljs$lang$ctorPrWriter = (function (this__7389__auto__,writer__7390__auto__,opt__7391__auto__){return cljs.core._write.call(null,writer__7390__auto__,"cljs.core.logic/Choice");
});
cljs.core.logic.Choice.prototype.cljs$core$logic$ITake$ = true;
cljs.core.logic.Choice.prototype.cljs$core$logic$ITake$_take_STAR_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,self__.a,(new cljs.core.LazySeq(null,(function (){return cljs.core.logic.take_STAR_.call(null,self__.f);
}),null,null)));
}),null,null));
});
cljs.core.logic.Choice.prototype.cljs$core$logic$IMPlus$ = true;
cljs.core.logic.Choice.prototype.cljs$core$logic$IMPlus$_mplus$arity$2 = (function (this$,fp){var self__ = this;
var this$__$1 = this;return (new cljs.core.logic.Choice(self__.a,(new cljs.core.logic.Inc((function (){return cljs.core.logic.mplus.call(null,fp.call(null),self__.f);
})))));
});
cljs.core.logic.Choice.prototype.cljs$core$logic$IBind$ = true;
cljs.core.logic.Choice.prototype.cljs$core$logic$IBind$_bind$arity$2 = (function (this$,g){var self__ = this;
var this$__$1 = this;return cljs.core.logic.mplus.call(null,g.call(null,self__.a),(new cljs.core.logic.Inc((function (){return cljs.core.logic._bind.call(null,self__.f,g);
}))));
});
cljs.core.logic.__GT_Choice = (function __GT_Choice(a,f){return (new cljs.core.logic.Choice(a,f));
});
cljs.core.logic.choice = (function choice(a,f){return (new cljs.core.logic.Choice(a,f));
});

/**
* @constructor
*/
cljs.core.logic.Inc = (function (f){
this.f = f;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1;
})
cljs.core.logic.Inc.cljs$lang$type = true;
cljs.core.logic.Inc.cljs$lang$ctorStr = "cljs.core.logic/Inc";
cljs.core.logic.Inc.cljs$lang$ctorPrWriter = (function (this__7389__auto__,writer__7390__auto__,opt__7391__auto__){return cljs.core._write.call(null,writer__7390__auto__,"cljs.core.logic/Inc");
});
cljs.core.logic.Inc.prototype.cljs$core$logic$ITake$ = true;
cljs.core.logic.Inc.prototype.cljs$core$logic$ITake$_take_STAR_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return (new cljs.core.LazySeq(null,(function (){return cljs.core.logic.take_STAR_.call(null,self__.f.call(null));
}),null,null));
});
cljs.core.logic.Inc.prototype.cljs$core$logic$IMPlus$ = true;
cljs.core.logic.Inc.prototype.cljs$core$logic$IMPlus$_mplus$arity$2 = (function (this$,fp){var self__ = this;
var this$__$1 = this;return (new cljs.core.logic.Inc((function (){return cljs.core.logic.mplus.call(null,fp.call(null),this$__$1);
})));
});
cljs.core.logic.Inc.prototype.cljs$core$logic$IBind$ = true;
cljs.core.logic.Inc.prototype.cljs$core$logic$IBind$_bind$arity$2 = (function (this$,g){var self__ = this;
var this$__$1 = this;return (new cljs.core.logic.Inc((function (){var a = self__.f.call(null);return cljs.core.logic._bind.call(null,a,g);
})));
});
cljs.core.logic.Inc.prototype.call = (function (self__){var self__ = this;
var self____$1 = this;var _ = self____$1;return self__.f.call(null);
});
cljs.core.logic.Inc.prototype.apply = (function (self__,args467613){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args467613)));
});
cljs.core.logic.Inc.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){var self__ = this;
var _ = this;return self__.f.call(null);
});
cljs.core.logic.__GT_Inc = (function __GT_Inc(f){return (new cljs.core.logic.Inc(f));
});
(cljs.core.logic.ITake["null"] = true);
(cljs.core.logic._take_STAR_["null"] = (function (_){return cljs.core.List.EMPTY;
}));
(cljs.core.logic.IMPlus["null"] = true);
(cljs.core.logic._mplus["null"] = (function (_,f){return f.call(null);
}));
(cljs.core.logic.IBind["null"] = true);
(cljs.core.logic._bind["null"] = (function (_,g){return cljs.core.logic.this$;
}));
cljs.core.logic.failed_QMARK_ = cljs.core.nil_QMARK_;
(cljs.core.logic.ITake["function"] = true);
(cljs.core.logic._take_STAR_["function"] = (function (this$){return (new cljs.core.LazySeq(null,(function (){return cljs.core.logic.take_STAR_.call(null,this$.call(null));
}),null,null));
}));
(cljs.core.logic.ITake["null"] = true);
(cljs.core.logic._take_STAR_["null"] = (function (_){return cljs.core.List.EMPTY;
}));
(cljs.core.logic.IMPlus["function"] = true);
(cljs.core.logic._mplus["function"] = (function (this$,f){return (new cljs.core.logic.Inc((function (){return cljs.core.logic.mplus.call(null,f.call(null),this$);
})));
}));
(cljs.core.logic.IMPlus["null"] = true);
(cljs.core.logic._mplus["null"] = (function (_,f){return f.call(null);
}));
(cljs.core.logic.IBind["function"] = true);
(cljs.core.logic._bind["function"] = (function (this$,g){return (new cljs.core.logic.Inc((function (){return cljs.core.logic._bind.call(null,this$.call(null),g);
})));
}));
(cljs.core.logic.IBind["null"] = true);
(cljs.core.logic._bind["null"] = (function (_,g){return null;
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
cljs.core.logic.IIfA = (function (){var obj467615 = {};return obj467615;
})();
cljs.core.logic._ifa = (function _ifa(b,gs,c){if((function (){var and__6833__auto__ = b;if(and__6833__auto__)
{return b.cljs$core$logic$IIfA$_ifa$arity$3;
} else
{return and__6833__auto__;
}
})())
{return b.cljs$core$logic$IIfA$_ifa$arity$3(b,gs,c);
} else
{var x__7448__auto__ = (((b == null))?null:b);return (function (){var or__6845__auto__ = (cljs.core.logic._ifa[goog.typeOf(x__7448__auto__)]);if(or__6845__auto__)
{return or__6845__auto__;
} else
{var or__6845__auto____$1 = (cljs.core.logic._ifa["_"]);if(or__6845__auto____$1)
{return or__6845__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IIfA.-ifa",b);
}
}
})().call(null,b,gs,c);
}
});
cljs.core.logic.IIfU = (function (){var obj467617 = {};return obj467617;
})();
cljs.core.logic._ifu = (function _ifu(b,gs,c){if((function (){var and__6833__auto__ = b;if(and__6833__auto__)
{return b.cljs$core$logic$IIfU$_ifu$arity$3;
} else
{return and__6833__auto__;
}
})())
{return b.cljs$core$logic$IIfU$_ifu$arity$3(b,gs,c);
} else
{var x__7448__auto__ = (((b == null))?null:b);return (function (){var or__6845__auto__ = (cljs.core.logic._ifu[goog.typeOf(x__7448__auto__)]);if(or__6845__auto__)
{return or__6845__auto__;
} else
{var or__6845__auto____$1 = (cljs.core.logic._ifu["_"]);if(or__6845__auto____$1)
{return or__6845__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IIfU.-ifu",b);
}
}
})().call(null,b,gs,c);
}
});
(cljs.core.logic.IIfA["function"] = true);
(cljs.core.logic._ifa["function"] = (function (b,gs,c){return (new cljs.core.logic.Inc((function (){return cljs.core.logic._ifa.call(null,b.call(null),gs,c);
})));
}));
cljs.core.logic.Inc.prototype.cljs$core$logic$IIfA$ = true;
cljs.core.logic.Inc.prototype.cljs$core$logic$IIfA$_ifa$arity$3 = (function (b,gs,c){var b__$1 = this;return (new cljs.core.logic.Inc((function (){return cljs.core.logic._ifa.call(null,b__$1.call(null),gs,c);
})));
});
cljs.core.logic.Choice.prototype.cljs$core$logic$IIfA$ = true;
cljs.core.logic.Choice.prototype.cljs$core$logic$IIfA$_ifa$arity$3 = (function (b,gs,c){var b__$1 = this;return cljs.core.reduce.call(null,cljs.core.logic._bind,b__$1,gs);
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$IIfA$ = true;
cljs.core.logic.Substitutions.prototype.cljs$core$logic$IIfA$_ifa$arity$3 = (function (b,gs,c){var b__$1 = this;var b__$2 = b__$1;var G__467619 = gs;var vec__467620 = G__467619;var g0 = cljs.core.nth.call(null,vec__467620,0,null);var goals = cljs.core.nthnext.call(null,vec__467620,1);var b__$3 = b__$2;var G__467619__$1 = G__467619;while(true){
var b__$4 = b__$3;var vec__467621 = G__467619__$1;var g0__$1 = cljs.core.nth.call(null,vec__467621,0,null);var goals__$1 = cljs.core.nthnext.call(null,vec__467621,1);if(cljs.core.truth_(g0__$1))
{var temp__4098__auto__ = g0__$1.call(null,b__$4);if(cljs.core.truth_(temp__4098__auto__))
{var b__$5 = temp__4098__auto__;{
var G__467622 = b__$5;
var G__467623 = cljs.core.logic.gr;
b__$3 = G__467622;
G__467619__$1 = G__467623;
continue;
}
} else
{return null;
}
} else
{return b__$4;
}
break;
}
});
(cljs.core.logic.IIfA["null"] = true);
(cljs.core.logic._ifa["null"] = (function (b,gs,c){if(cljs.core.truth_(c))
{return cljs.core.force.call(null,c);
} else
{return null;
}
}));
cljs.core.logic.Choice.prototype.cljs$core$logic$IIfU$ = true;
cljs.core.logic.Choice.prototype.cljs$core$logic$IIfU$_ifu$arity$3 = (function (b,gs,c){var b__$1 = this;return cljs.core.reduce.call(null,cljs.core.logic._bind,b__$1.a,gs);
});
cljs.core.logic.Inc.prototype.cljs$core$logic$IIfU$ = true;
cljs.core.logic.Inc.prototype.cljs$core$logic$IIfU$_ifu$arity$3 = (function (b,gs,c){var b__$1 = this;return (new cljs.core.logic.Inc((function (){return cljs.core.logic._ifu.call(null,b__$1.call(null),gs,c);
})));
});
(cljs.core.logic.IIfU["function"] = true);
(cljs.core.logic._ifu["function"] = (function (b,gs,c){return (new cljs.core.logic.Inc((function (){return cljs.core.logic._ifu.call(null,b.call(null),gs,c);
})));
}));
cljs.core.logic.Substitutions.prototype.cljs$core$logic$IIfU$ = true;
cljs.core.logic.Substitutions.prototype.cljs$core$logic$IIfU$_ifu$arity$3 = (function (b,gs,c){var b__$1 = this;var b__$2 = b__$1;var G__467625 = gs;var vec__467626 = G__467625;var g0 = cljs.core.nth.call(null,vec__467626,0,null);var goals = cljs.core.nthnext.call(null,vec__467626,1);var b__$3 = b__$2;var G__467625__$1 = G__467625;while(true){
var b__$4 = b__$3;var vec__467627 = G__467625__$1;var g0__$1 = cljs.core.nth.call(null,vec__467627,0,null);var goals__$1 = cljs.core.nthnext.call(null,vec__467627,1);if(cljs.core.truth_(g0__$1))
{var temp__4098__auto__ = g0__$1.call(null,b__$4);if(cljs.core.truth_(temp__4098__auto__))
{var b__$5 = temp__4098__auto__;{
var G__467628 = b__$5;
var G__467629 = cljs.core.logic.gr;
b__$3 = G__467628;
G__467625__$1 = G__467629;
continue;
}
} else
{return null;
}
} else
{return b__$4;
}
break;
}
});
(cljs.core.logic.IIfU["null"] = true);
(cljs.core.logic._ifu["null"] = (function (b,gs,c){if(cljs.core.truth_(c))
{return cljs.core.force.call(null,c);
} else
{return null;
}
}));
cljs.core.logic.onceo = (function onceo(g){return (function (a467631){return cljs.core.logic._ifu.call(null,g.call(null,a467631),cljs.core.PersistentVector.EMPTY,null);
});
});
/**
* Copies a term u into v. Non-relational.
*/
cljs.core.logic.copy_term = (function copy_term(u,v){return (function (a467633){var u__$1 = cljs.core.logic._walk_STAR_.call(null,a467633,u);return (function (a__457906__auto__){return (new cljs.core.logic.Inc((function (){return cljs.core.logic._bind.call(null,a__457906__auto__,(function (a__457873__auto__){var has_cs_QMARK___457874__auto__ = (cljs.core.count.call(null,a__457873__auto__.cs) > 0);var temp__4098__auto__ = cljs.core.logic._unify.call(null,((has_cs_QMARK___457874__auto__)?(new cljs.core.logic.Substitutions(a__457873__auto__.s,cljs.core.PersistentVector.EMPTY,a__457873__auto__.ts,a__457873__auto__.cs,a__457873__auto__.cq,a__457873__auto__.cqs,a__457873__auto__.oc,a__457873__auto__._meta)):a__457873__auto__),cljs.core.logic._walk_STAR_.call(null,cljs.core.logic.build.call(null,cljs.core.logic.empty_s,u__$1),u__$1),v);if(cljs.core.truth_(temp__4098__auto__))
{var ap__457875__auto__ = temp__4098__auto__;var vs__457876__auto__ = ((has_cs_QMARK___457874__auto__)?ap__457875__auto__.vs:null);var changed_QMARK___457877__auto__ = (cljs.core.count.call(null,vs__457876__auto__) > 0);if(changed_QMARK___457877__auto__)
{return cljs.core.logic.run_constraints_STAR_.call(null,vs__457876__auto__,ap__457875__auto__.cs,new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440)).call(null,(new cljs.core.logic.Substitutions(ap__457875__auto__.s,null,ap__457875__auto__.ts,ap__457875__auto__.cs,ap__457875__auto__.cq,ap__457875__auto__.cqs,ap__457875__auto__.oc,ap__457875__auto__._meta)));
} else
{return ap__457875__auto__;
}
} else
{return null;
}
}));
})));
}).call(null,a467633);
});
});
/**
* A relation where a is nil
*/
cljs.core.logic.nilo = (function nilo(a){return (function (a__457873__auto__){var has_cs_QMARK___457874__auto__ = (cljs.core.count.call(null,a__457873__auto__.cs) > 0);var temp__4098__auto__ = cljs.core.logic._unify.call(null,((has_cs_QMARK___457874__auto__)?(new cljs.core.logic.Substitutions(a__457873__auto__.s,cljs.core.PersistentVector.EMPTY,a__457873__auto__.ts,a__457873__auto__.cs,a__457873__auto__.cq,a__457873__auto__.cqs,a__457873__auto__.oc,a__457873__auto__._meta)):a__457873__auto__),null,a);if(cljs.core.truth_(temp__4098__auto__))
{var ap__457875__auto__ = temp__4098__auto__;var vs__457876__auto__ = ((has_cs_QMARK___457874__auto__)?ap__457875__auto__.vs:null);var changed_QMARK___457877__auto__ = (cljs.core.count.call(null,vs__457876__auto__) > 0);if(changed_QMARK___457877__auto__)
{return cljs.core.logic.run_constraints_STAR_.call(null,vs__457876__auto__,ap__457875__auto__.cs,new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440)).call(null,(new cljs.core.logic.Substitutions(ap__457875__auto__.s,null,ap__457875__auto__.ts,ap__457875__auto__.cs,ap__457875__auto__.cq,ap__457875__auto__.cqs,ap__457875__auto__.oc,ap__457875__auto__._meta)));
} else
{return ap__457875__auto__;
}
} else
{return null;
}
});
});
/**
* A relation where a is the empty list
*/
cljs.core.logic.emptyo = (function emptyo(a){return (function (a__457873__auto__){var has_cs_QMARK___457874__auto__ = (cljs.core.count.call(null,a__457873__auto__.cs) > 0);var temp__4098__auto__ = cljs.core.logic._unify.call(null,((has_cs_QMARK___457874__auto__)?(new cljs.core.logic.Substitutions(a__457873__auto__.s,cljs.core.PersistentVector.EMPTY,a__457873__auto__.ts,a__457873__auto__.cs,a__457873__auto__.cq,a__457873__auto__.cqs,a__457873__auto__.oc,a__457873__auto__._meta)):a__457873__auto__),cljs.core.List.EMPTY,a);if(cljs.core.truth_(temp__4098__auto__))
{var ap__457875__auto__ = temp__4098__auto__;var vs__457876__auto__ = ((has_cs_QMARK___457874__auto__)?ap__457875__auto__.vs:null);var changed_QMARK___457877__auto__ = (cljs.core.count.call(null,vs__457876__auto__) > 0);if(changed_QMARK___457877__auto__)
{return cljs.core.logic.run_constraints_STAR_.call(null,vs__457876__auto__,ap__457875__auto__.cs,new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440)).call(null,(new cljs.core.logic.Substitutions(ap__457875__auto__.s,null,ap__457875__auto__.ts,ap__457875__auto__.cs,ap__457875__auto__.cq,ap__457875__auto__.cqs,ap__457875__auto__.oc,ap__457875__auto__._meta)));
} else
{return ap__457875__auto__;
}
} else
{return null;
}
});
});
/**
* A relation where l is a collection, such that a is the first of l
* and d is the rest of l. If ground d must be bound to a proper tail.
*/
cljs.core.logic.conso = (function conso(a,d,l){return (function (a__457873__auto__){var has_cs_QMARK___457874__auto__ = (cljs.core.count.call(null,a__457873__auto__.cs) > 0);var temp__4098__auto__ = cljs.core.logic._unify.call(null,((has_cs_QMARK___457874__auto__)?(new cljs.core.logic.Substitutions(a__457873__auto__.s,cljs.core.PersistentVector.EMPTY,a__457873__auto__.ts,a__457873__auto__.cs,a__457873__auto__.cq,a__457873__auto__.cqs,a__457873__auto__.oc,a__457873__auto__._meta)):a__457873__auto__),cljs.core.logic.lcons.call(null,a,d),l);if(cljs.core.truth_(temp__4098__auto__))
{var ap__457875__auto__ = temp__4098__auto__;var vs__457876__auto__ = ((has_cs_QMARK___457874__auto__)?ap__457875__auto__.vs:null);var changed_QMARK___457877__auto__ = (cljs.core.count.call(null,vs__457876__auto__) > 0);if(changed_QMARK___457877__auto__)
{return cljs.core.logic.run_constraints_STAR_.call(null,vs__457876__auto__,ap__457875__auto__.cs,new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440)).call(null,(new cljs.core.logic.Substitutions(ap__457875__auto__.s,null,ap__457875__auto__.ts,ap__457875__auto__.cs,ap__457875__auto__.cq,ap__457875__auto__.cqs,ap__457875__auto__.oc,ap__457875__auto__._meta)));
} else
{return ap__457875__auto__;
}
} else
{return null;
}
});
});
/**
* A relation where l is a collection, such that a is the first of l
*/
cljs.core.logic.firsto = (function firsto(l,a){return (function (a__457906__auto__){return (new cljs.core.logic.Inc((function (){var d = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"d","d",-1640531427,null));return cljs.core.logic._bind.call(null,a__457906__auto__,cljs.core.logic.conso.call(null,a,d,l));
})));
});
});
/**
* A relation where l is a collection, such that d is the rest of l
*/
cljs.core.logic.resto = (function resto(l,d){return (function (a__457906__auto__){return (new cljs.core.logic.Inc((function (){var a = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"a","a",-1640531430,null));return cljs.core.logic._bind.call(null,a__457906__auto__,(function (a__457873__auto__){var has_cs_QMARK___457874__auto__ = (cljs.core.count.call(null,a__457873__auto__.cs) > 0);var temp__4098__auto__ = cljs.core.logic._unify.call(null,((has_cs_QMARK___457874__auto__)?(new cljs.core.logic.Substitutions(a__457873__auto__.s,cljs.core.PersistentVector.EMPTY,a__457873__auto__.ts,a__457873__auto__.cs,a__457873__auto__.cq,a__457873__auto__.cqs,a__457873__auto__.oc,a__457873__auto__._meta)):a__457873__auto__),cljs.core.logic.lcons.call(null,a,d),l);if(cljs.core.truth_(temp__4098__auto__))
{var ap__457875__auto__ = temp__4098__auto__;var vs__457876__auto__ = ((has_cs_QMARK___457874__auto__)?ap__457875__auto__.vs:null);var changed_QMARK___457877__auto__ = (cljs.core.count.call(null,vs__457876__auto__) > 0);if(changed_QMARK___457877__auto__)
{return cljs.core.logic.run_constraints_STAR_.call(null,vs__457876__auto__,ap__457875__auto__.cs,new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440)).call(null,(new cljs.core.logic.Substitutions(ap__457875__auto__.s,null,ap__457875__auto__.ts,ap__457875__auto__.cs,ap__457875__auto__.cq,ap__457875__auto__.cqs,ap__457875__auto__.oc,ap__457875__auto__._meta)));
} else
{return ap__457875__auto__;
}
} else
{return null;
}
}));
})));
});
});
/**
* A pseudo-relation that takes a coll and ensures that the goal g
* succeeds on every element of the collection.
*/
cljs.core.logic.everyg = (function everyg(g,coll){return (function (a){var coll__$1 = cljs.core.logic._walk.call(null,a,coll);return (function everyg_STAR_(g__$1,coll__$2){if(cljs.core.seq.call(null,coll__$2))
{return (function (a__457967__auto__){return cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,a__457967__auto__,g__$1.call(null,cljs.core.first.call(null,coll__$2))),everyg_STAR_.call(null,g__$1,cljs.core.next.call(null,coll__$2)));
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
cljs.core.logic.membero = (function membero(x,l){return (function (a467635){return (new cljs.core.logic.Inc((function (){return cljs.core.logic.mplus.call(null,cljs.core.logic._bind.call(null,a467635,(function (a__457906__auto__){return (new cljs.core.logic.Inc((function (){var tail = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"tail","tail",-1636979191,null));return cljs.core.logic._bind.call(null,a__457906__auto__,(function (a__457873__auto__){var has_cs_QMARK___457874__auto__ = (cljs.core.count.call(null,a__457873__auto__.cs) > 0);var temp__4098__auto__ = cljs.core.logic._unify.call(null,((has_cs_QMARK___457874__auto__)?(new cljs.core.logic.Substitutions(a__457873__auto__.s,cljs.core.PersistentVector.EMPTY,a__457873__auto__.ts,a__457873__auto__.cs,a__457873__auto__.cq,a__457873__auto__.cqs,a__457873__auto__.oc,a__457873__auto__._meta)):a__457873__auto__),cljs.core.logic.lcons.call(null,x,tail),l);if(cljs.core.truth_(temp__4098__auto__))
{var ap__457875__auto__ = temp__4098__auto__;var vs__457876__auto__ = ((has_cs_QMARK___457874__auto__)?ap__457875__auto__.vs:null);var changed_QMARK___457877__auto__ = (cljs.core.count.call(null,vs__457876__auto__) > 0);if(changed_QMARK___457877__auto__)
{return cljs.core.logic.run_constraints_STAR_.call(null,vs__457876__auto__,ap__457875__auto__.cs,new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440)).call(null,(new cljs.core.logic.Substitutions(ap__457875__auto__.s,null,ap__457875__auto__.ts,ap__457875__auto__.cs,ap__457875__auto__.cq,ap__457875__auto__.cqs,ap__457875__auto__.oc,ap__457875__auto__._meta)));
} else
{return ap__457875__auto__;
}
} else
{return null;
}
}));
})));
})),(new cljs.core.logic.Inc((function (){return cljs.core.logic._bind.call(null,a467635,(function (a__457906__auto__){return (new cljs.core.logic.Inc((function (){var head = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"head","head",-1637333095,null));var tail = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"tail","tail",-1636979191,null));return cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,a__457906__auto__,(function (a__457873__auto__){var has_cs_QMARK___457874__auto__ = (cljs.core.count.call(null,a__457873__auto__.cs) > 0);var temp__4098__auto__ = cljs.core.logic._unify.call(null,((has_cs_QMARK___457874__auto__)?(new cljs.core.logic.Substitutions(a__457873__auto__.s,cljs.core.PersistentVector.EMPTY,a__457873__auto__.ts,a__457873__auto__.cs,a__457873__auto__.cq,a__457873__auto__.cqs,a__457873__auto__.oc,a__457873__auto__._meta)):a__457873__auto__),cljs.core.logic.lcons.call(null,head,tail),l);if(cljs.core.truth_(temp__4098__auto__))
{var ap__457875__auto__ = temp__4098__auto__;var vs__457876__auto__ = ((has_cs_QMARK___457874__auto__)?ap__457875__auto__.vs:null);var changed_QMARK___457877__auto__ = (cljs.core.count.call(null,vs__457876__auto__) > 0);if(changed_QMARK___457877__auto__)
{return cljs.core.logic.run_constraints_STAR_.call(null,vs__457876__auto__,ap__457875__auto__.cs,new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440)).call(null,(new cljs.core.logic.Substitutions(ap__457875__auto__.s,null,ap__457875__auto__.ts,ap__457875__auto__.cs,ap__457875__auto__.cq,ap__457875__auto__.cqs,ap__457875__auto__.oc,ap__457875__auto__._meta)));
} else
{return ap__457875__auto__;
}
} else
{return null;
}
})),membero.call(null,x,tail));
})));
}));
}))));
})));
});
});
/**
* Like membero but uses to disequality further constraining
* the results. For example, if x and l are ground and x occurs
* multiple times in l, member1o will succeed only once.
*/
cljs.core.logic.member1o = (function member1o(x,l){return (function (a467639){return (new cljs.core.logic.Inc((function (){return cljs.core.logic.mplus.call(null,cljs.core.logic._bind.call(null,a467639,(function (a__457906__auto__){return (new cljs.core.logic.Inc((function (){var tail = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"tail","tail",-1636979191,null));return cljs.core.logic._bind.call(null,a__457906__auto__,(function (a__457873__auto__){var has_cs_QMARK___457874__auto__ = (cljs.core.count.call(null,a__457873__auto__.cs) > 0);var temp__4098__auto__ = cljs.core.logic._unify.call(null,((has_cs_QMARK___457874__auto__)?(new cljs.core.logic.Substitutions(a__457873__auto__.s,cljs.core.PersistentVector.EMPTY,a__457873__auto__.ts,a__457873__auto__.cs,a__457873__auto__.cq,a__457873__auto__.cqs,a__457873__auto__.oc,a__457873__auto__._meta)):a__457873__auto__),cljs.core.logic.lcons.call(null,x,tail),l);if(cljs.core.truth_(temp__4098__auto__))
{var ap__457875__auto__ = temp__4098__auto__;var vs__457876__auto__ = ((has_cs_QMARK___457874__auto__)?ap__457875__auto__.vs:null);var changed_QMARK___457877__auto__ = (cljs.core.count.call(null,vs__457876__auto__) > 0);if(changed_QMARK___457877__auto__)
{return cljs.core.logic.run_constraints_STAR_.call(null,vs__457876__auto__,ap__457875__auto__.cs,new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440)).call(null,(new cljs.core.logic.Substitutions(ap__457875__auto__.s,null,ap__457875__auto__.ts,ap__457875__auto__.cs,ap__457875__auto__.cq,ap__457875__auto__.cqs,ap__457875__auto__.oc,ap__457875__auto__._meta)));
} else
{return ap__457875__auto__;
}
} else
{return null;
}
}));
})));
})),(new cljs.core.logic.Inc((function (){return cljs.core.logic._bind.call(null,a467639,(function (a__457906__auto__){return (new cljs.core.logic.Inc((function (){var head = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"head","head",-1637333095,null));var tail = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"tail","tail",-1636979191,null));return cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,a__457906__auto__,(function (a__457873__auto__){var has_cs_QMARK___457874__auto__ = (cljs.core.count.call(null,a__457873__auto__.cs) > 0);var temp__4098__auto__ = cljs.core.logic._unify.call(null,((has_cs_QMARK___457874__auto__)?(new cljs.core.logic.Substitutions(a__457873__auto__.s,cljs.core.PersistentVector.EMPTY,a__457873__auto__.ts,a__457873__auto__.cs,a__457873__auto__.cq,a__457873__auto__.cqs,a__457873__auto__.oc,a__457873__auto__._meta)):a__457873__auto__),cljs.core.logic.lcons.call(null,head,tail),l);if(cljs.core.truth_(temp__4098__auto__))
{var ap__457875__auto__ = temp__4098__auto__;var vs__457876__auto__ = ((has_cs_QMARK___457874__auto__)?ap__457875__auto__.vs:null);var changed_QMARK___457877__auto__ = (cljs.core.count.call(null,vs__457876__auto__) > 0);if(changed_QMARK___457877__auto__)
{return cljs.core.logic.run_constraints_STAR_.call(null,vs__457876__auto__,ap__457875__auto__.cs,new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440)).call(null,(new cljs.core.logic.Substitutions(ap__457875__auto__.s,null,ap__457875__auto__.ts,ap__457875__auto__.cs,ap__457875__auto__.cq,ap__457875__auto__.cqs,ap__457875__auto__.oc,ap__457875__auto__._meta)));
} else
{return ap__457875__auto__;
}
} else
{return null;
}
})),(function (a__457883__auto__){var cs__457884__auto__ = cljs.core.logic.disunify.call(null,a__457883__auto__,x,head);if(!((cs__457884__auto__ == null)))
{var p__457885__auto__ = new cljs.core.Keyword(null,"prefixc","prefixc",695243651).cljs$core$IFn$_invoke$arity$1(cs__457884__auto__);if(cljs.core.empty_QMARK_.call(null,p__457885__auto__))
{return null;
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p__467640){var vec__467641 = p__467640;var u__457886__auto__ = cljs.core.nth.call(null,vec__467641,0,null);var v__457887__auto__ = cljs.core.nth.call(null,vec__467641,1,null);return (cljs.core.logic._unify.call(null,a__457883__auto__,u__457886__auto__,v__457887__auto__) == null);
}),p__457885__auto__)))
{return a__457883__auto__;
} else
{return cljs.core.logic.cgoal.call(null,cljs.core.logic._BANG__EQ_c.call(null,p__457885__auto__)).call(null,a__457883__auto__);
}
}
} else
{return a__457883__auto__;
}
})),member1o.call(null,x,tail));
})));
}));
}))));
})));
});
});
/**
* A relation where x, y, and z are proper collections,
* such that z is x appended to y
*/
cljs.core.logic.appendo = (function appendo(x,y,z){return (function (a467643){return (new cljs.core.logic.Inc((function (){return cljs.core.logic.mplus.call(null,cljs.core.logic._bind.call(null,a467643,(function (a__457906__auto__){return (new cljs.core.logic.Inc((function (){return cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,a__457906__auto__,(function (a__457873__auto__){var has_cs_QMARK___457874__auto__ = (cljs.core.count.call(null,a__457873__auto__.cs) > 0);var temp__4098__auto__ = cljs.core.logic._unify.call(null,((has_cs_QMARK___457874__auto__)?(new cljs.core.logic.Substitutions(a__457873__auto__.s,cljs.core.PersistentVector.EMPTY,a__457873__auto__.ts,a__457873__auto__.cs,a__457873__auto__.cq,a__457873__auto__.cqs,a__457873__auto__.oc,a__457873__auto__._meta)):a__457873__auto__),cljs.core.List.EMPTY,x);if(cljs.core.truth_(temp__4098__auto__))
{var ap__457875__auto__ = temp__4098__auto__;var vs__457876__auto__ = ((has_cs_QMARK___457874__auto__)?ap__457875__auto__.vs:null);var changed_QMARK___457877__auto__ = (cljs.core.count.call(null,vs__457876__auto__) > 0);if(changed_QMARK___457877__auto__)
{return cljs.core.logic.run_constraints_STAR_.call(null,vs__457876__auto__,ap__457875__auto__.cs,new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440)).call(null,(new cljs.core.logic.Substitutions(ap__457875__auto__.s,null,ap__457875__auto__.ts,ap__457875__auto__.cs,ap__457875__auto__.cq,ap__457875__auto__.cqs,ap__457875__auto__.oc,ap__457875__auto__._meta)));
} else
{return ap__457875__auto__;
}
} else
{return null;
}
})),(function (a__457906__auto____$1){return (new cljs.core.logic.Inc((function (){return cljs.core.logic._bind.call(null,a__457906__auto____$1,(function (a__457873__auto__){var has_cs_QMARK___457874__auto__ = (cljs.core.count.call(null,a__457873__auto__.cs) > 0);var temp__4098__auto__ = cljs.core.logic._unify.call(null,((has_cs_QMARK___457874__auto__)?(new cljs.core.logic.Substitutions(a__457873__auto__.s,cljs.core.PersistentVector.EMPTY,a__457873__auto__.ts,a__457873__auto__.cs,a__457873__auto__.cq,a__457873__auto__.cqs,a__457873__auto__.oc,a__457873__auto__._meta)):a__457873__auto__),y,z);if(cljs.core.truth_(temp__4098__auto__))
{var ap__457875__auto__ = temp__4098__auto__;var vs__457876__auto__ = ((has_cs_QMARK___457874__auto__)?ap__457875__auto__.vs:null);var changed_QMARK___457877__auto__ = (cljs.core.count.call(null,vs__457876__auto__) > 0);if(changed_QMARK___457877__auto__)
{return cljs.core.logic.run_constraints_STAR_.call(null,vs__457876__auto__,ap__457875__auto__.cs,new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440)).call(null,(new cljs.core.logic.Substitutions(ap__457875__auto__.s,null,ap__457875__auto__.ts,ap__457875__auto__.cs,ap__457875__auto__.cq,ap__457875__auto__.cqs,ap__457875__auto__.oc,ap__457875__auto__._meta)));
} else
{return ap__457875__auto__;
}
} else
{return null;
}
}));
})));
}));
})));
})),(new cljs.core.logic.Inc((function (){return cljs.core.logic._bind.call(null,a467643,(function (a__457906__auto__){return (new cljs.core.logic.Inc((function (){var a = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"a","a",-1640531430,null));var d = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"d","d",-1640531427,null));return cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,a__457906__auto__,(function (a__457873__auto__){var has_cs_QMARK___457874__auto__ = (cljs.core.count.call(null,a__457873__auto__.cs) > 0);var temp__4098__auto__ = cljs.core.logic._unify.call(null,((has_cs_QMARK___457874__auto__)?(new cljs.core.logic.Substitutions(a__457873__auto__.s,cljs.core.PersistentVector.EMPTY,a__457873__auto__.ts,a__457873__auto__.cs,a__457873__auto__.cq,a__457873__auto__.cqs,a__457873__auto__.oc,a__457873__auto__._meta)):a__457873__auto__),cljs.core.logic.lcons.call(null,a,d),x);if(cljs.core.truth_(temp__4098__auto__))
{var ap__457875__auto__ = temp__4098__auto__;var vs__457876__auto__ = ((has_cs_QMARK___457874__auto__)?ap__457875__auto__.vs:null);var changed_QMARK___457877__auto__ = (cljs.core.count.call(null,vs__457876__auto__) > 0);if(changed_QMARK___457877__auto__)
{return cljs.core.logic.run_constraints_STAR_.call(null,vs__457876__auto__,ap__457875__auto__.cs,new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440)).call(null,(new cljs.core.logic.Substitutions(ap__457875__auto__.s,null,ap__457875__auto__.ts,ap__457875__auto__.cs,ap__457875__auto__.cq,ap__457875__auto__.cqs,ap__457875__auto__.oc,ap__457875__auto__._meta)));
} else
{return ap__457875__auto__;
}
} else
{return null;
}
})),(function (a__457906__auto____$1){return (new cljs.core.logic.Inc((function (){var r = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"r","r",-1640531413,null));return cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,a__457906__auto____$1,(function (a__457873__auto__){var has_cs_QMARK___457874__auto__ = (cljs.core.count.call(null,a__457873__auto__.cs) > 0);var temp__4098__auto__ = cljs.core.logic._unify.call(null,((has_cs_QMARK___457874__auto__)?(new cljs.core.logic.Substitutions(a__457873__auto__.s,cljs.core.PersistentVector.EMPTY,a__457873__auto__.ts,a__457873__auto__.cs,a__457873__auto__.cq,a__457873__auto__.cqs,a__457873__auto__.oc,a__457873__auto__._meta)):a__457873__auto__),cljs.core.logic.lcons.call(null,a,r),z);if(cljs.core.truth_(temp__4098__auto__))
{var ap__457875__auto__ = temp__4098__auto__;var vs__457876__auto__ = ((has_cs_QMARK___457874__auto__)?ap__457875__auto__.vs:null);var changed_QMARK___457877__auto__ = (cljs.core.count.call(null,vs__457876__auto__) > 0);if(changed_QMARK___457877__auto__)
{return cljs.core.logic.run_constraints_STAR_.call(null,vs__457876__auto__,ap__457875__auto__.cs,new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440)).call(null,(new cljs.core.logic.Substitutions(ap__457875__auto__.s,null,ap__457875__auto__.ts,ap__457875__auto__.cs,ap__457875__auto__.cq,ap__457875__auto__.cqs,ap__457875__auto__.oc,ap__457875__auto__._meta)));
} else
{return ap__457875__auto__;
}
} else
{return null;
}
})),appendo.call(null,d,y,r));
})));
}));
})));
}));
}))));
})));
});
});
/**
* A relation that will permute xl into the yl. May not
* terminate if xl is not ground.
*/
cljs.core.logic.permuteo = (function permuteo(xl,yl){return (function (a467645){return (new cljs.core.logic.Inc((function (){return cljs.core.logic.mplus.call(null,cljs.core.logic._bind.call(null,a467645,(function (a__457906__auto__){return (new cljs.core.logic.Inc((function (){return cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,a__457906__auto__,(function (a__457873__auto__){var has_cs_QMARK___457874__auto__ = (cljs.core.count.call(null,a__457873__auto__.cs) > 0);var temp__4098__auto__ = cljs.core.logic._unify.call(null,((has_cs_QMARK___457874__auto__)?(new cljs.core.logic.Substitutions(a__457873__auto__.s,cljs.core.PersistentVector.EMPTY,a__457873__auto__.ts,a__457873__auto__.cs,a__457873__auto__.cq,a__457873__auto__.cqs,a__457873__auto__.oc,a__457873__auto__._meta)):a__457873__auto__),cljs.core.List.EMPTY,xl);if(cljs.core.truth_(temp__4098__auto__))
{var ap__457875__auto__ = temp__4098__auto__;var vs__457876__auto__ = ((has_cs_QMARK___457874__auto__)?ap__457875__auto__.vs:null);var changed_QMARK___457877__auto__ = (cljs.core.count.call(null,vs__457876__auto__) > 0);if(changed_QMARK___457877__auto__)
{return cljs.core.logic.run_constraints_STAR_.call(null,vs__457876__auto__,ap__457875__auto__.cs,new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440)).call(null,(new cljs.core.logic.Substitutions(ap__457875__auto__.s,null,ap__457875__auto__.ts,ap__457875__auto__.cs,ap__457875__auto__.cq,ap__457875__auto__.cqs,ap__457875__auto__.oc,ap__457875__auto__._meta)));
} else
{return ap__457875__auto__;
}
} else
{return null;
}
})),(function (a__457906__auto____$1){return (new cljs.core.logic.Inc((function (){return cljs.core.logic._bind.call(null,a__457906__auto____$1,(function (a__457873__auto__){var has_cs_QMARK___457874__auto__ = (cljs.core.count.call(null,a__457873__auto__.cs) > 0);var temp__4098__auto__ = cljs.core.logic._unify.call(null,((has_cs_QMARK___457874__auto__)?(new cljs.core.logic.Substitutions(a__457873__auto__.s,cljs.core.PersistentVector.EMPTY,a__457873__auto__.ts,a__457873__auto__.cs,a__457873__auto__.cq,a__457873__auto__.cqs,a__457873__auto__.oc,a__457873__auto__._meta)):a__457873__auto__),cljs.core.List.EMPTY,yl);if(cljs.core.truth_(temp__4098__auto__))
{var ap__457875__auto__ = temp__4098__auto__;var vs__457876__auto__ = ((has_cs_QMARK___457874__auto__)?ap__457875__auto__.vs:null);var changed_QMARK___457877__auto__ = (cljs.core.count.call(null,vs__457876__auto__) > 0);if(changed_QMARK___457877__auto__)
{return cljs.core.logic.run_constraints_STAR_.call(null,vs__457876__auto__,ap__457875__auto__.cs,new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440)).call(null,(new cljs.core.logic.Substitutions(ap__457875__auto__.s,null,ap__457875__auto__.ts,ap__457875__auto__.cs,ap__457875__auto__.cq,ap__457875__auto__.cqs,ap__457875__auto__.oc,ap__457875__auto__._meta)));
} else
{return ap__457875__auto__;
}
} else
{return null;
}
}));
})));
}));
})));
})),(new cljs.core.logic.Inc((function (){return cljs.core.logic._bind.call(null,a467645,(function (a__457906__auto__){return (new cljs.core.logic.Inc((function (){var xs = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"xs","xs",-1640527692,null));var x = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"x","x",-1640531407,null));return cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,a__457906__auto__,(function (a__457873__auto__){var has_cs_QMARK___457874__auto__ = (cljs.core.count.call(null,a__457873__auto__.cs) > 0);var temp__4098__auto__ = cljs.core.logic._unify.call(null,((has_cs_QMARK___457874__auto__)?(new cljs.core.logic.Substitutions(a__457873__auto__.s,cljs.core.PersistentVector.EMPTY,a__457873__auto__.ts,a__457873__auto__.cs,a__457873__auto__.cq,a__457873__auto__.cqs,a__457873__auto__.oc,a__457873__auto__._meta)):a__457873__auto__),cljs.core.logic.lcons.call(null,x,xs),xl);if(cljs.core.truth_(temp__4098__auto__))
{var ap__457875__auto__ = temp__4098__auto__;var vs__457876__auto__ = ((has_cs_QMARK___457874__auto__)?ap__457875__auto__.vs:null);var changed_QMARK___457877__auto__ = (cljs.core.count.call(null,vs__457876__auto__) > 0);if(changed_QMARK___457877__auto__)
{return cljs.core.logic.run_constraints_STAR_.call(null,vs__457876__auto__,ap__457875__auto__.cs,new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440)).call(null,(new cljs.core.logic.Substitutions(ap__457875__auto__.s,null,ap__457875__auto__.ts,ap__457875__auto__.cs,ap__457875__auto__.cq,ap__457875__auto__.cqs,ap__457875__auto__.oc,ap__457875__auto__._meta)));
} else
{return ap__457875__auto__;
}
} else
{return null;
}
})),(function (a__457906__auto____$1){return (new cljs.core.logic.Inc((function (){var ys = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"ys","ys",-1640527661,null));return cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,a__457906__auto____$1,permuteo.call(null,xs,ys)),cljs.core.logic.rembero.call(null,x,yl,ys));
})));
}));
})));
}));
}))));
})));
});
});
cljs.core.logic.INonStorable = (function (){var obj467647 = {};return obj467647;
})();
cljs.core.logic.non_storable_QMARK_ = (function non_storable_QMARK_(x){var G__467649 = x;if(G__467649)
{var bit__7464__auto__ = null;if(cljs.core.truth_((function (){var or__6845__auto__ = bit__7464__auto__;if(cljs.core.truth_(or__6845__auto__))
{return or__6845__auto__;
} else
{return G__467649.cljs$core$logic$INonStorable$;
}
})()))
{return true;
} else
{return false;
}
} else
{return false;
}
});
cljs.core.logic.IUninitialized = (function (){var obj467651 = {};return obj467651;
})();
cljs.core.logic._uninitialized = (function _uninitialized(_){if((function (){var and__6833__auto__ = _;if(and__6833__auto__)
{return _.cljs$core$logic$IUninitialized$_uninitialized$arity$1;
} else
{return and__6833__auto__;
}
})())
{return _.cljs$core$logic$IUninitialized$_uninitialized$arity$1(_);
} else
{var x__7448__auto__ = (((_ == null))?null:_);return (function (){var or__6845__auto__ = (cljs.core.logic._uninitialized[goog.typeOf(x__7448__auto__)]);if(or__6845__auto__)
{return or__6845__auto__;
} else
{var or__6845__auto____$1 = (cljs.core.logic._uninitialized["_"]);if(or__6845__auto____$1)
{return or__6845__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IUninitialized.-uninitialized",_);
}
}
})().call(null,_);
}
});
cljs.core.logic.IUnifyWithPMap = (function (){var obj467653 = {};return obj467653;
})();
cljs.core.logic._unify_with_pmap = (function _unify_with_pmap(v,u,s){if((function (){var and__6833__auto__ = v;if(and__6833__auto__)
{return v.cljs$core$logic$IUnifyWithPMap$_unify_with_pmap$arity$3;
} else
{return and__6833__auto__;
}
})())
{return v.cljs$core$logic$IUnifyWithPMap$_unify_with_pmap$arity$3(v,u,s);
} else
{var x__7448__auto__ = (((v == null))?null:v);return (function (){var or__6845__auto__ = (cljs.core.logic._unify_with_pmap[goog.typeOf(x__7448__auto__)]);if(or__6845__auto__)
{return or__6845__auto__;
} else
{var or__6845__auto____$1 = (cljs.core.logic._unify_with_pmap["_"]);if(or__6845__auto____$1)
{return or__6845__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IUnifyWithPMap.-unify-with-pmap",v);
}
}
})().call(null,v,u,s);
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
cljs.core.logic.PMap.prototype.cljs$core$logic$IUnifyWithPMap$ = true;
cljs.core.logic.PMap.prototype.cljs$core$logic$IUnifyWithPMap$_unify_with_pmap$arity$3 = (function (v,u,s){var self__ = this;
var v__$1 = this;return cljs.core.logic._unify_with_map.call(null,v__$1,u,s);
});
cljs.core.logic.PMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7402__auto__){var self__ = this;
var this__7402__auto____$1 = this;var h__7256__auto__ = self__.__hash;if(!((h__7256__auto__ == null)))
{return h__7256__auto__;
} else
{var h__7256__auto____$1 = cljs.core.hash_imap.call(null,this__7402__auto____$1);self__.__hash = h__7256__auto____$1;
return h__7256__auto____$1;
}
});
cljs.core.logic.PMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7407__auto__,k__7408__auto__){var self__ = this;
var this__7407__auto____$1 = this;return cljs.core._lookup.call(null,this__7407__auto____$1,k__7408__auto__,null);
});
cljs.core.logic.PMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7409__auto__,k467655,else__7410__auto__){var self__ = this;
var this__7409__auto____$1 = this;if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k467655,else__7410__auto__);
} else
{return null;
}
});
cljs.core.logic.PMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7414__auto__,k__7415__auto__,G__467654){var self__ = this;
var this__7414__auto____$1 = this;var pred__467657 = cljs.core.keyword_identical_QMARK_;var expr__467658 = k__7415__auto__;return (new cljs.core.logic.PMap(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7415__auto__,G__467654),null));
});
cljs.core.logic.PMap.prototype.cljs$core$logic$IUnifyWithLVar$ = true;
cljs.core.logic.PMap.prototype.cljs$core$logic$IUnifyWithLVar$_unify_with_lvar$arity$3 = (function (v,u,s){var self__ = this;
var v__$1 = this;return cljs.core.logic._ext_no_check.call(null,s,u,v__$1);
});
cljs.core.logic.PMap.prototype.cljs$core$logic$IUnifyTerms$ = true;
cljs.core.logic.PMap.prototype.cljs$core$logic$IUnifyTerms$_unify_terms$arity$3 = (function (u,v,s){var self__ = this;
var u__$1 = this;if(cljs.core.map_QMARK_.call(null,v))
{return cljs.core.logic._unify_with_pmap.call(null,v,u__$1,s);
} else
{return null;
}
});
cljs.core.logic.PMap.prototype.cljs$core$logic$INonStorable$ = true;
cljs.core.logic.PMap.prototype.cljs$core$logic$IUnifyWithMap$ = true;
cljs.core.logic.PMap.prototype.cljs$core$logic$IUnifyWithMap$_unify_with_map$arity$3 = (function (u,v,s){var self__ = this;
var u__$1 = this;var ks = cljs.core.keys.call(null,u__$1);var s__$1 = s;while(true){
if(cljs.core.seq.call(null,ks))
{var kf = cljs.core.first.call(null,ks);var vf = cljs.core.get.call(null,v,kf,cljs.core.logic.not_found);if((vf === cljs.core.logic.not_found))
{return null;
} else
{var uf = cljs.core.get.call(null,u__$1,kf);var vf__$1 = cljs.core.logic._walk.call(null,s__$1,vf);if(cljs.core.logic.lvar_QMARK_.call(null,vf__$1))
{{
var G__467660 = cljs.core.next.call(null,ks);
var G__467661 = cljs.core.logic.featurec.call(null,vf__$1,uf).call(null,s__$1);
ks = G__467660;
s__$1 = G__467661;
continue;
}
} else
{if(cljs.core.map_QMARK_.call(null,uf))
{var temp__4096__auto__ = cljs.core.logic._unify.call(null,s__$1,cljs.core.logic.partial_map.call(null,uf),vf__$1);if(cljs.core.truth_(temp__4096__auto__))
{var s__$2 = temp__4096__auto__;{
var G__467662 = cljs.core.next.call(null,ks);
var G__467663 = s__$2;
ks = G__467662;
s__$1 = G__467663;
continue;
}
} else
{return null;
}
} else
{var temp__4096__auto__ = cljs.core.logic._unify.call(null,s__$1,uf,vf__$1);if(cljs.core.truth_(temp__4096__auto__))
{var s__$2 = temp__4096__auto__;{
var G__467664 = cljs.core.next.call(null,ks);
var G__467665 = s__$2;
ks = G__467664;
s__$1 = G__467665;
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
cljs.core.logic.PMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7421__auto__,writer__7422__auto__,opts__7423__auto__){var self__ = this;
var this__7421__auto____$1 = this;var pr_pair__7424__auto__ = (function (keyval__7425__auto__){return cljs.core.pr_sequential_writer.call(null,writer__7422__auto__,cljs.core.pr_writer,""," ","",opts__7423__auto__,keyval__7425__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__7422__auto__,pr_pair__7424__auto__,"#cljs.core.logic.PMap{",", ","}",opts__7423__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});
cljs.core.logic.PMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7412__auto__,entry__7413__auto__){var self__ = this;
var this__7412__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__7413__auto__))
{return cljs.core._assoc.call(null,this__7412__auto____$1,cljs.core._nth.call(null,entry__7413__auto__,0),cljs.core._nth.call(null,entry__7413__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__7412__auto____$1,entry__7413__auto__);
}
});
cljs.core.logic.PMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7419__auto__){var self__ = this;
var this__7419__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});
cljs.core.logic.PMap.prototype.cljs$core$logic$IWalkTerm$ = true;
cljs.core.logic.PMap.prototype.cljs$core$logic$IWalkTerm$_walk_term$arity$2 = (function (v,f){var self__ = this;
var v__$1 = this;return cljs.core.logic.walk_term_map_STAR_.call(null,v__$1,f);
});
cljs.core.logic.PMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7411__auto__){var self__ = this;
var this__7411__auto____$1 = this;return (0 + cljs.core.count.call(null,self__.__extmap));
});
cljs.core.logic.PMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7403__auto__,other__7404__auto__){var self__ = this;
var this__7403__auto____$1 = this;if(cljs.core.truth_((function (){var and__6833__auto__ = other__7404__auto__;if(cljs.core.truth_(and__6833__auto__))
{return ((this__7403__auto____$1.constructor === other__7404__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__7403__auto____$1,other__7404__auto__));
} else
{return and__6833__auto__;
}
})()))
{return true;
} else
{return false;
}
});
cljs.core.logic.PMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7406__auto__,G__467654){var self__ = this;
var this__7406__auto____$1 = this;return (new cljs.core.logic.PMap(G__467654,self__.__extmap,self__.__hash));
});
cljs.core.logic.PMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7405__auto__){var self__ = this;
var this__7405__auto____$1 = this;return self__.__meta;
});
cljs.core.logic.PMap.prototype.cljs$core$logic$IUnifyWithRecord$ = true;
cljs.core.logic.PMap.prototype.cljs$core$logic$IUnifyWithRecord$_unify_with_record$arity$3 = (function (u,v,s){var self__ = this;
var u__$1 = this;if(cljs.core.map_QMARK_.call(null,v))
{return cljs.core.logic._unify_with_map.call(null,v,u__$1,s);
} else
{return null;
}
});
cljs.core.logic.PMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7416__auto__,k__7417__auto__){var self__ = this;
var this__7416__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__7417__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7416__auto____$1),self__.__meta),k__7417__auto__);
} else
{return (new cljs.core.logic.PMap(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7417__auto__)),null));
}
});
cljs.core.logic.PMap.prototype.cljs$core$logic$IUninitialized$ = true;
cljs.core.logic.PMap.prototype.cljs$core$logic$IUninitialized$_uninitialized$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.logic.PMap());
});
cljs.core.logic.PMap.cljs$lang$type = true;
cljs.core.logic.PMap.cljs$lang$ctorPrSeq = (function (this__7441__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.core.logic/PMap");
});
cljs.core.logic.PMap.cljs$lang$ctorPrWriter = (function (this__7441__auto__,writer__7442__auto__){return cljs.core._write.call(null,writer__7442__auto__,"cljs.core.logic/PMap");
});
cljs.core.logic.__GT_PMap = (function __GT_PMap(){return (new cljs.core.logic.PMap());
});
cljs.core.logic.map__GT_PMap = (function map__GT_PMap(G__467656){return (new cljs.core.logic.PMap(null,cljs.core.dissoc.call(null,G__467656)));
});
cljs.core.PersistentHashMap.prototype.cljs$core$logic$IUnifyWithPMap$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$logic$IUnifyWithPMap$_unify_with_pmap$arity$3 = (function (v,u,s){var v__$1 = this;return cljs.core.logic._unify_with_map.call(null,u,v__$1,s);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$logic$IUnifyWithPMap$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$logic$IUnifyWithPMap$_unify_with_pmap$arity$3 = (function (v,u,s){var v__$1 = this;return cljs.core.logic._unify_with_map.call(null,u,v__$1,s);
});
cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithPMap$ = true;
cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithPMap$_unify_with_pmap$arity$3 = (function (v,u,s){var v__$1 = this;return cljs.core.logic._ext.call(null,s,v__$1,u);
});
(cljs.core.logic.IUnifyWithPMap["_"] = true);
(cljs.core.logic._unify_with_pmap["_"] = (function (v,u,s){return null;
}));
(cljs.core.logic.IUnifyWithPMap["null"] = true);
(cljs.core.logic._unify_with_pmap["null"] = (function (v,u,s){return null;
}));
/**
* Given map m, returns partial map that unifies with maps even if it
* doesn't share all of the keys of that map.
*/
cljs.core.logic.partial_map = (function partial_map(m){return cljs.core.logic.map__GT_PMap.call(null,m);
});
cljs.core.logic.partial_map_QMARK_ = (function partial_map_QMARK_(x){return (x instanceof cljs.core.logic.PMap);
});
cljs.core.logic.composeg = (function() {
var composeg = null;
var composeg__0 = (function (){return cljs.core.identity;
});
var composeg__2 = (function (g0,g1){return (function (a){var a__$1 = g0.call(null,a);var and__6833__auto__ = a__$1;if(cljs.core.truth_(and__6833__auto__))
{return g1.call(null,a__$1);
} else
{return and__6833__auto__;
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
cljs.core.logic.IFeature = (function (){var obj467667 = {};return obj467667;
})();
cljs.core.logic._feature = (function _feature(x){if((function (){var and__6833__auto__ = x;if(and__6833__auto__)
{return x.cljs$core$logic$IFeature$_feature$arity$1;
} else
{return and__6833__auto__;
}
})())
{return x.cljs$core$logic$IFeature$_feature$arity$1(x);
} else
{var x__7448__auto__ = (((x == null))?null:x);return (function (){var or__6845__auto__ = (cljs.core.logic._feature[goog.typeOf(x__7448__auto__)]);if(or__6845__auto__)
{return or__6845__auto__;
} else
{var or__6845__auto____$1 = (cljs.core.logic._feature["_"]);if(or__6845__auto____$1)
{return or__6845__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFeature.-feature",x);
}
}
})().call(null,x);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$logic$IFeature$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$logic$IFeature$_feature$arity$1 = (function (x){var x__$1 = this;return cljs.core.logic.partial_map.call(null,x__$1);
});
cljs.core.PersistentHashMap.prototype.cljs$core$logic$IFeature$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$logic$IFeature$_feature$arity$1 = (function (x){var x__$1 = this;return cljs.core.logic.partial_map.call(null,x__$1);
});
cljs.core.logic.IConstraintStep = (function (){var obj467669 = {};return obj467669;
})();
cljs.core.logic._step = (function _step(this$,s){if((function (){var and__6833__auto__ = this$;if(and__6833__auto__)
{return this$.cljs$core$logic$IConstraintStep$_step$arity$2;
} else
{return and__6833__auto__;
}
})())
{return this$.cljs$core$logic$IConstraintStep$_step$arity$2(this$,s);
} else
{var x__7448__auto__ = (((this$ == null))?null:this$);return (function (){var or__6845__auto__ = (cljs.core.logic._step[goog.typeOf(x__7448__auto__)]);if(or__6845__auto__)
{return or__6845__auto__;
} else
{var or__6845__auto____$1 = (cljs.core.logic._step["_"]);if(or__6845__auto____$1)
{return or__6845__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IConstraintStep.-step",this$);
}
}
})().call(null,this$,s);
}
});
cljs.core.logic.IRunnable = (function (){var obj467671 = {};return obj467671;
})();
cljs.core.logic._runnable_QMARK_ = (function _runnable_QMARK_(_){if((function (){var and__6833__auto__ = _;if(and__6833__auto__)
{return _.cljs$core$logic$IRunnable$_runnable_QMARK_$arity$1;
} else
{return and__6833__auto__;
}
})())
{return _.cljs$core$logic$IRunnable$_runnable_QMARK_$arity$1(_);
} else
{var x__7448__auto__ = (((_ == null))?null:_);return (function (){var or__6845__auto__ = (cljs.core.logic._runnable_QMARK_[goog.typeOf(x__7448__auto__)]);if(or__6845__auto__)
{return or__6845__auto__;
} else
{var or__6845__auto____$1 = (cljs.core.logic._runnable_QMARK_["_"]);if(or__6845__auto____$1)
{return or__6845__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRunnable.-runnable?",_);
}
}
})().call(null,_);
}
});
cljs.core.logic.IConstraintOp = (function (){var obj467673 = {};return obj467673;
})();
cljs.core.logic._rator = (function _rator(_){if((function (){var and__6833__auto__ = _;if(and__6833__auto__)
{return _.cljs$core$logic$IConstraintOp$_rator$arity$1;
} else
{return and__6833__auto__;
}
})())
{return _.cljs$core$logic$IConstraintOp$_rator$arity$1(_);
} else
{var x__7448__auto__ = (((_ == null))?null:_);return (function (){var or__6845__auto__ = (cljs.core.logic._rator[goog.typeOf(x__7448__auto__)]);if(or__6845__auto__)
{return or__6845__auto__;
} else
{var or__6845__auto____$1 = (cljs.core.logic._rator["_"]);if(or__6845__auto____$1)
{return or__6845__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IConstraintOp.-rator",_);
}
}
})().call(null,_);
}
});
cljs.core.logic._rands = (function _rands(_){if((function (){var and__6833__auto__ = _;if(and__6833__auto__)
{return _.cljs$core$logic$IConstraintOp$_rands$arity$1;
} else
{return and__6833__auto__;
}
})())
{return _.cljs$core$logic$IConstraintOp$_rands$arity$1(_);
} else
{var x__7448__auto__ = (((_ == null))?null:_);return (function (){var or__6845__auto__ = (cljs.core.logic._rands[goog.typeOf(x__7448__auto__)]);if(or__6845__auto__)
{return or__6845__auto__;
} else
{var or__6845__auto____$1 = (cljs.core.logic._rands["_"]);if(or__6845__auto____$1)
{return or__6845__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IConstraintOp.-rands",_);
}
}
})().call(null,_);
}
});
cljs.core.logic.IReifiableConstraint = (function (){var obj467675 = {};return obj467675;
})();
cljs.core.logic._reifyc = (function _reifyc(_,v,r,a){if((function (){var and__6833__auto__ = _;if(and__6833__auto__)
{return _.cljs$core$logic$IReifiableConstraint$_reifyc$arity$4;
} else
{return and__6833__auto__;
}
})())
{return _.cljs$core$logic$IReifiableConstraint$_reifyc$arity$4(_,v,r,a);
} else
{var x__7448__auto__ = (((_ == null))?null:_);return (function (){var or__6845__auto__ = (cljs.core.logic._reifyc[goog.typeOf(x__7448__auto__)]);if(or__6845__auto__)
{return or__6845__auto__;
} else
{var or__6845__auto____$1 = (cljs.core.logic._reifyc["_"]);if(or__6845__auto____$1)
{return or__6845__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IReifiableConstraint.-reifyc",_);
}
}
})().call(null,_,v,r,a);
}
});
cljs.core.logic.reifiable_QMARK_ = (function reifiable_QMARK_(x){var G__467677 = x;if(G__467677)
{var bit__7464__auto__ = null;if(cljs.core.truth_((function (){var or__6845__auto__ = bit__7464__auto__;if(cljs.core.truth_(or__6845__auto__))
{return or__6845__auto__;
} else
{return G__467677.cljs$core$logic$IReifiableConstraint$;
}
})()))
{return true;
} else
{return false;
}
} else
{return false;
}
});
cljs.core.logic.IEnforceableConstraint = (function (){var obj467679 = {};return obj467679;
})();
cljs.core.logic.enforceable_QMARK_ = (function enforceable_QMARK_(x){var G__467681 = x;if(G__467681)
{var bit__7464__auto__ = null;if(cljs.core.truth_((function (){var or__6845__auto__ = bit__7464__auto__;if(cljs.core.truth_(or__6845__auto__))
{return or__6845__auto__;
} else
{return G__467681.cljs$core$logic$IEnforceableConstraint$;
}
})()))
{return true;
} else
{return false;
}
} else
{return false;
}
});
cljs.core.logic.IConstraintWatchedStores = (function (){var obj467683 = {};return obj467683;
})();
cljs.core.logic._watched_stores = (function _watched_stores(_){if((function (){var and__6833__auto__ = _;if(and__6833__auto__)
{return _.cljs$core$logic$IConstraintWatchedStores$_watched_stores$arity$1;
} else
{return and__6833__auto__;
}
})())
{return _.cljs$core$logic$IConstraintWatchedStores$_watched_stores$arity$1(_);
} else
{var x__7448__auto__ = (((_ == null))?null:_);return (function (){var or__6845__auto__ = (cljs.core.logic._watched_stores[goog.typeOf(x__7448__auto__)]);if(or__6845__auto__)
{return or__6845__auto__;
} else
{var or__6845__auto____$1 = (cljs.core.logic._watched_stores["_"]);if(or__6845__auto____$1)
{return or__6845__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IConstraintWatchedStores.-watched-stores",_);
}
}
})().call(null,_);
}
});
cljs.core.logic._featurec = (function _featurec(x,fs){if(typeof cljs.core.logic.t467692 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.t467692 = (function (fs,x,_featurec,meta467693){
this.fs = fs;
this.x = x;
this._featurec = _featurec;
this.meta467693 = meta467693;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.logic.t467692.cljs$lang$type = true;
cljs.core.logic.t467692.cljs$lang$ctorStr = "cljs.core.logic/t467692";
cljs.core.logic.t467692.cljs$lang$ctorPrWriter = (function (this__7389__auto__,writer__7390__auto__,opt__7391__auto__){return cljs.core._write.call(null,writer__7390__auto__,"cljs.core.logic/t467692");
});
cljs.core.logic.t467692.prototype.cljs$core$logic$IConstraintWatchedStores$ = true;
cljs.core.logic.t467692.prototype.cljs$core$logic$IConstraintWatchedStores$_watched_stores$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440),null], null), null);
});
cljs.core.logic.t467692.prototype.cljs$core$logic$IReifiableConstraint$ = true;
cljs.core.logic.t467692.prototype.cljs$core$logic$IReifiableConstraint$_reifyc$arity$4 = (function (_,v,r,a){var self__ = this;
var ___$1 = this;if(!(cljs.core.logic.lvar_QMARK_.call(null,self__.fs)))
{var fs__$2 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,self__.fs);var r__$1 = cljs.core.logic._reify_STAR_.call(null,r,cljs.core.logic._walk_STAR_.call(null,a,fs__$2));return cljs.core.with_meta.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic","featurec","cljs.core.logic/featurec",-851976461,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,1338),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,13),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,1338),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,21)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.logic._walk_STAR_.call(null,r__$1,self__.x)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.logic._walk_STAR_.call(null,r__$1,fs__$2)))),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,1338),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,12),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,1338),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,51)))));
} else
{var vec__467695 = cljs.core.logic._reify.call(null,a,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.x,self__.fs], null),r);var x__$2 = cljs.core.nth.call(null,vec__467695,0,null);var fs__$2 = cljs.core.nth.call(null,vec__467695,1,null);return cljs.core.with_meta.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic","featurec","cljs.core.logic/featurec",-851976461,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,1340),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,13),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,1340),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,21)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,x__$2),cljs.core._conj.call(null,cljs.core.List.EMPTY,fs__$2))),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,1340),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,12),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,1340),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,29)))));
}
});
cljs.core.logic.t467692.prototype.cljs$core$logic$IConstraintOp$ = true;
cljs.core.logic.t467692.prototype.cljs$core$logic$IConstraintOp$_rator$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic","featurec","cljs.core.logic/featurec",-851976461,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,1331),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,18),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,1331),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,42)))));
});
cljs.core.logic.t467692.prototype.cljs$core$logic$IConstraintOp$_rands$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.x], null);
});
cljs.core.logic.t467692.prototype.cljs$core$logic$IConstraintStep$ = true;
cljs.core.logic.t467692.prototype.cljs$core$logic$IConstraintStep$_step$arity$2 = (function (this$,s){var self__ = this;
var this$__$1 = this;if(typeof cljs.core.logic.t467696 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.t467696 = (function (s,this$,meta467693,fs,x,_featurec,meta467697){
this.s = s;
this.this$ = this$;
this.meta467693 = meta467693;
this.fs = fs;
this.x = x;
this._featurec = _featurec;
this.meta467697 = meta467697;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.logic.t467696.cljs$lang$type = true;
cljs.core.logic.t467696.cljs$lang$ctorStr = "cljs.core.logic/t467696";
cljs.core.logic.t467696.cljs$lang$ctorPrWriter = (function (this__7389__auto__,writer__7390__auto__,opt__7391__auto__){return cljs.core._write.call(null,writer__7390__auto__,"cljs.core.logic/t467696");
});
cljs.core.logic.t467696.prototype.cljs$core$logic$IRunnable$ = true;
cljs.core.logic.t467696.prototype.cljs$core$logic$IRunnable$_runnable_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (!(cljs.core.logic.lvar_QMARK_.call(null,cljs.core.logic._walk.call(null,self__.s,self__.x)))) && (!(cljs.core.logic.lvar_QMARK_.call(null,cljs.core.logic._walk.call(null,self__.s,self__.fs))));
});
cljs.core.logic.t467696.prototype.call = (function (self__,s__$2){var self__ = this;
var self____$1 = this;var _ = self____$1;var fs__$3 = cljs.core.logic._walk.call(null,s__$2,self__.fs);return cljs.core.logic.composeg.call(null,(function (a__457873__auto__){var has_cs_QMARK___457874__auto__ = (cljs.core.count.call(null,a__457873__auto__.cs) > 0);var temp__4098__auto__ = cljs.core.logic._unify.call(null,((has_cs_QMARK___457874__auto__)?(new cljs.core.logic.Substitutions(a__457873__auto__.s,cljs.core.PersistentVector.EMPTY,a__457873__auto__.ts,a__457873__auto__.cs,a__457873__auto__.cq,a__457873__auto__.cqs,a__457873__auto__.oc,a__457873__auto__._meta)):a__457873__auto__),cljs.core.logic.partial_map.call(null,fs__$3),self__.x);if(cljs.core.truth_(temp__4098__auto__))
{var ap__457875__auto__ = temp__4098__auto__;var vs__457876__auto__ = ((has_cs_QMARK___457874__auto__)?ap__457875__auto__.vs:null);var changed_QMARK___457877__auto__ = (cljs.core.count.call(null,vs__457876__auto__) > 0);if(changed_QMARK___457877__auto__)
{return cljs.core.logic.run_constraints_STAR_.call(null,vs__457876__auto__,ap__457875__auto__.cs,new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440)).call(null,(new cljs.core.logic.Substitutions(ap__457875__auto__.s,null,ap__457875__auto__.ts,ap__457875__auto__.cs,ap__457875__auto__.cq,ap__457875__auto__.cqs,ap__457875__auto__.oc,ap__457875__auto__._meta)));
} else
{return ap__457875__auto__;
}
} else
{return null;
}
}),cljs.core.logic.remcg.call(null,self__.this$)).call(null,s__$2);
});
cljs.core.logic.t467696.prototype.apply = (function (self__,args467699){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args467699)));
});
cljs.core.logic.t467696.prototype.cljs$core$IFn$_invoke$arity$1 = (function (s__$2){var self__ = this;
var _ = this;var fs__$3 = cljs.core.logic._walk.call(null,s__$2,self__.fs);return cljs.core.logic.composeg.call(null,(function (a__457873__auto__){var has_cs_QMARK___457874__auto__ = (cljs.core.count.call(null,a__457873__auto__.cs) > 0);var temp__4098__auto__ = cljs.core.logic._unify.call(null,((has_cs_QMARK___457874__auto__)?(new cljs.core.logic.Substitutions(a__457873__auto__.s,cljs.core.PersistentVector.EMPTY,a__457873__auto__.ts,a__457873__auto__.cs,a__457873__auto__.cq,a__457873__auto__.cqs,a__457873__auto__.oc,a__457873__auto__._meta)):a__457873__auto__),cljs.core.logic.partial_map.call(null,fs__$3),self__.x);if(cljs.core.truth_(temp__4098__auto__))
{var ap__457875__auto__ = temp__4098__auto__;var vs__457876__auto__ = ((has_cs_QMARK___457874__auto__)?ap__457875__auto__.vs:null);var changed_QMARK___457877__auto__ = (cljs.core.count.call(null,vs__457876__auto__) > 0);if(changed_QMARK___457877__auto__)
{return cljs.core.logic.run_constraints_STAR_.call(null,vs__457876__auto__,ap__457875__auto__.cs,new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440)).call(null,(new cljs.core.logic.Substitutions(ap__457875__auto__.s,null,ap__457875__auto__.ts,ap__457875__auto__.cs,ap__457875__auto__.cq,ap__457875__auto__.cqs,ap__457875__auto__.oc,ap__457875__auto__._meta)));
} else
{return ap__457875__auto__;
}
} else
{return null;
}
}),cljs.core.logic.remcg.call(null,self__.this$)).call(null,s__$2);
});
cljs.core.logic.t467696.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_467698){var self__ = this;
var _467698__$1 = this;return self__.meta467697;
});
cljs.core.logic.t467696.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_467698,meta467697__$1){var self__ = this;
var _467698__$1 = this;return (new cljs.core.logic.t467696(self__.s,self__.this$,self__.meta467693,self__.fs,self__.x,self__._featurec,meta467697__$1));
});
cljs.core.logic.__GT_t467696 = (function __GT_t467696(s__$1,this$__$2,meta467693__$1,fs__$2,x__$2,_featurec__$2,meta467697){return (new cljs.core.logic.t467696(s__$1,this$__$2,meta467693__$1,fs__$2,x__$2,_featurec__$2,meta467697));
});
}
return (new cljs.core.logic.t467696(s,this$__$1,self__.meta467693,self__.fs,self__.x,self__._featurec,null));
});
cljs.core.logic.t467692.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_467694){var self__ = this;
var _467694__$1 = this;return self__.meta467693;
});
cljs.core.logic.t467692.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_467694,meta467693__$1){var self__ = this;
var _467694__$1 = this;return (new cljs.core.logic.t467692(self__.fs,self__.x,self__._featurec,meta467693__$1));
});
cljs.core.logic.__GT_t467692 = (function __GT_t467692(fs__$1,x__$1,_featurec__$1,meta467693){return (new cljs.core.logic.t467692(fs__$1,x__$1,_featurec__$1,meta467693));
});
}
return (new cljs.core.logic.t467692(fs,x,_featurec,null));
});
/**
* Ensure that a map contains at least the key-value pairs
* in the map fs. fs must be partially instantiated - that is,
* it may contain values which are logic variables to support
* feature extraction.
*/
cljs.core.logic.featurec = (function featurec(x,fs){return cljs.core.logic.cgoal.call(null,cljs.core.logic._featurec.call(null,x,fs));
});
cljs.core.logic.build = (function build(s,u){return cljs.core.logic._build_term.call(null,u,s);
});
cljs.core.logic.add_attr = (function add_attr(s,x,attr,attrv){var x__$1 = cljs.core.logic._root_var.call(null,s,x);var v = cljs.core.logic._root_val.call(null,s,x__$1);if(cljs.core.logic.subst_val_QMARK_.call(null,v))
{return cljs.core.logic._update_var.call(null,s,x__$1,cljs.core.logic.assoc_meta.call(null,v,attr,attrv));
} else
{var v__$1 = (cljs.core.truth_(cljs.core.logic.lvar_QMARK_.call(null,v))?new cljs.core.Keyword("cljs.core.logic","unbound","cljs.core.logic/unbound",1803671316):v);return cljs.core.logic._ext_no_check.call(null,s,x__$1,cljs.core.with_meta.call(null,cljs.core.logic.subst_val.call(null,v__$1),new cljs.core.PersistentArrayMap.fromArray([attr,attrv], true, false)));
}
});
cljs.core.logic.rem_attr = (function rem_attr(s,x,attr){var x__$1 = cljs.core.logic._root_var.call(null,s,x);var v = cljs.core.logic._root_val.call(null,s,x__$1);if(cljs.core.logic.subst_val_QMARK_.call(null,v))
{var new_meta = cljs.core.dissoc.call(null,cljs.core.meta.call(null,v),attr);if(((cljs.core.count.call(null,new_meta) === 0)) && (!(cljs.core.keyword_identical_QMARK_.call(null,v.v,new cljs.core.Keyword("cljs.core.logic","unbound","cljs.core.logic/unbound",1803671316)))))
{return cljs.core.logic._update_var.call(null,s,x__$1,v.v);
} else
{return cljs.core.logic._update_var.call(null,s,x__$1,cljs.core.with_meta.call(null,v,new_meta));
}
} else
{return s;
}
});
cljs.core.logic.get_attr = (function get_attr(s,x,attr){var v = cljs.core.logic._root_val.call(null,s,x);if(cljs.core.logic.subst_val_QMARK_.call(null,v))
{return attr.call(null,cljs.core.meta.call(null,v));
} else
{return null;
}
});
cljs.core.logic.sync_eset = (function sync_eset(s,v,seenset,f){if(!(cljs.core.keyword_identical_QMARK_.call(null,seenset,new cljs.core.Keyword("cljs.core.logic","no-prop","cljs.core.logic/no-prop",1476398058))))
{return cljs.core.reduce.call(null,(function (s__$1,y){var y__$1 = cljs.core.logic._root_var.call(null,s__$1,y);if(!(cljs.core.contains_QMARK_.call(null,seenset,y__$1)))
{return f.call(null,s__$1,y__$1);
} else
{return s__$1;
}
}),s,v.eset);
} else
{return s;
}
});
cljs.core.logic.IMergeDomains = (function (){var obj467701 = {};return obj467701;
})();
cljs.core.logic._merge_doms = (function _merge_doms(a,b){if((function (){var and__6833__auto__ = a;if(and__6833__auto__)
{return a.cljs$core$logic$IMergeDomains$_merge_doms$arity$2;
} else
{return and__6833__auto__;
}
})())
{return a.cljs$core$logic$IMergeDomains$_merge_doms$arity$2(a,b);
} else
{var x__7448__auto__ = (((a == null))?null:a);return (function (){var or__6845__auto__ = (cljs.core.logic._merge_doms[goog.typeOf(x__7448__auto__)]);if(or__6845__auto__)
{return or__6845__auto__;
} else
{var or__6845__auto____$1 = (cljs.core.logic._merge_doms["_"]);if(or__6845__auto____$1)
{return or__6845__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMergeDomains.-merge-doms",a);
}
}
})().call(null,a,b);
}
});
cljs.core.logic.add_dom = (function() {
var add_dom = null;
var add_dom__4 = (function (s,x,dom,domv){var x__$1 = cljs.core.logic._root_var.call(null,s,x);return add_dom.call(null,s,x__$1,dom,domv,null);
});
var add_dom__5 = (function (s,x,dom,domv,seenset){var v = cljs.core.logic._root_val.call(null,s,x);var s__$1 = ((cljs.core.logic.subst_val_QMARK_.call(null,v))?cljs.core.logic._update_var.call(null,s,x,cljs.core.logic.assoc_dom.call(null,v,dom,domv)):(function (){var v__$1 = (cljs.core.truth_(cljs.core.logic.lvar_QMARK_.call(null,v))?new cljs.core.Keyword("cljs.core.logic","unbound","cljs.core.logic/unbound",1803671316):v);return cljs.core.logic._ext_no_check.call(null,s,x,cljs.core.logic.subst_val.call(null,v__$1,new cljs.core.PersistentArrayMap.fromArray([dom,domv], true, false)));
})());return cljs.core.logic.sync_eset.call(null,s__$1,v,seenset,(function (s__$2,y){return add_dom.call(null,s__$2,y,dom,domv,cljs.core.conj.call(null,(function (){var or__6845__auto__ = seenset;if(cljs.core.truth_(or__6845__auto__))
{return or__6845__auto__;
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
var update_dom__4 = (function (s,x,dom,f){var x__$1 = cljs.core.logic._root_var.call(null,s,x);return update_dom.call(null,s,x__$1,dom,f,null);
});
var update_dom__5 = (function (s,x,dom,f,seenset){var v = cljs.core.logic._root_val.call(null,s,x);var v__$1 = (cljs.core.truth_(cljs.core.logic.lvar_QMARK_.call(null,v))?cljs.core.logic.subst_val.call(null,new cljs.core.Keyword("cljs.core.logic","unbound","cljs.core.logic/unbound",1803671316)):v);var doms = v__$1.doms;var s__$1 = cljs.core.logic._update_var.call(null,s,x,cljs.core.logic.assoc_dom.call(null,v__$1,dom,f.call(null,cljs.core.get.call(null,doms,dom))));return cljs.core.logic.sync_eset.call(null,s__$1,v__$1,seenset,(function (s__$2,y){return update_dom.call(null,s__$2,y,dom,f,cljs.core.conj.call(null,(function (){var or__6845__auto__ = seenset;if(cljs.core.truth_(or__6845__auto__))
{return or__6845__auto__;
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
var rem_dom__3 = (function (s,x,dom){var x__$1 = cljs.core.logic._root_var.call(null,s,x);return rem_dom.call(null,s,x__$1,dom,null);
});
var rem_dom__4 = (function (s,x,dom,seenset){var v = cljs.core.logic._root_val.call(null,s,x);var s__$1 = ((cljs.core.logic.subst_val_QMARK_.call(null,v))?(function (){var new_doms = cljs.core.dissoc.call(null,v.doms,dom);if(((cljs.core.count.call(null,new_doms) === 0)) && (!(cljs.core.keyword_identical_QMARK_.call(null,v.v,new cljs.core.Keyword("cljs.core.logic","unbound","cljs.core.logic/unbound",1803671316)))))
{return cljs.core.logic._update_var.call(null,s,x,v.v);
} else
{return cljs.core.logic._update_var.call(null,s,x,cljs.core.logic.subst_val.call(null,v.v,new_doms,v.eset,cljs.core.meta.call(null,v)));
}
})():s);return cljs.core.logic.sync_eset.call(null,s__$1,v,seenset,(function (s__$2,y){return rem_dom.call(null,s__$2,y,dom,cljs.core.conj.call(null,(function (){var or__6845__auto__ = seenset;if(cljs.core.truth_(or__6845__auto__))
{return or__6845__auto__;
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
cljs.core.logic.get_dom = (function get_dom(s,x,dom){var v = cljs.core.logic._root_val.call(null,s,x);if(cljs.core.logic.subst_val_QMARK_.call(null,v))
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
cljs.core.logic.empty_f = (function empty_f(){return null;
});
cljs.core.logic.annotate = (function annotate(k,v){return (function (a){return cljs.core.vary_meta.call(null,a,cljs.core.assoc,k,v);
});
});
cljs.core.logic.merge_doms = (function merge_doms(s,x,doms){var xdoms = cljs.core.logic._root_val.call(null,s,x).doms;var doms__$1 = cljs.core.seq.call(null,doms);var s__$1 = s;while(true){
if(cljs.core.truth_(doms__$1))
{var vec__467703 = cljs.core.first.call(null,doms__$1);var dom = cljs.core.nth.call(null,vec__467703,0,null);var domv = cljs.core.nth.call(null,vec__467703,1,null);var xdomv = cljs.core.get.call(null,xdoms,dom,cljs.core.logic.not_found);var ndomv = (((xdomv === cljs.core.logic.not_found))?domv:cljs.core.logic._merge_doms.call(null,domv,xdomv));if(cljs.core.truth_(ndomv))
{{
var G__467704 = cljs.core.next.call(null,doms__$1);
var G__467705 = cljs.core.logic.add_dom.call(null,s__$1,x,dom,ndomv,cljs.core.PersistentHashSet.EMPTY);
doms__$1 = G__467704;
s__$1 = G__467705;
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
if(cljs.core.truth_(eset__$1))
{var temp__4098__auto__ = cljs.core.logic.merge_doms.call(null,s__$1,cljs.core.logic._root_var.call(null,s__$1,cljs.core.first.call(null,eset__$1)),doms);if(cljs.core.truth_(temp__4098__auto__))
{var s__$2 = temp__4098__auto__;{
var G__467706 = cljs.core.next.call(null,eset__$1);
var G__467707 = s__$2;
eset__$1 = G__467706;
s__$1 = G__467707;
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
cljs.core.logic.merge_with_root = (function merge_with_root(s,x,root){var xv = cljs.core.logic._root_val.call(null,s,x);var rootv = cljs.core.logic._root_val.call(null,s,root);var eset = clojure.set.union.call(null,rootv.eset,xv.eset);var doms = (function (){var xd = cljs.core.seq.call(null,xv.doms);var rd = rootv.doms;var r = cljs.core.PersistentArrayMap.EMPTY;while(true){
if(cljs.core.truth_(xd))
{var vec__467710 = cljs.core.first.call(null,xd);var xk = cljs.core.nth.call(null,vec__467710,0,null);var xv__$1 = cljs.core.nth.call(null,vec__467710,1,null);var temp__4096__auto__ = cljs.core.find.call(null,rd,xk);if(cljs.core.truth_(temp__4096__auto__))
{var vec__467711 = temp__4096__auto__;var _ = cljs.core.nth.call(null,vec__467711,0,null);var rv = cljs.core.nth.call(null,vec__467711,1,null);var nd = cljs.core.logic._merge_doms.call(null,xv__$1,rv);if(cljs.core.truth_(nd))
{{
var G__467712 = cljs.core.next.call(null,xd);
var G__467713 = cljs.core.dissoc.call(null,rd,xk);
var G__467714 = cljs.core.assoc.call(null,r,xk,nd);
xd = G__467712;
rd = G__467713;
r = G__467714;
continue;
}
} else
{return null;
}
} else
{{
var G__467715 = cljs.core.next.call(null,xd);
var G__467716 = rd;
var G__467717 = cljs.core.assoc.call(null,r,xk,xv__$1);
xd = G__467715;
rd = G__467716;
r = G__467717;
continue;
}
}
} else
{return cljs.core.merge.call(null,r,rd);
}
break;
}
})();var nv = (cljs.core.truth_(doms)?cljs.core.logic.subst_val.call(null,rootv.v,doms,eset,cljs.core.merge.call(null,cljs.core.meta.call(null,xv),cljs.core.meta.call(null,rootv))):null);if(cljs.core.truth_(nv))
{return cljs.core.logic.update_eset.call(null,cljs.core.logic._ext_no_check.call(null,s,root,nv),doms,eset);
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
cljs.core.logic.entangle = (function entangle(s,x,y){var x__$1 = cljs.core.logic._root_var.call(null,s,x);var y__$1 = cljs.core.logic._root_var.call(null,s,y);var xv = cljs.core.logic.to_subst_val.call(null,cljs.core.logic._root_val.call(null,s,x__$1));var yv = cljs.core.logic.to_subst_val.call(null,cljs.core.logic._root_val.call(null,s,y__$1));return cljs.core.logic._update_var.call(null,cljs.core.logic._update_var.call(null,s,x__$1,(new cljs.core.logic.SubstValue(xv.v,xv.doms,cljs.core.conj.call(null,(function (){var or__6845__auto__ = xv.eset;if(cljs.core.truth_(or__6845__auto__))
{return or__6845__auto__;
} else
{return cljs.core.PersistentHashSet.EMPTY;
}
})(),y__$1)))),y__$1,(new cljs.core.logic.SubstValue(yv.v,yv.doms,cljs.core.conj.call(null,(function (){var or__6845__auto__ = yv.eset;if(cljs.core.truth_(or__6845__auto__))
{return or__6845__auto__;
} else
{return cljs.core.PersistentHashSet.EMPTY;
}
})(),x__$1))));
});
cljs.core.logic.ext_run_csg = (function ext_run_csg(u,v){return (function (a){return cljs.core.logic._ext_run_cs.call(null,a,u,v);
});
});
cljs.core.logic.solutions = (function() {
var solutions = null;
var solutions__2 = (function (s,g){return solutions.call(null,s,cljs.core.logic.lvar.call(null),g);
});
var solutions__3 = (function (s,q,g){return cljs.core.logic._take_STAR_.call(null,(function (a__457967__auto__){return cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,a__457967__auto__,g),cljs.core.logic.reifyg.call(null,q));
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
cljs.core.logic.to_stream = (function to_stream(aseq){var aseq__$1 = cljs.core.drop_while.call(null,cljs.core.nil_QMARK_,aseq);if(cljs.core.seq.call(null,aseq__$1))
{return cljs.core.logic.choice.call(null,cljs.core.first.call(null,aseq__$1),(function (){return to_stream.call(null,cljs.core.next.call(null,aseq__$1));
}));
} else
{return null;
}
});
cljs.core.logic.IAnswerCache = (function (){var obj467719 = {};return obj467719;
})();
cljs.core.logic._add = (function _add(this$,x){if((function (){var and__6833__auto__ = this$;if(and__6833__auto__)
{return this$.cljs$core$logic$IAnswerCache$_add$arity$2;
} else
{return and__6833__auto__;
}
})())
{return this$.cljs$core$logic$IAnswerCache$_add$arity$2(this$,x);
} else
{var x__7448__auto__ = (((this$ == null))?null:this$);return (function (){var or__6845__auto__ = (cljs.core.logic._add[goog.typeOf(x__7448__auto__)]);if(or__6845__auto__)
{return or__6845__auto__;
} else
{var or__6845__auto____$1 = (cljs.core.logic._add["_"]);if(or__6845__auto____$1)
{return or__6845__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IAnswerCache.-add",this$);
}
}
})().call(null,this$,x);
}
});
cljs.core.logic._cached_QMARK_ = (function _cached_QMARK_(this$,x){if((function (){var and__6833__auto__ = this$;if(and__6833__auto__)
{return this$.cljs$core$logic$IAnswerCache$_cached_QMARK_$arity$2;
} else
{return and__6833__auto__;
}
})())
{return this$.cljs$core$logic$IAnswerCache$_cached_QMARK_$arity$2(this$,x);
} else
{var x__7448__auto__ = (((this$ == null))?null:this$);return (function (){var or__6845__auto__ = (cljs.core.logic._cached_QMARK_[goog.typeOf(x__7448__auto__)]);if(or__6845__auto__)
{return or__6845__auto__;
} else
{var or__6845__auto____$1 = (cljs.core.logic._cached_QMARK_["_"]);if(or__6845__auto____$1)
{return or__6845__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IAnswerCache.-cached?",this$);
}
}
})().call(null,this$,x);
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
this.cljs$lang$protocol_mask$partition0$ = 2147876864;
})
cljs.core.logic.AnswerCache.cljs$lang$type = true;
cljs.core.logic.AnswerCache.cljs$lang$ctorStr = "cljs.core.logic/AnswerCache";
cljs.core.logic.AnswerCache.cljs$lang$ctorPrWriter = (function (this__7389__auto__,writer__7390__auto__,opt__7391__auto__){return cljs.core._write.call(null,writer__7390__auto__,"cljs.core.logic/AnswerCache");
});
cljs.core.logic.AnswerCache.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (x,writer,opts){var self__ = this;
var x__$1 = this;return cljs.core._write.call(null,writer,[cljs.core.str(x__$1)].join(''));
});
cljs.core.logic.AnswerCache.prototype.cljs$core$logic$IAnswerCache$ = true;
cljs.core.logic.AnswerCache.prototype.cljs$core$logic$IAnswerCache$_add$arity$2 = (function (this$,x){var self__ = this;
var this$__$1 = this;return (new cljs.core.logic.AnswerCache(cljs.core.conj.call(null,self__.ansl,x),cljs.core.conj.call(null,self__.anss,x),self__._meta));
});
cljs.core.logic.AnswerCache.prototype.cljs$core$logic$IAnswerCache$_cached_QMARK_$arity$2 = (function (_,x){var self__ = this;
var ___$1 = this;return cljs.core.contains_QMARK_.call(null,self__.anss,x);
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
cljs.core.logic.ISuspendedStream = (function (){var obj467721 = {};return obj467721;
})();
cljs.core.logic._ready_QMARK_ = (function _ready_QMARK_(this$){if((function (){var and__6833__auto__ = this$;if(and__6833__auto__)
{return this$.cljs$core$logic$ISuspendedStream$_ready_QMARK_$arity$1;
} else
{return and__6833__auto__;
}
})())
{return this$.cljs$core$logic$ISuspendedStream$_ready_QMARK_$arity$1(this$);
} else
{var x__7448__auto__ = (((this$ == null))?null:this$);return (function (){var or__6845__auto__ = (cljs.core.logic._ready_QMARK_[goog.typeOf(x__7448__auto__)]);if(or__6845__auto__)
{return or__6845__auto__;
} else
{var or__6845__auto____$1 = (cljs.core.logic._ready_QMARK_["_"]);if(or__6845__auto____$1)
{return or__6845__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISuspendedStream.-ready?",this$);
}
}
})().call(null,this$);
}
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
cljs.core.logic.SuspendedStream.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7402__auto__){var self__ = this;
var this__7402__auto____$1 = this;var h__7256__auto__ = self__.__hash;if(!((h__7256__auto__ == null)))
{return h__7256__auto__;
} else
{var h__7256__auto____$1 = cljs.core.hash_imap.call(null,this__7402__auto____$1);self__.__hash = h__7256__auto____$1;
return h__7256__auto____$1;
}
});
cljs.core.logic.SuspendedStream.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7407__auto__,k__7408__auto__){var self__ = this;
var this__7407__auto____$1 = this;return cljs.core._lookup.call(null,this__7407__auto____$1,k__7408__auto__,null);
});
cljs.core.logic.SuspendedStream.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7409__auto__,k467723,else__7410__auto__){var self__ = this;
var this__7409__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k467723,new cljs.core.Keyword(null,"cache","cache",1108321012)))
{return self__.cache;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k467723,new cljs.core.Keyword(null,"ansv*","ansv*",1106877004)))
{return self__.ansv_STAR_;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k467723,new cljs.core.Keyword(null,"f","f",1013904344)))
{return self__.f;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k467723,else__7410__auto__);
} else
{return null;
}
}
}
}
});
cljs.core.logic.SuspendedStream.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7414__auto__,k__7415__auto__,G__467722){var self__ = this;
var this__7414__auto____$1 = this;var pred__467725 = cljs.core.keyword_identical_QMARK_;var expr__467726 = k__7415__auto__;if(cljs.core.truth_(pred__467725.call(null,new cljs.core.Keyword(null,"cache","cache",1108321012),expr__467726)))
{return (new cljs.core.logic.SuspendedStream(G__467722,self__.ansv_STAR_,self__.f,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__467725.call(null,new cljs.core.Keyword(null,"ansv*","ansv*",1106877004),expr__467726)))
{return (new cljs.core.logic.SuspendedStream(self__.cache,G__467722,self__.f,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__467725.call(null,new cljs.core.Keyword(null,"f","f",1013904344),expr__467726)))
{return (new cljs.core.logic.SuspendedStream(self__.cache,self__.ansv_STAR_,G__467722,self__.__meta,self__.__extmap,null));
} else
{return (new cljs.core.logic.SuspendedStream(self__.cache,self__.ansv_STAR_,self__.f,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7415__auto__,G__467722),null));
}
}
}
});
cljs.core.logic.SuspendedStream.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7421__auto__,writer__7422__auto__,opts__7423__auto__){var self__ = this;
var this__7421__auto____$1 = this;var pr_pair__7424__auto__ = (function (keyval__7425__auto__){return cljs.core.pr_sequential_writer.call(null,writer__7422__auto__,cljs.core.pr_writer,""," ","",opts__7423__auto__,keyval__7425__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__7422__auto__,pr_pair__7424__auto__,"#cljs.core.logic.SuspendedStream{",", ","}",opts__7423__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cache","cache",1108321012),self__.cache],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ansv*","ansv*",1106877004),self__.ansv_STAR_],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"f","f",1013904344),self__.f],null))], null),self__.__extmap));
});
cljs.core.logic.SuspendedStream.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7412__auto__,entry__7413__auto__){var self__ = this;
var this__7412__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__7413__auto__))
{return cljs.core._assoc.call(null,this__7412__auto____$1,cljs.core._nth.call(null,entry__7413__auto__,0),cljs.core._nth.call(null,entry__7413__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__7412__auto____$1,entry__7413__auto__);
}
});
cljs.core.logic.SuspendedStream.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7419__auto__){var self__ = this;
var this__7419__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cache","cache",1108321012),self__.cache],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ansv*","ansv*",1106877004),self__.ansv_STAR_],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"f","f",1013904344),self__.f],null))], null),self__.__extmap));
});
cljs.core.logic.SuspendedStream.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7411__auto__){var self__ = this;
var this__7411__auto____$1 = this;return (3 + cljs.core.count.call(null,self__.__extmap));
});
cljs.core.logic.SuspendedStream.prototype.cljs$core$logic$ISuspendedStream$ = true;
cljs.core.logic.SuspendedStream.prototype.cljs$core$logic$ISuspendedStream$_ready_QMARK_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return !((cljs.core.deref.call(null,self__.cache).ansl === self__.ansv_STAR_));
});
cljs.core.logic.SuspendedStream.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7403__auto__,other__7404__auto__){var self__ = this;
var this__7403__auto____$1 = this;if(cljs.core.truth_((function (){var and__6833__auto__ = other__7404__auto__;if(cljs.core.truth_(and__6833__auto__))
{return ((this__7403__auto____$1.constructor === other__7404__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__7403__auto____$1,other__7404__auto__));
} else
{return and__6833__auto__;
}
})()))
{return true;
} else
{return false;
}
});
cljs.core.logic.SuspendedStream.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7406__auto__,G__467722){var self__ = this;
var this__7406__auto____$1 = this;return (new cljs.core.logic.SuspendedStream(self__.cache,self__.ansv_STAR_,self__.f,G__467722,self__.__extmap,self__.__hash));
});
cljs.core.logic.SuspendedStream.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7405__auto__){var self__ = this;
var this__7405__auto____$1 = this;return self__.__meta;
});
cljs.core.logic.SuspendedStream.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7416__auto__,k__7417__auto__){var self__ = this;
var this__7416__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"f","f",1013904344),null,new cljs.core.Keyword(null,"ansv*","ansv*",1106877004),null,new cljs.core.Keyword(null,"cache","cache",1108321012),null], null), null),k__7417__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7416__auto____$1),self__.__meta),k__7417__auto__);
} else
{return (new cljs.core.logic.SuspendedStream(self__.cache,self__.ansv_STAR_,self__.f,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7417__auto__)),null));
}
});
cljs.core.logic.SuspendedStream.cljs$lang$type = true;
cljs.core.logic.SuspendedStream.cljs$lang$ctorPrSeq = (function (this__7441__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.core.logic/SuspendedStream");
});
cljs.core.logic.SuspendedStream.cljs$lang$ctorPrWriter = (function (this__7441__auto__,writer__7442__auto__){return cljs.core._write.call(null,writer__7442__auto__,"cljs.core.logic/SuspendedStream");
});
cljs.core.logic.__GT_SuspendedStream = (function __GT_SuspendedStream(cache,ansv_STAR_,f){return (new cljs.core.logic.SuspendedStream(cache,ansv_STAR_,f));
});
cljs.core.logic.map__GT_SuspendedStream = (function map__GT_SuspendedStream(G__467724){return (new cljs.core.logic.SuspendedStream(new cljs.core.Keyword(null,"cache","cache",1108321012).cljs$core$IFn$_invoke$arity$1(G__467724),new cljs.core.Keyword(null,"ansv*","ansv*",1106877004).cljs$core$IFn$_invoke$arity$1(G__467724),new cljs.core.Keyword(null,"f","f",1013904344).cljs$core$IFn$_invoke$arity$1(G__467724),null,cljs.core.dissoc.call(null,G__467724,new cljs.core.Keyword(null,"cache","cache",1108321012),new cljs.core.Keyword(null,"ansv*","ansv*",1106877004),new cljs.core.Keyword(null,"f","f",1013904344))));
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
{if(cljs.core.truth_(cljs.core.logic._ready_QMARK_.call(null,cljs.core.first.call(null,w__$1))))
{return success_cont.call(null,((function (w__$1,a){
return (function (){var ss = cljs.core.first.call(null,w__$1);var f = ss.f;var w__$2 = cljs.core.into.call(null,a,cljs.core.next.call(null,w__$1));if(cljs.core.empty_QMARK_.call(null,w__$2))
{return f.call(null);
} else
{return cljs.core.logic._mplus.call(null,f.call(null),((function (w__$1,a,ss,f,w__$2){
return (function (){return w__$2;
});})(w__$1,a,ss,f,w__$2))
);
}
});})(w__$1,a))
);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__467728 = cljs.core.next.call(null,w__$1);
var G__467729 = cljs.core.conj.call(null,a,cljs.core.first.call(null,w__$1));
w__$1 = G__467728;
a = G__467729;
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
cljs.core.logic.ITabled = (function (){var obj467731 = {};return obj467731;
})();
cljs.core.logic._reify_tabled = (function _reify_tabled(s,v){if((function (){var and__6833__auto__ = s;if(and__6833__auto__)
{return s.cljs$core$logic$ITabled$_reify_tabled$arity$2;
} else
{return and__6833__auto__;
}
})())
{return s.cljs$core$logic$ITabled$_reify_tabled$arity$2(s,v);
} else
{var x__7448__auto__ = (((s == null))?null:s);return (function (){var or__6845__auto__ = (cljs.core.logic._reify_tabled[goog.typeOf(x__7448__auto__)]);if(or__6845__auto__)
{return or__6845__auto__;
} else
{var or__6845__auto____$1 = (cljs.core.logic._reify_tabled["_"]);if(or__6845__auto____$1)
{return or__6845__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITabled.-reify-tabled",s);
}
}
})().call(null,s,v);
}
});
cljs.core.logic._reuse = (function _reuse(s,argv,cache,start,end){if((function (){var and__6833__auto__ = s;if(and__6833__auto__)
{return s.cljs$core$logic$ITabled$_reuse$arity$5;
} else
{return and__6833__auto__;
}
})())
{return s.cljs$core$logic$ITabled$_reuse$arity$5(s,argv,cache,start,end);
} else
{var x__7448__auto__ = (((s == null))?null:s);return (function (){var or__6845__auto__ = (cljs.core.logic._reuse[goog.typeOf(x__7448__auto__)]);if(or__6845__auto__)
{return or__6845__auto__;
} else
{var or__6845__auto____$1 = (cljs.core.logic._reuse["_"]);if(or__6845__auto____$1)
{return or__6845__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITabled.-reuse",s);
}
}
})().call(null,s,argv,cache,start,end);
}
});
cljs.core.logic._subunify = (function _subunify(s,arg,ans){if((function (){var and__6833__auto__ = s;if(and__6833__auto__)
{return s.cljs$core$logic$ITabled$_subunify$arity$3;
} else
{return and__6833__auto__;
}
})())
{return s.cljs$core$logic$ITabled$_subunify$arity$3(s,arg,ans);
} else
{var x__7448__auto__ = (((s == null))?null:s);return (function (){var or__6845__auto__ = (cljs.core.logic._subunify[goog.typeOf(x__7448__auto__)]);if(or__6845__auto__)
{return or__6845__auto__;
} else
{var or__6845__auto____$1 = (cljs.core.logic._subunify["_"]);if(or__6845__auto____$1)
{return or__6845__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITabled.-subunify",s);
}
}
})().call(null,s,arg,ans);
}
});
cljs.core.logic.reify_tabled = (function reify_tabled(s,v){var v__$1 = cljs.core.logic._walk_STAR_.call(null,s,v);return cljs.core.logic._walk_STAR_.call(null,cljs.core.logic._reify_tabled.call(null,cljs.core.logic.empty_s,v__$1),v__$1);
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$ITabled$ = true;
cljs.core.logic.Substitutions.prototype.cljs$core$logic$ITabled$_reify_tabled$arity$2 = (function (this$,v){var this$__$1 = this;var v__$1 = cljs.core.logic._walk.call(null,this$__$1,v);if(cljs.core.truth_(cljs.core.logic.lvar_QMARK_.call(null,v__$1)))
{return cljs.core.logic._ext_no_check.call(null,this$__$1,v__$1,cljs.core.logic.lvar.call(null,cljs.core.count.call(null,this$__$1.s)));
} else
{if(cljs.core.coll_QMARK_.call(null,v__$1))
{return cljs.core.logic._reify_tabled.call(null,cljs.core.logic._reify_tabled.call(null,this$__$1,cljs.core.first.call(null,v__$1)),cljs.core.next.call(null,v__$1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return this$__$1;
} else
{return null;
}
}
}
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$ITabled$_reuse$arity$5 = (function (this$,argv,cache,start,end){var this$__$1 = this;var start__$1 = (function (){var or__6845__auto__ = start;if(cljs.core.truth_(or__6845__auto__))
{return or__6845__auto__;
} else
{return cljs.core.deref.call(null,cache).ansl;
}
})();var end__$1 = (function (){var or__6845__auto__ = end;if(cljs.core.truth_(or__6845__auto__))
{return or__6845__auto__;
} else
{return 0;
}
})();var reuse_loop = (function reuse_loop(ansv_STAR_){if((cljs.core.count.call(null,ansv_STAR_) === end__$1))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.logic.make_suspended_stream.call(null,cache,start__$1,(function (){return cljs.core.logic._reuse.call(null,this$__$1,argv,cache,cljs.core.deref.call(null,cache).ansl,cljs.core.count.call(null,start__$1));
}))], null);
} else
{var ans = cljs.core.first.call(null,ansv_STAR_);return (new cljs.core.logic.Choice(cljs.core.logic._subunify.call(null,this$__$1,argv,cljs.core.logic.reify_tabled.call(null,this$__$1,ans)),(function (){return reuse_loop.call(null,cljs.core.rest.call(null,ansv_STAR_));
})));
}
});
return reuse_loop.call(null,start__$1);
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$ITabled$_subunify$arity$3 = (function (this$,arg,ans){var this$__$1 = this;var arg__$1 = cljs.core.logic._walk.call(null,this$__$1,arg);if(cljs.core._EQ_.call(null,arg__$1,ans))
{return this$__$1;
} else
{if(cljs.core.truth_(cljs.core.logic.lvar_QMARK_.call(null,arg__$1)))
{return cljs.core.logic._ext_no_check.call(null,this$__$1,arg__$1,ans);
} else
{if(cljs.core.coll_QMARK_.call(null,arg__$1))
{return cljs.core.logic._subunify.call(null,cljs.core.logic._subunify.call(null,this$__$1,cljs.core.next.call(null,arg__$1),cljs.core.next.call(null,ans)),cljs.core.first.call(null,arg__$1),cljs.core.first.call(null,ans));
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
cljs.core.PersistentVector.prototype.cljs$core$logic$ITake$ = true;
cljs.core.PersistentVector.prototype.cljs$core$logic$ITake$_take_STAR_$arity$1 = (function (this$){var this$__$1 = this;return cljs.core.logic.waiting_stream_check.call(null,this$__$1,(function (f){return cljs.core.logic.take_STAR_.call(null,f);
}),(function (){return cljs.core.List.EMPTY;
}));
});
cljs.core.PersistentVector.prototype.cljs$core$logic$IMPlus$ = true;
cljs.core.PersistentVector.prototype.cljs$core$logic$IMPlus$_mplus$arity$2 = (function (this$,f){var this$__$1 = this;return cljs.core.logic.waiting_stream_check.call(null,this$__$1,(function (fp){return cljs.core.logic.mplus.call(null,fp,f);
}),(function (){var a_inf = f.call(null);if(cljs.core.logic.waiting_stream_QMARK_.call(null,a_inf))
{return cljs.core.into.call(null,a_inf,this$__$1);
} else
{return cljs.core.logic.mplus.call(null,a_inf,(function (){return this$__$1;
}));
}
}));
});
cljs.core.PersistentVector.prototype.cljs$core$logic$IBind$ = true;
cljs.core.PersistentVector.prototype.cljs$core$logic$IBind$_bind$arity$2 = (function (this$,g){var this$__$1 = this;return cljs.core.logic.waiting_stream_check.call(null,this$__$1,(function (f){return cljs.core.logic._bind.call(null,f,g);
}),(function (){return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (ss){return cljs.core.logic.make_suspended_stream.call(null,ss.cache,ss.ansv_STAR_,(function (){return cljs.core.logic._bind.call(null,ss.f.call(null),g);
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
cljs.core.logic.master = (function master(argv,cache){return (function (a){var rargv = cljs.core.logic._reify.call(null,a,argv);if(cljs.core.truth_(cljs.core.logic._cached_QMARK_.call(null,cljs.core.deref.call(null,cache),rargv)))
{return null;
} else
{cljs.core.swap_BANG_.call(null,cache,(function (cache__$1){if(cljs.core.truth_(cljs.core.logic._cached_QMARK_.call(null,cache__$1,rargv)))
{return cache__$1;
} else
{return cljs.core.logic._add.call(null,cache__$1,cljs.core.logic.reify_tabled.call(null,a,argv));
}
}));
return a;
}
});
});
cljs.core.logic.addcg = (function addcg(c){return (function (a){var a__$1 = cljs.core.reduce.call(null,(function (a__$1,x){return cljs.core.logic._ext_no_check.call(null,a__$1,x,cljs.core.logic.subst_val.call(null,new cljs.core.Keyword("cljs.core.logic","unbound","cljs.core.logic/unbound",1803671316)));
}),a,cljs.core.logic.unbound_rands.call(null,a,c));return (new cljs.core.logic.Substitutions(a__$1.s,a__$1.vs,a__$1.ts,cljs.core.logic._addc.call(null,a__$1.cs,a__$1,c),a__$1.cq,a__$1.cqs,a__$1.oc,a__$1._meta));
});
});
cljs.core.logic.updatecg = (function updatecg(c){return (function (a){return (new cljs.core.logic.Substitutions(a.s,a.vs,a.ts,cljs.core.logic._updatec.call(null,a.cs,a,c),a.cq,a.cqs,a.oc,a._meta));
});
});
cljs.core.logic.remcg = (function remcg(c){return (function (a){return (new cljs.core.logic.Substitutions(a.s,a.vs,a.ts,cljs.core.logic._remc.call(null,a.cs,a,c),a.cq,a.cqs,a.oc,a._meta));
});
});
cljs.core.logic.runcg = (function runcg(c){return (function (a){return (new cljs.core.logic.Substitutions(a.s,a.vs,a.ts,cljs.core.logic._runc.call(null,a.cs,c,true),a.cq,a.cqs,a.oc,a._meta));
});
});
cljs.core.logic.stopcg = (function stopcg(c){return (function (a){return (new cljs.core.logic.Substitutions(a.s,a.vs,a.ts,cljs.core.logic._runc.call(null,a.cs,c,false),a.cq,a.cqs,a.oc,a._meta));
});
});
cljs.core.logic.IEntailed = (function (){var obj467733 = {};return obj467733;
})();
cljs.core.logic._entailed_QMARK_ = (function _entailed_QMARK_(c){if((function (){var and__6833__auto__ = c;if(and__6833__auto__)
{return c.cljs$core$logic$IEntailed$_entailed_QMARK_$arity$1;
} else
{return and__6833__auto__;
}
})())
{return c.cljs$core$logic$IEntailed$_entailed_QMARK_$arity$1(c);
} else
{var x__7448__auto__ = (((c == null))?null:c);return (function (){var or__6845__auto__ = (cljs.core.logic._entailed_QMARK_[goog.typeOf(x__7448__auto__)]);if(or__6845__auto__)
{return or__6845__auto__;
} else
{var or__6845__auto____$1 = (cljs.core.logic._entailed_QMARK_["_"]);if(or__6845__auto____$1)
{return or__6845__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IEntailed.-entailed?",c);
}
}
})().call(null,c);
}
});
cljs.core.logic.ientailed_QMARK_ = (function ientailed_QMARK_(c){var G__467735 = c;if(G__467735)
{var bit__7464__auto__ = null;if(cljs.core.truth_((function (){var or__6845__auto__ = bit__7464__auto__;if(cljs.core.truth_(or__6845__auto__))
{return or__6845__auto__;
} else
{return G__467735.cljs$core$logic$IEntailed$;
}
})()))
{return true;
} else
{return false;
}
} else
{return false;
}
});
cljs.core.logic.entailed_QMARK_ = (function entailed_QMARK_(c,c_SINGLEQUOTE_,a){var id = cljs.core.logic.id.call(null,c);var and__6833__auto__ = (function (){var or__6845__auto__ = a.cs.cm.call(null,id);if(cljs.core.truth_(or__6845__auto__))
{return or__6845__auto__;
} else
{return (id == null);
}
})();if(cljs.core.truth_(and__6833__auto__))
{return cljs.core.logic._entailed_QMARK_.call(null,c_SINGLEQUOTE_);
} else
{return and__6833__auto__;
}
});
cljs.core.logic.run_constraint = (function run_constraint(c){return (function (a){var c_SINGLEQUOTE_ = cljs.core.logic._step.call(null,c,a);if((!(cljs.core.logic.ientailed_QMARK_.call(null,c_SINGLEQUOTE_))) || (!(cljs.core.logic.entailed_QMARK_.call(null,c,c_SINGLEQUOTE_,a))))
{if(cljs.core.truth_(cljs.core.logic._runnable_QMARK_.call(null,c_SINGLEQUOTE_)))
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
{return (new cljs.core.logic.Substitutions(a__$1.s,a__$1.vs,a__$1.ts,a__$1.cs,null,a__$1.cqs,a__$1.oc,a__$1._meta));
} else
{var c = cljs.core.first.call(null,cq);{
var G__467736 = cljs.core.logic.run_constraint.call(null,c).call(null,(new cljs.core.logic.Substitutions(a__$1.s,a__$1.vs,a__$1.ts,a__$1.cs,cljs.core.subvec.call(null,a__$1.cq,1),cljs.core.disj.call(null,a__$1.cqs,cljs.core.logic.id.call(null,c)),a__$1.oc,a__$1._meta)));
a__$1 = G__467736;
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
return (function (a__$1,c){return cljs.core.logic._queue.call(null,a__$1,c);
});})(cq))
,(new cljs.core.logic.Substitutions(a.s,a.vs,a.ts,a.cs,(function (){var or__6845__auto__ = cq;if(cljs.core.truth_(or__6845__auto__))
{return or__6845__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),a.cqs,a.oc,a._meta)),xcs);if(cljs.core.truth_(cq))
{return a__$1;
} else
{return cljs.core.logic.fix_constraints.call(null,a__$1);
}
});
});
cljs.core.logic.run_constraints_STAR_ = (function run_constraints_STAR_(xs,cs,ws){if(((cljs.core.count.call(null,cs) === 0)) || ((cljs.core.seq.call(null,xs) == null)))
{return cljs.core.logic.s_SHARP_;
} else
{return (function (a){var xcs = cljs.core.logic._constraints_for.call(null,cs,a,cljs.core.first.call(null,xs),ws);if(cljs.core.seq.call(null,xcs))
{return cljs.core.logic.composeg.call(null,cljs.core.logic.run_constraints.call(null,xcs),run_constraints_STAR_.call(null,cljs.core.next.call(null,xs),cs,ws)).call(null,a);
} else
{return run_constraints_STAR_.call(null,cljs.core.next.call(null,xs),cs,ws).call(null,a);
}
});
}
});
cljs.core.logic.verify_all_bound = (function verify_all_bound(a,constrained){var verify_all_bound_STAR_ = (function verify_all_bound_STAR_(a__$1,constrained__$1){while(true){
if(cljs.core.truth_(constrained__$1))
{var x = cljs.core.first.call(null,constrained__$1);if(cljs.core.truth_((function (){var and__6833__auto__ = cljs.core.logic.lvar_QMARK_.call(null,x);if(cljs.core.truth_(and__6833__auto__))
{var and__6833__auto____$1 = cljs.core.logic.lvar_QMARK_.call(null,cljs.core.logic._walk.call(null,a__$1,x));if(cljs.core.truth_(and__6833__auto____$1))
{return (cljs.core.logic.get_dom.call(null,a__$1,x,new cljs.core.Keyword("cljs.core.logic","fd","cljs.core.logic/fd",3673845947)) == null);
} else
{return and__6833__auto____$1;
}
} else
{return and__6833__auto__;
}
})()))
{throw (new Error([cljs.core.str("Constrained variable "),cljs.core.str(x),cljs.core.str(" without domain")].join('')));
} else
{{
var G__467737 = a__$1;
var G__467738 = cljs.core.next.call(null,constrained__$1);
a__$1 = G__467737;
constrained__$1 = G__467738;
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
{var c = temp__4098__auto__;return cljs.core.logic.enforceable_QMARK_.call(null,c);
} else
{return null;
}
}),cljs.core.get.call(null,km,v));
}),vs);
});
cljs.core.logic.enforce_constraints = (function enforce_constraints(x){return (function (a__457967__auto__){return cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,a__457967__auto__,cljs.core.logic.force_ans.call(null,x)),(function (a){var constrained = cljs.core.logic.enforceable_constrained.call(null,a);cljs.core.logic.verify_all_bound.call(null,a,constrained);
return cljs.core.logic.onceo.call(null,cljs.core.logic.force_ans.call(null,constrained)).call(null,a);
}));
});
});
cljs.core.logic.reify_constraints = (function reify_constraints(v,r,a){var cs = a.cs;var rcs = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (cs){
return (function (p1__467740_SHARP_){return !((p1__467740_SHARP_ == null));
});})(cs))
,cljs.core.map.call(null,((function (cs){
return (function (p1__467739_SHARP_){return cljs.core.logic._reifyc.call(null,p1__467739_SHARP_,v,r,a);
});})(cs))
,cljs.core.filter.call(null,cljs.core.logic.reifiable_QMARK_,cljs.core.vals.call(null,cs.cm)))));if(cljs.core.empty_QMARK_.call(null,rcs))
{return cljs.core.logic.choice.call(null,v,cljs.core.logic.empty_f);
} else
{return cljs.core.logic.choice.call(null,cljs.core.concat.call(null,cljs.core.with_meta.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,v),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"-","-",1013904287)))),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,1861),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,24),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,1861),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,31))))),rcs),cljs.core.logic.empty_f);
}
});
cljs.core.logic.reifyg = (function reifyg(x){return (function (a__457967__auto__){return cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,a__457967__auto__,cljs.core.logic.enforce_constraints.call(null,x)),(function (a){var v = cljs.core.logic._walk_STAR_.call(null,a,x);var r = cljs.core.logic._reify_STAR_.call(null,cljs.core.with_meta.call(null,cljs.core.logic.empty_s,cljs.core.meta.call(null,a)),v);if((cljs.core.count.call(null,r) === 0))
{return cljs.core.logic.choice.call(null,v,cljs.core.logic.empty_f);
} else
{var v__$1 = cljs.core.logic._walk_STAR_.call(null,r,v);return cljs.core.logic.reify_constraints.call(null,v__$1,r,a);
}
}));
});
});
cljs.core.logic.IUnwrapConstraint = (function (){var obj467742 = {};return obj467742;
})();
cljs.core.logic._unwrap = (function _unwrap(_){if((function (){var and__6833__auto__ = _;if(and__6833__auto__)
{return _.cljs$core$logic$IUnwrapConstraint$_unwrap$arity$1;
} else
{return and__6833__auto__;
}
})())
{return _.cljs$core$logic$IUnwrapConstraint$_unwrap$arity$1(_);
} else
{var x__7448__auto__ = (((_ == null))?null:_);return (function (){var or__6845__auto__ = (cljs.core.logic._unwrap[goog.typeOf(x__7448__auto__)]);if(or__6845__auto__)
{return or__6845__auto__;
} else
{var or__6845__auto____$1 = (cljs.core.logic._unwrap["_"]);if(or__6845__auto____$1)
{return or__6845__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IUnwrapConstraint.-unwrap",_);
}
}
})().call(null,_);
}
});
cljs.core.logic.cgoal = (function cgoal(c){if(typeof cljs.core.logic.t467747 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.t467747 = (function (c,cgoal,meta467748){
this.c = c;
this.cgoal = cgoal;
this.meta467748 = meta467748;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.logic.t467747.cljs$lang$type = true;
cljs.core.logic.t467747.cljs$lang$ctorStr = "cljs.core.logic/t467747";
cljs.core.logic.t467747.cljs$lang$ctorPrWriter = (function (this__7389__auto__,writer__7390__auto__,opt__7391__auto__){return cljs.core._write.call(null,writer__7390__auto__,"cljs.core.logic/t467747");
});
cljs.core.logic.t467747.prototype.cljs$core$logic$IUnwrapConstraint$ = true;
cljs.core.logic.t467747.prototype.cljs$core$logic$IUnwrapConstraint$_unwrap$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.c;
});
cljs.core.logic.t467747.prototype.call = (function (self__,a){var self__ = this;
var self____$1 = this;var _ = self____$1;var c_SINGLEQUOTE_ = cljs.core.logic._step.call(null,self__.c,a);if(cljs.core.truth_(cljs.core.logic._runnable_QMARK_.call(null,c_SINGLEQUOTE_)))
{var temp__4098__auto__ = c_SINGLEQUOTE_.call(null,a);if(cljs.core.truth_(temp__4098__auto__))
{var a__$1 = temp__4098__auto__;var c_SINGLEQUOTE___$1 = cljs.core.logic._step.call(null,self__.c,a__$1);if((cljs.core.logic.ientailed_QMARK_.call(null,c_SINGLEQUOTE___$1)) && (!(cljs.core.logic.entailed_QMARK_.call(null,self__.c,c_SINGLEQUOTE___$1,a__$1))))
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
cljs.core.logic.t467747.prototype.apply = (function (self__,args467750){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args467750)));
});
cljs.core.logic.t467747.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){var self__ = this;
var _ = this;var c_SINGLEQUOTE_ = cljs.core.logic._step.call(null,self__.c,a);if(cljs.core.truth_(cljs.core.logic._runnable_QMARK_.call(null,c_SINGLEQUOTE_)))
{var temp__4098__auto__ = c_SINGLEQUOTE_.call(null,a);if(cljs.core.truth_(temp__4098__auto__))
{var a__$1 = temp__4098__auto__;var c_SINGLEQUOTE___$1 = cljs.core.logic._step.call(null,self__.c,a__$1);if((cljs.core.logic.ientailed_QMARK_.call(null,c_SINGLEQUOTE___$1)) && (!(cljs.core.logic.entailed_QMARK_.call(null,self__.c,c_SINGLEQUOTE___$1,a__$1))))
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
cljs.core.logic.t467747.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_467749){var self__ = this;
var _467749__$1 = this;return self__.meta467748;
});
cljs.core.logic.t467747.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_467749,meta467748__$1){var self__ = this;
var _467749__$1 = this;return (new cljs.core.logic.t467747(self__.c,self__.cgoal,meta467748__$1));
});
cljs.core.logic.__GT_t467747 = (function __GT_t467747(c__$1,cgoal__$1,meta467748){return (new cljs.core.logic.t467747(c__$1,cgoal__$1,meta467748));
});
}
return (new cljs.core.logic.t467747(c,cgoal,null));
});
cljs.core.logic.get_dom_fd = (function get_dom_fd(a,x){if(cljs.core.truth_(cljs.core.logic.lvar_QMARK_.call(null,x)))
{return cljs.core.logic.get_dom.call(null,a,x,new cljs.core.Keyword("cljs.core.logic","fd","cljs.core.logic/fd",3673845947));
} else
{return x;
}
});
cljs.core.logic.sort_by_member_count = (function sort_by_member_count(a){return (function (x,y){var dx = cljs.core.logic.get_dom_fd.call(null,a,x);var dy = cljs.core.logic.get_dom_fd.call(null,a,y);return (cljs.core.logic._member_count.call(null,dx) < cljs.core.logic._member_count.call(null,dy));
});
});
cljs.core.logic.sort_by_strategy = (function sort_by_strategy(v,x,a){var G__467752 = new cljs.core.Keyword("cljs.core.logic","strategy","cljs.core.logic/strategy",3884554094).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,x));if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.core.logic","ff","cljs.core.logic/ff",3673845945),G__467752))
{return cljs.core.seq.call(null,cljs.core.sort.call(null,cljs.core.logic.sort_by_member_count.call(null,a),v));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return v;
} else
{return null;
}
}
});
cljs.core.logic.IForceAnswerTerm = (function (){var obj467754 = {};return obj467754;
})();
cljs.core.logic._force_ans = (function _force_ans(v,x){if((function (){var and__6833__auto__ = v;if(and__6833__auto__)
{return v.cljs$core$logic$IForceAnswerTerm$_force_ans$arity$2;
} else
{return and__6833__auto__;
}
})())
{return v.cljs$core$logic$IForceAnswerTerm$_force_ans$arity$2(v,x);
} else
{var x__7448__auto__ = (((v == null))?null:v);return (function (){var or__6845__auto__ = (cljs.core.logic._force_ans[goog.typeOf(x__7448__auto__)]);if(or__6845__auto__)
{return or__6845__auto__;
} else
{var or__6845__auto____$1 = (cljs.core.logic._force_ans["_"]);if(or__6845__auto____$1)
{return or__6845__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IForceAnswerTerm.-force-ans",v);
}
}
})().call(null,v,x);
}
});
cljs.core.logic.LCons.prototype.cljs$core$logic$IForceAnswerTerm$ = true;
cljs.core.logic.LCons.prototype.cljs$core$logic$IForceAnswerTerm$_force_ans$arity$2 = (function (v,x){var v__$1 = this;var loop = (function loop(ys){return (function (a__457967__auto__){return cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,a__457967__auto__,cljs.core.logic.force_ans.call(null,cljs.core.logic._lfirst.call(null,ys))),((cljs.core.logic.lcons_QMARK_.call(null,cljs.core.logic._lnext.call(null,ys)))?loop.call(null,cljs.core.logic._lnext.call(null,ys)):cljs.core.logic.s_SHARP_));
});
});
return loop.call(null,v__$1);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$logic$IForceAnswerTerm$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$logic$IForceAnswerTerm$_force_ans$arity$2 = (function (v,x){var v__$1 = this;var loop = (function loop(ys){if(cljs.core.truth_(ys))
{return (function (a__457967__auto__){return cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,a__457967__auto__,cljs.core.logic.force_ans.call(null,cljs.core.val.call(null,cljs.core.first.call(null,ys)))),loop.call(null,cljs.core.next.call(null,ys)));
});
} else
{return cljs.core.logic.s_SHARP_;
}
});
return loop.call(null,cljs.core.seq.call(null,v__$1));
});
cljs.core.PersistentHashMap.prototype.cljs$core$logic$IForceAnswerTerm$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$logic$IForceAnswerTerm$_force_ans$arity$2 = (function (v,x){var v__$1 = this;var loop = (function loop(ys){if(cljs.core.truth_(ys))
{return (function (a__457967__auto__){return cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,a__457967__auto__,cljs.core.logic.force_ans.call(null,cljs.core.val.call(null,cljs.core.first.call(null,ys)))),loop.call(null,cljs.core.next.call(null,ys)));
});
} else
{return cljs.core.logic.s_SHARP_;
}
});
return loop.call(null,cljs.core.seq.call(null,v__$1));
});
(cljs.core.logic.IForceAnswerTerm["_"] = true);
(cljs.core.logic._force_ans["_"] = (function (v,x){if(cljs.core.sequential_QMARK_.call(null,v))
{var loop = (function loop(ys){if(cljs.core.truth_(ys))
{return (function (a__457967__auto__){return cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,a__457967__auto__,cljs.core.logic.force_ans.call(null,cljs.core.first.call(null,ys))),(function (a){var temp__4096__auto__ = cljs.core.logic.sort_by_strategy.call(null,cljs.core.next.call(null,ys),x,a);if(cljs.core.truth_(temp__4096__auto__))
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
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.truth_(cljs.core.logic.lvar_QMARK_.call(null,x)))
{return cljs.core.logic.ext_run_csg.call(null,x,v);
} else
{return cljs.core.logic.s_SHARP_;
}
} else
{return null;
}
}
}));
(cljs.core.logic.IForceAnswerTerm["null"] = true);
(cljs.core.logic._force_ans["null"] = (function (v,x){return cljs.core.logic.s_SHARP_;
}));
cljs.core.logic.force_ans = (function force_ans(x){return (function (a){return (function (){var v = cljs.core.logic._walk.call(null,a,x);if(cljs.core.truth_(cljs.core.logic.lvar_QMARK_.call(null,v)))
{return cljs.core.logic._force_ans.call(null,cljs.core.logic.get_dom_fd.call(null,a,x),v);
} else
{var x__$1 = cljs.core.logic._root_var.call(null,a,x);if(cljs.core.sequential_QMARK_.call(null,v))
{return cljs.core.logic._force_ans.call(null,cljs.core.logic.sort_by_strategy.call(null,v,x__$1,a),x__$1);
} else
{return cljs.core.logic._force_ans.call(null,v,x__$1);
}
}
})().call(null,a);
});
});
cljs.core.logic.distribute = (function distribute(v_STAR_,strategy){return (function (a){return cljs.core.logic.add_attr.call(null,a,v_STAR_,new cljs.core.Keyword("cljs.core.logic","strategy","cljs.core.logic/strategy",3884554094),new cljs.core.Keyword("cljs.core.logic","ff","cljs.core.logic/ff",3673845945));
});
});
cljs.core.logic.IDisunifyTerms = (function (){var obj467756 = {};return obj467756;
})();
cljs.core.logic._disunify_terms = (function _disunify_terms(u,v,s,cs){if((function (){var and__6833__auto__ = u;if(and__6833__auto__)
{return u.cljs$core$logic$IDisunifyTerms$_disunify_terms$arity$4;
} else
{return and__6833__auto__;
}
})())
{return u.cljs$core$logic$IDisunifyTerms$_disunify_terms$arity$4(u,v,s,cs);
} else
{var x__7448__auto__ = (((u == null))?null:u);return (function (){var or__6845__auto__ = (cljs.core.logic._disunify_terms[goog.typeOf(x__7448__auto__)]);if(or__6845__auto__)
{return or__6845__auto__;
} else
{var or__6845__auto____$1 = (cljs.core.logic._disunify_terms["_"]);if(or__6845__auto____$1)
{return or__6845__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IDisunifyTerms.-disunify-terms",u);
}
}
})().call(null,u,v,s,cs);
}
});
cljs.core.logic.IDisunifyWithNil = (function (){var obj467758 = {};return obj467758;
})();
cljs.core.logic._disunify_with_nil = (function _disunify_with_nil(v,u,s,cs){if((function (){var and__6833__auto__ = v;if(and__6833__auto__)
{return v.cljs$core$logic$IDisunifyWithNil$_disunify_with_nil$arity$4;
} else
{return and__6833__auto__;
}
})())
{return v.cljs$core$logic$IDisunifyWithNil$_disunify_with_nil$arity$4(v,u,s,cs);
} else
{var x__7448__auto__ = (((v == null))?null:v);return (function (){var or__6845__auto__ = (cljs.core.logic._disunify_with_nil[goog.typeOf(x__7448__auto__)]);if(or__6845__auto__)
{return or__6845__auto__;
} else
{var or__6845__auto____$1 = (cljs.core.logic._disunify_with_nil["_"]);if(or__6845__auto____$1)
{return or__6845__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IDisunifyWithNil.-disunify-with-nil",v);
}
}
})().call(null,v,u,s,cs);
}
});
cljs.core.logic.IDisunifyWithObject = (function (){var obj467760 = {};return obj467760;
})();
cljs.core.logic._disunify_with_object = (function _disunify_with_object(v,u,s,cs){if((function (){var and__6833__auto__ = v;if(and__6833__auto__)
{return v.cljs$core$logic$IDisunifyWithObject$_disunify_with_object$arity$4;
} else
{return and__6833__auto__;
}
})())
{return v.cljs$core$logic$IDisunifyWithObject$_disunify_with_object$arity$4(v,u,s,cs);
} else
{var x__7448__auto__ = (((v == null))?null:v);return (function (){var or__6845__auto__ = (cljs.core.logic._disunify_with_object[goog.typeOf(x__7448__auto__)]);if(or__6845__auto__)
{return or__6845__auto__;
} else
{var or__6845__auto____$1 = (cljs.core.logic._disunify_with_object["_"]);if(or__6845__auto____$1)
{return or__6845__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IDisunifyWithObject.-disunify-with-object",v);
}
}
})().call(null,v,u,s,cs);
}
});
cljs.core.logic.IDisunifyWithLSeq = (function (){var obj467762 = {};return obj467762;
})();
cljs.core.logic._disunify_with_lseq = (function _disunify_with_lseq(v,u,s,cs){if((function (){var and__6833__auto__ = v;if(and__6833__auto__)
{return v.cljs$core$logic$IDisunifyWithLSeq$_disunify_with_lseq$arity$4;
} else
{return and__6833__auto__;
}
})())
{return v.cljs$core$logic$IDisunifyWithLSeq$_disunify_with_lseq$arity$4(v,u,s,cs);
} else
{var x__7448__auto__ = (((v == null))?null:v);return (function (){var or__6845__auto__ = (cljs.core.logic._disunify_with_lseq[goog.typeOf(x__7448__auto__)]);if(or__6845__auto__)
{return or__6845__auto__;
} else
{var or__6845__auto____$1 = (cljs.core.logic._disunify_with_lseq["_"]);if(or__6845__auto____$1)
{return or__6845__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IDisunifyWithLSeq.-disunify-with-lseq",v);
}
}
})().call(null,v,u,s,cs);
}
});
cljs.core.logic.IDisunifyWithLVar = (function (){var obj467764 = {};return obj467764;
})();
cljs.core.logic._disunify_with_lvar = (function _disunify_with_lvar(v,u,s,cs){if((function (){var and__6833__auto__ = v;if(and__6833__auto__)
{return v.cljs$core$logic$IDisunifyWithLVar$_disunify_with_lvar$arity$4;
} else
{return and__6833__auto__;
}
})())
{return v.cljs$core$logic$IDisunifyWithLVar$_disunify_with_lvar$arity$4(v,u,s,cs);
} else
{var x__7448__auto__ = (((v == null))?null:v);return (function (){var or__6845__auto__ = (cljs.core.logic._disunify_with_lvar[goog.typeOf(x__7448__auto__)]);if(or__6845__auto__)
{return or__6845__auto__;
} else
{var or__6845__auto____$1 = (cljs.core.logic._disunify_with_lvar["_"]);if(or__6845__auto____$1)
{return or__6845__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IDisunifyWithLVar.-disunify-with-lvar",v);
}
}
})().call(null,v,u,s,cs);
}
});
cljs.core.logic.IDisunifyWithSequential = (function (){var obj467766 = {};return obj467766;
})();
cljs.core.logic._disunify_with_seq = (function _disunify_with_seq(v,u,s,cs){if((function (){var and__6833__auto__ = v;if(and__6833__auto__)
{return v.cljs$core$logic$IDisunifyWithSequential$_disunify_with_seq$arity$4;
} else
{return and__6833__auto__;
}
})())
{return v.cljs$core$logic$IDisunifyWithSequential$_disunify_with_seq$arity$4(v,u,s,cs);
} else
{var x__7448__auto__ = (((v == null))?null:v);return (function (){var or__6845__auto__ = (cljs.core.logic._disunify_with_seq[goog.typeOf(x__7448__auto__)]);if(or__6845__auto__)
{return or__6845__auto__;
} else
{var or__6845__auto____$1 = (cljs.core.logic._disunify_with_seq["_"]);if(or__6845__auto____$1)
{return or__6845__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IDisunifyWithSequential.-disunify-with-seq",v);
}
}
})().call(null,v,u,s,cs);
}
});
cljs.core.logic.IDisunifyWithMap = (function (){var obj467768 = {};return obj467768;
})();
cljs.core.logic._disunify_with_map = (function _disunify_with_map(v,u,s,cs){if((function (){var and__6833__auto__ = v;if(and__6833__auto__)
{return v.cljs$core$logic$IDisunifyWithMap$_disunify_with_map$arity$4;
} else
{return and__6833__auto__;
}
})())
{return v.cljs$core$logic$IDisunifyWithMap$_disunify_with_map$arity$4(v,u,s,cs);
} else
{var x__7448__auto__ = (((v == null))?null:v);return (function (){var or__6845__auto__ = (cljs.core.logic._disunify_with_map[goog.typeOf(x__7448__auto__)]);if(or__6845__auto__)
{return or__6845__auto__;
} else
{var or__6845__auto____$1 = (cljs.core.logic._disunify_with_map["_"]);if(or__6845__auto____$1)
{return or__6845__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IDisunifyWithMap.-disunify-with-map",v);
}
}
})().call(null,v,u,s,cs);
}
});
cljs.core.logic.disunify = (function() {
var disunify = null;
var disunify__3 = (function (s,u,v){return disunify.call(null,s,u,v,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"prefixc","prefixc",695243651),cljs.core.PersistentArrayMap.EMPTY], null));
});
var disunify__4 = (function (s,u,v,cs){if((u === v))
{return cs;
} else
{var u__$1 = cljs.core.logic._walk.call(null,s,u);var v__$1 = cljs.core.logic._walk.call(null,s,v);if(((u__$1 === v__$1)) || (cljs.core._EQ_.call(null,u__$1,v__$1)))
{return cs;
} else
{if(cljs.core.truth_((function (){var and__6833__auto__ = cljs.core.not.call(null,cljs.core.logic.lvar_QMARK_.call(null,u__$1));if(and__6833__auto__)
{return cljs.core.logic.lvar_QMARK_.call(null,v__$1);
} else
{return and__6833__auto__;
}
})()))
{return cljs.core.logic._disunify_terms.call(null,v__$1,u__$1,s,cs);
} else
{return cljs.core.logic._disunify_terms.call(null,u__$1,v__$1,s,cs);
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
cljs.core.logic.disunify_with_map = (function disunify_with_map(v,u,s,cs){if((cljs.core.map_QMARK_.call(null,v)) && ((cljs.core.count.call(null,u) === cljs.core.count.call(null,v))))
{var ks = cljs.core.seq.call(null,cljs.core.keys.call(null,u));var cs__$1 = cs;while(true){
if(ks)
{var kf = cljs.core.first.call(null,ks);var vf = cljs.core.get.call(null,v,kf,cljs.core.logic.not_found);if(cljs.core._EQ_.call(null,vf,cljs.core.logic.not_found))
{return null;
} else
{var temp__4096__auto__ = cljs.core.logic.disunify.call(null,s,cljs.core.get.call(null,u,kf),vf,cs__$1);if(cljs.core.truth_(temp__4096__auto__))
{var cs__$2 = temp__4096__auto__;{
var G__467769 = cljs.core.next.call(null,ks);
var G__467770 = cs__$2;
ks = G__467769;
cs__$1 = G__467770;
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
});
(cljs.core.logic.IDisunifyTerms["_"] = true);
(cljs.core.logic._disunify_terms["_"] = (function (u,v,s,cs){if(cljs.core.sequential_QMARK_.call(null,u))
{if(cljs.core.sequential_QMARK_.call(null,v))
{var u__$1 = cljs.core.seq.call(null,u);var v__$1 = cljs.core.seq.call(null,v);var cs__$1 = cs;while(true){
if(cljs.core.truth_(u__$1))
{if(cljs.core.truth_(v__$1))
{var uv = cljs.core.first.call(null,u__$1);var vv = cljs.core.first.call(null,v__$1);var cs__$2 = cljs.core.logic.disunify.call(null,s,uv,vv,cs__$1);if(cljs.core.truth_(cs__$2))
{{
var G__467773 = cljs.core.next.call(null,u__$1);
var G__467774 = cljs.core.next.call(null,v__$1);
var G__467775 = cs__$2;
u__$1 = G__467773;
v__$1 = G__467774;
cs__$1 = G__467775;
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
}));
cljs.core.PersistentHashMap.prototype.cljs$core$logic$IDisunifyTerms$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$logic$IDisunifyTerms$_disunify_terms$arity$4 = (function (u,v,s,cs){var u__$1 = this;return cljs.core.logic.disunify_with_map.call(null,v,u__$1,s,cs);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$logic$IDisunifyTerms$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$logic$IDisunifyTerms$_disunify_terms$arity$4 = (function (u,v,s,cs){var u__$1 = this;return cljs.core.logic.disunify_with_map.call(null,v,u__$1,s,cs);
});
cljs.core.logic.LVar.prototype.cljs$core$logic$IDisunifyTerms$ = true;
cljs.core.logic.LVar.prototype.cljs$core$logic$IDisunifyTerms$_disunify_terms$arity$4 = (function (u,v,s,p__467771){var map__467772 = p__467771;var map__467772__$1 = ((cljs.core.seq_QMARK_.call(null,map__467772))?cljs.core.apply.call(null,cljs.core.hash_map,map__467772):map__467772);var cs = map__467772__$1;var pc = cljs.core.get.call(null,map__467772__$1,new cljs.core.Keyword(null,"prefixc","prefixc",695243651));var u__$1 = this;return cljs.core.assoc.call(null,cs,new cljs.core.Keyword(null,"prefixc","prefixc",695243651),cljs.core.assoc.call(null,pc,u__$1,v));
});
(cljs.core.logic.IDisunifyTerms["null"] = true);
(cljs.core.logic._disunify_terms["null"] = (function (u,v,s,cs){if(!((v == null)))
{return null;
} else
{return cs;
}
}));
cljs.core.logic.recover_vars_from_term = (function recover_vars_from_term(x){var r = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);cljs.core.logic._walk_term.call(null,x,(function (x__$1){if(cljs.core.truth_(cljs.core.logic.lvar_QMARK_.call(null,x__$1)))
{cljs.core.swap_BANG_.call(null,r,cljs.core.conj,x__$1);
return x__$1;
} else
{return x__$1;
}
}));
return cljs.core.deref.call(null,r);
});
cljs.core.logic.recover_vars = (function recover_vars(p){var p__$1 = cljs.core.seq.call(null,p);var r = cljs.core.PersistentHashSet.EMPTY;while(true){
if(cljs.core.truth_(p__$1))
{var vec__467777 = cljs.core.first.call(null,p__$1);var u = cljs.core.nth.call(null,vec__467777,0,null);var v = cljs.core.nth.call(null,vec__467777,1,null);{
var G__467778 = cljs.core.next.call(null,p__$1);
var G__467779 = clojure.set.union.call(null,r,cljs.core.logic.recover_vars_from_term.call(null,u),cljs.core.logic.recover_vars_from_term.call(null,v));
p__$1 = G__467778;
r = G__467779;
continue;
}
} else
{return r;
}
break;
}
});
cljs.core.logic.ITreeConstraint = (function (){var obj467781 = {};return obj467781;
})();
cljs.core.logic.IWithPrefix = (function (){var obj467783 = {};return obj467783;
})();
cljs.core.logic._with_prefix = (function _with_prefix(_){if((function (){var and__6833__auto__ = _;if(and__6833__auto__)
{return _.cljs$core$logic$IWithPrefix$_with_prefix$arity$1;
} else
{return and__6833__auto__;
}
})())
{return _.cljs$core$logic$IWithPrefix$_with_prefix$arity$1(_);
} else
{var x__7448__auto__ = (((_ == null))?null:_);return (function (){var or__6845__auto__ = (cljs.core.logic._with_prefix[goog.typeOf(x__7448__auto__)]);if(or__6845__auto__)
{return or__6845__auto__;
} else
{var or__6845__auto____$1 = (cljs.core.logic._with_prefix["_"]);if(or__6845__auto____$1)
{return or__6845__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWithPrefix.-with-prefix",_);
}
}
})().call(null,_);
}
});
cljs.core.logic.IPrefix = (function (){var obj467785 = {};return obj467785;
})();
cljs.core.logic._prefix = (function _prefix(_,p){if((function (){var and__6833__auto__ = _;if(and__6833__auto__)
{return _.cljs$core$logic$IPrefix$_prefix$arity$2;
} else
{return and__6833__auto__;
}
})())
{return _.cljs$core$logic$IPrefix$_prefix$arity$2(_,p);
} else
{var x__7448__auto__ = (((_ == null))?null:_);return (function (){var or__6845__auto__ = (cljs.core.logic._prefix[goog.typeOf(x__7448__auto__)]);if(or__6845__auto__)
{return or__6845__auto__;
} else
{var or__6845__auto____$1 = (cljs.core.logic._prefix["_"]);if(or__6845__auto____$1)
{return or__6845__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IPrefix.-prefix",_);
}
}
})().call(null,_,p);
}
});
cljs.core.logic._BANG__EQ_c = (function _BANG__EQ_c(p){if(typeof cljs.core.logic.t467798 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.t467798 = (function (p,_BANG__EQ_c,meta467799){
this.p = p;
this._BANG__EQ_c = _BANG__EQ_c;
this.meta467799 = meta467799;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.logic.t467798.cljs$lang$type = true;
cljs.core.logic.t467798.cljs$lang$ctorStr = "cljs.core.logic/t467798";
cljs.core.logic.t467798.cljs$lang$ctorPrWriter = (function (this__7389__auto__,writer__7390__auto__,opt__7391__auto__){return cljs.core._write.call(null,writer__7390__auto__,"cljs.core.logic/t467798");
});
cljs.core.logic.t467798.prototype.cljs$core$logic$IConstraintWatchedStores$ = true;
cljs.core.logic.t467798.prototype.cljs$core$logic$IConstraintWatchedStores$_watched_stores$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440),null], null), null);
});
cljs.core.logic.t467798.prototype.cljs$core$logic$IConstraintOp$ = true;
cljs.core.logic.t467798.prototype.cljs$core$logic$IConstraintOp$_rator$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic.macros","!=","cljs.core.logic.macros/!=",1300254101,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2138),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,18),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2138),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,43)))));
});
cljs.core.logic.t467798.prototype.cljs$core$logic$IConstraintOp$_rands$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.seq.call(null,cljs.core.logic.recover_vars.call(null,self__.p));
});
cljs.core.logic.t467798.prototype.cljs$core$logic$IReifiableConstraint$ = true;
cljs.core.logic.t467798.prototype.cljs$core$logic$IReifiableConstraint$_reifyc$arity$4 = (function (this$,v,r,a){var self__ = this;
var this$__$1 = this;var p_STAR_ = cljs.core.logic._reify.call(null,a,cljs.core.map.call(null,(function (p__467801){var vec__467802 = p__467801;var lhs = cljs.core.nth.call(null,vec__467802,0,null);var rhs = cljs.core.nth.call(null,vec__467802,1,null);return cljs.core.with_meta.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,lhs),cljs.core._conj.call(null,cljs.core.List.EMPTY,rhs))),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2133),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,48),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2133),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,59)))));
}),self__.p),r);if(cljs.core.empty_QMARK_.call(null,p_STAR_))
{return cljs.core.List.EMPTY;
} else
{return cljs.core.with_meta.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"!=","!=",-1640530443,null)),p_STAR_)),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2136),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,12),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2136),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,23)))));
}
});
cljs.core.logic.t467798.prototype.cljs$core$logic$IWithPrefix$ = true;
cljs.core.logic.t467798.prototype.cljs$core$logic$IWithPrefix$_with_prefix$arity$2 = (function (_,p__$2){var self__ = this;
var ___$1 = this;return self__._BANG__EQ_c.call(null,p__$2);
});
cljs.core.logic.t467798.prototype.cljs$core$logic$IPrefix$ = true;
cljs.core.logic.t467798.prototype.cljs$core$logic$IPrefix$_prefix$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.p;
});
cljs.core.logic.t467798.prototype.cljs$core$logic$IConstraintStep$ = true;
cljs.core.logic.t467798.prototype.cljs$core$logic$IConstraintStep$_step$arity$2 = (function (this$,s){var self__ = this;
var this$__$1 = this;if(typeof cljs.core.logic.t467803 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.t467803 = (function (s,this$,meta467799,p,_BANG__EQ_c,meta467804){
this.s = s;
this.this$ = this$;
this.meta467799 = meta467799;
this.p = p;
this._BANG__EQ_c = _BANG__EQ_c;
this.meta467804 = meta467804;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.logic.t467803.cljs$lang$type = true;
cljs.core.logic.t467803.cljs$lang$ctorStr = "cljs.core.logic/t467803";
cljs.core.logic.t467803.cljs$lang$ctorPrWriter = (function (this__7389__auto__,writer__7390__auto__,opt__7391__auto__){return cljs.core._write.call(null,writer__7390__auto__,"cljs.core.logic/t467803");
});
cljs.core.logic.t467803.prototype.cljs$core$logic$IEntailed$ = true;
cljs.core.logic.t467803.prototype.cljs$core$logic$IEntailed$_entailed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.empty_QMARK_.call(null,self__.p);
});
cljs.core.logic.t467803.prototype.cljs$core$logic$IRunnable$ = true;
cljs.core.logic.t467803.prototype.cljs$core$logic$IRunnable$_runnable_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.some.call(null,(function (p1__467786_SHARP_){return cljs.core.not_EQ_.call(null,cljs.core.logic._walk.call(null,self__.s,p1__467786_SHARP_),p1__467786_SHARP_);
}),cljs.core.logic.recover_vars.call(null,self__.p));
});
cljs.core.logic.t467803.prototype.call = (function (self__,s__$2){var self__ = this;
var self____$1 = this;var _ = self____$1;var p__$3 = (function (){var sp = cljs.core.seq.call(null,self__.p);var p__$3 = self__.p;while(true){
if(cljs.core.truth_(sp))
{var vec__467807 = cljs.core.first.call(null,sp);var x = cljs.core.nth.call(null,vec__467807,0,null);var v = cljs.core.nth.call(null,vec__467807,1,null);var xv = cljs.core.logic._walk_STAR_.call(null,s__$2,x);var vv = cljs.core.logic._walk_STAR_.call(null,s__$2,v);if(cljs.core._EQ_.call(null,xv,vv))
{{
var G__467809 = cljs.core.next.call(null,sp);
var G__467810 = cljs.core.dissoc.call(null,p__$3,x);
sp = G__467809;
p__$3 = G__467810;
continue;
}
} else
{if((cljs.core.logic._unify.call(null,s__$2,xv,vv) == null))
{return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__467811 = cljs.core.next.call(null,sp);
var G__467812 = cljs.core.assoc.call(null,cljs.core.dissoc.call(null,p__$3,x),xv,vv);
sp = G__467811;
p__$3 = G__467812;
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
cljs.core.logic.t467803.prototype.apply = (function (self__,args467806){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args467806)));
});
cljs.core.logic.t467803.prototype.cljs$core$IFn$_invoke$arity$1 = (function (s__$2){var self__ = this;
var _ = this;var p__$3 = (function (){var sp = cljs.core.seq.call(null,self__.p);var p__$3 = self__.p;while(true){
if(cljs.core.truth_(sp))
{var vec__467808 = cljs.core.first.call(null,sp);var x = cljs.core.nth.call(null,vec__467808,0,null);var v = cljs.core.nth.call(null,vec__467808,1,null);var xv = cljs.core.logic._walk_STAR_.call(null,s__$2,x);var vv = cljs.core.logic._walk_STAR_.call(null,s__$2,v);if(cljs.core._EQ_.call(null,xv,vv))
{{
var G__467813 = cljs.core.next.call(null,sp);
var G__467814 = cljs.core.dissoc.call(null,p__$3,x);
sp = G__467813;
p__$3 = G__467814;
continue;
}
} else
{if((cljs.core.logic._unify.call(null,s__$2,xv,vv) == null))
{return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__467815 = cljs.core.next.call(null,sp);
var G__467816 = cljs.core.assoc.call(null,cljs.core.dissoc.call(null,p__$3,x),xv,vv);
sp = G__467815;
p__$3 = G__467816;
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
cljs.core.logic.t467803.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_467805){var self__ = this;
var _467805__$1 = this;return self__.meta467804;
});
cljs.core.logic.t467803.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_467805,meta467804__$1){var self__ = this;
var _467805__$1 = this;return (new cljs.core.logic.t467803(self__.s,self__.this$,self__.meta467799,self__.p,self__._BANG__EQ_c,meta467804__$1));
});
cljs.core.logic.__GT_t467803 = (function __GT_t467803(s__$1,this$__$2,meta467799__$1,p__$2,_BANG__EQ_c__$2,meta467804){return (new cljs.core.logic.t467803(s__$1,this$__$2,meta467799__$1,p__$2,_BANG__EQ_c__$2,meta467804));
});
}
return (new cljs.core.logic.t467803(s,this$__$1,self__.meta467799,self__.p,self__._BANG__EQ_c,null));
});
cljs.core.logic.t467798.prototype.cljs$core$logic$ITreeConstraint$ = true;
cljs.core.logic.t467798.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_467800){var self__ = this;
var _467800__$1 = this;return self__.meta467799;
});
cljs.core.logic.t467798.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_467800,meta467799__$1){var self__ = this;
var _467800__$1 = this;return (new cljs.core.logic.t467798(self__.p,self__._BANG__EQ_c,meta467799__$1));
});
cljs.core.logic.__GT_t467798 = (function __GT_t467798(p__$1,_BANG__EQ_c__$1,meta467799){return (new cljs.core.logic.t467798(p__$1,_BANG__EQ_c__$1,meta467799));
});
}
return (new cljs.core.logic.t467798(p,_BANG__EQ_c,null));
});
/**
* A relation which guarantees no element of l will unify
* with another element of l.
*/
cljs.core.logic.distincto = (function distincto(l){return (function (a467820){return (new cljs.core.logic.Inc((function (){return cljs.core.logic.mplus.call(null,cljs.core.logic._bind.call(null,a467820,(function (a__457906__auto__){return (new cljs.core.logic.Inc((function (){return cljs.core.logic._bind.call(null,a__457906__auto__,(function (a__457873__auto__){var has_cs_QMARK___457874__auto__ = (cljs.core.count.call(null,a__457873__auto__.cs) > 0);var temp__4098__auto__ = cljs.core.logic._unify.call(null,((has_cs_QMARK___457874__auto__)?(new cljs.core.logic.Substitutions(a__457873__auto__.s,cljs.core.PersistentVector.EMPTY,a__457873__auto__.ts,a__457873__auto__.cs,a__457873__auto__.cq,a__457873__auto__.cqs,a__457873__auto__.oc,a__457873__auto__._meta)):a__457873__auto__),cljs.core.List.EMPTY,l);if(cljs.core.truth_(temp__4098__auto__))
{var ap__457875__auto__ = temp__4098__auto__;var vs__457876__auto__ = ((has_cs_QMARK___457874__auto__)?ap__457875__auto__.vs:null);var changed_QMARK___457877__auto__ = (cljs.core.count.call(null,vs__457876__auto__) > 0);if(changed_QMARK___457877__auto__)
{return cljs.core.logic.run_constraints_STAR_.call(null,vs__457876__auto__,ap__457875__auto__.cs,new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440)).call(null,(new cljs.core.logic.Substitutions(ap__457875__auto__.s,null,ap__457875__auto__.ts,ap__457875__auto__.cs,ap__457875__auto__.cq,ap__457875__auto__.cqs,ap__457875__auto__.oc,ap__457875__auto__._meta)));
} else
{return ap__457875__auto__;
}
} else
{return null;
}
}));
})));
})),(new cljs.core.logic.Inc((function (){return cljs.core.logic.mplus.call(null,cljs.core.logic._bind.call(null,a467820,(function (a__457906__auto__){return (new cljs.core.logic.Inc((function (){var h = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"h","h",-1640531423,null));return cljs.core.logic._bind.call(null,a__457906__auto__,(function (a__457873__auto__){var has_cs_QMARK___457874__auto__ = (cljs.core.count.call(null,a__457873__auto__.cs) > 0);var temp__4098__auto__ = cljs.core.logic._unify.call(null,((has_cs_QMARK___457874__auto__)?(new cljs.core.logic.Substitutions(a__457873__auto__.s,cljs.core.PersistentVector.EMPTY,a__457873__auto__.ts,a__457873__auto__.cs,a__457873__auto__.cq,a__457873__auto__.cqs,a__457873__auto__.oc,a__457873__auto__._meta)):a__457873__auto__),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [h], null),l);if(cljs.core.truth_(temp__4098__auto__))
{var ap__457875__auto__ = temp__4098__auto__;var vs__457876__auto__ = ((has_cs_QMARK___457874__auto__)?ap__457875__auto__.vs:null);var changed_QMARK___457877__auto__ = (cljs.core.count.call(null,vs__457876__auto__) > 0);if(changed_QMARK___457877__auto__)
{return cljs.core.logic.run_constraints_STAR_.call(null,vs__457876__auto__,ap__457875__auto__.cs,new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440)).call(null,(new cljs.core.logic.Substitutions(ap__457875__auto__.s,null,ap__457875__auto__.ts,ap__457875__auto__.cs,ap__457875__auto__.cq,ap__457875__auto__.cqs,ap__457875__auto__.oc,ap__457875__auto__._meta)));
} else
{return ap__457875__auto__;
}
} else
{return null;
}
}));
})));
})),(new cljs.core.logic.Inc((function (){return cljs.core.logic._bind.call(null,a467820,(function (a__457906__auto__){return (new cljs.core.logic.Inc((function (){var t = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"t","t",-1640531411,null));var h1 = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"h1","h1",-1640528254,null));var h0 = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"h0","h0",-1640528255,null));return cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,a__457906__auto__,(function (a__457873__auto__){var has_cs_QMARK___457874__auto__ = (cljs.core.count.call(null,a__457873__auto__.cs) > 0);var temp__4098__auto__ = cljs.core.logic._unify.call(null,((has_cs_QMARK___457874__auto__)?(new cljs.core.logic.Substitutions(a__457873__auto__.s,cljs.core.PersistentVector.EMPTY,a__457873__auto__.ts,a__457873__auto__.cs,a__457873__auto__.cq,a__457873__auto__.cqs,a__457873__auto__.oc,a__457873__auto__._meta)):a__457873__auto__),cljs.core.logic.lcons.call(null,h0,cljs.core.logic.lcons.call(null,h1,t)),l);if(cljs.core.truth_(temp__4098__auto__))
{var ap__457875__auto__ = temp__4098__auto__;var vs__457876__auto__ = ((has_cs_QMARK___457874__auto__)?ap__457875__auto__.vs:null);var changed_QMARK___457877__auto__ = (cljs.core.count.call(null,vs__457876__auto__) > 0);if(changed_QMARK___457877__auto__)
{return cljs.core.logic.run_constraints_STAR_.call(null,vs__457876__auto__,ap__457875__auto__.cs,new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440)).call(null,(new cljs.core.logic.Substitutions(ap__457875__auto__.s,null,ap__457875__auto__.ts,ap__457875__auto__.cs,ap__457875__auto__.cq,ap__457875__auto__.cqs,ap__457875__auto__.oc,ap__457875__auto__._meta)));
} else
{return ap__457875__auto__;
}
} else
{return null;
}
})),(function (a__457883__auto__){var cs__457884__auto__ = cljs.core.logic.disunify.call(null,a__457883__auto__,h0,h1);if(!((cs__457884__auto__ == null)))
{var p__457885__auto__ = new cljs.core.Keyword(null,"prefixc","prefixc",695243651).cljs$core$IFn$_invoke$arity$1(cs__457884__auto__);if(cljs.core.empty_QMARK_.call(null,p__457885__auto__))
{return null;
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p__467821){var vec__467822 = p__467821;var u__457886__auto__ = cljs.core.nth.call(null,vec__467822,0,null);var v__457887__auto__ = cljs.core.nth.call(null,vec__467822,1,null);return (cljs.core.logic._unify.call(null,a__457883__auto__,u__457886__auto__,v__457887__auto__) == null);
}),p__457885__auto__)))
{return a__457883__auto__;
} else
{return cljs.core.logic.cgoal.call(null,cljs.core.logic._BANG__EQ_c.call(null,p__457885__auto__)).call(null,a__457883__auto__);
}
}
} else
{return a__457883__auto__;
}
})),distincto.call(null,cljs.core.logic.lcons.call(null,h0,t))),distincto.call(null,cljs.core.logic.lcons.call(null,h1,t)));
})));
}));
}))));
}))));
})));
});
});
/**
* A relation between l and o where is removed from
* l exactly one time.
*/
cljs.core.logic.rembero = (function rembero(x,l,o){return (function (a467826){return (new cljs.core.logic.Inc((function (){return cljs.core.logic.mplus.call(null,cljs.core.logic._bind.call(null,a467826,(function (a__457906__auto__){return (new cljs.core.logic.Inc((function (){var xs = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"xs","xs",-1640527692,null));return cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,a__457906__auto__,(function (a__457873__auto__){var has_cs_QMARK___457874__auto__ = (cljs.core.count.call(null,a__457873__auto__.cs) > 0);var temp__4098__auto__ = cljs.core.logic._unify.call(null,((has_cs_QMARK___457874__auto__)?(new cljs.core.logic.Substitutions(a__457873__auto__.s,cljs.core.PersistentVector.EMPTY,a__457873__auto__.ts,a__457873__auto__.cs,a__457873__auto__.cq,a__457873__auto__.cqs,a__457873__auto__.oc,a__457873__auto__._meta)):a__457873__auto__),cljs.core.logic.lcons.call(null,x,xs),l);if(cljs.core.truth_(temp__4098__auto__))
{var ap__457875__auto__ = temp__4098__auto__;var vs__457876__auto__ = ((has_cs_QMARK___457874__auto__)?ap__457875__auto__.vs:null);var changed_QMARK___457877__auto__ = (cljs.core.count.call(null,vs__457876__auto__) > 0);if(changed_QMARK___457877__auto__)
{return cljs.core.logic.run_constraints_STAR_.call(null,vs__457876__auto__,ap__457875__auto__.cs,new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440)).call(null,(new cljs.core.logic.Substitutions(ap__457875__auto__.s,null,ap__457875__auto__.ts,ap__457875__auto__.cs,ap__457875__auto__.cq,ap__457875__auto__.cqs,ap__457875__auto__.oc,ap__457875__auto__._meta)));
} else
{return ap__457875__auto__;
}
} else
{return null;
}
})),(function (a__457906__auto____$1){return (new cljs.core.logic.Inc((function (){return cljs.core.logic._bind.call(null,a__457906__auto____$1,(function (a__457873__auto__){var has_cs_QMARK___457874__auto__ = (cljs.core.count.call(null,a__457873__auto__.cs) > 0);var temp__4098__auto__ = cljs.core.logic._unify.call(null,((has_cs_QMARK___457874__auto__)?(new cljs.core.logic.Substitutions(a__457873__auto__.s,cljs.core.PersistentVector.EMPTY,a__457873__auto__.ts,a__457873__auto__.cs,a__457873__auto__.cq,a__457873__auto__.cqs,a__457873__auto__.oc,a__457873__auto__._meta)):a__457873__auto__),xs,o);if(cljs.core.truth_(temp__4098__auto__))
{var ap__457875__auto__ = temp__4098__auto__;var vs__457876__auto__ = ((has_cs_QMARK___457874__auto__)?ap__457875__auto__.vs:null);var changed_QMARK___457877__auto__ = (cljs.core.count.call(null,vs__457876__auto__) > 0);if(changed_QMARK___457877__auto__)
{return cljs.core.logic.run_constraints_STAR_.call(null,vs__457876__auto__,ap__457875__auto__.cs,new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440)).call(null,(new cljs.core.logic.Substitutions(ap__457875__auto__.s,null,ap__457875__auto__.ts,ap__457875__auto__.cs,ap__457875__auto__.cq,ap__457875__auto__.cqs,ap__457875__auto__.oc,ap__457875__auto__._meta)));
} else
{return ap__457875__auto__;
}
} else
{return null;
}
}));
})));
}));
})));
})),(new cljs.core.logic.Inc((function (){return cljs.core.logic._bind.call(null,a467826,(function (a__457906__auto__){return (new cljs.core.logic.Inc((function (){var ys = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"ys","ys",-1640527661,null));var y = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"y","y",-1640531406,null));return cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,a__457906__auto__,(function (a__457873__auto__){var has_cs_QMARK___457874__auto__ = (cljs.core.count.call(null,a__457873__auto__.cs) > 0);var temp__4098__auto__ = cljs.core.logic._unify.call(null,((has_cs_QMARK___457874__auto__)?(new cljs.core.logic.Substitutions(a__457873__auto__.s,cljs.core.PersistentVector.EMPTY,a__457873__auto__.ts,a__457873__auto__.cs,a__457873__auto__.cq,a__457873__auto__.cqs,a__457873__auto__.oc,a__457873__auto__._meta)):a__457873__auto__),cljs.core.logic.lcons.call(null,y,ys),l);if(cljs.core.truth_(temp__4098__auto__))
{var ap__457875__auto__ = temp__4098__auto__;var vs__457876__auto__ = ((has_cs_QMARK___457874__auto__)?ap__457875__auto__.vs:null);var changed_QMARK___457877__auto__ = (cljs.core.count.call(null,vs__457876__auto__) > 0);if(changed_QMARK___457877__auto__)
{return cljs.core.logic.run_constraints_STAR_.call(null,vs__457876__auto__,ap__457875__auto__.cs,new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440)).call(null,(new cljs.core.logic.Substitutions(ap__457875__auto__.s,null,ap__457875__auto__.ts,ap__457875__auto__.cs,ap__457875__auto__.cq,ap__457875__auto__.cqs,ap__457875__auto__.oc,ap__457875__auto__._meta)));
} else
{return ap__457875__auto__;
}
} else
{return null;
}
})),(function (a__457906__auto____$1){return (new cljs.core.logic.Inc((function (){var zs = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"zs","zs",-1640527630,null));return cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,a__457906__auto____$1,(function (a__457873__auto__){var has_cs_QMARK___457874__auto__ = (cljs.core.count.call(null,a__457873__auto__.cs) > 0);var temp__4098__auto__ = cljs.core.logic._unify.call(null,((has_cs_QMARK___457874__auto__)?(new cljs.core.logic.Substitutions(a__457873__auto__.s,cljs.core.PersistentVector.EMPTY,a__457873__auto__.ts,a__457873__auto__.cs,a__457873__auto__.cq,a__457873__auto__.cqs,a__457873__auto__.oc,a__457873__auto__._meta)):a__457873__auto__),cljs.core.logic.lcons.call(null,y,zs),o);if(cljs.core.truth_(temp__4098__auto__))
{var ap__457875__auto__ = temp__4098__auto__;var vs__457876__auto__ = ((has_cs_QMARK___457874__auto__)?ap__457875__auto__.vs:null);var changed_QMARK___457877__auto__ = (cljs.core.count.call(null,vs__457876__auto__) > 0);if(changed_QMARK___457877__auto__)
{return cljs.core.logic.run_constraints_STAR_.call(null,vs__457876__auto__,ap__457875__auto__.cs,new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440)).call(null,(new cljs.core.logic.Substitutions(ap__457875__auto__.s,null,ap__457875__auto__.ts,ap__457875__auto__.cs,ap__457875__auto__.cq,ap__457875__auto__.cqs,ap__457875__auto__.oc,ap__457875__auto__._meta)));
} else
{return ap__457875__auto__;
}
} else
{return null;
}
})),(function (a__457883__auto__){var cs__457884__auto__ = cljs.core.logic.disunify.call(null,a__457883__auto__,y,x);if(!((cs__457884__auto__ == null)))
{var p__457885__auto__ = new cljs.core.Keyword(null,"prefixc","prefixc",695243651).cljs$core$IFn$_invoke$arity$1(cs__457884__auto__);if(cljs.core.empty_QMARK_.call(null,p__457885__auto__))
{return null;
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p__467827){var vec__467828 = p__467827;var u__457886__auto__ = cljs.core.nth.call(null,vec__467828,0,null);var v__457887__auto__ = cljs.core.nth.call(null,vec__467828,1,null);return (cljs.core.logic._unify.call(null,a__457883__auto__,u__457886__auto__,v__457887__auto__) == null);
}),p__457885__auto__)))
{return a__457883__auto__;
} else
{return cljs.core.logic.cgoal.call(null,cljs.core.logic._BANG__EQ_c.call(null,p__457885__auto__)).call(null,a__457883__auto__);
}
}
} else
{return a__457883__auto__;
}
})),rembero.call(null,x,ys,zs));
})));
}));
})));
}));
}))));
})));
});
});
cljs.core.logic.ground_term_QMARK_ = (function ground_term_QMARK_(x,s){var _ground_term_QMARK_ = (function _ground_term_QMARK_(x__$1,s__$1){var x__$2 = cljs.core.logic._walk.call(null,s__$1,x__$1);if(cljs.core.truth_(cljs.core.logic.lvar_QMARK_.call(null,x__$2)))
{throw (new Error());
} else
{return cljs.core.logic._walk_term.call(null,x__$2,(function (x__$3){var x__$4 = cljs.core.logic._walk.call(null,s__$1,x__$3);if(cljs.core.truth_(cljs.core.logic.lvar_QMARK_.call(null,x__$4)))
{throw (new Error());
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
}catch (e467830){if((e467830 instanceof Error))
{var e = e467830;return false;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e467830;
} else
{return null;
}
}
}});
cljs.core.logic._predc = (function() {
var _predc = null;
var _predc__2 = (function (x,p){return _predc.call(null,x,p,p);
});
var _predc__3 = (function (x,p,pform){if(typeof cljs.core.logic.t467838 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.t467838 = (function (pform,p,x,_predc,meta467839){
this.pform = pform;
this.p = p;
this.x = x;
this._predc = _predc;
this.meta467839 = meta467839;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.logic.t467838.cljs$lang$type = true;
cljs.core.logic.t467838.cljs$lang$ctorStr = "cljs.core.logic/t467838";
cljs.core.logic.t467838.cljs$lang$ctorPrWriter = (function (this__7389__auto__,writer__7390__auto__,opt__7391__auto__){return cljs.core._write.call(null,writer__7390__auto__,"cljs.core.logic/t467838");
});
cljs.core.logic.t467838.prototype.cljs$core$logic$IConstraintWatchedStores$ = true;
cljs.core.logic.t467838.prototype.cljs$core$logic$IConstraintWatchedStores$_watched_stores$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440),null], null), null);
});
cljs.core.logic.t467838.prototype.cljs$core$logic$IReifiableConstraint$ = true;
cljs.core.logic.t467838.prototype.cljs$core$logic$IReifiableConstraint$_reifyc$arity$4 = (function (c,v,r,s){var self__ = this;
var c__$1 = this;if((cljs.core.not_EQ_.call(null,self__.p,self__.pform)) && (cljs.core.fn_QMARK_.call(null,self__.pform)))
{return self__.pform.call(null,c__$1,v,r,s);
} else
{return self__.pform;
}
});
cljs.core.logic.t467838.prototype.cljs$core$logic$IConstraintOp$ = true;
cljs.core.logic.t467838.prototype.cljs$core$logic$IConstraintOp$_rator$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(cljs.core.seq_QMARK_.call(null,self__.pform))
{return cljs.core.with_meta.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic","predc","cljs.core.logic/predc",895622310,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2204),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,24),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2204),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,29)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,self__.pform))),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2204),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,23),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2204),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,37)))));
} else
{return cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic","predc","cljs.core.logic/predc",895622310,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2205),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,23),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2205),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,44)))));
}
});
cljs.core.logic.t467838.prototype.cljs$core$logic$IConstraintOp$_rands$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.x], null);
});
cljs.core.logic.t467838.prototype.cljs$core$logic$IConstraintStep$ = true;
cljs.core.logic.t467838.prototype.cljs$core$logic$IConstraintStep$_step$arity$2 = (function (this$,s){var self__ = this;
var this$__$1 = this;if(typeof cljs.core.logic.t467841 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.t467841 = (function (s,this$,meta467839,pform,p,x,_predc,meta467842){
this.s = s;
this.this$ = this$;
this.meta467839 = meta467839;
this.pform = pform;
this.p = p;
this.x = x;
this._predc = _predc;
this.meta467842 = meta467842;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.logic.t467841.cljs$lang$type = true;
cljs.core.logic.t467841.cljs$lang$ctorStr = "cljs.core.logic/t467841";
cljs.core.logic.t467841.cljs$lang$ctorPrWriter = (function (this__7389__auto__,writer__7390__auto__,opt__7391__auto__){return cljs.core._write.call(null,writer__7390__auto__,"cljs.core.logic/t467841");
});
cljs.core.logic.t467841.prototype.cljs$core$logic$IRunnable$ = true;
cljs.core.logic.t467841.prototype.cljs$core$logic$IRunnable$_runnable_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.not.call(null,cljs.core.logic.lvar_QMARK_.call(null,cljs.core.logic._walk.call(null,self__.s,self__.x)));
});
cljs.core.logic.t467841.prototype.call = (function (self__,s__$2){var self__ = this;
var self____$1 = this;var _ = self____$1;var x__$3 = cljs.core.logic._walk.call(null,s__$2,self__.x);if(cljs.core.truth_(self__.p.call(null,x__$3)))
{return cljs.core.logic.remcg.call(null,self__.this$).call(null,s__$2);
} else
{return null;
}
});
cljs.core.logic.t467841.prototype.apply = (function (self__,args467844){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args467844)));
});
cljs.core.logic.t467841.prototype.cljs$core$IFn$_invoke$arity$1 = (function (s__$2){var self__ = this;
var _ = this;var x__$3 = cljs.core.logic._walk.call(null,s__$2,self__.x);if(cljs.core.truth_(self__.p.call(null,x__$3)))
{return cljs.core.logic.remcg.call(null,self__.this$).call(null,s__$2);
} else
{return null;
}
});
cljs.core.logic.t467841.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_467843){var self__ = this;
var _467843__$1 = this;return self__.meta467842;
});
cljs.core.logic.t467841.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_467843,meta467842__$1){var self__ = this;
var _467843__$1 = this;return (new cljs.core.logic.t467841(self__.s,self__.this$,self__.meta467839,self__.pform,self__.p,self__.x,self__._predc,meta467842__$1));
});
cljs.core.logic.__GT_t467841 = (function __GT_t467841(s__$1,this$__$2,meta467839__$1,pform__$2,p__$2,x__$2,_predc__$2,meta467842){return (new cljs.core.logic.t467841(s__$1,this$__$2,meta467839__$1,pform__$2,p__$2,x__$2,_predc__$2,meta467842));
});
}
return (new cljs.core.logic.t467841(s,this$__$1,self__.meta467839,self__.pform,self__.p,self__.x,self__._predc,null));
});
cljs.core.logic.t467838.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_467840){var self__ = this;
var _467840__$1 = this;return self__.meta467839;
});
cljs.core.logic.t467838.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_467840,meta467839__$1){var self__ = this;
var _467840__$1 = this;return (new cljs.core.logic.t467838(self__.pform,self__.p,self__.x,self__._predc,meta467839__$1));
});
cljs.core.logic.__GT_t467838 = (function __GT_t467838(pform__$1,p__$1,x__$1,_predc__$1,meta467839){return (new cljs.core.logic.t467838(pform__$1,p__$1,x__$1,_predc__$1,meta467839));
});
}
return (new cljs.core.logic.t467838(pform,p,x,_predc,null));
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
var G__467845 = f__$1.call(null);
f__$1 = G__467845;
continue;
}
} else
{return f__$1;
}
break;
}
});
cljs.core.logic._nafc = (function _nafc(c,args){if(typeof cljs.core.logic.t467854 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.t467854 = (function (args,c,_nafc,meta467855){
this.args = args;
this.c = c;
this._nafc = _nafc;
this.meta467855 = meta467855;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.logic.t467854.cljs$lang$type = true;
cljs.core.logic.t467854.cljs$lang$ctorStr = "cljs.core.logic/t467854";
cljs.core.logic.t467854.cljs$lang$ctorPrWriter = (function (this__7389__auto__,writer__7390__auto__,opt__7391__auto__){return cljs.core._write.call(null,writer__7390__auto__,"cljs.core.logic/t467854");
});
cljs.core.logic.t467854.prototype.cljs$core$logic$IConstraintWatchedStores$ = true;
cljs.core.logic.t467854.prototype.cljs$core$logic$IConstraintWatchedStores$_watched_stores$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440),null], null), null);
});
cljs.core.logic.t467854.prototype.cljs$core$logic$IReifiableConstraint$ = true;
cljs.core.logic.t467854.prototype.cljs$core$logic$IReifiableConstraint$_reifyc$arity$4 = (function (_,v,r,s){var self__ = this;
var ___$1 = this;return cljs.core.with_meta.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic","nafc","cljs.core.logic/nafc",1019102320,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2246),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,12),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2246),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,16)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,self__.c),cljs.core.logic._reify.call(null,s,self__.args,r))),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2246),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,11),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2246),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,40)))));
});
cljs.core.logic.t467854.prototype.cljs$core$logic$IConstraintOp$ = true;
cljs.core.logic.t467854.prototype.cljs$core$logic$IConstraintOp$_rator$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic","nafc","cljs.core.logic/nafc",1019102320,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2242),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,21),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2242),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,41)))));
});
cljs.core.logic.t467854.prototype.cljs$core$logic$IConstraintOp$_rands$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.c], null),self__.args));
});
cljs.core.logic.t467854.prototype.cljs$core$logic$IConstraintStep$ = true;
cljs.core.logic.t467854.prototype.cljs$core$logic$IConstraintStep$_step$arity$2 = (function (this$,s){var self__ = this;
var this$__$1 = this;if(typeof cljs.core.logic.t467857 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.t467857 = (function (s,this$,meta467855,args,c,_nafc,meta467858){
this.s = s;
this.this$ = this$;
this.meta467855 = meta467855;
this.args = args;
this.c = c;
this._nafc = _nafc;
this.meta467858 = meta467858;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.logic.t467857.cljs$lang$type = true;
cljs.core.logic.t467857.cljs$lang$ctorStr = "cljs.core.logic/t467857";
cljs.core.logic.t467857.cljs$lang$ctorPrWriter = (function (this__7389__auto__,writer__7390__auto__,opt__7391__auto__){return cljs.core._write.call(null,writer__7390__auto__,"cljs.core.logic/t467857");
});
cljs.core.logic.t467857.prototype.cljs$core$logic$IRunnable$ = true;
cljs.core.logic.t467857.prototype.cljs$core$logic$IRunnable$_runnable_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.every_QMARK_.call(null,(function (p1__467846_SHARP_){return cljs.core.logic.ground_term_QMARK_.call(null,p1__467846_SHARP_,self__.s);
}),self__.args);
});
cljs.core.logic.t467857.prototype.call = (function (self__,s__$2){var self__ = this;
var self____$1 = this;var _ = self____$1;if(cljs.core.truth_(cljs.core.logic.tramp.call(null,cljs.core.apply.call(null,self__.c,self__.args).call(null,s__$2))))
{return null;
} else
{return cljs.core.logic.remcg.call(null,self__.this$).call(null,s__$2);
}
});
cljs.core.logic.t467857.prototype.apply = (function (self__,args467860){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args467860)));
});
cljs.core.logic.t467857.prototype.cljs$core$IFn$_invoke$arity$1 = (function (s__$2){var self__ = this;
var _ = this;if(cljs.core.truth_(cljs.core.logic.tramp.call(null,cljs.core.apply.call(null,self__.c,self__.args).call(null,s__$2))))
{return null;
} else
{return cljs.core.logic.remcg.call(null,self__.this$).call(null,s__$2);
}
});
cljs.core.logic.t467857.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_467859){var self__ = this;
var _467859__$1 = this;return self__.meta467858;
});
cljs.core.logic.t467857.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_467859,meta467858__$1){var self__ = this;
var _467859__$1 = this;return (new cljs.core.logic.t467857(self__.s,self__.this$,self__.meta467855,self__.args,self__.c,self__._nafc,meta467858__$1));
});
cljs.core.logic.__GT_t467857 = (function __GT_t467857(s__$1,this$__$2,meta467855__$1,args__$2,c__$2,_nafc__$2,meta467858){return (new cljs.core.logic.t467857(s__$1,this$__$2,meta467855__$1,args__$2,c__$2,_nafc__$2,meta467858));
});
}
return (new cljs.core.logic.t467857(s,this$__$1,self__.meta467855,self__.args,self__.c,self__._nafc,null));
});
cljs.core.logic.t467854.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_467856){var self__ = this;
var _467856__$1 = this;return self__.meta467855;
});
cljs.core.logic.t467854.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_467856,meta467855__$1){var self__ = this;
var _467856__$1 = this;return (new cljs.core.logic.t467854(self__.args,self__.c,self__._nafc,meta467855__$1));
});
cljs.core.logic.__GT_t467854 = (function __GT_t467854(args__$1,c__$1,_nafc__$1,meta467855){return (new cljs.core.logic.t467854(args__$1,c__$1,_nafc__$1,meta467855));
});
}
return (new cljs.core.logic.t467854(args,c,_nafc,null));
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
nafc.cljs$lang$applyTo = (function (arglist__467861){
var c = cljs.core.first(arglist__467861);
var args = cljs.core.rest(arglist__467861);
return nafc__delegate(c,args);
});
nafc.cljs$core$IFn$_invoke$arity$variadic = nafc__delegate;
return nafc;
})()
;
cljs.core.logic.IConstrainTree = (function (){var obj467863 = {};return obj467863;
})();
cljs.core.logic._constrain_tree = (function _constrain_tree(t,fc,s){if((function (){var and__6833__auto__ = t;if(and__6833__auto__)
{return t.cljs$core$logic$IConstrainTree$_constrain_tree$arity$3;
} else
{return and__6833__auto__;
}
})())
{return t.cljs$core$logic$IConstrainTree$_constrain_tree$arity$3(t,fc,s);
} else
{var x__7448__auto__ = (((t == null))?null:t);return (function (){var or__6845__auto__ = (cljs.core.logic._constrain_tree[goog.typeOf(x__7448__auto__)]);if(or__6845__auto__)
{return or__6845__auto__;
} else
{var or__6845__auto____$1 = (cljs.core.logic._constrain_tree["_"]);if(or__6845__auto____$1)
{return or__6845__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IConstrainTree.-constrain-tree",t);
}
}
})().call(null,t,fc,s);
}
});
cljs.core.logic.constrain_tree_map = (function constrain_tree_map(t,fc,s){var t__$1 = cljs.core.seq.call(null,t);var s__$1 = s;while(true){
if(cljs.core.truth_(t__$1))
{var vec__467865 = cljs.core.first.call(null,t__$1);var _ = cljs.core.nth.call(null,vec__467865,0,null);var v = cljs.core.nth.call(null,vec__467865,1,null);var s__$2 = fc.call(null,v,s__$1);if(cljs.core.truth_(s__$2))
{{
var G__467866 = cljs.core.next.call(null,t__$1);
var G__467867 = s__$2;
t__$1 = G__467866;
s__$1 = G__467867;
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
(cljs.core.logic.IConstrainTree["_"] = true);
(cljs.core.logic._constrain_tree["_"] = (function (t,fc,s){if(cljs.core.sequential_QMARK_.call(null,t))
{var t__$1 = cljs.core.seq.call(null,t);var s__$1 = s;while(true){
if(cljs.core.truth_(t__$1))
{var temp__4098__auto__ = fc.call(null,cljs.core.first.call(null,t__$1),s__$1);if(cljs.core.truth_(temp__4098__auto__))
{var s__$2 = temp__4098__auto__;{
var G__467868 = cljs.core.next.call(null,t__$1);
var G__467869 = s__$2;
t__$1 = G__467868;
s__$1 = G__467869;
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
{if(cljs.core.logic.record_QMARK_.call(null,t))
{return cljs.core.logic.constrain_tree_map.call(null,t,fc,s);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return null;
} else
{return null;
}
}
}
}));
cljs.core.PersistentHashMap.prototype.cljs$core$logic$IConstrainTree$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$logic$IConstrainTree$_constrain_tree$arity$3 = (function (t,fc,s){var t__$1 = this;return cljs.core.logic.constrain_tree_map.call(null,t__$1,fc,s);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$logic$IConstrainTree$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$logic$IConstrainTree$_constrain_tree$arity$3 = (function (t,fc,s){var t__$1 = this;return cljs.core.logic.constrain_tree_map.call(null,t__$1,fc,s);
});
cljs.core.logic.LCons.prototype.cljs$core$logic$IConstrainTree$ = true;
cljs.core.logic.LCons.prototype.cljs$core$logic$IConstrainTree$_constrain_tree$arity$3 = (function (t,fc,s){var t__$1 = this;var t__$2 = t__$1;var s__$1 = s;while(true){
if(cljs.core.truth_(cljs.core.logic.lvar_QMARK_.call(null,t__$2)))
{return fc.call(null,t__$2,s__$1);
} else
{var temp__4098__auto__ = fc.call(null,cljs.core.logic._lfirst.call(null,t__$2),s__$1);if(cljs.core.truth_(temp__4098__auto__))
{var s__$2 = temp__4098__auto__;{
var G__467870 = cljs.core.logic._lnext.call(null,t__$2);
var G__467871 = s__$2;
t__$2 = G__467870;
s__$1 = G__467871;
continue;
}
} else
{return null;
}
}
break;
}
});
cljs.core.logic.constrain_tree = (function constrain_tree(t,fc){return (function (a){return cljs.core.logic._constrain_tree.call(null,t,fc,a);
});
});
cljs.core.logic._fixc = (function() {
var _fixc = null;
var _fixc__3 = (function (x,f,reifier){return _fixc.call(null,x,f,null,reifier);
});
var _fixc__4 = (function (x,f,runnable,reifier){if(typeof cljs.core.logic.t467879 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.t467879 = (function (reifier,runnable,f,x,_fixc,meta467880){
this.reifier = reifier;
this.runnable = runnable;
this.f = f;
this.x = x;
this._fixc = _fixc;
this.meta467880 = meta467880;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.logic.t467879.cljs$lang$type = true;
cljs.core.logic.t467879.cljs$lang$ctorStr = "cljs.core.logic/t467879";
cljs.core.logic.t467879.cljs$lang$ctorPrWriter = (function (this__7389__auto__,writer__7390__auto__,opt__7391__auto__){return cljs.core._write.call(null,writer__7390__auto__,"cljs.core.logic/t467879");
});
cljs.core.logic.t467879.prototype.cljs$core$logic$IConstraintWatchedStores$ = true;
cljs.core.logic.t467879.prototype.cljs$core$logic$IConstraintWatchedStores$_watched_stores$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440),null], null), null);
});
cljs.core.logic.t467879.prototype.cljs$core$logic$IReifiableConstraint$ = true;
cljs.core.logic.t467879.prototype.cljs$core$logic$IReifiableConstraint$_reifyc$arity$4 = (function (c,v,r,s){var self__ = this;
var c__$1 = this;if(cljs.core.fn_QMARK_.call(null,self__.reifier))
{return self__.reifier.call(null,c__$1,self__.x,v,r,s);
} else
{var x__$2 = cljs.core.logic._walk_STAR_.call(null,r,self__.x);return cljs.core.with_meta.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic","fixc","cljs.core.logic/fixc",1018347826,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2332),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,16),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2332),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,20)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,x__$2),cljs.core._conj.call(null,cljs.core.List.EMPTY,self__.reifier))),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2332),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,15),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2332),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,33)))));
}
});
cljs.core.logic.t467879.prototype.cljs$core$logic$IConstraintOp$ = true;
cljs.core.logic.t467879.prototype.cljs$core$logic$IConstraintOp$_rator$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic","fixc","cljs.core.logic/fixc",1018347826,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2325),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,21),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2325),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,41)))));
});
cljs.core.logic.t467879.prototype.cljs$core$logic$IConstraintOp$_rands$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(cljs.core.vector_QMARK_.call(null,self__.x))
{return self__.x;
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.x], null);
}
});
cljs.core.logic.t467879.prototype.cljs$core$logic$IConstraintStep$ = true;
cljs.core.logic.t467879.prototype.cljs$core$logic$IConstraintStep$_step$arity$2 = (function (this$,s){var self__ = this;
var this$__$1 = this;var xv = cljs.core.logic._walk.call(null,s,self__.x);if(typeof cljs.core.logic.t467882 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.t467882 = (function (xv,s,this$,meta467880,reifier,runnable,f,x,_fixc,meta467883){
this.xv = xv;
this.s = s;
this.this$ = this$;
this.meta467880 = meta467880;
this.reifier = reifier;
this.runnable = runnable;
this.f = f;
this.x = x;
this._fixc = _fixc;
this.meta467883 = meta467883;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.logic.t467882.cljs$lang$type = true;
cljs.core.logic.t467882.cljs$lang$ctorStr = "cljs.core.logic/t467882";
cljs.core.logic.t467882.cljs$lang$ctorPrWriter = (function (this__7389__auto__,writer__7390__auto__,opt__7391__auto__){return cljs.core._write.call(null,writer__7390__auto__,"cljs.core.logic/t467882");
});
cljs.core.logic.t467882.prototype.cljs$core$logic$IRunnable$ = true;
cljs.core.logic.t467882.prototype.cljs$core$logic$IRunnable$_runnable_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(cljs.core.fn_QMARK_.call(null,self__.runnable))
{return self__.runnable.call(null,self__.x,self__.s);
} else
{return cljs.core.not.call(null,cljs.core.logic.lvar_QMARK_.call(null,self__.xv));
}
});
cljs.core.logic.t467882.prototype.call = (function (self__,s__$2){var self__ = this;
var self____$1 = this;var _ = self____$1;return cljs.core.logic.composeg.call(null,self__.f.call(null,self__.xv,s__$2,self__.reifier),cljs.core.logic.remcg.call(null,self__.this$)).call(null,s__$2);
});
cljs.core.logic.t467882.prototype.apply = (function (self__,args467885){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args467885)));
});
cljs.core.logic.t467882.prototype.cljs$core$IFn$_invoke$arity$1 = (function (s__$2){var self__ = this;
var _ = this;return cljs.core.logic.composeg.call(null,self__.f.call(null,self__.xv,s__$2,self__.reifier),cljs.core.logic.remcg.call(null,self__.this$)).call(null,s__$2);
});
cljs.core.logic.t467882.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_467884){var self__ = this;
var _467884__$1 = this;return self__.meta467883;
});
cljs.core.logic.t467882.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_467884,meta467883__$1){var self__ = this;
var _467884__$1 = this;return (new cljs.core.logic.t467882(self__.xv,self__.s,self__.this$,self__.meta467880,self__.reifier,self__.runnable,self__.f,self__.x,self__._fixc,meta467883__$1));
});
cljs.core.logic.__GT_t467882 = (function __GT_t467882(xv__$1,s__$1,this$__$2,meta467880__$1,reifier__$2,runnable__$2,f__$2,x__$2,_fixc__$2,meta467883){return (new cljs.core.logic.t467882(xv__$1,s__$1,this$__$2,meta467880__$1,reifier__$2,runnable__$2,f__$2,x__$2,_fixc__$2,meta467883));
});
}
return (new cljs.core.logic.t467882(xv,s,this$__$1,self__.meta467880,self__.reifier,self__.runnable,self__.f,self__.x,self__._fixc,null));
});
cljs.core.logic.t467879.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_467881){var self__ = this;
var _467881__$1 = this;return self__.meta467880;
});
cljs.core.logic.t467879.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_467881,meta467880__$1){var self__ = this;
var _467881__$1 = this;return (new cljs.core.logic.t467879(self__.reifier,self__.runnable,self__.f,self__.x,self__._fixc,meta467880__$1));
});
cljs.core.logic.__GT_t467879 = (function __GT_t467879(reifier__$1,runnable__$1,f__$1,x__$1,_fixc__$1,meta467880){return (new cljs.core.logic.t467879(reifier__$1,runnable__$1,f__$1,x__$1,_fixc__$1,meta467880));
});
}
return (new cljs.core.logic.t467879(reifier,runnable,f,x,_fixc,null));
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
{return seqc.call(null,cljs.core.logic._lnext.call(null,t));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.logic.fail;
} else
{return null;
}
}
}
}),(function (_,v__$1,___$1,r,a){return cljs.core.with_meta.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic","seqc","cljs.core.logic/seqc",1018702372,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2358),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,13),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2358),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,17)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.logic._reify.call(null,a,v__$1,r)))),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2358),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,12),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2358),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,34)))));
}));
});
cljs.core.logic.patho_112 = (function tabled_a3c62f26_02cc_4c62_829a_31f057c8d678(graph,start,end){var argv__458161__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [graph,start,end], null);return (function (a__458162__auto__){var key__458163__auto__ = cljs.core.logic._reify.call(null,a__458162__auto__,argv__458161__auto__);var tables__458164__auto__ = a__458162__auto__.ts;var tables__458164__auto____$1 = ((!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,tables__458164__auto__),tabled_a3c62f26_02cc_4c62_829a_31f057c8d678)))?cljs.core.swap_BANG_.call(null,tables__458164__auto__,((function (key__458163__auto__,tables__458164__auto__){
return (function (tables__458164__auto____$1){if(cljs.core.contains_QMARK_.call(null,tables__458164__auto____$1,tabled_a3c62f26_02cc_4c62_829a_31f057c8d678))
{return tables__458164__auto____$1;
} else
{return cljs.core.assoc.call(null,tables__458164__auto____$1,tabled_a3c62f26_02cc_4c62_829a_31f057c8d678,cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY));
}
});})(key__458163__auto__,tables__458164__auto__))
):cljs.core.deref.call(null,tables__458164__auto__));var table__458165__auto__ = cljs.core.get.call(null,tables__458164__auto____$1,tabled_a3c62f26_02cc_4c62_829a_31f057c8d678);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,table__458165__auto__),key__458163__auto__)))
{var table__458165__auto____$1 = cljs.core.swap_BANG_.call(null,table__458165__auto__,(function (table__458165__auto____$1){if(cljs.core.contains_QMARK_.call(null,table__458165__auto____$1,key__458163__auto__))
{return table__458165__auto____$1;
} else
{return cljs.core.assoc.call(null,table__458165__auto____$1,key__458163__auto__,cljs.core.atom.call(null,cljs.core.logic.answer_cache.call(null)));
}
}));var cache__458166__auto__ = cljs.core.get.call(null,table__458165__auto____$1,key__458163__auto__);return (function (a__457906__auto__){return (new cljs.core.logic.Inc((function (){return cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,a__457906__auto__,(function (a467888){return (new cljs.core.logic.Inc((function (){return cljs.core.logic.mplus.call(null,cljs.core.logic._bind.call(null,a467888,(function (a__457873__auto__){var has_cs_QMARK___457874__auto__ = (cljs.core.count.call(null,a__457873__auto__.cs) > 0);var temp__4098__auto__ = cljs.core.logic._unify.call(null,((has_cs_QMARK___457874__auto__)?(new cljs.core.logic.Substitutions(a__457873__auto__.s,cljs.core.PersistentVector.EMPTY,a__457873__auto__.ts,a__457873__auto__.cs,a__457873__auto__.cq,a__457873__auto__.cqs,a__457873__auto__.oc,a__457873__auto__._meta)):a__457873__auto__),start,end);if(cljs.core.truth_(temp__4098__auto__))
{var ap__457875__auto__ = temp__4098__auto__;var vs__457876__auto__ = ((has_cs_QMARK___457874__auto__)?ap__457875__auto__.vs:null);var changed_QMARK___457877__auto__ = (cljs.core.count.call(null,vs__457876__auto__) > 0);if(changed_QMARK___457877__auto__)
{return cljs.core.logic.run_constraints_STAR_.call(null,vs__457876__auto__,ap__457875__auto__.cs,new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440)).call(null,(new cljs.core.logic.Substitutions(ap__457875__auto__.s,null,ap__457875__auto__.ts,ap__457875__auto__.cs,ap__457875__auto__.cq,ap__457875__auto__.cqs,ap__457875__auto__.oc,ap__457875__auto__._meta)));
} else
{return ap__457875__auto__;
}
} else
{return null;
}
})),(new cljs.core.logic.Inc((function (){return cljs.core.logic._bind.call(null,a467888,(function (a__457906__auto____$1){return (new cljs.core.logic.Inc((function (){var _QMARK_via = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"?via","?via",-1638537944,null));var _QMARK_vias = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"?vias","?vias",-1578730339,null));return cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,a__457906__auto____$1,(function (a467889){var start__$1 = cljs.core.logic._walk_STAR_.call(null,a467889,start);var graph__$1 = cljs.core.logic._walk_STAR_.call(null,a467889,graph);return (function (a__457906__auto____$2){return (new cljs.core.logic.Inc((function (){return cljs.core.logic._bind.call(null,a__457906__auto____$2,(function (a__457873__auto__){var has_cs_QMARK___457874__auto__ = (cljs.core.count.call(null,a__457873__auto__.cs) > 0);var temp__4098__auto__ = cljs.core.logic._unify.call(null,((has_cs_QMARK___457874__auto__)?(new cljs.core.logic.Substitutions(a__457873__auto__.s,cljs.core.PersistentVector.EMPTY,a__457873__auto__.ts,a__457873__auto__.cs,a__457873__auto__.cq,a__457873__auto__.cqs,a__457873__auto__.oc,a__457873__auto__._meta)):a__457873__auto__),_QMARK_vias,new cljs.core.Keyword(null,"successors","successors",4575248255).cljs$core$IFn$_invoke$arity$1(graph__$1).call(null,start__$1));if(cljs.core.truth_(temp__4098__auto__))
{var ap__457875__auto__ = temp__4098__auto__;var vs__457876__auto__ = ((has_cs_QMARK___457874__auto__)?ap__457875__auto__.vs:null);var changed_QMARK___457877__auto__ = (cljs.core.count.call(null,vs__457876__auto__) > 0);if(changed_QMARK___457877__auto__)
{return cljs.core.logic.run_constraints_STAR_.call(null,vs__457876__auto__,ap__457875__auto__.cs,new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440)).call(null,(new cljs.core.logic.Substitutions(ap__457875__auto__.s,null,ap__457875__auto__.ts,ap__457875__auto__.cs,ap__457875__auto__.cq,ap__457875__auto__.cqs,ap__457875__auto__.oc,ap__457875__auto__._meta)));
} else
{return ap__457875__auto__;
}
} else
{return null;
}
}));
})));
}).call(null,a467889);
})),cljs.core.logic.membero.call(null,_QMARK_via,_QMARK_vias)),cljs.core.logic.patho_112.call(null,graph,_QMARK_via,end));
})));
}));
}))));
})));
})),cljs.core.logic.master.call(null,argv__458161__auto__,cache__458166__auto__));
})));
}).call(null,a__458162__auto__);
} else
{var cache__458166__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,table__458165__auto__),key__458163__auto__);return cljs.core.logic._reuse.call(null,a__458162__auto__,argv__458161__auto__,cache__458166__auto__,null,null);
}
});
});
cljs.core.logic.solve_goals = (function solve_goals(graph,curr,end,goals){return (function (a__457967__auto__){return cljs.core.logic._bind.call(null,a__457967__auto__,(function (a467893){var goals__$1 = cljs.core.logic._walk_STAR_.call(null,a467893,goals);return (function (a__457906__auto__){return (new cljs.core.logic.Inc((function (){return cljs.core.logic._bind.call(null,a__457906__auto__,(function (a467894){return (new cljs.core.logic.Inc((function (){return cljs.core.logic.mplus.call(null,cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,a467894,(function (a__457873__auto__){var has_cs_QMARK___457874__auto__ = (cljs.core.count.call(null,a__457873__auto__.cs) > 0);var temp__4098__auto__ = cljs.core.logic._unify.call(null,((has_cs_QMARK___457874__auto__)?(new cljs.core.logic.Substitutions(a__457873__auto__.s,cljs.core.PersistentVector.EMPTY,a__457873__auto__.ts,a__457873__auto__.cs,a__457873__auto__.cq,a__457873__auto__.cqs,a__457873__auto__.oc,a__457873__auto__._meta)):a__457873__auto__),true,cljs.core.empty_QMARK_.call(null,goals__$1));if(cljs.core.truth_(temp__4098__auto__))
{var ap__457875__auto__ = temp__4098__auto__;var vs__457876__auto__ = ((has_cs_QMARK___457874__auto__)?ap__457875__auto__.vs:null);var changed_QMARK___457877__auto__ = (cljs.core.count.call(null,vs__457876__auto__) > 0);if(changed_QMARK___457877__auto__)
{return cljs.core.logic.run_constraints_STAR_.call(null,vs__457876__auto__,ap__457875__auto__.cs,new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440)).call(null,(new cljs.core.logic.Substitutions(ap__457875__auto__.s,null,ap__457875__auto__.ts,ap__457875__auto__.cs,ap__457875__auto__.cq,ap__457875__auto__.cqs,ap__457875__auto__.oc,ap__457875__auto__._meta)));
} else
{return ap__457875__auto__;
}
} else
{return null;
}
})),(function (a__457873__auto__){var has_cs_QMARK___457874__auto__ = (cljs.core.count.call(null,a__457873__auto__.cs) > 0);var temp__4098__auto__ = cljs.core.logic._unify.call(null,((has_cs_QMARK___457874__auto__)?(new cljs.core.logic.Substitutions(a__457873__auto__.s,cljs.core.PersistentVector.EMPTY,a__457873__auto__.ts,a__457873__auto__.cs,a__457873__auto__.cq,a__457873__auto__.cqs,a__457873__auto__.oc,a__457873__auto__._meta)):a__457873__auto__),curr,end);if(cljs.core.truth_(temp__4098__auto__))
{var ap__457875__auto__ = temp__4098__auto__;var vs__457876__auto__ = ((has_cs_QMARK___457874__auto__)?ap__457875__auto__.vs:null);var changed_QMARK___457877__auto__ = (cljs.core.count.call(null,vs__457876__auto__) > 0);if(changed_QMARK___457877__auto__)
{return cljs.core.logic.run_constraints_STAR_.call(null,vs__457876__auto__,ap__457875__auto__.cs,new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440)).call(null,(new cljs.core.logic.Substitutions(ap__457875__auto__.s,null,ap__457875__auto__.ts,ap__457875__auto__.cs,ap__457875__auto__.cq,ap__457875__auto__.cqs,ap__457875__auto__.oc,ap__457875__auto__._meta)));
} else
{return ap__457875__auto__;
}
} else
{return null;
}
})),(new cljs.core.logic.Inc((function (){return cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,a467894,(function (a__457873__auto__){var has_cs_QMARK___457874__auto__ = (cljs.core.count.call(null,a__457873__auto__.cs) > 0);var temp__4098__auto__ = cljs.core.logic._unify.call(null,((has_cs_QMARK___457874__auto__)?(new cljs.core.logic.Substitutions(a__457873__auto__.s,cljs.core.PersistentVector.EMPTY,a__457873__auto__.ts,a__457873__auto__.cs,a__457873__auto__.cq,a__457873__auto__.cqs,a__457873__auto__.oc,a__457873__auto__._meta)):a__457873__auto__),false,cljs.core.empty_QMARK_.call(null,goals__$1));if(cljs.core.truth_(temp__4098__auto__))
{var ap__457875__auto__ = temp__4098__auto__;var vs__457876__auto__ = ((has_cs_QMARK___457874__auto__)?ap__457875__auto__.vs:null);var changed_QMARK___457877__auto__ = (cljs.core.count.call(null,vs__457876__auto__) > 0);if(changed_QMARK___457877__auto__)
{return cljs.core.logic.run_constraints_STAR_.call(null,vs__457876__auto__,ap__457875__auto__.cs,new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440)).call(null,(new cljs.core.logic.Substitutions(ap__457875__auto__.s,null,ap__457875__auto__.ts,ap__457875__auto__.cs,ap__457875__auto__.cq,ap__457875__auto__.cqs,ap__457875__auto__.oc,ap__457875__auto__._meta)));
} else
{return ap__457875__auto__;
}
} else
{return null;
}
})),(function (a__457906__auto____$1){return (new cljs.core.logic.Inc((function (){var goal = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"goal","goal",-1637353268,null));var tail = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"tail","tail",-1636979191,null));var via = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"via","via",-1640414777,null));return cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,a__457906__auto____$1,(function (a__457873__auto__){var has_cs_QMARK___457874__auto__ = (cljs.core.count.call(null,a__457873__auto__.cs) > 0);var temp__4098__auto__ = cljs.core.logic._unify.call(null,((has_cs_QMARK___457874__auto__)?(new cljs.core.logic.Substitutions(a__457873__auto__.s,cljs.core.PersistentVector.EMPTY,a__457873__auto__.ts,a__457873__auto__.cs,a__457873__auto__.cq,a__457873__auto__.cqs,a__457873__auto__.oc,a__457873__auto__._meta)):a__457873__auto__),goal,cljs.core.first.call(null,goals__$1));if(cljs.core.truth_(temp__4098__auto__))
{var ap__457875__auto__ = temp__4098__auto__;var vs__457876__auto__ = ((has_cs_QMARK___457874__auto__)?ap__457875__auto__.vs:null);var changed_QMARK___457877__auto__ = (cljs.core.count.call(null,vs__457876__auto__) > 0);if(changed_QMARK___457877__auto__)
{return cljs.core.logic.run_constraints_STAR_.call(null,vs__457876__auto__,ap__457875__auto__.cs,new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440)).call(null,(new cljs.core.logic.Substitutions(ap__457875__auto__.s,null,ap__457875__auto__.ts,ap__457875__auto__.cs,ap__457875__auto__.cq,ap__457875__auto__.cqs,ap__457875__auto__.oc,ap__457875__auto__._meta)));
} else
{return ap__457875__auto__;
}
} else
{return null;
}
})),(function (a__457873__auto__){var has_cs_QMARK___457874__auto__ = (cljs.core.count.call(null,a__457873__auto__.cs) > 0);var temp__4098__auto__ = cljs.core.logic._unify.call(null,((has_cs_QMARK___457874__auto__)?(new cljs.core.logic.Substitutions(a__457873__auto__.s,cljs.core.PersistentVector.EMPTY,a__457873__auto__.ts,a__457873__auto__.cs,a__457873__auto__.cq,a__457873__auto__.cqs,a__457873__auto__.oc,a__457873__auto__._meta)):a__457873__auto__),tail,cljs.core.rest.call(null,goals__$1));if(cljs.core.truth_(temp__4098__auto__))
{var ap__457875__auto__ = temp__4098__auto__;var vs__457876__auto__ = ((has_cs_QMARK___457874__auto__)?ap__457875__auto__.vs:null);var changed_QMARK___457877__auto__ = (cljs.core.count.call(null,vs__457876__auto__) > 0);if(changed_QMARK___457877__auto__)
{return cljs.core.logic.run_constraints_STAR_.call(null,vs__457876__auto__,ap__457875__auto__.cs,new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440)).call(null,(new cljs.core.logic.Substitutions(ap__457875__auto__.s,null,ap__457875__auto__.ts,ap__457875__auto__.cs,ap__457875__auto__.cq,ap__457875__auto__.cqs,ap__457875__auto__.oc,ap__457875__auto__._meta)));
} else
{return ap__457875__auto__;
}
} else
{return null;
}
})),(function (a467895){var goal__$1 = cljs.core.logic._walk_STAR_.call(null,a467895,goal);return (function (a__457906__auto____$2){return (new cljs.core.logic.Inc((function (){return cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,a__457906__auto____$2,goal__$1.call(null,graph,curr,via)),solve_goals.call(null,graph,via,end,tail));
})));
}).call(null,a467895);
}));
})));
}));
}))));
})));
}));
})));
}).call(null,a467893);
}));
});
});
cljs.core.logic.foo = new cljs.core.Keyword(null,"foo","foo",1014005816);
cljs.core.logic.bar = new cljs.core.Keyword(null,"bar","bar",1014001541);
cljs.core.logic.baz = new cljs.core.Keyword(null,"baz","baz",1014001549);
cljs.core.logic.quux = new cljs.core.Keyword(null,"quux","quux",1017386809);
cljs.core.logic.to_node = (function to_node(node){if(cljs.core._EQ_.call(null,node,cljs.core.logic.foo))
{return cljs.core.seq.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.logic.bar));
} else
{if(cljs.core._EQ_.call(null,node,cljs.core.logic.bar))
{return cljs.core.seq.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.logic.baz));
} else
{if(cljs.core._EQ_.call(null,node,cljs.core.logic.baz))
{return cljs.core.seq.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.logic.quux));
} else
{return null;
}
}
}
});
cljs.core.logic.graph = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"successors","successors",4575248255),cljs.core.logic.to_node], null);
cljs.core.logic.test_1 = (function test_1(){return cljs.core.doall.call(null,(function (){var opts__457915__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"occurs-check","occurs-check",3132413236),true,new cljs.core.Keyword(null,"n","n",1013904352),false,new cljs.core.Keyword(null,"db","db",1013907440),cljs.core.logic._STAR_logic_dbs_STAR_], null);var xs__457916__auto__ = cljs.core.logic._take_STAR_.call(null,(new cljs.core.logic.Inc(((function (opts__457915__auto__){
return (function (){return ((function (opts__457915__auto__){
return (function (a__457906__auto__){return (new cljs.core.logic.Inc(((function (opts__457915__auto__){
return (function (){var _QMARK_result = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"?result","?result",1798166229,null));return cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,a__457906__auto__,((function (_QMARK_result,opts__457915__auto__){
return (function (a__457906__auto____$1){return (new cljs.core.logic.Inc(((function (_QMARK_result,opts__457915__auto__){
return (function (){var _QMARK_start = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"?start","?start",272862524,null));var _QMARK_end = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"?end","?end",-1638554123,null));return cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,a__457906__auto____$1,((function (_QMARK_start,_QMARK_end,_QMARK_result,opts__457915__auto__){
return (function (a__457873__auto__){var has_cs_QMARK___457874__auto__ = (cljs.core.count.call(null,a__457873__auto__.cs) > 0);var temp__4098__auto__ = cljs.core.logic._unify.call(null,((has_cs_QMARK___457874__auto__)?(new cljs.core.logic.Substitutions(a__457873__auto__.s,cljs.core.PersistentVector.EMPTY,a__457873__auto__.ts,a__457873__auto__.cs,a__457873__auto__.cq,a__457873__auto__.cqs,a__457873__auto__.oc,a__457873__auto__._meta)):a__457873__auto__),_QMARK_start,cljs.core.logic.foo);if(cljs.core.truth_(temp__4098__auto__))
{var ap__457875__auto__ = temp__4098__auto__;var vs__457876__auto__ = ((has_cs_QMARK___457874__auto__)?ap__457875__auto__.vs:null);var changed_QMARK___457877__auto__ = (cljs.core.count.call(null,vs__457876__auto__) > 0);if(changed_QMARK___457877__auto__)
{return cljs.core.logic.run_constraints_STAR_.call(null,vs__457876__auto__,ap__457875__auto__.cs,new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440)).call(null,(new cljs.core.logic.Substitutions(ap__457875__auto__.s,null,ap__457875__auto__.ts,ap__457875__auto__.cs,ap__457875__auto__.cq,ap__457875__auto__.cqs,ap__457875__auto__.oc,ap__457875__auto__._meta)));
} else
{return ap__457875__auto__;
}
} else
{return null;
}
});})(_QMARK_start,_QMARK_end,_QMARK_result,opts__457915__auto__))
),((function (_QMARK_start,_QMARK_end,_QMARK_result,opts__457915__auto__){
return (function (a__457873__auto__){var has_cs_QMARK___457874__auto__ = (cljs.core.count.call(null,a__457873__auto__.cs) > 0);var temp__4098__auto__ = cljs.core.logic._unify.call(null,((has_cs_QMARK___457874__auto__)?(new cljs.core.logic.Substitutions(a__457873__auto__.s,cljs.core.PersistentVector.EMPTY,a__457873__auto__.ts,a__457873__auto__.cs,a__457873__auto__.cq,a__457873__auto__.cqs,a__457873__auto__.oc,a__457873__auto__._meta)):a__457873__auto__),_QMARK_end,cljs.core.logic.quux);if(cljs.core.truth_(temp__4098__auto__))
{var ap__457875__auto__ = temp__4098__auto__;var vs__457876__auto__ = ((has_cs_QMARK___457874__auto__)?ap__457875__auto__.vs:null);var changed_QMARK___457877__auto__ = (cljs.core.count.call(null,vs__457876__auto__) > 0);if(changed_QMARK___457877__auto__)
{return cljs.core.logic.run_constraints_STAR_.call(null,vs__457876__auto__,ap__457875__auto__.cs,new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440)).call(null,(new cljs.core.logic.Substitutions(ap__457875__auto__.s,null,ap__457875__auto__.ts,ap__457875__auto__.cs,ap__457875__auto__.cq,ap__457875__auto__.cqs,ap__457875__auto__.oc,ap__457875__auto__._meta)));
} else
{return ap__457875__auto__;
}
} else
{return null;
}
});})(_QMARK_start,_QMARK_end,_QMARK_result,opts__457915__auto__))
),cljs.core.logic.solve_goals.call(null,cljs.core.logic.graph,_QMARK_start,_QMARK_end,cljs.core.seq.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.logic.patho_112),((function (_QMARK_start,_QMARK_end,_QMARK_result,opts__457915__auto__){
return (function (graph,current,next){return ((function (_QMARK_start,_QMARK_end,_QMARK_result,opts__457915__auto__){
return (function (a__457967__auto__){return cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,a__457967__auto__,((function (_QMARK_start,_QMARK_end,_QMARK_result,opts__457915__auto__){
return (function (a__457873__auto__){var has_cs_QMARK___457874__auto__ = (cljs.core.count.call(null,a__457873__auto__.cs) > 0);var temp__4098__auto__ = cljs.core.logic._unify.call(null,((has_cs_QMARK___457874__auto__)?(new cljs.core.logic.Substitutions(a__457873__auto__.s,cljs.core.PersistentVector.EMPTY,a__457873__auto__.ts,a__457873__auto__.cs,a__457873__auto__.cq,a__457873__auto__.cqs,a__457873__auto__.oc,a__457873__auto__._meta)):a__457873__auto__),_QMARK_result,current);if(cljs.core.truth_(temp__4098__auto__))
{var ap__457875__auto__ = temp__4098__auto__;var vs__457876__auto__ = ((has_cs_QMARK___457874__auto__)?ap__457875__auto__.vs:null);var changed_QMARK___457877__auto__ = (cljs.core.count.call(null,vs__457876__auto__) > 0);if(changed_QMARK___457877__auto__)
{return cljs.core.logic.run_constraints_STAR_.call(null,vs__457876__auto__,ap__457875__auto__.cs,new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440)).call(null,(new cljs.core.logic.Substitutions(ap__457875__auto__.s,null,ap__457875__auto__.ts,ap__457875__auto__.cs,ap__457875__auto__.cq,ap__457875__auto__.cqs,ap__457875__auto__.oc,ap__457875__auto__._meta)));
} else
{return ap__457875__auto__;
}
} else
{return null;
}
});})(_QMARK_start,_QMARK_end,_QMARK_result,opts__457915__auto__))
),((function (_QMARK_start,_QMARK_end,_QMARK_result,opts__457915__auto__){
return (function (a__457873__auto__){var has_cs_QMARK___457874__auto__ = (cljs.core.count.call(null,a__457873__auto__.cs) > 0);var temp__4098__auto__ = cljs.core.logic._unify.call(null,((has_cs_QMARK___457874__auto__)?(new cljs.core.logic.Substitutions(a__457873__auto__.s,cljs.core.PersistentVector.EMPTY,a__457873__auto__.ts,a__457873__auto__.cs,a__457873__auto__.cq,a__457873__auto__.cqs,a__457873__auto__.oc,a__457873__auto__._meta)):a__457873__auto__),current,next);if(cljs.core.truth_(temp__4098__auto__))
{var ap__457875__auto__ = temp__4098__auto__;var vs__457876__auto__ = ((has_cs_QMARK___457874__auto__)?ap__457875__auto__.vs:null);var changed_QMARK___457877__auto__ = (cljs.core.count.call(null,vs__457876__auto__) > 0);if(changed_QMARK___457877__auto__)
{return cljs.core.logic.run_constraints_STAR_.call(null,vs__457876__auto__,ap__457875__auto__.cs,new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440)).call(null,(new cljs.core.logic.Substitutions(ap__457875__auto__.s,null,ap__457875__auto__.ts,ap__457875__auto__.cs,ap__457875__auto__.cq,ap__457875__auto__.cqs,ap__457875__auto__.oc,ap__457875__auto__._meta)));
} else
{return ap__457875__auto__;
}
} else
{return null;
}
});})(_QMARK_start,_QMARK_end,_QMARK_result,opts__457915__auto__))
);
});
;})(_QMARK_start,_QMARK_end,_QMARK_result,opts__457915__auto__))
});})(_QMARK_start,_QMARK_end,_QMARK_result,opts__457915__auto__))
),cljs.core.logic.patho_112))));
});})(_QMARK_result,opts__457915__auto__))
));
});})(_QMARK_result,opts__457915__auto__))
),cljs.core.logic.reifyg.call(null,_QMARK_result));
});})(opts__457915__auto__))
));
});})(opts__457915__auto__))
.call(null,cljs.core.logic.tabled_s.call(null,new cljs.core.Keyword(null,"occurs-check","occurs-check",3132413236).cljs$core$IFn$_invoke$arity$1(opts__457915__auto__),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",4368745730),true], null),opts__457915__auto__)));
});})(opts__457915__auto__))
)));var temp__4096__auto__ = new cljs.core.Keyword(null,"n","n",1013904352).cljs$core$IFn$_invoke$arity$1(opts__457915__auto__);if(cljs.core.truth_(temp__4096__auto__))
{var n__457917__auto__ = temp__4096__auto__;return cljs.core.take.call(null,n__457917__auto__,xs__457916__auto__);
} else
{return xs__457916__auto__;
}
})());
});