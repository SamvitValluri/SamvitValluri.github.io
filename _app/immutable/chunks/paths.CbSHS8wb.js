import{B as w,k as l,y as m,C as q}from"./utils.7ruNgmf0.js";const c=[];function v(s,t){return{subscribe:x(s,t).subscribe}}function x(s,t=l){let n=null;const u=new Set;function i(r){if(q(s,r)&&(s=r,n)){const o=!c.length;for(const e of u)e[1](),c.push(e,s);if(o){for(let e=0;e<c.length;e+=2)c[e][0](c[e+1]);c.length=0}}}function b(r){i(r(s))}function f(r,o=l){const e=[r,o];return u.add(e),u.size===1&&(n=t(i,b)||l),r(s),()=>{u.delete(e),u.size===0&&n&&(n(),n=null)}}return{set:i,update:b,subscribe:f}}function T(s,t,n){const u=!Array.isArray(s),i=u?[s]:s;if(!i.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const b=t.length<2;return v(n,(f,r)=>{let o=!1;const e=[];let d=0,g=l;const _=()=>{if(d)return;g();const a=t(u?e[0]:e,f,r);b?f(a):g=typeof a=="function"?a:l},z=i.map((a,p)=>w(a,k=>{e[p]=k,d&=~(1<<p),o&&_()},()=>{d|=1<<p}));return o=!0,_(),function(){m(z),g(),o=!1}})}function C(s){return{subscribe:s.subscribe.bind(s)}}function E(s){let t;return w(s,n=>t=n)(),t}var y;const A=((y=globalThis.__sveltekit_gu0uzd)==null?void 0:y.base)??"";var h;const S=((h=globalThis.__sveltekit_gu0uzd)==null?void 0:h.assets)??A;export{v as a,A as b,S as c,T as d,E as g,C as r,x as w};
