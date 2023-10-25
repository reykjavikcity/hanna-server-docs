import{j as e}from"./jsx-runtime-f961835c.js";import{m as N}from"./classUtils-ef6e60eb.js";import{u as T}from"./getScrollbarWidth-ee90c737.js";const m=l=>{const{bem:r,modifier:c,className:f,label:y,invalid:b,errorMessage:a,Wrapper:_="div",required:h,reqText:i,type:v,id:g,innerWrap:q,wrapperProps:s,inputProps:o,...n}=l,t=T(g),d=a&&"error"+t,x=h&&i!==!1&&e.jsx("abbr",{className:r+"__label__reqstar",title:(i||"Þarf að haka í")+": ",children:"*"}),p=n.readOnly||(o||{}).readOnly,u=e.jsxs(e.Fragment,{children:[" ",x," ",y," "]});return e.jsxs(_,{...s,className:N(r,c,f||(s||{}).className),children:[e.jsx("input",{className:r+"__input",type:v,id:t,"aria-invalid":b||!!a||void 0,"aria-describedby":d,...n,...o,...p&&{disabled:!0}})," ",e.jsxs("label",{className:r+"__label",htmlFor:t,children:[q?e.jsx("span",{className:r+"__label__wrap",children:u}):u,p&&e.jsx("input",{type:"hidden",name:n.name,value:n.value})]}),a&&e.jsx("div",{className:r+"__error",id:d,children:a})]})};try{m.displayName="TogglerInput",m.__docgenInfo={description:"",displayName:"TogglerInput",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string | Element"}},invalid:{defaultValue:null,description:"",name:"invalid",required:!1,type:{name:"boolean"}},reqText:{defaultValue:null,description:`Hidden label prefix text to indicate that the field is required.

If your field is required but should not say so in its label
then set this prop to \`false\`

Default: \`"Þarf að fylla út"\``,name:"reqText",required:!1,type:{name:"string | false"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string | Element"}},Wrapper:{defaultValue:null,description:"",name:"Wrapper",required:!1,type:{name:"enum",value:[{value:'"div"'},{value:'"li"'}]}},inputProps:{defaultValue:null,description:"",name:"inputProps",required:!1,type:{name:"DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>"}},modifier:{defaultValue:null,description:`List of CSS BEM --modifier's to add to the component's main wrapper.

All falsy values are neatly skipped.`,name:"modifier",required:!1,type:{name:"Modifiers"}},wrapperProps:{defaultValue:null,description:`Custom HTML attributes for the component's wrapper element.

Note, however, that some props may be intentionally
excluded from the list.

__WARNING:__
In some cases props added this way can break the component, og hurt its
accessibility.  Also, some props may get ignored, or over-ridden by the
component. User discretion is advised.`,name:"wrapperProps",required:!1,type:{name:"HTMLProps<null, never>"}},bem:{defaultValue:null,description:"",name:"bem",required:!0,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"checkbox"'},{value:'"radio"'}]}},innerWrap:{defaultValue:null,description:"",name:"innerWrap",required:!1,type:{name:"boolean"}}}}}catch{}export{m as T};
//# sourceMappingURL=_TogglerInput-7e13cecc.js.map
