import{P as X}from"../chunks/projects.D2gUFXzs.js";import{s as Z,e as tt,t as u,a as o,b as g,c as v,d as et}from"../chunks/disclose-version.B9DIXXxg.js";import{p as at,a as rt,g as i,f as M,t as n,d as S,c as B,n as c,s as m,r as _}from"../chunks/utils.7ruNgmf0.js";import{i as ot}from"../chunks/index-client.kRHgN_Rl.js";import{e as Y,d as st}from"../chunks/stores.C3H3QfFy.js";import{s as h,h as it,g as q,d as lt}from"../chunks/base.CAk5qs7U.js";import{B as dt}from"../chunks/base-page.DaVbxOx9.js";import{E as nt}from"../chunks/empty-result.D-eRGf9u.js";import{F as mt}from"../chunks/prism-tomorrow.XBDnsYfo.js";import"../chunks/legacy.BMaVEKmg.js";import{M as A,A as ft}from"../chunks/assets.BfW2mhHP.js";import"../chunks/index.B5_WZYcm.js";import{S as C}from"../chunks/separator.DC3gAljp.js";import{B as G}from"../chunks/badge.CZks-tga.js";import{H as ut}from"../chunks/h1.DPqrpYK1.js";function vt({params:p}){if(p.slug)return{item:X.items.find($=>$.slug===p.slug)}}const zt=Object.freeze(Object.defineProperty({__proto__:null,load:vt},Symbol.toStringTag,{value:"Module"}));var ct=g('<a target="_blank"><!></a>'),_t=g('<img class="h-[20px] w-[20px]"> <!>',1),gt=g("<a><!></a>"),pt=g('<div class="flex w-full flex-col items-center justify-center gap-4"><!> <!> <!> <!> <div class="flex flex-row flex-wrap justify-center gap-2"></div> <div class="flex flex-row flex-wrap justify-center gap-2"></div></div>'),xt=g("<!> <!>",1);function Nt(p,e){at(e,!0);const $=Z(),D=()=>et(st,"$mode",$);let I=S(()=>{var s,l;return`${((l=(s=e.data)==null?void 0:s.item)==null?void 0:l.name)??"Not Found"} - Skills`}),J=S(()=>{var s,l,d;return(D()=="dark"?(l=(s=e.data)==null?void 0:s.item)==null?void 0:l.logo.dark:(d=e.data.item)==null?void 0:d.logo.light)??ft.Unknown.light}),K=S(()=>{var s,l,d,x;return`${q((s=e.data.item)==null?void 0:s.period.from)} - ${q((l=e.data.item)==null?void 0:l.period.to)} · ${lt(((d=e.data.item)==null?void 0:d.period.from)??new Date,(x=e.data.item)==null?void 0:x.period.to)}`});dt(p,{get title(){return i(I)},children:(s,l)=>{var d=tt(),x=M(d);ot(x,()=>!e.data.item,b=>{nt(b)},b=>{var E=xt(),F=M(E);mt(F,{get img(){return i(J)},children:(Q,ht)=>{var P=pt(),H=B(P);ut(H,{children:(a,r)=>{c();var t=u();n(()=>v(t,e.data.item.name)),o(a,t)},$$slots:{default:!0}});var O=m(H,2);A(O,{children:(a,r)=>{c();var t=u();n(()=>v(t,e.data.item.type)),o(a,t)},$$slots:{default:!0}});var z=m(O,2);A(z,{children:(a,r)=>{c();var t=u();n(()=>v(t,i(K))),o(a,t)},$$slots:{default:!0}});var N=m(z,2);C(N,{});var w=m(N,2);Y(w,21,()=>e.data.item.links,a=>a.to,(a,r)=>{var t=ct(),y=B(t);G(y,{variant:"outline",children:(j,R)=>{c();var f=u();n(()=>v(f,i(r).label)),o(j,f)},$$slots:{default:!0}}),_(t),n(()=>h(t,"href",i(r).to)),o(a,t)}),_(w);var T=m(w,2);Y(T,21,()=>e.data.item.skills,a=>a.slug,(a,r)=>{var t=gt();n(()=>h(t,"href",it(`/skills/${i(r).slug}`)));var y=B(t);G(y,{variant:"outline",class:"flex flex-row items-center justify-center gap-2",children:(j,R)=>{var f=_t(),k=M(f),V=m(k,2);A(V,{children:(W,$t)=>{c();var U=u();n(()=>v(U,i(r).name)),o(W,U)},$$slots:{default:!0}}),n(()=>{h(k,"src",D()==="dark"?i(r).logo.dark:i(r).logo.light),h(k,"alt",i(r).name)}),o(j,f)},$$slots:{default:!0}}),_(t),o(a,t)}),_(T),_(P),o(Q,P)},$$slots:{default:!0}});var L=m(F,2);C(L,{}),o(b,E)}),o(s,d)},$$slots:{default:!0}}),rt()}export{Nt as component,zt as universal};