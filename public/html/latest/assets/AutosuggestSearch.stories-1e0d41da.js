import{j as p}from"./jsx-runtime-f961835c.js";import{r as S}from"./index-f80c8c95.js";import{r as H}from"./range-dbab87d5.js";import{A as G}from"./index-1144a2e5.js";import{m as V}from"./getSVGtext-6e71cb30.js";import{g as $}from"./i18n-d547729d.js";import{S as U}from"./SearchInput-fcfa9e8b.js";import"./_Link-b7c9c4c9.js";import{a as J}from"./_useMobileMenuToggling-b033ca8f.js";import{S as K}from"./SiteSearchInput-e0534cc0.js";import"./index-c89a1915.js";import"./FormField-a3e74bd6.js";import"./env-5a2a565d.js";import"./browserSide-4379edd8.js";const Q=new Set(["type","enter","click"]),X={is:{label:"Leit á vefnum",inputLabel:"Leitarorð",buttonText:"Leita",placeholder:"Sláðu inn leitarorð",suggestionsLabel:"Tillögur"},en:{label:"Site search",inputLabel:"Search terms",buttonText:"Search",placeholder:"Enter search terms",suggestionsLabel:"Suggestions"},pl:{label:"Wyszukiwanie na stronie",inputLabel:"Wyszukaj frazę",buttonText:"Szukaj",placeholder:"Wpisz frazę",suggestionsLabel:"Sugestie"}},b=t=>{const{options:r,emptyMessage:o,itemActionIcon:n,onInput:A,onSelected:q,onClearOptions:w,onSubmit:h,onButtonClick:y=h,button:k,getOptionValue:v=e=>typeof e!="object"||!("value"in e)?e.toString():e.value!=null?e.value.toString():"",renderSuggestion:P=e=>typeof e=="object"&&"label"in e&&e.label!=null?e.label.toString():v(e),InputComponent:R=U,renderInputField:I,invalid:L,errorMessage:O,assistText:E,onInputFocus:c,onInputBlurred:d}=t,[g,M]=J(t,"inputValue",""),N=S.useRef(null),a=$(t,X),u=!r.length&&o,{className:j,...F}=t.wrapperProps||{},i=S.useRef(),B=c||d?{onFocus:()=>{i.current||c==null||c(),clearTimeout(i.current),i.current=void 0},onBlur:()=>{clearTimeout(i.current),i.current=setTimeout(()=>{i.current=void 0,d==null||d()},100)}}:void 0;return p.jsx(G,{theme:{container:`AutosuggestSearch ${j||""}`,containerOpen:"AutosuggestSearch--open",suggestionsContainer:"AutosuggestSearch__container",suggestionsContainerOpen:"AutosuggestSearch__container--open",suggestionsList:V("AutosuggestSearch__list",n&&`action--${n}`),suggestion:"AutosuggestSearch__item",suggestionHighlighted:"AutosuggestSearch__item--highlighted"},focusInputOnSuggestionClick:!0,suggestions:u?[!0]:r,onSuggestionsClearRequested:w||(()=>{}),onSuggestionsFetchRequested:()=>{},getSuggestionValue:u?()=>g:v,onSuggestionSelected:(e,s)=>{if(u){e.preventDefault();return}q({value:s.suggestionValue,option:s.suggestion})},renderSuggestion:u?()=>"":P,containerProps:{...F,"aria-label":a.label},renderSuggestionsContainer:({containerProps:e,children:s})=>{let l=s;if(u){const{message:T,type:f}=typeof o=="string"||!("message"in o)?{message:o,type:"empty"}:o;l=p.jsx("div",{className:V("AutosuggestSearch__emptyMessage",f!=="empty"&&f),children:T})}return p.jsx("div",{...e,"aria-label":r.length?a.suggestionsLabel:void 0,children:l})},inputProps:{ref:N,value:g,onChange:(e,{newValue:s,method:l})=>{Q.has(l)&&(A(s),M(s))},...B},renderInputComponent:I?e=>I(e,a):e=>{const{className:s,type:l,disabled:T,readOnly:f,required:ne,children:oe,ref:z,defaultValue:W,...D}=e;return p.jsx(R,{lang:t.lang,defaultValue:W,...D,inputRef:z,button:k,label:a.inputLabel,placeholder:a.placeholder,buttonText:a.buttonText,invalid:L,errorMessage:O,assistText:E,onSubmit:h&&(()=>h(g)),onButtonClick:y&&(()=>y(g))})}})};try{b.displayName="AutosuggestSearch",b.__docgenInfo={description:"",displayName:"AutosuggestSearch",props:{options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"T[]"}},emptyMessage:{defaultValue:null,description:"",name:"emptyMessage",required:!1,type:{name:"string | Element | EmptyMessage"}},onInput:{defaultValue:null,description:"",name:"onInput",required:!0,type:{name:"(value: string) => void"}},onSelected:{defaultValue:null,description:"",name:"onSelected",required:!0,type:{name:"(payload: { value: string; option: T; }) => void"}},onClearOptions:{defaultValue:null,description:"",name:"onClearOptions",required:!1,type:{name:"(() => void)"}},onInputFocus:{defaultValue:null,description:`Called when the sarch input receives focus, except when the user clicks
a suggestion.

Clicking a suggestion briefly blurs the input, and then when the
input is immediately re-focused, this event is not triggered.`,name:"onInputFocus",required:!1,type:{name:"(() => void)"}},onInputBlurred:{defaultValue:null,description:`Called when the search input loses focus, except when the user clicks
a suggestion and the input is immediately re-focused.

Thus the triggering of this callback is thus always delayed by about 100ms
and may occur after other elements have received focused.`,name:"onInputBlurred",required:!1,type:{name:"(() => void)"}},getOptionValue:{defaultValue:null,description:"",name:"getOptionValue",required:!1,type:{name:"((option: T) => string)"}},renderSuggestion:{defaultValue:null,description:"",name:"renderSuggestion",required:!1,type:{name:"((option: T, context: { query: string; isHighlighted: boolean; }) => string | Element)"}},itemActionIcon:{defaultValue:null,description:"",name:"itemActionIcon",required:!1,type:{name:"enum",value:[{value:'"search"'},{value:'"go"'}]}},inputValue:{defaultValue:null,description:"",name:"inputValue",required:!1,type:{name:"string"}},defaultInputValue:{defaultValue:null,description:"",name:"defaultInputValue",required:!1,type:{name:"string"}},InputComponent:{defaultValue:null,description:"",name:"InputComponent",required:!1,type:{name:'((props: Pick<FormFieldWrappingProps, "wrapperProps" | "id" | "ssr" | "label"> & { inputRef?: RefObject<HTMLInputElement>; onSubmit?: ((value: string) => boolean | void); onButtonClick?: ((value: string) => boolean | void) | undefined; button?: boolean | undefined; buttonText?: string | undef...'}},renderInputField:{defaultValue:null,description:"",name:"renderInputField",required:!1,type:{name:"((inputProps: RenderInputComponentProps, texts: AutosuggestSearchI18n) => Element)"}},texts:{defaultValue:null,description:"",name:"texts",required:!1,type:{name:"AutosuggestSearchI18n"}},lang:{defaultValue:null,description:"",name:"lang",required:!1,type:{name:"enum",value:[{value:'"is"'},{value:'"en"'},{value:'"pl"'}]}},onSubmit:{defaultValue:null,description:"Triggered when user hits ENTER key with the focus inside the input field.\n\nReturn `true` to __allow__ the browser's default submit hehavior.",name:"onSubmit",required:!1,type:{name:"((value: string) => boolean | void)"}},onButtonClick:{defaultValue:null,description:"Custom action to perform when the user clicks the search button.\n\nReturn `true` to __allow__ the browser's default submit hehavior.\n\nDefaults to `onSubmit`.",name:"onButtonClick",required:!1,type:{name:"((value: string) => boolean | void)"}},assistText:{defaultValue:null,description:"",name:"assistText",required:!1,type:{name:"string | Element"}},invalid:{defaultValue:null,description:"",name:"invalid",required:!1,type:{name:"boolean"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string | Element"}},button:{defaultValue:null,description:"Toggle the search `<button/>`.\n\nDefaults to `true` if onButtonClick is passed, otherwise false.",name:"button",required:!1,type:{name:"boolean"}},wrapperProps:{defaultValue:null,description:`Custom HTML attributes for the component's wrapper element.

Note, however, that some props may be intentionally
excluded from the list.

__WARNING:__
In some cases props added this way can break the component, og hurt its
accessibility.  Also, some props may get ignored, or over-ridden by the
component. User discretion is advised.`,name:"wrapperProps",required:!1,type:{name:'HTMLProps<"div", "aria-label">'}}}}}catch{}const Y=["","SiteSearchInput"],Z=["","search","go"],be={title:"Forms/AutosuggestSearch",parameters:{controls:{hideNoControlsWarning:!0},viewport:{defaultViewport:"responsive"},css:{tokens:"AutosuggestSearch,SiteSearchInput"}}},ee=H(1,5).map(t=>`Suggestion ${t}`),te=t=>{const[r,o]=S.useState([]);return p.jsx(b,{options:r,onClearOptions:()=>o([]),onInput:n=>o(n.length>4?[]:ee),getOptionValue:n=>n,onSelected:n=>console.info("onSelected",n),onSubmit:n=>console.info("onSubmit (and onButtonClick)",n),itemActionIcon:t.actionIcon||void 0,InputComponent:t.inputType==="SiteSearchInput"?K:void 0,button:t.button})},m={render:te,argTypes:{inputType:{name:"Input Field type",options:Y,control:{type:"inline-radio",labels:{"":"Default (SearchInput)",SiteSearchInput:"SiteSearchInput"}}},actionIcon:{name:"Item action icon",options:Z,control:{type:"inline-radio",labels:{"":"None",search:"Search",go:"Go!"}}},button:{name:"Submit button"}},args:{inputType:"",actionIcon:"",button:!0}};var _,C,x;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(x=(C=m.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};const ye=["_AutosuggestSearch"];export{m as _AutosuggestSearch,ye as __namedExportsOrder,be as default};
//# sourceMappingURL=AutosuggestSearch.stories-1e0d41da.js.map
