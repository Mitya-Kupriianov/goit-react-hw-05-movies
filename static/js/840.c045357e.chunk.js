"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[840],{7047:function(n,o,e){e.d(o,{e:function(){return g}});var t,i,r,a,l=e(6731),d=e(470),c=e(168),u=e(6444),s=u.ZP.div(t||(t=(0,c.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 280px);\n  gap: 20px;\n  padding-left: 40px;\n"]))),p=u.ZP.div(i||(i=(0,c.Z)(["\n  border: 1px solid black;\n  border-radius: 4px;\n\n  > a {\n    text-decoration: none;\n  }\n"]))),f=u.ZP.h3(r||(r=(0,c.Z)(["\n  padding: 4px;\n  margin-top: 8px;\n  margin-bottom: 0;\n  color: black;\n  text-align: center;\n"]))),h=u.ZP.img(a||(a=(0,c.Z)(["\n  width: 278px;\n  height: 160px;\n"]))),x=e(184),g=function(n){var o=n.products,e=(0,d.TH)();return console.log(o),(0,x.jsx)(s,{children:null===o||void 0===o?void 0:o.map((function(n){return(0,x.jsx)(p,{children:(0,x.jsxs)(l.rU,{to:"/movies/".concat(null===n||void 0===n?void 0:n.id),state:{from:e},children:[(0,x.jsx)(h,{src:"".concat("https://image.tmdb.org/t/p/w500").concat(null===n||void 0===n?void 0:n.backdrop_path),alt:""}),(0,x.jsx)(f,{children:null===n||void 0===n?void 0:n.title})]})},null===n||void 0===n?void 0:n.id)}))})}},8840:function(n,o,e){e.r(o),e.d(o,{default:function(){return Z}});var t,i,r,a=e(885),l=e(2791),d=e(6731),c=e(470),u=e(38),s=e(168),p=e(6444),f=p.ZP.form(t||(t=(0,s.Z)(["\n  display: flex;\n  align-items: baseline;\n  width: 100%;\n  max-width: 400px;\n  margin-left: auto;\n  margin-right: auto;\n  padding-bottom: 20px;\n  background-color: #fff;\n"]))),h=p.ZP.input(i||(i=(0,s.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border-right: none;\n  border-top: none;\n  border-left: none;\n  border-bottom-color: orangered;\n  outline: none;\n  padding: 8px;\n  ::placeholder {\n    font: inherit;\n    font-size: 18px;\n    color: orangered;\n  }\n"]))),x=p.ZP.button(r||(r=(0,s.Z)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: none;\n  color: black;\n  background-color: initial;\n  cursor: pointer;\n  outline: none;\n  :hover {\n    color: orangered;\n  }\n"]))),g=e(184),v=function(n){var o=n.onSubmitMovies,e=(0,l.useState)(""),t=(0,a.Z)(e,2),i=t[0],r=t[1];return(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)(f,{onSubmit:function(n){n.preventDefault(),i.trim()&&o(i)},children:[(0,g.jsx)(x,{children:"Search"}),(0,g.jsx)(h,{type:"text",onChange:function(n){r(n.target.value.toLowerCase())},autoComplete:"off",autoFocus:!0,placeholder:"Search movies"})]})})},m=e(7047),b=e(9457),Z=function(){var n,o=(0,l.useState)([]),e=(0,a.Z)(o,2),t=e[0],i=e[1],r=(0,d.lr)(),s=(0,a.Z)(r,2),p=s[0],f=s[1],h=null!==(n=p.get("query"))&&void 0!==n?n:"";(0,l.useEffect)((function(){h&&(0,u.z1)(h).then((function(n){return i(n)}))}),[h]);var x=t.filter((function(n){return n.title.toLowerCase().includes(h.toLowerCase())}));return(0,g.jsxs)(b.Z,{as:"section",pl:20,children:[(0,g.jsx)(v,{onSubmitMovies:function(n){f(""!==n?{query:n}:{})}}),(0,g.jsx)(m.e,{products:x}),(0,g.jsx)(c.j3,{})]})}}}]);
//# sourceMappingURL=840.c045357e.chunk.js.map