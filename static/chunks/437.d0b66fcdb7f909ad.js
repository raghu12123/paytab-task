"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[437],{2437:function(e,t,c){c.r(t);var s=c(5893),l=c(9473),r=c(15),a=c(1664),n=c.n(a),i=c(2920),d=c(1330);let h=()=>{let e=(0,l.I0)(),t=(0,l.v9)(e=>e.cart.items),c=t=>{e((0,r.T0)(t))},a=t=>{e((0,r.AR)(t))},h=t=>{e((0,r.cl)(t)),i.Am.success("Item removed from the cart")};return(0,s.jsx)(s.Fragment,{children:0!==t.length&&(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"ec-cart-content",children:(0,s.jsx)("div",{className:"ec-cart-inner",children:(0,s.jsx)("div",{className:"row",children:(0,s.jsxs)("form",{action:"#",children:[(0,s.jsx)("div",{className:"table-content cart-table-content",children:(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Product"}),(0,s.jsx)("th",{children:"Price"}),(0,s.jsx)("th",{style:{textAlign:"center"},children:"Quantity"}),(0,s.jsx)("th",{children:"Total"}),(0,s.jsx)("th",{})]})}),(0,s.jsx)("tbody",{children:0===t.length?(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("tr",{role:"row",children:(0,s.jsx)("td",{className:"sorting_1",colSpan:6,style:{textAlign:"center"},children:"Look like you haven't added anything"})})}):(0,s.jsx)(s.Fragment,{children:t.map((e,t)=>(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{"data-label":"Product",className:"ec-cart-pro-name",children:(0,s.jsxs)(n(),{href:"/product/".concat(e.product_id),children:[(0,s.jsx)(d.Z,{style:{width:"55px",height:"50px"},className:"ec-cart-pro-img mr-4",src:e.image.image,alt:""}),e.name]})}),(0,s.jsx)("td",{"data-label":"Price",className:"ec-cart-pro-price",children:(0,s.jsxs)("span",{className:"amount",children:["₹ ",e.price]})}),(0,s.jsx)("td",{"data-label":"Quantity",style:{textAlign:"center"},children:(0,s.jsxs)("div",{className:"qty-plus-minus",style:{display:"flex",justifyContent:"space-evenly"},children:[(0,s.jsx)("div",{style:{cursor:"pointer",border:"0.1px solid black"},className:"dec ec_qtybtn pl-2 pr-2 pb-1 pt-1",onClick:()=>a(e.id),children:"-"}),(0,s.jsx)("div",{className:"pl-2 pr-2 pt-1 pb-1",style:{fontWeight:500,fontSize:"16px",border:"1px solid black"},children:e.quantity}),(0,s.jsx)("div",{style:{cursor:"pointer",border:"1px solid black"},onClick:()=>c(e.id),className:"inc ec_qtybtn pl-2 pr-2 pb-1 pt-1",children:"+"})]})}),(0,s.jsxs)("td",{"data-label":"Total",className:"ec-cart-pro-subtotal",children:["₹ ",Number(e.price*e.quantity)]}),(0,s.jsx)("td",{"data-label":"Remove",className:"ec-cart-pro-remove",children:(0,s.jsx)("a",{children:(0,s.jsx)("i",{onClick:()=>h(e.id),className:"ecicon eci-trash-o"})})})]},t))})})]})}),(0,s.jsx)("div",{className:"row",children:(0,s.jsx)("div",{className:"col-lg-12",children:(0,s.jsx)("div",{className:"ec-cart-update-bottom",children:(0,s.jsx)(n(),{href:"/product",children:0===t.length?"Explore Shopping":"Continue Shopping"})})})})]})})})})})})};t.default=h}}]);