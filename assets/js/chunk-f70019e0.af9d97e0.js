(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f70019e0"],{"25d6":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-layout",[n("Menu",{attrs:{collapsed:e.collapsed,selectedMenu:e.selectedMenu},on:{"update:selectedMenu":function(t){e.selectedMenu=t},"update:selected-menu":function(t){e.selectedMenu=t}}}),n("a-layout",[n("Header",{attrs:{collapsed:e.collapsed,selectedMenu:e.selectedMenu},on:{"update:collapsed":function(t){e.collapsed=t}}}),n("a-layout-content",{style:{margin:"24px 16px",minHeight:"280px",padding:"24px",background:"#fff"}},[n("router-view")],1),n("a-layout-footer",{staticStyle:{textAlign:"center","font-size":"18px",padding:"0 50px 16px 50px"}},[e._v("\n            On The Moon ©2019 自动化登月科技有限公司\n        ")])],1)],1)},o=[],c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-layout-header",{staticStyle:{background:"#fff",padding:"0"}},[a("a-icon",{staticClass:"trigger",attrs:{type:e.collapsed?"menu-unfold":"menu-fold"},on:{click:e.trigger}}),a("a-breadcrumb",{staticClass:"breadcrumb"},[a("a-breadcrumb-item",[a("a-icon",{attrs:{type:"home"}}),a("span",[e._v("首页")])],1),null!=e.selectedMenu&&null!=e.selectedMenu.parent?a("a-breadcrumb-item",[a("a-icon",{attrs:{type:e.selectedMenu.parent.icon}}),a("span",[e._v(e._s(e.selectedMenu.parent.title))])],1):e._e(),null!=e.selectedMenu?a("a-breadcrumb-item",[a("a-icon",{attrs:{type:e.selectedMenu.icon}}),a("span",[e._v(e._s(e.selectedMenu.title))])],1):e._e()],1),a("div",{staticClass:"header"},[a("a-dropdown",[a("a",[a("a-avatar",{attrs:{size:50,src:n("de37")}}),a("span",[e._v(e._s(e.userName))])],1),a("a-menu",{staticStyle:{top:"25px",width:"150px"},attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",{key:"1",on:{click:e.logout}},[a("a-icon",{attrs:{type:"logout"}}),e._v("\n                    退出\n                ")],1)],1)],1)],1)],1)},l=[],s={props:["collapsed","selectedMenu"],data:function(){return{userName:localStorage.userName||""}},methods:{trigger:function(){this.$emit("update:collapsed",!this.collapsed)},logout:function(){delete localStorage.token,this.$router.push("/login")}}},u=s,i=(n("d019"),n("17cc")),r=Object(i["a"])(u,c,l,!1,null,"0b549808",null),d=r.exports,p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-layout-sider",{attrs:{width:"220px",trigger:null,collapsible:""},model:{value:e.collapsed,callback:function(t){e.collapsed=t},expression:"collapsed"}},[a("h3",{staticClass:"logo"},[a("img",{attrs:{src:n("caa1")}}),a("span",[e._v(e._s(e.logoText))])]),a("a-menu",{attrs:{theme:"dark",mode:"inline",defaultSelectedKeys:[e.$route.path]},on:{select:e.selectMenu}},[e._l(e.menu,function(t){return[0!==t.children.length?a("a-sub-menu",[a("template",{slot:"title"},[a("a-icon",{staticStyle:{"font-size":"16px"},attrs:{type:t.icon}}),a("span",[e._v(e._s(t.name))])],1),e._l(t.children,function(t){return a("a-menu-item",{key:t.router,on:{click:function(n){return e.skip(t.router)}}},[a("a-icon",{staticStyle:{"font-size":"16px"},attrs:{type:t.icon}}),a("span",[e._v(e._s(t.name))])],1)})],2):a("a-menu-item",{key:t.router,on:{click:function(n){return e.skip(t.router)}}},[a("a-icon",{staticStyle:{"font-size":"16px"},attrs:{type:t.icon}}),a("span",[e._v(e._s(t.name))])],1)]})],2)],1)},f=[],h=(n("7364"),"On The Moon"),m={props:["collapsed","selectedMenu"],data:function(){return{logoText:h,menu:localStorage.menu?JSON.parse(localStorage.menu):[]}},methods:{skip:function(e){this.$router.push(e)},selectMenu:function(e){this.changeSelectedMenu(e.key)},changeSelectedMenu:function(e){for(var t=this.menu,n=0;n<t.length;n++)if(0==t[n].children.length){if(this.menu[n].router==e)return void this.$emit("update:selectedMenu",{icon:this.menu[n].icon,title:this.menu[n].name})}else for(var a=0;a<t[n].children.length;a++)if(this.menu[n].children[a].router==e)return void this.$emit("update:selectedMenu",{icon:this.menu[n].children[a].icon,title:this.menu[n].children[a].name,parent:{icon:this.menu[n].icon,title:this.menu[n].name}})}},created:function(){this.changeSelectedMenu(this.$route.path)},watch:{collapsed:{handler:function(e,t){var n=this;e?this.logoText="":this.common.sleep(200).then(function(){n.logoText=h})}}}},g=m,A=(n("8940"),Object(i["a"])(g,p,f,!1,null,"3a9c70e3",null)),y=A.exports,v={data:function(){return{collapsed:!1,selectedMenu:null}},components:{Header:d,Menu:y}},M=v,x=Object(i["a"])(M,a,o,!1,null,null,null);t["default"]=x.exports},3024:function(e,t,n){},"4fc0":function(e,t,n){},7364:function(e,t,n){var a=n("ddf7").f,o=Function.prototype,c=/^\s*function ([^ (]*)/,l="name";l in o||n("dad2")&&a(o,l,{configurable:!0,get:function(){try{return(""+this).match(c)[1]}catch(e){return""}}})},8940:function(e,t,n){"use strict";var a=n("4fc0"),o=n.n(a);o.a},caa1:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADTklEQVRYR+1WTUwTQRR+b7doQYqQmKhBQxHxqFWJ3mT3IHbDQUw8GVH0wsUonk1rbePZnxsXg2g8mYiJplUTu+1NgtrqTUUh2qjRBAoIBbo7Zpaszmy3tCs1eHAu27558+Z7P997g7DKC1f5fvh3AEjRiIQiIWxEZhPfNf3FhMjKFvNaNvXkTsoucr6Dx3xVLnE9uyfsadBq2jdwNuh+vCOYoN9fEZCikQFEOMke1ufy2Zn+94iIdaw8T4TmVGxgjJX5/D1eF+ofWBkhZKq2dxsRql0cKELgpqoEeiwAQl5EkXrGKc89/JzIv5tp5zwmRB2J3ZJZWZvSrQIgp+faXpuo7tzMnwXIEqL5VCVkOMDVgBSNhBDhojW8U9ffZpBAIw9Cl0dit1Uqa/MflwCFOOc9QqbubCt/BgAIgUuqEgiZujyAeKgec2IKEJpYYwuvJ5/NP/22nw8vjD2PDTZT2V6lewwBuTPuzk3pqu2eXTxoGCduzafKoUlbAFQoPYp0IYF71ijM9I+mSU7nDOpAzlM9AfAKq49uIV3b28JfTr1HOKIeCgxxunbVLEfDKiCfT21i4dPs4PgWLgoAhicIUM/Ka040ZcSGNZaUkURcCUrW+2z7gPT4sg91/aVV+cfdj0k9kztgB9qUCY3u5LqjWwt0iCDsVjsuFNC3aCNyQkvz8nJoV1YEjFqgBTkvUqpwtJyNf01qr6ZsoyDurEvWyBute1myVvOyhVeyBkwFR7QU4Y3nTOsOq4dW2pUdAVNRjkbGrLRcHJ1O5R588bHGitEurgS8y9VMyWFkzAgErslQg9M3RodhWt9nGPcIw57TLUu/mUUIyKoSMJpVsVUSAD1YipZOaOc4BUZBRo05wQ0aKqdzgn5t+j0QojWb/X7FETBAxCJXEeAca4xOS/q/YNoBXFP9gb7lLjb3ykqBAaAILW0uWZZ2f5QC85AUC/ehpe8XFh45pSrBgXK8pzplR8A0KMfCKQAsGDRL+yQd9wc5epYC4hhAMVoa15dBuxWlgEnFEAIeZo0RIPdVf7CrlMeVAWBDy3JpVxEAS73h9/OtVL+vSB+wGjFoSZ9vNPeWZ5aTNDguQta4FA0bT2sntKtYCpx4+VdS8B9ApSLwE/alXDBE1ZatAAAAAElFTkSuQmCC"},d019:function(e,t,n){"use strict";var a=n("3024"),o=n.n(a);o.a},de37:function(e,t,n){e.exports=n.p+"assets/img/user.146a6e3c.jpg"}}]);