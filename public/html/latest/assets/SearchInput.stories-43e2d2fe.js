import{j as t}from"./jsx-runtime-f961835c.js";import{r as y}from"./index-f80c8c95.js";import{g as I,F as T}from"./FormField-eaf65ac7.js";import{f as C}from"./knobs-1ca71552.js";import"./classUtils-ef6e60eb.js";import"./index-603b371f.js";import"./hooks-d45327d9.js";import"./domid-a414b1fb.js";import"./env-5a2a565d.js";import"./_Link-b7c9c4c9.js";import"./getScrollbarWidth-73ca1995.js";import"./getSVGtext-a5d3ecb0.js";import"./addUrlParams-c54217db.js";import"./cssutils-41198468.js";import"./assets-41f88d07.js";import"./themes-56ee0168.js";const u=e=>{const{onChange:r,onButtonClick:a,buttonText:n="Leita",fieldWrapperProps:i,...l}=I(e),{value:d,defaultValue:b,placeholder:g}=l,[q,S]=y.useState(void 0),m=!!(d??q??!!b),V=!m&&!g,_=d!=null?r:s=>{S(!!s.target.value),r&&r(s)};return t.jsx(T,{extraClassName:"SearchInput",empty:V,filled:m,...i,renderInput:(s,v,x)=>t.jsxs("div",{className:s.input,...x(),children:[t.jsx("input",{className:"SearchInput__input",onChange:_,...v,...l,ref:e.inputRef})," ",a&&t.jsx("button",{className:"SearchInput__button",type:"button",onClick:a,title:n,ref:e.buttonRef,disabled:e.disabled||e.readOnly,children:n})]})})};try{u.displayName="SearchInput",u.__docgenInfo={description:"",displayName:"SearchInput",props:{className:{defaultValue:null,description:'Container className - alongside "FormField"',name:"className",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string | Element"}},assistText:{defaultValue:null,description:"",name:"assistText",required:!1,type:{name:"string | Element"}},hideLabel:{defaultValue:null,description:"",name:"hideLabel",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}},invalid:{defaultValue:null,description:"",name:"invalid",required:!1,type:{name:"boolean"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string | Element"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},reqText:{defaultValue:null,description:`Hidden label prefix text to indicate that the field is required.

If your field is required but should not say so in its label
then set this prop to \`false\`

Default: \`"Þarf að fylla út"\``,name:"reqText",required:!1,type:{name:"string | false"}},id:{defaultValue:null,description:'Optional pre-determinted id="" for the __input',name:"id",required:!1,type:{name:"string"}},wrapperRef:{defaultValue:null,description:"@deprecated Use `*Props.wrapperProps.ref` instead (Will be removed in v0.11)\n\nRef object pointing to the outermost `.FormField` element",name:"wrapperRef",required:!1,type:{name:"RefObject<HTMLElement>"}},wrapperProps:{defaultValue:null,description:`Custom HTML attributes for the component's wrapper element.

Note, however, that some props may be intentionally
excluded from the list.

__WARNING:__
In some cases props added this way can break the component, og hurt its
accessibility.  Also, some props may get ignored, or over-ridden by the
component. User discretion is advised.`,name:"wrapperProps",required:!1,type:{name:"HTMLProps<null, never>"}},ssr:{defaultValue:null,description:`Indicates whether server-side rendering is supported or not.

The \`ssr-only\` value is useful for cases where you need
to demo the server-rendered version in a browser.`,name:"ssr",required:!1,type:{name:"SSRSupport"}},small:{defaultValue:null,description:"",name:"small",required:!1,type:{name:"boolean"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"string"}},onButtonClick:{defaultValue:null,description:"",name:"onButtonClick",required:!1,type:{name:"(() => void)"}},buttonText:{defaultValue:null,description:"",name:"buttonText",required:!1,type:{name:"string"}},inputRef:{defaultValue:null,description:"",name:"inputRef",required:!1,type:{name:"RefObject<HTMLInputElement>"}},buttonRef:{defaultValue:null,description:"",name:"buttonRef",required:!1,type:{name:"RefObject<HTMLButtonElement>"}}}}}catch{}const p=C(),G={title:"Forms/SearchInput",parameters:{viewport:{defaultViewport:"responsive"}}},R=e=>{const r=e.physicalSearchButton||void 0,a=p.getProps(e),[n,i]=y.useState("");return t.jsx(u,{...a,label:"Search for things",value:n,onChange:l=>{i(l.currentTarget.value)},onButtonClick:r&&(()=>alert("Perform Search!"))})},o={render:e=>t.jsx(R,{...e}),argTypes:{physicalSearchButton:{name:"Physical search <button/>"},...p.argTypes},args:{physicalSearchButton:!1,...p.args}};var c,f,h;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <SearchInputStory {...args} />,
  argTypes: {
    physicalSearchButton: {
      name: 'Physical search <button/>'
    },
    ...ffCtrls.argTypes
  },
  args: {
    physicalSearchButton: false,
    ...ffCtrls.args
  }
}`,...(h=(f=o.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const z=["_SearchInput"];export{o as _SearchInput,z as __namedExportsOrder,G as default};
//# sourceMappingURL=SearchInput.stories-43e2d2fe.js.map
