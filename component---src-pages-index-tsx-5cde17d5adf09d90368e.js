(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{QeBL:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),l=a("K5F9"),i=a("Wbzz"),c=a("dEtu"),o=a("7O5W"),s=a("17x9"),u=a.n(s);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){f(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function y(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function v(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}function E(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var a,n=t.indexOf(":"),r=v(t.slice(0,n)),l=t.slice(n+1).trim();return r.startsWith("webkit")?e[(a=r,a.charAt(0).toUpperCase()+a.slice(1))]=l:e[r]=l,e}),{})}var h=!1;try{h=!0}catch(q){}function g(e){return null===e?null:"object"===m(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function O(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?f({},e,t):{}}function w(e){var t=e.forwardedRef,a=b(e,["forwardedRef"]),n=a.icon,r=a.mask,l=a.symbol,i=a.className,c=a.title,s=g(n),u=O("classes",[].concat(y(function(e){var t,a=e.spin,n=e.pulse,r=e.fixedWidth,l=e.inverse,i=e.border,c=e.listItem,o=e.flip,s=e.size,u=e.rotation,m=e.pull,p=(f(t={"fa-spin":a,"fa-pulse":n,"fa-fw":r,"fa-inverse":l,"fa-border":i,"fa-li":c,"fa-flip-horizontal":"horizontal"===o||"both"===o,"fa-flip-vertical":"vertical"===o||"both"===o},"fa-".concat(s),null!=s),f(t,"fa-rotate-".concat(u),null!=u&&0!==u),f(t,"fa-pull-".concat(m),null!=m),f(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(p).map((function(e){return p[e]?e:null})).filter((function(e){return e}))}(a)),y(i.split(" ")))),m=O("transform","string"==typeof a.transform?o.c.transform(a.transform):a.transform),p=O("mask",g(r)),v=Object(o.a)(s,d({},u,{},m,{},p,{symbol:l,title:c}));if(!v)return function(){var e;!h&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",s),null;var E=v.abstract,x={ref:t};return Object.keys(a).forEach((function(e){w.defaultProps.hasOwnProperty(e)||(x[e]=a[e])})),N(E[0],x)}w.displayName="FontAwesomeIcon",w.propTypes={border:u.a.bool,className:u.a.string,mask:u.a.oneOfType([u.a.object,u.a.array,u.a.string]),fixedWidth:u.a.bool,inverse:u.a.bool,flip:u.a.oneOf(["horizontal","vertical","both"]),icon:u.a.oneOfType([u.a.object,u.a.array,u.a.string]),listItem:u.a.bool,pull:u.a.oneOf(["right","left"]),pulse:u.a.bool,rotation:u.a.oneOf([0,90,180,270]),size:u.a.oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:u.a.bool,symbol:u.a.oneOfType([u.a.bool,u.a.string]),title:u.a.string,transform:u.a.oneOfType([u.a.string,u.a.object]),swapOpacity:u.a.bool},w.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var N=function e(t,a){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof a)return a;var r=(a.children||[]).map((function(a){return e(t,a)})),l=Object.keys(a.attributes||{}).reduce((function(e,t){var n=a.attributes[t];switch(t){case"class":e.attrs.className=n,delete a.attributes.class;break;case"style":e.attrs.style=E(n);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=n:e.attrs[v(t)]=n}return e}),{attrs:{}}),i=n.style,c=void 0===i?{}:i,o=b(n,["style"]);return l.attrs.style=d({},l.attrs.style,{},c),t.apply(void 0,[a.tag,d({},l.attrs,{},o)].concat(y(r)))}.bind(null,r.a.createElement);var x=function(e){var t=e.icon,a=e.name,n=e.url,l=t.split(" ");return r.a.createElement(c.OutboundLink,{href:n,alt:a+" link"},r.a.createElement(w,{icon:l}))};var j=function(e){var t=e.personalInformation,a=t.firstName,n=t.lastName,l=t.address,i=t.email,o=t.socialLinks;return r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"about"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h1",{className:"mb-0"},a,r.a.createElement("span",{className:"text-primary"},n)),r.a.createElement("div",{className:"subheading mb-5"},l+" - ",r.a.createElement(c.OutboundLink,{href:"mailto:"+i},i)),r.a.createElement("p",{className:"lead mb-5"},"I have always been passionate about computers, and how technology can bring the world closer. That was the reason why I walked down the path of Software Development. Besides my studies, I have worked in a lot of Agile teams of up to 10 people, delivering high quality responsive web applications on different platforms (PHP, NodeJS) for clients in different industries (retail, sports, and education.)"),r.a.createElement("div",{className:"social-icons"},o.map((function(e){var t=e.icon,a=e.name,n=e.url;return r.a.createElement(x,{key:a,icon:t,name:a,url:n})})))))};var k=function(){var e=Object(i.useStaticQuery)("971228977").site.siteMetadata.personalInformation;return r.a.createElement(j,{personalInformation:e})};var S=function(e){var t=["fab",e.name];return r.a.createElement("li",{className:"list-inline-item"},r.a.createElement(w,{icon:t}))};var I=function(e){var t=e.title,a=e.companyName,n=e.description,l=e.duration,i=e.techIcons,c=e.technologies;return r.a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},r.a.createElement("div",{className:"resume-content"},r.a.createElement("h3",{className:"mb-0"},t),r.a.createElement("div",{className:"subheading mb-3"},a),r.a.createElement("ul",null,n.map((function(e){return r.a.createElement("li",{key:e},e)}))),r.a.createElement("h4",null,"Technologies involved:"),r.a.createElement("ul",null,c.map((function(e){return r.a.createElement("li",{key:e},e)}))),r.a.createElement("ul",{className:"list-inline dev-icons"},i.map((function(e){return r.a.createElement(S,{name:e,key:e})})))),r.a.createElement("div",{className:"resume-date text-md-right"},r.a.createElement("span",{className:"text-primary"},l)))};var P=function(e){var t=e.experiences;return r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex justify-content-center",id:"experience"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h2",{className:"mb-5"},"Experience"),t.map((function(e){var t=e.title,a=e.companyName,n=e.description,l=e.duration,i=e.techIcons,c=e.technologies;return r.a.createElement(I,{key:a,title:t,companyName:a,description:n,duration:l,techIcons:i,technologies:c})}))))};var A=function(){var e=Object(i.useStaticQuery)("1306808193").site.siteMetadata.personalInformation.experience;return r.a.createElement(P,{experiences:e})};var z=function(e){var t=e.institute,a=e.degree,n=e.major,l=e.duration;return r.a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},r.a.createElement("div",{className:"resume-content"},r.a.createElement("h3",{className:"mb-0"},t),r.a.createElement("div",{className:"subheading mb-3"},a),r.a.createElement("div",null,n)),r.a.createElement("div",{className:"resume-date text-md-right"},r.a.createElement("span",{className:"text-primary"},l)))};var T=function(e){var t=e.education;return r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"education"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h2",{className:"mb-5"},"Education"),t.map((function(e){var t=e.institute,a=e.degree,n=e.major,l=e.duration;return r.a.createElement(z,{institute:t,degree:a,major:n,duration:l,key:t})}))))};var L=function(){var e=Object(i.useStaticQuery)("3564179333").site.siteMetadata.personalInformation.education;return r.a.createElement(T,{education:e})};function Q(e){var t=e.title,a=e.description,n=e.url,l=n?r.a.createElement(c.OutboundLink,{href:n},r.a.createElement("strong",null,t+":")):r.a.createElement("strong",null,t+":");return r.a.createElement("li",null,r.a.createElement("i",{className:"fa-li fa fa-tasks text-warning"}),r.a.createElement("p",null,l," "+a))}Q.defaultProps={url:""};var W=Q;var C=function(e){var t=e.projects;return r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"projects"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h2",{className:"mb-5"},"Projects"),r.a.createElement("ul",{className:"fa-ul mb-0"},t.map((function(e){var t=e.title,a=e.description,n=e.url;return r.a.createElement(W,{key:t,title:t,description:a,url:n})})))))};var D=function(){var e=Object(i.useStaticQuery)("3599503583").site.siteMetadata.personalInformation.projects;return r.a.createElement(C,{projects:e})};var M=function(e){var t=e.title,a=e.description;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"subheading mb-3"},t),r.a.createElement("ul",null,a.map((function(e){return r.a.createElement("li",{key:e},e)}))))};var F=function(e){var t=e.skills,a=e.techStack;return r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"skills"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h2",{className:"mb-5"},"Skills and Proficiency"),t.map((function(e){var t=e.title,a=e.description;return r.a.createElement(M,{title:t,description:a,key:t})})),r.a.createElement("ul",{className:"list-inline dev-icons"},a.map((function(e){return r.a.createElement(S,{name:e,key:e})})))))};var J=function(){var e=Object(i.useStaticQuery)("3155893477").site.siteMetadata.personalInformation,t=e.skills,a=e.techStack;return r.a.createElement(F,{skills:t,techStack:a})};t.default=function(){var e=[{id:"about",content:r.a.createElement(k,null)},{id:"experience",content:r.a.createElement(A,null)},{id:"education",content:r.a.createElement(L,null)},{id:"skills",content:r.a.createElement(J,null)},{id:"projects",content:r.a.createElement(D,null)}];return r.a.createElement(l.a,{sections:e})}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-5cde17d5adf09d90368e.js.map