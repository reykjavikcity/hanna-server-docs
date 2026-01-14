import{j as e}from"./getSVGtext-33d0ab58.js";import{C as l,c as m}from"./contactBubble.data-6d243c9f.js";import{H as c}from"./HiddenTiger-5148c601.js";import"./index-f80c8c95.js";import"./focusElm-346ced9a.js";import"./getPageScrollElm-bb23cb91.js";import"./i18n-d547729d.js";import"./_Link-b7c9c4c9.js";import"./breakOnNL-aad62e8c.js";import"./_useMobileMenuToggling-af42c346.js";import"./browserSide-4379edd8.js";const j={title:"ContactBubble",parameters:{viewport:{defaultViewport:"responsive"},layout:{pos:"footer"}}},n={render:i=>{const{ssr:t,alwaysShow:s}=i,p=`${t}${s}`;return e.jsxs(e.Fragment,{children:[e.jsx(c,{children:e.jsx("p",{style:{height:"300vh"}})}),e.jsx(l,{...m,alwaysShow:s,ssr:t},p)]})},argTypes:{ssr:{name:"Show client-side markup"},alwaysShow:{name:'Set optional "alwaysShow" data-attribute'}},args:{ssr:!1,alwaysShow:!0}};var a,r,o;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => {
    // /* ONLY use during Development */
    // const [open, setOpen] = useState(false);
    const {
      ssr,
      alwaysShow
    } = args;
    const key = \`\${ssr}\${alwaysShow}\`;
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
}`,...(o=(r=n.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const k=["_ContactBubble"];export{n as _ContactBubble,k as __namedExportsOrder,j as default};
//# sourceMappingURL=ContactBubble.stories-fa64c434.js.map
