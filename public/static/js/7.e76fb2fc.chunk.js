(this["webpackJsonpjimm-red"]=this["webpackJsonpjimm-red"]||[]).push([[7],{724:function(e,t,c){"use strict";c.d(t,"a",(function(){return n}));var a=c(0);function n(){var e=Object(a.useRef)(!0);return Object(a.useEffect)((function(){return function(){e.current=!1}}),[]),e}},758:function(e,t,c){"use strict";c.r(t);var a=c(12),n=c(0),r=c(673),s=c(688),i=c(718),j=c(40),o=c.n(j),l=c(29),b=c(724),d=c(5),O=c(14),u=c(6),h=c(676),x=c(382),f=c(2),m=Object(r.a)((function(e){return{root:{}}}));var p=function(e){var t=e.className,c=Object(O.a)(e,["className"]),a=m();return Object(f.jsx)(h.a,Object(d.a)(Object(d.a)({container:!0,spacing:3,justify:"space-between",className:Object(u.a)(a.root,t)},c),{},{children:Object(f.jsx)(h.a,{item:!0,children:Object(f.jsx)(x.a,{variant:"h3",color:"textPrimary",children:"All Events"})})}))},v=c(91),g=c.n(v),Y=c(726),y=c.n(Y),w=c(682),N=c(677),P=c(702),S=c(385),D=c(751),M=c(752),C=c(746),k=c(747),E=c(753),I=c(756),J=c(750);var L=Object(r.a)((function(e){return{root:{},queryField:{width:500}}}));var T=function(e){var t=e.events,c=L(),r=g()(new Date).format("MM/DD/YYYY"),s=Object(n.useState)(0),j=Object(a.a)(s,2),o=j[0],l=j[1],b=Object(n.useState)(10),d=Object(a.a)(b,2),O=d[0],u=d[1],h=Object(n.useState)(""),m=Object(a.a)(h,2),p=m[0],v=m[1],Y=function(e,t){return e.filter((function(e){var c=!0;return t&&!e.name.toLowerCase().includes(t.toLowerCase())&&(c=!1),c}))}(t,p),T=function(e,t,c){return e.slice(t*c,t*c+c)}(Y,o,O);return Object(f.jsxs)(w.a,{className:c.root,children:[Object(f.jsx)(i.a,{p:2,children:Object(f.jsx)(i.a,{display:"flex",alignItems:"center",children:Object(f.jsx)(N.a,{className:c.queryField,InputProps:{startAdornment:Object(f.jsx)(P.a,{position:"start",children:Object(f.jsx)(S.a,{fontSize:"small",color:"action",children:Object(f.jsx)(J.a,{})})})},onChange:function(e){e.persist(),v(e.target.value)},placeholder:"Search by Name",value:p})})}),Object(f.jsx)(y.a,{children:Object(f.jsxs)(i.a,{minWidth:1200,children:[Object(f.jsxs)(D.a,{children:[Object(f.jsx)(M.a,{children:Object(f.jsxs)(C.a,{children:[Object(f.jsx)(k.a,{padding:"checkbox"}),Object(f.jsx)(k.a,{children:"Customer"}),Object(f.jsx)(k.a,{children:"Date"}),Object(f.jsx)(k.a,{children:"Time"}),Object(f.jsx)(k.a,{children:"Type of Service"}),Object(f.jsx)(k.a,{children:"Subject"}),Object(f.jsx)(k.a,{children:"Message"})]})}),Object(f.jsx)(E.a,{children:T.map((function(e){return Object(f.jsxs)(C.a,{hover:!0,children:[Object(f.jsx)(k.a,{children:Object(f.jsxs)(x.a,{variant:"body1",children:["#",e.id]})}),Object(f.jsx)(k.a,{children:Object(f.jsx)(i.a,{display:"flex",alignItems:"center",children:Object(f.jsxs)("div",{children:[Object(f.jsx)(x.a,{variant:"h5",children:e.name}),Object(f.jsx)(x.a,{variant:"body2",children:e.email})]})})}),r>g()(e.date,"dddd MMM Do, YYYY").format("MM/DD/YYYY")?Object(f.jsx)(k.a,{className:c.pastDate,children:e.date}):Object(f.jsx)(k.a,{children:e.date}),Object(f.jsx)(k.a,{children:g()(e.time,"hh:mm:ss").format("hh:mm a")}),Object(f.jsx)(k.a,{children:e.service}),Object(f.jsx)(k.a,{children:e.subject}),Object(f.jsx)(k.a,{children:e.message})]},e.id)}))})]}),Object(f.jsx)(I.a,{component:"div",count:Y.length,onChangePage:function(e,t){l(t)},onChangeRowsPerPage:function(e){u(e.target.value)},page:o,rowsPerPage:O,rowsPerPageOptions:[5,10,25]})]})})]})},q=Object(r.a)((function(e){return{root:{minHeight:"100%",paddingTop:e.spacing(5),paddingBottom:e.spacing(5)},container:{padding:0}}}));t.default=function(){var e=q(),t=Object(b.a)(),c=Object(n.useState)(null),r=Object(a.a)(c,2),j=r[0],d=r[1],O=Object(n.useCallback)((function(){o.a.get("/api/v1/events.json").then((function(e){if(t.current){var c=e.data;d(c)}}))}),[t]);return Object(n.useEffect)((function(){O()}),[O,JSON.stringify(j)]),j?Object(f.jsx)(l.a,{className:e.root,title:"Events List",children:Object(f.jsxs)(s.a,{className:e.container,children:[Object(f.jsx)(p,{}),Object(f.jsx)(i.a,{mt:3,children:Object(f.jsx)(T,{events:j})})]})}):null}}}]);
//# sourceMappingURL=7.e76fb2fc.chunk.js.map