(this.webpackJsonppostsys=this.webpackJsonppostsys||[]).push([[4],{78:function(e,t,a){},80:function(e,t,a){},97:function(e,t,a){"use strict";a.r(t);var n=a(29),c=a(0),r=a.n(c),i=a(77),l=(a(78),a(15)),s=r.a.createElement(l.c.svg,{width:"15",height:"10",viewBox:"0 0 15 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",whileHover:{scale:1.1},whileTap:{scale:.9}},r.a.createElement("path",{d:"M0.239728 9.16423L0.731073 9.72266C0.885708 9.89706 1.09144 9.99313 1.31132 9.99313C1.53108 9.99313 1.73706 9.89706 1.89169 9.72266L7.49662 3.39616L13.108 9.72968C13.2624 9.90408 13.4684 10 13.6881 10C13.9079 10 14.114 9.90408 14.2685 9.72968L14.76 9.17469C15.08 8.81378 15.08 8.22589 14.76 7.86498L8.07894 0.297057C7.92455 0.122797 7.71881 1.54965e-05 7.4971 1.54965e-05H7.49454C7.27466 1.54965e-05 7.06893 0.122934 6.91454 0.297057L0.239728 7.84448C0.0850922 8.01874 0.00021303 8.25796 -3.0874e-05 8.506C-3.0874e-05 8.75418 0.0850922 8.9901 0.239728 9.16423Z",fill:"black"})),m=r.a.createElement(l.c.svg,{whileHover:{scale:1.1},whileTap:{scale:.9},width:"15",height:"10",viewBox:"0 0 15 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M14.7602 0.835788L14.2689 0.277357C14.1143 0.10296 13.9085 0.00688247 13.6886 0.00688247C13.4689 0.00688247 13.2629 0.10296 13.1083 0.277357L7.50335 6.60385L1.89197 0.270337C1.73758 0.0959395 1.5316 0 1.31184 0C1.09208 0 0.885983 0.0959395 0.731469 0.270337L0.240002 0.825327C-0.0800007 1.18624 -0.0800007 1.77412 0.240002 2.13503L6.92103 9.70296C7.07542 9.87722 7.28116 10 7.50287 10H7.50543C7.72531 10 7.93104 9.87708 8.08543 9.70296L14.7602 2.15554C14.9149 1.98128 14.9998 1.74205 15 1.49401C15 1.24584 14.9149 1.00991 14.7602 0.835788Z",fill:"black"}));var o=function(e){var t=e.requestSort,a=e.sortConfig;return r.a.createElement("tr",{className:"noselect header"},[{recognizer:"itemID",cssClassName:"th-id heading",display:"Item ID"},{recognizer:"itemName",cssClassName:"th-name heading",display:"Item Name/Description"},{recognizer:"qty",cssClassName:"th-qty heading",display:"Units"},{recognizer:"unitPrice",cssClassName:"th-unitPrice heading",display:"Unit Price"},{recognizer:"totalPrice",cssClassName:"th-totalPrice heading",display:"Total Price"}].map((function(e){return r.a.createElement(l.c.td,{onClick:function(){return t(e.recognizer)},className:e.cssClassName,whileHover:{scale:1.025},whileTap:{scale:.975},key:e.recognizer},r.a.createElement("span",null,e.display),"ascending"===a.direction&&a.key===e.recognizer?m:a.key===e.recognizer&&"descending"===a.direction?s:null)})))};var u=function(e){var t=e.currentItems,a=e.allItems,l=e.setCurrentItems,s=Object(c.useState)(""),m=Object(n.a)(s,2),o=m[0],u=m[1],d=Object(c.useState)(1),b=Object(n.a)(d,2),p=b[0],E=b[1],g=function(e){switch(e.target.id){case"IdInput":u(e.target.value);break;case"UnitsInput":E(e.target.value)}},v=function(e){if("Enter"===e.key&&""!==o&&""!==p){var n=1;if(t.map((function(e){return e.itemID===Number(o)?n++:null})),n<=1)a.forEach((function(e){e.itemID===Number(o)&&(l((function(t){return[{itemID:Number(o),qty:Number(p),itemName:e.itemName,unitPrice:e.unitPrice,totalPrice:e.unitPrice*Number(p)}].concat(Object(i.a)(t))})),u(""),E(1))}));else{var c=Object(i.a)(t);c.forEach((function(e){e.itemID===Number(o)&&(e.qty=e.qty+Number(p),e.totalPrice=parseFloat((e.unitPrice*Number(e.qty)).toFixed(2)),u(""),E(1))})),l(c)}}};return r.a.createElement("tr",null,r.a.createElement("td",{className:"td-id"},r.a.createElement("input",{type:"text",id:"IdInput",className:"idInput",onChange:g,onKeyDown:v,value:o})),r.a.createElement("td",{className:"td-name"}),r.a.createElement("td",{className:"td-qty"},r.a.createElement("input",{type:"number",id:"UnitsInput",className:"unitInput",min:"1",max:"100000",onChange:g,onKeyDown:v,value:p})),r.a.createElement("td",{className:"td-price"}),r.a.createElement("td",{className:"td-price"}))};var d=function(e){var t=e.currentItems,a={visible:{opacity:1},hidden:{opacity:0},exit:{opacity:0,x:0}},n={visible:{opacity:1,x:0},hidden:{opacity:0,x:-100},exit:{opacity:0,x:0}};return r.a.createElement(l.a,null,r.a.createElement(l.b,null,t.map((function(e){return r.a.createElement(l.c.tr,{initial:"hidden",animate:"visible",exit:"exit",variants:a,key:e.itemID,layout:!0},r.a.createElement(l.c.td,{className:"td-id",variants:n,exit:"exit"},e.itemID),r.a.createElement(l.c.td,{className:"td-name",variants:n,exit:"exit"},e.itemName),r.a.createElement(l.c.td,{className:"td-qty",variants:n,exit:"exit"},e.qty),r.a.createElement(l.c.td,{className:"td-price",variants:n,exit:"exit"},"Rs. ",e.unitPrice),r.a.createElement(l.c.td,{className:"td-price",variants:n,exit:"exit"},"Rs. ",e.totalPrice))}))))};var b=function(e){var t,a=e.items,l=e.onTotalChange,s=e.setCurrentItems,m=e.currentItems,b=Object(c.useState)(0),p=Object(n.a)(b,2),E=p[0],g=p[1],v=Object(c.useState)(Object(i.a)(a)),N=Object(n.a)(v,2),f=N[0],h=N[1];return Object(c.useEffect)((function(){l(E)}),[E,l]),Object(c.useEffect)((function(){var e=0;m.forEach((function(t){t.totalPrice?e+=t.totalPrice:e+=0})),g(e)}),[m]),Object(c.useMemo)((function(){return m.sort((function(e,t){return e[f.key]<t[f.key]?"ascending"===f.direction?-1:1:e[f.key]>t[f.key]?"ascending"===f.direction?1:-1:0})),m}),[f,m]),r.a.createElement(r.a.Fragment,null,r.a.createElement("table",{className:"MainTable",id:"table-to-xls"},r.a.createElement("thead",null,r.a.createElement(o,{requestSort:function(e){t="ascending",f.key===e&&"ascending"===f.direction&&(t="descending"),h({key:e,direction:t})},sortConfig:f})),r.a.createElement("tbody",null,r.a.createElement(u,{currentItems:m,allItems:a,setCurrentItems:s}),r.a.createElement(d,{currentItems:m}))))},p=a(79),E=a.n(p),g=(a(80),a(81)),v=a.n(g);var N=function(e){var t=e.total,a=e.grandTotal,i=e.currentItemsLength,s=e.onClickCancel,m=Object(c.useState)(),o=Object(n.a)(m,2),u=o[0],d=o[1],b=Object(c.useState)(""),p=Object(n.a)(b,2),N=p[0],f=p[1],h="";return Object(c.useEffect)((function(){d(parseFloat((Number(N)-Number(a)).toFixed(2)))}),[N,a]),r.a.createElement("div",{className:"rb-container"},r.a.createElement("div",{className:"rb-receipt-number-container"},r.a.createElement("p",null,"Receipt No. 5432")),r.a.createElement("h1",{className:"rb-cost-text"},r.a.createElement(v.a,{text:"Rs. ".concat(a),springConfig:{mass:1,tension:120,friction:14}})),r.a.createElement("div",{className:"rb-gst-container"},r.a.createElement("p",null,"Gross Total - Rs. ",t),r.a.createElement("p",null,"GST - ",a>=1e3?"5%":"0%"),r.a.createElement("p",null,"Discount - 0%")),r.a.createElement("div",{className:"rb-payment-container"},r.a.createElement("input",{type:"number",name:"payment",id:"payment",placeholder:"Add Payment",className:"rb-payment-input",onChange:function(e){var t;t=+e.target.value,!isNaN(parseFloat(t))&&isFinite(t)&&f(e.target.value)},value:N})),r.a.createElement("div",{className:"rb-change-add-container"},r.a.createElement(l.a,null,h=u>=0?"Change - Rs.":"Add Rs.",u>=0?r.a.createElement(l.c.span,{initial:{translateY:25,opacity:0},animate:{translateY:0,opacity:1},exit:{translateY:25,opacity:0},transition:{duration:.25},className:"rb-change-text"},r.a.createElement(v.a,{text:"".concat(h," ").concat(u),springConfig:g.presets.wobbly})):r.a.createElement(l.c.span,{initial:{translateY:25,opacity:0},animate:{translateY:0,opacity:1},transition:{duration:.25},exit:{translateY:25,opacity:0},className:"rb-change-text"},r.a.createElement(v.a,{text:"".concat(h," ").concat(Math.abs(u)),springConfig:g.presets.wobbly})))),r.a.createElement("div",{className:"rb-print-container"},r.a.createElement("div",{className:"rb-print-sizer"},0===i||u<0?r.a.createElement(l.c.button,{className:"default-btn",disabled:!0},"Change Remaining"):r.a.createElement(E.a,{id:"test-table-xls-button",className:"default-btn",table:"table-to-xls",filename:"Table By PostSys "+(new Date).toLocaleDateString(),sheet:"tablexls",buttonText:"Download"}),r.a.createElement("button",{className:"rb-cancel block",onClick:function(){f(0),s()}},"Cancel"))))},f=a(36),h=a(11),y=(a(42),a(12));var C=function(){var e=Object(h.b)(),t=e.loginWithRedirect,a=e.logout,n=e.isAuthenticated,c=e.user,i="";return i="https://dakheera47.github.io/PostSys/#/",r.a.createElement(l.c.div,{initial:{translateY:-100},animate:{translateY:0},className:"nav-container"},r.a.createElement("div",{className:"nav-left-container"},r.a.createElement(y.b,{className:"nav-brand",to:"/"},"PostSys")),r.a.createElement("div",{className:"nav-center-container"},r.a.createElement("button",{className:"nav-center-btn center-underline"},"Projects"),r.a.createElement("button",{className:"nav-center-btn center-underline"},"Edit"),r.a.createElement("button",{className:"nav-center-btn center-underline"},"Clear")),r.a.createElement("div",{className:"nav-right-container"},n?r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"nav-logout-btn center-underline",onClick:function(){return a({returnTo:i})}},"Sign out from ",c.name),r.a.createElement("img",{className:"nav-user-img",src:c.picture,alt:"Profile"})):r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"nav-sign-in",onClick:function(){return t()}},"Sign In"),r.a.createElement("button",{className:"nav-sign-up",onClick:function(){return t()}},"Register"))))};t.default=function(){var e=Object(c.useContext)(f.a),t=Object(n.a)(e,2),a=t[0],i=t[1],s=Object(c.useState)(0),m=Object(n.a)(s,2),o=m[0],u=m[1],d=Object(c.useState)(0),p=Object(n.a)(d,2),E=p[0],g=p[1],v=Object(c.useState)([]),h=Object(n.a)(v,2),y=h[0],x=h[1];return Object(c.useEffect)((function(){document.title="Workspace | Postsys"}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(C,null),r.a.createElement(l.c.div,{initial:{opacity:0},animate:{opacity:1}},r.a.createElement(b,{items:a,setItems:i,onTotalChange:function(e){u(e>=100?Math.round(e):parseFloat(e.toFixed(2))),g(o>=1e3?parseFloat((1.05*o).toFixed(2)):o)},currentItems:y,setCurrentItems:x}),r.a.createElement(N,{total:o,grandTotal:E,currentItemsLength:y.length,onClickCancel:function(){x([]),g(0),u(0)}})))}}}]);
//# sourceMappingURL=4.93bccc03.chunk.js.map