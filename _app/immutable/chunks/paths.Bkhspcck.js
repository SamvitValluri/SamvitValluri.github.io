import{B as k,k as l,y as q,C as v}from"./utils.CDCVEbWx.js";const a=[];function j(s,t){return{subscribe:x(s,t).subscribe}}function x(s,t=l){let n=null;const i=new Set;function u(r){if(v(s,r)&&(s=r,n)){const o=!a.length;for(const e of i)e[1](),a.push(e,s);if(o){for(let e=0;e<a.length;e+=2)a[e][0](a[e+1]);a.length=0}}}function b(r){u(r(s))}function f(r,o=l){const e=[r,o];return i.add(e),i.size===1&&(n=t(u,b)||l),r(s),()=>{i.delete(e),i.size===0&&n&&(n(),n=null)}}return{set:u,update:b,subscribe:f}}function B(s,t,n){const i=!Array.isArray(s),u=i?[s]:s;if(!u.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const b=t.length<2;return j(n,(f,r)=>{let o=!1;const e=[];let d=0,p=l;const g=()=>{if(d)return;p();const c=t(i?e[0]:e,f,r);b?f(c):p=typeof c=="function"?c:l},w=u.map((c,_)=>k(c,m=>{e[_]=m,d&=~(1<<_),o&&g()},()=>{d|=1<<_}));return o=!0,g(),function(){q(w),p(),o=!1}})}function T(s){return{subscribe:s.subscribe.bind(s)}}function C(s){let t;return k(s,n=>t=n)(),t}var y;const z=((y=globalThis.__sveltekit_1c5keji)==null?void 0:y.base)??"";var h;const E=((h=globalThis.__sveltekit_1c5keji)==null?void 0:h.assets)??z;export{j as a,z as b,E as c,B as d,C as g,T as r,x as w};
