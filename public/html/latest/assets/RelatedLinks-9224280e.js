import{j as t}from"./jsx-runtime-f961835c.js";import{m as c}from"./getSVGtext-6e71cb30.js";import{L as u}from"./_Link-b7c9c4c9.js";const h={external:1,document:1,pdf:1,link:0},i=a=>{const{title:s,links:n,wrapperProps:l}=a;if(n.length===0)return null;const r=a.titleTag||"h3";return t.jsxs("div",{...l,className:c("RelatedLinks",null,(l||{}).className),children:[s&&t.jsx(r,{className:"RelatedLinks__title",children:s}),t.jsx("ul",{className:"RelatedLinks__list",children:n.map(({href:o,label:d,type:e,target:m},p)=>(e=e&&h[e]?e:void 0,t.jsx("li",{className:"RelatedLinks__item",children:t.jsxs(u,{className:"RelatedLinks__link",href:o,"data-type":e,target:m,children:[" ",d," "]})},p)))})]})};try{i.displayName="RelatedLinks",i.__docgenInfo={description:"",displayName:"RelatedLinks",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},titleTag:{defaultValue:null,description:"",name:"titleTag",required:!1,type:{name:"enum",value:[{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'}]}},links:{defaultValue:null,description:"",name:"links",required:!0,type:{name:"RelatedLinkItem[]"}},wrapperProps:{defaultValue:null,description:`Custom HTML attributes for the component's wrapper element.

Note, however, that some props may be intentionally
excluded from the list.

__WARNING:__
In some cases props added this way can break the component, og hurt its
accessibility.  Also, some props may get ignored, or over-ridden by the
component. User discretion is advised.`,name:"wrapperProps",required:!1,type:{name:"HTMLProps<null, never>"}}}}}catch{}export{i as R};
//# sourceMappingURL=RelatedLinks-9224280e.js.map
