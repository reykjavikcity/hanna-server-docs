import{j as o}from"./jsx-runtime-f961835c.js";import{r as n}from"./range-dbab87d5.js";import{E as m}from"./ExtraLinks-6e5b1b14.js";import{t as p}from"./knobs-1ca71552.js";import"./index-f80c8c95.js";import"./classUtils-ef6e60eb.js";import"./_CardList-b104b684.js";import"./_Button-f001a419.js";import"./_Link-b7c9c4c9.js";import"./_Image-eec1c9c4.js";import"./useGetSVGtext-49da7148.js";import"./getSVGtext-a5d3ecb0.js";import"./addUrlParams-c54217db.js";import"./cssutils-41198468.js";import"./assets-41f88d07.js";import"./themes-56ee0168.js";const v={title:"ExtraLinks"},l="Extra links top",d=n(1,8).map(()=>({title:"Eignaskiptayfirlýsing",href:"",summary:"Lögboðinn skriflegur gerningur um skiptingu fjöleignarhúss."})),g=["pdf","text","link"],k="Tengt efni",L=n(1,6).map(r=>({label:"Stefna í málefnum eldri borgara til ársins 2022 "+r,href:"",type:g[(r-1)%4]})),c=r=>{const e=r.showRelatedLinks||void 0;return o.jsx(m,{title:l,cards:d,relatedTitle:e&&k,relatedLinks:e&&L})},t={render:r=>o.jsx(c,{...r}),argTypes:{showRelatedLinks:{name:'Show "related" links'},...p},args:{showRelatedLinks:!1}};var s,a,i;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const C=["_ExtraLinks"];export{t as _ExtraLinks,C as __namedExportsOrder,v as default};
//# sourceMappingURL=ExtraLinks.stories-5560f759.js.map
