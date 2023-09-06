import{j as r}from"./jsx-runtime-f961835c.js";import{R as c}from"./index-f80c8c95.js";import{m as _}from"./classUtils-ef6e60eb.js";import{g as h}from"./i18n-f5d14da7.js";import{L as b}from"./_Link-b7c9c4c9.js";const f={is:{title:"Þú ert hér"},en:{title:"You are here"},pl:{title:"Jesteś tutaj"}},l=a=>{const{link:e,current:t}=a;return e.href!=null?r.jsx(b,{className:"BreadCrumbs__item",href:e.href,"aria-current":t||void 0,children:e.label}):r.jsx("span",{className:"BreadCrumbs__item","aria-current":t||void 0,children:e.label})},i=a=>{const{trail:e,title:t,lang:o,wrapperProps:s}=a,n=h({texts:t?{title:t}:void 0,lang:o},f);if(e.length===0)return null;const m=e.slice(0,-1),d=e[e.length-1];return r.jsxs("nav",{...s,className:_("BreadCrumbs",null,(s||{}).className),"aria-label":n.title,children:[r.jsxs("span",{className:"BreadCrumbs__title",children:[n.title,":"]})," ",m.map((u,p)=>r.jsxs(c.Fragment,{children:[r.jsx(l,{link:u})," ",r.jsx("span",{className:"BreadCrumbs__separator","aria-label":"",children:">"})," "]},p)),r.jsx(l,{link:d,current:!0})]})};try{i.displayName="BreadCrumbs",i.__docgenInfo={description:"",displayName:"BreadCrumbs",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},lang:{defaultValue:null,description:"",name:"lang",required:!1,type:{name:"string"}},trail:{defaultValue:null,description:"",name:"trail",required:!0,type:{name:"BreadCrumbTrail"}},wrapperProps:{defaultValue:null,description:`Custom HTML attributes for the component's wrapper element.

Note, however, that some props may be intentionally
excluded from the list.

__WARNING:__
In some cases props added this way can break the component, og hurt its
accessibility.  Also, some props may get ignored, or over-ridden by the
component. User discretion is advised.`,name:"wrapperProps",required:!1,type:{name:'HTMLProps<null, "aria-label">'}}}}}catch{}export{i as B};
//# sourceMappingURL=BreadCrumbs-b2ebd8dd.js.map
