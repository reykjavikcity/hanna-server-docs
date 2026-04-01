import{j as e}from"./jsx-runtime-f961835c.js";import{A as n}from"./Alert-22d97e5c.js";import{B as y}from"./BreadCrumbs-df82eccc.js";import{C as b,c as f}from"./contactBubble.data-9c764810.js";import{F as h,f as N}from"./footerBadges.data-652f62f4.js";import{F as C,f as x}from"./footerInfo.data-695711a7.js";import{L as c}from"./Layout-2838168a.js";import{M as L}from"./MainMenu2-8ec8bf6e.js";import{e as M,m as j}from"./_dummyData-02eaf7d9.js";import{t as A}from"./knobs-92abd57e.js";import"./index-f80c8c95.js";import"./getSVGtext-6e71cb30.js";import"./i18n-d547729d.js";import"./_Button-7763e505.js";import"./_Link-b7c9c4c9.js";import"./env-5a2a565d.js";import"./browserSide-4379edd8.js";import"./_useMobileMenuToggling-538f843c.js";import"./misc-a59c6db3.js";import"./focusElm-346ced9a.js";import"./getPageScrollElm-bb23cb91.js";import"./breakOnNL-c6ba8973.js";import"./_Layouts-9a51c9ba.js";import"./assets-a330961d.js";import"./_Image-9b5340ce.js";import"./useGetSVGtext-0a2d93d5.js";import"./a11yHelpers-84252a28.js";import"./useScrollbarWidthCSSVar-b28fc64c.js";import"./ButtonPrimary-d313c4c3.js";import"./ButtonSecondary-edc84dfb.js";import"./FocusTrap-f510b191.js";import"./range-dbab87d5.js";import"./getStableRandomItem-5e7f6e22.js";import"./hannavars-42f3322c.js";import"./ObjectHelpers-f7b28faf.js";import"./themes-56ee0168.js";const pe={title:"Layout",parameters:{layout:{disabled:!0}}},v=a=>{const r=`${a.globalAlerts}${a.siteName}`;return e.jsx(c,{siteName:a.siteName?"Website Name":void 0,globalAlerts:a.globalAlerts&&e.jsxs(e.Fragment,{children:[e.jsx(n,{type:"warning",closable:!0,children:"Some warning"}),e.jsx(n,{type:"critical",closable:!0,children:"Some critical alert"})]}),mainChildren:e.jsx("p",{children:"...Main Content Components..."}),navChildren:e.jsxs(e.Fragment,{children:[e.jsx(y,{trail:M.slice(0,2)}),e.jsx(L,{items:j()})]}),footerChildren:e.jsxs(e.Fragment,{children:[e.jsx(C,{...x}),e.jsx(h,{...N}),e.jsx(b,{...f,alwaysShow:!0})]})},r)},t={render:a=>e.jsx(v,{...a}),argTypes:{globalAlerts:{name:"Global alerts"},siteName:{name:"Stand-alone website"}},args:{globalAlerts:!1,siteName:!1},parameters:{css:{noLayout:!0,tokens:"Layout,MainMenu2,FooterInfo,Alert,BreadCrumbs,FooterBadges,ContactBubble"}}},B=a=>{const r=a.globalAlerts,s=a.pageHasNoMenuOrNav?void 0:" ",d=`${r}${s}${a.siteName}`;return e.jsx(c,{siteName:a.siteName?"Website Name":void 0,globalAlerts:r&&" ",navChildren:s,mainChildren:""},d)},o={render:a=>e.jsx(B,{...a}),argTypes:{...t.argTypes,pageHasNoMenuOrNav:{name:"Page has no menu or navigation"},...A},args:{...t.args,pageHasNoMenuOrNav:!1},parameters:{css:{tokens:"Layout"}}};var i,m,l;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(g=(u=o.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const ue=["_LayoutWithContent","_MinimalLayout"];export{t as _LayoutWithContent,o as _MinimalLayout,ue as __namedExportsOrder,pe as default};
//# sourceMappingURL=Layout.stories-5dd56b14.js.map
