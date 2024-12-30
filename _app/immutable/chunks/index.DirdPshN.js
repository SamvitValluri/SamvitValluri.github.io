import{s as mt,a as ut}from"./disclose-version.DGQ-7qVU.js";import"./legacy.BY2MIiOc.js";import{aC as Kt,aE as Bt,aF as Lt,p as rt,J as N,K as bt,f as k,a as lt,m as it,g as o,a3 as d,t as G,L as Ct,c as ot,r as st,b as yt,I as jt,s as At,n as Ht}from"./utils.HUOjG_c-.js";import{c as x,a as _,b as B,e as u}from"./render.DZubZ1YR.js";import{a as p,i as X,b as J,j as g,c as Pt,l as Ut}from"./base.CadOiWmH.js";import{i as ct}from"./lifecycle.DFCENlui.js";import{p as h,l as j,i as W,b as Q,s as Et}from"./props.Ce0-gft3.js";import{o as Wt,w as qt,m as ft,s as Ft,f as wt,a as ht,h as Gt,j as Tt,k as kt,u as xt,n as vt,p as Jt,i as Xt,b as St}from"./bundle-mjs.vQ8SAiDM.js";import{g as Qt,o as Yt,a as Zt,u as $t,c as It,t as tt}from"./events.D4vZTqen.js";import{I as te}from"./Icon.7pzkv9Sv.js";import{d as Mt,w as ee}from"./paths.C4r0dsGn.js";import{u as ne,c as ae,r as ie,h as zt}from"./action.Cbg7OdqL.js";import{t as Nt,c as oe,r as se,g as re}from"./icon.CZKQia8s.js";const{name:gt}=Gt("dialog"),le={preventScroll:!0,closeOnEscape:!0,closeOnOutsideClick:!0,role:"dialog",defaultOpen:!1,portal:void 0,forceVisible:!1,openFocus:void 0,closeFocus:void 0,onOutsideClick:void 0},ce=["content","title","description"];function de(O){const t={...le,...O},T=Nt(Wt(t,"ids")),{preventScroll:C,closeOnEscape:b,closeOnOutsideClick:y,role:n,portal:e,forceVisible:E,openFocus:L,closeFocus:A,onOutsideClick:z}=T,w=qt.writable(null),P=Nt({...Qt(ce),...t.ids}),S=t.open??ee(t.defaultOpen),s=Yt(S,t==null?void 0:t.onOpenChange),r=Mt([s,E],([l,c])=>l||c);let F=vt;function I(l){const c=l.currentTarget,f=l.currentTarget;!St(c)||!St(f)||(s.set(!0),w.set(f))}function D(){s.set(!1),zt({prop:A.get(),defaultEl:w.get()})}const q=ft(gt("trigger"),{stores:[s],returned:([l])=>({"aria-haspopup":"dialog","aria-expanded":l,type:"button"}),action:l=>({destroy:wt(Tt(l,"click",f=>{I(f)}),Tt(l,"keydown",f=>{f.key!==kt.ENTER&&f.key!==kt.SPACE||(f.preventDefault(),I(f))}))})}),et=ft(gt("overlay"),{stores:[r,s],returned:([l,c])=>({hidden:l?void 0:!0,tabindex:-1,style:Ft({display:l?void 0:"none"}),"aria-hidden":!0,"data-state":c?"open":"closed"}),action:l=>{let c=vt;if(b.get()){const f=xt(l,{handler:()=>{D()}});f&&f.destroy&&(c=f.destroy)}return{destroy(){c()}}}}),dt=ft(gt("content"),{stores:[r,P.content,P.description,P.title,s],returned:([l,c,f,V,a])=>({id:c,role:n.get(),"aria-describedby":f,"aria-labelledby":V,"aria-modal":l?"true":void 0,"data-state":a?"open":"closed",tabindex:-1,hidden:l?void 0:!0,style:Ft({display:l?void 0:"none"})}),action:l=>{let c=vt,f=vt;const V=wt(ht([s,y,b],([a,M,U])=>{if(!a)return;const i=ae({immediate:!1,escapeDeactivates:U,clickOutsideDeactivates:M,allowOutsideClick:!0,returnFocusOnDeactivate:!1,fallbackFocus:l});c=i.activate,f=i.deactivate;const R=i.useFocusTrap(l);return R&&R.destroy?R.destroy:i.deactivate}),ht([y,s],([a,M])=>ne(l,{open:M,closeOnInteractOutside:a,onClose(){D()},shouldCloseOnInteractOutside(U){var i;return(i=z.get())==null||i(U),!U.defaultPrevented}}).destroy),ht([b],([a])=>a?xt(l,{handler:D}).destroy:vt),ht([r],([a])=>{Kt().then(()=>{a?c():f()})}));return{destroy:()=>{F(),V()}}}}),nt=ft(gt("portalled"),{stores:e,returned:l=>({"data-portal":Jt(l)}),action:l=>{const c=ht([e],([f])=>{if(f===null)return vt;const V=Zt(l,f);return V===null?vt:$t(l,V).destroy});return{destroy(){c()}}}}),at=ft(gt("title"),{stores:[P.title],returned:([l])=>({id:l})}),Y=ft(gt("description"),{stores:[P.description],returned:([l])=>({id:l})}),H=ft(gt("close"),{returned:()=>({type:"button"}),action:l=>({destroy:wt(Tt(l,"click",()=>{D()}),Tt(l,"keydown",f=>{f.key!==kt.SPACE&&f.key!==kt.ENTER||(f.preventDefault(),D())}))})});return ht([s,C],([l,c])=>{if(Xt){if(c&&l&&(F=ie()),l){const f=document.getElementById(P.content.get());zt({prop:L.get(),defaultEl:f})}return()=>{E.get()||F()}}}),{ids:P,elements:{content:dt,trigger:q,title:at,description:Y,overlay:et,close:H,portalled:nt},states:{open:s},options:T}}function Rt(){return{NAME:"dialog",PARTS:["close","content","description","overlay","portal","title","trigger"]}}function ue(O){const{NAME:t,PARTS:T}=Rt(),C=oe(t,T),b={...de({...se(O),role:"dialog",forceVisible:!0}),getAttrs:C};return Bt(t,b),{...b,updateOption:re(b.options)}}function Ot(){const{NAME:O}=Rt();return Lt(O)}function fe(O,t){rt(t,!1);const T=mt(),C=()=>ut(r,"$idValues",T);let b=h(t,"preventScroll",24,()=>{}),y=h(t,"closeOnEscape",24,()=>{}),n=h(t,"closeOnOutsideClick",24,()=>{}),e=h(t,"portal",24,()=>{}),E=h(t,"open",28,()=>{}),L=h(t,"onOpenChange",24,()=>{}),A=h(t,"openFocus",24,()=>{}),z=h(t,"closeFocus",24,()=>{}),w=h(t,"onOutsideClick",24,()=>{});const{states:{open:P},updateOption:S,ids:s}=ue({closeOnEscape:y(),preventScroll:b(),closeOnOutsideClick:n(),portal:e(),forceVisible:!0,defaultOpen:E(),openFocus:A(),closeFocus:z(),onOutsideClick:w(),onOpenChange:({next:D})=>{var q;return E()!==D&&((q=L())==null||q(D),E(D)),D}}),r=Mt([s.content,s.description,s.title],([D,q,et])=>({content:D,description:q,title:et}));N(()=>it(E()),()=>{E()!==void 0&&P.set(E())}),N(()=>it(b()),()=>{S("preventScroll",b())}),N(()=>it(y()),()=>{S("closeOnEscape",y())}),N(()=>it(n()),()=>{S("closeOnOutsideClick",n())}),N(()=>it(e()),()=>{S("portal",e())}),N(()=>it(A()),()=>{S("openFocus",A())}),N(()=>it(z()),()=>{S("closeFocus",z())}),N(()=>it(w()),()=>{S("onOutsideClick",w())}),bt(),ct();var F=x(),I=k(F);p(I,t,"default",{get ids(){return C()}}),_(O,F),lt()}var ve=B("<button><!></button>");function pt(O,t){const T=j(t,["children","$$slots","$$events","$$legacy"]),C=j(T,["asChild","el"]);rt(t,!1);const b=mt(),y=()=>ut(L,"$close",b),n=Ct();let e=h(t,"asChild",8,!1),E=h(t,"el",28,()=>{});const{elements:{close:L},getAttrs:A}=Ot(),z=It(),w=A("close");N(()=>y(),()=>{yt(n,y())}),N(()=>o(n),()=>{Object.assign(o(n),w)}),bt(),ct();var P=x(),S=k(P);W(S,e,s=>{var r=x(),F=k(r);p(F,t,"default",{get builder(){return o(n)}}),_(s,r)},s=>{var r=ve();let F;var I=ot(r);p(I,t,"default",{get builder(){return o(n)}}),st(r),Q(r,D=>E(D),()=>E()),X(r,D=>o(n).action(D)),d(()=>u("m-click",r,z)),d(()=>u("m-keydown",r,z)),G(()=>F=J(r,F,{...o(n),type:"button",...C})),_(s,r)}),_(O,P),lt()}var ge=B("<div><!></div>");function _e(O,t){const T=j(t,["children","$$slots","$$events","$$legacy"]),C=j(T,["asChild","el"]);rt(t,!1);const b=mt(),y=()=>ut(L,"$portalled",b),n=Ct();let e=h(t,"asChild",8,!1),E=h(t,"el",28,()=>{});const{elements:{portalled:L},getAttrs:A}=Ot(),z=A("portal");N(()=>y(),()=>{yt(n,y())}),N(()=>o(n),()=>{Object.assign(o(n),z)}),bt(),ct();var w=x(),P=k(w);W(P,e,S=>{var s=x(),r=k(s);p(r,t,"default",{get builder(){return o(n)}}),_(S,s)},S=>{var s=ge();let r;var F=ot(s);p(F,t,"default",{get builder(){return o(n)}}),st(s),Q(s,I=>E(I),()=>E()),X(s,I=>o(n).action(I)),G(()=>r=J(s,r,{...o(n),...C})),_(S,s)}),_(O,w),lt()}var he=B("<div><!></div>"),me=B("<div><!></div>"),be=B("<div><!></div>"),Ce=B("<div><!></div>"),ye=B("<div><!></div>");function Oe(O,t){const T=j(t,["children","$$slots","$$events","$$legacy"]),C=j(T,["transition","transitionConfig","inTransition","inTransitionConfig","outTransition","outTransitionConfig","asChild","id","el"]);rt(t,!1);const b=mt(),y=()=>ut(F,"$content",b),n=()=>ut(I,"$open",b),e=Ct();let E=h(t,"transition",24,()=>{}),L=h(t,"transitionConfig",24,()=>{}),A=h(t,"inTransition",24,()=>{}),z=h(t,"inTransitionConfig",24,()=>{}),w=h(t,"outTransition",24,()=>{}),P=h(t,"outTransitionConfig",24,()=>{}),S=h(t,"asChild",8,!1),s=h(t,"id",24,()=>{}),r=h(t,"el",28,()=>{});const{elements:{content:F},states:{open:I},ids:D,getAttrs:q}=Ot(),et=q("content");N(()=>it(s()),()=>{s()&&D.content.set(s())}),N(()=>y(),()=>{yt(e,y())}),N(()=>o(e),()=>{Object.assign(o(e),et)}),bt(),ct();var dt=x(),nt=k(dt);W(nt,()=>S()&&n(),at=>{var Y=x(),H=k(Y);p(H,t,"default",{get builder(){return o(e)}}),_(at,Y)},at=>{var Y=x(),H=k(Y);W(H,()=>E()&&n(),l=>{var c=he();let f;var V=ot(c);p(V,t,"default",{get builder(){return o(e)}}),st(c),Q(c,a=>r(a),()=>r()),X(c,a=>o(e).action(a)),d(()=>u("pointerdown",c,function(a){g.call(this,t,a)})),d(()=>u("pointermove",c,function(a){g.call(this,t,a)})),d(()=>u("pointerup",c,function(a){g.call(this,t,a)})),d(()=>u("touchcancel",c,function(a){g.call(this,t,a)})),d(()=>u("touchend",c,function(a){g.call(this,t,a)})),d(()=>u("touchmove",c,function(a){g.call(this,t,a)},void 0,!1)),d(()=>u("touchstart",c,function(a){g.call(this,t,a)},void 0,!1)),G(()=>f=J(c,f,{...o(e),...C})),tt(3,c,E,L),_(l,c)},l=>{var c=x(),f=k(c);W(f,()=>A()&&w()&&n(),V=>{var a=me();let M;var U=ot(a);p(U,t,"default",{get builder(){return o(e)}}),st(a),Q(a,i=>r(i),()=>r()),X(a,i=>o(e).action(i)),d(()=>u("pointerdown",a,function(i){g.call(this,t,i)})),d(()=>u("pointermove",a,function(i){g.call(this,t,i)})),d(()=>u("pointerup",a,function(i){g.call(this,t,i)})),d(()=>u("touchcancel",a,function(i){g.call(this,t,i)})),d(()=>u("touchend",a,function(i){g.call(this,t,i)})),d(()=>u("touchmove",a,function(i){g.call(this,t,i)},void 0,!1)),d(()=>u("touchstart",a,function(i){g.call(this,t,i)},void 0,!1)),G(()=>M=J(a,M,{...o(e),...C})),tt(1,a,A,z),tt(2,a,w,P),_(V,a)},V=>{var a=x(),M=k(a);W(M,()=>A()&&n(),U=>{var i=be();let R;var Z=ot(i);p(Z,t,"default",{get builder(){return o(e)}}),st(i),Q(i,v=>r(v),()=>r()),X(i,v=>o(e).action(v)),d(()=>u("pointerdown",i,function(v){g.call(this,t,v)})),d(()=>u("pointermove",i,function(v){g.call(this,t,v)})),d(()=>u("pointerup",i,function(v){g.call(this,t,v)})),d(()=>u("touchcancel",i,function(v){g.call(this,t,v)})),d(()=>u("touchend",i,function(v){g.call(this,t,v)})),d(()=>u("touchmove",i,function(v){g.call(this,t,v)},void 0,!1)),d(()=>u("touchstart",i,function(v){g.call(this,t,v)},void 0,!1)),G(()=>R=J(i,R,{...o(e),...C})),tt(1,i,A,z),_(U,i)},U=>{var i=x(),R=k(i);W(R,()=>w()&&n(),Z=>{var v=Ce();let $;var _t=ot(v);p(_t,t,"default",{get builder(){return o(e)}}),st(v),Q(v,m=>r(m),()=>r()),X(v,m=>o(e).action(m)),d(()=>u("pointerdown",v,function(m){g.call(this,t,m)})),d(()=>u("pointermove",v,function(m){g.call(this,t,m)})),d(()=>u("pointerup",v,function(m){g.call(this,t,m)})),d(()=>u("touchcancel",v,function(m){g.call(this,t,m)})),d(()=>u("touchend",v,function(m){g.call(this,t,m)})),d(()=>u("touchmove",v,function(m){g.call(this,t,m)},void 0,!1)),d(()=>u("touchstart",v,function(m){g.call(this,t,m)},void 0,!1)),G(()=>$=J(v,$,{...o(e),...C})),tt(2,v,w,P),_(Z,v)},Z=>{var v=x(),$=k(v);W($,n,_t=>{var m=ye();let Dt;var Vt=ot(m);p(Vt,t,"default",{get builder(){return o(e)}}),st(m),Q(m,K=>r(K),()=>r()),X(m,K=>o(e).action(K)),d(()=>u("pointerdown",m,function(K){g.call(this,t,K)})),d(()=>u("pointermove",m,function(K){g.call(this,t,K)})),d(()=>u("pointerup",m,function(K){g.call(this,t,K)})),d(()=>u("touchcancel",m,function(K){g.call(this,t,K)})),d(()=>u("touchend",m,function(K){g.call(this,t,K)})),d(()=>u("touchmove",m,function(K){g.call(this,t,K)},void 0,!1)),d(()=>u("touchstart",m,function(K){g.call(this,t,K)},void 0,!1)),G(()=>Dt=J(m,Dt,{...o(e),...C})),_(_t,m)},null,!0),_(Z,v)},!0),_(U,i)},!0),_(V,a)},!0),_(l,c)},!0),_(at,Y)}),_(O,dt),lt()}var Te=B("<div></div>"),ke=B("<div></div>"),Ee=B("<div></div>"),we=B("<div></div>"),Pe=B("<div></div>");function De(O,t){const T=j(t,["children","$$slots","$$events","$$legacy"]),C=j(T,["transition","transitionConfig","inTransition","inTransitionConfig","outTransition","outTransitionConfig","asChild","el"]);rt(t,!1);const b=mt(),y=()=>ut(r,"$overlay",b),n=()=>ut(F,"$open",b),e=Ct();let E=h(t,"transition",24,()=>{}),L=h(t,"transitionConfig",24,()=>{}),A=h(t,"inTransition",24,()=>{}),z=h(t,"inTransitionConfig",24,()=>{}),w=h(t,"outTransition",24,()=>{}),P=h(t,"outTransitionConfig",24,()=>{}),S=h(t,"asChild",8,!1),s=h(t,"el",28,()=>{});const{elements:{overlay:r},states:{open:F},getAttrs:I}=Ot(),D=I("overlay");N(()=>y(),()=>{yt(e,y())}),N(()=>o(e),()=>{Object.assign(o(e),D)}),bt(),ct();var q=x(),et=k(q);W(et,()=>S()&&n(),dt=>{var nt=x(),at=k(nt);p(at,t,"default",{get builder(){return o(e)}}),_(dt,nt)},dt=>{var nt=x(),at=k(nt);W(at,()=>E()&&n(),Y=>{var H=Te();let l;d(()=>u("mouseup",H,function(c){g.call(this,t,c)})),Q(H,c=>s(c),()=>s()),X(H,c=>o(e).action(c)),G(()=>l=J(H,l,{...o(e),...C})),tt(3,H,E,L),_(Y,H)},Y=>{var H=x(),l=k(H);W(l,()=>A()&&w()&&n(),c=>{var f=ke();let V;Q(f,a=>s(a),()=>s()),X(f,a=>o(e).action(a)),d(()=>u("mouseup",f,function(a){g.call(this,t,a)})),G(()=>V=J(f,V,{...o(e),...C})),tt(1,f,A,z),tt(2,f,w,P),_(c,f)},c=>{var f=x(),V=k(f);W(V,()=>A()&&n(),a=>{var M=Ee();let U;Q(M,i=>s(i),()=>s()),X(M,i=>o(e).action(i)),d(()=>u("mouseup",M,function(i){g.call(this,t,i)})),G(()=>U=J(M,U,{...o(e),...C})),tt(1,M,A,z),_(a,M)},a=>{var M=x(),U=k(M);W(U,()=>w()&&n(),i=>{var R=we();let Z;Q(R,v=>s(v),()=>s()),X(R,v=>o(e).action(v)),d(()=>u("mouseup",R,function(v){g.call(this,t,v)})),G(()=>Z=J(R,Z,{...o(e),...C})),tt(2,R,w,P),_(i,R)},i=>{var R=x(),Z=k(R);W(Z,n,v=>{var $=Pe();let _t;Q($,m=>s(m),()=>s()),X($,m=>o(e).action(m)),d(()=>u("mouseup",$,function(m){g.call(this,t,m)})),G(()=>_t=J($,_t,{...o(e),...C})),_(v,$)},null,!0),_(i,R)},!0),_(a,M)},!0),_(c,f)},!0),_(Y,H)},!0),_(dt,nt)}),_(O,q),lt()}var Ae=B("<button><!></button>");function Fe(O,t){const T=j(t,["children","$$slots","$$events","$$legacy"]),C=j(T,["asChild","el"]);rt(t,!1);const b=mt(),y=()=>ut(L,"$trigger",b),n=Ct();let e=h(t,"asChild",8,!1),E=h(t,"el",28,()=>{});const{elements:{trigger:L},getAttrs:A}=Ot(),z=It(),w=A("trigger");N(()=>y(),()=>{yt(n,y())}),N(()=>o(n),()=>{Object.assign(o(n),w)}),bt(),ct();var P=x(),S=k(P);W(S,e,s=>{var r=x(),F=k(r);p(F,t,"default",{get builder(){return o(n)}}),_(s,r)},s=>{var r=Ae();let F;var I=ot(r);p(I,t,"default",{get builder(){return o(n)}}),st(r),Q(r,D=>E(D),()=>E()),X(r,D=>o(n).action(D)),d(()=>u("m-click",r,z)),d(()=>u("m-keydown",r,z)),G(()=>F=J(r,F,{...o(n),type:"button",...C})),_(s,r)}),_(O,P),lt()}function xe(O,t){const T=j(t,["children","$$slots","$$events","$$legacy"]),C=j(T,[]);_e(O,Et(()=>C,{children:(b,y)=>{var n=x(),e=k(n);p(e,t,"default",{}),_(b,n)},$$slots:{default:!0}}))}var Se=B("<div><!></div>");function Ze(O,t){const T=j(t,["children","$$slots","$$events","$$legacy"]),C=j(T,["class"]);rt(t,!1);let b=h(t,"class",8,void 0);ct();var y=Se();let n;var e=ot(y);p(e,t,"default",{}),st(y),G(()=>n=J(y,n,{class:Pt("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",b()),...C})),_(O,y),lt()}const ze=O=>O;function Ne(O,{delay:t=0,duration:T=400,easing:C=ze}={}){const b=+getComputedStyle(O).opacity;return{delay:t,duration:T,easing:C,css:y=>`opacity: ${y*b}`}}function je(O,t){const T=j(t,["children","$$slots","$$events","$$legacy"]),C=j(T,["class","transition","transitionConfig"]);rt(t,!1);let b=h(t,"class",8,void 0),y=h(t,"transition",8,Ne),n=h(t,"transitionConfig",24,()=>({duration:150}));ct();var e=jt(()=>Pt("bg-background/80 fixed inset-0 z-50 backdrop-blur-sm",b()));De(O,Et({get transition(){return y()},get transitionConfig(){return n()},get class(){return o(e)}},()=>C)),lt()}function Ie(O,t){const T=j(t,["children","$$slots","$$events","$$legacy"]);te(O,Et({name:"x"},()=>T,{iconNode:[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]],children:(b,y)=>{var n=x(),e=k(n);p(e,t,"default",{}),_(b,n)},$$slots:{default:!0}}))}var Me=B('<!> <span class="sr-only">Close</span>',1),Re=B("<!> <!>",1),pe=B("<!> <!>",1);function $e(O,t){const T=j(t,["children","$$slots","$$events","$$legacy"]),C=j(T,["class","transition","transitionConfig"]);rt(t,!1);let b=h(t,"class",8,void 0),y=h(t,"transition",8,Ut),n=h(t,"transitionConfig",24,()=>({duration:200}));ct(),xe(O,{children:(e,E)=>{var L=pe(),A=k(L);je(A,{});var z=At(A,2),w=jt(()=>Pt("bg-background fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border p-6 shadow-lg sm:rounded-lg md:w-full",b()));Oe(z,Et({get transition(){return y()},get transitionConfig(){return n()},get class(){return o(w)}},()=>C,{children:(P,S)=>{var s=Re(),r=k(s);p(r,t,"default",{});var F=At(r,2);pt(F,{class:"ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none",children:(I,D)=>{var q=Me(),et=k(q);Ie(et,{class:"h-4 w-4"}),Ht(2),_(I,q)},$$slots:{default:!0}}),_(P,s)},$$slots:{default:!0}})),_(e,L)},$$slots:{default:!0}}),lt()}const tn=fe,en=Fe,nn=pt;export{nn as C,$e as D,tn as R,en as T,Ze as a,Ot as g};
