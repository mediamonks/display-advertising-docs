"use strict";(self.webpackChunkdisplay_advertising_docs=self.webpackChunkdisplay_advertising_docs||[]).push([[980],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||a;return n?i.createElement(f,o(o({ref:t},u),{},{components:n})):i.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9849:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var i=n(7462),r=n(3366),a=(n(7294),n(3905)),o=["components"],s={sidebar_position:9},l="Multiple Timelines",c={unversionedId:"guides/multiple-timelines",id:"guides/multiple-timelines",title:"Multiple Timelines",description:"It is posible to create multiple Timelines to be able to control them though banner.js.",source:"@site/docs/guides/multiple-timelines.md",sourceDirName:"guides",slug:"/guides/multiple-timelines",permalink:"/display-advertising-docs/docs/guides/multiple-timelines",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guides/multiple-timelines.md",tags:[],version:"current",lastUpdatedAt:1667394968,formattedLastUpdatedAt:"11/2/2022",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Gsap",permalink:"/display-advertising-docs/docs/guides/gsap"},next:{title:"Ads Recorder",permalink:"/display-advertising-docs/docs/guides/recorder"}},u={},m=[],p={toc:m};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"multiple-timelines"},"Multiple Timelines"),(0,a.kt)("p",null,"It is posible to create multiple Timelines to be able to control them though ",(0,a.kt)("inlineCode",{parentName:"p"},"banner.js"),"."),(0,a.kt)("p",null,'This can be usefull if you need to repeat the main timeline and connect the head and tail of it with extra animations,\nwhat you may call, "Seamless Loop".'),(0,a.kt)("p",null,"The idea is to import the animations you need in ",(0,a.kt)("inlineCode",{parentName:"p"},"main.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="/src/shared/script/main.js" {1,5}',title:'"/src/shared/script/main.js"',"{1,5}":!0},'    import Banner from "./Banner";\n    import MainAnimation from "./MainTL";\n    import ExtraAnimation from "./ExtraTL";\n\n')),(0,a.kt)("p",null,"call them through the method setAnimation as new classes "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="/src/shared/script/main.js" {1,5}',title:'"/src/shared/script/main.js"',"{1,5}":!0},"    const banner = new Banner(config);\n    //first load fonts, load images etc in the init animation\n    banner.init().then(\n      () => {\n        //initializes animations and creates main timeline\n        banner.setAnimation(\n          new MainAnimation(document.querySelector('.banner'), config),\n          new ExtraAnimation(document.querySelector('.banner'), config)\n          );\n        //plays banner\n        banner.start()\n      }\n    )\n")),(0,a.kt)("p",null,"and prepare the setAnimation method from ",(0,a.kt)("inlineCode",{parentName:"p"},"banner.js")," to distribute the different Timelines."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="/src/shared/script/banner.js" {1,5}',title:'"/src/shared/script/banner.js"',"{1,5}":!0},"\n  setAnimation(MainAnimation, ExtraAnimation){\n    this.MainAnimation = MainAnimation;\n    this.ExtraAnimation = ExtraAnimation;\n    //creates new timeline and pauses it\n    this.MainAnimation.getTimeline().paused(true);\n    this.ExtraAnimation.getTimeline().paused(true);\n    // this.MainAnimation.getTimeline().eventCallback('onComplete', this.handleAnimationComplete);\n\n  }\n\n")),(0,a.kt)("p",null,"And thats it, now you can access both Timelines and control them individually."))}d.isMDXComponent=!0}}]);