import{j as n}from"./jsx-runtime-f961835c.js";import{r as b}from"./index-f80c8c95.js";import{V as s}from"./VSpacer-999221c8.js";import{H as M}from"./HiddenTrigger-d6bdd99f.js";import"./classUtils-ef6e60eb.js";import"./browserSide-4379edd8.js";import"./_Link-b7c9c4c9.js";import"./getScrollbarWidth-70c1e033.js";import"./getSVGtext-8f35f9ab.js";const u=["small","default","large","xlarge"],m=["none",...u],w={title:"VSpacer"},p=()=>n.jsxs(n.Fragment,{children:[`
`,n.jsx("section",{children:"Some Component"})]}),a=e=>n.jsx(M,{style:{backgroundColor:"rgba(0, 0 ,0, "+(e.highlight?".1":".05"),padding:"6% 5%"},serverSide:p,clientSide:p}),C=({wrapperAroundComponents:e,topMargin:f,bottomMargin:S,combinedMarginSize:x})=>{const t=e||void 0,i=f,l=S,o=x;return n.jsxs(b.Fragment,{children:[n.jsx(a,{}),`

`,t?n.jsx(s,{size:o,top:i,bottom:l,children:n.jsx(a,{highlight:!0})}):n.jsx(s,{size:o}),`
`,n.jsx(a,{})]},""+t+o+i+l)},r={render:e=>n.jsx(C,{...e}),argTypes:{wrapperAroundComponents:{name:"Wrapper around components"},topMargin:{name:"Top margin",options:m,control:{type:"inline-radio",labels:{none:"None",small:"Small",default:"Default",large:"Large",xlarge:"X-large"}}},bottomMargin:{name:"Bottom margin",options:m,control:{type:"inline-radio",labels:{none:"None",small:"Small",default:"Default",large:"Large",xlarge:"X-large"}}},combinedMarginSize:{name:"Combined margin-size",options:u,control:{type:"inline-radio",labels:{small:"Small",default:"Default",large:"Large",xlarge:"X-large"}}}},args:{wrapperAroundComponents:!0,topMargin:"default",bottomMargin:"default",combinedMarginSize:"default"}};var g,d,c;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <VSpacerStory {...args} />,
  argTypes: {
    wrapperAroundComponents: {
      name: 'Wrapper around components'
    },
    topMargin: {
      name: 'Top margin',
      options: marginOptions,
      control: {
        type: 'inline-radio',
        labels: ({
          none: 'None',
          small: 'Small',
          default: 'Default',
          large: 'Large',
          xlarge: 'X-large'
        } satisfies Record<ControlProps['topMargin'], string>)
      }
    },
    bottomMargin: {
      name: 'Bottom margin',
      options: marginOptions,
      control: {
        type: 'inline-radio',
        labels: ({
          none: 'None',
          small: 'Small',
          default: 'Default',
          large: 'Large',
          xlarge: 'X-large'
        } satisfies Record<ControlProps['bottomMargin'], string>)
      }
    },
    combinedMarginSize: {
      name: 'Combined margin-size',
      options: sizeOptions,
      control: {
        type: 'inline-radio',
        labels: ({
          small: 'Small',
          default: 'Default',
          large: 'Large',
          xlarge: 'X-large'
        } satisfies Record<ControlProps['combinedMarginSize'], string>)
      }
    }
  },
  args: {
    wrapperAroundComponents: true,
    topMargin: 'default',
    bottomMargin: 'default',
    combinedMarginSize: 'default'
  }
}`,...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const T=["_VSpacer"];export{r as _VSpacer,T as __namedExportsOrder,w as default};
//# sourceMappingURL=VSpacer.stories-15297df6.js.map