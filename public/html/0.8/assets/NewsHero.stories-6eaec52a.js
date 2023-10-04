import{j as n}from"./jsx-runtime-f961835c.js";import{r as N}from"./index-f80c8c95.js";import{m as k}from"./classUtils-ef6e60eb.js";import"./getSVGtext-8f35f9ab.js";import{B as S}from"./_Blings-cde56ea3.js";import{I as j}from"./_Image-73a64cfc.js";import{S as g}from"./ShareButtons-f6159e9f.js";import{a as w}from"./browserSide-4379edd8.js";import"./_Link-b7c9c4c9.js";import"./getScrollbarWidth-108c5f9b.js";import{p as _}from"./NewsHero__landscape-995cb06d.js";import"./Bling-c087bbf9.js";import"./assets-ca39b462.js";import"./useGetSVGtext-c22e972a.js";import"./i18n-18e56484.js";import"./ObjectHelpers-f7b28faf.js";const I=e=>[1,5,11,17,29,37].reduce((a,r)=>a+(e.charCodeAt(r%e.length)||32)-32,42),x=(e,a)=>{if(!Array.isArray(e)){const r=x(Object.keys(e),a);return e[r]}return e.length>1?e[I(a)%e.length]:e[0]},d={interesting:[{type:"circle-xlarge",parent:"center"},{type:"loops-small",color:"secondary",align:"left-ish",vertical:"down-ish",parent:"center"}],snake:[{type:"snake-large",align:"left",parent:"top",vertical:"down"}],pentagon:[{type:"pentagon-large",align:"left",parent:"center"}],dome:[{type:"dome-large",align:"left-ish",parent:"top",vertical:"down"}],"balls-small":[{type:"circle-large",align:"left",parent:"center"},{type:"circle-small",color:"secondary",align:"right",parent:"bottom",vertical:"down"}],"balls-large":[{type:"halfcircle-down-large",align:"left",parent:"bottom",vertical:"up"},{type:"circle-medium",color:"secondary",align:"left-center",parent:"bottom"}]},p=e=>{const{title:a,sharing:r=!0,meta:o,summary:s,image:t,blingType:i,wrapperProps:c}=e,H=typeof i=="object"?i:i&&d[i]||x(d,a);return n.jsxs("div",{...c,className:k("NewsHero",[!t&&"align--right"],(c||{}).className),children:[n.jsxs("div",{className:"NewsHero__content",children:[n.jsx("h1",{className:"NewsHero__title",children:a}),o&&n.jsx("span",{className:"NewsHero__meta",children:o}),n.jsx("div",{className:"NewsHero__summary",children:s}),r===!0?n.jsx(g,{}):r&&r()]}),t?n.jsx(j,{bem:"NewsHero__image",...t}):n.jsx(S,{blings:H})]})};try{p.displayName="NewsHero",p.__docgenInfo={description:"",displayName:"NewsHero",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},meta:{defaultValue:null,description:"",name:"meta",required:!1,type:{name:"string"}},summary:{defaultValue:null,description:"",name:"summary",required:!1,type:{name:"string | Element"}},sharing:{defaultValue:null,description:"For custom sharing component",name:"sharing",required:!1,type:{name:"boolean | (() => Element)"}},image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"ImageProps"}},blingType:{defaultValue:null,description:"",name:"blingType",required:!1,type:{name:"BlingOptions | [ConstrainedBlingProps, ...ConstrainedBlingProps[]]"}},wrapperProps:{defaultValue:null,description:`Custom HTML attributes for the component's wrapper element.

Note, however, that some props may be intentionally
excluded from the list.

__WARNING:__
In some cases props added this way can break the component, og hurt its
accessibility.  Also, some props may get ignored, or over-ridden by the
component. User discretion is advised.`,name:"wrapperProps",required:!1,type:{name:"HTMLProps<null, never>"}},startSeen:{defaultValue:null,description:"@deprecated This prop does nothing nowadays (Will be removed in v0.11)",name:"startSeen",required:!1,type:{name:"boolean"}}}}}catch{}const B=""+new URL("NewsHero__portrait-069f92c9.jpg",import.meta.url).href,P=["image","no-image"],C=["auto","interesting","snake","pentagon","dome","balls-small","balls-large"],Z={title:"NewsHero"},T={title:"Útivistarsvæðin í borginni iða af lífi",meta:"14. oktober",summary:"Reykvíkingar eru heppnir að geta valið milli margra spennandi útivistarsvæða þar sem er hægt að viðra sig og næra líkama og sál. Þessi svæði eru sérstaklega mikilvæg nú á tímum samkomu- banns og aflýstra viðburða. Náttúran er enn opin og á útivistar- svæðum er auðvelt að hlýða Víði og virða tveggja metra regluna en á sama tíma finna fyrir ákveðinni nálægð við annað fólk."},q=e=>{if(e!=="auto")return e},E=({imageType:e,blingType:a})=>{const r=w(),o=N.useCallback(()=>n.jsx(g,{ssr:r?"ssr-only":!1}),[r]),s=e==="image"?"image":void 0,t=s?void 0:q(a);return n.jsx(p,{...T,image:s&&{src:_},sharing:o,blingType:t},""+s+r+t)},l={render:e=>n.jsx(E,{...e}),argTypes:{imageType:{name:"Image",options:P,control:{type:"inline-radio",labels:{image:"Image","no-image":"No image (Bling)"}}},blingType:{name:"Image",options:C,control:{type:"inline-radio",labels:{auto:"(Auto)",interesting:"Interesting",snake:"Snake",pentagon:"Pentagon",dome:"Dome","balls-small":"Balls-small","balls-large":"Balls-large"}},if:{arg:"imageType",eq:"no-image"}}},args:{imageType:"image",blingType:"auto"}},O=()=>{const e=w(),a=N.useCallback(()=>n.jsx(g,{ssr:e?"ssr-only":!1}),[e]);return n.jsx(n.Fragment,{children:[_,B,""].map(r=>n.jsx(p,{...T,image:r?{src:r}:void 0,sharing:a},r+e))})},m={render:()=>n.jsx(O,{}),parameters:{controls:{hideNoControlsWarning:!0},css:{tokens:"NewsHero"}}};var u,y,f;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <NewsHeroStory {...args} />,
  argTypes: {
    imageType: {
      name: 'Image',
      options: imageTypeOptions,
      control: {
        type: 'inline-radio',
        labels: ({
          image: 'Image',
          'no-image': 'No image (Bling)'
        } satisfies Record<ControlProps['imageType'], string>)
      }
    },
    blingType: {
      name: 'Image',
      options: blingTypeOptions,
      control: {
        type: 'inline-radio',
        labels: ({
          auto: '(Auto)',
          interesting: 'Interesting',
          snake: 'Snake',
          pentagon: 'Pentagon',
          dome: 'Dome',
          'balls-small': 'Balls-small',
          'balls-large': 'Balls-large'
        } satisfies Record<ControlProps['blingType'], string>)
      },
      if: {
        arg: 'imageType',
        eq: 'no-image'
      }
    }
  },
  args: {
    imageType: 'image',
    blingType: 'auto'
  }
}`,...(f=(y=l.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var b,h,v;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <NewsHeroExamplesStory />,
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    css: {
      tokens: 'NewsHero'
    }
  }
}`,...(v=(h=m.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};const $=["_NewsHero","_NewsHeroExamples"];export{l as _NewsHero,m as _NewsHeroExamples,$ as __namedExportsOrder,Z as default};
//# sourceMappingURL=NewsHero.stories-6eaec52a.js.map
