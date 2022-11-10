"use strict";(self.webpackChunkdisplay_advertising_docs=self.webpackChunkdisplay_advertising_docs||[]).push([[684],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return l}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),p=u(n),l=i,f=p["".concat(s,".").concat(l)]||p[l]||d[l]||o;return n?r.createElement(f,a(a({ref:t},m),{},{components:n})):r.createElement(f,a({ref:t},m))}));function l(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},954:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return l},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return d}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],c={sidebar_position:7},s="Dynamic Import",u={unversionedId:"guides/dynamic-import",id:"guides/dynamic-import",title:"Dynamic Import",description:"Dynamic import() introduces a new function-like form of import that caters to those use cases. import(moduleSpecifier) returns a promise for the module namespace object of the requested module, which is created after fetching, instantiating, and evaluating all of the module\u2019s dependencies, as well as the module itself.",source:"@site/docs/guides/dynamic-import.md",sourceDirName:"guides",slug:"/guides/dynamic-import",permalink:"/display-advertising-docs/docs/guides/dynamic-import",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guides/dynamic-import.md",tags:[],version:"current",lastUpdatedAt:1668092344,formattedLastUpdatedAt:"11/10/2022",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Create banners with parameters",permalink:"/display-advertising-docs/docs/guides/commands"},next:{title:"Extends Animation",permalink:"/display-advertising-docs/docs/guides/extends-animation"}},m={},d=[],p={toc:d};function l(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"dynamic-import"},"Dynamic Import"),(0,o.kt)("p",null,"Dynamic import() introduces a new function-like form of import that caters to those use cases. import(moduleSpecifier) returns a promise for the module namespace object of the requested module, which is created after fetching, instantiating, and evaluating all of the module\u2019s dependencies, as well as the module itself."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="/src/300x250/script/main.js" {4,5}',title:'"/src/300x250/script/main.js"',"{4,5}":!0},"import config from \"richmediaconfig\";\nimport Banner from \"../../shared/script/Banner\";\n\nimport(`./${(config.content.customAnimation) ? config.content.customAnimation : 'AnimationDefault'}.js`)\n    .then(Animation => createBanner(Animation));\n\nconst createBanner = (Animation) => {\n  const banner = new Banner(config);\n\n  banner.init().then(() => {\n      banner.setAnimation(new Animation.default((document.querySelector('.banner'), config)));\n      banner.start()\n    }\n  )\n}\n")))}l.isMDXComponent=!0}}]);