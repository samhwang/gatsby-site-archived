(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"7W2i":function(e,t,a){var n=a("SksO");e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},C6Ny:function(e,t,a){e.exports=a.p+"static/avatar-97a28029128ca2ef52be0f2b95dede63.jpg"},EbDI:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},Fxm3:function(e,t,a){"use strict";a("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){var t,a,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return function(){var o=+new Date;!!t&&o<t+n?(clearTimeout(a),a=setTimeout((function(){t=o,e()}),n)):(t=o,e())}};t.default=n},Ijbi:function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}},Nsbk:function(e,t){function a(t){return e.exports=a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},a(t)}e.exports=a},QeBL:function(e,t,a){"use strict";a.r(t);a("91GP");var n=a("q1tI"),o=a.n(n),r=a("C48O"),s=a("YIkO"),l=a.n(s),i=a("dwco"),c=a.n(i);function u(e){return e.children}var m=function(e){var t=e.type,a=e.element,r=e.offset,s=e.timeout,l=e.children,i=e.counter;function m(e){e.preventDefault();var n=null,o=!0;if(t&&a)switch(t){case"class":o=!!(n=document.getElementsByClassName(a)[0]);break;case"id":o=!!(n=document.getElementById(a))}return o&&n?function(e,t,a){void 0===t&&(t=0);var n=e?e.getBoundingClientRect().top+window.pageYOffset:0;a||window.scroll({top:n+t,left:0,behavior:"smooth"}),setTimeout((function(){window.scroll({top:n+t,left:0,behavior:"smooth"})}),a)}(n,r,s):console.log("Element not found: "+a)}return Object(n.useEffect)((function(){c.a.polyfill()}),[]),o.a.createElement(u,null,"object"==typeof l?Object(n.cloneElement)(l,{onClick:m}):o.a.createElement("span",{onClick:function(e){return m(e)},onKeyDown:function(e){return m(e)},role:"tab",tabIndex:i},l))},p=a("C6Ny"),f=a.n(p),d=a("obyI"),h=a.n(d);var g=function(){var e=[{content:"About",href:"about"},{content:"Experience",href:"experience"},{content:"Education",href:"education"},{content:"Skills",href:"skills"},{content:"Projects",href:"projects"}];return o.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary fixed-top",id:"sideNav"},o.a.createElement("a",{className:"navbar-brand",href:"#page-top"},o.a.createElement("span",{className:"d-block d-lg-none"},h.a.firstName,h.a.lastName),o.a.createElement("span",{className:"d-none d-lg-block"},o.a.createElement("img",{className:"img-fluid img-profile rounded-circle mx-auto mb-2",src:f.a,alt:""}))),o.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},o.a.createElement("span",{className:"navbar-toggler-icon"})),o.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},o.a.createElement(l.a,{items:e.map((function(e){return e.href})),currentClassName:"active",offset:-300,className:"navbar-nav"},e.map((function(e,t){var a=e.href,n=e.content;return o.a.createElement("li",{className:"nav-item",key:a},o.a.createElement(m,{type:"id",element:a,counter:t},o.a.createElement("a",{className:"nav-link",href:"#"+a},n)))})))))};var v=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"© 2020 ",o.a.createElement("a",{href:"https://github.com/samhwang"},"Sam Huynh"),". Hosted on ",o.a.createElement("a",{href:"https://pages.github.com/"},"GitHub Pages"),". Based on"," ",o.a.createElement("a",{href:"https://www.gatsbyjs.org/"},"GatsbyJS.")))};a("f3/d");var y=function(e){var t=e.name;return o.a.createElement("li",{className:"list-inline-item"},o.a.createElement("i",{className:"fab fa-"+t}))};var b=function(e){var t=e.title,a=e.companyName,n=e.description,r=e.duration,s=e.techIcons,l=e.technologies;return o.a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},o.a.createElement("div",{className:"resume-content"},o.a.createElement("h3",{className:"mb-0"},t),o.a.createElement("div",{className:"subheading mb-3"},a),o.a.createElement("p",null,o.a.createElement("ul",null,n.map((function(e,t){return o.a.createElement("li",{key:t},e)})))),o.a.createElement("p",null,"Technologies involved:",o.a.createElement("ul",null,l.map((function(e,t){return o.a.createElement("li",{key:t},e)})))),o.a.createElement("ul",{className:"list-inline dev-icons"},s.map((function(e,t){return o.a.createElement(y,{name:e,key:t})})))),o.a.createElement("div",{className:"resume-date text-md-right"},o.a.createElement("span",{className:"text-primary"},r)))};var S=function(e){var t=e.institute,a=e.degree,n=e.major,r=e.duration;return o.a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},o.a.createElement("div",{className:"resume-content"},o.a.createElement("h3",{className:"mb-0"},t),o.a.createElement("div",{className:"subheading mb-3"},a),o.a.createElement("div",null,n)),o.a.createElement("div",{className:"resume-date text-md-right"},o.a.createElement("span",{className:"text-primary"},r)))};var E=function(e){var t=e.title,a=e.description,n=e.url;console.log(t);var r=n?o.a.createElement("a",{href:n},o.a.createElement("strong",null,t+":")):o.a.createElement("strong",null,t+":");return console.log({test:r}),o.a.createElement("li",null,o.a.createElement("i",{className:"fa-li fa fa-tasks text-warning"}),o.a.createElement("p",null,r," ",a))};var w=function(e){var t=e.title,a=e.description;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"subheading mb-3"},t),o.a.createElement("p",null,o.a.createElement("ul",null,a.map((function(e,t){return o.a.createElement("li",{key:t},e)})))))},N=[{title:"Junior Full Stack Developer",companyName:"Hertz Australia",duration:"Oct 2019 - Present",description:[],techIcons:["js","react","node","npm","yarn","php","wordpress","html5","css3","sass","aws","docker","github"],technologies:["PHP 7.4 and Wordpress","HTML5, CSS3 and CSS pre-processors like SCSS, SASS and LESS","GraphQL and REST API","JavaScript (jQuery, NodeJS, ReactJS)","Docker containers & docker-compose","Database: MySQL & MongoDB","Serverless architecture and websockets","AWS Lambda and Elastic Beanstalk","CI/CD: GitHub Actions pipeline and GitHub Packages"]},{title:"Web Application Developer",companyName:"Bonntech Business Solutions",duration:"May 2019 - Oct 2019",description:["Built the base framework, along with its own create and update script to speed up the initial setup for future projects.","Assisted in setting up Bonntech's central Git repository and private Composer Packagist for internal projects and libraries."],techIcons:["php","js","bootstrap","css3","less","sass","docker","gitlab"],technologies:["PHP 7.3, using CodeIgniter framework and Composer package manager with self-hosted Packagist","MySQL database management and data modelling","HTML5, CSS, JavaScript (jQuery, Bootstrap, Datatables, and AJAX)","Apache server configurations","Built containerized development environments with Docker"]},{title:"Software Developer",companyName:"Classcom",duration:"Jan 2019 - Apr 2019",description:["Collaborated on building new core features of the ClassCom project","Created automated test and build scripts and participated in code reviews in a bi-weekly release schedule."],techIcons:["js","node","html5","css3","less","npm"],technologies:["JavaScript, using the Meteor JS full stack framework (with NodeJS for backend processing, BlazeJS for templating, CSS pre-processing with LESS)","Automated test scripting with CucumberJS and Mocha.","MongoDB database and data modelling.","REST APIs"]},{title:"PHP Developer Intern",companyName:"Psych Press",duration:"Jun 2017 - Sep 2017",description:["Collaborated on building three inhouse projects for Psych Press closely with the psychology team on a weekly basis."],techIcons:["php","laravel","js","bootstrap","html5","css3","aws"],technologies:["PHP 7, using CodeIgniter, Laravel and Moodle framework.","JavaScript (AJAX, jQuery, Bootstrap, D3js and ChartJS) and CSS (MaterializeCSS)","Microsoft SQL Server Database","Migration from Microsoft servers to Amazon Web Services EC2 Linux instances"]},{title:"Web Developer",companyName:"Mint n Co. Accessories",duration:"Oct 2015 - Feb 2016",description:["Designed and built the e-commerce site for Mint and Co. Accessories from the ground up.","Provided regular maintenance to ensure 99.9% site availability."],techIcons:["php","wordpress","bootstrap","html5","css3","js","paypal"],technologies:["CPanel hosting control panel for Apache server","PHP using the Wordpress framework and WooCommerce e-commerce plugin","MySQL database","JavaScript (jQuery, Bootstrap)","Paypal Gateway API"]},{title:"PHP Developer",companyName:"Right Left Communication",duration:"Sep 2014 - Feb 2015",description:["Developed, supported, monitored and maintained 4 websites for different clients from various industries."],techIcons:["php","joomla","bootstrap","html5","css3","js"],technologies:["CPanel hosting control panel for Apache server","PHP using the Joomla framework","JavaScript (jQuery, Bootstrap)","MySQL database"]}],k=[{institute:"Navitas Professionals",degree:"Professional Year Program in Computer Science",major:"incl. Cert IV in Business",duration:"Oct 2016 - Oct 2017"},{institute:"RMIT University",degree:"Bachelor of Information Technology",major:"",duration:"Oct 2012 - Dec 2015"}],P=[{title:"My GitHub code repository",description:"The host of my many curious projects, from setting up a custom firmware to my keyboard and my own shell configs, to testing and learning new programming languages and techniques.",url:"https://github.com/samhwang"},{title:"My GitHub.io page",description:"This site was hosted on GitHub Pages, built with the Gatsby framework for ReactJS.",url:"https://samhwang.github.io"},{title:"Pi-Hole",description:"A self-hosted DNS server that will act as an ad black-hole and can be easily installed on any Raspberry Pi (hence the name, Pi-Hole), or any computer running Linux. To maintain stable and seamless connection between dropouts, I have also set up 2 of them, and sync the ad blocking lists together using a sync script.",url:"https://pi-hole.net/"}],C=[{title:"Professional Proficiency",description:["Backend: PHP 7, NodeJS","Frontend: JavaScript (jQuery, React, TypeScript), HTML5, CSS, LESS and SASS","Databases and data modelling with MySQL, SQLite, MS SQL, PostgreSQL and MongoDB","Server configuration with Apache and NGINX","Containerize applications (traditional, serverless and microservices) with Docker","CMS and Frameworks: Wordpress, CodeIgniter, Joomla, Meteor, Gatsby","Version control tools with Git","Continuous Integration and Continuous Delivery with CircleCI, GitHub Actions & GitHub Packages","Amazon Web Services tool: EC2, Beanstalk, S3, Beanstalk, Lambda","Project Management tools (JIRA, Confluence, Trello, Asana, Azure DevOps)","Microsoft Office and similar Google tools","Adobe Creative Suite (Photoshop, Lightroom, Bridge)"]},{title:"Also Learning",description:["Golang","Cloud Deployment using Kubernetes to AWS, DigitalOcean and Google Cloud","Infrastructure Automation (Terraform, Ansible and Packer)"]}],j=["php","js","node","react","npm","yarn","html5","css3","less","sass","docker","aws","github"];t.default=function(){var e=h.a.firstName,t=h.a.lastName,a=h.a.address,n=h.a.email,s=h.a.socialLinks;return o.a.createElement(r.a,null,o.a.createElement(g,null),o.a.createElement("div",{className:"container-fluid p-0"},o.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"about"},o.a.createElement("div",{className:"w-100"},o.a.createElement("h1",{className:"mb-0"},e,o.a.createElement("span",{className:"text-primary"},t)),o.a.createElement("div",{className:"subheading mb-5"},a," - ",o.a.createElement("a",{href:"mailto:"+n},n)),o.a.createElement("p",{className:"lead mb-5"},"I have always been passionate about computers, and how technology can bring the world closer. That was the reason why I walked down the path of Software Development. Besides my studies, I have worked in a lot of Agile teams of up to 10 people, delivering high quality responsive web applications on different platforms (PHP, NodeJS) for clients in different industries (retail, sports, and education.)"),o.a.createElement("div",{className:"social-icons"},s.map((function(e,t){var a=e.icon,n=e.url;return o.a.createElement("a",{key:t,href:n},o.a.createElement("i",{className:""+a}))}))))),o.a.createElement("hr",{className:"m-0"}),o.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex justify-content-center",id:"experience"},o.a.createElement("div",{className:"w-100"},o.a.createElement("h2",{className:"mb-5"},"Experience"),N.map((function(e,t){return o.a.createElement(b,Object.assign({},e,{key:t}))})))),o.a.createElement("hr",{className:"m-0"}),o.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"education"},o.a.createElement("div",{className:"w-100"},o.a.createElement("h2",{className:"mb-5"},"Education"),k.map((function(e,t){return o.a.createElement(S,Object.assign({},e,{key:t}))})))),o.a.createElement("hr",{className:"m-0"}),o.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"skills"},o.a.createElement("div",{className:"w-100"},o.a.createElement("h2",{className:"mb-5"},"Skills and Proficiency"),C.map((function(e,t){return o.a.createElement(w,Object.assign({},e,{key:t}))})),o.a.createElement("ul",{className:"list-inline dev-icons"},j.map((function(e,t){return o.a.createElement(y,{name:e,key:t})}))))),o.a.createElement("hr",{className:"m-0"}),o.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"projects"},o.a.createElement("div",{className:"w-100"},o.a.createElement("h2",{className:"mb-5"},"Projects"),o.a.createElement("ul",{className:"fa-ul mb-0"},P.map((function(e,t){return o.a.createElement(E,Object.assign({},e,{key:t}))}))))),o.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"footer"},o.a.createElement(v,null))))}},RIqP:function(e,t,a){var n=a("Ijbi"),o=a("EbDI"),r=a("Bnag");e.exports=function(e){return n(e)||o(e)||r()}},SksO:function(e,t){function a(t,n){return e.exports=a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},a(t,n)}e.exports=a},TSYQ:function(e,t,a){var n;a("LK8F"),function(){"use strict";var a={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)&&n.length){var s=o.apply(null,n);s&&e.push(s)}else if("object"===r)for(var l in n)a.call(n,l)&&n[l]&&e.push(l)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},W8MJ:function(e,t){function a(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}},YIkO:function(e,t,a){"use strict";a("V+eJ"),a("dZ+Y"),a("bWfx"),a("2Spj"),a("LK8F"),a("HAE/");var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a("pVnL")),r=n(a("lSNA")),s=n(a("RIqP")),l=n(a("lwsE")),i=n(a("a1gu")),c=n(a("Nsbk")),u=n(a("PJYZ")),m=n(a("W8MJ")),p=n(a("7W2i")),f=n(a("17x9")),d=n(a("q1tI")),h=n(a("TSYQ")),g=n(a("Fxm3"));var v=function(e){function t(e){var a;return(0,l.default)(this,t),(a=(0,i.default)(this,(0,c.default)(t).call(this,e))).state={targetItems:[],inViewState:[],isScrolledPast:[]},a._handleSpy=a._handleSpy.bind((0,u.default)(a)),a}return(0,p.default)(t,e),(0,m.default)(t,null,[{key:"propTypes",get:function(){return{items:f.default.arrayOf(f.default.string).isRequired,currentClassName:f.default.string.isRequired,scrolledPastClassName:f.default.string,style:f.default.object,componentTag:f.default.oneOfType([f.default.string,f.default.element]),offset:f.default.number,rootEl:f.default.string,onUpdate:f.default.func}}},{key:"defaultProps",get:function(){return{items:[],currentClassName:"",style:{},componentTag:"ul",offset:0,onUpdate:function(){}}}}]),(0,m.default)(t,[{key:"_initSpyTarget",value:function(e){return e.map((function(e){return document.getElementById(e)}))}},{key:"_fillArray",value:function(e,t){for(var a=[],n=0,o=e.length;n<o;n++)a[n]=t;return a}},{key:"_isScrolled",value:function(){return this._getScrollDimension().scrollTop>0}},{key:"_getScrollDimension",value:function(){var e=document,t=this.props.rootEl;return{scrollTop:t?e.querySelector(t).scrollTop:e.documentElement.scrollTop||e.body.parentNode.scrollTop||e.body.scrollTop,scrollHeight:t?e.querySelector(t).scrollHeight:e.documentElement.scrollHeight||e.body.parentNode.scrollHeight||e.body.scrollHeight}}},{key:"_getElemsViewState",value:function(e){for(var t=[],a=[],n=[],o=e||this.state.targetItems,r=!1,l=0,i=o.length;l<i;l++){var c=o[l],u=!r&&this._isInView(c);u?(r=!0,t.push(c)):a.push(c);var m=l===i-1,p=this._isScrolled();this._isAtBottom()&&this._isInView(c)&&!u&&m&&p&&(a.pop(),a.push.apply(a,(0,s.default)(t)),t=[c],n=this._fillArray(n,!1),u=!0),n.push(u)}return{inView:t,outView:a,viewStatusList:n,scrolledPast:this.props.scrolledPastClassName&&this._getScrolledPast(n)}}},{key:"_isInView",value:function(e){if(!e)return!1;var t,a=this.props,n=a.rootEl,o=a.offset;n&&(t=document.querySelector(n).getBoundingClientRect());var r=e.getBoundingClientRect(),s=n?t.height:window.innerHeight,l=this._getScrollDimension().scrollTop,i=l+s,c=n?r.top+l-t.top+o:r.top+l+o,u=c+e.offsetHeight;return c<i&&u>l}},{key:"_isAtBottom",value:function(){var e=this.props.rootEl,t=this._getScrollDimension(),a=t.scrollTop,n=t.scrollHeight;return a+(e?document.querySelector(e).getBoundingClientRect().height:window.innerHeight)>=n}},{key:"_getScrolledPast",value:function(e){if(!e.some((function(e){return e})))return e;var t=!1;return e.map((function(e){return e&&!t?(t=!0,!1):!t}))}},{key:"_spy",value:function(e){var t=this,a=this._getElemsViewState(e),n=this.state.inViewState;this.setState({inViewState:a.viewStatusList,isScrolledPast:a.scrolledPast},(function(){t._update(n)}))}},{key:"_update",value:function(e){var t,a;(t=this.state.inViewState,a=e,t.length===a.length&&t.every((function(e,t){return e===a[t]})))||this.props.onUpdate(this.state.targetItems[this.state.inViewState.indexOf(!0)])}},{key:"_handleSpy",value:function(){(0,g.default)(this._spy(),100)}},{key:"_initFromProps",value:function(){var e=this._initSpyTarget(this.props.items);this.setState({targetItems:e}),this._spy(e)}},{key:"offEvent",value:function(){(this.props.rootEl?document.querySelector(this.props.rootEl):window).removeEventListener("scroll",this._handleSpy)}},{key:"onEvent",value:function(){(this.props.rootEl?document.querySelector(this.props.rootEl):window).addEventListener("scroll",this._handleSpy)}},{key:"componentDidMount",value:function(){this._initFromProps(),this.onEvent()}},{key:"componentWillUnmount",value:function(){this.offEvent()}},{key:"UNSAFE_componentWillReceiveProps",value:function(){this._initFromProps()}},{key:"render",value:function(){var e=this,t=this.props.componentTag,a=this.props,n=a.children,s=a.className,l=a.scrolledPastClassName,i=a.style,c=0,u=d.default.Children.map(n,(function(t,a){var n;if(!t)return null;var s=t.type,i=l&&e.state.isScrolledPast[a],u=(0,h.default)((n={},(0,r.default)(n,"".concat(t.props.className),t.props.className),(0,r.default)(n,"".concat(e.props.currentClassName),e.state.inViewState[a]),(0,r.default)(n,"".concat(e.props.scrolledPastClassName),i),n));return d.default.createElement(s,(0,o.default)({},t.props,{className:u,key:c++}),t.props.children)})),m=(0,h.default)((0,r.default)({},"".concat(s),s));return d.default.createElement(t,{className:m,style:i},u)}}]),t}(d.default.Component);t.default=v},a1gu:function(e,t,a){var n=a("cDf5"),o=a("PJYZ");e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?o(e):t}},cDf5:function(e,t){function a(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=a=function(e){return typeof e}:e.exports=a=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(t)}e.exports=a},dwco:function(e,t,a){a("Oyvg"),a("eM6i"),a("2Spj"),function(){"use strict";e.exports={polyfill:function(){var e=window,t=document;if(!("scrollBehavior"in t.documentElement.style&&!0!==e.__forceSmoothScrollPolyfill__)){var a,n=e.HTMLElement||e.Element,o={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,elementScroll:n.prototype.scroll||l,scrollIntoView:n.prototype.scrollIntoView},r=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now,s=(a=e.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(a)?1:0);e.scroll=e.scrollTo=function(){void 0!==arguments[0]&&(!0!==i(arguments[0])?d.call(e,t.body,void 0!==arguments[0].left?~~arguments[0].left:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:e.scrollY||e.pageYOffset):o.scroll.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:e.scrollY||e.pageYOffset))},e.scrollBy=function(){void 0!==arguments[0]&&(i(arguments[0])?o.scrollBy.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):d.call(e,t.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset)))},n.prototype.scroll=n.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==i(arguments[0])){var e=arguments[0].left,t=arguments[0].top;d.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");o.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},n.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==i(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):o.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},n.prototype.scrollIntoView=function(){if(!0!==i(arguments[0])){var a=p(this),n=a.getBoundingClientRect(),r=this.getBoundingClientRect();a!==t.body?(d.call(this,a,a.scrollLeft+r.left-n.left,a.scrollTop+r.top-n.top),"fixed"!==e.getComputedStyle(a).position&&e.scrollBy({left:n.left,top:n.top,behavior:"smooth"})):e.scrollBy({left:r.left,top:r.top,behavior:"smooth"})}else o.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function l(e,t){this.scrollLeft=e,this.scrollTop=t}function i(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function c(e,t){return"Y"===t?e.clientHeight+s<e.scrollHeight:"X"===t?e.clientWidth+s<e.scrollWidth:void 0}function u(t,a){var n=e.getComputedStyle(t,null)["overflow"+a];return"auto"===n||"scroll"===n}function m(e){var t=c(e,"Y")&&u(e,"Y"),a=c(e,"X")&&u(e,"X");return t||a}function p(e){for(;e!==t.body&&!1===m(e);)e=e.parentNode||e.host;return e}function f(t){var a,n,o,s,l=(r()-t.startTime)/468;s=l=l>1?1:l,a=.5*(1-Math.cos(Math.PI*s)),n=t.startX+(t.x-t.startX)*a,o=t.startY+(t.y-t.startY)*a,t.method.call(t.scrollable,n,o),n===t.x&&o===t.y||e.requestAnimationFrame(f.bind(e,t))}function d(a,n,s){var i,c,u,m,p=r();a===t.body?(i=e,c=e.scrollX||e.pageXOffset,u=e.scrollY||e.pageYOffset,m=o.scroll):(i=a,c=a.scrollLeft,u=a.scrollTop,m=l),f({scrollable:i,method:m,startTime:p,startX:c,startY:u,x:n,y:s})}}}}()},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},obyI:function(e,t){e.exports={siteTitle:"Sam Huynh",manifestName:"Resume",manifestShortName:"Home",manifestStartUrl:"/",manifestBackgroundColor:"#FFFFFF",manifestThemeColor:"#FFFFFF",manifestDisplay:"standalone",manifestIcon:"src/assets/img/website-icon.png",firstName:"Sam",lastName:"Huynh",socialLinks:[{icon:"fab fa-github",name:"Github",url:"https://github.com/samhwang"},{icon:"fab fa-linkedin-in",name:"Linkedin",url:"https://www.linkedin.com/in/samhwang2112/"},{icon:"far fa-file-pdf",name:"PDF",url:"/files/Resume_SamHuynh.pdf"}],email:"samhwang2112.dev@gmail.com",address:"Melbourne, Victoria, Australia"}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-825e8df68674cea75725.js.map