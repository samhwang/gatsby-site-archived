(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"+ar0":function(e,t,a){var n=a("P8UN");n(n.S+n.F*!a("QPJK"),"Object",{defineProperties:a("YmeT")})},QeBL:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),o=a("K5F9"),i=a("k4cH"),s=a("Wbzz"),l=(a("pJf4"),a("dEtu")),c=(a("HQhv"),a("n7j8"),a("TAD1"),a("HXzo"),a("U6Bt"),a("sC2a"),a("AqHK"),a("YbXK"),a("cFtU"),a("q8oJ"),a("C9fy"),a("MIFh"),a("sc67"),a("+ar0"),a("xtjI"),a("JHok"),a("OeI1"),a("rzGZ"),a("Dq+y"),a("8npG"),a("Ggvi"),a("R48M"),a("m210"),a("4DPX"),a("7O5W")),u=a("17x9"),m=a.n(u);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function f(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?f(Object(a),!0).forEach((function(t){d(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):f(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function h(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function g(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function y(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}function v(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var a,n=t.indexOf(":"),r=y(t.slice(0,n)),o=t.slice(n+1).trim();return r.startsWith("webkit")?e[(a=r,a.charAt(0).toUpperCase()+a.slice(1))]=o:e[r]=o,e}),{})}var w=!1;try{w=!0}catch(W){}function S(e){return null===e?null:"object"===p(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function E(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?d({},e,t):{}}function k(e){var t=e.icon,a=e.mask,n=e.symbol,r=e.className,o=e.title,i=S(t),s=E("classes",[].concat(g(function(e){var t,a=e.spin,n=e.pulse,r=e.fixedWidth,o=e.inverse,i=e.border,s=e.listItem,l=e.flip,c=e.size,u=e.rotation,m=e.pull,p=(d(t={"fa-spin":a,"fa-pulse":n,"fa-fw":r,"fa-inverse":o,"fa-border":i,"fa-li":s,"fa-flip-horizontal":"horizontal"===l||"both"===l,"fa-flip-vertical":"vertical"===l||"both"===l},"fa-".concat(c),null!=c),d(t,"fa-rotate-".concat(u),null!=u),d(t,"fa-pull-".concat(m),null!=m),d(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(p).map((function(e){return p[e]?e:null})).filter((function(e){return e}))}(e)),g(r.split(" ")))),l=E("transform","string"==typeof e.transform?c.c.transform(e.transform):e.transform),u=E("mask",S(a)),m=Object(c.a)(i,b({},s,{},l,{},u,{symbol:n,title:o}));if(!m)return function(){var e;!w&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",i),null;var p=m.abstract,f={};return Object.keys(e).forEach((function(t){k.defaultProps.hasOwnProperty(t)||(f[t]=e[t])})),P(p[0],f)}k.displayName="FontAwesomeIcon",k.propTypes={border:m.a.bool,className:m.a.string,mask:m.a.oneOfType([m.a.object,m.a.array,m.a.string]),fixedWidth:m.a.bool,inverse:m.a.bool,flip:m.a.oneOf(["horizontal","vertical","both"]),icon:m.a.oneOfType([m.a.object,m.a.array,m.a.string]),listItem:m.a.bool,pull:m.a.oneOf(["right","left"]),pulse:m.a.bool,rotation:m.a.oneOf([90,180,270]),size:m.a.oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:m.a.bool,symbol:m.a.oneOfType([m.a.bool,m.a.string]),title:m.a.string,transform:m.a.oneOfType([m.a.string,m.a.object]),swapOpacity:m.a.bool},k.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var P=function e(t,a){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof a)return a;var r=(a.children||[]).map((function(a){return e(t,a)})),o=Object.keys(a.attributes||{}).reduce((function(e,t){var n=a.attributes[t];switch(t){case"class":e.attrs.className=n,delete a.attributes.class;break;case"style":e.attrs.style=v(n);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=n:e.attrs[y(t)]=n}return e}),{attrs:{}}),i=n.style,s=void 0===i?{}:i,l=h(n,["style"]);return o.attrs.style=b({},o.attrs.style,{},s),t.apply(void 0,[a.tag,b({},o.attrs,{},l)].concat(g(r)))}.bind(null,r.a.createElement);var N=function(e){var t=e.social,a=t.icon,n=t.name,o=t.url,i=a.split(" ");return r.a.createElement(l.OutboundLink,{href:o,alt:n+" link"},r.a.createElement(k,{icon:i}))};var j=function(e){var t=e.data.site.siteMetadata.personalInformation,a=t.firstName,n=t.lastName,o=t.address,i=t.email,s=t.socialLinks;return r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"about"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h1",{className:"mb-0"},a,r.a.createElement("span",{className:"text-primary"},n)),r.a.createElement("div",{className:"subheading mb-5"},o+" - ",r.a.createElement(l.OutboundLink,{href:"mailto:"+i},i)),r.a.createElement("p",{className:"lead mb-5"},"I have always been passionate about computers, and how technology can bring the world closer. That was the reason why I walked down the path of Software Development. Besides my studies, I have worked in a lot of Agile teams of up to 10 people, delivering high quality responsive web applications on different platforms (PHP, NodeJS) for clients in different industries (retail, sports, and education.)"),r.a.createElement("div",{className:"social-icons"},s.map((function(e){return r.a.createElement(N,{key:e.name,social:e})})))))};var O=function(){return r.a.createElement(s.StaticQuery,{query:"3610844815",render:function(e){return r.a.createElement(j,{data:e})},data:i})};var A=function(e){var t=["fab",e.name];return r.a.createElement("li",{className:"list-inline-item"},r.a.createElement(k,{icon:t}))};var x=function(e){var t=e.title,a=e.companyName,n=e.description,o=e.duration,i=e.techIcons,s=e.technologies;return r.a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},r.a.createElement("div",{className:"resume-content"},r.a.createElement("h3",{className:"mb-0"},t),r.a.createElement("div",{className:"subheading mb-3"},a),r.a.createElement("ul",null,n.map((function(e){return r.a.createElement("li",{key:e},e)}))),r.a.createElement("h4",null,"Technologies involved:"),r.a.createElement("ul",null,s.map((function(e){return r.a.createElement("li",{key:e},e)}))),r.a.createElement("ul",{className:"list-inline dev-icons"},i.map((function(e){return r.a.createElement(A,{name:e,key:e})})))),r.a.createElement("div",{className:"resume-date text-md-right"},r.a.createElement("span",{className:"text-primary"},o)))},C=[{title:"Junior Full Stack Developer",companyName:"Hertz Australia",duration:"Oct 2019 - Present",description:["Built the Github Actions and GitHub packages pipeline to publish the Flexicar website docker images, along with setting up APIs to access GitHub packages for cleaning up when necessary","Built new core features into Hertz's internal rental analytics and tracking systems, using ExpressJS, EJS and NodeJS","Built the new frontend for Hertz's shuttle bus tracking system, now currently used by the Ace brand, using ReactJS and deployed in an S3 bucket endpoint, communicating via serverless websockets"],techIcons:["js","react","node","npm","yarn","php","wordpress","html5","css3","sass","aws","docker","github","jira","confluence"],technologies:["PHP 7.4 and Wordpress","HTML5, CSS3 and CSS pre-processors like SASS and LESS","GraphQL and REST API","JavaScript (jQuery, NodeJS, ReactJS and ExpressJS)","Docker containers & docker-compose","Database: MySQL & MongoDB","Serverless architecture and websockets","AWS Lambda and Elastic Beanstalk","CI/CD: GitHub Actions pipeline and GitHub Packages","Project management using JIRA and Confluence"]},{title:"Web Application Developer",companyName:"Bonntech Business Solutions",duration:"May 2019 - Oct 2019",description:["Built the base framework, along with its own create and update script to speed up the initial setup for future projects.","Assisted in setting up Bonntech's central Git repository and private Composer Packagist for internal projects and libraries."],techIcons:["cpanel","php","js","bootstrap","css3","less","sass","docker","gitlab"],technologies:["PHP 7.3, using CodeIgniter framework and Composer package manager with self-hosted Packagist","MySQL database management and data modelling","HTML5, CSS, JavaScript (jQuery, Bootstrap, Datatables, and AJAX)","Apache server configurations","Built containerized development environments with Docker"]},{title:"Software Developer",companyName:"Classcom",duration:"Jan 2019 - Apr 2019",description:["Collaborated on building new core features of the ClassCom project","Created automated test and build scripts and participated in code reviews in a bi-weekly release schedule."],techIcons:["js","node","html5","css3","less","npm"],technologies:["JavaScript, using the Meteor full stack framework (with Node/Express for backend processing, Blaze for templating, CSS pre-processing with LESS)","Automated test scripting with CucumberJS and Mocha.","MongoDB database and data modelling.","REST APIs","Project management using Azure DevOps"]},{title:"PHP Developer Intern",companyName:"Psych Press",duration:"Jun 2017 - Sep 2017",description:["Collaborated on building three inhouse projects for Psych Press closely with the psychology team on a weekly basis."],techIcons:["php","laravel","js","bootstrap","html5","css3","aws","bitbucket"],technologies:["PHP 7, using CodeIgniter, Laravel and Moodle framework.","JavaScript (AJAX, jQuery, Bootstrap, D3js and ChartJS) and CSS (MaterializeCSS)","Microsoft SQL Server Database","Migration from Microsoft servers to Amazon Web Services EC2 Linux instances"]},{title:"Web Developer",companyName:"Mint n Co. Accessories",duration:"Oct 2015 - Feb 2016",description:["Designed and built the e-commerce site for Mint and Co. Accessories from the ground up.","Provided regular maintenance to ensure 99.9% site availability."],techIcons:["cpanel","php","wordpress","bootstrap","html5","css3","js","paypal"],technologies:["CPanel hosting control panel for Apache server","PHP using the Wordpress framework and WooCommerce e-commerce plugin","MySQL database","JavaScript (jQuery, Bootstrap)","Paypal Gateway API"]},{title:"PHP Developer",companyName:"Right Left Communication",duration:"Sep 2014 - Feb 2015",description:["Developed, supported, monitored and maintained 4 websites for different clients from various industries."],techIcons:["cpanel","php","joomla","bootstrap","html5","css3","js"],technologies:["CPanel hosting control panel for Apache server","PHP using the Joomla framework","JavaScript (jQuery, Bootstrap)","MySQL database"]}],I=[{institute:"Navitas Professionals",degree:"Professional Year Program in Computer Science",major:"incl. Cert IV in Business",duration:"Oct 2016 - Oct 2017"},{institute:"RMIT University",degree:"Bachelor of Information Technology",major:"",duration:"Oct 2012 - Dec 2015"}],D=[{title:"My GitHub code repository",description:"The host of my many curious projects, from setting up a custom firmware to my keyboard and my own shell configs, to testing and learning new programming languages and techniques.",url:"https://github.com/samhwang"},{title:"My GitHub.io page",description:"This site was hosted on GitHub Pages, built with the Gatsby framework for ReactJS.",url:"https://samhwang.github.io"},{title:"Pi-Hole",description:"A self-hosted DNS server that will act as an ad black-hole and can be easily installed on any Raspberry Pi (hence the name, Pi-Hole), or any computer running Linux. To maintain stable and seamless connection between dropouts, I have also set up 2 of them, and sync the ad blocking lists together using a sync script.",url:"https://pi-hole.net/"}],H=[{title:"Professional Proficiency",description:["Backend: PHP 7, NodeJS","Frontend: JavaScript (jQuery, React, TypeScript), HTML5, CSS, LESS and SASS","Databases and data modelling with MySQL, SQLite, MS SQL, PostgreSQL and MongoDB","Server configuration with Apache and NGINX","Containerize applications (traditional, serverless and microservices) with Docker","CMS and Frameworks: Wordpress, CodeIgniter, Joomla, Meteor, Gatsby","Version control tools with Git","Continuous Integration and Continuous Delivery with CircleCI, GitHub Actions & GitHub Packages","Amazon Web Services tool: EC2, Beanstalk, S3, Beanstalk, Lambda","Project Management tools (JIRA, Confluence, Trello, Asana, Azure DevOps)","Microsoft Office and similar Google tools","Adobe Creative Suite (Photoshop, Lightroom, Bridge)"]},{title:"Also Learning",description:["Golang","Cloud Deployment using Kubernetes to AWS, DigitalOcean and Google Cloud","Infrastructure Automation (Terraform, Ansible and Packer)"]}],J=["php","js","node","react","npm","yarn","html5","css3","less","sass","docker","aws","digital-ocean","git-alt","github","gitlab","bitbucket","trello","jira","confluence"];var L=function(){return r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex justify-content-center",id:"experience"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h2",{className:"mb-5"},"Experience"),C.map((function(e){var t=e.title,a=e.companyName,n=e.description,o=e.duration,i=e.techIcons,s=e.technologies;return r.a.createElement(x,{key:a,title:t,companyName:a,description:n,duration:o,techIcons:i,technologies:s})}))))};var M=function(e){var t=e.institute,a=e.degree,n=e.major,o=e.duration;return r.a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},r.a.createElement("div",{className:"resume-content"},r.a.createElement("h3",{className:"mb-0"},t),r.a.createElement("div",{className:"subheading mb-3"},a),r.a.createElement("div",null,n)),r.a.createElement("div",{className:"resume-date text-md-right"},r.a.createElement("span",{className:"text-primary"},o)))};var B=function(){return r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"education"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h2",{className:"mb-5"},"Education"),I.map((function(e){var t=e.institute,a=e.degree,n=e.major,o=e.duration;return r.a.createElement(M,{institute:t,degree:a,major:n,duration:o,key:t})}))))};var G=function(e){var t=e.title,a=e.description,n=e.url,o=n?r.a.createElement(l.OutboundLink,{href:n},r.a.createElement("strong",null,t+":")):r.a.createElement("strong",null,t+":");return r.a.createElement("li",null,r.a.createElement("i",{className:"fa-li fa fa-tasks text-warning"}),r.a.createElement("p",null,o," "+a))};var T=function(){return r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"projects"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h2",{className:"mb-5"},"Projects"),r.a.createElement("ul",{className:"fa-ul mb-0"},D.map((function(e){var t=e.title,a=e.description,n=e.url;return r.a.createElement(G,{key:t,title:t,description:a,url:n})})))))};var z=function(e){var t=e.title,a=e.description;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"subheading mb-3"},t),r.a.createElement("ul",null,a.map((function(e){return r.a.createElement("li",{key:e},e)}))))};var Q=function(){return r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"skills"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h2",{className:"mb-5"},"Skills and Proficiency"),H.map((function(e){var t=e.title,a=e.description;return r.a.createElement(z,{title:t,description:a,key:t})})),r.a.createElement("ul",{className:"list-inline dev-icons"},J.map((function(e){return r.a.createElement(A,{name:e,key:e})})))))};t.default=function(){var e=[{id:"about",content:r.a.createElement(O,null)},{id:"experience",content:r.a.createElement(L,null)},{id:"education",content:r.a.createElement(B,null)},{id:"skills",content:r.a.createElement(Q,null)},{id:"projects",content:r.a.createElement(T,null)}];return r.a.createElement(o.a,{sections:e})}},k4cH:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"personalInformation":{"firstName":"Sam","lastName":"Huynh","address":"Melbourne, Victoria, Australia","email":"samhwang2112.dev@gmail.com","socialLinks":[{"icon":"fab github","name":"Github","url":"https://github.com/samhwang"},{"icon":"fab linkedin-in","name":"Linkedin","url":"https://www.linkedin.com/in/samhwang2112/"},{"icon":"far file-pdf","name":"PDF","url":"/files/Resume_SamHuynh.pdf"}]}}}}}')},uSBc:function(e,t,a){var n=a("chL8"),r=a("lHo0"),o=a("1a8y"),i=a("emib").Reflect;e.exports=i&&i.ownKeys||function(e){var t=n.f(o(e)),a=r.f;return a?t.concat(a(e)):t}},xtjI:function(e,t,a){var n=a("P8UN"),r=a("uSBc"),o=a("5SQf"),i=a("Drra"),s=a("Fgx0");n(n.S,"Object",{getOwnPropertyDescriptors:function(e){for(var t,a,n=o(e),l=i.f,c=r(n),u={},m=0;c.length>m;)void 0!==(a=l(n,t=c[m++]))&&s(u,t,a);return u}})}}]);
//# sourceMappingURL=component---src-pages-index-tsx-a958028a0162a1f64bd9.js.map