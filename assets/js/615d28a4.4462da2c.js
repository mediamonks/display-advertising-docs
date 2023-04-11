"use strict";(self.webpackChunkdisplay_advertising_docs=self.webpackChunkdisplay_advertising_docs||[]).push([[523],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||s;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,o=new Array(s);o[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var c=2;c<s;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4006:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const s={sidebar_position:9},o="Gsap",r={unversionedId:"guides/gsap",id:"guides/gsap",title:"Gsap",description:"Using events",source:"@site/docs/guides/gsap.md",sourceDirName:"guides",slug:"/guides/gsap",permalink:"/display-advertising-docs/docs/guides/gsap",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guides/gsap.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Extends Animation",permalink:"/display-advertising-docs/docs/guides/extends-animation"},next:{title:"Multiple Timelines",permalink:"/display-advertising-docs/docs/guides/multiple-timelines"}},l={},c=[{value:"Using events",id:"using-events",level:2},{value:"Enable GSDevTools",id:"enable-gsdevtools",level:2},{value:"Using utils",id:"using-utils",level:2}],p={toc:c};function u(e){let{components:t,...s}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"gsap"},"Gsap"),(0,i.kt)("h2",{id:"using-events"},"Using events"),(0,i.kt)("p",null,"Sometimes it is necessary to know when the animation starts and when it ends. It is possible to know that using the following callbacks:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="/src/shared/script/Banner.js" {6,7}',title:'"/src/shared/script/Banner.js"',"{6,7}":!0},"setAnimation(animation){\n    this.animation = animation;\n    //creates new timeline and pauses it\n    this.animation.getTimeline().paused(true);\n\n    this.animation.getTimeline().eventCallback('onComplete', this.onAnimationComplete);\n    this.animation.getTimeline().eventCallback('onStart', this.onAnimationStart);\n}\n\n\n/**\n* A function that should be called when the animation has completed.\n*/\nonAnimationComplete = () => {\n    console.log('onComplete');\n};\n\n/**\n* A function that should be called when the animation begins (when its time changes from 0 \n* to some other value which can happen more than once if the tween is restarted multiple times).\n */\nonAnimationStart = () => {\n    console.log('onStart');\n};\n")),(0,i.kt)("h2",{id:"enable-gsdevtools"},"Enable GSDevTools"),(0,i.kt)("p",null,"You can enable the debug mode with GSDevTools, just add the ",(0,i.kt)("inlineCode",{parentName:"p"},"gsdevtools=true")," parameter in the url. Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-terminal"},"http://localhost:8000/?gsdevtools=true\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Scaffold1",src:n(5287).Z,width:"701",height:"403"})),(0,i.kt)("p",null,"Simultaneously play/pausing your animations by pressing the \u2018Spacebar\u2019. Use the newest Display Boilerplate (6.4.9) in order for it to work."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Only use it for QA and testing purposes, not meant to be for sharing with the client!"))),(0,i.kt)("h2",{id:"using-utils"},"Using utils"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"gsap.utils")," provides access to some surprisingly helpful utility functions. Note that many of them can optionally return FUNCTIONS so that they can be plugged directly into tweens, leveraging GSAP's function-based capabilities. In that case, they'll get called once for each target rather than just using the same end value for them all."),(0,i.kt)("p",null,"To view the full list, please ",(0,i.kt)("a",{parentName:"p",href:"https://greensock.com/docs/v3/GSAP/gsap.utils"},"check the official docs"),"."))}u.isMDXComponent=!0},5287:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/gsdevtools-8b81e28230d2f8d97c10079e17823cc6.png"}}]);