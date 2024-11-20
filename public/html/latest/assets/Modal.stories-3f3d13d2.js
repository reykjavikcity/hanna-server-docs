import{j as e}from"./jsx-runtime-f961835c.js";import{r as C}from"./index-f80c8c95.js";import{B as M}from"./Bling-9150bfbc.js";import{B as x}from"./ButtonBar-1ad83fe6.js";import{B as p}from"./ButtonPrimary-9f58e459.js";import{B as k}from"./ButtonTertiary-321394f2.js";import{H as _}from"./Heading-f5a8c8d4.js";import{A as j}from"./_AbstractModal-0e0adefa.js";import{T as V}from"./TextBlock-e01636a3.js";import"./getSVGtext-a8bc7f1c.js";import"./assets-b24d1fcc.js";import"./useGetSVGtext-b9564362.js";import"./_Button-3c35395f.js";import"./_Link-b7c9c4c9.js";import"./focusElm-346ced9a.js";import"./getPageScrollElm-bb23cb91.js";import"./i18n-d547729d.js";import"./FocusTrap-e81f6d3e.js";import"./browserSide-4379edd8.js";import"./_useMobileMenuToggling-7bb485b9.js";import"./useCallbackOnEsc-c69f5e0c.js";import"./index-64d4dcb8.js";const d=n=>{const{bling:t,render:a,children:r}=n;return e.jsx(j,{...n,bem:"Modal",render:l=>{const o=a?a(l):r;return t?e.jsxs(e.Fragment,{children:[o,e.jsx("div",{className:"Modal__blings",children:e.jsx("div",{className:"Modal__blings__inner",children:t})})]}):o},children:void 0})};try{d.displayName="Modal",d.__docgenInfo={description:"",displayName:"Modal",props:{closeDelay:{defaultValue:null,description:"The transition delay until closing the modal triggers `onClosed()`\n\nDefault: `500`",name:"closeDelay",required:!1,type:{name:"number"}},open:{defaultValue:null,description:`Indicates if the Modal should be open or closed. To trigger opening or
closing, simply flip this flag.

Default: \`true\``,name:"open",required:!1,type:{name:"boolean"}},startOpen:{defaultValue:null,description:'Set this to `true` for Modals that should render as if they always\nexisted and had already been opened.\n\nA Modal that "starts open" will not CSS transition in, and will not\ntrigger its `onOpen` callback on mount.\n\nDefault: `false`',name:"startOpen",required:!1,type:{name:"boolean"}},stable:{defaultValue:null,description:"By default all modals close on ESC and outside clicks.\nSet thtis to `true` to disable this behaviour.",name:"stable",required:!1,type:{name:"boolean"}},noCloseButton:{defaultValue:null,description:"Hides the (x) close button",name:"noCloseButton",required:!1,type:{name:"boolean"}},fickle:{defaultValue:null,description:"@deprecated Use `stable` prop instead  (Will be removed in v0.11)\n\nDefault: `true`\n\nThe inverse of the `stable` prop. If both `fickle` and `stable` are\ndefined then `stable` takes precedence.",name:"fickle",required:!1,type:{name:"boolean"}},onOpen:{defaultValue:null,description:"Convenience callback that runs as soon as the `open` flag flips to `true`\n– including on initial opening.\n\nHowever, the initial `onOpen` is skipped when `startOpen` is set to `true`.",name:"onOpen",required:!1,type:{name:"(() => void)"}},onClose:{defaultValue:null,description:"Convenience callback that runs as soon as the `open` flag flips to `false`",name:"onClose",required:!1,type:{name:"(() => void)"}},onClosed:{defaultValue:null,description:"Callback that runs when the modal closes – **after** `closeDelay` has elaped.",name:"onClosed",required:!0,type:{name:"() => void"}},texts:{defaultValue:null,description:"Default:\n```\n{\n  closeButton: 'Close',\n  closeButtonLabel: 'Close this window',\n}\n```",name:"texts",required:!1,type:{name:"Readonly<{ closeButton: string; closeButtonLabel?: string; }>"}},lang:{defaultValue:null,description:"",name:"lang",required:!1,type:{name:"string"}},portal:{defaultValue:null,description:"Should the modal be mounted in a Portal component `<div/>`\nlocated outside the ReactDOM.render root element?\n\nDefault: `true`",name:"portal",required:!1,type:{name:"boolean"}},render:{defaultValue:null,description:"Render function that receives a `closeModal` action dispatcher.",name:"render",required:!1,type:{name:"((props: { closeModal(): void; }) => ReactNode)"}},wrapperProps:{defaultValue:null,description:`Custom HTML attributes for the component's wrapper element.

Note, however, that some props may be intentionally
excluded from the list.

__WARNING:__
In some cases props added this way can break the component, og hurt its
accessibility.  Also, some props may get ignored, or over-ridden by the
component. User discretion is advised.`,name:"wrapperProps",required:!1,type:{name:'HTMLProps<"div", "hidden" | "role">'}},ssr:{defaultValue:null,description:`Indicates whether server-side rendering is supported or not.

The \`ssr-only\` value is useful for cases where you need
to demo the server-rendered version in a browser.`,name:"ssr",required:!1,type:{name:"SSRSupport"}},modifier:{defaultValue:null,description:"Modal width modifier",name:"modifier",required:!1,type:{name:"enum",value:[{value:'"w6"'},{value:'"w8"'},{value:'"w10"'}]}},bling:{defaultValue:null,description:"",name:"bling",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>> | (() => ReactElement<any, string | JSXElementConstructor<any>>)"}}}}}catch{}const T=["auto","narrow","medium","wide"],q={auto:void 0,narrow:"w6",medium:"w8",wide:"w10"},b=n=>({modifier:q[n.width],noCloseButton:n.noCloseButton,bling:n.bling||void 0}),v=()=>e.jsx(M,{type:"circle-waves-vertical",align:"right",parent:"top",vertical:"down"}),ee={title:"Modal",argTypes:{width:{name:"Width",options:T,control:{type:"inline-radio",labels:{auto:"Auto",narrow:"Narrow",medium:"Medium",wide:"Wide"}}},noCloseButton:{name:"No close button"},bling:{name:"Bling decoration"}},args:{width:"wide",noCloseButton:!1,bling:!1}},s={render:n=>{const{open:t}=n,{bling:a,modifier:r,noCloseButton:l}=b(n),o=[t,r,l].join("|");return e.jsx(d,{modifier:r,open:t,startOpen:t,noCloseButton:l,onClosed:()=>{},portal:!1,bling:a&&v(),children:e.jsx("p",{children:"Modal content..."})},o)},argTypes:{open:{name:"Open"}},args:{open:!0}},O=n=>{const{bling:t,modifier:a,noCloseButton:r}=b(n),[l,o]=C.useState(!0),B=()=>o(!0),w=()=>o(!1);return e.jsxs(e.Fragment,{children:[e.jsx(p,{onClick:()=>B(),children:"Opna modal"}),e.jsx(d,{modifier:a,open:l,onClosed:w,startOpen:!0,noCloseButton:r,portal:!1,stable:!0,bling:t&&v(),render:({closeModal:u})=>e.jsxs(e.Fragment,{children:[e.jsx(_,{children:"Ertu viss?"}),e.jsx(V,{children:e.jsx("p",{children:"Athugið að þegar hætt er við umsókn mun hún ekki vistast og þú munt þurfa að byrja upp á nýtt."})}),e.jsxs(x,{children:[e.jsx(p,{onClick:u,children:"Nei, halda áfram með umsókn"})," ",e.jsx(k,{onClick:u,children:"Ég er viss, hætta við umsókn"})]}),`

`]})})]})},i={render:n=>e.jsx(O,{...n}),argTypes:{},args:{},parameters:{css:{tokens:"Modal,ButtonPrimary,ButtonTertiary,Heading,TextBlock,Bling"}}};var c,m,f;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => {
    const {
      open
    } = args;
    const {
      bling,
      modifier,
      noCloseButton
    } = getKnobValues(args);
    const key = [open, modifier, noCloseButton].join('|');
    return <Modal key={key} modifier={modifier} open={open} startOpen={open} noCloseButton={noCloseButton} onClosed={() => undefined} portal={false} bling={bling && renderBling()}>
        <p>Modal content...</p>
      </Modal>;
  },
  argTypes: {
    open: {
      name: 'Open'
    }
  },
  args: {
    open: true
  }
}`,...(f=(m=s.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var h,g,y;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <ModalDynamicsStory {...args} />,
  argTypes: {},
  args: {},
  parameters: {
    css: {
      tokens: 'Modal,ButtonPrimary,ButtonTertiary,Heading,TextBlock,Bling'
    }
  }
}`,...(y=(g=i.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const ne=["_Modal","_ModalDynamics"];export{s as _Modal,i as _ModalDynamics,ne as __namedExportsOrder,ee as default};
//# sourceMappingURL=Modal.stories-3f3d13d2.js.map
