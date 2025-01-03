import{s as ie,a as r,t as R,b as n,c as S,d as ne,e as de}from"../chunks/disclose-version.B9DIXXxg.js";import{p as ae,g as t,f as u,t as b,s as o,c as y,n as D,r as c,a as oe,d as w,b as ce,e as ve}from"../chunks/utils.7ruNgmf0.js";import{i as fe,a as me}from"../chunks/index-client.kRHgN_Rl.js";import{e as K,I as j,d as ue}from"../chunks/stores.B156veLu.js";import{d as _e,s as Z,h as pe,g as ee,e as ge}from"../chunks/base.Dyikcjwb.js";import{E as xe}from"../chunks/empty-result.DhpSd7qi.js";import{F as $e,C as he,a as be,S as we}from"../chunks/fancy-card.B_3y0kIr.js";import{M as te,A as ye}from"../chunks/assets.BeA5XeMq.js";import{e as Pe}from"../chunks/index.DDBfyhzG.js";import"../chunks/legacy.BMaVEKmg.js";import{S as ke}from"../chunks/skill-badge.Bl7DLoy9.js";import{A as Ce,a as De,b as Ae}from"../chunks/avatar-fallback.B7e9Rew1.js";import{B as Ee}from"../chunks/index.CLBVFFQa.js";import{R as G,T as H,a as J}from"../chunks/index.CQ3Sdf2L.js";import{E as re}from"../chunks/experience.DDeSenFl.js";var Le=n("<img>"),Se=n("<!> <!>",1),Me=n("<!> ",1),Te=n("<!> <!>",1),Be=n("<!> <div> </div>",1),Fe=n("<!> <!>",1),Ie=n("<!> <div></div>",1),Ne=n("<!> <!>",1),Re=n('<!> <div class="flex flex-col gap-4"><!> <div class="flex flex-row flex-wrap gap-1"></div> <!> <!> <div> </div> <div class="flex flex-row flex-wrap gap-2"></div></div>',1);function je(U,e){ae(e,!0);const P=ie(),M=()=>ne(ue,"$mode",P),O=_e(e.it.period.from,e.it.period.to);let v=w(()=>ee(e.it.period.from)),Q=w(()=>ee(e.it.period.to)),T=w(()=>`${t(v)} - ${t(Q)}`),Y=w(()=>[{label:e.it.company,icon:"i-carbon-building",tooltip:"Company"},{label:e.it.location,icon:"i-carbon-location",tooltip:"Location"},{label:e.it.contract,icon:"i-carbon-hourglass",tooltip:"Contract Type"}]);var A=w(()=>pe(`/experience/${e.it.slug}`));$e(U,{get color(){return e.it.color},get href(){return t(A)},children:(E,B)=>{he(E,{class:"flex flex-col gap-8 sm:flex-row",children:(q,V)=>{var x=Re(),k=u(x);Ce(k,{children:(a,f)=>{var l=Se(),$=u(l);De($,{children:(p,s)=>{var g=Le();b(()=>{Z(g,"src",ye.Unknown.light),Z(g,"alt",e.it.name)}),r(p,g)},$$slots:{default:!0}});var _=o($,2),m=w(()=>M()==="dark"?e.it.logo.dark:e.it.logo.light);Ae(_,{get src(){return t(m)}}),r(a,l)},$$slots:{default:!0}});var F=o(k,2),L=y(F);be(L,{children:(a,f)=>{D();var l=R();b(()=>S(l,e.it.name)),r(a,l)},$$slots:{default:!0}});var C=o(L,2);K(C,21,()=>t(Y),a=>a.icon,(a,f)=>{G(a,{openDelay:300,children:(l,$)=>{H(l,{children:(_,m)=>{var p=Te(),s=u(p);Ee(s,{variant:"secondary",class:"flex flex-row items-center gap-1",children:(i,h)=>{var d=Me(),N=u(d);j(N,{get icon(){return t(f).icon}});var se=o(N);b(()=>S(se,` ${t(f).label??""}`)),r(i,d)},$$slots:{default:!0}});var g=o(s,2);J(g,{children:(i,h)=>{D();var d=R();b(()=>S(d,t(f).tooltip)),r(i,d)},$$slots:{default:!0}}),r(_,p)},$$slots:{default:!0}})},$$slots:{default:!0}})}),c(C);var I=o(C,2);G(I,{openDelay:300,children:(a,f)=>{var l=Fe(),$=u(l);H($,{children:(m,p)=>{te(m,{className:"flex flex-row items-center gap-2",children:(s,g)=>{var i=Be(),h=u(i);j(h,{icon:"i-carbon-calendar"});var d=o(h,2),N=y(d,!0);c(d),b(()=>S(N,t(T))),r(s,i)},$$slots:{default:!0}})},$$slots:{default:!0}});var _=o($,2);J(_,{children:(m,p)=>{D();var s=R("Date range");r(m,s)},$$slots:{default:!0}}),r(a,l)},$$slots:{default:!0}});var W=o(I,2);G(W,{openDelay:300,children:(a,f)=>{H(a,{children:(l,$)=>{var _=Ne(),m=u(_);te(m,{className:"flex flex-row items-center gap-2",children:(s,g)=>{var i=Ie(),h=u(i);j(h,{icon:"i-carbon-time"});var d=o(h,2);d.textContent=O,r(s,i)},$$slots:{default:!0}});var p=o(m,2);J(p,{side:"bottom",children:(s,g)=>{D();var i=R("Exact duration");r(s,i)},$$slots:{default:!0}}),r(l,_)},$$slots:{default:!0}})},$$slots:{default:!0}});var z=o(W,2),le=y(z,!0);b(()=>S(le,Pe(e.it.shortDescription,150))),c(z);var X=o(z,2);K(X,21,()=>e.it.skills,a=>a.slug,(a,f)=>{ke(a,{get skill(){return t(f)}})}),c(X),c(F),r(q,x)},$$slots:{default:!0}})},$$slots:{default:!0}}),oe()}var Ue=n('<div><div class="flex flex-1 flex-col justify-center lg:py-[50px]"><!></div> <div class="hidden h-[full] min-w-0 flex-shrink-0 flex-col items-center lg:flex" style="--color: hsl(var(--border) / var(--tw-border-opacity, 1)); --icon: hsl(var(--foreground) / var(--tw-border-opacity, 1))"><div class="w-[1px] flex-1 bg-[--color]"></div> <div class="my-2 text-[--icon]"><!></div> <div class="w-[1px] flex-1 bg-[--color]"></div></div> <div class="hidden min-w-0 flex-1 flex-shrink-0 flex-row lg:flex"></div></div>'),Ye=n('<div class="flex flex-col gap-6 lg:gap-0"></div>');function at(U,e){ae(e,!0);let P=ve(""),M=w(()=>re.items.filter(v=>v.name.toLowerCase().includes(t(P).toLowerCase())||v.company.toLowerCase().includes(t(P).toLowerCase())||v.description.toLowerCase().includes(t(P))));we(U,{get title(){return re.title},onSearch:v=>ce(P,me(v)),children:(v,Q)=>{var T=de(),Y=u(T);fe(Y,()=>t(M).length===0,A=>{xe(A)},A=>{var E=Ye();K(E,23,()=>t(M),B=>B.slug,(B,q,V)=>{var x=Ue(),k=y(x),F=y(k);je(F,{get it(){return t(q)}}),c(k);var L=o(k,2),C=o(y(L),2),I=y(C);j(I,{icon:"i-carbon-radio-button-checked"}),c(C),D(2),c(L),D(2),c(x),b(()=>ge(x,`flex ${t(V)%2!==0?"flex-row-reverse":"flex-row"} gap-4`)),r(B,x)}),c(E),r(A,E)}),r(v,T)},$$slots:{default:!0}}),oe()}export{at as component};
