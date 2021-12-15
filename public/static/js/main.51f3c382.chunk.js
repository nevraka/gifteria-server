(this["webpackJsonpgifteria-client"]=this["webpackJsonpgifteria-client"]||[]).push([[0],{102:function(e,t,a){},128:function(e,t,a){},129:function(e,t,a){},130:function(e,t,a){},131:function(e,t,a){},132:function(e,t,a){},133:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(31),s=a.n(c),i=(a(102),a(16)),o=a.n(i),d=a(20),l=a(10),j=a(14),u=a(174),b=a(170),x=a(173),h=a(177),m=a(180),p=a(181),O=a(179),g=a(81),f=a(178),v=a(17),y=a(21),w=a.n(y),k="https://gifteria.herokuapp.com/api",C=a(1),N=Object(g.a)();var S=function(){var e=Object(j.f)(),t=function(){var t=Object(d.a)(o.a.mark((function t(a){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n={name:a.target.name.value,surname:a.target.surname.value,address:a.target.address.value,email:a.target.email.value,password:a.target.password.value},t.next=4,w.a.post("".concat(k,"/signup"),n,{withCredentials:!0});case 4:e("/signin");case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(C.jsx)(f.a,{theme:N,children:Object(C.jsxs)(O.a,{component:"main",maxWidth:"xs",children:[Object(C.jsx)(b.a,{}),Object(C.jsxs)(m.a,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(C.jsx)(p.a,{component:"h1",variant:"h5",children:"Sign Up"}),Object(C.jsxs)(m.a,{component:"form",onSubmit:t,noValidate:!0,sx:{mt:1},children:[Object(C.jsx)(x.a,{margin:"normal",required:!0,fullWidth:!0,id:"name",label:"Name",name:"name",autoFocus:!0}),Object(C.jsx)(x.a,{margin:"normal",required:!0,fullWidth:!0,id:"surname",label:"Surname",name:"surname",autoFocus:!0}),Object(C.jsx)(x.a,{margin:"normal",required:!0,fullWidth:!0,name:"address",label:"Address",type:"address",id:"address"}),Object(C.jsx)(x.a,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email"}),Object(C.jsx)(x.a,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password"}),Object(C.jsx)(u.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},style:{backgroundColor:"black"},children:"Sign Up"}),Object(C.jsx)(h.a,{container:!0,children:Object(C.jsx)(h.a,{item:!0,children:Object(C.jsx)(v.b,{to:"/signin",children:"Already have an account? Sign In instead"})})})]})]})]})})},E=Object(n.createContext)(),q=function(e){var t=e.children,a=Object(n.useState)([]),r=Object(l.a)(a,2),c=r[0],s=r[1],i=Object(n.useState)(null),j=Object(l.a)(i,2),u=j[0],b=j[1],x=Object(n.useState)([]),h=Object(l.a)(x,2),m=h[0],p=h[1];return Object(n.useEffect)((function(){var e=function(){var e=Object(d.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("".concat(k,"/categories"),{withCredentials:!0});case 2:t=e.sent,s(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(C.jsx)(E.Provider,{value:{categories:c,setCategories:s,user:u,setUser:b,cart:m,setCart:p},children:t})},D=Object(g.a)(),I=function(e){var t=e.myError,a=e.setMyError,r=Object(j.f)(),c=Object(n.useContext)(E).setUser,s=function(){var e=Object(d.a)(o.a.mark((function e(t){var n,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,n={email:t.target.email.value,password:t.target.password.value},e.next=5,w.a.post("".concat(k,"/signin"),n,{withCredentials:!0});case 5:s=e.sent,c(s.data),r("/"),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0.response),a(e.t0.response.data.error);case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(C.jsx)(f.a,{theme:D,children:Object(C.jsxs)(O.a,{component:"main",maxWidth:"xs",children:[Object(C.jsx)(b.a,{}),Object(C.jsxs)(m.a,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(C.jsx)(p.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(C.jsxs)(m.a,{component:"form",onSubmit:s,noValidate:!0,sx:{mt:1},children:[Object(C.jsx)(x.a,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoFocus:!0}),Object(C.jsx)(x.a,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",helperText:t||"",error:!!t}),Object(C.jsx)(u.a,{type:"submit",fullWidth:!0,variant:"contained",style:{backgroundColor:"black"},sx:{mt:3,mb:2},children:"Sign In"}),Object(C.jsx)(h.a,{container:!0,children:Object(C.jsx)(h.a,{item:!0,children:Object(C.jsx)(v.b,{to:"/signup",children:"Don't have an account? Sign Up"})})})]})]})]})})},W=(a(76),a(34)),A=a(5),T=function(){var e=Object(n.useContext)(E).categories,t=Object(A.a)(u.a)((function(e){e.theme;return{fontWeight:"600",backgroundColor:W.a[500],color:"white","&:hover":{backgroundColor:W.a[700]},padding:"10px",marginTop:"10px"}}));return Object(C.jsxs)("div",{style:{padding:20},children:[Object(C.jsx)("h1",{className:"title",children:"Gift Ideas for the week"}),Object(C.jsx)(h.a,{container:!0,spacing:2,children:e&&e.map((function(e,a){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)(h.a,{item:!0,xs:6,order:a%2===0?2*a:2*a+1,children:[Object(C.jsx)("div",{className:"name",children:e.name}),Object(C.jsx)("div",{className:"desc",children:e.description}),Object(C.jsx)(v.b,{to:"/category/".concat(e._id),style:{textDecorationLine:"none"},children:Object(C.jsx)(t,{children:"Check It Out"})})]}),Object(C.jsx)(h.a,{item:!0,xs:6,order:a%2===0?2*a+1:2*a,children:Object(C.jsx)("div",{children:Object(C.jsx)("img",{className:"category-image",src:e.image,alt:"cat"})})})]})}))})]})},P=(a(128),function(){var e=Object(n.useContext)(E),t=e.user,a=e.setUser,r=(Object(j.f)(),function(){var e=Object(d.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.post("".concat(k,"/signout"),{},{withCredentials:!0});case 2:a(null);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}());return Object(C.jsxs)("div",{children:[Object(C.jsxs)("nav",{id:"nav",children:[Object(C.jsx)(v.b,{to:"/",children:Object(C.jsx)("img",{src:"/image/logo.png",height:"60px",alt:"logo"})}),Object(C.jsx)("div",{className:"b-name",children:"Gifteria"}),Object(C.jsxs)("div",{children:[t?Object(C.jsx)("div",{children:Object(C.jsx)(v.b,{style:{textDecoration:"none",paddingRight:"10px"},to:"/cart",children:t?"".concat(t.name,"'s Cart"):"Cart"})}):null,t?Object(C.jsx)(v.b,{style:{textDecoration:"none"},to:"/",children:Object(C.jsx)("div",{onClick:r,variant:"text",style:{padding:"0"},children:"Logout"})}):Object(C.jsx)(C.Fragment,{children:Object(C.jsx)("div",{children:Object(C.jsx)(v.b,{style:{textDecoration:"none"},to:"/signin",children:"Login"})})})]})]}),Object(C.jsx)("hr",{}),Object(C.jsx)("hr",{})]})}),_=(a(129),function(){return Object(C.jsxs)("div",{className:"footer-lay",children:[Object(C.jsx)("hr",{}),Object(C.jsx)("hr",{}),Object(C.jsxs)("div",{className:"ab-img",children:[Object(C.jsx)(v.b,{to:"/",children:Object(C.jsx)("img",{src:"/image/logo.png",height:"60px",alt:"logo"})}),Object(C.jsxs)("div",{className:"about-us",children:["About Us",Object(C.jsx)("div",{children:"Gifteria is your go-to for gifting. You can create personalized and custom gift boxes or choose from a prepacked box for friends and family."})]})]}),Object(C.jsxs)("div",{className:"madeby",children:["Made by\xa0",Object(C.jsx)("a",{href:"https://www.linkedin.com/in/nevrakaya/",target:"_blank rel=''",children:"Nevra"})]})]})}),U=a(172),F=(a(130),a(175)),M=function(e){var t=e.handleDelete,a=e.handleEdit,r=Object(n.useContext)(E),c=r.user,s=r.cart,i=r.setCart;if(Object(n.useEffect)((function(){if(c){var e=function(){var e=Object(d.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("".concat(k,"/cart"),{withCredentials:!0});case 2:t=e.sent,console.log(s),i(t.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}}),[c]),!c)return Object(C.jsx)(F.a,{animation:"grow",variant:"dark"});if(!s)return Object(C.jsx)(F.a,{animation:"grow",variant:"dark"});var l=s.reduce((function(e,t){return e+t.quantity*t.product.price}),0);return Object(C.jsxs)("div",{children:[Object(C.jsxs)("div",{className:"profile",children:[Object(C.jsxs)("h1",{children:[c&&c.name,"'s Profile"]}),Object(C.jsxs)("div",{className:"total",children:["Total Payment: $",l.toString()]})]}),Object(C.jsx)("div",{class:"gifts",children:Object(C.jsx)("div",{children:Object(C.jsx)(U.a,{spacing:2,children:s&&s.map((function(e){return null===e.product?null:(console.log(e),Object(C.jsx)("div",{className:"information",children:Object(C.jsxs)("div",{children:[Object(C.jsx)("h3",{children:e.product.name}),Object(C.jsxs)("p",{children:["Total: $",(e.quantity*e.product.price).toFixed(2)]}),Object(C.jsxs)("div",{className:"buttons",children:[Object(C.jsx)("button",{size:"small",disableElevation:!0,variant:"contained",onClick:function(){return 1===e.quantity?t(e.product._id):a(e.product._id,e.quantity-1)},children:"-"}),Object(C.jsx)("p",{children:e.quantity}),Object(C.jsx)("button",{size:"small",disableElevation:!0,variant:"contained",onClick:function(){return a(e.product._id,e.quantity+1)},children:"+"}),Object(C.jsx)("img",{src:"./image/delete.png",alt:"delete",style:{height:"30px",cursor:"pointer"},onClick:function(){return t(e.product._id)}})]}),Object(C.jsx)("img",{className:"cart-image",src:e.product.image,alt:e.product.name})]})}))}))})})})]})},$=(a(131),a(39)),z=function(e){var t=e.handleAddToCart,a=Object(n.useState)([]),r=Object(l.a)(a,2),c=r[0],s=r[1],i=Object(n.useContext)(E).categories,b=Object(j.g)().categoryId;if(Object(n.useEffect)((function(){var e=function(){var e=Object(d.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=b?"products?category=".concat(b):"products",e.next=3,w.a.get("".concat(k,"/").concat(t),{withCredentials:!0});case 3:a=e.sent,s(a.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[b]),!c)return Object(C.jsx)(F.a,{animation:"grow",variant:"dark"});var x=i.find((function(e){return e._id===b})),m=Object(A.a)(u.a)((function(e){e.theme;return{fontWeight:"600",backgroundColor:$.a[500],color:"white","&:hover":{backgroundColor:$.a[700]},borderRadius:"10px",padding:"10px",marginTop:"10px"}}));return Object(C.jsxs)("div",{children:[Object(C.jsx)(v.b,{to:"/",style:{textDecoration:"none"},children:Object(C.jsxs)("strong",{className:"category-name",children:[Object(C.jsx)("img",{src:"/image/arrow.png",alt:"arr",className:"arrow"}),"Home Page"]})}),Object(C.jsx)("h1",{className:"title",children:"Our Products"}),Object(C.jsx)(h.a,{container:!0,spacing:2,children:x&&Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(h.a,{item:!0,xs:6,children:Object(C.jsxs)("h1",{className:"pname",children:[x.name,Object(C.jsx)("div",{className:"desc",children:x.description})]})}),Object(C.jsx)(h.a,{item:!0,xs:6,children:Object(C.jsx)("div",{children:Object(C.jsx)("img",{className:"category-image",src:x.image,alt:"cat",style:{height:"400px",width:"700px"}})})})]})}),Object(C.jsx)(h.a,{container:!0,spacing:2,children:c&&c.map((function(e){return Object(C.jsx)(h.a,{item:!0,xs:12,md:6,lg:4,className:"section",children:Object(C.jsxs)("div",{className:"each-product",children:[Object(C.jsx)("img",{className:"category-image",src:e.image,alt:"cat"}),Object(C.jsx)(v.b,{to:"/product/".concat(e._id),style:{textDecoration:"none"},children:Object(C.jsx)("h3",{style:{cursor:"pointer"},children:e.name})}),Object(C.jsx)("div",{children:e.description}),Object(C.jsxs)("div",{children:["Price : $",e.price]}),Object(C.jsx)(m,{onClick:function(){return t(e._id)},children:"Add to cart"})]})})}))})]})},G=(a(132),a(33)),L=function(e){var t=e.handleAddToCart,a=Object(n.useState)({}),r=Object(l.a)(a,2),c=r[0],s=r[1],i=Object(j.g)().productId;if(Object(n.useEffect)((function(){var e=function(){var e=Object(d.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("".concat(k,"/products/").concat(i),{withCredentials:!0});case 2:t=e.sent,s(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[i]),!c)return Object(C.jsx)(F.a,{animation:"grow",variant:"dark"});var b=Object(A.a)(u.a)((function(e){e.theme;return{color:"white",fontWeight:"600",backgroundColor:G.a[500],"&:hover":{backgroundColor:G.a[700]},borderRadius:"10px",padding:"10px",marginTop:"10px"}}));return Object(C.jsxs)("div",{children:[Object(C.jsx)(v.b,{to:"/category/".concat(c.category&&c.category._id),style:{textDecoration:"none"},children:Object(C.jsxs)("strong",{className:"category-name",children:[Object(C.jsx)("img",{src:"/image/arrow.png",alt:"arr",className:"arrow"}),c.category&&c.category.name]})}),Object(C.jsx)("h1",{className:"title",children:c.name}),Object(C.jsx)("div",{children:Object(C.jsxs)("div",{className:"home",children:[Object(C.jsx)("img",{className:"category-image",src:c.image,alt:"cat",style:{height:"400px",width:"600px"}}),Object(C.jsx)("div",{className:"detai-price",children:c.description}),Object(C.jsxs)("div",{className:"detai-price",children:["Price : $",c.price]}),Object(C.jsx)(b,{onClick:function(){return t(i)},children:"Add to cart"})]})})]})},R=function(){return Object(C.jsxs)("div",{style:{justifyContent:"center",display:"flex"},children:[Object(C.jsx)("div",{children:Object(C.jsx)("h1",{children:" Page not found!"})}),Object(C.jsx)("img",{src:"./image/404.png",alt:"404"})]})};var J=function(){var e=Object(n.useContext)(E),t=e.user,a=e.setUser,r=e.setCart,c=Object(j.f)(),s=Object(n.useState)(null),i=Object(l.a)(s,2),u=i[0],b=i[1],x=Object(n.useState)(),h=Object(l.a)(x,2),m=h[0],p=h[1];Object(n.useEffect)((function(){var e=function(){var e=Object(d.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,b(!0),e.next=4,w.a.get("".concat(k,"/user"),{withCredentials:!0});case 4:t=e.sent,b(!1),a(t.data),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),b(!1);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var O=function(){var e=Object(d.a)(o.a.mark((function e(a){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=7;break}return e.next=3,w.a.post("".concat(k,"/cart"),{productId:a},{withCredentials:!0});case 3:n=e.sent,r(n.data),e.next=8;break;case 7:c("/signin");case 8:c("/cart");case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(d.a)(o.a.mark((function e(a){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=7;break}return e.next=3,w.a.delete("".concat(k,"/cart"),{data:{productId:a},withCredentials:!0});case 3:n=e.sent,r(n.data),e.next=8;break;case 7:c("/signin");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(d.a)(o.a.mark((function e(a,n){var s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=7;break}return e.next=3,w.a.put("".concat(k,"/cart"),{productId:a,quantity:n},{withCredentials:!0});case 3:s=e.sent,r(s.data),e.next=8;break;case 7:c("/signin");case 8:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();return u?Object(C.jsx)(F.a,{animation:"grow",variant:"dark"}):Object(C.jsxs)("div",{className:"App",children:[Object(C.jsx)(P,{}),Object(C.jsxs)(j.c,{children:[Object(C.jsx)(j.a,{path:"*",element:Object(C.jsx)(R,{})}),Object(C.jsx)(j.a,{path:"/cart",element:Object(C.jsx)(M,{handleDelete:g,handleEdit:f})}),Object(C.jsx)(j.a,{path:"/signin",element:Object(C.jsx)(I,{myError:m,setMyError:p})}),Object(C.jsx)(j.a,{path:"/signup",element:Object(C.jsx)(S,{})}),Object(C.jsx)(j.a,{path:"/products",element:Object(C.jsx)(z,{})}),Object(C.jsx)(j.a,{path:"/category/:categoryId",element:Object(C.jsx)(z,{handleAddToCart:O})}),Object(C.jsx)(j.a,{path:"/product/:productId",element:Object(C.jsx)(L,{handleAddToCart:O})}),Object(C.jsx)(j.a,{path:"/",element:Object(C.jsx)(T,{})})]}),Object(C.jsx)(_,{})]})};s.a.render(Object(C.jsx)(r.a.StrictMode,{children:Object(C.jsx)(v.a,{children:Object(C.jsx)(q,{children:Object(C.jsx)(J,{})})})}),document.getElementById("root"))},76:function(e,t,a){}},[[133,1,2]]]);
//# sourceMappingURL=main.51f3c382.chunk.js.map