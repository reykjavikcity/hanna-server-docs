import{j as o}from"./jsx-runtime-f961835c.js";import{m as C,c as k}from"./classUtils-ef6e60eb.js";import{u as W}from"./browserSide-4379edd8.js";import"./_Link-b7c9c4c9.js";import{r as f}from"./index-f80c8c95.js";import{n as E}from"./_useMobileMenuToggling-0971be40.js";import"./getSVGtext-8f35f9ab.js";import{t as L}from"./throttle-99eb2ade.js";import{F as M}from"./Footnote-08bed0a1.js";const V=8,B=100,H=(e,a)=>{const n=typeof e=="string"?{axis:e}:e,[s,l]=f.useState(n.startAt||{start:!0,end:!0}),[r,c]=f.useState(null),d=t=>{a&&t&&(a.current=t),c(t)},{getElm:i,axis:p}=n;return f.useEffect(()=>{const t=r&&i?i(r):r;if(!(t instanceof HTMLElement))return;const m=L(()=>{l(b=>{let u,h,v;p==="horizontal"?(u=t.scrollLeft,h=t.offsetWidth,v=t.scrollWidth):(u=t.scrollTop,h=t.offsetHeight,v=t.scrollHeight);const w=u<V,N=v-(h+u)<V;return b.start===w&&b.end===N?b:{start:w,end:N}})},B);return t.addEventListener("scroll",m),window.addEventListener("resize",m),m(),()=>{t.removeEventListener("scroll",m),window.removeEventListener("resize",m)}},[r,i,p]),[d,s]},R={axis:"horizontal"},_=e=>{const{innerWrap:a,children:n,modifier:s,bem:l="ScrollWrapper",wrapperProps:r={}}=e,c=W(),[d,i]=H(R,r.ref),p=c?[s,"at",i.start&&"at--start",i.end&&"at--end"]:s;return o.jsx("div",{...r,className:C(l,p,r.className),ref:a?void 0:d,children:c&&a?o.jsx("div",{className:`${l}__scroller`,ref:d,children:n}):n})};try{_.displayName="ScrollWrapper",_.__docgenInfo={description:"",displayName:"ScrollWrapper",props:{modifier:{defaultValue:null,description:`List of CSS BEM --modifier's to add to the component's main wrapper.

All falsy values are neatly skipped.`,name:"modifier",required:!1,type:{name:"Modifiers"}},bem:{defaultValue:null,description:"CSS BEM class-name prefix to be used for this component. Defaults to the same as the original component's displayName",name:"bem",required:!1,type:{name:"string"}},wrapperProps:{defaultValue:null,description:`Custom HTML attributes for the component's wrapper element.

Note, however, that some props may be intentionally
excluded from the list.

__WARNING:__
In some cases props added this way can break the component, og hurt its
accessibility.  Also, some props may get ignored, or over-ridden by the
component. User discretion is advised.`,name:"wrapperProps",required:!1,type:{name:"HTMLProps<null, never>"}},innerWrap:{defaultValue:null,description:"",name:"innerWrap",required:!1,type:{name:"true"}}}}}catch{}const A=e=>{const{data:a,meta:n={},rowIdx:s,rowScope:l}=e,r=e.th?"th":"td",{className:c=n.className||"",number:d=n.number,text:i=n.text,tel:p=n.tel,value:t,colSpan:m}=a,b=d?d===!0?"Cell--number":"Cell--number Cell--number--"+d:"",u=i?i===!0?"Cell--text":"Cell--text Cell--text--"+i:"",h=p?"Cell--tel":"";return o.jsx(r,{className:k(b||h||u,c),colSpan:m&&m>1?m:void 0,scope:l?"row":void 0,children:typeof t=="function"?t(s):t})},g=({section:e,cols:a=[],Tag:n,getRowProps:s})=>e.length?o.jsx(n,{children:e.map(({key:l,cells:r},c)=>{let d=0;return f.createElement("tr",{...s(c,n,r),key:l??c},r.map((i,p)=>{const t=p===0,m=a[d];return d+=i.colSpan||1,o.jsx(A,{th:n==="thead"||t,data:i,meta:m||void 0,rowIdx:c,rowScope:t},i.key||p)}))})}):null,T=e=>e.length?e.map(a=>({cells:("cells"in a?a.cells:a).map(s=>typeof s=="string"?{value:s}:s),key:"key"in a?a.key:void 0})):void 0,x=f.memo(e=>{const{caption:a,cols:n,className:s,rowProps:l,wrapperProps:r}=e,c=typeof l=="function"?l:()=>l,d=f.useMemo(()=>T(e.thead),[e.thead]),i=f.useMemo(()=>e.tfoot&&T(e.tfoot),[e.tfoot]),p=f.useMemo(()=>(e.tbodies||[e.tbody]).map(T).filter(E),[e.tbody,e.tbodies]);return o.jsxs("table",{...r,className:k(s,r==null?void 0:r.className),children:[a&&o.jsx("caption",{children:a}),d&&o.jsx(g,{section:d,cols:n,Tag:"thead",getRowProps:c}),i&&o.jsx(g,{section:i,cols:n,Tag:"tfoot",getRowProps:c}),p.map((t,m)=>o.jsx(g,{section:t,cols:n,Tag:"tbody",getRowProps:c},m))]})});try{x.displayName="Table",x.__docgenInfo={description:"",displayName:"Table",props:{caption:{defaultValue:null,description:"",name:"caption",required:!1,type:{name:"ReactNode"}},thead:{defaultValue:null,description:"",name:"thead",required:!0,type:{name:"TableSection"}},tfoot:{defaultValue:null,description:"",name:"tfoot",required:!1,type:{name:"TableSection"}},tbody:{defaultValue:null,description:"",name:"tbody",required:!1,type:{name:"TableSection"}},tbodies:{defaultValue:null,description:"",name:"tbodies",required:!1,type:{name:"TableSection[]"}},cols:{defaultValue:{value:"[]"},description:"",name:"cols",required:!1,type:{name:"TableCols"}},rowProps:{defaultValue:null,description:"",name:"rowProps",required:!1,type:{name:'HTMLProps<"tr", never> | RowPropsFunction'}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},wrapperProps:{defaultValue:null,description:`Custom HTML attributes for the component's wrapper element.

Note, however, that some props may be intentionally
excluded from the list.

__WARNING:__
In some cases props added this way can break the component, og hurt its
accessibility.  Also, some props may get ignored, or over-ridden by the
component. User discretion is advised.`,name:"wrapperProps",required:!1,type:{name:'HTMLProps<"table", never>'}}}}}catch{}const I={text:"",number:"data--number"},S=e=>{const{align:a,fullWidth:n,type:s,tbody:l,tbodies:r,modifier:c,thead:d,tfoot:i,tableProps:p,caption:t,rowProps:m,compact:b,cols:u,wrapperProps:h}=e;return o.jsx(_,{bem:"TableWrapper",modifier:["BasicTable",c&&"BasicTable--"+c,n?"BasicTable--fullwidth":a==="right"?"BasicTable--align--"+a:void 0],wrapperProps:h,children:o.jsx(x,{className:C("BasicTable",[b&&"compact",s&&I[s],c]),cols:u,caption:t,thead:d,tfoot:i,...l?{tbody:l}:{tbodies:r},rowProps:m,wrapperProps:p})})};try{S.displayName="BasicTable",S.__docgenInfo={description:"",displayName:"BasicTable",props:{compact:{defaultValue:null,description:"",name:"compact",required:!1,type:{name:"boolean"}},type:{defaultValue:null,description:`The main/default cell-data type of the table

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
component. User discretion is advised.`,name:"wrapperProps",required:!1,type:{name:"HTMLProps<null, never>"}},startSeen:{defaultValue:null,description:"@deprecated This prop does nothing nowadays (Will be removed in v0.11)",name:"startSeen",required:!1,type:{name:"boolean"}},caption:{defaultValue:null,description:"",name:"caption",required:!1,type:{name:"ReactNode"}},thead:{defaultValue:null,description:"",name:"thead",required:!0,type:{name:"TableSection"}},tfoot:{defaultValue:null,description:"",name:"tfoot",required:!1,type:{name:"TableSection"}},tbody:{defaultValue:null,description:"",name:"tbody",required:!1,type:{name:"TableSection"}},tbodies:{defaultValue:null,description:"",name:"tbodies",required:!1,type:{name:"TableSection[]"}},cols:{defaultValue:null,description:"",name:"cols",required:!1,type:{name:"TableCols"}},rowProps:{defaultValue:null,description:"",name:"rowProps",required:!1,type:{name:'HTMLProps<"tr", never> | RowPropsFunction'}}}}}catch{}const F=["normal","right","fullwidth"],Y={title:"BasicTable"},z=({compact:e,footer:a,footnote:n,variant:s})=>{const l=a||void 0,r={normal:void 0,right:{align:"right"},fullwidth:{fullWidth:!0}}[s];return o.jsxs(o.Fragment,{children:[o.jsx(S,{...r,compact:e,cols:[{number:!0},{},{},{tel:!0},{number:!0},{}],thead:[["Erindi nr.","Lýsing","Sent dags. / kl","Sími","Gjald","Staða máls"]],tbody:[["99",{value:o.jsxs(o.Fragment,{children:["Umsókn um ",o.jsx("a",{href:"/url",children:"stuðningsþjónustu"})]})},"16.09.2019 / kl. 18:45","800 9000","45.663 kr","Í vinnslu"],["100",{value:"dfdf"},"16.09.2019 / kl. 18:45","","5.663 kr","Í vinnslu"],["102",{value:o.jsxs(o.Fragment,{children:["Umsókn um ",o.jsx("a",{href:"/url",children:"stuðningsþjónustu"})]})},"16.09.2019 / kl. 18:45","800 9000","-30.663 kr","Í vinnslu"]],tfoot:l&&[[{value:"Samtals:",number:!1,colSpan:4},{value:"16.345 kr.",number:!0},""]]},""+e+l+s),n&&o.jsx(M,{children:"This is an optional footnote"})]})},y={render:e=>o.jsx(z,{...e}),argTypes:{compact:{name:"Compact"},footer:{name:"Footer"},footnote:{name:"Footnote"},variant:{name:"Variant",options:F,control:"radio"}},args:{compact:!1,footer:!1,footnote:!1,variant:"normal"}};var P,q,j;y.parameters={...y.parameters,docs:{...(P=y.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(j=(q=y.parameters)==null?void 0:q.docs)==null?void 0:j.source}}};const Z=["_BasicTable"];export{y as _BasicTable,Z as __namedExportsOrder,Y as default};
//# sourceMappingURL=BasicTable.stories-0f4dfe8c.js.map
