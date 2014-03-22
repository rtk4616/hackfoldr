(function(){"use strict";var t="undefined"!=typeof window?window:global;if("function"!=typeof t.require){var e={},n={},r=function(t,e){return{}.hasOwnProperty.call(t,e)},i=function(t,e){var n,r,i=[];n=/^\.\.?(\/|$)/.test(e)?[t,e].join("/").split("/"):e.split("/");for(var o=0,a=n.length;a>o;o++)r=n[o],".."===r?i.pop():"."!==r&&""!==r&&i.push(r);return i.join("/")},o=function(t){return t.split("/").slice(0,-1).join("/")},a=function(e){return function(n){var r=o(e),a=i(r,n);return t.require(a)}},s=function(t,e){var r={id:t,exports:{}};e(r.exports,a(t),r);var i=n[t]=r.exports;return i},l=function(t){var o=i(t,".");if(r(n,o))return n[o];if(r(e,o))return s(o,e[o]);var a=i(o,"./index");if(r(n,a))return n[a];if(r(e,a))return s(a,e[a]);throw Error('Cannot find module "'+t+'"')},c=function(t,n){if("object"==typeof t)for(var i in t)r(t,i)&&(e[i]=t[i]);else e[t]=n};t.require=l,t.require.define=c,t.require.register=c,t.require.brunch=!0}})(),function(){angular.module("scroll",[]).value("$anchorScroll",angular.noop),angular.module("app",["ui","partials","app.controllers","ui.state","ui.bootstrap"]).config(["$stateProvider","$urlRouterProvider","$locationProvider"].concat(function(t,e,n){return t.state("about",{url:"/about",templateUrl:"/partials/about.html"}).state("hack",{url:"/{hackId}",templateUrl:"/partials/hack.html",controller:"HackFolderCtrl",onEnter:function(){return $("body").addClass("hide-overflow")},onExit:function(){return $("body").removeClass("hide-overflow")}}).state("hack.index",{url:"/__index"}).state("hack.doc",{url:"/{docId}"}),e.otherwise("/congressoccupied"),n.html5Mode(!0)})).run(["$rootScope","$state","$stateParams","$location"].concat(function(t,e,n,r){return t.$state=e,t.$stateParam=n,t.go=function(t){return r.path(t)},t._build=window.global.config.BUILD,t.$on("$stateChangeSuccess",function(t,e){var n;return n=e.name,"undefined"!=typeof window&&null!==window?"function"==typeof window.ga?window.ga("send","pageview",{page:r.$$url,title:n}):void 0:void 0}),t.safeApply=function(t,e){var n;return n=t.$root.$$phase,"$apply"===n||"$digest"===n?"function"==typeof e?e():void 0:t.$apply(e)}}))}.call(this),function(){function t(t,e){var n={}.hasOwnProperty;for(var r in e)n.call(e,r)&&(t[r]=e[r]);return t}function e(t,e){for(var n=-1,r=e.length>>>0;r>++n;)if(t===e[n]&&n in e)return!0;return!1}var n=[].slice,r="".replace;angular.module("app.controllers",["ui.state","ngCookies"]).controller({AppCtrl:["$scope","$state","$rootScope","$timeout"].concat(function(t,e,n,r){return t.$watch("$state.current.name",function(e){return"irc"===e?t.ircEnabled=!0:void 0}),r(function(){return n.hideGithubRibbon=!0},1e4)})}).controller({HackFolderCtrl:["$scope","$state","$cookies","HackFolder"].concat(function(e,r,i,o){var a;return t(e,{hasViewMode:function(t){return t.match(/g(doc|present|draw)/)},sortableOptions:{update:function(){return"undefined"!=typeof console&&null!==console?console.log("notyetupdated"):void 0}},iframes:o.iframes,docs:o.docs,tree:o.tree,godoc:function(t){var n;return"_blank"===(null!=(n=t.opts)?n.target:void 0)?(window.open(t.url,t.id),!0):t.url.match(/(https?:)?\/\/[^/]*(github|facebook)\.com/)?(window.open(t.url,t.id),!0):e.go("/"+e.hackId+"/"+decodeURIComponent(t.id))},open:function(t){return window.open(t.url,t.id),!1},activate:function(t){var e;return e=o.activate(t),"hackfoldr"===(null!=e?e.type:void 0)?console.log("folder!!"):void 0},saveBtn:void 0,saveModalOpts:{dialogFade:!0},saveModalOpen:!1,showSaveModal:function(t,n,r){return e.saveModalOpen=t,r&&(e.saveBtn=$(r.target)),n&&(i.savebtn="consumed",e.saveBtn)?e.saveBtn.fadeOut(1e3):void 0},showSaveBtn:function(){return"consumed"!==i.savebtn},HackFolder:o,iframeCallback:function(t){return function(n){return e.$apply(function(){return"undefined"!=typeof console&&null!==console&&console.log("iframecb",n,t),r.current.title=t.title+" – hack.g0v.tw",t.noiframe="fail"===n?!0:!1,"unsure"===n?t.iframeunsure=!0:void 0})}},debug:function(t){return"undefined"!=typeof console&&null!==console?console.log(t,this):void 0},reload:function(t){return o.getIndex(t,!0,function(){})}}),e.$watch("hackId",function(t){return o.getIndex(t,!1,function(){var i,a;return e.$watch("docId",function(r){var i;return r&&(i=o.activate(r)),"hackfoldr"===(null!=i?i.type:void 0)?(e.showIndex=!0,o.loadRemoteCsv(i.id,function(i,a,s){var l,c,u;return l=function(){var t,e,n,i=[];for(t=0,n=(e=o.tree).length;n>t;++t)l=e[t],l.id===r&&i.push(l);return i}()[0],l.tagFilter=null!=(c=l.tags)?null!=(u=c[0])?u.content:void 0:void 0,l.chidlren||(null==l.children&&(l.children=null!=s?s[0].children:void 0),(c=o.docs).splice.apply(c,[a.length,0].concat(n.call(a)))),e.indexDocs=a,e.indexSearch=t.replace(/^g0v-/,"")})):e.showIndex=!1}),e.showIndex="hack.index"===r.current.name,e.showIndex?void 0:!e.docId&&(i=null!=(a=o.docs[0])?a.id:void 0)?r.transitionTo("hack.doc",{docId:i,hackId:e.hackId}):void 0})}),e.hackId=(a=r.params.hackId)?a:"congressoccupied",e.$watch("$state.params.docId",function(t){return t?e.docId=encodeURIComponent(encodeURIComponent(t)):void 0})})}).directive("resize",["$window"].concat(function(t){return function(e,n){var r;return r=function(){return e.width=t.innerWidth,e.height=t.innerHeight,e.contentHeight=t.innerHeight-$(n).offset().top},angular.element(t).bind("resize",function(){return e.$apply(r)}),r()}})).directive("ngxIframe",["$parse"].concat(function(t){return{link:function(e,n,r){var i,o,a;return i=t(r.ngxIframe)(e),o=function(t,e){var n;return n=!function(){try{return"about:blank"==t.location}catch(e){}}(),e&&$.browser.mozilla?i("unsure"):i(n?"ok":"fail")},$(n).load(function(){return clearTimeout(a),o(this.contentWindow,!0)}),a=setTimeout(function(){return o(n[0].contentWindow)},5e3)}}})).directive("ngxNoclick",function(){return function(t,e){return $(e).click(function(t){return t.preventDefault(),!1})}}).directive("ngxClickMeta",["$parse"].concat(function(t){return{link:function(e,n,r){var i,o;return i=t(r.ngxClickMeta),o=navigator.appVersion.match(/Win/)?function(t){return t.ctrlKey}:function(t){return t.metaKey},$(n).click(function(t){return o(t)&&!i(e)?(t.preventDefault(),!1):void 0})}}})).directive("ngxFinal",function(){return function(t,e){return $(e).click(function(t){return t.stopPropagation()})}}).directive("scrollbar",["$window"].concat(function(t){return function(e){var n;return n=function(){var n;return n=$(".index"),e.hasScrollbar=n.get(0).scrollHeight>t.innerHeight-$(".navbar").height()},angular.element(t).bind("resize",function(){return e.$apply(n)}),e.$watch("docs",n),n()}})).factory({HackFolder:["$http","$sce"].concat(function(i,o){var a,s,l,c,u;return a={},s=[],l=[],u={iframes:a,docs:s,tree:l,activate:function(t,n){function r(t){return t.id}var i,c,u,h,p,d,f,g,m,v,_;for(null==n&&(n=!1),c=function(){var e,n,r,o=[];for(e=0,r=(n=s).length;r>e;++e)i=n[e],i.id===t&&o.push(i);return o}()[0],u=c.type,h=0,d=(p=l).length;d>h;++h)f=p[h],(g=null!=f?null!=(m=f.children)?m.map(r):void 0:void 0)&&e(t,g)&&(f.expand=!0);return v=n?"edit":"view",_=function(){var e;switch(e=[u],!1){case"gdoc"!==e[0]:return"https://docs.google.com/document/d/"+t+"/"+v+"?pli=1&overridemobile=true";case"gsheet"!==e[0]:return"https://docs.google.com/spreadsheet/ccc?key="+t;case"gpresent"!==e[0]:return"https://docs.google.com/presentation/d/"+t+"/"+v;case"gdraw"!==e[0]:return"https://docs.google.com/drawings/d/"+t+"/"+v;case"gsheet"!==e[0]:return"https://docs.google.com/spreadsheet/ccc?key="+t;case"hackpad"!==e[0]:return"https://"+(null!=(e=c.site)?e:"")+"hackpad.com/"+t;case"ethercalc"!==e[0]:return"https://ethercalc.org/"+t;case"url"!==e[0]:return decodeURIComponent(decodeURIComponent(t));default:return""}}(),c.hashtag&&(_+=c.hashtag),_&&(_=o.trustAsResourceUrl(_)),"hackfoldr"===c.type?c:((g=a[t])?(g.src=_,g.mode=v):a[t]={src:_,doc:c,mode:v},c)},getIndex:function(t,e,n){var r,o,a=this;return c!==t||e?(r=0,o=function(){return i.get("https://www.ethercalc.org/_/"+t+"/csv").error(function(){return++r>3?void 0:setTimeout(o,1e3)}).success(function(e){return c=t,s.length=0,a.processCsv(e,n)})},o()):n(s)},processCsv:function(t,e){return this.loadCsv(t,s,l,function(t,n){return u.folderTitle=t,e(n)})},loadRemoteCsv:function(t,e){var n=this;return i.get("https://www.ethercalc.org/_/"+t+"/csv").success(function(t){var r,i;return r=[],i=[],n.loadCsv(t,r,i,function(t){return e(t,r,i)})})},loadCsv:function(e,i,o,a){function s(){try{return JSON.parse(null!=w?w:"{}")}catch(t){}}function l(){var t;switch(t=[b],!1){case void 0!==t[0]:return h||y&&(h=y,y=null),{title:y,type:"dummy",id:"dummy"};case!(T=/^\/\/(.*?)(?:\#(.*))?$/.exec(t[0])):return{type:"hackfoldr",id:T[1],tag:T[2]};case!(T=/^https?:\/\/www\.ethercalc\.(?:com|org)\/(.*)/.exec(t[0])):return{type:"ethercalc",id:T[1]};case!(T=/https:\/\/docs\.google\.com\/document\/(?:d\/)?([^\/]+)\//.exec(t[0])):return{type:"gdoc",id:T[1]};case!(T=/https:\/\/docs\.google\.com\/spreadsheet\/ccc\?key=([^\/?&]+)/.exec(t[0])):return{type:"gsheet",id:T[1]};case!(T=/https:\/\/docs\.google\.com\/drawings\/(?:d\/)?([^\/]+)\//.exec(t[0])):return{type:"gdraw",id:T[1]};case!(T=/https:\/\/docs\.google\.com\/presentation\/(?:d\/)?([^\/]+)\//.exec(t[0])):return{type:"gpresent",id:T[1]};case!(T=/https?:\/\/(\w+\.)?hackpad\.com\/(?:.*?-)?([\w]+)(\#.*)?$/.exec(t[0])):return{type:"hackpad",site:T[1],id:T[2]};case!(T=/^(https?:\/\/[^\/]+)/.exec(t[0])):return{type:"url",id:encodeURIComponent(encodeURIComponent(b)),icon:"http://g.etfv.co/"+T[1]};default:return"undefined"!=typeof console&&null!==console?console.log("unrecognized",b):void 0}}function c(t){return t.length}function u(t){var e,r,i,o,a;return e=t.match(/^(.*?)(?::(.*))?$/),r=e[0],i=e[1],o=e[2],a=n.call(e,3),{content:i,"class":null!=o?o:"warning"}}var h,p,d,f,g,m,v,_,b,y,w,x,$,k,C,E,D,M,T,P,S,O,A,F,j;for(e=r.call(e,/^\"?#.*\n/gm,""),d=[],f=0,m=(g=e.split(/\n/)).length;m>f;++f)v=g[f],v&&(_=v.split(/,/),b=_[0],y=_[1],w=_[2],x=_[3],$=_[4],k=n.call(_,5),y=r.call(y,/^"|"$/g,""),w&&(w=r.call(w,/^"|"$/g,"")),w&&(w=w.replace(/""/g,'"')),x&&(x=r.call(x,/^"|"$/g,"")),_=b.match(/^"?(\s*)(\S+?)?(#\S+?)?\s*"?$/),C=_[0],E=_[1],b=_[2],D=_[3],M=t({summary:$,hashtag:D,url:b,title:y,indent:E.length,opts:s()},l()),"dummy"!==M.type||null!=(_=M.title)&&_.length?d.push(t(t({icon:"/img/"+M.type+".png"},M),{tags:(null!=(_=null!=(P=M.opts)?P.tags:void 0)?_:[]).concat((null!=(_=null!=x?x.split(","):void 0)?_:[]).filter(c).map(u))})):d.push(null));for(p=d,i.splice.apply(i,[0,i.length].concat(n.call(p.filter(function(t){return null!=t})))),S=0,d=[],f=0,m=i.length;m>f;++f)A=f,M=i[f],A>0&&M.indent?(F=i[S],j=null!=(g=F.children)?g:F.children=[],j.push(M),d.push(null)):(S=A,d.push(M));return O=d,O=O.filter(function(t){return null!=t}),O=O.map(function(t){var e,n;return t.children&&(t.expand=null!=(e=null!=(n=t.opts)?n.expand:void 0)?e:5>t.children.length),t}),o.splice.apply(o,[0,o.length].concat(n.call(O))),a(h,i)}}})})}.call(this),function(){var t={};t.exports={BUILD:"git-1592890",FIREBASE:"https://g0vhub.firebaseio.com",GITHUB_API_PROXY:"http://utcr.org:8080",G0V_LABELS:[{color:"5CC2D6",name:"datainput",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"資料輸入"},{color:"F2800D",name:"translation",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"翻譯"},{color:"C7F53D",name:"OCR",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"OCR/圖文辨識"},{color:"F53D3D",name:"research",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"研究"},{color:"40BF40",name:"drawing",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"繪圖"},{color:"2EB88A",name:"parser",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"爬資料"},{color:"FFE14D",name:"bitesized",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"小工作"},{color:"3399CC",name:"doc",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"文件（技術）"},{color:"000000",name:"devops",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"維運"},{color:"8040BF",name:"promote",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"宣傳"},{color:"CC66CC",name:"writing",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"文案"},{color:"004C99",name:"design",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"設計"},{color:"A30000",name:"code",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"程式"},{color:"66E6FF",name:"frontend",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"前端"}],CATEGORIZATION:[{"class":"btn-primary",name:"專案類",tags:["立法院","鄉民關心你"]},{"class":"",name:"議題類",tags:["環保","農業","服貿","通訊","資訊自由"]},{"class":"btn-success",name:"專業類",tags:["法律","設計","文字","程式","新聞","行銷","廣告","繪圖","攝影"]},{"class":"btn-info",name:"特殊技能類",tags:["手沖咖啡","3D printing"]},{"class":"btn-warning",name:"以技能分類",tags:["爬資料","轉換資料"]}]},window.global||(window.global={}),window.global.config=t.exports}.call(this),function(){angular.element(document).ready(function(){return angular.bootstrap(document,["app"])})}.call(this);