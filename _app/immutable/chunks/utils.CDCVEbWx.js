var qn=Array.isArray,Pn=Array.from,Ln=Object.defineProperty,vt=Object.getOwnPropertyDescriptor,Jt=Object.getOwnPropertyDescriptors,Fn=Object.prototype,Mn=Array.prototype,Qt=Object.getPrototypeOf;function Hn(t){return typeof t=="function"}const tn=()=>{};function Yn(t){return t()}function yt(t){for(var n=0;n<t.length;n++)t[n]()}const m=2,wt=4,Y=8,et=16,w=32,X=64,O=128,V=256,p=512,g=1024,C=2048,D=4096,j=8192,nn=16384,Tt=32768,jn=65536,rn=1<<18,mt=1<<19,pt=Symbol("$state"),Un=Symbol("legacy props"),Bn=Symbol("");function At(t){return t===this.v}function en(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function It(t){return!en(t,this.v)}function sn(t){throw new Error("effect_in_teardown")}function an(){throw new Error("effect_in_unowned_derived")}function un(t){throw new Error("effect_orphan")}function ln(){throw new Error("effect_update_depth_exceeded")}function Vn(){throw new Error("hydration_failed")}function Gn(t){throw new Error("props_invalid_value")}function Kn(){throw new Error("state_descriptors_fixed")}function $n(){throw new Error("state_prototype_fixed")}function on(){throw new Error("state_unsafe_local_read")}function fn(){throw new Error("state_unsafe_mutation")}let Z=!1;function Wn(){Z=!0}function st(t){return{f:0,v:t,reactions:null,equals:At,version:0}}function Xn(t){return gt(st(t))}function _n(t,n=!1){var e;const r=st(t);return n||(r.equals=It),Z&&o!==null&&o.l!==null&&((e=o.l).s??(e.s=[])).push(r),r}function Zn(t,n=!1){return gt(_n(t,n))}function gt(t){return i!==null&&i.f&m&&(y===null?xn([t]):y.push(t)),t}function zn(t,n){return at(t,_t(()=>ft(t))),n}function at(t,n){return i!==null&&it()&&i.f&(m|et)&&(y===null||!y.includes(t))&&fn(),cn(t,n)}function cn(t,n){return t.equals(n)||(t.v=n,t.version=Gt(),St(t,g),it()&&l!==null&&l.f&p&&!(l.f&w)&&(_!==null&&_.includes(t)?(E(l,g),z(l)):I===null?On([t]):I.push(t))),n}function St(t,n){var r=t.reactions;if(r!==null)for(var e=it(),s=r.length,a=0;a<s;a++){var u=r[a],f=u.f;f&g||!e&&u===l||(E(u,n),f&(p|O)&&(f&m?St(u,C):z(u)))}}const Jn=1,Qn=2,tr=4,nr=8,rr=16,er=1,sr=2,ar=4,ur=8,lr=16,or=1,ir=2,fr=4,_r=1,cr=2,vn="[",pn="[!",hn="]",xt={},vr=Symbol(),pr="http://www.w3.org/2000/svg";function Ot(t){console.warn("hydration_mismatch")}let x=!1;function hr(t){x=t}let d;function F(t){if(t===null)throw Ot(),xt;return d=t}function dr(){return F(R(d))}function Er(t){if(x){if(R(d)!==null)throw Ot(),xt;d=t}}function yr(t=1){if(x){for(var n=t,r=d;n--;)r=R(r);d=r}}function wr(){for(var t=0,n=d;;){if(n.nodeType===8){var r=n.data;if(r===hn){if(t===0)return n;t-=1}else(r===vn||r===pn)&&(t+=1)}var e=R(n);n.remove(),n=e}}var ht,dn,Rt,Nt;function Tr(){if(ht===void 0){ht=window,dn=document;var t=Element.prototype,n=Node.prototype;Rt=vt(n,"firstChild").get,Nt=vt(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function J(t=""){return document.createTextNode(t)}function Q(t){return Rt.call(t)}function R(t){return Nt.call(t)}function mr(t,n){if(!x)return Q(t);var r=Q(d);if(r===null)r=d.appendChild(J());else if(n&&r.nodeType!==3){var e=J();return r==null||r.before(e),F(e),e}return F(r),r}function Ar(t,n){if(!x){var r=Q(t);return r instanceof Comment&&r.data===""?R(r):r}return d}function Ir(t,n=1,r=!1){let e=x?d:t;for(;n--;)e=R(e);if(!x)return e;var s=e.nodeType;if(r&&s!==3){var a=J();return e==null||e.before(a),F(a),a}return F(e),e}function gr(t){t.textContent=""}function En(t){var n=m|g;l===null?n|=O:l.f|=mt;const r={children:null,ctx:o,deps:null,equals:At,f:n,fn:t,reactions:null,v:null,version:0,parent:l};if(i!==null&&i.f&m){var e=i;(e.children??(e.children=[])).push(r)}return r}function Sr(t){const n=En(t);return n.equals=It,n}function kt(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&m?ut(e):P(e)}}}function bt(t){var n,r=l;W(t.parent);try{kt(t),n=Kt(t)}finally{W(r)}return n}function Dt(t){var n=bt(t),r=(N||t.f&O)&&t.deps!==null?C:p;E(t,r),t.equals(n)||(t.v=n,t.version=Gt())}function ut(t){kt(t),H(t,0),E(t,j),t.v=t.children=t.deps=t.ctx=t.reactions=null}function Ct(t){l===null&&i===null&&un(),i!==null&&i.f&O&&an(),ot&&sn()}function yn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function q(t,n,r,e=!0){var s=(t&X)!==0,a=l,u={ctx:o,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|g,first:null,fn:n,last:null,next:null,parent:s?null:a,prev:null,teardown:null,transitions:null,version:0};if(r){var f=k;try{dt(!0),U(u),u.f|=nn}catch(c){throw P(u),c}finally{dt(f)}}else n!==null&&z(u);var T=r&&u.deps===null&&u.first===null&&u.nodes_start===null&&u.teardown===null&&(u.f&mt)===0;if(!T&&!s&&e&&(a!==null&&yn(u,a),i!==null&&i.f&m)){var A=i;(A.children??(A.children=[])).push(u)}return u}function xr(t){const n=q(Y,null,!1);return E(n,p),n.teardown=t,n}function Or(t){Ct();var n=l!==null&&(l.f&w)!==0&&o!==null&&!o.m;if(n){var r=o;(r.e??(r.e=[])).push({fn:t,effect:l,reaction:i})}else{var e=qt(t);return e}}function Rr(t){return Ct(),lt(t)}function Nr(t){const n=q(X,t,!0);return()=>{P(n)}}function qt(t){return q(wt,t,!1)}function kr(t,n){var r=o,e={effect:null,ran:!1};r.l.r1.push(e),e.effect=lt(()=>{t(),!e.ran&&(e.ran=!0,at(r.l.r2,!0),_t(n))})}function br(){var t=o;lt(()=>{if(ft(t.l.r2)){for(var n of t.l.r1){var r=n.effect;r.f&p&&E(r,C),L(r)&&U(r),n.ran=!1}t.l.r2.v=!1}})}function lt(t){return q(Y,t,!0)}function Dr(t){return wn(t)}function wn(t,n=0){return q(Y|et|n,t,!0)}function Cr(t,n=!0){return q(Y|w,t,!0,n)}function Pt(t){var n=t.teardown;if(n!==null){const r=ot,e=i;Et(!0),$(null);try{n.call(null)}finally{Et(r),$(e)}}}function Lt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)ut(n[r])}}function Ft(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;P(r,n),r=e}}function Tn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&w||P(n),n=r}}function P(t,n=!0){var r=!1;if((n||t.f&rn)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var a=e===s?null:R(e);e.remove(),e=a}r=!0}Ft(t,n&&!r),Lt(t),H(t,0),E(t,j);var u=t.transitions;if(u!==null)for(const T of u)T.stop();Pt(t);var f=t.parent;f!==null&&f.first!==null&&Mt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.parent=t.fn=t.nodes_start=t.nodes_end=null}function Mt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function qr(t,n){var r=[];Ht(t,r,!0),mn(r,()=>{P(t),n&&n()})}function mn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function Ht(t,n,r){if(!(t.f&D)){if(t.f^=D,t.transitions!==null)for(const u of t.transitions)(u.is_global||r)&&n.push(u);for(var e=t.first;e!==null;){var s=e.next,a=(e.f&Tt)!==0||(e.f&w)!==0;Ht(e,n,a?r:!1),e=s}}}function Pr(t){Yt(t,!0)}function Yt(t,n){if(t.f&D){L(t)&&U(t),t.f^=D;for(var r=t.first;r!==null;){var e=r.next,s=(r.f&Tt)!==0||(r.f&w)!==0;Yt(r,s?n:!1),r=e}if(t.transitions!==null)for(const a of t.transitions)(a.is_global||n)&&a.in()}}const An=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let G=!1,K=!1,tt=[],nt=[];function jt(){G=!1;const t=tt.slice();tt=[],yt(t)}function Ut(){K=!1;const t=nt.slice();nt=[],yt(t)}function Lr(t){G||(G=!0,queueMicrotask(jt)),tt.push(t)}function Fr(t){K||(K=!0,An(Ut)),nt.push(t)}function In(){G&&jt(),K&&Ut()}function gn(t){throw new Error("lifecycle_outside_component")}const Bt=0,Sn=1;let B=Bt,M=!1,k=!1,ot=!1;function dt(t){k=t}function Et(t){ot=t}let S=[],b=0;let i=null;function $(t){i=t}let l=null;function W(t){l=t}let y=null;function xn(t){y=t}let _=null,h=0,I=null;function On(t){I=t}let Vt=0,N=!1,o=null;function Gt(){return++Vt}function it(){return!Z||o!==null&&o.l===null}function L(t){var u,f;var n=t.f;if(n&g)return!0;if(n&C){var r=t.deps,e=(n&O)!==0;if(r!==null){var s;if(n&V){for(s=0;s<r.length;s++)((u=r[s]).reactions??(u.reactions=[])).push(t);t.f^=V}for(s=0;s<r.length;s++){var a=r[s];if(L(a)&&Dt(a),e&&l!==null&&!N&&!((f=a==null?void 0:a.reactions)!=null&&f.includes(t))&&(a.reactions??(a.reactions=[])).push(t),a.version>t.version)return!0}}e||E(t,p)}return!1}function Rn(t,n,r){throw t}function Kt(t){var ct;var n=_,r=h,e=I,s=i,a=N,u=y,f=o,T=t.f;_=null,h=0,I=null,i=T&(w|X)?null:t,N=!k&&(T&O)!==0,y=null,o=t.ctx;try{var A=(0,t.fn)(),c=t.deps;if(_!==null){var v;if(H(t,h),c!==null&&h>0)for(c.length=h+_.length,v=0;v<_.length;v++)c[h+v]=_[v];else t.deps=c=_;if(!N)for(v=h;v<c.length;v++)((ct=c[v]).reactions??(ct.reactions=[])).push(t)}else c!==null&&h<c.length&&(H(t,h),c.length=h);return A}finally{_=n,h=r,I=e,i=s,N=a,y=u,o=f}}function Nn(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&m&&(_===null||!_.includes(n))&&(E(n,C),n.f&(O|V)||(n.f^=V),H(n,0))}function H(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)Nn(t,r[e])}function U(t){var n=t.f;if(!(n&j)){E(t,p);var r=l;l=t;try{n&et?Tn(t):Ft(t),Lt(t),Pt(t);var e=Kt(t);t.teardown=typeof e=="function"?e:null,t.version=Vt}catch(s){Rn(s)}finally{l=r}}}function $t(){b>1e3&&(b=0,ln()),b++}function Wt(t){var n=t.length;if(n!==0){$t();var r=k;k=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&p||(s.f^=p);var a=[];Xt(s,a),kn(a)}}finally{k=r}}}function kn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];!(e.f&(j|D))&&L(e)&&(U(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Mt(e):e.fn=null))}}function bn(){if(M=!1,b>1001)return;const t=S;S=[],Wt(t),M||(b=0)}function z(t){B===Bt&&(M||(M=!0,queueMicrotask(bn)));for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(X|w)){if(!(r&p))return;n.f^=p}}S.push(n)}function Xt(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,a=(s&w)!==0,u=a&&(s&p)!==0;if(!u&&!(s&D))if(s&Y){a?r.f^=p:L(r)&&U(r);var f=r.first;if(f!==null){r=f;continue}}else s&wt&&e.push(r);var T=r.next;if(T===null){let v=r.parent;for(;v!==null;){if(t===v)break t;var A=v.next;if(A!==null){r=A;continue t}v=v.parent}}r=T}for(var c=0;c<e.length;c++)f=e[c],n.push(f),Xt(f,n)}function Zt(t){var n=B,r=S;try{$t();const s=[];B=Sn,S=s,M=!1,Wt(r);var e=t==null?void 0:t();return In(),(S.length>0||s.length>0)&&Zt(),b=0,e}finally{B=n,S=r}}async function Mr(){await Promise.resolve(),Zt()}function ft(t){var f;var n=t.f,r=(n&m)!==0;if(r&&n&j){var e=bt(t);return ut(t),e}if(i!==null){y!==null&&y.includes(t)&&on();var s=i.deps;_===null&&s!==null&&s[h]===t?h++:_===null?_=[t]:_.push(t),I!==null&&l!==null&&l.f&p&&!(l.f&w)&&I.includes(t)&&(E(l,g),z(l))}else if(r&&t.deps===null){var a=t,u=a.parent;u!==null&&!((f=u.deriveds)!=null&&f.includes(a))&&(u.deriveds??(u.deriveds=[])).push(a)}return r&&(a=t,L(a)&&Dt(a)),t.v}function _t(t){const n=i;try{return i=null,t()}finally{i=n}}const Dn=~(g|C|p);function E(t,n){t.f=t.f&Dn|n}function Hr(t){return zt().get(t)}function Yr(t,n){return zt().set(t,n),n}function zt(t){return o===null&&gn(),o.c??(o.c=new Map(Cn(o)||void 0))}function Cn(t){let n=t.p;for(;n!==null;){const r=n.c;if(r!==null)return r;n=n.p}return null}function jr(t,n=1){var r=+ft(t);return at(t,r+n),r}function Ur(t,n=!1,r){o={p:o,c:null,e:null,m:!1,s:t,x:null,l:null},Z&&!n&&(o.l={s:null,u:null,r1:[],r2:st(!1)})}function Br(t){const n=o;if(n!==null){const u=n.e;if(u!==null){var r=l,e=i;n.e=null;try{for(var s=0;s<u.length;s++){var a=u[s];W(a.effect),$(a.reaction),qt(a.fn)}}finally{W(r),$(e)}}o=n.p,n.m=!0}return{}}function Vr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(pt in t)rt(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&pt in r&&rt(r)}}}function rt(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{rt(t[e],n)}catch{}const r=Qt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Jt(r);for(let s in e){const a=e[s].get;if(a)try{a.call(t)}catch{}}}}}function Gr(t,n,r){if(t==null)return n(void 0),r&&r(void 0),tn;const e=_t(()=>t.subscribe(n,r));return e.unsubscribe?()=>e.unsubscribe():e}export{dn as $,Wn as A,Gr as B,en as C,kr as D,Tt as E,br as F,Zn as G,Sr as H,Fn as I,Mn as J,st as K,Kn as L,vt as M,pr as N,l as O,$n as P,Qt as Q,Pr as R,pt as S,qr as T,vr as U,dr as V,pn as W,wr as X,F as Y,hr as Z,qt as _,Br as a,lt as a0,Lr as a1,Gn as a2,jn as a3,ar as a4,It as a5,jr as a6,Hn as a7,Un as a8,w as a9,cn as aA,Qn as aB,Ht as aC,gr as aD,mn as aE,tr as aF,Q as aG,hn as aH,nr as aI,rr as aJ,R as aK,Ot as aL,xt as aM,xr as aN,rn as aO,vn as aP,_r as aQ,cr as aR,Tr as aS,Vn as aT,Nr as aU,zn as aV,Fr as aW,Jt as aX,Bn as aY,X as aa,W as ab,er as ac,Z as ad,sr as ae,ur as af,lr as ag,_n as ah,gn as ai,Zt as aj,Ln as ak,Mr as al,Yr as am,Hr as an,et as ao,nn as ap,or as aq,ir as ar,fr as as,$ as at,i as au,it as av,J as aw,Pn as ax,D as ay,Jn as az,at as b,mr as c,En as d,Xn as e,Ar as f,ft as g,wn as h,qn as i,Cr as j,tn as k,P as l,x as m,yr as n,d as o,Ur as p,Or as q,Er as r,Ir as s,Dr as t,Rr as u,o as v,_t as w,Yn as x,yt as y,Vr as z};