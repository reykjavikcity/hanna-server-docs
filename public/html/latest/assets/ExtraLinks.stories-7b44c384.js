import{j as o}from"./jsx-runtime-f961835c.js";import{r as n}from"./range-dbab87d5.js";import{E as m}from"./ExtraLinks-75f8e89f.js";import{t as p}from"./knobs-65c9100b.js";import"./index-f80c8c95.js";import"./getSVGtext-6e71cb30.js";import"./_CardList-9414b1c2.js";import"./_Button-a24e90fa.js";import"./_Link-b7c9c4c9.js";import"./_Image-d0ff28fc.js";import"./useGetSVGtext-67e54c68.js";import"./cssutils-ef0fc746.js";import"./assets-83022afa.js";import"./themes-56ee0168.js";const D={title:"ExtraLinks"},l="Extra links top",d=n(1,8).map(()=>({title:"Eignaskiptayfirlýsing",href:"",summary:"Lögboðinn skriflegur gerningur um skiptingu fjöleignarhúss."})),g=["pdf","text","link"],k="Tengt efni",L=n(1,6).map(r=>({label:`Stefna í málefnum eldri borgara til ársins 2022 ${r}`,href:"",type:g[(r-1)%4]})),c=r=>{const t=r.showRelatedLinks||void 0;return o.jsx(m,{title:l,cards:d,relatedTitle:t&&k,relatedLinks:t&&L})},e={render:r=>o.jsx(c,{...r}),argTypes:{showRelatedLinks:{name:'Show "related" links'},...p},args:{showRelatedLinks:!1}};var s,a,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const I=["_ExtraLinks"];export{e as _ExtraLinks,I as __namedExportsOrder,D as default};
//# sourceMappingURL=ExtraLinks.stories-7b44c384.js.map
