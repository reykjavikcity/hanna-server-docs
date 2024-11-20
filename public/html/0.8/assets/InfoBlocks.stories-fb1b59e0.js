import{j as t}from"./jsx-runtime-f961835c.js";import{m as d}from"./getSVGtext-a8bc7f1c.js";import"./index-f80c8c95.js";const r=e=>{const{title:a,subtitle:i,items:m,wrapperProps:s}=e;return t.jsxs("div",{...s,className:d("InfoBlock",null,(s||{}).className),children:[t.jsx("h2",{className:"InfoBlock__title",children:a}),i&&t.jsx("div",{className:"InfoBlock__subtitle",children:i}),t.jsx("ul",{className:"InfoBlock__items",children:m.map((c,g)=>t.jsx("li",{className:"InfoBlock__item",children:c},g))}),"extraInfo"in e&&t.jsx("div",{className:"InfoBlock__extrainfo",children:e.extraInfo}),"attention"in e&&t.jsx("div",{className:"InfoBlock__attention",children:e.attention})]})};try{r.displayName="InfoBlock",r.__docgenInfo={description:"",displayName:"InfoBlock",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},subtitle:{defaultValue:null,description:"",name:"subtitle",required:!1,type:{name:"string | Element"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"(string | Element)[]"}},attention:{defaultValue:null,description:"",name:"attention",required:!1,type:{name:"string | Element"}},extraInfo:{defaultValue:null,description:"",name:"extraInfo",required:!1,type:{name:"string | Element"}},wrapperProps:{defaultValue:null,description:`Custom HTML attributes for the component's wrapper element.

Note, however, that some props may be intentionally
excluded from the list.

__WARNING:__
In some cases props added this way can break the component, og hurt its
accessibility.  Also, some props may get ignored, or over-ridden by the
component. User discretion is advised.`,name:"wrapperProps",required:!1,type:{name:"HTMLProps<null, never>"}},startSeen:{defaultValue:null,description:"@deprecated This prop does nothing nowadays (Will be removed in v0.11)",name:"startSeen",required:!1,type:{name:"boolean"}}}}}catch{}const p=["neither","attention","extra"],f="Info block title",y="Info block subtitle, lorem ipsum dolor sit ament foobar.",h="Athugið að það er hlutverk hönnunarstjóra að tryggja að öll gögn berist embætti byggingarfulltrúa sem og að óska eftir áframhaldandi afgreiðslu málsins þegar gögnin og greiðslan hafa borist. Þá getur formlegt byggingarleyfi verið gefið út og einungis þá getur framkvæmdin hafist. ",k="Eyðublaði og fylgigögnum er skilað til þjónustufulltrúa í þjónustuveri (Borgartúni 12-14), sem framsendir gögn til embættis byggingarfulltrúa.",b=["Umsækjandi sé lóðarhafi, húseigandi eða hönnunarstjóri í umboði hans.","Hönnuður hafi löggildingu, viðurkennt gæðakerfi og fullnægjandi starfsábyrgðartryggingu.","Stöðluðu eyðublaði Byggingarfulltrúa Reykjavíkurborgar og gátlista vegna aðaluppdráttar séu rétt útfyllt.","Öllum fylgiskjölum sé skilað inn; aðaluppdrættir, útfylltur gátlisti vegna aðaluppdrátta og önnur viðeigandi fylgiskjöl varðandi umsókn sbr. lið 6 á umsóknareyðublaði sem eiga við framkvæmdina.","Lágmarkgjald vegna umsóknar sé greitt fyrir fund Byggingarfulltrúa."],_=e=>{if(e==="extra")return{extraInfo:k};if(e==="attention")return{attention:h}},T={title:"InfoBlock"},x=({appearance:e})=>{const a=_(e);return t.jsx(r,{title:f,subtitle:y,items:b,...a})},n={render:e=>t.jsx(x,{...e}),argTypes:{appearance:{name:"With attention/extralinks",options:p,control:{type:"inline-radio",labels:{neither:"Neither",attention:"Attention",extra:"Extra info"}}}},args:{appearance:"neither"}};var l,o,u;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <InfoBlockStory {...args} />,
  argTypes: {
    appearance: {
      name: 'With attention/extralinks',
      options: appearanceOptions,
      control: {
        type: 'inline-radio',
        labels: ({
          neither: 'Neither',
          attention: 'Attention',
          extra: 'Extra info'
        } satisfies Record<ControlProps['appearance'], string>)
      }
    }
  },
  args: {
    appearance: 'neither'
  }
}`,...(u=(o=n.parameters)==null?void 0:o.docs)==null?void 0:u.source}}};const B=["_InfoBlock"];export{n as _InfoBlock,B as __namedExportsOrder,T as default};
//# sourceMappingURL=InfoBlocks.stories-fb1b59e0.js.map
