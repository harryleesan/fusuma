(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{134:function(e,n,t){t(135),t(347),t(343),e.exports=t(344)},326:function(e,n,t){var o=t(327);"string"==typeof o&&(o=[[e.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(50)(o,i);o.locals&&(e.exports=o.locals)},327:function(e,n,t){},331:function(e,n,t){var o=t(332);"string"==typeof o&&(o=[[e.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(50)(o,i);o.locals&&(e.exports=o.locals)},332:function(e,n,t){},333:function(e,n,t){var o={"./0-title.md":334,"./01-content.md":335,"./02-fusuma.md":336,"./03-usage.md":337,"./04-slide.md":338,"./05-webSlides.md":339,"./06-presenter-mode.md":340,"./07-end.md":342};function i(e){var n=s(e);return t(n)}function s(e){var n=o[e];if(!(n+1)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n}i.keys=function(){return Object.keys(o)},i.resolve=s,e.exports=i,i.id=333},334:function(e,n){e.exports="\x3c!-- classes: title --\x3e\n\n\x3c!-- note\nHere is a speaker note.😎\n\nNode.js spent a long time implementing ESM.\nNode.js had two major problems that browsers don't have.\n\nOne is that Node.js cannot recognize if a file is written in ESM.\nIn the case of browsers, it can be recognized because it is written as `module` in the `type` attribute.\nHowever, Node.js' import doesn't have an attribute like the `type`.\nSo we decided to look at the file extensions to be imported.\nWe made a rule that a file with the `.mjs` extension is written in ESM.\n\nAnd another issue is compatibility with existing CJS Modules.\nNode.js values backward compatibility. However, Node.js already has a module system.\nIt's very difficult to implement ESM so as not to break the existing code.\n--\x3e\n\n<h1 id=\"introducing-fusuma-😎\">Introducing Fusuma 😎</h1>\n"},335:function(e,n){e.exports='<h2 id="contents">Contents</h2>\n<div>\n\x3c!-- contents --\x3e\n</div>\n'},336:function(e,n){e.exports='\x3c!-- sectionTitle: What is fusuma? --\x3e\n\n<h2 id="what-is-fusuma">What is Fusuma?</h2>\n<hr>\n<h2 id="features">Features</h2>\n<h4 id="fusuma-is-a-helper-which-makes-slides-using-markdown-easily"><em>Fusuma is a helper which makes slides using Markdown easily.</em></h4>\n<br />\n\n<ul>\n<li>makes cool slides by <a href="https://github.com/webslides/WebSlides">WebSlides</a></li>\n<li>supports development, production and deploy tasks<ul>\n<li>you don&#39;t have to write webpack, Babel, Postcss settings, and etc...</li>\n</ul>\n</li>\n<li>supports OGP, SNS, Fullscreen, and Presenter Mode</li>\n<li>supports <a href="https://developer.mozilla.org/en-US/docs/Web/API/Presentation_API">Presentation API</a></li>\n<li>exports as PDF</li>\n</ul>\n<br />\n\n<h3 id="just-write-in-markdown-and-execute-with-cli😍">just write in Markdown and execute with CLI😍</h3>\n<hr>\n<h2 id="procedure">Procedure</h2>\n<pre><code class="language-shell">$ npm i fusuma -D\n$ npx fusuma init\n$ mkdir slides &amp;&amp; echo &#39;# Hello😄&#39; &gt; slides/title.md # 🎉🎉🎉\n\n# --- executable tasks ---\n$ npx fusuma start    # serve as NODE_ENV=development\n$ npx fusuma build    # build as NODE_ENV=production\n$ npx fusuma deploy   # deploy to github pages\n$ npx fusuma pdf      # export as PDF from HTML\n\n$ tree -a\n.\n├── .fusumarc.yml\n└── slides\n    └── title.md\n\n1 directory, 2 files</code></pre>\n'},337:function(e,n){e.exports='\x3c!-- sectionTitle: Usage --\x3e\n\n<h2 id="usage">Usage</h2>\n<hr>\n<h2 id="cli">CLI</h2>\n<pre><code class="language-txt">USAGE\n\n  fusuma &lt;command&gt; [options]\n\nCOMMANDS\n\n  start               Start with webpack-dev-server\n  build               Build with webpack\n  init                Create a configure file\n  deploy              Deploy to GitHub pages\n  pdf                 Export as PDF\n  help &lt;command&gt;      Display help for a specific command</code></pre>\n<hr>\n<h2 id="configuration-file">Configuration File</h2>\n<p>Fusuma supports <code>yaml</code> and <code>js</code>, and <code>npx fusuma init</code> creates the configuration file.</p>\n<pre><code class="language-yml"># .fusumarc.yml\n\nmeta:\n  url:\n  name:\n  author:\n  thumbnail:\n  description:\n  sns:\n    - twitter\nslide:\n  loop: true\n  sidebar: true\n  targetBlank: true\n  showIndex: false\n  isVertical: false\nextends:\n  js:\n  css:</code></pre>\n<hr>\n<h2 id="directory-structure">Directory Structure</h2>\n<pre><code class="language-txt">.\n├── .fusumarc.yml  &lt;-- required\n├── package.json\n├── slides         &lt;-- Required\n│   ├── 0-title.md\n│   ├── 01-content.md\n│   ├── 02-ecma\n│   │   ├── 0-ecmascript.md\n│   │   ├── 01-tc39.md\n│   │   └── 02-history.md\n│   └── 03-end.md\n├── index.js       &lt;-- optional\n└── style.css      &lt;-- optional</code></pre>\n<p><code>.fusuma.yml</code> and <code>slides/</code> are required.</p>\n<hr>\n<h2 id="tasks">Tasks</h2>\n<pre><code class="language-js">// package.json\n\n{\n  &quot;scripts&quot;: {\n    &quot;start&quot;: &quot;fusuma start&quot;,\n    &quot;build&quot;: &quot;fusuma build&quot;,\n    &quot;deploy&quot;: &quot;npm run build &amp;&amp; fusuma deploy&quot;,\n    &quot;pdf&quot;: &quot;fusuma pdf&quot;\n  },\n}</code></pre>\n'},338:function(e,n){e.exports='\x3c!-- sectionTitle: Syntax Provided by Fusuma --\x3e\n\n<h2 id="syntax-provided-by-fusuma">Syntax Provided by Fusuma</h2>\n<hr>\n<h2 id="split-slides">Split Slides</h2>\n<pre><code class="language-markdown">## Hello\n\nThis is the first slide.\n\n---\n\n## ✌️\n\nThis is the second slide.</code></pre>\n<p>You can split slides within the same file by using <code>---</code> syntax.</p>\n<hr>\n<h2 id="add-classes">Add Classes</h2>\n<pre><code class="language-markdown">&lt;!-- classes: title --&gt;\n\n## Hello</code></pre>\n<pre><code class="language-css">.title {\n  color: #3498db;\n}</code></pre>\n<p>Also, you can use HTML because MarkDown accepts HTML.</p>\n<hr>\n<h2 id="declare-section-title">Declare Section Title</h2>\n<pre><code class="language-markdown">&lt;!-- sectionTitle: this is the second slide! --&gt;\n\n## ✌️</code></pre>\n<pre><code class="language-css">/* output with this class name */\n.section-title {\n  color: #ff0;\n  background: #ccc;\n}</code></pre>\n<p>Makes explicit declarations to create an agenda.<br>In addition, it is also added to sidebar&#39;s list.</p>\n<p><span class="hand">👈</span></p>\n<hr>\n<h2 id="generate-agenda">Generate Agenda</h2>\n<pre><code class="language-markdown">## Contents\n\n&lt;!-- contents --&gt;</code></pre>\n<p>Converts the page number and title name specified by <code>sectionTitle</code> into a list of <code>list(ul/li)</code>.</p>\n<hr>\n<h2 id="add-speaker-note">Add Speaker Note</h2>\n<pre><code class="language-markdown">&lt;!-- note\nThis is a speaker note!!\nThis sentence can be seen when using Presenter Mode.\n\n😍\n--&gt;\n\n## Hello!!</code></pre>\n<p>This is a note displayed on the host side in Presenter Mode.</p>\n'},339:function(e,n){e.exports='\x3c!-- sectionTitle: Introducing WebSlides --\x3e\n\n<h2 id="introducing-webslides">Introducing WebSlides</h2>\n<br />\n\n<p>Please see <a href="https://webslides.tv/demos/components#slide=5">WebSlides&#39;s demo</a> for details.</p>\n<p>WebSlides provides some classes and tags.</p>\n<hr>\n<h2 id="header-and-footer">Header and Footer</h2>\n<header class="bg-blue">header!!</header>\n<footer class="bg-green">footer!!</footer>\n\n<pre><code class="language-markdown">## Header and Footer\n\n&lt;header class=&quot;bg-blue&quot;&gt;header!!&lt;/header&gt;\n&lt;footer class=&quot;bg-green&quot;&gt;footer!!&lt;/footer&gt;</code></pre>\n<p>This slide is using <code>header</code>, <code>footer</code> and <code>bg-*</code> provided by WebSlides.</p>\n<hr>\n<h2 id="grids">Grids</h2>\n<pre><code class="language-markdown">## Grids\n\n&lt;div class=&quot;grid&quot;&gt;\n  &lt;div class=&quot;column&quot;&gt;\n    &lt;h3&gt;.column 1&lt;/h3&gt;\n  &lt;/div&gt;\n  &lt;div class=&quot;column&quot;&gt;\n    &lt;h3&gt;.column 2&lt;/h3&gt;\n  &lt;/div&gt;\n  &lt;div class=&quot;column&quot;&gt;\n    &lt;h3&gt;.column 3&lt;/h3&gt;\n  &lt;/div&gt;\n&lt;/div&gt;</code></pre>\n<div class="grid">\n  <div class="column">\n    <h3>.column 1</h3>\n    <p>Incredibly versatile! Auto-fill and equal height. Flexbox is awesome.</p>\n  </div>\n  <div class="column">\n    <h3>.column 2</h3>\n    <p>Incredibly versatile! Auto-fill and equal height. Flexbox is awesome. Just focus on your content. Have less. Do more.</p>\n  </div>\n  <div class="column">\n    <h3>.column 3</h3>\n    <p>see the document https://webslides.tv/demos/components#slide=9</p>\n  </div>\n</div>\n\n<hr>\n<h2 id="alignments">Alignments</h2>\n<div class="content-left">\n  <h3>1/9 left top</h3>\n  <p><code>.slide-top and .content-left</code></p>\n</div>\n\n<pre><code class="language-markdown">## Alignments\n\n&lt;div class=&quot;content-left&quot;&gt;\n  &lt;h3&gt;1/9 left top&lt;/h3&gt;\n  &lt;p&gt;&lt;code&gt;.slide-top and .content-left&lt;/code&gt;&lt;/p&gt;\n&lt;/div&gt;</code></pre>\n<p>See <a href="https://webslides.tv/demos/components#slide=14">Simple CSS Alignments</a>.</p>\n<hr>\n<h2 class="zoomIn">Animation</h2>\n\n<p>Just 5 basic animations: <code>.fadeIn</code>, <code>.fadeInUp</code>, <code>.zoomIn</code>, <code>.slideInLeft</code>, and <code>.slideInRight</code>.</p>\n<hr>\n<h2 id="webslides-has-many-components-not-introduced-this-slides-br-please-refer-to-the-document-🙏">WebSlides has many components not introduced this slides, <br />please refer to the document. 🙏</h2>\n<br />\n\n<p>👉 <a href="https://webslides.tv/demos/components#slide=2">WebSlides Components</a></p>\n'},340:function(e,n,t){e.exports='\x3c!-- sectionTitle: Presenter Mode --\x3e\n\n<h2 id="presenter-mode">Presenter Mode</h2>\n<p>Recommend using this feature if you give a speech.</p>\n<br />\n\n<p>Fusuma is compatible with <a href="https://developer.mozilla.org/en-US/docs/Web/API/Presentation_API">Presentation API</a>,</p>\n<p>but you can also use this mode if you use browsers which don&#39;t have Presentation API</p>\n<p>because Fusuma can fallback to using localstorage.</p>\n<hr>\n<h2 id="setup">Setup</h2>\n<ul>\n<li><ol>\n<li>open Sidebar(click the bottom right button(三))</li>\n</ol>\n</li>\n<li><ol start="2">\n<li>click the PC monitor icon</li>\n</ol>\n</li>\n<li><ol start="3">\n<li>if you use Chrome, you can choose select cast device</li>\n</ol>\n</li>\n<li><ol start="4">\n<li>if you use a browser that does not support Presentation API, a new window will be created</li>\n</ol>\n</li>\n</ul>\n<p><span class="hand">👈</span></p>\n<hr>\n<h2 id="host-screen">Host Screen</h2>\n<img src="'+t(341)+'" class="presenter-host" />\n\n<hr>\n\x3c!-- note\nThis is a speaker note!!\nThis sentence can be seen when using Presenter Mode.\n--\x3e\n\n<h2 id="speaker-note">Speaker Note</h2>\n<p>This page is written with the following Markdown.</p>\n<pre><code class="language-md">&lt;!-- note\nThis is a speaker note!!\nThis sentence can be seen when using Presenter Mode.\n--&gt;</code></pre>\n'},341:function(e,n,t){e.exports=t.p+"c2c9fa6df062f6d39b0afa917f5e18b9.png"},342:function(e,n){e.exports='\x3c!-- classes: end --\x3e\n\n<h1 id="the-end">The End</h1>\n<br />\n\n<p>Enjoy😆</p>\n<br />\n\n<ul>\n<li>CLI: <a href="https://github.com/hiroppy/fusuma">https://github.com/hiroppy/fusuma</a></li>\n<li>Slides: <a href="https://github.com/hiroppy/slides">https://github.com/hiroppy/slides</a></li>\n</ul>\n'},343:function(e,n){console.log("hello")},344:function(e,n,t){if("/Users/about_hiroppy/Programming/fusuma/samples/intro/style.css".match(/\+*.css$/i))try{t(345)}catch(e){console.error(e)}},345:function(e,n,t){var o=t(346);"string"==typeof o&&(o=[[e.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(50)(o,i);o.locals&&(e.exports=o.locals)},346:function(e,n,t){},347:function(e,n,t){"use strict";t.r(n);var o=t(6),i=t.n(o),s=t(132),r=t(131),a=t(133),l=t.n(a),c=function(e){var n=e.displayed,t=void 0===n||n;return i.a.createElement("div",{className:t?"page-loader":"page-loader-fadeout"},i.a.createElement(l.a,{type:"bars"}))},d=t(93);function u(){return location.search.includes("presenter=host")?"host":location.search.includes("presenter=view")?"view":"common"}var p=t(91),h=t.n(p);function f(e){return function(e){if(Array.isArray(e)){for(var n=0,t=new Array(e.length);n<e.length;n++)t[n]=e[n];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function m(e){var n=[],t=function(e){var n=[];return e.forEach(function(e){n.push.apply(n,f(e.split("<hr>")))}),n}(e),o=[];return t.forEach(function(e,t){var i=function(e){var n={note:"",sectionTitle:"",className:"",shouldReplace:!1},t=["aligncenter"];if(void 0===e)return n;var o=e.match(/<!-- classes: (.+) -->/);o&&t.push(o[1]);var i=e.match(/<!-- sectionTitle: (.+) -->/);i&&(t.push("section-title"),n.sectionTitle=i[1]);var s=e.match(/<!-- note[\s\S]*-->/g);return n.note=s?s[0].replace(/<!-- note/g,"").replace(/-->/g,""):"",e.match(/<!-- contents -->/)&&(n.shouldReplace=!0),n.className=h()(t),n}(e);n.push({meta:i,context:e}),""!==i.sectionTitle&&o.push({title:i.sectionTitle,index:t+1})}),0!==o.length&&n.forEach(function(e,t){var i,s;e.meta.shouldReplace&&(n[t].context=(i=e.context,s='\n    <div class="toc size-70 aligncenter">\n      <ol>\n        '.concat(o.map(function(e,n){return'<li>\n            <a href="#slide='.concat(e.index,'" title="').concat(e.title,'">\n              <span class="chapter">').concat(e.title,'</span>\n              <span class="toc-page">').concat(e.index,"</span>\n            </a>\n          </li>")}).join(""),"\n      </ol>\n    </div>\n  "),i.replace(/<!-- contents -->/,s)))}),{slides:n,contentsList:o}}t(325);function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,n,t,o,i,s,r){try{var a=e[s](r),l=a.value}catch(e){return void t(e)}a.done?n(l):Promise.resolve(l).then(o,i)}function y(e){return function(){var n=this,t=arguments;return new Promise(function(o,i){var s=e.apply(n,t);function r(e){b(s,o,i,r,a,"next",e)}function a(e){b(s,o,i,r,a,"throw",e)}r(void 0)})}}function v(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.forEach(function(n){P(e,n,t[n])})}return e}function w(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function k(e,n){return(k=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function P(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var O=function(e){function n(e){var t,o,i;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),o=this,i=x(n).call(this,e),t=!i||"object"!==g(i)&&"function"!=typeof i?S(o):i,P(S(t),"changeSidebarState",function(){var e="false"!==t.params.get("sidebar")&&"common"===t.mode;t.setState({isSidebar:e})}),P(S(t),"goTo",function(e){window.slide&&window.slide.goToSlide(e)}),P(S(t),"updateSlideState",function(e){t.setState({slideInfo:v({},t.state.slideInfo,{total:t.slides.length,index:e})})}),P(S(t),"onSetSidebarOpen",function(e){t.setState({opened:e})}),P(S(t),"onRunPresentationMode",function(){window.slide=null,t.routeMode("host")}),P(S(t),"terminate",function(){window.slide=null,t.routeMode("common")});var s=new URL(window.location.href),r=s.hash.match(/^#slide=(.+?)$/);r=null!==r?r[1]-1:0,t.state={opened:!1,loader:!0,SidebarComponent:null,isSidebar:!0,slideInfo:{total:0,index:r}};var a=m(e.slides),l=a.slides,c=a.contentsList;return t.slides=l,t.params=s.searchParams,t.contentsList=c,t.ContentComponent=null,t.routeMode(),t}var o,s,a;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&k(e,n)}(n,i.a.Component),o=n,(s=[{key:"componentWillMount",value:function(){this.changeSidebarState()}},{key:"componentDidMount",value:function(){var e=y(regeneratorRuntime.mark(function e(){var n,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.state.isSidebar){e.next=6;break}return e.next=3,Promise.all([t.e(1),t.e(0)]).then(t.bind(null,361));case 3:n=e.sent,o=n.SidebarComponent,this.setState({SidebarComponent:o});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"routeMode",value:function(){var e=y(regeneratorRuntime.mark(function e(n){var o,i,s=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==this.mode?(this.mode=n||u(),this.changeSidebarState()):this.mode=n||u(),"common"!==this.mode){e.next=5;break}this.ContentComponent=d.a,e.next=17;break;case 5:if("view"!==this.mode){e.next=11;break}return e.next=8,t.e(3).then(t.bind(null,362));case 8:e.t0=e.sent,e.next=14;break;case 11:return e.next=13,Promise.all([t.e(1),t.e(0)]).then(t.bind(null,363));case 13:e.t0=e.sent;case 14:o=e.t0,i=o.default,this.ContentComponent=i;case 17:if("host"!==this.mode){e.next=21;break}this.setState({loader:!1,opened:!1}),e.next=23;break;case 21:return e.next=23,new Promise(function(e){setTimeout(function(){s.setState({loader:!1,opened:!1}),e()},500)});case 23:window.slide||(window.slide=new window.WebSlides({loop:!0,showIndex:!0,navigateOnScroll:!1}),this.updateSlideState(this.state.slideInfo.index),window.slide.el.addEventListener("ws:slide-change",function(e){s.updateSlideState(e.detail.currentSlide0)}));case 24:case"end":return e.stop()}},e,this)}));return function(n){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,this.state.isSidebar&&i.a.createElement(i.a.Fragment,null,this.state.SidebarComponent&&i.a.createElement(this.state.SidebarComponent,{goTo:this.goTo,opened:this.state.opened,terminate:this.terminate,contents:this.contentsList,onSetOpen:this.onSetSidebarOpen,slideInfo:this.state.slideInfo,runPresentationMode:this.onRunPresentationMode}),i.a.createElement(r.e,{className:"btn-sidebar",onClick:function(){return e.onSetSidebarOpen(!0)}})),i.a.createElement(c,{displayed:this.state.loader}),this.ContentComponent&&i.a.createElement(this.ContentComponent,{slides:this.slides,terminate:this.terminate,currentIndex:this.state.slideInfo.index}))}}])&&w(o.prototype,s),a&&w(o,a),n}();function j(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];Object(s.render)(i.a.createElement(O,{slides:e}),document.getElementById("root"))}function I(e){return{id:(n=e).id,slides:n.keys().sort().map(function(e){return n(e)})};var n}var T;t(326),t(329),t(331);function E(e,n,t,o,i,s,r){try{var a=e[s](r),l=a.value}catch(e){return void t(e)}a.done?n(l):Promise.resolve(l).then(o,i)}(T=regeneratorRuntime.mark(function e(){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return j(I(t(333)).slides),e.next=5,t.e(5).then(t.bind(null,360));case 5:n=e.sent,(0,n.setTargetBlank)();case 8:case"end":return e.stop()}},e)}),function(){var e=this,n=arguments;return new Promise(function(t,o){var i=T.apply(e,n);function s(e){E(i,t,o,s,r,"next",e)}function r(e){E(i,t,o,s,r,"throw",e)}s(void 0)})})()},93:function(e,n,t){"use strict";t.d(n,"a",function(){return p});var o=t(6),i=t.n(o),s=t(92),r=t.n(s);t(91);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function c(e,n){return!n||"object"!==a(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,n){return(u=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var p=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),c(this,d(n).apply(this,arguments))}var t,o,s;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&u(e,n)}(n,i.a.PureComponent),t=n,(o=[{key:"componentDidMount",value:function(){r.a.highlightAll()}},{key:"componentDidUpdate",value:function(){r.a.highlightAll()}},{key:"render",value:function(){var e=this.props,n=e.slides,t=e.currentIndex,o=e.className,s=void 0===o?void 0:o,r=e.lazyload,a=void 0!==r&&r,l=s;return i.a.createElement("article",{className:l,id:"webslides"},n.map(function(e,n){return i.a.createElement("section",{key:n,className:e.meta.className,dangerouslySetInnerHTML:{__html:t>=n-5&&t<=n+5||!a?e.context:"<div />"}})}))}}])&&l(t.prototype,o),s&&l(t,s),n}()}},[[134,4,6]],[1,0]]);