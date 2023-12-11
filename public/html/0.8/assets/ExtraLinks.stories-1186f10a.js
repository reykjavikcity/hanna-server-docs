import{j as o}from"./jsx-runtime-f961835c.js";import{r as n}from"./range-dbab87d5.js";import{E as m}from"./ExtraLinks-697e580e.js";import{t as p}from"./knobs-d342cc87.js";import"./index-f80c8c95.js";import"./classUtils-ef6e60eb.js";import"./_CardList-1f98b60d.js";import"./_Button-0c36286c.js";import"./_Link-b7c9c4c9.js";import"./_Image-73a64cfc.js";import"./useGetSVGtext-c22e972a.js";import"./getSVGtext-8f35f9ab.js";import"./cssutils-6b78d561.js";import"./assets-9a844f76.js";import"./themes-56ee0168.js";const I={title:"ExtraLinks"},l="Extra links top",d=n(1,8).map(()=>({title:"Eignaskiptayfirlýsing",href:"",summary:"Lögboðinn skriflegur gerningur um skiptingu fjöleignarhúss."})),g=["pdf","text","link"],k="Tengt efni",L=n(1,6).map(r=>({label:`Stefna í málefnum eldri borgara til ársins 2022 ${r}`,href:"",type:g[(r-1)%4]})),c=r=>{const t=r.showRelatedLinks||void 0;return o.jsx(m,{title:l,cards:d,relatedTitle:t&&k,relatedLinks:t&&L})},e={render:r=>o.jsx(c,{...r}),argTypes:{showRelatedLinks:{name:'Show "related" links'},...p},args:{showRelatedLinks:!1}};var s,a,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
//# sourceMappingURL=ExtraLinks.stories-1186f10a.js.map
