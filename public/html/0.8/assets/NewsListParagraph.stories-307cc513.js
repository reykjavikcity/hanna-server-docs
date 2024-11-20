import{j as t}from"./jsx-runtime-f961835c.js";import{h as a}from"./hannavars-ae14d8e4.js";import{g as B}from"./cssutils-ef0fc746.js";import"./getSVGtext-a8bc7f1c.js";import{A as I}from"./ArticleCards-767efa2e.js";import{A as P}from"./ArticleMeta-2a820b24.js";import{B as H}from"./BgBox-77d59d53.js";import{B as C}from"./ButtonTertiary-f7178372.js";import{H as d}from"./Heading-f5a8c8d4.js";import{c as S,P as A}from"./Picture-c2a9a41e.js";import{p as V}from"./NewsHero__landscape-995cb06d.js";import{i as M}from"./_dummyData-4974dfa4.js";import{H as U}from"./HiddenTiger-e2ccf9ec.js";import"./index-f80c8c95.js";import"./ObjectHelpers-f7b28faf.js";import"./assets-83022afa.js";import"./_CardList-2c75737e.js";import"./_Button-a44bcef1.js";import"./_Link-b7c9c4c9.js";import"./_Image-7c4cc8d6.js";import"./useGetSVGtext-b9564362.js";import"./range-dbab87d5.js";import"./getStableRandomItem-5e7f6e22.js";class E{constructor(r,n){this.value=typeof n=="number"?n:n.value,this.unit=r}toString(){return this.value+this.unit}valueOf(){return this.value}getName(){return this.toString()}}const F=(i,r)=>new E(r,i),s=i=>F(i,"px"),e=(()=>({wide:s(1368),netbook:s(980),tablet:s(760),phablet:s(480),phone:s(320)}))(),o=(()=>{const i=s(e.wide-1),r=s(e.netbook-1),n=s(e.tablet-1),b=s(e.phablet-1),w=`(min-width: ${e.wide})`,_=`(min-width: ${e.netbook}) and (max-width: ${i})`,x=`(min-width: ${e.tablet}) and (max-width: ${r})`,$=`(min-width: ${e.phablet}) and (max-width: ${n})`,f=`(max-width: ${b})`,l=`(min-width: ${e.netbook})`,v=`(min-width: ${e.tablet}) and (max-width: ${i})`,N=`(min-width: ${e.tablet})`,k=`(min-width: ${e.phablet}) and (max-width: ${r})`,T=`(min-width: ${e.phablet}) and (max-width: ${i})`,j=`(min-width: ${e.phablet})`,L=`(max-width: ${n})`,c=`(max-width: ${r})`,y=`(max-width: ${i})`;return{wide:w,netbook:_,tablet:x,phablet:$,phone:f,netbook_up:l,tablet_netbook:v,tablet_up:N,phablet_tablet:k,phablet_netbook:T,phablet_up:j,phone_phablet:L,phone_tablet:c,phone_netbook:y,Hamburger:c,Topmenu:l}})(),O=M.slice(2).slice(0,4),p="ArticleCards,ArticleMeta,BgBox,ButtonTertiary,Heading,Picture",gt={title:"_misc/reykjavik-is"},R=()=>t.jsxs(t.Fragment,{children:[t.jsx("style",{children:S`
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
          font: ${a.font_bd_l};
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
}`,...(u=(g=m.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const ut=["_NewsListParagraph"];export{m as _NewsListParagraph,ut as __namedExportsOrder,gt as default};
//# sourceMappingURL=NewsListParagraph.stories-307cc513.js.map
