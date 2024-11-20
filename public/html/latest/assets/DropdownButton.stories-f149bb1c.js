import{j as n}from"./jsx-runtime-f961835c.js";import{r as S,R as T}from"./index-f80c8c95.js";import{u as I,f as j,s as V,b as L}from"./floating-ui.react.esm-4d91271d.js";import{m as N}from"./getSVGtext-a8bc7f1c.js";import{B as k}from"./_Button-a44bcef1.js";import{u as q}from"./useCallbackOnEsc-c69f5e0c.js";import{u as C}from"./useLaggedState-9e937430.js";import{u as E}from"./useOnClickOutside-2e1471b7.js";import{F as R}from"./FocusTrap-e81f6d3e.js";import{u as O}from"./browserSide-4379edd8.js";import"./_Link-b7c9c4c9.js";import"./_useMobileMenuToggling-7bb485b9.js";import"./index-64d4dcb8.js";const i=t=>{const[o,l]=C(!1,10),_=O(t.ssr),[x,d]=S.useState(!1),m=T.useRef(null),s=()=>l(!1,0);E(m,o&&s),q(o&&s);const{x:p,y:D,refs:c}=I({placement:"bottom-start",middleware:[j(),V()],whileElementsMounted:L}),{wrapperProps:a={}}=t;return n.jsxs("details",{...a,className:N("DropdownButton",o&&"open",a.className),open:o,onBlur:e=>{var r;x||l(!1,300),(r=a.onBlur)==null||r.call(a,e)},ref:e=>{e&&(m.current=e,c.setReference(e.querySelector(".DropdownButton__toggler")),c.setFloating(e.querySelector(".DropdownButton__menu")))},children:[n.jsx(k,{as:"summary",className:"DropdownButton__toggler",bem:t.buttonType==="primary"?"ButtonPrimary":"ButtonSecondary",icon:t.buttonIcon,size:t.buttonSize,variant:t.buttonVariant,"aria-label":t.labelLong,onClick:e=>{e.preventDefault(),l(!o,0)},children:t.label}),n.jsxs("ul",{className:"DropdownButton__menu",onMouseEnter:()=>{d(!0)},onMouseLeave:()=>{d(!1)},onFocus:()=>{l(!0,0)},style:p!=null?{"--DropdownButton-pos-y":`${D}px`,"--DropdownButton-pos-x":`${p}px`}:void 0,children:[t.items.map((e,r)=>{if(typeof e=="function"){const w=e;return n.jsx("li",{className:"DropdownButton__item",children:n.jsx(w,{closeMenu:s})},r)}const{label:f,onClick:b,href:y}=e,g={className:"DropdownButton__itembutton",lang:e.lang,"data-icon":e.icon,"arial-label":e.labelLong};return n.jsx("li",{className:"DropdownButton__item",children:_&&b?n.jsx("button",{...g,type:"button","aria-controls":e.controlsId,onClick:w=>{b(e)!==!1&&s()},children:f}):y!=null?n.jsx("a",{...g,href:y,hrefLang:e.hrefLang,target:e.target,children:f}):null},r)}),n.jsx(R,{Tag:"li",depth:2})]})]})};try{i.displayName="DropdownButton",i.__docgenInfo={description:"",displayName:"DropdownButton",props:{buttonSize:{defaultValue:null,description:"",name:"buttonSize",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"wide"'},{value:'"normal"'}]}},buttonIcon:{defaultValue:null,description:"",name:"buttonIcon",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"edit"'},{value:'"go-back"'},{value:'"go-forward"'}]}},buttonVariant:{defaultValue:null,description:"",name:"buttonVariant",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"destructive"'}]}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},labelLong:{defaultValue:null,description:"",name:"labelLong",required:!1,type:{name:"string"}},buttonType:{defaultValue:null,description:'Default: `"seconcary"`',name:"buttonType",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"(DropdownButtonItem | DropdownButtonCustomItem)[]"}},wrapperProps:{defaultValue:null,description:`Custom HTML attributes for the component's wrapper element.

Note, however, that some props may be intentionally
excluded from the list.

__WARNING:__
In some cases props added this way can break the component, og hurt its
accessibility.  Also, some props may get ignored, or over-ridden by the
component. User discretion is advised.`,name:"wrapperProps",required:!1,type:{name:'HTMLProps<"details", "name" | "open">'}},ssr:{defaultValue:null,description:`Indicates whether server-side rendering is supported or not.

The \`ssr-only\` value is useful for cases where you need
to demo the server-rendered version in a browser.`,name:"ssr",required:!1,type:{name:"SSRSupport"}}}}}catch{}const Y={title:"DropdownButton",parameters:{viewport:{defaultViewport:"responsive"}}},M=[{label:"Edit with onClick",icon:"edit",onClick:()=>alert("Edit")},{label:n.jsxs(n.Fragment,{children:["Something else with ",n.jsx("small",{children:"some JSX"})," and a long label"]}),href:""},{label:"Some stuff",icon:"document",href:""},{label:"Delete",href:""}],u={render:t=>n.jsx(i,{label:"Toggler text",labelLong:"Optional longer toggler label",items:M,buttonType:t.buttonType,buttonSize:t.smallButton?"small":void 0}),argTypes:{buttonType:{name:"Button type",options:["secondary","primary"],control:"inline-radio"},smallButton:{name:"Small button"}},args:{buttonType:"secondary",smallButton:!1}};var h,B,v;u.parameters={...u.parameters,docs:{...(h=u.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <DropdownButton label="Toggler text" labelLong="Optional longer toggler label" items={mockItems} buttonType={args.buttonType} buttonSize={args.smallButton ? 'small' : undefined} />,
  argTypes: {
    buttonType: {
      name: 'Button type',
      options: ['secondary', 'primary'],
      control: 'inline-radio'
    },
    smallButton: {
      name: 'Small button'
    }
  },
  args: {
    buttonType: 'secondary',
    smallButton: false
  }
}`,...(v=(B=u.parameters)==null?void 0:B.docs)==null?void 0:v.source}}};const Z=["_DropdownButton"];export{u as _DropdownButton,Z as __namedExportsOrder,Y as default};
//# sourceMappingURL=DropdownButton.stories-f149bb1c.js.map
