/*! For license information please see a3336d3c033a5ec9d59a088cb032c68b95c64a61-60fd0391f66d4fdf2182.js.LICENSE.txt */
(self.webpackChunk_samhwang_gatsby_resume=self.webpackChunk_samhwang_gatsby_resume||[]).push([[452],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.default=e.exports,e.exports.__esModule=!0},3646:function(e,t,r){var n=r(7228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.default=e.exports,e.exports.__esModule=!0},4575:function(e){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.default=e.exports,e.exports.__esModule=!0},3913:function(e){function t(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e},e.exports.default=e.exports,e.exports.__esModule=!0},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.default=e.exports,e.exports.__esModule=!0},9754:function(e){function t(r){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.default=e.exports,e.exports.__esModule=!0,t(r)}e.exports=t,e.exports.default=e.exports,e.exports.__esModule=!0},2205:function(e,t,r){var n=r(9489);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)},e.exports.default=e.exports,e.exports.__esModule=!0},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},8585:function(e,t,r){var n=r(8).default,o=r(1506);e.exports=function(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return o(e)},e.exports.default=e.exports,e.exports.__esModule=!0},319:function(e,t,r){var n=r(3646),o=r(6860),i=r(379),a=r(8206);e.exports=function(e){return n(e)||o(e)||i(e)||a()},e.exports.default=e.exports,e.exports.__esModule=!0},8:function(e){function t(r){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(e.exports=t=function(e){return typeof e},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=t=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.default=e.exports,e.exports.__esModule=!0),t(r)}e.exports=t,e.exports.default=e.exports,e.exports.__esModule=!0},379:function(e,t,r){var n=r(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},5900:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)){if(r.length){var a=o.apply(null,r);a&&e.push(a)}}else if("object"===i)if(r.toString===Object.prototype.toString)for(var s in r)n.call(r,s)&&r[s]&&e.push(s);else e.push(r.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},2993:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var s,l,c,u;if(Array.isArray(e)){if((s=e.length)!=a.length)return!1;for(l=s;0!=l--;)if(!i(e[l],a[l]))return!1;return!0}if(r&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!a.has(l.value[0]))return!1;for(u=e.entries();!(l=u.next()).done;)if(!i(l.value[1],a.get(l.value[0])))return!1;return!0}if(n&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!a.has(l.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((s=e.length)!=a.length)return!1;for(l=s;0!=l--;)if(e[l]!==a[l])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((s=(c=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(l=s;0!=l--;)if(!Object.prototype.hasOwnProperty.call(a,c[l]))return!1;if(t&&e instanceof Element)return!1;for(l=s;0!=l--;)if(("_owner"!==c[l]&&"__v"!==c[l]&&"__o"!==c[l]||!e.$$typeof)&&!i(e[c[l]],a[c[l]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},4266:function(e,t,r){"use strict";var n=r(5318);t.Z=void 0;var o=n(r(7154)),i=n(r(9713)),a=n(r(319)),s=n(r(4575)),l=n(r(8585)),c=n(r(9754)),u=n(r(1506)),f=n(r(3913)),p=n(r(2205)),d=n(r(5697)),h=n(r(7294)),y=n(r(5900)),m=n(r(2470));var v=function(e){function t(e){var r;return(0,s.default)(this,t),(r=(0,l.default)(this,(0,c.default)(t).call(this,e))).state={targetItems:[],inViewState:[],isScrolledPast:[]},r._handleSpy=r._handleSpy.bind((0,u.default)(r)),r}return(0,p.default)(t,e),(0,f.default)(t,null,[{key:"propTypes",get:function(){return{items:d.default.arrayOf(d.default.string).isRequired,currentClassName:d.default.string.isRequired,scrolledPastClassName:d.default.string,style:d.default.object,componentTag:d.default.oneOfType([d.default.string,d.default.elementType]),offset:d.default.number,rootEl:d.default.string,onUpdate:d.default.func}}},{key:"defaultProps",get:function(){return{items:[],currentClassName:"",style:{},componentTag:"ul",offset:0,onUpdate:function(){}}}}]),(0,f.default)(t,[{key:"_initSpyTarget",value:function(e){return e.map((function(e){return document.getElementById(e)}))}},{key:"_fillArray",value:function(e,t){for(var r=[],n=0,o=e.length;n<o;n++)r[n]=t;return r}},{key:"_isScrolled",value:function(){return this._getScrollDimension().scrollTop>0}},{key:"_getScrollDimension",value:function(){var e=document,t=this.props.rootEl;return{scrollTop:t?e.querySelector(t).scrollTop:e.documentElement.scrollTop||e.body.parentNode.scrollTop||e.body.scrollTop,scrollHeight:t?e.querySelector(t).scrollHeight:e.documentElement.scrollHeight||e.body.parentNode.scrollHeight||e.body.scrollHeight}}},{key:"_getElemsViewState",value:function(e){for(var t=[],r=[],n=[],o=e||this.state.targetItems,i=!1,s=0,l=o.length;s<l;s++){var c=o[s],u=!i&&this._isInView(c);u?(i=!0,t.push(c)):r.push(c);var f=s===l-1,p=this._isScrolled();this._isAtBottom()&&this._isInView(c)&&!u&&f&&p&&(r.pop(),r.push.apply(r,(0,a.default)(t)),t=[c],n=this._fillArray(n,!1),u=!0),n.push(u)}return{inView:t,outView:r,viewStatusList:n,scrolledPast:this.props.scrolledPastClassName&&this._getScrolledPast(n)}}},{key:"_isInView",value:function(e){if(!e)return!1;var t,r=this.props,n=r.rootEl,o=r.offset;n&&(t=document.querySelector(n).getBoundingClientRect());var i=e.getBoundingClientRect(),a=n?t.height:window.innerHeight,s=this._getScrollDimension().scrollTop,l=s+a,c=n?i.top+s-t.top+o:i.top+s+o,u=c+e.offsetHeight;return c<l&&u>s}},{key:"_isAtBottom",value:function(){var e=this.props.rootEl,t=this._getScrollDimension(),r=t.scrollTop,n=t.scrollHeight;return r+(e?document.querySelector(e).getBoundingClientRect().height:window.innerHeight)>=n}},{key:"_getScrolledPast",value:function(e){if(!e.some((function(e){return e})))return e;var t=!1;return e.map((function(e){return e&&!t?(t=!0,!1):!t}))}},{key:"_spy",value:function(e){var t=this,r=this._getElemsViewState(e),n=this.state.inViewState;this.setState({inViewState:r.viewStatusList,isScrolledPast:r.scrolledPast},(function(){t._update(n)}))}},{key:"_update",value:function(e){var t,r;(t=this.state.inViewState,r=e,t.length===r.length&&t.every((function(e,t){return e===r[t]})))||this.props.onUpdate(this.state.targetItems[this.state.inViewState.indexOf(!0)])}},{key:"_handleSpy",value:function(){(0,m.default)(this._spy(),100)}},{key:"_initFromProps",value:function(){var e=this._initSpyTarget(this.props.items);this.setState({targetItems:e}),this._spy(e)}},{key:"offEvent",value:function(){(this.props.rootEl?document.querySelector(this.props.rootEl):window).removeEventListener("scroll",this._handleSpy)}},{key:"onEvent",value:function(){(this.props.rootEl?document.querySelector(this.props.rootEl):window).addEventListener("scroll",this._handleSpy)}},{key:"componentDidMount",value:function(){this._initFromProps(),this.onEvent()}},{key:"componentWillUnmount",value:function(){this.offEvent()}},{key:"UNSAFE_componentWillReceiveProps",value:function(){this._initFromProps()}},{key:"render",value:function(){var e=this,t=this.props.componentTag,r=this.props,n=r.children,a=r.className,s=r.scrolledPastClassName,l=r.style,c=0,u=h.default.Children.map(n,(function(t,r){var n;if(!t)return null;var a=t.type,l=s&&e.state.isScrolledPast[r],u=(0,y.default)((n={},(0,i.default)(n,"".concat(t.props.className),t.props.className),(0,i.default)(n,"".concat(e.props.currentClassName),e.state.inViewState[r]),(0,i.default)(n,"".concat(e.props.scrolledPastClassName),l),n));return h.default.createElement(a,(0,o.default)({},t.props,{className:u,key:c++}),t.props.children)})),f=(0,y.default)((0,i.default)({},"".concat(a),a));return h.default.createElement(t,{className:f,style:l},u)}}]),t}(h.default.Component);t.Z=v},2470:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){var t,r,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return function(){var o=+new Date;!!t&&o<t+n?(clearTimeout(r),r=setTimeout((function(){t=o,e()}),n)):(t=o,e())}};t.default=r},4839:function(e,t,r){"use strict";var n,o=r(7294),i=(n=o)&&"object"==typeof n&&"default"in n?n.default:n;function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var l,c=[];function u(){l=e(c.map((function(e){return e.props}))),f.canUseDOM?t(l):r&&(l=r(l))}var f=function(e){var t,r;function o(){return e.apply(this,arguments)||this}r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.peek=function(){return l},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,c=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){c.push(this),u()},a.componentDidUpdate=function(){u()},a.componentWillUnmount=function(){var e=c.indexOf(this);c.splice(e,1),u()},a.render=function(){return i.createElement(n,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),a(f,"canUseDOM",s),f}}},8280:function(e,t,r){"use strict";r.d(t,{O:function(){return i}});var n=r(7294),o=function(e){return!e};function i(e,t){return void 0===e&&(e=!1),void 0===t&&(t=o),(0,n.useReducer)(t,e)}},9634:function(e){!function(){"use strict";e.exports={polyfill:function(){var e=window,t=document;if(!("scrollBehavior"in t.documentElement.style)||!0===e.__forceSmoothScrollPolyfill__){var r,n=e.HTMLElement||e.Element,o={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,elementScroll:n.prototype.scroll||s,scrollIntoView:n.prototype.scrollIntoView},i=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now,a=(r=e.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(r)?1:0);e.scroll=e.scrollTo=function(){void 0!==arguments[0]&&(!0!==l(arguments[0])?h.call(e,t.body,void 0!==arguments[0].left?~~arguments[0].left:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:e.scrollY||e.pageYOffset):o.scroll.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:e.scrollY||e.pageYOffset))},e.scrollBy=function(){void 0!==arguments[0]&&(l(arguments[0])?o.scrollBy.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):h.call(e,t.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset)))},n.prototype.scroll=n.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==l(arguments[0])){var e=arguments[0].left,t=arguments[0].top;h.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");o.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},n.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==l(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):o.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},n.prototype.scrollIntoView=function(){if(!0!==l(arguments[0])){var r=p(this),n=r.getBoundingClientRect(),i=this.getBoundingClientRect();r!==t.body?(h.call(this,r,r.scrollLeft+i.left-n.left,r.scrollTop+i.top-n.top),"fixed"!==e.getComputedStyle(r).position&&e.scrollBy({left:n.left,top:n.top,behavior:"smooth"})):e.scrollBy({left:i.left,top:i.top,behavior:"smooth"})}else o.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function s(e,t){this.scrollLeft=e,this.scrollTop=t}function l(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function c(e,t){return"Y"===t?e.clientHeight+a<e.scrollHeight:"X"===t?e.clientWidth+a<e.scrollWidth:void 0}function u(t,r){var n=e.getComputedStyle(t,null)["overflow"+r];return"auto"===n||"scroll"===n}function f(e){var t=c(e,"Y")&&u(e,"Y"),r=c(e,"X")&&u(e,"X");return t||r}function p(e){for(;e!==t.body&&!1===f(e);)e=e.parentNode||e.host;return e}function d(t){var r,n,o,a,s=(i()-t.startTime)/468;a=s=s>1?1:s,r=.5*(1-Math.cos(Math.PI*a)),n=t.startX+(t.x-t.startX)*r,o=t.startY+(t.y-t.startY)*r,t.method.call(t.scrollable,n,o),n===t.x&&o===t.y||e.requestAnimationFrame(d.bind(e,t))}function h(r,n,a){var l,c,u,f,p=i();r===t.body?(l=e,c=e.scrollX||e.pageXOffset,u=e.scrollY||e.pageYOffset,f=o.scroll):(l=r,c=r.scrollLeft,u=r.scrollTop,f=s),d({scrollable:l,method:f,startTime:p,startX:c,startY:u,x:n,y:a})}}}}()},4381:function(e,t,r){"use strict";r.d(t,{Ar:function(){return Ne}});var n=r(3403),o=r(5893);var i,a,s,l,c=function(){var e=(0,o.jsx)(n.M,{href:"https://github.com/samhwang",children:"Sam Huynh"}),t=(0,o.jsx)(n.M,{href:"https://pages.github.com/",children:"GitHub Pages"}),r=(0,o.jsx)(n.M,{href:"https://www.gatsbyjs.org/",children:"GatsbyJS."});return(0,o.jsx)("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",children:(0,o.jsxs)("p",{children:["© "+(new Date).getFullYear()+" ",e,". Hosted on ",t,". Based on ",r]})})},u=r(5697),f=r.n(u),p=r(4839),d=r.n(p),h=r(2993),y=r.n(h),m=r(7294),v=r(6494),b=r.n(v),g="bodyAttributes",w="htmlAttributes",T="titleAttributes",x={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},S=(Object.keys(x).map((function(e){return x[e]})),"charset"),j="cssText",C="href",E="http-equiv",O="innerHTML",_="itemprop",A="name",k="property",P="rel",N="src",M="target",I={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},L="defaultTitle",B="defer",R="encodeSpecialCharacters",H="onChangeClientState",Y="titleTemplate",D=Object.keys(I).reduce((function(e,t){return e[I[t]]=t,e}),{}),q=[x.NOSCRIPT,x.SCRIPT,x.STYLE],V="data-react-helmet",F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},U=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},X=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},W=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},z=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},$=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Z=function(e){var t=te(e,x.TITLE),r=te(e,Y);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=te(e,L);return t||n||void 0},G=function(e){return te(e,H)||function(){}},Q=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return K({},e,t)}),{})},J=function(e,t){return t.filter((function(e){return void 0!==e[x.BASE]})).map((function(e){return e[x.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var i=n[o].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},ee=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ae("Helmet: "+e+' should be of type "Array". Instead found type "'+F(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var o={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),a=0;a<i.length;a++){var s=i[a],l=s.toLowerCase();-1===t.indexOf(l)||r===P&&"canonical"===e[r].toLowerCase()||l===P&&"stylesheet"===e[l].toLowerCase()||(r=l),-1===t.indexOf(s)||s!==O&&s!==j&&s!==_||(r=s)}if(!r||!e[r])return!1;var c=e[r].toLowerCase();return n[r]||(n[r]={}),o[r]||(o[r]={}),!n[r][c]&&(o[r][c]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var s=i[a],l=b()({},n[s],o[s]);n[s]=l}return e}),[]).reverse()},te=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},re=(i=Date.now(),function(e){var t=Date.now();t-i>16?(i=t,e(t)):setTimeout((function(){re(e)}),0)}),ne=function(e){return clearTimeout(e)},oe="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||re:r.g.requestAnimationFrame||re,ie="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ne:r.g.cancelAnimationFrame||ne,ae=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},se=null,le=function(e,t){var r=e.baseTag,n=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,s=e.noscriptTags,l=e.onChangeClientState,c=e.scriptTags,u=e.styleTags,f=e.title,p=e.titleAttributes;fe(x.BODY,n),fe(x.HTML,o),ue(f,p);var d={baseTag:pe(x.BASE,r),linkTags:pe(x.LINK,i),metaTags:pe(x.META,a),noscriptTags:pe(x.NOSCRIPT,s),scriptTags:pe(x.SCRIPT,c),styleTags:pe(x.STYLE,u)},h={},y={};Object.keys(d).forEach((function(e){var t=d[e],r=t.newTags,n=t.oldTags;r.length&&(h[e]=r),n.length&&(y[e]=d[e].oldTags)})),t&&t(),l(e,h,y)},ce=function(e){return Array.isArray(e)?e.join(""):e},ue=function(e,t){void 0!==e&&document.title!==e&&(document.title=ce(e)),fe(x.TITLE,t)},fe=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(V),o=n?n.split(","):[],i=[].concat(o),a=Object.keys(t),s=0;s<a.length;s++){var l=a[s],c=t[l]||"";r.getAttribute(l)!==c&&r.setAttribute(l,c),-1===o.indexOf(l)&&o.push(l);var u=i.indexOf(l);-1!==u&&i.splice(u,1)}for(var f=i.length-1;f>=0;f--)r.removeAttribute(i[f]);o.length===i.length?r.removeAttribute(V):r.getAttribute(V)!==a.join(",")&&r.setAttribute(V,a.join(","))}},pe=function(e,t){var r=document.head||document.querySelector(x.HEAD),n=r.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(n),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===O)r.innerHTML=t.innerHTML;else if(n===j)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var s=void 0===t[n]?"":t[n];r.setAttribute(n,s)}r.setAttribute(V,"true"),o.some((function(e,t){return a=t,r.isEqualNode(e)}))?o.splice(a,1):i.push(r)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:o,newTags:i}},de=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},he=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[I[r]||r]=e[r],t}),t)},ye=function(e,t,r){switch(e){case x.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[V]=!0,o=he(r,n),[m.createElement(x.TITLE,o,e)];var e,r,n,o},toString:function(){return function(e,t,r,n){var o=de(r),i=ce(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+$(i,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+$(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case g:case w:return{toComponent:function(){return he(t)},toString:function(){return de(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,o=((n={key:r})[V]=!0,n);return Object.keys(t).forEach((function(e){var r=I[e]||e;if(r===O||r===j){var n=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:n}}else o[r]=t[e]})),m.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var o=Object.keys(n).filter((function(e){return!(e===O||e===j)})).reduce((function(e,t){var o=void 0===n[t]?t:t+'="'+$(n[t],r)+'"';return e?e+" "+o:o}),""),i=n.innerHTML||n.cssText||"",a=-1===q.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}},me=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,s=e.noscriptTags,l=e.scriptTags,c=e.styleTags,u=e.title,f=void 0===u?"":u,p=e.titleAttributes;return{base:ye(x.BASE,t,n),bodyAttributes:ye(g,r,n),htmlAttributes:ye(w,o,n),link:ye(x.LINK,i,n),meta:ye(x.META,a,n),noscript:ye(x.NOSCRIPT,s,n),script:ye(x.SCRIPT,l,n),style:ye(x.STYLE,c,n),title:ye(x.TITLE,{title:f,titleAttributes:p},n)}},ve=d()((function(e){return{baseTag:J([C,M],e),bodyAttributes:Q(g,e),defer:te(e,B),encode:te(e,R),htmlAttributes:Q(w,e),linkTags:ee(x.LINK,[P,C],e),metaTags:ee(x.META,[A,S,E,k,_],e),noscriptTags:ee(x.NOSCRIPT,[O],e),onChangeClientState:G(e),scriptTags:ee(x.SCRIPT,[N,O],e),styleTags:ee(x.STYLE,[j],e),title:Z(e),titleAttributes:Q(T,e)}}),(function(e){se&&ie(se),e.defer?se=oe((function(){le(e,(function(){se=null}))})):(le(e),se=null)}),me)((function(){return null})),be=(a=ve,l=s=function(e){function t(){return U(this,t),z(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!y()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case x.SCRIPT:case x.NOSCRIPT:return{innerHTML:t};case x.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return K({},n,((t={})[r.type]=[].concat(n[r.type]||[],[K({},o,this.mapNestedChildrenToProps(r,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(n.type){case x.TITLE:return K({},o,((t={})[n.type]=a,t.titleAttributes=K({},i),t));case x.BODY:return K({},o,{bodyAttributes:K({},i)});case x.HTML:return K({},o,{htmlAttributes:K({},i)})}return K({},o,((r={})[n.type]=K({},i),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=K({},t);return Object.keys(e).forEach((function(t){var n;r=K({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return m.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[D[r]||r]=e[r],t}),t)}(W(o,["children"]));switch(r.warnOnInvalidChildren(e,i),e.type){case x.LINK:case x.META:case x.NOSCRIPT:case x.SCRIPT:case x.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:a,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=W(e,["children"]),n=K({},r);return t&&(n=this.mapChildrenToProps(t,n)),m.createElement(a,n)},X(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(m.Component),s.propTypes={base:f().object,bodyAttributes:f().object,children:f().oneOfType([f().arrayOf(f().node),f().node]),defaultTitle:f().string,defer:f().bool,encodeSpecialCharacters:f().bool,htmlAttributes:f().object,link:f().arrayOf(f().object),meta:f().arrayOf(f().object),noscript:f().arrayOf(f().object),onChangeClientState:f().func,script:f().arrayOf(f().object),style:f().arrayOf(f().object),title:f().string,titleAttributes:f().object,titleTemplate:f().string},s.defaultProps={defer:!0,encodeSpecialCharacters:!0},s.peek=a.peek,s.rewind=function(){var e=a.rewind();return e||(e=me({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},l);be.renderStatic=be.rewind;function ge(e){var t=e.title,r=e.description,n=e.meta,i=e.defaultFallback,a=i.title,s=r||i.description,l=[{name:"description",content:s},{name:"viewport",content:"minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"},{property:"og:title",content:t},{property:"og:description",content:s},{property:"og:type",content:"website"}],c=n?l.concat(n):l;return(0,o.jsxs)(be,{defaultTitle:a,titleTemplate:"%s | "+a,children:[(0,o.jsx)("title",{children:t}),(0,o.jsx)("html",{lang:"en"}),c.map((function(e){var t=e.name,r=e.property,n=e.content;return(0,o.jsx)("meta",{name:t&&t,property:r&&r,content:n},t||r)}))]})}ge.defaultProps={meta:[],description:""};var we=ge,Te=r(8280),xe=r(4266),Se=r(9634),je=r.n(Se);function Ce(e){return e.children}function Ee(e){var t=e.type,r=e.element,n=e.offset,i=e.timeout,a=e.children,s=e.counter;(0,m.useEffect)((function(){je().polyfill()}),[]);var l=function(e){e.preventDefault();var o=null,a=!0;if(t&&r)switch(t){case"class":a=!!(o=document.getElementsByClassName(r)[0]);break;case"id":a=!!(o=document.getElementById(r))}return a&&o?function(e,t,r){void 0===t&&(t=0);var n=e?e.getBoundingClientRect().top+window.pageYOffset:0;r||window.scroll({top:n+t,left:0,behavior:"smooth"}),setTimeout((function(){window.scroll({top:n+t,left:0,behavior:"smooth"})}),r)}(o,n,i):console.log("Element not found: "+r)};return(0,o.jsx)(Ce,{children:"object"==typeof a?(0,m.cloneElement)(a,{onClick:l}):(0,o.jsx)("span",{onClick:l,onKeyDown:l,role:"tab",tabIndex:s,children:a})})}Ee.defaultProps={offset:0,timeout:300};var Oe=Ee,_e=r.p+"static/avatar-7ac9eb9830f7f4bb8c5558d0c8a4b00d.jpg",Ae=r.p+"static/avatar-7bc5f92df3584344c2e9ea6786825c6c.webp";var ke=function(e){var t=e.personalInformation,r=t.firstName,n=t.lastName,i=[{content:"About",href:"about"},{content:"Experience",href:"experience"},{content:"Education",href:"education"},{content:"Skills",href:"skills"},{content:"Projects",href:"projects"}],a=(0,Te.O)(!0),s=a[0],l=a[1];return(0,o.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary fixed-top",id:"sideNav",children:[(0,o.jsxs)("a",{className:"navbar-brand",href:"#page-top",children:[(0,o.jsx)("span",{className:"d-block d-lg-none",children:r+" "+n}),(0,o.jsx)("span",{className:"d-none d-lg-block",children:(0,o.jsxs)("picture",{children:[(0,o.jsx)("source",{type:"image/webp",srcSet:Ae}),(0,o.jsx)("source",{type:"image/jpeg",srcSet:_e}),(0,o.jsx)("img",{className:"img-fluid img-profile rounded-circle mx-auto mb-2",src:_e,alt:r+" "+n+" Avatar"})]})})]}),(0,o.jsx)("button",{className:"navbar-toggler "+(s?"collapsed":""),type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",onClick:l,children:(0,o.jsx)("span",{className:"navbar-toggler-icon"})}),(0,o.jsx)("div",{className:"collapse navbar-collapse "+(s?"":"show"),id:"navbarSupportedContent",children:(0,o.jsx)(xe.Z,{items:i.map((function(e){return e.href})),currentClassName:"active",offset:-300,className:"navbar-nav",children:i.map((function(e,t){var r=e.href,n=e.content;return(0,o.jsx)("li",{className:"nav-item",children:(0,o.jsx)(Oe,{type:"id",element:r,counter:t,children:(0,o.jsx)("a",{className:"nav-link",href:"#"+r,children:n})})},r)}))})})]})},Pe=r(2701);var Ne=function(e){var t=e.children,r=e.title,n=e.description,i=(0,Pe.$W)(),a=(0,Pe.m3)();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(we,{title:r,description:n,defaultFallback:i}),(0,o.jsxs)("div",{className:"main-body",children:[(0,o.jsx)(ke,{personalInformation:a}),(0,o.jsx)("div",{className:"container-fluid p-0",children:t}),(0,o.jsx)(c,{})]})]})}},2701:function(e,t,r){"use strict";r.d(t,{m3:function(){return o},$W:function(){return i}});var n=r(5444),o=function(){return(0,n.useStaticQuery)("2512737743").site.siteMetadata.personalInformation},i=function(){return(0,n.useStaticQuery)("2956700167").site.siteMetadata};r(6332)},6332:function(e,t,r){"use strict";var n=r(7294),o=r(8280);t.Z=function(e){var t=(0,n.useMemo)((function(){return"devicon-"+e}),[]),r=(0,n.useCallback)((function(e){return e===t?t+" colored":t}),[]),i=(0,o.O)(t,r);return[i[0],i[1]]}},3403:function(e,t,r){"use strict";var n=r(5318);t.M=void 0;var o=n(r(7154)),i=n(r(7316)),a=n(r(7294)),s=n(r(5697)),l=["children"],c=a.default.forwardRef((function(e,t){var r=e.children,n=(0,i.default)(e,l);return a.default.createElement("a",(0,o.default)({ref:t},n,{onClick:function(e){"function"==typeof n.onClick&&n.onClick(e);var t=!0;return(0!==e.button||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey||e.defaultPrevented)&&(t=!1),n.target&&"_self"!==n.target.toLowerCase()&&(t=!1),window.gtag?window.gtag("event","click",{event_category:"outbound",event_label:n.href,transport_type:t?"beacon":"",event_callback:function(){t&&(document.location=n.href)}}):t&&(document.location=n.href),!1}}),r)}));t.M=c,c.propTypes={href:s.default.string,target:s.default.string,onClick:s.default.func}}}]);
//# sourceMappingURL=a3336d3c033a5ec9d59a088cb032c68b95c64a61-60fd0391f66d4fdf2182.js.map