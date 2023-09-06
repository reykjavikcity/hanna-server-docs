import{j as a}from"./jsx-runtime-f961835c.js";import{A as s}from"./Alert-fde45566.js";import{B as d}from"./BreadCrumbs-b2ebd8dd.js";import{C as b,c as y}from"./contactBubble.data-9720cd18.js";import{F as f,f as C}from"./footerBadges.data-3c9e4ec7.js";import{F as x,f as h}from"./footerInfo.data-9a1d4325.js";import{L as g}from"./Layout-7bfc843e.js";import{M as j}from"./MainMenu-fdeea40a.js";import{c as L,m as A,a as M}from"./_dummyData-e787b310.js";import"./index-f80c8c95.js";import"./classUtils-ef6e60eb.js";import"./i18n-f5d14da7.js";import"./_Button-f001a419.js";import"./_Link-b7c9c4c9.js";import"./env-5a2a565d.js";import"./index-603b371f.js";import"./hooks-d45327d9.js";import"./domid-a414b1fb.js";import"./getScrollbarWidth-73ca1995.js";import"./getSVGtext-a5d3ecb0.js";import"./addUrlParams-c54217db.js";import"./focusElm-346ced9a.js";import"./getPageScrollElm-bb23cb91.js";import"./breakOnNL-c6ba8973.js";import"./assets-41f88d07.js";import"./_Image-eec1c9c4.js";import"./useGetSVGtext-49da7148.js";import"./useScrollbarWidthCSSVar-a4d743e1.js";import"./range-dbab87d5.js";const ea={title:"Layout",parameters:{layout:{disabled:!0}}},v=r=>{const e=r.globalAlertsContainer,n=r.pageHasNoMenuOrNav?void 0:" ";return a.jsx(g,{globalAlerts:e&&" ",navChildren:n,ssr:"ssr-only",mainChildren:""},""+e+n)},t={render:r=>a.jsx(v,{...r}),argTypes:{globalAlertsContainer:{name:"Global alerts container"},pageHasNoMenuOrNav:{name:"Page has no menu or navigation"}},args:{globalAlertsContainer:!1,pageHasNoMenuOrNav:!1},parameters:{css:{tokens:"Layout"}}},B=r=>{const e=""+r.globalAlerts;return a.jsx(g,{globalAlerts:r.globalAlerts&&a.jsxs(a.Fragment,{children:[a.jsx(s,{type:"warning",closable:!0,children:"Some warning"}),a.jsx(s,{type:"critical",closable:!0,children:"Some critical alert"})]}),navChildren:a.jsxs(a.Fragment,{children:[a.jsx(d,{trail:L.slice(0,2)}),a.jsx(j,{items:A,megaPanels:M})]}),footerChildren:a.jsxs(a.Fragment,{children:[a.jsx(x,{...h}),a.jsx(f,{...C}),a.jsx(b,{...y,alwaysShow:!0})]}),children:a.jsx("p",{children:"...Main Content Components..."})},e)},o={render:r=>a.jsx(B,{...r}),argTypes:{globalAlerts:{name:"Global alerts"}},args:{globalAlerts:!1},parameters:{css:{noLayout:!0,tokens:"Layout-full,FooterBadges,ContactBubble"}}};var l,i,m;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <MinimalLayoutStory {...args} />,
  argTypes: {
    globalAlertsContainer: {
      name: 'Global alerts container'
    },
    pageHasNoMenuOrNav: {
      name: 'Page has no menu or navigation'
    }
  },
  args: {
    globalAlertsContainer: false,
    pageHasNoMenuOrNav: false
  },
  parameters: {
    css: {
      tokens: 'Layout'
    }
  }
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var p,u,c;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <LayoutWithContentStory {...args} />,
  argTypes: {
    globalAlerts: {
      name: 'Global alerts'
    }
  },
  args: {
    globalAlerts: false
  },
  parameters: {
    css: {
      noLayout: true,
      tokens: 'Layout-full,FooterBadges,ContactBubble'
    }
  }
}`,...(c=(u=o.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const ta=["_MinimalLayout","_LayoutWithContent"];export{o as _LayoutWithContent,t as _MinimalLayout,ta as __namedExportsOrder,ea as default};
//# sourceMappingURL=Layout.stories-4ed7f640.js.map
