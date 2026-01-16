import{j as i}from"./jsx-runtime-f961835c.js";import{r as l}from"./index-f80c8c95.js";import{B as c}from"./BreadCrumbs-df82eccc.js";import{e as u}from"./_dummyData-a3950782.js";import"./getSVGtext-6e71cb30.js";import"./i18n-d547729d.js";import"./_Link-b7c9c4c9.js";import"./range-dbab87d5.js";import"./getStableRandomItem-5e7f6e22.js";const d=[1,2,3,4],S={title:"Layout/BreadCrumbs",parameters:{viewport:{defaultViewport:"responsive"}}},g=({length:r,sparseLinks:n})=>{const p=l.useMemo(()=>{const e=u.slice(0,r);if(n){const t=Math.min(2,r-1);e[t]={label:e[t].label}}return e},[n,r]);return i.jsx(c,{trail:p})},s={render:r=>i.jsx(g,{...r}),argTypes:{length:{name:"Length",options:d,control:"select"},sparseLinks:{name:"Sparse links"}},args:{length:3,sparseLinks:!1}};var a,o,m;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => <BreadCrumbsStory {...args} />,
  argTypes: {
    length: {
      name: 'Length',
      options: lengthOptions,
      control: 'select'
    },
    sparseLinks: {
      name: 'Sparse links'
    }
  },
  args: {
    length: 3,
    sparseLinks: false
  }
}`,...(m=(o=s.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const j=["_BreadCrumbs"];export{s as _BreadCrumbs,j as __namedExportsOrder,S as default};
//# sourceMappingURL=BreadCrumbs.stories-01875fcb.js.map
