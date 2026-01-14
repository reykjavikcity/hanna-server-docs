import{j as s,m as u}from"./getSVGtext-33d0ab58.js";import"./index-f80c8c95.js";const l=e=>{const{legend:r,children:i,className:p,disabled:m,small:c,wrapperProps:n}=e;return s.jsxs("fieldset",{...n,className:u("FieldGroup",c&&"small",p||(n||{}).className),disabled:m,children:[s.jsx("legend",{className:"FieldGroup__legend",children:r}),i]})};try{l.displayName="FieldGroup",l.__docgenInfo={description:"",displayName:"FieldGroup",props:{legend:{defaultValue:null,description:"",name:"legend",required:!0,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},small:{defaultValue:null,description:"",name:"small",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},wrapperProps:{defaultValue:null,description:`Custom HTML attributes for the component's wrapper element.

Note, however, that some props may be intentionally
excluded from the list.

__WARNING:__
In some cases props added this way can break the component, og hurt its
accessibility.  Also, some props may get ignored, or over-ridden by the
component. User discretion is advised.`,name:"wrapperProps",required:!1,type:{name:'HTMLProps<"fieldset", never>'}}}}}catch{}const _={title:"Forms/FieldGroup",parameters:{viewport:{defaultViewport:"responsive"}}},g=({smallLegend:e,disabled:r})=>s.jsx(l,{legend:"Group headline",small:e,disabled:r,children:s.jsx("p",{children:"...FormFields and other content goes here..."})}),a={render:e=>s.jsx(g,{...e}),argTypes:{smallLegend:{name:"Small legend"},disabled:{name:"Disabled"}},args:{smallLegend:!1,disabled:!1}};var d,o,t;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <FieldGroupStory {...args} />,
  argTypes: {
    smallLegend: {
      name: 'Small legend'
    },
    disabled: {
      name: 'Disabled'
    }
  },
  args: {
    smallLegend: false,
    disabled: false
  }
}`,...(t=(o=a.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};const h=["_FieldGroup"];export{a as _FieldGroup,h as __namedExportsOrder,_ as default};
//# sourceMappingURL=FieldGroup.stories-477240e8.js.map
