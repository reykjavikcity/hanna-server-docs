import{j as u}from"./jsx-runtime-f961835c.js";import{M as p}from"./MainMenu-435c9ba7.js";import{m as g,a as n,b as M,c as P}from"./_dummyData-f4caad03.js";import"./index-f80c8c95.js";import"./classUtils-ef6e60eb.js";import"./focusElm-346ced9a.js";import"./getPageScrollElm-bb23cb91.js";import"./i18n-18e56484.js";import"./_Link-b7c9c4c9.js";import"./assets-b24d1fcc.js";import"./_useMobileMenuToggling-15a67498.js";import"./getSVGtext-8f35f9ab.js";import"./browserSide-4379edd8.js";import"./range-dbab87d5.js";const E={title:"Layout/MainMenu",parameters:{controls:{hideNoControlsWarning:!0},layout:{head:!0,pos:"nav"}},argTypes:{ssr:{name:"Server-side Markup"}},args:{ssr:!1}},a={render:e=>u.jsx(p,{ssr:e.ssr?"ssr-only":!0,...e.megaPanels?{items:g,megaPanels:n,auxiliaryPanel:M}:{items:P}},`${e.ssr}-${e.megaPanels}`),argTypes:{megaPanels:{name:"Mega Panels"}},args:{megaPanels:!1}},s={render:e=>u.jsx(p,{ssr:e.ssr?"ssr-only":!0,items:g,megaPanels:n,activePanelId:n[0].id,auxiliaryPanel:M},`${e.ssr}-`),parameters:{css:{tokens:"MainMenu"}}};var r,m,t;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => <MainMenu key={\`\${args.ssr}-\${args.megaPanels}\`} ssr={args.ssr ? 'ssr-only' : true} {...args.megaPanels ? {
    items: mainMenuItems,
    megaPanels: megaMenuPanels,
    auxiliaryPanel: auxiliaryPanel
  } : {
    items: mainMenuItemsSimple
  }} />,
  argTypes: {
    megaPanels: {
      name: 'Mega Panels'
    }
  },
  args: {
    megaPanels: false
  }
}`,...(t=(m=a.parameters)==null?void 0:m.docs)==null?void 0:t.source}}};var i,o,l;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => <MainMenu key={\`\${args.ssr}-\`} ssr={args.ssr ? 'ssr-only' : true} items={mainMenuItems} megaPanels={megaMenuPanels} activePanelId={megaMenuPanels[0]!.id} auxiliaryPanel={auxiliaryPanel} />,
  parameters: {
    css: {
      tokens: 'MainMenu'
    }
  }
}`,...(l=(o=s.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};const b=["_MainMenu","_MegaMenu"];export{a as _MainMenu,s as _MegaMenu,b as __namedExportsOrder,E as default};
//# sourceMappingURL=Mainmenu.stories-8bd8de02.js.map
