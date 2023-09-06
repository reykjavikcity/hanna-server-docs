import{j as a}from"./jsx-runtime-f961835c.js";import{r as N}from"./index-f80c8c95.js";import{h as w}from"./index-603b371f.js";import{m as H}from"./classUtils-ef6e60eb.js";import"./getSVGtext-a5d3ecb0.js";import{B as S}from"./_Blings-a1775cb0.js";import{I as j}from"./_Image-eec1c9c4.js";import{S as p}from"./ShareButtons-1d6dbe55.js";import{p as _}from"./NewsHero__landscape-995cb06d.js";import"./hooks-d45327d9.js";import"./domid-a414b1fb.js";import"./addUrlParams-c54217db.js";import"./Bling-8239e3d6.js";import"./assets-41f88d07.js";import"./useGetSVGtext-49da7148.js";import"./i18n-f5d14da7.js";import"./ObjectHelpers-f7b28faf.js";import"./_Link-b7c9c4c9.js";const I=e=>[1,5,11,17,29,37].reduce((r,n)=>r+(e.charCodeAt(n%e.length)||32)-32,42),x=(e,r)=>{if(!Array.isArray(e)){const n=x(Object.keys(e),r);return e[n]}return e.length>1?e[I(r)%e.length]:e[0]},d={interesting:[{type:"circle-xlarge",parent:"center"},{type:"loops-small",color:"secondary",align:"left-ish",vertical:"down-ish",parent:"center"}],snake:[{type:"snake-large",align:"left",parent:"top",vertical:"down"}],pentagon:[{type:"pentagon-large",align:"left",parent:"center"}],dome:[{type:"dome-large",align:"left-ish",parent:"top",vertical:"down"}],"balls-small":[{type:"circle-large",align:"left",parent:"center"},{type:"circle-small",color:"secondary",align:"right",parent:"bottom",vertical:"down"}],"balls-large":[{type:"halfcircle-down-large",align:"left",parent:"bottom",vertical:"up"},{type:"circle-medium",color:"secondary",align:"left-center",parent:"bottom"}]},m=e=>{const{title:r,sharing:n=!0,meta:o,summary:t,image:s,blingType:g,wrapperProps:c}=e,k=g&&d[g]||x(d,r);return a.jsxs("div",{...c,className:H("NewsHero",[!s&&"align--right"],(c||{}).className),children:[a.jsxs("div",{className:"NewsHero__content",children:[a.jsx("h1",{className:"NewsHero__title",children:r}),o&&a.jsx("span",{className:"NewsHero__meta",children:o}),a.jsx("div",{className:"NewsHero__summary",children:t}),n===!0?a.jsx(p,{}):n&&n()]}),s?a.jsx(j,{bem:"NewsHero__image",...s}):a.jsx(S,{blings:k})]})};try{m.displayName="NewsHero",m.__docgenInfo={description:"",displayName:"NewsHero",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},meta:{defaultValue:null,description:"",name:"meta",required:!1,type:{name:"string"}},summary:{defaultValue:null,description:"",name:"summary",required:!1,type:{name:"string | Element"}},sharing:{defaultValue:null,description:"For custom sharing component",name:"sharing",required:!1,type:{name:"boolean | (() => Element)"}},image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"ImageProps"}},blingType:{defaultValue:null,description:"",name:"blingType",required:!1,type:{name:"enum",value:[{value:'"interesting"'},{value:'"snake"'},{value:'"pentagon"'},{value:'"dome"'},{value:'"balls-small"'},{value:'"balls-large"'}]}},wrapperProps:{defaultValue:null,description:`Custom HTML attributes for the component's wrapper element.

Note, however, that some props may be intentionally
excluded from the list.

__WARNING:__
In some cases props added this way can break the component, og hurt its
accessibility.  Also, some props may get ignored, or over-ridden by the
component. User discretion is advised.`,name:"wrapperProps",required:!1,type:{name:"HTMLProps<null, never>"}},startSeen:{defaultValue:null,description:"@deprecated This prop does nothing nowadays (Will be removed in v0.11)",name:"startSeen",required:!1,type:{name:"boolean"}}}}}catch{}const B=""+new URL("NewsHero__portrait-069f92c9.jpg",import.meta.url).href,q=["image","no-image"],P=["auto","interesting","snake","pentagon","dome","balls-small","balls-large"],ee={title:"NewsHero"},T={title:"Útivistarsvæðin í borginni iða af lífi",meta:"14. oktober",summary:"Reykvíkingar eru heppnir að geta valið milli margra spennandi útivistarsvæða þar sem er hægt að viðra sig og næra líkama og sál. Þessi svæði eru sérstaklega mikilvæg nú á tímum samkomu- banns og aflýstra viðburða. Náttúran er enn opin og á útivistar- svæðum er auðvelt að hlýða Víði og virða tveggja metra regluna en á sama tíma finna fyrir ákveðinni nálægð við annað fólk."},C=e=>{if(e!=="auto")return e},E=({imageType:e,blingType:r})=>{const n=w.useIsServerSide(),o=N.useCallback(()=>a.jsx(p,{ssr:n?"ssr-only":!1}),[n]),t=e==="image"?"image":void 0,s=t?void 0:C(r);return a.jsx(m,{...T,image:t&&{src:_},sharing:o,blingType:s},""+t+n+s)},i={render:e=>a.jsx(E,{...e}),argTypes:{imageType:{name:"Image",options:q,control:{type:"inline-radio",labels:{image:"Image","no-image":"No image (Bling)"}}},blingType:{name:"Image",options:P,control:{type:"inline-radio",labels:{auto:"(Auto)",interesting:"Interesting",snake:"Snake",pentagon:"Pentagon",dome:"Dome","balls-small":"Balls-small","balls-large":"Balls-large"}},if:{arg:"imageType",eq:"no-image"}}},args:{imageType:"image",blingType:"auto"}},V=()=>{const e=w.useIsServerSide(),r=N.useCallback(()=>a.jsx(p,{ssr:e?"ssr-only":!1}),[e]);return a.jsx(a.Fragment,{children:[_,B,""].map(n=>a.jsx(m,{...T,image:n?{src:n}:void 0,sharing:r},n+e))})},l={render:()=>a.jsx(V,{}),parameters:{controls:{hideNoControlsWarning:!0},css:{tokens:"NewsHero"}}};var u,y,f;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(f=(y=i.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var b,h,v;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <NewsHeroExamplesStory />,
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    css: {
      tokens: 'NewsHero'
    }
  }
}`,...(v=(h=l.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};const ae=["_NewsHero","_NewsHeroExamples"];export{i as _NewsHero,l as _NewsHeroExamples,ae as __namedExportsOrder,ee as default};
//# sourceMappingURL=NewsHero.stories-2768f99d.js.map
