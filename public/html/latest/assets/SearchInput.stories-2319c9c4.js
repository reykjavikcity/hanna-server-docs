import{j as n}from"./getSVGtext-33d0ab58.js";import{r as l}from"./index-f80c8c95.js";import{S as h}from"./SearchInput-db703a5f.js";import{f}from"./knobs-42e4ba6d.js";import"./FormField-62273174.js";import"./i18n-d547729d.js";import"./env-5a2a565d.js";import"./_useMobileMenuToggling-af42c346.js";import"./browserSide-4379edd8.js";import"./_Link-b7c9c4c9.js";import"./hannavars-dd8d2519.js";import"./ObjectHelpers-f7b28faf.js";import"./assets-a330961d.js";import"./themes-56ee0168.js";const e=f(),w={title:"Forms/SearchInput",parameters:{viewport:{defaultViewport:"responsive"}}},S=r=>{const p=r.physicalSearchButton||void 0,c=e.getProps(r),[i,m]=l.useState("");return n.jsx(h,{...c,label:"Search for things",value:i,onChange:u=>{m(u.currentTarget.value)},onButtonClick:p&&(()=>alert("Perform Search!"))})},t={render:r=>n.jsx(S,{...r}),argTypes:{physicalSearchButton:{name:"Physical search <button/>"},...e.argTypes},args:{physicalSearchButton:!1,...e.args}};var a,o,s;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(s=(o=t.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const F=["_SearchInput"];export{t as _SearchInput,F as __namedExportsOrder,w as default};
//# sourceMappingURL=SearchInput.stories-2319c9c4.js.map
