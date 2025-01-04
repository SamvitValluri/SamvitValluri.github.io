import{l as ye,f as u,a as y,b as R,e as T}from"./disclose-version.B9DIXXxg.js";import{aw as ve,a0 as pe,m as Ee,p as w,t as S,a as C,q as X,b as G,f as I,g,e as j,s as De,c as Z,r as $,N as ee,k as we,d as B}from"./utils.7ruNgmf0.js";import{s as te}from"./large.CLY3VhKc.js";import{l as p,p as h,o as Ce,a as K,b as Ae,r as Be}from"./index-client.kRHgN_Rl.js";import{i as Y}from"./legacy.BMaVEKmg.js";import{u as ke,b as H,c as M,a as re,f as ne}from"./base.DFEFUN3P.js";import{b as c}from"./misc.DEG8FepX.js";import{T as _e}from"./titled-page.DQiYby_x.js";function xe(e,t,l=t){var a=ve();ye(e,"input",()=>{var s=J(e)?Q(e.value):e.value;l(s),a&&s!==(s=t())&&(e.value=s??"")}),pe(()=>{var s=t();if(Ee&&e.defaultValue!==e.value){l(e.value);return}J(e)&&s===Q(e.value)||e.type==="date"&&!s&&!e.value||s!==e.value&&(e.value=s??"")})}function J(e){var t=e.type;return t==="number"||t==="range"}function Q(e){return e===""?null:+e}const m=(e,t,l)=>e<=t&&t<=l,v=e=>e.trim().length===0,k="hex",_="hsl",x="rgb",ae="unknown";function Pe(e,t,l,a=1){if(!m(0,e,360))throw'[Utils] Unexpected Input: "h" should be a number between 0 and 360';if(!m(0,l,100))throw'[Utils] Unexpected Input: "l" should be a number between 0 and 100';if(!m(0,t,100))throw'[Utils] Unexpected Input: "s" should be a number between 0 and 100';if(!m(0,a,1))throw'[Utils] Unexpected Input: "a" should be a number between 0 and 1';return`hsla(${e}deg ${t}% ${l}% / ${a})`}const Ie=/^hsl\((\d{1,3})(\.\d+){0,1}deg (\d{1,3})(\.\d+){0,1}% (\d{1,3})(\.\d+){0,1}%\)$/,Ue=/^hsla\((\d{1,3})(\.\d+){0,1}deg (\d{1,3})(\.\d+){0,1}% (\d{1,3})(\.\d+){0,1}%( \/ (\d{1,3})(\.\d+){0,1}){0,1}\)$/;function se(e){return v(e)?!1:Ie.test(e)}function le(e){return v(e)?!1:Ue.test(e)}function U(e){if(le(e))return e.slice(5,-1).replace("%","").replace("deg","").replace("/","").replace("  "," ").split(" ").map(t=>parseFloat(t.trim()));if(se(e))return e.slice(4,-1).replace("%","").replace("deg","").replace("/","").split(" ").map(t=>parseFloat(t.trim()));throw"[Utils] Unexpected Input: (color) is not of a HSL/HSLA form."}function Re(e){if(v(e))return!1;if(se(e)){const[t,l,a]=U(e);return!(360<t||t<0||100<l||l<0||100<a||a<0)}else if(le(e)){const[t,l,a,s]=U(e);return!(360<t||t<0||100<l||l<0||100<a||a<0||s!==void 0&&(1<s||s<0))}return!1}function Se(e,t,l){t/=100,l/=100,e=e%360;const a=(1-Math.abs(2*l-1))*t,s=a*(1-Math.abs(e/60%2-1)),n=l-a/2;let i=0,r=0,d=0;return 0<=e&&e<60?(i=a,r=s,d=0):60<=e&&e<120?(i=s,r=a,d=0):120<=e&&e<180?(i=0,r=a,d=s):180<=e&&e<240?(i=0,r=s,d=a):240<=e&&e<300?(i=s,r=0,d=a):300<=e&&e<360&&(i=a,r=0,d=s),i=Math.round((i+n)*255),r=Math.round((r+n)*255),d=Math.round((d+n)*255),[i,r,d]}function He(e,t,l){e/=255,t/=255,l/=255;const a=Math.min(e,t,l),s=Math.max(e,t,l),n=s-a;let i=0,r=0,d=0;return n==0?i=0:s==e?i=(t-l)/n%6:s==t?i=(l-e)/n+2:i=(e-t)/n+4,i=Math.round(i*60),i<0&&(i+=360),d=(s+a)/2,r=n==0?0:n/(1-Math.abs(2*d-1)),r=+(r*100).toFixed(2),d=+(d*100).toFixed(2),[P(i),P(r),P(d)]}function ie(e){return de(e)?k:Re(e)?_:Ge(e)?x:ae}function Me(e,t,l,a=1){function s(n){const i=Math.round(n).toString(16);return i.length==1?"0"+i:i}return"#"+s(e)+s(t)+s(l)+s(a*255)}const P=e=>Math.round(e*100)/100;function oe(e,t){const l=ie(e);if(l===ae||![k,_,x].includes(t)||t===l)return e;let[a,s,n,i]=[0,0,0,1];if(l===k){const r=e.substring(1),d=r.length;d===3?(a=parseInt(r[0]+r[0],16),s=parseInt(r[1]+r[1],16),n=parseInt(r[2]+r[2],16)):d>=6&&(a=parseInt(r.substring(0,2),16),s=parseInt(r.substring(2,4),16),n=parseInt(r.substring(4,6),16),d===8&&(i=P(parseInt(r.substring(6),16)/256)))}else if(l===_){const[r,d,o,f]=U(e);f!==void 0&&(i=f),[a,s,n]=Se(r,d,o)}else if(l===x){const[r,d,o,f]=z(e);f!==void 0&&(i=f),[a,s,n]=[r,d,o]}if(t===x)return`rgba(${a},${s},${n},${i})`;if(t===_){const[r,d,o]=He(a,s,n);return`hsla(${r}deg ${d}% ${o}% / ${i})`}else if(t===k)return Me(a,s,n,i);return e}function de(e){if(v(e))return!1;const t=/^#[0-9|a|A|b|B|c|C|d|D|e|E|f|F]{3}$/,l=/^#[0-9|a|A|b|B|c|C|d|D|e|E|f|F]{6}$/,a=/^#[0-9|a|A|b|B|c|C|d|D|e|E|f|F]{8}$/;return t.test(e)||l.test(e)||a.test(e)}const qe=/^rgb\((\d{1,3})(\.\d+){0,1},( ){0,1}(\d{1,3})(\.\d+){0,1},( ){0,1}(\d{1,3})(\.\d+){0,1}\)$/,Ne=/^rgba\((\d{1,3})(\.\d+){0,1},( ){0,1}(\d{1,3})(\.\d+){0,1},( ){0,1}(\d{1,3})(\.\d+){0,1}(,( ){0,1}(\d{1})(\.\d+){0,1}){0,1}\)$/;function ue(e){return v(e)?!1:qe.test(e)}function ce(e){return v(e)?!1:Ne.test(e)}function z(e){if(ce(e))return e.slice(5,-1).split(",").map(t=>parseFloat(t.trim()));if(ue(e))return e.slice(4,-1).split(",").map(t=>parseFloat(t.trim()));throw"[Utils] Unexpected Input: (color) is not of a RGB/RGBA form."}function Ge(e){if(v(e))return!1;if(ue(e)){const[t,l,a]=z(e);for(const s of[t,l,a])if(!m(0,s,256))return!1;return!0}else if(ce(e)){const[t,l,a,s]=z(e);for(const n of[t,l,a])if(!m(0,n,256))return!1;return!(s!==void 0&&!m(0,s,1))}return!1}function Le(e){const t=oe(e,"hsl");if(ie(t)==="unknown")throw"[Utils] Unexpected Input: unable to specify (color) type, maybe it is badly formatted ?";return t}function L(e,t,l){const a=Le(e);if(!m(0,t,1))throw"[Utils] Unexpected Input: opacity should be a number between 0 and 1";const[s,n,i]=U(a);return oe(Pe(s,n,i,t),"hex")}var Te=R("<input>");function Xe(e,t){const l=p(t,["children","$$slots","$$events","$$legacy"]),a=p(l,["class","value","readonly"]);w(t,!1);let s=h(t,"class",8,void 0),n=h(t,"value",12,void 0),i=h(t,"readonly",8,void 0);Y();var r=Te();ke(r);let d;S(()=>d=H(r,d,{class:M("border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",s()),readonly:i(),...a})),xe(r,n),u("blur",r,function(o){c.call(this,t,o)}),u("change",r,function(o){c.call(this,t,o)}),u("click",r,function(o){c.call(this,t,o)}),u("focus",r,function(o){c.call(this,t,o)}),u("focusin",r,function(o){c.call(this,t,o)}),u("focusout",r,function(o){c.call(this,t,o)}),u("keydown",r,function(o){c.call(this,t,o)}),u("keypress",r,function(o){c.call(this,t,o)}),u("keyup",r,function(o){c.call(this,t,o)}),u("mouseover",r,function(o){c.call(this,t,o)}),u("mouseenter",r,function(o){c.call(this,t,o)}),u("mouseleave",r,function(o){c.call(this,t,o)}),u("mousemove",r,function(o){c.call(this,t,o)}),u("paste",r,function(o){c.call(this,t,o)}),u("input",r,function(o){c.call(this,t,o)}),u("wheel",r,function(o){c.call(this,t,o)},void 0,!0),y(e,r),C()}var ze=R("<!> <!>",1);function tt(e,t){w(t,!0);let l=h(t,"title",3,"Untitled"),a=j(""),s=j(!1);X(()=>{if(g(s)){let n=new URLSearchParams(window.location.search);n.set("q",g(a));const i=`${window.location.protocol}//${window.location.host}${window.location.pathname}?${n.toString()}`,r=window.history.state;window.history.replaceState(r,"",i),t.onSearch(g(a))}}),Ce(()=>{let n=new URLSearchParams(window.location.search);G(a,K(n.get("q")??"")),G(s,!0)}),_e(e,{get title(){return l()},children:(n,i)=>{var r=ze(),d=I(r);Xe(d,{placeholder:"Search...",get value(){return g(a)},set value(f){G(a,K(f))}});var o=De(d,2);te(o,()=>t.children),y(n,r)},$$slots:{default:!0}}),C()}var Oe=R("<div><!></div>");function rt(e,t){const l=p(t,["children","$$slots","$$events","$$legacy"]),a=p(l,["class"]);w(t,!1);let s=h(t,"class",8,void 0);Y();var n=Oe();let i;var r=Z(n);re(r,t,"default",{}),$(n),S(()=>i=H(n,i,{class:M("p-6",s()),...a})),y(e,n),C()}function nt(e,t){const l=p(t,["children","$$slots","$$events","$$legacy"]),a=p(l,["class","tag"]);w(t,!1);let s=h(t,"class",8,void 0),n=h(t,"tag",8,"h3");Y();var i=T(),r=I(i);ne(r,n,!1,(d,o)=>{let f;S(()=>f=H(d,f,{class:M("text-lg font-semibold leading-none tracking-tight",s()),...a},void 0,d.namespaceURI===ee,d.nodeName.includes("-")));var E=T(),q=I(E);re(q,t,"default",{}),y(o,E)}),y(e,i),C()}const O={aliceblue:"#F0F8FF",antiquewhite:"#FAEBD7",aqua:"#00FFFF",aquamarine:"#7FFFD4",azure:"#F0FFFF",beige:"#F5F5DC",bisque:"#FFE4C4",black:"#000000",blanchedalmond:"#FFEBCD",blue:"#0000FF",blueviolet:"#8A2BE2",brown:"#A52A2A",burlywood:"#DEB887",cadetblue:"#5F9EA0",chartreuse:"#7FFF00",chocolate:"#D2691E",coral:"#FF7F50",cornflowerblue:"#6495ED",cornsilk:"#FFF8DC",crimson:"#DC143C",cyan:"#00FFFF",darkblue:"#00008B",darkcyan:"#008B8B",darkgoldenrod:"#B8860B",darkgray:"#A9A9A9",darkgreen:"#006400",darkgrey:"#A9A9A9",darkkhaki:"#BDB76B",darkmagenta:"#8B008B",darkolivegreen:"#556B2F",darkorange:"#FF8C00",darkorchid:"#9932CC",darkred:"#8B0000",darksalmon:"#E9967A",darkseagreen:"#8FBC8F",darkslateblue:"#483D8B",darkslategray:"#2F4F4F",darkslategrey:"#2F4F4F",darkturquoise:"#00CED1",darkviolet:"#9400D3",deeppink:"#FF1493",deepskyblue:"#00BFFF",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1E90FF",firebrick:"#B22222",floralwhite:"#FFFAF0",forestgreen:"#228B22",fuchsia:"#FF00FF",gainsboro:"#DCDCDC",ghostwhite:"#F8F8FF",gold:"#FFD700",goldenrod:"#DAA520",gray:"#808080",green:"#008000",greenyellow:"#ADFF2F",grey:"#808080",honeydew:"#F0FFF0",hotpink:"#FF69B4",indianred:"#CD5C5C",indigo:"#4B0082",ivory:"#FFFFF0",khaki:"#F0E68C",lavender:"#E6E6FA",lavenderblush:"#FFF0F5",lawngreen:"#7CFC00",lemonchiffon:"#FFFACD",lightblue:"#ADD8E6",lightcoral:"#F08080",lightcyan:"#E0FFFF",lightgoldenrodyellow:"#FAFAD2",lightgray:"#D3D3D3",lightgreen:"#90EE90",lightgrey:"#D3D3D3",lightpink:"#FFB6C1",lightsalmon:"#FFA07A",lightseagreen:"#20B2AA",lightskyblue:"#87CEFA",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#B0C4DE",lightyellow:"#FFFFE0",lime:"#00FF00",limegreen:"#32CD32",linen:"#FAF0E6",magenta:"#FF00FF",maroon:"#800000",mediumaquamarine:"#66CDAA",mediumblue:"#0000CD",mediumorchid:"#BA55D3",mediumpurple:"#9370DB",mediumseagreen:"#3CB371",mediumslateblue:"#7B68EE",mediumspringgreen:"#00FA9A",mediumturquoise:"#48D1CC",mediumvioletred:"#C71585",midnightblue:"#191970",mintcream:"#F5FFFA",mistyrose:"#FFE4E1",moccasin:"#FFE4B5",navajowhite:"#FFDEAD",navy:"#000080",oldlace:"#FDF5E6",olive:"#808000",olivedrab:"#6B8E23",orange:"#FFA500",orangered:"#FF4500",orchid:"#DA70D6",palegoldenrod:"#EEE8AA",palegreen:"#98FB98",paleturquoise:"#AFEEEE",palevioletred:"#DB7093",papayawhip:"#FFEFD5",peachpuff:"#FFDAB9",peru:"#CD853F",pink:"#FFC0CB",plum:"#DDA0DD",powderblue:"#B0E0E6",purple:"#800080",red:"#FF0000",rosybrown:"#BC8F8F",royalblue:"#4169E1",saddlebrown:"#8B4513",salmon:"#FA8072",sandybrown:"#F4A460",seagreen:"#2E8B57",seashell:"#FFF5EE",sienna:"#A0522D",silver:"#C0C0C0",skyblue:"#87CEEB",slateblue:"#6A5ACD",slategray:"#708090",slategrey:"#708090",snow:"#FFFAFA",springgreen:"#00FF7F",steelblue:"#4682B4",tan:"#D2B48C",teal:"#008080",thistle:"#D8BFD8",tomato:"#FF6347",turquoise:"#40E0D0",violet:"#EE82EE",wheat:"#F5DEB3",white:"#FFFFFF",whitesmoke:"#F5F5F5",yellow:"#FFFF00",yellowgreen:"#9ACD32"},Ye=e=>{const t=O[e];return t||O.white};var Ve=R('<div class="card-color flex flex-1 flex-col svelte-1kl7305"><!></div>');function at(e,t){w(t,!0);const l=h(t,"color",19,()=>O.gray),a=h(t,"tilt",3,5),s=Be(t,["$$slots","$$events","$$legacy","color","href","bgImg","tilt","class","children"]);let n,i=B(()=>de(l())?l():Ye(l())),r=B(()=>L(g(i),.3)),d=B(()=>L(g(i),.15)),o=B(()=>L(g(i),.01));const f=F=>{if(!a())return;const b=F.currentTarget.getBoundingClientRect(),D=F.clientX-b.left,N=F.clientY-b.top;n.style.setProperty("--drop-x",`${D}px`),n.style.setProperty("--drop-y",`${N}px`);const A=n.offsetWidth,W=n.offsetHeight,fe=b.x+A/2,Fe=b.y+W/2,ge=F.clientX-fe,he=F.clientY-Fe,me=(a()*ge/(A/2)).toFixed(2),be=(-1*(a()*he)/(W/2)).toFixed(2);n.style.setProperty("--rot-x",`${be}deg`),n.style.setProperty("--rot-y",`${me}deg`)};X(()=>{n&&(n.style.setProperty("--border-color",g(r)),n.style.setProperty("--drop-color",g(d)),n.style.setProperty("--bg-color",g(o)),t.bgImg&&n.style.setProperty("--bg-img",`url("${t.bgImg}")`),a()&&(n.style.setProperty("--drop-x","0"),n.style.setProperty("--drop-y","0"),n.style.setProperty("--rot-x","0"),n.style.setProperty("--rot-y","0")))}),X(()=>{n.style.setProperty("--card-color","hsl(var(--card) / 1)"),n.style.setProperty("--card-color-60","hsl(var(--card) / 0.6)"),n.style.setProperty("--card-color-30","hsl(var(--card) / 0.3)")});var E=T(),q=I(E);ne(q,()=>t.href?"a":"div",!1,(F,V)=>{Ae(F,A=>n=A,()=>n);let b;S(()=>b=H(F,b,{href:t.href,class:M("card rounded-lg border bg-card text-card-foreground shadow-sm",t.class),...s,onmousemove:f},"svelte-1kl7305",F.namespaceURI===ee,F.nodeName.includes("-")));var D=Ve(),N=Z(D);te(N,()=>t.children??we),$(D),y(V,D)}),y(e,E),C()}export{rt as C,at as F,O as N,tt as S,nt as a};