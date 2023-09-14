"use strict";(self.webpackChunkdisplay_advertising_docs=self.webpackChunkdisplay_advertising_docs||[]).push([[932],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=i,b=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(b,a(a({ref:t},c),{},{components:n})):r.createElement(b,a({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2028:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],l={sidebar_position:14},s="Timeline Scrubber",u={unversionedId:"guides/timeline-scrubber",id:"guides/timeline-scrubber",title:"Timeline Scrubber",description:"Previously, we had to use the GSDevTools bonus plugin of GreenSock to get a timeline scrubber so you would be able to scroll through your gsap timeline.",source:"@site/docs/guides/timeline-scrubber.md",sourceDirName:"guides",slug:"/guides/timeline-scrubber",permalink:"/display-advertising-docs/docs/guides/timeline-scrubber",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guides/timeline-scrubber.md",tags:[],version:"current",lastUpdatedAt:1681204428,formattedLastUpdatedAt:"4/11/2023",sidebarPosition:14,frontMatter:{sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"Clean output template",permalink:"/display-advertising-docs/docs/guides/clean-output-template"},next:{title:"Contributing",permalink:"/display-advertising-docs/docs/category/contributing"}},c={},p=[{value:"Configuration",id:"configuration",level:3},{value:"Hotkeys",id:"hotkeys",level:3},{value:"Hide/show timeline scrubber element",id:"hideshow-timeline-scrubber-element",level:4},{value:"Play/pause timeline",id:"playpause-timeline",level:4}],m={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"timeline-scrubber"},"Timeline Scrubber"),(0,o.kt)("p",null,"Previously, we had to use the GSDevTools bonus plugin of GreenSock to get a timeline scrubber so you would be able to scroll through your gsap timeline.\nThis is a paid service, and we cannot share this officially since it is part of our paid GSAP account. Therefore, I made a simple\ntimeline scrubber that basically does the same but with free and custom code."),(0,o.kt)("h3",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"To use the timelineScrubber you need to import it in for example Banner.js and initialize it after creating your master GSAP timeline:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Banner.js" {}',title:'"Banner.js"',"{}":!0},"import timelineScrubber from '@mediamonks/display-temple/util/timelineScrubber';\n\nsetAnimation(animation){\n    this.animation = animation;\n    //creates new timeline and pauses it\n    this.animation.getTimeline().paused(true);\n    // this.animation.getTimeline().eventCallback('onComplete', this.handleAnimationComplete);\n\n    if (DEVELOPMENT) {\n        timelineScrubber(this.animation.getTimeline());\n    }\n}\n")),(0,o.kt)("h3",{id:"hotkeys"},"Hotkeys"),(0,o.kt)("p",null,'Just as with GSDevTools, if you have your scrubber element "in focus" (you can do this by clicking on the timelineScrubber for example), you can use shortcuts\nto play pause and hide/show the Timeline Scrubber.'),(0,o.kt)("h4",{id:"hideshow-timeline-scrubber-element"},"Hide/show timeline scrubber element"),(0,o.kt)("p",null,"You can ",(0,o.kt)("strong",{parentName:"p"},"H"),"ide or show the timeline by pressing the letter ",(0,o.kt)("inlineCode",{parentName:"p"},"H")," on your keyboard."),(0,o.kt)("h4",{id:"playpause-timeline"},"Play/pause timeline"),(0,o.kt)("p",null,"Toggle play or pause by pressing the ",(0,o.kt)("inlineCode",{parentName:"p"},"Spacebar"),"."))}d.isMDXComponent=!0}}]);