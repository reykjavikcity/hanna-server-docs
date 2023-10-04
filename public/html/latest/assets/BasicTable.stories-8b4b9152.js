import{j as n}from"./jsx-runtime-f961835c.js";import{m as j,c as C}from"./classUtils-ef6e60eb.js";import{u as L}from"./browserSide-4379edd8.js";import"./_Link-b7c9c4c9.js";import{n as M}from"./getScrollbarWidth-108c5f9b.js";import{r as p}from"./index-f80c8c95.js";import"./getSVGtext-8f35f9ab.js";import{t as W}from"./throttle-99eb2ade.js";import{F as k}from"./Footnote-08bed0a1.js";const N=8,E=100,B=(e,t)=>{const a=typeof e=="string"?{axis:e}:e,r=p.useRef(null);t=t||r;const[s,l]=p.useState(a.startAt||{start:!0,end:!0}),o=t.current,{getElm:c,axis:d}=a;return p.useEffect(()=>{const i=o&&c?c(o):o;if(!(i instanceof HTMLElement))return;const m=W(()=>l(u=>{let f,b,h;d==="horizontal"?(f=i.scrollLeft,b=i.offsetWidth,h=i.scrollWidth):(f=i.scrollTop,b=i.offsetHeight,h=i.scrollHeight);const S=f<N,w=h-(b+f)<N;return u.start===S&&u.end===w?u:{start:S,end:w}}),E);return i.addEventListener("scroll",m),window.addEventListener("resize",m),m(),()=>{i.removeEventListener("scroll",m),window.removeEventListener("resize",m)}},[o,c,d]),[t,s]},H={axis:"horizontal"},T=e=>{const{innerWrap:t,children:a,modifier:r,bem:s="ScrollWrapper",wrapperProps:l={}}=e,o=L(),[c,d]=B(H,l.ref),i=o?[r,"at",d.start&&"at--start",d.end&&"at--end"]:r;return n.jsx("div",{...l,className:j(s,i,l.className),ref:t?void 0:c,children:o&&t?n.jsx("div",{className:`${s}__scroller`,ref:c,children:a}):a})};try{T.displayName="ScrollWrapper",T.__docgenInfo={description:"",displayName:"ScrollWrapper",props:{bem:{defaultValue:null,description:"CSS BEM class-name prefix to be used for this component. Defaults to the same as the original component's displayName",name:"bem",required:!1,type:{name:"string"}},modifier:{defaultValue:null,description:`List of CSS BEM --modifier's to add to the component's main wrapper.

All falsy values are neatly skipped.`,name:"modifier",required:!1,type:{name:"Modifiers"}},wrapperProps:{defaultValue:null,description:`Custom HTML attributes for the component's wrapper element.

Note, however, that some props may be intentionally
excluded from the list.

__WARNING:__
In some cases props added this way can break the component, og hurt its
accessibility.  Also, some props may get ignored, or over-ridden by the
component. User discretion is advised.`,name:"wrapperProps",required:!1,type:{name:"HTMLProps<null, never>"}},innerWrap:{defaultValue:null,description:"",name:"innerWrap",required:!1,type:{name:"true"}}}}}catch{}const A=e=>{const{data:t,meta:a={},rowIdx:r,rowScope:s}=e,l=e.th?"th":"td",{className:o=a.className||"",number:c=a.number,text:d=a.text,tel:i=a.tel,value:m,colSpan:u}=t,f=c?c===!0?"Cell--number":"Cell--number Cell--number--"+c:"",b=d?d===!0?"Cell--text":"Cell--text Cell--text--"+d:"",h=i?"Cell--tel":"";return n.jsx(l,{className:C(f||h||b,o),colSpan:u&&u>1?u:void 0,scope:s?"row":void 0,children:typeof m=="function"?m(r):m})},v=({section:e,cols:t=[],Tag:a,getRowProps:r})=>e.length?n.jsx(a,{children:e.map(({key:s,cells:l},o)=>{let c=0;return p.createElement("tr",{...r(o,a),key:s??o},l.map((d,i)=>{const m=i===0,u=t[c];return c+=d.colSpan||1,n.jsx(A,{th:a==="thead"||m,data:d,meta:u||void 0,rowIdx:o,rowScope:m},d.key||i)}))})}):null,g=e=>e.length?e.map(t=>({cells:("cells"in t?t.cells:t).map(r=>typeof r=="string"?{value:r}:r),key:"key"in t?t.key:void 0})):void 0,_=p.memo(e=>{const{caption:t,cols:a,className:r,rowProps:s,wrapperProps:l}=e,o=typeof s=="function"?s:()=>s,c=p.useMemo(()=>g(e.thead),[e.thead]),d=p.useMemo(()=>e.tfoot&&g(e.tfoot),[e.tfoot]),i=p.useMemo(()=>(e.tbodies||[e.tbody]).map(g).filter(M),[e.tbody,e.tbodies]);return n.jsxs("table",{...l,className:C(r,l==null?void 0:l.className),children:[t&&n.jsx("caption",{children:t}),c&&n.jsx(v,{section:c,cols:a,Tag:"thead",getRowProps:o}),d&&n.jsx(v,{section:d,cols:a,Tag:"tfoot",getRowProps:o}),i.map((m,u)=>n.jsx(v,{section:m,cols:a,Tag:"tbody",getRowProps:o},u))]})});try{_.displayName="Table",_.__docgenInfo={description:"",displayName:"Table",props:{caption:{defaultValue:null,description:"",name:"caption",required:!1,type:{name:"ReactNode"}},thead:{defaultValue:null,description:"",name:"thead",required:!0,type:{name:"TableSection"}},tfoot:{defaultValue:null,description:"",name:"tfoot",required:!1,type:{name:"TableSection"}},tbody:{defaultValue:null,description:"",name:"tbody",required:!1,type:{name:"TableSection"}},tbodies:{defaultValue:null,description:"",name:"tbodies",required:!1,type:{name:"TableSection[]"}},cols:{defaultValue:{value:"[]"},description:"",name:"cols",required:!1,type:{name:"TableCols"}},rowProps:{defaultValue:null,description:"",name:"rowProps",required:!1,type:{name:'HTMLProps<"tr", never> | RowPropsFunction'}},wrapperProps:{defaultValue:null,description:`Custom HTML attributes for the component's wrapper element.

Note, however, that some props may be intentionally
excluded from the list.

__WARNING:__
In some cases props added this way can break the component, og hurt its
accessibility.  Also, some props may get ignored, or over-ridden by the
component. User discretion is advised.`,name:"wrapperProps",required:!1,type:{name:'HTMLProps<"table", never>'}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const I={text:"",number:"data--number"},x=e=>{const{align:t,fullWidth:a,type:r,tbody:s,tbodies:l,modifier:o}=e;return n.jsx(T,{bem:"TableWrapper",modifier:["BasicTable",o&&"BasicTable--"+o,a?"BasicTable--fullwidth":t==="right"?"BasicTable--align--"+t:void 0],wrapperProps:e.wrapperProps,innerWrap:!0,children:n.jsx(_,{className:j("BasicTable",[e.compact&&"compact",r&&I[r],o]),cols:e.cols,caption:e.caption,thead:e.thead,tfoot:e.tfoot,...s?{tbody:s}:{tbodies:l},wrapperProps:e.tableProps})})};try{x.displayName="BasicTable",x.__docgenInfo={description:"",displayName:"BasicTable",props:{compact:{defaultValue:null,description:"",name:"compact",required:!1,type:{name:"boolean"}},type:{defaultValue:null,description:`The main/default cell-data type of the table

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
component. User discretion is advised.`,name:"wrapperProps",required:!1,type:{name:'(Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "children" | "ref" | "dangerouslySetInnerHTML"> & { ...; } & Omit<...> & { ...; })'}},startSeen:{defaultValue:null,description:"@deprecated This prop does nothing nowadays (Will be removed in v0.11)",name:"startSeen",required:!1,type:{name:"boolean"}},caption:{defaultValue:null,description:"",name:"caption",required:!1,type:{name:"ReactNode"}},thead:{defaultValue:null,description:"",name:"thead",required:!0,type:{name:"TableSection"}},tfoot:{defaultValue:null,description:"",name:"tfoot",required:!1,type:{name:"TableSection"}},tbody:{defaultValue:null,description:"",name:"tbody",required:!1,type:{name:"TableSection"}},tbodies:{defaultValue:null,description:"",name:"tbodies",required:!1,type:{name:"TableSection[]"}},cols:{defaultValue:null,description:"",name:"cols",required:!1,type:{name:"TableCols"}},rowProps:{defaultValue:null,description:"",name:"rowProps",required:!1,type:{name:'HTMLProps<"tr", never> | RowPropsFunction'}}}}}catch{}const F=["normal","right","fullwidth"],X={title:"BasicTable"},R=({compact:e,footer:t,footnote:a,variant:r})=>{const s=t||void 0,l={normal:void 0,right:{align:"right"},fullwidth:{fullWidth:!0}}[r];return n.jsxs(n.Fragment,{children:[n.jsx(x,{...l,compact:e,cols:[{number:!0},{},{},{tel:!0},{number:!0},{}],thead:[["Erindi nr.","Lýsing","Sent dags. / kl","Sími","Gjald","Staða máls"]],tbody:[["99",{value:n.jsxs(n.Fragment,{children:["Umsókn um ",n.jsx("a",{href:"/url",children:"stuðningsþjónustu"})]})},"16.09.2019 / kl. 18:45","800 9000","45.663 kr","Í vinnslu"],["100",{value:"dfdf"},"16.09.2019 / kl. 18:45","","5.663 kr","Í vinnslu"],["102",{value:n.jsxs(n.Fragment,{children:["Umsókn um ",n.jsx("a",{href:"/url",children:"stuðningsþjónustu"})]})},"16.09.2019 / kl. 18:45","800 9000","-30.663 kr","Í vinnslu"]],tfoot:s&&[[{value:"Samtals:",number:!1,colSpan:4},{value:"16.345 kr.",number:!0},""]]},""+e+s+r),a&&n.jsx(k,{children:"This is an optional footnote"})]})},y={render:e=>n.jsx(R,{...e}),argTypes:{compact:{name:"Compact"},footer:{name:"Footer"},footnote:{name:"Footnote"},variant:{name:"Variant",options:F,control:"radio"}},args:{compact:!1,footer:!1,footnote:!1,variant:"normal"}};var V,P,q;y.parameters={...y.parameters,docs:{...(V=y.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(q=(P=y.parameters)==null?void 0:P.docs)==null?void 0:q.source}}};const Y=["_BasicTable"];export{y as _BasicTable,Y as __namedExportsOrder,X as default};
//# sourceMappingURL=BasicTable.stories-8b4b9152.js.map
