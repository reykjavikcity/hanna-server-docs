import{j as e}from"./jsx-runtime-f961835c.js";import{m as o}from"./getSVGtext-6e71cb30.js";import{C as m}from"./_CardList-9414b1c2.js";import{L as c}from"./_Link-b7c9c4c9.js";const u=r=>{const{relatedTitle:t,relatedLinks:a}=r;return e.jsxs("div",{className:"ExtraLinks__related",children:[t&&e.jsx("h3",{className:"ExtraLinks__related__title",children:t}),e.jsx("ul",{className:"ExtraLinks__related__list",children:a&&a.map(({href:i,label:s,blank:l=!1,type:n},p)=>e.jsx("li",{className:"ExtraLinks__related__item",children:e.jsx(c,{className:o("ExtraLinks__related__link",n),href:i,target:l?"_blank":"",rel:l?"noreferrer noopener":"",children:s})},p))})]})},d=r=>{const{relatedTitle:t,relatedLinks:a,className:i,wrapperProps:s,...l}=r,n=!!(a&&a.length);return e.jsxs("div",{...s,className:o("ExtraLinks",n&&"related",i||(s||{}).className),children:[e.jsx("div",{className:"ExtraLinks__main",children:e.jsx(m,{...l,bemPrefix:"ExtraLinks"})}),n&&e.jsx(u,{relatedTitle:t,relatedLinks:a})]})};try{d.displayName="ExtraLinks",d.__docgenInfo={description:"",displayName:"ExtraLinks",props:{cards:{defaultValue:null,description:"",name:"cards",required:!0,type:{name:"ExtraLinksCardProps[]"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},titleTag:{defaultValue:null,description:"",name:"titleTag",required:!1,type:{name:"enum",value:[{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h1"'},{value:'"p"'}]}},relatedTitle:{defaultValue:null,description:"",name:"relatedTitle",required:!1,type:{name:"string"}},relatedLinks:{defaultValue:null,description:"",name:"relatedLinks",required:!1,type:{name:"RelatedLink[]"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},wrapperProps:{defaultValue:null,description:`Custom HTML attributes for the component's wrapper element.

Note, however, that some props may be intentionally
excluded from the list.

__WARNING:__
In some cases props added this way can break the component, og hurt its
accessibility.  Also, some props may get ignored, or over-ridden by the
component. User discretion is advised.`,name:"wrapperProps",required:!1,type:{name:"HTMLProps<null, never>"}},startSeen:{defaultValue:null,description:"@deprecated This prop does nothing nowadays (Will be removed in v0.11)",name:"startSeen",required:!1,type:{name:"boolean"}}}}}catch{}export{d as E};
//# sourceMappingURL=ExtraLinks-75f8e89f.js.map