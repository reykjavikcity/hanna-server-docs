import{j as t}from"./getSVGtext-33d0ab58.js";import{h as a,g as B}from"./hannavars-dd8d2519.js";import{A as I}from"./ArticleCards-80955913.js";import{A as P}from"./ArticleMeta-64c760ec.js";import{B as H}from"./BgBox-d3db33a2.js";import{B as C}from"./ButtonTertiary-edb36946.js";import{H as d}from"./Heading-4ee8b065.js";import{c as S,P as A}from"./Picture-cffe185c.js";import{p as V}from"./NewsHero__landscape-995cb06d.js";import{i as M}from"./_dummyData-2b70d005.js";import{H as U}from"./HiddenTiger-5148c601.js";import"./index-f80c8c95.js";import"./ObjectHelpers-f7b28faf.js";import"./assets-a330961d.js";import"./_CardList-d4c7f3d0.js";import"./_Button-cc0854df.js";import"./_Link-b7c9c4c9.js";import"./_Image-8b101007.js";import"./useGetSVGtext-0847a7d8.js";import"./range-dbab87d5.js";import"./getStableRandomItem-5e7f6e22.js";class E{constructor(r,n){this.value=typeof n=="number"?n:n.value,this.unit=r}toString(){return this.value+this.unit}valueOf(){return this.value}getName(){return this.toString()}}const F=(i,r)=>new E(r,i),s=i=>F(i,"px"),e=(()=>({wide:s(1368),netbook:s(980),tablet:s(760),phablet:s(480),phone:s(320)}))(),o=(()=>{const i=s(e.wide-1),r=s(e.netbook-1),n=s(e.tablet-1),b=s(e.phablet-1),w=`(min-width: ${e.wide})`,_=`(min-width: ${e.netbook}) and (max-width: ${i})`,x=`(min-width: ${e.tablet}) and (max-width: ${r})`,$=`(min-width: ${e.phablet}) and (max-width: ${n})`,f=`(max-width: ${b})`,l=`(min-width: ${e.netbook})`,v=`(min-width: ${e.tablet}) and (max-width: ${i})`,N=`(min-width: ${e.tablet})`,k=`(min-width: ${e.phablet}) and (max-width: ${r})`,T=`(min-width: ${e.phablet}) and (max-width: ${i})`,j=`(min-width: ${e.phablet})`,L=`(max-width: ${n})`,c=`(max-width: ${r})`,y=`(max-width: ${i})`;return{wide:w,netbook:_,tablet:x,phablet:$,phone:f,netbook_up:l,tablet_netbook:v,tablet_up:N,phablet_tablet:k,phablet_netbook:T,phablet_up:j,phone_phablet:L,phone_tablet:c,phone_netbook:y,Hamburger:c,Topmenu:l}})(),O=M.slice(2).slice(0,4),p="ArticleCards,ArticleMeta,BgBox,ButtonTertiary,Heading,Picture",dt={title:"_misc/reykjavik-is"},R=()=>t.jsxs(t.Fragment,{children:[t.jsx("style",{children:S`
        .NewsListParagraph {
        }
        .NewsListParagraph .Heading {
          margin-top: 0;
        }
        .NewsListTopItem {
          margin-bottom: var(--component-vspace--medium);
        }
        @media ${o.phone_phablet} {
          .NewsListTopItem .Picture > img {
            position: relative;
          }
        }
        @media ${o.tablet_up} {
          .NewsListTopItem {
            display: flex;
            justify-content: space-between;
          }
          .NewsListTopItem .Picture {
            margin-bottom: 0;
            margin-left: ${a.grid_margin__neg};
            width: calc(${a.grid_5_5} + ${a.grid_margin});
            padding-top: 50%;
            height: auto;
          }
          .NewsListTopItem__content {
            width: ${a.grid_6_6};
            align-self: center;
          }
        }
        @media ${o.netbook_up} {
          .NewsListTopItem__content {
            width: ${a.grid_6};
          }
        }
        @media ${o.wide} {
          .NewsListTopItem__content {
            padding-left: calc(0.5 * ${a.grid_gutter});
          }
        }

        .NewsListTopItem .Heading {
          margin-bottom: ${a.space_1};
        }
        .NewsListTopItem__summary {
          font: ${a.font_body_l};
          margin-top: ${a.space_2};
          margin-bottom: ${a.space_2};
        }
      `}),t.jsxs(H,{className:"NewsListParagraph",children:[t.jsx(d,{children:"Fréttir"}),t.jsxs("div",{className:"NewsListTopItem",children:[t.jsx(A,{src:V,altText:"Some alt text"}),t.jsxs("div",{className:"NewsListTopItem__content",children:[t.jsx(d,{Tag:"h3",size:"large",children:t.jsx("a",{href:"",children:"Útivistarsvæðin í borginni iða af lífi"})}),t.jsx(P,{items:[{label:"Mánudagur , 13. apríl 2022"}]}),t.jsx("div",{className:"NewsListTopItem__summary",children:"Reykvíkingar eru heppnir að geta valið milli margra spennandi útivistarsvæða þar sem er hægt að viðra sig og næra líkama og sál. Þessi svæði eru sérstaklega mikilvæg nú á tímum samkomu- banns og aflýstra viðburða. Náttúran er enn opin og á útivistar- svæðum er auðvelt að hlýða Víði og virða tveggja metra regluna en á sama tíma finna fyrir ákveðinni nálægð við annað fólk."}),t.jsx(C,{href:"","aria-label":"Útivistarsvæðin í borginni iða af lífi",children:"Lesa meira"})]})]}),t.jsx(I,{cards:O})]}),t.jsxs(U,{children:["CSS tokens:"," ",t.jsx("a",{href:B(p),children:p.replace(",",", ")})]})]}),m={render:()=>R(),parameters:{css:{tokens:p},controls:{hideNoControlsWarning:!0}}};var h,g,u;m.parameters={...m.parameters,docs:{...(h=m.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => NewsListParagraphStory(),
  parameters: {
    css: {
      tokens: cssTokens
    },
    controls: {
      hideNoControlsWarning: true
    }
  }
}`,...(u=(g=m.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const ht=["_NewsListParagraph"];export{m as _NewsListParagraph,ht as __namedExportsOrder,dt as default};
//# sourceMappingURL=NewsListParagraph.stories-d9dca37f.js.map
