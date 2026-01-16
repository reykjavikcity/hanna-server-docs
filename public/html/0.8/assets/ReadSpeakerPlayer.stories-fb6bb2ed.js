import{j as a}from"./jsx-runtime-f961835c.js";import{r as R}from"./index-f80c8c95.js";import{m as P}from"./getSVGtext-6e71cb30.js";import{D as L,g as C}from"./i18n-d547729d.js";import{l as I}from"./_dummyData-a3950782.js";import"./range-dbab87d5.js";import"./getStableRandomItem-5e7f6e22.js";const v="rs_req_Init",h=`script#${v}`;let i=0;const T={en:{linkText:"Listen",linkLabel:"Listen to this page read out loud"},is:{linkText:"Hlusta",linkLabel:"Hlusta á þessa síðu lesna upphátt"},pl:{linkText:"Posłuchaj",linkLabel:"Posłuchaj tej strony odczytanej na głos"}},o=e=>{const{align:r,float:t,customerId:d="11315",lang:n=L,voice:w=/^is(?:_is)?$/i.test(n)?"is_dora":"",readId:p="",readClass:b=p?"":"Layout__main",wrapperProps:c}=e,{linkText:u,linkLabel:j}=C(e,T);return R.useEffect(()=>{var m,g;if(i===0){if(document.querySelector(h))return;const s=document.createElement("script");s.id=v,s.src=`https://cdn-eu.readspeaker.com/script/${d}/webReader/webReader.js?pids=wr`,s.onload=()=>{var f,y;return(y=(f=window.rspkr)==null?void 0:f.ui)==null?void 0:y.addClickEvents()},s.async=!0,document.head.appendChild(s)}return i++,(g=(m=window.rspkr)==null?void 0:m.ui)==null||g.addClickEvents(),()=>{var s;i--,i===0&&((s=document.querySelector(h))==null||s.remove())}},[]),a.jsx("div",{...c,className:P("ReadSpeakerPlayer",[r==="right"&&`align-${r}`,t&&"float"],(c||{}).className),children:a.jsx("div",{id:"readspeaker_button1",className:"rs_skip rsbtn rs_preserve",children:a.jsxs("a",{rel:"nofollow",className:"rsbtn_play",accessKey:"L",title:j||u,href:`https://app-eu.readspeaker.com/cgi-bin/rsent?${new URLSearchParams({customerid:d,lang:n,voice:n&&w,autoLang:n?"false":"true",readclass:b,readid:p})}`,children:[a.jsx("span",{className:"rsbtn_left rsimg rspart",children:a.jsx("span",{className:"rsbtn_text",children:a.jsx("span",{children:u})})}),a.jsx("span",{className:"rsbtn_right rsimg rsplay rspart"})]})})})},k=()=>{var e,r;return(r=(e=window.rspkr)==null?void 0:e.ui)==null?void 0:r.destroyActivePlayer()};try{o.displayName="ReadSpeakerPlayer",o.__docgenInfo={description:"Embeds a ReadSpeaker player in the page",displayName:"ReadSpeakerPlayer",props:{customerId:{defaultValue:null,description:`Your ReadSpeaker account/customer ID
@see https://docs.typo3.org/p/readspeaker/readspeaker-services/main/en-us/Configuration/Index.html#customer-id`,name:"customerId",required:!1,type:{name:"string"}},lang:{defaultValue:null,description:`Reading language/locale for the ReadSpeaker player.

Default: \`is\`
@see https://docs.typo3.org/p/readspeaker/readspeaker-services/main/en-us/Configuration/Index.html#reading-language`,name:"lang",required:!1,type:{name:"string"}},voice:{defaultValue:null,description:`Reading voice for the ReadSpeaker player.

This prop only makes sense if you specfy a reading \`lang\`, as
the voices are language-specific.
@see https://docs.typo3.org/p/readspeaker/readspeaker-services/main/en-us/Configuration/Index.html#voice`,name:"voice",required:!1,type:{name:"string"}},readId:{defaultValue:null,description:'The DOM `id=""` of the element to read.\n@see https://docs.typo3.org/p/readspeaker/readspeaker-services/main/en-us/Configuration/Index.html#reading-area-id',name:"readId",required:!1,type:{name:"string"}},readClass:{defaultValue:null,description:`The DOM class-name of the element(s) to read

Comma-separated list of class-names may also work...
@see https://docs.typo3.org/p/readspeaker/readspeaker-services/main/en-us/Configuration/Index.html#reading-area-class`,name:"readClass",required:!1,type:{name:"string"}},texts:{defaultValue:null,description:"",name:"texts",required:!1,type:{name:"ReadSpeakerPlayerI18n"}},align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"right"'},{value:'"left"'}]}},float:{defaultValue:null,description:"Tooggles CSS float layout",name:"float",required:!1,type:{name:"boolean"}},wrapperProps:{defaultValue:null,description:"Custom HTML attributes for the wrapper element.",name:"wrapperProps",required:!1,type:{name:"HTMLProps<null, never>"}}}}}catch{}try{k.displayName="stopReading",k.__docgenInfo={description:`Run this function if you find that the player keeps reading when a user
swaps pages.`,displayName:"stopReading",props:{}}}catch{}const M={title:"ReadSpeakerPlayer",parameters:{viewport:{defaultViewport:"responsive"}}},q=e=>{const{align:r,float:t}=e;return a.jsxs(R.Fragment,{children:[a.jsx(o,{align:r||void 0,float:t}),a.jsx("p",{children:I.medium})]},[r,t].join(","))},l={render:e=>a.jsx(q,{...e}),argTypes:{align:{name:"Layout",control:{type:"inline-radio",labels:{"":"Left (default)",right:"Right aligned"}},options:["","right"]},float:{name:"CSS Float"}},args:{align:"",float:!1}};var _,x,S;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(S=(x=l.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};const A=["_ReadSpeakerPlayer"];export{l as _ReadSpeakerPlayer,A as __namedExportsOrder,M as default};
//# sourceMappingURL=ReadSpeakerPlayer.stories-fb6bb2ed.js.map
