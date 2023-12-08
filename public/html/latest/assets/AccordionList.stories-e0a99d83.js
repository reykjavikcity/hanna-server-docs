import{j as e}from"./jsx-runtime-f961835c.js";import{r as N}from"./index-f80c8c95.js";import{m as k}from"./classUtils-ef6e60eb.js";import{a as S,u as T}from"./_useMobileMenuToggling-0971be40.js";import{u as O}from"./browserSide-4379edd8.js";import"./_Link-b7c9c4c9.js";import"./getSVGtext-8f35f9ab.js";const W=s=>{const{title:i,content:o,id:p,disabled:a=!1,ssr:l,open:d,onToggle:f}=s,h=N.useRef(s.defaultOpen),c=T(),n=O(l),r=n&&a||!o;return e.jsxs("div",{className:k("AccordionList__item",[r&&"disabled"]),id:p,"data-start-open":h.current,"data-sprinkled":n,children:[e.jsx("h3",{className:"AccordionList__title",children:n?e.jsx("button",{type:"button",className:"AccordionList__button","aria-controls":c,"aria-expanded":d||void 0,onClick:f,disabled:r,children:i}):i}),e.jsx("div",{id:n&&c,className:"AccordionList__content",hidden:n&&(!d||r),children:o})]})},t=s=>{const{items:i,ssr:o,wide:p,defaultOpen:a,wrapperProps:l}=s,[d,f,h]=S(s,"open",[]),c=n=>{f(r=>{const y=!r.includes(n),b=y?r.concat(n):r.filter(L=>L!==n);return s.onToggle&&s.onToggle({newOpen:b,index:n,opened:y}),b})};return e.jsx("div",{...l,className:k("AccordionList",[p&&"wide"],(l||{}).className),children:i.map((n,r)=>e.jsx(W,{...n,ssr:o,open:d.includes(r),onToggle:()=>c(r),defaultOpen:a&&a.includes(r)},r))})};try{t.displayName="AccordionList",t.__docgenInfo={description:"",displayName:"AccordionList",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"AccordionListItemProps[]"}},open:{defaultValue:null,description:"Index of the currently open items (controlled use)",name:"open",required:!1,type:{name:"number[]"}},onToggle:{defaultValue:null,description:"Called whenever an AccodrionList item is toggled",name:"onToggle",required:!1,type:{name:"((data: { newOpen: number[]; index: number; opened: boolean; }) => void)"}},defaultOpen:{defaultValue:null,description:"Index of those items that should start open (uncontrolled use)",name:"defaultOpen",required:!1,type:{name:"number[]"}},wide:{defaultValue:null,description:"",name:"wide",required:!1,type:{name:"boolean"}},wrapperProps:{defaultValue:null,description:`Custom HTML attributes for the component's wrapper element.

Note, however, that some props may be intentionally
excluded from the list.

__WARNING:__
In some cases props added this way can break the component, og hurt its
accessibility.  Also, some props may get ignored, or over-ridden by the
component. User discretion is advised.`,name:"wrapperProps",required:!1,type:{name:"HTMLProps<null, never>"}},ssr:{defaultValue:null,description:`Indicates whether server-side rendering is supported or not.

The \`ssr-only\` value is useful for cases where you need
to demo the server-rendered version in a browser.`,name:"ssr",required:!1,type:{name:"SSRSupport"}},startSeen:{defaultValue:null,description:"@deprecated This prop does nothing nowadays (Will be removed in v0.11)",name:"startSeen",required:!1,type:{name:"boolean"}}}}}catch{}const H={title:"AccordionList",parameters:{css:{tokens:"AccordionList"},viewport:{defaultViewport:"responsive"}}},g=()=>[{title:"Accordion list with label spreading over 2 lines spreading over 2 lines spreading over 2 lines",content:"Hello this accordion item starts open"},{title:"Accordion item",content:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["Reri goðaheill renni, ",e.jsx("a",{href:"",children:"söfnum akratungu óvirða"})," hofgarða-refs dyflini. Sigvaldi frekust lögfengið vífi, barðan sveinung ódáðamanninn,"," ",e.jsx("strong",{children:"firðinum skipkaup"})," sæmdina tjóar kníf geldur ræna ójafnað. Gjósa þiðrandason, þrotin mannafarar styggðist."]}),e.jsx("p",{children:"Kærðu skegg, bárðarsonar sektar mjaðmárdal. Gjörvast húsaviðar útfiri, bænarorð ekið, skalla-grímur auðhnykkjanda askmannsstöðum víkingi bræðrunga gerðinu allmikilli."}),e.jsxs("ul",{children:[e.jsx("li",{children:"Dirf vífi hróp, úlfa skyldleikar, hauginn fremi hnútu færir."}),e.jsx("li",{children:"geirþjófsfirði reginmóðs. Svefnsel sundsins, lamb ryðst meðallok siglt. Kviðling orfið bróklindahaldið, sorti skipbrotsmönnum, eirði flusti rignir lýkst þrotin."})]})]})},{title:"Accordion items",content:"Hello content",disabled:!0}],u={render:s=>e.jsx(t,{items:g(),wide:s.fullWidth,defaultOpen:[0]}),argTypes:{fullWidth:{name:"Full width"}},args:{fullWidth:!1}},m={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(t,{items:g()}),e.jsx(t,{items:g(),wide:!0})]}),parameters:{controls:{hideNoControlsWarning:!0}}};var v,w,j;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <AccordionList items={items()} wide={args.fullWidth} defaultOpen={[0]} />,
  argTypes: {
    fullWidth: {
      name: 'Full width'
    }
  },
  args: {
    fullWidth: false
  }
}`,...(j=(w=u.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var x,A,_;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <>
      <AccordionList items={items()} />
      <AccordionList items={items()} wide />
    </>,
  parameters: {
    controls: {
      hideNoControlsWarning: true
    }
  }
}`,...(_=(A=m.parameters)==null?void 0:A.docs)==null?void 0:_.source}}};const D=["_AccordionList","AccordionListStyling"];export{m as AccordionListStyling,u as _AccordionList,D as __namedExportsOrder,H as default};
//# sourceMappingURL=AccordionList.stories-e0a99d83.js.map
