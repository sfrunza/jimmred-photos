(this["webpackJsonpjimm-red"]=this["webpackJsonpjimm-red"]||[]).push([[8],{755:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(673),i=a(688),r=a(718),s=a(29),o=a(10),j=a(676),l=a(382),b=a(33),d=a.n(b),u=a(47),h=a(76),O=a(12),x=a(44),m=a(27),p=a(682),g=a(677),f=a(660),v=a(5),y=a(14),w=a(6),C=a(743),k=a(739),S=a(680),N=a(659),P=a(661),B=a(708),F=a(745),z=a(740),I=a.n(z),A=a(711),G=a(2),M=Object(c.a)((function(e){return{root:{},dropZone:{border:"1px dashed ".concat(e.palette.divider),padding:e.spacing(6),outline:"none",display:"flex",justifyContent:"center",flexWrap:"wrap",alignItems:"center","&:hover":{backgroundColor:e.palette.action.hover,opacity:.5,cursor:"pointer"}},dragActive:{backgroundColor:e.palette.action.active,opacity:.5},image:{width:130},info:{marginTop:e.spacing(1)},list:{maxHeight:320},actions:{marginTop:e.spacing(2),display:"flex",justifyContent:"flex-end","& > * + *":{marginLeft:e.spacing(2)}},button:{width:"100%"},buttonBox:{width:"100%"}}}));var L=function(e){var t=e.className,a=e.setFieldValue,c=e.handleSubmit,i=e.text,s=Object(y.a)(e,["className","setFieldValue","handleSubmit","text"]),o=M(),j=Object(n.useState)([]),l=Object(O.a)(j,2),b=l[0],h=l[1],x=Object(n.useCallback)((function(e){!function(e){m.apply(this,arguments)}(e)}),[]);function m(){return(m=Object(u.a)(d.a.mark((function e(t){var n,c,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t[0],c={maxSizeMB:1,maxWidthOrHeight:1920,useWebWorker:!0},e.prev=2,e.next=5,Object(k.a)(n,c);case 5:i=e.sent,Object.assign(i,{path:n.path}),h(i),a("image",i),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[2,11]])})))).apply(this,arguments)}var p=function(){h([])},g=Object(C.a)({onDrop:x}),f=g.getRootProps,z=g.getInputProps;return Object(G.jsxs)("div",Object(v.a)(Object(v.a)({className:Object(w.a)(o.root,t)},s),{},{children:[Object(G.jsxs)(S.a,Object(v.a)(Object(v.a)({className:o.button,variant:"outlined",color:"primary"},f()),{},{children:[Object(G.jsx)("input",Object(v.a)({},z())),Object(G.jsxs)(r.a,{display:"flex",alignItems:"center",className:o.buttonBox,children:[Object(G.jsx)(r.a,{display:"flex",children:Object(G.jsx)(A.a,{})}),Object(G.jsx)(r.a,{flexGrow:1,children:i})]})]})),void 0!==b.name&&Object(G.jsx)(G.Fragment,{children:Object(G.jsx)("div",{children:Object(G.jsxs)(N.a,{className:o.list,children:[Object(G.jsxs)(P.a,{disableGutters:!0,children:[Object(G.jsx)(B.a,{children:Object(G.jsx)(I.a,{})}),Object(G.jsx)(F.a,{primary:b.name,primaryTypographyProps:{variant:"body1"},secondary:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(0===e)return"0 Bytes";var a=1024,n=t<0?0:t,c=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],i=Math.floor(Math.log(e)/Math.log(a));return"".concat(parseFloat((e/Math.pow(a,i)).toFixed(n))," ").concat(c[i])}(b.size)})]}),Object(G.jsx)(P.a,{disableGutters:!0,children:Object(G.jsxs)("div",{className:o.actions,children:[Object(G.jsx)(S.a,{onClick:p,size:"small",children:"Remove"}),Object(G.jsx)(S.a,{color:"primary",size:"small",variant:"contained",disableElevation:!0,onClick:function(){c(),p()},children:"Upload"})]})})]})})})]}))},T=a(355),V=a(102),W=a(21),q=Object(c.a)((function(e){return{root:{},card:Object(o.a)({backgroundColor:"transparent",boxShadow:"none",display:"flex",justifyContent:"center"},e.breakpoints.down("xs"),{flexDirection:"column"}),buttonCamera:{width:"100%"},cardItem:{width:"100%"}}}));var D=function(e){e.setImages,e.images;var t=e.text,a=q(),n=Object(T.b)().enqueueSnackbar,c=Object(W.b)(),i=Object(O.a)(c,2);Object(h.a)(i[0]);var s=i[1];return Object(G.jsx)(m.a,{initialValues:{image:null,name:"",price:"",likes:1},validationSchema:x.a().shape({}),onSubmit:function(){var e=Object(u.a)(d.a.mark((function e(t,a){var c,i,r,o,j;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=a.setErrors,i=a.setStatus,r=a.setSubmitting,o=a.resetForm;try{(j=new FormData).append("image",t.image),j.append("name",t.name),j.append("price",t.price),j.append("likes",t.likes),Object(V.a)(s,j,t),o({}),i({success:!0}),r(!1),n("Image Added",{variant:"success",anchorOrigin:{vertical:"top",horizontal:"right"}})}catch(l){c({submit:l.message}),i({success:!1}),r(!1)}case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),children:function(e){var n=e.errors,c=(e.handleBlur,e.handleChange),i=e.handleSubmit,s=(e.isSubmitting,e.setFieldValue),o=(e.touched,e.values);return console.log(o),Object(G.jsxs)("form",{onSubmit:i,className:a.root,children:[Object(G.jsx)(j.a,{className:a.buttonCamera,children:Object(G.jsx)(p.a,{className:a.card,children:Object(G.jsxs)(j.a,{container:!0,display:"flex",spacing:2,alignItems:"flex-end",children:[Object(G.jsx)(j.a,{item:!0,xs:12,md:4,children:Object(G.jsx)(g.a,{id:"name",name:"name",label:"Name",type:"text",size:"small",value:o.name,onChange:c})}),Object(G.jsx)(j.a,{item:!0,xs:12,md:4,children:Object(G.jsx)(g.a,{id:"price",name:"price",label:"Price",type:"number",size:"small",value:o.price,onChange:c})}),Object(G.jsx)(j.a,{item:!0,xs:6,md:3,children:Object(G.jsx)(L,{setFieldValue:s,handleSubmit:i,text:t})})]})})}),n.submit&&Object(G.jsx)(r.a,{mt:3,children:Object(G.jsx)(f.a,{error:!0,children:n.submit})})]})}})},E=Object(c.a)((function(e){return{root:{},box:Object(o.a)({width:"100%",display:"flex",justifyContent:"space-between"},e.breakpoints.down("sm"),{flexDirection:"column"})}}));var H=function(){var e=E();return Object(G.jsx)(j.a,{className:e.root,container:!0,justify:"space-between",spacing:3,children:Object(G.jsxs)(j.a,{item:!0,className:e.box,children:[Object(G.jsx)(l.a,{variant:"h3",color:"textPrimary",children:"All Photos"}),Object(G.jsx)(r.a,{flexGrow:.5,children:Object(G.jsx)(D,{text:"Add photo"})})]})})},R=a(726),J=a.n(R),Z=a(702),K=a(385),U=a(751),Y=a(752),Q=a(746),X=a(747),$=a(753),_=a(756),ee=a(750),te=a(698),ae=a(748),ne=a(749),ce=Object(c.a)((function(e){return{root:{},queryField:{width:500},image:{height:110,width:"auto",objectFit:"contain"}}})),ie=function(e){var t=e.photo,a=ce(),c=Object(W.b)(),i=Object(O.a)(c,2);Object(h.a)(i[0]);var r=i[1],s=Object(n.useState)(""),o=Object(O.a)(s,2),j=o[0],b=o[1],d=Object(n.useState)(""),u=Object(O.a)(d,2),x=u[0],m=u[1];Object(n.useEffect)((function(){b(t.name),m(t.price)}),[t]);return Object(G.jsxs)(Q.a,{hover:!0,children:[Object(G.jsx)(X.a,{children:Object(G.jsxs)(l.a,{variant:"body1",children:[t.id,"."]})}),Object(G.jsx)(X.a,{children:Object(G.jsx)("img",{src:t.image.url,alt:t.name,className:a.image})}),Object(G.jsx)(X.a,{children:Object(G.jsx)(g.a,{name:"name",value:j,onChange:function(e){b(e.target.value)}})}),Object(G.jsx)(X.a,{children:Object(G.jsx)(g.a,{name:"price",value:x,onChange:function(e){m(e.target.value)}})}),Object(G.jsx)(X.a,{children:t.likes}),Object(G.jsxs)(X.a,{align:"right",children:[Object(G.jsx)(te.a,{onClick:function(){return Object(V.b)(r,Object(v.a)(Object(v.a)({},t),{},{name:j,price:x}),t.id)},disabled:t.name===j&&t.price===x,children:Object(G.jsx)(K.a,{fontSize:"inherit",children:Object(G.jsx)(ae.a,{color:t.name!==j||t.price!==x?"#4baf4f ":"gray"})})}),Object(G.jsx)(te.a,{onClick:function(){return e=t.id,void Object(V.d)(r,e);var e},children:Object(G.jsx)(K.a,{fontSize:"inherit",children:Object(G.jsx)(ne.a,{color:"red"})})})]}),Object(G.jsx)(X.a,{})]},t.id)};var re=Object(c.a)((function(e){return{root:{},queryField:{width:500}}}));var se=function(){var e=re(),t=Object(n.useState)(0),a=Object(O.a)(t,2),c=a[0],i=a[1],s=Object(n.useState)(10),o=Object(O.a)(s,2),j=o[0],l=o[1],b=Object(n.useState)(""),d=Object(O.a)(b,2),u=d[0],h=d[1],x=Object(W.b)(),m=function(e,t){return e.filter((function(e){var a=!0;return t&&!e.name.toLowerCase().includes(t.toLowerCase())&&(a=!1),a}))}(Object(O.a)(x,1)[0].photos,u),f=function(e,t,a){return e.slice(t*a,t*a+a)}(m,c,j);return Object(G.jsxs)(p.a,{className:e.root,children:[Object(G.jsxs)(r.a,{p:2,minHeight:56,display:"flex",alignItems:"center",children:[Object(G.jsx)(g.a,{className:e.queryField,InputProps:{startAdornment:Object(G.jsx)(Z.a,{position:"start",children:Object(G.jsx)(K.a,{fontSize:"small",color:"action",children:Object(G.jsx)(ee.a,{})})})},onChange:function(e){e.persist(),h(e.target.value)},placeholder:"Search by Name",value:u}),Object(G.jsx)(r.a,{flexGrow:1})]}),Object(G.jsx)(J.a,{children:Object(G.jsx)(r.a,{minWidth:800,children:Object(G.jsxs)(U.a,{children:[Object(G.jsx)(Y.a,{children:Object(G.jsxs)(Q.a,{children:[Object(G.jsx)(X.a,{padding:"checkbox"}),Object(G.jsx)(X.a,{children:"Photo"}),Object(G.jsx)(X.a,{children:"Name"}),Object(G.jsx)(X.a,{children:"Price"}),Object(G.jsx)(X.a,{children:"Likes"}),Object(G.jsx)(X.a,{align:"right",children:"Actions"})]})}),Object(G.jsx)($.a,{children:f.map((function(e,t){return Object(G.jsx)(ie,{photo:e},t)}))})]})})}),Object(G.jsx)(_.a,{component:"div",count:m.length,onChangePage:function(e,t){i(t)},onChangeRowsPerPage:function(e){l(e.target.value)},page:c,rowsPerPage:j,rowsPerPageOptions:[5,10,25]})]})},oe=Object(c.a)((function(e){return{root:{minHeight:"100%",paddingTop:e.spacing(5),paddingBottom:e.spacing(5)},container:{padding:0}}}));t.default=function(){var e=oe();return Object(G.jsx)(s.a,{className:e.root,title:"Photos List",children:Object(G.jsxs)(i.a,{className:e.container,children:[Object(G.jsx)(H,{}),Object(G.jsx)(r.a,{mt:3,children:Object(G.jsx)(se,{})})]})})}}}]);
//# sourceMappingURL=8.63886cea.chunk.js.map