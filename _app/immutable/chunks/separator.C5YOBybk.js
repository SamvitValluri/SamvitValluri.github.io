import{s as D,e as S,a as g,b as M,d as R}from"./disclose-version.Cfp-rwoP.js";import{i as y}from"./legacy.Ccq7PQRh.js";import{p as P,D as p,F as T,f as z,t as j,g as d,a as x,G as U,z as O,b as $,H as q}from"./utils.jAVDF0d8.js";import{l as m,p as c,i as B,b as F,s as G}from"./index-client.BSQKl7cS.js";import{m as H,j as W,a as I,b as J,c as K}from"./base.BHqxtSDW.js";import{t as L,c as Q,r as V,g as X}from"./stores.BlOUn0mk.js";const Y={orientation:"horizontal",decorative:!1},Z=a=>{const t={...Y,...a},o=L(t),{orientation:n,decorative:r}=o;return{elements:{root:H("separator",{stores:[n,r],returned:([e,s])=>({role:s?"none":"separator","aria-orientation":e==="vertical"?e:void 0,"aria-hidden":s,"data-orientation":e})})},options:o}};function tt(){return{NAME:"separator",PARTS:["root"]}}function et(a){const{NAME:t,PARTS:o}=tt(),n=Q(t,o),r={...Z(V(a)),getAttrs:n};return{...r,updateOption:X(r.options)}}var at=M("<div></div>");function ot(a,t){const o=m(t,["children","$$slots","$$events","$$legacy"]),n=m(o,["orientation","decorative","asChild","el"]);P(t,!1);const r=D(),l=()=>R(E,"$root",r),e=U();let s=c(t,"orientation",8,"horizontal"),f=c(t,"decorative",8,!0),C=c(t,"asChild",8,!1),h=c(t,"el",28,()=>{});const{elements:{root:E},updateOption:b,getAttrs:N}=et({orientation:s(),decorative:f()}),k=N("root");p(()=>O(s()),()=>{b("orientation",s())}),p(()=>O(f()),()=>{b("decorative",f())}),p(()=>l(),()=>{$(e,l())}),p(()=>d(e),()=>{Object.assign(d(e),k)}),T(),y();var A=S(),w=z(A);B(w,C,v=>{var i=S(),u=z(i);I(u,t,"default",{get builder(){return d(e)}}),g(v,i)},v=>{var i=at();let u;F(i,_=>h(_),()=>h()),W(i,_=>d(e).action(_)),j(()=>u=J(i,u,{...d(e),...n})),g(v,i)}),g(a,A),x()}function dt(a,t){const o=m(t,["children","$$slots","$$events","$$legacy"]),n=m(o,["class","orientation","decorative"]);P(t,!1);let r=c(t,"class",8,void 0),l=c(t,"orientation",8,"horizontal"),e=c(t,"decorative",8,void 0);y();var s=q(()=>K("bg-border shrink-0",l()==="horizontal"?"h-[1px] w-full":"min-h-full w-[1px]",r()));ot(a,G({get class(){return d(s)},get orientation(){return l()},get decorative(){return e()}},()=>n)),x()}export{dt as S,Z as c};
