import{A as n}from"./assets.BdJGOUNe.js";const i=(e,...s)=>{const t={...e};return Object.keys(t).forEach(a=>{s.includes(a)&&delete t[a]}),t},o=e=>e,m=[o({name:"Programming Languages",slug:"pro-lang"}),o({name:"Frameworks",slug:"framework"}),o({name:"Libraries",slug:"library"}),o({name:"Langauges",slug:"lang"}),o({name:"Databases",slug:"db"}),o({name:"ORMs",slug:"orm"}),o({name:"DevOps",slug:"devops"}),o({name:"Testing",slug:"test"}),o({name:"Dev Tools",slug:"devtools"}),o({name:"Markup & Style",slug:"markup-style"}),o({name:"Design",slug:"design"}),o({name:"Soft Skills",slug:"soft"}),o({name:"CAD Software",slug:"CAD"})],l=e=>{const s=i(e,"category");return e.category&&(s.category=m.find(t=>t.slug===e.category)),s},d=(...e)=>g.filter(s=>e.length===0?!0:e.includes(s.slug)),f=e=>{const s=[],t=[];return g.forEach(a=>{if(e.trim()&&!a.name.toLowerCase().includes(e.trim().toLowerCase()))return;if(!a.category){t.push(a);return}let r=s.find(u=>{var c;return u.category.slug===((c=a.category)==null?void 0:c.slug)});r||(r={items:[],category:a.category},s.push(r)),r.items.push(a)}),t.length!==0&&s.push({category:{name:"Others",slug:"others"},items:t}),s},p="Skills",g=[l({slug:"py",color:"yellow",description:"",logo:n.Python,name:"Python",category:"pro-lang"}),l({slug:"cpp",color:"blue",description:"",logo:n.Cpp,name:"C++",category:"pro-lang"}),l({slug:"Matlab",color:"orange",description:"",logo:n.Matlab,name:"Matlab",category:"pro-lang"}),l({slug:"Solidworks",color:"orange",description:"",logo:n.Solidworks,name:"Matlab",category:"CAD"})],h={title:p,items:g};export{h as S,d as a,f as g};
