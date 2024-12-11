import{s as ht,e as ee,f as fe,a as b,d as lt,b as q,t as Ke,c as Se}from"../chunks/disclose-version.Cfp-rwoP.js";import{al as Mt,an as wn,am as ln,p as Oe,D as Y,b as ut,z as V,g,F as It,f as K,t as Z,N as Tn,a as Pe,G as At,c as Te,r as pe,_ as ze,s as oe,n as je,H as Wt,d as mt,e as Yt}from"../chunks/utils.jAVDF0d8.js";import{l as be,p as v,i as Ce,b as Ge,s as Vt,a as Bt}from"../chunks/index-client.BSQKl7cS.js";import{t as wt,c as un,r as cn,g as dn,o as En,I as Tt,e as Et,d as Cn}from"../chunks/stores.CaM8lGGN.js";import{E as On}from"../chunks/empty-result.Cw2NVdwx.js";import{F as Pn,a as An,C as In,S as Sn}from"../chunks/fancy-card.BrN1VvC9.js";import{l as at,q as _,w as ve,r as vt,E as fn,y as Ae,m as xe,n as pt,F as Mn,k as Ie,C as I,K as Gt,D as le,S as Ft,L as Be,M as $t,z as st,A as Dn,N as Ct,o as Ut,f as Fn,j as $e,b as Le,a as ge,c as Rt,s as Ot,G as Rn,g as qt,d as Nn,h as Kn}from"../chunks/base.BoyBkmBx.js";import{M as _t,A as jn}from"../chunks/assets.ClN8Jk37.js";import{e as Bn}from"../chunks/index.DDBfyhzG.js";import{i as We}from"../chunks/legacy.Ccq7PQRh.js";import{B as gn}from"../chunks/button.CZ3uol4_.js";import{u as zn,g as Ln,R as mn,T as vn,a as bn}from"../chunks/index.BAr-IITn.js";import{S as Wn}from"../chunks/skill-badge.DGcktI21.js";import{A as Vn,a as Un,b as Hn}from"../chunks/avatar-fallback.Bj1JYGv3.js";import{B as Jt}from"../chunks/index.Bo76ChIx.js";import{C as Xn}from"../chunks/card-footer.BOObc9F_.js";import{d as bt,w as de,g as Yn}from"../chunks/paths.BBpxvdzV.js";import{u as hn,g as Qt,a as Zt,o as Pt,c as Nt,t as yt}from"../chunks/events.CYhBihTn.js";import{s as it,w as Gn,c as $n,u as qn,h as Jn,r as Qn}from"../chunks/action.CxyRp709.js";import{c as Zn,S as en}from"../chunks/separator.B1xEEzpv.js";import{b as Me}from"../chunks/misc.Dzvx5Zh0.js";import{c as er}from"../chunks/index.DFhmSicB.js";import{P as zt}from"../chunks/projects.COF_h0WC.js";import{S as tr}from"../chunks/skills.B9QC1-jY.js";function nr(n){n.setAttribute("data-highlighted","")}function gt(n){n.removeAttribute("data-highlighted")}function rr(n,e=500){let o=null;return function(...a){const d=()=>{o=null,n(...a)};o&&clearTimeout(o),o=setTimeout(d,e)}}function tn(n){const{open:e,forceVisible:o,activeTrigger:a}=n;return bt([e,o,a],([d,c,s])=>(d||c)&&s!==null)}function me(n){at&&it(1).then(()=>{const e=document.activeElement;!_(e)||e===n||(e.tabIndex=-1,n&&(n.tabIndex=0,n.focus()))})}function pn(){return Array.from(document.querySelectorAll('a[href]:not([tabindex="-1"]), button:not([disabled]):not([tabindex="-1"]), input:not([disabled]):not([tabindex="-1"]), select:not([disabled]):not([tabindex="-1"]), textarea:not([disabled]):not([tabindex="-1"]), [tabindex]:not([tabindex="-1"])'))}function sr(n){const e=pn(),a=e.indexOf(n)+1,d=e[a];return a<e.length&&_(d)?d:null}function or(n){const e=pn(),a=e.indexOf(n)-1,d=e[a];return a>=0&&_(d)?d:null}const ar=new Set(["Shift","Control","Alt","Meta","CapsLock","NumLock"]),ir={onMatch:me,getCurrentItem:()=>document.activeElement};function lr(n={}){const e={...ir,...n},o=ve(de([])),a=rr(()=>{o.update(()=>[])});return{typed:o,resetTyped:a,handleTypeaheadSearch:(c,s)=>{if(ar.has(c))return;const r=e.getCurrentItem(),u=Yn(o);if(!Array.isArray(u))return;u.push(c.toLowerCase()),o.set(u);const h=s.filter(m=>!(m.getAttribute("disabled")==="true"||m.getAttribute("aria-disabled")==="true"||m.hasAttribute("data-disabled"))),w=u.length>1&&u.every(m=>m===u[0])?u[0]:u.join(""),O=_(r)?h.indexOf(r):-1;let j=Gn(h,Math.max(O,0));w.length===1&&(j=j.filter(m=>m!==r));const U=j.find(m=>(m==null?void 0:m.innerText)&&m.innerText.toLowerCase().startsWith(w.toLowerCase()));_(U)&&U!==r&&e.onMatch(U),a()}}}const ur={floating:{},focusTrap:{},modal:{},escapeKeydown:{},portal:"body"},nn=(n,e)=>{n.dataset.escapee="";const{anchorElement:o,open:a,options:d}=e;if(!o||!a||!d)return{destroy:vt};const c={...ur,...d},s=[];if(c.portal!==null&&s.push(hn(n,c.portal).destroy),s.push(zn(o,n,c.floating).destroy),c.focusTrap!==null){const{useFocusTrap:u}=$n({immediate:!0,escapeDeactivates:!1,allowOutsideClick:!0,returnFocusOnDeactivate:!1,fallbackFocus:n,...c.focusTrap});s.push(u(n).destroy)}c.modal!==null&&s.push(qn(n,{onClose:()=>{_(o)&&(a.set(!1),o.focus())},shouldCloseOnInteractOutside:u=>!(u.defaultPrevented||_(o)&&o.contains(u.target)),...c.modal}).destroy),c.escapeKeydown!==null&&s.push(fn(n,{enabled:a,handler:()=>{a.set(!1)},...c.escapeKeydown}).destroy);const r=Ae(...s);return{destroy(){r()}}},cr={ltr:[...Ft,le.ARROW_RIGHT],rtl:[...Ft,le.ARROW_LEFT]},dr={ltr:[le.ARROW_LEFT],rtl:[le.ARROW_RIGHT]},rn=["menu","trigger"],fr={arrowSize:8,positioning:{placement:"bottom"},preventScroll:!0,closeOnEscape:!0,closeOnOutsideClick:!0,portal:void 0,loop:!1,dir:"ltr",defaultOpen:!1,typeahead:!0,closeOnItemClick:!0,onOutsideClick:void 0};function gr(n){const{name:e,selector:o}=Dn(n.selector),{preventScroll:a,arrowSize:d,positioning:c,closeOnEscape:s,closeOnOutsideClick:r,portal:u,forceVisible:h,typeahead:k,loop:w,closeFocus:O,disableFocusFirstItem:j,closeOnItemClick:S,onOutsideClick:U}=n.rootOptions,m=n.rootOpen,F=n.rootActiveTrigger,p=n.nextFocusable,B=n.prevFocusable,x=ve.writable(!1),M=ve(de(0)),z=ve(de(null)),H=ve(de("right")),C=ve(de(null)),G=ve(bt([H,z],([t,i])=>l=>t===(i==null?void 0:i.side)&&mr(l,i==null?void 0:i.area))),{typed:L,handleTypeaheadSearch:X}=lr(),te=wt({...Qt(rn),...n.ids}),ue=tn({open:m,forceVisible:h,activeTrigger:F}),we=xe(e(),{stores:[ue,u,te.menu,te.trigger],returned:([t,i,l,f])=>({role:"menu",hidden:t?void 0:!0,style:pt({display:t?void 0:"none"}),id:l,"aria-labelledby":f,"data-state":t?"open":"closed","data-portal":Mn(i),tabindex:-1}),action:t=>{let i=vt;const l=Ie([ue,F,c,r,u,s],([T,J,ye,$,P,R])=>{i(),!(!T||!J)&&Mt().then(()=>{i(),xt(t,o),i=nn(t,{anchorElement:J,open:m,options:{floating:ye,modal:{closeOnInteractOutside:$,shouldCloseOnInteractOutside:E=>{var A;return(A=U.get())==null||A(E),!(E.defaultPrevented||_(J)&&J.contains(E.target))},onClose:()=>{m.set(!1),J.focus()},open:T},portal:Zt(t,P),escapeKeydown:R?void 0:null}}).destroy})}),f=Ae(I(t,"keydown",T=>{const J=T.target,ye=T.currentTarget;if(!_(J)||!_(ye)||!(J.closest('[role="menu"]')===ye))return;if(Gt.includes(T.key)&&on(T,w.get()??!1),T.key===le.TAB){T.preventDefault(),m.set(!1),sn(T,p,B);return}const P=T.key.length===1;!(T.ctrlKey||T.altKey||T.metaKey)&&P&&k.get()===!0&&X(T.key,ot(ye))}));return{destroy(){l(),f(),i()}}}}),re=xe(e("trigger"),{stores:[m,te.menu,te.trigger],returned:([t,i,l])=>({"aria-controls":i,"aria-expanded":t,"data-state":t?"open":"closed",id:l,tabindex:0}),action:t=>(Dt(t),F.update(l=>l||t),{destroy:Ae(I(t,"click",l=>{const f=m.get(),T=l.currentTarget;_(T)&&(se(T),f||l.preventDefault())}),I(t,"keydown",l=>{const f=l.currentTarget;if(!_(f)||!(Ft.includes(l.key)||l.key===le.ARROW_DOWN))return;l.preventDefault(),se(f);const T=f.getAttribute("aria-controls");if(!T)return;const J=document.getElementById(T);if(!J)return;const ye=ot(J);ye.length&&me(ye[0])}))})}),De=xe(e("arrow"),{stores:d,returned:t=>({"data-arrow":!0,style:pt({position:"absolute",width:`var(--arrow-size, ${t}px)`,height:`var(--arrow-size, ${t}px)`})})}),Ve=xe(e("overlay"),{stores:[ue],returned:([t])=>({hidden:t?void 0:!0,tabindex:-1,style:pt({display:t?void 0:"none"}),"aria-hidden":"true","data-state":hr(t)}),action:t=>{let i=vt;if(s.get()){const f=fn(t,{handler:()=>{m.set(!1);const T=F.get();T&&T.focus()}});f&&f.destroy&&(i=f.destroy)}const l=Ie([u],([f])=>{if(f===null)return vt;const T=Zt(t,f);return T===null?vt:hn(t,T).destroy});return{destroy(){i(),l()}}}}),qe=xe(e("item"),{returned:()=>({role:"menuitem",tabindex:-1,"data-orientation":"vertical"}),action:t=>(xt(t,o),Dt(t),{destroy:Ae(I(t,"pointerdown",l=>{const f=l.currentTarget;if(_(f)&&Be(f)){l.preventDefault();return}}),I(t,"click",l=>{const f=l.currentTarget;if(_(f)){if(Be(f)){l.preventDefault();return}if(l.defaultPrevented){me(f);return}S.get()&&it(1).then(()=>{m.set(!1)})}}),I(t,"keydown",l=>{he(l)}),I(t,"pointermove",l=>{Xe(l)}),I(t,"pointerleave",l=>{nt(l)}),I(t,"focusin",l=>{Re(l)}),I(t,"focusout",l=>{Ne(l)}))})}),Je=xe(e("group"),{returned:()=>t=>({role:"group","aria-labelledby":t})}),Ue=xe(e("group-label"),{returned:()=>t=>({id:t})}),Ee={defaultChecked:!1,disabled:!1},Qe=t=>{const i={...Ee,...t},l=i.checked??de(i.defaultChecked??null),f=Pt(l,i.onCheckedChange),T=de(i.disabled),J=xe(e("checkbox-item"),{stores:[f,T],returned:([P,R])=>({role:"menuitemcheckbox",tabindex:-1,"data-orientation":"vertical","aria-checked":ct(P)?"mixed":P?"true":"false","data-disabled":Ct(R),"data-state":jt(P)}),action:P=>(xt(P,o),Dt(P),{destroy:Ae(I(P,"pointerdown",E=>{const A=E.currentTarget;if(_(A)&&Be(A)){E.preventDefault();return}}),I(P,"click",E=>{const A=E.currentTarget;if(_(A)){if(Be(A)){E.preventDefault();return}if(E.defaultPrevented){me(A);return}f.update(Ye=>ct(Ye)?!0:!Ye),S.get()&&Mt().then(()=>{m.set(!1)})}}),I(P,"keydown",E=>{he(E)}),I(P,"pointermove",E=>{const A=E.currentTarget;if(_(A)){if(Be(A)){He(E);return}Xe(E,A)}}),I(P,"pointerleave",E=>{nt(E)}),I(P,"focusin",E=>{Re(E)}),I(P,"focusout",E=>{Ne(E)}))})}),ye=bt(f,P=>P===!0),$=bt(f,P=>P==="indeterminate");return{elements:{checkboxItem:J},states:{checked:f},helpers:{isChecked:ye,isIndeterminate:$},options:{disabled:T}}},Ze=(t={})=>{const i=t.value??de(t.defaultValue??null),l=Pt(i,t.onValueChange),f=xe(e("radio-group"),{returned:()=>({role:"group"})}),T={disabled:!1},J=xe(e("radio-item"),{stores:[l],returned:([$])=>P=>{const{value:R,disabled:E}={...T,...P},A=$===R;return{disabled:E,role:"menuitemradio","data-state":A?"checked":"unchecked","aria-checked":A,"data-disabled":Ct(E),"data-value":R,"data-orientation":"vertical",tabindex:-1}},action:$=>(xt($,o),{destroy:Ae(I($,"pointerdown",R=>{const E=R.currentTarget;if(!_(E))return;const A=$.dataset.value;if($.dataset.disabled||A===void 0){R.preventDefault();return}}),I($,"click",R=>{const E=R.currentTarget;if(!_(E))return;const A=$.dataset.value;if($.dataset.disabled||A===void 0){R.preventDefault();return}if(R.defaultPrevented){if(!_(E))return;me(E);return}l.set(A),S.get()&&Mt().then(()=>{m.set(!1)})}),I($,"keydown",R=>{he(R)}),I($,"pointermove",R=>{const E=R.currentTarget;if(!_(E))return;const A=$.dataset.value;if($.dataset.disabled||A===void 0){He(R);return}Xe(R,E)}),I($,"pointerleave",R=>{nt(R)}),I($,"focusin",R=>{Re(R)}),I($,"focusout",R=>{Ne(R)}))})}),ye=bt(l,$=>P=>$===P);return{elements:{radioGroup:f,radioItem:J},states:{value:l},helpers:{isChecked:ye}}},{elements:{root:_e}}=Zn({orientation:"horizontal"}),Fe={...fr,disabled:!1,positioning:{placement:"right-start",gutter:8}},et=t=>{const i={...Fe,...t},l=i.open??de(!1),f=Pt(l,i==null?void 0:i.onOpenChange),T=wt(Ut(i,"ids")),{positioning:J,arrowSize:ye,disabled:$}=T,P=ve(de(null)),R=ve(de(null)),E=ve(de(0)),A=wt({...Qt(rn),...i.ids});$t(()=>{const D=document.getElementById(A.trigger.get());D&&P.set(D)});const Ye=tn({open:f,forceVisible:h,activeTrigger:P}),yn=xe(e("submenu"),{stores:[Ye,A.menu,A.trigger],returned:([D,ie,ke])=>({role:"menu",hidden:D?void 0:!0,style:pt({display:D?void 0:"none"}),id:ie,"aria-labelledby":ke,"data-state":D?"open":"closed","data-id":ie,tabindex:-1}),action:D=>{let ie=vt;const ke=Ie([Ye,J],([y,W])=>{if(ie(),!y)return;const Q=P.get();Q&&Mt().then(()=>{ie();const ne=Ht(Q);ie=nn(D,{anchorElement:Q,open:f,options:{floating:W,portal:_(ne)?ne:void 0,modal:null,focusTrap:null,escapeKeydown:null}}).destroy})}),N=Ae(I(D,"keydown",y=>{if(y.key===le.ESCAPE)return;const W=y.target,Q=y.currentTarget;if(!_(W)||!_(Q)||!(W.closest('[role="menu"]')===Q))return;if(Gt.includes(y.key)){y.stopImmediatePropagation(),on(y,w.get()??!1);return}const dt=dr.ltr.includes(y.key),ft=y.ctrlKey||y.altKey||y.metaKey,St=y.key.length===1;if(dt){const Xt=P.get();y.preventDefault(),f.update(()=>(Xt&&me(Xt),!1));return}if(y.key===le.TAB){y.preventDefault(),m.set(!1),sn(y,p,B);return}!ft&&St&&k.get()===!0&&X(y.key,ot(Q))}),I(D,"pointermove",y=>{ce(y)}),I(D,"focusout",y=>{const W=P.get();if(x.get()){const Q=y.target,ne=document.getElementById(A.menu.get());if(!_(ne)||!_(Q))return;!ne.contains(Q)&&Q!==W&&f.set(!1)}else{const Q=y.currentTarget,ne=y.relatedTarget;if(!_(ne)||!_(Q))return;!Q.contains(ne)&&ne!==W&&f.set(!1)}}));return{destroy(){ke(),ie(),N()}}}}),kn=xe(e("subtrigger"),{stores:[f,$,A.menu,A.trigger],returned:([D,ie,ke,N])=>({role:"menuitem",id:N,tabindex:-1,"aria-controls":ke,"aria-expanded":D,"data-state":D?"open":"closed","data-disabled":Ct(ie),"aria-haspopop":"menu"}),action:D=>{xt(D,o),Dt(D),P.update(N=>N||D);const ie=()=>{Lt(R),window.clearTimeout(E.get()),z.set(null)},ke=Ae(I(D,"click",N=>{if(N.defaultPrevented)return;const y=N.currentTarget;!_(y)||Be(y)||(me(y),f.get()||f.update(W=>W||(P.set(y),!W)))}),I(D,"keydown",N=>{const y=L.get(),W=N.currentTarget;if(!(!_(W)||Be(W)||y.length>0&&N.key===le.SPACE)&&cr.ltr.includes(N.key)){if(!f.get()){W.click(),N.preventDefault();return}const ne=W.getAttribute("aria-controls");if(!ne)return;const dt=document.getElementById(ne);if(!_(dt))return;const ft=ot(dt)[0];me(ft)}}),I(D,"pointermove",N=>{if(!kt(N)||(ae(N),N.defaultPrevented))return;const y=N.currentTarget;if(!_(y))return;br(A.menu.get())||me(y);const W=R.get();!f.get()&&!W&&!Be(y)&&R.set(window.setTimeout(()=>{f.update(()=>(P.set(y),!0)),Lt(R)},100))}),I(D,"pointerleave",N=>{if(!kt(N))return;Lt(R);const y=document.getElementById(A.menu.get()),W=y==null?void 0:y.getBoundingClientRect();if(W){const Q=y==null?void 0:y.dataset.side,ne=Q==="right",dt=ne?-5:5,ft=W[ne?"left":"right"],St=W[ne?"right":"left"];z.set({area:[{x:N.clientX+dt,y:N.clientY},{x:ft,y:W.top},{x:St,y:W.top},{x:St,y:W.bottom},{x:ft,y:W.bottom}],side:Q}),window.clearTimeout(E.get()),E.set(window.setTimeout(()=>{z.set(null)},300))}else{if(tt(N),N.defaultPrevented)return;z.set(null)}}),I(D,"focusout",N=>{const y=N.currentTarget;if(!_(y))return;gt(y);const W=N.relatedTarget;if(!_(W))return;const Q=y.getAttribute("aria-controls");if(!Q)return;const ne=document.getElementById(Q);ne&&!ne.contains(W)&&f.set(!1)}),I(D,"focusin",N=>{Re(N)}));return{destroy(){ie(),ke()}}}}),xn=xe(e("subarrow"),{stores:ye,returned:D=>({"data-arrow":!0,style:pt({position:"absolute",width:`var(--arrow-size, ${D}px)`,height:`var(--arrow-size, ${D}px)`})})});return Ie([m],([D])=>{D||(P.set(null),f.set(!1))}),Ie([z],([D])=>{!at||D||window.clearTimeout(E.get())}),Ie([f],([D])=>{if(at&&(D&&x.get()&&it(1).then(()=>{const ie=document.getElementById(A.menu.get());if(!ie)return;const ke=ot(ie);ke.length&&me(ke[0])}),!D)){const ie=C.get(),ke=document.getElementById(A.trigger.get());if(ie&&it(1).then(()=>{const N=document.getElementById(A.menu.get());N&&N.contains(ie)&&gt(ie)}),!ke||document.activeElement===ke)return;gt(ke)}}),{ids:A,elements:{subTrigger:kn,subMenu:yn,subArrow:xn},states:{subOpen:f},options:T}};$t(()=>{const t=document.getElementById(te.trigger.get());_(t)&&m.get()&&F.set(t);const i=[],l=()=>x.set(!1),f=()=>{x.set(!0),i.push(Ae(st(document,"pointerdown",l,{capture:!0,once:!0}),st(document,"pointermove",l,{capture:!0,once:!0})))},T=J=>{if(J.key===le.ESCAPE&&s.get()){m.set(!1);return}};return i.push(st(document,"keydown",f,{capture:!0})),i.push(st(document,"keydown",T)),()=>{i.forEach(J=>J())}}),Ie([m,C],([t,i])=>{!t&&i&&gt(i)}),Ie([m],([t])=>{if(at&&!t){const i=F.get();if(!i)return;const l=O.get();!t&&i&&Jn({prop:l,defaultEl:i})}}),Ie([m,a],([t,i])=>{if(!at)return;const l=[];return t&&i&&l.push(Qn()),it(1).then(()=>{const f=document.getElementById(te.menu.get());if(f&&t&&x.get()){if(j.get()){me(f);return}const T=ot(f);if(!T.length)return;me(T[0])}}),()=>{l.forEach(f=>f())}}),Ie(m,t=>{if(!at)return;const i=()=>x.set(!1),l=f=>{if(x.set(!0),f.key===le.ESCAPE&&t&&s.get()){m.set(!1);return}};return Ae(st(document,"pointerdown",i,{capture:!0,once:!0}),st(document,"pointermove",i,{capture:!0,once:!0}),st(document,"keydown",l,{capture:!0}))});function se(t){m.update(i=>{const l=!i;return l&&(p.set(sr(t)),B.set(or(t)),F.set(t)),l})}function Re(t){const i=t.currentTarget;if(!_(i))return;const l=C.get();l&&gt(l),nr(i),C.set(i)}function Ne(t){const i=t.currentTarget;_(i)&&gt(i)}function ae(t){rt(t)&&t.preventDefault()}function He(t){if(rt(t))return;const i=t.target;if(!_(i))return;const l=Ht(i);l&&me(l)}function tt(t){rt(t)&&t.preventDefault()}function ce(t){if(!kt(t))return;const i=t.target,l=t.currentTarget;if(!_(l)||!_(i))return;const f=M.get(),T=f!==t.clientX;if(l.contains(i)&&T){const J=t.clientX>f?"right":"left";H.set(J),M.set(t.clientX)}}function Xe(t,i=null){if(!kt(t)||(ae(t),t.defaultPrevented))return;if(i){me(i);return}const l=t.currentTarget;_(l)&&me(l)}function nt(t){kt(t)&&He(t)}function he(t){if(L.get().length>0&&t.key===le.SPACE){t.preventDefault();return}if(Ft.includes(t.key)){t.preventDefault();const f=t.currentTarget;if(!_(f))return;f.click()}}function ct(t){return t==="indeterminate"}function jt(t){return ct(t)?"indeterminate":t?"checked":"unchecked"}function rt(t){return G.get()(t)}function Ht(t){const i=t.closest('[role="menu"]');return _(i)?i:null}return{elements:{trigger:re,menu:we,overlay:Ve,item:qe,group:Je,groupLabel:Ue,arrow:De,separator:_e},builders:{createCheckboxItem:Qe,createSubmenu:et,createMenuRadioGroup:Ze},states:{open:m},helpers:{handleTypeaheadSearch:X},ids:te,options:n.rootOptions}}function sn(n,e,o){if(n.shiftKey){const a=o.get();a&&(n.preventDefault(),it(1).then(()=>a.focus()),o.set(null))}else{const a=e.get();a&&(n.preventDefault(),it(1).then(()=>a.focus()),e.set(null))}}function ot(n){return Array.from(n.querySelectorAll(`[data-melt-menu-id="${n.id}"]`)).filter(e=>_(e))}function Dt(n){!n||!Be(n)||(n.setAttribute("data-disabled",""),n.setAttribute("aria-disabled","true"))}function Lt(n){if(!at)return;const e=n.get();e&&(window.clearTimeout(e),n.set(null))}function kt(n){return n.pointerType==="mouse"}function xt(n,e){if(!n)return;const o=n.closest(`${e()}, ${e("submenu")}`);_(o)&&n.setAttribute("data-melt-menu-id",o.id)}function on(n,e){n.preventDefault();const o=document.activeElement,a=n.currentTarget;if(!_(o)||!_(a))return;const d=ot(a);if(!d.length)return;const c=d.filter(u=>!(u.hasAttribute("data-disabled")||u.getAttribute("disabled")==="true")),s=c.indexOf(o);let r;switch(n.key){case le.ARROW_DOWN:e?r=s<c.length-1?s+1:0:r=s<c.length-1?s+1:s;break;case le.ARROW_UP:e?r=s>0?s-1:c.length-1:r=s<0?c.length-1:s>0?s-1:0;break;case le.HOME:r=0;break;case le.END:r=c.length-1;break;default:return}me(c[r])}function mr(n,e){if(!e)return!1;const o={x:n.clientX,y:n.clientY};return vr(o,e)}function vr(n,e){const{x:o,y:a}=n;let d=!1;for(let c=0,s=e.length-1;c<e.length;s=c++){const r=e[c].x,u=e[c].y,h=e[s].x,k=e[s].y;u>a!=k>a&&o<(h-r)*(a-u)/(k-u)+r&&(d=!d)}return d}function br(n){const e=document.activeElement;if(!_(e))return!1;const o=e.closest(`[data-id="${n}"]`);return _(o)}function hr(n){return n?"open":"closed"}const pr={arrowSize:8,positioning:{placement:"bottom"},preventScroll:!0,closeOnEscape:!0,closeOnOutsideClick:!0,portal:void 0,loop:!1,dir:"ltr",defaultOpen:!1,forceVisible:!1,typeahead:!0,closeFocus:void 0,disableFocusFirstItem:!1,closeOnItemClick:!0,onOutsideClick:void 0};function _r(n){const e={...pr,...n},o=wt(Ut(e,"ids")),a=e.open??de(e.defaultOpen),d=Pt(a,e==null?void 0:e.onOpenChange),c=ve(de(null)),s=ve(de(null)),r=ve(de(null)),{elements:u,builders:h,ids:k,states:w,options:O}=gr({rootOptions:o,rootOpen:d,rootActiveTrigger:ve(c),nextFocusable:ve(s),prevFocusable:ve(r),selector:"dropdown-menu",removeScroll:!0,ids:e.ids});return{ids:k,elements:u,states:w,builders:h,options:O}}const yr={defaultPressed:!1,disabled:!1};function kr(n){const e={...yr,...n},o=wt(Ut(e,"pressed")),{disabled:a}=o,d=e.pressed??de(e.defaultPressed),c=Pt(d,e==null?void 0:e.onPressedChange);function s(){a.get()||c.update(h=>!h)}return{elements:{root:xe("toggle",{stores:[c,a],returned:([u,h])=>({"data-disabled":Ct(h),disabled:Ct(h),"data-state":u?"on":"off","aria-pressed":u,type:"button"}),action:u=>({destroy:Ae(I(u,"click",()=>{s()}),I(u,"keydown",k=>{k.key!==le.ENTER&&k.key!==le.SPACE||(k.preventDefault(),s())}))})})},states:{pressed:c},options:o}}function _n(){return{NAME:"menu",SUB_NAME:"menu-submenu",RADIO_GROUP_NAME:"menu-radiogroup",CHECKBOX_ITEM_NAME:"menu-checkboxitem",RADIO_ITEM_NAME:"menu-radioitem",GROUP_NAME:"menu-group",PARTS:["arrow","checkbox-indicator","checkbox-item","content","group","item","label","radio-group","radio-item","radio-indicator","separator","sub-content","sub-trigger","trigger"]}}function Kt(){const{NAME:n}=_n();return wn(n)}function xr(n){const{NAME:e,PARTS:o}=_n(),a=un("menu",o),d={..._r({...cn(n),forceVisible:!0}),getAttrs:a};return ln(e,d),{...d,updateOption:dn(d.options)}}function wr(n){const o={...{side:"bottom",align:"center"},...n},{options:{positioning:a}}=Kt();Ln(a)(o)}function Tr(n,e){const o=be(e,["children","$$slots","$$events","$$legacy"]),a=be(o,["href","asChild","disabled","el"]);Oe(e,!1);const d=ht(),c=()=>lt(O,"$item",d),s=At(),r=At();let u=v(e,"href",24,()=>{}),h=v(e,"asChild",8,!1),k=v(e,"disabled",8,!1),w=v(e,"el",28,()=>{});const{elements:{item:O},getAttrs:j}=Kt(),S=Nt();Y(()=>c(),()=>{ut(s,c())}),Y(()=>V(k()),()=>{ut(r,{...j("item"),...En(k())})}),Y(()=>(g(s),g(r)),()=>{Object.assign(g(s),g(r))}),It(),We();var U=ee(),m=K(U);Ce(m,h,F=>{var p=ee(),B=K(p);ge(B,e,"default",{get builder(){return g(s)}}),b(F,p)},F=>{var p=ee(),B=K(p);Fn(B,()=>u()?"a":"div",!1,(x,M)=>{Ge(x,G=>w(G),()=>w()),$e(x,G=>g(s).action(G));let z;Z(()=>z=Le(x,z,{href:u(),...g(s),...a},void 0,x.namespaceURI===Tn,x.nodeName.includes("-"))),fe("m-click",x,S),fe("m-focusin",x,S),fe("m-focusout",x,S),fe("m-keydown",x,S),fe("m-pointerdown",x,S),fe("m-pointerleave",x,S),fe("m-pointermove",x,S),fe("pointerenter",x,function(G){Me.call(this,e,G)});var H=ee(),C=K(H);ge(C,e,"default",{get builder(){return g(s)}}),b(M,H)}),b(F,p)}),b(n,U),Pe()}function Er(n,e){Oe(e,!1);const o=ht(),a=()=>lt(x,"$idValues",o);let d=v(e,"closeOnOutsideClick",24,()=>{}),c=v(e,"closeOnEscape",24,()=>{}),s=v(e,"portal",24,()=>{}),r=v(e,"open",28,()=>{}),u=v(e,"onOpenChange",24,()=>{}),h=v(e,"preventScroll",24,()=>{}),k=v(e,"loop",24,()=>{}),w=v(e,"dir",24,()=>{}),O=v(e,"typeahead",24,()=>{}),j=v(e,"closeFocus",24,()=>{}),S=v(e,"disableFocusFirstItem",24,()=>{}),U=v(e,"closeOnItemClick",24,()=>{}),m=v(e,"onOutsideClick",24,()=>{});const{states:{open:F},updateOption:p,ids:B}=xr({closeOnOutsideClick:d(),closeOnEscape:c(),portal:s(),forceVisible:!0,defaultOpen:r(),preventScroll:h(),loop:k(),dir:w(),typeahead:O(),closeFocus:j(),disableFocusFirstItem:S(),closeOnItemClick:U(),onOutsideClick:m(),onOpenChange:({next:H})=>{var C;return r()!==H&&((C=u())==null||C(H),r(H)),H}}),x=bt([B.menu,B.trigger],([H,C])=>({menu:H,trigger:C}));Y(()=>V(r()),()=>{r()!==void 0&&F.set(r())}),Y(()=>V(d()),()=>{p("closeOnOutsideClick",d())}),Y(()=>V(c()),()=>{p("closeOnEscape",c())}),Y(()=>V(s()),()=>{p("portal",s())}),Y(()=>V(h()),()=>{p("preventScroll",h())}),Y(()=>V(k()),()=>{p("loop",k())}),Y(()=>V(w()),()=>{p("dir",w())}),Y(()=>V(j()),()=>{p("closeFocus",j())}),Y(()=>V(S()),()=>{p("disableFocusFirstItem",S())}),Y(()=>V(O()),()=>{p("typeahead",O())}),Y(()=>V(U()),()=>{p("closeOnItemClick",U())}),Y(()=>V(m()),()=>{p("onOutsideClick",m())}),It(),We();var M=ee(),z=K(M);ge(z,e,"default",{get ids(){return a()}}),b(n,M),Pe()}var Cr=q("<div><!></div>"),Or=q("<div><!></div>"),Pr=q("<div><!></div>"),Ar=q("<div><!></div>"),Ir=q("<div><!></div>");function Sr(n,e){const o=be(e,["children","$$slots","$$events","$$legacy"]),a=be(o,["transition","transitionConfig","inTransition","inTransitionConfig","outTransition","outTransitionConfig","asChild","id","side","align","sideOffset","alignOffset","collisionPadding","avoidCollisions","collisionBoundary","sameWidth","fitViewport","strategy","overlap","el"]);Oe(e,!1);const d=ht(),c=()=>lt(te,"$menu",d),s=()=>lt(ue,"$open",d),r=At();let u=v(e,"transition",24,()=>{}),h=v(e,"transitionConfig",24,()=>{}),k=v(e,"inTransition",24,()=>{}),w=v(e,"inTransitionConfig",24,()=>{}),O=v(e,"outTransition",24,()=>{}),j=v(e,"outTransitionConfig",24,()=>{}),S=v(e,"asChild",8,!1),U=v(e,"id",24,()=>{}),m=v(e,"side",8,"bottom"),F=v(e,"align",8,"center"),p=v(e,"sideOffset",8,0),B=v(e,"alignOffset",8,0),x=v(e,"collisionPadding",8,8),M=v(e,"avoidCollisions",8,!0),z=v(e,"collisionBoundary",24,()=>{}),H=v(e,"sameWidth",8,!1),C=v(e,"fitViewport",8,!1),G=v(e,"strategy",8,"absolute"),L=v(e,"overlap",8,!1),X=v(e,"el",28,()=>{});const{elements:{menu:te},states:{open:ue},ids:we,getAttrs:re}=Kt(),De=Nt(),Ve=re("content");Y(()=>V(U()),()=>{U()&&we.menu.set(U())}),Y(()=>c(),()=>{ut(r,c())}),Y(()=>g(r),()=>{Object.assign(g(r),Ve)}),Y(()=>(s(),V(m()),V(F()),V(p()),V(B()),V(x()),V(M()),V(z()),V(H()),V(C()),V(G()),V(L())),()=>{s()&&wr({side:m(),align:F(),sideOffset:p(),alignOffset:B(),collisionPadding:x(),avoidCollisions:M(),collisionBoundary:z(),sameWidth:H(),fitViewport:C(),strategy:G(),overlap:L()})}),It(),We();var qe=ee(),Je=K(qe);Ce(Je,()=>S()&&s(),Ue=>{var Ee=ee(),Qe=K(Ee);ge(Qe,e,"default",{get builder(){return g(r)}}),b(Ue,Ee)},Ue=>{var Ee=ee(),Qe=K(Ee);Ce(Qe,()=>u()&&s(),Ze=>{var _e=Cr();let Fe;var et=Te(_e);ge(et,e,"default",{get builder(){return g(r)}}),pe(_e),Ge(_e,se=>X(se),()=>X()),$e(_e,se=>g(r).action(se)),ze(()=>fe("m-keydown",_e,De)),Z(()=>Fe=Le(_e,Fe,{...g(r),...a})),yt(3,_e,u,h),b(Ze,_e)},Ze=>{var _e=ee(),Fe=K(_e);Ce(Fe,()=>k()&&O()&&s(),et=>{var se=Or();let Re;var Ne=Te(se);ge(Ne,e,"default",{get builder(){return g(r)}}),pe(se),Ge(se,ae=>X(ae),()=>X()),$e(se,ae=>g(r).action(ae)),ze(()=>fe("m-keydown",se,De)),Z(()=>Re=Le(se,Re,{...g(r),...a})),yt(1,se,k,w),yt(2,se,O,j),b(et,se)},et=>{var se=ee(),Re=K(se);Ce(Re,()=>k()&&s(),Ne=>{var ae=Pr();let He;var tt=Te(ae);ge(tt,e,"default",{get builder(){return g(r)}}),pe(ae),Ge(ae,ce=>X(ce),()=>X()),$e(ae,ce=>g(r).action(ce)),ze(()=>fe("m-keydown",ae,De)),Z(()=>He=Le(ae,He,{...g(r),...a})),yt(1,ae,k,w),b(Ne,ae)},Ne=>{var ae=ee(),He=K(ae);Ce(He,()=>O()&&s(),tt=>{var ce=Ar();let Xe;var nt=Te(ce);ge(nt,e,"default",{get builder(){return g(r)}}),pe(ce),Ge(ce,he=>X(he),()=>X()),$e(ce,he=>g(r).action(he)),ze(()=>fe("m-keydown",ce,De)),Z(()=>Xe=Le(ce,Xe,{...g(r),...a})),yt(2,ce,O,j),b(tt,ce)},tt=>{var ce=ee(),Xe=K(ce);Ce(Xe,s,nt=>{var he=Ir();let ct;var jt=Te(he);ge(jt,e,"default",{get builder(){return g(r)}}),pe(he),Ge(he,rt=>X(rt),()=>X()),$e(he,rt=>g(r).action(rt)),ze(()=>fe("m-keydown",he,De)),Z(()=>ct=Le(he,ct,{...g(r),...a})),b(nt,he)},null,!0),b(tt,ce)},!0),b(Ne,ae)},!0),b(et,se)},!0),b(Ze,_e)},!0),b(Ue,Ee)}),b(n,qe),Pe()}var Mr=q("<button><!></button>");function Dr(n,e){const o=be(e,["children","$$slots","$$events","$$legacy"]),a=be(o,["asChild","id","el"]);Oe(e,!1);const d=ht(),c=()=>lt(k,"$trigger",d),s=At();let r=v(e,"asChild",8,!1),u=v(e,"id",24,()=>{}),h=v(e,"el",28,()=>{});const{elements:{trigger:k},ids:w,getAttrs:O}=Kt(),j=Nt(),S=O("trigger");Y(()=>V(u()),()=>{u()&&w.trigger.set(u())}),Y(()=>c(),()=>{ut(s,c())}),Y(()=>g(s),()=>{Object.assign(g(s),S)}),It(),We();var U=ee(),m=K(U);Ce(m,r,F=>{var p=ee(),B=K(p);ge(B,e,"default",{get builder(){return g(s)}}),b(F,p)},F=>{var p=Mr();let B;var x=Te(p);ge(x,e,"default",{get builder(){return g(s)}}),pe(p),Ge(p,M=>h(M),()=>h()),$e(p,M=>g(s).action(M)),ze(()=>fe("m-keydown",p,j)),ze(()=>fe("m-pointerdown",p,j)),Z(()=>B=Le(p,B,{...g(s),type:"button",...a})),b(F,p)}),b(n,U),Pe()}function Fr(){return{NAME:"toggle",PARTS:["root","input"]}}function Rr(n){const{NAME:e,PARTS:o}=Fr(),a=un(e,o),d={...kr(cn(n)),getAttrs:a};return ln(e,d),{...d,updateOption:dn(d.options)}}var Nr=q("<button><!></button>");function Kr(n,e){const o=be(e,["children","$$slots","$$events","$$legacy"]),a=be(o,["disabled","pressed","onPressedChange","asChild","el"]);Oe(e,!1);const d=ht(),c=()=>lt(O,"$root",d),s=At();let r=v(e,"disabled",24,()=>{}),u=v(e,"pressed",28,()=>{}),h=v(e,"onPressedChange",24,()=>{}),k=v(e,"asChild",8,!1),w=v(e,"el",28,()=>{});const{elements:{root:O},states:{pressed:j},updateOption:S,getAttrs:U}=Rr({disabled:r(),defaultPressed:u(),onPressedChange:({next:x})=>{var M;return u()!==x&&((M=h())==null||M(x),u(x)),x}}),m=Nt(),F=U("root");Y(()=>V(u()),()=>{u()!==void 0&&j.set(u())}),Y(()=>V(r()),()=>{S("disabled",r())}),Y(()=>c(),()=>{ut(s,c())}),Y(()=>g(s),()=>{Object.assign(g(s),F)}),It(),We();var p=ee(),B=K(p);Ce(B,k,x=>{var M=ee(),z=K(M);ge(z,e,"default",{get builder(){return g(s)}}),b(x,M)},x=>{var M=Nr();let z;var H=Te(M);ge(H,e,"default",{get builder(){return g(s)}}),pe(M),Ge(M,C=>w(C),()=>w()),$e(M,C=>g(s).action(C)),ze(()=>fe("m-click",M,m)),ze(()=>fe("m-keydown",M,m)),Z(()=>z=Le(M,z,{...g(s),type:"button",...a})),b(x,M)}),b(n,p),Pe()}var jr=q("<div><!></div>");function Br(n,e){const o=be(e,["children","$$slots","$$events","$$legacy"]),a=be(o,["class"]);Oe(e,!1);let d=v(e,"class",8,void 0);We();var c=jr();let s;var r=Te(c);ge(r,e,"default",{}),pe(c),Z(()=>s=Le(c,s,{class:Rt("flex flex-col space-y-1.5 p-6 pb-0",d()),...a})),b(n,c),Pe()}var zr=q("<!> <!>",1),Lr=q("<a><!></a>");function an(n,e){Oe(e,!0);var o=Lr(),a=Te(o);mn(a,{openDelay:300,children:(d,c)=>{var s=zr(),r=K(s);vn(r,{children:(h,k)=>{gn(h,{size:"icon",variant:"outline",children:(w,O)=>{Tt(w,{icon:"i-carbon-link"})},$$slots:{default:!0}})},$$slots:{default:!0}});var u=oe(r,2);bn(u,{children:(h,k)=>{je();var w=Ke();Z(()=>Se(w,e.link.label)),b(h,w)},$$slots:{default:!0}}),b(d,s)},$$slots:{default:!0}}),pe(o),Z(()=>{Ot(o,"href",e.link.to),Ot(o,"target",e.link.newTab?"_blank":void 0)}),b(n,o),Pe()}function Wr(n,e){const o=be(e,["children","$$slots","$$events","$$legacy"]),a=be(o,["class","inset"]);Oe(e,!1);let d=v(e,"class",8,void 0),c=v(e,"inset",8,void 0);We();var s=Wt(()=>Rt("data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",c()&&"pl-8",d()));Tr(n,Vt({get class(){return g(s)}},()=>a,{$$events:{click(r){Me.call(this,e,r)},keydown(r){Me.call(this,e,r)},focusin(r){Me.call(this,e,r)},focusout(r){Me.call(this,e,r)},pointerdown(r){Me.call(this,e,r)},pointerleave(r){Me.call(this,e,r)},pointermove(r){Me.call(this,e,r)}},children:(r,u)=>{var h=ee(),k=K(h);ge(k,e,"default",{}),b(r,h)},$$slots:{default:!0}})),Pe()}function Vr(n,e){const o=be(e,["children","$$slots","$$events","$$legacy"]),a=be(o,["class","sideOffset","transition","transitionConfig"]);Oe(e,!1);let d=v(e,"class",8,void 0),c=v(e,"sideOffset",8,4),s=v(e,"transition",8,Rn),r=v(e,"transitionConfig",8,void 0);We();var u=Wt(()=>Rt("bg-popover text-popover-foreground z-50 min-w-[8rem] rounded-md border p-1 shadow-md focus:outline-none",d()));Sr(n,Vt({get transition(){return s()},get transitionConfig(){return r()},get sideOffset(){return c()},get class(){return g(u)}},()=>a,{$$events:{keydown(h){Me.call(this,e,h)}},children:(h,k)=>{var w=ee(),O=K(w);ge(O,e,"default",{}),b(h,w)},$$slots:{default:!0}})),Pe()}const Ur=Er,Hr=Dr;var Xr=q("<img>"),Yr=q("<!> <!>",1),Gr=q("<!> <!>",1),$r=q('<a target="_blank"><!></a>'),qr=q("<!> <!>",1),Jr=q("<!> <!>",1),Qr=q('<!> <div class="flex w-full flex-row items-center gap-1 overflow-x-hidden"><!> <!></div> <!>',1),Zr=q("<!> <!>",1),es=q("<!> <!>",1),ts=q('<!> <!> <!> <div class="flex w-full flex-row items-center justify-between"><!> <!></div> <!>',1),ns=q("<!> <!> <!>",1);function rs(n,e){Oe(e,!0);const o=ht(),a=()=>lt(Cn,"$mode",o);let d=mt(()=>qt(e.project.period.from)),c=mt(()=>qt(e.project.period.to)),s=mt(()=>Nn(e.project.period.from,e.project.period.to));var r=mt(()=>Kn(`/projects/${e.project.slug}`));Pn(n,{get color(){return e.project.color},class:"flex h-full flex-col",get href(){return g(r)},children:(u,h)=>{var k=ns(),w=K(k);Br(w,{class:"flex w-full flex-col gap-4",children:(S,U)=>{var m=Qr(),F=K(m);Vn(F,{children:(z,H)=>{var C=Yr(),G=K(C);Un(G,{children:(te,ue)=>{var we=Xr();Z(()=>{Ot(we,"src",jn.Unknown.light),Ot(we,"alt",e.project.name)}),b(te,we)},$$slots:{default:!0}});var L=oe(G,2),X=mt(()=>a()==="dark"?e.project.logo.dark:e.project.logo.light);Hn(L,{get src(){return g(X)}}),b(z,C)},$$slots:{default:!0}});var p=oe(F,2),B=Te(p);An(B,{class:"h-auto min-w-0 flex-1 overflow-x-hidden",children:(z,H)=>{mn(z,{children:(C,G)=>{var L=Gr(),X=K(L);vn(X,{class:"w-full overflow-y-auto overflow-x-hidden truncate text-ellipsis text-nowrap text-left",children:(ue,we)=>{je();var re=Ke();Z(()=>Se(re,e.project.name)),b(ue,re)},$$slots:{default:!0}});var te=oe(X,2);bn(te,{children:(ue,we)=>{je();var re=Ke();Z(()=>Se(re,e.project.name)),b(ue,re)},$$slots:{default:!0}}),b(C,L)},$$slots:{default:!0}})},$$slots:{default:!0}});var x=oe(B,2);Ce(x,()=>e.project.links.length>2,z=>{var H=Jr(),C=K(H);an(C,{get link(){return e.project.links[0]}});var G=oe(C,2);Ur(G,{children:(L,X)=>{var te=qr(),ue=K(te);Hr(ue,{children:(re,De)=>{gn(re,{size:"icon",variant:"outline",children:(Ve,qe)=>{Tt(Ve,{icon:"i-carbon-overflow-menu-vertical"})},$$slots:{default:!0}})},$$slots:{default:!0}});var we=oe(ue,2);Vr(we,{children:(re,De)=>{var Ve=ee(),qe=K(Ve);Et(qe,17,()=>e.project.links.slice(1),Je=>Je.to,(Je,Ue)=>{var Ee=$r(),Qe=Te(Ee);Wr(Qe,{children:(Ze,_e)=>{je();var Fe=Ke();Z(()=>Se(Fe,g(Ue).label)),b(Ze,Fe)},$$slots:{default:!0}}),pe(Ee),Z(()=>Ot(Ee,"href",g(Ue).to)),b(Je,Ee)}),b(re,Ve)},$$slots:{default:!0}}),b(L,te)},$$slots:{default:!0}}),b(z,H)},z=>{var H=ee(),C=K(H);Et(C,17,()=>e.project.links,G=>G.to,(G,L)=>{an(G,{get link(){return g(L)}})}),b(z,H)}),pe(p);var M=oe(p,2);en(M,{}),b(S,m)},$$slots:{default:!0}});var O=oe(w,2);In(O,{class:"flex flex-1 flex-col gap-4",children:(S,U)=>{var m=ts(),F=K(m);_t(F,{className:"flex flex-row gap-2 items-center",children:(C,G)=>{var L=Zr(),X=K(L);Tt(X,{icon:"i-carbon-assembly-cluster"});var te=oe(X,2);_t(te,{children:(ue,we)=>{je();var re=Ke();Z(()=>Se(re,e.project.type)),b(ue,re)},$$slots:{default:!0}}),b(C,L)},$$slots:{default:!0}});var p=oe(F,2);_t(p,{className:"flex flex-row gap-2 items-center",children:(C,G)=>{var L=es(),X=K(L);Tt(X,{icon:"i-carbon-time"});var te=oe(X,2);_t(te,{children:(ue,we)=>{je();var re=Ke();Z(()=>Se(re,g(s))),b(ue,re)},$$slots:{default:!0}}),b(C,L)},$$slots:{default:!0}});var B=oe(p,2);_t(B,{className:"flex-1",children:(C,G)=>{je();var L=Ke();Z(()=>Se(L,Bn(e.project.shortDescription,100))),b(C,L)},$$slots:{default:!0}});var x=oe(B,2),M=Te(x);Jt(M,{variant:"outline",children:(C,G)=>{je();var L=Ke();Z(()=>Se(L,g(d))),b(C,L)},$$slots:{default:!0}});var z=oe(M,2);Jt(z,{variant:"outline",children:(C,G)=>{je();var L=Ke();Z(()=>Se(L,g(c))),b(C,L)},$$slots:{default:!0}}),pe(x);var H=oe(x,2);en(H,{}),b(S,m)},$$slots:{default:!0}});var j=oe(O,2);Xn(j,{class:"flex flex-row flex-wrap items-center gap-2",children:(S,U)=>{var m=ee(),F=K(m);Et(F,17,()=>e.project.skills,p=>p.slug,(p,B)=>{Wn(p,{get skill(){return g(B)}})}),b(S,m)},$$slots:{default:!0}}),b(u,k)},$$slots:{default:!0}}),Pe()}const ss=er({base:"ring-offset-background hover:bg-muted hover:text-muted-foreground focus-visible:ring-ring data-[state=on]:bg-accent data-[state=on]:text-accent-foreground inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",variants:{variant:{default:"bg-transparent",outline:"border-input hover:bg-accent hover:text-accent-foreground border bg-transparent"},size:{default:"h-10 px-3",sm:"h-9 px-2.5",lg:"h-11 px-5"}},defaultVariants:{variant:"default",size:"default"}});function os(n,e){const o=be(e,["children","$$slots","$$events","$$legacy"]),a=be(o,["class","variant","size","pressed"]);Oe(e,!1);let d=v(e,"class",8,void 0),c=v(e,"variant",8,"default"),s=v(e,"size",8,"default"),r=v(e,"pressed",12,void 0);We();var u=Wt(()=>Rt(ss({variant:c(),size:s(),className:d()})));Kr(n,Vt({get pressed(){return r()},set pressed(h){r(h)},get class(){return g(u)}},()=>a,{$$events:{click(h){Me.call(this,e,h)}},children:(h,k)=>{var w=ee(),O=K(w);ge(O,e,"default",{}),b(h,w)},$$slots:{default:!0},$$legacy:!0})),Pe()}var as=q("<!> ",1),is=q('<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"></div>'),ls=q('<div class="flex flex-1 flex-col gap-8"><div class="flex flex-row flex-wrap gap-2"></div> <!></div>');function Ds(n,e){Oe(e,!0);let o=Yt(Bt(tr.items.filter(r=>zt.items.some(u=>u.skills.some(h=>h.slug===r.slug))))),a=Yt(""),d=mt(()=>zt.items.filter(r=>{const u=g(o).every(k=>!k.isSelected)||r.skills.some(k=>g(o).some(w=>w.isSelected&&w.slug===k.slug)),h=g(a).trim().length===0||r.name.trim().toLowerCase().includes(g(a).trim().toLowerCase());return u&&h}));const c=r=>{ut(o,Bt(g(o).map(u=>u.slug===r?{...u,isSelected:!u.isSelected}:u)))};Sn(n,{get title(){return zt.title},onSearch:r=>ut(a,Bt(r)),children:(r,u)=>{var h=ls(),k=Te(h);Et(k,21,()=>g(o),O=>O.slug,(O,j)=>{os(O,{get pressed(){return g(j).isSelected},variant:"outline",class:"flex flex-row items-center gap-2 rounded-lg",$$events:{click:()=>c(g(j).slug)},children:(S,U)=>{var m=as(),F=K(m);Ce(F,()=>g(j).isSelected,B=>{Tt(B,{icon:"i-carbon-close"})});var p=oe(F);Z(()=>Se(p,` ${g(j).name??""}`)),b(S,m)},$$slots:{default:!0}})}),pe(k);var w=oe(k,2);Ce(w,()=>g(d).length===0,O=>{On(O)},O=>{var j=is();Et(j,21,()=>g(d),S=>S.slug,(S,U)=>{rs(S,{get project(){return g(U)}})}),pe(j),b(O,j)}),pe(h),b(r,h)},$$slots:{default:!0}}),Pe()}export{Ds as component};
