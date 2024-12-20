import{j as r}from"./jsx-runtime-f961835c.js";import{r as x}from"./index-f80c8c95.js";import{B as y}from"./ButtonPrimary-930bc934.js";import{B as j}from"./ButtonSecondary-51f51813.js";import{B as o}from"./ButtonTertiary-f39085c3.js";import"./getSVGtext-6e71cb30.js";import{a as g}from"./ObjectHelpers-f7b28faf.js";import"./_Button-a24e90fa.js";import"./_Link-b7c9c4c9.js";const f=["normal","small","wide"],h=["normal","destructive"],D={title:"buttons/Buttons",parameters:{css:{tokens:"ButtonPrimary,ButtonSecondary,ButtonTertiary"},viewport:{defaultViewport:"responsive"}}},S=({size:i,variant:l})=>{const t=i!=="normal"?i:"",a=l==="destructive"?l:void 0,d=a==="destructive"?"Destructive":"",c=t==="wide"?"Wide":t==="small"?"Small":"";return r.jsx(r.Fragment,{children:g({Primary:y,Secondary:j,Tertiary:o}).map(([m,s],z)=>{const e={"":void 0,small:"small",wide:s!==o?"wide":void 0}[t];return r.jsxs(x.Fragment,{children:[r.jsxs("p",{children:[r.jsxs(s,{size:e,variant:a,children:[c," ",d," ",m," Button"]})," ",r.jsx(s,{size:e,variant:a,disabled:!0,children:"Disabled"})," ",r.jsx(s,{size:e,variant:a,"aria-pressed":"true",children:"Pressed"})]}),r.jsxs("p",{children:[r.jsxs(s,{size:e,variant:a,href:"",children:[c," ",d," ",m," Link"]})," "]}),r.jsxs("p",{children:[" ",r.jsx(s,{size:e,variant:a,icon:"go-back",children:"Go Back"})," ",s!==o&&r.jsx(s,{size:e,variant:a,icon:"go-forward",children:"Go Forward"})," "]}),r.jsx("br",{})," "]},z)})})},n={render:i=>r.jsx(S,{...i}),argTypes:{size:{name:"Size",options:f,control:{type:"inline-radio",labels:{normal:"Normal",small:"Small size",wide:"Wide variant"}}},variant:{name:"Variant",options:h,control:{type:"inline-radio",labels:{normal:"Normal",destructive:"Destructive"}}}},args:{size:"normal",variant:"normal"}};var p,v,u;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <ButtonsStory {...args} />,
  argTypes: {
    size: {
      name: 'Size',
      options: sizeOptions,
      control: {
        type: 'inline-radio',
        labels: ({
          normal: 'Normal',
          small: 'Small size',
          wide: 'Wide variant'
        } satisfies Record<Size, string>)
      }
    },
    variant: {
      name: 'Variant',
      options: variantOptions,
      control: {
        type: 'inline-radio',
        labels: ({
          normal: 'Normal',
          destructive: 'Destructive'
        } satisfies Record<Variant, string>)
      }
    }
  },
  args: {
    size: 'normal',
    variant: 'normal'
  }
}`,...(u=(v=n.parameters)==null?void 0:v.docs)==null?void 0:u.source}}};const E=["_Buttons"];export{n as _Buttons,E as __namedExportsOrder,D as default};
//# sourceMappingURL=Buttons.stories-5715ee18.js.map
