import{S as q}from"../chunks/skills.C4bSyqoN.js";import{s as C,c as G,b as h,a as o,t as b,d as w,e as I}from"../chunks/disclose-version.sEayx-63.js";import{p as J,a as K,g as n,f as D,t as $,d as k,n as x,b as u,c as F,r as A}from"../chunks/utils.CH7S1e-6.js";import{i as H}from"../chunks/index-client.NRCBfh7y.js";import{e as L,i as Q,d as V}from"../chunks/stores.CahFv-D_.js";import{b as W,h as X}from"../chunks/base.C-W_4K9l.js";import{B as Y}from"../chunks/base-page.UQ4oGdMS.js";import{E as Z}from"../chunks/empty-result.OT2lWDQb.js";import{F as ee}from"../chunks/prism-tomorrow.DpFiTEoe.js";import"../chunks/legacy.DhjKCi4U.js";import{M as te,A as ae}from"../chunks/assets.BuomZuzL.js";import{B as re}from"../chunks/index.kcGP_e9N.js";import{S as O}from"../chunks/separator.BHlwubGY.js";import{H as oe}from"../chunks/h1.CWX1ujFg.js";import{E as se}from"../chunks/experience.BYIYiruP.js";import{P as le}from"../chunks/projects.COqX9ODw.js";function ne({params:m}){if(m.slug)return{item:q.items.find(g=>g.slug===m.slug)}}const Be=Object.freeze(Object.defineProperty({__proto__:null,load:ne},Symbol.toStringTag,{value:"Module"}));var ie=b("<a><!></a>"),me=b('<div class="flex flex-row flex-wrap items-center gap-2 py-4"><!> <!></div>'),de=b("<!> <!> <!> <!>",1);function Me(m,r){J(r,!0);const g=C(),c=()=>I(V,"$mode",g);let z=k(()=>{var t,a;return`${((a=(t=r.data)==null?void 0:t.item)==null?void 0:a.name)??"Not Found"} - Skills`}),N=k(()=>{var t,a,e;return(c()=="dark"?(a=(t=r.data)==null?void 0:t.item)==null?void 0:a.logo.dark:(e=r.data.item)==null?void 0:e.logo.light)??ae.Unknown.light}),P=k(()=>(()=>{const t=r.data.item;if(!t)return[];const a=[];return le.items.forEach(e=>{e.skills.find(i=>i.slug===t.slug)&&a.push({link:`/projects/${e.slug}`,logo:c()==="dark"?e.logo.dark:e.logo.light,name:e.name})}),se.items.forEach(e=>{e.skills.find(i=>i.slug===t.slug)&&a.push({link:`/experience/${e.slug}`,logo:c()==="dark"?e.logo.dark:e.logo.light,name:e.name})}),a})());Y(m,{get title(){return n(z)},children:(t,a)=>{var e=G(),i=D(e);H(i,()=>!r.data.item,p=>{Z(p)},p=>{var S=de(),E=D(S);ee(E,{get img(){return n(N)},children:(_,d)=>{oe(_,{children:(f,B)=>{x();var s=h();$(()=>w(s,r.data.item.name)),o(f,s)},$$slots:{default:!0}})},$$slots:{default:!0}});var y=u(E,2);O(y,{});var j=u(y,2);O(j,{});var R=u(j,2);H(R,()=>n(P).length!==0,_=>{var d=me(),f=F(d);te(f,{children:(s,v)=>{x();var l=h("Related items");o(s,l)},$$slots:{default:!0}});var B=u(f,2);L(B,17,()=>n(P),Q,(s,v)=>{var l=ie();$(()=>W(l,"href",X(n(v).link)));var T=F(l);re(T,{children:(U,fe)=>{x();var M=h();$(()=>w(M,n(v).name)),o(U,M)},$$slots:{default:!0}}),A(l),o(s,l)}),A(d),o(_,d)}),o(p,S)}),o(t,e)},$$slots:{default:!0}}),K()}export{Me as component,Be as universal};
