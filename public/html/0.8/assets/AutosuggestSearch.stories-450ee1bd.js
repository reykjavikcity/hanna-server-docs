import{j as u}from"./jsx-runtime-f961835c.js";import{r as V}from"./index-f80c8c95.js";import{r as E}from"./range-dbab87d5.js";import{A as N}from"./index-1144a2e5.js";import{m as y}from"./classUtils-ef6e60eb.js";import{g as M}from"./i18n-d547729d.js";import{S as F}from"./SearchInput-5115e960.js";import"./_Link-b7c9c4c9.js";import{a as B}from"./_useMobileMenuToggling-15a67498.js";import"./getSVGtext-8f35f9ab.js";import{S as z}from"./SiteSearchInput-016a9ed2.js";import"./index-c89a1915.js";import"./FormField-4cef6998.js";import"./env-5a2a565d.js";import"./browserSide-4379edd8.js";const W={is:{label:"Leit á vefnum",inputLabel:"Leitarorð",buttonText:"Leita",placeholder:"Sláðu inn leitarorð",suggestionsLabel:"Tillögur"},en:{label:"Site search",inputLabel:"Search terms",buttonText:"Search",placeholder:"Enter search terms",suggestionsLabel:"Suggestions"},pl:{label:"Wyszukiwanie na stronie",inputLabel:"Wyszukaj frazę",buttonText:"Szukaj",placeholder:"Wpisz frazę",suggestionsLabel:"Sugestie"}},m=t=>{const{options:r,emptyMessage:o,itemActionIcon:n,onInput:C,onSelected:T,onClearOptions:A,onSubmit:c,onButtonClick:h=c,button:x,getOptionValue:f=e=>typeof e!="object"||!("value"in e)?e.toString():e.value!=null?e.value.toString():"",renderSuggestion:q=e=>typeof e=="object"&&"label"in e&&e.label!=null?e.label.toString():f(e),InputComponent:w=F,renderInputField:S,wrapperProps:k}=t,[l,L]=B(t,"inputValue",""),O=V.useRef(null),s=M(t,W),i=!r.length&&o;return u.jsx(N,{theme:{container:"AutosuggestSearch",containerOpen:"AutosuggestSearch--open",suggestionsContainer:"AutosuggestSearch__container",suggestionsContainerOpen:"AutosuggestSearch__container--open",suggestionsList:y("AutosuggestSearch__list",n&&`action--${n}`),suggestion:"AutosuggestSearch__item",suggestionHighlighted:"AutosuggestSearch__item--highlighted"},focusInputOnSuggestionClick:!0,suggestions:i?[!0]:r,onSuggestionsClearRequested:A,onSuggestionsFetchRequested:()=>{},getSuggestionValue:i?()=>l:f,onSuggestionSelected:(e,a)=>{if(i){e.preventDefault();return}T({value:a.suggestionValue,option:a.suggestion})},renderSuggestion:i?()=>"":q,containerProps:{...k,"aria-label":s.label},renderSuggestionsContainer:({containerProps:e,children:a})=>{let g=a;if(i){const{message:b,type:d}=typeof o=="string"||!("message"in o)?{message:o,type:"empty"}:o;g=u.jsx("div",{className:y("AutosuggestSearch__emptyMessage",d!=="empty"&&d),children:b})}return u.jsx("div",{...e,"aria-label":r.length?s.suggestionsLabel:void 0,children:g})},inputProps:{ref:O,value:l,onChange:(e,{newValue:a})=>{C(a),L(a)}},renderInputComponent:S?e=>S(e,s):e=>{const{className:a,type:g,disabled:b,readOnly:d,required:U,children:J,ref:R,defaultValue:P,...j}=e;return u.jsx(w,{lang:t.lang,defaultValue:P,...j,inputRef:R,button:x,label:s.inputLabel,placeholder:s.placeholder,buttonText:s.buttonText,onSubmit:c&&(()=>c(l)),onButtonClick:h&&(()=>h(l))})}})};try{m.displayName="AutosuggestSearch",m.__docgenInfo={description:"",displayName:"AutosuggestSearch",props:{options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"T[]"}},emptyMessage:{defaultValue:null,description:"",name:"emptyMessage",required:!1,type:{name:"string | Element | EmptyMessage"}},onInput:{defaultValue:null,description:"",name:"onInput",required:!0,type:{name:"(value: string) => void"}},onSelected:{defaultValue:null,description:"",name:"onSelected",required:!0,type:{name:"(payload: { value: string; option: T; }) => void"}},onClearOptions:{defaultValue:null,description:"",name:"onClearOptions",required:!0,type:{name:"() => void"}},getOptionValue:{defaultValue:null,description:"",name:"getOptionValue",required:!1,type:{name:"((option: T) => string)"}},renderSuggestion:{defaultValue:null,description:"",name:"renderSuggestion",required:!1,type:{name:"((option: T, context: { query: string; isHighlighted: boolean; }) => string | Element)"}},itemActionIcon:{defaultValue:null,description:"",name:"itemActionIcon",required:!1,type:{name:"enum",value:[{value:'"search"'},{value:'"go"'}]}},inputValue:{defaultValue:null,description:"",name:"inputValue",required:!1,type:{name:"string"}},defaultInputValue:{defaultValue:null,description:"",name:"defaultInputValue",required:!1,type:{name:"string"}},InputComponent:{defaultValue:null,description:"",name:"InputComponent",required:!1,type:{name:'((props: Pick<FormFieldWrappingProps, "wrapperProps" | "id" | "label" | "ssr"> & { inputRef?: RefObject<HTMLInputElement>; onSubmit?: ((value: string) => boolean | void); onButtonClick?: ((value: string) => boolean | void) | undefined; button?: boolean | undefined; buttonText?: string | undef...'}},renderInputField:{defaultValue:null,description:"",name:"renderInputField",required:!1,type:{name:"((inputProps: RenderInputComponentProps, texts: AutosuggestSearchI18n) => Element)"}},texts:{defaultValue:null,description:"",name:"texts",required:!1,type:{name:"AutosuggestSearchI18n"}},lang:{defaultValue:null,description:"",name:"lang",required:!1,type:{name:"enum",value:[{value:'"is"'},{value:'"en"'},{value:'"pl"'}]}},onSubmit:{defaultValue:null,description:"Triggered when user hits ENTER key with the focus inside the input field.\n\nReturn `true` to __allow__ the browser's default submit hehavior.",name:"onSubmit",required:!1,type:{name:"((value: string) => boolean | void)"}},onButtonClick:{defaultValue:null,description:"Custom action to perform when the user clicks the search button.\n\nReturn `true` to __allow__ the browser's default submit hehavior.\n\nDefaults to `onSubmit`.",name:"onButtonClick",required:!1,type:{name:"((value: string) => boolean | void)"}},button:{defaultValue:null,description:"Toggle the search `<button/>`.\n\nDefaults to `true` if onButtonClick is passed, otherwise false.",name:"button",required:!1,type:{name:"boolean"}},wrapperProps:{defaultValue:null,description:`Custom HTML attributes for the component's wrapper element.

Note, however, that some props may be intentionally
excluded from the list.

__WARNING:__
In some cases props added this way can break the component, og hurt its
accessibility.  Also, some props may get ignored, or over-ridden by the
component. User discretion is advised.`,name:"wrapperProps",required:!1,type:{name:"HTMLProps<null, never>"}}}}}catch{}const D=["","SiteSearchInput"],H=["","search","go"],pe={title:"Forms/AutosuggestSearch",parameters:{controls:{hideNoControlsWarning:!0},viewport:{defaultViewport:"responsive"},css:{tokens:"AutosuggestSearch,SiteSearchInput"}}},G=E(1,5).map(t=>`Suggestion ${t}`),$=t=>{const[r,o]=V.useState([]);return u.jsx(m,{options:r,onClearOptions:()=>o([]),onInput:n=>o(n.length>4?[]:G),getOptionValue:n=>n,onSelected:n=>console.info("onSelected",n),onSubmit:n=>console.info("onSubmit (and onButtonClick)",n),itemActionIcon:t.actionIcon||void 0,InputComponent:t.inputType==="SiteSearchInput"?z:void 0,button:t.button})},p={render:$,argTypes:{inputType:{name:"Input Field type",options:D,control:{type:"inline-radio",labels:{"":"Default (SearchInput)",SiteSearchInput:"SiteSearchInput"}}},actionIcon:{name:"Item action icon",options:H,control:{type:"inline-radio",labels:{"":"None",search:"Search",go:"Go!"}}},button:{name:"Submit button"}},args:{inputType:"",actionIcon:"",button:!0}};var I,v,_;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(_=(v=p.parameters)==null?void 0:v.docs)==null?void 0:_.source}}};const ce=["_AutosuggestSearch"];export{p as _AutosuggestSearch,ce as __namedExportsOrder,pe as default};
//# sourceMappingURL=AutosuggestSearch.stories-450ee1bd.js.map
