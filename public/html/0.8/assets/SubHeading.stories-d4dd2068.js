import{j as d}from"./jsx-runtime-f961835c.js";import{m as g}from"./getSVGtext-6e71cb30.js";import"./index-f80c8c95.js";const r=e=>{const{small:o,Tag:a="h2",children:t,align:n,wide:s,wrapperProps:l}=e;return d.jsx(a,{...l,className:g("SubHeading",[o&&"small",n==="right"&&`align--${n}`,!n&&s&&"wide"],(l||{}).className),children:t})};try{r.displayName="SubHeading",r.__docgenInfo={description:"",displayName:"SubHeading",props:{Tag:{defaultValue:null,description:"",name:"Tag",required:!1,type:{name:"enum",value:[{value:'"h2"'},{value:'"h3"'}]}},small:{defaultValue:null,description:"",name:"small",required:!1,type:{name:"boolean"}},wide:{defaultValue:null,description:"",name:"wide",required:!1,type:{name:"boolean"}},align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"right"'}]}},wrapperProps:{defaultValue:null,description:`Custom HTML attributes for the component's wrapper element.

Note, however, that some props may be intentionally
excluded from the list.

__WARNING:__
In some cases props added this way can break the component, og hurt its
accessibility.  Also, some props may get ignored, or over-ridden by the
component. User discretion is advised.`,name:"wrapperProps",required:!1,type:{name:"HTMLProps<null, never>"}},startSeen:{defaultValue:null,description:"@deprecated This prop does nothing nowadays (Will be removed in v0.11)",name:"startSeen",required:!1,type:{name:"boolean"}}}}}catch{}const c=["left","right","wide"],h=["h2","h3"],H={title:"text/SubHeading"},y=({layout:e,small:o,headingLevel:a})=>{const t=e!=="left"?e:void 0,n=t==="wide"?{wide:!0}:{align:t},s=o||void 0,l=a!=="h2"?a:void 0;return d.jsx(r,{...n,small:s,Tag:l,children:"Subheading title"})},i={render:e=>d.jsx(y,{...e}),argTypes:{layout:{name:"Layout",options:c,control:{type:"inline-radio",labels:{left:"Left",right:"Right aligned",wide:"Wide"}}},small:{name:"Small"},headingLevel:{name:"Heading level",options:h,control:{type:"inline-radio",labels:{h2:"H2 (default)",h3:"H3"}}}},args:{layout:"left",small:!1,headingLevel:"h2"}};var p,u,m;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <SubHeadingStory {...args} />,
  argTypes: {
    layout: {
      name: 'Layout',
      options: layoutOptions,
      control: {
        type: 'inline-radio',
        labels: ({
          left: 'Left',
          right: 'Right aligned',
          wide: 'Wide'
        } satisfies Record<Layout, string>)
      }
    },
    small: {
      name: 'Small'
    },
    headingLevel: {
      name: 'Heading level',
      options: headingLevelOptions,
      control: {
        type: 'inline-radio',
        labels: ({
          h2: 'H2 (default)',
          h3: 'H3'
        } satisfies Record<HeadingLevel, string>)
      }
    }
  },
  args: {
    layout: 'left',
    small: false,
    headingLevel: 'h2'
  }
}`,...(m=(u=i.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const _=["_SubHeading"];export{i as _SubHeading,_ as __namedExportsOrder,H as default};
//# sourceMappingURL=SubHeading.stories-d4dd2068.js.map
