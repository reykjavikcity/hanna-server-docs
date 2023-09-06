import{j as e}from"./jsx-runtime-f961835c.js";import{m as I}from"./classUtils-ef6e60eb.js";import{B as j}from"./_Blings-a1775cb0.js";import{I as P}from"./_Image-eec1c9c4.js";import{b as H}from"./breakOnNL-c6ba8973.js";import{B}from"./ButtonTertiary-f8c8cf4d.js";import{a as N}from"./constants-c35658af.js";import{S as b}from"./Sharpie-42fb8fab.js";import{c as C}from"./Gallery--landscape--large-1a6262ed.js";import"./index-f80c8c95.js";import"./Bling-8239e3d6.js";import"./assets-41f88d07.js";import"./useGetSVGtext-49da7148.js";import"./getSVGtext-a5d3ecb0.js";import"./addUrlParams-c54217db.js";import"./_Button-f001a419.js";import"./_Link-b7c9c4c9.js";import"./cssutils-41198468.js";import"./themes-56ee0168.js";const f={waves:[{type:"waves-medium",color:"primary",align:"left",vertical:"up",parent:"bottom"}],"sunny-waves":[{type:"waves-medium",align:"left",parent:"bottom",vertical:"up"},{type:"circle-medium",color:"secondary",align:"right-center",parent:"top",vertical:"down-ish"}],triangles:[{type:"triangle-large",align:"left-center",parent:"bottom",vertical:"up"},{type:"triangle-small",color:"secondary",align:"right",parent:"top-ish",vertical:"down-ish",overlay:!0}],circles:[{type:"circle-large",align:"left",parent:"top",vertical:"down"},{type:"circle-small",color:"secondary",align:"right",parent:"bottom-ish",vertical:"up-ish",overlay:!0}]},u=n=>{const{title:r,titleBlurb:i,subTitle:o,blurb:l,image:g,buttons:s=[],footer:t,align:a,blingType:m,wrapperProps:p}=n,x=!!s.length,d=a&&N[a]?a:"right",w=m&&f[m]||f.waves;return e.jsxs("div",{...p,className:I("InfoHero","align--"+d,(p||{}).className),children:[e.jsxs("div",{className:"InfoHero__content",children:[e.jsx("h1",{className:"InfoHero__title",children:r}),i&&e.jsx("div",{className:"InfoHero__titleblurb",children:i}),o&&e.jsx("div",{className:"InfoHero__subtitle",children:H(o)}),l&&e.jsx("div",{className:"InfoHero__blurb",children:l}),x&&e.jsx("div",{className:"InfoHero__buttons",children:s.map((T,_)=>e.jsx(B,{...T},_))}),t&&e.jsx("div",{className:"InfoHero__footer",children:t})]}),e.jsx(P,{bem:"InfoHero__image",altText:r,...g,placeholder:!0}),e.jsx(j,{blings:w,mirror:d==="right"})]})};try{u.displayName="InfoHero",u.__docgenInfo={description:"",displayName:"InfoHero",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},titleBlurb:{defaultValue:null,description:"",name:"titleBlurb",required:!1,type:{name:"string | Element"}},subTitle:{defaultValue:null,description:"Inserts `<br/>`s on `\\n`. Collapses multiple `\\n`s.",name:"subTitle",required:!1,type:{name:"string"}},blurb:{defaultValue:null,description:"",name:"blurb",required:!1,type:{name:"string | Element"}},buttons:{defaultValue:null,description:"",name:"buttons",required:!1,type:{name:"ButtonProps[]"}},footer:{defaultValue:null,description:"",name:"footer",required:!1,type:{name:"string | Element"}},align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"right"'},{value:'"left"'}]}},image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"ImageProps"}},blingType:{defaultValue:null,description:"",name:"blingType",required:!1,type:{name:"enum",value:[{value:'"waves"'},{value:'"sunny-waves"'},{value:'"triangles"'},{value:'"circles"'}]}},wrapperProps:{defaultValue:null,description:`Custom HTML attributes for the component's wrapper element.

Note, however, that some props may be intentionally
excluded from the list.

__WARNING:__
In some cases props added this way can break the component, og hurt its
accessibility.  Also, some props may get ignored, or over-ridden by the
component. User discretion is advised.`,name:"wrapperProps",required:!1,type:{name:"HTMLProps<null, never>"}}}}}catch{}const k=""+new URL("Dagur-b-e10c4e8d.jpg",import.meta.url).href,V=""+new URL("sundlaug-18c354b2.jpg",import.meta.url).href,L=["left","right"],O=["no-image","portrait","landscape","pool"],S=["waves","sunny-waves","triangles","circles"],q={title:"Dagur B. Eggertsson",subTitle:"Borgarstjóri",blurb:"Samfylkingin"},E={title:"Vestur­bæjar­laug",titleBlurb:"V/ Hofsvalla­götu, 107",subTitle:`Opið í dag 6:30 til 22:00
 Lokað á Páskadag`,blurb:e.jsxs(e.Fragment,{children:[e.jsx(b,{tag:"strong",color:"green",children:"Opið núna"})," ","...or..."," ",e.jsx(b,{tag:"strong",color:"red",children:"Lokað núna"})]})},F=n=>n==="portrait"?k:n==="landscape"?C:n==="pool"?V:"",ae={title:"InfoHero",parameters:{layout:{theme:"dependable"}}},R=n=>{const{alignment:r,image:i,blingType:o,swimmingPoolContent:l,blurbText:g,footerText:s}=n,t=F(i),a=l?E:q,m=g?e.jsxs(e.Fragment,{children:["Lorem ipsum",e.jsx("br",{}),"Dolor sit"]}):void 0,p=s?"Leebur deroor iehroom, minim chokolat moose.":void 0;return e.jsx(u,{...a,...t?{image:{src:t}}:{image:void 0},align:r,buttons:[{href:"",label:"Fjárhagslegir hagsmunir"},{href:"",label:"Dagur á Facebook"},{href:"mailto:borgarstjori@reykjavik.is",label:"borgarstjori@reykjavik.is"}],blurb:m,footer:p,blingType:o},r+(t!=="")+o)},c={render:n=>e.jsx(R,{...n}),argTypes:{alignment:{name:"Alignment",options:L,control:"inline-radio"},image:{name:"Image",control:{type:"inline-radio",options:O,labels:{"no-image":"No image",portrait:"Portrait",landscape:"Landscape",pool:"Pool"}}},blingType:{name:"Bling type",options:S,control:{type:"inline-radio",labels:{waves:"Waves","sunny-waves":"Sunny Waves",triangles:"Triangles",circles:"Circles"}}},swimmingPoolContent:{name:"Swimming Pool content"},blurbText:{name:"Blurb text"},footerText:{name:"Footer text"}},args:{alignment:"right",image:"portrait",blingType:"waves",swimmingPoolContent:!1,blurbText:!1,footerText:!1}};var y,v,h;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(h=(v=c.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const ie=["_InfoHero"];export{c as _InfoHero,ie as __namedExportsOrder,ae as default};
//# sourceMappingURL=InfoHero.stories-b947fbfe.js.map
