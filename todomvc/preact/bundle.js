!function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return t[o].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}var r=n(1),i=n(5),a=o(i);r.render(r.h(a["default"],null),document.getElementById("todoapp"))},function(t,e,n){"use strict";!function(t,n){n(e)}(void 0,function(t){function e(t,e){var n=arguments.length<=2||void 0===arguments[2]?null:arguments[2],o=n&&n._component&&n._componentConstructor===t.nodeName,i=v(n,t),a=!o&&i._component;return a&&r(a,"componentWillMount"),v.parentNode!==e&&e.appendChild(i),a&&r(a,"componentDidMount"),i}function n(t,e){for(var n=arguments.length,r=Array(n>2?n-2:0),u=2;n>u;u++)r[u-2]=arguments[u];var l=void 0,s=[],c=r.length,p=void 0,f=void 0;if(c){l=[];for(var d=0;c>d;d++){var h=r[d];if(!a(h)){h.join?p=h:(p=s,p[0]=h);for(var m=0;m<p.length;m++){var v=p[m],y=!a(v)&&!i(v);y&&(v=String(v)),y&&f?l[l.length-1]+=v:a(v)||l.push(v),f=y}}}}e&&e.children&&delete e.children;var g=new B(t,e||void 0,l||void 0);return o(F,"vnode",g),g}function o(t,e){for(var n=t[e],o=arguments.length,r=Array(o>2?o-2:0),i=2;o>i;i++)r[i-2]=arguments[i];return n&&"function"==typeof n?n.apply(t,r):void 0}function r(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;e>r;r++)n[r-1]=arguments[r];do o.apply(void 0,[t].concat(n));while(t=t._component)}function i(t){return t&&t.__isVNode===!0}function a(t){return null===t||void 0===t}function u(t,e){if(3===t.nodeType)return"string"==typeof e;if(l(e))return!0;var n=e.nodeName;return"function"==typeof n?t._componentConstructor===n:t.nodeName.toLowerCase()===n}function l(t){var e=t.nodeName;return"function"==typeof e&&!e.prototype.render}function s(t){return t.nodeName(S(t))||U}function c(t){t._dirty||(t._dirty=!0,G.add(t))}function p(t,e){var n=arguments.length<=2||void 0===arguments[2]?E:arguments[2],r=t._disableRendering;t._disableRendering=!0,o(t,"componentWillReceiveProps",e,t.props),t.nextProps=e,t._disableRendering=r,n.render!==!1&&(n.renderSync||$.syncComponentUpdates?f(t):c(t))}function f(t,e){if(!t._disableRendering){t._dirty=!1;var n=t.nextProps,i=t.state;if(t.base){if(o(t,"shouldComponentUpdate",n,i)===!1)return void(t.props=n);o(t,"componentWillUpdate",n,i)}t.props=n;var a=o(t,"render",n,i),u=a&&a.nodeName,l=void 0;if("function"==typeof u&&u.prototype.render){var s=t._component;s&&s.constructor!==u&&(m(s.base,s,!1),s=null);var c=S(a);s?p(s,c,M):(s=H.create(u,c),s._parentComponent=t,t._component=s,t.base&&r(s,"componentWillMount"),p(s,c,D),f(s,R),t.base&&r(s,"componentDidMount")),l=s.base}else t._component&&m(t.base,t._component),t._component=null,(t.base||e&&e.build)&&(l=v(t.base,a||U,t));if(t.base&&l!==t.base){var d=t.base.parentNode;d&&d.replaceChild(l,t.base)}return t.base=l,l&&(l._component=t,l._componentConstructor=t.constructor),o(t,"componentDidUpdate",n,i),a}}function d(t,e){var n=t&&t._component;if(l(e)){var o=v(t,s(e));return o._componentConstructor=e.nodeName,o}for(var r=n&&t._componentConstructor===e.nodeName;n&&!r&&(n=n._parentComponent);)r=n.constructor===e.nodeName;return r?p(n,S(e),M):(n&&m(t,n),t=h(e)),t}function h(t){var e=S(t),n=H.create(t.nodeName,e);return p(n,e,D),f(n,R),n.base}function m(t,e,n){if(o(e,"componentWillUnmount"),n!==!1){t._component===e&&(delete t._component,delete t._componentConstructor);var r=e.base;r&&r.parentNode&&r.parentNode.removeChild(r)}e._parentComponent=null,o(e,"componentDidUnmount"),H.collect(e)}function v(t,e){var n=t,i=e.nodeName;if("function"!=typeof i||i.prototype.render||(e=s(e),i=e.nodeName),"function"==typeof i)return d(t,e);if("string"==typeof e){if(t){if(3===t.nodeType)return t[A]=e,t;1===t.nodeType&&q.collect(t)}return document.createTextNode(e)}(null===i||void 0===i)&&(i="x-undefined-element"),t?t.nodeName.toLowerCase()!==i&&(n=q.create(i),g(n,L(t.childNodes)),1===t.nodeType&&q.collect(t)):n=q.create(i);var a=O(n)||E,l=e.attributes||E;if(a!==E)for(var c in a)if(W.call(a,c)){var p=l[c];(void 0===p||null===p)&&C(n,c,null,a[c])}if(l!==E)for(var f in l)if(W.call(l,f)){var h=l[f];if(void 0!==h&&null!==h){var m=b(n,f,a[f]);h!==m&&C(n,f,h,m)}}for(var y=L(n.childNodes),_={},w=y.length;w--;){var x=y[w].nodeType,S=void 0;if(3===x)S=x.key;else{if(1!==x)continue;S=y[w].getAttribute("key")}S&&(_[S]=y.splice(w,1)[0])}var N=[];if(e.children)for(var w=0,T=e.children.length;T>w;w++){var k=e.children[w],P=k.attributes,S=void 0,j=void 0;if(P&&(S=P.key,j=S&&_[S]),!j){var D=y.length;if(y.length)for(var M=0;D>M;M++)if(u(y[M],k)){j=y.splice(M,1)[0];break}}N.push(v(j,k))}for(var w=0,D=N.length;D>w;w++)if(n.childNodes[w]!==N[w]){var j=N[w],R=j._component,U=n.childNodes[w+1];R&&r(R,"componentWillMount"),U?n.insertBefore(j,U):n.appendChild(j),R&&r(R,"componentDidMount")}for(var w=0,D=y.length;D>w;w++){var j=y[w],R=j._component;R&&o(R,"componentWillUnmount"),j.parentNode.removeChild(j),R?(o(R,"componentDidUnmount"),H.collect(R)):1===j.nodeType&&q.collect(j)}return n}function y(t,e,n){var o=e.split("."),r=o[0];return function(e){var i,u=this,l=t.state,s=void 0,c=void 0;for("string"==typeof n?(s=K(e,n),a(s)&&(u=u._component)&&(s=K(u,n))):s=(u.nodeName+u.type).match(/^input(checkbox|radio)$/i)?u.checked:u.value,"function"==typeof s&&(s=s.call(u)),c=0;c<o.length-1;c++)l=l[o[c]]||{};l[o[c]]=s,t.setState((i={},i[r]=t.state[r],i))}}function g(t,e){var n=e.length;if(2>=n)return t.appendChild(e[0]),void(2===n&&t.appendChild(e[1]));for(var o=document.createDocumentFragment(),r=0;n>r;r++)o.appendChild(e[r]);t.appendChild(o)}function b(t,e,n){return"class"===e?t.className:"style"===e?t.style.cssText:"type"!==e&&e in t?t[e]:n}function C(t,e,n,o){"class"===e?t.className=n:"style"===e?t.style.cssText=n:e in t&&"type"!==e?t[e]=n:_(t,e,n,o)}function _(t,e,n,o){if("on"===e.substring(0,2)){var r=Z(e),i=t._listeners||(t._listeners={});return i[r]||t.addEventListener(r,w),void(i[r]=n)}var a=typeof n;null===n?t.removeAttribute(e):"function"!==a&&"object"!==a&&t.setAttribute(e,n)}function w(t){var e=this._listeners[Z(t.type)];return e?e.call(this,o(F,"event",t)||t):void 0}function O(t){var e=t.attributes;return e&&e.getNamedItem?e.length?x(e):void 0:e}function x(t){for(var e={},n=t.length;n--;){var o=t[n];e[o.name]=o.value}return e}function S(t){var e=k({},t.attributes);return t.children&&(e.children=t.children),e}function N(t){var e="",n=": ",o="; ";for(var r in t)if(W.call(t,r)){var i=t[r];e+=Q(r),e+=n,e+=i,"number"!=typeof i||W.call(I,r)||(e+="px"),e+=o}return e}function T(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}function k(t,e){for(var n in e)W.call(e,n)&&(t[n]=e[n]);return t}var P={};P.classCallCheck=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")};var j="undefined"!=typeof document,E={},D={render:!1},M={renderSync:!0},R={build:!0},U="",A=!j||"textContent"in document?"textContent":"nodeValue",I={boxFlex:1,boxFlexGroup:1,columnCount:1,fillOpacity:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,fontWeight:1,lineClamp:1,lineHeight:1,opacity:1,order:1,orphans:1,strokeOpacity:1,widows:1,zIndex:1,zoom:1},L=function(t){for(var e=[],n=t.length;n--;)e[n]=t[n];return e},W=Object.prototype.hasOwnProperty,z=function(t){var e=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return function(n){return W.call(e,n)?e[n]:e[n]=t(n)}},K=function(t,e){return e.split(".").map(function(e){return t=t&&t[e]}),t},$={syncComponentUpdates:!0},F={vnode:function(t){var e=t.attributes;if(e){var n=e.style;n&&!n.substring&&(e.style=N(n));var o=e["class"];W.call(e,"className")&&(o=e["class"]=e.className,delete e.className),o&&!o.substring&&(e["class"]=T(o))}}},V=function(){function t(){P.classCallCheck(this,t),this._dirty=this._disableRendering=!1,this._linkedStates={},this.nextProps=this.base=null,this.props=o(this,"getDefaultProps")||{},this.state=o(this,"getInitialState")||{},o(this,"initialize")}return t.prototype.shouldComponentUpdate=function(t,e){return!0},t.prototype.linkState=function(t,e){var n=this._linkedStates,o=t+"|"+(e||"");return n[o]||(n[o]=y(this,t,e))},t.prototype.setState=function(t){k(this.state,t),c(this)},t.prototype.setProps=function(t,e){return p(this,t,e)},t.prototype.render=function(t){return n("div",null,t.children)},t}(),B=function Y(t,e,n){P.classCallCheck(this,Y),this.nodeName=t,this.attributes=e,this.children=n};B.prototype.__isVNode=!0;var G={items:[],itemsOffline:[],add:function(t){if(1===G.items.push(t)){var e=F.debounceRendering;e?e(G.process):setTimeout(G.process,0)}},process:function(){var t=G.items,e=t.length;if(e)for(G.items=G.itemsOffline,G.items.length=0,G.itemsOffline=t;e--;)t[e]._dirty&&f(t[e])}},J=G.process,q={nodes:{},normalizeName:z(function(t){return t.toUpperCase()}),collect:function(t){q.clean(t);var e=q.normalizeName(t.nodeName),n=q.nodes[e];n?n.push(t):q.nodes[e]=[t]},create:function(t){var e=q.normalizeName(t),n=q.nodes[e];return n&&n.pop()||document.createElement(t)},clean:function(t){if(t.parentNode&&t.parentNode.removeChild(t),3!==t.nodeType){delete t._component,delete t._componentConstructor;var e=t._listeners;if(delete t._listeners,e)for(var n in e)W.call(e,n)&&t.removeEventListener(n,w);var o=t.attributes&&t.attributes.length;if(o)for(var n=o;n--;)t.removeAttribute(t.attributes[n].name)}}},H={components:{},collect:function(t){var e=t.constructor.name,n=H.components[e];n?n.push(t):H.components[e]=[t]},create:function(t,e){var n=H.components[t.name];if(n&&n.length)for(var o=n.length;o--;)if(n[o].constructor===t)return n.splice(o,1)[0];return new t(e)}},Z=z(function(t){return t.replace(/^on/i,"").toLowerCase()}),Q=z(function(t){return t.replace(/([A-Z])/,"-$1").toLowerCase()}),X={options:$,hooks:F,render:e,rerender:J,h:n,Component:V};t.render=e,t.h=n,t.Component=V,t.VNode=B,t.options=$,t.hooks=F,t.rerender=J,t["default"]=X})},function(t,e){"use strict";function n(){for(var t=arguments.length,e=Array(t),n=0;t>n;n++)e[n]=arguments[n];return 1===e.length?o.apply(void 0,e):r.apply(void 0,e)}function o(t){var e=void 0;return"undefined"!=typeof Reflect?e=Reflect.ownKeys(t.prototype):(e=Object.getOwnPropertyNames(t.prototype),"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(t.prototype)))),e.forEach(function(e){if("constructor"!==e){var n=Object.getOwnPropertyDescriptor(t.prototype,e);"function"==typeof n.value&&Object.defineProperty(t.prototype,e,r(t,e,n))}}),t}function r(t,e,n){var o=n.value;if("function"!=typeof o)throw new Error("@autobind decorator can only be applied to methods not: "+typeof o);return{configurable:!0,get:function(){if(this===t.prototype)return o;var n=o.bind(this);return Object.defineProperty(this,e,{value:n,configurable:!0,writable:!0}),n}}}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=n,t.exports=e["default"]},function(t,e,n){var o,r,i,o,r,i;!function(n,a){r=[e],o=a,i="function"==typeof o?o.apply(e,r):o,!(void 0!==i&&(t.exports=i))}(this,function(e){"use strict";!function(a,u){r=[e,n(1)],o=u,i="function"==typeof o?o.apply(e,r):o,!(void 0!==i&&(t.exports=i))}(void 0,function(t,e){function n(t,e){var n={};for(var o in t)e.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function i(t){history&&history.pushState(null,null,t),a(t)}function a(t){p.forEach(function(e){return e.routeTo(t)})}function u(){return""+(location.pathname||"")+(location.search||"")}function l(t){return i(this.getAttribute("href")),t.stopImmediatePropagation&&t.stopImmediatePropagation(),t.stopPropagation(),t.preventDefault(),!1}function s(t,e){var n=/(?:\?([^#]*))?(#.*)?$/,o=t.match(n),r={};if(o&&o[1])for(var i=o[1].split("&"),a=0;a<i.length;a++){var u=i[a].split("=");r[decodeURIComponent(u[0])]=decodeURIComponent(u.slice(1).join("="))}t=m(t.replace(n,"")),e=m(e);for(var l=Math.max(t.length,e.length),a=0;l>a;a++)if(e[a]&&":"===e[a].charAt(0))r[e[a].substring(1)]=decodeURIComponent(t[a]||"");else if(e[a]!==t[a])return!1;return r}t.__esModule=!0;var c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t};t.route=i;var p=[];"function"==typeof addEventListener&&addEventListener("popstate",function(){return a(u())});var f=function(t){var o=t.children,r=n(t,["children"]);return e.h("a",c({},r,{onClick:l}),o)};t.Link=f;var d=function(t){function e(){o(this,e),t.apply(this,arguments)}return r(e,t),e.prototype.getInitialState=function(){return{url:u()}},e.prototype.routeTo=function(t){this.setState({url:t})},e.prototype.componentWillMount=function(){p.push(this)},e.prototype.componentWillUnmount=function(){p.splice(p.indexOf(this),1)},e.prototype.render=function(t,e){var n=t.children,o=t.onChange,r=e.url,i=n.filter(function(t){var e=t.attributes,n=e.path,o=s(r,n);if(o){e.url=r,e.matches=o;for(var i in o)o.hasOwnProperty(i)&&(e[i]=o[i]);return!0}}),a=this.previousUrl;return r!==a&&(this.previousUrl=r,"function"==typeof o&&o({router:this,url:r,previous:a,active:i,current:i[0]})),i[0]||null},e}(e.Component);t.Router=d;var h=function(t){var n=t.component,o=t.url,r=t.matches;return e.h(n,{url:o,matches:r})};t.Route=h,d.route=i,d.Route=h,d.Link=f,t["default"]=d;var m=function(t){return v(t).split("/")},v=function(t){return t.replace(/(^\/+|\/+$)/g,"")}})})},function(t,e){"use strict";function n(){for(var t="",e=0;32>e;e++){var n=16*Math.random()|0;(8===e||12===e||16===e||20===e)&&(t+="-"),t+=(12===e?4:16===e?3&n|8:n).toString(16)}return t}function o(t,e){return 1===t?e:e+"s"}function r(t,e){if(e)return localStorage.setItem(t,JSON.stringify(e));var n=localStorage.getItem(t);return n&&JSON.parse(n)||[]}e.__esModule=!0,e.uuid=n,e.pluralize=o,e.store=r},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}function r(t){if(null==t)throw new TypeError("Cannot destructure undefined")}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.__esModule=!0;var u,l=n(1),s=n(3),c=n(2),p=o(c),f=n(8),d=o(f),h=n(6),m=o(h),v=n(7),y=o(v),g=13,b="all",C="active",_="completed",w=(u={},u[b]=function(t){return!0},u[C]=function(t){return!t.completed},u[_]=function(t){return t.completed},u),O=function(t){function e(){var e=this;i(this,n),t.call(this),this.model=new d["default"]("preact-todos"),this.model.subscribe(function(){return e.setState({})})}a(e,t),e.prototype.getInitialState=function(){return{nowShowing:b}},e.prototype.handleRoute=function(t){var e=t.url,n=e.replace(/\/$/,"").split("/").pop();w[n]||(n=b),this.setState({nowShowing:n})},e.prototype.handleNewTodoKeyDown=function(t){if(t.keyCode===g){t.preventDefault();var e=this.state.newTodo.trim();e&&(this.model.addTodo(e),this.setState({newTodo:""}))}},e.prototype.toggleAll=function(t){var e=t.target.checked;this.model.toggleAll(e)},e.prototype.toggle=function(t){this.model.toggle(t)},e.prototype.destroy=function(t){this.model.destroy(t)},e.prototype.edit=function(t){this.setState({editing:t.id})},e.prototype.save=function(t,e){this.model.save(t,e),this.setState({editing:null})},e.prototype.cancel=function(){this.setState({editing:null})},e.prototype.clearCompleted=function(){this.model.clearCompleted()},e.prototype.render=function(t,e){var n=this;r(t);var o=e.nowShowing,i=void 0===o?b:o,a=e.newTodo,u=e.editing,c=this.model.todos,p=c.filter(w[i]),f=c.reduce(function(t,e){return t+(e.completed?0:1)},0),d=c.length-f;return l.h("div",null,l.h(s.Router,{onChange:this.handleRoute},l.h(x,{path:"/"})),l.h("header",{id:"header"},l.h("h1",null,"todos"),l.h("input",{id:"new-todo",placeholder:"What needs to be done?",value:a,onKeyDown:this.handleNewTodoKeyDown,onInput:this.linkState("newTodo"),autoFocus:!0})),c.length?l.h("section",{id:"main"},l.h("input",{id:"toggle-all",type:"checkbox",onChange:this.toggleAll,checked:0===f}),l.h("ul",{id:"todo-list"},p.map(function(t){return l.h(y["default"],{todo:t,onToggle:n.toggle.bind(n,t),onDestroy:n.destroy.bind(n,t),onEdit:n.edit.bind(n,t),editing:u===t.id,onSave:n.save.bind(n,t),onCancel:n.cancel})}))):null,f||d?l.h(m["default"],{count:f,completedCount:d,nowShowing:i,onClearCompleted:this.clearCompleted}):null)};var n=e;return e=p["default"](e)||e}(l.Component);e["default"]=O;var x=function(t){function e(){i(this,e),t.apply(this,arguments)}return a(e,t),e.prototype.render=function(){return null},e}(l.Component);t.exports=e["default"]},function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.__esModule=!0;var i=n(1),a=n(3),u=n(4),l="all",s="active",c="completed",p=function(t){function e(){o(this,e),t.apply(this,arguments)}return r(e,t),e.prototype.render=function(t){var e=t.nowShowing,n=t.count,o=t.completedCount,r=t.onClearCompleted;return i.h("footer",{id:"footer"},i.h("span",{id:"todo-count"},i.h("strong",null,n)," ",u.pluralize(n,"item")," left"),i.h("ul",{id:"filters"},i.h("li",null,i.h(a.Link,{href:"/","class":{selected:e===l}},"All"))," ",i.h("li",null,i.h(a.Link,{href:"/active","class":{selected:e===s}},"Active"))," ",i.h("li",null,i.h(a.Link,{href:"/completed","class":{selected:e===c}},"Completed"))),o>0?i.h("button",{id:"clear-completed",onClick:r},"Clear completed"):null)},e}(i.Component);e["default"]=p,t.exports=e["default"]},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.__esModule=!0;var a=n(1),u=n(2),l=o(u),s=27,c=13,p=function(t){function e(){r(this,n),t.apply(this,arguments)}i(e,t),e.prototype.handleSubmit=function(){var t=this.state.editText.trim();t?(this.props.onSave(t),this.setState({editText:t})):this.props.onDestroy()},e.prototype.handleEdit=function(){this.props.onEdit(),this.setState({editText:this.props.todo.title})},e.prototype.toggle=function(t){this.props.onToggle(),t.preventDefault()},e.prototype.handleKeyDown=function(t){t.which===s?(this.setState({editText:this.props.todo.title}),this.props.onCancel(t)):t.which===c&&this.handleSubmit(t)},e.prototype.componentDidUpdate=function(t){var e=(t.editing,this.base&&this.base.querySelector(".edit"));e&&e.focus()},e.prototype.render=function(t,e){var n=t.todo,o=n.title,r=n.completed,i=(t.onToggle,t.onDestroy),u=t.editing,l=e.editText;return a.h("li",{"class":{completed:r,editing:u}},a.h("div",{"class":"view"},a.h("input",{"class":"toggle",type:"checkbox",checked:r||0,onClick:this.toggle}),a.h("label",{onDblClick:this.handleEdit},o),a.h("button",{"class":"destroy",onClick:i})),a.h("input",{"class":"edit",value:u&&l||o,onBlur:this.handleSubmit,onChange:this.linkState("editText"),onKeyDown:this.handleKeyDown}))};var n=e;return e=l["default"](e)||e}(a.Component);e["default"]=p,t.exports=e["default"]},function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}e.__esModule=!0;var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},i=n(4),a=function(){function t(e){o(this,t),this.key=e,this.todos=i.store(e)||[],this.onChanges=[]}return t.prototype.subscribe=function(t){this.onChanges.push(t)},t.prototype.inform=function(){i.store(this.key,this.todos),this.onChanges.forEach(function(t){return t()})},t.prototype.addTodo=function(t){this.todos=this.todos.concat({id:i.uuid(),title:t,completed:!1}),this.inform()},t.prototype.toggleAll=function(t){this.todos=this.todos.map(function(e){return r({},e,{completed:t})}),this.inform()},t.prototype.toggle=function(t){this.todos=this.todos.map(function(e){return e!==t?e:r({},e,{completed:!e.completed})}),this.inform()},t.prototype.destroy=function(t){this.todos=this.todos.filter(function(e){return e!==t}),this.inform()},t.prototype.save=function(t,e){this.todos=this.todos.map(function(n){return n!==t?n:r({},n,{title:e})}),this.inform()},t.prototype.clearCompleted=function(){this.todos=this.todos.filter(function(t){return!t.completed}),this.inform()},t}();e["default"]=a,t.exports=e["default"]}]);