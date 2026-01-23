import{j as e}from"./jsx-runtime-f961835c.js";import{r as T}from"./index-f80c8c95.js";import{A as _}from"./Attention-8eb13529.js";import{m as B}from"./getSVGtext-6e71cb30.js";import{B as L}from"./ButtonTertiary-a4dbba0c.js";import"./_Button-cb88c84d.js";import"./_Link-b7c9c4c9.js";const l=r=>{const{label:t,summary:a,wide:n,buttons:h=[],wrapperProps:i}=r;return e.jsxs("div",{...i,className:B("LabeledTextBlock",n&&"wide",(i||{}).className),children:[e.jsx("h2",{className:"LabeledTextBlock__label",children:t}),e.jsxs("div",{className:"LabeledTextBlock__summary",children:[a,h.map((x,k)=>e.jsx(L,{...x},k))]})]})};try{l.displayName="LabeledTextBlock",l.__docgenInfo={description:"",displayName:"LabeledTextBlock",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},summary:{defaultValue:null,description:"",name:"summary",required:!0,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},wide:{defaultValue:null,description:"",name:"wide",required:!1,type:{name:"boolean"}},buttons:{defaultValue:null,description:"",name:"buttons",required:!1,type:{name:"ButtonProps[]"}},wrapperProps:{defaultValue:null,description:`Custom HTML attributes for the component's wrapper element.

Note, however, that some props may be intentionally
excluded from the list.

__WARNING:__
In some cases props added this way can break the component, og hurt its
accessibility.  Also, some props may get ignored, or over-ridden by the
component. User discretion is advised.`,name:"wrapperProps",required:!1,type:{name:"HTMLProps<null, never>"}},startSeen:{defaultValue:null,description:"@deprecated This prop does nothing nowadays (Will be removed in v0.11)",name:"startSeen",required:!1,type:{name:"boolean"}}}}}catch{}const W={title:"LabeledTextBlock",parameters:{css:{tokens:"LabeledTextBlock,Attention"}}},b="LabeledTextBlock title",v="Gott er að athuga hvort þörf sé á byggingarleyfi fyrir áætluðum framkvæmdum. Húseigasdasdandi eða lóðarhafi getur lagt inn formlega fyrirspurn áður en hönnunarferli hefst til að kanna hvort líklegt sé að leyfi muni fást fyrir tiltekinni framkvæmd. ",y=()=>e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Gott er að athuga hvort þörf sé á byggingarleyfi fyrir áætluðum framkvæmdum. Húseigasdasdandi eða lóðarhafi getur lagt inn formlega fyrirspurn áður en hönnunarferli hefst"}),e.jsx(_,{children:e.jsx("p",{children:"Það er til að kanna hvort líklegt sé að leyfi muni fást fyrir tiltekinni framkvæmd. Gott er að athuga hvort þörf sé á byggingarleyfi fyrir áætluðum framkvæmdum."})})]}),g=[{href:"",label:"See more"},{href:"",label:"See more"}],w=({button:r,wideFormat:t})=>{const a=r||void 0,n=t||void 0;return e.jsx(l,{label:b,summary:y(),buttons:a&&g,wide:n})},s={render:r=>e.jsx(w,{...r}),argTypes:{button:{name:"Button"},wideFormat:{name:"Wide format"}},args:{button:!1,wideFormat:!1}},j=[{},{button:!0},{wide:!0,button:!0},{wide:!0,html:!0}],S=()=>e.jsx(e.Fragment,{children:j.map(({button:r,wide:t,html:a},n)=>e.jsxs(T.Fragment,{children:[e.jsx(l,{label:b,summary:a?y():v,buttons:r&&g,wide:t}),`

`]},n))}),o={render:()=>e.jsx(S,{}),parameters:{controls:{hideNoControlsWarning:!0}}};var m,d,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <LabeledTextBlockStory {...args} />,
  argTypes: {
    button: {
      name: 'Button'
    },
    wideFormat: {
      name: 'Wide format'
    }
  },
  args: {
    button: false,
    wideFormat: false
  }
}`,...(u=(d=s.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var c,p,f;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <LabeledTextBlockExamplesStory />,
  parameters: {
    controls: {
      hideNoControlsWarning: true
    }
  }
}`,...(f=(p=o.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};const C=["_LabeledTextBlock","_LabeledTextBlockExamples"];export{s as _LabeledTextBlock,o as _LabeledTextBlockExamples,C as __namedExportsOrder,W as default};
//# sourceMappingURL=LabeledTextBlock.stories-047c4ed7.js.map
