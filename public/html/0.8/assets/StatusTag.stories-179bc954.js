import{j as n}from"./jsx-runtime-f961835c.js";import{r as g}from"./index-f80c8c95.js";import{m as f}from"./getSVGtext-6e71cb30.js";import{c as m}from"./misc-a59c6db3.js";const h={none:void 0,blue:"color--blue",green:"color--green",yellow:"color--yellow",red:"color--red"},o=a=>{const{children:r,label:l,color:e,light:c,large:d,wrapperProps:s}=a;return n.jsx("span",{...s,className:f("StatusTag",[h[e||"none"],d&&"large",c==="off"&&"light--off"],(s||{}).className),children:n.jsx("span",{className:"StatusTag__label",children:l||r})})};try{o.displayName="StatusTag",o.__docgenInfo={description:"",displayName:"StatusTag",props:{label:{defaultValue:null,description:"Label takes preference over `children`",name:"label",required:!1,type:{name:"ReactNode"}},color:{defaultValue:null,description:"Default: 'none' (grey)",name:"color",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"blue"'},{value:'"green"'},{value:'"yellow"'},{value:'"red"'}]}},light:{defaultValue:null,description:"Hides/removes the colored indicator light ball/bulp.",name:"light",required:!1,type:{name:"enum",value:[{value:'"off"'}]}},large:{defaultValue:null,description:"Make the status tag larger. Defaults to false.",name:"large",required:!1,type:{name:"boolean"}},wrapperProps:{defaultValue:null,description:`Custom HTML attributes for the component's wrapper element.

Note, however, that some props may be intentionally
excluded from the list.

__WARNING:__
In some cases props added this way can break the component, og hurt its
accessibility.  Also, some props may get ignored, or over-ridden by the
component. User discretion is advised.`,name:"wrapperProps",required:!1,type:{name:'HTMLProps<"span", "children">'}}}}}catch{}const w={title:"StatusTag",parameters:{viewport:{defaultViewport:"responsive"}}},y=[void 0,"blue","green","yellow","red"],t={render:a=>{const{lightOff:r,large:l}=a;return n.jsx(g.Fragment,{children:y.map(e=>n.jsx(o,{color:e,light:r?"off":void 0,large:l,label:m(e||"default")},e))},`${r}:${l}`)},argTypes:{lightOff:{name:'Turn off "lightbulp"'},large:{name:"Large variant"}},args:{lightOff:!1,large:!1}};var i,p,u;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => {
    const {
      lightOff,
      large
    } = args;
    return <Fragment key={\`\${lightOff}:\${large}\`}>
        {colors.map(color => <StatusTag key={color} color={color} light={lightOff ? 'off' : undefined} large={large} label={capitalize(color || 'default')} />)}
      </Fragment>;
  },
  argTypes: {
    lightOff: {
      name: 'Turn off "lightbulp"'
    },
    large: {
      name: 'Large variant'
    }
  },
  args: {
    lightOff: false,
    large: false
  }
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const x=["_StatusTag"];export{t as _StatusTag,x as __namedExportsOrder,w as default};
//# sourceMappingURL=StatusTag.stories-179bc954.js.map
