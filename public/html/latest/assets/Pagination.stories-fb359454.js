import{j as p}from"./jsx-runtime-f961835c.js";import{r as h}from"./index-f80c8c95.js";import{m as L}from"./classUtils-ef6e60eb.js";import{g as v}from"./i18n-18e56484.js";import{L as _}from"./_Link-b7c9c4c9.js";import{r as c}from"./range-dbab87d5.js";import{u as x}from"./browserSide-4379edd8.js";import"./_useMobileMenuToggling-15a67498.js";import"./getSVGtext-8f35f9ab.js";const P=(t,e)=>{if(e<=7)return c(1,e);const a=Math.max(1,Math.min(t-2,e-4)),r=Math.min(Math.max(t+2,5),e),n=c(a,r);return a>1&&(a>2&&n.unshift("…"),n.unshift(1)),r<e&&(r<e-1&&n.push("…"),n.push(e)),n},$=t=>{const{page:e,label:a,modifier:r,disabled:n,onChange:o,href:i}=t,s=t.labelLong.replace(/\$\{page\}/,`${e}`),u=a?a.replace(/\$\{page\}/,`${e}`):`${e}`,l={key:t.key,className:L("Pagination__button",r),title:s,"aria-label":s!==u?s:void 0,children:u,onClick:o&&(m=>o(e,m)),"aria-current":r==="active"||void 0,"aria-controls":t.ariaControls};return i&&!n?p.jsx(_,{href:i(e),rel:"nofollow",...l}):p.jsx("button",{type:t.type,disabled:n,...l})},k=t=>{const{submit:e,onChange:a,href:r,"aria-controls":n}=t,o=typeof r=="string"?s=>r.replace(/\$\{page\}/,`${s}`):r,i=e?"submit":"button";return s=>p.jsx($,{href:o,onChange:a,type:i,ariaControls:n,...s})},S={is:{defaultTitle:"Veldu síðu (${pageCount} alls)",nextLabel:"Næsta",nextLabelLong:"Næsta síða (${page})",prevLabel:"Fyrri",prevLabelLong:"Fyrri síða (${page})",pageLabelLong:"Síða ${page}"},en:{defaultTitle:"Select Page (${pageCount} total)",nextLabel:"Next",nextLabelLong:"Next page (${page})",prevLabel:"Previous",prevLabelLong:"Previous page (${page})",pageLabelLong:"Page ${page}"},pl:{defaultTitle:"Wybierz stronę (${pageCount} wszystkich)",nextLabel:"Następna",nextLabelLong:"Następna strona (${page})",prevLabel:"Poprzednia",prevLabelLong:"Poprzednia strona (${page})",pageLabelLong:"Strona ${page}"}},g=h.memo(t=>{const{current:e,pageCount:a,ssr:r,wrapperProps:n}=t,o=x(r);if(a<2||!o&&!t.href)return null;const i=P(e,a),s=v(t,S),u=k(t);return p.jsxs("nav",{...n,className:L("Pagination",null,(n||{}).className),"aria-label":t.title||s.defaultTitle.replace(/\$\{pageCount\}/,`${a}`),children:[u({page:e+1,modifier:"next",label:s.nextLabel,labelLong:s.nextLabelLong,disabled:e===a})," ",u({page:e-1,modifier:"prev",label:s.prevLabel,labelLong:s.pageLabelLong,disabled:e===1})," ",i.map((l,m)=>l==="…"?p.jsx("span",{className:"Pagination__ellipsis",children:"…"}):u({key:m,page:l,labelLong:s.pageLabelLong,modifier:l===e&&"active"})).flatMap(l=>[l," "])]})});try{g.displayName="Pagination",g.__docgenInfo={description:"",displayName:"Pagination",props:{current:{defaultValue:null,description:"",name:"current",required:!0,type:{name:"number"}},pageCount:{defaultValue:null,description:"",name:"pageCount",required:!0,type:{name:"number"}},"aria-controls":{defaultValue:null,description:"",name:"aria-controls",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},submit:{defaultValue:null,description:"",name:"submit",required:!1,type:{name:"boolean"}},texts:{defaultValue:null,description:"",name:"texts",required:!1,type:{name:"PaginationI18n"}},lang:{defaultValue:null,description:"",name:"lang",required:!1,type:{name:"enum",value:[{value:'"is"'},{value:'"en"'},{value:'"pl"'}]}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"`${string}\\${page}${string}` | ((page: number) => string)"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((page: number, clickEvent: MouseEvent<Element, MouseEvent>) => void) | ((page: number, clickEvent: MouseEvent<Element, MouseEvent>) => void)"}},ssr:{defaultValue:null,description:`Indicates whether server-side rendering is supported or not.

The \`ssr-only\` value is useful for cases where you need
to demo the server-rendered version in a browser.`,name:"ssr",required:!1,type:{name:"SSRSupport"}},wrapperProps:{defaultValue:null,description:`Custom HTML attributes for the component's wrapper element.

Note, however, that some props may be intentionally
excluded from the list.

__WARNING:__
In some cases props added this way can break the component, og hurt its
accessibility.  Also, some props may get ignored, or over-ridden by the
component. User discretion is advised.`,name:"wrapperProps",required:!1,type:{name:'HTMLProps<null, "aria-label">'}}}}}catch{}const N=["link","button","submit"],w=["1_25","9_25","25_25","1_5"],O={title:"Pagination",parameters:{viewport:{defaultViewport:"responsive"}}},C=t=>{const{type:e,state:a}=t,[r,n]=a.split("_").map(Number),o=e==="link"?{href:"?page=${page}"}:{onChange:()=>{},submit:e==="submit"},i=[e,r,n].join("-");return p.jsx(g,{current:r,pageCount:n,...o},i)},d={render:t=>p.jsx(C,{...t}),argTypes:{type:{name:"Button type",options:N,control:{type:"inline-radio",labels:{link:"Links",button:"Buttons",submit:"Submit buttons"}}},state:{name:"Status",options:w,control:{type:"radio",labels:{"1_25":"First page","9_25":"Page near the middie","25_25":"Last page","1_5":"Short list"}}}},args:{type:"link",state:"1_25"}};var b,f,y;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <PaginationStory {...args} />,
  argTypes: {
    type: {
      name: 'Button type',
      options: typeOptions,
      control: {
        type: 'inline-radio',
        labels: ({
          link: 'Links',
          button: 'Buttons',
          submit: 'Submit buttons'
        } satisfies Record<ControlProps['type'], string>)
      }
    },
    state: {
      name: 'Status',
      options: stateOptions,
      control: {
        type: 'radio',
        labels: ({
          '1_25': 'First page',
          '9_25': 'Page near the middie',
          '25_25': 'Last page',
          '1_5': 'Short list'
        } satisfies Record<ControlProps['state'], string>)
      }
    }
  },
  args: {
    type: 'link',
    state: '1_25'
  }
}`,...(y=(f=d.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const z=["_Pagination"];export{d as _Pagination,z as __namedExportsOrder,O as default};
//# sourceMappingURL=Pagination.stories-fb359454.js.map