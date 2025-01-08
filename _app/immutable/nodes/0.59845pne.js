import{n as xe,o as qe,a as s,b as v,s as Le,h as Je,e as pe,d as me,t as te,c as B}from"../chunks/disclose-version.CalSQ8q3.js";import{h as Ue,m as be,W as ye,j as Fe,o as Se,aL as Ge,aT as Ve,aS as We,Z as Ye,aH as Ze,l as Qe,p as ne,t as _,a as de,c,r as n,F as E,G as Xe,f as b,s as i,g,H as et,z as H,b as tt,n as W,d as fe}from"../chunks/utils.BJ5MOpeA.js";import{L as at,s as rt}from"../chunks/large.DUnLVGRv.js";import{u as ze,d as ue,a as st,b as ot,s as we,f as lt,m as Pe,h as ke,j as it,k as nt,l as dt,n as ct,e as Ne,I as C,i as Te}from"../chunks/stores.3zMf9z6g.js";import{a as Oe,b as Be,c as ft,B as Ee,s as A,h as Y}from"../chunks/base.C8d-R2cS.js";import{B as I}from"../chunks/button.B2svjMuP.js";import{R as vt,T as mt,D as ut,C as ve}from"../chunks/index.DvdAS1wZ.js";import{S as je}from"../chunks/separator.Cd4371xD.js";import{R as Me,T as Ke,a as Ce}from"../chunks/index.D3G6f9sK.js";import{i as He}from"../chunks/legacy.O4Z_NkrV.js";import{l as ie,p,o as ht,i as Ie}from"../chunks/index-client.BCwursiW.js";import{g as _t}from"../chunks/paths.DurNC2An.js";function Re(m,e,f,u,$){var t=m,r="",o;Ue(()=>{if(r===(r=e()??"")){be&&ye();return}o!==void 0&&(Qe(o),o=void 0),r!==""&&(o=Fe(()=>{if(be){Se.data;for(var l=ye(),P=l;l!==null&&(l.nodeType!==8||l.data!=="");)P=l,l=Ge(l);if(l===null)throw Ve(),We;xe(Se,P),t=Ye(l);return}var T=r+"",y=qe(T);xe(Ze(y),y.lastChild),t.before(y)}))})}const $t=!1,ta=Object.freeze(Object.defineProperty({__proto__:null,ssr:$t},Symbol.toStringTag,{value:"Module"}));var gt=v("<div><!></div>");function xt(m,e){const f=ie(e,["children","$$slots","$$events","$$legacy"]),u=ie(f,["class"]);ne(e,!1);let $=p(e,"class",8,void 0);He();var t=gt();let r;var o=c(t);Oe(o,e,"default",{}),n(t),_(()=>r=Be(t,r,{class:ft("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",$()),...u})),s(m,t),de()}var pt=v("<h4><!></h4>");function bt(m,e){const f=ie(e,["children","$$slots","$$events","$$legacy"]),u=ie(f,["className"]);let $=p(e,"className",8,"");var t=pt();let r;var o=c(t);Oe(o,e,"default",{}),n(t),_(()=>r=Be(t,r,{...u,class:`scroll-m-20 text-xl font-semibold tracking-normal ${$()}`})),s(m,t)}const yt={title:Ee.fullName,icon:"i-carbon-idea"},St=[{title:"Skills",icon:"i-carbon-assembly-cluster",href:"/skills"},{title:"Certifications",icon:"i-carbon-cube",href:"/projects"},{title:"Projects",icon:"i-carbon-development",href:"/experience"},{title:"Education",icon:"i-carbon-education",href:"/education"},{title:"Resume",icon:"i-carbon-document",href:"/resume"}],ae={left:yt,items:St};function Z(){ze.set(_t(ue)==="dark"?"light":"dark")}function wt(m){ze.set(m)}function Pt(m){st.set(m)}function De({defaultMode:m,themeColors:e,darkClassNames:f=["dark"],lightClassNames:u=[],defaultTheme:$=""}){const t=document.documentElement,r=localStorage.getItem("mode-watcher-mode")||m,o=localStorage.getItem("mode-watcher-theme")||$,l=r==="light"||r==="system"&&window.matchMedia("(prefers-color-scheme: light)").matches;if(l?(f.length&&t.classList.remove(...f),u.length&&t.classList.add(...u)):(u.length&&t.classList.remove(...u),f.length&&t.classList.add(...f)),t.style.colorScheme=l?"light":"dark",e){const P=document.querySelector('meta[name="theme-color"]');P&&P.setAttribute("content",r==="light"?e.light:e.dark)}o&&(t.setAttribute("data-theme",o),localStorage.setItem("mode-watcher-theme",o)),localStorage.setItem("mode-watcher-mode",r)}var kt=v('<meta name="theme-color">'),Nt=v("<!> <!>",1);function Tt(m,e){ne(e,!1);const f=Le(),u=()=>me(Pe,"$modeStorageKeyStore",f),$=()=>me(ke,"$themeStorageKeyStore",f),t=et();let r=p(e,"track",8,!0),o=p(e,"defaultMode",8,"system"),l=p(e,"themeColors",24,()=>{}),P=p(e,"disableTransitions",8,!0),T=p(e,"darkClassNames",24,()=>["dark"]),y=p(e,"lightClassNames",24,()=>[]),R=p(e,"defaultTheme",8,""),re=p(e,"nonce",8,""),Q=p(e,"themeStorageKey",8,"mode-watcher-theme"),D=p(e,"modeStorageKey",8,"mode-watcher-mode");ht(()=>{const X=ue.subscribe(()=>{}),L=ot.subscribe(()=>{});we.tracking(r()),we.query();const z=localStorage.getItem(u());wt(lt(z)?z:o());const d=localStorage.getItem($());return Pt(d||R()),()=>{X(),L()}});const q={defaultMode:o(),themeColors:l(),darkClassNames:T(),lightClassNames:y(),defaultTheme:R(),modeStorageKey:D(),themeStorageKey:Q()};E(()=>H(P()),()=>{it.set(P())}),E(()=>H(l()),()=>{nt.set(l())}),E(()=>H(T()),()=>{dt.set(T())}),E(()=>H(y()),()=>{ct.set(y())}),E(()=>H(D()),()=>{Pe.set(D())}),E(()=>H(Q()),()=>{ke.set(Q())}),E(()=>H(re()),()=>{tt(t,typeof window>"u"?re():"")}),Xe(),He(),Je(X=>{var L=Nt(),z=b(L);Ie(z,l,h=>{var a=kt();_(()=>A(a,"content",l().dark)),s(h,a)});var d=i(z,2);Ie(d,()=>g(t),h=>{var a=pe(),S=b(a);Re(S,()=>`<script nonce=${g(t)}>(`+De.toString()+")("+JSON.stringify(q)+");<\/script>",!1,!1),s(h,a)},h=>{var a=pe(),S=b(a);Re(S,()=>"<script>("+De.toString()+")("+JSON.stringify(q)+");<\/script>",!1,!1),s(h,a)}),s(X,L)}),de()}var jt=v("<!> <!>",1),Mt=v('<!> <div class="hidden lg:block"> </div>',1),Kt=v("<!> <!>",1),Ct=v("<a><!></a>"),It=v("<!> <div> </div>",1),Rt=v('<a class="w-full"><!></a>'),Dt=v("<!> <div>Search</div>",1),Lt=v('<a class="w-full"><!></a>'),zt=v("<!> <div> </div>",1),Ot=v('<div class="flex flex-col gap-2 pt-4"><!> <!> <!> <!> <!></div> <!>',1),Bt=v("<!> <!>",1),Et=v('<div class="border-1 absolute left-0 right-0 top-0 z-10 flex h-[50px] flex-row items-center border-b bg-[--bg] px-4 backdrop-blur-xl sm:px-8" style="--bg : hsl(var(--background) / 0.5)"><div class="sm:flex-1"><a class="flex flex-row items-center justify-start gap-2 text-2xl"><!> <!></a></div> <div class="hidden flex-[2] flex-row items-center justify-center gap-2 sm:flex"></div> <div class="hidden flex-row items-center justify-end gap-2 sm:flex sm:flex-1"><a><!></a> <!></div> <div class="flex flex-[2] flex-row items-center justify-center sm:hidden"><a><!></a></div> <div class="flex flex-row items-center justify-center sm:hidden"><!></div></div>');function Ht(m,e){ne(e,!0);const f=Le(),u=()=>me(ue,"$mode",f);let $=fe(()=>u()==="dark");var t=Et(),r=c(t),o=c(r);_(()=>A(o,"href",Y("/")));var l=c(o);Me(l,{children:(d,h)=>{var a=jt(),S=b(a);Ke(S,{children:(j,J)=>{C(j,{get icon(){return ae.left.icon}})},$$slots:{default:!0}});var ee=i(S,2);Ce(ee,{side:"bottom",class:"lg:hidden",children:(j,J)=>{W();var k=te();_(()=>B(k,ae.left.title)),s(j,k)},$$slots:{default:!0}}),s(d,a)},$$slots:{default:!0}});var P=i(l,2);bt(P,{className:"hidden lg:block",children:(d,h)=>{W();var a=te();_(()=>B(a,ae.left.title)),s(d,a)},$$slots:{default:!0}}),n(o),n(r);var T=i(r,2);Ne(T,21,()=>ae.items,Te,(d,h)=>{var a=Ct();_(()=>A(a,"href",Y(g(h).href)));var S=c(a);Me(S,{children:(ee,j)=>{var J=Kt(),k=b(J);Ke(k,{children:(F,se)=>{I(F,{class:"flex flex-row items-center justify-center gap-2",variant:"ghost",children:(O,ce)=>{var oe=Mt(),le=b(oe);C(le,{get icon(){return g(h).icon},className:"text-xl"});var x=i(le,2),M=c(x,!0);n(x),_(()=>B(M,g(h).title)),s(O,oe)},$$slots:{default:!0}})},$$slots:{default:!0}});var U=i(k,2);Ce(U,{side:"bottom",class:"lg:hidden",children:(F,se)=>{W();var O=te();_(()=>B(O,g(h).title)),s(F,O)},$$slots:{default:!0}}),s(ee,J)},$$slots:{default:!0}}),n(a),s(d,a)}),n(T);var y=i(T,2),R=c(y);_(()=>A(R,"href",Y("/search")));var re=c(R);I(re,{variant:"ghost",class:"text-xl",children:(d,h)=>{C(d,{icon:"i-carbon-search"})},$$slots:{default:!0}}),n(R);var Q=i(R,2);I(Q,{variant:"ghost",class:"text-xl",$$events:{click(...d){Z==null||Z.apply(this,d)}},children:(d,h)=>{var a=fe(()=>g($)?"i-carbon-moon":"i-carbon-sun");C(d,{get icon(){return g(a)}})},$$slots:{default:!0}}),n(y);var D=i(y,2),q=c(D);_(()=>A(q,"href",Y("/")));var X=c(q);at(X,{children:(d,h)=>{W();var a=te();_(()=>B(a,Ee.fullName)),s(d,a)},$$slots:{default:!0}}),n(q),n(D);var L=i(D,2),z=c(L);vt(z,{children:(d,h)=>{var a=Bt(),S=b(a);mt(S,{children:(j,J)=>{I(j,{size:"icon",variant:"ghost",children:(k,U)=>{C(k,{className:"text-xl",icon:"i-carbon-menu"})},$$slots:{default:!0}})},$$slots:{default:!0}});var ee=i(S,2);ut(ee,{children:(j,J)=>{var k=Ot(),U=b(k),F=c(U);Ne(F,17,()=>ae.items,Te,(x,M)=>{ve(x,{children:(w,G)=>{var N=Rt();_(()=>A(N,"href",Y(g(M).href)));var V=c(N);I(V,{class:"flex w-full flex-row items-center justify-start gap-2",variant:"ghost",children:(K,he)=>{var _e=It(),$e=b(_e);C($e,{get icon(){return g(M).icon},className:"text-xl"});var ge=i($e,2),Ae=c(ge,!0);n(ge),_(()=>B(Ae,g(M).title)),s(K,_e)},$$slots:{default:!0}}),n(N),s(w,N)},$$slots:{default:!0}})});var se=i(F,2);je(se,{});var O=i(se,2);ve(O,{children:(x,M)=>{var w=Lt();_(()=>A(w,"href",Y("/search")));var G=c(w);I(G,{class:"flex w-full flex-row items-center justify-start gap-2",variant:"ghost",children:(N,V)=>{var K=Dt(),he=b(K);C(he,{icon:"i-carbon-search",className:"text-xl"}),W(2),s(N,K)},$$slots:{default:!0}}),n(w),s(x,w)},$$slots:{default:!0}});var ce=i(O,2);je(ce,{});var oe=i(ce,2);I(oe,{class:"flex w-full flex-row items-center justify-start gap-2",variant:"ghost",$$events:{click(...x){Z==null||Z.apply(this,x)}},children:(x,M)=>{var w=zt(),G=b(w),N=fe(()=>g($)?"i-carbon-moon":"i-carbon-sun");C(G,{get icon(){return g(N)},className:"text-xl"});var V=i(G,2),K=c(V,!0);n(V),_(()=>B(K,g($)?"Dark":"Light")),s(x,w)},$$slots:{default:!0}}),n(U);var le=i(U,2);xt(le,{class:"items-end",children:(x,M)=>{ve(x,{children:(w,G)=>{I(w,{children:(N,V)=>{W();var K=te("Close");s(N,K)},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0}}),s(j,k)},$$slots:{default:!0}}),s(d,a)},$$slots:{default:!0}}),n(L),n(t),s(m,t),de()}var At=v('<!> <div class="flex h-screen w-screen flex-col overflow-x-hidden"><!> <div class="mt-[50px] flex flex-1 flex-col"><!></div></div>',1);function aa(m,e){ne(e,!0);var f=At(),u=b(f);Tt(u,{});var $=i(u,2),t=c($);Ht(t,{});var r=i(t,2),o=c(r);rt(o,()=>e.children),n(r),n($),s(m,f),de()}export{aa as component,ta as universal};
