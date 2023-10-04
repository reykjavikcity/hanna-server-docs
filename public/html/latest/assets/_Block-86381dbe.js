import{j as e}from"./jsx-runtime-f961835c.js";import{m as h}from"./classUtils-ef6e60eb.js";import{B as y}from"./_Button-f8e7ee7f.js";import{I as g}from"./_Image-73a64cfc.js";const l=a=>{const{image:s,modifier:m,bem:t,content:n,wrapperProps:o}=a,d=Array.isArray(n)?n:[n];return e.jsxs("div",{...o,className:h(t,m,(o||{}).className),children:[d.map(({title:p,summary:r,buttons:i=[]},c)=>{const u=r&&(typeof r!="string"||!!r.trim());return e.jsxs("div",{className:`${t}__content`,children:[e.jsx("h2",{className:`${t}__title`,children:p}),u&&e.jsx("div",{className:`${t}__summary`,children:r}),i.length>0&&e.jsxs("div",{className:`${t}__buttons`,children:[" ",i.map((f,_)=>e.jsxs(e.Fragment,{children:[e.jsx(y,{bem:`${t}__button`,...f},_)," "]}))]})]},c)}),s&&e.jsx(g,{bem:`${t}__image`,...s})]})};try{l.displayName="Block",l.__docgenInfo={description:"",displayName:"Block",props:{content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"BlockItem | BlockItem[]"}},image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"ImageProps"}},startSeen:{defaultValue:null,description:"@deprecated This prop does nothing nowadays (Will be removed in v0.11)",name:"startSeen",required:!1,type:{name:"boolean"}},modifier:{defaultValue:null,description:`List of CSS BEM --modifier's to add to the component's main wrapper.

All falsy values are neatly skipped.`,name:"modifier",required:!1,type:{name:"Modifiers"}},wrapperProps:{defaultValue:null,description:`Custom HTML attributes for the component's wrapper element.

Note, however, that some props may be intentionally
excluded from the list.

__WARNING:__
In some cases props added this way can break the component, og hurt its
accessibility.  Also, some props may get ignored, or over-ridden by the
component. User discretion is advised.`,name:"wrapperProps",required:!1,type:{name:"HTMLProps<null, never>"}},bem:{defaultValue:null,description:"",name:"bem",required:!0,type:{name:"string"}}}}}catch{}export{l as B};
//# sourceMappingURL=_Block-86381dbe.js.map
