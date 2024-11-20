import{j as n}from"./jsx-runtime-f961835c.js";import{R as y,a as s}from"./RowBlockColumn-9fede1a2.js";import"./index-f80c8c95.js";import"./getSVGtext-a8bc7f1c.js";const t=["no-background","gray","dark"],l={"no-background":"No background",gray:"Gray",dark:"Dark"},S={title:"Grid"},c={first:()=>n.jsxs(n.Fragment,{children:[`
`,n.jsx("strong",{children:"First Column"}),n.jsx("br",{})," Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."]}),second:()=>n.jsxs(n.Fragment,{children:[`
`,n.jsx("strong",{children:"Second Column"}),n.jsx("br",{})," Lorem ipsum dolor."]})},i=o=>{const r={"no-background":"",gray:"gray",dark:"primary"}[o];return r==="primary"?"primary":r==="gray"},h=({rightAligned:o,narrowFirstColumn:e,narrowSecondColumn:r,firstColumn:g,secondColumn:p})=>{const k=o,w=i(g),b=e,C=i(p),f=r;return n.jsxs(y,{right:k,children:[n.jsx(s,{background:w,narrow:b,children:c.first()}),n.jsx(s,{background:C,narrow:f,children:c.second()})]})},a={render:o=>n.jsx(h,{...o}),argTypes:{rightAligned:{name:"Right aligned"},firstColumn:{name:"First column",options:t,control:{type:"inline-radio",labels:l}},narrowFirstColumn:{name:"Narrow first column"},secondColumn:{name:"Second column",options:t,control:{type:"inline-radio",labels:l}},narrowSecondColumn:{name:"Narrow second column"}},args:{rightAligned:!1,firstColumn:"no-background",narrowFirstColumn:!1,secondColumn:"no-background",narrowSecondColumn:!1},parameters:{css:{tokens:"RowBlock,RowBlockColumn"}}};var m,u,d;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <RowBlockStory {...args} />,
  argTypes: {
    rightAligned: {
      name: 'Right aligned'
    },
    firstColumn: {
      name: 'First column',
      options: columnOptions,
      control: {
        type: 'inline-radio',
        labels: columnLabels
      }
    },
    narrowFirstColumn: {
      name: 'Narrow first column'
    },
    secondColumn: {
      name: 'Second column',
      options: columnOptions,
      control: {
        type: 'inline-radio',
        labels: columnLabels
      }
    },
    narrowSecondColumn: {
      name: 'Narrow second column'
    }
  },
  args: {
    rightAligned: false,
    firstColumn: 'no-background',
    narrowFirstColumn: false,
    secondColumn: 'no-background',
    narrowSecondColumn: false
  },
  parameters: {
    css: {
      tokens: 'RowBlock,RowBlockColumn'
    }
  }
}`,...(d=(u=a.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const F=["_RowBlock"];export{a as _RowBlock,F as __namedExportsOrder,S as default};
//# sourceMappingURL=RowBlock.stories-527414ab.js.map
