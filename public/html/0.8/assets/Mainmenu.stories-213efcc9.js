import{j as n}from"./jsx-runtime-f961835c.js";import{r as f}from"./index-f80c8c95.js";import{f as $}from"./focusElm-346ced9a.js";import{m as P}from"./getSVGtext-a8bc7f1c.js";import{g as C,D as B}from"./i18n-d547729d.js";import{L as E}from"./_Link-b7c9c4c9.js";import{g as se}from"./assets-83022afa.js";import{b as le,M as ie,c as oe,d as ue,u as de}from"./_useMobileMenuToggling-7bb485b9.js";import{u as ce}from"./browserSide-4379edd8.js";import{a as Y,b as j,c as ee,d as me}from"./_dummyData-4974dfa4.js";import"./getPageScrollElm-bb23cb91.js";import"./range-dbab87d5.js";import"./getStableRandomItem-5e7f6e22.js";const w=e=>{const{title:s,id:t,items:d,image:l}=e,o=l&&se(l);return n.jsxs("li",{className:"AuxiliaryPanel",id:t,style:o?{"--menu-auxiliary-image":`url(${o})`}:void 0,children:[n.jsx("h3",{className:"AuxiliaryPanel__title",children:s}),n.jsx("ul",{className:"AuxiliaryPanel__items",children:d.map((r,m)=>n.jsx("li",{className:P("AuxiliaryPanel__item",r.modifier),"aria-current":r.current||void 0,children:r.Content?n.jsx(r.Content,{}):n.jsx(E,{className:"AuxiliaryPanel__link",href:r.href,target:r.target,lang:r.lang,children:r.label})},m))})]})};try{w.displayName="AuxiliaryPanel",w.__docgenInfo={description:"",displayName:"AuxiliaryPanel",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:'(Omit<{ current?: boolean | undefined; } & BemModifierProps & Cleanup<{ label: string; summary?: string | undefined; href: string; lang?: string | undefined; hrefLang?: string | undefined; target?: HTMLAttributeAnchorTarget | undefined; } & { ...; }>, "summary"> | Omit<...>)[]'}},image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"enum",value:[{value:'"hanna-veitiggi"'},{value:'"hanna-vandro"'},{value:'"hanna-hugsi"'},{value:'"hanna-hissa"'},{value:'"hanna-hahaha"'},{value:'"hanna-hae"'},{value:'"hanna-god_spurning"'},{value:'"hanna-gjuggiborg"'},{value:'"hanna-benda"'}]}}}}}catch{}const q=e=>{const{setActivePanel:s,panel:t,isParent:d,isActive:l,isBrowser:o,texts:r}=e,{items:m}=t;return n.jsxs("li",{ref:l?e.activeRef:void 0,className:P("PrimaryPanel",[d&&"parent",l&&"active",m.length>5&&"twocol"]),id:t.id,children:[n.jsxs("h3",{className:"PrimaryPanel__title",children:[" ",o&&!l?n.jsx("button",{className:"MainMenu__mega__title-toggler","aria-controls":t.id,onClick:()=>s(t,!1),"aria-pressed":l,type:"button",children:t.title}):t.title]}),n.jsx("ul",{className:"PrimaryPanel__items",children:m.map((i,p)=>n.jsx("li",{className:P("PrimaryPanel__item",i.modifier),"aria-current":i.current||void 0,children:i.Content?n.jsx(i.Content,{}):n.jsxs(E,{className:"PrimaryPanel__link",href:i.href,target:i.target,lang:i.lang,hrefLang:i.hrefLang,children:[n.jsx("span",{className:"PrimaryPanel__linkTitle",children:i.label})," ",n.jsx("small",{className:"PrimaryPanel__summary",children:i.summary})," "]})},p))}),o&&l&&n.jsx("button",{className:"MainMenu__megapanel__backtomenu","aria-controls":t.id,"aria-label":r.backToMenuLong,onClick:()=>s(void 0),type:"button",children:r.backToMenu})]})};try{q.displayName="PrimaryPanel",q.__docgenInfo={description:"",displayName:"PrimaryPanel",props:{setActivePanel:{defaultValue:null,description:"",name:"setActivePanel",required:!0,type:{name:"(panel: MegaMenuPanel | undefined, setFocus?: boolean | undefined) => void"}},isParent:{defaultValue:null,description:"",name:"isParent",required:!1,type:{name:"boolean"}},isActive:{defaultValue:null,description:"",name:"isActive",required:!1,type:{name:"boolean"}},panel:{defaultValue:null,description:"",name:"panel",required:!0,type:{name:"MegaMenuPanel"}},texts:{defaultValue:null,description:"",name:"texts",required:!0,type:{name:"PrimaryPanelI18n"}},activeRef:{defaultValue:null,description:"",name:"activeRef",required:!0,type:{name:"RefObject<HTMLLIElement>"}},isBrowser:{defaultValue:null,description:"",name:"isBrowser",required:!0,type:{name:"true | undefined"}}}}}catch{}const pe=0,ge=(e,s=pe)=>{const[t,d]=f.useState(e),l=f.useRef(),o=()=>{l.current&&clearTimeout(l.current)},r=f.useRef((m,i=s)=>{d(m),o(),l.current=setTimeout(()=>{l.current=null,d(void 0)},i)}).current;return f.useEffect(()=>(e!==void 0&&r(e,s),o),[]),[t,r]},fe={is:{togglerLabel:"Opna/loka Aðalvalmynd",closeMenuLabel:"Loka",closeMenuLabelLong:"Loka aðalvalmynd"},en:{togglerLabel:"Toggle Main Menu",closeMenuLabel:"Close",closeMenuLabelLong:"Close main menu"},pl:{togglerLabel:"Otwórz/zamknij menu główne",closeMenuLabel:"Zamknij",closeMenuLabelLong:"Zamknij menu główne"}},V=e=>{const{isMenuActive:s,isMenuOpen:t,uiState:d,closeMenu:l,toggleMenu:o}=le({doInitialize:e.ssr!=="ssr-only"}),r=C(e,fe);return n.jsxs(n.Fragment,{children:[s&&n.jsx("button",{className:"MobileMenuToggler",onClick:o,"aria-controls":e.controlsId,"aria-pressed":t,children:r.togglerLabel}),n.jsx(ie,{value:d,children:e.children}),s&&n.jsx("button",{className:"MobileMenuToggler__closebutton",onClick:l,"aria-label":r.closeMenuLabelLong,type:"button",children:r.closeMenuLabel})]})};try{V.displayName="MobileMenuToggler",V.__docgenInfo={description:"A wrapper component that handles conditional hiding/toggling\nbehavior, similar to the one `MainMenu` uses.",displayName:"MobileMenuToggler",props:{controlsId:{defaultValue:null,description:"The DOM id of the menu that is being toggled",name:"controlsId",required:!0,type:{name:"string"}},texts:{defaultValue:null,description:"",name:"texts",required:!1,type:{name:"MobileMenuTogglerI18n"}},lang:{defaultValue:null,description:"",name:"lang",required:!1,type:{name:"string"}},ssr:{defaultValue:null,description:`Indicates whether server-side rendering is supported or not.

The \`ssr-only\` value is useful for cases where you need
to demo the server-rendered version in a browser.`,name:"ssr",required:!1,type:{name:"SSRSupport"}}}}}catch{}const z=(e,s)=>s?e.find(t=>s===t.id):void 0,W={netbook:1,wide:1},S={is:{title:"Aðalvalmynd",homeLabel:"Forsíða",backToMenu:"Loka",backToMenuLong:"Til baka í valmynd"},en:{title:"Main Menu",homeLabel:"Home page",backToMenu:"Close",backToMenuLong:"Close and return to menu"},pl:{title:"Menu główne",homeLabel:"Strona główna",backToMenu:"Zamknij",backToMenuLong:"Zamknij i wróć do menu"}},Me=(e,s,t,d)=>{const l=e.map(r=>{if(r==="---"||!("label"in r))return r;const m=r.href,i=r.controlsId||m&&/^#/.test(m)&&m.slice(1)||void 0,p=i?s.find(I=>I.id===i):void 0;return{...r,controlsId:i,megaPanel:p}}),o=l[0];return o&&(typeof o=="object"&&o.modifier==="home"||((!t||typeof t=="string")&&(t={href:t||"/",label:d.homeLabel||S[B].homeLabel,lang:d.homeLabel?void 0:B}),l.unshift({...t,modifier:"home"}))),l},he=[],A=e=>{const{megaPanels:s=he,onItemClick:t,ssr:d,auxiliaryPanel:l,wrapperProps:o={}}=e,r=C(e,S),m=e.title||r.title,{closeHamburgerMenu:i}=oe(),p=ce(d),I=f.useRef(null),R=o.ref||I,H=f.useRef(null),O=f.useRef(null),[y,ne]=f.useState(()=>p&&z(s,e.activePanelId)),[ae,L]=ge(),M=f.useMemo(()=>p?(a,c=!0)=>{const g=document.documentElement,u=g.dataset;ne(h=>{if(!(!a&&!h)){if(a?(L(void 0,0),u.scrollTop=String(g.scrollTop),g.scrollTop=0,u.megaPanelActive=""):(L(h,1e3),g.scrollTop=parseInt(u.scrollTop||"")||0,delete u.scrollTop,delete u.megaPanelActive),c){const _=H.current;setTimeout(()=>{a?a!==h&&$.focusElm(O.current):$.focusElm(_)},100)}return a}})}:()=>{},[L,p]);ue(a=>{!W[a.is]&&W[a.was||""]&&M(void 0)});const D=!!y,F=f.useMemo(()=>Me(e.items,s,e.homeLink,r),[e.items,e.homeLink,s,r]);if(f.useEffect(()=>{M(z(s,e.activePanelId))},[e.activePanelId,s,M]),f.useEffect(()=>{const a=R.current;if(!p||!D||!a)return;const c=u=>{u.key==="Escape"&&M(void 0)},g=u=>{a.contains(u.target)||M(void 0)};return document.addEventListener("keydown",c),document.addEventListener("click",g,!0),()=>{document.removeEventListener("keydown",c),document.removeEventListener("click",g,!0)}},[D,M,p]),F.length===0)return null;const re=a=>{a.target.closest("a[href]")&&(M(void 0),i())};return n.jsxs("nav",{...e.wrapperProps,className:P("MainMenu",null,o.className),"aria-label":m,"data-sprinkled":p,ref:R,children:[n.jsx("h2",{className:"MainMenu__title",children:m}),n.jsx("ul",{className:"MainMenu__items",children:F.map((a,c)=>{if(a==="---")return n.jsx("li",{className:"MainMenu__separator","aria-hidden":"true"},c);if(!("label"in a)){const b=a;return n.jsx("li",{className:"MainMenu__item",children:n.jsx(b,{closeMenu:i})},c)}const{label:g,labelLong:u,lang:h,controlsId:_,onClick:T}=a,U=y&&_===y.id||void 0;return n.jsx("li",{className:P("MainMenu__item",a.modifier),"aria-current":a.current||void 0,children:p&&(a.megaPanel||T)?n.jsx("button",{className:"MainMenu__link",onClick:()=>{const b=T&&T(c,a)===!1,te=t&&t(c,a)===!1,{megaPanel:N}=a;N?M(N!==y?N:void 0):!(b||te)&&i()},ref:U&&H,"aria-pressed":U,"aria-controls":_,"aria-label":u,title:u,lang:h,type:"button",children:g}):a.href!=null?n.jsx(E,{className:"MainMenu__link",href:a.href,target:a.target,"aria-label":u,title:u,onClick:()=>{!(t&&t(c,a)===!1)&&i()},lang:h,hrefLang:a.hrefLang,children:g}):void 0},c)})}),`

`,s.length>0&&n.jsx("div",{className:P("MainMenu__panelsWrap",[y&&"active"]),children:n.jsxs("ul",{className:"MainMenu__panels",onClick:re,children:[s.map((a,c)=>{if(!a.items.length)return;const g=y===a||ae===a||void 0,u=!!a.items.find(h=>h.current);return n.jsx(q,{isParent:u,isActive:g,panel:a,isBrowser:p,setActivePanel:M,texts:r,activeRef:O},c)}),l&&n.jsx(w,{...l})]})})]})},k=e=>{const s=e.wrapperProps,t=de(s&&s.id),d=s?{...s,id:t}:{id:t},l=C(e,S);return n.jsx(V,{ssr:e.ssr,lang:e.lang,texts:l.togglerLabel?l:void 0,controlsId:t,children:n.jsx(A,{...e,wrapperProps:d})})};try{A.displayName="_MainMenu",A.__docgenInfo={description:"",displayName:"_MainMenu",props:{title:{defaultValue:null,description:`Top-level screen-reader headline/label for the whole menu.
Defaults to a translation of "Main Menu"`,name:"title",required:!1,type:{name:"string"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"MainMenuItemList"}},homeLink:{defaultValue:null,description:'Link for the homepage - defaults to `"/"` adding a\ngeneric sounding "Home"/"Forsíða" label',name:"homeLink",required:!1,type:{name:'string | Omit<MainMenuItem, "modifier">'}},megaPanels:{defaultValue:null,description:"",name:"megaPanels",required:!1,type:{name:"MegaMenuPanel[]"}},auxiliaryPanel:{defaultValue:null,description:"",name:"auxiliaryPanel",required:!1,type:{name:"AuxiliaryPanelProps"}},onItemClick:{defaultValue:null,description:'NOTE: Clicking a MainMenu item will automatically close HannaUIState\'s\n"Hamburger menu" (a.k.a. "Mobile menu")\n… unless the `onItemClick` function explicitly returns `false`.',name:"onItemClick",required:!1,type:{name:"((index: number, item: MainMenuItem) => boolean | void)"}},activePanelId:{defaultValue:null,description:"",name:"activePanelId",required:!1,type:{name:"string"}},ssr:{defaultValue:null,description:`Indicates whether server-side rendering is supported or not.

The \`ssr-only\` value is useful for cases where you need
to demo the server-rendered version in a browser.`,name:"ssr",required:!1,type:{name:"SSRSupport"}},texts:{defaultValue:null,description:"",name:"texts",required:!1,type:{name:"MainMenuI18n"}},lang:{defaultValue:null,description:"",name:"lang",required:!1,type:{name:"string"}},wrapperProps:{defaultValue:null,description:`Custom HTML attributes for the component's wrapper element.

Note, however, that some props may be intentionally
excluded from the list.

__WARNING:__
In some cases props added this way can break the component, og hurt its
accessibility.  Also, some props may get ignored, or over-ridden by the
component. User discretion is advised.`,name:"wrapperProps",required:!1,type:{name:'HTMLProps<null, "aria-label">'}}}}}catch{}try{k.displayName="MainMenu",k.__docgenInfo={description:"",displayName:"MainMenu",props:{title:{defaultValue:null,description:`Top-level screen-reader headline/label for the whole menu.
Defaults to a translation of "Main Menu"`,name:"title",required:!1,type:{name:"string"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"MainMenuItemList"}},homeLink:{defaultValue:null,description:'Link for the homepage - defaults to `"/"` adding a\ngeneric sounding "Home"/"Forsíða" label',name:"homeLink",required:!1,type:{name:'string | Omit<MainMenuItem, "modifier">'}},megaPanels:{defaultValue:null,description:"",name:"megaPanels",required:!1,type:{name:"MegaMenuPanel[]"}},auxiliaryPanel:{defaultValue:null,description:"",name:"auxiliaryPanel",required:!1,type:{name:"AuxiliaryPanelProps"}},onItemClick:{defaultValue:null,description:'NOTE: Clicking a MainMenu item will automatically close HannaUIState\'s\n"Hamburger menu" (a.k.a. "Mobile menu")\n… unless the `onItemClick` function explicitly returns `false`.',name:"onItemClick",required:!1,type:{name:"((index: number, item: MainMenuItem) => boolean | void)"}},activePanelId:{defaultValue:null,description:"",name:"activePanelId",required:!1,type:{name:"string"}},ssr:{defaultValue:null,description:`Indicates whether server-side rendering is supported or not.

The \`ssr-only\` value is useful for cases where you need
to demo the server-rendered version in a browser.`,name:"ssr",required:!1,type:{name:"SSRSupport"}},texts:{defaultValue:null,description:"",name:"texts",required:!1,type:{name:"MainMenuI18n"}},lang:{defaultValue:null,description:"",name:"lang",required:!1,type:{name:"string"}},wrapperProps:{defaultValue:null,description:`Custom HTML attributes for the component's wrapper element.

Note, however, that some props may be intentionally
excluded from the list.

__WARNING:__
In some cases props added this way can break the component, og hurt its
accessibility.  Also, some props may get ignored, or over-ridden by the
component. User discretion is advised.`,name:"wrapperProps",required:!1,type:{name:'HTMLProps<null, "aria-label">'}}}}}catch{}const qe={title:"Layout/MainMenu",parameters:{controls:{hideNoControlsWarning:!0},layout:{head:!0,pos:"nav"}},argTypes:{ssr:{name:"Server-side Markup"}},args:{ssr:!1}},v={render:e=>n.jsx(k,{ssr:e.ssr?"ssr-only":!0,...e.megaPanels?{items:Y,megaPanels:j,auxiliaryPanel:ee}:{items:me}},`${e.ssr}-${e.megaPanels}`),argTypes:{megaPanels:{name:"Mega Panels"}},args:{megaPanels:!1}},x={render:e=>n.jsx(k,{ssr:e.ssr?"ssr-only":!0,items:Y,megaPanels:j,activePanelId:j[0].id,auxiliaryPanel:ee},`${e.ssr}-`),parameters:{css:{tokens:"MainMenu"}}};var Z,G,J;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: args => <MainMenu key={\`\${args.ssr}-\${args.megaPanels}\`} ssr={args.ssr ? 'ssr-only' : true} {...args.megaPanels ? {
    items: mainMenuItems,
    megaPanels: megaMenuPanels,
    auxiliaryPanel: auxiliaryPanel
  } : {
    items: mainMenuItemsSimple
  }} />,
  argTypes: {
    megaPanels: {
      name: 'Mega Panels'
    }
  },
  args: {
    megaPanels: false
  }
}`,...(J=(G=v.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,X;x.parameters={...x.parameters,docs:{...(K=x.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: args => <MainMenu key={\`\${args.ssr}-\`} ssr={args.ssr ? 'ssr-only' : true} items={mainMenuItems} megaPanels={megaMenuPanels} activePanelId={megaMenuPanels[0]!.id} auxiliaryPanel={auxiliaryPanel} />,
  parameters: {
    css: {
      tokens: 'MainMenu'
    }
  }
}`,...(X=(Q=x.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};const Ve=["_MainMenu","_MegaMenu"];export{v as _MainMenu,x as _MegaMenu,Ve as __namedExportsOrder,qe as default};
//# sourceMappingURL=Mainmenu.stories-213efcc9.js.map