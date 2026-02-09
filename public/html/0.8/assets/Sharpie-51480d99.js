import{j as p}from"./jsx-runtime-f961835c.js";import{m as i}from"./getSVGtext-6e71cb30.js";const u={green:1,red:1},c={span:1,strong:1,em:1,b:1,i:1,u:1,s:1},s=r=>{const{color:a,tag:e,children:n,wrapperProps:o}=r,t=u[a]?a:"green",l=e&&c[e]?e:"span";return p.jsx(l,{...o,className:i("Sharpie",t,(o||{}).className),children:n})};try{s.displayName="Sharpie",s.__docgenInfo={description:"",displayName:"Sharpie",props:{color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"enum",value:[{value:'"green"'},{value:'"red"'}]}},tag:{defaultValue:null,description:"",name:"tag",required:!1,type:{name:"enum",value:[{value:'"span"'},{value:'"strong"'},{value:'"em"'},{value:'"b"'},{value:'"i"'},{value:'"u"'},{value:'"s"'}]}},wrapperProps:{defaultValue:null,description:`Custom HTML attributes for the component's wrapper element.

Note, however, that some props may be intentionally
excluded from the list.

__WARNING:__
In some cases props added this way can break the component, og hurt its
accessibility.  Also, some props may get ignored, or over-ridden by the
component. User discretion is advised.`,name:"wrapperProps",required:!1,type:{name:"HTMLProps<null, never>"}}}}}catch{}export{s as S};
//# sourceMappingURL=Sharpie-51480d99.js.map
