import{n as ge,o as Ee,a as r,b as m,s as Le,h as He,e as pe,d as ce,t as te,c as B}from"../chunks/disclose-version.B9DIXXxg.js";import{h as Ae,m as xe,V as be,j as qe,o as ye,aL as Je,aM as Ue,aN as Ve,Y as Ye,aH as Fe,l as Ge,t as u,c,r as d,p as fe,F as E,G as Qe,a as me,f as x,s as l,g as $,H as We,z as H,b as Xe,n as G,d as ne}from"../chunks/utils.7ruNgmf0.js";import{L as Ze,s as et}from"../chunks/large.8GcS1JrV.js";import{u as Oe,d as ve,a as tt,b as at,s as Se,f as rt,m as we,h as Pe,j as st,k as ot,l as lt,n as it,e as ke,I as C,i as Ne}from"../chunks/stores.BtH9yxaO.js";import{a as nt,b as dt,B as ze,s as A,h as Q}from"../chunks/base.D3JyDNt6.js";import{B as I}from"../chunks/button.BM8WyU6f.js";import{R as ct,T as ft,D as mt,C as de,a as vt}from"../chunks/index.B3laO8_a.js";import{S as Te}from"../chunks/separator.B1Mqxvym.js";import{R as je,T as Me,a as Ke}from"../chunks/index.B37ablu3.js";import{i as ut}from"../chunks/legacy.BMaVEKmg.js";import{l as Ce,p as w,o as ht,i as Ie}from"../chunks/index-client.kRHgN_Rl.js";import{g as _t}from"../chunks/paths.TXTFCBR_.js";function Re(h,t,v,_,g){var a=h,s="",i;Ae(()=>{if(s===(s=t()??"")){xe&&be();return}i!==void 0&&(Ge(i),i=void 0),s!==""&&(i=qe(()=>{if(xe){ye.data;for(var o=be(),P=o;o!==null&&(o.nodeType!==8||o.data!=="");)P=o,o=Je(o);if(o===null)throw Ue(),Ve;ge(ye,P),a=Ye(o);return}var T=s+"",b=Ee(T);ge(Fe(b),b.lastChild),a.before(b)}))})}const $t=!1,Zt=Object.freeze(Object.defineProperty({__proto__:null,ssr:$t},Symbol.toStringTag,{value:"Module"}));var gt=m("<h4><!></h4>");function pt(h,t){const v=Ce(t,["children","$$slots","$$events","$$legacy"]),_=Ce(v,["className"]);let g=w(t,"className",8,"");var a=gt();let s;var i=c(a);nt(i,t,"default",{}),d(a),u(()=>s=dt(a,s,{..._,class:`scroll-m-20 text-xl font-semibold tracking-normal ${g()}`})),r(h,a)}const xt={title:ze.fullName,icon:"i-carbon-idea"},bt=[{title:"Skills",icon:"i-carbon-assembly-cluster",href:"/skills"},{title:"Projects",icon:"i-carbon-cube",href:"/projects"},{title:"Certifications",icon:"i-carbon-development",href:"/experience"},{title:"Education",icon:"i-carbon-education",href:"/education"},{title:"Resume",icon:"i-carbon-document",href:"/resume"}],ae={left:xt,items:bt};function W(){Oe.set(_t(ve)==="dark"?"light":"dark")}function yt(h){Oe.set(h)}function St(h){tt.set(h)}function De({defaultMode:h,themeColors:t,darkClassNames:v=["dark"],lightClassNames:_=[],defaultTheme:g=""}){const a=document.documentElement,s=localStorage.getItem("mode-watcher-mode")||h,i=localStorage.getItem("mode-watcher-theme")||g,o=s==="light"||s==="system"&&window.matchMedia("(prefers-color-scheme: light)").matches;if(o?(v.length&&a.classList.remove(...v),_.length&&a.classList.add(..._)):(_.length&&a.classList.remove(..._),v.length&&a.classList.add(...v)),a.style.colorScheme=o?"light":"dark",t){const P=document.querySelector('meta[name="theme-color"]');P&&P.setAttribute("content",s==="light"?t.light:t.dark)}i&&(a.setAttribute("data-theme",i),localStorage.setItem("mode-watcher-theme",i)),localStorage.setItem("mode-watcher-mode",s)}var wt=m('<meta name="theme-color">'),Pt=m("<!> <!>",1);function kt(h,t){fe(t,!1);const v=Le(),_=()=>ce(we,"$modeStorageKeyStore",v),g=()=>ce(Pe,"$themeStorageKeyStore",v),a=We();let s=w(t,"track",8,!0),i=w(t,"defaultMode",8,"system"),o=w(t,"themeColors",24,()=>{}),P=w(t,"disableTransitions",8,!0),T=w(t,"darkClassNames",24,()=>["dark"]),b=w(t,"lightClassNames",24,()=>[]),R=w(t,"defaultTheme",8,""),re=w(t,"nonce",8,""),X=w(t,"themeStorageKey",8,"mode-watcher-theme"),D=w(t,"modeStorageKey",8,"mode-watcher-mode");ht(()=>{const Z=ve.subscribe(()=>{}),L=at.subscribe(()=>{});Se.tracking(s()),Se.query();const O=localStorage.getItem(_());yt(rt(O)?O:i());const n=localStorage.getItem(g());return St(n||R()),()=>{Z(),L()}});const q={defaultMode:i(),themeColors:o(),darkClassNames:T(),lightClassNames:b(),defaultTheme:R(),modeStorageKey:D(),themeStorageKey:X()};E(()=>H(P()),()=>{st.set(P())}),E(()=>H(o()),()=>{ot.set(o())}),E(()=>H(T()),()=>{lt.set(T())}),E(()=>H(b()),()=>{it.set(b())}),E(()=>H(D()),()=>{we.set(D())}),E(()=>H(X()),()=>{Pe.set(X())}),E(()=>H(re()),()=>{Xe(a,typeof window>"u"?re():"")}),Qe(),ut(),He(Z=>{var L=Pt(),O=x(L);Ie(O,o,f=>{var e=wt();u(()=>A(e,"content",o().dark)),r(f,e)});var n=l(O,2);Ie(n,()=>$(a),f=>{var e=pe(),y=x(e);Re(y,()=>`<script nonce=${$(a)}>(`+De.toString()+")("+JSON.stringify(q)+");<\/script>",!1,!1),r(f,e)},f=>{var e=pe(),y=x(e);Re(y,()=>"<script>("+De.toString()+")("+JSON.stringify(q)+");<\/script>",!1,!1),r(f,e)}),r(Z,L)}),me()}var Nt=m("<!> <!>",1),Tt=m('<!> <div class="hidden lg:block"> </div>',1),jt=m("<!> <!>",1),Mt=m("<a><!></a>"),Kt=m("<!> <div> </div>",1),Ct=m('<a class="w-full"><!></a>'),It=m("<!> <div>Search</div>",1),Rt=m('<a class="w-full"><!></a>'),Dt=m("<!> <div> </div>",1),Lt=m('<div class="flex flex-col gap-2 pt-4"><!> <!> <!> <!> <!></div> <!>',1),Ot=m("<!> <!>",1),zt=m('<div class="border-1 absolute left-0 right-0 top-0 z-10 flex h-[50px] flex-row items-center border-b bg-[--bg] px-4 backdrop-blur-xl sm:px-8" style="--bg : hsl(var(--background) / 0.5)"><div class="sm:flex-1"><a class="flex flex-row items-center justify-start gap-2 text-2xl"><!> <!></a></div> <div class="hidden flex-[2] flex-row items-center justify-center gap-2 sm:flex"></div> <div class="hidden flex-row items-center justify-end gap-2 sm:flex sm:flex-1"><a><!></a> <!></div> <div class="flex flex-[2] flex-row items-center justify-center sm:hidden"><a><!></a></div> <div class="flex flex-row items-center justify-center sm:hidden"><!></div></div>');function Bt(h,t){fe(t,!0);const v=Le(),_=()=>ce(ve,"$mode",v);let g=ne(()=>_()==="dark");var a=zt(),s=c(a),i=c(s);u(()=>A(i,"href",Q("/")));var o=c(i);je(o,{children:(n,f)=>{var e=Nt(),y=x(e);Me(y,{children:(j,J)=>{C(j,{get icon(){return ae.left.icon}})},$$slots:{default:!0}});var ee=l(y,2);Ke(ee,{side:"bottom",class:"lg:hidden",children:(j,J)=>{G();var k=te();u(()=>B(k,ae.left.title)),r(j,k)},$$slots:{default:!0}}),r(n,e)},$$slots:{default:!0}});var P=l(o,2);pt(P,{className:"hidden lg:block",children:(n,f)=>{G();var e=te();u(()=>B(e,ae.left.title)),r(n,e)},$$slots:{default:!0}}),d(i),d(s);var T=l(s,2);ke(T,21,()=>ae.items,Ne,(n,f)=>{var e=Mt();u(()=>A(e,"href",Q($(f).href)));var y=c(e);je(y,{children:(ee,j)=>{var J=jt(),k=x(J);Me(k,{children:(V,se)=>{I(V,{class:"flex flex-row items-center justify-center gap-2",variant:"ghost",children:(z,ie)=>{var oe=Tt(),le=x(oe);C(le,{get icon(){return $(f).icon},className:"text-xl"});var p=l(le,2),M=c(p,!0);d(p),u(()=>B(M,$(f).title)),r(z,oe)},$$slots:{default:!0}})},$$slots:{default:!0}});var U=l(k,2);Ke(U,{side:"bottom",class:"lg:hidden",children:(V,se)=>{G();var z=te();u(()=>B(z,$(f).title)),r(V,z)},$$slots:{default:!0}}),r(ee,J)},$$slots:{default:!0}}),d(e),r(n,e)}),d(T);var b=l(T,2),R=c(b);u(()=>A(R,"href",Q("/search")));var re=c(R);I(re,{variant:"ghost",class:"text-xl",children:(n,f)=>{C(n,{icon:"i-carbon-search"})},$$slots:{default:!0}}),d(R);var X=l(R,2);I(X,{variant:"ghost",class:"text-xl",$$events:{click(...n){W==null||W.apply(this,n)}},children:(n,f)=>{var e=ne(()=>$(g)?"i-carbon-moon":"i-carbon-sun");C(n,{get icon(){return $(e)}})},$$slots:{default:!0}}),d(b);var D=l(b,2),q=c(D);u(()=>A(q,"href",Q("/")));var Z=c(q);Ze(Z,{children:(n,f)=>{G();var e=te();u(()=>B(e,ze.fullName)),r(n,e)},$$slots:{default:!0}}),d(q),d(D);var L=l(D,2),O=c(L);ct(O,{children:(n,f)=>{var e=Ot(),y=x(e);ft(y,{children:(j,J)=>{I(j,{size:"icon",variant:"ghost",children:(k,U)=>{C(k,{className:"text-xl",icon:"i-carbon-menu"})},$$slots:{default:!0}})},$$slots:{default:!0}});var ee=l(y,2);mt(ee,{children:(j,J)=>{var k=Lt(),U=x(k),V=c(U);ke(V,17,()=>ae.items,Ne,(p,M)=>{de(p,{children:(S,Y)=>{var N=Ct();u(()=>A(N,"href",Q($(M).href)));var F=c(N);I(F,{class:"flex w-full flex-row items-center justify-start gap-2",variant:"ghost",children:(K,ue)=>{var he=Kt(),_e=x(he);C(_e,{get icon(){return $(M).icon},className:"text-xl"});var $e=l(_e,2),Be=c($e,!0);d($e),u(()=>B(Be,$(M).title)),r(K,he)},$$slots:{default:!0}}),d(N),r(S,N)},$$slots:{default:!0}})});var se=l(V,2);Te(se,{});var z=l(se,2);de(z,{children:(p,M)=>{var S=Rt();u(()=>A(S,"href",Q("/search")));var Y=c(S);I(Y,{class:"flex w-full flex-row items-center justify-start gap-2",variant:"ghost",children:(N,F)=>{var K=It(),ue=x(K);C(ue,{icon:"i-carbon-search",className:"text-xl"}),G(2),r(N,K)},$$slots:{default:!0}}),d(S),r(p,S)},$$slots:{default:!0}});var ie=l(z,2);Te(ie,{});var oe=l(ie,2);I(oe,{class:"flex w-full flex-row items-center justify-start gap-2",variant:"ghost",$$events:{click(...p){W==null||W.apply(this,p)}},children:(p,M)=>{var S=Dt(),Y=x(S),N=ne(()=>$(g)?"i-carbon-moon":"i-carbon-sun");C(Y,{get icon(){return $(N)},className:"text-xl"});var F=l(Y,2),K=c(F,!0);d(F),u(()=>B(K,$(g)?"Dark":"Light")),r(p,S)},$$slots:{default:!0}}),d(U);var le=l(U,2);vt(le,{class:"items-end",children:(p,M)=>{de(p,{children:(S,Y)=>{I(S,{children:(N,F)=>{G();var K=te("Close");r(N,K)},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0}}),r(j,k)},$$slots:{default:!0}}),r(n,e)},$$slots:{default:!0}}),d(L),d(a),r(h,a),me()}var Et=m('<!> <div class="flex h-screen w-screen flex-col overflow-x-hidden"><!> <div class="mt-[50px] flex flex-1 flex-col"><!></div></div>',1);function ea(h,t){fe(t,!0);var v=Et(),_=x(v);kt(_,{});var g=l(_,2),a=c(g);Bt(a,{});var s=l(a,2),i=c(s);et(i,()=>t.children),d(s),d(g),r(h,v),me()}export{ea as component,Zt as universal};
