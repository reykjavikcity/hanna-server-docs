import{j as l}from"./jsx-runtime-f961835c.js";import{r as V}from"./index-f80c8c95.js";import{r as E}from"./range-dbab87d5.js";import{A as M}from"./index-1144a2e5.js";import{m as y}from"./getSVGtext-6e71cb30.js";import{g as N}from"./i18n-d547729d.js";import{S as F}from"./SearchInput-1b8bb76f.js";import"./_Link-b7c9c4c9.js";import{a as B}from"./_useMobileMenuToggling-93fc22f5.js";import{S as z}from"./SiteSearchInput-d1e71f1f.js";import"./index-c89a1915.js";import"./FormField-94a23c2b.js";import"./env-5a2a565d.js";import"./browserSide-4379edd8.js";const W=new Set(["type","enter","click"]),D={is:{label:"Leit á vefnum",inputLabel:"Leitarorð",buttonText:"Leita",placeholder:"Sláðu inn leitarorð",suggestionsLabel:"Tillögur"},en:{label:"Site search",inputLabel:"Search terms",buttonText:"Search",placeholder:"Enter search terms",suggestionsLabel:"Suggestions"},pl:{label:"Wyszukiwanie na stronie",inputLabel:"Wyszukaj frazę",buttonText:"Szukaj",placeholder:"Wpisz frazę",suggestionsLabel:"Sugestie"}},m=t=>{const{options:r,emptyMessage:o,itemActionIcon:n,onInput:C,onSelected:T,onClearOptions:A,onSubmit:g,onButtonClick:h=g,button:x,getOptionValue:f=e=>typeof e!="object"||!("value"in e)?e.toString():e.value!=null?e.value.toString():"",renderSuggestion:q=e=>typeof e=="object"&&"label"in e&&e.label!=null?e.label.toString():f(e),InputComponent:w=F,renderInputField:S,wrapperProps:k}=t,[p,L]=B(t,"inputValue",""),O=V.useRef(null),a=N(t,D),i=!r.length&&o;return l.jsx(M,{theme:{container:"AutosuggestSearch",containerOpen:"AutosuggestSearch--open",suggestionsContainer:"AutosuggestSearch__container",suggestionsContainerOpen:"AutosuggestSearch__container--open",suggestionsList:y("AutosuggestSearch__list",n&&`action--${n}`),suggestion:"AutosuggestSearch__item",suggestionHighlighted:"AutosuggestSearch__item--highlighted"},focusInputOnSuggestionClick:!0,suggestions:i?[!0]:r,onSuggestionsClearRequested:A,onSuggestionsFetchRequested:()=>{},getSuggestionValue:i?()=>p:f,onSuggestionSelected:(e,s)=>{if(i){e.preventDefault();return}T({value:s.suggestionValue,option:s.suggestion})},renderSuggestion:i?()=>"":q,containerProps:{...k,"aria-label":a.label},renderSuggestionsContainer:({containerProps:e,children:s})=>{let u=s;if(i){const{message:b,type:d}=typeof o=="string"||!("message"in o)?{message:o,type:"empty"}:o;u=l.jsx("div",{className:y("AutosuggestSearch__emptyMessage",d!=="empty"&&d),children:b})}return l.jsx("div",{...e,"aria-label":r.length?a.suggestionsLabel:void 0,children:u})},inputProps:{ref:O,value:p,onChange:(e,{newValue:s,method:u})=>{W.has(u)&&(C(s),L(s))}},renderInputComponent:S?e=>S(e,a):e=>{const{className:s,type:u,disabled:b,readOnly:d,required:J,children:K,ref:R,defaultValue:P,...j}=e;return l.jsx(w,{lang:t.lang,defaultValue:P,...j,inputRef:R,button:x,label:a.inputLabel,placeholder:a.placeholder,buttonText:a.buttonText,onSubmit:g&&(()=>g(p)),onButtonClick:h&&(()=>h(p))})}})};try{m.displayName="AutosuggestSearch",m.__docgenInfo={description:"",displayName:"AutosuggestSearch",props:{options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"T[]"}},emptyMessage:{defaultValue:null,description:"",name:"emptyMessage",required:!1,type:{name:"string | Element | EmptyMessage"}},onInput:{defaultValue:null,description:"",name:"onInput",required:!0,type:{name:"(value: string) => void"}},onSelected:{defaultValue:null,description:"",name:"onSelected",required:!0,type:{name:"(payload: { value: string; option: T; }) => void"}},onClearOptions:{defaultValue:null,description:"",name:"onClearOptions",required:!0,type:{name:"() => void"}},getOptionValue:{defaultValue:null,description:"",name:"getOptionValue",required:!1,type:{name:"((option: T) => string)"}},renderSuggestion:{defaultValue:null,description:"",name:"renderSuggestion",required:!1,type:{name:"((option: T, context: { query: string; isHighlighted: boolean; }) => string | Element)"}},itemActionIcon:{defaultValue:null,description:"",name:"itemActionIcon",required:!1,type:{name:"enum",value:[{value:'"search"'},{value:'"go"'}]}},inputValue:{defaultValue:null,description:"",name:"inputValue",required:!1,type:{name:"string"}},defaultInputValue:{defaultValue:null,description:"",name:"defaultInputValue",required:!1,type:{name:"string"}},InputComponent:{defaultValue:null,description:"",name:"InputComponent",required:!1,type:{name:'((props: Pick<FormFieldWrappingProps, "wrapperProps" | "id" | "label" | "ssr"> & { inputRef?: RefObject<HTMLInputElement>; onSubmit?: ((value: string) => boolean | void); onButtonClick?: ((value: string) => boolean | void) | undefined; button?: boolean | undefined; buttonText?: string | undef...'}},renderInputField:{defaultValue:null,description:"",name:"renderInputField",required:!1,type:{name:"((inputProps: RenderInputComponentProps, texts: AutosuggestSearchI18n) => Element)"}},texts:{defaultValue:null,description:"",name:"texts",required:!1,type:{name:"AutosuggestSearchI18n"}},lang:{defaultValue:null,description:"",name:"lang",required:!1,type:{name:"enum",value:[{value:'"is"'},{value:'"en"'},{value:'"pl"'}]}},onSubmit:{defaultValue:null,description:"Triggered when user hits ENTER key with the focus inside the input field.\n\nReturn `true` to __allow__ the browser's default submit hehavior.",name:"onSubmit",required:!1,type:{name:"((value: string) => boolean | void)"}},button:{defaultValue:null,description:"Toggle the search `<button/>`.\n\nDefaults to `true` if onButtonClick is passed, otherwise false.",name:"button",required:!1,type:{name:"boolean"}},onButtonClick:{defaultValue:null,description:"Custom action to perform when the user clicks the search button.\n\nReturn `true` to __allow__ the browser's default submit hehavior.\n\nDefaults to `onSubmit`.",name:"onButtonClick",required:!1,type:{name:"((value: string) => boolean | void)"}},wrapperProps:{defaultValue:null,description:`Custom HTML attributes for the component's wrapper element.

Note, however, that some props may be intentionally
excluded from the list.

__WARNING:__
In some cases props added this way can break the component, og hurt its
accessibility.  Also, some props may get ignored, or over-ridden by the
component. User discretion is advised.`,name:"wrapperProps",required:!1,type:{name:"HTMLProps<null, never>"}}}}}catch{}const H=["","SiteSearchInput"],G=["","search","go"],pe={title:"Forms/AutosuggestSearch",parameters:{controls:{hideNoControlsWarning:!0},viewport:{defaultViewport:"responsive"},css:{tokens:"AutosuggestSearch,SiteSearchInput"}}},$=E(1,5).map(t=>`Suggestion ${t}`),U=t=>{const[r,o]=V.useState([]);return l.jsx(m,{options:r,onClearOptions:()=>o([]),onInput:n=>o(n.length>4?[]:$),getOptionValue:n=>n,onSelected:n=>console.info("onSelected",n),onSubmit:n=>console.info("onSubmit (and onButtonClick)",n),itemActionIcon:t.actionIcon||void 0,InputComponent:t.inputType==="SiteSearchInput"?z:void 0,button:t.button})},c={render:U,argTypes:{inputType:{name:"Input Field type",options:H,control:{type:"inline-radio",labels:{"":"Default (SearchInput)",SiteSearchInput:"SiteSearchInput"}}},actionIcon:{name:"Item action icon",options:G,control:{type:"inline-radio",labels:{"":"None",search:"Search",go:"Go!"}}},button:{name:"Submit button"}},args:{inputType:"",actionIcon:"",button:!0}};var I,v,_;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(_=(v=c.parameters)==null?void 0:v.docs)==null?void 0:_.source}}};const ce=["_AutosuggestSearch"];export{c as _AutosuggestSearch,ce as __namedExportsOrder,pe as default};
//# sourceMappingURL=AutosuggestSearch.stories-2c0db275.js.map
