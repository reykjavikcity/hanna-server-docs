import{j as e}from"./jsx-runtime-f961835c.js";import{A as n}from"./Alert-e278cf16.js";import{B as y}from"./BreadCrumbs-d972b4b1.js";import{C as b,c as f}from"./contactBubble.data-f619a25e.js";import{F as N,f as h}from"./footerBadges.data-3c9e4ec7.js";import{F as x,f as L}from"./footerInfo.data-9a1d4325.js";import{L as p}from"./Layout-bfc3ed20.js";import{M as j}from"./MainMenu-a7851959.js";import{c as C,m as M,a as v}from"./_dummyData-e787b310.js";import"./index-f80c8c95.js";import"./classUtils-ef6e60eb.js";import"./i18n-18e56484.js";import"./_Button-f001a419.js";import"./_Link-b7c9c4c9.js";import"./env-5a2a565d.js";import"./browserSide-4379edd8.js";import"./getScrollbarWidth-70c1e033.js";import"./getSVGtext-8f35f9ab.js";import"./focusElm-346ced9a.js";import"./getPageScrollElm-bb23cb91.js";import"./breakOnNL-c6ba8973.js";import"./_Layouts-4b2a6998.js";import"./assets-ca39b462.js";import"./_Image-73a64cfc.js";import"./useGetSVGtext-c22e972a.js";import"./range-dbab87d5.js";const ee={title:"Layout",parameters:{layout:{disabled:!0}}},A=a=>{const r=""+a.globalAlerts+a.siteName;return e.jsx(p,{siteName:a.siteName?"Website Name":void 0,globalAlerts:a.globalAlerts&&e.jsxs(e.Fragment,{children:[e.jsx(n,{type:"warning",closable:!0,children:"Some warning"}),e.jsx(n,{type:"critical",closable:!0,children:"Some critical alert"})]}),navChildren:e.jsxs(e.Fragment,{children:[e.jsx(y,{trail:C.slice(0,2)}),e.jsx(j,{items:M,megaPanels:v})]}),footerChildren:e.jsxs(e.Fragment,{children:[e.jsx(x,{...L}),e.jsx(N,{...h}),e.jsx(b,{...f,alwaysShow:!0})]}),children:e.jsx("p",{children:"...Main Content Components..."})},r)},t={render:a=>e.jsx(A,{...a}),argTypes:{globalAlerts:{name:"Global alerts"},siteName:{name:"Stand-alone website"}},args:{globalAlerts:!1,siteName:!1},parameters:{css:{noLayout:!0,tokens:"Layout-full,FooterBadges,ContactBubble"}}},S=a=>{const r=a.globalAlerts,o=a.pageHasNoMenuOrNav?void 0:" ",d=""+r+o+a.siteName;return e.jsx(p,{siteName:a.siteName?"Website Name":void 0,globalAlerts:r&&" ",navChildren:o,ssr:"ssr-only",mainChildren:""},d)},s={render:a=>e.jsx(S,{...a}),argTypes:{...t.argTypes,pageHasNoMenuOrNav:{name:"Page has no menu or navigation"}},args:{...t.args,pageHasNoMenuOrNav:!1},parameters:{css:{tokens:"Layout"}}};var i,m,l;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => <LayoutWithContentStory {...args} />,
  argTypes: {
    globalAlerts: {
      name: 'Global alerts'
    },
    siteName: {
      name: 'Stand-alone website'
    }
  },
  args: {
    globalAlerts: false,
    siteName: false
  },
  parameters: {
    css: {
      noLayout: true,
      tokens: 'Layout-full,FooterBadges,ContactBubble'
    }
  }
}`,...(l=(m=t.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var u,c,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <MinimalLayoutStory {...args} />,
  argTypes: {
    ..._LayoutWithContent.argTypes,
    pageHasNoMenuOrNav: {
      name: 'Page has no menu or navigation'
    }
  },
  args: {
    ..._LayoutWithContent.args,
    pageHasNoMenuOrNav: false
  },
  parameters: {
    css: {
      tokens: 'Layout'
    }
  }
}`,...(g=(c=s.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};const ae=["_LayoutWithContent","_MinimalLayout"];export{t as _LayoutWithContent,s as _MinimalLayout,ae as __namedExportsOrder,ee as default};
//# sourceMappingURL=Layout.stories-8f5a48fb.js.map
