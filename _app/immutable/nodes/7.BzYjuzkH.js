import{s as xe,c as I,f as ce,a as r,t as b,e as Pe,b as O,d as F}from"../chunks/disclose-version.sEayx-63.js";import{an as Se,p as X,F as Y,G as Ce,f as _,c as W,g as t,r as U,_ as fe,t as T,a as Z,H as Ae,z as ue,s as ae,b as f,n as L,d as V,D as Te,e as ve}from"../chunks/utils.CH7S1e-6.js";import{l as K,p as N,i as Q,b as ze,s as Ee,a as te}from"../chunks/index-client.NRCBfh7y.js";import{t as De,c as Ne,r as Me,g as Re,e as q,I as oe,d as Be}from"../chunks/stores.CahFv-D_.js";import{E as Fe}from"../chunks/empty-result.OT2lWDQb.js";import{F as Oe,a as Le,C as Ue,S as Ie}from"../chunks/fancy-card.Z0AkfNS-.js";import{o as Ve,m as We,k as ge,l as qe,n as me,p as _e,s as le,j as Ge,a as He,b as re,g as pe,h as Ye,c as Je}from"../chunks/base.C-W_4K9l.js";import{M as J,A as Ke}from"../chunks/assets.BuomZuzL.js";import{e as Qe}from"../chunks/index.DDBfyhzG.js";import{i as ke}from"../chunks/legacy.DhjKCi4U.js";import{C as Xe,B as $e,R as Ze,S as et,T as tt,D as rt,a as st}from"../chunks/index.CvveuU1J.js";import{A as at,a as ot,b as lt}from"../chunks/avatar-fallback.DEXPhJwT.js";import{B as he}from"../chunks/index.kcGP_e9N.js";import{B as nt}from"../chunks/button.qA22Z8gL.js";import{C as dt}from"../chunks/card-footer.u94aKhuo.js";import{S as be}from"../chunks/separator.BHlwubGY.js";import{R as it,T as ct,a as ft}from"../chunks/index.Du4Rc6Ay.js";import{b as ut}from"../chunks/misc.COFqpid_.js";import{o as vt,c as gt}from"../chunks/events.DF_dcnHm.js";import{w as mt}from"../chunks/paths.Bqg4Rji5.js";import{c as _t}from"../chunks/index.CgcGG4Lt.js";import{P as se}from"../chunks/projects.COqX9ODw.js";import{S as pt}from"../chunks/skills.C4bSyqoN.js";const $t={defaultPressed:!1,disabled:!1};function ht(j){const e={...$t,...j},u=De(Ve(e,"pressed")),{disabled:p}=u,$=e.pressed??mt(e.defaultPressed),S=vt($,e==null?void 0:e.onPressedChange);function g(){p.get()||S.update(a=>!a)}return{elements:{root:We("toggle",{stores:[S,p],returned:([s,a])=>({"data-disabled":ge(a),disabled:ge(a),"data-state":s?"on":"off","aria-pressed":s,type:"button"}),action:s=>({destroy:qe(me(s,"click",()=>{g()}),me(s,"keydown",i=>{i.key!==_e.ENTER&&i.key!==_e.SPACE||(i.preventDefault(),g())}))})})},states:{pressed:S},options:u}}function bt(){return{NAME:"toggle",PARTS:["root","input"]}}function xt(j){const{NAME:e,PARTS:u}=bt(),p=Ne(e,u),$={...ht(Me(j)),getAttrs:p};return Se(e,$),{...$,updateOption:Re($.options)}}var Pt=b("<button><!></button>");function kt(j,e){const u=K(e,["children","$$slots","$$events","$$legacy"]),p=K(u,["disabled","pressed","onPressedChange","asChild","el"]);X(e,!1);const $=xe(),S=()=>Pe(P,"$root",$),g=Ae();let l=N(e,"disabled",24,()=>{}),s=N(e,"pressed",28,()=>{}),a=N(e,"onPressedChange",24,()=>{}),i=N(e,"asChild",8,!1),x=N(e,"el",28,()=>{});const{elements:{root:P},states:{pressed:v},updateOption:z,getAttrs:k}=xt({disabled:l(),defaultPressed:s(),onPressedChange:({next:y})=>{var o;return s()!==y&&((o=a())==null||o(y),s(y)),y}}),w=gt(),m=k("root");Y(()=>ue(s()),()=>{s()!==void 0&&v.set(s())}),Y(()=>ue(l()),()=>{z("disabled",l())}),Y(()=>S(),()=>{ae(g,S())}),Y(()=>t(g),()=>{Object.assign(t(g),m)}),Ce(),ke();var C=I(),E=_(C);Q(E,i,y=>{var o=I(),h=_(o);le(h,e,"default",{get builder(){return t(g)}}),r(y,o)},y=>{var o=Pt();let h;var d=W(o);le(d,e,"default",{get builder(){return t(g)}}),U(o),ze(o,c=>x(c),()=>x()),Ge(o,c=>t(g).action(c)),fe(()=>ce("m-click",o,w)),fe(()=>ce("m-keydown",o,w)),T(()=>h=He(o,h,{...t(g),type:"button",...p})),r(y,o)}),r(j,C),Z()}var wt=b("<img>"),yt=b("<!> <!>",1),jt=b("<!> <!>",1),St=b('<a target="_blank"><!></a>'),Ct=b("<!> <!>",1),At=b("<!> <!>",1),Tt=b('<!> <div class="flex w-full flex-row items-center gap-1 overflow-x-hidden"><!> <!></div> <!>',1),zt=b("<!> <!>",1),Et=b('<!> <!> <!> <div class="flex w-full flex-row items-center justify-between"><!> <!></div> <!>',1),Dt=b("<!> <!> <!>",1);function Nt(j,e){X(e,!0);const u=xe(),p=()=>Pe(Be,"$mode",u);let $=V(()=>pe(e.project.period.from)),S=V(()=>pe(e.project.period.to));var g=V(()=>Ye(`/projects/${e.project.slug}`));Oe(j,{get color(){return e.project.color},class:"flex h-full flex-col",get href(){return t(g)},children:(l,s)=>{var a=Dt(),i=_(a);Xe(i,{class:"flex w-full flex-col gap-4",children:(v,z)=>{var k=Tt(),w=_(k);at(w,{children:(o,h)=>{var d=yt(),c=_(d);ot(c,{children:(R,D)=>{var B=wt();T(()=>{re(B,"src",Ke.Unknown.light),re(B,"alt",e.project.name)}),r(R,B)},$$slots:{default:!0}});var n=f(c,2),M=V(()=>p()==="dark"?e.project.logo.dark:e.project.logo.light);lt(n,{get src(){return t(M)}}),r(o,d)},$$slots:{default:!0}});var m=f(w,2),C=W(m);Le(C,{class:"h-auto min-w-0 flex-1 overflow-x-hidden",children:(o,h)=>{it(o,{children:(d,c)=>{var n=jt(),M=_(n);ct(M,{class:"w-full overflow-y-auto overflow-x-hidden",children:(D,B)=>{L();var A=O();T(()=>F(A,e.project.name)),r(D,A)},$$slots:{default:!0}});var R=f(M,2);ft(R,{children:(D,B)=>{L();var A=O();T(()=>F(A,e.project.name)),r(D,A)},$$slots:{default:!0}}),r(d,n)},$$slots:{default:!0}})},$$slots:{default:!0}});var E=f(C,2);Q(E,()=>e.project.links.length>2,o=>{var h=At(),d=_(h);$e(d,{get link(){return e.project.links[0]}});var c=f(d,2);Ze(c,{children:(n,M)=>{var R=Ct(),D=_(R);tt(D,{children:(A,we)=>{nt(A,{size:"icon",variant:"outline",children:(G,ne)=>{oe(G,{icon:"i-carbon-overflow-menu-vertical"})},$$slots:{default:!0}})},$$slots:{default:!0}});var B=f(D,2);rt(B,{children:(A,we)=>{var G=I(),ne=_(G);q(ne,17,()=>e.project.links.slice(1),ee=>ee.to,(ee,de)=>{var H=St(),ye=W(H);st(ye,{children:(je,Lt)=>{L();var ie=O();T(()=>F(ie,t(de).label)),r(je,ie)},$$slots:{default:!0}}),U(H),T(()=>re(H,"href",t(de).to)),r(ee,H)}),r(A,G)},$$slots:{default:!0}}),r(n,R)},$$slots:{default:!0}}),r(o,h)},o=>{var h=I(),d=_(h);q(d,17,()=>e.project.links,c=>c.to,(c,n)=>{$e(c,{get link(){return t(n)}})}),r(o,h)}),U(m);var y=f(m,2);be(y,{}),r(v,k)},$$slots:{default:!0}});var x=f(i,2);Ue(x,{class:"flex flex-1 flex-col gap-4",children:(v,z)=>{var k=Et(),w=_(k);J(w,{className:"flex flex-row gap-2 items-center",children:(d,c)=>{var n=zt(),M=_(n);oe(M,{icon:"i-carbon-assembly-cluster"});var R=f(M,2);J(R,{children:(D,B)=>{L();var A=O();T(()=>F(A,e.project.type)),r(D,A)},$$slots:{default:!0}}),r(d,n)},$$slots:{default:!0}});var m=f(w,2);J(m,{className:"flex flex-row gap-2 items-center"});var C=f(m,2);J(C,{className:"flex-1",children:(d,c)=>{L();var n=O();T(()=>F(n,Qe(e.project.shortDescription,100))),r(d,n)},$$slots:{default:!0}});var E=f(C,2),y=W(E);he(y,{variant:"outline",children:(d,c)=>{L();var n=O();T(()=>F(n,t($))),r(d,n)},$$slots:{default:!0}});var o=f(y,2);he(o,{variant:"outline",children:(d,c)=>{L();var n=O();T(()=>F(n,t(S))),r(d,n)},$$slots:{default:!0}}),U(E);var h=f(E,2);be(h,{}),r(v,k)},$$slots:{default:!0}});var P=f(x,2);dt(P,{class:"flex flex-row flex-wrap items-center gap-2",children:(v,z)=>{var k=I(),w=_(k);q(w,17,()=>e.project.skills,m=>m.slug,(m,C)=>{et(m,{get skill(){return t(C)}})}),r(v,k)},$$slots:{default:!0}}),r(l,a)},$$slots:{default:!0}}),Z()}const Mt=_t({base:"ring-offset-background hover:bg-muted hover:text-muted-foreground focus-visible:ring-ring data-[state=on]:bg-accent data-[state=on]:text-accent-foreground inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",variants:{variant:{default:"bg-transparent",outline:"border-input hover:bg-accent hover:text-accent-foreground border bg-transparent"},size:{default:"h-10 px-3",sm:"h-9 px-2.5",lg:"h-11 px-5"}},defaultVariants:{variant:"default",size:"default"}});function Rt(j,e){const u=K(e,["children","$$slots","$$events","$$legacy"]),p=K(u,["class","variant","size","pressed"]);X(e,!1);let $=N(e,"class",8,void 0),S=N(e,"variant",8,"default"),g=N(e,"size",8,"default"),l=N(e,"pressed",12,void 0);ke();var s=Te(()=>Je(Mt({variant:S(),size:g(),className:$()})));kt(j,Ee({get pressed(){return l()},set pressed(a){l(a)},get class(){return t(s)}},()=>p,{$$events:{click(a){ut.call(this,e,a)}},children:(a,i)=>{var x=I(),P=_(x);le(P,e,"default",{}),r(a,x)},$$slots:{default:!0},$$legacy:!0})),Z()}var Bt=b("<!> ",1),Ft=b('<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"></div>'),Ot=b('<div class="flex flex-1 flex-col gap-8"><div class="flex flex-row flex-wrap gap-2"></div> <!></div>');function cr(j,e){X(e,!0);let u=ve(te(pt.items.filter(l=>se.items.some(s=>s.skills.some(a=>a.slug===l.slug))))),p=ve(""),$=V(()=>se.items.filter(l=>{const s=t(u).every(i=>!i.isSelected)||l.skills.some(i=>t(u).some(x=>x.isSelected&&x.slug===i.slug)),a=t(p).trim().length===0||l.name.trim().toLowerCase().includes(t(p).trim().toLowerCase());return s&&a}));const S=l=>{ae(u,te(t(u).map(s=>s.slug===l?{...s,isSelected:!s.isSelected}:s)))};Ie(j,{get title(){return se.title},onSearch:l=>ae(p,te(l)),children:(l,s)=>{var a=Ot(),i=W(a);q(i,21,()=>t(u),P=>P.slug,(P,v)=>{Rt(P,{get pressed(){return t(v).isSelected},variant:"outline",class:"flex flex-row items-center gap-2 rounded-lg",$$events:{click:()=>S(t(v).slug)},children:(z,k)=>{var w=Bt(),m=_(w);Q(m,()=>t(v).isSelected,E=>{oe(E,{icon:"i-carbon-close"})});var C=f(m);T(()=>F(C,` ${t(v).name??""}`)),r(z,w)},$$slots:{default:!0}})}),U(i);var x=f(i,2);Q(x,()=>t($).length===0,P=>{Fe(P)},P=>{var v=Ft();q(v,21,()=>t($),z=>z.slug,(z,k)=>{Nt(z,{get project(){return t(k)}})}),U(v),r(P,v)}),U(a),r(l,a)},$$slots:{default:!0}}),Z()}export{cr as component};
