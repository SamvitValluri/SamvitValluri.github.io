import{s as se,a as t,t as F,b as c,c as I,d as le,e as ie}from"../chunks/disclose-version.Cfp-rwoP.js";import{p as te,g as r,f as _,t as p,s as o,c as g,n as w,r as n,a as re,d as h,b as de,e as ne}from"../chunks/utils.jAVDF0d8.js";import{i as ce,a as ve}from"../chunks/index-client.BSQKl7cS.js";import{I as U,e as ae,d as fe}from"../chunks/stores.DppEEZRW.js";import{d as ue,s as K,h as me,g as O,e as _e}from"../chunks/base.CF5U-qO1.js";import{E as ge}from"../chunks/empty-result.Cl86DLvX.js";import{F as $e,C as xe,a as pe,S as he}from"../chunks/fancy-card.ByWcy_wG.js";import{M as Q,A as V}from"../chunks/assets.fQ0g0pSL.js";import{e as we}from"../chunks/index.DDBfyhzG.js";import"../chunks/legacy.Ccq7PQRh.js";import{A as be,a as Pe,b as ye}from"../chunks/avatar-fallback.ONysHr6u.js";import{B as ke}from"../chunks/index.BFLNk_WP.js";import{R as W,T as X,a as Z}from"../chunks/index.CnZ4IXKF.js";import{E as ee}from"../chunks/education.DDD8YK3D.js";var Ce=c("<img>"),Ae=c("<!> <!>",1),Le=c("<!> <div></div>",1),De=c("<!> <!>",1),Ee=c("<!> <div> </div>",1),Me=c("<!> <!>",1),Se=c('<!> <div class="flex flex-col gap-4"><!> <div> </div> <!> <!> <div class="flex flex-row flex-wrap gap-2"></div></div>',1);function Te(N,e){te(e,!0);const v=se(),b=()=>le(fe,"$mode",v);ue(e.it.period.from,e.it.period.to);let Y=h(()=>O(e.it.period.from)),s=h(()=>O(e.it.period.to)),q=h(()=>`${r(Y)} - ${r(s)}`),E=`${e.it.organization}, ${e.it.location}`;var R=h(()=>me(`/education/${e.it.slug}`));$e(N,{get href(){return r(R)},children:(P,M)=>{xe(P,{class:"flex flex-col gap-8 sm:flex-row",children:(y,G)=>{var S=Se(),m=_(S);be(m,{children:(l,k)=>{var a=Ae(),i=_(a);Pe(i,{children:(C,u)=>{var A=Ce();p(()=>{K(A,"src",b()==="dark"?V.Unknown.dark:V.Unknown.light),K(A,"alt",e.it.name)}),t(C,A)},$$slots:{default:!0}});var f=o(i,2),d=h(()=>b()==="dark"?e.it.logo.dark:e.it.logo.light);ye(f,{get src(){return r(d)}}),t(l,a)},$$slots:{default:!0}});var $=o(m,2),T=g($);pe(T,{children:(l,k)=>{w();var a=F();p(()=>I(a,e.it.degree)),t(l,a)},$$slots:{default:!0}});var x=o(T,2),j=g(x,!0);p(()=>I(j,we(e.it.shortDescription,150))),n(x);var z=o(x,2);W(z,{openDelay:300,children:(l,k)=>{var a=De(),i=_(a);X(i,{children:(d,C)=>{Q(d,{className:"flex flex-row items-center gap-2",children:(u,A)=>{var L=Le(),D=_(L);U(D,{icon:"i-carbon-location"});var B=o(D,2);B.textContent=E,t(u,L)},$$slots:{default:!0}})},$$slots:{default:!0}});var f=o(i,2);Z(f,{children:(d,C)=>{w();var u=F("Location");t(d,u)},$$slots:{default:!0}}),t(l,a)},$$slots:{default:!0}});var H=o(z,2);W(H,{openDelay:300,children:(l,k)=>{var a=Me(),i=_(a);X(i,{children:(d,C)=>{Q(d,{className:"flex flex-row items-center gap-2",children:(u,A)=>{var L=Ee(),D=_(L);U(D,{icon:"i-carbon-calendar"});var B=o(D,2),oe=g(B,!0);n(B),p(()=>I(oe,r(q))),t(u,L)},$$slots:{default:!0}})},$$slots:{default:!0}});var f=o(i,2);Z(f,{children:(d,C)=>{w();var u=F("Date range");t(d,u)},$$slots:{default:!0}}),t(l,a)},$$slots:{default:!0}});var J=o(H,2);ae(J,20,()=>e.it.subjects,l=>l,(l,k)=>{ke(l,{variant:"secondary",children:(a,i)=>{w();var f=F();p(()=>I(f,k)),t(a,f)},$$slots:{default:!0}})}),n(J),n($),t(y,S)},$$slots:{default:!0}})},$$slots:{default:!0}}),re()}var je=c('<div><div class="flex flex-1 flex-col justify-center lg:py-[50px]"><!></div> <div class="hidden h-[full] min-w-0 flex-shrink-0 flex-col items-center lg:flex" style="--color: hsl(var(--border) / var(--tw-border-opacity, 1)); --icon: hsl(var(--foreground) / var(--tw-border-opacity, 1))"><div class="w-[1px] flex-1 bg-[--color]"></div> <div class="my-2 text-[--icon]"><!></div> <div class="w-[1px] flex-1 bg-[--color]"></div></div> <div class="hidden min-w-0 flex-1 flex-shrink-0 flex-row lg:flex"></div></div>'),ze=c('<div class="flex flex-col gap-6 lg:gap-0"></div>');function Ve(N,e){te(e,!0);let v=ne(""),b=h(()=>ee.items.filter(s=>s.name.toLowerCase().includes(r(v).toLowerCase())||s.description.toLowerCase().includes(r(v))||s.location.toLowerCase().includes(r(v))||s.degree.toLowerCase().includes(r(v))||s.organization.toLowerCase().includes(r(v))));he(N,{get title(){return ee.title},onSearch:s=>de(v,ve(s)),children:(s,q)=>{var E=ie(),R=_(E);ce(R,()=>r(b).length===0,P=>{ge(P)},P=>{var M=ze();ae(M,23,()=>r(b),y=>y.slug,(y,G,S)=>{var m=je(),$=g(m),T=g($);Te(T,{get it(){return r(G)}}),n($);var x=o($,2),j=o(g(x),2),z=g(j);U(z,{icon:"i-carbon-radio-button-checked"}),n(j),w(2),n(x),w(2),n(m),p(()=>_e(m,`flex ${r(S)%2!==0?"flex-row-reverse":"flex-row"} gap-4`)),t(y,m)}),n(M),t(P,M)}),t(s,E)},$$slots:{default:!0}}),re()}export{Ve as component};
