// Compiled by ClojureScript 0.0-2080
goog.provide('cemerick.cljs.test');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
cemerick.cljs.test._STAR_report_counters_STAR_ = null;
cemerick.cljs.test._STAR_initial_report_counters_STAR_ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"test","test",1017460740),0,new cljs.core.Keyword(null,"pass","pass",1017337731),0,new cljs.core.Keyword(null,"fail","fail",1017039504),0,new cljs.core.Keyword(null,"error","error",1110689146),0], null);
cemerick.cljs.test._STAR_testing_vars_STAR_ = cljs.core.List.EMPTY;
cemerick.cljs.test._STAR_testing_contexts_STAR_ = cljs.core.List.EMPTY;
cemerick.cljs.test._STAR_test_print_fn_STAR_ = null;
cemerick.cljs.test.registered_tests = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
cemerick.cljs.test.registered_test_hooks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
cemerick.cljs.test.registered_fixtures = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
cemerick.cljs.test.register_test_BANG_ = (function register_test_BANG_(ns,name){return cljs.core.swap_BANG_.call(null,cemerick.cljs.test.registered_tests,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),name);
});
cemerick.cljs.test.register_test_ns_hook_BANG_ = (function register_test_ns_hook_BANG_(ns,name){return cljs.core.swap_BANG_.call(null,cemerick.cljs.test.registered_test_hooks,cljs.core.assoc,ns,name);
});
/**
* Returns a string representation of the current test.  Renders names
* in *testing-vars* as a list, then the source file and line of
* current assertion.
*/
cemerick.cljs.test.testing_vars_str = (function testing_vars_str(m){var map__604783 = m;var map__604783__$1 = ((cljs.core.seq_QMARK_.call(null,map__604783))?cljs.core.apply.call(null,cljs.core.hash_map,map__604783):map__604783);var line = cljs.core.get.call(null,map__604783__$1,new cljs.core.Keyword(null,"line","line",1017226086));var file = cljs.core.get.call(null,map__604783__$1,new cljs.core.Keyword(null,"file","file",1017047278));return [cljs.core.str(cljs.core.pr_str.call(null,cljs.core.reverse.call(null,cemerick.cljs.test._STAR_testing_vars_STAR_))),cljs.core.str(" ("),cljs.core.str(file),cljs.core.str(":"),cljs.core.str(line),cljs.core.str(")")].join('');
});
/**
* Returns a string representation of the current test context. Joins
* strings in *testing-contexts* with spaces.
*/
cemerick.cljs.test.testing_contexts_str = (function testing_contexts_str(){return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core.reverse.call(null,cemerick.cljs.test._STAR_testing_contexts_STAR_)));
});
/**
* Increments the named counter in *report-counters*, a ref to a map.
* Does nothing if *report-counters* is nil.
*/
cemerick.cljs.test.inc_report_counter = (function inc_report_counter(name){if(cljs.core.truth_(cemerick.cljs.test._STAR_report_counters_STAR_))
{return cljs.core.swap_BANG_.call(null,cemerick.cljs.test._STAR_report_counters_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null),cljs.core.fnil.call(null,cljs.core.inc,0));
} else
{return null;
}
});
/**
* Generic reporting function, may be overridden to plug in
* different report formats (e.g., TAP, JUnit).  Assertions such as
* 'is' call 'report' to indicate results.  The argument given to
* 'report' will be a map with a :type key.  See the documentation at
* the top of test_is.clj for more information on the types of
* arguments for 'report'.
*/
cemerick.cljs.test.report = (function (){var method_table__7678__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__7679__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__7680__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__7681__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__7682__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("report",new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__7682__auto__,method_table__7678__auto__,prefer_table__7679__auto__,method_cache__7680__auto__,cached_hierarchy__7681__auto__));
})();
cemerick.cljs.test.file_and_line = (function file_and_line(error){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",1017047278),error.fileName,new cljs.core.Keyword(null,"line","line",1017226086),error.lineNumber], null);
});
/**
* Add file and line information to a test result and call report.
* If you are writing a custom assert-expr method, call this function
* to pass test results to report.
*/
cemerick.cljs.test.do_report = (function do_report(m){return cemerick.cljs.test.report.call(null,(function (){var G__604785 = new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(m);if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",1110689146),G__604785))
{return cljs.core.merge.call(null,cemerick.cljs.test.file_and_line.call(null,new cljs.core.Keyword(null,"actual","actual",3885931776).cljs$core$IFn$_invoke$arity$1(m)),m);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"fail","fail",1017039504),G__604785))
{return cljs.core.merge.call(null,cemerick.cljs.test.file_and_line.call(null,Error()),m);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return m;
} else
{return null;
}
}
}
})());
});
cljs.core._add_method.call(null,cemerick.cljs.test.report,new cljs.core.Keyword(null,"default","default",2558708147),(function (m){var _STAR_print_fn_STAR_604786 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = (function (){var or__6845__auto__ = cemerick.cljs.test._STAR_test_print_fn_STAR_;if(cljs.core.truth_(or__6845__auto__))
{return or__6845__auto__;
} else
{return cljs.core._STAR_print_fn_STAR_;
}
})();
return cljs.core.prn.call(null,m);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_604786;
}}));
cljs.core._add_method.call(null,cemerick.cljs.test.report,new cljs.core.Keyword(null,"pass","pass",1017337731),(function (m){var _STAR_print_fn_STAR_604787 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = (function (){var or__6845__auto__ = cemerick.cljs.test._STAR_test_print_fn_STAR_;if(cljs.core.truth_(or__6845__auto__))
{return or__6845__auto__;
} else
{return cljs.core._STAR_print_fn_STAR_;
}
})();
return cemerick.cljs.test.inc_report_counter.call(null,new cljs.core.Keyword(null,"pass","pass",1017337731));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_604787;
}}));
cljs.core._add_method.call(null,cemerick.cljs.test.report,new cljs.core.Keyword(null,"fail","fail",1017039504),(function (m){var _STAR_print_fn_STAR_604788 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = (function (){var or__6845__auto__ = cemerick.cljs.test._STAR_test_print_fn_STAR_;if(cljs.core.truth_(or__6845__auto__))
{return or__6845__auto__;
} else
{return cljs.core._STAR_print_fn_STAR_;
}
})();
cemerick.cljs.test.inc_report_counter.call(null,new cljs.core.Keyword(null,"fail","fail",1017039504));
cljs.core.println.call(null,"\nFAIL in",cemerick.cljs.test.testing_vars_str.call(null,m));
if(cljs.core.seq.call(null,cemerick.cljs.test._STAR_testing_contexts_STAR_))
{cljs.core.println.call(null,cemerick.cljs.test.testing_contexts_str.call(null));
} else
{}
var temp__4098__auto___604789 = new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(m);if(cljs.core.truth_(temp__4098__auto___604789))
{var message_604790 = temp__4098__auto___604789;cljs.core.println.call(null,message_604790);
} else
{}
cljs.core.println.call(null,"expected:",cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"expected","expected",3373152810).cljs$core$IFn$_invoke$arity$1(m)));
return cljs.core.println.call(null,"  actual:",cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"actual","actual",3885931776).cljs$core$IFn$_invoke$arity$1(m)));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_604788;
}}));
cljs.core._add_method.call(null,cemerick.cljs.test.report,new cljs.core.Keyword(null,"error","error",1110689146),(function (m){var _STAR_print_fn_STAR_604791 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = (function (){var or__6845__auto__ = cemerick.cljs.test._STAR_test_print_fn_STAR_;if(cljs.core.truth_(or__6845__auto__))
{return or__6845__auto__;
} else
{return cljs.core._STAR_print_fn_STAR_;
}
})();
cemerick.cljs.test.inc_report_counter.call(null,new cljs.core.Keyword(null,"error","error",1110689146));
cljs.core.println.call(null,"\nERROR in",cemerick.cljs.test.testing_vars_str.call(null,m));
if(cljs.core.seq.call(null,cemerick.cljs.test._STAR_testing_contexts_STAR_))
{cljs.core.println.call(null,cemerick.cljs.test.testing_contexts_str.call(null));
} else
{}
var temp__4098__auto___604792 = new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(m);if(cljs.core.truth_(temp__4098__auto___604792))
{var message_604793 = temp__4098__auto___604792;cljs.core.println.call(null,message_604793);
} else
{}
cljs.core.println.call(null,"expected:",cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"expected","expected",3373152810).cljs$core$IFn$_invoke$arity$1(m)));
cljs.core.print.call(null,"  actual: ");
var actual = new cljs.core.Keyword(null,"actual","actual",3885931776).cljs$core$IFn$_invoke$arity$1(m);if((actual instanceof Error))
{return cljs.core.println.call(null,actual.stack);
} else
{return cljs.core.prn.call(null,actual);
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_604791;
}}));
cljs.core._add_method.call(null,cemerick.cljs.test.report,new cljs.core.Keyword(null,"summary","summary",3451231000),(function (m){var _STAR_print_fn_STAR_604794 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = (function (){var or__6845__auto__ = cemerick.cljs.test._STAR_test_print_fn_STAR_;if(cljs.core.truth_(or__6845__auto__))
{return or__6845__auto__;
} else
{return cljs.core._STAR_print_fn_STAR_;
}
})();
cljs.core.println.call(null,"\nRan",new cljs.core.Keyword(null,"test","test",1017460740).cljs$core$IFn$_invoke$arity$1(m),"tests containing",((new cljs.core.Keyword(null,"pass","pass",1017337731).cljs$core$IFn$_invoke$arity$1(m) + new cljs.core.Keyword(null,"fail","fail",1017039504).cljs$core$IFn$_invoke$arity$1(m)) + new cljs.core.Keyword(null,"error","error",1110689146).cljs$core$IFn$_invoke$arity$1(m)),"assertions.");
return cljs.core.println.call(null,new cljs.core.Keyword(null,"fail","fail",1017039504).cljs$core$IFn$_invoke$arity$1(m),"failures,",new cljs.core.Keyword(null,"error","error",1110689146).cljs$core$IFn$_invoke$arity$1(m),"errors.");
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_604794;
}}));
cljs.core._add_method.call(null,cemerick.cljs.test.report,new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",1359210286),(function (m){var _STAR_print_fn_STAR_604795 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = (function (){var or__6845__auto__ = cemerick.cljs.test._STAR_test_print_fn_STAR_;if(cljs.core.truth_(or__6845__auto__))
{return or__6845__auto__;
} else
{return cljs.core._STAR_print_fn_STAR_;
}
})();
return cljs.core.println.call(null,"\nTesting",new cljs.core.Keyword(null,"ns","ns",1013907767).cljs$core$IFn$_invoke$arity$1(m));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_604795;
}}));
cljs.core._add_method.call(null,cemerick.cljs.test.report,new cljs.core.Keyword(null,"end-test-ns","end-test-ns",3401491808),(function (m){return null;
}));
cljs.core._add_method.call(null,cemerick.cljs.test.report,new cljs.core.Keyword(null,"begin-test-var","begin-test-var",3128464258),(function (m){return null;
}));
cljs.core._add_method.call(null,cemerick.cljs.test.report,new cljs.core.Keyword(null,"end-test-var","end-test-var",2014682000),(function (m){return null;
}));
/**
* Wrap test runs in a fixture function to perform setup and
* teardown. Using a fixture-type of :each wraps every test
* individually, while :once wraps the whole run in a single function.
* @param {...*} var_args
*/
cemerick.cljs.test.register_fixtures_BANG_ = (function() { 
var register_fixtures_BANG___delegate = function (ns_sym,fixture_type,fixture_fns){return cljs.core.swap_BANG_.call(null,cemerick.cljs.test.registered_fixtures,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_sym,fixture_type], null),cljs.core.constantly.call(null,fixture_fns));
};
var register_fixtures_BANG_ = function (ns_sym,fixture_type,var_args){
var fixture_fns = null;if (arguments.length > 2) {
  fixture_fns = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return register_fixtures_BANG___delegate.call(this,ns_sym,fixture_type,fixture_fns);};
register_fixtures_BANG_.cljs$lang$maxFixedArity = 2;
register_fixtures_BANG_.cljs$lang$applyTo = (function (arglist__604796){
var ns_sym = cljs.core.first(arglist__604796);
arglist__604796 = cljs.core.next(arglist__604796);
var fixture_type = cljs.core.first(arglist__604796);
var fixture_fns = cljs.core.rest(arglist__604796);
return register_fixtures_BANG___delegate(ns_sym,fixture_type,fixture_fns);
});
register_fixtures_BANG_.cljs$core$IFn$_invoke$arity$variadic = register_fixtures_BANG___delegate;
return register_fixtures_BANG_;
})()
;
/**
* The default, empty, fixture function.  Just calls its argument.
*/
cemerick.cljs.test.default_fixture = (function default_fixture(f){return f.call(null);
});
/**
* Composes two fixture functions, creating a new fixture function
* that combines their behavior.
*/
cemerick.cljs.test.compose_fixtures = (function compose_fixtures(f1,f2){return (function (g){return f1.call(null,(function (){return f2.call(null,g);
}));
});
});
/**
* Composes a collection of fixtures, in order.  Always returns a valid
* fixture function, even if the collection is empty.
*/
cemerick.cljs.test.join_fixtures = (function join_fixtures(fixtures){return cljs.core.reduce.call(null,cemerick.cljs.test.compose_fixtures,cemerick.cljs.test.default_fixture,fixtures);
});
/**
* If v has a function in its :test metadata, calls that function,
* with *testing-vars* bound to (conj *testing-vars* v).
* 
* Note that this is the implementation of `test-var` in clojure.test,
* which is a macro in clojurescript.test.  See `cemerick.cljs.test/test-var`
* in the Clojure file for `test-var`.
*/
cemerick.cljs.test.test_function = (function test_function(v){if(cljs.core.fn_QMARK_.call(null,v))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("test-var must be passed the function to be tested (not a symbol naming it)"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"fn?","fn?",-1640430032,null),new cljs.core.Symbol(null,"v","v",-1640531409,null))))].join('')));
}
var temp__4098__auto__ = new cljs.core.Keyword(null,"test","test",1017460740).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v));if(cljs.core.truth_(temp__4098__auto__))
{var t = temp__4098__auto__;var _STAR_testing_vars_STAR_604799 = cemerick.cljs.test._STAR_testing_vars_STAR_;try{cemerick.cljs.test._STAR_testing_vars_STAR_ = cljs.core.conj.call(null,cemerick.cljs.test._STAR_testing_vars_STAR_,(function (){var or__6845__auto__ = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v));if(cljs.core.truth_(or__6845__auto__))
{return or__6845__auto__;
} else
{return v;
}
})());
cemerick.cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"begin-test-var","begin-test-var",3128464258),new cljs.core.Keyword(null,"var","var",1014020761),v], null));
cemerick.cljs.test.inc_report_counter.call(null,new cljs.core.Keyword(null,"test","test",1017460740));
try{t.call(null);
}catch (e604800){if((e604800 instanceof Error))
{var e_604801 = e604800;cemerick.cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),"Uncaught exception, not in assertion.",new cljs.core.Keyword(null,"expected","expected",3373152810),null,new cljs.core.Keyword(null,"actual","actual",3885931776),e_604801], null));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e604800;
} else
{}
}
}return cemerick.cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"end-test-var","end-test-var",2014682000),new cljs.core.Keyword(null,"var","var",1014020761),v], null));
}finally {cemerick.cljs.test._STAR_testing_vars_STAR_ = _STAR_testing_vars_STAR_604799;
}} else
{return null;
}
});
/**
* Calls test-var on every var interned in the namespace, with fixtures.
*/
cemerick.cljs.test.test_all_vars = (function test_all_vars(ns_sym){var once_fixture_fn = cemerick.cljs.test.join_fixtures.call(null,new cljs.core.Keyword(null,"once","once",1017319923).cljs$core$IFn$_invoke$arity$1(ns_sym.call(null,cljs.core.deref.call(null,cemerick.cljs.test.registered_fixtures))));var each_fixture_fn = cemerick.cljs.test.join_fixtures.call(null,new cljs.core.Keyword(null,"each","each",1017009523).cljs$core$IFn$_invoke$arity$1(ns_sym.call(null,cljs.core.deref.call(null,cemerick.cljs.test.registered_fixtures))));return once_fixture_fn.call(null,(function (){var seq__604806 = cljs.core.seq.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,cemerick.cljs.test.registered_tests),ns_sym));var chunk__604807 = null;var count__604808 = 0;var i__604809 = 0;while(true){
if((i__604809 < count__604808))
{var v = cljs.core._nth.call(null,chunk__604807,i__604809);if(cljs.core.truth_(new cljs.core.Keyword(null,"test","test",1017460740).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v))))
{each_fixture_fn.call(null,((function (seq__604806,chunk__604807,count__604808,i__604809,v){
return (function (){return cemerick.cljs.test.test_function.call(null,v);
});})(seq__604806,chunk__604807,count__604808,i__604809,v))
);
} else
{}
{
var G__604810 = seq__604806;
var G__604811 = chunk__604807;
var G__604812 = count__604808;
var G__604813 = (i__604809 + 1);
seq__604806 = G__604810;
chunk__604807 = G__604811;
count__604808 = G__604812;
i__604809 = G__604813;
continue;
}
} else
{var temp__4098__auto__ = cljs.core.seq.call(null,seq__604806);if(temp__4098__auto__)
{var seq__604806__$1 = temp__4098__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__604806__$1))
{var c__7569__auto__ = cljs.core.chunk_first.call(null,seq__604806__$1);{
var G__604814 = cljs.core.chunk_rest.call(null,seq__604806__$1);
var G__604815 = c__7569__auto__;
var G__604816 = cljs.core.count.call(null,c__7569__auto__);
var G__604817 = 0;
seq__604806 = G__604814;
chunk__604807 = G__604815;
count__604808 = G__604816;
i__604809 = G__604817;
continue;
}
} else
{var v = cljs.core.first.call(null,seq__604806__$1);if(cljs.core.truth_(new cljs.core.Keyword(null,"test","test",1017460740).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v))))
{each_fixture_fn.call(null,((function (seq__604806,chunk__604807,count__604808,i__604809,v,seq__604806__$1,temp__4098__auto__){
return (function (){return cemerick.cljs.test.test_function.call(null,v);
});})(seq__604806,chunk__604807,count__604808,i__604809,v,seq__604806__$1,temp__4098__auto__))
);
} else
{}
{
var G__604818 = cljs.core.next.call(null,seq__604806__$1);
var G__604819 = null;
var G__604820 = 0;
var G__604821 = 0;
seq__604806 = G__604818;
chunk__604807 = G__604819;
count__604808 = G__604820;
i__604809 = G__604821;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
});
/**
* If the namespace defines a function named test-ns-hook, calls that.
* Otherwise, calls test-all-vars on the namespace.  'ns' is a
* namespace object or a symbol.
* 
* Internally binds *report-counters* to an atom initialized to
* *inital-report-counters*.  Returns the final, dereferenced state of
* *report-counters*.
*/
cemerick.cljs.test.test_ns = (function test_ns(ns_sym){var _STAR_report_counters_STAR_604823 = cemerick.cljs.test._STAR_report_counters_STAR_;try{cemerick.cljs.test._STAR_report_counters_STAR_ = cljs.core.atom.call(null,cemerick.cljs.test._STAR_initial_report_counters_STAR_);
cemerick.cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",1359210286),new cljs.core.Keyword(null,"ns","ns",1013907767),ns_sym], null));
var temp__4096__auto___604824 = cljs.core.get.call(null,cljs.core.deref.call(null,cemerick.cljs.test.registered_test_hooks),ns_sym);if(cljs.core.truth_(temp__4096__auto___604824))
{var test_hook_604825 = temp__4096__auto___604824;test_hook_604825.call(null);
} else
{cemerick.cljs.test.test_all_vars.call(null,ns_sym);
}
cemerick.cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",3401491808),new cljs.core.Keyword(null,"ns","ns",1013907767),ns_sym], null));
return cljs.core.deref.call(null,cemerick.cljs.test._STAR_report_counters_STAR_);
}finally {cemerick.cljs.test._STAR_report_counters_STAR_ = _STAR_report_counters_STAR_604823;
}});
/**
* Runs all tests in the given namespaces; prints results.
* Defaults to current namespace if none given.  Returns a map
* summarizing test results.
* @param {...*} var_args
*/
cemerick.cljs.test.run_tests_STAR_ = (function() { 
var run_tests_STAR___delegate = function (namespaces){var summary = cljs.core.assoc.call(null,cljs.core.apply.call(null,cljs.core.merge_with,cljs.core._PLUS_,cljs.core.map.call(null,cemerick.cljs.test.test_ns,namespaces)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"summary","summary",3451231000));cemerick.cljs.test.do_report.call(null,summary);
return summary;
};
var run_tests_STAR_ = function (var_args){
var namespaces = null;if (arguments.length > 0) {
  namespaces = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return run_tests_STAR___delegate.call(this,namespaces);};
run_tests_STAR_.cljs$lang$maxFixedArity = 0;
run_tests_STAR_.cljs$lang$applyTo = (function (arglist__604826){
var namespaces = cljs.core.seq(arglist__604826);
return run_tests_STAR___delegate(namespaces);
});
run_tests_STAR_.cljs$core$IFn$_invoke$arity$variadic = run_tests_STAR___delegate;
return run_tests_STAR_;
})()
;
goog.exportSymbol('cemerick.cljs.test.run_tests_STAR_', cemerick.cljs.test.run_tests_STAR_);
/**
* Runs all tests in all namespaces; prints results.
* Optional argument is a regular expression; only namespaces with
* names matching the regular expression (with re-matches) will be
* tested.
*/
cemerick.cljs.test.run_all_tests = (function() {
var run_all_tests = null;
var run_all_tests__0 = (function (){return cljs.core.apply.call(null,cemerick.cljs.test.run_tests_STAR_,cljs.core.keys.call(null,cljs.core.deref.call(null,cemerick.cljs.test.registered_tests)));
});
var run_all_tests__1 = (function (re){return cljs.core.apply.call(null,cemerick.cljs.test.run_tests_STAR_,cljs.core.filter.call(null,(function (p1__604827_SHARP_){return cljs.core.re_matches.call(null,re,cljs.core.name.call(null,p1__604827_SHARP_));
}),cljs.core.keys.call(null,cljs.core.deref.call(null,cemerick.cljs.test.registered_tests))));
});
run_all_tests = function(re){
switch(arguments.length){
case 0:
return run_all_tests__0.call(this);
case 1:
return run_all_tests__1.call(this,re);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
run_all_tests.cljs$core$IFn$_invoke$arity$0 = run_all_tests__0;
run_all_tests.cljs$core$IFn$_invoke$arity$1 = run_all_tests__1;
return run_all_tests;
})()
;
goog.exportSymbol('cemerick.cljs.test.run_all_tests', cemerick.cljs.test.run_all_tests);
/**
* Returns true if the given test summary indicates all tests
* were successful, false otherwise.
*/
cemerick.cljs.test.successful_QMARK_ = (function successful_QMARK_(summary){return ((new cljs.core.Keyword(null,"fail","fail",1017039504).cljs$core$IFn$_invoke$arity$2(summary,0) === 0)) && ((new cljs.core.Keyword(null,"error","error",1110689146).cljs$core$IFn$_invoke$arity$2(summary,0) === 0));
});
goog.exportSymbol('cemerick.cljs.test.successful_QMARK_', cemerick.cljs.test.successful_QMARK_);
cemerick.cljs.test.set_print_fn_BANG_ = (function set_print_fn_BANG_(f){return cljs.core._STAR_print_fn_STAR_ = f;
});
goog.exportSymbol('cemerick.cljs.test.set_print_fn_BANG_', cemerick.cljs.test.set_print_fn_BANG_);
