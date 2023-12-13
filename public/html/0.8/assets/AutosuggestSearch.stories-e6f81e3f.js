import{j as u}from"./jsx-runtime-f961835c.js";import{r as m}from"./index-f80c8c95.js";import{r as j}from"./range-dbab87d5.js";import{A as E}from"./index-1144a2e5.js";import{m as I}from"./classUtils-ef6e60eb.js";import{g as N}from"./i18n-18e56484.js";import{S as F}from"./SearchInput-19eaf7b8.js";import{S as M}from"./SiteSearchInput-817d46b9.js";import"./index-c89a1915.js";import"./FormField-532841a0.js";import"./env-5a2a565d.js";import"./_useMobileMenuToggling-15a67498.js";import"./getSVGtext-8f35f9ab.js";import"./browserSide-4379edd8.js";import"./_Link-b7c9c4c9.js";const B={is:{label:"Leit á vefnum",inputLabel:"Leitarorð",buttonText:"Leita",placeholder:"Sláðu inn leitarorð",suggestionsLabel:"Tillögur"},en:{label:"Site search",inputLabel:"Search terms",buttonText:"Search",placeholder:"Enter search terms",suggestionsLabel:"Suggestions"},pl:{label:"Wyszukiwanie na stronie",inputLabel:"Wyszukaj frazę",buttonText:"Szukaj",placeholder:"Wpisz frazę",suggestionsLabel:"Sugestie"}},h=t=>{const{options:a,emptyMessage:o,itemActionIcon:n,onInput:T,onSelected:A,onClearOptions:x,onSubmit:c,onButtonClick:S=c,button:V,getOptionValue:f=e=>typeof e!="object"||!("value"in e)?e.toString():e.value!=null?e.value.toString():"",renderSuggestion:q=e=>typeof e=="object"&&"label"in e&&e.label!=null?e.label.toString():f(e),InputComponent:w=F,renderInputField:b,wrapperProps:k}=t,[l,L]=m.useState(""),O=m.useRef(null),r=N(t,B),i=!a.length&&o;return u.jsx(E,{theme:{container:"AutosuggestSearch",containerOpen:"AutosuggestSearch--open",suggestionsContainer:"AutosuggestSearch__container",suggestionsContainerOpen:"AutosuggestSearch__container--open",suggestionsList:I("AutosuggestSearch__list",n&&`action--${n}`),suggestion:"AutosuggestSearch__item",suggestionHighlighted:"AutosuggestSearch__item--highlighted"},focusInputOnSuggestionClick:!0,suggestions:i?[!0]:a,onSuggestionsClearRequested:x,onSuggestionsFetchRequested:({value:e})=>T(e),getSuggestionValue:i?()=>l:f,onSuggestionSelected:(e,s)=>{if(i){e.preventDefault();return}A({value:s.suggestionValue,option:s.suggestion})},renderSuggestion:i?()=>"":q,containerProps:{...k,"aria-label":r.label},renderSuggestionsContainer:({containerProps:e,children:s})=>{let g=s;if(i){const{message:y,type:d}=typeof o=="string"||!("message"in o)?{message:o,type:"empty"}:o;g=u.jsx("div",{className:I("AutosuggestSearch__emptyMessage",d!=="empty"&&d),children:y})}return u.jsx("div",{...e,"aria-label":a.length?r.suggestionsLabel:void 0,children:g})},inputProps:{ref:O,value:l,onChange:(e,{newValue:s})=>{L(s)}},renderInputComponent:b?e=>b(e,r):e=>{const{className:s,type:g,disabled:y,readOnly:d,required:G,children:$,ref:R,...P}=e;return u.jsx(w,{lang:t.lang,...P,inputRef:R,button:V,label:r.inputLabel,placeholder:r.placeholder,buttonText:r.buttonText,onSubmit:c&&(()=>c(l)),onButtonClick:S&&(()=>S(l))})}})};try{h.displayName="AutosuggestSearch",h.__docgenInfo={description:"",displayName:"AutosuggestSearch",props:{options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"T[]"}},emptyMessage:{defaultValue:null,description:"",name:"emptyMessage",required:!1,type:{name:"string | Element | EmptyMessage"}},onInput:{defaultValue:null,description:"",name:"onInput",required:!0,type:{name:"(value: string) => void"}},onSelected:{defaultValue:null,description:"",name:"onSelected",required:!0,type:{name:"(payload: { value: string; option: T; }) => void"}},onClearOptions:{defaultValue:null,description:"",name:"onClearOptions",required:!0,type:{name:"() => void"}},getOptionValue:{defaultValue:null,description:"",name:"getOptionValue",required:!1,type:{name:"((option: T) => string)"}},renderSuggestion:{defaultValue:null,description:"",name:"renderSuggestion",required:!1,type:{name:"((option: T, context: { query: string; isHighlighted: boolean; }) => string | Element)"}},itemActionIcon:{defaultValue:null,description:"",name:"itemActionIcon",required:!1,type:{name:"enum",value:[{value:'"search"'},{value:'"go"'}]}},InputComponent:{defaultValue:null,description:"",name:"InputComponent",required:!1,type:{name:'((props: Pick<FormFieldWrappingProps, "ssr" | "wrapperProps" | "id" | "label"> & { inputRef?: RefObject<HTMLInputElement>; onSubmit?: ((value: string) => boolean | void); onButtonClick?: ((value: string) => boolean | void) | undefined; button?: boolean | undefined; buttonText?: string | undef...'}},renderInputField:{defaultValue:null,description:"",name:"renderInputField",required:!1,type:{name:"((inputProps: RenderInputComponentProps, texts: AutosuggestSearchI18n) => Element)"}},texts:{defaultValue:null,description:"",name:"texts",required:!1,type:{name:"AutosuggestSearchI18n"}},lang:{defaultValue:null,description:"",name:"lang",required:!1,type:{name:"enum",value:[{value:'"is"'},{value:'"en"'},{value:'"pl"'}]}},button:{defaultValue:null,description:"Toggle the search `<button/>`.\n\nDefaults to `true` if onButtonClick is passed, otherwise false.",name:"button",required:!1,type:{name:"boolean"}},onSubmit:{defaultValue:null,description:"Triggered when user hits ENTER key with the focus inside the input field.\n\nReturn `true` to __allow__ the browser's default submit hehavior.",name:"onSubmit",required:!1,type:{name:"((value: string) => boolean | void)"}},onButtonClick:{defaultValue:null,description:"Custom action to perform when the user clicks the search button.\n\nReturn `true` to __allow__ the browser's default submit hehavior.\n\nDefaults to `onSubmit`.",name:"onButtonClick",required:!1,type:{name:"((value: string) => boolean | void)"}},wrapperProps:{defaultValue:null,description:`Custom HTML attributes for the component's wrapper element.

Note, however, that some props may be intentionally
excluded from the list.

__WARNING:__
In some cases props added this way can break the component, og hurt its
accessibility.  Also, some props may get ignored, or over-ridden by the
component. User discretion is advised.`,name:"wrapperProps",required:!1,type:{name:"HTMLProps<null, never>"}}}}}catch{}const z=["","SiteSearchInput"],W=["","search","go"],ue={title:"Forms/AutosuggestSearch",parameters:{controls:{hideNoControlsWarning:!0},viewport:{defaultViewport:"responsive"},css:{tokens:"AutosuggestSearch,SiteSearchInput"}}},D=j(1,5).map(t=>`Suggestion ${t}`),H=t=>{const[a,o]=m.useState([]);return u.jsx(h,{options:a,onClearOptions:()=>o([]),onInput:n=>n.length>4?[]:o(D),getOptionValue:n=>n,onSelected:n=>console.info("onSelected",n),onSubmit:n=>console.info("onSubmit (and onButtonClick)",n),itemActionIcon:t.actionIcon||void 0,InputComponent:t.inputType==="SiteSearchInput"?M:void 0,button:t.button})},p={render:H,argTypes:{inputType:{name:"Input Field type",options:z,control:{type:"inline-radio",labels:{"":"Default (SearchInput)",SiteSearchInput:"SiteSearchInput"}}},actionIcon:{name:"Item action icon",options:W,control:{type:"inline-radio",labels:{"":"None",search:"Search",go:"Go!"}}},button:{name:"Submit button"}},args:{inputType:"",actionIcon:"",button:!0}};var v,_,C;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(C=(_=p.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};const le=["_AutosuggestSearch"];export{p as _AutosuggestSearch,le as __namedExportsOrder,ue as default};
//# sourceMappingURL=AutosuggestSearch.stories-e6f81e3f.js.map
