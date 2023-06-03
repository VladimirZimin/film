"use strict";(self.webpackChunkfilm=self.webpackChunkfilm||[]).push([[604],{4137:function(e,n,t){t.d(n,{Z:function(){return u}});t(2791);var r,a=t(9856),c=t(168),s=t(7924).ZP.div(r||(r=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 30px;\n  height: 70vh;\n"]))),i=t(184),u=function(){return(0,i.jsxs)(s,{children:[(0,i.jsx)("h2",{children:"\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f..."}),(0,i.jsx)(a.s5,{strokeColor:"#ea5f5f",strokeWidth:"5",animationDuration:"0.75",width:"96",visible:!0})]})}},9314:function(e,n,t){t.d(n,{Z:function(){return u}});t(2791);var r,a=t(168),c=t(7924).ZP.div(r||(r=(0,a.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n"]))),s=t.p+"static/media/image-not-found.df23927d79365fead4c9.png",i=t(184),u=function(){return(0,i.jsx)(c,{children:(0,i.jsx)("img",{src:s,alt:"\u0417\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u044f \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e"})})}},1499:function(e,n,t){t.r(n),t.d(n,{default:function(){return x}});var r,a=t(4165),c=t(5861),s=t(9439),i=t(4137),u=t(2791),o=t(7689),l=t(1087),p=t(4390),f=t(168),d=(0,t(7924).ZP)(l.OL)(r||(r=(0,f.Z)(["\n  text-decoration: none;\n  color: #808191;\n\n  &:hover {\n    color: #ffffff;\n  }\n\n  &.active {\n    color: #ea5f5f;\n  }\n"]))),v=t(9314),h=t(184),x=function(){var e,n,t=(0,u.useState)(null),r=(0,s.Z)(t,2),f=r[0],x=r[1],Z=(0,u.useState)(!1),g=(0,s.Z)(Z,2),m=g[0],j=g[1],k=(0,u.useState)(!1),w=(0,s.Z)(k,2),y=w[0],b=w[1],_=(0,u.useState)(null),M=(0,s.Z)(_,2),U=M[0],A=M[1],S=(0,o.UO)().movieId,T=(0,o.TH)(),C=(0,u.useRef)(null!==(e=null===(n=T.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/");return(0,u.useEffect)((function(){var e=function(){var e=(0,c.Z)((0,a.Z)().mark((function e(){var n,t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,j(!0),e.next=4,p.Z.getMoviesDetails(S);case 4:return n=e.sent,x(n),j(!1),e.next=9,p.Z.fetchTrailersOfMovie(n.imdb_id);case 9:t=e.sent,A(t.data.linkEmbed),e.next=18;break;case 13:e.prev=13,e.t0=e.catch(0),b(!0),j(!1),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}();e()}),[S]),f?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(l.rU,{to:C.current,children:"\u041d\u0430\u0437\u0430\u0434"}),y&&m?(0,h.jsx)(i.Z,{}):(0,h.jsxs)("div",{children:[f.poster_path?(0,h.jsx)("img",{id:f.id,src:"https://image.tmdb.org/t/p/w500/".concat(f.poster_path),alt:f.title,loading:"lazy"}):(0,h.jsx)(v.Z,{}),(0,h.jsxs)("h1",{children:[f.title," (",f.release_date.slice(0,4),")"]}),(0,h.jsx)("a",{href:U,children:"\u0414\u0438\u0432\u0438\u0442\u0438\u0441\u044f \u0442\u0440\u0435\u0439\u043b\u0435\u0440"}),(0,h.jsxs)("p",{children:["\u0420\u0435\u0439\u0442\u0438\u043d\u0433: ",f.vote_average.toFixed(1)]}),(0,h.jsxs)("p",{children:["\u041f\u0440\u043e \u0444\u0456\u043b\u044c\u043c: ",f.overview]}),(0,h.jsxs)("p",{children:["\u0416\u0430\u043d\u0440:"," ",f.genres&&f.genres.map((function(e){return(0,h.jsxs)("span",{children:[e.name," "]},e.name)}))]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("h2",{children:"\u0414\u043e\u0434\u0430\u0442\u043a\u043e\u0432\u0430 \u0456\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u044f"}),(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{}),(0,h.jsx)("li",{children:(0,h.jsx)("h3",{children:(0,h.jsx)(d,{to:"cast",children:"\u0410\u043a\u0442\u043e\u0440\u0441\u044c\u043a\u0438\u0439 \u0441\u043a\u043b\u0430\u0434"})})}),(0,h.jsx)("li",{children:(0,h.jsx)("h3",{children:(0,h.jsx)(d,{to:"reviews",children:"\u0412\u0456\u0434\u0433\u0443\u043a\u0438"})})})]}),(0,h.jsx)(u.Suspense,{children:(0,h.jsx)(o.j3,{})})]})]})]}):null}},4390:function(e,n,t){var r=t(4165),a=t(5861),c=t(1243);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var s="060719e53fa713f801520e62e92850bd",i=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/trending/movie/day?api_key=".concat(s,"&page=").concat(n,"&language=uk-UA"));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),u=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n,t){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/search/movie?api_key=".concat(s,"&page=1&language=uk-UA&query=").concat(n,"&include_adult=true"));case 3:return a=e.sent,e.abrupt("return",a.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n,t){return e.apply(this,arguments)}}(),o=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/movie/".concat(n,"?api_key=").concat(s,"&&language=uk-UA"));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/movie/".concat(n,"/credits?api_key=").concat(s,"&&language=uk-UA"));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/movie/".concat(n,"/reviews?api_key=").concat(s));case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/genre/movie/list?api_key=".concat(s,"&language=uk-UA"));case 2:return n=e.sent,e.abrupt("return",n.data.genres);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("https://imdb-api.com/en/API/Trailer/k_mlq541ll/".concat(n));case 3:return t=e.sent,e.abrupt("return",t);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),v={getTrendingMovieDay:i,getSearchMovies:u,getMoviesDetails:o,getMoviesCredits:l,getMoviesReviews:p,fetchGenreMovie:f,fetchTrailersOfMovie:d};n.Z=v}}]);
//# sourceMappingURL=604.f5817e70.chunk.js.map