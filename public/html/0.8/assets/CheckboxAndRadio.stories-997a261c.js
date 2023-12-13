import{j as e}from"./jsx-runtime-f961835c.js";import{C as l}from"./Checkbox-b2f212c8.js";import{T as A}from"./_TogglerGroupField-30953313.js";import{T as D}from"./_TogglerInput-331f3df2.js";import{R as B,a as g}from"./RowBlockColumn-fb82a21d.js";import"./index-f80c8c95.js";import"./classUtils-ef6e60eb.js";import"./FormField-532841a0.js";import"./env-5a2a565d.js";import"./_useMobileMenuToggling-15a67498.js";import"./getSVGtext-8f35f9ab.js";import"./browserSide-4379edd8.js";import"./_Link-b7c9c4c9.js";const y=a=>e.jsx(A,{...a,bem:"CheckboxGroup",modifier:a.layout,Toggler:l});try{y.displayName="CheckboxGroup",y.__docgenInfo={description:"",displayName:"CheckboxGroup",props:{className:{defaultValue:null,description:'Container className - alongside "FormField"',name:"className",required:!1,type:{name:"string"}},ssr:{defaultValue:null,description:`Indicates whether server-side rendering is supported or not.

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

Default: \`"Þarf að fylla út"\``,name:"reqText",required:!1,type:{name:"string | false"}},wrapperRef:{defaultValue:null,description:"@deprecated Use `*Props.wrapperProps.ref` instead (Will be removed in v0.11)\n\nRef object pointing to the outermost `.FormField` element",name:"wrapperRef",required:!1,type:{name:"RefObject<HTMLElement>"}},LabelTag:{defaultValue:null,description:"",name:"LabelTag",required:!1,type:{name:"enum",value:[{value:'"h3"'},{value:'"h4"'},{value:'"h5"'}]}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:'string[] | TogglerGroupOptions<"default", {}>'}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean | readonly number[]"}},inputProps:{defaultValue:null,description:"",name:"inputProps",required:!1,type:{name:"RestrictedInputProps"}},onSelected:{defaultValue:null,description:"",name:"onSelected",required:!1,type:{name:'((payload: { value: string; checked: boolean; option: TogglerGroupOption<"default", {}>; selectedValues: string[]; }) => void)'}},"aria-describedby":{defaultValue:null,description:"",name:"aria-describedby",required:!1,type:{name:"string"}},"aria-invalid":{defaultValue:null,description:"",name:"aria-invalid",required:!1,type:{name:'boolean | "true" | "false"'}},"aria-labelledby":{defaultValue:null,description:"",name:"aria-labelledby",required:!1,type:{name:"string"}},layout:{defaultValue:null,description:"",name:"layout",required:!1,type:{name:"enum",value:[{value:'"inline"'}]}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string[]"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string[]"}}}}}catch{}const r=a=>e.jsx(D,{bem:"Radio",...a,type:"radio",reqText:!1});try{r.displayName="Radio",r.__docgenInfo={description:"",displayName:"Radio",props:{wrapperProps:{defaultValue:null,description:`Custom HTML attributes for the component's wrapper element.

Note, however, that some props may be intentionally
excluded from the list.

__WARNING:__
In some cases props added this way can break the component, og hurt its
accessibility.  Also, some props may get ignored, or over-ridden by the
component. User discretion is advised.`,name:"wrapperProps",required:!1,type:{name:"HTMLProps<null, never>"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string | Element"}},modifier:{defaultValue:null,description:`List of CSS BEM --modifier's to add to the component's main wrapper.

All falsy values are neatly skipped.`,name:"modifier",required:!1,type:{name:"Modifiers"}},hideLabel:{defaultValue:null,description:"",name:"hideLabel",required:!1,type:{name:"boolean"}},invalid:{defaultValue:null,description:"",name:"invalid",required:!1,type:{name:"boolean"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string | Element"}},inputProps:{defaultValue:null,description:"",name:"inputProps",required:!1,type:{name:"DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>"}},Wrapper:{defaultValue:null,description:"",name:"Wrapper",required:!1,type:{name:"enum",value:[{value:'"div"'},{value:'"li"'}]}}}}}catch{}const h=a=>e.jsx(A,{...a,bem:"RadioGroup",modifier:a.layout,isRadio:!0,Toggler:r});try{h.displayName="RadioGroup",h.__docgenInfo={description:"",displayName:"RadioGroup",props:{className:{defaultValue:null,description:'Container className - alongside "FormField"',name:"className",required:!1,type:{name:"string"}},ssr:{defaultValue:null,description:`Indicates whether server-side rendering is supported or not.

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

Default: \`"Þarf að fylla út"\``,name:"reqText",required:!1,type:{name:"string | false"}},wrapperRef:{defaultValue:null,description:"@deprecated Use `*Props.wrapperProps.ref` instead (Will be removed in v0.11)\n\nRef object pointing to the outermost `.FormField` element",name:"wrapperRef",required:!1,type:{name:"RefObject<HTMLElement>"}},LabelTag:{defaultValue:null,description:"",name:"LabelTag",required:!1,type:{name:"enum",value:[{value:'"h3"'},{value:'"h4"'},{value:'"h5"'}]}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:'string[] | TogglerGroupOptions<"default", {}>'}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean | readonly number[]"}},inputProps:{defaultValue:null,description:"",name:"inputProps",required:!1,type:{name:"RestrictedInputProps"}},onSelected:{defaultValue:null,description:"",name:"onSelected",required:!1,type:{name:'((payload: { value: string; checked: boolean; option: TogglerGroupOption<"default", {}>; selectedValues: string[]; }) => void)'}},"aria-describedby":{defaultValue:null,description:"",name:"aria-describedby",required:!1,type:{name:"string"}},"aria-invalid":{defaultValue:null,description:"",name:"aria-invalid",required:!1,type:{name:'boolean | "true" | "false"'}},"aria-labelledby":{defaultValue:null,description:"",name:"aria-labelledby",required:!1,type:{name:"string"}},layout:{defaultValue:null,description:"",name:"layout",required:!1,type:{name:"enum",value:[{value:'"inline"'}]}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}}}}}catch{}const oe={title:"Forms/Checkbox & Radio",parameters:{viewport:{defaultViewport:"responsive"}}},i={render:a=>{const{required:n,invalid:o,disabled:s,hideLabel:d}=a;return e.jsx(r,{label:"Add me to your professional network on LinkedIn",required:n,invalid:o,disabled:s,hideLabel:d})},argTypes:{required:{name:"Required"},invalid:{name:"Invalid"},disabled:{name:"Disabled"},hideLabel:{name:"Minimal with hidden label"}},args:{required:!1,invalid:!1,disabled:!1,hideLabel:!1}},u={render:a=>{const{required:n,invalid:o,errorMessage:s,disabled:d,hideLabel:f}=a,t=s?"You must accept this nice offer.":void 0;return e.jsx(l,{label:"Add me to your professional network on LinkedIn",required:n,invalid:o,disabled:d,errorMessage:t,hideLabel:f})},argTypes:{...i.argTypes,errorMessage:{name:"Error message"}},args:{...i.args,errorMessage:!1}},H=["normal","inline"],W=["none","all","some"],G=[{value:"a",label:"Apple"},{value:"b",label:e.jsxs(e.Fragment,{children:["Banana ",e.jsx("span",{children:"phone"})]})},{value:"c",label:"Orange"},{value:"d",label:e.jsxs(e.Fragment,{children:["Tomato ",e.jsx("a",{href:"",children:"see more"})]})}],U=G.map((a,n)=>({...a,disabled:n>=2})),S=a=>({render:n=>{const{layout:o,required:s,invalid:d,errorMessage:f,disabled:t}=n,P=o!=="normal"?o:void 0,E=f?"You must accept this nice offer.":void 0,b=t==="none"?"":t,F=b==="some"?!1:!!b,O=b==="some"?U:G;return e.jsx(a,{label:"Pick your fruits",invalid:d,errorMessage:E,name:"fruits",options:O,required:s,disabled:F,layout:P})},argTypes:{layout:{name:"Layout",options:H,control:{type:"inline-radio",labels:{normal:"Normal",inline:"Inline"}}},required:{name:"Required"},invalid:{name:"Invalid"},errorMessage:{name:"Error message"},disabled:{name:"Disabled",options:W,control:{type:"inline-radio",labels:{none:"None",all:"All",some:"Some"}}}},args:{layout:"normal",required:!1,invalid:!1,errorMessage:!1,disabled:"none"}}),p=S(y),m=S(h),c={render:()=>e.jsxs(B,{children:[e.jsxs(g,{children:[e.jsx(l,{label:"Lorem ipsum dolor sit amet Add me to your professional network on LinkedIn Add me to your professional network on LinkedIn Add me to your professional network on LinkedIn"}),e.jsx(l,{label:"Normal",checked:!1}),e.jsx(l,{label:"Checked",checked:!0}),e.jsx(l,{label:"Disabled",disabled:!0,checked:!1}),e.jsx(l,{label:"Disabled + checked",disabled:!0,checked:!0}),e.jsx(l,{label:"Invalid",invalid:!0,checked:!1}),e.jsx(l,{label:"Invalid + checked",invalid:!0,checked:!0}),e.jsx(l,{label:"Invalid + message",checked:!1,errorMessage:"Error message here"})]}),e.jsxs(g,{children:[e.jsx(r,{label:"Lorem ipsum dolor sit amet Add me to your professional network on LinkedIn Add me to your professional network on LinkedIn Add me to your professional network on LinkedIn"}),e.jsx(r,{label:"Normal",checked:!1}),e.jsx(r,{label:"Checked",checked:!0}),e.jsx(r,{label:"Disabled",disabled:!0,checked:!1}),e.jsx(r,{label:"Disabled + checked",disabled:!0,checked:!0}),e.jsx(r,{label:"Invalid",invalid:!0,checked:!1}),e.jsx(r,{label:"Invalid + checked",invalid:!0,checked:!0})]})," "]}),parameters:{css:{tokens:"Checkbox,RadioGroup,RowBlock,RowBlockColumn"},controls:{hideNoControlsWarning:!0}}};var k,v,q;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => {
    const {
      required,
      invalid,
      disabled,
      hideLabel
    } = args;
    return <Radio label="Add me to your professional network on LinkedIn" required={required} invalid={invalid} disabled={disabled} hideLabel={hideLabel} />;
  },
  argTypes: {
    required: {
      name: 'Required'
    },
    invalid: {
      name: 'Invalid'
    },
    disabled: {
      name: 'Disabled'
    },
    hideLabel: {
      name: 'Minimal with hidden label'
    }
  },
  args: {
    required: false,
    invalid: false,
    disabled: false,
    hideLabel: false
  }
}`,...(q=(v=i.parameters)==null?void 0:v.docs)==null?void 0:q.source}}};var x,V,w;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => {
    const {
      required,
      invalid,
      errorMessage,
      disabled,
      hideLabel
    } = args;
    const _errorMessage = errorMessage ? 'You must accept this nice offer.' : undefined;
    return <Checkbox label="Add me to your professional network on LinkedIn" required={required} invalid={invalid} disabled={disabled} errorMessage={_errorMessage} hideLabel={hideLabel} />;
  },
  argTypes: {
    ..._Radio.argTypes,
    errorMessage: {
      name: 'Error message'
    }
  },
  args: {
    ..._Radio.args,
    errorMessage: false
  }
}`,...(w=(V=u.parameters)==null?void 0:V.docs)==null?void 0:w.source}}};var R,_,L;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:"makeTogglerGroupStory(CheckboxGroup)",...(L=(_=p.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};var T,I,C;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:"makeTogglerGroupStory(RadioGroup)",...(C=(I=m.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};var M,j,N;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <RowBlock>
      <RowBlockColumn>
        <Checkbox label="Lorem ipsum dolor sit amet Add me to your professional network on LinkedIn Add me to your professional network on LinkedIn Add me to your professional network on LinkedIn" />
        <Checkbox label="Normal" checked={false} />
        <Checkbox label="Checked" checked />
        <Checkbox label="Disabled" disabled checked={false} />
        <Checkbox label="Disabled + checked" disabled checked />
        <Checkbox label="Invalid" invalid checked={false} />
        <Checkbox label="Invalid + checked" invalid checked />
        <Checkbox label="Invalid + message" checked={false} errorMessage="Error message here" />
      </RowBlockColumn>
      <RowBlockColumn>
        <Radio label="Lorem ipsum dolor sit amet Add me to your professional network on LinkedIn Add me to your professional network on LinkedIn Add me to your professional network on LinkedIn" />
        <Radio label="Normal" checked={false} />
        <Radio label="Checked" checked />
        <Radio label="Disabled" disabled checked={false} />
        <Radio label="Disabled + checked" disabled checked />
        <Radio label="Invalid" invalid checked={false} />
        <Radio label="Invalid + checked" invalid checked />
        {/* Standalone Radio has no error-message */}
      </RowBlockColumn>{' '}
    </RowBlock>,
  parameters: {
    css: {
      tokens: 'Checkbox,RadioGroup,RowBlock,RowBlockColumn'
    },
    controls: {
      hideNoControlsWarning: true
    }
  }
}`,...(N=(j=c.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};const ie=["_Radio","_Checkbox","_CheckboxGroup","_RadioGroup","_StylingTests"];export{u as _Checkbox,p as _CheckboxGroup,i as _Radio,m as _RadioGroup,c as _StylingTests,ie as __namedExportsOrder,oe as default};
//# sourceMappingURL=CheckboxAndRadio.stories-997a261c.js.map
