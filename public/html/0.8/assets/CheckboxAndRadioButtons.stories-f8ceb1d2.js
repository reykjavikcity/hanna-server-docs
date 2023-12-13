import{j as a}from"./jsx-runtime-f961835c.js";import{T}from"./_TogglerInput-331f3df2.js";import{T as k}from"./_TogglerGroupField-30953313.js";import"./index-f80c8c95.js";import"./classUtils-ef6e60eb.js";import"./_useMobileMenuToggling-15a67498.js";import"./getSVGtext-8f35f9ab.js";import"./FormField-532841a0.js";import"./env-5a2a565d.js";import"./browserSide-4379edd8.js";import"./_Link-b7c9c4c9.js";const i=e=>a.jsx(T,{bem:"CheckboxButton",...e,type:"checkbox",innerWrap:!0});try{i.displayName="CheckboxButton",i.__docgenInfo={description:"",displayName:"CheckboxButton",props:{wrapperProps:{defaultValue:null,description:`Custom HTML attributes for the component's wrapper element.

Note, however, that some props may be intentionally
excluded from the list.

__WARNING:__
In some cases props added this way can break the component, og hurt its
accessibility.  Also, some props may get ignored, or over-ridden by the
component. User discretion is advised.`,name:"wrapperProps",required:!1,type:{name:"HTMLProps<null, never>"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string | Element"}},modifier:{defaultValue:null,description:`List of CSS BEM --modifier's to add to the component's main wrapper.

All falsy values are neatly skipped.`,name:"modifier",required:!1,type:{name:"Modifiers"}},invalid:{defaultValue:null,description:"",name:"invalid",required:!1,type:{name:"boolean"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string | Element"}},reqText:{defaultValue:null,description:`Hidden label prefix text to indicate that the field is required.

If your field is required but should not say so in its label
then set this prop to \`false\`

Default: \`"Þarf að fylla út"\``,name:"reqText",required:!1,type:{name:"string | false"}},inputProps:{defaultValue:null,description:"",name:"inputProps",required:!1,type:{name:"DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>"}},Wrapper:{defaultValue:null,description:"",name:"Wrapper",required:!1,type:{name:"enum",value:[{value:'"div"'},{value:'"li"'}]}}}}}catch{}const p=e=>(e.layout&&console.warn("`CheckboxButtonsGroupProps.layout` is deprecated."),e.columns&&console.warn("`CheckboxButtonsGroupProps.columns` is deprecated."),a.jsx(k,{...e,bem:"CheckboxButtonsGroup",modifier:e.stacked&&"stacked",Toggler:i}));try{p.displayName="CheckboxButtonsGroup",p.__docgenInfo={description:"",displayName:"CheckboxButtonsGroup",props:{className:{defaultValue:null,description:'Container className - alongside "FormField"',name:"className",required:!1,type:{name:"string"}},ssr:{defaultValue:null,description:`Indicates whether server-side rendering is supported or not.

The \`ssr-only\` value is useful for cases where you need
to demo the server-rendered version in a browser.`,name:"ssr",required:!1,type:{name:"SSRSupport"}},wrapperProps:{defaultValue:null,description:`Custom HTML attributes for the component's wrapper element.

Note, however, that some props may be intentionally
excluded from the list.

__WARNING:__
In some cases props added this way can break the component, og hurt its
accessibility.  Also, some props may get ignored, or over-ridden by the
component. User discretion is advised.`,name:"wrapperProps",required:!1,type:{name:"HTMLProps<null, never>"}},id:{defaultValue:null,description:'Optional pre-determinted id="" for the __input',name:"id",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string | Element"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},assistText:{defaultValue:null,description:"",name:"assistText",required:!1,type:{name:"string | Element"}},hideLabel:{defaultValue:null,description:"",name:"hideLabel",required:!1,type:{name:"boolean"}},invalid:{defaultValue:null,description:"",name:"invalid",required:!1,type:{name:"boolean"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string | Element"}},reqText:{defaultValue:null,description:`Hidden label prefix text to indicate that the field is required.

If your field is required but should not say so in its label
then set this prop to \`false\`

Default: \`"Þarf að fylla út"\``,name:"reqText",required:!1,type:{name:"string | false"}},wrapperRef:{defaultValue:null,description:"@deprecated Use `*Props.wrapperProps.ref` instead (Will be removed in v0.11)\n\nRef object pointing to the outermost `.FormField` element",name:"wrapperRef",required:!1,type:{name:"RefObject<HTMLElement>"}},LabelTag:{defaultValue:null,description:"",name:"LabelTag",required:!1,type:{name:"enum",value:[{value:'"h3"'},{value:'"h4"'},{value:'"h5"'}]}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:'string[] | TogglerGroupOptions<"default", {}>'}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean | readonly number[]"}},inputProps:{defaultValue:null,description:"",name:"inputProps",required:!1,type:{name:"RestrictedInputProps"}},onSelected:{defaultValue:null,description:"",name:"onSelected",required:!1,type:{name:'((payload: { value: string; checked: boolean; option: TogglerGroupOption<"default", {}>; selectedValues: string[]; }) => void)'}},"aria-describedby":{defaultValue:null,description:"",name:"aria-describedby",required:!1,type:{name:"string"}},"aria-invalid":{defaultValue:null,description:"",name:"aria-invalid",required:!1,type:{name:'boolean | "true" | "false"'}},"aria-labelledby":{defaultValue:null,description:"",name:"aria-labelledby",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string[]"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string[]"}},stacked:{defaultValue:null,description:"Display the buttons in a single column",name:"stacked",required:!1,type:{name:"boolean"}},columns:{defaultValue:null,description:"@deprecated (Will be removed in v0.11)",name:"columns",required:!1,type:{name:"enum",value:[{value:'"2col"'},{value:'"3col"'}]}},layout:{defaultValue:null,description:"@deprecated (Will be removed in v0.11)",name:"layout",required:!1,type:{name:"enum",value:[{value:'"slim"'}]}}}}}catch{}const B=e=>a.jsx(T,{...e,bem:"RadioButton",type:"radio",innerWrap:!0}),m=e=>(e.layout&&console.warn("`RadioButtonsGroupProps.layout` is deprecated."),e.columns&&console.warn("`RadioButtonsGroupProps.columns` is deprecated."),a.jsx(k,{...e,bem:"RadioButtonsGroup",modifier:e.stacked&&"stacked",Toggler:B,isRadio:!0}));try{m.displayName="RadioButtonsGroup",m.__docgenInfo={description:"",displayName:"RadioButtonsGroup",props:{className:{defaultValue:null,description:'Container className - alongside "FormField"',name:"className",required:!1,type:{name:"string"}},ssr:{defaultValue:null,description:`Indicates whether server-side rendering is supported or not.

The \`ssr-only\` value is useful for cases where you need
to demo the server-rendered version in a browser.`,name:"ssr",required:!1,type:{name:"SSRSupport"}},wrapperProps:{defaultValue:null,description:`Custom HTML attributes for the component's wrapper element.

Note, however, that some props may be intentionally
excluded from the list.

__WARNING:__
In some cases props added this way can break the component, og hurt its
accessibility.  Also, some props may get ignored, or over-ridden by the
component. User discretion is advised.`,name:"wrapperProps",required:!1,type:{name:"HTMLProps<null, never>"}},id:{defaultValue:null,description:'Optional pre-determinted id="" for the __input',name:"id",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string | Element"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},assistText:{defaultValue:null,description:"",name:"assistText",required:!1,type:{name:"string | Element"}},hideLabel:{defaultValue:null,description:"",name:"hideLabel",required:!1,type:{name:"boolean"}},invalid:{defaultValue:null,description:"",name:"invalid",required:!1,type:{name:"boolean"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string | Element"}},reqText:{defaultValue:null,description:`Hidden label prefix text to indicate that the field is required.

If your field is required but should not say so in its label
then set this prop to \`false\`

Default: \`"Þarf að fylla út"\``,name:"reqText",required:!1,type:{name:"string | false"}},wrapperRef:{defaultValue:null,description:"@deprecated Use `*Props.wrapperProps.ref` instead (Will be removed in v0.11)\n\nRef object pointing to the outermost `.FormField` element",name:"wrapperRef",required:!1,type:{name:"RefObject<HTMLElement>"}},LabelTag:{defaultValue:null,description:"",name:"LabelTag",required:!1,type:{name:"enum",value:[{value:'"h3"'},{value:'"h4"'},{value:'"h5"'}]}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:'string[] | TogglerGroupOptions<"default", {}>'}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean | readonly number[]"}},inputProps:{defaultValue:null,description:"",name:"inputProps",required:!1,type:{name:"RestrictedInputProps"}},onSelected:{defaultValue:null,description:"",name:"onSelected",required:!1,type:{name:'((payload: { value: string; checked: boolean; option: TogglerGroupOption<"default", {}>; selectedValues: string[]; }) => void)'}},"aria-describedby":{defaultValue:null,description:"",name:"aria-describedby",required:!1,type:{name:"string"}},"aria-invalid":{defaultValue:null,description:"",name:"aria-invalid",required:!1,type:{name:'boolean | "true" | "false"'}},"aria-labelledby":{defaultValue:null,description:"",name:"aria-labelledby",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},stacked:{defaultValue:null,description:"Display the buttons in a single column",name:"stacked",required:!1,type:{name:"boolean"}},columns:{defaultValue:null,description:"@deprecated (Will be removed in v0.11)",name:"columns",required:!1,type:{name:"enum",value:[{value:'"2col"'},{value:'"3col"'}]}},layout:{defaultValue:null,description:"@deprecated (Will be removed in v0.11)",name:"layout",required:!1,type:{name:"enum",value:[{value:'"slim"'}]}}}}}catch{}const D={title:"Forms/Checkbox & Radio Buttons",parameters:{controls:{hideNoControlsWarning:!0},viewport:{defaultViewport:"responsive"}}},o={argTypes:{required:{name:"Required"},invalid:{name:"Invalid"},errorMessage:{name:"Error message"}},args:{required:!1,invalid:!1,errorMessage:!1}},t={name:"CheckboxButton",render:e=>{const{subText:n,required:r,invalid:d,errorMessage:u,disabled:P}=e,w=u?"You must accept this nice offer.":void 0,c="Add me to your professional network on LinkedIn",C=n?a.jsxs(a.Fragment,{children:[c," ",a.jsx("small",{children:"(Just kidding)"})]}):c;return a.jsx(i,{label:C,required:r,invalid:d,disabled:P,errorMessage:w})},argTypes:{subText:{name:"Sub-text (small print)"},disabled:{name:"Disabled"},...o.argTypes},args:{subText:!1,disabled:!1,...o.args}},_=[{value:"Jón",label:a.jsxs(a.Fragment,{children:["Jón Jónsson ",a.jsx("small",{children:"Fæddur 1991"})]})},{value:"Anna",label:a.jsx(a.Fragment,{children:"Anna Önnudóttir"})},{value:"Gunnar",label:a.jsxs(a.Fragment,{children:["Gunnar Gunnarilíus Gunnarsson ",a.jsx("small",{children:"Fæddur 1995"})]})},{value:"Guðrún",label:a.jsxs(a.Fragment,{children:["Guðrún Guðrúnardóttir ",a.jsx("small",{children:"Fædd 1997"})]})},{value:"Pétur",label:a.jsx(a.Fragment,{children:"Pétur Pétursson"})}],M=_.map((e,n)=>({...e,disabled:n>=2})),G=e=>{const n=e.errorMessage?"You must accept this nice offer.":void 0,r=e.disabled!=="none"?e.disabled:"",d=r==="some"?!1:!!r,u=r==="some"?M:_;return{invalid:e.invalid,errorMessage:n,options:u,required:e.required,disabled:d,stacked:e.stacked}},R=["none","some","all"],l={render:e=>a.jsx(p,{label:"Pick your fruits",name:"fruits",value:["Anna","Guðrún"],...G(e)}),argTypes:{stacked:{name:"Stacked (1 col)"},disabled:{name:"Disabled",options:R,control:{type:"inline-radio",labels:{none:"None",some:"Some",all:"All"}}},...o.argTypes},args:{stacked:!1,disabled:"none",...o.args}},s={...l,render:e=>a.jsx(m,{label:"Pick your fruit",name:"fruit",value:"Anna",...G(e)})};var f,b,y;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
    },
    disabled: {
      name: 'Disabled'
    },
    ...baseCtrl.argTypes
  },
  args: {
    subText: false,
    disabled: false,
    ...baseCtrl.args
  }
}`,...(y=(b=t.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var g,h,v;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <CheckboxButtonsGroup label="Pick your fruits" name="fruits" value={['Anna', 'Guðrún']} {...getProps(args)} />,
  argTypes: {
    stacked: {
      name: 'Stacked (1 col)'
    },
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
    },
    ...baseCtrl.argTypes
  },
  args: {
    stacked: false,
    disabled: 'none',
    ...baseCtrl.args
  }
}`,...(v=(h=l.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var q,x,V;s.parameters={...s.parameters,docs:{...(q=s.parameters)==null?void 0:q.docs,source:{originalSource:`{
  ..._CheckboxButtonsGroup,
  render: args => <RadioButtonsGroup label="Pick your fruit" name="fruit" value="Anna" {...getProps(args)} />
}`,...(V=(x=s.parameters)==null?void 0:x.docs)==null?void 0:V.source}}};const J=["_CheckboxButton","_CheckboxButtonsGroup","_RadioButtonsGroup"];export{t as _CheckboxButton,l as _CheckboxButtonsGroup,s as _RadioButtonsGroup,J as __namedExportsOrder,D as default};
//# sourceMappingURL=CheckboxAndRadioButtons.stories-f8ceb1d2.js.map
