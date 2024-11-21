import{j as e}from"./jsx-runtime-f961835c.js";import{m as p}from"./getSVGtext-6e71cb30.js";import"./index-f80c8c95.js";import"./_Link-b7c9c4c9.js";import"./_useMobileMenuToggling-93fc22f5.js";import{u as c}from"./useScrollbarWidthCSSVar-e41e9b7a.js";import{h as a}from"./hannavars-15dde083.js";import{H as u}from"./HiddenTiger-e2ccf9ec.js";import{t as h}from"./knobs-65c9100b.js";import"./ObjectHelpers-f7b28faf.js";import"./cssutils-ef0fc746.js";import"./assets-83022afa.js";import"./themes-56ee0168.js";const t=r=>{c();const{colorTheme:n,children:d,wrapperProps:s}=r;return e.jsx("div",{...s,className:p("IframedLayout",r.modifier,(s||{}).className),"data-color-theme":n,children:d})};try{t.displayName="IframedLayout",t.__docgenInfo={description:"",displayName:"IframedLayout",props:{colorTheme:{defaultValue:null,description:"",name:"colorTheme",required:!1,type:{name:"enum",value:[{value:'"trustworthy"'},{value:'"dependable"'},{value:'"friendly"'},{value:'"lively"'},{value:'"colorful"'}]}},lang:{defaultValue:null,description:"",name:"lang",required:!1,type:{name:"enum",value:[{value:'"is"'},{value:'"en"'},{value:'"pl"'}]}},wrapperProps:{defaultValue:null,description:`Custom HTML attributes for the component's wrapper element.

Note, however, that some props may be intentionally
excluded from the list.

__WARNING:__
In some cases props added this way can break the component, og hurt its
accessibility.  Also, some props may get ignored, or over-ridden by the
component. User discretion is advised.`,name:"wrapperProps",required:!1,type:{name:'HTMLProps<"div", "data-color-theme">'}},modifier:{defaultValue:null,description:`List of CSS BEM --modifier's to add to the component's main wrapper.

All falsy values are neatly skipped.`,name:"modifier",required:!1,type:{name:"ClassNameModifiers"}}}}}catch{}const $={title:"IframedLayout",parameters:{layout:{disabled:!0},css:{noLayout:!0}}},o={render:r=>{const n=`${r.theme}`;return e.jsxs(t,{colorTheme:r.theme,children:[e.jsx("p",{children:"...Main Content Components..."}),e.jsxs(u,{children:[e.jsxs("div",{style:{margin:`${a.space_3} 0`,display:"flex",flexFlow:"row wrap",gap:`${a.space_2}`},children:[e.jsx("div",{style:{width:"16rem",height:"3rem",backgroundColor:`${a.theme_color_primary}`}}),e.jsx("div",{style:{width:"8rem",height:"3rem",backgroundColor:`${a.theme_color_secondary}`}}),e.jsx("div",{style:{width:"4rem",height:"3rem",backgroundColor:`${a.theme_color_tertiary}`}})]}),e.jsx("p",{children:"...Some more Content..."})]})]},n)},argTypes:{...h},args:{},parameters:{}};var i,m,l;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => {
    const key = \`\${args.theme}\`;
    return <IframedLayout key={key} colorTheme={args.theme}>
        <p>...Main Content Components...</p>
        <HiddenTiger>
          <div style={{
          margin: \`\${hannaVars.space_3} 0\`,
          display: 'flex',
          flexFlow: 'row wrap',
          gap: \`\${hannaVars.space_2}\`
        }}>
            <div style={{
            width: '16rem',
            height: '3rem',
            backgroundColor: \`\${hannaVars.theme_color_primary}\`
          }} />
            <div style={{
            width: '8rem',
            height: '3rem',
            backgroundColor: \`\${hannaVars.theme_color_secondary}\`
          }} />
            <div style={{
            width: '4rem',
            height: '3rem',
            backgroundColor: \`\${hannaVars.theme_color_tertiary}\`
          }} />
          </div>
          <p>...Some more Content...</p>
        </HiddenTiger>
      </IframedLayout>;
  },
  argTypes: {
    ...themeArgTypes
  },
  args: {},
  parameters: {
    // css: { tokens: 'IframedLayout' },
  }
}`,...(l=(m=o.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const j=["_IframedLayout"];export{o as _IframedLayout,j as __namedExportsOrder,$ as default};
//# sourceMappingURL=IframedLayout.stories-b0a9f170.js.map
