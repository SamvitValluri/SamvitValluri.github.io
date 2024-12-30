import{s as se,a as le}from"../chunks/disclose-version.DGQ-7qVU.js";import{p as te,g as r,f as _,t as x,s as o,c as g,n as w,r as n,a as re,d as h,b as ie,e as de}from"../chunks/utils.HUOjG_c-.js";import{a as t,t as F,b as c,s as I,c as ne}from"../chunks/render.DZubZ1YR.js";import{i as ce,a as ve}from"../chunks/props.Ce0-gft3.js";import{I as U,e as ae}from"../chunks/icon.CZKQia8s.js";import{d as fe,s as K,h as me,g as O,f as ue}from"../chunks/base.CadOiWmH.js";import{E as _e}from"../chunks/empty-result.DRdhojDw.js";import{F as ge,C as pe,a as $e,S as xe}from"../chunks/fancy-card.D5BMHQqx.js";import{A as Q}from"../chunks/assets.ng5FisSP.js";import{e as he}from"../chunks/index.DDBfyhzG.js";import{d as we}from"../chunks/stores.Dugyyryi.js";import"../chunks/legacy.BY2MIiOc.js";import{A as be,a as Pe,b as ye}from"../chunks/avatar-fallback.CaGCI3xY.js";import"../chunks/index.081mpkkD.js";import{R as V,T as W,a as X}from"../chunks/index.RHEl8wu9.js";import{M as Z}from"../chunks/muted.B-e1BtMf.js";import{B as ke}from"../chunks/badge.CS8LUQIZ.js";import{E as ee}from"../chunks/education.Oh6vfYFz.js";var Ce=c("<img>"),Ae=c("<!> <!>",1),Le=c("<!> <div></div>",1),De=c("<!> <!>",1),Ee=c("<!> <div> </div>",1),Me=c("<!> <!>",1),Se=c('<!> <div class="flex flex-col gap-4"><!> <div> </div> <!> <!> <div class="flex flex-row flex-wrap gap-2"></div></div>',1);function Te(N,e){te(e,!0);const v=se(),b=()=>le(we,"$mode",v);fe(e.it.period.from,e.it.period.to);let Y=h(()=>O(e.it.period.from)),s=h(()=>O(e.it.period.to)),q=h(()=>`${r(Y)} - ${r(s)}`),E=`${e.it.organization}, ${e.it.location}`;var R=h(()=>me(`/education/${e.it.slug}`));ge(N,{get href(){return r(R)},children:(P,M)=>{pe(P,{class:"flex flex-col gap-8 sm:flex-row",children:(y,G)=>{var S=Se(),u=_(S);be(u,{children:(l,k)=>{var a=Ae(),i=_(a);Pe(i,{children:(C,m)=>{var A=Ce();x(()=>{K(A,"src",b()==="dark"?Q.Unknown.dark:Q.Unknown.light),K(A,"alt",e.it.name)}),t(C,A)},$$slots:{default:!0}});var f=o(i,2),d=h(()=>b()==="dark"?e.it.logo.dark:e.it.logo.light);ye(f,{get src(){return r(d)}}),t(l,a)},$$slots:{default:!0}});var p=o(u,2),T=g(p);$e(T,{children:(l,k)=>{w();var a=F();x(()=>I(a,e.it.degree)),t(l,a)},$$slots:{default:!0}});var $=o(T,2),j=g($,!0);x(()=>I(j,he(e.it.shortDescription,150))),n($);var z=o($,2);V(z,{openDelay:300,children:(l,k)=>{var a=De(),i=_(a);W(i,{children:(d,C)=>{Z(d,{className:"flex flex-row items-center gap-2",children:(m,A)=>{var L=Le(),D=_(L);U(D,{icon:"i-carbon-location"});var B=o(D,2);B.textContent=E,t(m,L)},$$slots:{default:!0}})},$$slots:{default:!0}});var f=o(i,2);X(f,{children:(d,C)=>{w();var m=F("Location");t(d,m)},$$slots:{default:!0}}),t(l,a)},$$slots:{default:!0}});var H=o(z,2);V(H,{openDelay:300,children:(l,k)=>{var a=Me(),i=_(a);W(i,{children:(d,C)=>{Z(d,{className:"flex flex-row items-center gap-2",children:(m,A)=>{var L=Ee(),D=_(L);U(D,{icon:"i-carbon-calendar"});var B=o(D,2),oe=g(B,!0);n(B),x(()=>I(oe,r(q))),t(m,L)},$$slots:{default:!0}})},$$slots:{default:!0}});var f=o(i,2);X(f,{children:(d,C)=>{w();var m=F("Date range");t(d,m)},$$slots:{default:!0}}),t(l,a)},$$slots:{default:!0}});var J=o(H,2);ae(J,20,()=>e.it.subjects,l=>l,(l,k)=>{ke(l,{variant:"secondary",children:(a,i)=>{w();var f=F();x(()=>I(f,k)),t(a,f)},$$slots:{default:!0}})}),n(J),n(p),t(y,S)},$$slots:{default:!0}})},$$slots:{default:!0}}),re()}var je=c('<div><div class="flex flex-1 flex-col justify-center lg:py-[50px]"><!></div> <div class="hidden h-[full] min-w-0 flex-shrink-0 flex-col items-center lg:flex" style="--color: hsl(var(--border) / var(--tw-border-opacity, 1)); --icon: hsl(var(--foreground) / var(--tw-border-opacity, 1))"><div class="w-[1px] flex-1 bg-[--color]"></div> <div class="my-2 text-[--icon]"><!></div> <div class="w-[1px] flex-1 bg-[--color]"></div></div> <div class="hidden min-w-0 flex-1 flex-shrink-0 flex-row lg:flex"></div></div>'),ze=c('<div class="flex flex-col gap-6 lg:gap-0"></div>');function et(N,e){te(e,!0);let v=de(""),b=h(()=>ee.items.filter(s=>s.name.toLowerCase().includes(r(v).toLowerCase())||s.description.toLowerCase().includes(r(v))||s.location.toLowerCase().includes(r(v))||s.degree.toLowerCase().includes(r(v))||s.organization.toLowerCase().includes(r(v))));xe(N,{get title(){return ee.title},onSearch:s=>ie(v,ve(s)),children:(s,q)=>{var E=ne(),R=_(E);ce(R,()=>r(b).length===0,P=>{_e(P)},P=>{var M=ze();ae(M,23,()=>r(b),y=>y.slug,(y,G,S)=>{var u=je(),p=g(u),T=g(p);Te(T,{get it(){return r(G)}}),n(p);var $=o(p,2),j=o(g($),2),z=g(j);U(z,{icon:"i-carbon-radio-button-checked"}),n(j),w(2),n($),w(2),n(u),x(()=>ue(u,`flex ${r(S)%2!==0?"flex-row-reverse":"flex-row"} gap-4`)),t(y,u)}),n(M),t(P,M)}),t(s,E)},$$slots:{default:!0}}),re()}export{et as component};
