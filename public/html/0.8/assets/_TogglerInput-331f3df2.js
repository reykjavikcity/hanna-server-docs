import{j as e}from"./jsx-runtime-f961835c.js";import{m as T}from"./classUtils-ef6e60eb.js";import{u as I}from"./_useMobileMenuToggling-15a67498.js";const m=t=>{const{bem:a,modifier:c,className:f,label:y,hideLabel:b,invalid:h,errorMessage:r,Wrapper:_="div",required:v,reqText:i,type:q,id:g,innerWrap:x,wrapperProps:s,inputProps:o,...n}=t,l=I(g),d=r&&`error${l}`,N=v&&i!==!1&&e.jsx("abbr",{className:`${a}__label__reqstar`,title:`${i||"Þarf að haka í"}: `,children:"*"}),p=n.readOnly||(o||{}).readOnly,u=e.jsxs(e.Fragment,{children:[" ",N," ",y," "]});return e.jsxs(_,{...s,className:T(a,[c,b&&"nolabel"],f||(s||{}).className),children:[e.jsx("input",{className:`${a}__input`,type:q,id:l,"aria-invalid":h||!!r||void 0,"aria-describedby":d,...n,...o,...p&&{disabled:!0}})," ",e.jsxs("label",{className:`${a}__label`,htmlFor:l,children:[x?e.jsx("span",{className:`${a}__label__wrap`,children:u}):u,p&&e.jsx("input",{type:"hidden",name:n.name,value:n.value})]}),r&&e.jsx("div",{className:`${a}__error`,id:d,children:r})]})};try{m.displayName="TogglerInput",m.__docgenInfo={description:"",displayName:"TogglerInput",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string | Element"}},invalid:{defaultValue:null,description:"",name:"invalid",required:!1,type:{name:"boolean"}},reqText:{defaultValue:null,description:`Hidden label prefix text to indicate that the field is required.

If your field is required but should not say so in its label
then set this prop to \`false\`

Default: \`"Þarf að fylla út"\``,name:"reqText",required:!1,type:{name:"string | false"}},hideLabel:{defaultValue:null,description:"",name:"hideLabel",required:!1,type:{name:"boolean"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string | Element"}},Wrapper:{defaultValue:null,description:"",name:"Wrapper",required:!1,type:{name:"enum",value:[{value:'"div"'},{value:'"li"'}]}},inputProps:{defaultValue:null,description:"",name:"inputProps",required:!1,type:{name:"DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>"}},modifier:{defaultValue:null,description:`List of CSS BEM --modifier's to add to the component's main wrapper.

All falsy values are neatly skipped.`,name:"modifier",required:!1,type:{name:"Modifiers"}},wrapperProps:{defaultValue:null,description:`Custom HTML attributes for the component's wrapper element.

Note, however, that some props may be intentionally
excluded from the list.

__WARNING:__
In some cases props added this way can break the component, og hurt its
accessibility.  Also, some props may get ignored, or over-ridden by the
component. User discretion is advised.`,name:"wrapperProps",required:!1,type:{name:"HTMLProps<null, never>"}},bem:{defaultValue:null,description:"",name:"bem",required:!0,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"checkbox"'},{value:'"radio"'}]}},innerWrap:{defaultValue:null,description:"",name:"innerWrap",required:!1,type:{name:"boolean"}}}}}catch{}export{m as T};
//# sourceMappingURL=_TogglerInput-331f3df2.js.map
