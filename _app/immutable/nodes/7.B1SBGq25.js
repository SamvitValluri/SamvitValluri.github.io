import{s as vt,e as Q,f as ue,a as h,d as rt,b as $,t as Ue,c as Ne}from"../chunks/disclose-version.B9DIXXxg.js";import{al as It,ao as wn,an as ln,p as Ce,F as X,b as st,z as H,g,G as Pt,f as j,t as Z,N as Tn,a as Oe,H as Ot,c as we,r as he,_ as Ke,s as oe,n as He,D as Wt,d as kt,e as Yt}from"../chunks/utils.7ruNgmf0.js";import{l as ve,p as b,i as Ee,b as Xe,s as Vt,a as jt}from"../chunks/index-client.kRHgN_Rl.js";import{t as xt,c as un,r as cn,g as dn,o as En,I as Dt,e as wt,d as Cn}from"../chunks/stores.CTRozQn0.js";import{E as On}from"../chunks/empty-result.IRW2wYdr.js";import{F as Pn,a as An,C as In,S as Sn}from"../chunks/fancy-card.BJ5Qazb1.js";import{l as tt,q as _,w as me,r as gt,J as fn,y as Pe,m as xe,n as ht,D as Mn,k as Ie,A as M,K as Gt,G as ae,S as Ft,L as Re,M as qt,z as Ze,E as Dn,N as Tt,o as Ut,f as Fn,j as Ye,b as Be,a as ce,c as Rt,s as Et,I as Rn,g as $t,h as Nn}from"../chunks/base.BjVCfDiM.js";import{M as St,A as Kn}from"../chunks/assets.BmRY1YF0.js";import{e as Bn}from"../chunks/index.DDBfyhzG.js";import{i as je}from"../chunks/legacy.BMaVEKmg.js";import{B as gn}from"../chunks/button.CfidEskh.js";import{u as jn,g as zn,R as mn,T as vn,a as bn}from"../chunks/index.CV-iFw9n.js";import{S as Ln}from"../chunks/skill-badge.B4Kq0Qi0.js";import{A as Wn,a as Vn,b as Un}from"../chunks/avatar-fallback.D7dJCRqS.js";import{B as Jt}from"../chunks/index.CRjUUDAv.js";import{C as Hn}from"../chunks/card-footer.DiSV1bz_.js";import{d as mt,w as le,g as Xn}from"../chunks/paths.C-2-74fe.js";import{u as hn,g as Qt,a as Zt,o as Ct,c as Nt,t as pt}from"../chunks/events.BzK45k3d.js";import{s as nt,w as Yn,c as Gn,u as qn,h as $n,r as Jn}from"../chunks/action.Bc61D9ow.js";import{c as Qn,S as en}from"../chunks/separator.Cndy0Ru3.js";import{b as Se}from"../chunks/misc.DEG8FepX.js";import{c as Zn}from"../chunks/index.Bc9vG0bt.js";import{P as zt}from"../chunks/projects.BCGbFoW1.js";import{S as er}from"../chunks/skills.nCY25_E7.js";function tr(n){n.setAttribute("data-highlighted","")}function ft(n){n.removeAttribute("data-highlighted")}function nr(n,e=500){let o=null;return function(...a){const d=()=>{o=null,n(...a)};o&&clearTimeout(o),o=setTimeout(d,e)}}function tn(n){const{open:e,forceVisible:o,activeTrigger:a}=n;return mt([e,o,a],([d,c,s])=>(d||c)&&s!==null)}function ge(n){tt&&nt(1).then(()=>{const e=document.activeElement;!_(e)||e===n||(e.tabIndex=-1,n&&(n.tabIndex=0,n.focus()))})}function pn(){return Array.from(document.querySelectorAll('a[href]:not([tabindex="-1"]), button:not([disabled]):not([tabindex="-1"]), input:not([disabled]):not([tabindex="-1"]), select:not([disabled]):not([tabindex="-1"]), textarea:not([disabled]):not([tabindex="-1"]), [tabindex]:not([tabindex="-1"])'))}function rr(n){const e=pn(),a=e.indexOf(n)+1,d=e[a];return a<e.length&&_(d)?d:null}function sr(n){const e=pn(),a=e.indexOf(n)-1,d=e[a];return a>=0&&_(d)?d:null}const or=new Set(["Shift","Control","Alt","Meta","CapsLock","NumLock"]),ar={onMatch:ge,getCurrentItem:()=>document.activeElement};function ir(n={}){const e={...ar,...n},o=me(le([])),a=nr(()=>{o.update(()=>[])});return{typed:o,resetTyped:a,handleTypeaheadSearch:(c,s)=>{if(or.has(c))return;const r=e.getCurrentItem(),u=Xn(o);if(!Array.isArray(u))return;u.push(c.toLowerCase()),o.set(u);const v=s.filter(m=>!(m.getAttribute("disabled")==="true"||m.getAttribute("aria-disabled")==="true"||m.hasAttribute("data-disabled"))),x=u.length>1&&u.every(m=>m===u[0])?u[0]:u.join(""),I=_(r)?v.indexOf(r):-1;let D=Yn(v,Math.max(I,0));x.length===1&&(D=D.filter(m=>m!==r));const R=D.find(m=>(m==null?void 0:m.innerText)&&m.innerText.toLowerCase().startsWith(x.toLowerCase()));_(R)&&R!==r&&e.onMatch(R),a()}}}const lr={floating:{},focusTrap:{},modal:{},escapeKeydown:{},portal:"body"},nn=(n,e)=>{n.dataset.escapee="";const{anchorElement:o,open:a,options:d}=e;if(!o||!a||!d)return{destroy:gt};const c={...lr,...d},s=[];if(c.portal!==null&&s.push(hn(n,c.portal).destroy),s.push(jn(o,n,c.floating).destroy),c.focusTrap!==null){const{useFocusTrap:u}=Gn({immediate:!0,escapeDeactivates:!1,allowOutsideClick:!0,returnFocusOnDeactivate:!1,fallbackFocus:n,...c.focusTrap});s.push(u(n).destroy)}c.modal!==null&&s.push(qn(n,{onClose:()=>{_(o)&&(a.set(!1),o.focus())},shouldCloseOnInteractOutside:u=>!(u.defaultPrevented||_(o)&&o.contains(u.target)),...c.modal}).destroy),c.escapeKeydown!==null&&s.push(fn(n,{enabled:a,handler:()=>{a.set(!1)},...c.escapeKeydown}).destroy);const r=Pe(...s);return{destroy(){r()}}},ur={ltr:[...Ft,ae.ARROW_RIGHT],rtl:[...Ft,ae.ARROW_LEFT]},cr={ltr:[ae.ARROW_LEFT],rtl:[ae.ARROW_RIGHT]},rn=["menu","trigger"],dr={arrowSize:8,positioning:{placement:"bottom"},preventScroll:!0,closeOnEscape:!0,closeOnOutsideClick:!0,portal:void 0,loop:!1,dir:"ltr",defaultOpen:!1,typeahead:!0,closeOnItemClick:!0,onOutsideClick:void 0};function fr(n){const{name:e,selector:o}=Dn(n.selector),{preventScroll:a,arrowSize:d,positioning:c,closeOnEscape:s,closeOnOutsideClick:r,portal:u,forceVisible:v,typeahead:k,loop:x,closeFocus:I,disableFocusFirstItem:D,closeOnItemClick:z,onOutsideClick:R}=n.rootOptions,m=n.rootOpen,O=n.rootActiveTrigger,p=n.nextFocusable,U=n.prevFocusable,w=me.writable(!1),E=me(le(0)),W=me(le(null)),S=me(le("right")),B=me(le(null)),L=me(mt([S,W],([t,i])=>l=>t===(i==null?void 0:i.side)&&gr(l,i==null?void 0:i.area))),{typed:pe,handleTypeaheadSearch:G}=ir(),te=xt({...Qt(rn),...n.ids}),_e=tn({open:m,forceVisible:v,activeTrigger:O}),de=xe(e(),{stores:[_e,u,te.menu,te.trigger],returned:([t,i,l,f])=>({role:"menu",hidden:t?void 0:!0,style:ht({display:t?void 0:"none"}),id:l,"aria-labelledby":f,"data-state":t?"open":"closed","data-portal":Mn(i),tabindex:-1}),action:t=>{let i=gt;const l=Ie([_e,O,c,r,u,s],([T,q,ye,Y,P,N])=>{i(),!(!T||!q)&&It().then(()=>{i(),yt(t,o),i=nn(t,{anchorElement:q,open:m,options:{floating:ye,modal:{closeOnInteractOutside:Y,shouldCloseOnInteractOutside:C=>{var A;return(A=R.get())==null||A(C),!(C.defaultPrevented||_(q)&&q.contains(C.target))},onClose:()=>{m.set(!1),q.focus()},open:T},portal:Zt(t,P),escapeKeydown:N?void 0:null}}).destroy})}),f=Pe(M(t,"keydown",T=>{const q=T.target,ye=T.currentTarget;if(!_(q)||!_(ye)||!(q.closest('[role="menu"]')===ye))return;if(Gt.includes(T.key)&&on(T,x.get()??!1),T.key===ae.TAB){T.preventDefault(),m.set(!1),sn(T,p,U);return}const P=T.key.length===1;!(T.ctrlKey||T.altKey||T.metaKey)&&P&&k.get()===!0&&G(T.key,et(ye))}));return{destroy(){l(),f(),i()}}}}),bt=xe(e("trigger"),{stores:[m,te.menu,te.trigger],returned:([t,i,l])=>({"aria-controls":i,"aria-expanded":t,"data-state":t?"open":"closed",id:l,tabindex:0}),action:t=>(Mt(t),O.update(l=>l||t),{destroy:Pe(M(t,"click",l=>{const f=m.get(),T=l.currentTarget;_(T)&&(ne(T),f||l.preventDefault())}),M(t,"keydown",l=>{const f=l.currentTarget;if(!_(f)||!(Ft.includes(l.key)||l.key===ae.ARROW_DOWN))return;l.preventDefault(),ne(f);const T=f.getAttribute("aria-controls");if(!T)return;const q=document.getElementById(T);if(!q)return;const ye=et(q);ye.length&&ge(ye[0])}))})}),Te=xe(e("arrow"),{stores:d,returned:t=>({"data-arrow":!0,style:ht({position:"absolute",width:`var(--arrow-size, ${t}px)`,height:`var(--arrow-size, ${t}px)`})})}),ot=xe(e("overlay"),{stores:[_e],returned:([t])=>({hidden:t?void 0:!0,tabindex:-1,style:ht({display:t?void 0:"none"}),"aria-hidden":"true","data-state":br(t)}),action:t=>{let i=gt;if(s.get()){const f=fn(t,{handler:()=>{m.set(!1);const T=O.get();T&&T.focus()}});f&&f.destroy&&(i=f.destroy)}const l=Ie([u],([f])=>{if(f===null)return gt;const T=Zt(t,f);return T===null?gt:hn(t,T).destroy});return{destroy(){i(),l()}}}}),ze=xe(e("item"),{returned:()=>({role:"menuitem",tabindex:-1,"data-orientation":"vertical"}),action:t=>(yt(t,o),Mt(t),{destroy:Pe(M(t,"pointerdown",l=>{const f=l.currentTarget;if(_(f)&&Re(f)){l.preventDefault();return}}),M(t,"click",l=>{const f=l.currentTarget;if(_(f)){if(Re(f)){l.preventDefault();return}if(l.defaultPrevented){ge(f);return}z.get()&&nt(1).then(()=>{m.set(!1)})}}),M(t,"keydown",l=>{be(l)}),M(t,"pointermove",l=>{We(l)}),M(t,"pointerleave",l=>{Je(l)}),M(t,"focusin",l=>{De(l)}),M(t,"focusout",l=>{Fe(l)}))})}),at=xe(e("group"),{returned:()=>t=>({role:"group","aria-labelledby":t})}),Ae=xe(e("group-label"),{returned:()=>t=>({id:t})}),Me={defaultChecked:!1,disabled:!1},Ge=t=>{const i={...Me,...t},l=i.checked??le(i.defaultChecked??null),f=Ct(l,i.onCheckedChange),T=le(i.disabled),q=xe(e("checkbox-item"),{stores:[f,T],returned:([P,N])=>({role:"menuitemcheckbox",tabindex:-1,"data-orientation":"vertical","aria-checked":ut(P)?"mixed":P?"true":"false","data-disabled":Tt(N),"data-state":Bt(P)}),action:P=>(yt(P,o),Mt(P),{destroy:Pe(M(P,"pointerdown",C=>{const A=C.currentTarget;if(_(A)&&Re(A)){C.preventDefault();return}}),M(P,"click",C=>{const A=C.currentTarget;if(_(A)){if(Re(A)){C.preventDefault();return}if(C.defaultPrevented){ge(A);return}f.update(Ve=>ut(Ve)?!0:!Ve),z.get()&&It().then(()=>{m.set(!1)})}}),M(P,"keydown",C=>{be(C)}),M(P,"pointermove",C=>{const A=C.currentTarget;if(_(A)){if(Re(A)){Le(C);return}We(C,A)}}),M(P,"pointerleave",C=>{Je(C)}),M(P,"focusin",C=>{De(C)}),M(P,"focusout",C=>{Fe(C)}))})}),ye=mt(f,P=>P===!0),Y=mt(f,P=>P==="indeterminate");return{elements:{checkboxItem:q},states:{checked:f},helpers:{isChecked:ye,isIndeterminate:Y},options:{disabled:T}}},it=(t={})=>{const i=t.value??le(t.defaultValue??null),l=Ct(i,t.onValueChange),f=xe(e("radio-group"),{returned:()=>({role:"group"})}),T={disabled:!1},q=xe(e("radio-item"),{stores:[l],returned:([Y])=>P=>{const{value:N,disabled:C}={...T,...P},A=Y===N;return{disabled:C,role:"menuitemradio","data-state":A?"checked":"unchecked","aria-checked":A,"data-disabled":Tt(C),"data-value":N,"data-orientation":"vertical",tabindex:-1}},action:Y=>(yt(Y,o),{destroy:Pe(M(Y,"pointerdown",N=>{const C=N.currentTarget;if(!_(C))return;const A=Y.dataset.value;if(Y.dataset.disabled||A===void 0){N.preventDefault();return}}),M(Y,"click",N=>{const C=N.currentTarget;if(!_(C))return;const A=Y.dataset.value;if(Y.dataset.disabled||A===void 0){N.preventDefault();return}if(N.defaultPrevented){if(!_(C))return;ge(C);return}l.set(A),z.get()&&It().then(()=>{m.set(!1)})}),M(Y,"keydown",N=>{be(N)}),M(Y,"pointermove",N=>{const C=N.currentTarget;if(!_(C))return;const A=Y.dataset.value;if(Y.dataset.disabled||A===void 0){Le(N);return}We(N,C)}),M(Y,"pointerleave",N=>{Je(N)}),M(Y,"focusin",N=>{De(N)}),M(Y,"focusout",N=>{Fe(N)}))})}),ye=mt(l,Y=>P=>Y===P);return{elements:{radioGroup:f,radioItem:q},states:{value:l},helpers:{isChecked:ye}}},{elements:{root:fe}}=Qn({orientation:"horizontal"}),lt={...dr,disabled:!1,positioning:{placement:"right-start",gutter:8}},qe=t=>{const i={...lt,...t},l=i.open??le(!1),f=Ct(l,i==null?void 0:i.onOpenChange),T=xt(Ut(i,"ids")),{positioning:q,arrowSize:ye,disabled:Y}=T,P=me(le(null)),N=me(le(null)),C=me(le(0)),A=xt({...Qt(rn),...i.ids});qt(()=>{const F=document.getElementById(A.trigger.get());F&&P.set(F)});const Ve=tn({open:f,forceVisible:v,activeTrigger:P}),yn=xe(e("submenu"),{stores:[Ve,A.menu,A.trigger],returned:([F,se,ke])=>({role:"menu",hidden:F?void 0:!0,style:ht({display:F?void 0:"none"}),id:se,"aria-labelledby":ke,"data-state":F?"open":"closed","data-id":se,tabindex:-1}),action:F=>{let se=gt;const ke=Ie([Ve,q],([y,V])=>{if(se(),!y)return;const J=P.get();J&&It().then(()=>{se();const ee=Ht(J);se=nn(F,{anchorElement:J,open:f,options:{floating:V,portal:_(ee)?ee:void 0,modal:null,focusTrap:null,escapeKeydown:null}}).destroy})}),K=Pe(M(F,"keydown",y=>{if(y.key===ae.ESCAPE)return;const V=y.target,J=y.currentTarget;if(!_(V)||!_(J)||!(V.closest('[role="menu"]')===J))return;if(Gt.includes(y.key)){y.stopImmediatePropagation(),on(y,x.get()??!1);return}const ct=cr.ltr.includes(y.key),dt=y.ctrlKey||y.altKey||y.metaKey,At=y.key.length===1;if(ct){const Xt=P.get();y.preventDefault(),f.update(()=>(Xt&&ge(Xt),!1));return}if(y.key===ae.TAB){y.preventDefault(),m.set(!1),sn(y,p,U);return}!dt&&At&&k.get()===!0&&G(y.key,et(J))}),M(F,"pointermove",y=>{ie(y)}),M(F,"focusout",y=>{const V=P.get();if(w.get()){const J=y.target,ee=document.getElementById(A.menu.get());if(!_(ee)||!_(J))return;!ee.contains(J)&&J!==V&&f.set(!1)}else{const J=y.currentTarget,ee=y.relatedTarget;if(!_(ee)||!_(J))return;!J.contains(ee)&&ee!==V&&f.set(!1)}}));return{destroy(){ke(),se(),K()}}}}),kn=xe(e("subtrigger"),{stores:[f,Y,A.menu,A.trigger],returned:([F,se,ke,K])=>({role:"menuitem",id:K,tabindex:-1,"aria-controls":ke,"aria-expanded":F,"data-state":F?"open":"closed","data-disabled":Tt(se),"aria-haspopop":"menu"}),action:F=>{yt(F,o),Mt(F),P.update(K=>K||F);const se=()=>{Lt(N),window.clearTimeout(C.get()),W.set(null)},ke=Pe(M(F,"click",K=>{if(K.defaultPrevented)return;const y=K.currentTarget;!_(y)||Re(y)||(ge(y),f.get()||f.update(V=>V||(P.set(y),!V)))}),M(F,"keydown",K=>{const y=pe.get(),V=K.currentTarget;if(!(!_(V)||Re(V)||y.length>0&&K.key===ae.SPACE)&&ur.ltr.includes(K.key)){if(!f.get()){V.click(),K.preventDefault();return}const ee=V.getAttribute("aria-controls");if(!ee)return;const ct=document.getElementById(ee);if(!_(ct))return;const dt=et(ct)[0];ge(dt)}}),M(F,"pointermove",K=>{if(!_t(K)||(re(K),K.defaultPrevented))return;const y=K.currentTarget;if(!_(y))return;vr(A.menu.get())||ge(y);const V=N.get();!f.get()&&!V&&!Re(y)&&N.set(window.setTimeout(()=>{f.update(()=>(P.set(y),!0)),Lt(N)},100))}),M(F,"pointerleave",K=>{if(!_t(K))return;Lt(N);const y=document.getElementById(A.menu.get()),V=y==null?void 0:y.getBoundingClientRect();if(V){const J=y==null?void 0:y.dataset.side,ee=J==="right",ct=ee?-5:5,dt=V[ee?"left":"right"],At=V[ee?"right":"left"];W.set({area:[{x:K.clientX+ct,y:K.clientY},{x:dt,y:V.top},{x:At,y:V.top},{x:At,y:V.bottom},{x:dt,y:V.bottom}],side:J}),window.clearTimeout(C.get()),C.set(window.setTimeout(()=>{W.set(null)},300))}else{if($e(K),K.defaultPrevented)return;W.set(null)}}),M(F,"focusout",K=>{const y=K.currentTarget;if(!_(y))return;ft(y);const V=K.relatedTarget;if(!_(V))return;const J=y.getAttribute("aria-controls");if(!J)return;const ee=document.getElementById(J);ee&&!ee.contains(V)&&f.set(!1)}),M(F,"focusin",K=>{De(K)}));return{destroy(){se(),ke()}}}}),xn=xe(e("subarrow"),{stores:ye,returned:F=>({"data-arrow":!0,style:ht({position:"absolute",width:`var(--arrow-size, ${F}px)`,height:`var(--arrow-size, ${F}px)`})})});return Ie([m],([F])=>{F||(P.set(null),f.set(!1))}),Ie([W],([F])=>{!tt||F||window.clearTimeout(C.get())}),Ie([f],([F])=>{if(tt&&(F&&w.get()&&nt(1).then(()=>{const se=document.getElementById(A.menu.get());if(!se)return;const ke=et(se);ke.length&&ge(ke[0])}),!F)){const se=B.get(),ke=document.getElementById(A.trigger.get());if(se&&nt(1).then(()=>{const K=document.getElementById(A.menu.get());K&&K.contains(se)&&ft(se)}),!ke||document.activeElement===ke)return;ft(ke)}}),{ids:A,elements:{subTrigger:kn,subMenu:yn,subArrow:xn},states:{subOpen:f},options:T}};qt(()=>{const t=document.getElementById(te.trigger.get());_(t)&&m.get()&&O.set(t);const i=[],l=()=>w.set(!1),f=()=>{w.set(!0),i.push(Pe(Ze(document,"pointerdown",l,{capture:!0,once:!0}),Ze(document,"pointermove",l,{capture:!0,once:!0})))},T=q=>{if(q.key===ae.ESCAPE&&s.get()){m.set(!1);return}};return i.push(Ze(document,"keydown",f,{capture:!0})),i.push(Ze(document,"keydown",T)),()=>{i.forEach(q=>q())}}),Ie([m,B],([t,i])=>{!t&&i&&ft(i)}),Ie([m],([t])=>{if(tt&&!t){const i=O.get();if(!i)return;const l=I.get();!t&&i&&$n({prop:l,defaultEl:i})}}),Ie([m,a],([t,i])=>{if(!tt)return;const l=[];return t&&i&&l.push(Jn()),nt(1).then(()=>{const f=document.getElementById(te.menu.get());if(f&&t&&w.get()){if(D.get()){ge(f);return}const T=et(f);if(!T.length)return;ge(T[0])}}),()=>{l.forEach(f=>f())}}),Ie(m,t=>{if(!tt)return;const i=()=>w.set(!1),l=f=>{if(w.set(!0),f.key===ae.ESCAPE&&t&&s.get()){m.set(!1);return}};return Pe(Ze(document,"pointerdown",i,{capture:!0,once:!0}),Ze(document,"pointermove",i,{capture:!0,once:!0}),Ze(document,"keydown",l,{capture:!0}))});function ne(t){m.update(i=>{const l=!i;return l&&(p.set(rr(t)),U.set(sr(t)),O.set(t)),l})}function De(t){const i=t.currentTarget;if(!_(i))return;const l=B.get();l&&ft(l),tr(i),B.set(i)}function Fe(t){const i=t.currentTarget;_(i)&&ft(i)}function re(t){Qe(t)&&t.preventDefault()}function Le(t){if(Qe(t))return;const i=t.target;if(!_(i))return;const l=Ht(i);l&&ge(l)}function $e(t){Qe(t)&&t.preventDefault()}function ie(t){if(!_t(t))return;const i=t.target,l=t.currentTarget;if(!_(l)||!_(i))return;const f=E.get(),T=f!==t.clientX;if(l.contains(i)&&T){const q=t.clientX>f?"right":"left";S.set(q),E.set(t.clientX)}}function We(t,i=null){if(!_t(t)||(re(t),t.defaultPrevented))return;if(i){ge(i);return}const l=t.currentTarget;_(l)&&ge(l)}function Je(t){_t(t)&&Le(t)}function be(t){if(pe.get().length>0&&t.key===ae.SPACE){t.preventDefault();return}if(Ft.includes(t.key)){t.preventDefault();const f=t.currentTarget;if(!_(f))return;f.click()}}function ut(t){return t==="indeterminate"}function Bt(t){return ut(t)?"indeterminate":t?"checked":"unchecked"}function Qe(t){return L.get()(t)}function Ht(t){const i=t.closest('[role="menu"]');return _(i)?i:null}return{elements:{trigger:bt,menu:de,overlay:ot,item:ze,group:at,groupLabel:Ae,arrow:Te,separator:fe},builders:{createCheckboxItem:Ge,createSubmenu:qe,createMenuRadioGroup:it},states:{open:m},helpers:{handleTypeaheadSearch:G},ids:te,options:n.rootOptions}}function sn(n,e,o){if(n.shiftKey){const a=o.get();a&&(n.preventDefault(),nt(1).then(()=>a.focus()),o.set(null))}else{const a=e.get();a&&(n.preventDefault(),nt(1).then(()=>a.focus()),e.set(null))}}function et(n){return Array.from(n.querySelectorAll(`[data-melt-menu-id="${n.id}"]`)).filter(e=>_(e))}function Mt(n){!n||!Re(n)||(n.setAttribute("data-disabled",""),n.setAttribute("aria-disabled","true"))}function Lt(n){if(!tt)return;const e=n.get();e&&(window.clearTimeout(e),n.set(null))}function _t(n){return n.pointerType==="mouse"}function yt(n,e){if(!n)return;const o=n.closest(`${e()}, ${e("submenu")}`);_(o)&&n.setAttribute("data-melt-menu-id",o.id)}function on(n,e){n.preventDefault();const o=document.activeElement,a=n.currentTarget;if(!_(o)||!_(a))return;const d=et(a);if(!d.length)return;const c=d.filter(u=>!(u.hasAttribute("data-disabled")||u.getAttribute("disabled")==="true")),s=c.indexOf(o);let r;switch(n.key){case ae.ARROW_DOWN:e?r=s<c.length-1?s+1:0:r=s<c.length-1?s+1:s;break;case ae.ARROW_UP:e?r=s>0?s-1:c.length-1:r=s<0?c.length-1:s>0?s-1:0;break;case ae.HOME:r=0;break;case ae.END:r=c.length-1;break;default:return}ge(c[r])}function gr(n,e){if(!e)return!1;const o={x:n.clientX,y:n.clientY};return mr(o,e)}function mr(n,e){const{x:o,y:a}=n;let d=!1;for(let c=0,s=e.length-1;c<e.length;s=c++){const r=e[c].x,u=e[c].y,v=e[s].x,k=e[s].y;u>a!=k>a&&o<(v-r)*(a-u)/(k-u)+r&&(d=!d)}return d}function vr(n){const e=document.activeElement;if(!_(e))return!1;const o=e.closest(`[data-id="${n}"]`);return _(o)}function br(n){return n?"open":"closed"}const hr={arrowSize:8,positioning:{placement:"bottom"},preventScroll:!0,closeOnEscape:!0,closeOnOutsideClick:!0,portal:void 0,loop:!1,dir:"ltr",defaultOpen:!1,forceVisible:!1,typeahead:!0,closeFocus:void 0,disableFocusFirstItem:!1,closeOnItemClick:!0,onOutsideClick:void 0};function pr(n){const e={...hr,...n},o=xt(Ut(e,"ids")),a=e.open??le(e.defaultOpen),d=Ct(a,e==null?void 0:e.onOpenChange),c=me(le(null)),s=me(le(null)),r=me(le(null)),{elements:u,builders:v,ids:k,states:x,options:I}=fr({rootOptions:o,rootOpen:d,rootActiveTrigger:me(c),nextFocusable:me(s),prevFocusable:me(r),selector:"dropdown-menu",removeScroll:!0,ids:e.ids});return{ids:k,elements:u,states:x,builders:v,options:I}}const _r={defaultPressed:!1,disabled:!1};function yr(n){const e={..._r,...n},o=xt(Ut(e,"pressed")),{disabled:a}=o,d=e.pressed??le(e.defaultPressed),c=Ct(d,e==null?void 0:e.onPressedChange);function s(){a.get()||c.update(v=>!v)}return{elements:{root:xe("toggle",{stores:[c,a],returned:([u,v])=>({"data-disabled":Tt(v),disabled:Tt(v),"data-state":u?"on":"off","aria-pressed":u,type:"button"}),action:u=>({destroy:Pe(M(u,"click",()=>{s()}),M(u,"keydown",k=>{k.key!==ae.ENTER&&k.key!==ae.SPACE||(k.preventDefault(),s())}))})})},states:{pressed:c},options:o}}function _n(){return{NAME:"menu",SUB_NAME:"menu-submenu",RADIO_GROUP_NAME:"menu-radiogroup",CHECKBOX_ITEM_NAME:"menu-checkboxitem",RADIO_ITEM_NAME:"menu-radioitem",GROUP_NAME:"menu-group",PARTS:["arrow","checkbox-indicator","checkbox-item","content","group","item","label","radio-group","radio-item","radio-indicator","separator","sub-content","sub-trigger","trigger"]}}function Kt(){const{NAME:n}=_n();return wn(n)}function kr(n){const{NAME:e,PARTS:o}=_n(),a=un("menu",o),d={...pr({...cn(n),forceVisible:!0}),getAttrs:a};return ln(e,d),{...d,updateOption:dn(d.options)}}function xr(n){const o={...{side:"bottom",align:"center"},...n},{options:{positioning:a}}=Kt();zn(a)(o)}function wr(n,e){const o=ve(e,["children","$$slots","$$events","$$legacy"]),a=ve(o,["href","asChild","disabled","el"]);Ce(e,!1);const d=vt(),c=()=>rt(I,"$item",d),s=Ot(),r=Ot();let u=b(e,"href",24,()=>{}),v=b(e,"asChild",8,!1),k=b(e,"disabled",8,!1),x=b(e,"el",28,()=>{});const{elements:{item:I},getAttrs:D}=Kt(),z=Nt();X(()=>c(),()=>{st(s,c())}),X(()=>H(k()),()=>{st(r,{...D("item"),...En(k())})}),X(()=>(g(s),g(r)),()=>{Object.assign(g(s),g(r))}),Pt(),je();var R=Q(),m=j(R);Ee(m,v,O=>{var p=Q(),U=j(p);ce(U,e,"default",{get builder(){return g(s)}}),h(O,p)},O=>{var p=Q(),U=j(p);Fn(U,()=>u()?"a":"div",!1,(w,E)=>{Xe(w,L=>x(L),()=>x()),Ye(w,L=>g(s).action(L));let W;Z(()=>W=Be(w,W,{href:u(),...g(s),...a},void 0,w.namespaceURI===Tn,w.nodeName.includes("-"))),ue("m-click",w,z),ue("m-focusin",w,z),ue("m-focusout",w,z),ue("m-keydown",w,z),ue("m-pointerdown",w,z),ue("m-pointerleave",w,z),ue("m-pointermove",w,z),ue("pointerenter",w,function(L){Se.call(this,e,L)});var S=Q(),B=j(S);ce(B,e,"default",{get builder(){return g(s)}}),h(E,S)}),h(O,p)}),h(n,R),Oe()}function Tr(n,e){Ce(e,!1);const o=vt(),a=()=>rt(w,"$idValues",o);let d=b(e,"closeOnOutsideClick",24,()=>{}),c=b(e,"closeOnEscape",24,()=>{}),s=b(e,"portal",24,()=>{}),r=b(e,"open",28,()=>{}),u=b(e,"onOpenChange",24,()=>{}),v=b(e,"preventScroll",24,()=>{}),k=b(e,"loop",24,()=>{}),x=b(e,"dir",24,()=>{}),I=b(e,"typeahead",24,()=>{}),D=b(e,"closeFocus",24,()=>{}),z=b(e,"disableFocusFirstItem",24,()=>{}),R=b(e,"closeOnItemClick",24,()=>{}),m=b(e,"onOutsideClick",24,()=>{});const{states:{open:O},updateOption:p,ids:U}=kr({closeOnOutsideClick:d(),closeOnEscape:c(),portal:s(),forceVisible:!0,defaultOpen:r(),preventScroll:v(),loop:k(),dir:x(),typeahead:I(),closeFocus:D(),disableFocusFirstItem:z(),closeOnItemClick:R(),onOutsideClick:m(),onOpenChange:({next:S})=>{var B;return r()!==S&&((B=u())==null||B(S),r(S)),S}}),w=mt([U.menu,U.trigger],([S,B])=>({menu:S,trigger:B}));X(()=>H(r()),()=>{r()!==void 0&&O.set(r())}),X(()=>H(d()),()=>{p("closeOnOutsideClick",d())}),X(()=>H(c()),()=>{p("closeOnEscape",c())}),X(()=>H(s()),()=>{p("portal",s())}),X(()=>H(v()),()=>{p("preventScroll",v())}),X(()=>H(k()),()=>{p("loop",k())}),X(()=>H(x()),()=>{p("dir",x())}),X(()=>H(D()),()=>{p("closeFocus",D())}),X(()=>H(z()),()=>{p("disableFocusFirstItem",z())}),X(()=>H(I()),()=>{p("typeahead",I())}),X(()=>H(R()),()=>{p("closeOnItemClick",R())}),X(()=>H(m()),()=>{p("onOutsideClick",m())}),Pt(),je();var E=Q(),W=j(E);ce(W,e,"default",{get ids(){return a()}}),h(n,E),Oe()}var Er=$("<div><!></div>"),Cr=$("<div><!></div>"),Or=$("<div><!></div>"),Pr=$("<div><!></div>"),Ar=$("<div><!></div>");function Ir(n,e){const o=ve(e,["children","$$slots","$$events","$$legacy"]),a=ve(o,["transition","transitionConfig","inTransition","inTransitionConfig","outTransition","outTransitionConfig","asChild","id","side","align","sideOffset","alignOffset","collisionPadding","avoidCollisions","collisionBoundary","sameWidth","fitViewport","strategy","overlap","el"]);Ce(e,!1);const d=vt(),c=()=>rt(te,"$menu",d),s=()=>rt(_e,"$open",d),r=Ot();let u=b(e,"transition",24,()=>{}),v=b(e,"transitionConfig",24,()=>{}),k=b(e,"inTransition",24,()=>{}),x=b(e,"inTransitionConfig",24,()=>{}),I=b(e,"outTransition",24,()=>{}),D=b(e,"outTransitionConfig",24,()=>{}),z=b(e,"asChild",8,!1),R=b(e,"id",24,()=>{}),m=b(e,"side",8,"bottom"),O=b(e,"align",8,"center"),p=b(e,"sideOffset",8,0),U=b(e,"alignOffset",8,0),w=b(e,"collisionPadding",8,8),E=b(e,"avoidCollisions",8,!0),W=b(e,"collisionBoundary",24,()=>{}),S=b(e,"sameWidth",8,!1),B=b(e,"fitViewport",8,!1),L=b(e,"strategy",8,"absolute"),pe=b(e,"overlap",8,!1),G=b(e,"el",28,()=>{});const{elements:{menu:te},states:{open:_e},ids:de,getAttrs:bt}=Kt(),Te=Nt(),ot=bt("content");X(()=>H(R()),()=>{R()&&de.menu.set(R())}),X(()=>c(),()=>{st(r,c())}),X(()=>g(r),()=>{Object.assign(g(r),ot)}),X(()=>(s(),H(m()),H(O()),H(p()),H(U()),H(w()),H(E()),H(W()),H(S()),H(B()),H(L()),H(pe())),()=>{s()&&xr({side:m(),align:O(),sideOffset:p(),alignOffset:U(),collisionPadding:w(),avoidCollisions:E(),collisionBoundary:W(),sameWidth:S(),fitViewport:B(),strategy:L(),overlap:pe()})}),Pt(),je();var ze=Q(),at=j(ze);Ee(at,()=>z()&&s(),Ae=>{var Me=Q(),Ge=j(Me);ce(Ge,e,"default",{get builder(){return g(r)}}),h(Ae,Me)},Ae=>{var Me=Q(),Ge=j(Me);Ee(Ge,()=>u()&&s(),it=>{var fe=Er();let lt;var qe=we(fe);ce(qe,e,"default",{get builder(){return g(r)}}),he(fe),Xe(fe,ne=>G(ne),()=>G()),Ye(fe,ne=>g(r).action(ne)),Ke(()=>ue("m-keydown",fe,Te)),Z(()=>lt=Be(fe,lt,{...g(r),...a})),pt(3,fe,u,v),h(it,fe)},it=>{var fe=Q(),lt=j(fe);Ee(lt,()=>k()&&I()&&s(),qe=>{var ne=Cr();let De;var Fe=we(ne);ce(Fe,e,"default",{get builder(){return g(r)}}),he(ne),Xe(ne,re=>G(re),()=>G()),Ye(ne,re=>g(r).action(re)),Ke(()=>ue("m-keydown",ne,Te)),Z(()=>De=Be(ne,De,{...g(r),...a})),pt(1,ne,k,x),pt(2,ne,I,D),h(qe,ne)},qe=>{var ne=Q(),De=j(ne);Ee(De,()=>k()&&s(),Fe=>{var re=Or();let Le;var $e=we(re);ce($e,e,"default",{get builder(){return g(r)}}),he(re),Xe(re,ie=>G(ie),()=>G()),Ye(re,ie=>g(r).action(ie)),Ke(()=>ue("m-keydown",re,Te)),Z(()=>Le=Be(re,Le,{...g(r),...a})),pt(1,re,k,x),h(Fe,re)},Fe=>{var re=Q(),Le=j(re);Ee(Le,()=>I()&&s(),$e=>{var ie=Pr();let We;var Je=we(ie);ce(Je,e,"default",{get builder(){return g(r)}}),he(ie),Xe(ie,be=>G(be),()=>G()),Ye(ie,be=>g(r).action(be)),Ke(()=>ue("m-keydown",ie,Te)),Z(()=>We=Be(ie,We,{...g(r),...a})),pt(2,ie,I,D),h($e,ie)},$e=>{var ie=Q(),We=j(ie);Ee(We,s,Je=>{var be=Ar();let ut;var Bt=we(be);ce(Bt,e,"default",{get builder(){return g(r)}}),he(be),Xe(be,Qe=>G(Qe),()=>G()),Ye(be,Qe=>g(r).action(Qe)),Ke(()=>ue("m-keydown",be,Te)),Z(()=>ut=Be(be,ut,{...g(r),...a})),h(Je,be)},null,!0),h($e,ie)},!0),h(Fe,re)},!0),h(qe,ne)},!0),h(it,fe)},!0),h(Ae,Me)}),h(n,ze),Oe()}var Sr=$("<button><!></button>");function Mr(n,e){const o=ve(e,["children","$$slots","$$events","$$legacy"]),a=ve(o,["asChild","id","el"]);Ce(e,!1);const d=vt(),c=()=>rt(k,"$trigger",d),s=Ot();let r=b(e,"asChild",8,!1),u=b(e,"id",24,()=>{}),v=b(e,"el",28,()=>{});const{elements:{trigger:k},ids:x,getAttrs:I}=Kt(),D=Nt(),z=I("trigger");X(()=>H(u()),()=>{u()&&x.trigger.set(u())}),X(()=>c(),()=>{st(s,c())}),X(()=>g(s),()=>{Object.assign(g(s),z)}),Pt(),je();var R=Q(),m=j(R);Ee(m,r,O=>{var p=Q(),U=j(p);ce(U,e,"default",{get builder(){return g(s)}}),h(O,p)},O=>{var p=Sr();let U;var w=we(p);ce(w,e,"default",{get builder(){return g(s)}}),he(p),Xe(p,E=>v(E),()=>v()),Ye(p,E=>g(s).action(E)),Ke(()=>ue("m-keydown",p,D)),Ke(()=>ue("m-pointerdown",p,D)),Z(()=>U=Be(p,U,{...g(s),type:"button",...a})),h(O,p)}),h(n,R),Oe()}function Dr(){return{NAME:"toggle",PARTS:["root","input"]}}function Fr(n){const{NAME:e,PARTS:o}=Dr(),a=un(e,o),d={...yr(cn(n)),getAttrs:a};return ln(e,d),{...d,updateOption:dn(d.options)}}var Rr=$("<button><!></button>");function Nr(n,e){const o=ve(e,["children","$$slots","$$events","$$legacy"]),a=ve(o,["disabled","pressed","onPressedChange","asChild","el"]);Ce(e,!1);const d=vt(),c=()=>rt(I,"$root",d),s=Ot();let r=b(e,"disabled",24,()=>{}),u=b(e,"pressed",28,()=>{}),v=b(e,"onPressedChange",24,()=>{}),k=b(e,"asChild",8,!1),x=b(e,"el",28,()=>{});const{elements:{root:I},states:{pressed:D},updateOption:z,getAttrs:R}=Fr({disabled:r(),defaultPressed:u(),onPressedChange:({next:w})=>{var E;return u()!==w&&((E=v())==null||E(w),u(w)),w}}),m=Nt(),O=R("root");X(()=>H(u()),()=>{u()!==void 0&&D.set(u())}),X(()=>H(r()),()=>{z("disabled",r())}),X(()=>c(),()=>{st(s,c())}),X(()=>g(s),()=>{Object.assign(g(s),O)}),Pt(),je();var p=Q(),U=j(p);Ee(U,k,w=>{var E=Q(),W=j(E);ce(W,e,"default",{get builder(){return g(s)}}),h(w,E)},w=>{var E=Rr();let W;var S=we(E);ce(S,e,"default",{get builder(){return g(s)}}),he(E),Xe(E,B=>x(B),()=>x()),Ye(E,B=>g(s).action(B)),Ke(()=>ue("m-click",E,m)),Ke(()=>ue("m-keydown",E,m)),Z(()=>W=Be(E,W,{...g(s),type:"button",...a})),h(w,E)}),h(n,p),Oe()}var Kr=$("<div><!></div>");function Br(n,e){const o=ve(e,["children","$$slots","$$events","$$legacy"]),a=ve(o,["class"]);Ce(e,!1);let d=b(e,"class",8,void 0);je();var c=Kr();let s;var r=we(c);ce(r,e,"default",{}),he(c),Z(()=>s=Be(c,s,{class:Rt("flex flex-col space-y-1.5 p-6 pb-0",d()),...a})),h(n,c),Oe()}var jr=$("<!> <!>",1),zr=$("<a><!></a>");function an(n,e){Ce(e,!0);var o=zr(),a=we(o);mn(a,{openDelay:300,children:(d,c)=>{var s=jr(),r=j(s);vn(r,{children:(v,k)=>{gn(v,{size:"icon",variant:"outline",children:(x,I)=>{Dt(x,{icon:"i-carbon-link"})},$$slots:{default:!0}})},$$slots:{default:!0}});var u=oe(r,2);bn(u,{children:(v,k)=>{He();var x=Ue();Z(()=>Ne(x,e.link.label)),h(v,x)},$$slots:{default:!0}}),h(d,s)},$$slots:{default:!0}}),he(o),Z(()=>{Et(o,"href",e.link.to),Et(o,"target",e.link.newTab?"_blank":void 0)}),h(n,o),Oe()}function Lr(n,e){const o=ve(e,["children","$$slots","$$events","$$legacy"]),a=ve(o,["class","inset"]);Ce(e,!1);let d=b(e,"class",8,void 0),c=b(e,"inset",8,void 0);je();var s=Wt(()=>Rt("data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",c()&&"pl-8",d()));wr(n,Vt({get class(){return g(s)}},()=>a,{$$events:{click(r){Se.call(this,e,r)},keydown(r){Se.call(this,e,r)},focusin(r){Se.call(this,e,r)},focusout(r){Se.call(this,e,r)},pointerdown(r){Se.call(this,e,r)},pointerleave(r){Se.call(this,e,r)},pointermove(r){Se.call(this,e,r)}},children:(r,u)=>{var v=Q(),k=j(v);ce(k,e,"default",{}),h(r,v)},$$slots:{default:!0}})),Oe()}function Wr(n,e){const o=ve(e,["children","$$slots","$$events","$$legacy"]),a=ve(o,["class","sideOffset","transition","transitionConfig"]);Ce(e,!1);let d=b(e,"class",8,void 0),c=b(e,"sideOffset",8,4),s=b(e,"transition",8,Rn),r=b(e,"transitionConfig",8,void 0);je();var u=Wt(()=>Rt("bg-popover text-popover-foreground z-50 min-w-[8rem] rounded-md border p-1 shadow-md focus:outline-none",d()));Ir(n,Vt({get transition(){return s()},get transitionConfig(){return r()},get sideOffset(){return c()},get class(){return g(u)}},()=>a,{$$events:{keydown(v){Se.call(this,e,v)}},children:(v,k)=>{var x=Q(),I=j(x);ce(I,e,"default",{}),h(v,x)},$$slots:{default:!0}})),Oe()}const Vr=Tr,Ur=Mr;var Hr=$("<img>"),Xr=$("<!> <!>",1),Yr=$("<!> <!>",1),Gr=$('<a target="_blank"><!></a>'),qr=$("<!> <!>",1),$r=$("<!> <!>",1),Jr=$('<!> <div class="flex w-full flex-row items-center gap-1 overflow-x-hidden"><!> <!></div> <!>',1),Qr=$("<!> <!>",1),Zr=$('<!> <!> <!> <div class="flex w-full flex-row items-center justify-between"><!> <!></div> <!>',1),es=$("<!> <!> <!>",1);function ts(n,e){Ce(e,!0);const o=vt(),a=()=>rt(Cn,"$mode",o);let d=kt(()=>$t(e.project.period.from)),c=kt(()=>$t(e.project.period.to));var s=kt(()=>Nn(`/projects/${e.project.slug}`));Pn(n,{get color(){return e.project.color},class:"flex h-full flex-col",get href(){return g(s)},children:(r,u)=>{var v=es(),k=j(v);Br(k,{class:"flex w-full flex-col gap-4",children:(D,z)=>{var R=Jr(),m=j(R);Wn(m,{children:(E,W)=>{var S=Xr(),B=j(S);Vn(B,{children:(G,te)=>{var _e=Hr();Z(()=>{Et(_e,"src",Kn.Unknown.light),Et(_e,"alt",e.project.name)}),h(G,_e)},$$slots:{default:!0}});var L=oe(B,2),pe=kt(()=>a()==="dark"?e.project.logo.dark:e.project.logo.light);Un(L,{get src(){return g(pe)}}),h(E,S)},$$slots:{default:!0}});var O=oe(m,2),p=we(O);An(p,{class:"h-auto min-w-0 flex-1 overflow-x-hidden",children:(E,W)=>{mn(E,{children:(S,B)=>{var L=Yr(),pe=j(L);vn(pe,{class:"w-full overflow-y-auto overflow-x-hidden",children:(te,_e)=>{He();var de=Ue();Z(()=>Ne(de,e.project.name)),h(te,de)},$$slots:{default:!0}});var G=oe(pe,2);bn(G,{children:(te,_e)=>{He();var de=Ue();Z(()=>Ne(de,e.project.name)),h(te,de)},$$slots:{default:!0}}),h(S,L)},$$slots:{default:!0}})},$$slots:{default:!0}});var U=oe(p,2);Ee(U,()=>e.project.links.length>2,E=>{var W=$r(),S=j(W);an(S,{get link(){return e.project.links[0]}});var B=oe(S,2);Vr(B,{children:(L,pe)=>{var G=qr(),te=j(G);Ur(te,{children:(de,bt)=>{gn(de,{size:"icon",variant:"outline",children:(Te,ot)=>{Dt(Te,{icon:"i-carbon-overflow-menu-vertical"})},$$slots:{default:!0}})},$$slots:{default:!0}});var _e=oe(te,2);Wr(_e,{children:(de,bt)=>{var Te=Q(),ot=j(Te);wt(ot,17,()=>e.project.links.slice(1),ze=>ze.to,(ze,at)=>{var Ae=Gr(),Me=we(Ae);Lr(Me,{children:(Ge,it)=>{He();var fe=Ue();Z(()=>Ne(fe,g(at).label)),h(Ge,fe)},$$slots:{default:!0}}),he(Ae),Z(()=>Et(Ae,"href",g(at).to)),h(ze,Ae)}),h(de,Te)},$$slots:{default:!0}}),h(L,G)},$$slots:{default:!0}}),h(E,W)},E=>{var W=Q(),S=j(W);wt(S,17,()=>e.project.links,B=>B.to,(B,L)=>{an(B,{get link(){return g(L)}})}),h(E,W)}),he(O);var w=oe(O,2);en(w,{}),h(D,R)},$$slots:{default:!0}});var x=oe(k,2);In(x,{class:"flex flex-1 flex-col gap-4",children:(D,z)=>{var R=Zr(),m=j(R);St(m,{className:"flex flex-row gap-2 items-center",children:(S,B)=>{var L=Qr(),pe=j(L);Dt(pe,{icon:"i-carbon-assembly-cluster"});var G=oe(pe,2);St(G,{children:(te,_e)=>{He();var de=Ue();Z(()=>Ne(de,e.project.type)),h(te,de)},$$slots:{default:!0}}),h(S,L)},$$slots:{default:!0}});var O=oe(m,2);St(O,{className:"flex flex-row gap-2 items-center"});var p=oe(O,2);St(p,{className:"flex-1",children:(S,B)=>{He();var L=Ue();Z(()=>Ne(L,Bn(e.project.shortDescription,100))),h(S,L)},$$slots:{default:!0}});var U=oe(p,2),w=we(U);Jt(w,{variant:"outline",children:(S,B)=>{He();var L=Ue();Z(()=>Ne(L,g(d))),h(S,L)},$$slots:{default:!0}});var E=oe(w,2);Jt(E,{variant:"outline",children:(S,B)=>{He();var L=Ue();Z(()=>Ne(L,g(c))),h(S,L)},$$slots:{default:!0}}),he(U);var W=oe(U,2);en(W,{}),h(D,R)},$$slots:{default:!0}});var I=oe(x,2);Hn(I,{class:"flex flex-row flex-wrap items-center gap-2",children:(D,z)=>{var R=Q(),m=j(R);wt(m,17,()=>e.project.skills,O=>O.slug,(O,p)=>{Ln(O,{get skill(){return g(p)}})}),h(D,R)},$$slots:{default:!0}}),h(r,v)},$$slots:{default:!0}}),Oe()}const ns=Zn({base:"ring-offset-background hover:bg-muted hover:text-muted-foreground focus-visible:ring-ring data-[state=on]:bg-accent data-[state=on]:text-accent-foreground inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",variants:{variant:{default:"bg-transparent",outline:"border-input hover:bg-accent hover:text-accent-foreground border bg-transparent"},size:{default:"h-10 px-3",sm:"h-9 px-2.5",lg:"h-11 px-5"}},defaultVariants:{variant:"default",size:"default"}});function rs(n,e){const o=ve(e,["children","$$slots","$$events","$$legacy"]),a=ve(o,["class","variant","size","pressed"]);Ce(e,!1);let d=b(e,"class",8,void 0),c=b(e,"variant",8,"default"),s=b(e,"size",8,"default"),r=b(e,"pressed",12,void 0);je();var u=Wt(()=>Rt(ns({variant:c(),size:s(),className:d()})));Nr(n,Vt({get pressed(){return r()},set pressed(v){r(v)},get class(){return g(u)}},()=>a,{$$events:{click(v){Se.call(this,e,v)}},children:(v,k)=>{var x=Q(),I=j(x);ce(I,e,"default",{}),h(v,x)},$$slots:{default:!0},$$legacy:!0})),Oe()}var ss=$("<!> ",1),os=$('<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"></div>'),as=$('<div class="flex flex-1 flex-col gap-8"><div class="flex flex-row flex-wrap gap-2"></div> <!></div>');function Ss(n,e){Ce(e,!0);let o=Yt(jt(er.items.filter(r=>zt.items.some(u=>u.skills.some(v=>v.slug===r.slug))))),a=Yt(""),d=kt(()=>zt.items.filter(r=>{const u=g(o).every(k=>!k.isSelected)||r.skills.some(k=>g(o).some(x=>x.isSelected&&x.slug===k.slug)),v=g(a).trim().length===0||r.name.trim().toLowerCase().includes(g(a).trim().toLowerCase());return u&&v}));const c=r=>{st(o,jt(g(o).map(u=>u.slug===r?{...u,isSelected:!u.isSelected}:u)))};Sn(n,{get title(){return zt.title},onSearch:r=>st(a,jt(r)),children:(r,u)=>{var v=as(),k=we(v);wt(k,21,()=>g(o),I=>I.slug,(I,D)=>{rs(I,{get pressed(){return g(D).isSelected},variant:"outline",class:"flex flex-row items-center gap-2 rounded-lg",$$events:{click:()=>c(g(D).slug)},children:(z,R)=>{var m=ss(),O=j(m);Ee(O,()=>g(D).isSelected,U=>{Dt(U,{icon:"i-carbon-close"})});var p=oe(O);Z(()=>Ne(p,` ${g(D).name??""}`)),h(z,m)},$$slots:{default:!0}})}),he(k);var x=oe(k,2);Ee(x,()=>g(d).length===0,I=>{On(I)},I=>{var D=os();wt(D,21,()=>g(d),z=>z.slug,(z,R)=>{ts(z,{get project(){return g(R)}})}),he(D),h(I,D)}),he(v),h(r,v)},$$slots:{default:!0}}),Oe()}export{Ss as component};
