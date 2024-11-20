import{j as a}from"./jsx-runtime-f961835c.js";import{M as i}from"./MainMenu2-1bd5ce7b.js";import{m as s}from"./_dummyData-4974dfa4.js";import"./index-f80c8c95.js";import"./getSVGtext-a8bc7f1c.js";import"./i18n-d547729d.js";import"./assets-b24d1fcc.js";import"./_Link-b7c9c4c9.js";import"./a11yHelpers-2abd986a.js";import"./_useMobileMenuToggling-7bb485b9.js";import"./ButtonPrimary-9f58e459.js";import"./_Button-3c35395f.js";import"./ButtonSecondary-0e029971.js";import"./FocusTrap-e81f6d3e.js";import"./browserSide-4379edd8.js";import"./range-dbab87d5.js";import"./getStableRandomItem-5e7f6e22.js";const l=["full-blown","only-main","only-related"],R={title:"Layout/MainMenu2",parameters:{controls:{hideNoControlsWarning:!0},layout:{head:!0,pos:"nav"}}},n={render:e=>a.jsx(i,{variant:e.lightVariant?"light":void 0,ssr:e.ssr?"ssr-only":!0,items:s(e.menuContent),illustration:"bekkur"},`${e.ssr}`),argTypes:{menuContent:{name:"Menu content",options:l,control:{type:"inline-radio",labels:{"full-blown":"Fully populated menu","only-main":"Main items only","only-related":"'Related' items only"}}},ssr:{name:"Server-side Markup"},lightVariant:{name:"Light-colored variant (experimental)"}},args:{menuContent:"full-blown",ssr:!1,lightVariant:!1}};var t,r,o;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => {
    return <MainMenu2 key={\`\${args.ssr}\`} variant={args.lightVariant ? 'light' : undefined} ssr={args.ssr ? 'ssr-only' : true} items={mainMenu2Items(args.menuContent)} illustration="bekkur" />;
  },
  argTypes: {
    menuContent: {
      name: 'Menu content',
      options: contentOptions,
      control: {
        type: 'inline-radio',
        labels: ({
          'full-blown': 'Fully populated menu',
          'only-main': 'Main items only',
          'only-related': "'Related' items only"
        } satisfies Record<ControlProps['menuContent'], string>)
      }
    },
    ssr: {
      name: 'Server-side Markup'
    },
    lightVariant: {
      name: 'Light-colored variant (experimental)'
    }
  },
  args: {
    menuContent: 'full-blown',
    ssr: false,
    lightVariant: false
  }
}`,...(o=(r=n.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const _=["_MainMenu2"];export{n as _MainMenu2,_ as __namedExportsOrder,R as default};
//# sourceMappingURL=Mainmenu2.stories-0f6e4f09.js.map
