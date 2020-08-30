(this["webpackJsonpgoogle-books-search"]=this["webpackJsonpgoogle-books-search"]||[]).push([[0],{25:function(e,t,a){e.exports=a(57)},30:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(23),c=a.n(r),o=a(8),i=a(7),u=a(1);a(30);var m=function(e){var t=e.children;return l.a.createElement("div",{style:{height:300,clear:"both",paddingTop:120,textAlign:"center"},className:"jumbotron"},t)},s=a(9),v=a.n(s),d=function(){return v.a.get("/api/books")},f=function(e){return v.a.get("/api/books/"+e)},b=function(e){return v.a.delete("/api/books/"+e)},E=function(e){return v.a.post("/api/books",e)};function p(e){var t=e.fluid,a=e.children;return l.a.createElement("div",{className:"container".concat(t?"-fluid":"")},a)}function h(e){var t=e.fluid,a=e.children;return l.a.createElement("div",{className:"row".concat(t?"-fluid":"")},a)}function g(e){var t=e.size,a=e.children;return l.a.createElement("div",{className:t.split(" ").map((function(e){return"col-"+e})).join(" ")},a)}var k=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)([]),i=Object(o.a)(c,2),u=i[0],s=i[1],d=Object(n.useState)("AIzaSyAKXbxvGaBZjkgngiHBcpmtuNtiwdpnzWI"),f=Object(o.a)(d,2),b=f[0];return f[1],l.a.createElement(p,{fluid:!0},l.a.createElement(m,null,l.a.createElement("h1",null,"Google Books"),l.a.createElement("h2",null,"What Book Should I Read?")),l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),console.log(a),v.a.get("https://www.googleapis.com/books/v1/volumes?q="+a+"&key="+b+"&maxResults=10").then((function(e){s(e.data.items)}))}},l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{id:"search",type:"text",onChange:function(e){var t=e.target.value;r(t)},className:"form-control mt-10",placeholder:"Search for Books",autoComplete:"off"})),l.a.createElement("button",{type:"submit",className:"btn btn-dark"},"Search")),u.map((function(e,t){return l.a.createElement("div",{key:e.id},l.a.createElement("a",{id:"link",href:e.volumeInfo.previewLink},l.a.createElement("h3",null,e.volumeInfo.title)),l.a.createElement("h4",null,e.volumeInfo.authors),l.a.createElement("p",null,e.volumeInfo.description),l.a.createElement("a",null,l.a.createElement("img",{src:e.volumeInfo.imageLinks.thumbnail,alt:e.title}),l.a.createElement("button",{id:"submit-btn",type:"submit",className:"btn btn-dark",onClick:function(){return function(e){console.log(u[e].volumeInfo.imageLinks.thumbnail),E({title:u[e].volumeInfo.title,authors:u[e].volumeInfo.authors,description:u[e].volumeInfo.description,image:u[e].volumeInfo.imageLinks.thumbnail,link:u[e].volumeInfo.previewLink}).then((function(e){return alert("Book Saved!")})).catch((function(e){return console.log(e)}))}(t)}},"  Save")))})))};var N=function(){var e=Object(u.f)();return l.a.createElement("nav",{className:"navbar sticky-top navbar-expand-lg navbar-dark bg-dark"},l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup"},l.a.createElement("div",{className:"navbar-nav"},l.a.createElement(i.b,{to:"/",className:"/"===e.pathname?"nav-link active":"nav-link"},"Search"),l.a.createElement(i.b,{to:"/saved",className:"/saved"===e.pathname?"nav-link active":"nav-link"},"Saved"))))};a(54);function j(e){var t=e.children;return l.a.createElement("div",{className:"list-overflow-container"},l.a.createElement("ul",{className:"list-group"},t))}function O(e){var t=e.children;return l.a.createElement("li",{className:"list-group-item"},t)}var S=function(e){return l.a.createElement("span",Object.assign({className:"delete-btn"},e,{role:"button",tabIndex:"0"}),"\u2717")};a(55);var I=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],r=t[1];function c(){d().then((function(e){return r(e.data)})).catch((function(e){return console.log(e)}))}return Object(n.useEffect)((function(){c()}),[]),l.a.createElement(p,{fluid:!0},l.a.createElement(m,null,l.a.createElement("h1",null,"Google Books"),l.a.createElement("h3",null,"My Saved List")),a.length?l.a.createElement("div",null,l.a.createElement("h1",null,"Books On My List"),l.a.createElement(j,{id:"list"},a.map((function(e){return l.a.createElement(O,{key:e._id},l.a.createElement(i.b,{to:"/books/"+e._id},l.a.createElement("strong",null,e.title," by ",e.authors)),l.a.createElement(S,{id:"delete-btn",onClick:function(){return t=e._id,void b(t).then((function(e){return c()})).catch((function(e){return console.log(e)}));var t}}))})))):l.a.createElement("h3",null,"No Results"),l.a.createElement(h,null,l.a.createElement(g,{size:"md-2"},l.a.createElement(i.b,{to:"/",id:"link"},"\u2190 Back to Search"))))};var y=function(){var e=Object(n.useState)({}),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(u.g)().id;return Object(n.useEffect)((function(){f(c).then((function(e){return r(e.data)})).catch((function(e){return console.log(e)}))}),[]),l.a.createElement(p,{fluid:!0},l.a.createElement(h,null,l.a.createElement(g,{size:"md-12"},l.a.createElement(m,null,l.a.createElement("h1",null,a.title," by ",a.authors)))),l.a.createElement(h,null,l.a.createElement(g,{size:"md-10 md-offset-1"},l.a.createElement("article",null,l.a.createElement("h1",null,"Description"),l.a.createElement("p",null,a.description)))),l.a.createElement(h,null,l.a.createElement(g,{size:"md-2"},l.a.createElement(i.b,{to:"/saved",id:"link"},"\u2190 Back to List"))))};var x=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0];return t[1],l.a.createElement(i.a,null,l.a.createElement("div",null,l.a.createElement(N,{currentPage:a}),l.a.createElement(u.c,null,l.a.createElement(u.a,{exact:!0,path:"/",component:k}),l.a.createElement(u.a,{exact:!0,path:"/saved",component:I}),l.a.createElement(u.a,{exact:!0,path:"/books/:id",component:y}))))};a(56);c.a.render(l.a.createElement(x,null),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.f8fea58b.chunk.js.map