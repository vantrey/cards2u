(this.webpackJsonpcards2u=this.webpackJsonpcards2u||[]).push([[0],{18:function(e,t,r){e.exports={registration:"Registration_registration__s9QAt",registration__form:"Registration_registration__form__T7uRR Registration_registration__s9QAt",registration__form_errorMessage:"Registration_registration__form_errorMessage__2sn_e",registration__form_button:"Registration_registration__form_button__jk4yV"}},22:function(e,t,r){e.exports={input:"Input_input__PjJpN",error:"Input_error__1V4z7",errorMessage:"Input_errorMessage__3Yjh0"}},30:function(e,t,r){e.exports={button:"Button_button__8_dvB",buttonTitle:"Button_buttonTitle__37DFa"}},34:function(e,t,r){e.exports={test:"Test_test__2_mrJ",links:"Test_links__1AIGB"}},44:function(e,t,r){e.exports={main:"Main_main__XAxiK"}},45:function(e,t,r){e.exports={header:"Header_header__2shZ-"}},46:function(e,t,r){e.exports={login:"Login_login__25czE"}},47:function(e,t,r){e.exports={restorePsw:"RestorePsw_restorePsw__gqnRE"}},48:function(e,t,r){e.exports={newPsw:"NewPsw_newPsw__2xCNg"}},49:function(e,t,r){e.exports={profile:"Profile_profile__3SUdA"}},55:function(e,t,r){e.exports={active:"Link_active__3EZTi"}},58:function(e,t,r){e.exports=r(87)},63:function(e,t,r){},64:function(e,t,r){},87:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),s=r(24),i=r.n(s),o=(r(63),r(64),r(44)),c=r.n(o),l=r(45),u=r.n(l),m=function(){return a.a.createElement("div",{className:u.a.header},"header")},p=r(2),_=r(46),g=r.n(_),d=function(){return a.a.createElement("div",{className:g.a.login},"LOGIN")},f=r(47),E=r.n(f),h=function(){return a.a.createElement("div",{className:E.a.restorePsw},"RESTORE PSW")},v=r(48),b=r.n(v),w=function(){return a.a.createElement("div",{className:b.a.newPsw},"NEW PSW")},S=r(49),R=r.n(S),N=function(){return a.a.createElement("div",{className:R.a.profile},"PROFILE")},O=r(57),T=r(21),j=r(1),I=r.n(j),x=r(4),y=r(8),P=r(51),C=r.n(P).a.create({baseURL:"https://cards-nya-back.herokuapp.com/1.0"}),M=function(e,t){return C.post("/auth/register",{email:e,password:t})},k={isSuccess:!1,errorServerMessage:"",isFetching:!1},A=function(e,t){return{type:"REGISTRATION_REDUCER/CREATE_USER_SUCCESS",isSuccess:e,errorServerMessage:t}},F=function(e){return{type:"REGISTRATION_REDUCER/IS_FETCHING",isFetching:e}},U=r(16),G=r(18),B=r.n(G),D=r(22),L=r.n(D),W=function(e){var t=e.register,r=e.errors,n=e.name,s=Object(U.a)(e,["register","errors","name"]),i=r[n]?"".concat(L.a.input," ").concat(L.a.error):L.a.input;return a.a.createElement(a.a.Fragment,null,a.a.createElement("input",Object.assign({ref:t},s,{name:n,className:i})),r[n]&&a.a.createElement("span",{className:L.a.errorMessage},r[n].message))},J=r(30),q=r.n(J),H=function(e){var t=Object.assign({},e);return a.a.createElement("button",{className:q.a.button},a.a.createElement("span",{className:q.a.buttonTitle},t.tittle))},z=function(e){var t=e.onSubmit,r=e.register,n=Object(U.a)(e,["onSubmit","register"]);return a.a.createElement("div",null,a.a.createElement("form",{onSubmit:t,className:B.a.registration__form},a.a.createElement(W,Object.assign({register:r,name:"email"},n,{placeholder:"email"})),a.a.createElement(W,Object.assign({register:r,type:"password",name:"password"},n,{placeholder:"password"})),a.a.createElement(W,Object.assign({register:r,type:"password",name:"passwordConfirmation"},n,{placeholder:"confirm password"})),a.a.createElement("div",{className:B.a.registration__form_button},a.a.createElement(H,{tittle:"sign up free"}))))},Q=function(e){var t=e.isFetching,r=e.errorServerMessage,n=Object(U.a)(e,["isFetching","errorServerMessage"]);return a.a.createElement("div",{className:B.a.registration},a.a.createElement(z,n),t&&a.a.createElement("span",null,"...LOADING"),r&&a.a.createElement("div",{className:B.a.registration__form_errorMessage},r))},V=r(19),Z=V.a().shape({email:V.c().required("\u26a0 please, fill up your email").email("\u26a0 please, fill up a valid email address"),password:V.c().required("\u26a0 please, fill up your password").min(8,"password has to be at least ".concat(8," characters long.")),passwordConfirmation:V.c().oneOf([V.b("password"),void 0],"password mismatch")}),K=function(){var e=Object(T.c)((function(e){return e.registration})),t=e.isSuccess,r=e.errorServerMessage,n=e.isFetching,s=Object(T.b)(),i=Object(O.a)({mode:"onBlur",validationSchema:Z}),o=i.register,c=i.handleSubmit,l=i.errors,u=i.reset,m=c((function(e){var t,r;s((t=e.email,r=e.password,function(){var e=Object(x.a)(I.a.mark((function e(n){var a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n(F(!0)),e.next=4,M(t,r);case 4:a=e.sent,console.log(a),n(A(a.data.success,"")),n(F(!1)),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(0),n(A(!1,e.t0.response.data.error)),n(F(!1)),console.log(Object(y.a)({},e.t0));case 15:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}())),u()}));return t?a.a.createElement(p.a,{to:Y}):a.a.createElement(Q,{errorServerMessage:r,register:o,errors:l,onSubmit:m,isFetching:n})},X=function(){return a.a.createElement(K,null)},Y="/login",$="/registration",ee="/restorePsw",te="/newPsw",re="/profile",ne=function(){return a.a.createElement("div",null,a.a.createElement(p.b,{path:Y,render:function(){return a.a.createElement(d,null)}}),a.a.createElement(p.b,{path:$,render:function(){return a.a.createElement(X,null)}}),a.a.createElement(p.b,{path:ee,render:function(){return a.a.createElement(h,null)}}),a.a.createElement(p.b,{path:te,render:function(){return a.a.createElement(w,null)}}),a.a.createElement(p.b,{path:re,render:function(){return a.a.createElement(N,null)}}))},ae=r(34),se=r.n(ae),ie=r(55),oe=r.n(ie),ce=r(14),le=function(e){return a.a.createElement(ce.b,{to:e.path,activeClassName:oe.a.active},e.title)},ue=function(){var e=[{title:"login",path:Y},{title:"registration",path:$},{title:"restore password",path:ee},{title:"new password",path:te},{title:"profile",path:re}].map((function(e){return a.a.createElement(le,{key:e.title,title:e.title,path:e.path})}));return a.a.createElement("div",{className:se.a.test},a.a.createElement("h1",null,"TEST"),a.a.createElement("div",{className:se.a.links},e))},me=function(){return a.a.createElement("div",{className:c.a.header},a.a.createElement(m,null),a.a.createElement(ue,null),a.a.createElement(ne,null))},pe=r(17),_e=r(56),ge={},de={},fe={},Ee={},he=Object(pe.c)({login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;return t.type,e},registration:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REGISTRATION_REDUCER/CREATE_USER_SUCCESS":return Object(y.a)({},e,{isSuccess:t.isSuccess,errorServerMessage:t.errorServerMessage});case"REGISTRATION_REDUCER/IS_FETCHING":return Object(y.a)({},e,{isFetching:t.isFetching});default:return e}},restorePsw:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;return t.type,e},newPsw:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;return t.type,e},profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0;return t.type,e}}),ve=Object(pe.d)(he,Object(pe.a)(_e.a)),be=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(T.a,{store:ve},a.a.createElement(ce.a,null,a.a.createElement(me,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(be,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[58,1,2]]]);
//# sourceMappingURL=main.3857e969.chunk.js.map