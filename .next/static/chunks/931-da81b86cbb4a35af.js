"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{4991:function(e,n,t){t.d(n,{M:function(){return r}});function r(e,n,{checkForDefaultPrevented:t=!0}={}){return function(r){if(null==e||e(r),!1===t||!r.defaultPrevented)return null==n?void 0:n(r)}}},4104:function(e,n,t){t.d(n,{b:function(){return o},k:function(){return u}});var r=t(2265);function u(e,n){let t=(0,r.createContext)(n);function u(e){let{children:n,...u}=e,o=(0,r.useMemo)(()=>u,Object.values(u));return(0,r.createElement)(t.Provider,{value:o},n)}return u.displayName=e+"Provider",[u,function(u){let o=(0,r.useContext)(t);if(o)return o;if(void 0!==n)return n;throw Error(`\`${u}\` must be used within \`${e}\``)}]}function o(e,n=[]){let t=[],u=()=>{let n=t.map(e=>(0,r.createContext)(e));return function(t){let u=(null==t?void 0:t[e])||n;return(0,r.useMemo)(()=>({[`__scope${e}`]:{...t,[e]:u}}),[t,u])}};return u.scopeName=e,[function(n,u){let o=(0,r.createContext)(u),i=t.length;function l(n){let{scope:t,children:u,...l}=n,c=(null==t?void 0:t[e][i])||o,a=(0,r.useMemo)(()=>l,Object.values(l));return(0,r.createElement)(c.Provider,{value:a},u)}return t=[...t,u],l.displayName=n+"Provider",[l,function(t,l){let c=(null==l?void 0:l[e][i])||o,a=(0,r.useContext)(c);if(a)return a;if(void 0!==u)return u;throw Error(`\`${t}\` must be used within \`${n}\``)}]},function(...e){let n=e[0];if(1===e.length)return n;let t=()=>{let t=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let u=t.reduce((n,{useScope:t,scopeName:r})=>{let u=t(e)[`__scope${r}`];return{...n,...u}},{});return(0,r.useMemo)(()=>({[`__scope${n.scopeName}`]:u}),[u])}};return t.scopeName=n.scopeName,t}(u,...n)]}},8687:function(e,n,t){t.d(n,{M:function(){return c}});var r,u=t(2265),o=t(2618);let i=(r||(r=t.t(u,2)))["useId".toString()]||(()=>void 0),l=0;function c(e){let[n,t]=u.useState(i());return(0,o.b)(()=>{e||t(e=>null!=e?e:String(l++))},[e]),e||(n?`radix-${n}`:"")}},2642:function(e,n,t){t.d(n,{z:function(){return l}});var r=t(2265),u=t(4887),o=t(1266),i=t(2618);let l=e=>{let{present:n,children:t}=e,l=function(e){var n,t;let[o,l]=(0,r.useState)(),a=(0,r.useRef)({}),f=(0,r.useRef)(e),s=(0,r.useRef)("none"),[d,m]=(n=e?"mounted":"unmounted",t={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},(0,r.useReducer)((e,n)=>{let r=t[e][n];return null!=r?r:e},n));return(0,r.useEffect)(()=>{let e=c(a.current);s.current="mounted"===d?e:"none"},[d]),(0,i.b)(()=>{let n=a.current,t=f.current;if(t!==e){let r=s.current,u=c(n);e?m("MOUNT"):"none"===u||(null==n?void 0:n.display)==="none"?m("UNMOUNT"):t&&r!==u?m("ANIMATION_OUT"):m("UNMOUNT"),f.current=e}},[e,m]),(0,i.b)(()=>{if(o){let e=e=>{let n=c(a.current).includes(e.animationName);e.target===o&&n&&(0,u.flushSync)(()=>m("ANIMATION_END"))},n=e=>{e.target===o&&(s.current=c(a.current))};return o.addEventListener("animationstart",n),o.addEventListener("animationcancel",e),o.addEventListener("animationend",e),()=>{o.removeEventListener("animationstart",n),o.removeEventListener("animationcancel",e),o.removeEventListener("animationend",e)}}m("ANIMATION_END")},[o,m]),{isPresent:["mounted","unmountSuspended"].includes(d),ref:(0,r.useCallback)(e=>{e&&(a.current=getComputedStyle(e)),l(e)},[])}}(n),a="function"==typeof t?t({present:l.isPresent}):r.Children.only(t),f=(0,o.e)(l.ref,a.ref);return"function"==typeof t||l.isPresent?(0,r.cloneElement)(a,{ref:f}):null};function c(e){return(null==e?void 0:e.animationName)||"none"}l.displayName="Presence"},9586:function(e,n,t){t.d(n,{WV:function(){return l},jH:function(){return c}});var r=t(2110),u=t(2265),o=t(4887),i=t(9143);let l=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,n)=>{let t=(0,u.forwardRef)((e,t)=>{let{asChild:o,...l}=e,c=o?i.g7:n;return(0,u.useEffect)(()=>{window[Symbol.for("radix-ui")]=!0},[]),(0,u.createElement)(c,(0,r.Z)({},l,{ref:t}))});return t.displayName=`Primitive.${n}`,{...e,[n]:t}},{});function c(e,n){e&&(0,o.flushSync)(()=>e.dispatchEvent(n))}},9830:function(e,n,t){t.d(n,{W:function(){return u}});var r=t(2265);function u(e){let n=(0,r.useRef)(e);return(0,r.useEffect)(()=>{n.current=e}),(0,r.useMemo)(()=>(...e)=>{var t;return null===(t=n.current)||void 0===t?void 0:t.call(n,...e)},[])}},9310:function(e,n,t){t.d(n,{T:function(){return o}});var r=t(2265),u=t(9830);function o({prop:e,defaultProp:n,onChange:t=()=>{}}){let[o,i]=function({defaultProp:e,onChange:n}){let t=(0,r.useState)(e),[o]=t,i=(0,r.useRef)(o),l=(0,u.W)(n);return(0,r.useEffect)(()=>{i.current!==o&&(l(o),i.current=o)},[o,i,l]),t}({defaultProp:n,onChange:t}),l=void 0!==e,c=l?e:o,a=(0,u.W)(t);return[c,(0,r.useCallback)(n=>{if(l){let t="function"==typeof n?n(e):n;t!==e&&a(t)}else i(n)},[l,e,i,a])]}},2618:function(e,n,t){t.d(n,{b:function(){return u}});var r=t(2265);let u=(null==globalThis?void 0:globalThis.document)?r.useLayoutEffect:()=>{}}}]);