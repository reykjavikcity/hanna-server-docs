import{j as s}from"./getSVGtext-33d0ab58.js";import{H as p}from"./Heading-4ee8b065.js";import"./index-f80c8c95.js";const c=["left","right","wide"],h=["normal","small","large"],u=["h2","h3"],L={title:"text/Heading"},y=({layout:n,sizeVariant:a,headingLevel:i})=>{const t=n!=="left"?n:void 0,d=a!=="normal"?a:void 0,g=i!=="h2"?i:void 0,m=t==="wide"?{wide:!0}:{align:t};return s.jsx(p,{...m,size:d,Tag:g,children:"Heading title"})},e={render:n=>s.jsx(y,{...n}),argTypes:{layout:{name:"Layout",options:c,control:{type:"inline-radio",labels:{left:"Left",right:"Right aligned",wide:"Wide"}}},sizeVariant:{name:"Size variant",options:h,control:{type:"inline-radio",labels:{normal:"Normal (medium)",small:"Small",large:"Large"}}},headingLevel:{name:"Heading level",options:u,control:{type:"inline-radio",labels:{h2:"H2 (default)",h3:"H3"}}}},args:{layout:"left",sizeVariant:"normal",headingLevel:"h2"}};var o,r,l;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => <HeadingStory {...args} />,
  argTypes: {
    layout: {
      name: 'Layout',
      options: layoutOptions,
      control: {
        type: 'inline-radio',
        labels: ({
          left: 'Left',
          right: 'Right aligned',
          wide: 'Wide'
        } satisfies Record<Layout, string>)
      }
    },
    sizeVariant: {
      name: 'Size variant',
      options: sizeVariantOptions,
      control: {
        type: 'inline-radio',
        labels: ({
          normal: 'Normal (medium)',
          small: 'Small',
          large: 'Large'
        } satisfies Record<SizeVariant, string>)
      }
    },
    headingLevel: {
      name: 'Heading level',
      options: headingLevelOptions,
      control: {
        type: 'inline-radio',
        labels: ({
          h2: 'H2 (default)',
          h3: 'H3'
        } satisfies Record<HeadingLevel, string>)
      }
    }
  },
  args: {
    layout: 'left',
    sizeVariant: 'normal',
    headingLevel: 'h2'
  }
}`,...(l=(r=e.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};const z=["_Heading"];export{e as _Heading,z as __namedExportsOrder,L as default};
//# sourceMappingURL=Heading.stories-09990e49.js.map
