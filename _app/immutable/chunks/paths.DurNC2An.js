import{B as w,k as l,y as q,C as v}from"./utils.BJ5MOpeA.js";const c=[];function j(s,t){return{subscribe:x(s,t).subscribe}}function x(s,t=l){let n=null;const o=new Set;function i(r){if(v(s,r)&&(s=r,n)){const u=!c.length;for(const e of o)e[1](),c.push(e,s);if(u){for(let e=0;e<c.length;e+=2)c[e][0](c[e+1]);c.length=0}}}function b(r){i(r(s))}function f(r,u=l){const e=[r,u];return o.add(e),o.size===1&&(n=t(i,b)||l),r(s),()=>{o.delete(e),o.size===0&&n&&(n(),n=null)}}return{set:i,update:b,subscribe:f}}function B(s,t,n){const o=!Array.isArray(s),i=o?[s]:s;if(!i.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const b=t.length<2;return j(n,(f,r)=>{let u=!1;const e=[];let d=0,p=l;const g=()=>{if(d)return;p();const a=t(o?e[0]:e,f,r);b?f(a):p=typeof a=="function"?a:l},k=i.map((a,_)=>w(a,m=>{e[_]=m,d&=~(1<<_),u&&g()},()=>{d|=1<<_}));return u=!0,g(),function(){q(k),p(),u=!1}})}function T(s){return{subscribe:s.subscribe.bind(s)}}function C(s){let t;return w(s,n=>t=n)(),t}var y;const z=((y=globalThis.__sveltekit_124n9uj)==null?void 0:y.base)??"";var h;const E=((h=globalThis.__sveltekit_124n9uj)==null?void 0:h.assets)??z;export{j as a,z as b,E as c,B as d,C as g,T as r,x as w};
