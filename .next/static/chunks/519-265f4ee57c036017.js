"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[519],{3879:function(t,n,e){e.d(n,{Z:function(){return r}});/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,e(843).Z)("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]])},8025:function(t,n,e){e.d(n,{Z:function(){return r}});/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,e(843).Z)("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]])},5160:function(t,n,e){e.d(n,{Z:function(){return r}});/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,e(843).Z)("BarChart2",[["line",{x1:"18",x2:"18",y1:"20",y2:"10",key:"1xfpm4"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4",key:"be30l9"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14",key:"1r4le6"}]])},6679:function(t,n,e){e.d(n,{Z:function(){return i}});let r={active:!0,breakpoints:{},delay:4e3,jump:!1,playOnInit:!0,stopOnFocusIn:!0,stopOnInteraction:!0,stopOnMouseEnter:!1,stopOnLastSnap:!1,rootNode:null};function i(t={}){let n,e,o;let u=!1,c=!0,a=!1,l=0,s=0;function f(){if(o||!c)return;u||e.emit("autoplay:play");let{ownerWindow:t}=e.internalEngine();t.clearInterval(s),s=t.setInterval(g,n.delay),u=!0}function d(){if(o)return;u&&e.emit("autoplay:stop");let{ownerWindow:t}=e.internalEngine();t.clearInterval(s),s=0,u=!1}function p(){let{ownerDocument:t}=e.internalEngine();if("hidden"===t.visibilityState)return c=u,d();c&&f()}function m(t){void 0!==t&&(a=t),c=!0,f()}function g(){l=requestAnimationFrame(()=>{let{index:t}=e.internalEngine(),r=t.clone().add(1).get(),i=e.scrollSnapList().length-1;n.stopOnLastSnap&&r===i&&d(),e.canScrollNext()?e.scrollNext(a):e.scrollTo(0,a)})}return{name:"autoplay",options:t,init:function(u,l){e=u;let{mergeOptions:s,optionsAtMedia:m}=l,g=s(r,i.globalOptions);if(n=m(s(g,t)),e.scrollSnapList().length<=1)return;a=n.jump,o=!1;let{eventStore:y,ownerDocument:h}=e.internalEngine(),b=e.rootNode(),v=n.rootNode&&n.rootNode(b)||b,x=e.containerNode();e.on("pointerDown",d),n.stopOnInteraction||e.on("pointerUp",f),n.stopOnMouseEnter&&(y.add(v,"mouseenter",()=>{c=!1,d()}),n.stopOnInteraction||y.add(v,"mouseleave",()=>{c=!0,f()})),n.stopOnFocusIn&&(y.add(x,"focusin",d),n.stopOnInteraction||y.add(x,"focusout",f)),y.add(h,"visibilitychange",p),n.playOnInit&&e.on("init",f).on("reInit",f)},destroy:function(){e.off("init",f).off("reInit",f).off("pointerDown",d).off("pointerUp",f),d(),cancelAnimationFrame(l),l=0,o=!0,u=!1},play:m,stop:function(){u&&d()},reset:function(){u&&m()},isPlaying:function(){return u}}}i.globalOptions=void 0},8062:function(t,n,e){e.d(n,{Z:function(){return I}});var r=e(2265);function i(t){return"[object Object]"===Object.prototype.toString.call(t)||Array.isArray(t)}function o(t,n){let e=Object.keys(t),r=Object.keys(n);return e.length===r.length&&JSON.stringify(Object.keys(t.breakpoints||{}))===JSON.stringify(Object.keys(n.breakpoints||{}))&&e.every(e=>{let r=t[e],u=n[e];return"function"==typeof r?`${r}`==`${u}`:i(r)&&i(u)?o(r,u):r===u})}function u(t){return t.concat().sort((t,n)=>t.name>n.name?1:-1).map(t=>t.options)}function c(t){return"number"==typeof t}function a(t){return"string"==typeof t}function l(t){return"boolean"==typeof t}function s(t){return"[object Object]"===Object.prototype.toString.call(t)}function f(t){return Math.abs(t)}function d(t){return Math.sign(t)}function p(t){return h(t).map(Number)}function m(t){return t[g(t)]}function g(t){return Math.max(0,t.length-1)}function y(t,n=0){return Array.from(Array(t),(t,e)=>n+e)}function h(t){return Object.keys(t)}function b(t,n){return void 0!==n.MouseEvent&&t instanceof n.MouseEvent}function v(){let t=[],n={add:function(e,r,i,o={passive:!0}){let u;return"addEventListener"in e?(e.addEventListener(r,i,o),u=()=>e.removeEventListener(r,i,o)):(e.addListener(i),u=()=>e.removeListener(i)),t.push(u),n},clear:function(){t=t.filter(t=>t())}};return n}function x(t=0,n=0){let e=f(t-n);function r(e){return e<t||e>n}return{length:e,max:n,min:t,constrain:function(e){return r(e)?e<t?t:n:e},reachedAny:r,reachedMax:function(t){return t>n},reachedMin:function(n){return n<t},removeOffset:function(t){return e?t-e*Math.ceil((t-n)/e):t}}}function O(t){let n=t;function e(t){return c(t)?t:t.get()}return{get:function(){return n},set:function(t){n=e(t)},add:function(t){n+=e(t)},subtract:function(t){n-=e(t)}}}function w(t,n,e){let r="x"===t.scroll?function(t){return`translate3d(${t}px,0px,0px)`}:function(t){return`translate3d(0px,${t}px,0px)`},i=e.style,o=!1;return{clear:function(){o||(i.transform="",e.getAttribute("style")||e.removeAttribute("style"))},to:function(t){o||(i.transform=r(n.apply(t)))},toggleActive:function(t){o=!t}}}let E={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0};function S(t,n,e){let r,i,o,u,I;let k=t.ownerDocument,D=k.defaultView,L=function(t){function n(t,n){return function t(n,e){return[n,e].reduce((n,e)=>(h(e).forEach(r=>{let i=n[r],o=e[r],u=s(i)&&s(o);n[r]=u?t(i,o):o}),n),{})}(t,n||{})}return{mergeOptions:n,optionsAtMedia:function(e){let r=e.breakpoints||{},i=h(r).filter(n=>t.matchMedia(n).matches).map(t=>r[t]).reduce((t,e)=>n(t,e),{});return n(e,i)},optionsMediaQueries:function(n){return n.map(t=>h(t.breakpoints||{})).reduce((t,n)=>t.concat(n),[]).map(t.matchMedia)}}}(D),A=(I=[],{init:function(t,n){return(I=n.filter(({options:t})=>!1!==L.optionsAtMedia(t).active)).forEach(n=>n.init(t,L)),n.reduce((t,n)=>Object.assign(t,{[n.name]:n}),{})},destroy:function(){I=I.filter(t=>t.destroy())}}),M=v(),N=function(){let t;let n={},e={init:function(n){t=n},emit:function(r){return(n[r]||[]).forEach(n=>n(t,r)),e},off:function(t,r){return n[t]=(n[t]||[]).filter(t=>t!==r),e},on:function(t,r){return n[t]=(n[t]||[]).concat([r]),e}};return e}(),{mergeOptions:F,optionsAtMedia:j,optionsMediaQueries:P}=L,{on:T,off:z,emit:H}=N,V=!1,C=F(E,S.globalOptions),Z=F(C),q=[];function B(n,e){!V&&(Z=j(C=F(C,n)),q=e||q,function(){let{container:n,slides:e}=Z;o=(a(n)?t.querySelector(n):n)||t.children[0];let r=a(e)?o.querySelectorAll(e):e;u=[].slice.call(r||o.children)}(),r=function n(e){let r=function(t,n,e,r,i,o,u){let s,E;let{align:S,axis:I,direction:k,startIndex:D,loop:L,duration:A,dragFree:M,dragThreshold:N,inViewThreshold:F,slidesToScroll:j,skipSnaps:P,containScroll:T,watchResize:z,watchSlides:H,watchDrag:V}=o,C={measure:function(t){let{offsetTop:n,offsetLeft:e,offsetWidth:r,offsetHeight:i}=t;return{top:n,right:e+r,bottom:n+i,left:e,width:r,height:i}}},Z=C.measure(n),q=e.map(C.measure),B=function(t){let n="rtl"===t?-1:1;return{apply:function(t){return t*n}}}(k),R=function(t,n){let e="y"===t?"y":"x";return{scroll:e,cross:"y"===t?"x":"y",startEdge:"y"===e?"top":"rtl"===n?"right":"left",endEdge:"y"===e?"bottom":"rtl"===n?"left":"right",measureSize:function(t){let{width:n,height:r}=t;return"x"===e?n:r}}}(I,k),U=R.measureSize(Z),$={measure:function(t){return t/100*U}},_=function(t,n){let e={start:function(){return 0},center:function(t){return(n-t)/2},end:function(t){return n-t}};return{measure:function(r,i){return a(t)?e[t](r):t(n,r,i)}}}(S,U),J=!L&&!!T,{slideSizes:X,slideSizesWithGaps:Q,startGap:Y,endGap:G}=function(t,n,e,r,i,o){let{measureSize:u,startEdge:c,endEdge:a}=t,l=e[0]&&i,s=function(){if(!l)return 0;let t=e[0];return f(n[c]-t[c])}(),d=l?parseFloat(o.getComputedStyle(m(r)).getPropertyValue(`margin-${a}`)):0,p=e.map(u),y=e.map((t,n,e)=>{let r=n===g(e);return n?r?p[n]+d:e[n+1][c]-t[c]:p[n]+s}).map(f);return{slideSizes:p,slideSizesWithGaps:y,startGap:s,endGap:d}}(R,Z,q,e,L||!!T,i),K=function(t,n,e,r,i,o,u,a,l,s){let{startEdge:d,endEdge:y}=t,h=c(r);return{groupSlides:function(t){return h?p(t).filter(t=>t%r==0).map(n=>t.slice(n,n+r)):t.length?p(t).reduce((r,c)=>{let s=m(r)||0,p=c===g(t),h=o[d]-u[s][d],b=o[d]-u[c][y],v=i||0!==s?0:n.apply(a);return f(b-(!i&&p?n.apply(l):0)-(h+v))>e+2&&r.push(c),p&&r.push(t.length),r},[]).map((n,e,r)=>{let i=Math.max(r[e-1]||0);return t.slice(i,n)}):[]}}}(R,B,U,j,L,Z,q,Y,G,0),{snaps:W,snapsAligned:tt}=function(t,n,e,r,i){let{startEdge:o,endEdge:u}=t,{groupSlides:c}=i,a=c(r).map(t=>m(t)[u]-t[0][o]).map(f).map(n.measure),l=r.map(t=>e[o]-t[o]).map(t=>-f(t)),s=c(l).map(t=>t[0]).map((t,n)=>t+a[n]);return{snaps:l,snapsAligned:s}}(R,_,Z,q,K),tn=-m(W)+m(Q),{snapsContained:te,scrollContainLimit:tr}=function(t,n,e,r,i){let o=x(-n+t,0),u=e.map((t,n)=>{let{min:r,max:i}=o,u=o.constrain(t),c=n===g(e);return n?c||1>f(r-u)?r:1>f(i-u)?i:u:i}).map(t=>parseFloat(t.toFixed(3))),c=function(){let t=u[0],n=m(u);return x(u.lastIndexOf(t),u.indexOf(n)+1)}();return{snapsContained:function(){if(n<=t+2)return[o.max];if("keepSnaps"===r)return u;let{min:e,max:i}=c;return u.slice(e,i)}(),scrollContainLimit:c}}(U,tn,tt,T,0),ti=J?te:tt,{limit:to}=function(t,n,e){let r=n[0];return{limit:x(e?r-t:m(n),r)}}(tn,ti,L),tu=function t(n,e,r){let{constrain:i}=x(0,n),o=n+1,u=c(e);function c(t){return r?f((o+t)%o):i(t)}function a(){return t(n,u,r)}let l={get:function(){return u},set:function(t){return u=c(t),l},add:function(t){return a().set(u+t)},clone:a};return l}(g(ti),D,L),tc=tu.clone(),ta=p(e),tl=({dragHandler:t,scrollBody:n,scrollBounds:e,options:{loop:r}})=>{r||e.constrain(t.pointerDown()),n.seek()},ts=({scrollBody:t,translate:n,location:e,offsetLocation:r,scrollLooper:i,slideLooper:o,dragHandler:u,animation:c,eventHandler:a,options:{loop:l}},s)=>{let f=t.velocity(),d=t.settled();d&&!u.pointerDown()&&(c.stop(),a.emit("settle")),d||a.emit("scroll"),r.set(e.get()-f+f*s),l&&(i.loop(t.direction()),o.loop()),n.to(r.get())},tf=function(t,n,e,r){let i=v(),o=1e3/60,u=null,c=0,a=0;function l(t){if(!a)return;u||(u=t);let i=t-u;for(u=t,c+=i;c>=o;)e(),c-=o;r(f(c/o)),a&&n.requestAnimationFrame(l)}function s(){n.cancelAnimationFrame(a),u=null,c=0,a=0}return{init:function(){i.add(t,"visibilitychange",()=>{t.hidden&&(u=null,c=0)})},destroy:function(){s(),i.clear()},start:function(){a||(a=n.requestAnimationFrame(l))},stop:s,update:e,render:r}}(r,i,()=>tl(tS),t=>ts(tS,t)),td=ti[tu.get()],tp=O(td),tm=O(td),tg=O(td),ty=function(t,n,e,r,i){let o=0,u=0,c=r,a=i,l=t.get(),s=0;function p(t){return c=t,g}function m(t){return a=t,g}let g={direction:function(){return u},duration:function(){return c},velocity:function(){return o},seek:function(){let n=e.get()-t.get(),r=0;return c?(o+=n/c,o*=a,l+=o,t.add(o),r=l-s):(o=0,t.set(e),r=n),u=d(r),s=l,g},settled:function(){return .001>f(e.get()-n.get())},useBaseFriction:function(){return m(i)},useBaseDuration:function(){return p(r)},useFriction:m,useDuration:p};return g}(tp,tm,tg,A,.68),th=function(t,n,e,r,i){let{reachedAny:o,removeOffset:u,constrain:c}=r;function a(t){return t.concat().sort((t,n)=>f(t)-f(n))[0]}function l(n,r){let i=[n,n+e,n-e];if(!t)return i[0];if(!r)return a(i);let o=i.filter(t=>d(t)===r);return o.length?a(o):m(i)-e}return{byDistance:function(e,r){let a=i.get()+e,{index:s,distance:d}=function(e){let r=t?u(e):c(e),{index:i}=n.map(t=>t-r).map(t=>l(t,0)).map((t,n)=>({diff:t,index:n})).sort((t,n)=>f(t.diff)-f(n.diff))[0];return{index:i,distance:r}}(a),p=!t&&o(a);if(!r||p)return{index:s,distance:e};let m=e+l(n[s]-d,0);return{index:s,distance:m}},byIndex:function(t,e){let r=l(n[t]-i.get(),e);return{index:t,distance:r}},shortcut:l}}(L,ti,tn,to,tg),tb=function(t,n,e,r,i,o,u){function c(i){let c=i.distance,a=i.index!==n.get();o.add(c),c&&(r.duration()?t.start():(t.update(),t.render(1),t.update())),a&&(e.set(n.get()),n.set(i.index),u.emit("select"))}return{distance:function(t,n){c(i.byDistance(t,n))},index:function(t,e){let r=n.clone().set(t);c(i.byIndex(r.get(),e))}}}(tf,tu,tc,ty,th,tg,u),tv=function(t){let{max:n,length:e}=t;return{get:function(t){return e?-((t-n)/e):0}}}(to),tx=v(),tO=function(t,n,e,r){let i;let o={},u=null,c=null,a=!1;return{init:function(){i=new IntersectionObserver(t=>{a||(t.forEach(t=>{o[n.indexOf(t.target)]=t}),u=null,c=null,e.emit("slidesInView"))},{root:t.parentElement,threshold:r}),n.forEach(t=>i.observe(t))},destroy:function(){i&&i.disconnect(),a=!0},get:function(t=!0){if(t&&u)return u;if(!t&&c)return c;let n=h(o).reduce((n,e)=>{let r=parseInt(e),{isIntersecting:i}=o[r];return(t&&i||!t&&!i)&&n.push(r),n},[]);return t&&(u=n),t||(c=n),n}}}(n,e,u,F),{slideRegistry:tw}=function(t,n,e,r,i,o){let{groupSlides:u}=i,{min:c,max:a}=r;return{slideRegistry:function(){let r=u(o);return 1===e.length?[o]:t&&"keepSnaps"!==n?r.slice(c,a).map((t,n,e)=>{let r=n===g(e);return n?r?y(g(o)-m(e)[0]+1,m(e)[0]):t:y(m(e[0])+1)}):r}()}}(J,T,ti,tr,K,ta),tE=function(t,n,e,r,i,o){let u=0;function a(t){"Tab"===t.code&&(u=new Date().getTime())}function l(a){o.add(a,"focus",()=>{if(new Date().getTime()-u>10)return;t.scrollLeft=0;let o=n.indexOf(a),l=e.findIndex(t=>t.includes(o));c(l)&&(i.useDuration(0),r.index(l,0))},{passive:!0,capture:!0})}return{init:function(){o.add(document,"keydown",a,!1),n.forEach(l)}}}(t,e,tw,tb,ty,tx),tS={ownerDocument:r,ownerWindow:i,eventHandler:u,containerRect:Z,slideRects:q,animation:tf,axis:R,direction:B,dragHandler:function(t,n,e,r,i,o,u,c,a,s,p,m,g,y,h,O,w,E,S,I){let{cross:k}=t,D=["INPUT","SELECT","TEXTAREA"],L={passive:!1},A=v(),M=v(),N=x(50,225).constrain(h.measure(20)),F={mouse:300,touch:400},j={mouse:500,touch:600},P=O?43:25,T=!1,z=0,H=0,V=!1,C=!1,Z=!1,q=!1;function B(t){let e=u.readPoint(t),r=u.readPoint(t,k),i=f(e-z),c=f(r-H);if(!C&&!q&&(!t.cancelable||!(C=i>c)))return R(t);let l=u.pointerMove(t);i>w&&(Z=!0),p.useFriction(.3).useDuration(1),a.start(),o.add(n.apply(l)),t.preventDefault()}function R(t){let e=m.byDistance(0,!1).index!==g.get(),r=u.pointerUp(t)*(O?j:F)[q?"mouse":"touch"],i=function(t,n){let e=g.add(-1*d(t)),r=m.byDistance(t,!O).distance;return O||f(t)<N?r:E&&n?.5*r:m.byIndex(e.get(),0).distance}(n.apply(r),e),o=function(t,n){var e,r;if(0===t||0===n||f(t)<=f(n))return 0;let i=(e=f(t),r=f(n),f(e-r));return f(i/t)}(r,i);C=!1,V=!1,M.clear(),p.useDuration(P-10*o).useFriction(.68+o/50),s.distance(i,!O),q=!1,y.emit("pointerUp")}function U(t){Z&&(t.stopPropagation(),t.preventDefault())}return{init:function(t){I&&A.add(e,"dragstart",t=>t.preventDefault(),L).add(e,"touchmove",()=>void 0,L).add(e,"touchend",()=>void 0).add(e,"touchstart",n).add(e,"mousedown",n).add(e,"touchcancel",R).add(e,"contextmenu",R).add(e,"click",U,!0);function n(n){(l(I)||I(t,n))&&function(t){let n=b(t,i);q=n,(!n||0===t.button)&&!function(t){let n=t.nodeName||"";return D.includes(n)}(t.target)&&(Z=O&&n&&!t.buttons&&T,T=f(o.get()-c.get())>=2,V=!0,u.pointerDown(t),p.useFriction(0).useDuration(0),o.set(c),function(){let t=q?r:e;M.add(t,"touchmove",B,L).add(t,"touchend",R).add(t,"mousemove",B,L).add(t,"mouseup",R)}(),z=u.readPoint(t),H=u.readPoint(t,k),y.emit("pointerDown"))}(n)}},pointerDown:function(){return V},destroy:function(){A.clear(),M.clear()}}}(R,B,t,r,i,tg,function(t,n){let e,r;function i(t){return t.timeStamp}function o(e,r){let i=r||t.scroll,o=`client${"x"===i?"X":"Y"}`;return(b(e,n)?e:e.touches[0])[o]}return{pointerDown:function(t){return e=t,r=t,o(t)},pointerMove:function(t){let n=o(t)-o(r),u=i(t)-i(e)>170;return r=t,u&&(e=t),n},pointerUp:function(t){if(!e||!r)return 0;let n=o(r)-o(e),u=i(t)-i(e),c=i(t)-i(r)>170,a=n/u;return u&&!c&&f(a)>.1?a:0},readPoint:o}}(R,i),tp,tf,tb,ty,th,tu,u,$,M,N,P,0,V),eventStore:tx,percentOfView:$,index:tu,indexPrevious:tc,limit:to,location:tp,offsetLocation:tm,options:o,resizeHandler:function(t,n,e,r,i,o,u){let c,a;let s=[],d=!1;function p(t){return i.measureSize(u.measure(t))}return{init:function(i){o&&(a=p(t),s=r.map(p),c=new ResizeObserver(u=>{!d&&(l(o)||o(i,u))&&function(o){for(let u of o){let o=u.target===t,c=r.indexOf(u.target),l=o?a:s[c];if(f(p(o?t:r[c])-l)>=.5){e.requestAnimationFrame(()=>{i.reInit(),n.emit("resize")});break}}}(u)}),[t].concat(r).forEach(t=>c.observe(t)))},destroy:function(){c&&c.disconnect(),d=!0}}}(n,u,i,e,R,z,C),scrollBody:ty,scrollBounds:function(t,n,e,r,i){let o=i.measure(10),u=i.measure(50),c=x(.1,.99),a=!1;return{constrain:function(i){if(!(!a&&t.reachedAny(e.get())&&t.reachedAny(n.get())))return;let l=t.reachedMin(n.get())?"min":"max",s=f(t[l]-n.get()),d=e.get()-n.get(),p=c.constrain(s/u);e.subtract(d*p),!i&&f(d)<o&&(e.set(t.constrain(e.get())),r.useDuration(25).useBaseFriction())},toggleActive:function(t){a=!t}}}(to,tm,tg,ty,$),scrollLooper:function(t,n,e,r){let{reachedMin:i,reachedMax:o}=x(n.min+.1,n.max+.1);return{loop:function(n){if(!(1===n?o(e.get()):-1===n&&i(e.get())))return;let u=-1*n*t;r.forEach(t=>t.add(u))}}}(tn,to,tm,[tp,tm,tg]),scrollProgress:tv,scrollSnapList:ti.map(tv.get),scrollSnaps:ti,scrollTarget:th,scrollTo:tb,slideLooper:function(t,n,e,r,i,o,u,c,a,l){let s=p(o),f=g(m(p(o).reverse(),c[0]),r,!1).concat(g(m(s,e-c[0]-1),-r,!0));function d(t,n){return t.reduce((t,n)=>t-o[n],n)}function m(t,n){return t.reduce((t,e)=>d(t,n)>0?t.concat([e]):t,[])}function g(o,c,s){let f=u.map((t,n)=>({start:t-i[n]+.5+c,end:t+e-.5+c}));return o.map(e=>{let i=s?0:-r,o=s?r:0,u=f[e][s?"end":"start"];return{index:e,loopPoint:u,slideLocation:O(-1),translate:w(t,n,l[e]),target:()=>a.get()>u?i:o}})}return{canLoop:function(){return f.every(({index:t})=>.1>=d(s.filter(n=>n!==t),e))},clear:function(){f.forEach(t=>t.translate.clear())},loop:function(){f.forEach(t=>{let{target:n,translate:e,slideLocation:r}=t,i=n();i!==r.get()&&(e.to(i),r.set(i))})},loopPoints:f}}(R,B,U,tn,X,Q,W,ti,tm,e),slideFocus:tE,slidesHandler:(E=!1,{init:function(t){H&&(s=new MutationObserver(n=>{!E&&(l(H)||H(t,n))&&function(n){for(let e of n)if("childList"===e.type){t.reInit(),u.emit("slidesChanged");break}}(n)})).observe(n,{childList:!0})},destroy:function(){s&&s.disconnect(),E=!0}}),slidesInView:tO,slideIndexes:ta,slideRegistry:tw,slidesToScroll:K,target:tg,translate:w(R,B,n)};return tS}(t,o,u,k,D,e,N);return e.loop&&!r.slideLooper.canLoop()?n(Object.assign({},e,{loop:!1})):r}(Z),P([C,...q.map(({options:t})=>t)]).forEach(t=>M.add(t,"change",R)),Z.active&&(r.translate.to(r.location.get()),r.animation.init(),r.slidesInView.init(),r.slideFocus.init(),r.eventHandler.init(J),r.resizeHandler.init(J),r.slidesHandler.init(J),r.options.loop&&r.slideLooper.loop(),o.offsetParent&&u.length&&r.dragHandler.init(J),i=A.init(J,q)))}function R(t,n){let e=_();U(),B(F({startIndex:e},t),n),N.emit("reInit")}function U(){r.dragHandler.destroy(),r.eventStore.clear(),r.translate.clear(),r.slideLooper.clear(),r.resizeHandler.destroy(),r.slidesHandler.destroy(),r.slidesInView.destroy(),r.animation.destroy(),A.destroy(),M.clear()}function $(t,n,e){Z.active&&!V&&(r.scrollBody.useBaseFriction().useDuration(!0===n?0:Z.duration),r.scrollTo.index(t,e||0))}function _(){return r.index.get()}let J={canScrollNext:function(){return r.index.add(1).get()!==_()},canScrollPrev:function(){return r.index.add(-1).get()!==_()},containerNode:function(){return o},internalEngine:function(){return r},destroy:function(){V||(V=!0,M.clear(),U(),N.emit("destroy"))},off:z,on:T,emit:H,plugins:function(){return i},previousScrollSnap:function(){return r.indexPrevious.get()},reInit:R,rootNode:function(){return t},scrollNext:function(t){$(r.index.add(1).get(),t,-1)},scrollPrev:function(t){$(r.index.add(-1).get(),t,1)},scrollProgress:function(){return r.scrollProgress.get(r.location.get())},scrollSnapList:function(){return r.scrollSnapList},scrollTo:$,selectedScrollSnap:_,slideNodes:function(){return u},slidesInView:function(){return r.slidesInView.get()},slidesNotInView:function(){return r.slidesInView.get(!1)}};return B(n,e),setTimeout(()=>N.emit("init"),0),J}function I(t={},n=[]){let e=(0,r.useRef)(t),i=(0,r.useRef)(n),[c,a]=(0,r.useState)(),[l,s]=(0,r.useState)(),f=(0,r.useCallback)(()=>{c&&c.reInit(e.current,i.current)},[c]);return(0,r.useEffect)(()=>{if("undefined"!=typeof window&&window.document&&window.document.createElement&&l){S.globalOptions=I.globalOptions;let t=S(l,e.current,i.current);return a(t),()=>t.destroy()}a(void 0)},[l,a]),(0,r.useEffect)(()=>{o(e.current,t)||(e.current=t,f())},[t,f]),(0,r.useEffect)(()=>{!function(t,n){if(t.length!==n.length)return!1;let e=u(t),r=u(n);return e.every((t,n)=>o(t,r[n]))}(i.current,n)&&(i.current=n,f())},[n,f]),[s,c]}S.globalOptions=void 0,I.globalOptions=void 0}}]);