import{j as t}from"./jsx-runtime-f961835c.js";import{r as b}from"./index-f80c8c95.js";import{m as x}from"./getSVGtext-a8bc7f1c.js";import{g as S,F as w}from"./FormField-40abbd78.js";import"./_Link-b7c9c4c9.js";import{a as I,u as k}from"./_useMobileMenuToggling-7bb485b9.js";const V=e=>{const{className:m,bem:i,disabled:n,readOnly:r,Toggler:l,onSelected:u,isRadio:c,renderItemSubContent:o,inputProps:d={}}=e,[p,f]=I(e,"value",[]),N=k(e.name),R=b.useMemo(()=>{const a=e.options;return typeof a[0]=="string"?a.map(s=>({value:s})):a},[e.options]);return t.jsx("ul",{className:x(i,null,m),role:"group","aria-labelledby":e["aria-labelledby"],"aria-describedby":e["aria-describedby"],"aria-required":e.required,children:R.map((a,s)=>{const P=a.disabled!=null?a.disabled:n&&typeof n!="boolean"?n.includes(s):n,q=p.includes(a.value),h={...d,name:N,...a,label:a.label||a.value,onChange:v=>{d.onChange&&d.onChange(v);const{value:g}=a,T=v.currentTarget.checked,y=c?[]:p.filter(C=>C!==g);T&&y.push(g),f(y),u&&u({value:g,checked:T,option:a,selectedValues:y})},disabled:P,readOnly:r,"aria-invalid":e["aria-invalid"],checked:q};return o?t.jsxs("li",{className:`${i}__item`,children:[t.jsx(l,{...h}),o(a,q)]},s):t.jsx(l,{className:`${i}__item`,Wrapper:"li",...h},s)})})};try{V.displayName="TogglerGroup",V.__docgenInfo={description:"",displayName:"TogglerGroup",props:{options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:'string[] | TogglerGroupOptions<"default", {}>'}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean | readonly number[]"}},inputProps:{defaultValue:null,description:"",name:"inputProps",required:!1,type:{name:"RestrictedInputProps"}},onSelected:{defaultValue:null,description:"",name:"onSelected",required:!1,type:{name:'((payload: { value: string; checked: boolean; option: TogglerGroupOption<"default", {}>; selectedValues: string[]; }) => void)'}},renderItemSubContent:{defaultValue:null,description:`Render function that allows inserting content below each toggler
(checkbox/radio) element, depending on the item's checked status
(or other external state)`,name:"renderItemSubContent",required:!1,type:{name:'((option: TogglerGroupOption<"default", {}>, checked: boolean) => ReactNode)'}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},"aria-describedby":{defaultValue:null,description:"",name:"aria-describedby",required:!1,type:{name:"string"}},"aria-invalid":{defaultValue:null,description:"",name:"aria-invalid",required:!1,type:{name:'boolean | "true" | "false"'}},"aria-labelledby":{defaultValue:null,description:"",name:"aria-labelledby",required:!1,type:{name:"string"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}},bem:{defaultValue:null,description:"",name:"bem",required:!0,type:{name:"string"}},Toggler:{defaultValue:null,description:"",name:"Toggler",required:!0,type:{name:"(props: TogglerInputProps) => Element"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"readonly string[]"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"readonly string[]"}},isRadio:{defaultValue:null,description:"",name:"isRadio",required:!1,type:{name:"true"}}}}}catch{}const _=e=>{const{bem:m,Toggler:i,modifier:n,value:r,defaultValue:l,fieldWrapperProps:u,...c}=S(e),o=b.useMemo(()=>r==null?void 0:typeof r=="string"?[r]:r,[r]),d=b.useMemo(()=>l==null?void 0:typeof l=="string"?[l]:l,[l]);return t.jsx(w,{extraClassName:x(m,n),group:!0,...u,renderInput:(p,f)=>t.jsx(V,{bem:p.options,...f,...c,disabled:e.disabled,value:o,defaultValue:d,Toggler:i})})};try{_.displayName="TogglerGroupField",_.__docgenInfo={description:"",displayName:"TogglerGroupField",props:{className:{defaultValue:null,description:'Container className - alongside "FormField"',name:"className",required:!1,type:{name:"string"}},ssr:{defaultValue:null,description:`Indicates whether server-side rendering is supported or not.

The \`ssr-only\` value is useful for cases where you need
to demo the server-rendered version in a browser.`,name:"ssr",required:!1,type:{name:"SSRSupport"}},wrapperProps:{defaultValue:null,description:`Custom HTML attributes for the component's wrapper element.

Note, however, that some props may be intentionally
excluded from the list.

__WARNING:__
In some cases props added this way can break the component, og hurt its
accessibility.  Also, some props may get ignored, or over-ridden by the
component. User discretion is advised.`,name:"wrapperProps",required:!1,type:{name:"HTMLProps<null, never>"}},id:{defaultValue:null,description:'Optional pre-determinted id="" for the __input',name:"id",required:!1,type:{name:"string"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string | Element"}},assistText:{defaultValue:null,description:"",name:"assistText",required:!1,type:{name:"string | Element"}},hideLabel:{defaultValue:null,description:"",name:"hideLabel",required:!1,type:{name:"boolean"}},invalid:{defaultValue:null,description:"",name:"invalid",required:!1,type:{name:"boolean"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string | Element"}},reqText:{defaultValue:null,description:`Hidden label prefix text to indicate that the field is required.

If your field is required but should not say so in its label
then set this prop to \`false\`

Default: \`"Þarf að fylla út"\``,name:"reqText",required:!1,type:{name:"string | false"}},wrapperRef:{defaultValue:null,description:"@deprecated Use `*Props.wrapperProps.ref` instead (Will be removed in v0.11)\n\nRef object pointing to the outermost `.FormField` element",name:"wrapperRef",required:!1,type:{name:"RefObject<HTMLElement>"}},LabelTag:{defaultValue:null,description:"",name:"LabelTag",required:!1,type:{name:"enum",value:[{value:'"h3"'},{value:'"h4"'},{value:'"h5"'}]}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:'string[] | TogglerGroupOptions<"default", {}>'}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean | readonly number[]"}},inputProps:{defaultValue:null,description:"",name:"inputProps",required:!1,type:{name:"RestrictedInputProps"}},onSelected:{defaultValue:null,description:"",name:"onSelected",required:!1,type:{name:'((payload: { value: string; checked: boolean; option: TogglerGroupOption<"default", {}>; selectedValues: string[]; }) => void)'}},renderItemSubContent:{defaultValue:null,description:`Render function that allows inserting content below each toggler
(checkbox/radio) element, depending on the item's checked status
(or other external state)`,name:"renderItemSubContent",required:!1,type:{name:'((option: TogglerGroupOption<"default", {}>, checked: boolean) => ReactNode)'}},"aria-describedby":{defaultValue:null,description:"",name:"aria-describedby",required:!1,type:{name:"string"}},"aria-invalid":{defaultValue:null,description:"",name:"aria-invalid",required:!1,type:{name:'boolean | "true" | "false"'}},"aria-labelledby":{defaultValue:null,description:"",name:"aria-labelledby",required:!1,type:{name:"string"}},Toggler:{defaultValue:null,description:"",name:"Toggler",required:!0,type:{name:"(props: TogglerInputProps) => ReactElement<any, string | JSXElementConstructor<any>>"}},isRadio:{defaultValue:null,description:"",name:"isRadio",required:!1,type:{name:"true"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | readonly string[]"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string | readonly string[]"}},bem:{defaultValue:null,description:"",name:"bem",required:!0,type:{name:"string"}},modifier:{defaultValue:null,description:`List of CSS BEM --modifier's to add to the component's main wrapper.

All falsy values are neatly skipped.`,name:"modifier",required:!1,type:{name:"ClassNameModifiers"}}}}}catch{}export{_ as T};
//# sourceMappingURL=_TogglerGroupField-a5a150dc.js.map