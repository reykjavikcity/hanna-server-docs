import{j as n}from"./jsx-runtime-f961835c.js";import{B as m}from"./Bling-c087bbf9.js";import{j as b,b as u}from"./assets-ca39b462.js";import{H as v}from"./HiddenTiger-e2ccf9ec.js";import"./index-f80c8c95.js";import"./classUtils-ef6e60eb.js";import"./useGetSVGtext-c22e972a.js";import"./getSVGtext-8f35f9ab.js";const f="- Custom SVG URL -",O=[...b,f],P=["left","left-ish","left-center","right-center","right-ish","right"],x=["up","up-ish","center","down-ish","down"],w=["tertiary","secondary","primary"],j=["default","top","top-ish","center","bottom-ish","bottom"],U={title:"Bling",parameters:{layout:{theme:"colorful"}}},g=()=>n.jsx("div",{style:{height:"47vh",background:"rgba(222, 222, 222, .2)",borderTop:"1px dashed rgba(0,0,0,.15)"},children:n.jsx("div",{style:{height:"100%",width:"50%",borderRight:"1px dashed rgba(0,0,0,.15)"}})}),T=({blingType:o,alignment:e,verticalAlign:i,colorVariant:r,placeInFrontOfOtherContent:s,insertionPoint:l})=>{const a=o,p=a===f?{blingUrl:u(b[2])}:{type:a},c={default:"center",top:"top","top-ish":"top-ish",center:"center","bottom-ish":"bottom-ish",bottom:"bottom"}[l];return n.jsx(v,{visibleDemo:n.jsxs("div",{style:{position:"relative"},children:[n.jsx(g,{}),n.jsx(m,{...p,align:e,vertical:i,color:r,overlay:s,parent:c}),n.jsx(g,{})]}),htmlDemo:n.jsx(m,{...p,align:e,vertical:i,color:r,overlay:s,parent:c})},a+e+i+r+s+l)},t={render:o=>n.jsx(T,{...o}),argTypes:{blingType:{name:"Bling Type",options:O,control:"select"},alignment:{name:"Alignment",options:P,control:"inline-radio"},verticalAlign:{name:"Vertical align",options:x,control:{type:"inline-radio",labels:{up:"up","up-ish":"up-ish",center:"center (default)","down-ish":"down-ish",down:"down"}}},colorVariant:{name:"Color variant",options:w,control:{type:"inline-radio",labels:{tertiary:"Default (tertiary)",secondary:"Secondary",primary:"Primary"}}},placeInFrontOfOtherContent:{name:"Place in front of other content"},insertionPoint:{name:"Insertion point",options:j,control:{type:"inline-radio",labels:{default:"Default (inline)",top:"top","top-ish":"top-ish",center:"center","bottom-ish":"botttom-ish",bottom:"bottom"}}}},args:{blingType:"arrow-right-large",alignment:"left",verticalAlign:"center",colorVariant:"tertiary",placeInFrontOfOtherContent:!1,insertionPoint:"default"}};var d,h,y;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <BlingStory {...args} />,
  argTypes: {
    blingType: {
      name: 'Bling Type',
      options: blingOptions,
      control: 'select'
    },
    alignment: {
      name: 'Alignment',
      options: alignmentOptions,
      control: 'inline-radio'
    },
    verticalAlign: {
      name: 'Vertical align',
      options: verticalAlignOptions,
      control: {
        type: 'inline-radio',
        labels: ({
          up: 'up',
          'up-ish': 'up-ish',
          center: 'center (default)',
          'down-ish': 'down-ish',
          down: 'down'
        } satisfies Record<ControlProps['verticalAlign'], string>)
      }
    },
    colorVariant: {
      name: 'Color variant',
      options: colorVariantOptions,
      control: {
        type: 'inline-radio',
        labels: ({
          tertiary: 'Default (tertiary)',
          secondary: 'Secondary',
          primary: 'Primary'
        } satisfies Record<ControlProps['colorVariant'], string>)
      }
    },
    placeInFrontOfOtherContent: {
      name: 'Place in front of other content'
    },
    insertionPoint: {
      name: 'Insertion point',
      options: insertionPointOptions,
      control: {
        type: 'inline-radio',
        labels: ({
          default: 'Default (inline)',
          top: 'top',
          'top-ish': 'top-ish',
          center: 'center',
          'bottom-ish': 'botttom-ish',
          bottom: 'bottom'
        } satisfies Record<ControlProps['insertionPoint'], string>)
      }
    }
    // ...themeArgTypes
  },

  args: {
    blingType: 'arrow-right-large',
    alignment: 'left',
    verticalAlign: 'center',
    colorVariant: 'tertiary',
    placeInFrontOfOtherContent: false,
    insertionPoint: 'default'
  }
}`,...(y=(h=t.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};const E=["_Bling"];export{t as _Bling,E as __namedExportsOrder,U as default};
//# sourceMappingURL=Bling.stories-249cf11a.js.map
