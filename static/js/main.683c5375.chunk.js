(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],Array(31).concat([function(e,t,c){},,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var a=c(26),s=c.n(a),n=c(6),r=c(2),i=c(7),l=c.n(i),o=(c(31),c(1)),j=c(0),d=function(){var e=Object(o.useCallback)((function(e){e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})}),[]);return Object(j.jsx)("button",{type:"button",className:"footer__backToTop icon",onClick:e,children:"Back to top"})},u=function(){return Object(j.jsx)("footer",{className:"footer",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"footer__content",children:[Object(j.jsx)(n.b,{to:"/",children:Object(j.jsx)("img",{src:"./logo.svg",alt:"logo"})}),Object(j.jsx)("nav",{className:"footer__nav nav",children:Object(j.jsxs)("ul",{className:"nav__list",children:[Object(j.jsx)("li",{className:"nav__item",children:Object(j.jsx)(n.c,{to:"https://github.com/",target:"_blank",className:function(e){var t=e.isActive;return l()("nav__link",{"nav__link--active":t})},children:"Github"})}),Object(j.jsx)("li",{className:"nav__item",children:Object(j.jsx)(n.c,{to:"https://github.com/",target:"_blank",className:function(e){var t=e.isActive;return l()("nav__link",{"nav__link--active":t})},children:"Contacts"})}),Object(j.jsx)("li",{className:"nav__item",children:Object(j.jsx)(n.c,{to:"https://github.com/",target:"_blank",className:function(e){var t=e.isActive;return l()("nav__link",{"nav__link--active":t})},children:"Rights"})})]})}),Object(j.jsx)(d,{})]})})})},b=c(9),h=c(4),m=c(5),O=c.n(m);function p(e){return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch("./api"+e)})).then((function(e){if(!e.ok)throw new Error;return e.json()}));var t}var x,v,_,f,g=function(e){return p(e)},N=function(e,t){return g("/products/".concat(e,"-").concat(t,".json"))};!function(e){e.LOAD="load",e.ADD="add",e.INCREASE="increase",e.DECREASE="decrease",e.REMOVE="remove"}(x||(x={})),function(e){e.LOAD="load",e.ADD="add",e.REMOVE="remove"}(v||(v={})),function(e){e.NEWEST="age",e.ALPHABET="name",e.CHEAPEST="price"}(_||(_={})),function(e){e.ALL="All",e.FOUR="4",e.EIGHT="8",e.SIXTEEN="16"}(f||(f={}));var y=c(11),w=c(10),k=function(e,t){return Math.ceil(e-e*t/100)};function C(e,t){localStorage.setItem(e,JSON.stringify(t))}function E(e){var t=localStorage.getItem(e);return t?JSON.parse(t):[]}function A(e,t){return t.reduce((function(t,c){return c.type===e?t+1:t}),0)}function P(e,t,c,a,s){return"/".concat("tablet"===e?"tablets":"phones","/").concat(t,"-").concat(c,"-").concat(a,"-").concat(s)}function S(e){for(var t=[],c=1;c<=e;c+=1)t.push(c);return t}var T=function(e,t){switch(t.type){case x.LOAD:var c=E("cart");return Object(w.a)(Object(w.a)({},e),{},{cart:c});case x.INCREASE:var a=e.cart.map((function(e){return e.id===t.payload?Object(w.a)(Object(w.a)({},e),{},{quantity:e.quantity+1}):e}));return C("cart",a),Object(w.a)(Object(w.a)({},e),{},{cart:a});case x.DECREASE:var s=e.cart.map((function(e){return e.id===t.payload?Object(w.a)(Object(w.a)({},e),{},{quantity:e.quantity-1}):e}));return C("cart",s),Object(w.a)(Object(w.a)({},e),{},{cart:s});case x.ADD:var n=[].concat(Object(y.a)(e.cart),[t.payload]);return C("cart",n),Object(w.a)(Object(w.a)({},e),{},{cart:n});case x.REMOVE:var r=e.cart.filter((function(e){return e.id!==t.payload}));return C("cart",r),Object(w.a)(Object(w.a)({},e),{},{cart:r});default:throw new Error("Uknown action")}},B=function(e,t){switch(t.type){case v.LOAD:var c=E("favorites");return Object(w.a)(Object(w.a)({},e),{},{favorites:c});case v.ADD:var a=[].concat(Object(y.a)(e.favorites),[t.payload]);return C("favorites",a),Object(w.a)(Object(w.a)({},e),{},{favorites:a});case v.REMOVE:var s=e.favorites.filter((function(e){return e.id!==t.payload}));return C("favorites",s),Object(w.a)(Object(w.a)({},e),{},{favorites:s});default:throw new Error("Uknown action")}},L=Object(o.createContext)({products:[],favorites:[],cart:[],dispatchCart:function(){return null},dispatchFavorites:function(){return null}}),R=function(e){var t=e.children,c=Object(o.useState)([]),a=Object(h.a)(c,2),s=a[0],n=a[1],r=Object(o.useReducer)(B,{favorites:[]}),i=Object(h.a)(r,2),l=i[0].favorites,d=i[1],u=Object(o.useReducer)(T,{cart:[]}),m=Object(h.a)(u,2),p=m[0].cart,_=m[1],f=function(){var e=Object(b.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g("/products.json");case 3:t=e.sent,n(t),e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(0),new Error("Unable to load products!");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){f(),_({type:x.LOAD}),d({type:v.LOAD})}),[]),Object(j.jsx)(L.Provider,{value:{products:s,favorites:l,cart:p,dispatchFavorites:d,dispatchCart:_},children:t})},D=(c(34),function(){var e=Object(o.useState)(""),t=Object(h.a)(e,2),c=t[0],a=t[1],s=Object(o.useState)(""),i=Object(h.a)(s,2),l=i[0],d=i[1],u=Object(n.d)(),b=Object(h.a)(u,2),m=b[0],O=b[1],p=Object(r.l)();Object(o.useEffect)((function(){c.length?m.set("query",l):(m.delete("query"),d("")),O(m)}),[l,c]);var x=Object(o.useCallback)(function(e,t){var c;return function(){for(var a=arguments.length,s=new Array(a),n=0;n<a;n++)s[n]=arguments[n];c&&clearTimeout(c),c=setTimeout((function(){e.call.apply(e,[null].concat(s))}),t)}}(d,500),[]);return Object(j.jsxs)("div",{className:"search__container",children:[Object(j.jsx)("input",{type:"search",name:"query",className:"search",value:c,onChange:function(e){a(e.currentTarget.value),x(e.currentTarget.value)},placeholder:"Search in ".concat(p.pathname.slice(1),"...")}),c.length>0?Object(j.jsx)("button",{type:"button",onClick:function(){return a("")},children:Object(j.jsx)("img",{className:"search__img",src:"./img/icons/Close.svg",alt:"close"})}):Object(j.jsx)("img",{className:"search__img",src:"./img/icons/Search.svg",alt:"search"})]})}),M=(c(35),function(){var e=Object(o.useContext)(L),t=e.favorites,c=e.cart,a=Object(r.l)().pathname;return Object(j.jsxs)("header",{className:"header",id:"header",children:[Object(j.jsx)(n.b,{to:"/",children:Object(j.jsx)("img",{src:"./logo.svg",alt:"logo"})}),Object(j.jsx)("nav",{className:"header__nav nav",style:{display:"/cart"===a?"none":"block"},children:Object(j.jsxs)("ul",{className:"nav__list",children:[Object(j.jsx)("li",{className:"nav__item",children:Object(j.jsx)(n.c,{to:"/home",className:function(e){var t=e.isActive;return l()("nav__link",{"nav__link--active":t})},children:"Home"})}),Object(j.jsx)("li",{className:"nav__item",children:Object(j.jsx)(n.c,{to:"/phones",className:function(e){var t=e.isActive;return l()("nav__link",{"nav__link--active":t})},children:"Phones"})}),Object(j.jsx)("li",{className:"nav__item",children:Object(j.jsx)(n.c,{to:"/tablets",className:function(e){var t=e.isActive;return l()("nav__link",{"nav__link--active":t})},children:"Tablets"})}),Object(j.jsx)("li",{className:"nav__item",children:Object(j.jsx)(n.c,{to:"/accessories",className:function(e){var t=e.isActive;return l()("nav__link",{"nav__link--active":t})},children:"Accessories"})})]})}),Object(j.jsxs)(r.d,{children:[Object(j.jsx)(r.b,{path:"/favorites",element:Object(j.jsx)(D,{})}),Object(j.jsx)(r.b,{path:"/phones",element:Object(j.jsx)(D,{})}),Object(j.jsx)(r.b,{path:"/tablets",element:Object(j.jsx)(D,{})}),Object(j.jsx)(r.b,{path:"/accessories",element:Object(j.jsx)(D,{})})]}),Object(j.jsxs)(n.b,{className:l()("header__icon",{"icon__favor--items":!!t.length}),to:"/favorites",style:{display:"/cart"===a?"none":"flex"},children:[Object(j.jsx)("img",{className:"header__img",src:"./img/icons/favourites.svg",alt:"favourites"}),!!t.length&&Object(j.jsx)("span",{className:"header__countLabel",children:t.length})]}),Object(j.jsxs)(n.b,{className:"header__icon",to:"/cart",children:[Object(j.jsx)("img",{src:"./img/icons/cart.svg",alt:"cart"}),!!c.length&&Object(j.jsx)("span",{className:"header__countLabel",children:c.length})]})]})}),I=c(8),q=(c(36),function(e){var t=e.children,c=e.width,a=e.height,s=e.handler,n=e.type,r=e.disabled;return Object(j.jsx)("button",{type:"button",className:l()("button",Object(I.a)({},n,""!==n)),disabled:r,style:{width:"".concat(c),height:"".concat(a)},onClick:s,children:t})}),F=(c(37),function(e){var t=e.item,c=Object(o.useContext)(L).dispatchCart,a=Object(o.useCallback)((function(){c({type:x.INCREASE,payload:t.id})}),[t]),s=Object(o.useCallback)((function(){1!==t.quantity&&c({type:x.DECREASE,payload:t.id})}),[t]),n=Object(o.useCallback)((function(){c({type:x.REMOVE,payload:t.id})}),[t]);return Object(j.jsxs)("div",{className:"cart-item",children:[Object(j.jsx)(q,{width:"10px",height:"10px",type:"button--close",handler:n,children:Object(j.jsx)("img",{src:"./img/icons/Close.svg",alt:"Remove"})}),Object(j.jsx)("img",{className:"cart-item__img",src:t.imageUrl,alt:"item"}),Object(j.jsx)("p",{className:"cart-item__name",children:t.product}),Object(j.jsxs)("div",{className:"cart-item__buttons",children:[Object(j.jsx)(q,{width:"32px",height:"32px",disabled:1===t.quantity,handler:s,children:Object(j.jsx)("img",{src:"./img/icons/Minus.svg",alt:"decrease"})}),Object(j.jsx)("span",{className:"cart-item__count",children:t.quantity}),Object(j.jsx)(q,{width:"32px",height:"32px",handler:a,children:Object(j.jsx)("img",{src:"./img/icons/Plus.svg",alt:"increase"})})]}),Object(j.jsx)("h2",{className:"cart-item__price",children:"$".concat(t.price*t.quantity)})]})}),U=function(){var e=Object(o.useContext)(L).cart;return Object(j.jsx)(j.Fragment,{children:e.length?Object(j.jsx)("div",{className:"cart__items",children:e.map((function(e){return Object(j.jsx)(F,{item:e},e.id)}))}):Object(j.jsx)("h2",{className:"cart__empty",children:"Your cart is empty"})})},H=(c(38),function(){var e=Object(r.n)(),t=Object(o.useState)(!1),c=Object(h.a)(t,2),a=c[0],s=c[1],n=Object(o.useContext)(L).cart;Object(o.useEffect)((function(){var e=setTimeout((function(){s(!1)}),2e3);return function(){clearTimeout(e)}}),[a]);var i=Object(o.useMemo)((function(){return n.reduce((function(e,t){return e+t.quantity*t.price}),0)}),[n]),l=Object(o.useMemo)((function(){return n.reduce((function(e,t){return e+t.quantity}),0)}),[n]);return Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"cart",children:[Object(j.jsx)("button",{type:"button",className:"cart__back-btn",onClick:function(){return e(-1)},children:"Back"}),Object(j.jsx)("h1",{className:"cart__title",children:"Cart"}),Object(j.jsxs)("div",{className:"cart__content",children:[Object(j.jsx)("div",{className:"cart__items-block",children:Object(j.jsx)(U,{})}),Object(j.jsxs)("div",{className:"cart__total-block",children:[Object(j.jsx)("h1",{className:"cart__amount",children:"$".concat(i)}),Object(j.jsx)("span",{className:"cart__items-count",children:"Total for ".concat(l," items")}),Object(j.jsx)("div",{className:"cart__line"}),Object(j.jsx)(q,{width:"100%",height:"48px",type:"button__action",handler:function(){return s(!0)},children:"Checkout"}),a&&Object(j.jsx)("div",{className:"cart__message",children:"We are sorry, but this feature is not implemented yet"})]})]})]})})}),V=function(){return Object(j.jsx)(H,{})},G=(c(39),function(){var e=Object(r.l)().pathname.split("/").slice(1).map((function(e){return e[0].toUpperCase().concat(e.slice(1)).replaceAll(/-/g," ")}));return Object(j.jsx)("div",{className:"crumbs","data-cy":"breadCrumbs",children:Object(j.jsxs)("ul",{className:"crumbs__list",children:[Object(j.jsx)("li",{className:"crumbs__item",children:Object(j.jsx)(n.b,{to:"/",children:Object(j.jsx)("img",{src:"./img/icons/Home.svg",alt:"Home"})})}),e.map((function(t,c){return Object(j.jsxs)("li",{className:"crumbs__item",children:[Object(j.jsx)("img",{src:"./img/icons/arrowRight.svg",alt:"arrow"}),e[c]===e[e.length-1]?Object(j.jsx)("span",{className:"crumbs__path",children:t}):Object(j.jsx)(n.b,{className:"crumbs__link",to:"/".concat(t),children:t})]},t)}))]})})}),W=function(e){var t=e.height,c=e.product,a=Object(o.useContext)(L),s=a.cart,n=a.dispatchCart,r=Object(o.useMemo)((function(){return s.some((function(e){return e.id===c.id}))}),[s,c.id]),i=Object(o.useCallback)((function(e){var t=e.id,c=e.imageUrl,a=e.name,s=e.price,i=e.discount,l=k(s,i);if(r)n({type:x.REMOVE,payload:t});else{var o={id:t,imageUrl:c,quantity:1,product:a,price:l};n({type:x.ADD,payload:o})}}),[s]);return Object(j.jsx)(q,{width:"100%",height:"".concat(t),handler:function(){return i(c)},type:l()("button__action",{"button__action--active":r}),children:r?"Added to cart":"Add to cart"})},$=function(e){var t=e.size,c=e.product,a=Object(o.useContext)(L),s=a.favorites,n=a.dispatchFavorites,r=s.some((function(e){return e.id===c.id})),i=Object(o.useMemo)((function(){return r?"./img/icons/favouritesFilled.svg":"./img/icons/favourites.svg"}),[r]);return Object(j.jsx)(q,{height:t,width:t,handler:function(){return n(r?{type:v.REMOVE,payload:c.id}:{type:v.ADD,payload:c})},type:"button--favour",children:Object(j.jsx)("img",{src:i,alt:"favourites"})})},X=(c(40),function(e){var t=e.product,c=t.id,a=t.name,s=t.price,r=t.ram,i=t.screen,l=t.capacity,o=t.imageUrl,d=t.discount,u=t.type,b=k(s,d);return Object(j.jsxs)("div",{className:"card",children:[Object(j.jsxs)(n.b,{to:"/".concat("tablet"===u?"tablets":"phones","/").concat(c),className:"card__link",children:[Object(j.jsx)("img",{className:"card__img",src:o,alt:"card"}),Object(j.jsx)("h3",{className:"card__title",children:a})]}),Object(j.jsxs)("div",{className:"card__price",children:["$".concat(d?b:s),!!d&&Object(j.jsx)("span",{className:"card__price--sale",children:"$".concat(s)})]}),Object(j.jsx)("div",{className:"card__line"}),Object(j.jsxs)("div",{className:"card__characteristics",children:[Object(j.jsxs)("div",{className:"card__characteristics-row",children:[Object(j.jsx)("span",{className:"card__characteristics-title",children:"Screen"}),Object(j.jsx)("span",{className:"card__characteristics-value",children:i})]}),Object(j.jsxs)("div",{className:"card__characteristics-row",children:[Object(j.jsx)("span",{className:"card__characteristics-title",children:"Capacity"}),Object(j.jsx)("span",{className:"card__characteristics-value",children:l})]}),Object(j.jsxs)("div",{className:"card__characteristics-row",children:[Object(j.jsx)("span",{className:"card__characteristics-title",children:"RAM"}),Object(j.jsx)("span",{className:"card__characteristics-value",children:r})]})]}),Object(j.jsxs)("div",{className:"card__buttons",children:[Object(j.jsx)(W,{height:"40px",product:t}),Object(j.jsx)($,{size:"40px",product:t})]})]})}),z=(c(41),Object(o.memo)((function(e){var t=e.products;return Object(j.jsx)("div",{className:"products","data-cy":"productList",children:t.map((function(e){return Object(j.jsx)(X,{product:e},e.id)}))})}))),J=(c(42),c(43),function(e){var t=e.name;return Object(j.jsx)("section",{className:"result",children:Object(j.jsx)("h1",{className:"result__title",children:"".concat(t," not found")})})}),Y=function(){var e=Object(o.useContext)(L).favorites,t=Object(n.d)(),c=Object(h.a)(t,1)[0].get("query")||"",a=e.filter((function(e){return e.name.toLowerCase().includes(c.toLowerCase())}));return Object(j.jsx)("section",{className:"favorites",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(G,{}),Object(j.jsx)("h1",{className:"favorites__title",children:"Favourites"}),Object(j.jsx)("div",{className:"favorites__count",children:c?"".concat(a.length," results"):"".concat(e.length," items")}),a.length>0?Object(j.jsx)(z,{products:a}):Object(j.jsx)(J,{name:"Product"})]})})},K=(c(44),function(e){var t=e.sectionTitle,c=e.products,a=Object(o.useState)(0),s=Object(h.a)(a,2),n=s[0],r=s[1],i=Object(o.useRef)(null);return Object(j.jsxs)("div",{className:"block",children:[Object(j.jsxs)("div",{className:"block__header",children:[Object(j.jsx)("h2",{className:"block__title",children:t}),Object(j.jsxs)("div",{className:"block__buttons",children:[Object(j.jsx)(q,{width:"32px",height:"32px",handler:function(){if(0!==n){var e=(n-1+c.length)%c.length;r(e),i.current&&(i.current.style.transform="translateX(-".concat(288*e,"px)"))}},disabled:0===n,children:Object(j.jsx)("img",{src:"./img/icons/arrowLeft.svg",alt:"prev"})}),Object(j.jsx)(q,{width:"32px",height:"32px",handler:function(){if(n!==c.length-4){var e=(n+1)%(c.length-3);r(e),i.current&&(i.current.style.transform="translateX(-".concat(288*e,"px)"))}},disabled:n===c.length-4,children:Object(j.jsx)("img",{src:"./img/icons/arrowRight.svg",alt:"next"})})]})]}),Object(j.jsx)("div",{className:"block__wrapper",children:Object(j.jsx)("div",{"data-cy":"cardsContainer",ref:i,className:"block__cards",children:c.map((function(e){return Object(j.jsx)(X,{product:e},e.id)}))})})]})}),Z=function(){var e=Object(o.useContext)(L).products,t=Object(o.useMemo)((function(){return e.filter((function(e){return e.age<=1&&0===e.discount})).sort((function(e,t){return t.price-e.price}))}),[e]);return Object(j.jsx)("section",{className:"page__section brandNew",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsx)(K,{sectionTitle:"Brand new models",products:t})})})},Q=(c(45),[{id:1,title:"Photo One",url:"./img/slider-img/banner.png"},{id:2,title:"Photo Two",url:"./img/slider-img/banner-2.jpg"},{id:3,title:"Photo Three",url:"./img/slider-img/banner-3.jpg"}]),ee=function(e){var t=e.currentIndex,c=e.onSlideChange;return Object(j.jsx)("div",{className:"slider__navigation",children:Q.map((function(e,a){return Object(j.jsx)("div",{"aria-hidden":"true",className:l()("slider__dot",{"slider__dot--active":Q[t].id===e.id}),onClick:function(){return c(a)},onKeyDown:function(){return c(a)}},e.id)}))})},te=function(){var e=Object(o.useState)(0),t=Object(h.a)(e,2),c=t[0],a=t[1],s=Object(o.useRef)(null),n=Object(o.useRef)(null),r=function(){var e=(c+1)%Q.length;if(a(e),s.current&&n.current){var t=n.current.clientWidth;s.current.style.transform="translateX(-".concat(e*t,"px)")}};return Object(o.useEffect)((function(){var e=setTimeout(r,5e3);return function(){clearInterval(e)}}),[c]),Object(j.jsxs)("div",{className:"slider",children:[Object(j.jsx)(q,{width:"32px",height:"",handler:function(){var e=(c-1+Q.length)%Q.length;if(a(e),s.current&&n.current){var t=n.current.clientWidth;s.current.style.transform="translateX(-".concat(e*t,"px)")}},children:Object(j.jsx)("img",{src:"./img/icons/arrowLeft.svg",alt:"prev"})}),Object(j.jsx)("div",{className:"slider__content",children:Object(j.jsx)("div",{ref:s,className:"slider__wrapper",children:Q.map((function(e,t){return Object(j.jsx)("div",{ref:n,className:l()("slider__slide",{"slider__slide--active":t===c}),style:{backgroundImage:"url(".concat(e.url,")")}},e.id)}))})}),Object(j.jsx)(q,{width:"32px",height:"",handler:r,children:Object(j.jsx)("img",{src:"./img/icons/arrowRight.svg",alt:"next"})}),Object(j.jsx)(ee,{currentIndex:c,onSlideChange:a})]})},ce=function(){var e=Object(o.useContext)(L).products.filter((function(e){return e.discount>0})).sort((function(e,t){return k(e.price,e.discount)-k(t.price,t.discount)}));return Object(j.jsx)("section",{className:"page__section hot-prices",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(te,{}),Object(j.jsx)(K,{sectionTitle:"Hot prices",products:e})]})})},ae=(c(46),function(){var e=Object(o.useContext)(L).products,t=Object(o.useMemo)((function(){return A("smartphone",e)}),[e]),c=Object(o.useMemo)((function(){return A("tablet",e)}),[e]),a=Object(o.useMemo)((function(){return A("accessories",e)}),[e]);return Object(j.jsx)("section",{className:"page__section shopBy",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h2",{className:"shopBy__title",children:"Shop by category"}),Object(j.jsxs)("div",{className:"shopBy__categories",children:[Object(j.jsxs)("div",{className:"shopBy__category",children:[Object(j.jsxs)(n.b,{"data-cy":"categoryLinksContainer",to:"/phones",className:"shopBy__link",children:[Object(j.jsx)("div",{className:"shopBy__container",children:Object(j.jsx)("img",{src:"./img/categories/phone.svg",alt:"phones category",className:"shopBy__category-img"})}),"Mobile phones"]}),Object(j.jsx)("span",{className:"shopBy__category-count",children:"".concat(t," models")})]}),Object(j.jsxs)("div",{className:"shopBy__category",children:[Object(j.jsxs)(n.b,{"data-cy":"categoryLinksContainer",to:"/tablets",className:"shopBy__link",children:[Object(j.jsx)("div",{className:"shopBy__container shopBy__container--grey",children:Object(j.jsx)("img",{src:"./img/categories/tablet.svg",alt:"phones category",className:"shopBy__category-img"})}),"Tablets"]}),Object(j.jsx)("span",{className:"shopBy__category-count",children:"".concat(c," models")})]}),Object(j.jsxs)("div",{className:"shopBy__category",children:[Object(j.jsxs)(n.b,{"data-cy":"categoryLinksContainer",to:"/accessories",className:"shopBy__link",children:[Object(j.jsx)("div",{className:"shopBy__container shopBy__container--red",children:Object(j.jsx)("img",{src:"./img/categories/cases.svg",alt:"phones category",className:"shopBy__category-img"})}),"Accessories"]}),Object(j.jsx)("span",{className:"shopBy__category-count",children:"".concat(a," models")})]})]})]})})}),se=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(ce,{}),Object(j.jsx)(ae,{}),Object(j.jsx)(Z,{})]})},ne=(c(47),function(){return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(G,{}),Object(j.jsx)("div",{className:"page__block",children:Object(j.jsx)("h1",{className:"page__title",children:"Page not found"})})]})});c(48);var re=function(e){var t=e.options,c=e.onSelect;return Object(j.jsx)("ul",{className:"select__list",children:t.map((function(e){return Object(j.jsx)("li",{"aria-hidden":"true",className:"select__item",onClick:function(){return c(e)},children:e},e)}))})},ie=function(e){var t=e.width,c=e.options,a=e.type,s=e.defaultValue,r=e.onSelect,i=e.search,l=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=Object(o.useState)(e),c=Object(h.a)(t,2),a=c[0],s=c[1],n=Object(o.useCallback)((function(){return s((function(e){return!e}))}),[]);return[a,s,n]}(),d=Object(h.a)(l,3),u=d[0],b=d[1],m=d[2],O=Object(o.useState)(s),p=Object(h.a)(O,2),x=p[0],v=p[1],_=Object(n.d)(),f=Object(h.a)(_,2),g=f[0],N=f[1];return Object(o.useEffect)((function(){g.get(i)||v(s)}),[g]),Object(j.jsxs)("div",{className:"select ".concat(a),style:{width:"".concat(t,"px")},children:[Object(j.jsxs)("div",{"aria-hidden":"true",className:"select__head",onClick:m,onKeyDown:m,children:[x,Object(j.jsx)("span",{className:"select__arrow",children:u?Object(j.jsx)("img",{src:"./img/icons/arrowUp.svg",alt:"select"}):Object(j.jsx)("img",{src:"./img/icons/arrowDown.svg",alt:"select"})})]}),u&&Object(j.jsx)("div",{className:"select__holder",style:{width:"".concat(t,"px")},onMouseLeave:m,children:Object(j.jsx)(re,{options:c,onSelect:function(e){var t={Newest:"age",Alphabetically:"name",Cheapest:"price"};Object.hasOwn(t,e)?(g.set("sort",t[e]),N(g)):g.set("perPage",e),N(g),v(e),r(),b(!1)}})})]})},le=(c(49),function(e){var t=e.pages,c=e.currentPage,a=e.onPageChange;return Object(j.jsx)(j.Fragment,{children:t.map((function(e){return Object(j.jsx)("li",{className:l()("page-item ",{"pagination__button--active":e===c}),children:Object(j.jsx)(q,{width:"32px",height:"32px",type:e===c?"button--page":"",handler:function(){return a(e)},children:e})},e)}))})}),oe=function(e){var t=e.total,c=e.perPage,a=e.onPageChange,s=e.currentPage,n=Math.ceil(t/c),r=S(n),i=Object(o.useCallback)((function(){s>1&&a(s-1)}),[s]),d=Object(o.useCallback)((function(){s<=t&&a(s+1)}),[s]);return Object(j.jsxs)("ul",{className:"pagination",children:[Object(j.jsx)("li",{className:l()("page-item",{disabled:1===s}),children:Object(j.jsx)(q,{width:"32px",height:"32px",disabled:1===s,handler:i,children:Object(j.jsx)("img",{src:"./img/icons/arrowLeft.svg",alt:"prev"})})}),Object(j.jsx)(le,{pages:r,currentPage:s,onPageChange:a}),Object(j.jsx)(q,{width:"32px",height:"32px",disabled:s===n,handler:d,children:Object(j.jsx)("img",{src:"./img/icons/arrowRight.svg",alt:"next"})})]})},je={sort:["Newest","Alphabetically","Cheapest"],perPage:["4","8","16","All"]},de=function(e){var t=e.title,c=e.products,a=Object(n.d)(),s=Object(h.a)(a,1)[0],r=Object(o.useState)(1),i=Object(h.a)(r,2),l=i[0],d=i[1],u=s.get("sort")||"",b=s.get("query")||"",m=Object(o.useCallback)((function(){switch(s.get("perPage")){case f.ALL:return c.length;case f.FOUR:return 4;case f.EIGHT:return 8;case f.SIXTEEN:default:return 16}}),[s])(),O=function(){d(1)},p=l*m,x=p-m,v=Object(o.useCallback)((function(e){var t=Object(y.a)(c);switch(e){case _.NEWEST:return t.sort((function(e,t){return e.age-t.age}));case _.ALPHABET:return t.sort((function(e,t){return e.name.localeCompare(t.name)}));case _.CHEAPEST:return t.sort((function(e,t){return k(e.price,e.discount)-k(t.price,t.discount)}));default:return t}}),[c])(u).filter((function(e){return e.name.toLowerCase().includes(b.toLowerCase())})).slice(x,p),g=m<v.length||v.length===c.length;return Object(j.jsxs)("section",{className:"page__products",children:[Object(j.jsx)(G,{}),Object(j.jsx)("h1",{className:"page__title",children:t}),Object(j.jsx)("span",{className:"page__models-count",children:b?"".concat(v.length," results"):"".concat(c.length," models")}),Object(j.jsxs)("div",{className:"page__selectWrapper",children:[Object(j.jsx)(ie,{type:"select__sort",options:je.sort,onSelect:O,width:176,search:"sort",defaultValue:"Newest"}),Object(j.jsx)(ie,{type:"select__pagination",options:je.perPage,onSelect:O,width:128,defaultValue:16,search:"perPage"})]}),v.length>0?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(z,{products:v}),!g&&Object(j.jsx)(oe,{total:b?v.length:c.length,perPage:m,currentPage:l,onPageChange:function(e){d(e),window.scrollTo({top:0,behavior:"smooth"})}})]}):Object(j.jsx)(J,{name:"Product"})]})},ue=function(){var e=Object(o.useContext)(L).products.filter((function(e){return"smartphone"===e.type}));return Object(j.jsx)("div",{className:"container",children:e.length?Object(j.jsx)(de,{title:"Mobile phones",products:e}):Object(j.jsx)(J,{name:"Phones"})})},be=(c(50),c(51),function(){return Object(j.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(j.jsx)("div",{className:"Loader__content"})})}),he=function(){return Object(j.jsxs)("div",{className:"details__block details__block-about",children:[Object(j.jsx)("h2",{className:"details__title-h2",children:"About"}),Object(j.jsxs)("div",{className:"details__feature-descp",children:[Object(j.jsx)("h3",{className:"details__title-h3",children:"And then there was Pro"}),Object(j.jsx)("p",{className:"details__text",children:"A transformative triple\u2011camera system that adds tons of capability without complexity. An unprecedented leap in battery life. And a mind\u2011blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro."})]}),Object(j.jsxs)("div",{className:"details__feature-descp",children:[Object(j.jsx)("h3",{className:"details__title-h3",children:"Camera"}),Object(j.jsx)("p",{className:"details__text",children:"Meet the first triple\u2011camera system to combine cutting\u2011edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest\u2011quality video in a smartphone \u2014 then edit with the same tools you love for photos. You\u2019ve never shot with anything like it."})]}),Object(j.jsxs)("div",{className:"details__feature-descp",children:[Object(j.jsx)("h3",{className:"details__title-h3",children:"Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it."}),Object(j.jsx)("p",{className:"details__text",children:"iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization \u2014 all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with."})]})]})},me=function(e){var t=e.productData,c=e.currentPhoto,a=e.onPhotoChange,s=Object(o.useMemo)((function(){return S(3)}),[]);return Object(j.jsxs)("div",{className:"details__photos",children:[Object(j.jsx)("div",{className:"details__photos-sml",children:s.map((function(e){return Object(j.jsx)("button",{type:"button",className:l()("details__photo-btn",{"details__photo-btn--active":e===c}),onClick:function(){return a(e)},children:Object(j.jsx)("img",{className:"details__img-sml",src:"./img/apple/".concat(null===t||void 0===t?void 0:t.name,"-").concat(null===t||void 0===t?void 0:t.model,"-").concat(null===t||void 0===t?void 0:t.color,"-").concat(e,".jpg"),alt:"phone"})},e)}))}),Object(j.jsx)("div",{className:"details__photo-l",children:Object(j.jsx)("img",{className:"details__img-l",src:"./img/apple/".concat(null===t||void 0===t?void 0:t.name,"-").concat(null===t||void 0===t?void 0:t.model,"-").concat(null===t||void 0===t?void 0:t.color,"-").concat(c,".jpg"),alt:"phone"})})]})},Oe=function(e){var t=e.specs,c=e.keys,a=e.extraClass;return Object(j.jsx)("div",{className:"details__specs",children:c.map((function(e){return Object(j.jsxs)("div",{className:"details__specs-row",children:[Object(j.jsx)("span",{className:l()("details__specs-title",Object(I.a)({},a,a)),children:e}),Object(j.jsx)("span",{className:l()("details__specs-value",Object(I.a)({},a,a)),children:t[e]})]})}))})},pe=function(){var e=Object(o.useContext)(L).products,t=Object(o.useState)(null),c=Object(h.a)(t,2),a=c[0],s=c[1],i=Object(o.useState)(1),d=Object(h.a)(i,2),u=d[0],m=d[1],p=Object(o.useState)(!1),x=Object(h.a)(p,2),v=x[0],_=x[1],f=Object(r.p)(),g=Object(r.n)(),y=function(e){var t=e.match(/(iphone-\d+|iPad-\d+.\d+)/g),c=e.match(/pro-max|pro|plus/g),a=e.match(/pacific-blue|graphite|gold|deep-purple|silver|space-black|space-gray|red/g),s=e.match(/128GB|256GB|512GB|1TB/g);return t&&c&&a&&s?{name:t[0],model:c[0],color:a[0],capacity:s[0]}:null}(f.productId),w=function(){var e=Object(b.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(y){e.next=2;break}return e.abrupt("return");case 2:return _(!0),e.prev=3,e.next=6,N(null===y||void 0===y?void 0:y.name,null===y||void 0===y?void 0:y.model);case 6:t=e.sent,s(t),e.next=13;break;case 10:throw e.prev=10,e.t0=e.catch(3),new Error("Unable to load details!");case 13:return e.prev=13,_(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[3,10,13,16]])})));return function(){return e.apply(this,arguments)}}(),C=Object(o.useCallback)((function(e){return m(e)}),[u]);Object(o.useEffect)((function(){w()}),[f]);var E=Object(o.useMemo)((function(){return e.find((function(e){return e.id===f.productId}))}),[e]),A=e.filter((function(e){return e.age<=1})),S=E&&k(null===E||void 0===E?void 0:E.price,null===E||void 0===E?void 0:E.discount),T=Object(o.useCallback)((function(){return{Screen:"".concat(null===a||void 0===a?void 0:a.screen,'" OLED'),Resolution:null===a||void 0===a?void 0:a.resolution,Processor:null===a||void 0===a?void 0:a.processor,RAM:null===a||void 0===a?void 0:a.ram,"Built in memory":null===E||void 0===E?void 0:E.capacity,Camera:null===a||void 0===a?void 0:a.camera,Zoom:null===a||void 0===a?void 0:a.zoom,Cell:null===a||void 0===a?void 0:a.cell}}),[a,E])(),B=Object(o.useMemo)((function(){return Object.keys(T).slice(0,4)}),[]);return v?Object(j.jsx)(be,{}):Object(j.jsx)("section",{className:"details",children:E&&y&&!v?Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(G,{}),Object(j.jsx)("button",{type:"button",className:"details__back-btn",onClick:function(){return g(-1)},children:"Back"}),Object(j.jsx)("h1",{className:"details__title-head",children:null===E||void 0===E?void 0:E.name}),Object(j.jsxs)("div",{className:"details__wrapper details__wrapper--top",children:[Object(j.jsx)(me,{productData:y,currentPhoto:u,onPhotoChange:C}),Object(j.jsx)("div",{className:"details__actions",children:Object(j.jsxs)("div",{className:"details__holder",children:[Object(j.jsx)("span",{className:"details__label",children:"Available colors"}),Object(j.jsx)("div",{className:"details__actions-links",children:null===a||void 0===a?void 0:a.colors.map((function(e){var t=e.color,c=e.hex;return Object(j.jsx)(n.b,{to:P(null===E||void 0===E?void 0:E.type,null===y||void 0===y?void 0:y.name,null===y||void 0===y?void 0:y.model,t,null===y||void 0===y?void 0:y.capacity),className:l()("details__color-link",{"details__color-link--active":(null===y||void 0===y?void 0:y.color)===t}),style:{backgroundColor:"".concat(c)}},c)}))}),Object(j.jsx)("span",{className:"details__label",children:"Select capacity"}),Object(j.jsx)("div",{className:"details__actions-links",children:null===a||void 0===a?void 0:a.capacity.map((function(e){return Object(j.jsx)(n.b,{to:P(null===E||void 0===E?void 0:E.type,null===y||void 0===y?void 0:y.name,null===y||void 0===y?void 0:y.model,null===y||void 0===y?void 0:y.color,e),className:l()("details__capacity-link",{"details__capacity-link--active":"".concat(e)===(null===y||void 0===y?void 0:y.capacity)}),children:"".concat(e)},e)}))}),Object(j.jsx)("div",{className:"details__price",children:null!==E&&void 0!==E&&E.discount?Object(j.jsxs)(j.Fragment,{children:["$".concat(S),Object(j.jsx)("span",{className:"details__price--sale",children:"$".concat(null===E||void 0===E?void 0:E.price)})]}):"$".concat(null===E||void 0===E?void 0:E.price)}),Object(j.jsx)("div",{className:"details__buttons",children:E&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(W,{height:"48px",product:E}),Object(j.jsx)($,{size:"48px",product:E})]})}),Object(j.jsx)(Oe,{keys:B,specs:T})]})})]}),Object(j.jsxs)("div",{className:"details__wrapper",children:[Object(j.jsx)(he,{}),Object(j.jsxs)("div",{className:"details__block-specs",children:[Object(j.jsx)("h2",{className:"details__title-h2",children:"Tech specs"}),Object(j.jsx)(Oe,{keys:Object.keys(T),specs:T,extraClass:"details__text"})]})]}),Object(j.jsx)(K,{sectionTitle:"You may also like",products:A})]}):Object(j.jsx)(J,{name:"Product"})})},xe=(c(52),function(){var e=Object(o.useContext)(L).products.filter((function(e){return"tablet"===e.type}));return Object(j.jsx)("div",{className:"container",children:e.length>0?Object(j.jsx)(de,{title:"Tablets",products:e}):Object(j.jsx)(J,{name:"Tablets"})})}),ve=function(){return Object(j.jsx)("div",{className:"container",children:Object(j.jsx)(J,{name:"Accessories"})})},_e=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(M,{}),Object(j.jsx)("main",{className:"page__main",children:Object(j.jsxs)(r.d,{children:[Object(j.jsx)(r.b,{path:"/",element:Object(j.jsx)(se,{})}),Object(j.jsx)(r.b,{path:"home",element:Object(j.jsx)(r.a,{to:"/",replace:!0})}),Object(j.jsxs)(r.b,{path:"phones",children:[Object(j.jsx)(r.b,{index:!0,element:Object(j.jsx)(ue,{})}),Object(j.jsx)(r.b,{path:":productId",element:Object(j.jsx)(pe,{})})]}),Object(j.jsxs)(r.b,{path:"tablets",children:[Object(j.jsx)(r.b,{index:!0,element:Object(j.jsx)(xe,{})}),Object(j.jsx)(r.b,{path:":productId",element:Object(j.jsx)(pe,{})})]}),Object(j.jsxs)(r.b,{path:"accessories",children:[Object(j.jsx)(r.b,{index:!0,element:Object(j.jsx)(ve,{})}),Object(j.jsx)(r.b,{path:":productId",element:Object(j.jsx)(pe,{})})]}),Object(j.jsx)(r.b,{path:"favorites",element:Object(j.jsx)(Y,{})}),Object(j.jsx)(r.b,{path:"cart",element:Object(j.jsx)(V,{})}),Object(j.jsx)(r.b,{path:"*",element:Object(j.jsx)(ne,{})})]})}),Object(j.jsx)(u,{})]})};c(53);s.a.render(Object(j.jsx)(n.a,{children:Object(j.jsx)(R,{children:Object(j.jsx)(_e,{})})}),document.getElementById("root"))}]),[[54,1,2]]]);
//# sourceMappingURL=main.683c5375.chunk.js.map