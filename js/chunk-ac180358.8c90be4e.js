(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ac180358"],{1305:function(e,t,s){e.exports=s.p+"img/login-img.b79e577f.png"},4006:function(e,t,s){"use strict";var a=s("52bc"),r=s.n(a);r.a},"52bc":function(e,t,s){},"66c0":function(e,t,s){"use strict";var a=s("c0c8"),r=s.n(a);r.a},"73fe":function(e,t,s){e.exports=s.p+"img/create-account.0de83603.svg"},c0c8:function(e,t,s){},dd7b:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"login"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[e.isSignUp?a("createAccount"):e._e(),e.isSignUp?e._e():a("form",{staticClass:"form-signin",on:{submit:function(t){return t.preventDefault(),e.login(t)}}},[a("img",{staticClass:"mb-4",attrs:{src:s("1305"),alt:"",width:"72",height:"72"}}),a("h1",{staticClass:"h3 mb-3 font-weight-normal"},[e._v("Please sign in")]),a("label",{staticClass:"sr-only",attrs:{for:"email"}},[e._v("Email address")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",id:"email",placeholder:"Email address",required:"",autocomplete:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),a("label",{staticClass:"sr-only",attrs:{for:"password"}},[e._v("Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",id:"password",placeholder:"Password",required:"",autocomplete:"current-password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),e._m(0),a("button",{staticClass:"btn btn-lg btn-primary btn-block",attrs:{type:"submit"}},[e.showLoader?a("i",{staticClass:"fa fa-spinner fa-spin mr-1"}):e._e(),e._v(" Log In\n        ")])]),a("p",{staticClass:"mt-3 text-muted"},[e.isSignUp?a("span",[e._v("\n          Already a member?\n          "),a("a",{attrs:{href:"javascript:;;"},on:{click:e.toggleForm}},[e._v("Sign in")])]):e._e(),e.isSignUp?e._e():a("span",[e._v("\n          New to ikismail?\n          "),a("a",{attrs:{href:"javascript:;;"},on:{click:e.toggleForm}},[e._v("Create an Account")])])])],1)])])},r=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",{staticClass:"text-muted"},[s("a",{attrs:{href:"javascript:;;"}},[e._v("Forget password ?")])])}],i=(s("8e6e"),s("ac6a"),s("456d"),s("ade3")),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"create-account"},[a("form",{staticClass:"form-signup",on:{submit:function(t){return t.preventDefault(),e.createAccount(t)}}},[a("img",{staticClass:"mb-4",attrs:{src:s("73fe"),alt:"",width:"72",height:"72"}}),a("h1",{staticClass:"h3 mb-3 font-weight-normal"},[e._v("Create an account")]),e._l(e.errorMessage,(function(t,s){return a("div",{key:s,staticClass:"alert alert-danger",attrs:{role:"alert"}},[e._v(e._s(t))])})),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6 mb-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.firstName,expression:"user.firstName"}],staticClass:"form-control",attrs:{type:"text",id:"firstName",placeholder:"First Name",required:""},domProps:{value:e.user.firstName},on:{input:function(t){t.target.composing||e.$set(e.user,"firstName",t.target.value)}}}),a("div",{staticClass:"invalid-feedback"},[e._v("Valid first name is required.")])]),a("div",{staticClass:"col-md-6 mb-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.lastName,expression:"user.lastName"}],staticClass:"form-control",attrs:{type:"text",id:"lastName",placeholder:"Last Name",value:"",required:""},domProps:{value:e.user.lastName},on:{input:function(t){t.target.composing||e.$set(e.user,"lastName",t.target.value)}}}),a("div",{staticClass:"invalid-feedback"},[e._v("Valid last name is required.")])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md mb-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"}],staticClass:"form-control",attrs:{type:"text",id:"emailId",placeholder:"Email address",value:"",required:""},domProps:{value:e.user.email},on:{input:function(t){t.target.composing||e.$set(e.user,"email",t.target.value)}}}),a("div",{staticClass:"invalid-feedback"},[e._v("Valid first name is required.")])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md mb-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"text",id:"act-password",placeholder:"New password",value:"",required:""},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}}),a("div",{staticClass:"invalid-feedback"},[e._v("Valid first name is required.")])])]),a("button",{staticClass:"btn btn-lg btn-primary btn-block",attrs:{type:"submit"}},[e.showLoader?a("i",{staticClass:"fa fa-spinner fa-spin mr-1"}):e._e(),e._v("Sign Up\n    ")])],2)])},n=[],l=s("bc3a"),c=s.n(l),u=s("6b22"),d={name:"CreateAccount",data:function(){return{showLoader:!1,user:{firstName:"",lastName:"",email:"",password:""},errorMessage:[]}},methods:{createAccount:function(e){var t=this;this.showLoader=!0,this.errorMessage=[],this.user.firstName.length<5&&this.errorMessage.push("FirstName should contains more than 5 character"),!1===this.ValidateEmail(this.user.email)&&this.errorMessage.push("Please provide a valid Email address"),0===this.errorMessage.length&&c.a.post("".concat("https://vue-shop-cart.herokuapp.com/api","/users"),this.user).then((function(e){t.showLoader=!1,Object(u["c"])("Registered Successfully","User Registered Successfully")})).catch((function(e){console.log(e),Object(u["a"])("Registeration Failed","Please try again after sometime")}))},ValidateEmail:function(e){return!!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)}}},m=d,p=(s("4006"),s("2877")),v=Object(p["a"])(m,o,n,!1,null,null,null),f=v.exports,g=(s("794f"),s("2f62"));function h(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,a)}return s}function w(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?h(Object(s),!0).forEach((function(t){Object(i["a"])(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):h(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var b={name:"login",components:{CreateAccount:f},data:function(){return{email:"",password:"",showLoader:!1,isSignUp:!1}},methods:w(w({toggleForm:function(){this.isSignUp=!this.isSignUp}},Object(g["b"])(["ADD_LOGGED_USER"])),{},{login:function(e){var t=this;this.showLoader=!0;var s={email:this.email,password:this.password};c.a.post("".concat("https://vue-shop-cart.herokuapp.com/api","/login"),s).then((function(s){t.showLoader=!1,t.ADD_LOGGED_USER(s.data[0]),e.target.reset(),t.$router.push(t.$route.query.from||"/")})).catch((function(e){t.showLoader=!1,Object(u["a"])("Invalid Credentials",""),console.log(e)}))}})},C=b,_=(s("66c0"),Object(p["a"])(C,a,r,!1,null,null,null));t["default"]=_.exports}}]);
//# sourceMappingURL=chunk-ac180358.8c90be4e.js.map