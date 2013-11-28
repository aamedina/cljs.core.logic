// Compiled by ClojureScript 0.0-2080
goog.provide('cljs.core.logic.pldb');
goog.require('cljs.core');
goog.require('cljs.core.logic');
goog.require('cljs.core.logic');
cljs.core.logic.pldb.empty_db = cljs.core.PersistentArrayMap.EMPTY;
cljs.core.logic.pldb.facts_for = (function facts_for(dbs,kname){return cljs.core.mapcat.call(null,(function (p1__692780_SHARP_){return cljs.core.get_in.call(null,p1__692780_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kname,new cljs.core.Keyword("cljs.core.logic.pldb","unindexed","cljs.core.logic.pldb/unindexed",3813484278)], null));
}),dbs);
});
cljs.core.logic.pldb.facts_using_index = (function facts_using_index(dbs,kname,index,val){return cljs.core.mapcat.call(null,(function (p1__692781_SHARP_){return cljs.core.get_in.call(null,p1__692781_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kname,index,val], null));
}),dbs);
});
cljs.core.logic.pldb.rel_key = (function rel_key(rel){if((rel instanceof cljs.core.Keyword))
{return rel;
} else
{return new cljs.core.Keyword(null,"rel-name","rel-name",4706225841).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,rel));
}
});
cljs.core.logic.pldb.rel_indexes = (function rel_indexes(rel){return new cljs.core.Keyword(null,"indexes","indexes",2957196402).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,rel));
});
cljs.core.logic.pldb.indexed_QMARK_ = (function indexed_QMARK_(v){return new cljs.core.Keyword(null,"index","index",1114250308).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)) === true;
});
cljs.core.logic.pldb.contains_lvar_QMARK_ = (function contains_lvar_QMARK_(x){return cljs.core.some.call(null,cljs.core.logic.lvar_QMARK_,cljs.core.tree_seq.call(null,cljs.core.coll_QMARK_,cljs.core.seq,x));
});
cljs.core.logic.pldb.ground_QMARK_ = (function ground_QMARK_(s,term){return cljs.core.not.call(null,cljs.core.logic.pldb.contains_lvar_QMARK_.call(null,cljs.core.logic._walk_STAR_.call(null,s,term)));
});
cljs.core.logic.pldb.index_for_query = (function index_for_query(s,q,indexes){var indexable = cljs.core.map.call(null,(function (p1__692782_SHARP_){return cljs.core.logic.pldb.ground_QMARK_.call(null,s,p1__692782_SHARP_);
}),q);var triples = cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),indexable,indexes);return cljs.core.first.call(null,(function (){var iter__7538__auto__ = (function iter__692791(s__692792){return (new cljs.core.LazySeq(null,(function (){var s__692792__$1 = s__692792;while(true){
var temp__4098__auto__ = cljs.core.seq.call(null,s__692792__$1);if(temp__4098__auto__)
{var s__692792__$2 = temp__4098__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__692792__$2))
{var c__7536__auto__ = cljs.core.chunk_first.call(null,s__692792__$2);var size__7537__auto__ = cljs.core.count.call(null,c__7536__auto__);var b__692794 = cljs.core.chunk_buffer.call(null,size__7537__auto__);if((function (){var i__692793 = 0;while(true){
if((i__692793 < size__7537__auto__))
{var vec__692797 = cljs.core._nth.call(null,c__7536__auto__,i__692793);var i = cljs.core.nth.call(null,vec__692797,0,null);var indexable__$1 = cljs.core.nth.call(null,vec__692797,1,null);var indexed = cljs.core.nth.call(null,vec__692797,2,null);if(cljs.core.truth_((function (){var and__6833__auto__ = indexable__$1;if(cljs.core.truth_(and__6833__auto__))
{return indexed;
} else
{return and__6833__auto__;
}
})()))
{cljs.core.chunk_append.call(null,b__692794,i);
{
var G__692799 = (i__692793 + 1);
i__692793 = G__692799;
continue;
}
} else
{{
var G__692800 = (i__692793 + 1);
i__692793 = G__692800;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__692794),iter__692791.call(null,cljs.core.chunk_rest.call(null,s__692792__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__692794),null);
}
} else
{var vec__692798 = cljs.core.first.call(null,s__692792__$2);var i = cljs.core.nth.call(null,vec__692798,0,null);var indexable__$1 = cljs.core.nth.call(null,vec__692798,1,null);var indexed = cljs.core.nth.call(null,vec__692798,2,null);if(cljs.core.truth_((function (){var and__6833__auto__ = indexable__$1;if(cljs.core.truth_(and__6833__auto__))
{return indexed;
} else
{return and__6833__auto__;
}
})()))
{return cljs.core.cons.call(null,i,iter__692791.call(null,cljs.core.rest.call(null,s__692792__$2)));
} else
{{
var G__692801 = cljs.core.rest.call(null,s__692792__$2);
s__692792__$1 = G__692801;
continue;
}
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7538__auto__.call(null,triples);
})());
});
/**
* @param {...*} var_args
*/
cljs.core.logic.pldb.db_fact = (function() { 
var db_fact__delegate = function (db,rel,args){var key = cljs.core.logic.pldb.rel_key.call(null,rel);var add_to_set = ((function (key){
return (function (current,new$){return cljs.core.conj.call(null,(function (){var or__6845__auto__ = current;if(cljs.core.truth_(or__6845__auto__))
{return or__6845__auto__;
} else
{return cljs.core.PersistentHashSet.EMPTY;
}
})(),new$);
});})(key))
;var db_with_fact = cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,new cljs.core.Keyword("cljs.core.logic.pldb","unindexed","cljs.core.logic.pldb/unindexed",3813484278)], null),((function (key,add_to_set){
return (function (p1__692802_SHARP_){return add_to_set.call(null,p1__692802_SHARP_,args);
});})(key,add_to_set))
);var indexes_to_update = cljs.core.map.call(null,cljs.core.vector,cljs.core.logic.pldb.rel_indexes.call(null,rel),cljs.core.range.call(null),args);var update_index_fn = ((function (key,add_to_set,db_with_fact,indexes_to_update){
return (function (db__$1,p__692806){var vec__692807 = p__692806;var is_indexed = cljs.core.nth.call(null,vec__692807,0,null);var index_num = cljs.core.nth.call(null,vec__692807,1,null);var val = cljs.core.nth.call(null,vec__692807,2,null);if(cljs.core.truth_(is_indexed))
{return cljs.core.update_in.call(null,db__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,index_num,val], null),((function (vec__692807,is_indexed,index_num,val,key,add_to_set,db_with_fact,indexes_to_update){
return (function (p1__692803_SHARP_){return add_to_set.call(null,p1__692803_SHARP_,args);
});})(vec__692807,is_indexed,index_num,val,key,add_to_set,db_with_fact,indexes_to_update))
);
} else
{return db__$1;
}
});})(key,add_to_set,db_with_fact,indexes_to_update))
;return cljs.core.reduce.call(null,update_index_fn,db_with_fact,indexes_to_update);
};
var db_fact = function (db,rel,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return db_fact__delegate.call(this,db,rel,args);};
db_fact.cljs$lang$maxFixedArity = 2;
db_fact.cljs$lang$applyTo = (function (arglist__692808){
var db = cljs.core.first(arglist__692808);
arglist__692808 = cljs.core.next(arglist__692808);
var rel = cljs.core.first(arglist__692808);
var args = cljs.core.rest(arglist__692808);
return db_fact__delegate(db,rel,args);
});
db_fact.cljs$core$IFn$_invoke$arity$variadic = db_fact__delegate;
return db_fact;
})()
;
/**
* @param {...*} var_args
*/
cljs.core.logic.pldb.db_retraction = (function() { 
var db_retraction__delegate = function (db,rel,args){var key = cljs.core.logic.pldb.rel_key.call(null,rel);var retract_args = ((function (key){
return (function (p1__692809_SHARP_){return cljs.core.disj.call(null,p1__692809_SHARP_,args);
});})(key))
;var db_without_fact = cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,new cljs.core.Keyword("cljs.core.logic.pldb","unindexed","cljs.core.logic.pldb/unindexed",3813484278)], null),retract_args);var indexes_to_update = cljs.core.map.call(null,cljs.core.vector,cljs.core.logic.pldb.rel_indexes.call(null,rel),cljs.core.range.call(null),args);var remove_from_index_fn = ((function (key,retract_args,db_without_fact,indexes_to_update){
return (function (db__$1,p__692812){var vec__692813 = p__692812;var is_indexed = cljs.core.nth.call(null,vec__692813,0,null);var index_num = cljs.core.nth.call(null,vec__692813,1,null);var val = cljs.core.nth.call(null,vec__692813,2,null);if(cljs.core.truth_(is_indexed))
{return cljs.core.update_in.call(null,db__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,index_num,val], null),retract_args);
} else
{return db__$1;
}
});})(key,retract_args,db_without_fact,indexes_to_update))
;return cljs.core.reduce.call(null,remove_from_index_fn,db_without_fact,indexes_to_update);
};
var db_retraction = function (db,rel,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return db_retraction__delegate.call(this,db,rel,args);};
db_retraction.cljs$lang$maxFixedArity = 2;
db_retraction.cljs$lang$applyTo = (function (arglist__692814){
var db = cljs.core.first(arglist__692814);
arglist__692814 = cljs.core.next(arglist__692814);
var rel = cljs.core.first(arglist__692814);
var args = cljs.core.rest(arglist__692814);
return db_retraction__delegate(db,rel,args);
});
db_retraction.cljs$core$IFn$_invoke$arity$variadic = db_retraction__delegate;
return db_retraction;
})()
;
/**
* @param {...*} var_args
*/
cljs.core.logic.pldb.db_facts = (function() { 
var db_facts__delegate = function (base_db,facts){return cljs.core.reduce.call(null,(function (p1__692815_SHARP_,p2__692816_SHARP_){return cljs.core.apply.call(null,cljs.core.logic.pldb.db_fact,p1__692815_SHARP_,p2__692816_SHARP_);
}),base_db,facts);
};
var db_facts = function (base_db,var_args){
var facts = null;if (arguments.length > 1) {
  facts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return db_facts__delegate.call(this,base_db,facts);};
db_facts.cljs$lang$maxFixedArity = 1;
db_facts.cljs$lang$applyTo = (function (arglist__692817){
var base_db = cljs.core.first(arglist__692817);
var facts = cljs.core.rest(arglist__692817);
return db_facts__delegate(base_db,facts);
});
db_facts.cljs$core$IFn$_invoke$arity$variadic = db_facts__delegate;
return db_facts;
})()
;
/**
* @param {...*} var_args
*/
cljs.core.logic.pldb.db = (function() { 
var db__delegate = function (facts){return cljs.core.apply.call(null,cljs.core.logic.pldb.db_facts,cljs.core.logic.pldb.empty_db,facts);
};
var db = function (var_args){
var facts = null;if (arguments.length > 0) {
  facts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return db__delegate.call(this,facts);};
db.cljs$lang$maxFixedArity = 0;
db.cljs$lang$applyTo = (function (arglist__692818){
var facts = cljs.core.seq(arglist__692818);
return db__delegate(facts);
});
db.cljs$core$IFn$_invoke$arity$variadic = db__delegate;
return db;
})()
;
/**
* @param {...*} var_args
*/
cljs.core.logic.pldb.db_retractions = (function() { 
var db_retractions__delegate = function (base_db,retractions){return cljs.core.reduce.call(null,(function (p1__692819_SHARP_,p2__692820_SHARP_){return cljs.core.apply.call(null,cljs.core.logic.pldb.db_retraction,p1__692819_SHARP_,p2__692820_SHARP_);
}),base_db,retractions);
};
var db_retractions = function (base_db,var_args){
var retractions = null;if (arguments.length > 1) {
  retractions = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return db_retractions__delegate.call(this,base_db,retractions);};
db_retractions.cljs$lang$maxFixedArity = 1;
db_retractions.cljs$lang$applyTo = (function (arglist__692821){
var base_db = cljs.core.first(arglist__692821);
var retractions = cljs.core.rest(arglist__692821);
return db_retractions__delegate(base_db,retractions);
});
db_retractions.cljs$core$IFn$_invoke$arity$variadic = db_retractions__delegate;
return db_retractions;
})()
;
