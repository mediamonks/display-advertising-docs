"use strict";(self.webpackChunkdisplay_advertising_docs=self.webpackChunkdisplay_advertising_docs||[]).push([[130],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||i;return n?r.createElement(h,l(l({ref:t},d),{},{components:n})):r.createElement(h,l({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9507:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],o={sidebar_position:4},s="Generate a build",u={unversionedId:"getting-started/generate-a-build",id:"getting-started/generate-a-build",title:"Generate a build",description:"If you check the build is actually a script which is found in package.json, which in turn runs the command dds --mode production. After you execute this script, it will start searching for .richmediarc files in all the directories and subdirectories of your project.  You\u2019ll see something like this:",source:"@site/docs/getting-started/generate-a-build.md",sourceDirName:"getting-started",slug:"/getting-started/generate-a-build",permalink:"/display-advertising-docs/docs/getting-started/generate-a-build",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/getting-started/generate-a-build.md",tags:[],version:"current",lastUpdatedAt:1678370319,formattedLastUpdatedAt:"3/9/2023",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Start the server",permalink:"/display-advertising-docs/docs/getting-started/start-the-server"},next:{title:"Upload a preview",permalink:"/display-advertising-docs/docs/getting-started/upload-a-preview"}},d={},c=[{value:"Custom build parameters",id:"custom-build-parameters",level:3},{value:"Via the Commandline",id:"via-the-commandline",level:4},{value:"In your package.json",id:"in-your-packagejson",level:4},{value:"Advanced combinations",id:"advanced-combinations",level:4}],p={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"generate-a-build"},"Generate a build"),(0,i.kt)("p",null,"If you check the ",(0,i.kt)("inlineCode",{parentName:"p"},"build")," is actually a script which is found in package.json, which in turn runs the command ",(0,i.kt)("inlineCode",{parentName:"p"},"dds --mode production"),". After you execute this script, it will start searching for .richmediarc files in all the directories and subdirectories of your project.  You\u2019ll see something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-terminal"},"npm run build\n")),(0,i.kt)("p",null,"\u201cbuild\u201d is actually a script which is found in package.json, which in turn runs the command ",(0,i.kt)("inlineCode",{parentName:"p"},"dds --mode production"),". After you execute this script, it will start searching for .richmediarc files in all the directories and subdirectories of your project. You\u2019ll see something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"? Please choose the current build to start. (Press <space> to select, <a> to toggle all, <i> to invert selection)\n>( ) all\n( ) ./src/300x250/.richmediarc\n( ) ./src/300x600/.richmediarc\n( ) ./src/728x90/.richmediarc\n( ) ./src/970x250/.richmediarc\n")),(0,i.kt)("p",null,"Here, you can select which units you wish to build. Navigate with arrow keys and select (it\u2019s possible to select multiple values) with spacebar, then press enter to confirm your selection."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"? save this as a separate command in package.json (y/N)\n")),(0,i.kt)("p",null,"Use this option to save your selection as a separate command. If you select ",(0,i.kt)("strong",{parentName:"p"},"y"),", you\u2019ll see something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"? please provide a name for your command. You will type something like npm run build:__NAME__\n")),(0,i.kt)("p",null,"No special chars, spaces, dashes just a single word."),(0,i.kt)("p",null,"You\u2019ll have to give it a unique name, for example \u201cselection\u201d. Now you will be able to run a dev server with the same selection simply by running"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-terminal"},"npm run build:selection\n")),(0,i.kt)("p",null,"It will now compile the banners you selected and then move these files to the ./build directory, along with zipped files which you can use for delivering files or uploading to certain previews."),(0,i.kt)("h3",{id:"custom-build-parameters"},"Custom build parameters"),(0,i.kt)("p",null,"This parameter might come in handy if you want to create multiple packages (versions) of zips, or if you want to build ads to separate folders.\nThere is a parameter outputDir available that you can run along with the build command."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Example values"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"--outputDir or -o"),(0,i.kt)("td",{parentName:"tr",align:null},"output directory, by default ./build"),(0,i.kt)("td",{parentName:"tr",align:null},"./build/version1/")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"--skipBuild"),(0,i.kt)("td",{parentName:"tr",align:null},"skip compiling ads phase"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"--skipPreview"),(0,i.kt)("td",{parentName:"tr",align:null},"skip preview building phase"),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("h4",{id:"via-the-commandline"},"Via the Commandline"),(0,i.kt)("p",null,"Use the build command"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-terminal"},"npm run build -- --outputDir ./build/version1/ --skipBuild\n")),(0,i.kt)("p",null,"or the shorthand version:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-terminal"},"npm run build -- -o ./build/version1/ --skipBuild\n")),(0,i.kt)("h4",{id:"in-your-packagejson"},"In your package.json"),(0,i.kt)("p",null,"Use the dds command"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-terminal"},'"build:version1": "dds --mode production -o ./build/version1/" --skipPreview\n')),(0,i.kt)("h4",{id:"advanced-combinations"},"Advanced combinations"),(0,i.kt)("p",null,"Example with a glob and a preview command, for automizing purposes:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-terminal"},'"build-preview:version1": "dds --mode production -o ./build/version1/ --choices eyJsb2NhdGlvbiI6WyJhbGwiXSwiZW1wdHlCdWlsZERpciI6dHJ1ZX0= && display-upload -t mm-preview -i ./build/version1 -o 1f08c1d9-b4f1-4a47-831b-409cf070b151/version1/"\n')))}m.isMDXComponent=!0}}]);