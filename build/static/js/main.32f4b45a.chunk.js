(this["webpackJsonpnavbar-dropdown-v1"]=this["webpackJsonpnavbar-dropdown-v1"]||[]).push([[0],{11:function(e,a,t){},15:function(e,a,t){},20:function(e,a,t){},27:function(e,a,t){e.exports=t(44)},32:function(e,a,t){},38:function(e,a,t){},39:function(e,a,t){},41:function(e,a,t){},42:function(e,a,t){},44:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(13),c=t.n(l),s=t(12),i=(t(32),t(2)),m=["btn--primary","btn--outline","btn--test"],o=["btn--medium","btn--large"],u=function(e){var a=e.children,t=e.type,n=e.onClick,l=e.buttonStyle,c=e.buttonSize,s=m.includes(l)?l:m[0],u=o.includes(c)?c:o[0];return r.a.createElement(i.b,{to:"/sign-up",className:"btn-mobile"},r.a.createElement("button",{className:"btn ".concat(s," ").concat(u),onClick:n,type:t},a))};t(38);var E=function(){var e=Object(n.useState)(!1),a=Object(s.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(!0),m=Object(s.a)(c,2),o=m[0],E=m[1],d=function(){return l(!1)},b=function(){window.innerWidth<=960?E(!1):E(!0)};return Object(n.useEffect)((function(){b()}),[]),window.addEventListener("resize",b),r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"navbar"},r.a.createElement("div",{className:"navbar-container"},r.a.createElement(i.b,{to:"/",className:"navbar-logo",onClick:d},r.a.createElement("img",{src:"images/logo.png",style:{width:100,marginTop:-7},alt:""})),r.a.createElement("div",{className:"menu-icon",onClick:function(){return l(!t)}},r.a.createElement("i",{className:t?"fas fa-times":"fas fa-bars"})),r.a.createElement("ul",{className:t?"nav-menu active":"nav-menu"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{to:"/",className:"nav-links",onClick:d},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{to:"/characters",className:"nav-links",onClick:d},"Characters"))),o&&r.a.createElement(u,{buttonStyle:"btn--outline"},"SIGN UP"))))};t(11),t(20),t(15);var d=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"cards__item"},r.a.createElement(i.b,{className:"cards__item__link",to:e.path},r.a.createElement("figure",{className:"cards__item__pic-wrap","data-category":e.label},r.a.createElement("img",{className:"cards__item__img",alt:"",src:e.src})),r.a.createElement("div",{className:"cards__item__info"},r.a.createElement("h5",{className:"cards__item__text"},e.text)),r.a.createElement(u,{className:"btns",buttonStyle:"btn--primary",buttonSize:"btn--large",onClick:console.log("hey")},"READ MORE    ",r.a.createElement("i",{className:"fas fa-arrow-right"})))))};var b=function(){return r.a.createElement("div",{className:"cards"},r.a.createElement("h1",{className:"inner"},"Popular Starships"),r.a.createElement("div",{className:"cards__container"},r.a.createElement("div",{className:"cards__wrapper"},r.a.createElement("ul",{className:"cards__items"},r.a.createElement(d,{src:"images/starship-2.jpg",text:"Set Sail in the Atlantic Ocean visiting Uncharted Waters",label:"Mystery",path:"/services"}),r.a.createElement(d,{src:"images/starship-1.jpg",text:"Experience Football on Top of the Himilayan Mountains",label:"Adventure",path:"/products"}),r.a.createElement(d,{src:"images/starship-3.jpg",text:"Ride through the Sahara Desert on a guided camel tour",label:"Adrenaline",path:"/sign-up"})),r.a.createElement("ul",{className:"cards__items"},r.a.createElement(d,{src:"images/starship-4.jpg",text:"Set Sail in the Atlantic Ocean visiting Uncharted Waters",label:"Mystery",path:"/services"}),r.a.createElement(d,{src:"images/starship-5.jpg",text:"Experience Football on Top of the Himilayan Mountains",label:"Adventure",path:"/products"}),r.a.createElement(d,{src:"images/starship-6.jpg",text:"Ride through the Sahara Desert on a guided camel tour",label:"Adrenaline",path:"/sign-up"})))))},h=(t(39),t(24)),p=t.n(h),g=t(25),v=t.n(g);var f=function(e){var a=e.placeholder,t=e.data,l=Object(n.useState)([]),c=Object(s.a)(l,2),i=c[0],m=c[1],o=Object(n.useState)(""),u=Object(s.a)(o,2),E=u[0],d=u[1];return r.a.createElement("div",{className:"search"},r.a.createElement("div",{className:"searchInputs"},r.a.createElement("div",{className:"searchIcon"},0===i.length?r.a.createElement(p.a,null):r.a.createElement(v.a,{id:"clearBtn",onClick:function(){m([]),d("")}})),r.a.createElement("input",{type:"text",placeholder:a,value:E,onChange:function(e){var a=e.target.value;d(a);var n=t.filter((function(e){return e.title.toLowerCase().includes(a.toLowerCase())}));m(""===a?[]:n)}})),0!==i.length&&r.a.createElement("div",{className:"dataResult"},i.slice(0,15).map((function(e,a){return r.a.createElement("a",{className:"dataItem",href:e.link},r.a.createElement("p",null,e.title," "))}))))};var N=function(){return r.a.createElement("div",{className:"hero-container"},r.a.createElement("img",{className:"hero-img",src:"images/hero-banner.jpg",alt:""}),r.a.createElement("h1",{className:"hero-text",style:{fontSize:30}},r.a.createElement("img",{src:"images/logo.png",style:{width:100,marginTop:-7,marginRight:10},alt:""}),"Directory"),r.a.createElement("p",null,"Find your favorite Characters, Films, Species,"),r.a.createElement("p",null,"Starships and Planets"),r.a.createElement(f,{placeholder:"Enter a Search Name..."}))};t(41);var _=function(){return r.a.createElement("div",{className:"footer-container"},r.a.createElement("section",{className:"footer-subscription"},r.a.createElement("p",{className:"footer-subscription-heading"},"Join the Adventure newsletter to receive our best vacation deals"),r.a.createElement("p",{className:"footer-subscription-text"},"You can unsubscribe at any time."),r.a.createElement("div",{className:"input-areas"},r.a.createElement("form",null,r.a.createElement("input",{className:"footer-input",name:"email",type:"email",placeholder:"Your Email"}),r.a.createElement(u,{buttonStyle:"btn--outline"},"Subscribe")))),r.a.createElement("div",{class:"footer-links"},r.a.createElement("div",{className:"footer-link-wrapper"},r.a.createElement("div",{class:"footer-link-items"},r.a.createElement("h2",null,"About Us"),r.a.createElement(i.b,{to:"/sign-up"},"How it works"),r.a.createElement(i.b,{to:"/"},"Testimonials"),r.a.createElement(i.b,{to:"/"},"Careers"),r.a.createElement(i.b,{to:"/"},"Investors"),r.a.createElement(i.b,{to:"/"},"Terms of Service")),r.a.createElement("div",{class:"footer-link-items"},r.a.createElement("h2",null,"Contact Us"),r.a.createElement(i.b,{to:"/"},"Contact"),r.a.createElement(i.b,{to:"/"},"Support"),r.a.createElement(i.b,{to:"/"},"Destinations"),r.a.createElement(i.b,{to:"/"},"Sponsorships"))),r.a.createElement("div",{className:"footer-link-wrapper"},r.a.createElement("div",{class:"footer-link-items"},r.a.createElement("h2",null,"Videos"),r.a.createElement(i.b,{to:"/"},"Submit Video"),r.a.createElement(i.b,{to:"/"},"Ambassadors"),r.a.createElement(i.b,{to:"/"},"Agency"),r.a.createElement(i.b,{to:"/"},"Influencer")),r.a.createElement("div",{class:"footer-link-items"},r.a.createElement("h2",null,"Social Media"),r.a.createElement(i.b,{to:"/"},"Instagram"),r.a.createElement(i.b,{to:"/"},"Facebook"),r.a.createElement(i.b,{to:"/"},"Youtube"),r.a.createElement(i.b,{to:"/"},"Twitter")))),r.a.createElement("section",{class:"social-media"},r.a.createElement("div",{class:"social-media-wrap"},r.a.createElement("div",{class:"footer-logo"},r.a.createElement(i.b,{to:"/",className:"social-logo"},r.a.createElement("img",{src:"images/logo.png",style:{width:100,marginTop:-7},alt:""}))),r.a.createElement("small",{class:"website-rights"},"STARWARS \xa9 2021"),r.a.createElement("div",{class:"social-icons"},r.a.createElement(i.b,{class:"social-icon-link facebook",to:"/",target:"_blank","aria-label":"Facebook"},r.a.createElement("i",{class:"fab fa-facebook-f"})),r.a.createElement(i.b,{class:"social-icon-link instagram",to:"/",target:"_blank","aria-label":"Instagram"},r.a.createElement("i",{class:"fab fa-instagram"})),r.a.createElement(i.b,{class:"social-icon-link youtube",to:"/",target:"_blank","aria-label":"Youtube"},r.a.createElement("i",{class:"fab fa-youtube"})),r.a.createElement(i.b,{class:"social-icon-link twitter",to:"/",target:"_blank","aria-label":"Twitter"},r.a.createElement("i",{class:"fab fa-twitter"})),r.a.createElement(i.b,{class:"social-icon-link twitter",to:"/",target:"_blank","aria-label":"LinkedIn"},r.a.createElement("i",{class:"fab fa-linkedin"}))))))};var k=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(N,null),r.a.createElement(b,null),r.a.createElement(_,null))},S=t(3);t(42);var y=function(){return r.a.createElement("div",{className:"cards"},r.a.createElement("h1",{className:"inner"},"Starwars Characters"),r.a.createElement("div",{className:"cards__container"},r.a.createElement("div",{className:"cards__wrapper"},r.a.createElement("div",{className:"charactercards-btns"},r.a.createElement("div",{className:"filter-view"},r.a.createElement("h2",null,"FILTER"),r.a.createElement(u,{className:"btns",buttonStyle:"btn--primary",buttonSize:"btn--large",onClick:console.log("hey")},"CLICK ",r.a.createElement("i",{className:"fas fa-angle-right"}))),r.a.createElement("div",{className:"filter-view"},r.a.createElement("h2",null,"VIEW"),r.a.createElement(u,{className:"btns",buttonStyle:"btn--primary",buttonSize:"btn--large",onClick:console.log("hey")},"VIEW ",r.a.createElement("i",{className:"fas fa-angle-right"})))),r.a.createElement("ul",{className:"cards__items"},r.a.createElement(d,{src:"images/character-1.jpg",text:"Explore the hidden waterfall deep inside the Amazon Jungle",label:"Adventure",path:"/services"}),r.a.createElement(d,{src:"images/character-1.jpg",text:"Travel through the Islands of Bali in a Private Cruise",label:"Luxury",path:"/services"})),r.a.createElement("ul",{className:"cards__items"},r.a.createElement(d,{src:"images/character-2.jpg",text:"Explore the hidden waterfall deep inside the Amazon Jungle",label:"Adventure",path:"/services"}),r.a.createElement(d,{src:"images/character-2.jpg",text:"Travel through the Islands of Bali in a Private Cruise",label:"Luxury",path:"/services"})),r.a.createElement("ul",{className:"cards__items"},r.a.createElement(d,{src:"images/character-3.jpg",text:"Explore the hidden waterfall deep inside the Amazon Jungle",label:"Adventure",path:"/services"}),r.a.createElement(d,{src:"images/character-3.jpg",text:"Travel through the Islands of Bali in a Private Cruise",label:"Luxury",path:"/services"})),r.a.createElement("ul",{className:"cards__items"},r.a.createElement(d,{src:"images/character-4.jpg",text:"Explore the hidden waterfall deep inside the Amazon Jungle",label:"Adventure",path:"/services"}),r.a.createElement(d,{src:"images/character-4.jpg",text:"Travel through the Islands of Bali in a Private Cruise",label:"Luxury",path:"/services"})))))};var w=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(N,null),r.a.createElement(y,null),r.a.createElement(_,null))};function x(){return r.a.createElement("h1",{className:"services"},"SERVICES")}function C(){return r.a.createElement("h1",{className:"products"},"PRODUCTS")}function j(){return r.a.createElement("h1",{className:"sign-up"},"LIKE & SUBSCRIBE")}var A=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,null,r.a.createElement(E,null),r.a.createElement(S.c,null,r.a.createElement(S.a,{path:"/",exact:!0,component:k}),r.a.createElement(S.a,{path:"/characters",component:w}),r.a.createElement(S.a,{path:"/services",component:x}),r.a.createElement(S.a,{path:"/products",component:C}),r.a.createElement(S.a,{path:"/sign-up",component:j}))))};c.a.render(r.a.createElement(A,null),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.32f4b45a.chunk.js.map