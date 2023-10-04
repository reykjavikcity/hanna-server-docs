import{j as e}from"./jsx-runtime-f961835c.js";import{C as r}from"./Checkbox-f86d5c0d.js";import{T as L}from"./_TogglerGroupField-4074f3e0.js";import{T as E}from"./_TogglerInput-f0660bf5.js";import{R as F,a as h}from"./RowBlockColumn-fb82a21d.js";import"./index-f80c8c95.js";import"./classUtils-ef6e60eb.js";import"./FormField-39c81e7b.js";import"./env-5a2a565d.js";import"./useDomid-e1962be7.js";import"./domid-a414b1fb.js";import"./browserSide-4379edd8.js";import"./_Link-b7c9c4c9.js";import"./getScrollbarWidth-108c5f9b.js";import"./getSVGtext-8f35f9ab.js";const b=a=>e.jsx(L,{...a,bem:"CheckboxGroup",modifier:a.layout,Toggler:r});try{b.displayName="CheckboxGroup",b.__docgenInfo={description:"",displayName:"CheckboxGroup",props:{className:{defaultValue:null,description:'Container className - alongside "FormField"',name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:'Optional pre-determinted id="" for the __input',name:"id",required:!1,type:{name:"string"}},ssr:{defaultValue:null,description:`Indicates whether server-side rendering is supported or not.

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

Default: \`"Þarf að fylla út"\``,name:"reqText",required:!1,type:{name:"string | false"}},wrapperRef:{defaultValue:null,description:"@deprecated Use `*Props.wrapperProps.ref` instead (Will be removed in v0.11)\n\nRef object pointing to the outermost `.FormField` element",name:"wrapperRef",required:!1,type:{name:"RefObject<HTMLElement>"}},LabelTag:{defaultValue:null,description:"",name:"LabelTag",required:!1,type:{name:"enum",value:[{value:'"h3"'},{value:'"h4"'},{value:'"h5"'}]}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:'string[] | TogglerGroupOptions<"default">'}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean | readonly number[]"}},inputProps:{defaultValue:null,description:"",name:"inputProps",required:!1,type:{name:"RestrictedInputProps"}},onSelected:{defaultValue:null,description:"",name:"onSelected",required:!1,type:{name:'((payload: { value: string; checked: boolean; option: TogglerGroupOption<"default">; selectedValues: string[]; }) => void)'}},"aria-describedby":{defaultValue:null,description:"",name:"aria-describedby",required:!1,type:{name:"string"}},"aria-invalid":{defaultValue:null,description:"",name:"aria-invalid",required:!1,type:{name:'boolean | "true" | "false"'}},"aria-labelledby":{defaultValue:null,description:"",name:"aria-labelledby",required:!1,type:{name:"string"}},layout:{defaultValue:null,description:"",name:"layout",required:!1,type:{name:"enum",value:[{value:'"inline"'}]}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string[]"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string[]"}}}}}catch{}const M=a=>e.jsx(E,{...a,bem:"Radio",type:"radio"}),n=a=>e.jsx(L,{...a,bem:"RadioGroup",modifier:a.layout,isRadio:!0,Toggler:M});n.__Radio=M;try{n.displayName="RadioGroup",n.__docgenInfo={description:"",displayName:"RadioGroup",props:{className:{defaultValue:null,description:'Container className - alongside "FormField"',name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:'Optional pre-determinted id="" for the __input',name:"id",required:!1,type:{name:"string"}},ssr:{defaultValue:null,description:`Indicates whether server-side rendering is supported or not.

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

Default: \`"Þarf að fylla út"\``,name:"reqText",required:!1,type:{name:"string | false"}},wrapperRef:{defaultValue:null,description:"@deprecated Use `*Props.wrapperProps.ref` instead (Will be removed in v0.11)\n\nRef object pointing to the outermost `.FormField` element",name:"wrapperRef",required:!1,type:{name:"RefObject<HTMLElement>"}},LabelTag:{defaultValue:null,description:"",name:"LabelTag",required:!1,type:{name:"enum",value:[{value:'"h3"'},{value:'"h4"'},{value:'"h5"'}]}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:'string[] | TogglerGroupOptions<"default">'}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean | readonly number[]"}},inputProps:{defaultValue:null,description:"",name:"inputProps",required:!1,type:{name:"RestrictedInputProps"}},onSelected:{defaultValue:null,description:"",name:"onSelected",required:!1,type:{name:'((payload: { value: string; checked: boolean; option: TogglerGroupOption<"default">; selectedValues: string[]; }) => void)'}},"aria-describedby":{defaultValue:null,description:"",name:"aria-describedby",required:!1,type:{name:"string"}},"aria-invalid":{defaultValue:null,description:"",name:"aria-invalid",required:!1,type:{name:'boolean | "true" | "false"'}},"aria-labelledby":{defaultValue:null,description:"",name:"aria-labelledby",required:!1,type:{name:"string"}},layout:{defaultValue:null,description:"",name:"layout",required:!1,type:{name:"enum",value:[{value:'"inline"'}]}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}}}}}catch{}try{n.___Radio.displayName="RadioGroup.___Radio",n.___Radio.__docgenInfo={description:"",displayName:"RadioGroup.___Radio",props:{wrapperProps:{defaultValue:null,description:`Custom HTML attributes for the component's wrapper element.

Note, however, that some props may be intentionally
excluded from the list.

__WARNING:__
In some cases props added this way can break the component, og hurt its
accessibility.  Also, some props may get ignored, or over-ridden by the
component. User discretion is advised.`,name:"wrapperProps",required:!1,type:{name:"HTMLProps<null, never>"}},modifier:{defaultValue:null,description:`List of CSS BEM --modifier's to add to the component's main wrapper.

All falsy values are neatly skipped.`,name:"modifier",required:!1,type:{name:"Modifiers"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string | Element"}},invalid:{defaultValue:null,description:"",name:"invalid",required:!1,type:{name:"boolean"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string | Element"}},inputProps:{defaultValue:null,description:"",name:"inputProps",required:!1,type:{name:"DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>"}},Wrapper:{defaultValue:null,description:"",name:"Wrapper",required:!1,type:{name:"enum",value:[{value:'"div"'},{value:'"li"'}]}}}}}catch{}const ne={title:"Forms/Checkbox & Radio",parameters:{viewport:{defaultViewport:"responsive"}}},i={render:a=>{const{required:o,invalid:s,errorMessage:p,disabled:m}=a,c=p?"You must accept this nice offer.":void 0;return e.jsx(r,{label:"Add me to your professional network on LinkedIn",required:o,invalid:s,disabled:m,errorMessage:c})},argTypes:{required:{name:"Required"},invalid:{name:"Invalid"},errorMessage:{name:"Error message"},disabled:{name:"Disabled"}},args:{required:!1,invalid:!1,errorMessage:!1,disabled:!1}},O=["normal","inline"],D=["none","all","some"],j=[{value:"a",label:"Apple"},{value:"b",label:e.jsxs(e.Fragment,{children:["Banana ",e.jsx("span",{children:"phone"})]})},{value:"c",label:"Orange"},{value:"d",label:e.jsxs(e.Fragment,{children:["Tomato ",e.jsx("a",{href:"",children:"see more"})]})}],B=j.map((a,o)=>({...a,disabled:o>=2})),G=a=>({render:o=>{const{layout:s,required:p,invalid:m,errorMessage:c,disabled:y}=o,N=s!=="normal"?s:void 0,A=c?"You must accept this nice offer.":void 0,f=y==="none"?"":y,P=f==="some"?!1:!!f,S=f==="some"?B:j;return e.jsx(a,{label:"Pick your fruits",invalid:m,errorMessage:A,name:"fruits",options:S,required:p,disabled:P,layout:N})},argTypes:{layout:{name:"Layout",options:O,control:{type:"inline-radio",labels:{normal:"Normal",inline:"Inline"}}},required:{name:"Required"},invalid:{name:"Invalid"},errorMessage:{name:"Error message"},disabled:{name:"Disabled",options:D,control:{type:"inline-radio",labels:{none:"None",all:"All",some:"Some"}}}},args:{layout:"normal",required:!1,invalid:!1,errorMessage:!1,disabled:"none"}}),t=G(b),d=G(n),l=n.__Radio,u={render:()=>e.jsxs(F,{children:[e.jsxs(h,{children:[e.jsx(r,{label:"Lorem ipsum dolor sit amet Add me to your professional network on LinkedIn Add me to your professional network on LinkedIn Add me to your professional network on LinkedIn"}),e.jsx(r,{label:"Normal",checked:!1}),e.jsx(r,{label:"Checked",checked:!0}),e.jsx(r,{label:"Disabled",disabled:!0,checked:!1}),e.jsx(r,{label:"Disabled + checked",disabled:!0,checked:!0}),e.jsx(r,{label:"Invalid",invalid:!0,checked:!1}),e.jsx(r,{label:"Invalid + checked",invalid:!0,checked:!0}),e.jsx(r,{label:"Invalid + message",checked:!1,errorMessage:"Error message here"})]}),e.jsxs(h,{children:[e.jsx(l,{label:"Lorem ipsum dolor sit amet Add me to your professional network on LinkedIn Add me to your professional network on LinkedIn Add me to your professional network on LinkedIn"}),e.jsx(l,{label:"Normal",checked:!1}),e.jsx(l,{label:"Checked",checked:!0}),e.jsx(l,{label:"Disabled",disabled:!0,checked:!1}),e.jsx(l,{label:"Disabled + checked",disabled:!0,checked:!0}),e.jsx(l,{label:"Invalid",invalid:!0,checked:!1}),e.jsx(l,{label:"Invalid + checked",invalid:!0,checked:!0})]})," "]}),parameters:{css:{tokens:"Checkbox,RadioGroup,RowBlock,RowBlockColumn"},controls:{hideNoControlsWarning:!0}}};var g,k,v;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => {
    const {
      required,
      invalid,
      errorMessage,
      disabled
    } = args;
    const _errorMessage = errorMessage ? 'You must accept this nice offer.' : undefined;
    return <Checkbox label="Add me to your professional network on LinkedIn" required={required} invalid={invalid} disabled={disabled} errorMessage={_errorMessage} />;
  },
  argTypes: {
    required: {
      name: 'Required'
    },
    invalid: {
      name: 'Invalid'
    },
    errorMessage: {
      name: 'Error message'
    },
    disabled: {
      name: 'Disabled'
    }
  },
  args: {
    required: false,
    invalid: false,
    errorMessage: false,
    disabled: false
  }
}`,...(v=(k=i.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var q,_,x;t.parameters={...t.parameters,docs:{...(q=t.parameters)==null?void 0:q.docs,source:{originalSource:"makeTogglerGroupStory(CheckboxGroup)",...(x=(_=t.parameters)==null?void 0:_.docs)==null?void 0:x.source}}};var V,R,w;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:"makeTogglerGroupStory(RadioGroup)",...(w=(R=d.parameters)==null?void 0:R.docs)==null?void 0:w.source}}};var I,T,C;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(C=(T=u.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};const oe=["_Checkbox","_CheckboxGroup","_RadioGroup","_StylingTests"];export{i as _Checkbox,t as _CheckboxGroup,d as _RadioGroup,u as _StylingTests,oe as __namedExportsOrder,ne as default};
//# sourceMappingURL=CheckboxAndRadio.stories-3bec6572.js.map
