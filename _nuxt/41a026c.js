(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{383:function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"e",(function(){return d})),n.d(t,"f",(function(){return f})),n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return v})),n.d(t,"g",(function(){return w})),n.d(t,"c",(function(){return x}));var r=n(17),o=(n(77),n(0)),c=function(e){var t=e.x/7;return{total:t,height:.8*t,margin:.1*t}},d=function(e){return document.querySelector("#".concat(e))},f=function(canvas){return{x:canvas.clientWidth,y:canvas.clientHeight}},l=function(){return Object(o.o)({x:0,y:0})},v=function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(),e.next=3,Object(o.h)();case 3:t();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e={x:window.innerWidth,y:window.innerHeight};return{height:String(e.y)+"px",width:String(e.x)+"px"}},x=function(){return Object(o.o)(w())}},395:function(e,t,n){var content=n(522);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(116).default)("3d63b834",content,!0,{sourceMap:!1})},521:function(e,t,n){"use strict";var r=n(395),o=n.n(r);n.d(t,"default",(function(){return o.a}))},522:function(e,t,n){var r=n(115)(!1);r.push([e.i,".windowContent_g\\+YnS{z-index:100;opacity:0;position:absolute;top:0;left:0}",""]),r.locals={windowContent:"windowContent_g+YnS"},e.exports=r},523:function(e,t){e.exports=function(component,e){var t="function"==typeof component.exports?component.exports.extendOptions:component.options;for(var i in"function"==typeof component.exports&&(t.directives=component.exports.options.directives),t.directives=t.directives||{},e)t.directives[i]=t.directives[i]||e[i]}},525:function(e,t,n){"use strict";n.r(t);var r=n(17),o=(n(77),n(0)),c=n(383),d=Object(o.d)({setup:function(){var e=Object(c.c)(),t=function(){e.value=Object(c.g)()},n=function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(c.a)(t);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{contentStyle:e,awaitResize:n}}}),f=d,l=n(521),v=n(75),w=n(523),x=n.n(w);var h={inserted:function(e,t,n){var r=t.value,o=t.options||{passive:!0};window.addEventListener("resize",r,o),e._onResize=Object(e._onResize),e._onResize[n.context._uid]={callback:r,options:o},t.modifiers&&t.modifiers.quiet||r()},unbind:function(e,t,n){var r;if(null!=(r=e._onResize)&&r[n.context._uid]){var o=e._onResize[n.context._uid],c=o.callback,d=o.options;window.removeEventListener("resize",c,d),delete e._onResize[n.context._uid]}}};var component=Object(v.a)(f,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{directives:[{name:"resize",rawName:"v-resize",value:e.awaitResize,expression:"awaitResize"}],class:e.$style.windowContent,style:e.contentStyle})}),[],!1,(function(e){this.$style=l.default.locals||l.default}),null,null);t.default=component.exports;x()(component,{Resize:h})}}]);