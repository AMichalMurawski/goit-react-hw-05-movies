"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[884],{7514:function(e,r,n){n.d(r,{Hx:function(){return p},I2:function(){return l},Lm:function(){return o},Y5:function(){return h},uV:function(){return f}});var t=n(5861),a=n(8683),u=n(7757),i=n.n(u),c=n(2388),s=function(e,r){return c.Z.get("https://api.themoviedb.org/3"+e,{params:(0,a.Z)({api_key:"c8f343487431a47156d389fa5ccb000e",language:"en-US"},r)}).then((function(e){return e})).catch((function(e){return null}))},o=function(){var e=(0,t.Z)(i().mark((function e(){var r,n,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/trending/movie/day",r={},e.next=4,s("/trending/movie/day",r);case 4:if(null!==(n=e.sent)){e.next=7;break}return e.abrupt("return",null);case 7:return t=[],n.data.results.forEach((function(e){return t.push({id:e.id,title:e.title})})),e.abrupt("return",t);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(i().mark((function e(r){var n,t,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/search/movie",n={query:r,page:1},e.next=4,s("/search/movie",n);case 4:if(null!==(t=e.sent)){e.next=7;break}return e.abrupt("return",null);case 7:return a=[],t.data.results.forEach((function(e){var r=e.id,n=e.title;return a.push({id:r,title:n})})),e.abrupt("return",a);case 10:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),h=function(){var e=(0,t.Z)(i().mark((function e(r){var n,t,a,u,c,o,l,h,f,p,d;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="/movie/".concat(r),t={},e.next=4,s(n,t);case 4:if(null!==(a=e.sent)){e.next=7;break}return e.abrupt("return",null);case 7:return u=a.data,c=u.poster_path,o=u.title,l=u.vote_average,h=u.overview,f=u.genres,p=u.release_date,d={src:"https://image.tmdb.org/t/p/w300"+c,title:o,vote_average:l,overview:h,genres:f,year:"".concat(new Date(p).getFullYear())},e.abrupt("return",d);case 10:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,t.Z)(i().mark((function e(r){var n,t,a,u;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="/movie/".concat(r,"/credits"),t={},e.next=4,s(n,t);case 4:if(null!==(a=e.sent)){e.next=7;break}return e.abrupt("return",null);case 7:return u=[],a.data.cast.forEach((function(e){var r=e.id,n=e.profile_path,t=e.name,a=e.character;return u.push({id:r,srcImage:null!==n?"https://image.tmdb.org/t/p/w200"+n:null,name:t,character:a})})),e.abrupt("return",u);case 10:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(i().mark((function e(r){var n,t,a,u;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="/movie/".concat(r,"/reviews"),t={},e.next=4,s(n,t);case 4:if(null!==(a=e.sent)){e.next=7;break}return e.abrupt("return",null);case 7:return u=[],a.data.results.forEach((function(e){var r=e.id,n=e.author,t=e.content;return u.push({id:r,author:n,content:t})})),e.abrupt("return",u);case 10:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},2884:function(e,r,n){n.r(r);var t=n(5861),a=n(9439),u=n(7757),i=n.n(u),c=n(2791),s=n(7689),o=n(7514),l=n(4151),h=n(184),f=(0,c.lazy)((function(){return n.e(128).then(n.bind(n,1128))})),p=(0,c.lazy)((function(){return n.e(545).then(n.bind(n,3545))}));r.default=function(){var e=(0,s.UO)().id,r=(0,s.TH)(),n=(0,c.useState)(null),u=(0,a.Z)(n,2),d=u[0],v=u[1];return(0,c.useEffect)((function(){var r=function(){var r=(0,t.Z)(i().mark((function r(){var n;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,o.Y5)(e);case 2:n=r.sent,v(null!==n?n:"");case 4:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();r()}),[e]),(0,h.jsxs)("main",{children:[(0,h.jsxs)(l.W2,{children:[(0,h.jsx)(l.eJ,{to:r.state?r.state.from:"/",children:"\u2190 Go back"}),null!==d?d?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(l.GK,{children:[(0,h.jsx)(l.Ei,{src:d.src,alt:"".concat(d.title," movie poster")}),(0,h.jsxs)("div",{children:[(0,h.jsxs)(l.H2,{children:[d.title," (",d.year,")"]}),(0,h.jsxs)("p",{children:["User Score: ",Math.round(10*d.vote_average),"%"]}),(0,h.jsx)("h3",{children:"Overview"}),(0,h.jsx)("p",{children:d.overview}),(0,h.jsx)("h3",{children:"Genres"}),(0,h.jsx)(l.aV,{children:d.genres.map((function(e){return(0,h.jsx)("li",{children:e.name},e.id)}))})]})]}),(0,h.jsxs)(l.g0,{children:[(0,h.jsx)("p",{children:"Additional information"}),(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{children:(0,h.jsx)(l.rU,{to:"cast",children:"Cast"})}),(0,h.jsx)("li",{children:(0,h.jsx)(l.rU,{to:"reviews",children:"Reviews"})})]})]})]}):(0,h.jsx)("div",{children:"There is no result for this id!"}):(0,h.jsx)(h.Fragment,{children:"Loading movie..."})]}),(0,h.jsxs)(s.Z5,{children:[(0,h.jsx)(s.AW,{path:"cast",element:(0,h.jsx)(f,{})}),(0,h.jsx)(s.AW,{path:"reviews",element:(0,h.jsx)(p,{})})]})]})}}}]);
//# sourceMappingURL=884.7ac23299.chunk.js.map