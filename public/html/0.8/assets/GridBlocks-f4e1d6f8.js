import{j as e}from"./jsx-runtime-f961835c.js";import{m as h}from"./classUtils-ef6e60eb.js";import{h as f}from"./assets-ca39b462.js";import{I as y}from"./_Image-73a64cfc.js";import{L as x}from"./_Link-b7c9c4c9.js";import{B}from"./ButtonTertiary-2dc030af.js";const t=s=>{const{blocks:n,twocol:c,wrapperProps:r}=s;return e.jsx("div",{...r,className:h("GridBlocks",[c&&"twocol"],(r||{}).className),children:n.map(({title:o,summary:d,href:a,links:m=[],icon:i,image:p},_)=>{const l=i?{src:f(i)}:p;return e.jsxs("div",{className:"GridBlocks__item",children:[l&&e.jsx(y,{bem:"GridBlocks__illustration",...l}),e.jsxs("div",{className:"GridBlocks__textwrap",children:[e.jsx("h3",{className:"GridBlocks__item__title",children:a!=null?e.jsx(x,{className:"GridBlocks__item__titlelink",href:a,children:o}):o}),e.jsx("div",{className:"GridBlocks__item__summary",children:d}),e.jsx("ul",{className:"GridBlocks__links",children:m.map((u,k)=>e.jsx("li",{className:"GridBlocks__link",children:e.jsx(B,{...u})},k))})]})]},_)})})};try{t.displayName="GridBlocks",t.__docgenInfo={description:"",displayName:"GridBlocks",props:{blocks:{defaultValue:null,description:"",name:"blocks",required:!0,type:{name:"GridBlockItem[]"}},twocol:{defaultValue:null,description:"",name:"twocol",required:!1,type:{name:"boolean"}},wrapperProps:{defaultValue:null,description:`Custom HTML attributes for the component's wrapper element.

Note, however, that some props may be intentionally
excluded from the list.

__WARNING:__
In some cases props added this way can break the component, og hurt its
accessibility.  Also, some props may get ignored, or over-ridden by the
component. User discretion is advised.`,name:"wrapperProps",required:!1,type:{name:"HTMLProps<null, never>"}},startSeen:{defaultValue:null,description:"@deprecated This prop does nothing nowadays (Will be removed in v0.11)",name:"startSeen",required:!1,type:{name:"boolean"}}}}}catch{}export{t as G};
//# sourceMappingURL=GridBlocks-f4e1d6f8.js.map
