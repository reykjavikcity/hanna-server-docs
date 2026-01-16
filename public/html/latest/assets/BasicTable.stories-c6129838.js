import{j as n}from"./jsx-runtime-f961835c.js";import{m as C,c as k}from"./getSVGtext-6e71cb30.js";import{u as W}from"./browserSide-4379edd8.js";import"./_Link-b7c9c4c9.js";import{r as u}from"./index-f80c8c95.js";import{n as E}from"./_useMobileMenuToggling-b033ca8f.js";import{t as L}from"./throttle-99eb2ade.js";import{F as M}from"./Footnote-abf53091.js";const V=8,B=100,H=(e,t)=>{const a=typeof e=="string"?{axis:e}:e,[o,l]=u.useState(()=>a.startAt||{start:!0,end:!0}),r=u.useRef(),i=u.useCallback(m=>{m&&(t&&(t.current=m),r.current=m)},[t]),{getElm:c,axis:d}=a;return u.useEffect(()=>{const m=r.current,s=m&&c?c(m):m;if(!(s instanceof HTMLElement))return;const p=L(()=>{l(b=>{let f,h,v;d==="horizontal"?(f=s.scrollLeft,h=s.offsetWidth,v=s.scrollWidth):(f=s.scrollTop,h=s.offsetHeight,v=s.scrollHeight);const w=f<V,N=v-(h+f)<V;return b.start===w&&b.end===N?b:{start:w,end:N}})},B);return s.addEventListener("scroll",p),window.addEventListener("resize",p),p(),()=>{s.removeEventListener("scroll",p),window.removeEventListener("resize",p)}},[c,d]),[i,o]},R={axis:"horizontal"},_=e=>{const{innerWrap:t,children:a,modifier:o,bem:l="ScrollWrapper",wrapperProps:r={}}=e,i=W(),[c,d]=H(R,r.ref),m=i?[o,"at",d.start&&"at--start",d.end&&"at--end"]:o;return n.jsx("div",{...r,className:C(l,m,r.className),ref:t?void 0:c,children:i&&t?n.jsx("div",{className:`${l}__scroller`,ref:c,children:a}):a})};try{_.displayName="ScrollWrapper",_.__docgenInfo={description:"",displayName:"ScrollWrapper",props:{modifier:{defaultValue:null,description:`List of CSS BEM --modifier's to add to the component's main wrapper.

All falsy values are neatly skipped.`,name:"modifier",required:!1,type:{name:"ClassNameModifiers"}},bem:{defaultValue:null,description:"CSS BEM class-name prefix to be used for this component. Defaults to the same as the original component's displayName",name:"bem",required:!1,type:{name:"string"}},wrapperProps:{defaultValue:null,description:`Custom HTML attributes for the component's wrapper element.

Note, however, that some props may be intentionally
excluded from the list.

__WARNING:__
In some cases props added this way can break the component, og hurt its
accessibility.  Also, some props may get ignored, or over-ridden by the
component. User discretion is advised.`,name:"wrapperProps",required:!1,type:{name:"HTMLProps<null, never>"}},innerWrap:{defaultValue:null,description:"",name:"innerWrap",required:!1,type:{name:"true"}}}}}catch{}const A=e=>{const{data:t,meta:a={},rowIdx:o,rowScope:l}=e,r=e.th?"th":"td",{className:i=a.className||"",number:c=a.number,text:d=a.text,tel:m=a.tel,value:s,colSpan:p}=t,b=c?c===!0?"Cell--number":`Cell--number Cell--number--${c}`:"",f=d?d===!0?"Cell--text":`Cell--text Cell--text--${d}`:"",h=m?"Cell--tel":"";return n.jsx(r,{className:k(b||h||f,i),colSpan:p&&p>1?p:void 0,scope:l?"row":void 0,children:typeof s=="function"?s(o):s})},g=({section:e,cols:t=[],Tag:a,getRowProps:o})=>e.length?n.jsx(a,{children:e.map(({key:l,cells:r},i)=>{let c=0;return u.createElement("tr",{...o(i,a,r),key:l??i},r.map((d,m)=>{const s=m===0,p=t[c];return c+=d.colSpan||1,n.jsx(A,{th:a==="thead"||s,data:d,meta:p||void 0,rowIdx:i,rowScope:s},d.key||m)}))})}):null,T=e=>e.length?e.map(t=>({cells:("cells"in t?t.cells:t).map(o=>typeof o=="string"?{value:o}:o),key:"key"in t?t.key:void 0})):void 0,x=u.memo(e=>{const{caption:t,cols:a,className:o,rowProps:l,wrapperProps:r}=e,i=typeof l=="function"?l:()=>l,c=u.useMemo(()=>T(e.thead),[e.thead]),d=u.useMemo(()=>e.tfoot&&T(e.tfoot),[e.tfoot]),m=u.useMemo(()=>(e.tbodies||[e.tbody]).map(T).filter(E),[e.tbody,e.tbodies]);return n.jsxs("table",{...r,className:k(o,r==null?void 0:r.className),children:[t&&n.jsx("caption",{children:t}),c&&n.jsx(g,{section:c,cols:a,Tag:"thead",getRowProps:i}),d&&n.jsx(g,{section:d,cols:a,Tag:"tfoot",getRowProps:i}),m.map((s,p)=>n.jsx(g,{section:s,cols:a,Tag:"tbody",getRowProps:i},p))]})});try{x.displayName="Table",x.__docgenInfo={description:"",displayName:"Table",props:{caption:{defaultValue:null,description:"",name:"caption",required:!1,type:{name:"ReactNode"}},thead:{defaultValue:null,description:"",name:"thead",required:!0,type:{name:"TableSection"}},tfoot:{defaultValue:null,description:"",name:"tfoot",required:!1,type:{name:"TableSection"}},tbody:{defaultValue:null,description:"",name:"tbody",required:!1,type:{name:"TableSection"}},tbodies:{defaultValue:null,description:"",name:"tbodies",required:!1,type:{name:"TableSection[]"}},cols:{defaultValue:{value:"[]"},description:"",name:"cols",required:!1,type:{name:"TableCols"}},rowProps:{defaultValue:null,description:"",name:"rowProps",required:!1,type:{name:'HTMLProps<"tr", never> | RowPropsFunction'}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},wrapperProps:{defaultValue:null,description:`Custom HTML attributes for the component's wrapper element.

Note, however, that some props may be intentionally
excluded from the list.

__WARNING:__
In some cases props added this way can break the component, og hurt its
accessibility.  Also, some props may get ignored, or over-ridden by the
component. User discretion is advised.`,name:"wrapperProps",required:!1,type:{name:'HTMLProps<"table", never>'}}}}}catch{}const I={text:"",number:"data--number"},S=e=>{const{align:t,fullWidth:a,type:o,tbody:l,tbodies:r,modifier:i,thead:c,tfoot:d,tableProps:m,caption:s,rowProps:p,compact:b,cols:f,wrapperProps:h}=e;return n.jsx(_,{bem:"TableWrapper",modifier:["BasicTable",i&&`BasicTable--${i}`,a?"BasicTable--fullwidth":t==="right"?`BasicTable--align--${t}`:void 0],wrapperProps:h,children:n.jsx(x,{className:C("BasicTable",[b&&"compact",o&&I[o],i]),cols:f,caption:s,thead:c,tfoot:d,...l?{tbody:l}:{tbodies:r},rowProps:p,wrapperProps:m})})};try{S.displayName="BasicTable",S.__docgenInfo={description:"",displayName:"BasicTable",props:{compact:{defaultValue:null,description:"",name:"compact",required:!1,type:{name:"boolean"}},type:{defaultValue:null,description:`The main/default cell-data type of the table

Defaults to 'text'`,name:"type",required:!1,type:{name:"enum",value:[{value:'"number"'},{value:'"text"'}]}},tableProps:{defaultValue:null,description:`Custom HTML attributes for the component's \`<table/>\` element.

Note, however, that some props may be intentionally
excluded from the list.

__WARNING:__
In some cases props added this way can break the component, og hurt its
accessibility.  Also, some props may get ignored, or over-ridden by the
component. User discretion is advised.`,name:"tableProps",required:!1,type:{name:'HTMLProps<"table", never>'}},modifier:{defaultValue:null,description:"@deprecated Use `wrapperProps={{ className }}` and `tableProps={{ className }}` instead (Will be removed in v0.11)",name:"modifier",required:!1,type:{name:"string"}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"right"'}]}},wrapperProps:{defaultValue:null,description:`Custom HTML attributes for the component's wrapper element.

Note, however, that some props may be intentionally
excluded from the list.

__WARNING:__
In some cases props added this way can break the component, og hurt its
accessibility.  Also, some props may get ignored, or over-ridden by the
component. User discretion is advised.`,name:"wrapperProps",required:!1,type:{name:"HTMLProps<null, never>"}},startSeen:{defaultValue:null,description:"@deprecated This prop does nothing nowadays (Will be removed in v0.11)",name:"startSeen",required:!1,type:{name:"boolean"}},caption:{defaultValue:null,description:"",name:"caption",required:!1,type:{name:"ReactNode"}},thead:{defaultValue:null,description:"",name:"thead",required:!0,type:{name:"TableSection"}},tfoot:{defaultValue:null,description:"",name:"tfoot",required:!1,type:{name:"TableSection"}},tbody:{defaultValue:null,description:"",name:"tbody",required:!1,type:{name:"TableSection"}},tbodies:{defaultValue:null,description:"",name:"tbodies",required:!1,type:{name:"TableSection[]"}},cols:{defaultValue:null,description:"",name:"cols",required:!1,type:{name:"TableCols"}},rowProps:{defaultValue:null,description:"",name:"rowProps",required:!1,type:{name:'HTMLProps<"tr", never> | RowPropsFunction'}}}}}catch{}const F=["normal","right","fullwidth"],X={title:"BasicTable"},$=({compact:e,footer:t,footnote:a,variant:o})=>{const l=t||void 0,r={normal:void 0,right:{align:"right"},fullwidth:{fullWidth:!0}}[o];return n.jsxs(n.Fragment,{children:[n.jsx(S,{...r,compact:e,cols:[{number:!0},{},{},{tel:!0},{number:!0},{}],thead:[["Erindi nr.","Lýsing","Sent dags. / kl","Sími","Gjald","Staða máls"]],tbody:[["99",{value:n.jsxs(n.Fragment,{children:["Umsókn um ",n.jsx("a",{href:"/url",children:"stuðningsþjónustu"})]})},"16.09.2019 / kl. 18:45","800 9000","45.663 kr","Í vinnslu"],["100",{value:"dfdf"},"16.09.2019 / kl. 18:45","","5.663 kr","Í vinnslu"],["102",{value:n.jsxs(n.Fragment,{children:["Umsókn um ",n.jsx("a",{href:"/url",children:"stuðningsþjónustu"})]})},"16.09.2019 / kl. 18:45","800 9000","-30.663 kr","Í vinnslu"]],tfoot:l&&[[{value:"Samtals:",number:!1,colSpan:4},{value:"16.345 kr.",number:!0},""]]},`${e}${l}${o}`),a&&n.jsx(M,{children:"This is an optional footnote"})]})},y={render:e=>n.jsx($,{...e}),argTypes:{compact:{name:"Compact"},footer:{name:"Footer"},footnote:{name:"Footnote"},variant:{name:"Variant",options:F,control:"radio"}},args:{compact:!1,footer:!1,footnote:!1,variant:"normal"}};var P,q,j;y.parameters={...y.parameters,docs:{...(P=y.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => <BasicTableStory {...args} />,
  argTypes: {
    compact: {
      name: 'Compact'
    },
    footer: {
      name: 'Footer'
    },
    footnote: {
      name: 'Footnote'
    },
    variant: {
      name: 'Variant',
      options: variantOptions,
      control: 'radio'
    }
  },
  args: {
    compact: false,
    footer: false,
    footnote: false,
    variant: 'normal'
  }
}`,...(j=(q=y.parameters)==null?void 0:q.docs)==null?void 0:j.source}}};const Y=["_BasicTable"];export{y as _BasicTable,Y as __namedExportsOrder,X as default};
//# sourceMappingURL=BasicTable.stories-c6129838.js.map
