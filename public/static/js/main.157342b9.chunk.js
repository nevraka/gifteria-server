(this["webpackJsonpgifteria-client"]=this["webpackJsonpgifteria-client"]||[]).push([[0],{125:function(e,t,a){},126:function(e,t,a){},127:function(e,t,a){},128:function(e,t,a){},129:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(31),s=a.n(r),i=(a(99),a(8)),o=a(14),j=a(17),d=a.n(j),l=a(21),b=a(168),u=a(164),x=a(167),O=a(170),h=a(173),m=a(174),p=a(172),g=a(78),f=a(171),v=a(16),y=a(22),w=a.n(y),C="https://gifteria.herokuapp.com/api",k=a(1),N=Object(g.a)();var S=function(e){var t=Object(o.f)(),a=function(){var e=Object(l.a)(d.a.mark((function e(a){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),c={name:a.target.name.value,surname:a.target.surname.value,address:a.target.address.value,email:a.target.email.value,password:a.target.password.value},e.next=4,w.a.post("".concat(C,"/signup"),c,{withCredentials:!0});case 4:t("/signin");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(k.jsx)(f.a,{theme:N,children:Object(k.jsxs)(p.a,{component:"main",maxWidth:"xs",children:[Object(k.jsx)(u.a,{}),Object(k.jsxs)(h.a,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(k.jsx)(m.a,{component:"h1",variant:"h5",children:"Sign Up"}),Object(k.jsxs)(h.a,{component:"form",onSubmit:a,noValidate:!0,sx:{mt:1},children:[Object(k.jsx)(x.a,{margin:"normal",required:!0,fullWidth:!0,id:"name",label:"Name",name:"name",autoFocus:!0}),Object(k.jsx)(x.a,{margin:"normal",required:!0,fullWidth:!0,id:"surname",label:"Surname",name:"surname",autoFocus:!0}),Object(k.jsx)(x.a,{margin:"normal",required:!0,fullWidth:!0,name:"address",label:"Address",type:"address",id:"address"}),Object(k.jsx)(x.a,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email"}),Object(k.jsx)(x.a,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password"}),Object(k.jsx)(b.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},style:{backgroundColor:"black"},children:"Sign Up"}),Object(k.jsx)(O.a,{container:!0,children:Object(k.jsx)(O.a,{item:!0,children:Object(k.jsx)(v.b,{to:"/signin",children:"Already have an account? Sign In instead"})})})]})]})]})})},D=Object(c.createContext)(),A=function(e){var t=e.children,a=Object(c.useState)([]),n=Object(i.a)(a,2),r=n[0],s=n[1],o=Object(c.useState)(!0),j=Object(i.a)(o,2),b=(j[0],j[1]),u=Object(c.useState)(null),x=Object(i.a)(u,2),O=x[0],h=x[1];return Object(c.useEffect)((function(){var e=function(){var e=Object(l.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("".concat(C,"/categories"),{withCredentials:!0});case 2:t=e.sent,s(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(c.useEffect)((function(){var e=function(){var e=Object(l.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.get("".concat(C,"/user"),{withCredentials:!0});case 3:t=e.sent,b(!1),h(t.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),b(!1);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(k.jsx)(D.Provider,{value:{categories:r,setCategories:s,user:O,setUser:h},children:t})},I=Object(g.a)(),T=function(e){var t=e.setMyError,a=Object(o.f)(),n=Object(c.useContext)(D).setUser,r=function(){var e=Object(l.a)(d.a.mark((function e(a){var c,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,c={email:a.target.email.value,password:a.target.password.value},e.next=5,w.a.post("".concat(C,"/signin"),c,{withCredentials:!0});case 5:r=e.sent,n(r.data),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0.response),t(e.t0.response.data.error);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return a("/"),Object(k.jsx)(f.a,{theme:I,children:Object(k.jsxs)(p.a,{component:"main",maxWidth:"xs",children:[Object(k.jsx)(u.a,{}),Object(k.jsxs)(h.a,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(k.jsx)(m.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(k.jsxs)(h.a,{component:"form",onSubmit:r,noValidate:!0,sx:{mt:1},children:[Object(k.jsx)(x.a,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoFocus:!0}),Object(k.jsx)(x.a,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password"}),Object(k.jsx)(b.a,{type:"submit",fullWidth:!0,variant:"contained",style:{backgroundColor:"black"},sx:{mt:3,mb:2},children:"Sign In"}),Object(k.jsx)(O.a,{container:!0,children:Object(k.jsx)(O.a,{item:!0,children:Object(k.jsx)(v.b,{to:"/signup",children:"Don't have an account? Sign Up"})})})]})]})]})})},W=a(3),E=(a(75),a(34)),U=a(5),P=function(){var e=Object(c.useContext)(D).categories,t=Object(U.a)(b.a)((function(e){var t;return t={color:e.theme.palette.getContrastText(E.a[500]),backgroundColor:E.a[500]},Object(W.a)(t,"color","white"),Object(W.a)(t,"&:hover",{backgroundColor:E.a[700]}),Object(W.a)(t,"padding","10px"),Object(W.a)(t,"marginTop","5px"),t}));return Object(k.jsxs)("div",{style:{padding:20},children:[Object(k.jsx)("h1",{className:"title",children:"Gift Ideas for the week"}),Object(k.jsx)(O.a,{container:!0,spacing:2,children:e&&e.map((function(e,a){return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)(O.a,{item:!0,xs:6,order:a%2===0?2*a:2*a+1,children:[Object(k.jsx)("div",{className:"name",children:e.name}),Object(k.jsx)("div",{className:"desc",children:e.description}),Object(k.jsx)(v.b,{to:"/category/".concat(e._id),style:{textDecorationLine:"none"},children:Object(k.jsx)(t,{children:"Check It Out"})})]}),Object(k.jsx)(O.a,{item:!0,xs:6,order:a%2===0?2*a+1:2*a,children:Object(k.jsx)("div",{children:Object(k.jsx)("img",{className:"category-image",src:e.image,alt:"cat"})})})]})}))})]})},q=(a(125),function(){var e=Object(c.useContext)(D),t=e.user,a=e.setUser,n=Object(o.f)(),r=function(){var e=Object(l.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.post("".concat(C,"/signout"),{},{withCredentials:!0});case 2:a(null),n("/");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(k.jsxs)("div",{children:[Object(k.jsxs)("nav",{id:"nav",children:[Object(k.jsx)(v.b,{to:"/",children:Object(k.jsx)("img",{src:"/image/logo.png",height:"60px",alt:"logo"})}),Object(k.jsx)("div",{className:"b-name",children:"Gifteria"}),Object(k.jsxs)("div",{children:[Object(k.jsx)("div",{children:Object(k.jsx)(v.b,{style:{textDecoration:"none",paddingRight:"10px"},to:"/cart",children:t?"".concat(t.name,"'s Cart"):"Cart"})}),t?Object(k.jsx)(v.b,{style:{textDecoration:"none"},to:"/",children:Object(k.jsx)("div",{onClick:r,variant:"text",style:{padding:"0"},children:"Logout"})}):Object(k.jsx)(k.Fragment,{children:Object(k.jsx)("div",{children:Object(k.jsx)(v.b,{style:{textDecoration:"none"},to:"/signin",children:"Login"})})})]})]}),Object(k.jsx)("hr",{}),Object(k.jsx)("hr",{})]})}),F=(a(126),function(){return Object(k.jsxs)("div",{className:"footer-lay",children:[Object(k.jsx)("hr",{}),Object(k.jsx)("hr",{}),Object(k.jsxs)("div",{className:"ab-img",children:[Object(k.jsx)(v.b,{to:"/",children:Object(k.jsx)("img",{src:"/image/logo.png",height:"60px",alt:"logo"})}),Object(k.jsxs)("div",{className:"about-us",children:["About Us",Object(k.jsx)("div",{children:"Gifteria is your go-to for gifting. You can create personalized and custom gift boxes or choose from a prepacked box for friends and family."})]})]}),Object(k.jsxs)("div",{className:"madeby",children:["Made by\xa0",Object(k.jsx)("a",{href:"https://www.linkedin.com/in/nevrakaya/",target:"_blank rel=''",children:"Nevra"})]})]})}),M=function(){var e=Object(c.useContext)(D),t=e.user,a=e.setUser,n=Object(c.useState)([]),r=Object(i.a)(n,2);r[0],r[1];return Object(c.useEffect)((function(){var e=function(){var e=Object(l.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.post("".concat(C,"/upload"),{},{withCredentials:!0});case 2:t=e.sent,a(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(k.jsxs)("div",{children:[Object(k.jsx)("div",{children:"This is Cart"}),Object(k.jsx)("div",{children:t&&t.name}),Object(k.jsx)("div",{children:"My Gifts"}),Object(k.jsxs)("form",{method:"POST",action:"/upload",enctype:"multipart/form-data",children:[Object(k.jsx)("input",{type:"file",name:"imageUrl",accept:"image/png, image/jpg"}),Object(k.jsx)("button",{class:"addImg",type:"submit",children:"UPLOAD"})]})]})},_=(a(127),a(39)),G=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),a=t[0],n=t[1],r=Object(c.useContext)(D).categories,s=Object(o.g)().categoryId;Object(c.useEffect)((function(){var e=function(){var e=Object(l.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s?"products?category=".concat(s):"products",e.next=3,w.a.get("".concat(C,"/").concat(t),{withCredentials:!0});case 3:a=e.sent,n(a.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[s]);var j=r.find((function(e){return e._id===s})),u=Object(U.a)(b.a)((function(e){var t;return t={color:e.theme.palette.getContrastText(_.a[500]),backgroundColor:_.a[500]},Object(W.a)(t,"color","white"),Object(W.a)(t,"&:hover",{backgroundColor:_.a[700]}),Object(W.a)(t,"borderRadius","10px"),Object(W.a)(t,"padding","10px"),Object(W.a)(t,"marginTop","5px"),t}));return Object(k.jsxs)("div",{children:[Object(k.jsx)(v.b,{to:"/",style:{textDecoration:"none"},children:Object(k.jsxs)("strong",{className:"category-name",children:[Object(k.jsx)("img",{src:"/image/arrow.png",alt:"arr",className:"arrow"}),"Home Page"]})}),Object(k.jsx)("h1",{className:"title",children:"Our Products"}),Object(k.jsx)(O.a,{container:!0,spacing:2,children:j&&Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(O.a,{item:!0,xs:6,children:Object(k.jsxs)("h1",{className:"pname",children:[j.name,Object(k.jsx)("div",{className:"desc",children:j.description})]})}),Object(k.jsx)(O.a,{item:!0,xs:6,children:Object(k.jsx)("div",{children:Object(k.jsx)("img",{className:"category-image",src:j.image,alt:"cat",style:{height:"400px",width:"700px"}})})})]})}),Object(k.jsx)(O.a,{container:!0,spacing:2,children:a&&a.map((function(e){return Object(k.jsx)(O.a,{item:!0,xs:12,md:6,lg:4,className:"section",children:Object(k.jsxs)("div",{className:"each-product",children:[Object(k.jsx)("img",{className:"category-image",src:e.image,alt:"cat"}),Object(k.jsx)(v.b,{to:"/product/".concat(e._id),style:{textDecoration:"none"},children:Object(k.jsx)("h3",{style:{cursor:"pointer"},children:e.name})}),Object(k.jsx)("div",{children:e.description}),Object(k.jsxs)("div",{children:["Price : $",e.price]}),Object(k.jsx)(u,{children:"Add to cart"})]})})}))})]})},L=(a(128),a(33)),R=function(e){var t=e.handleAddToCart,a=Object(c.useState)({}),n=Object(i.a)(a,2),r=n[0],s=n[1],j=Object(o.g)().productId;Object(c.useEffect)((function(){var e=function(){var e=Object(l.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("".concat(C,"/products/").concat(j),{withCredentials:!0});case 2:t=e.sent,s(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[j]);var u=Object(U.a)(b.a)((function(e){var t;return t={color:e.theme.palette.getContrastText(L.a[500])},Object(W.a)(t,"color","white"),Object(W.a)(t,"backgroundColor",L.a[500]),Object(W.a)(t,"&:hover",{backgroundColor:L.a[700]}),Object(W.a)(t,"borderRadius","10px"),Object(W.a)(t,"padding","10px"),Object(W.a)(t,"marginTop","5px"),t}));return Object(k.jsxs)("div",{children:[Object(k.jsx)(v.b,{to:"/category/".concat(r.category&&r.category._id),style:{textDecoration:"none"},children:Object(k.jsxs)("strong",{className:"category-name",children:[Object(k.jsx)("img",{src:"/image/arrow.png",alt:"arr",className:"arrow"}),r.category&&r.category.name]})}),Object(k.jsx)("h1",{className:"title",children:r.name}),Object(k.jsx)("div",{children:Object(k.jsxs)("div",{className:"home",children:[Object(k.jsx)("img",{className:"category-image",src:r.image,alt:"cat",style:{height:"400px",width:"600px"}}),Object(k.jsx)("div",{className:"detai-price",children:r.description}),Object(k.jsxs)("div",{className:"detai-price",children:["Price : $",r.price]}),Object(k.jsx)(u,{onClick:t,children:"Add to cart"})]})})]})};var J=function(){var e=Object(c.useContext)(D).user,t=Object(o.f)(),a=Object(c.useState)(null),n=Object(i.a)(a,2),r=(n[0],n[1]),s=function(){t(e?"/cart":"/signup")};return Object(k.jsxs)("div",{className:"App",children:[Object(k.jsx)(q,{}),Object(k.jsxs)(o.c,{children:[Object(k.jsx)(o.a,{path:"/cart",element:Object(k.jsx)(M,{})}),Object(k.jsx)(o.a,{path:"/signin",element:Object(k.jsx)(T,{setMyError:r})}),Object(k.jsx)(o.a,{path:"/signup",element:Object(k.jsx)(S,{})}),Object(k.jsx)(o.a,{path:"/products",element:Object(k.jsx)(G,{})}),Object(k.jsx)(o.a,{path:"/category/:categoryId",element:Object(k.jsx)(G,{handleAddToCart:s})}),Object(k.jsx)(o.a,{path:"/product/:productId",element:Object(k.jsx)(R,{handleAddToCart:s})}),Object(k.jsx)(o.a,{path:"/",element:Object(k.jsx)(P,{})})]}),Object(k.jsx)(F,{})]})};s.a.render(Object(k.jsx)(n.a.StrictMode,{children:Object(k.jsx)(v.a,{children:Object(k.jsx)(A,{children:Object(k.jsx)(J,{})})})}),document.getElementById("root"))},75:function(e,t,a){},99:function(e,t,a){}},[[129,1,2]]]);
//# sourceMappingURL=main.157342b9.chunk.js.map