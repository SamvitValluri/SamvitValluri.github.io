import{S as q}from"../chunks/skills.DTN5o6uV.js";import{s as C,e as G,t as h,a as o,b,c as w,d as I}from"../chunks/disclose-version.B9DIXXxg.js";import{p as J,a as K,g as i,f as D,t as $,d as k,n as x,s as u,c as F,r as A}from"../chunks/utils.7ruNgmf0.js";import{i as H}from"../chunks/index-client.kRHgN_Rl.js";import{e as L,i as Q,d as V}from"../chunks/stores.C51cfZNV.js";import{s as W,h as X}from"../chunks/base.DxKE12PC.js";import{B as Y}from"../chunks/base-page.B18UlIzR.js";import{E as Z}from"../chunks/empty-result.CgzvxyT_.js";import{F as ee}from"../chunks/prism-tomorrow.BoxptRLj.js";import"../chunks/legacy.BMaVEKmg.js";import{M as te,A as ae}from"../chunks/assets.BYYsplGA.js";import"../chunks/index.DFlOSBme.js";import{S as O}from"../chunks/separator.CoT_5Vpn.js";import{H as re}from"../chunks/h1.BFBXGYJ2.js";import{E as oe}from"../chunks/experience.DebrY1bw.js";import{P as se}from"../chunks/projects.DiRosZNd.js";import{B as le}from"../chunks/badge.p-Z8gtyN.js";function ie({params:m}){if(m.slug)return{item:q.items.find(g=>g.slug===m.slug)}}const Me=Object.freeze(Object.defineProperty({__proto__:null,load:ie},Symbol.toStringTag,{value:"Module"}));var ne=b("<a><!></a>"),me=b('<div class="flex flex-row flex-wrap items-center gap-2 py-4"><!> <!></div>'),de=b("<!> <!> <!> <!>",1);function we(m,r){J(r,!0);const g=C(),p=()=>I(V,"$mode",g);let z=k(()=>{var t,a;return`${((a=(t=r.data)==null?void 0:t.item)==null?void 0:a.name)??"Not Found"} - Skills`}),N=k(()=>{var t,a,e;return(p()=="dark"?(a=(t=r.data)==null?void 0:t.item)==null?void 0:a.logo.dark:(e=r.data.item)==null?void 0:e.logo.light)??ae.Unknown.light}),P=k(()=>(()=>{const t=r.data.item;if(!t)return[];const a=[];return se.items.forEach(e=>{e.skills.find(n=>n.slug===t.slug)&&a.push({link:`/projects/${e.slug}`,logo:p()==="dark"?e.logo.dark:e.logo.light,name:e.name})}),oe.items.forEach(e=>{e.skills.find(n=>n.slug===t.slug)&&a.push({link:`/experience/${e.slug}`,logo:p()==="dark"?e.logo.dark:e.logo.light,name:e.name})}),a})());Y(m,{get title(){return i(z)},children:(t,a)=>{var e=G(),n=D(e);H(n,()=>!r.data.item,c=>{Z(c)},c=>{var S=de(),E=D(S);ee(E,{get img(){return i(N)},children:(_,d)=>{re(_,{children:(f,B)=>{x();var s=h();$(()=>w(s,r.data.item.name)),o(f,s)},$$slots:{default:!0}})},$$slots:{default:!0}});var y=u(E,2);O(y,{});var j=u(y,2);O(j,{});var R=u(j,2);H(R,()=>i(P).length!==0,_=>{var d=me(),f=F(d);te(f,{children:(s,v)=>{x();var l=h("Related items");o(s,l)},$$slots:{default:!0}});var B=u(f,2);L(B,17,()=>i(P),Q,(s,v)=>{var l=ne();$(()=>W(l,"href",X(i(v).link)));var T=F(l);le(T,{children:(U,fe)=>{x();var M=h();$(()=>w(M,i(v).name)),o(U,M)},$$slots:{default:!0}}),A(l),o(s,l)}),A(d),o(_,d)}),o(c,S)}),o(t,e)},$$slots:{default:!0}}),K()}export{we as component,Me as universal};
