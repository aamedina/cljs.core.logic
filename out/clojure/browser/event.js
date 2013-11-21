// Compiled by ClojureScript 0.0-2060
goog.provide('clojure.browser.event');
goog.require('cljs.core');
goog.require('goog.events.EventType');
goog.require('goog.events.EventType');
goog.require('goog.events.EventTarget');
goog.require('goog.events.EventTarget');
goog.require('goog.events');
goog.require('goog.events');
clojure.browser.event.EventType = (function (){var obj8258 = {};return obj8258;
})();
clojure.browser.event.event_types = (function event_types(this$){if((function (){var and__5073__auto__ = this$;if(and__5073__auto__)
{return this$.clojure$browser$event$EventType$event_types$arity$1;
} else
{return and__5073__auto__;
}
})())
{return this$.clojure$browser$event$EventType$event_types$arity$1(this$);
} else
{var x__5678__auto__ = (((this$ == null))?null:this$);return (function (){var or__5082__auto__ = (clojure.browser.event.event_types[goog.typeOf(x__5678__auto__)]);if(or__5082__auto__)
{return or__5082__auto__;
} else
{var or__5082__auto____$1 = (clojure.browser.event.event_types["_"]);if(or__5082__auto____$1)
{return or__5082__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"EventType.event-types",this$);
}
}
})().call(null,this$);
}
});
Element.prototype.clojure$browser$event$EventType$ = true;
Element.prototype.clojure$browser$event$EventType$event_types$arity$1 = (function (this$){var this$__$1 = this;return cljs.core.into.call(null,cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"end-line","end-line",2693041432),36,new cljs.core.Keyword(null,"end-column","end-column",3799845882),12], null)),cljs.core.map.call(null,(function (p__8259){var vec__8260 = p__8259;var k = cljs.core.nth.call(null,vec__8260,0,null);var v = cljs.core.nth.call(null,vec__8260,1,null);return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k.toLowerCase()),v], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"end-line","end-line",2693041432),40,new cljs.core.Keyword(null,"end-column","end-column",3799845882),17], null));
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.events.EventType))));
});
goog.events.EventTarget.prototype.clojure$browser$event$EventType$ = true;
goog.events.EventTarget.prototype.clojure$browser$event$EventType$event_types$arity$1 = (function (this$){var this$__$1 = this;return cljs.core.into.call(null,cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"end-line","end-line",2693041432),25,new cljs.core.Keyword(null,"end-column","end-column",3799845882),12], null)),cljs.core.map.call(null,(function (p__8261){var vec__8262 = p__8261;var k = cljs.core.nth.call(null,vec__8262,0,null);var v = cljs.core.nth.call(null,vec__8262,1,null);return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k.toLowerCase()),v], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"end-line","end-line",2693041432),29,new cljs.core.Keyword(null,"end-column","end-column",3799845882),17], null));
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.events.EventType))));
});
clojure.browser.event.listen = (function() {
var listen = null;
var listen__3 = (function (src,type,fn){return listen.call(null,src,type,fn,false);
});
var listen__4 = (function (src,type,fn,capture_QMARK_){return goog.events.listen(src,cljs.core.get.call(null,clojure.browser.event.event_types.call(null,src),type,type),fn,capture_QMARK_);
});
listen = function(src,type,fn,capture_QMARK_){
switch(arguments.length){
case 3:
return listen__3.call(this,src,type,fn);
case 4:
return listen__4.call(this,src,type,fn,capture_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
listen.cljs$core$IFn$_invoke$arity$3 = listen__3;
listen.cljs$core$IFn$_invoke$arity$4 = listen__4;
return listen;
})()
;
clojure.browser.event.listen_once = (function() {
var listen_once = null;
var listen_once__3 = (function (src,type,fn){return listen_once.call(null,src,type,fn,false);
});
var listen_once__4 = (function (src,type,fn,capture_QMARK_){return goog.events.listenOnce(src,cljs.core.get.call(null,clojure.browser.event.event_types.call(null,src),type,type),fn,capture_QMARK_);
});
listen_once = function(src,type,fn,capture_QMARK_){
switch(arguments.length){
case 3:
return listen_once__3.call(this,src,type,fn);
case 4:
return listen_once__4.call(this,src,type,fn,capture_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
listen_once.cljs$core$IFn$_invoke$arity$3 = listen_once__3;
listen_once.cljs$core$IFn$_invoke$arity$4 = listen_once__4;
return listen_once;
})()
;
clojure.browser.event.unlisten = (function() {
var unlisten = null;
var unlisten__3 = (function (src,type,fn){return unlisten.call(null,src,type,fn,false);
});
var unlisten__4 = (function (src,type,fn,capture_QMARK_){return goog.events.unlisten(src,cljs.core.get.call(null,clojure.browser.event.event_types.call(null,src),type,type),fn,capture_QMARK_);
});
unlisten = function(src,type,fn,capture_QMARK_){
switch(arguments.length){
case 3:
return unlisten__3.call(this,src,type,fn);
case 4:
return unlisten__4.call(this,src,type,fn,capture_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unlisten.cljs$core$IFn$_invoke$arity$3 = unlisten__3;
unlisten.cljs$core$IFn$_invoke$arity$4 = unlisten__4;
return unlisten;
})()
;
clojure.browser.event.unlisten_by_key = (function unlisten_by_key(key){return goog.events.unlistenByKey(key);
});
clojure.browser.event.dispatch_event = (function dispatch_event(src,event){return goog.events.dispatchEvent(src,event);
});
clojure.browser.event.expose = (function expose(e){return goog.events.expose(e);
});
clojure.browser.event.fire_listeners = (function fire_listeners(obj,type,capture,event){return null;
});
clojure.browser.event.total_listener_count = (function total_listener_count(){return goog.events.getTotalListenerCount();
});
clojure.browser.event.get_listener = (function get_listener(src,type,listener,opt_capt,opt_handler){return null;
});
clojure.browser.event.all_listeners = (function all_listeners(obj,type,capture){return null;
});
clojure.browser.event.unique_event_id = (function unique_event_id(event_type){return null;
});
clojure.browser.event.has_listener = (function has_listener(obj,opt_type,opt_capture){return null;
});
clojure.browser.event.remove_all = (function remove_all(opt_obj,opt_type,opt_capt){return null;
});
