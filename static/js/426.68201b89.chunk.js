"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[426],{9046:function(e,s,t){t.d(s,{Z:function(){return o}});var a=t(5243),r="Spinner_loaderWrapper__OsG+c",i="Spinner_loader__yCPuB",n=(t(2791),t(184)),o=function(){return(0,n.jsx)("div",{className:r,children:(0,n.jsx)(a.W0,{height:100,width:100,radius:5,color:"#3f51b5",ariaLabel:"ball-triangle-loading",wrapperClass:{},wrapperStyle:"",visible:!0,className:i})})}},4817:function(e,s,t){var a=t(5861),r=t(7757),i=t.n(r),n=t(1243),o=function(){var e=(0,a.Z)(i().mark((function e(s){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n.Z.get(s);case 3:return t=e.sent,e.abrupt("return",t);case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(s){return e.apply(this,arguments)}}();s.Z=o},8426:function(e,s,t){t.r(s),t.d(s,{default:function(){return T}});var a,r=t(3433),i=t(168),n=t(5861),o=t(9439),c=t(7757),l=t.n(c),v=t(4817),u=t(2791),m=t(9173),_={NODE_ENV:"production",PUBLIC_URL:"/goit-react-hw-05-movies",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_KEY,d=function(e){var s=(0,u.useState)({}),t=(0,o.Z)(s,2),a=t[0],r=t[1],i=(0,u.useState)(!0),c=(0,o.Z)(i,2),d=c[0],p=c[1],h=(0,u.useState)(null),f=(0,o.Z)(h,2),x=f[0],j=f[1];return(0,u.useEffect)((function(){var s=function(){var s=(0,n.Z)(l().mark((function s(){var t,a;return l().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return t="".concat(m.FH,"movie/",e,"?api_key=","".concat(_),"&language=en-US"),s.prev=1,s.next=4,(0,v.Z)(t);case 4:if(a=s.sent,e){s.next=8;break}return r(null),s.abrupt("return");case 8:if(r(a.data),a){s.next=11;break}throw new Error("Getting detailed data is impossible in that moment");case 11:s.next=16;break;case 13:s.prev=13,s.t0=s.catch(1),j(s.t0.message);case 16:return s.prev=16,p(!1),s.finish(16);case 19:case"end":return s.stop()}}),s,null,[[1,13,16,19]])})));return function(){return s.apply(this,arguments)}}();j(null),p(!0),s()}),[e]),{isLoading:d,error:x,movieDetails:a}},p="MovieDetails_movie__njVYe",h="MovieDetails_movieWrapper__v18Nz",f="MovieDetails_movieLink__jBmS4",x="MovieDetails_movieImg__o0Odp",j="MovieDetails_movieDesc__Vkxp0",D="MovieDetails_movieDescTitle__8N+p+",N="MovieDetails_movieDescCategory__DODu0",g="MovieDetails_movieDescInfo__NbYBx",w="MovieDetails_movieOthers__CStO8",S="MovieDetails_movieOthersList__mWBce",k="MovieDetails_movieOthersListLink__1mXry",b="MovieDetails_movieOthersListItem__0wehk",O=t(1087),Z=t(7689),C=t(6444),L=t(9046),M=t(184),E=(0,C.ZP)(O.OL)(a||(a=(0,i.Z)(["\n  color: black;\n\n  &.active {\n    color: white;\n  }\n"]))),T=function(){var e,s,t=(0,Z.UO)().movieID,a=d(t),i=a.isLoading,n=(a.error,a.movieDetails),o=(0,Z.TH)(),c=null!==(e=null===(s=o.state)||void 0===s?void 0:s.from)&&void 0!==e?e:"/",l=0,v="",_="";return n.genres&&n.poster_path&&(l=n.vote_average.toFixed(2),v="".concat(m.B9,"/").concat(n.poster_path),_=(0,r.Z)(n.genres).map((function(e){return e.name})).join(", ")),(0,M.jsxs)("main",{className:p,children:[i&&(0,M.jsx)(L.Z,{}),(0,M.jsx)(O.rU,{to:c,className:f,children:"< Go back"}),(0,M.jsxs)("div",{className:h,children:[(0,M.jsx)("img",{src:v,alt:n.title,className:x}),(0,M.jsxs)("div",{className:j,children:[(0,M.jsx)("h1",{className:D,children:n.title}),(0,M.jsxs)("span",{className:g,children:["User Score: ",l," "]}),(0,M.jsx)("h2",{className:N,children:"Overview"}),(0,M.jsx)("span",{className:g,children:n.overview}),(0,M.jsx)("h2",{className:N,children:"Genres"}),(0,M.jsx)("span",{className:g,children:_})]})]}),(0,M.jsxs)("section",{className:w,children:[(0,M.jsx)("span",{children:"Additional information:"}),(0,M.jsxs)("ul",{className:S,children:[(0,M.jsx)("li",{className:b,children:(0,M.jsx)(E,{to:"cast",className:k,state:{from:o.state.from},children:"Cast"})}),(0,M.jsx)("li",{className:b,children:(0,M.jsx)(E,{to:"reviews",className:k,state:{from:o.state.from},children:"Reviews"})})]})]}),(0,M.jsx)("section",{children:(0,M.jsx)(u.Suspense,{fallback:(0,M.jsx)("div",{children:"Loading..."}),children:(0,M.jsx)(Z.j3,{})})})]})}},9173:function(e){e.exports=JSON.parse('{"FH":"https://api.themoviedb.org/3/","B9":"https://image.tmdb.org/t/p/w300"}')}}]);
//# sourceMappingURL=426.68201b89.chunk.js.map