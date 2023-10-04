import{j as e}from"./jsx-runtime-f961835c.js";import{r as v}from"./index-f80c8c95.js";import{m as I}from"./classUtils-ef6e60eb.js";import{g as C}from"./i18n-18e56484.js";import{l as L}from"./_dummyData-e787b310.js";import"./range-dbab87d5.js";const R="rs_req_Init",h=`script#${R}`;let l=0;const T={en:{linkText:"Listen",linkLabel:"Listen to this page read outloud"},is:{linkText:"Hlusta",linkLabel:"Hlusta á þessa síðu lesna upphátt"},pl:{linkText:"Posłuchaj",linkLabel:"Posłuchaj tej strony odczytanej na głos"}},o=a=>{const{align:r,float:n,customerId:d="11315",lang:t="",voice:w=/^is(?:_is)?$/i.test(t)?"is_dora":"",readId:p="",readClass:b=p?"":"Layout__main",wrapperProps:c,texts:j}=a,{linkText:u,linkLabel:P}=C({lang:t.slice(0,2),texts:j},T);return v.useEffect(()=>{var m,g;if(l===0){if(document.querySelector(h))return;const s=document.createElement("script");s.id=R,s.src=`https://cdn-eu.readspeaker.com/script/${d}/webReader/webReader.js?pids=wr`,s.onload=()=>{var f,y;return(y=(f=window.rspkr)==null?void 0:f.ui)==null?void 0:y.addClickEvents()},s.async=!0,document.head.appendChild(s)}return l++,(g=(m=window.rspkr)==null?void 0:m.ui)==null||g.addClickEvents(),()=>{var s;l--,l===0&&((s=document.querySelector(h))==null||s.remove())}},[]),e.jsx("div",{...c,className:I("ReadSpeakerPlayer",[r==="right"&&`align-${r}`,n&&"float"],(c||{}).className),children:e.jsx("div",{id:"readspeaker_button1",className:"rs_skip rsbtn rs_preserve",children:e.jsxs("a",{rel:"nofollow",className:"rsbtn_play",accessKey:"L",title:P||u,href:`https://app-eu.readspeaker.com/cgi-bin/rsent?${new URLSearchParams({customerid:d,lang:t,voice:t&&w,autoLang:t?"false":"true",readclass:b,readid:p})}`,children:[e.jsx("span",{className:"rsbtn_left rsimg rspart",children:e.jsx("span",{className:"rsbtn_text",children:e.jsx("span",{children:u})})}),e.jsx("span",{className:"rsbtn_right rsimg rsplay rspart"})]})})})},k=()=>{var a,r;return(r=(a=window.rspkr)==null?void 0:a.ui)==null?void 0:r.destroyActivePlayer()};try{o.displayName="ReadSpeakerPlayer",o.__docgenInfo={description:"Embeds a ReadSpeaker player in the page",displayName:"ReadSpeakerPlayer",props:{customerId:{defaultValue:null,description:`Your ReadSpeaker account/customer ID
@see https://docs.typo3.org/p/readspeaker/readspeaker-services/main/en-us/Configuration/Index.html#customer-id`,name:"customerId",required:!1,type:{name:"string"}},lang:{defaultValue:null,description:"Reading language/locale for the ReadSpeaker player.\n\nIf you don't specify a `lang`, the player will try to auto-detect\nthe language of the page, and pick a default `voice` for that language.\n@see https://docs.typo3.org/p/readspeaker/readspeaker-services/main/en-us/Configuration/Index.html#reading-language",name:"lang",required:!1,type:{name:"string"}},voice:{defaultValue:null,description:`Reading voice for the ReadSpeaker player.

This prop only makes sense if you specfy a reading \`lang\`, as
the voices are language-specific.
@see https://docs.typo3.org/p/readspeaker/readspeaker-services/main/en-us/Configuration/Index.html#voice`,name:"voice",required:!1,type:{name:"string"}},readId:{defaultValue:null,description:'The DOM `id=""` of the element to read.\n@see https://docs.typo3.org/p/readspeaker/readspeaker-services/main/en-us/Configuration/Index.html#reading-area-id',name:"readId",required:!1,type:{name:"string"}},readClass:{defaultValue:null,description:`The DOM class-name of the element(s) to read

Comma-separated list of class-names may also work...
@see https://docs.typo3.org/p/readspeaker/readspeaker-services/main/en-us/Configuration/Index.html#reading-area-class`,name:"readClass",required:!1,type:{name:"string"}},texts:{defaultValue:null,description:"",name:"texts",required:!1,type:{name:"ReadSpeakerPlayerI18n"}},align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"right"'},{value:'"left"'}]}},float:{defaultValue:null,description:"Tooggles CSS float layout",name:"float",required:!1,type:{name:"boolean"}},wrapperProps:{defaultValue:null,description:"Custom HTML attributes for the wrapper element.",name:"wrapperProps",required:!1,type:{name:"HTMLProps<null, never>"}}}}}catch{}try{k.displayName="stopReading",k.__docgenInfo={description:`Run this function if you find that the player keeps reading when a user
swaps pages.`,displayName:"stopReading",props:{}}}catch{}const D={title:"ReadSpeakerPlayer",parameters:{viewport:{defaultViewport:"responsive"}}},q=a=>{const{align:r,float:n}=a;return e.jsxs(v.Fragment,{children:[e.jsx(o,{align:r||void 0,float:n}),e.jsx("p",{children:L.medium})]},[r,n].join(","))},i={render:a=>e.jsx(q,{...a}),argTypes:{align:{name:"Layout",control:{type:"inline-radio",labels:{"":"Left (default)",right:"Right aligned"}},options:["","right"]},float:{name:"CSS Float"}},args:{align:"",float:!1}};var _,x,S;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => <ReadSpeakerPlayerStory {...args} />,
  argTypes: {
    align: {
      name: 'Layout',
      control: {
        type: 'inline-radio',
        labels: {
          '': 'Left (default)',
          right: 'Right aligned'
        }
      },
      options: ['', 'right']
    },
    float: {
      name: 'CSS Float'
    }
  },
  args: {
    align: '',
    float: false
  }
}`,...(S=(x=i.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};const F=["_ReadSpeakerPlayer"];export{i as _ReadSpeakerPlayer,F as __namedExportsOrder,D as default};
//# sourceMappingURL=ReadSpeakerPlayer.stories-940db8d3.js.map
