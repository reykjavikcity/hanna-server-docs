import{j as s}from"./getSVGtext-33d0ab58.js";import{P as m}from"./PageHeading-cbf75366.js";import"./index-f80c8c95.js";const h=["h1","h2"],f={title:"text/PageHeading"},c=({headingLevel:e,rightAligned:t,small:r})=>{const g=e!=="h1"?e:void 0,o=t?"right":void 0,d=r||void 0;return s.jsx(m,{Tag:g,align:o,small:d,children:"Page Heading Title"})},n={render:e=>s.jsx(c,{...e}),argTypes:{headingLevel:{name:"Heading level",options:h,control:{type:"inline-radio",labels:{h1:"H1 (default)",h2:"H2"}}},rightAligned:{name:"Right-aligned"},small:{name:"Small"}},args:{headingLevel:"h1",rightAligned:!1,small:!1}};var a,i,l;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => <PageHeadingStory {...args} />,
  argTypes: {
    headingLevel: {
      name: 'Heading level',
      options: headingLevelOptions,
      control: {
        type: 'inline-radio',
        labels: ({
          h1: 'H1 (default)',
          h2: 'H2'
        } satisfies Record<HeadingLevel, string>)
      }
    },
    rightAligned: {
      name: 'Right-aligned'
    },
    small: {
      name: 'Small'
    }
  },
  args: {
    headingLevel: 'h1',
    rightAligned: false,
    small: false
  }
}`,...(l=(i=n.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const u=["_PageHeading"];export{n as _PageHeading,u as __namedExportsOrder,f as default};
//# sourceMappingURL=PageHeading.stories-d89ee016.js.map
