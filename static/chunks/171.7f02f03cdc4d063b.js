"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[171],{1171:function(e,s,i){i.r(s);var c=i(5893),t=i(7294),a=i(9473),r=i(15),l=i(2920),n=i(5152),d=i.n(n),o=i(615),p=i(1330),h=i(4155);let m=d()(()=>Promise.resolve().then(i.bind(i,6588)),{loadableGenerated:{webpack:()=>[6588]},ssr:!1}),u=e=>{let{product:s}=e,i=(0,a.I0)(),[n,d]=(0,t.useState)(!1),u=()=>{d(!n)},[g,x]=(0,t.useState)(0),[j,_]=(0,t.useState)(!1),[v,N]=(0,t.useState)(s.product_price[0].product_price_id),f=(0,a.v9)(e=>e.location.token),[b,y]=(0,t.useState)(s.product_price[0].product_demo_amount),[k,S]=(0,t.useState)(s.product_price[0].product_price),w=e=>{N(e.target.value)};(0,t.useEffect)(()=>{let e=s.product_price.find(e=>e.product_price_id==v);y(e.product_demo_amount),S(e.product_price)},[v]);let C=()=>{i((0,r.jX)({id:v,name:s.product_name,price:k,image:s.product_image[0],quantity:1,product_id:s.product_id})),l.Am.success("Item added to the cart")},z=()=>{i((0,r.T0)(v))},A=()=>{i((0,r.AR)(v))},R=(0,a.v9)(e=>e.cart.items);(0,a.v9)(e=>e.cart.totalPrice);let q=!1,O=1;if(0!==R.length){q=R.some(e=>e.id==v);let e=R.find(e=>e.id==v);e&&(O=e.quantity)}let W=0,E=async e=>{f?(l.Am.success("Item added to the cart"),W=e,F(),I()):u()},F=async()=>{let e=await fetch("".concat(h.env.NEXT_PUBLIC_BASE_URL,"/user/add_favourite.php"),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:f},body:JSON.stringify({product_id:W})}),s=await e.json();s.status},I=()=>window.location.reload();return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(m,{openLoginSidebarModel:n,toggleLoginSidebarModal:u}),(0,c.jsx)("div",{className:"single-pro-block",children:(0,c.jsx)("div",{className:"single-pro-inner",children:(0,c.jsxs)("div",{className:"row",children:[(0,c.jsx)("div",{className:" col-md-6 col-sm-12",children:(0,c.jsx)("div",{className:"single-product-scroll",children:(0,c.jsx)("div",{className:"",children:(0,c.jsx)(o.lr,{selectedItem:g,onChange:e=>x(e),children:0!==Object.keys(s).length&&0!==s.product_image.length&&s.product_image.map((e,s)=>(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("div",{children:(0,c.jsx)(p.Z,{className:"img-responsive ",src:e.image,alt:""})},s)}))})})})}),(0,c.jsx)("div",{className:"col-md-6 col-sm-12",children:(0,c.jsxs)("div",{className:"single-pro-content",children:[(0,c.jsx)("h5",{className:"ec-single-title",children:s.product_name}),(0,c.jsxs)("div",{className:"ec-single-rating-wrap",children:[(0,c.jsx)("div",{style:{fontWeight:500,fontSize:"15px",backgroundColor:"#3474d4",color:"#fff",borderRadius:"10px"},className:"pl-1 pr-1",children:0==s.product_rating.overall_rating?"0.0":s.product_rating.overall_rating}),(0,c.jsxs)("div",{style:{fontWeight:300,fontSize:"12px"},className:"pl-2",children:[" ",s.product_rating.review_count," Rating"]})]}),(0,c.jsxs)("div",{className:"ec-single-desc",children:[j||0!==Object.keys(s).length&&s.product_description.length<=150?s.product_description:0!==Object.keys(s).length&&s.product_description.substring(0,150)+" ...",(0,c.jsx)("span",{style:{cursor:"pointer",color:"#3474d4"},onClick:()=>_(!j),children:j?"  Read Less":"Read More"})]}),(0,c.jsxs)("div",{className:"ec-single-price-stoke",children:[(0,c.jsx)("div",{className:"ec-single-price",children:(0,c.jsxs)("span",{className:"new-price",children:[" ",(0,c.jsxs)("span",{className:"pr-2",children:["₹ ",k]})," ",(0,c.jsxs)("span",{style:{fontWeight:200,fontSize:"16px",textDecoration:"line-through"},className:"new-price",children:["₹ ",b]})]})}),(0,c.jsx)("div",{className:"ec-single-stoke",children:(0,c.jsx)("div",{className:"ec-pro-size",style:{border:"0.1px solid black",borderRadius:"4px",width:"110px"},children:(0,c.jsx)("select",{onChange:w,className:"form-select form-select-sm float-end","aria-label":".form-select-sm example",children:0!==Object.keys(s).length&&0!==s.product_price.length&&s.product_price.map((e,s)=>(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("option",{defaultValue:v,value:e.product_price_id,children:[e.product_variation," ",e.product_unit]},s)}))})})})]}),(0,c.jsx)("div",{className:"ec-pro-variation",children:(0,c.jsx)("div",{className:"ec-pro-variation-inner ec-pro-variation-size"})}),(0,c.jsxs)("div",{className:"ec-single-qty",children:[q?(0,c.jsxs)("div",{className:"qty-plus-minus",children:[(0,c.jsx)("div",{className:"dec ec_qtybtn",onClick:A,children:"-"}),(0,c.jsx)("div",{style:{fontWeight:500,fontSize:"18px"},children:O}),(0,c.jsx)("div",{onClick:z,className:"inc ec_qtybtn",children:"+"})]}):(0,c.jsx)("div",{className:"ec-single-cart ",children:(0,c.jsx)("button",{className:"btn btn-primary",onClick:C,children:"Add To Cart"})}),(0,c.jsxs)("div",{className:"ec-single-wishlist pl-2",color:"#e13a7f",children:[1==s.is_favourite&&(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("a",{className:"ec-btn-group wishlist",title:"Wishlist",onClick:()=>E(s.product_id),children:(0,c.jsx)("i",{className:"fas fa-heart",style:{color:"#da107c",fontSize:20,fill:"red"}})})}),1!==s.is_favourite&&(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("a",{className:"ec-btn-group wishlist",title:"Wishlist",onClick:()=>E(s.product_id),children:(0,c.jsx)("i",{className:"fi-rr-heart",style:{color:"#da107c",fontSize:20,fill:"red"}})})})]})]})]})})]})})})]})};s.default=u}}]);