import{j as e}from"./jsx-runtime-f961835c.js";import{r as x}from"./index-f80c8c95.js";import{B as h}from"./ButtonPrimary-290ab4f5.js";import{B as y}from"./ButtonTertiary-f8c8cf4d.js";import{m as b}from"./classUtils-ef6e60eb.js";import{F as j}from"./Footnote-08bed0a1.js";import{S as _}from"./Selectbox-168b2516.js";import{T as u}from"./TextInput-810c8a1b.js";import{H as F}from"./HiddenTrigger-6ebc39ae.js";import"./_Button-f001a419.js";import"./_Link-b7c9c4c9.js";import"./getBemClass-701a9212.js";import"./domid-a414b1fb.js";import"./FormField-700213a7.js";import"./env-5a2a565d.js";import"./getScrollbarWidth-ee90c737.js";import"./getSVGtext-8f35f9ab.js";import"./browserSide-4379edd8.js";const N=()=>e.jsx("div",{className:"BlockBreak"}),p=r=>{const{title:n,summary:a,footnote:s,filters:m,children:o,buttonRow:i,underlap:l,wrapperProps:t}=r;return e.jsxs("div",{...t,className:b("PageFilter",l&&"underlap",(t||{}).className),children:[e.jsx("h2",{className:"PageFilter__title",children:n}),a&&e.jsx("div",{className:"PageFilter__summary",children:a}),e.jsx("div",{className:"PageFilter__filters",children:m||o}),e.jsx("div",{className:"PageFilter__buttons",children:i}),s&&e.jsx(j,{children:s})]})};try{p.displayName="PageFilter",p.__docgenInfo={description:"",displayName:"PageFilter",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},summary:{defaultValue:null,description:"",name:"summary",required:!1,type:{name:"ReactNode"}},footnote:{defaultValue:null,description:"",name:"footnote",required:!1,type:{name:"ReactNode"}},buttonRow:{defaultValue:null,description:"",name:"buttonRow",required:!1,type:{name:"ReactNode"}},underlap:{defaultValue:null,description:"",name:"underlap",required:!1,type:{name:"boolean"}},filters:{defaultValue:null,description:"",name:"filters",required:!1,type:{name:"ReactNode"}},wrapperProps:{defaultValue:null,description:`Custom HTML attributes for the component's wrapper element.

Note, however, that some props may be intentionally
excluded from the list.

__WARNING:__
In some cases props added this way can break the component, og hurt its
accessibility.  Also, some props may get ignored, or over-ridden by the
component. User discretion is advised.`,name:"wrapperProps",required:!1,type:{name:"HTMLProps<null, never>"}},startSeen:{defaultValue:null,description:"@deprecated This prop does nothing nowadays (Will be removed in v0.11)",name:"startSeen",required:!1,type:{name:"boolean"}}}}}catch{}const W={title:"PageFilter"},P=({summaryText:r,resetButton:n,footnote:a,lineBreakInputs:s,underlapNextSibling:m})=>{const o=r?"Veldu þér dagsetningu sem og frá hvaða ráði fundargerðin er":void 0,i=a?e.jsxs(e.Fragment,{children:["ATH: Allar Fundargerðir byggingarfulltrúa og skipulagsfulltrúa má nálgast"," ",e.jsx("a",{href:"",children:"hér"}),"."]}):void 0,l=s,t=m;return e.jsxs(x.Fragment,{children:[e.jsx(p,{title:"Leita í fundargerðum",summary:o,filters:e.jsxs(e.Fragment,{children:[e.jsx(u,{label:"Search terms"}),l&&e.jsx(N,{}),e.jsx(u,{label:"Moar terms"}),e.jsx(_,{label:"Optional",placeholder:"asdfasdfasdfasdf",options:["","One option","Other option"]})]}),buttonRow:e.jsxs(e.Fragment,{children:[e.jsx(h,{children:"Sækja fundargerðir"}),n&&e.jsx(y,{disabled:!0,children:"Hreinsa"})]}),footnote:i,underlap:t}),e.jsx(F,{style:{backgroundColor:"rgba(0, 0 ,0, .05",marginLeft:"25%",padding:"7.5% 5%"},children:e.jsxs("p",{children:[e.jsx("strong",{children:"NOTE:"})," ",e.jsx("code",{children:".PageFilter__filters"})," accepts any of the normal form components such as ",e.jsx("code",{children:"DatePicker"}),", ",e.jsx("code",{children:"SearchInput"}),", etc."]})})]},""+o+n+i+t+l)},d={render:r=>e.jsx(P,{...r}),argTypes:{summaryText:{name:"Summary text"},resetButton:{name:"Reset button"},footnote:{name:"Footnote"},lineBreakInputs:{name:"Line break inputs"},underlapNextSibling:{name:"Underlap next sibling"}},args:{summaryText:!0,resetButton:!1,footnote:!1,lineBreakInputs:!1,underlapNextSibling:!1}};var c,f,g;d.parameters={...d.parameters,docs:{...(c=d.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <PageFilterStory {...args} />,
  argTypes: {
    summaryText: {
      name: 'Summary text'
    },
    resetButton: {
      name: 'Reset button'
    },
    footnote: {
      name: 'Footnote'
    },
    lineBreakInputs: {
      name: 'Line break inputs'
    },
    underlapNextSibling: {
      name: 'Underlap next sibling'
    }
  },
  args: {
    summaryText: true,
    resetButton: false,
    footnote: false,
    lineBreakInputs: false,
    underlapNextSibling: false
  }
}`,...(g=(f=d.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const D=["_PageFilter"];export{d as _PageFilter,D as __namedExportsOrder,W as default};
//# sourceMappingURL=PageFilter.stories-3c2e0841.js.map
