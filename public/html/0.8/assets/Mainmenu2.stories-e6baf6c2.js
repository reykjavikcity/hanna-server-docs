import{j as e}from"./jsx-runtime-f961835c.js";import{r as g}from"./index-f80c8c95.js";import{m as R}from"./classUtils-ef6e60eb.js";import{g as W}from"./assets-ca39b462.js";import{g as Z}from"./i18n-18e56484.js";import{L as J}from"./_Link-b7c9c4c9.js";import{h as K}from"./a11yHelpers-c6af145a.js";import{B as $}from"./ButtonPrimary-acc327a3.js";import{B as q}from"./ButtonSecondary-79ba5be5.js";import{F as U}from"./FocusTrap-56c2452f.js";import{u as Q}from"./browserSide-4379edd8.js";import{u as X}from"./_useMobileMenuToggling-0971be40.js";import"./getSVGtext-8f35f9ab.js";import{g as Y}from"./getStableRandomItem-5e7f6e22.js";import"./_Button-0c36286c.js";const y=typeof document<"u"&&document.documentElement.classList,L={menuIsOpen:"menu-is-open",menuIsClosed:"menu-is-closed"},ee={is:{title:"Aðalvalmynd",homeLink:"Forsíða",openMenu:"Valmynd",openMenuLong:"Opna Aðalvalmynd",closeMenu:"Loka",closeMenuLong:"Loka Aðalvalmynd"},en:{title:"Main Menu",homeLink:"Home page",openMenu:"Menu",openMenuLong:"Open main menu",closeMenu:"Close",closeMenuLong:"Close main menu"},pl:{title:"Menu główne",homeLink:"Strona główna",openMenu:"Menu",openMenuLong:"Otwórz menu główne",closeMenu:"Zamknij",closeMenuLong:"Zamknij menu główne"},se:{title:"Huvudmeny",homeLink:"Förstasida",openMenu:"Meny",openMenuLong:"Öppna huvudmenyn",closeMenu:"Stäng",closeMenuLong:"Stäng huvudmenyn"}},ae={alert:"info",globe:void 0,search:"search",user:"user"},ne=r=>{const{onItemClick:o,closeMenu:a,isBrowser:T}=r,d=(s,n,l={})=>{const{key:m,Tag:k="li",button:j}=l;if(typeof n=="function"){const f=n;return e.jsx("li",{className:`${s}item`,children:e.jsx(f,{closeMenu:a})},m)}const b=`${s}link`,{label:I,labelLong:M,href:c,target:w,lang:v,controlsId:S,onClick:p,descr:x,icon:t}=n,C=x&&e.jsxs(e.Fragment,{children:[" ",e.jsx("small",{className:`${b}__descr`,children:x})]}),_=j?q:"button",B=j?q:J,N=j?{size:"small","data-icon":t&&ae[t]}:void 0;return e.jsx(k,{className:R(`${s}item`,n.modifier),"aria-current":n.current||void 0,children:T&&(p||!c)?e.jsxs(_,{className:b,type:"button",onClick:()=>{const f=p&&p(n)===!1,u=o&&o(n)===!1;!(f||u)&&a()},"aria-controls":S,"aria-label":M,title:M,lang:v,...N,children:[I," ",C]}):c?e.jsxs(B,{className:b,href:c,target:w,"aria-label":M,title:M,onClick:()=>{!(o&&o(n)===!1)&&a()},lang:v,hrefLang:n.hrefLang,...N,children:[I," ",C]}):null},m)};return{renderList:(s,n,l={})=>!n||!n.length?null:e.jsx("ul",{className:`${s}items`,...l.listProps,children:n.map((m,k)=>d(s,m,{key:k,button:l.buttons}))}),renderItem:d}},P=r=>{const{homeLink:o="/",items:a,onItemClick:T,illustration:d,imageUrl:F,wrapperProps:s={}}=r,n=X(s.id),l=Q(r.ssr),[m,k]=g.useState(!1),j=g.useRef(null),b=s.ref||j,I=g.useCallback(u=>u.key==="Escape"&&c(),[]),M=()=>{y.add(L.menuIsOpen),y.remove(L.menuIsClosed),k(!0),document.addEventListener("keydown",I)},c=()=>{y.remove(L.menuIsOpen),y.add(L.menuIsClosed),k(!1),p(v),b.current.scrollTo(0,0),document.removeEventListener("keydown",I)};g.useEffect(()=>{if(l)return y.add(L.menuIsClosed),()=>{c(),y.remove(L.menuIsClosed)}},[l]);const{mainItems:w,defaultActive:v}=g.useMemo(()=>{if(!a.main||!a.main.length)return{mainItems:void 0,defaultActive:-1};const u=a.main.map(i=>{var H;if(!("title"in i)||"current"in i)return i;const A=(H=i.subItems.find(V=>"current"in V&&!!V.current))==null?void 0:H.current;return{...i,current:A}}),h=u.findIndex(i=>"current"in i&&i.current);return{mainItems:u,defaultActive:h}},[a.main]),[S,p]=g.useState(v),x=g.useRef(v);v!==x.current&&(x.current=v,p(v));const t=Z(r,ee),{renderItem:C,renderList:_}=ne({onItemClick:T,closeMenu:c,isBrowser:l}),B={...typeof o=="string"?{href:o,label:t.homeLink}:o,modifier:"home"},N=F||d&&W(d),f=`${n}-menu`;return e.jsxs("nav",{...r.wrapperProps,className:R("MainMenu2",l&&(m?"open":"closed"),s.className),style:N?{...s.style,"--menu-image":`url(${N})`}:s.style,ref:b,"aria-label":t.title,"data-sprinkled":l,id:f,children:[m&&e.jsx(U,{atTop:!0}),e.jsxs("div",{className:"MainMenu2__content",children:[e.jsx("h2",{className:"MainMenu2__title",children:t.title}),l?e.jsx($,{className:"MainMenu2__toggler",size:"small",type:"button","aria-pressed":m,"aria-controls":f,"data-icon":"text",...m?{onClick:c,"aria-label":t.closeMenuLong,title:t.closeMenuLong,children:t.closeMenu}:{onClick:M,"aria-label":t.openMenuLong,title:t.openMenuLong,children:t.openMenu}}):e.jsx($,{className:"MainMenu2__toggler",size:"small",href:`#${f}`,onClick:K,"aria-hidden":"true","data-icon":"text",children:t.title}),w&&e.jsxs("div",{className:R("MainMenu2__main",S<0&&"noneActive"),children:[C("MainMenu2__main__",B,{Tag:"div"}),w.map((u,h)=>{if("title"in u){const i=`${n}-submenu-${h}`,A=h===S;return e.jsxs(g.Fragment,{children:[e.jsx("div",{className:"MainMenu2__main__item","aria-current":u.current||void 0,children:l?e.jsx("button",{className:"MainMenu2__main__link",type:"button",onClick:()=>p(h),"aria-controls":i,"aria-pressed":A,children:u.title}):e.jsx("strong",{className:"MainMenu2__main__link",children:u.title})}),_("MainMenu2__main__sub__",u.subItems,l&&{listProps:{id:i,hidden:!A}})]},h)}return C("MainMenu2__main__",u,{key:h,Tag:"div"})})]}),_("MainMenu2__hot__",a.hot,{buttons:!0}),_("MainMenu2__extra__",a.extra,{buttons:!0}),a.related&&a.related.length>0&&e.jsxs("div",{className:"MainMenu2__related",children:[a.relatedTitle&&e.jsx("h3",{className:"MainMenu2__related__title",children:a.relatedTitle}),_("MainMenu2__related__",a.related)]})]}),m&&e.jsx(U,{})]})};try{P.displayName="MainMenu2",P.__docgenInfo={description:"",displayName:"MainMenu2",props:{homeLink:{defaultValue:null,description:`URL for the mandatory (usually screen-reader-only) homepage Link.

Default: \`"/"\`

NOTE: The link's label is by default "Forsíða"/"Home Page"/"Strona główna"
(depending on your page language) but it can be custom-translated via the
\`props.texts\` translation prop.`,name:"homeLink",required:!1,type:{name:'string | Cleanup<Omit<MainMenu2Item, "modifier" | "controlsId"> & { href: string; }>'}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"{ main?: (MainMenu2Item | MainMenu2SubMenu | MainMenu2CustomItem)[] | undefined; hot?: MainMenu2ButtonItemList | undefined; extra?: MainMenu2ButtonItemList | undefined; relatedTitle?: string | undefined; related?: MainMenu2ItemList | undefined; }"}},onItemClick:{defaultValue:null,description:'NOTE: Clicking a MainMenu2 item will automatically close HannaUIState\'s\n"Hamburger menu" (a.k.a. "Mobile menu")\n… unless the `onItemClick` function explicitly returns `false`.',name:"onItemClick",required:!1,type:{name:"((item: MainMenu2Item) => boolean | void)"}},illustration:{defaultValue:null,description:"",name:"illustration",required:!1,type:{name:"enum",value:[{value:'"hanna-veitiggi"'},{value:'"hanna-vandro"'},{value:'"hanna-hugsi"'},{value:'"hanna-hissa"'},{value:'"hanna-hahaha"'},{value:'"hanna-hae"'},{value:'"hanna-god_spurning"'},{value:'"hanna-gjuggiborg"'},{value:'"hanna-benda"'},{value:'"allirsaman1"'},{value:'"allirsaman1b"'},{value:'"arstid_haust"'},{value:'"arstid_sumar"'},{value:'"arstid_vetur"'},{value:'"arstid_vor"'},{value:'"atvinna1"'},{value:'"atvinna2"'},{value:'"atvinna3"'},{value:'"baekurlestur"'},{value:'"bekkur"'},{value:'"borgarstjori1"'},{value:'"borgarstjori2"'},{value:'"borgarstjori3"'},{value:'"borgarstjori4"'},{value:'"born1"'},{value:'"born2"'},{value:'"born3"'},{value:'"born4"'},{value:'"breidholt"'},{value:'"breyting"'},{value:'"byggingar1"'},{value:'"draumar"'},{value:'"egsethig"'},{value:'"eldriborgari"'},{value:'"esjan"'},{value:'"ferdalag"'},{value:'"fjarhagsadstod"'},{value:'"fjarmal1"'},{value:'"fjarmal2"'},{value:'"fjarmal3"'},{value:'"fjarmal4"'},{value:'"fjolbreytni"'},{value:'"fjolmenning"'},{value:'"fjolskylda"'},{value:'"flaekja"'},{value:'"forsida"'},{value:'"forsida-17juni"'},{value:'"forsida-blidvidri"'},{value:'"forsida-rigning"'},{value:'"forsida-snjor"'},{value:'"framkvaemdir1"'},{value:'"framkvaemdir2"'},{value:'"framkvaemdir3"'},{value:'"framkvaemdir4"'},{value:'"fundargerd1"'},{value:'"fundur"'},{value:'"gaes"'},{value:'"gaman"'},{value:'"haelisleitendur"'},{value:'"haus1"'},{value:'"haus2"'},{value:'"haus3"'},{value:'"haus4"'},{value:'"haus5"'},{value:'"haus6"'},{value:'"haus7"'},{value:'"haus8"'},{value:'"haus9"'},{value:'"hjalpastad"'},{value:'"hopur"'},{value:'"hopur2"'},{value:'"hopur3"'},{value:'"hroki"'},{value:'"hundar"'},{value:'"ingolfur"'},{value:'"jafnvaegi"'},{value:'"kanina"'},{value:'"katur"'},{value:'"kettir"'},{value:'"kisa"'},{value:'"kjotsupa"'},{value:'"kongulo"'},{value:'"kort"'},{value:'"kreist"'},{value:'"krofuganga"'},{value:'"landslag"'},{value:'"laugardalur"'},{value:'"leikur_ibuar"'},{value:'"leikur"'},{value:'"logga"'},{value:'"logogregla"'},{value:'"maelt"'},{value:'"matur1"'},{value:'"mavar"'},{value:'"midbaer"'},{value:'"minarsidur"'},{value:'"mismunur"'},{value:'"naering"'},{value:'"nam_lestur"'},{value:'"nattura"'},{value:'"ofurfjolskylda"'},{value:'"oliprik"'},{value:'"ond"'},{value:'"peningar"'},{value:'"postit"'},{value:'"pulsa"'},{value:'"rad1"'},{value:'"rad2"'},{value:'"rad3"'},{value:'"raekta"'},{value:'"rafskuta"'},{value:'"reikningur1"'},{value:'"reikningur1b"'},{value:'"ruslabill"'},{value:'"samstarf"'},{value:'"samvinna1"'},{value:'"samvinna2"'},{value:'"samvinna3"'},{value:'"samvinna4"'},{value:'"sjor"'},{value:'"skipurit"'},{value:'"skokk"'},{value:'"skordyr"'},{value:'"skrifstofa"'},{value:'"skrifstofa2"'},{value:'"skrudganga"'},{value:'"stakthus"'},{value:'"sterkur"'},{value:'"stofnun"'},{value:'"stress"'},{value:'"stud"'},{value:'"sund1"'},{value:'"sund2"'},{value:'"svanurkisa"'},{value:'"svanurkisa-b"'},{value:'"svanurond"'},{value:'"svid1"'},{value:'"svid2"'},{value:'"sybbin"'},{value:'"tholendur_hjalp"'},{value:'"threytt"'},{value:'"tolfraedi1"'},{value:'"tolfraedi2"'},{value:'"tomstundir1"'},{value:'"tomstundir2"'},{value:'"tomstundir3"'},{value:'"tomstundir4"'},{value:'"tonlist"'},{value:'"umhverfi1"'},{value:'"umhverfi2"'},{value:'"umhverfi3"'},{value:'"utgefidefni"'},{value:'"utivinna"'},{value:'"vegvisir"'},{value:'"velferd1"'},{value:'"velferd2"'},{value:'"velferd3"'},{value:'"velferd4"'},{value:'"verlsa"'},{value:'"vesturbaer"'},{value:'"vinir"'},{value:'"vinna"'}]}},imageUrl:{defaultValue:null,description:"",name:"imageUrl",required:!1,type:{name:"string"}},wrapperProps:{defaultValue:null,description:`Custom HTML attributes for the component's wrapper element.

Note, however, that some props may be intentionally
excluded from the list.

__WARNING:__
In some cases props added this way can break the component, og hurt its
accessibility.  Also, some props may get ignored, or over-ridden by the
component. User discretion is advised.`,name:"wrapperProps",required:!1,type:{name:"HTMLProps<null, never>"}},texts:{defaultValue:null,description:"",name:"texts",required:!1,type:{name:"MainMenu2I18n"}},lang:{defaultValue:null,description:"",name:"lang",required:!1,type:{name:"string"}},ssr:{defaultValue:null,description:`Indicates whether server-side rendering is supported or not.

The \`ssr-only\` value is useful for cases where you need
to demo the server-rendered version in a browser.`,name:"ssr",required:!1,type:{name:"SSRSupport"}}}}}catch{}const O=(r,o,a)=>({title:r,subItems:Array.from({length:o}).map((T,d)=>({label:r+(d===2?" lorem impsum dolor sit":"")+" item "+(d+1),href:"",current:a===d||void 0,descr:Y(["Lorem impsum dolor sit dolore amet","Enim ad minim impsum sita met fööt dolore bleargh.","Leebur deroor iehroom, bork bork bork! Enim ad minim chokolat moose flüü.",void 0,void 0],d*11+r.slice(0,1))}))}),ke={title:"Layout/MainMenu2",parameters:{controls:{hideNoControlsWarning:!0},layout:{head:!0,pos:"nav"}}},E={render:r=>e.jsx(P,{ssr:r.ssr?"ssr-only":!0,items:{main:[O("Íbúar",8,2),O("Stjórnkerfi",5),O("Atvinnulíf",4),{label:"Hverfið mitt",href:"",target:"_blank",current:!1}],hot:[{label:"EN",labelLong:"English",href:"",icon:"globe",lang:"en",hrefLang:"en"},{label:"Mínar síður",href:"",icon:"user",target:"_blank"}],extra:[{label:"Leita",labelLong:"Leita á vefnum",href:"",icon:"search"},{label:"Tilkynningar",href:"",icon:"alert"}],relatedTitle:"Sérvefir",related:[{label:"Græna planið",href:"",target:"_blank"},{label:"Gagnahlaðborðið",href:"",target:"_blank"},{label:"Borgarbókasafnið",href:"",target:"_blank"},{label:"Borgin okkar",href:"",target:"_blank"},{label:"Borgarsögusafn Reykjavíkur ",href:"",target:"_blank"},{label:"Frístundavefurinn",href:"",target:"_blank"},{label:"Listasafn Reykjavíkur",href:"",target:"_blank"}]},illustration:"bekkur"},r.ssr+""),argTypes:{ssr:{name:"Server-side Markup"}},args:{ssr:!1}};var D,G,z;E.parameters={...E.parameters,docs:{...(D=E.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => <MainMenu2 key={args.ssr + ''} ssr={args.ssr ? 'ssr-only' : true} items={{
    main: [createPanelItems('Íbúar', 8, 2), createPanelItems('Stjórnkerfi', 5), createPanelItems('Atvinnulíf', 4), {
      label: 'Hverfið mitt',
      href: '',
      target: '_blank',
      current: false
    }],
    hot: [{
      label: 'EN',
      labelLong: 'English',
      href: '',
      icon: 'globe',
      lang: 'en',
      hrefLang: 'en'
    }, {
      label: 'Mínar síður',
      href: '',
      icon: 'user',
      target: '_blank'
    }],
    extra: [{
      label: 'Leita',
      labelLong: 'Leita á vefnum',
      href: '',
      icon: 'search'
    }, {
      label: 'Tilkynningar',
      href: '',
      icon: 'alert'
    }],
    relatedTitle: 'Sérvefir',
    related: [{
      label: 'Græna planið',
      href: '',
      target: '_blank'
    }, {
      label: 'Gagnahlaðborðið',
      href: '',
      target: '_blank'
    }, {
      label: 'Borgarbókasafnið',
      href: '',
      target: '_blank'
    }, {
      label: 'Borgin okkar',
      href: '',
      target: '_blank'
    }, {
      label: 'Borgarsögusafn Reykjavíkur ',
      href: '',
      target: '_blank'
    }, {
      label: 'Frístundavefurinn',
      href: '',
      target: '_blank'
    }, {
      label: 'Listasafn Reykjavíkur',
      href: '',
      target: '_blank'
    }]
  }} illustration="bekkur" />,
  argTypes: {
    ssr: {
      name: 'Server-side Markup'
    }
  },
  args: {
    ssr: false
  }
}`,...(z=(G=E.parameters)==null?void 0:G.docs)==null?void 0:z.source}}};const be=["_MainMenu2"];export{E as _MainMenu2,be as __namedExportsOrder,ke as default};
//# sourceMappingURL=Mainmenu2.stories-e6baf6c2.js.map
