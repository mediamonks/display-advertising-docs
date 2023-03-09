"use strict";(self.webpackChunkdisplay_advertising_docs=self.webpackChunkdisplay_advertising_docs||[]).push([[823],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,v=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return n?a.createElement(v,o(o({ref:t},d),{},{components:n})):a.createElement(v,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3720:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={sidebar_position:5},s="Upload a preview",p={unversionedId:"getting-started/upload-a-preview",id:"getting-started/upload-a-preview",title:"Upload a preview",description:"How to use",source:"@site/docs/getting-started/upload-a-preview.md",sourceDirName:"getting-started",slug:"/getting-started/upload-a-preview",permalink:"/display-advertising-docs/docs/getting-started/upload-a-preview",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/getting-started/upload-a-preview.md",tags:[],version:"current",lastUpdatedAt:1678370319,formattedLastUpdatedAt:"3/9/2023",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Generate a build",permalink:"/display-advertising-docs/docs/getting-started/generate-a-build"},next:{title:"Configuration files",permalink:"/display-advertising-docs/docs/richmediarc"}},d={},u=[{value:"How to use",id:"how-to-use",level:2},{value:"MediaMonks Preview",id:"mediamonks-preview",level:2},{value:"Custom preview parameters",id:"custom-preview-parameters",level:3},{value:"Via the Commandline",id:"via-the-commandline",level:4},{value:"In your package.json",id:"in-your-packagejson",level:4},{value:"Advanced combinations",id:"advanced-combinations",level:4}],c={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"upload-a-preview"},"Upload a preview"),(0,i.kt)("h2",{id:"how-to-use"},"How to use"),(0,i.kt)("p",null,"Uploading your banners to a preview can be done in a number of ways."),(0,i.kt)("p",null,"The easiest method is to use our tool called \u201cdisplay-upload\u201d, which you can start by running the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-terminal"},"npm run preview\n")),(0,i.kt)("p",null,"If it\u2019s the first time you run this command, you\u2019ll see something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Welcome to the Display.Monks Upload Tool v1.6.2\n? No .uploadrc as added to the .gitignore, should i add it? (Y/n)\n")),(0,i.kt)("p",null,"Press ",(0,i.kt)("strong",{parentName:"p"},"Y"),". You\u2019ll see the following options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"? Where do you want to upload? (Use arrow keys)\n> Mediamonks Preview\n  Adform\n  Flashtalking\n  Google DoubleClick Studio\n  SFTP (alpha)\n")),(0,i.kt)("h2",{id:"mediamonks-preview"},"MediaMonks Preview"),(0,i.kt)("p",null,"This will upload the entire build folder to a S3 bucket. When you select this, you\u2019ll have to enter a few things:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"? What directory you want to upload?\n")),(0,i.kt)("p",null,"Just enter ",(0,i.kt)("inlineCode",{parentName:"p"},"build")," here by default."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"? Please fill in the name for the S3 Bucket:\n? Please fill in the accessKeyId for the S3 Bucket:\n? Please fill in the secretAccessKey for the S3 Bucket:\n")),(0,i.kt)("p",null,"These values you can find in the pinned messages of our \u2018wfh-aas-dev\u2019 Slack channel. "),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you are a Windows user, you can also store these credentials in your Environment Variables.\nAdd the variables ",(0,i.kt)("strong",{parentName:"p"},"preview_accessKeyId"),", ",(0,i.kt)("strong",{parentName:"p"},"preview_accessKeySecret")," and ",(0,i.kt)("strong",{parentName:"p"},"preview_s3bucket")," with the respective values to the user variables."))),(0,i.kt)("p",null,"The tool will automatically generate a unique hash value as the directory name of the preview. Just press ",(0,i.kt)("strong",{parentName:"p"},"enter")," or add your\nown value and then press enter. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"? outputDir: (3334d7e2-3d58-4c84-aec7-4b6d4f50c7f0/)\n")),(0,i.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Keep in mind that this unique hash has been created in order always create a unique url, to change this to a common url like test/ or client/ is therefore a bad practise.\nBetter use the hash in combination with your own project, like 3334d7e2-3d58-4c84-aec7-4b6d4f50c7f0/client/project/ads/v1/"))),(0,i.kt)("p",null,"It will then upload the contents of the ./build/ directory and show you a link to the preview, which should look something like this:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"http://richmedia-previews-s3bucket-khpmpnjb2dya.s3.amazonaws.com/3334d7e2-3d58-4c84-aec7-4b6d4f50c7f0/index.html\n")),(0,i.kt)("h3",{id:"custom-preview-parameters"},"Custom preview parameters"),(0,i.kt)("p",null,"These parameters might come in handy if you want to create multiple previews, for each different version of an ad for example.\nThere is a parameter outputDir available that you can run along with the build command."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Example values"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"--type or -t"),(0,i.kt)("td",{parentName:"tr",align:null},"type of preview"),(0,i.kt)("td",{parentName:"tr",align:null},"mm-preview, adform, flashtalking, doubleclick, sftp")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"--inputDir or -i"),(0,i.kt)("td",{parentName:"tr",align:null},"input directory, by default ./build"),(0,i.kt)("td",{parentName:"tr",align:null},"./build/version1/")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"--outputDir or -o"),(0,i.kt)("td",{parentName:"tr",align:null},"output directory, by default a unique hash/"),(0,i.kt)("td",{parentName:"tr",align:null},"./3334d7e2-3d58-4c84-aec7-4b6d4f50c7f0/version1/")))),(0,i.kt)("h4",{id:"via-the-commandline"},"Via the Commandline"),(0,i.kt)("p",null,"Use the build command"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-terminal"},"npm run preview -- --type mm-preview --inputDir ./build/version1/ --outputDir 1f08c1d9-b4f1-4a47-831b-409cf070b151/version1/\n")),(0,i.kt)("p",null,"or the shorthand version:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-terminal"},"npm run preview -- -t mm-preview -i ./build/version1/ -o 1f08c1d9-b4f1-4a47-831b-409cf070b151/version1/\n")),(0,i.kt)("h4",{id:"in-your-packagejson"},"In your package.json"),(0,i.kt)("p",null,"Use the dds command"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-terminal"},'"preview:version1": "display-upload -t mm-preview -i ./build/version1/ -o 1f08c1d9-b4f1-4a47-831b-409cf070b151/version1/\n')),(0,i.kt)("h4",{id:"advanced-combinations"},"Advanced combinations"),(0,i.kt)("p",null,"Example with a glob for automizing purposes:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-terminal"},'"build-preview:version1": "dds --mode production -o ./build/version1/ --choices eyJsb2NhdGlvbiI6WyJhbGwiXSwiZW1wdHlCdWlsZERpciI6dHJ1ZX0= && display-upload -t mm-preview -i ./build/version1 -o 1f08c1d9-b4f1-4a47-831b-409cf070b151/version1/"\n')))}m.isMDXComponent=!0}}]);