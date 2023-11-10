import{j as e}from"./jsx-runtime-f961835c.js";import{m as j}from"./classUtils-ef6e60eb.js";import{B as I}from"./_Blings-cde56ea3.js";import{I as P}from"./_Image-73a64cfc.js";import{b as B}from"./breakOnNL-c6ba8973.js";import{B as H}from"./ButtonTertiary-cd91dd3c.js";import{a as C}from"./constants-6765ed7e.js";import{S as b}from"./Sharpie-42fb8fab.js";import{c as N}from"./Gallery--landscape--large-1a6262ed.js";import"./index-f80c8c95.js";import"./Bling-c087bbf9.js";import"./assets-ca39b462.js";import"./useGetSVGtext-c22e972a.js";import"./getSVGtext-8f35f9ab.js";import"./_Button-62f3aa2c.js";import"./_Link-b7c9c4c9.js";import"./cssutils-d90b972e.js";import"./themes-56ee0168.js";const f={waves:[{type:"waves-medium",color:"primary",align:"left",vertical:"up",parent:"bottom"}],"sunny-waves":[{type:"waves-medium",align:"left",parent:"bottom",vertical:"up"},{type:"circle-medium",color:"secondary",align:"right-center",parent:"top",vertical:"down-ish"}],triangles:[{type:"triangle-large",align:"left-center",parent:"bottom",vertical:"up"},{type:"triangle-small",color:"secondary",align:"right",parent:"top-ish",vertical:"down-ish",overlay:!0}],circles:[{type:"circle-large",align:"left",parent:"top",vertical:"down"},{type:"circle-small",color:"secondary",align:"right",parent:"bottom-ish",vertical:"up-ish",overlay:!0}]},u=n=>{const{title:o,titleBlurb:l,subTitle:i,blurb:s,image:c,buttons:m=[],footer:t,align:a,blingType:r,wrapperProps:p}=n,x=!!m.length,d=a&&C[a]?a:"right",w=typeof r=="object"?r:r&&f[r]||f.waves;return e.jsxs("div",{...p,className:j("InfoHero","align--"+d,(p||{}).className),children:[e.jsxs("div",{className:"InfoHero__content",children:[e.jsx("h1",{className:"InfoHero__title",children:o}),l&&e.jsx("div",{className:"InfoHero__titleblurb",children:l}),i&&e.jsx("div",{className:"InfoHero__subtitle",children:B(i)}),s&&e.jsx("div",{className:"InfoHero__blurb",children:s}),x&&e.jsx("div",{className:"InfoHero__buttons",children:m.map((T,_)=>e.jsx(H,{...T},_))}),t&&e.jsx("div",{className:"InfoHero__footer",children:t})]}),e.jsx(P,{bem:"InfoHero__image",altText:o,...c,placeholder:!0}),e.jsx(I,{blings:w,mirror:d==="right"})]})};try{u.displayName="InfoHero",u.__docgenInfo={description:"",displayName:"InfoHero",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},titleBlurb:{defaultValue:null,description:"",name:"titleBlurb",required:!1,type:{name:"string | Element"}},subTitle:{defaultValue:null,description:"Inserts `<br/>`s on `\\n`. Collapses multiple `\\n`s.",name:"subTitle",required:!1,type:{name:"string"}},blurb:{defaultValue:null,description:"",name:"blurb",required:!1,type:{name:"string | Element"}},buttons:{defaultValue:null,description:"",name:"buttons",required:!1,type:{name:"ButtonProps[]"}},footer:{defaultValue:null,description:"",name:"footer",required:!1,type:{name:"string | Element"}},align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"right"'},{value:'"left"'}]}},image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"ImageProps"}},blingType:{defaultValue:null,description:"",name:"blingType",required:!1,type:{name:"[ConstrainedBlingProps, ...ConstrainedBlingProps[]] | BlingOptions"}},wrapperProps:{defaultValue:null,description:`Custom HTML attributes for the component's wrapper element.

Note, however, that some props may be intentionally
excluded from the list.

__WARNING:__
In some cases props added this way can break the component, og hurt its
accessibility.  Also, some props may get ignored, or over-ridden by the
component. User discretion is advised.`,name:"wrapperProps",required:!1,type:{name:"HTMLProps<null, never>"}}}}}catch{}const k=""+new URL("Dagur-b-e10c4e8d.jpg",import.meta.url).href,O=""+new URL("sundlaug-18c354b2.jpg",import.meta.url).href,V=["left","right"],L=["no-image","portrait","landscape","pool"],S=["waves","sunny-waves","triangles","circles"],q={title:"Dagur B. Eggertsson",subTitle:"Borgarstjóri",blurb:"Samfylkingin"},E={title:"Vestur­bæjar­laug",titleBlurb:"V/ Hofsvalla­götu, 107",subTitle:`Opið í dag 6:30 til 22:00
 Lokað á Páskadag`,blurb:e.jsxs(e.Fragment,{children:[e.jsx(b,{tag:"strong",color:"green",children:"Opið núna"})," ","...or..."," ",e.jsx(b,{tag:"strong",color:"red",children:"Lokað núna"})]})},F=n=>n==="portrait"?k:n==="landscape"?N:n==="pool"?O:"",oe={title:"InfoHero",parameters:{layout:{theme:"dependable"}}},R=n=>{const{alignment:o,image:l,blingType:i,swimmingPoolContent:s,blurbText:c,footerText:m}=n,t=F(l),a=s?E:q,r=c?e.jsxs(e.Fragment,{children:["Lorem ipsum",e.jsx("br",{}),"Dolor sit"]}):void 0,p=m?"Leebur deroor iehroom, minim chokolat moose.":void 0;return e.jsx(u,{...a,...t?{image:{src:t}}:{image:void 0},align:o,buttons:[{href:"",label:"Fjárhagslegir hagsmunir"},{href:"",label:"Dagur á Facebook"},{href:"mailto:borgarstjori@reykjavik.is",label:"borgarstjori@reykjavik.is"}],blurb:r,footer:p,blingType:i},o+(t!=="")+i)},g={render:n=>e.jsx(R,{...n}),argTypes:{alignment:{name:"Alignment",options:V,control:"inline-radio"},image:{name:"Image",control:{type:"inline-radio",options:L,labels:{"no-image":"No image",portrait:"Portrait",landscape:"Landscape",pool:"Pool"}}},blingType:{name:"Bling type",options:S,control:{type:"inline-radio",labels:{waves:"Waves","sunny-waves":"Sunny Waves",triangles:"Triangles",circles:"Circles"}}},swimmingPoolContent:{name:"Swimming Pool content"},blurbText:{name:"Blurb text"},footerText:{name:"Footer text"}},args:{alignment:"right",image:"portrait",blingType:"waves",swimmingPoolContent:!1,blurbText:!1,footerText:!1}};var y,h,v;g.parameters={...g.parameters,docs:{...(y=g.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <InfoHeroStory {...args} />,
  argTypes: {
    alignment: {
      name: 'Alignment',
      options: alignmentOptions,
      control: 'inline-radio'
    },
    image: {
      name: 'Image',
      control: {
        type: 'inline-radio',
        options: imageOptions,
        labels: ({
          'no-image': 'No image',
          portrait: 'Portrait',
          landscape: 'Landscape',
          pool: 'Pool'
        } satisfies Record<ControlProps['image'], string>)
      }
    },
    blingType: {
      name: 'Bling type',
      options: blingTypeOptions,
      control: {
        type: 'inline-radio',
        labels: ({
          waves: 'Waves',
          'sunny-waves': 'Sunny Waves',
          triangles: 'Triangles',
          circles: 'Circles'
        } satisfies Record<ControlProps['blingType'], string>)
      }
    },
    swimmingPoolContent: {
      name: 'Swimming Pool content'
    },
    blurbText: {
      name: 'Blurb text'
    },
    footerText: {
      name: 'Footer text'
    }
  },
  args: {
    alignment: 'right',
    image: 'portrait',
    blingType: 'waves',
    swimmingPoolContent: false,
    blurbText: false,
    footerText: false
  }
}`,...(v=(h=g.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};const ie=["_InfoHero"];export{g as _InfoHero,ie as __namedExportsOrder,oe as default};
//# sourceMappingURL=InfoHero.stories-2c325dbe.js.map
