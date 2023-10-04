import{j as e}from"./jsx-runtime-f961835c.js";import{r as c}from"./index-f80c8c95.js";import{T as y,f as j}from"./Tabs-a6065dca.js";import{u as L}from"./browserSide-4379edd8.js";import"./_Link-b7c9c4c9.js";import"./getScrollbarWidth-108c5f9b.js";import"./getSVGtext-8f35f9ab.js";import{H as A}from"./HiddenTrigger-aae853a4.js";import"./classUtils-ef6e60eb.js";import"./getPageScrollElm-bb23cb91.js";const k=["button","link"],N={title:"Tabs",parameters:{css:{tokens:"Tabs"},viewport:{defaultViewport:"responsive"}}},E=[1,2,3,4].map(t=>({label:"Tab "+t+(t===2?" has very, very longwinded label":""),longLabel:t===4?"Tab "+t+" has longer label":void 0,badge:[14,2,void 0,"1.024"][t-1]})),p=E.map((t,o)=>({...t,href:"#tab-"+(o+1)})),H=({htmlElement:t,verticalLayout:o,badges:s,subTabs:r,showControlledDivExample:n})=>{const a=t==="button",l=a&&n||void 0,b=o,h=a?E:p,g=s?h:h.map(i=>({...i,badge:void 0})),u=r?{tabs:g.map(i=>({...i,label:"Sub-"+i.label.toLowerCase(),longLabel:i.longLabel?"Sub-"+i.longLabel.toLowerCase():void 0})),activeIdx:0,"aria-label":"Sub tab label","aria-controls":l&&"tab-target"}:void 0;return e.jsxs(c.Fragment,{children:[e.jsx(y,{role:"tablist",activeIdx:1,tabs:g,"aria-label":"Optional label text","aria-controls":l&&"tab-target",vertical:b,subTabs:u}),l&&e.jsxs(e.Fragment,{children:[`

`,e.jsxs("div",{id:"tab-target",children:[`

`,"Insert content here!",`

`]})]})]},""+a+l+b+s+!!u)},m={render:t=>e.jsx(H,{...t}),argTypes:{htmlElement:{name:"HTML Element",options:k,control:{type:"inline-radio",labels:{button:"<button/>",link:'<a href="" />'}}},verticalLayout:{name:"Vertical layout"},badges:{name:"Badges"},subTabs:{name:"Sub-tabs"},showControlledDivExample:{name:"Show contolled <div/> example",if:{arg:"htmlElement",eq:"button"}}},args:{htmlElement:"link",verticalLayout:!1,badges:!1,subTabs:!1,showControlledDivExample:!1}},I=t=>{const{tabs:o,activeIdx:s,ssr:r}=t,n=L(r);return e.jsx(e.Fragment,{children:o.map((a,l)=>{const b=n&&s===l;return e.jsxs(c.Fragment,{children:[`

`,e.jsxs("div",{className:"TabPanel",id:j.getFrag(a.href),role:"tabpanel","aria-label":a.longLabel||a.label,tabIndex:b?0:void 0,"data-sprinkled":n,hidden:n&&!b,children:[e.jsx("p",{children:e.jsx("strong",{children:a.longLabel||a.label})}),"…"]})]},l)})})},_=({firstTabStartsActive:t,showServerSideHtml:o})=>{const s=o?"ssr-only":!1,r=t?0:void 0,[n,a]=c.useState(r);return c.useEffect(()=>{a(r)},[r]),e.jsxs(c.Fragment,{children:[e.jsx(A,{children:e.jsx("p",{children:"This example shows the markup patterns for anchor-link-driven tablist actions…"})}),e.jsx(y,{"aria-label":"Optional label text",tabs:p,activeIdx:n,onSetActive:a,ssr:s}),`
`,e.jsx(I,{tabs:p,activeIdx:n,ssr:s})]},""+r+s)},d={render:t=>e.jsx(_,{...t}),argTypes:{showServerSideHtml:{name:"Show only server-side HTML"},firstTabStartsActive:{name:"First tab starts active"}},args:{showServerSideHtml:!0,firstTabStartsActive:!0}};var v,T,x;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <TabsStory {...args} />,
  argTypes: {
    htmlElement: {
      name: 'HTML Element',
      options: htmlElementOptions,
      control: {
        type: 'inline-radio',
        labels: ({
          button: '<button/>',
          link: '<a href="" />'
        } satisfies Record<ControlProps['htmlElement'], string>)
      }
    },
    verticalLayout: {
      name: 'Vertical layout'
    },
    badges: {
      name: 'Badges'
    },
    subTabs: {
      name: 'Sub-tabs'
    },
    showControlledDivExample: {
      name: 'Show contolled <div/> example',
      if: {
        arg: 'htmlElement',
        eq: 'button'
      }
    }
  },
  args: {
    htmlElement: 'link',
    verticalLayout: false,
    badges: false,
    subTabs: false,
    showControlledDivExample: false
  }
}`,...(x=(T=m.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};var f,S,w;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <TabsAnchorsStory {...args} />,
  argTypes: {
    showServerSideHtml: {
      name: 'Show only server-side HTML'
    },
    firstTabStartsActive: {
      name: 'First tab starts active'
    }
  },
  args: {
    showServerSideHtml: true,
    firstTabStartsActive: true
  }
}`,...(w=(S=d.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};const z=["_Tabs","_TabsAnchors"];export{m as _Tabs,d as _TabsAnchors,z as __namedExportsOrder,N as default};
//# sourceMappingURL=Tabs.stories-b76667cf.js.map
