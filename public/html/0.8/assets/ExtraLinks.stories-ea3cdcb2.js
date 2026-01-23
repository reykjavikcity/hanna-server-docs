import{j as o}from"./jsx-runtime-f961835c.js";import{r as n}from"./range-dbab87d5.js";import{E as m}from"./ExtraLinks-c1c0cf69.js";import{t as p}from"./knobs-68ae593a.js";import"./index-f80c8c95.js";import"./getSVGtext-6e71cb30.js";import"./_CardList-d8e200cd.js";import"./_Button-cb88c84d.js";import"./_Link-b7c9c4c9.js";import"./_Image-9b5340ce.js";import"./useGetSVGtext-0a2d93d5.js";import"./hannavars-b191aae6.js";import"./ObjectHelpers-f7b28faf.js";import"./assets-a330961d.js";import"./themes-56ee0168.js";const I={title:"ExtraLinks"},l="Extra links top",d=n(1,8).map(()=>({title:"Eignaskiptayfirlýsing",href:"",summary:"Lögboðinn skriflegur gerningur um skiptingu fjöleignarhúss."})),g=["pdf","text","link"],k="Tengt efni",L=n(1,6).map(r=>({label:`Stefna í málefnum eldri borgara til ársins 2022 ${r}`,href:"",type:g[(r-1)%4]})),c=r=>{const t=r.showRelatedLinks||void 0;return o.jsx(m,{title:l,cards:d,relatedTitle:t&&k,relatedLinks:t&&L})},e={render:r=>o.jsx(c,{...r}),argTypes:{showRelatedLinks:{name:'Show "related" links'},...p},args:{showRelatedLinks:!1}};var s,a,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => <ExtraLinksStory {...args} />,
  argTypes: {
    showRelatedLinks: {
      name: 'Show "related" links'
    },
    ...themeArgTypes
  },
  args: {
    showRelatedLinks: false
  }
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const v=["_ExtraLinks"];export{e as _ExtraLinks,v as __namedExportsOrder,I as default};
//# sourceMappingURL=ExtraLinks.stories-ea3cdcb2.js.map
