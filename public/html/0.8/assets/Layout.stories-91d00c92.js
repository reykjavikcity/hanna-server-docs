import{j as e}from"./jsx-runtime-f961835c.js";import{A as n}from"./Alert-35568527.js";import{B as y}from"./BreadCrumbs-df82eccc.js";import{C as b,c as f}from"./contactBubble.data-59f99ab7.js";import{F as h,f as N}from"./footerBadges.data-652f62f4.js";import{F as C,f as x}from"./footerInfo.data-695711a7.js";import{L as c}from"./Layout-eb09011e.js";import{M as L}from"./MainMenu2-59098005.js";import{e as M,m as j}from"./_dummyData-a3950782.js";import{t as A}from"./knobs-68ae593a.js";import"./index-f80c8c95.js";import"./getSVGtext-6e71cb30.js";import"./i18n-d547729d.js";import"./_Button-4448554a.js";import"./_Link-b7c9c4c9.js";import"./env-5a2a565d.js";import"./browserSide-4379edd8.js";import"./_useMobileMenuToggling-b033ca8f.js";import"./focusElm-346ced9a.js";import"./getPageScrollElm-bb23cb91.js";import"./breakOnNL-c6ba8973.js";import"./_Layouts-9a51c9ba.js";import"./assets-a330961d.js";import"./_Image-9b5340ce.js";import"./useGetSVGtext-0a2d93d5.js";import"./a11yHelpers-84252a28.js";import"./useScrollbarWidthCSSVar-0b95d8d3.js";import"./ButtonPrimary-4df1b432.js";import"./ButtonSecondary-b8b02a9d.js";import"./FocusTrap-f510b191.js";import"./range-dbab87d5.js";import"./getStableRandomItem-5e7f6e22.js";import"./hannavars-b191aae6.js";import"./ObjectHelpers-f7b28faf.js";import"./themes-56ee0168.js";const le={title:"Layout",parameters:{layout:{disabled:!0}}},v=a=>{const r=`${a.globalAlerts}${a.siteName}`;return e.jsx(c,{siteName:a.siteName?"Website Name":void 0,globalAlerts:a.globalAlerts&&e.jsxs(e.Fragment,{children:[e.jsx(n,{type:"warning",closable:!0,children:"Some warning"}),e.jsx(n,{type:"critical",closable:!0,children:"Some critical alert"})]}),mainChildren:e.jsx("p",{children:"...Main Content Components..."}),navChildren:e.jsxs(e.Fragment,{children:[e.jsx(y,{trail:M.slice(0,2)}),e.jsx(L,{items:j()})]}),footerChildren:e.jsxs(e.Fragment,{children:[e.jsx(C,{...x}),e.jsx(h,{...N}),e.jsx(b,{...f,alwaysShow:!0})]})},r)},t={render:a=>e.jsx(v,{...a}),argTypes:{globalAlerts:{name:"Global alerts"},siteName:{name:"Stand-alone website"}},args:{globalAlerts:!1,siteName:!1},parameters:{css:{noLayout:!0,tokens:"Layout,MainMenu2,FooterInfo,Alert,BreadCrumbs,FooterBadges,ContactBubble"}}},B=a=>{const r=a.globalAlerts,s=a.pageHasNoMenuOrNav?void 0:" ",d=`${r}${s}${a.siteName}`;return e.jsx(c,{siteName:a.siteName?"Website Name":void 0,globalAlerts:r&&" ",navChildren:s,mainChildren:""},d)},o={render:a=>e.jsx(B,{...a}),argTypes:{...t.argTypes,pageHasNoMenuOrNav:{name:"Page has no menu or navigation"},...A},args:{...t.args,pageHasNoMenuOrNav:!1},parameters:{css:{tokens:"Layout"}}};var i,m,l;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
      tokens: 'Layout,MainMenu2,FooterInfo,Alert,BreadCrumbs,FooterBadges,ContactBubble'
    }
  }
}`,...(l=(m=t.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var p,u,g;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(g=(u=o.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const pe=["_LayoutWithContent","_MinimalLayout"];export{t as _LayoutWithContent,o as _MinimalLayout,pe as __namedExportsOrder,le as default};
//# sourceMappingURL=Layout.stories-91d00c92.js.map
