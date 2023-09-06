import{j as e}from"./jsx-runtime-f961835c.js";import{m as v}from"./classUtils-ef6e60eb.js";import"./index-f80c8c95.js";const l=r=>{const{title:t,items:s,attention:a,transparent:i,narrow:o,wrapperProps:m}=r;return e.jsxs("div",{...m,className:v("ProcessOverview",[i&&"transparent",o&&"narrow"],(m||{}).className),children:[e.jsx("h2",{className:"ProcessOverview__title",children:t}),s.map(({title:g,content:p},f)=>e.jsxs("div",{className:"ProcessOverview__item",children:[e.jsx("h3",{className:"ProcessOverview__item__title",children:g}),e.jsx("div",{className:"ProcessOverview__item__content",children:p})]},f)),a&&e.jsx("div",{className:"ProcessOverview__attention",children:a})]})};try{l.displayName="ProcessOverview",l.__docgenInfo={description:"",displayName:"ProcessOverview",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"ProcessOverviewItemProps[]"}},attention:{defaultValue:null,description:"",name:"attention",required:!1,type:{name:"string | Element"}},transparent:{defaultValue:null,description:"",name:"transparent",required:!1,type:{name:"boolean"}},narrow:{defaultValue:null,description:"",name:"narrow",required:!1,type:{name:"boolean"}},wrapperProps:{defaultValue:null,description:`Custom HTML attributes for the component's wrapper element.

Note, however, that some props may be intentionally
excluded from the list.

__WARNING:__
In some cases props added this way can break the component, og hurt its
accessibility.  Also, some props may get ignored, or over-ridden by the
component. User discretion is advised.`,name:"wrapperProps",required:!1,type:{name:"HTMLProps<null, never>"}}}}}catch{}const b={title:"ProcessOverview"},y="Hefðbundinn ferill umsóknar",k="Athugið að samþykkt umsókn er ekki ígildi byggingarleyfis og mega framkvæmdir ekki hefjast fyrr en formlegt leyfi er gefið út.",w=()=>[{title:"Dagur 1-5",content:`Umsókn tekin fyrir á afgreiðslufundi sem er að jafnaði alla þriðjudaga.
Starfsmenn embættis byggingarfulltrúa fara yfir umsóknir og ganga úr skugga um að framkvæmd uppfylli ákvæði laga og reglna um mannvirki og byggingar, skipulagsskilmála og annað sem málið varða. Að fundi loknum fá umsækjendur tilkynningu um afgreiðslu málsins á uppgefin tölvupóstföng, auk þess sem bréf er sent á lögheimili viðkomandi.`},{title:"Dagur 6",content:e.jsxs(e.Fragment,{children:["Umsókn er lögð fyrir fund Umhverfis- og Skipulagsráðs",e.jsx("br",{})," sem er að jafnaði alla miðvikudaga."]})},{title:"Dagur 7",content:"Umsókn er tekin fyrir á næsta fundi Borgarráðs sem er að jafnaði hvern fimmtudag. Því líða að öllu jöfnu að lágmarki tveir dagar frá samþykkt byggingarfulltrúa þar til borgarráð hefur staðfest erindið."}],_=({translucentBackground:r,narrowLayout:t,attentionMessage:s})=>{const a=r,i=t,o=s||void 0;return e.jsx(l,{title:y,items:w(),attention:o&&k,transparent:a,narrow:i})},n={render:r=>e.jsx(_,{...r}),argTypes:{translucentBackground:{name:"Translucent background"},narrowLayout:{name:"Narrow layout"},attentionMessage:{name:'"Attention" message'}},args:{translucentBackground:!1,narrowLayout:!1,attentionMessage:!1}};var u,c,d;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <ProcessOverviewStory {...args} />,
  argTypes: {
    translucentBackground: {
      name: 'Translucent background'
    },
    narrowLayout: {
      name: 'Narrow layout'
    },
    attentionMessage: {
      name: '"Attention" message'
    }
  },
  args: {
    translucentBackground: false,
    narrowLayout: false,
    attentionMessage: false
  }
}`,...(d=(c=n.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const O=["_ProcessOverview"];export{n as _ProcessOverview,O as __namedExportsOrder,b as default};
//# sourceMappingURL=ProcessOverview.stories-91178cc0.js.map
