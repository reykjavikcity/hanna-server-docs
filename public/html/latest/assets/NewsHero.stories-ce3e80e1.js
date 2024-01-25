import{j as e}from"./jsx-runtime-f961835c.js";import{r as N}from"./index-f80c8c95.js";import{m as H}from"./classUtils-ef6e60eb.js";import{g as k}from"./getStableRandomItem-5e7f6e22.js";import"./getSVGtext-8f35f9ab.js";import{B as S}from"./_Blings-013d070b.js";import{I as j}from"./_Image-73a64cfc.js";import{S as g}from"./ShareButtons-dde1668e.js";import{a as w}from"./browserSide-4379edd8.js";import"./_Link-b7c9c4c9.js";import"./_useMobileMenuToggling-15a67498.js";import{p as _}from"./NewsHero__landscape-995cb06d.js";import"./Bling-fd71ef9e.js";import"./assets-b24d1fcc.js";import"./useGetSVGtext-c22e972a.js";import"./i18n-18e56484.js";import"./ObjectHelpers-f7b28faf.js";const d={interesting:[{type:"circle-xlarge",parent:"center"},{type:"loops-small",color:"secondary",align:"left-ish",vertical:"down-ish",parent:"center"}],snake:[{type:"snake-large",align:"left",parent:"top",vertical:"down"}],pentagon:[{type:"pentagon-large",align:"left",parent:"center"}],dome:[{type:"dome-large",align:"left-ish",parent:"top",vertical:"down"}],"balls-small":[{type:"circle-large",align:"left",parent:"center"},{type:"circle-small",color:"secondary",align:"right",parent:"bottom",vertical:"down"}],"balls-large":[{type:"halfcircle-down-large",align:"left",parent:"bottom",vertical:"up"},{type:"circle-medium",color:"secondary",align:"left-center",parent:"bottom"}]},p=n=>{const{title:r,sharing:a=!0,meta:o,summary:t,image:s,blingType:i,wrapperProps:c}=n,T=typeof i=="object"?i:i&&d[i]||k(d,r);return e.jsxs("div",{...c,className:H("NewsHero",[!s&&"align--right"],(c||{}).className),children:[e.jsxs("div",{className:"NewsHero__content",children:[e.jsx("h1",{className:"NewsHero__title",children:r}),o&&e.jsx("span",{className:"NewsHero__meta",children:o}),e.jsx("div",{className:"NewsHero__summary",children:t}),a===!0?e.jsx(g,{}):a&&a()]}),s?e.jsx(j,{bem:"NewsHero__image",...s}):e.jsx(S,{blings:T})]})};try{p.displayName="NewsHero",p.__docgenInfo={description:"",displayName:"NewsHero",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},meta:{defaultValue:null,description:"",name:"meta",required:!1,type:{name:"string"}},summary:{defaultValue:null,description:"",name:"summary",required:!1,type:{name:"string | Element"}},sharing:{defaultValue:null,description:"For custom sharing component",name:"sharing",required:!1,type:{name:"boolean | (() => Element)"}},image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"ImageProps"}},blingType:{defaultValue:null,description:"",name:"blingType",required:!1,type:{name:"BlingOptions | [ConstrainedBlingProps, ...ConstrainedBlingProps[]]"}},wrapperProps:{defaultValue:null,description:`Custom HTML attributes for the component's wrapper element.

Note, however, that some props may be intentionally
excluded from the list.

__WARNING:__
In some cases props added this way can break the component, og hurt its
accessibility.  Also, some props may get ignored, or over-ridden by the
component. User discretion is advised.`,name:"wrapperProps",required:!1,type:{name:"HTMLProps<null, never>"}},startSeen:{defaultValue:null,description:"@deprecated This prop does nothing nowadays (Will be removed in v0.11)",name:"startSeen",required:!1,type:{name:"boolean"}}}}}catch{}const I=""+new URL("NewsHero__portrait-069f92c9.jpg",import.meta.url).href,B=["image","no-image"],P=["auto","interesting","snake","pentagon","dome","balls-small","balls-large"],Y={title:"NewsHero"},x={title:"Útivistarsvæðin í borginni iða af lífi",meta:"14. oktober",summary:"Reykvíkingar eru heppnir að geta valið milli margra spennandi útivistarsvæða þar sem er hægt að viðra sig og næra líkama og sál. Þessi svæði eru sérstaklega mikilvæg nú á tímum samkomu- banns og aflýstra viðburða. Náttúran er enn opin og á útivistar- svæðum er auðvelt að hlýða Víði og virða tveggja metra regluna en á sama tíma finna fyrir ákveðinni nálægð við annað fólk."},q=n=>{if(n!=="auto")return n},C=({imageType:n,blingType:r})=>{const a=w(),o=N.useCallback(()=>e.jsx(g,{ssr:a?"ssr-only":!1}),[a]),t=n==="image"?"image":void 0,s=t?void 0:q(r);return e.jsx(p,{...x,image:t&&{src:_},sharing:o,blingType:s},`${t}${a}${s}`)},l={render:n=>e.jsx(C,{...n}),argTypes:{imageType:{name:"Image",options:B,control:{type:"inline-radio",labels:{image:"Image","no-image":"No image (Bling)"}}},blingType:{name:"Image",options:P,control:{type:"inline-radio",labels:{auto:"(Auto)",interesting:"Interesting",snake:"Snake",pentagon:"Pentagon",dome:"Dome","balls-small":"Balls-small","balls-large":"Balls-large"}},if:{arg:"imageType",eq:"no-image"}}},args:{imageType:"image",blingType:"auto"}},E=()=>{const n=w(),r=N.useCallback(()=>e.jsx(g,{ssr:n?"ssr-only":!1}),[n]);return e.jsx(e.Fragment,{children:[_,I,""].map(a=>e.jsx(p,{...x,image:a?{src:a}:void 0,sharing:r},a+n))})},m={render:()=>e.jsx(E,{}),parameters:{controls:{hideNoControlsWarning:!0},css:{tokens:"NewsHero"}}};var u,y,f;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(v=(h=m.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};const Z=["_NewsHero","_NewsHeroExamples"];export{l as _NewsHero,m as _NewsHeroExamples,Z as __namedExportsOrder,Y as default};
//# sourceMappingURL=NewsHero.stories-ce3e80e1.js.map
