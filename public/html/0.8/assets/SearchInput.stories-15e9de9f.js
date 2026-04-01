import{j as n}from"./jsx-runtime-f961835c.js";import{r as l}from"./index-f80c8c95.js";import{S as h}from"./SearchInput-c5d040d9.js";import{f}from"./knobs-92abd57e.js";import"./FormField-a1dd5aa8.js";import"./getSVGtext-6e71cb30.js";import"./i18n-d547729d.js";import"./env-5a2a565d.js";import"./_useMobileMenuToggling-538f843c.js";import"./misc-a59c6db3.js";import"./browserSide-4379edd8.js";import"./_Link-b7c9c4c9.js";import"./hannavars-42f3322c.js";import"./ObjectHelpers-f7b28faf.js";import"./assets-a330961d.js";import"./themes-56ee0168.js";const e=f(),V={title:"Forms/SearchInput",parameters:{viewport:{defaultViewport:"responsive"}}},S=r=>{const p=r.physicalSearchButton||void 0,c=e.getProps(r),[i,m]=l.useState("");return n.jsx(h,{...c,label:"Search for things",value:i,onChange:u=>{m(u.currentTarget.value)},onButtonClick:p&&(()=>alert("Perform Search!"))})},t={render:r=>n.jsx(S,{...r}),argTypes:{physicalSearchButton:{name:"Physical search <button/>"},...e.argTypes},args:{physicalSearchButton:!1,...e.args}};var a,o,s;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => <SearchInputStory {...args} />,
  argTypes: {
    physicalSearchButton: {
      name: 'Physical search <button/>'
    },
    ...ffCtrls.argTypes
  },
  args: {
    physicalSearchButton: false,
    ...ffCtrls.args
  }
}`,...(s=(o=t.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const k=["_SearchInput"];export{t as _SearchInput,k as __namedExportsOrder,V as default};
//# sourceMappingURL=SearchInput.stories-15e9de9f.js.map
