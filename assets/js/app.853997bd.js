(function(e){function t(t){for(var a,s,u=t[0],o=t[1],d=t[2],f=0,l=[];f<u.length;f++)s=u[f],c[s]&&l.push(c[s][0]),c[s]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);i&&i(t);while(l.length)l.shift()();return r.push.apply(r,d||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,s=1;s<n.length;s++){var u=n[s];0!==c[u]&&(a=!1)}a&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},s={app:0},c={app:0},r=[];function u(e){return o.p+"assets/js/"+({}[e]||e)+"."+{"chunk-19deedd5":"8a1989be","chunk-2026f6c2":"578f36db","chunk-286567c9":"f1f4de55","chunk-2d0c5407":"9d42be3d","chunk-2d2097ac":"b631b593","chunk-39819522":"ba752547","chunk-6c98972b":"45dec0e9","chunk-bba68bf6":"634f67bf","chunk-69a8a747":"21577bec","chunk-7a6047be":"06a61581"}[e]+".js"}function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],n={"chunk-19deedd5":1,"chunk-2026f6c2":1,"chunk-286567c9":1,"chunk-39819522":1,"chunk-6c98972b":1,"chunk-bba68bf6":1,"chunk-69a8a747":1,"chunk-7a6047be":1};s[e]?t.push(s[e]):0!==s[e]&&n[e]&&t.push(s[e]=new Promise(function(t,n){for(var a="assets/css/"+({}[e]||e)+"."+{"chunk-19deedd5":"c7737cf7","chunk-2026f6c2":"821bce90","chunk-286567c9":"65a20c5f","chunk-2d0c5407":"31d6cfe0","chunk-2d2097ac":"31d6cfe0","chunk-39819522":"c03c02c0","chunk-6c98972b":"1a5fd48d","chunk-bba68bf6":"8979f207","chunk-69a8a747":"8a20c084","chunk-7a6047be":"062dd5c4"}[e]+".css",c=o.p+a,r=document.getElementsByTagName("link"),u=0;u<r.length;u++){var d=r[u],f=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(f===a||f===c))return t()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){d=l[u],f=d.getAttribute("data-href");if(f===a||f===c)return t()}var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",i.onload=t,i.onerror=function(t){var a=t&&t.target&&t.target.src||c,r=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete s[e],i.parentNode.removeChild(i),n(r)},i.href=c;var b=document.getElementsByTagName("head")[0];b.appendChild(i)}).then(function(){s[e]=0}));var a=c[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise(function(t,n){a=c[e]=[t,n]});t.push(a[2]=r);var d,f=document.createElement("script");f.charset="utf-8",f.timeout=120,o.nc&&f.setAttribute("nonce",o.nc),f.src=u(e),d=function(t){f.onerror=f.onload=null,clearTimeout(l);var n=c[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src,r=new Error("Loading chunk "+e+" failed.\n("+a+": "+s+")");r.type=a,r.request=s,n[1](r)}c[e]=void 0}};var l=setTimeout(function(){d({type:"timeout",target:f})},12e4);f.onerror=f.onload=d,document.head.appendChild(f)}return Promise.all(t)},o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],f=d.push.bind(d);d.push=t,d=d.slice();for(var l=0;l<d.length;l++)t(d[l]);var i=f;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1219:function(e,t,n){},"2b2a":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("dac5"),n("6e26"),n("9604"),n("df67"),n("9f45");var a=n("eaf6"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-locale-provider",{attrs:{locale:e.locale}},[n("div",{attrs:{id:"app"}},[n("router-view")],1)])},c=[],r=n("15b5"),u=n.n(r),o={name:"app",data:function(){return{locale:u.a}}},d=o,f=(n("5c0b"),n("17cc")),l=Object(f["a"])(d,s,c,!1,null,null,null),i=l.exports,b=n("1e6f");a["default"].use(b["a"]);var j=new b["a"]({routes:[{path:"/login",meta:{title:"登录界面"},component:function(){return Promise.all([n.e("chunk-bba68bf6"),n.e("chunk-69a8a747")]).then(n.bind(null,"0866"))}},{path:"/login2",meta:{title:"登录界面"},component:function(){return Promise.all([n.e("chunk-bba68bf6"),n.e("chunk-7a6047be")]).then(n.bind(null,"4894"))}},{path:"/",component:function(){return n.e("chunk-2026f6c2").then(n.bind(null,"25d6"))},redirect:"/table",children:[{path:"table",meta:{title:"综合表格展示"},component:function(){return n.e("chunk-6c98972b").then(n.bind(null,"fdd1"))}},{path:"konva",meta:{title:"绘图"},component:function(){return n.e("chunk-19deedd5").then(n.bind(null,"93e2"))}},{path:"fontawesome",meta:{title:"FontAwesome"},component:function(){return n.e("chunk-286567c9").then(n.bind(null,"be0a"))}},{path:"elementUI",meta:{title:"饿了么UI"},component:function(){return n.e("chunk-39819522").then(n.bind(null,"b35c"))}},{path:"testMenu1",meta:{title:"testMenu1"},component:function(){return n.e("chunk-2d0c5407").then(n.bind(null,"3dff"))}},{path:"testMenu2",meta:{title:"testMenu2"},component:function(){return n.e("chunk-2d2097ac").then(n.bind(null,"a8dc"))}}]}]});j.beforeEach(function(e,t,n){document.title=e.meta.title,"/login"==e.path||$cookies.get("token")?n():n("/login")});var h=j,m=n("591a");a["default"].use(m["a"]);var p=!1,k=new m["a"].Store({state:{isCollapse:!1,selectedMenu:null},mutations:{collapse:function(e){e.isCollapse=!e.isCollapse},selectedMenu:function(e,t){e.selectedMenu=t}},strict:p}),v=n("2427"),g=n.n(v),y=(n("facc"),n("fddc")),w=n.n(y),z=1;z&&(w.a.mock(/login/,{id:"@string(30)","userName|1":["张三","李四","王五","路人甲","路人乙","路人丙","路人丁"],msg:"success",status:"YQ-000"}),w.a.mock(/getMenu/,{data:{menu:[{name:"综合表格",router:"/table",icon:"table",children:[]},{name:"绘图",router:"/konva",icon:"gateway",children:[]},{name:"FontAwesome",router:"/fontawesome",icon:"crown",children:[]},{name:"饿了么UI",router:"/elementUI",icon:"ie",children:[]},{name:"报警测试",router:"/alarm",icon:"bell",children:[]},{name:"导航测试",key:"menuTest",icon:"experiment",children:[{name:"导航测试1",router:"/testMenu1",icon:"experiment"},{name:"导航测试2",router:"/testMenu2",icon:"experiment"}]}]},msg:"Success",status:"YQ-000"}));var M=n("be52"),x={uuid:function(){for(var e=[],t="0123456789abcdef",n=0;n<36;n++)e[n]=t.substr(Math.floor(16*Math.random()),1);return e[14]="4",e[19]=t.substr(3&e[19]|8,1),e[8]=e[13]=e[18]=e[23]="-",e.join("")},sleep:function(e){return new Promise(function(t){return setTimeout(t,e)})}},O=n("e1a6"),S=n("2f02"),_=n("d0a4");O["c"].add(_["a"]),a["default"].component("font-awesome-icon",S["a"]);var E=n("8820"),P=n("7c76"),T=n("c3a5"),C=n("2558"),A=n("cbf1"),N=n("4a27"),U=n("68ea"),$=n("25e7"),I=n("49a9"),L=n("5d0f"),q=n("9084"),D=n("9a68"),F=n("44ab"),B=n("d12c"),G=n("927e"),J=n("dd28");n("1219");a["default"].use(E["a"]),a["default"].use(P["a"]),a["default"].use(T["a"]),a["default"].use(C["a"]),a["default"].use(A["a"]),a["default"].use(N["a"]),a["default"].use(U["a"]),a["default"].use($["a"]),a["default"].use(I["a"]),a["default"].use(L["a"]),a["default"].use(q["a"]),a["default"].use(D["a"]),a["default"].use(F["a"]),a["default"].use(B["a"]),a["default"].use(G["a"]),a["default"].use(J["a"]);n("f7b3"),n("ab12");var Q=n("6161"),Y=n.n(Q),H=(n("864c"),n("fb24")),K=n.n(H),R=(n("ba60"),n("7714")),V=n.n(R),W=(n("936d"),n("5f4d")),X=n.n(W),Z=(n("eec9"),n("d22e")),ee=n.n(Z);n("e9ff");a["default"].use(ee.a),a["default"].use(X.a),a["default"].use(V.a),a["default"].prototype.$confirm=K.a.confirm,a["default"].prototype.$message=Y.a,a["default"].use(M["a"]),a["default"].prototype.$axios=g.a,a["default"].config.productionTip=!1,a["default"].prototype.common=x,new a["default"]({store:k,router:h,render:function(e){return e(i)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var a=n("2b2a"),s=n.n(a);s.a},"77d2":function(e,t,n){var a={"./af":"fbac","./af.js":"fbac","./ar":"f96f","./ar-dz":"e63c","./ar-dz.js":"e63c","./ar-kw":"b7bd","./ar-kw.js":"b7bd","./ar-ly":"968f","./ar-ly.js":"968f","./ar-ma":"9f9d","./ar-ma.js":"9f9d","./ar-sa":"aea5","./ar-sa.js":"aea5","./ar-tn":"d44b","./ar-tn.js":"d44b","./ar.js":"f96f","./az":"c7ed","./az.js":"c7ed","./be":"5a28","./be.js":"5a28","./bg":"1251","./bg.js":"1251","./bm":"2809","./bm.js":"2809","./bn":"b4fc","./bn.js":"b4fc","./bo":"5484","./bo.js":"5484","./br":"5adc","./br.js":"5adc","./bs":"ac10","./bs.js":"ac10","./ca":"e381","./ca.js":"e381","./cs":"aef2","./cs.js":"aef2","./cv":"6566","./cv.js":"6566","./cy":"1390","./cy.js":"1390","./da":"1ece","./da.js":"1ece","./de":"5f10","./de-at":"09c4","./de-at.js":"09c4","./de-ch":"89a2","./de-ch.js":"89a2","./de.js":"5f10","./dv":"e662","./dv.js":"e662","./el":"196b","./el.js":"196b","./en-SG":"0a32","./en-SG.js":"0a32","./en-au":"94ed","./en-au.js":"94ed","./en-ca":"2806","./en-ca.js":"2806","./en-gb":"b0dd","./en-gb.js":"b0dd","./en-ie":"7a6e","./en-ie.js":"7a6e","./en-il":"1f0f","./en-il.js":"1f0f","./en-nz":"1606","./en-nz.js":"1606","./eo":"f214","./eo.js":"f214","./es":"7d58","./es-do":"737b","./es-do.js":"737b","./es-us":"a894","./es-us.js":"a894","./es.js":"7d58","./et":"a888","./et.js":"a888","./eu":"1357","./eu.js":"1357","./fa":"0a48","./fa.js":"0a48","./fi":"c2b1","./fi.js":"c2b1","./fo":"52c4","./fo.js":"52c4","./fr":"04e6","./fr-ca":"6ad1","./fr-ca.js":"6ad1","./fr-ch":"b12f","./fr-ch.js":"b12f","./fr.js":"04e6","./fy":"ad13","./fy.js":"ad13","./ga":"369e","./ga.js":"369e","./gd":"22de","./gd.js":"22de","./gl":"f808","./gl.js":"f808","./gom-latn":"50d5","./gom-latn.js":"50d5","./gu":"e67a","./gu.js":"e67a","./he":"037c","./he.js":"037c","./hi":"3d53","./hi.js":"3d53","./hr":"678b","./hr.js":"678b","./hu":"1783","./hu.js":"1783","./hy-am":"2873","./hy-am.js":"2873","./id":"de99","./id.js":"de99","./is":"6aa2","./is.js":"6aa2","./it":"1f93","./it-ch":"2db9","./it-ch.js":"2db9","./it.js":"1f93","./ja":"6bf8","./ja.js":"6bf8","./jv":"6e55","./jv.js":"6e55","./ka":"e65f","./ka.js":"e65f","./kk":"7167","./kk.js":"7167","./km":"4668","./km.js":"4668","./kn":"e3d2","./kn.js":"e3d2","./ko":"b058","./ko.js":"b058","./ku":"017e","./ku.js":"017e","./ky":"b2bd","./ky.js":"b2bd","./lb":"e50c","./lb.js":"e50c","./lo":"ca14","./lo.js":"ca14","./lt":"3e84","./lt.js":"3e84","./lv":"ce1d","./lv.js":"ce1d","./me":"9d38","./me.js":"9d38","./mi":"3e2e","./mi.js":"3e2e","./mk":"d532","./mk.js":"d532","./ml":"db61","./ml.js":"db61","./mn":"7493","./mn.js":"7493","./mr":"52d8","./mr.js":"52d8","./ms":"b559","./ms-my":"7462","./ms-my.js":"7462","./ms.js":"b559","./mt":"c055","./mt.js":"c055","./my":"49e0","./my.js":"49e0","./nb":"eb1c","./nb.js":"eb1c","./ne":"0acb","./ne.js":"0acb","./nl":"7497","./nl-be":"3114","./nl-be.js":"3114","./nl.js":"7497","./nn":"9a9c","./nn.js":"9a9c","./pa-in":"c595","./pa-in.js":"c595","./pl":"801c","./pl.js":"801c","./pt":"5b08","./pt-br":"155f","./pt-br.js":"155f","./pt.js":"5b08","./ro":"05fc","./ro.js":"05fc","./ru":"90b3","./ru.js":"90b3","./sd":"99bf","./sd.js":"99bf","./se":"20d6","./se.js":"20d6","./si":"7c0b","./si.js":"7c0b","./sk":"90fc","./sk.js":"90fc","./sl":"871b","./sl.js":"871b","./sq":"b045","./sq.js":"b045","./sr":"ac81","./sr-cyrl":"a2d0","./sr-cyrl.js":"a2d0","./sr.js":"ac81","./ss":"b093","./ss.js":"b093","./sv":"12e5","./sv.js":"12e5","./sw":"38a0","./sw.js":"38a0","./ta":"a462","./ta.js":"a462","./te":"18cb","./te.js":"18cb","./tet":"0c11","./tet.js":"0c11","./tg":"d707","./tg.js":"d707","./th":"883f","./th.js":"883f","./tl-ph":"6cc0","./tl-ph.js":"6cc0","./tlh":"ab53","./tlh.js":"ab53","./tr":"e523","./tr.js":"e523","./tzl":"b192","./tzl.js":"b192","./tzm":"5604","./tzm-latn":"9f95","./tzm-latn.js":"9f95","./tzm.js":"5604","./ug-cn":"9f4f","./ug-cn.js":"9f4f","./uk":"8bd6","./uk.js":"8bd6","./ur":"9a78","./ur.js":"9a78","./uz":"4d4c","./uz-latn":"da73","./uz-latn.js":"da73","./uz.js":"4d4c","./vi":"b766","./vi.js":"b766","./x-pseudo":"2a69","./x-pseudo.js":"2a69","./yo":"fd2e","./yo.js":"fd2e","./zh-cn":"35d0","./zh-cn.js":"35d0","./zh-hk":"7b45","./zh-hk.js":"7b45","./zh-tw":"fa66","./zh-tw.js":"fa66"};function s(e){var t=c(e);return n(t)}function c(e){var t=a[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}s.keys=function(){return Object.keys(a)},s.resolve=c,e.exports=s,s.id="77d2"},e9ff:function(e,t,n){}});