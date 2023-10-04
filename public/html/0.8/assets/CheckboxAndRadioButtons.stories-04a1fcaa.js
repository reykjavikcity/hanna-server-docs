import{j as a}from"./jsx-runtime-f961835c.js";import{T as k}from"./_TogglerInput-f0660bf5.js";import{T as G}from"./_TogglerGroupField-4074f3e0.js";import"./index-f80c8c95.js";import"./classUtils-ef6e60eb.js";import"./useDomid-e1962be7.js";import"./domid-a414b1fb.js";import"./FormField-39c81e7b.js";import"./env-5a2a565d.js";import"./browserSide-4379edd8.js";import"./_Link-b7c9c4c9.js";import"./getScrollbarWidth-108c5f9b.js";import"./getSVGtext-8f35f9ab.js";const o=e=>a.jsx(k,{bem:"CheckboxButton",...e,type:"checkbox",innerWrap:!0});try{o.displayName="CheckboxButton",o.__docgenInfo={description:"",displayName:"CheckboxButton",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string | Element"}},invalid:{defaultValue:null,description:"",name:"invalid",required:!1,type:{name:"boolean"}},reqText:{defaultValue:null,description:`Hidden label prefix text to indicate that the field is required.

If your field is required but should not say so in its label
then set this prop to \`false\`

Default: \`"Þarf að fylla út"\``,name:"reqText",required:!1,type:{name:"string | false"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string | Element"}},Wrapper:{defaultValue:null,description:"",name:"Wrapper",required:!1,type:{name:"enum",value:[{value:'"div"'},{value:'"li"'}]}},inputProps:{defaultValue:null,description:"",name:"inputProps",required:!1,type:{name:"DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>"}},modifier:{defaultValue:null,description:`List of CSS BEM --modifier's to add to the component's main wrapper.

All falsy values are neatly skipped.`,name:"modifier",required:!1,type:{name:"Modifiers"}},wrapperProps:{defaultValue:null,description:`Custom HTML attributes for the component's wrapper element.

Note, however, that some props may be intentionally
excluded from the list.

__WARNING:__
In some cases props added this way can break the component, og hurt its
accessibility.  Also, some props may get ignored, or over-ridden by the
component. User discretion is advised.`,name:"wrapperProps",required:!1,type:{name:"HTMLProps<null, never>"}}}}}catch{}const c=e=>(e.layout&&console.warn("`CheckboxButtonsGroupProps.layout` is deprecated."),e.columns&&console.warn("`CheckboxButtonsGroupProps.columns` is deprecated."),a.jsx(G,{...e,bem:"CheckboxButtonsGroup",Toggler:o}));try{c.displayName="CheckboxButtonsGroup",c.__docgenInfo={description:"",displayName:"CheckboxButtonsGroup",props:{className:{defaultValue:null,description:'Container className - alongside "FormField"',name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:'Optional pre-determinted id="" for the __input',name:"id",required:!1,type:{name:"string"}},ssr:{defaultValue:null,description:`Indicates whether server-side rendering is supported or not.

The \`ssr-only\` value is useful for cases where you need
to demo the server-rendered version in a browser.`,name:"ssr",required:!1,type:{name:"SSRSupport"}},wrapperProps:{defaultValue:null,description:`Custom HTML attributes for the component's wrapper element.

Note, however, that some props may be intentionally
excluded from the list.

__WARNING:__
In some cases props added this way can break the component, og hurt its
accessibility.  Also, some props may get ignored, or over-ridden by the
component. User discretion is advised.`,name:"wrapperProps",required:!1,type:{name:"HTMLProps<null, never>"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string | Element"}},assistText:{defaultValue:null,description:"",name:"assistText",required:!1,type:{name:"string | Element"}},hideLabel:{defaultValue:null,description:"",name:"hideLabel",required:!1,type:{name:"boolean"}},invalid:{defaultValue:null,description:"",name:"invalid",required:!1,type:{name:"boolean"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string | Element"}},reqText:{defaultValue:null,description:`Hidden label prefix text to indicate that the field is required.

If your field is required but should not say so in its label
then set this prop to \`false\`

Default: \`"Þarf að fylla út"\``,name:"reqText",required:!1,type:{name:"string | false"}},wrapperRef:{defaultValue:null,description:"@deprecated Use `*Props.wrapperProps.ref` instead (Will be removed in v0.11)\n\nRef object pointing to the outermost `.FormField` element",name:"wrapperRef",required:!1,type:{name:"RefObject<HTMLElement>"}},LabelTag:{defaultValue:null,description:"",name:"LabelTag",required:!1,type:{name:"enum",value:[{value:'"h3"'},{value:'"h4"'},{value:'"h5"'}]}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:'string[] | TogglerGroupOptions<"default">'}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean | readonly number[]"}},inputProps:{defaultValue:null,description:"",name:"inputProps",required:!1,type:{name:"RestrictedInputProps"}},onSelected:{defaultValue:null,description:"",name:"onSelected",required:!1,type:{name:'((payload: { value: string; checked: boolean; option: TogglerGroupOption<"default">; selectedValues: string[]; }) => void)'}},"aria-describedby":{defaultValue:null,description:"",name:"aria-describedby",required:!1,type:{name:"string"}},"aria-invalid":{defaultValue:null,description:"",name:"aria-invalid",required:!1,type:{name:'boolean | "true" | "false"'}},"aria-labelledby":{defaultValue:null,description:"",name:"aria-labelledby",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string[]"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string[]"}},columns:{defaultValue:null,description:"@deprecated (Will be removed in v0.11)",name:"columns",required:!1,type:{name:"enum",value:[{value:'"2col"'},{value:'"3col"'}]}},layout:{defaultValue:null,description:"@deprecated (Will be removed in v0.11)",name:"layout",required:!1,type:{name:"enum",value:[{value:'"slim"'}]}}}}}catch{}const B=e=>a.jsx(k,{...e,bem:"RadioButton",type:"radio",innerWrap:!0}),f=e=>(e.layout&&console.warn("`RadioButtonsGroupProps.layout` is deprecated."),e.columns&&console.warn("`RadioButtonsGroupProps.columns` is deprecated."),a.jsx(G,{...e,bem:"RadioButtonsGroup",Toggler:B,isRadio:!0}));try{f.displayName="RadioButtonsGroup",f.__docgenInfo={description:"",displayName:"RadioButtonsGroup",props:{className:{defaultValue:null,description:'Container className - alongside "FormField"',name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:'Optional pre-determinted id="" for the __input',name:"id",required:!1,type:{name:"string"}},ssr:{defaultValue:null,description:`Indicates whether server-side rendering is supported or not.

The \`ssr-only\` value is useful for cases where you need
to demo the server-rendered version in a browser.`,name:"ssr",required:!1,type:{name:"SSRSupport"}},wrapperProps:{defaultValue:null,description:`Custom HTML attributes for the component's wrapper element.

Note, however, that some props may be intentionally
excluded from the list.

__WARNING:__
In some cases props added this way can break the component, og hurt its
accessibility.  Also, some props may get ignored, or over-ridden by the
component. User discretion is advised.`,name:"wrapperProps",required:!1,type:{name:"HTMLProps<null, never>"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string | Element"}},assistText:{defaultValue:null,description:"",name:"assistText",required:!1,type:{name:"string | Element"}},hideLabel:{defaultValue:null,description:"",name:"hideLabel",required:!1,type:{name:"boolean"}},invalid:{defaultValue:null,description:"",name:"invalid",required:!1,type:{name:"boolean"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string | Element"}},reqText:{defaultValue:null,description:`Hidden label prefix text to indicate that the field is required.

If your field is required but should not say so in its label
then set this prop to \`false\`

Default: \`"Þarf að fylla út"\``,name:"reqText",required:!1,type:{name:"string | false"}},wrapperRef:{defaultValue:null,description:"@deprecated Use `*Props.wrapperProps.ref` instead (Will be removed in v0.11)\n\nRef object pointing to the outermost `.FormField` element",name:"wrapperRef",required:!1,type:{name:"RefObject<HTMLElement>"}},LabelTag:{defaultValue:null,description:"",name:"LabelTag",required:!1,type:{name:"enum",value:[{value:'"h3"'},{value:'"h4"'},{value:'"h5"'}]}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:'string[] | TogglerGroupOptions<"default">'}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean | readonly number[]"}},inputProps:{defaultValue:null,description:"",name:"inputProps",required:!1,type:{name:"RestrictedInputProps"}},onSelected:{defaultValue:null,description:"",name:"onSelected",required:!1,type:{name:'((payload: { value: string; checked: boolean; option: TogglerGroupOption<"default">; selectedValues: string[]; }) => void)'}},"aria-describedby":{defaultValue:null,description:"",name:"aria-describedby",required:!1,type:{name:"string"}},"aria-invalid":{defaultValue:null,description:"",name:"aria-invalid",required:!1,type:{name:'boolean | "true" | "false"'}},"aria-labelledby":{defaultValue:null,description:"",name:"aria-labelledby",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},columns:{defaultValue:null,description:"@deprecated (Will be removed in v0.11)",name:"columns",required:!1,type:{name:"enum",value:[{value:'"2col"'},{value:'"3col"'}]}},layout:{defaultValue:null,description:"@deprecated (Will be removed in v0.11)",name:"layout",required:!1,type:{name:"enum",value:[{value:'"slim"'}]}}}}}catch{}const J={title:"Forms/Checkbox & Radio Buttons",argTypes:{required:{name:"Required"},invalid:{name:"Invalid"},errorMessage:{name:"Error message"},disabled:{name:"Disabled"}},args:{subText:!0,required:!1,invalid:!1,errorMessage:!1},parameters:{controls:{hideNoControlsWarning:!0},viewport:{defaultViewport:"responsive"}}},s={name:"CheckboxButton",render:e=>{const{subText:r,required:u,invalid:d,errorMessage:t,disabled:p}=e,n=t?"You must accept this nice offer.":void 0,m="Add me to your professional network on LinkedIn",b=r?a.jsxs(a.Fragment,{children:[m," ",a.jsx("small",{children:"(Just kidding)"})]}):m;return a.jsx(o,{label:b,required:u,invalid:d,disabled:p,errorMessage:n})},argTypes:{subText:{name:"Sub-text (small print)"}},args:{subText:!1,disabled:!1}},P=[{value:"Jón",label:a.jsxs(a.Fragment,{children:["Jón Jónsson ",a.jsx("small",{children:"Fæddur 1991"})]})},{value:"Anna",label:a.jsx(a.Fragment,{children:"Anna Önnudóttir"})},{value:"Gunnar",label:a.jsxs(a.Fragment,{children:["Gunnar Gunnarilíus Gunnarsson ",a.jsx("small",{children:"Fæddur 1995"})]})},{value:"Guðrún",label:a.jsxs(a.Fragment,{children:["Guðrún Guðrúnardóttir ",a.jsx("small",{children:"Fædd 1997"})]})},{value:"Pétur",label:a.jsx(a.Fragment,{children:"Pétur Pétursson"})}],M=P.map((e,r)=>({...e,disabled:r>=2})),w=e=>{const{required:r,invalid:u,errorMessage:d,disabled:t}=e,p=d?"You must accept this nice offer.":void 0,n=t!=="none"?t:"";return{invalid:u,_errorMessage:p,options:n==="some"?M:P,required:r,_disabled:n==="some"?!1:!!n}},R=["none","some","all"],l={render:e=>a.jsx(c,{label:"Pick your fruits",name:"fruits",value:["Anna","Guðrún"],...w(e)}),argTypes:{disabled:{name:"Disabled",options:R,control:{type:"inline-radio",labels:{none:"None",some:"Some",all:"All"}}}},args:{disabled:"none"}},i={...l,render:e=>a.jsx(f,{label:"Pick your fruit",name:"fruit",value:"Anna",...w(e)})};var y,g,h;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'CheckboxButton',
  render: args => {
    const {
      subText,
      required,
      invalid,
      errorMessage,
      disabled
    } = args;
    const _errorMessage = errorMessage ? 'You must accept this nice offer.' : undefined;
    const labelText = 'Add me to your professional network on LinkedIn';
    const label = subText ? <>
        {labelText} <small>(Just kidding)</small>
      </> : labelText;
    return <CheckboxButton label={label} required={required} invalid={invalid} disabled={disabled} errorMessage={_errorMessage} />;
  },
  argTypes: {
    subText: {
      name: 'Sub-text (small print)'
    }
  },
  args: {
    subText: false,
    disabled: false
  }
}`,...(h=(g=s.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var v,q,x;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <CheckboxButtonsGroup label="Pick your fruits" name="fruits" value={['Anna', 'Guðrún']} {...getProps(args)} />,
  argTypes: {
    disabled: {
      name: 'Disabled',
      options: disabledOptions,
      control: {
        type: 'inline-radio',
        labels: ({
          none: 'None',
          some: 'Some',
          all: 'All'
        } satisfies Record<ControlPropsCheckboxAndRadioButtonsGroup['disabled'], string>)
      }
    }
  },
  args: {
    disabled: 'none'
  }
}`,...(x=(q=l.parameters)==null?void 0:q.docs)==null?void 0:x.source}}};var V,T,_;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  ..._CheckboxButtonsGroup,
  render: args => <RadioButtonsGroup label="Pick your fruit" name="fruit" value="Anna" {...getProps(args)} />
}`,...(_=(T=i.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};const U=["_CheckboxButton","_CheckboxButtonsGroup","_RadioButtonsGroup"];export{s as _CheckboxButton,l as _CheckboxButtonsGroup,i as _RadioButtonsGroup,U as __namedExportsOrder,J as default};
//# sourceMappingURL=CheckboxAndRadioButtons.stories-04a1fcaa.js.map
