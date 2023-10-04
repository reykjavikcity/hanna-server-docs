import{j as e}from"./jsx-runtime-f961835c.js";import{r as x}from"./index-f80c8c95.js";import{B as h}from"./ButtonPrimary-5e2cfa7b.js";import{B as y}from"./ButtonTertiary-2dc030af.js";import{m as b}from"./classUtils-ef6e60eb.js";import{F as j}from"./Footnote-08bed0a1.js";import{S as _}from"./Selectbox-20670c4e.js";import{T as u}from"./TextInput-b4e43a0e.js";import{H as F}from"./HiddenTrigger-aae853a4.js";import"./_Button-f8e7ee7f.js";import"./_Link-b7c9c4c9.js";import"./getBemClass-701a9212.js";import"./domid-a414b1fb.js";import"./FormField-39c81e7b.js";import"./env-5a2a565d.js";import"./useDomid-e1962be7.js";import"./browserSide-4379edd8.js";import"./getScrollbarWidth-108c5f9b.js";import"./getSVGtext-8f35f9ab.js";const N=()=>e.jsx("div",{className:"BlockBreak"}),p=r=>{const{title:n,summary:a,footnote:s,filters:d,children:o,buttonRow:i,underlap:l,wrapperProps:t}=r;return e.jsxs("div",{...t,className:b("PageFilter",l&&"underlap",(t||{}).className),children:[e.jsx("h2",{className:"PageFilter__title",children:n}),a&&e.jsx("div",{className:"PageFilter__summary",children:a}),e.jsx("div",{className:"PageFilter__filters",children:d||o}),e.jsx("div",{className:"PageFilter__buttons",children:i}),s&&e.jsx(j,{children:s})]})};try{p.displayName="PageFilter",p.__docgenInfo={description:"",displayName:"PageFilter",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},summary:{defaultValue:null,description:"",name:"summary",required:!1,type:{name:"ReactNode"}},footnote:{defaultValue:null,description:"",name:"footnote",required:!1,type:{name:"ReactNode"}},buttonRow:{defaultValue:null,description:"",name:"buttonRow",required:!1,type:{name:"ReactNode"}},underlap:{defaultValue:null,description:"",name:"underlap",required:!1,type:{name:"boolean"}},filters:{defaultValue:null,description:"",name:"filters",required:!1,type:{name:"ReactNode"}},wrapperProps:{defaultValue:null,description:`Custom HTML attributes for the component's wrapper element.

Note, however, that some props may be intentionally
excluded from the list.

__WARNING:__
In some cases props added this way can break the component, og hurt its
accessibility.  Also, some props may get ignored, or over-ridden by the
component. User discretion is advised.`,name:"wrapperProps",required:!1,type:{name:"HTMLProps<null, never>"}},startSeen:{defaultValue:null,description:"@deprecated This prop does nothing nowadays (Will be removed in v0.11)",name:"startSeen",required:!1,type:{name:"boolean"}}}}}catch{}const D={title:"PageFilter"},P=({summaryText:r,resetButton:n,footnote:a,lineBreakInputs:s,underlapNextSibling:d})=>{const o=r?"Veldu þér dagsetningu sem og frá hvaða ráði fundargerðin er":void 0,i=a?e.jsxs(e.Fragment,{children:["ATH: Allar Fundargerðir byggingarfulltrúa og skipulagsfulltrúa má nálgast"," ",e.jsx("a",{href:"",children:"hér"}),"."]}):void 0,l=s,t=d;return e.jsxs(x.Fragment,{children:[e.jsx(p,{title:"Leita í fundargerðum",summary:o,filters:e.jsxs(e.Fragment,{children:[e.jsx(u,{label:"Search terms"}),l&&e.jsx(N,{}),e.jsx(u,{label:"Moar terms"}),e.jsx(_,{label:"Optional",placeholder:"asdfasdfasdfasdf",options:["","One option","Other option"]})]}),buttonRow:e.jsxs(e.Fragment,{children:[e.jsx(h,{children:"Sækja fundargerðir"}),n&&e.jsx(y,{disabled:!0,children:"Hreinsa"})]}),footnote:i,underlap:t}),e.jsx(F,{style:{backgroundColor:"rgba(0, 0 ,0, .05",marginLeft:"25%",padding:"7.5% 5%"},children:e.jsxs("p",{children:[e.jsx("strong",{children:"NOTE:"})," ",e.jsx("code",{children:".PageFilter__filters"})," accepts any of the normal form components such as ",e.jsx("code",{children:"DatePicker"}),", ",e.jsx("code",{children:"SearchInput"}),", etc."]})})]},""+o+n+i+t+l)},m={render:r=>e.jsx(P,{...r}),argTypes:{summaryText:{name:"Summary text"},resetButton:{name:"Reset button"},footnote:{name:"Footnote"},lineBreakInputs:{name:"Line break inputs"},underlapNextSibling:{name:"Underlap next sibling"}},args:{summaryText:!0,resetButton:!1,footnote:!1,lineBreakInputs:!1,underlapNextSibling:!1}};var c,f,g;m.parameters={...m.parameters,docs:{...(c=m.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(g=(f=m.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const G=["_PageFilter"];export{m as _PageFilter,G as __namedExportsOrder,D as default};
//# sourceMappingURL=PageFilter.stories-3d7d5ee1.js.map
