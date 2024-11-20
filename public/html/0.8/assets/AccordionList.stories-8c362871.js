import{j as e}from"./jsx-runtime-f961835c.js";import{r as L}from"./index-f80c8c95.js";import{m as k}from"./getSVGtext-a8bc7f1c.js";import{a as N,u as S}from"./_useMobileMenuToggling-7bb485b9.js";import{u as T}from"./browserSide-4379edd8.js";import"./_Link-b7c9c4c9.js";const O=r=>{const{title:o,content:a,id:p,disabled:l=!1,ssr:d,open:c,onToggle:f}=r,g=L.useRef(r.defaultOpen),s=S(),n=T(d),t=n&&l||!a;return e.jsxs("div",{className:k("AccordionList__item",[t&&"disabled"]),id:p,"data-start-open":g.current,"data-sprinkled":n,children:[e.jsx("h3",{className:"AccordionList__title",children:n?e.jsx("button",{type:"button",className:"AccordionList__button","aria-controls":s,"aria-expanded":c||void 0,onClick:f,disabled:t,children:o}):o}),e.jsx("div",{id:n&&s,className:"AccordionList__content",hidden:n&&(!c||t),children:a})]})},i=r=>{const{items:o,ssr:a,wide:p,defaultOpen:l,wrapperProps:d}=r,[c,f]=N(r,"open",[]),g=s=>{f(n=>{const t=!n.includes(s),y=t?n.concat(s):n.filter(_=>_!==s);return r.onToggle&&r.onToggle({newOpen:y,index:s,opened:t}),y})};return e.jsx("div",{...d,className:k("AccordionList",[p&&"wide"],(d||{}).className),children:o.map((s,n)=>e.jsx(O,{...s,ssr:a,open:c.includes(n),onToggle:()=>g(n),defaultOpen:l&&l.includes(n)},n))})};try{i.displayName="AccordionList",i.__docgenInfo={description:"",displayName:"AccordionList",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"AccordionListItemProps[]"}},open:{defaultValue:null,description:"Index of the currently open items (controlled use)",name:"open",required:!1,type:{name:"number[]"}},onToggle:{defaultValue:null,description:"Called whenever an AccodrionList item is toggled",name:"onToggle",required:!1,type:{name:"((data: { newOpen: number[]; index: number; opened: boolean; }) => void)"}},defaultOpen:{defaultValue:null,description:"Index of those items that should start open (uncontrolled use)",name:"defaultOpen",required:!1,type:{name:"number[]"}},wide:{defaultValue:null,description:"",name:"wide",required:!1,type:{name:"boolean"}},wrapperProps:{defaultValue:null,description:`Custom HTML attributes for the component's wrapper element.

Note, however, that some props may be intentionally
excluded from the list.

__WARNING:__
In some cases props added this way can break the component, og hurt its
accessibility.  Also, some props may get ignored, or over-ridden by the
component. User discretion is advised.`,name:"wrapperProps",required:!1,type:{name:"HTMLProps<null, never>"}},ssr:{defaultValue:null,description:`Indicates whether server-side rendering is supported or not.

The \`ssr-only\` value is useful for cases where you need
to demo the server-rendered version in a browser.`,name:"ssr",required:!1,type:{name:"SSRSupport"}},startSeen:{defaultValue:null,description:"@deprecated This prop does nothing nowadays (Will be removed in v0.11)",name:"startSeen",required:!1,type:{name:"boolean"}}}}}catch{}const R={title:"AccordionList",parameters:{css:{tokens:"AccordionList"},viewport:{defaultViewport:"responsive"}}},h=()=>[{title:"Accordion list with label spreading over 2 lines spreading over 2 lines spreading over 2 lines",content:"Hello this accordion item starts open"},{title:"Accordion item",content:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["Reri goðaheill renni, ",e.jsx("a",{href:"",children:"söfnum akratungu óvirða"})," hofgarða-refs dyflini. Sigvaldi frekust lögfengið vífi, barðan sveinung ódáðamanninn,"," ",e.jsx("strong",{children:"firðinum skipkaup"})," sæmdina tjóar kníf geldur ræna ójafnað. Gjósa þiðrandason, þrotin mannafarar styggðist."]}),e.jsx("p",{children:"Kærðu skegg, bárðarsonar sektar mjaðmárdal. Gjörvast húsaviðar útfiri, bænarorð ekið, skalla-grímur auðhnykkjanda askmannsstöðum víkingi bræðrunga gerðinu allmikilli."}),e.jsxs("ul",{children:[e.jsx("li",{children:"Dirf vífi hróp, úlfa skyldleikar, hauginn fremi hnútu færir."}),e.jsx("li",{children:"geirþjófsfirði reginmóðs. Svefnsel sundsins, lamb ryðst meðallok siglt. Kviðling orfið bróklindahaldið, sorti skipbrotsmönnum, eirði flusti rignir lýkst þrotin."})]})]})},{title:"Accordion items",content:"Hello content",disabled:!0}],u={render:r=>e.jsx(i,{items:h(),wide:r.fullWidth,defaultOpen:[0]}),argTypes:{fullWidth:{name:"Full width"}},args:{fullWidth:!1}},m={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(i,{items:h()}),e.jsx(i,{items:h(),wide:!0})]}),parameters:{controls:{hideNoControlsWarning:!0}}};var b,v,w;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <AccordionList items={items()} wide={args.fullWidth} defaultOpen={[0]} />,
  argTypes: {
    fullWidth: {
      name: 'Full width'
    }
  },
  args: {
    fullWidth: false
  }
}`,...(w=(v=u.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var j,x,A;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <>
      <AccordionList items={items()} />
      <AccordionList items={items()} wide />
    </>,
  parameters: {
    controls: {
      hideNoControlsWarning: true
    }
  }
}`,...(A=(x=m.parameters)==null?void 0:x.docs)==null?void 0:A.source}}};const F=["_AccordionList","AccordionListStyling"];export{m as AccordionListStyling,u as _AccordionList,F as __namedExportsOrder,R as default};
//# sourceMappingURL=AccordionList.stories-8c362871.js.map
