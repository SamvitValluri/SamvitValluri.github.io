import{s as se,a as t,t as F,b as c,c as I,d as le,e as ie}from"../chunks/disclose-version.Cfp-rwoP.js";import{p as ee,g as r,f as _,t as x,s as o,c as g,n as h,r as n,a as te,d as p,b as de,e as ne}from"../chunks/utils.jAVDF0d8.js";import{i as ce,a as ve}from"../chunks/index-client.BSQKl7cS.js";import{I as U,e as re,d as fe}from"../chunks/stores.CGHNEo6u.js";import{d as ue,s as J,h as me,g as K,e as _e}from"../chunks/base.DU9UIE__.js";import{E as ge}from"../chunks/empty-result.Mt8JQ9BL.js";import{F as $e,C as xe,a as pe,S as he}from"../chunks/fancy-card.XU7-jzfv.js";import{M as O,A as Q}from"../chunks/assets.CFKLb4Vh.js";import{e as we}from"../chunks/index.DDBfyhzG.js";import"../chunks/legacy.Ccq7PQRh.js";import{A as be,a as Pe,b as ye}from"../chunks/avatar-fallback.CMHMdnqw.js";import{B as ke}from"../chunks/index.DS6eFAjM.js";import{R as V,T as W,a as X}from"../chunks/index.DGeRzZvJ.js";import{E as Z}from"../chunks/education.hIpn0_vD.js";var Ce=c("<img>"),Ae=c("<!> <!>",1),Le=c("<!> <div></div>",1),De=c("<!> <!>",1),Ee=c("<!> <div> </div>",1),Me=c("<!> <!>",1),Se=c('<!> <div class="flex flex-col gap-4"><!> <!> <!> <div> </div> <div class="flex flex-row flex-wrap gap-2"></div></div>',1);function Te(N,e){ee(e,!0);const v=se(),w=()=>le(fe,"$mode",v);ue(e.it.period.from,e.it.period.to);let Y=p(()=>K(e.it.period.from)),s=p(()=>K(e.it.period.to)),q=p(()=>`${r(Y)} - ${r(s)}`),S=`${e.it.organization}, ${e.it.location}`;var R=p(()=>me(`/education/${e.it.slug}`));$e(N,{get href(){return r(R)},children:(b,T)=>{xe(b,{class:"flex flex-col gap-8 sm:flex-row",children:(P,G)=>{var j=Se(),m=_(j);be(m,{children:(l,A)=>{var a=Ae(),i=_(a);Pe(i,{children:(L,u)=>{var D=Ce();x(()=>{J(D,"src",w()==="dark"?Q.Unknown.dark:Q.Unknown.light),J(D,"alt",e.it.name)}),t(L,D)},$$slots:{default:!0}});var f=o(i,2),d=p(()=>w()==="dark"?e.it.logo.dark:e.it.logo.light);ye(f,{get src(){return r(d)}}),t(l,a)},$$slots:{default:!0}});var $=o(m,2),z=g($);pe(z,{children:(l,A)=>{h();var a=F();x(()=>I(a,e.it.degree)),t(l,a)},$$slots:{default:!0}});var y=o(z,2);V(y,{openDelay:300,children:(l,A)=>{var a=De(),i=_(a);W(i,{children:(d,L)=>{O(d,{className:"flex flex-row items-center gap-2",children:(u,D)=>{var E=Le(),M=_(E);U(M,{icon:"i-carbon-location"});var B=o(M,2);B.textContent=S,t(u,E)},$$slots:{default:!0}})},$$slots:{default:!0}});var f=o(i,2);X(f,{children:(d,L)=>{h();var u=F("Location");t(d,u)},$$slots:{default:!0}}),t(l,a)},$$slots:{default:!0}});var k=o(y,2);V(k,{openDelay:300,children:(l,A)=>{var a=Me(),i=_(a);W(i,{children:(d,L)=>{O(d,{className:"flex flex-row items-center gap-2",children:(u,D)=>{var E=Ee(),M=_(E);U(M,{icon:"i-carbon-calendar"});var B=o(M,2),oe=g(B,!0);n(B),x(()=>I(oe,r(q))),t(u,E)},$$slots:{default:!0}})},$$slots:{default:!0}});var f=o(i,2);X(f,{children:(d,L)=>{h();var u=F("Date range");t(d,u)},$$slots:{default:!0}}),t(l,a)},$$slots:{default:!0}});var C=o(k,2),ae=g(C,!0);x(()=>I(ae,we(e.it.shortDescription,150))),n(C);var H=o(C,2);re(H,20,()=>e.it.subjects,l=>l,(l,A)=>{ke(l,{variant:"secondary",children:(a,i)=>{h();var f=F();x(()=>I(f,A)),t(a,f)},$$slots:{default:!0}})}),n(H),n($),t(P,j)},$$slots:{default:!0}})},$$slots:{default:!0}}),te()}var je=c('<div><div class="flex flex-1 flex-col justify-center lg:py-[50px]"><!></div> <div class="hidden h-[full] min-w-0 flex-shrink-0 flex-col items-center lg:flex" style="--color: hsl(var(--border) / var(--tw-border-opacity, 1)); --icon: hsl(var(--foreground) / var(--tw-border-opacity, 1))"><div class="w-[1px] flex-1 bg-[--color]"></div> <div class="my-2 text-[--icon]"><!></div> <div class="w-[1px] flex-1 bg-[--color]"></div></div> <div class="hidden min-w-0 flex-1 flex-shrink-0 flex-row lg:flex"></div></div>'),ze=c('<div class="flex flex-col gap-6 lg:gap-0"></div>');function Ve(N,e){ee(e,!0);let v=ne(""),w=p(()=>Z.items.filter(s=>s.name.toLowerCase().includes(r(v).toLowerCase())||s.description.toLowerCase().includes(r(v))||s.location.toLowerCase().includes(r(v))||s.degree.toLowerCase().includes(r(v))||s.organization.toLowerCase().includes(r(v))));he(N,{get title(){return Z.title},onSearch:s=>de(v,ve(s)),children:(s,q)=>{var S=ie(),R=_(S);ce(R,()=>r(w).length===0,b=>{ge(b)},b=>{var T=ze();re(T,23,()=>r(w),P=>P.slug,(P,G,j)=>{var m=je(),$=g(m),z=g($);Te(z,{get it(){return r(G)}}),n($);var y=o($,2),k=o(g(y),2),C=g(k);U(C,{icon:"i-carbon-radio-button-checked"}),n(k),h(2),n(y),h(2),n(m),x(()=>_e(m,`flex ${r(j)%2!==0?"flex-row-reverse":"flex-row"} gap-4`)),t(P,m)}),n(T),t(b,T)}),t(s,S)},$$slots:{default:!0}}),te()}export{Ve as component};
