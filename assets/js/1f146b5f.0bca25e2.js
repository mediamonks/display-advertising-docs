"use strict";(self.webpackChunkdisplay_advertising_docs=self.webpackChunkdisplay_advertising_docs||[]).push([[130],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(a),m=i,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||r;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},9507:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return u}});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),o=["components"],l={sidebar_position:4},s="Generate a build",d={unversionedId:"getting-started/generate-a-build",id:"getting-started/generate-a-build",title:"Generate a build",description:"If you check the build is actually a script which is found in package.json, which in turn runs the command dds --mode production. After you execute this script, it will start searching for .richmediarc files in all the directories and subdirectories of your project.  You\u2019ll see something like this:",source:"@site/docs/getting-started/generate-a-build.md",sourceDirName:"getting-started",slug:"/getting-started/generate-a-build",permalink:"/display-advertising-docs/docs/getting-started/generate-a-build",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/getting-started/generate-a-build.md",tags:[],version:"current",lastUpdatedAt:1678454682,formattedLastUpdatedAt:"3/10/2023",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Start the server",permalink:"/display-advertising-docs/docs/getting-started/start-the-server"},next:{title:"Upload a preview",permalink:"/display-advertising-docs/docs/getting-started/upload-a-preview"}},p={},u=[{value:"Build parameters",id:"build-parameters",level:3},{value:"Examples",id:"examples",level:4},{value:"Via the Commandline",id:"via-the-commandline",level:5},{value:"In your package.json",id:"in-your-packagejson",level:5},{value:"Advanced combinations",id:"advanced-combinations",level:5},{value:"Mediamonks Preview Page",id:"mediamonks-preview-page",level:4},{value:"data.json",id:"datajson",level:5},{value:"maxFileSize",id:"maxfilesize",level:5}],c={toc:u};function m(e){var t=e.components,l=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"generate-a-build"},"Generate a build"),(0,r.kt)("p",null,"If you check the ",(0,r.kt)("inlineCode",{parentName:"p"},"build")," is actually a script which is found in package.json, which in turn runs the command ",(0,r.kt)("inlineCode",{parentName:"p"},"dds --mode production"),". After you execute this script, it will start searching for .richmediarc files in all the directories and subdirectories of your project.  You\u2019ll see something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-terminal"},"npm run build\n")),(0,r.kt)("p",null,"\u201cbuild\u201d is actually a script which is found in package.json, which in turn runs the command ",(0,r.kt)("inlineCode",{parentName:"p"},"dds --mode production"),". After you execute this script, it will start searching for .richmediarc files in all the directories and subdirectories of your project. You\u2019ll see something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"? Please choose the current build to start. (Press <space> to select, <a> to toggle all, <i> to invert selection)\n>( ) all\n( ) ./src/300x250/.richmediarc\n( ) ./src/300x600/.richmediarc\n( ) ./src/728x90/.richmediarc\n( ) ./src/970x250/.richmediarc\n")),(0,r.kt)("p",null,"Here, you can select which units you wish to build. Navigate with arrow keys and select (it\u2019s possible to select multiple values) with spacebar, then press enter to confirm your selection."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"? save this as a separate command in package.json (y/N)\n")),(0,r.kt)("p",null,"Use this option to save your selection as a separate command. If you select ",(0,r.kt)("strong",{parentName:"p"},"y"),", you\u2019ll see something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"? please provide a name for your command. You will type something like npm run build:__NAME__\n")),(0,r.kt)("p",null,"No special chars, spaces, dashes just a single word."),(0,r.kt)("p",null,"You\u2019ll have to give it a unique name, for example \u201cselection\u201d. Now you will be able to run a dev server with the same selection simply by running"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-terminal"},"npm run build:selection\n")),(0,r.kt)("p",null,"It will now compile the banners you selected and then move these files to the ./build directory, along with zipped files which you can use for delivering files or uploading to certain previews."),(0,r.kt)("h3",{id:"build-parameters"},"Build parameters"),(0,r.kt)("p",null,"This parameter might come in handy if you want to create multiple packages (versions) of zips, or if you want to build ads to separate folders.\nThere is a parameter outputDir available that you can run along with the build command."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("div",{style:{width:"180px"}},"Property")),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"--outputDir")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Relative output directory, shorthand is -o. By default ",(0,r.kt)("inlineCode",{parentName:"td"},"./build"),", but you can change it to for example ",(0,r.kt)("inlineCode",{parentName:"td"},"./build/version1/"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"--skipBuild")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Boolean, if it exists, skip compiling ads phase. The --skipBuild variable is useful when you for example already have created ads from Animate CC or Google Web Designer available and you only want to create a preview page around that in order to preview them around.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"--skipPreview")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Boolean, if it exists, skip preview building phase. The --skipBuild variable is useful when you for example first want to build your files, create backup images/video via the ads recorder and then want to create a preview page from all of that together.")))),(0,r.kt)("h4",{id:"examples"},"Examples"),(0,r.kt)("h5",{id:"via-the-commandline"},"Via the Commandline"),(0,r.kt)("p",null,"Use the build command creating a custom output dir and skipping building the ads (so only adding the preview page files)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-terminal"},"npm run build -- --outputDir ./build/version1/ --skipBuild\n")),(0,r.kt)("p",null,"or the shorthand version:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-terminal"},"npm run build -- -o ./build/version1/ --skipBuild\n")),(0,r.kt)("h5",{id:"in-your-packagejson"},"In your package.json"),(0,r.kt)("p",null,"Use the dds command creating a custom output dir and skipping building the preview page (so only build the ads)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-terminal"},'"build:version1": "dds --mode production -o ./build/version1/" --skipPreview\n')),(0,r.kt)("h5",{id:"advanced-combinations"},"Advanced combinations"),(0,r.kt)("p",null,"Example with a glob and a preview command, for automizing purposes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-terminal"},'"build-preview:version1": "dds --mode production -o ./build/version1/ --choices eyJsb2NhdGlvbiI6WyJhbGwiXSwiZW1wdHlCdWlsZERpciI6dHJ1ZX0= && display-upload -t mm-preview -i ./build/version1 -o 1f08c1d9-b4f1-4a47-831b-409cf070b151/version1/"\n')),(0,r.kt)("p",null,"Or use combinations of the different scripts, here in ",(0,r.kt)("inlineCode",{parentName:"p"},"doall:v1"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"build:v1")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"upload:v1")," are combined to one new script"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-terminal"},'"build:v1": "dds --mode production -o build/v1",\n"upload:v1": "display-upload -t mm-preview -i build/v1 -o 12528e62-6871-47de-abd1-6144e476bc73/v1/",\n"doall:v1": "npm run build:v1 && npm run upload:v1",\n')),(0,r.kt)("h4",{id:"mediamonks-preview-page"},"Mediamonks Preview Page"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"mm-preview")," page is our most common used and custom homemade webpage for displaying ads.\nIt is build in React and has a couple of nice features."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alt text",src:a(6642).Z,width:"512",height:"429"})),(0,r.kt)("h5",{id:"datajson"},"data.json"),(0,r.kt)("p",null,"The page loads in a data file with all information that is needed, such as paths to html/jpg/mp4 and widths and heights of each unit.\nWhen you recorded things like gifs, backup images, it will take this in the data.json file as well and store it for eventually prev"),(0,r.kt)("h5",{id:"maxfilesize"},"maxFileSize"),(0,r.kt)("p",null,"You can set a ",(0,r.kt)("inlineCode",{parentName:"p"},"maxFileSize"),"parameter in the ",(0,r.kt)("inlineCode",{parentName:"p"},".richmediarc")," or ",(0,r.kt)("inlineCode",{parentName:"p"},".sharedrc")," config file. It will check the filesize in the preview and give a green or red label comparing it to the given filesize."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-terminal"},'"settings": {\n  "maxFileSize": "100"\n}\n')))}m.isMDXComponent=!0},6642:function(e,t,a){t.Z=a.p+"assets/images/preview_react-c47640eb650a10f04c3399a53faa2a10.png"}}]);