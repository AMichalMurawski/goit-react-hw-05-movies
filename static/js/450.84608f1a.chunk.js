"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[450],{130:function(n,t,r){var e=r(184);t.Z=function(n){var t=n.title,r=n.children;return(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{children:t}),(0,e.jsx)("ul",{children:r})]})}},479:function(n,t,r){var e=r(71),u=r(184);t.Z=function(n){var t=n.movieName;return(0,u.jsx)("li",{children:(0,u.jsx)(e.rU,{to:"",children:t})})}},646:function(n,t,r){r.d(t,{I:function(){return f},L:function(){return s}});var e=r(861),u=r(683),a=r(757),c=r.n(a),i=r(388),o=function(n,t){return i.Z.get("https://api.themoviedb.org/3"+n,{params:(0,u.Z)({api_key:"c8f343487431a47156d389fa5ccb000e"},t)}).then((function(n){if(404===n.status)throw Error("Can't find data!");return n})).then((function(n){return n})).catch((function(n){return n}))},s=function(){var n=(0,e.Z)(c().mark((function n(){var t,r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"/trending/all/day",t={},n.next=4,o("/trending/all/day",t);case 4:return r=n.sent,e=[],r.data.results.forEach((function(n){var t="";return t=n.title?n.title:n.name,e.push({id:n.id,title:t})})),n.abrupt("return",e);case 8:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(c().mark((function n(t){var r,e,u;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log(t),"/search/movie",r={query:t,page:1},n.next=5,o("/search/movie",r);case 5:return e=n.sent,u=[],e.data.results.forEach((function(n){var t="";return t=n.title?n.title:n.name,u.push({id:n.id,title:t})})),n.abrupt("return",u);case 9:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},450:function(n,t,r){r.r(t),r.d(t,{default:function(){return p}});var e=r(861),u=r(439),a=r(757),c=r.n(a),i=r(130),o=r(479),s=r(791),f=r(184),h=function(n){var t=Object.assign({},n),r=(0,s.useState)(""),e=(0,u.Z)(r,2),a=e[0],c=e[1];return(0,f.jsxs)("form",{onSubmit:function(n){return function(n){n.preventDefault(),t.searchMovies(a),c("")}(n)},children:[(0,f.jsx)("input",{type:"search",name:"searchMovie",value:a,onChange:function(n){return function(n){c(n.target.value)}(n)}}),(0,f.jsx)("button",{children:"Search"})]})},l=r(646),p=function(){var n=(0,s.useState)([]),t=(0,u.Z)(n,2),r=t[0],a=t[1];return(0,f.jsxs)("main",{children:[(0,f.jsx)(h,{searchMovies:function(n){return function(n){var t=function(){var t=(0,e.Z)(c().mark((function t(){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,l.I)(n);case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t().then((function(n){a(n)})).catch((function(n){return console.log(n)}))}(n)}}),(0,f.jsx)(i.Z,{children:r&&r.map((function(n,t){return(0,f.jsx)(o.Z,{movieName:n.title},t)}))})]})}}}]);
//# sourceMappingURL=450.84608f1a.chunk.js.map