"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[906],{9046:function(e,r,t){t.d(r,{Z:function(){return c}});var n=t(5243),a="Spinner_loaderWrapper__OsG+c",i="Spinner_loader__yCPuB",s=(t(2791),t(184)),c=function(){return(0,s.jsx)("div",{className:a,children:(0,s.jsx)(n.W0,{height:100,width:100,radius:5,color:"#3f51b5",ariaLabel:"ball-triangle-loading",wrapperClass:{},wrapperStyle:"",visible:!0,className:i})})}},4817:function(e,r,t){var n=t(5861),a=t(7757),i=t.n(a),s=t(1243),c=function(){var e=(0,n.Z)(i().mark((function e(r){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get(r);case 3:return t=e.sent,e.abrupt("return",t);case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}();r.Z=c},8906:function(e,r,t){t.r(r),t.d(r,{default:function(){return j}});var n=t(7689),a=t(5861),i=t(9439),s=t(7757),c=t.n(s),o=t(4817),u=t(2791),l=t(9173),v={NODE_ENV:"production",PUBLIC_URL:"/goit-react-hw-05-movies",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_KEY,d=function(e){var r=(0,u.useState)([]),t=(0,i.Z)(r,2),n=t[0],s=t[1],d=(0,u.useState)(!0),p=(0,i.Z)(d,2),_=p[0],h=p[1],m=(0,u.useState)(null),f=(0,i.Z)(m,2),w=f[0],x=f[1];return(0,u.useEffect)((function(){var r=function(){var r=(0,a.Z)(c().mark((function r(){var t,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t="".concat(l.FH,"movie/",e,"/reviews?api_key=","".concat(v),"&language=en-US"),r.prev=1,r.next=4,(0,o.Z)(t);case 4:if(n=r.sent,e){r.next=8;break}return s(null),r.abrupt("return");case 8:if(s(n.data.results),n){r.next=11;break}throw new Error("Getting detailed data is impossible in that moment");case 11:r.next=16;break;case 13:r.prev=13,r.t0=r.catch(1),x(r.t0.message);case 16:return r.prev=16,h(!1),r.finish(16);case 19:case"end":return r.stop()}}),r,null,[[1,13,16,19]])})));return function(){return r.apply(this,arguments)}}();x(null),h(!0),r()}),[e]),{isLoading:_,error:w,movieReviews:n}},p=t(9046),_="Review_review__M-wwA",h="Review_reviewList__XrNwx",m="Review_reviewListArticle__d2mAq",f="Review_reviewListData__Lyw24",w="Review_reviewListCreation__nTM5U",x=t(8174),S=t(3540),g=t(3712),b=t(184),j=function(){var e=(0,n.UO)().movieID,r=d(e),t=r.isLoading,a=r.error,i=r.movieReviews;return a&&x.Am.error(a),0===i.length?(0,b.jsx)("h2",{children:"There is no any comment for this movie"}):i?(0,b.jsxs)("div",{className:_,children:[t&&(0,b.jsx)(p.Z,{}),(0,b.jsx)("ul",{className:h,children:i.map((function(e){return(0,b.jsx)("li",{children:(0,b.jsxs)("article",{className:f,children:[(0,b.jsx)("h3",{children:e.author}),(0,b.jsx)("div",{children:(0,S.ZP)(g.TU.parse(e.content))}),(0,b.jsx)("footer",{className:m,children:(0,b.jsxs)("p",{className:w,children:["Created at:",(0,b.jsxs)("time",{dateTime:e.created_at,children:[" ",e.created_at.split("T")[0]]})]})})]})},e.id)}))})]}):void 0}},9173:function(e){e.exports=JSON.parse('{"FH":"https://api.themoviedb.org/3/","B9":"https://image.tmdb.org/t/p/w300"}')}}]);
//# sourceMappingURL=906.14fbb86d.chunk.js.map