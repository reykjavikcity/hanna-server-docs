import{j as e}from"./jsx-runtime-f961835c.js";import{C as l,c as m}from"./contactBubble.data-64965d27.js";import{H as c}from"./HiddenTiger-e2ccf9ec.js";import"./index-f80c8c95.js";import"./focusElm-346ced9a.js";import"./getPageScrollElm-bb23cb91.js";import"./getSVGtext-a8bc7f1c.js";import"./i18n-d547729d.js";import"./_Link-b7c9c4c9.js";import"./breakOnNL-c6ba8973.js";import"./_useMobileMenuToggling-7bb485b9.js";import"./browserSide-4379edd8.js";const k={title:"ContactBubble",parameters:{viewport:{defaultViewport:"responsive"},layout:{pos:"footer"}}},t={render:i=>{const{ssr:n,alwaysShow:s}=i,p=`${n}${s}`;return e.jsxs(e.Fragment,{children:[e.jsx(c,{children:e.jsx("p",{style:{height:"300vh"}})}),e.jsx(l,{...m,alwaysShow:s,ssr:n},p)]})},argTypes:{ssr:{name:"Show client-side markup"},alwaysShow:{name:'Set optional "alwaysShow" data-attribute'}},args:{ssr:!1,alwaysShow:!0}};var a,r,o;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(r=t.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const v=["_ContactBubble"];export{t as _ContactBubble,v as __namedExportsOrder,k as default};
//# sourceMappingURL=ContactBubble.stories-743ebea3.js.map
