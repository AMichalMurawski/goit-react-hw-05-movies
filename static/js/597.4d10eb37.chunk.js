"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[597],{597:function(r,t,n){n.r(t),n.d(t,{default:function(){return v}});var e=n(433),a=n(861),u=n(439),c=n(757),i=n.n(c),s=n(689),o=n(791),f=n(646),p=n(184),h=function(r){r.id;var t=r.name,n=r.character,e=r.srcImage;return(0,p.jsxs)("li",{children:[null!==e?(0,p.jsx)("img",{src:e,alt:"actor ".concat(t)}):(0,p.jsxs)("p",{children:["No image for ",t]}),(0,p.jsx)("p",{children:t}),(0,p.jsxs)("p",{children:["Character: ",n]})]})},v=function(){var r=(0,s.UO)().id,t=(0,o.useState)(void 0),n=(0,u.Z)(t,2),c=n[0],v=n[1];return(0,o.useEffect)((function(){var t=function(){var t=(0,a.Z)(i().mark((function t(){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,f.uV)(r);case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t().then((function(r){v((0,e.Z)(r))})).catch((function(r){v([])}))}),[r]),(0,p.jsx)(p.Fragment,{children:c?(0,p.jsx)("ul",{children:c.map((function(r){var t=r.id,n=r.srcImage,e=r.name,a=r.character;return(0,p.jsx)(h,{srcImage:n,name:e,character:a},t)}))}):void 0===c?(0,p.jsx)("div",{children:"Loading cast..."}):(0,p.jsx)("div",{children:"We don't have any casts for this movie"})})}},646:function(r,t,n){n.d(t,{Hx:function(){return v},I2:function(){return f},Lm:function(){return o},Y5:function(){return p},uV:function(){return h}});var e=n(861),a=n(683),u=n(757),c=n.n(u),i=n(388),s=function(r,t){return i.Z.get("https://api.themoviedb.org/3"+r,{params:(0,a.Z)({api_key:"c8f343487431a47156d389fa5ccb000e",language:"en-US"},t)}).then((function(r){return r.status,r})).then((function(r){return r}))},o=function(){var r=(0,e.Z)(c().mark((function r(){var t,n,e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return"/trending/movie/day",t={},r.next=4,s("/trending/movie/day",t);case 4:return n=r.sent,e=[],n.data.results.forEach((function(r){return e.push({id:r.id,title:r.title})})),r.abrupt("return",e);case 8:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),f=function(){var r=(0,e.Z)(c().mark((function r(t){var n,e,a;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return"/search/movie",n={query:t,page:1},r.next=4,s("/search/movie",n);case 4:return e=r.sent,a=[],e.data.results.forEach((function(r){var t=r.id,n=r.title;return a.push({id:t,title:n})})),r.abrupt("return",a);case 8:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),p=function(){var r=(0,e.Z)(c().mark((function r(t){var n,e,a,u,i,o,f,p,h,v;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n="/movie/".concat(t),e={},r.next=4,s(n,e);case 4:return a=r.sent,u=a.data,i=u.poster_path,o=u.title,f=u.vote_average,p=u.overview,h=u.genres,v={src:"https://image.tmdb.org/t/p/w300"+i,title:o,vote_average:f,overview:p,genres:h},r.abrupt("return",v);case 8:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),h=function(){var r=(0,e.Z)(c().mark((function r(t){var n,e,a,u;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n="/movie/".concat(t,"/credits"),e={},r.next=4,s(n,e);case 4:return a=r.sent,u=[],a.data.cast.forEach((function(r){var t=r.id,n=r.profile_path,e=r.name,a=r.character;return u.push({id:t,srcImage:null!==n?"https://image.tmdb.org/t/p/w200"+n:null,name:e,character:a})})),r.abrupt("return",u);case 8:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),v=function(){var r=(0,e.Z)(c().mark((function r(t){var n,e,a,u;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n="/movie/".concat(t,"/reviews"),e={},r.next=4,s(n,e);case 4:return a=r.sent,u=[],a.data.results.forEach((function(r){var t=r.id,n=r.author,e=r.content;return u.push({id:t,author:n,content:e})})),r.abrupt("return",u);case 8:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=597.4d10eb37.chunk.js.map