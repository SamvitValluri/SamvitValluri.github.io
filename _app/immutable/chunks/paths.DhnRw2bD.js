import{B as w,k as l,y as q,C as v}from"./utils.C8SEjDDa.js";const c=[];function x(s,t){return{subscribe:z(s,t).subscribe}}function z(s,t=l){let n=null;const o=new Set;function i(r){if(v(s,r)&&(s=r,n)){const u=!c.length;for(const e of o)e[1](),c.push(e,s);if(u){for(let e=0;e<c.length;e+=2)c[e][0](c[e+1]);c.length=0}}}function b(r){i(r(s))}function f(r,u=l){const e=[r,u];return o.add(e),o.size===1&&(n=t(i,b)||l),r(s),()=>{o.delete(e),o.size===0&&n&&(n(),n=null)}}return{set:i,update:b,subscribe:f}}function T(s,t,n){const o=!Array.isArray(s),i=o?[s]:s;if(!i.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const b=t.length<2;return x(n,(f,r)=>{let u=!1;const e=[];let d=0,g=l;const _=()=>{if(d)return;g();const a=t(o?e[0]:e,f,r);b?f(a):g=typeof a=="function"?a:l},k=i.map((a,p)=>w(a,m=>{e[p]=m,d&=~(1<<p),u&&_()},()=>{d|=1<<p}));return u=!0,_(),function(){q(k),g(),u=!1}})}function C(s){return{subscribe:s.subscribe.bind(s)}}function E(s){let t;return w(s,n=>t=n)(),t}var y;const A=((y=globalThis.__sveltekit_1ug124y)==null?void 0:y.base)??"";var h;const S=((h=globalThis.__sveltekit_1ug124y)==null?void 0:h.assets)??A;export{x as a,A as b,S as c,T as d,E as g,C as r,z as w};
