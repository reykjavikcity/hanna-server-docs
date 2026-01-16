import{j as e}from"./jsx-runtime-f961835c.js";import{A as d}from"./Alert-1c3a5fc1.js";import{m as b}from"./getSVGtext-6e71cb30.js";import{r as v}from"./_Layouts-9a51c9ba.js";import{u as x}from"./useScrollbarWidthCSSVar-0b95d8d3.js";import{u as w}from"./browserSide-4379edd8.js";import"./_Link-b7c9c4c9.js";import"./index-f80c8c95.js";import"./_useMobileMenuToggling-b033ca8f.js";import{B as N}from"./_Button-2ca4bd3a.js";import{W as S}from"./WizardStepper-97e62f19.js";import"./i18n-d547729d.js";import"./env-5a2a565d.js";import"./assets-a330961d.js";import"./_Image-9b5340ce.js";import"./useGetSVGtext-0a2d93d5.js";const s=r=>{x();const{wizardStepper:a,wizardFooter:g,children:h,colorTheme:_,logoLink:L="/",siteName:z,globalAlerts:l,wrapperProps:n}=r,W=w();return e.jsxs("div",{...n,className:b("WizardLayout",null,(n||{}).className),"data-sprinkled":W,"data-color-theme":_,children:[l&&e.jsx("div",{className:"WizardLayout__alerts",role:"alert",children:l}),e.jsxs("div",{className:"WizardLayout__content",children:[e.jsxs("div",{className:"WizardLayout__header",role:"banner",children:[v("WizardLayout",L,z)," "]}),e.jsxs("div",{className:"WizardLayout__wrap",children:[a&&e.jsx("div",{className:"WizardLayout__stepper",role:"navigation",children:a}),e.jsx("div",{className:"WizardLayout__main",role:"main",children:h}),e.jsx("div",{className:"WizardLayout__deco WizardLayout__deco--geometry"})]}),e.jsx("div",{className:"WizardLayout__footer",role:"complementary",children:g})]})]})};try{s.displayName="WizardLayout",s.__docgenInfo={description:"",displayName:"WizardLayout",props:{wizardStepper:{defaultValue:null,description:"",name:"wizardStepper",required:!1,type:{name:"ReactNode"}},wizardFooter:{defaultValue:null,description:"",name:"wizardFooter",required:!1,type:{name:"ReactNode"}},colorTheme:{defaultValue:null,description:"",name:"colorTheme",required:!1,type:{name:"enum",value:[{value:'"trustworthy"'},{value:'"dependable"'},{value:'"friendly"'},{value:'"lively"'},{value:'"colorful"'}]}},siteName:{defaultValue:null,description:"",name:"siteName",required:!1,type:{name:"string"}},logoLink:{defaultValue:null,description:"",name:"logoLink",required:!1,type:{name:"string"}},globalAlerts:{defaultValue:null,description:"",name:"globalAlerts",required:!1,type:{name:"ReactNode"}},ssr:{defaultValue:null,description:`Indicates whether server-side rendering is supported or not.

The \`ssr-only\` value is useful for cases where you need
to demo the server-rendered version in a browser.`,name:"ssr",required:!1,type:{name:"SSRSupport"}},wrapperProps:{defaultValue:null,description:`Custom HTML attributes for the component's wrapper element.

Note, however, that some props may be intentionally
excluded from the list.

__WARNING:__
In some cases props added this way can break the component, og hurt its
accessibility.  Also, some props may get ignored, or over-ridden by the
component. User discretion is advised.`,name:"wrapperProps",required:!1,type:{name:"HTMLProps<null, never>"}}}}}catch{}const i=r=>e.jsx(N,{bem:"WizardLayoutClose",...r});try{i.displayName="WizardLayoutClose",i.__docgenInfo={description:"",displayName:"WizardLayoutClose",props:{label:{defaultValue:null,description:"Label takes preference over `children`",name:"label",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},modifier:{defaultValue:null,description:`List of CSS BEM --modifier's to add to the component's main wrapper.

All falsy values are neatly skipped.`,name:"modifier",required:!1,type:{name:"ClassNameModifiers"}}}}}catch{}const U={title:"Layout/WizardLayout",argTypes:{globalAlertsContainer:{name:"Global alerts container"}},args:{globalAlertsContainer:!1},parameters:{layout:{disabled:!0},css:{tokens:"WizardLayout",noLayout:!0}}},j=({globalAlertsContainer:r})=>{const a=r;return e.jsx(s,{globalAlerts:a&&" "},`${a}`)},t={render:r=>e.jsx(j,{...r}),argTypes:{},args:{}},C=[{label:"Fyrir hvern er viðtalið?",clickable:!0},{label:"Ástæða viðtals (not clickable)"},{label:"Bæta við gögnum",clickable:!0},{label:"Við höfum samband",clickable:!0}],k=({globalAlertsContainer:r})=>{const a=r;return e.jsx(s,{globalAlerts:a&&e.jsxs(e.Fragment,{children:[e.jsx(d,{type:"warning",closable:!0,children:"Some warning"}),e.jsx(d,{type:"critical",closable:!0,children:"Some critical alert"})]}),wizardStepper:e.jsx(S,{steps:C,activeStep:0,onClick:()=>{}}),wizardFooter:e.jsx(i,{onClick:()=>{},children:"Hætta"}),children:e.jsx("p",{style:{height:"200vh"},children:"Form"})},`${a}`)},o={render:r=>e.jsx(k,{...r}),argTypes:{},args:{},parameters:{css:{tokens:"WizardLayout-full"}}};var u,c,m;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <MinimalWizardLayoutStory {...args} />,
  argTypes: {},
  args: {}
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,y,f;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <WizardLayoutWithContentStory {...args} />,
  argTypes: {},
  args: {},
  parameters: {
    css: {
      tokens: 'WizardLayout-full'
    }
  }
}`,...(f=(y=o.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};const X=["_MinimalWizardLayout","_WizardLayoutWithContent"];export{t as _MinimalWizardLayout,o as _WizardLayoutWithContent,X as __namedExportsOrder,U as default};
//# sourceMappingURL=WizardLayout.stories-c6846ac4.js.map
