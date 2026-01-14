import{j as d,m as p}from"./getSVGtext-33d0ab58.js";const u={small:"small",normal:"",large:"large"},r=e=>{const{size:l="normal",align:a,wide:s,children:i,wrapperProps:n}=e,o=e.Tag||(e.forceH1?"h1":"h2"),t=void 0;return d.jsx(o,{...n,"data-dev-forcedh1":t,className:p("Heading",[u[l],a==="right"&&`align--${a}`,!a&&s&&"wide"],(n||{}).className),children:i})};try{r.displayName="Heading",r.__docgenInfo={description:"",displayName:"Heading",props:{Tag:{defaultValue:null,description:"",name:"Tag",required:!1,type:{name:"enum",value:[{value:'"h2"'},{value:'"h3"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"normal"'}]}},forceH1:{defaultValue:null,description:"Make an exception and render a `<h1/>` element.\n\nThis prop is ignore if the `Tag` prop is defined.",name:"forceH1",required:!1,type:{name:"boolean"}},wide:{defaultValue:null,description:"",name:"wide",required:!1,type:{name:"boolean"}},align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"right"'}]}},wrapperProps:{defaultValue:null,description:`Custom HTML attributes for the component's wrapper element.

Note, however, that some props may be intentionally
excluded from the list.

__WARNING:__
In some cases props added this way can break the component, og hurt its
accessibility.  Also, some props may get ignored, or over-ridden by the
component. User discretion is advised.`,name:"wrapperProps",required:!1,type:{name:"HTMLProps<null, never>"}}}}}catch{}export{r as H};
//# sourceMappingURL=Heading-4ee8b065.js.map
