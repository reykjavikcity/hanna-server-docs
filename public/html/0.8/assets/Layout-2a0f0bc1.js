import{j as e}from"./jsx-runtime-f961835c.js";import{m as c}from"./getSVGtext-a8bc7f1c.js";import{g as f}from"./i18n-d547729d.js";import{r as y}from"./_Layouts-7b0d8370.js";import{h}from"./a11yHelpers-2abd986a.js";import"./index-f80c8c95.js";import"./_Link-b7c9c4c9.js";import"./_useMobileMenuToggling-7bb485b9.js";import{u as v}from"./useScrollbarWidthCSSVar-c6530e28.js";const L={is:{skipLinkLabel:"Fara í leiðakerfi"},en:{skipLinkLabel:"Skip to navigation"},pl:{skipLinkLabel:"Przejdź do nawigacji"}},t=a=>{v();const{globalAlerts:r,mainChildren:o,navChildren:l,footerChildren:s,colorTheme:d,children:m,siteName:u,logoLink:p="/",wrapperProps:n}=a,i=f(a,L);return e.jsxs("div",{...n,className:c("Layout",a.modifier,(n||{}).className),"data-color-theme":d,children:[r&&e.jsx("div",{className:"Layout__alerts",role:"alert",children:r}),e.jsxs("div",{className:"Layout__content",children:[e.jsxs("div",{className:"Layout__header",role:"banner",children:[y("Layout",p,u)," ",l&&e.jsx("a",{className:"Layout__header__navlink",href:"#pagenav",onClick:h,"aria-label":i.skipLinkLabel,children:i.skipLinkLabel})]}),e.jsx("div",{className:"Layout__main",role:"main",children:o||m}),l&&e.jsx("div",{className:"Layout__nav",id:"pagenav",tabIndex:-1,role:"navigation",children:l}),e.jsx("div",{className:"Layout__footer",role:"complementary",children:s})]})]})};try{t.displayName="Layout",t.__docgenInfo={description:"",displayName:"Layout",props:{globalAlerts:{defaultValue:null,description:"",name:"globalAlerts",required:!1,type:{name:"ReactNode"}},navChildren:{defaultValue:null,description:"",name:"navChildren",required:!1,type:{name:"ReactNode"}},footerChildren:{defaultValue:null,description:"",name:"footerChildren",required:!1,type:{name:"ReactNode"}},colorTheme:{defaultValue:null,description:"",name:"colorTheme",required:!1,type:{name:"enum",value:[{value:'"trustworthy"'},{value:'"dependable"'},{value:'"friendly"'},{value:'"lively"'},{value:'"colorful"'}]}},logoLink:{defaultValue:null,description:"",name:"logoLink",required:!1,type:{name:"string"}},siteName:{defaultValue:null,description:"",name:"siteName",required:!1,type:{name:"string"}},texts:{defaultValue:null,description:"",name:"texts",required:!1,type:{name:"LayoutI18n"}},lang:{defaultValue:null,description:"",name:"lang",required:!1,type:{name:"enum",value:[{value:'"is"'},{value:'"en"'},{value:'"pl"'}]}},ssr:{defaultValue:null,description:"@deprecated Not used (Will be removed in v0.11)",name:"ssr",required:!1,type:{name:"SSRSupport"}},wrapperProps:{defaultValue:null,description:`Custom HTML attributes for the component's wrapper element.

Note, however, that some props may be intentionally
excluded from the list.

__WARNING:__
In some cases props added this way can break the component, og hurt its
accessibility.  Also, some props may get ignored, or over-ridden by the
component. User discretion is advised.`,name:"wrapperProps",required:!1,type:{name:'HTMLProps<"div", "data-color-theme">'}},modifier:{defaultValue:null,description:`List of CSS BEM --modifier's to add to the component's main wrapper.

All falsy values are neatly skipped.`,name:"modifier",required:!1,type:{name:"ClassNameModifiers"}},mainChildren:{defaultValue:null,description:"",name:"mainChildren",required:!1,type:{name:"ReactNode"}}}}}catch{}export{t as L};
//# sourceMappingURL=Layout-2a0f0bc1.js.map