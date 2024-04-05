import{j as e}from"./jsx-runtime-f961835c.js";import{r as p}from"./index-f80c8c95.js";import{m as R}from"./classUtils-ef6e60eb.js";import{g as W}from"./assets-b24d1fcc.js";import{g as Z}from"./i18n-d547729d.js";import{L as J}from"./_Link-b7c9c4c9.js";import{h as K}from"./a11yHelpers-7522e110.js";import{B as q}from"./ButtonPrimary-acc327a3.js";import{B as H}from"./ButtonSecondary-79ba5be5.js";import{F as U}from"./FocusTrap-56c2452f.js";import{u as Q}from"./browserSide-4379edd8.js";import{u as X}from"./_useMobileMenuToggling-15a67498.js";import"./getSVGtext-8f35f9ab.js";import{g as Y}from"./getStableRandomItem-5e7f6e22.js";import"./_Button-0c36286c.js";const y=typeof document<"u"&&document.documentElement.classList,j={menuIsOpen:"menu-is-open",menuIsClosed:"menu-is-closed"},ee={is:{title:"Aðalvalmynd",homeLink:"Forsíða",openMenu:"Valmynd",openMenuLong:"Opna Aðalvalmynd",closeMenu:"Loka",closeMenuLong:"Loka Aðalvalmynd"},en:{title:"Main Menu",homeLink:"Home page",openMenu:"Menu",openMenuLong:"Open main menu",closeMenu:"Close",closeMenuLong:"Close main menu"},pl:{title:"Menu główne",homeLink:"Strona główna",openMenu:"Menu",openMenuLong:"Otwórz menu główne",closeMenu:"Zamknij",closeMenuLong:"Zamknij menu główne"}},ae={alert:"info",globe:void 0,search:"search",user:"user"},ne=r=>{const{onItemClick:o,closeMenu:a,isBrowser:T}=r,d=(u,n,t={})=>{const{key:m,Tag:k="li",button:L}=t;if(typeof n=="function"){const g=n;return e.jsx("li",{className:`${u}item`,children:e.jsx(g,{closeMenu:a})},m)}const b=`${u}link`,{label:I,labelLong:M,href:f,target:w,lang:v,controlsId:S,onClick:h,descr:x,icon:s}=n,C=x&&e.jsxs(e.Fragment,{children:[" ",e.jsx("small",{className:`${b}__descr`,children:x})]}),_=L?H:"button",B=L?H:J,N=L?{size:"small","data-icon":s&&ae[s]}:void 0;return e.jsx(k,{className:R(`${u}item`,n.modifier),"aria-current":n.current||void 0,children:T&&(h||!f)?e.jsxs(_,{className:b,type:"button",onClick:()=>{const g=h&&h(n)===!1,l=o&&o(n)===!1;!(g||l)&&a()},"aria-controls":S,"aria-label":M,title:M,lang:v,...N,children:[I," ",C]}):f?e.jsxs(B,{className:b,href:f,target:w,"aria-label":M,title:M,onClick:()=>{!(o&&o(n)===!1)&&a()},lang:v,hrefLang:n.hrefLang,...N,children:[I," ",C]}):null},m)};return{renderList:(u,n,t={})=>!n||!n.length?null:e.jsx("ul",{className:`${u}items`,...t.listProps,children:n.map((m,k)=>d(u,m,{key:k,button:t.buttons}))}),renderItem:d}},$=r=>{const{homeLink:o="/",items:a,onItemClick:T,illustration:d,imageUrl:P,wrapperProps:u={}}=r,n=X(u.id),t=Q(r.ssr),[m,k]=p.useState(!1),L=p.useRef(null),b=u.ref||L,I=p.useCallback(l=>l.key==="Escape"&&f(),[]),M=()=>{y.add(j.menuIsOpen),y.remove(j.menuIsClosed),k(!0),document.addEventListener("keydown",I)},f=()=>{y.remove(j.menuIsOpen),y.add(j.menuIsClosed),k(!1),h(v),b.current.scrollTo(0,0),document.removeEventListener("keydown",I)};p.useEffect(()=>{if(t)return y.add(j.menuIsClosed),()=>{f(),y.remove(j.menuIsClosed)}},[t]);const{mainItems:w,defaultActive:v}=p.useMemo(()=>{if(!a.main||!a.main.length)return{mainItems:void 0,defaultActive:-1};const l=a.main.map(i=>{var F;if(!("title"in i)||"current"in i)return i;const A=(F=i.subItems.find(V=>"current"in V&&!!V.current))==null?void 0:F.current;return{...i,current:A}});let c=l.findIndex(i=>"current"in i&&i.current);return c<0&&"subItems"in(l[0]||{})&&(c=0),{mainItems:l,defaultActive:c}},[a.main]),[S,h]=p.useState(v),x=p.useRef(v);v!==x.current&&(x.current=v,h(v));const s=Z(r,ee),{renderItem:C,renderList:_}=ne({onItemClick:T,closeMenu:f,isBrowser:t}),B={...typeof o=="string"?{href:o,label:s.homeLink}:o,modifier:"home"},N=P||d&&W(d),g=`${n}-menu`;return e.jsxs("nav",{...r.wrapperProps,className:R("MainMenu2",t&&(m?"open":"closed"),u.className),style:N?{...u.style,"--menu-image":`url(${N})`}:u.style,ref:b,"aria-label":s.title,"data-sprinkled":t,id:g,children:[m&&e.jsx(U,{atTop:!0}),e.jsxs("div",{className:"MainMenu2__content",children:[e.jsx("h2",{className:"MainMenu2__title",children:s.title}),t?e.jsx(q,{className:"MainMenu2__toggler",size:"small",type:"button","aria-pressed":m,"aria-controls":g,...m?{onClick:f,"aria-label":s.closeMenuLong,title:s.closeMenuLong,children:s.closeMenu}:{onClick:M,"aria-label":s.openMenuLong,title:s.openMenuLong,children:s.openMenu}}):e.jsx(q,{className:"MainMenu2__toggler",size:"small",href:`#${g}`,onClick:K,"aria-hidden":"true",children:s.title}),w&&e.jsxs("div",{className:R("MainMenu2__main",S<0&&"noneActive"),children:[C("MainMenu2__main__",B,{Tag:"div"}),w.map((l,c)=>{if("title"in l){const i=`${n}-submenu-${c}`,A=c===S;return e.jsxs(p.Fragment,{children:[e.jsx("div",{className:"MainMenu2__main__item","aria-current":l.current||void 0,children:t?e.jsx("button",{className:"MainMenu2__main__link",type:"button",onClick:()=>h(c),"aria-controls":i,"aria-pressed":A,children:l.title}):e.jsx("strong",{className:"MainMenu2__main__link",children:l.title})}),_("MainMenu2__main__sub__",l.subItems,t&&{listProps:{id:i,hidden:!A}})]},c)}return C("MainMenu2__main__",l,{key:c,Tag:"div"})})]}),_("MainMenu2__hot__",a.hot,{buttons:!0}),_("MainMenu2__extra__",a.extra,{buttons:!0}),a.related&&a.related.length>0&&e.jsxs("div",{className:"MainMenu2__related",children:[a.relatedTitle&&e.jsx("h3",{className:"MainMenu2__related__title",children:a.relatedTitle}),_("MainMenu2__related__",a.related)]})]}),m&&e.jsx(U,{})]})};try{$.displayName="MainMenu2",$.__docgenInfo={description:"",displayName:"MainMenu2",props:{homeLink:{defaultValue:null,description:`URL for the mandatory (usually screen-reader-only) homepage Link.

Default: \`"/"\`

NOTE: The link's label is by default "Forsíða"/"Home Page"/"Strona główna"
(depending on your page language) but it can be custom-translated via the
\`props.texts\` translation prop.`,name:"homeLink",required:!1,type:{name:'string | Cleanup<Omit<MainMenu2Item, "modifier" | "controlsId"> & { href: string; }>'}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"{ main?: (MainMenu2Item | MainMenu2SubMenu | MainMenu2CustomItem)[] | undefined; hot?: MainMenu2ButtonItemList | undefined; extra?: MainMenu2ButtonItemList | undefined; relatedTitle?: string | undefined; related?: MainMenu2ItemList | undefined; }"}},onItemClick:{defaultValue:null,description:'NOTE: Clicking a MainMenu2 item will automatically close HannaUIState\'s\n"Hamburger menu" (a.k.a. "Mobile menu")\n… unless the `onItemClick` function explicitly returns `false`.',name:"onItemClick",required:!1,type:{name:"((item: MainMenu2Item) => boolean | void)"}},illustration:{defaultValue:null,description:"",name:"illustration",required:!1,type:{name:"enum",value:[{value:'"hanna-veitiggi"'},{value:'"hanna-vandro"'},{value:'"hanna-hugsi"'},{value:'"hanna-hissa"'},{value:'"hanna-hahaha"'},{value:'"hanna-hae"'},{value:'"hanna-god_spurning"'},{value:'"hanna-gjuggiborg"'},{value:'"hanna-benda"'},{value:'"allirsaman1"'},{value:'"allirsaman1b"'},{value:'"arstid_haust"'},{value:'"arstid_sumar"'},{value:'"arstid_vetur"'},{value:'"arstid_vor"'},{value:'"atvinna1"'},{value:'"atvinna2"'},{value:'"atvinna3"'},{value:'"baekurlestur"'},{value:'"bekkur"'},{value:'"borgarstjori1"'},{value:'"borgarstjori2"'},{value:'"borgarstjori3"'},{value:'"borgarstjori4"'},{value:'"born1"'},{value:'"born2"'},{value:'"born3"'},{value:'"born4"'},{value:'"breidholt"'},{value:'"breyting"'},{value:'"byggingar1"'},{value:'"draumar"'},{value:'"egsethig"'},{value:'"eldriborgari"'},{value:'"esjan"'},{value:'"ferdalag"'},{value:'"fjarhagsadstod"'},{value:'"fjarmal1"'},{value:'"fjarmal2"'},{value:'"fjarmal3"'},{value:'"fjarmal4"'},{value:'"fjolbreytni"'},{value:'"fjolmenning"'},{value:'"fjolskylda"'},{value:'"flaekja"'},{value:'"forsida-17juni"'},{value:'"forsida-blidvidri"'},{value:'"forsida-rigning"'},{value:'"forsida-snjor"'},{value:'"forsida"'},{value:'"framkvaemdir1"'},{value:'"framkvaemdir2"'},{value:'"framkvaemdir3"'},{value:'"framkvaemdir4"'},{value:'"fundargerd1"'},{value:'"fundur"'},{value:'"gaes"'},{value:'"gaman"'},{value:'"haelisleitendur"'},{value:'"haus1"'},{value:'"haus2"'},{value:'"haus3"'},{value:'"haus4"'},{value:'"haus5"'},{value:'"haus6"'},{value:'"haus7"'},{value:'"haus8"'},{value:'"haus9"'},{value:'"hjalpastad"'},{value:'"hopur"'},{value:'"hopur2"'},{value:'"hopur3"'},{value:'"hroki"'},{value:'"hundar"'},{value:'"ingolfur"'},{value:'"jafnvaegi"'},{value:'"kanina"'},{value:'"katur"'},{value:'"kettir"'},{value:'"kisa"'},{value:'"kjotsupa"'},{value:'"kongulo"'},{value:'"kort"'},{value:'"kreist"'},{value:'"krofuganga"'},{value:'"landslag"'},{value:'"laugardalur"'},{value:'"leikur_ibuar"'},{value:'"leikur"'},{value:'"logga"'},{value:'"logogregla"'},{value:'"maelt"'},{value:'"matur1"'},{value:'"mavar"'},{value:'"midbaer"'},{value:'"minarsidur"'},{value:'"mismunur"'},{value:'"naering"'},{value:'"nam_lestur"'},{value:'"nattura"'},{value:'"ofurfjolskylda"'},{value:'"oliprik"'},{value:'"ond"'},{value:'"peningar"'},{value:'"postit"'},{value:'"pulsa"'},{value:'"rad1"'},{value:'"rad2"'},{value:'"rad3"'},{value:'"raekta"'},{value:'"rafskuta"'},{value:'"reikningur1"'},{value:'"reikningur1b"'},{value:'"ruslabill"'},{value:'"samstarf"'},{value:'"samvinna1"'},{value:'"samvinna2"'},{value:'"samvinna3"'},{value:'"samvinna4"'},{value:'"sjor"'},{value:'"skipurit"'},{value:'"skokk"'},{value:'"skordyr"'},{value:'"skrifstofa"'},{value:'"skrifstofa2"'},{value:'"skrudganga"'},{value:'"stakthus"'},{value:'"sterkur"'},{value:'"stofnun"'},{value:'"stress"'},{value:'"stud"'},{value:'"sund1"'},{value:'"sund2"'},{value:'"svanurkisa-b"'},{value:'"svanurkisa"'},{value:'"svanurond"'},{value:'"svid1"'},{value:'"svid2"'},{value:'"sybbin"'},{value:'"tholendur_hjalp"'},{value:'"threytt"'},{value:'"tolfraedi1"'},{value:'"tolfraedi2"'},{value:'"tomstundir1"'},{value:'"tomstundir2"'},{value:'"tomstundir3"'},{value:'"tomstundir4"'},{value:'"tonlist"'},{value:'"umhverfi1"'},{value:'"umhverfi2"'},{value:'"umhverfi3"'},{value:'"utgefidefni"'},{value:'"utivinna"'},{value:'"vegvisir"'},{value:'"velferd1"'},{value:'"velferd2"'},{value:'"velferd3"'},{value:'"velferd4"'},{value:'"verlsa"'},{value:'"vesturbaer"'},{value:'"vinir"'},{value:'"vinna"'}]}},imageUrl:{defaultValue:null,description:"",name:"imageUrl",required:!1,type:{name:"string"}},wrapperProps:{defaultValue:null,description:`Custom HTML attributes for the component's wrapper element.

Note, however, that some props may be intentionally
excluded from the list.

__WARNING:__
In some cases props added this way can break the component, og hurt its
accessibility.  Also, some props may get ignored, or over-ridden by the
component. User discretion is advised.`,name:"wrapperProps",required:!1,type:{name:"HTMLProps<null, never>"}},texts:{defaultValue:null,description:"",name:"texts",required:!1,type:{name:"MainMenu2I18n"}},lang:{defaultValue:null,description:"",name:"lang",required:!1,type:{name:"string"}},ssr:{defaultValue:null,description:`Indicates whether server-side rendering is supported or not.

The \`ssr-only\` value is useful for cases where you need
to demo the server-rendered version in a browser.`,name:"ssr",required:!1,type:{name:"SSRSupport"}}}}}catch{}const O=(r,o,a)=>({title:r,subItems:Array.from({length:o}).map((T,d)=>({label:`${r+(d===2?" lorem impsum dolor sit":"")} item ${d+1}`,href:"",current:a===d||void 0,descr:Y(["Lorem impsum dolor sit dolore amet","Enim ad minim impsum sita met fööt dolore bleargh.","Leebur deroor iehroom, bork bork bork! Enim ad minim chokolat moose flüü.",void 0,void 0],d*11+r.slice(0,1))}))}),ke={title:"Layout/MainMenu2",parameters:{controls:{hideNoControlsWarning:!0},layout:{head:!0,pos:"nav"}}},E={render:r=>e.jsx($,{ssr:r.ssr?"ssr-only":!0,items:{main:[O("Íbúar",8,2),O("Stjórnkerfi",5),O("Atvinnulíf",4),{label:"Hverfið mitt",href:"",target:"_blank",current:!1}],hot:[{label:"EN",labelLong:"English",href:"",icon:"globe",lang:"en",hrefLang:"en"},{label:"Mínar síður",href:"",icon:"user",target:"_blank"}],extra:[{label:"Leita",labelLong:"Leita á vefnum",href:"",icon:"search"},{label:"Tilkynningar",href:"",icon:"alert"}],relatedTitle:"Sérvefir",related:[{label:"Græna planið",href:"",target:"_blank"},{label:"Gagnahlaðborðið",href:"",target:"_blank"},{label:"Borgarbókasafnið",href:"",target:"_blank"},{label:"Borgin okkar",href:"",target:"_blank"},{label:"Borgarsögusafn Reykjavíkur ",href:"",target:"_blank"},{label:"Frístundavefurinn",href:"",target:"_blank"},{label:"Listasafn Reykjavíkur",href:"",target:"_blank"}]},illustration:"bekkur"},`${r.ssr}`),argTypes:{ssr:{name:"Server-side Markup"}},args:{ssr:!1}};var D,G,z;E.parameters={...E.parameters,docs:{...(D=E.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => <MainMenu2 key={\`\${args.ssr}\`} ssr={args.ssr ? 'ssr-only' : true} items={{
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
//# sourceMappingURL=Mainmenu2.stories-531e8b8c.js.map
