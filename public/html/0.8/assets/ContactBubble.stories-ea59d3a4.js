import{j as e}from"./jsx-runtime-f961835c.js";import{C as l,c as m}from"./contactBubble.data-06402b8c.js";import{H as c}from"./HiddenTrigger-6ebc39ae.js";import"./index-f80c8c95.js";import"./classUtils-ef6e60eb.js";import"./focusElm-346ced9a.js";import"./getPageScrollElm-bb23cb91.js";import"./i18n-18e56484.js";import"./_Link-b7c9c4c9.js";import"./breakOnNL-c6ba8973.js";import"./getScrollbarWidth-ee90c737.js";import"./domid-a414b1fb.js";import"./getSVGtext-8f35f9ab.js";import"./browserSide-4379edd8.js";const C={title:"ContactBubble",parameters:{viewport:{defaultViewport:"responsive"},layout:{pos:"footer"}}},t={render:i=>{const{ssr:s,alwaysShow:a}=i,p=""+s+a;return e.jsxs(e.Fragment,{children:[e.jsx(c,{children:e.jsx("p",{style:{height:"300vh"}})}),e.jsx(l,{...m,alwaysShow:a,ssr:s},p)]})},argTypes:{ssr:{name:"Show client-side markup"},alwaysShow:{name:'Set optional "alwaysShow" data-attribute'}},args:{ssr:!1,alwaysShow:!0}};var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => {
    // /* ONLY use during Development */
    // const [open, setOpen] = useState(false);
    const {
      ssr,
      alwaysShow
    } = args;
    const key = '' + ssr + alwaysShow;
    return <>
        <HiddenTiger>
          <p style={{
          height: '300vh'
        }} />
        </HiddenTiger>

        <ContactBubble key={key} {...contactBubbleData} alwaysShow={alwaysShow}
      // /* ONLY use during Development */
      // open={open}
      // onToggle={setOpen}
      ssr={ssr} />
      </>;
  },
  argTypes: {
    ssr: {
      name: 'Show client-side markup'
    },
    alwaysShow: {
      name: 'Set optional "alwaysShow" data-attribute'
    }
  },
  args: {
    ssr: false,
    alwaysShow: true
  }
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const T=["_ContactBubble"];export{t as _ContactBubble,T as __namedExportsOrder,C as default};
//# sourceMappingURL=ContactBubble.stories-ea59d3a4.js.map
