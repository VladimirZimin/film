"use strict";(self.webpackChunkfilm=self.webpackChunkfilm||[]).push([[431],{2541:function(e,t,n){n.r(t);var r=n(4165),a=n(5861),c=n(9439),u=n(2791),i=n(7689),s=n(4390),o=n(4137),p=n(9314),l=n(184);t.default=function(){var e=(0,i.UO)().movieId,t=(0,u.useState)(null),n=(0,c.Z)(t,2),f=n[0],v=n[1],d=(0,u.useState)(!1),h=(0,c.Z)(d,2),Z=h[0],g=h[1];return(0,u.useEffect)((function(){var t=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(){var n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,g(!0),t.next=4,s.Z.getMoviesCredits(e);case 4:n=t.sent,v(n.cast),g(!1),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),g(!1),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}();t()}),[e]),f?(0,l.jsx)("div",{children:Z?(0,l.jsx)(o.Z,{}):(0,l.jsx)("ul",{children:f.map((function(e){return(0,l.jsxs)("li",{children:[e.profile_path?(0,l.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(e.profile_path),alt:e.name}):(0,l.jsx)(p.Z,{}),(0,l.jsxs)("p",{children:["\u0406\u043c'\u044f \u0430\u043a\u0442\u043e\u0440\u0430: ",e.name]}),(0,l.jsxs)("p",{children:["\u0406\u043c'\u044f \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u0436\u0430: ",e.character]})]},e.id)}))})}):null}},4137:function(e,t,n){n.d(t,{Z:function(){return s}});n(2791);var r,a=n(9856),c=n(168),u=n(7924).ZP.div(r||(r=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 30px;\n  height: 70vh;\n"]))),i=n(184),s=function(){return(0,i.jsxs)(u,{children:[(0,i.jsx)("h2",{children:"\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f..."}),(0,i.jsx)(a.s5,{strokeColor:"#ea5f5f",strokeWidth:"5",animationDuration:"0.75",width:"96",visible:!0})]})}},9314:function(e,t,n){n.d(t,{Z:function(){return s}});n(2791);var r,a=n(168),c=n(7924).ZP.div(r||(r=(0,a.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n"]))),u=n.p+"static/media/image-not-found.df23927d79365fead4c9.png",i=n(184),s=function(){return(0,i.jsx)(c,{children:(0,i.jsx)("img",{src:u,alt:"\u0417\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u044f \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e"})})}},4390:function(e,t,n){var r=n(4165),a=n(5861),c=n(1243);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var u="060719e53fa713f801520e62e92850bd",i=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/trending/movie/day?api_key=".concat(u,"&page=").concat(t,"&language=uk-UA"));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/search/movie?api_key=".concat(u,"&page=1&language=uk-UA&query=").concat(t,"&include_adult=true"));case 3:return a=e.sent,e.abrupt("return",a.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),o=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/movie/".concat(t,"?api_key=").concat(u,"&&language=uk-UA"));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/movie/".concat(t,"/credits?api_key=").concat(u,"&&language=uk-UA"));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(u));case 3:return n=e.sent,e.abrupt("return",n.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/genre/movie/list?api_key=".concat(u,"&language=uk-UA"));case 2:return t=e.sent,e.abrupt("return",t.data.genres);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("https://imdb-api.com/en/API/Trailer/k_mlq541ll/".concat(t));case 3:return n=e.sent,e.abrupt("return",n);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),d={getTrendingMovieDay:i,getSearchMovies:s,getMoviesDetails:o,getMoviesCredits:p,getMoviesReviews:l,fetchGenreMovie:f,fetchTrailersOfMovie:v};t.Z=d}}]);
//# sourceMappingURL=431.110e4cca.chunk.js.map