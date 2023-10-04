import{j as e}from"./jsx-runtime-f961835c.js";import{r as g}from"./index-f80c8c95.js";import{F as h}from"./FormField-39c81e7b.js";import{H as u}from"./HiddenTrigger-aae853a4.js";import{f as x}from"./knobs-764132b4.js";import"./classUtils-ef6e60eb.js";import"./env-5a2a565d.js";import"./useDomid-e1962be7.js";import"./domid-a414b1fb.js";import"./browserSide-4379edd8.js";import"./_Link-b7c9c4c9.js";import"./getScrollbarWidth-108c5f9b.js";import"./getSVGtext-8f35f9ab.js";import"./cssutils-d90b972e.js";import"./assets-ca39b462.js";import"./themes-56ee0168.js";const f=["h3","h4","h5"],t=x({hideLabel:!1}),q={title:"Forms/FormField",parameters:{viewport:{defaultViewport:"responsive"}}},j=r=>{const n=t.getProps(r),s=r.group,a=s?r.groupLabelTag:void 0,d=JSON.stringify(n)+s+a;return e.jsxs(g.Fragment,{children:[e.jsx(h,{...n,className:"EXAMPLE_INPUT",label:"This is my label",group:s,LabelTag:a,renderInput:(c,m)=>e.jsx("span",{className:c.input,...m,children:e.jsx("i",{children:"This is my custom input/control"})})}),e.jsxs(u,{style:{maxWidth:"var(--grid-8)"},children:[e.jsx("br",{}),e.jsxs("p",{children:["The ",e.jsx("code",{children:"FormField"})," clomponent is really an absract markup pattern that is then used and extended by a variety of other components, including"," ",e.jsx("code",{children:"TextInput"}),", ",e.jsx("code",{children:"Selectbox"}),", ",e.jsx("code",{children:"DatePicker"}),", etc."]}),e.jsx("br",{}),e.jsxs("p",{children:[e.jsx("strong",{children:"NOTE:"})," The scripting-effects of the component toggle"," ",e.jsx("code",{children:"FromField--empty"}),", ",e.jsx("code",{children:"FromField--filled"})," and"," ",e.jsx("code",{children:"FromField--focused"})," class--names on the outermost wrapper to reflect the inputs status."]}),e.jsx("br",{}),e.jsxs("p",{children:[e.jsx("strong",{children:"Note:"}),' When a component has a "placeholder" text, it can be'," ",e.jsx("strong",{children:"neither"})," ",e.jsx("code",{children:"--empty"})," (no visible value/placeholder)"," ",e.jsx("strong",{children:"nor"})," ",e.jsx("code",{children:"--filled"})," (has actual input/value) at the same time."]})]})]},d)},o={render:r=>e.jsx(j,{...r}),argTypes:{...t.argTypes,group:{name:"Is a field-group"},groupLabelTag:{name:"Group Label Tag",options:f,control:"inline-radio",if:{arg:"group",eq:!0}}},args:{...t.args,group:!1,groupLabelTag:"h4"}};var i,l,p;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => <FormFieldStory {...args} />,
  argTypes: {
    ...ffCtrls.argTypes,
    group: {
      name: 'Is a field-group'
    },
    groupLabelTag: {
      name: 'Group Label Tag',
      options: groupLabelTagOptions,
      control: 'inline-radio',
      if: {
        arg: 'group',
        eq: true
      }
    }
  },
  args: {
    ...ffCtrls.args,
    group: false,
    groupLabelTag: 'h4'
  }
}`,...(p=(l=o.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const G=["_FormField"];export{o as _FormField,G as __namedExportsOrder,q as default};
//# sourceMappingURL=FormField.stories-2417cee9.js.map
