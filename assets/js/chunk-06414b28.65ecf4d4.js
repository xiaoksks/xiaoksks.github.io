(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-06414b28"],{"0866":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"bg"},[r("div",{staticClass:"login-wrap animated flipInY"},[r("h3",[e._v("欢迎使用自动化登月系统")]),r("a-form",{attrs:{form:e.form},on:{submit:e.login}},[r("a-form-item",[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:e.decorator.userName,expression:"decorator.userName"}],attrs:{placeholder:"用户名"}},[r("a-icon",{staticStyle:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"user"},slot:"prefix"})],1)],1),r("a-form-item",[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:e.decorator.password,expression:"decorator.password"}],attrs:{type:"password",placeholder:"密码"}},[r("a-icon",{attrs:{slot:"prefix",type:"lock",tyle:"color: rgba(0,0,0,.25)"},slot:"prefix"})],1)],1),r("a-form-item",[r("a-checkbox",{directives:[{name:"decorator",rawName:"v-decorator",value:["remember",{valuePropName:"checked",initialValue:!0}],expression:"['remember',{valuePropName: 'checked',initialValue: true,}]"}]},[e._v("\n                    记住密码\n                ")]),r("a",{attrs:{href:""},on:{click:function(t){return t.preventDefault(),e.openMsg(t)}}},[e._v("\n                    忘记密码\n                ")]),r("a-button",{attrs:{type:"primary","html-type":"submit"}},[e._v("\n                    登录\n                ")])],1)],1)],1),r("vue-particles",{attrs:{color:"#fff",particleOpacity:.7,particlesNumber:30,shapeType:"star",particleSize:5,linesColor:"#fff",linesWidth:2,lineLinked:!0,lineOpacity:.4,linesDistance:150,moveSpeed:3,hoverEffect:!0,hoverMode:"grab",clickEffect:!0,clickMode:"push"}})],1)},o=[],s={name:"Login",data:function(){return{decorator:{userName:["userName",{rules:[{required:!0,message:"请输入用户名!"}]}],password:["password",{rules:[{required:!0,message:"请输入密码!"}]}]}}},beforeCreate:function(){this.form=this.$form.createForm(this)},methods:{login:function(e){var t=this;e.preventDefault(),this.form.validateFields(function(e,r){e||t.$axios({url:"/login",method:"POST",data:{userName:r.userName,password:r.password}}).then(function(e){if("success"!=e.data.msg)return alert("用户名或密码错误！"),!1;$cookies.set("token",e.data.id,0),$cookies.set("userName",e.data.userName,0),t.getMenu()})})},getMenu:function(){var e=this;this.$axios({url:"getMenu",method:"GET"}).then(function(t){var r=t.data.data.menu;$cookies.set("menu",JSON.stringify(r),0),e.$router.push("/table")})},openMsg:function(){this.$message.warning("你咋不忘记自己的名字？")}}},i=s,n=(r("0c4a"),r("50be"),r("17cc")),c=Object(n["a"])(i,a,o,!1,null,null,null);t["default"]=c.exports},"0c4a":function(e,t,r){"use strict";var a=r("39fe"),o=r.n(a);o.a},"39fe":function(e,t,r){},"50be":function(e,t,r){"use strict";var a=r("b431"),o=r.n(a);o.a},b431:function(e,t,r){}}]);