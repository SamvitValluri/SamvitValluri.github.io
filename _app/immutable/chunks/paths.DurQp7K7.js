import{B as q,k as l,y as k,C as m}from"./utils.CDCVEbWx.js";const c=[];function x(s,t){return{subscribe:z(s,t).subscribe}}function z(s,t=l){let n=null;const o=new Set;function u(r){if(m(s,r)&&(s=r,n)){const i=!c.length;for(const e of o)e[1](),c.push(e,s);if(i){for(let e=0;e<c.length;e+=2)c[e][0](c[e+1]);c.length=0}}}function b(r){u(r(s))}function f(r,i=l){const e=[r,i];return o.add(e),o.size===1&&(n=t(u,b)||l),r(s),()=>{o.delete(e),o.size===0&&n&&(n(),n=null)}}return{set:u,update:b,subscribe:f}}function T(s,t,n){const o=!Array.isArray(s),u=o?[s]:s;if(!u.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const b=t.length<2;return x(n,(f,r)=>{let i=!1;const e=[];let d=0,g=l;const _=()=>{if(d)return;g();const a=t(o?e[0]:e,f,r);b?f(a):g=typeof a=="function"?a:l},v=u.map((a,p)=>q(a,w=>{e[p]=w,d&=~(1<<p),i&&_()},()=>{d|=1<<p}));return i=!0,_(),function(){k(v),g(),i=!1}})}function C(s){return{subscribe:s.subscribe.bind(s)}}function E(s){let t;return q(s,n=>t=n)(),t}var y;const A=((y=globalThis.__sveltekit_19y1qgv)==null?void 0:y.base)??"";var h;const S=((h=globalThis.__sveltekit_19y1qgv)==null?void 0:h.assets)??A;export{x as a,A as b,S as c,T as d,E as g,C as r,z as w};
