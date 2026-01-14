import{j as n}from"./getSVGtext-33d0ab58.js";import{r as S}from"./index-f80c8c95.js";import{V as s}from"./VSpacer-b5343eb8.js";import{H as M}from"./HiddenTiger-5148c601.js";const u=["small","default","large","xlarge"],m=["none",...u],D={title:"VSpacer"},p=()=>n.jsxs(n.Fragment,{children:[`
`,n.jsx("section",{children:"Some Component"})]}),a=e=>n.jsx(M,{visibleDemo:n.jsx("div",{style:{backgroundColor:`rgba(0, 0 ,0, ${e.highlight?".1":".05"}`,padding:"6% 5%"},children:p}),htmlDemo:p}),j=({wrapperAroundComponents:e,topMargin:f,bottomMargin:x,combinedMarginSize:b})=>{const t=e||void 0,l=f,i=x,o=b;return n.jsxs(S.Fragment,{children:[n.jsx(a,{}),`

`,t?n.jsx(s,{size:o,top:l,bottom:i,children:n.jsx(a,{highlight:!0})}):n.jsx(s,{size:o}),`
`,n.jsx(a,{})]},`${t}${o}${l}${i}`)},r={render:e=>n.jsx(j,{...e}),argTypes:{wrapperAroundComponents:{name:"Wrapper around components"},topMargin:{name:"Top margin",options:m,control:{type:"inline-radio",labels:{none:"None",small:"Small",default:"Default",large:"Large",xlarge:"X-large"}}},bottomMargin:{name:"Bottom margin",options:m,control:{type:"inline-radio",labels:{none:"None",small:"Small",default:"Default",large:"Large",xlarge:"X-large"}}},combinedMarginSize:{name:"Combined margin-size",options:u,control:{type:"inline-radio",labels:{small:"Small",default:"Default",large:"Large",xlarge:"X-large"}}}},args:{wrapperAroundComponents:!0,topMargin:"default",bottomMargin:"default",combinedMarginSize:"default"}};var g,d,c;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const V=["_VSpacer"];export{r as _VSpacer,V as __namedExportsOrder,D as default};
//# sourceMappingURL=VSpacer.stories-74d23492.js.map
