(this.webpackJsonpmulava=this.webpackJsonpmulava||[]).push([[0],{155:function(e,a,t){e.exports=t(186)},185:function(e,a,t){},186:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(57),l=t.n(c),u=t(50),s=t(13),m=t(12),o=t(26),i=Object(n.createContext)(),p={mulavas:[],mulava:{},message:{}};function d(e,a){switch(a.type){case"CREATE_MULAVA":return Object(o.a)(Object(o.a)({},e),{},{mulavas:[].concat(Object(m.a)(e.mulavas),[a.payload]),message:{type:"success",title:"Success",content:"New Mulava Task created!"}});case"FETCH_MULAVAS":return Object(o.a)(Object(o.a)({},e),{},{mulavas:a.payload});case"FETCH_MULAVA":return Object(o.a)(Object(o.a)({},e),{},{mulava:a.payload});case"UPDATE_MULAVA":var t=a.payload;return Object(o.a)(Object(o.a)({},e),{},{mulavas:e.mulavas.map((function(e){return e._id===t._id?t:e})),message:{type:"success",title:"Mulava Task Updated Successful",content:'New "'.concat(t.name,'" has been updated!')}});case"DELETE_MULAVA":var n=a.payload,r=n._id,c=n.name;return Object(o.a)(Object(o.a)({},e),{},{mulavas:e.mulavas.filter((function(e){return e._id!==r})),message:{type:"success",title:"Delete Successful",content:'Mulava task  "'.concat(c,'" has been deleted!')}});case"FLASH_MESSAGE":return Object(o.a)(Object(o.a)({},e),{},{message:a.payload});default:throw new Error}}var v=function(e){var a=Object(n.useReducer)(d,p),t=Object(s.a)(a,2),c=t[0],l=t[1],u=e.children;return r.a.createElement(i.Provider,{value:[c,l]},u)},E=t(10),b=t(198),f=t(9),h=t.n(f),y=t(16),j=t(39),O=t.n(j),x=t(200),A=t(81),k=t(202),w=t(201),_=function(e){var a=e.message;return r.a.createElement(w.a,{positive:"success"===a.type,negative:"fail"===a.type,header:a.title,content:a.content})},T=function(e,a){var t=a.response?a.response.data:a;e({type:"FLASH_MESSAGE",payload:{type:"fail",title:t.name,content:t.message}})},g=r.a.useContext,M=function(e){var a=e.mulava,t=g(i),n=Object(s.a)(t,1)[0],c=function(){var e=Object(y.a)(h.a.mark((function e(a){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.delete("http://localhost:3030/mulava/".concat(a));case 3:t=e.sent,n({type:"DELETE_MULAVA",payload:t.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),T(n,e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement(x.a,null,r.a.createElement(x.a.Content,null,r.a.createElement(x.a.Header,null,r.a.createElement(A.a,{name:"user"})," ",a.name),r.a.createElement(x.a.Description,null,r.a.createElement("p",null,r.a.createElement(A.a,{name:"archive"})," ",a.description),r.a.createElement("p",null,r.a.createElement(A.a,{name:"pin"})," ",a.numberTasks),r.a.createElement("p",null,r.a.createElement(A.a,{name:"calendar alternate"})," ",a.year))),r.a.createElement(x.a.Content,{extra:!0},r.a.createElement("div",{className:"ui two buttons"},r.a.createElement(k.a,{basic:!0,color:"green",as:u.b,to:"/mulava/edit/".concat(a._id)},"Edit"),r.a.createElement(k.a,{basic:!0,color:"red",onClick:function(){return c(a._id)}},"Delete"))))},C=function(e){var a=e.mulavas;return r.a.createElement(x.a.Group,null,a.map((function(e){return r.a.createElement(M,{key:e._id,mulava:e})})))},L=function(){var e=Object(n.useContext)(i),a=Object(s.a)(e,2),t=a[0],c=a[1];return Object(n.useEffect)((function(){(function(){var e=Object(y.a)(h.a.mark((function e(){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("http://localhost:3030/mulava");case 3:a=e.sent,c({type:"FETCH_MULAVAS",payload:a.data.data||a.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),T(c,e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[c]),r.a.createElement("div",null,r.a.createElement("h1",null,"Mulava TaskList"),t.message.content&&r.a.createElement(_,{message:t.message}),r.a.createElement(C,{mulavas:t.mulavas}))},S=t(204),N=t(199),F=t(142),U=t(85),V=t.n(U),D=function(e){var a=e.mulava,t=Object(n.useContext)(i),c=Object(s.a)(t,2),l=c[0],u=c[1],m=Object(n.useState)(!1),o=Object(s.a)(m,2),p=o[0],d=o[1],v=Object(F.a)({defaultValues:a}),b=v.register,f=v.errors,j=v.handleSubmit,x=function(){var e=Object(y.a)(h.a.mark((function e(a){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.post("http://localhost:3030/mulava",a);case 3:t=e.sent,u({type:"CREATE_MULAVA",payload:t.data}),d(!0),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),T(u,e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(a){return e.apply(this,arguments)}}(),A=function(){var e=Object(y.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.patch("http://localhost:3030/mulava/".concat(a._id),t);case 3:n=e.sent,u({type:"UPDATE_MULAVA",payload:n.data}),d(!0),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),T(u,e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(a){return e.apply(this,arguments)}}(),w=function(){var e=Object(y.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a._id){e.next=5;break}return e.next=3,A(t);case 3:e.next=7;break;case 5:return e.next=7,x(t);case 7:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return p?r.a.createElement(E.a,{to:"/"}):r.a.createElement(S.a,{centered:!0,columns:2},r.a.createElement(S.a.Column,null,r.a.createElement("h1",{style:{marginTop:"1em"}},a._id?"Edit Mulava":"Add "),r.a.createElement(N.a,{onSubmit:j(w),loading:l.loading},r.a.createElement(N.a.Field,{className:V()({error:f.name})},r.a.createElement("label",{htmlFor:"name"},"Name",r.a.createElement("input",{id:"name",name:"name",type:"text",placeholder:"Name",ref:b({required:!0,minLength:2})}))),r.a.createElement(N.a.Field,{className:V()({error:f.description})},r.a.createElement("label",{htmlFor:"description"},"Description",r.a.createElement("input",{id:"description",name:"description",type:"text",placeholder:"Description",ref:b({required:!0})}))),r.a.createElement(N.a.Field,{className:V()({error:f.numberTasks})},r.a.createElement("label",{htmlFor:"numberTasks"},"Number of Tasks",r.a.createElement("input",{id:"numberTasks",name:"numberTasks",type:"text",placeholder:"numberTasks",ref:b({required:!0})}))),r.a.createElement(N.a.Field,{className:V()({error:f.year})},r.a.createElement("label",{htmlFor:"year"},"Deadline Year",r.a.createElement("input",{id:"year",name:"year",type:"text",placeholder:"year",ref:b({required:!0})}))),r.a.createElement(k.a,{primary:!0,type:"submit"},"Save"))))},H=function(e){var a=e.match,t=Object(n.useContext)(i),c=Object(s.a)(t,2),l=c[0],u=c[1],m=Object(n.useState)(!0),o=Object(s.a)(m,2),p=o[0],d=o[1];return Object(n.useEffect)((function(){var e=a.params._id;e?function(){var a=Object(y.a)(h.a.mark((function a(){var t;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,O.a.get("http://localhost:3030/mulava/".concat(e));case 3:t=a.sent,u({type:"FETCH_MULAVA",payload:t.data}),d(!1),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),T(u,a.t0);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(){return a.apply(this,arguments)}}()():d(!1)}),[a.params,u]),p?r.a.createElement("p",null,"Please wait..."):r.a.createElement("div",null,r.a.createElement(D,{mulava:l.mulava}))},q=function(){return r.a.createElement(b.a,null,r.a.createElement("div",{className:"ui two item menu"},r.a.createElement(u.c,{className:"item",activeClassName:"active",exact:!0,to:"/"},"Mulava List"),r.a.createElement(u.c,{className:"item",activeClassName:"active",exact:!0,to:"/mulava/new"},"Add Mulava")),r.a.createElement(E.b,{exact:!0,path:"/",component:L}),r.a.createElement(E.b,{path:"/mulava/new",component:H}),r.a.createElement(E.b,{path:"/mulava/edit/:_id",component:H}))};t(184),t(185);l.a.render(r.a.createElement(v,null,r.a.createElement(u.a,null,r.a.createElement(q,null))),document.getElementById("root"))}},[[155,1,2]]]);
//# sourceMappingURL=main.4fbb127e.chunk.js.map