import{j as e}from"./jsx-runtime-f961835c.js";import{A as n}from"./Alert-848242df.js";import{B as y}from"./BreadCrumbs-d972b4b1.js";import{C as b,c as f}from"./contactBubble.data-5399e6ea.js";import{F as h,f as N}from"./footerBadges.data-3c9e4ec7.js";import{F as x,f as L}from"./footerInfo.data-9a1d4325.js";import{L as c}from"./Layout-8b2b3efd.js";import{M as C}from"./MainMenu-435c9ba7.js";import{d as j,m as M,a as A}from"./_dummyData-f4caad03.js";import{t as v}from"./knobs-e5289b83.js";import"./index-f80c8c95.js";import"./classUtils-ef6e60eb.js";import"./i18n-18e56484.js";import"./_Button-0c36286c.js";import"./_Link-b7c9c4c9.js";import"./env-5a2a565d.js";import"./browserSide-4379edd8.js";import"./_useMobileMenuToggling-15a67498.js";import"./getSVGtext-8f35f9ab.js";import"./focusElm-346ced9a.js";import"./getPageScrollElm-bb23cb91.js";import"./breakOnNL-c6ba8973.js";import"./_Layouts-4acf6b0d.js";import"./assets-b24d1fcc.js";import"./_Image-73a64cfc.js";import"./useGetSVGtext-c22e972a.js";import"./a11yHelpers-7522e110.js";import"./useScrollbarWidthCSSVar-c4f201a8.js";import"./range-dbab87d5.js";import"./cssutils-e70a1e0e.js";import"./themes-56ee0168.js";const ne={title:"Layout",parameters:{layout:{disabled:!0}}},S=a=>{const r=`${a.globalAlerts}${a.siteName}`;return e.jsx(c,{siteName:a.siteName?"Website Name":void 0,globalAlerts:a.globalAlerts&&e.jsxs(e.Fragment,{children:[e.jsx(n,{type:"warning",closable:!0,children:"Some warning"}),e.jsx(n,{type:"critical",closable:!0,children:"Some critical alert"})]}),mainChildren:e.jsx("p",{children:"...Main Content Components..."}),navChildren:e.jsxs(e.Fragment,{children:[e.jsx(y,{trail:j.slice(0,2)}),e.jsx(C,{items:M,megaPanels:A})]}),footerChildren:e.jsxs(e.Fragment,{children:[e.jsx(x,{...L}),e.jsx(h,{...N}),e.jsx(b,{...f,alwaysShow:!0})]})},r)},t={render:a=>e.jsx(S,{...a}),argTypes:{globalAlerts:{name:"Global alerts"},siteName:{name:"Stand-alone website"}},args:{globalAlerts:!1,siteName:!1},parameters:{css:{noLayout:!0,tokens:"Layout-full,FooterBadges,ContactBubble"}}},B=a=>{const r=a.globalAlerts,s=a.pageHasNoMenuOrNav?void 0:" ",d=`${r}${s}${a.siteName}`;return e.jsx(c,{siteName:a.siteName?"Website Name":void 0,globalAlerts:r&&" ",navChildren:s,mainChildren:""},d)},o={render:a=>e.jsx(B,{...a}),argTypes:{...t.argTypes,pageHasNoMenuOrNav:{name:"Page has no menu or navigation"},...v},args:{...t.args,pageHasNoMenuOrNav:!1},parameters:{css:{tokens:"Layout"}}};var i,m,l;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(l=(m=t.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var u,p,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <MinimalLayoutStory {...args} />,
  argTypes: {
    ..._LayoutWithContent.argTypes,
    pageHasNoMenuOrNav: {
      name: 'Page has no menu or navigation'
    },
    ...themeArgTypes
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
}`,...(g=(p=o.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};const ie=["_LayoutWithContent","_MinimalLayout"];export{t as _LayoutWithContent,o as _MinimalLayout,ie as __namedExportsOrder,ne as default};
//# sourceMappingURL=Layout.stories-9f963bcb.js.map
