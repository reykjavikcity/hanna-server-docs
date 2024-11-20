import{j as r}from"./jsx-runtime-f961835c.js";import{r as m}from"./range-dbab87d5.js";import{m as l}from"./getSVGtext-a8bc7f1c.js";import{C as d}from"./_CardList-3afd71d5.js";import{B as p}from"./ButtonTertiary-321394f2.js";import"./index-f80c8c95.js";import"./_Button-3c35395f.js";import"./_Link-b7c9c4c9.js";import"./_Image-7c4cc8d6.js";import"./useGetSVGtext-b9564362.js";const s=e=>{const{wrapperProps:t}=e;return r.jsx("div",{...t,className:l("ActionCards",null,(t||{}).className),children:r.jsx(d,{bemPrefix:"ActionCards",...e,wrapperProps:void 0})})};try{s.displayName="ActionCards",s.__docgenInfo={description:"",displayName:"ActionCards",props:{cards:{defaultValue:null,description:"",name:"cards",required:!0,type:{name:"TextCardProps[]"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},titleTag:{defaultValue:null,description:"",name:"titleTag",required:!1,type:{name:"enum",value:[{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h1"'},{value:'"p"'}]}},summaryElement:{defaultValue:null,description:"",name:"summaryElement",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},wrapperProps:{defaultValue:null,description:`Custom HTML attributes for the component's wrapper element.

Note, however, that some props may be intentionally
excluded from the list.

__WARNING:__
In some cases props added this way can break the component, og hurt its
accessibility.  Also, some props may get ignored, or over-ridden by the
component. User discretion is advised.`,name:"wrapperProps",required:!1,type:{name:"HTMLProps<null, never>"}},startSeen:{defaultValue:null,description:"@deprecated This prop does nothing nowadays (Will be removed in v0.11)",name:"startSeen",required:!1,type:{name:"boolean"}}}}}catch{}const x={title:"ActionCards"},u=m(1,8).map(e=>({title:`ActionCard ${e}`,href:"",summary:e%4===0?void 0:(e+3)%3===0?"Summary for this card lorem ipsum dolor sit bladiblah foo blah":"Summary for this card"})),c=({showTitle:e,showSummaryElement:t})=>r.jsx(s,{title:e?"Action Cards":void 0,summaryElement:t?r.jsx(p,{href:"",children:"Sjá yfirlit"}):void 0,cards:u}),a={render:e=>r.jsx(c,{...e}),argTypes:{showTitle:{name:"ShowTitle"},showSummaryElement:{name:"Summary text/More link"}},args:{showTitle:!0,showSummaryElement:!1}};var n,o,i;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => <ActionCardsStory {...args} />,
  argTypes: {
    showTitle: {
      name: 'ShowTitle'
    },
    showSummaryElement: {
      name: 'Summary text/More link'
    }
  },
  args: {
    showTitle: true,
    showSummaryElement: false
  }
}`,...(i=(o=a.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const A=["_ActionCards"];export{a as _ActionCards,A as __namedExportsOrder,x as default};
//# sourceMappingURL=Actioncards.stories-099d2953.js.map
