import{A as a}from"./assets.x1d1wzrl.js";const u=(e,...s)=>{const t={...e};return Object.keys(t).forEach(l=>{s.includes(l)&&delete t[l]}),t},o=e=>e,y=[o({name:"Programming Languages",slug:"pro-lang"}),o({name:"Frameworks",slug:"framework"}),o({name:"Libraries",slug:"library"}),o({name:"Langauges",slug:"lang"}),o({name:"Databases",slug:"db"}),o({name:"ORMs",slug:"orm"}),o({name:"DevOps",slug:"devops"}),o({name:"Testing",slug:"test"}),o({name:"Dev Tools",slug:"devtools"}),o({name:"Markup & Style",slug:"markup-style"}),o({name:"Design",slug:"design"}),o({name:"Soft Skills",slug:"soft"}),o({name:"Modeling & Analysis Software",slug:"CAD"}),o({name:"Python Libraries",slug:"pylib"})],r=e=>{const s=u(e,"category");return e.category&&(s.category=y.find(t=>t.slug===e.category)),s},d=(...e)=>g.filter(s=>e.length===0?!0:e.includes(s.slug)),S=e=>{const s=[],t=[];return g.forEach(l=>{if(e.trim()&&!l.name.toLowerCase().includes(e.trim().toLowerCase()))return;if(!l.category){t.push(l);return}let n=s.find(i=>{var c;return i.category.slug===((c=l.category)==null?void 0:c.slug)});n||(n={items:[],category:l.category},s.push(n)),n.items.push(l)}),t.length!==0&&s.push({category:{name:"Others",slug:"others"},items:t}),s},p="Skills",g=[r({slug:"py",color:"yellow",description:"",logo:a.Python,name:"Python",category:"pro-lang"}),r({slug:"cpp",color:"blue",description:"",logo:a.Cpp,name:"C++",category:"pro-lang"}),r({slug:"Matlab",color:"orange",description:"",logo:a.Matlab,name:"Matlab",category:"pro-lang"}),r({slug:"Solidworks",color:"red",description:"",logo:a.Solidworks,name:"Solidworks",category:"CAD"}),r({slug:"Catia",color:"blue",description:"",logo:a.Catia,name:"Catia",category:"CAD"}),r({slug:"ANSYS",color:"yellow",description:"",logo:a.ANSYS,name:"Ansys",category:"CAD"}),r({slug:"ABAQUS",color:"blue",description:"",logo:a.ABAQUS,name:"Abaqus",category:"CAD"}),r({slug:"Fusion360",color:"orange",description:"",logo:a.Fusion360,name:"Fusion 360",category:"CAD"}),r({slug:"np",color:"cyan",description:"",logo:a.Numpy,name:"Numpy",category:"pylib"}),r({slug:"pytorch",color:"orange",description:"",logo:a.Pytorch,name:"Pytorch",category:"pylib"}),r({slug:"pandas",color:"orange",description:"",logo:a.Pandas,name:"Pandas",category:"pylib"})],f={title:p,items:g};export{f as S,d as a,S as g};