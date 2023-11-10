import{j as u}from"./jsx-runtime-f961835c.js";import{r as c}from"./index-f80c8c95.js";import{r as w}from"./range-dbab87d5.js";import{A as k}from"./index-1144a2e5.js";import{m as L}from"./classUtils-ef6e60eb.js";import{g as O}from"./i18n-18e56484.js";import{S as R}from"./SearchInput-cfe56de2.js";import{S as P}from"./SiteSearchInput-41572783.js";import"./index-c89a1915.js";import"./FormField-d640972f.js";import"./env-5a2a565d.js";import"./getScrollbarWidth-70c1e033.js";import"./getSVGtext-8f35f9ab.js";import"./browserSide-4379edd8.js";import"./_Link-b7c9c4c9.js";const j={is:{label:"Leit á vefnum",inputLabel:"Leitarorð",buttonText:"Leita",placeholder:"Sláðu inn leitarorð",suggestionsLabel:"Tillögur"},en:{label:"Site search",inputLabel:"Search terms",buttonText:"Search",placeholder:"Enter search terms",suggestionsLabel:"Suggestions"},pl:{label:"Wyszukiwanie na stronie",inputLabel:"Wyszukaj frazę",buttonText:"Szukaj",placeholder:"Wpisz frazę",suggestionsLabel:"Sugestie"}},d=t=>{const{options:a,itemActionIcon:i,onInput:n,onSelected:y,onClearOptions:I,onSubmit:l,onButtonClick:g=l,button:v,getOptionValue:m=e=>typeof e!="object"||!("value"in e)?e.toString():e.value!=null?e.value.toString():"",renderSuggestion:_=e=>typeof e=="object"&&"label"in e&&e.label!=null?e.label.toString():m(e),InputComponent:C=R,renderInputField:h,wrapperProps:T}=t,[p,A]=c.useState(""),x=c.useRef(null),r=O(t,j);return u.jsx(k,{theme:{container:"AutosuggestSearch",containerOpen:"AutosuggestSearch--open",suggestionsContainer:"AutosuggestSearch__container",suggestionsContainerOpen:"AutosuggestSearch__container--open",suggestionsList:L("AutosuggestSearch__list",i&&`action--${i}`),suggestion:"AutosuggestSearch__item",suggestionHighlighted:"AutosuggestSearch__item--highlighted"},focusInputOnSuggestionClick:!0,suggestions:a,onSuggestionsClearRequested:I,onSuggestionsFetchRequested:({value:e})=>n(e),getSuggestionValue:m,onSuggestionSelected:(e,o)=>{y({value:o.suggestionValue,option:o.suggestion})},renderSuggestion:_,containerProps:{...T,"aria-label":r.label},renderSuggestionsContainer:({containerProps:e,children:o})=>u.jsx("div",{...e,"aria-label":a.length?r.suggestionsLabel:void 0,children:o}),inputProps:{ref:x,value:p,onChange:(e,{newValue:o})=>{A(o)}},renderInputComponent:h?e=>h(e,r):e=>{const{className:o,type:z,disabled:W,readOnly:H,required:D,children:G,ref:V,...q}=e;return u.jsx(C,{lang:t.lang,...q,inputRef:V,button:v,label:r.inputLabel,placeholder:r.placeholder,buttonText:r.buttonText,onSubmit:l&&(()=>l(p)),onButtonClick:g&&(()=>g(p))})}})};try{d.displayName="AutosuggestSearch",d.__docgenInfo={description:"",displayName:"AutosuggestSearch",props:{options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"T[]"}},onInput:{defaultValue:null,description:"",name:"onInput",required:!0,type:{name:"(value: string) => void"}},onSelected:{defaultValue:null,description:"",name:"onSelected",required:!0,type:{name:"(payload: { value: string; option: T; }) => void"}},onClearOptions:{defaultValue:null,description:"",name:"onClearOptions",required:!0,type:{name:"() => void"}},getOptionValue:{defaultValue:null,description:"",name:"getOptionValue",required:!1,type:{name:"((option: T) => string)"}},renderSuggestion:{defaultValue:null,description:"",name:"renderSuggestion",required:!1,type:{name:"((option: T, context: { query: string; isHighlighted: boolean; }) => string | Element)"}},itemActionIcon:{defaultValue:null,description:"",name:"itemActionIcon",required:!1,type:{name:"enum",value:[{value:'"search"'},{value:'"go"'}]}},InputComponent:{defaultValue:null,description:"",name:"InputComponent",required:!1,type:{name:'((props: Pick<FormFieldWrappingProps, "id" | "label" | "ssr" | "wrapperProps"> & { inputRef?: RefObject<HTMLInputElement>; onSubmit?: ((value: string) => boolean | void); onButtonClick?: ((value: string) => boolean | void) | undefined; button?: boolean | undefined; buttonText?: string | undef...'}},renderInputField:{defaultValue:null,description:"",name:"renderInputField",required:!1,type:{name:"((inputProps: RenderInputComponentProps, texts: AutosuggestSearchI18n) => Element)"}},texts:{defaultValue:null,description:"",name:"texts",required:!1,type:{name:"AutosuggestSearchI18n"}},lang:{defaultValue:null,description:"",name:"lang",required:!1,type:{name:"enum",value:[{value:'"is"'},{value:'"en"'},{value:'"pl"'}]}},onSubmit:{defaultValue:null,description:"Triggered when user hits ENTER key with the focus inside the input field.\n\nReturn `true` to __allow__ the browser's default submit hehavior.",name:"onSubmit",required:!1,type:{name:"((value: string) => boolean | void)"}},onButtonClick:{defaultValue:null,description:"Custom action to perform when the user clicks the search button.\n\nReturn `true` to __allow__ the browser's default submit hehavior.\n\nDefaults to `onSubmit`.",name:"onButtonClick",required:!1,type:{name:"((value: string) => boolean | void)"}},button:{defaultValue:null,description:"Toggle the search `<button/>`.\n\nDefaults to `true` if onButtonClick is passed, otherwise false.",name:"button",required:!1,type:{name:"boolean"}},wrapperProps:{defaultValue:null,description:`Custom HTML attributes for the component's wrapper element.

Note, however, that some props may be intentionally
excluded from the list.

__WARNING:__
In some cases props added this way can break the component, og hurt its
accessibility.  Also, some props may get ignored, or over-ridden by the
component. User discretion is advised.`,name:"wrapperProps",required:!1,type:{name:"HTMLProps<null, never>"}}}}}catch{}const N=["","SiteSearchInput"],E=["","search","go"],ae={title:"Forms/AutosuggestSearch",parameters:{controls:{hideNoControlsWarning:!0},viewport:{defaultViewport:"responsive"},css:{tokens:"AutosuggestSearch,SiteSearchInput"}}},F=w(1,5).map(t=>`Suggestion ${t}`),B=t=>{const[a,i]=c.useState([]);return u.jsx(d,{options:a,onClearOptions:()=>i([]),onInput:()=>i(F),getOptionValue:n=>n,onSelected:n=>console.info("onSelected",n),onSubmit:n=>console.info("onSubmit (and onButtonClick)",n),itemActionIcon:t.actionIcon||void 0,InputComponent:t.inputType==="SiteSearchInput"?P:void 0,button:t.button})},s={render:B,argTypes:{inputType:{name:"Input Field type",options:N,control:{type:"inline-radio",labels:{"":"Default (SearchInput)",SiteSearchInput:"SiteSearchInput"}}},actionIcon:{name:"Item action icon",options:E,control:{type:"inline-radio",labels:{"":"None",search:"Search",go:"Go!"}}},button:{name:"Submit button"}},args:{inputType:"",actionIcon:"",button:!0}};var S,b,f;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: AutosuggestSearchStory,
  argTypes: {
    inputType: {
      name: 'Input Field type',
      options: inputTypes,
      control: {
        type: 'inline-radio',
        labels: ({
          '': 'Default (SearchInput)',
          SiteSearchInput: 'SiteSearchInput'
        } satisfies Record<ControlProps['inputType'], string>)
      }
    },
    actionIcon: {
      name: 'Item action icon',
      options: actionIcons,
      control: {
        type: 'inline-radio',
        labels: ({
          '': 'None',
          search: 'Search',
          go: 'Go!'
        } satisfies Record<ControlProps['actionIcon'], string>)
      }
    },
    button: {
      name: 'Submit button'
    }
  },
  args: {
    inputType: '',
    actionIcon: '',
    button: true
  }
}`,...(f=(b=s.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const se=["_AutosuggestSearch"];export{s as _AutosuggestSearch,se as __namedExportsOrder,ae as default};
//# sourceMappingURL=AutosuggestSearch.stories-5dadae45.js.map
