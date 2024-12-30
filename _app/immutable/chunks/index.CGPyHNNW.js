import{s as mt,e as x,a as _,d as ut,b as H,f as d}from"./disclose-version.Cfp-rwoP.js";import{i as rt}from"./legacy.Ccq7PQRh.js";import{al as Gt,am as Ht,an as Kt,p as lt,D as N,F as bt,f as k,a as ct,z as ot,g as i,_ as u,t as W,G as Ct,c as it,r as st,b as yt,H as Mt,s as At,n as pt}from"./utils.jAVDF0d8.js";import{o as qt,w as Lt,m as ft,n as Ft,y as wt,k as ht,A as Ut,C as Tt,D as kt,E as xt,r as vt,F as Wt,l as Xt,q as St,a as V,j as J,b as X,c as Pt,G as Jt}from"./base.BHqxtSDW.js";import{p as h,l as M,i as L,b as Q,s as Et}from"./index-client.BSQKl7cS.js";import{g as Qt,o as Yt,a as Zt,u as $t,c as jt,t as tt}from"./events.DAl_T8fV.js";import{b as g}from"./misc.Dzvx5Zh0.js";import{I as te}from"./Icon.BROVuzCz.js";import{d as It,w as ee}from"./paths.CCJdTw2E.js";import{u as ne,c as ae,r as oe,h as zt}from"./action.BYpKElGk.js";import{t as Nt,c as ie,r as se,g as re}from"./stores.BlOUn0mk.js";const{name:gt}=Ut("dialog"),le={preventScroll:!0,closeOnEscape:!0,closeOnOutsideClick:!0,role:"dialog",defaultOpen:!1,portal:void 0,forceVisible:!1,openFocus:void 0,closeFocus:void 0,onOutsideClick:void 0},ce=["content","title","description"];function de(O){const t={...le,...O},T=Nt(qt(t,"ids")),{preventScroll:C,closeOnEscape:b,closeOnOutsideClick:y,role:n,portal:e,forceVisible:E,openFocus:K,closeFocus:A,onOutsideClick:z}=T,w=Lt.writable(null),P=Nt({...Qt(ce),...t.ids}),S=t.open??ee(t.defaultOpen),s=Yt(S,t==null?void 0:t.onOpenChange),r=It([s,E],([l,c])=>l||c);let F=vt;function j(l){const c=l.currentTarget,f=l.currentTarget;!St(c)||!St(f)||(s.set(!0),w.set(f))}function D(){s.set(!1),zt({prop:A.get(),defaultEl:w.get()})}const U=ft(gt("trigger"),{stores:[s],returned:([l])=>({"aria-haspopup":"dialog","aria-expanded":l,type:"button"}),action:l=>({destroy:wt(Tt(l,"click",f=>{j(f)}),Tt(l,"keydown",f=>{f.key!==kt.ENTER&&f.key!==kt.SPACE||(f.preventDefault(),j(f))}))})}),et=ft(gt("overlay"),{stores:[r,s],returned:([l,c])=>({hidden:l?void 0:!0,tabindex:-1,style:Ft({display:l?void 0:"none"}),"aria-hidden":!0,"data-state":c?"open":"closed"}),action:l=>{let c=vt;if(b.get()){const f=xt(l,{handler:()=>{D()}});f&&f.destroy&&(c=f.destroy)}return{destroy(){c()}}}}),dt=ft(gt("content"),{stores:[r,P.content,P.description,P.title,s],returned:([l,c,f,B,a])=>({id:c,role:n.get(),"aria-describedby":f,"aria-labelledby":B,"aria-modal":l?"true":void 0,"data-state":a?"open":"closed",tabindex:-1,hidden:l?void 0:!0,style:Ft({display:l?void 0:"none"})}),action:l=>{let c=vt,f=vt;const B=wt(ht([s,y,b],([a,I,q])=>{if(!a)return;const o=ae({immediate:!1,escapeDeactivates:q,clickOutsideDeactivates:I,allowOutsideClick:!0,returnFocusOnDeactivate:!1,fallbackFocus:l});c=o.activate,f=o.deactivate;const R=o.useFocusTrap(l);return R&&R.destroy?R.destroy:o.deactivate}),ht([y,s],([a,I])=>ne(l,{open:I,closeOnInteractOutside:a,onClose(){D()},shouldCloseOnInteractOutside(q){var o;return(o=z.get())==null||o(q),!q.defaultPrevented}}).destroy),ht([b],([a])=>a?xt(l,{handler:D}).destroy:vt),ht([r],([a])=>{Gt().then(()=>{a?c():f()})}));return{destroy:()=>{F(),B()}}}}),nt=ft(gt("portalled"),{stores:e,returned:l=>({"data-portal":Wt(l)}),action:l=>{const c=ht([e],([f])=>{if(f===null)return vt;const B=Zt(l,f);return B===null?vt:$t(l,B).destroy});return{destroy(){c()}}}}),at=ft(gt("title"),{stores:[P.title],returned:([l])=>({id:l})}),Y=ft(gt("description"),{stores:[P.description],returned:([l])=>({id:l})}),p=ft(gt("close"),{returned:()=>({type:"button"}),action:l=>({destroy:wt(Tt(l,"click",()=>{D()}),Tt(l,"keydown",f=>{f.key!==kt.SPACE&&f.key!==kt.ENTER||(f.preventDefault(),D())}))})});return ht([s,C],([l,c])=>{if(Xt){if(c&&l&&(F=oe()),l){const f=document.getElementById(P.content.get());zt({prop:K.get(),defaultEl:f})}return()=>{E.get()||F()}}}),{ids:P,elements:{content:dt,trigger:U,title:at,description:Y,overlay:et,close:p,portalled:nt},states:{open:s},options:T}}function Rt(){return{NAME:"dialog",PARTS:["close","content","description","overlay","portal","title","trigger"]}}function ue(O){const{NAME:t,PARTS:T}=Rt(),C=ie(t,T),b={...de({...se(O),role:"dialog",forceVisible:!0}),getAttrs:C};return Ht(t,b),{...b,updateOption:re(b.options)}}function Ot(){const{NAME:O}=Rt();return Kt(O)}function fe(O,t){lt(t,!1);const T=mt(),C=()=>ut(r,"$idValues",T);let b=h(t,"preventScroll",24,()=>{}),y=h(t,"closeOnEscape",24,()=>{}),n=h(t,"closeOnOutsideClick",24,()=>{}),e=h(t,"portal",24,()=>{}),E=h(t,"open",28,()=>{}),K=h(t,"onOpenChange",24,()=>{}),A=h(t,"openFocus",24,()=>{}),z=h(t,"closeFocus",24,()=>{}),w=h(t,"onOutsideClick",24,()=>{});const{states:{open:P},updateOption:S,ids:s}=ue({closeOnEscape:y(),preventScroll:b(),closeOnOutsideClick:n(),portal:e(),forceVisible:!0,defaultOpen:E(),openFocus:A(),closeFocus:z(),onOutsideClick:w(),onOpenChange:({next:D})=>{var U;return E()!==D&&((U=K())==null||U(D),E(D)),D}}),r=It([s.content,s.description,s.title],([D,U,et])=>({content:D,description:U,title:et}));N(()=>ot(E()),()=>{E()!==void 0&&P.set(E())}),N(()=>ot(b()),()=>{S("preventScroll",b())}),N(()=>ot(y()),()=>{S("closeOnEscape",y())}),N(()=>ot(n()),()=>{S("closeOnOutsideClick",n())}),N(()=>ot(e()),()=>{S("portal",e())}),N(()=>ot(A()),()=>{S("openFocus",A())}),N(()=>ot(z()),()=>{S("closeFocus",z())}),N(()=>ot(w()),()=>{S("onOutsideClick",w())}),bt(),rt();var F=x(),j=k(F);V(j,t,"default",{get ids(){return C()}}),_(O,F),ct()}var ve=H("<button><!></button>");function Vt(O,t){const T=M(t,["children","$$slots","$$events","$$legacy"]),C=M(T,["asChild","el"]);lt(t,!1);const b=mt(),y=()=>ut(K,"$close",b),n=Ct();let e=h(t,"asChild",8,!1),E=h(t,"el",28,()=>{});const{elements:{close:K},getAttrs:A}=Ot(),z=jt(),w=A("close");N(()=>y(),()=>{yt(n,y())}),N(()=>i(n),()=>{Object.assign(i(n),w)}),bt(),rt();var P=x(),S=k(P);L(S,e,s=>{var r=x(),F=k(r);V(F,t,"default",{get builder(){return i(n)}}),_(s,r)},s=>{var r=ve();let F;var j=it(r);V(j,t,"default",{get builder(){return i(n)}}),st(r),Q(r,D=>E(D),()=>E()),J(r,D=>i(n).action(D)),u(()=>d("m-click",r,z)),u(()=>d("m-keydown",r,z)),W(()=>F=X(r,F,{...i(n),type:"button",...C})),_(s,r)}),_(O,P),ct()}var ge=H("<div><!></div>");function _e(O,t){const T=M(t,["children","$$slots","$$events","$$legacy"]),C=M(T,["asChild","el"]);lt(t,!1);const b=mt(),y=()=>ut(K,"$portalled",b),n=Ct();let e=h(t,"asChild",8,!1),E=h(t,"el",28,()=>{});const{elements:{portalled:K},getAttrs:A}=Ot(),z=A("portal");N(()=>y(),()=>{yt(n,y())}),N(()=>i(n),()=>{Object.assign(i(n),z)}),bt(),rt();var w=x(),P=k(w);L(P,e,S=>{var s=x(),r=k(s);V(r,t,"default",{get builder(){return i(n)}}),_(S,s)},S=>{var s=ge();let r;var F=it(s);V(F,t,"default",{get builder(){return i(n)}}),st(s),Q(s,j=>E(j),()=>E()),J(s,j=>i(n).action(j)),W(()=>r=X(s,r,{...i(n),...C})),_(S,s)}),_(O,w),ct()}var he=H("<div><!></div>"),me=H("<div><!></div>"),be=H("<div><!></div>"),Ce=H("<div><!></div>"),ye=H("<div><!></div>");function Oe(O,t){const T=M(t,["children","$$slots","$$events","$$legacy"]),C=M(T,["transition","transitionConfig","inTransition","inTransitionConfig","outTransition","outTransitionConfig","asChild","id","el"]);lt(t,!1);const b=mt(),y=()=>ut(F,"$content",b),n=()=>ut(j,"$open",b),e=Ct();let E=h(t,"transition",24,()=>{}),K=h(t,"transitionConfig",24,()=>{}),A=h(t,"inTransition",24,()=>{}),z=h(t,"inTransitionConfig",24,()=>{}),w=h(t,"outTransition",24,()=>{}),P=h(t,"outTransitionConfig",24,()=>{}),S=h(t,"asChild",8,!1),s=h(t,"id",24,()=>{}),r=h(t,"el",28,()=>{});const{elements:{content:F},states:{open:j},ids:D,getAttrs:U}=Ot(),et=U("content");N(()=>ot(s()),()=>{s()&&D.content.set(s())}),N(()=>y(),()=>{yt(e,y())}),N(()=>i(e),()=>{Object.assign(i(e),et)}),bt(),rt();var dt=x(),nt=k(dt);L(nt,()=>S()&&n(),at=>{var Y=x(),p=k(Y);V(p,t,"default",{get builder(){return i(e)}}),_(at,Y)},at=>{var Y=x(),p=k(Y);L(p,()=>E()&&n(),l=>{var c=he();let f;var B=it(c);V(B,t,"default",{get builder(){return i(e)}}),st(c),Q(c,a=>r(a),()=>r()),J(c,a=>i(e).action(a)),u(()=>d("pointerdown",c,function(a){g.call(this,t,a)})),u(()=>d("pointermove",c,function(a){g.call(this,t,a)})),u(()=>d("pointerup",c,function(a){g.call(this,t,a)})),u(()=>d("touchcancel",c,function(a){g.call(this,t,a)})),u(()=>d("touchend",c,function(a){g.call(this,t,a)})),u(()=>d("touchmove",c,function(a){g.call(this,t,a)},void 0,!1)),u(()=>d("touchstart",c,function(a){g.call(this,t,a)},void 0,!1)),W(()=>f=X(c,f,{...i(e),...C})),tt(3,c,E,K),_(l,c)},l=>{var c=x(),f=k(c);L(f,()=>A()&&w()&&n(),B=>{var a=me();let I;var q=it(a);V(q,t,"default",{get builder(){return i(e)}}),st(a),Q(a,o=>r(o),()=>r()),J(a,o=>i(e).action(o)),u(()=>d("pointerdown",a,function(o){g.call(this,t,o)})),u(()=>d("pointermove",a,function(o){g.call(this,t,o)})),u(()=>d("pointerup",a,function(o){g.call(this,t,o)})),u(()=>d("touchcancel",a,function(o){g.call(this,t,o)})),u(()=>d("touchend",a,function(o){g.call(this,t,o)})),u(()=>d("touchmove",a,function(o){g.call(this,t,o)},void 0,!1)),u(()=>d("touchstart",a,function(o){g.call(this,t,o)},void 0,!1)),W(()=>I=X(a,I,{...i(e),...C})),tt(1,a,A,z),tt(2,a,w,P),_(B,a)},B=>{var a=x(),I=k(a);L(I,()=>A()&&n(),q=>{var o=be();let R;var Z=it(o);V(Z,t,"default",{get builder(){return i(e)}}),st(o),Q(o,v=>r(v),()=>r()),J(o,v=>i(e).action(v)),u(()=>d("pointerdown",o,function(v){g.call(this,t,v)})),u(()=>d("pointermove",o,function(v){g.call(this,t,v)})),u(()=>d("pointerup",o,function(v){g.call(this,t,v)})),u(()=>d("touchcancel",o,function(v){g.call(this,t,v)})),u(()=>d("touchend",o,function(v){g.call(this,t,v)})),u(()=>d("touchmove",o,function(v){g.call(this,t,v)},void 0,!1)),u(()=>d("touchstart",o,function(v){g.call(this,t,v)},void 0,!1)),W(()=>R=X(o,R,{...i(e),...C})),tt(1,o,A,z),_(q,o)},q=>{var o=x(),R=k(o);L(R,()=>w()&&n(),Z=>{var v=Ce();let $;var _t=it(v);V(_t,t,"default",{get builder(){return i(e)}}),st(v),Q(v,m=>r(m),()=>r()),J(v,m=>i(e).action(m)),u(()=>d("pointerdown",v,function(m){g.call(this,t,m)})),u(()=>d("pointermove",v,function(m){g.call(this,t,m)})),u(()=>d("pointerup",v,function(m){g.call(this,t,m)})),u(()=>d("touchcancel",v,function(m){g.call(this,t,m)})),u(()=>d("touchend",v,function(m){g.call(this,t,m)})),u(()=>d("touchmove",v,function(m){g.call(this,t,m)},void 0,!1)),u(()=>d("touchstart",v,function(m){g.call(this,t,m)},void 0,!1)),W(()=>$=X(v,$,{...i(e),...C})),tt(2,v,w,P),_(Z,v)},Z=>{var v=x(),$=k(v);L($,n,_t=>{var m=ye();let Dt;var Bt=it(m);V(Bt,t,"default",{get builder(){return i(e)}}),st(m),Q(m,G=>r(G),()=>r()),J(m,G=>i(e).action(G)),u(()=>d("pointerdown",m,function(G){g.call(this,t,G)})),u(()=>d("pointermove",m,function(G){g.call(this,t,G)})),u(()=>d("pointerup",m,function(G){g.call(this,t,G)})),u(()=>d("touchcancel",m,function(G){g.call(this,t,G)})),u(()=>d("touchend",m,function(G){g.call(this,t,G)})),u(()=>d("touchmove",m,function(G){g.call(this,t,G)},void 0,!1)),u(()=>d("touchstart",m,function(G){g.call(this,t,G)},void 0,!1)),W(()=>Dt=X(m,Dt,{...i(e),...C})),_(_t,m)},null,!0),_(Z,v)},!0),_(q,o)},!0),_(B,a)},!0),_(l,c)},!0),_(at,Y)}),_(O,dt),ct()}var Te=H("<div></div>"),ke=H("<div></div>"),Ee=H("<div></div>"),we=H("<div></div>"),Pe=H("<div></div>");function De(O,t){const T=M(t,["children","$$slots","$$events","$$legacy"]),C=M(T,["transition","transitionConfig","inTransition","inTransitionConfig","outTransition","outTransitionConfig","asChild","el"]);lt(t,!1);const b=mt(),y=()=>ut(r,"$overlay",b),n=()=>ut(F,"$open",b),e=Ct();let E=h(t,"transition",24,()=>{}),K=h(t,"transitionConfig",24,()=>{}),A=h(t,"inTransition",24,()=>{}),z=h(t,"inTransitionConfig",24,()=>{}),w=h(t,"outTransition",24,()=>{}),P=h(t,"outTransitionConfig",24,()=>{}),S=h(t,"asChild",8,!1),s=h(t,"el",28,()=>{});const{elements:{overlay:r},states:{open:F},getAttrs:j}=Ot(),D=j("overlay");N(()=>y(),()=>{yt(e,y())}),N(()=>i(e),()=>{Object.assign(i(e),D)}),bt(),rt();var U=x(),et=k(U);L(et,()=>S()&&n(),dt=>{var nt=x(),at=k(nt);V(at,t,"default",{get builder(){return i(e)}}),_(dt,nt)},dt=>{var nt=x(),at=k(nt);L(at,()=>E()&&n(),Y=>{var p=Te();let l;u(()=>d("mouseup",p,function(c){g.call(this,t,c)})),Q(p,c=>s(c),()=>s()),J(p,c=>i(e).action(c)),W(()=>l=X(p,l,{...i(e),...C})),tt(3,p,E,K),_(Y,p)},Y=>{var p=x(),l=k(p);L(l,()=>A()&&w()&&n(),c=>{var f=ke();let B;Q(f,a=>s(a),()=>s()),J(f,a=>i(e).action(a)),u(()=>d("mouseup",f,function(a){g.call(this,t,a)})),W(()=>B=X(f,B,{...i(e),...C})),tt(1,f,A,z),tt(2,f,w,P),_(c,f)},c=>{var f=x(),B=k(f);L(B,()=>A()&&n(),a=>{var I=Ee();let q;Q(I,o=>s(o),()=>s()),J(I,o=>i(e).action(o)),u(()=>d("mouseup",I,function(o){g.call(this,t,o)})),W(()=>q=X(I,q,{...i(e),...C})),tt(1,I,A,z),_(a,I)},a=>{var I=x(),q=k(I);L(q,()=>w()&&n(),o=>{var R=we();let Z;Q(R,v=>s(v),()=>s()),J(R,v=>i(e).action(v)),u(()=>d("mouseup",R,function(v){g.call(this,t,v)})),W(()=>Z=X(R,Z,{...i(e),...C})),tt(2,R,w,P),_(o,R)},o=>{var R=x(),Z=k(R);L(Z,n,v=>{var $=Pe();let _t;Q($,m=>s(m),()=>s()),J($,m=>i(e).action(m)),u(()=>d("mouseup",$,function(m){g.call(this,t,m)})),W(()=>_t=X($,_t,{...i(e),...C})),_(v,$)},null,!0),_(o,R)},!0),_(a,I)},!0),_(c,f)},!0),_(Y,p)},!0),_(dt,nt)}),_(O,U),ct()}var Ae=H("<button><!></button>");function Fe(O,t){const T=M(t,["children","$$slots","$$events","$$legacy"]),C=M(T,["asChild","el"]);lt(t,!1);const b=mt(),y=()=>ut(K,"$trigger",b),n=Ct();let e=h(t,"asChild",8,!1),E=h(t,"el",28,()=>{});const{elements:{trigger:K},getAttrs:A}=Ot(),z=jt(),w=A("trigger");N(()=>y(),()=>{yt(n,y())}),N(()=>i(n),()=>{Object.assign(i(n),w)}),bt(),rt();var P=x(),S=k(P);L(S,e,s=>{var r=x(),F=k(r);V(F,t,"default",{get builder(){return i(n)}}),_(s,r)},s=>{var r=Ae();let F;var j=it(r);V(j,t,"default",{get builder(){return i(n)}}),st(r),Q(r,D=>E(D),()=>E()),J(r,D=>i(n).action(D)),u(()=>d("m-click",r,z)),u(()=>d("m-keydown",r,z)),W(()=>F=X(r,F,{...i(n),type:"button",...C})),_(s,r)}),_(O,P),ct()}function xe(O,t){const T=M(t,["children","$$slots","$$events","$$legacy"]),C=M(T,[]);_e(O,Et(()=>C,{children:(b,y)=>{var n=x(),e=k(n);V(e,t,"default",{}),_(b,n)},$$slots:{default:!0}}))}var Se=H("<div><!></div>");function Qe(O,t){const T=M(t,["children","$$slots","$$events","$$legacy"]),C=M(T,["class"]);lt(t,!1);let b=h(t,"class",8,void 0);rt();var y=Se();let n;var e=it(y);V(e,t,"default",{}),st(y),W(()=>n=X(y,n,{class:Pt("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",b()),...C})),_(O,y),ct()}const ze=O=>O;function Ne(O,{delay:t=0,duration:T=400,easing:C=ze}={}){const b=+getComputedStyle(O).opacity;return{delay:t,duration:T,easing:C,css:y=>`opacity: ${y*b}`}}function Me(O,t){const T=M(t,["children","$$slots","$$events","$$legacy"]),C=M(T,["class","transition","transitionConfig"]);lt(t,!1);let b=h(t,"class",8,void 0),y=h(t,"transition",8,Ne),n=h(t,"transitionConfig",24,()=>({duration:150}));rt();var e=Mt(()=>Pt("bg-background/80 fixed inset-0 z-50 backdrop-blur-sm",b()));De(O,Et({get transition(){return y()},get transitionConfig(){return n()},get class(){return i(e)}},()=>C)),ct()}function je(O,t){const T=M(t,["children","$$slots","$$events","$$legacy"]);te(O,Et({name:"x"},()=>T,{iconNode:[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]],children:(b,y)=>{var n=x(),e=k(n);V(e,t,"default",{}),_(b,n)},$$slots:{default:!0}}))}var Ie=H('<!> <span class="sr-only">Close</span>',1),Re=H("<!> <!>",1),Ve=H("<!> <!>",1);function Ye(O,t){const T=M(t,["children","$$slots","$$events","$$legacy"]),C=M(T,["class","transition","transitionConfig"]);lt(t,!1);let b=h(t,"class",8,void 0),y=h(t,"transition",8,Jt),n=h(t,"transitionConfig",24,()=>({duration:200}));rt(),xe(O,{children:(e,E)=>{var K=Ve(),A=k(K);Me(A,{});var z=At(A,2),w=Mt(()=>Pt("bg-background fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border p-6 shadow-lg sm:rounded-lg md:w-full",b()));Oe(z,Et({get transition(){return y()},get transitionConfig(){return n()},get class(){return i(w)}},()=>C,{children:(P,S)=>{var s=Re(),r=k(s);V(r,t,"default",{});var F=At(r,2);Vt(F,{class:"ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none",children:(j,D)=>{var U=Ie(),et=k(U);je(et,{class:"h-4 w-4"}),pt(2),_(j,U)},$$slots:{default:!0}}),_(P,s)},$$slots:{default:!0}})),_(e,K)},$$slots:{default:!0}}),ct()}const Ze=fe,$e=Fe,tn=Vt;export{tn as C,Ye as D,Ze as R,$e as T,Qe as a,Ot as g};
