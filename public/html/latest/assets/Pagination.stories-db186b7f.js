import{j as p}from"./jsx-runtime-f961835c.js";import{r as _}from"./index-f80c8c95.js";import{m as h}from"./classUtils-ef6e60eb.js";import{g as v}from"./i18n-f5d14da7.js";import{L as x}from"./_Link-b7c9c4c9.js";import{r as c}from"./range-dbab87d5.js";import{h as P}from"./index-603b371f.js";import"./getScrollbarWidth-73ca1995.js";import"./getSVGtext-a5d3ecb0.js";import"./hooks-d45327d9.js";import"./domid-a414b1fb.js";import"./addUrlParams-c54217db.js";const $=(t,e)=>{if(e<=7)return c(1,e);const a=Math.max(1,Math.min(t-2,e-4)),r=Math.min(Math.max(t+2,5),e),n=c(a,r);return a>1&&(a>2&&n.unshift("…"),n.unshift(1)),r<e&&(r<e-1&&n.push("…"),n.push(e)),n},k=t=>{const{page:e,label:a,modifier:r,disabled:n,onChange:o,href:i}=t,s=t.labelLong.replace(/\$\{page\}/,e+""),u=a?a.replace(/\$\{page\}/,e+""):e+"",l={key:t.key,className:h("Pagination__button",r),title:s,"aria-label":s!==u?s:void 0,children:u,onClick:o&&(m=>o(e,m)),"aria-current":r==="active"||void 0,"aria-controls":t.ariaControls};return i&&!n?p.jsx(x,{href:i(e),...l}):p.jsx("button",{type:t.type,disabled:n,...l})},S=t=>{const{submit:e,onChange:a,href:r,"aria-controls":n}=t,o=typeof r=="string"?s=>r.replace(/\$\{page\}/,`${s}`):r,i=e?"submit":"button";return s=>p.jsx(k,{href:o,onChange:a,type:i,ariaControls:n,...s})},N={is:{defaultTitle:"Veldu síðu (${pageCount} alls)",nextLabel:"Næsta",nextLabelLong:"Næsta síða (${page})",prevLabel:"Fyrri",prevLabelLong:"Fyrri síða (${page})",pageLabelLong:"Síða ${page}"},en:{defaultTitle:"Select Page (${pageCount} total)",nextLabel:"Next",nextLabelLong:"Next page (${page})",prevLabel:"Previous",prevLabelLong:"Previous page (${page})",pageLabelLong:"Page ${page}"},pl:{defaultTitle:"Wybierz stronę (${pageCount} wszystkich)",nextLabel:"Następna",nextLabelLong:"Następna strona (${page})",prevLabel:"Poprzednia",prevLabelLong:"Poprzednia strona (${page})",pageLabelLong:"Strona ${page}"}},g=_.memo(t=>{const{current:e,pageCount:a,ssr:r,wrapperProps:n}=t,o=P.useIsBrowserSide(r);if(a<2||!o&&!t.href)return null;const i=$(e,a),s=v(t,N),u=S(t);return p.jsxs("div",{...n,className:h("Pagination",null,(n||{}).className),"aria-label":t.title||s.defaultTitle.replace(/\$\{pageCount\}/,`${a}`),children:[u({page:e,modifier:"next",label:s.nextLabel,labelLong:s.nextLabelLong,disabled:e===a})," ",u({page:e,modifier:"prev",label:s.prevLabel,labelLong:s.pageLabelLong,disabled:e===1})," ",i.map((l,m)=>l==="…"?p.jsx("span",{className:"Pagination__ellipsis",children:"…"}):u({key:m,page:l,labelLong:s.pageLabelLong,modifier:l===e&&"active"})).flatMap(l=>[l," "])]})});try{g.displayName="Pagination",g.__docgenInfo={description:"",displayName:"Pagination",props:{current:{defaultValue:null,description:"",name:"current",required:!0,type:{name:"number"}},pageCount:{defaultValue:null,description:"",name:"pageCount",required:!0,type:{name:"number"}},"aria-controls":{defaultValue:null,description:"",name:"aria-controls",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},submit:{defaultValue:null,description:"",name:"submit",required:!1,type:{name:"boolean"}},lang:{defaultValue:null,description:"",name:"lang",required:!1,type:{name:"string"}},texts:{defaultValue:null,description:"",name:"texts",required:!1,type:{name:"PaginationI18n"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"`${string}\\${page}${string}` | ((page: number) => string)"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((page: number, clickEvent: MouseEvent<Element, MouseEvent>) => void) | ((page: number, clickEvent: MouseEvent<Element, MouseEvent>) => void)"}},ssr:{defaultValue:null,description:`Indicates whether server-side rendering is supported or not.

The \`ssr-only\` value is useful for cases where you need
to demo the server-rendered version in a browser.`,name:"ssr",required:!1,type:{name:"SSRSupport"}},wrapperProps:{defaultValue:null,description:`Custom HTML attributes for the component's wrapper element.

Note, however, that some props may be intentionally
excluded from the list.

__WARNING:__
In some cases props added this way can break the component, og hurt its
accessibility.  Also, some props may get ignored, or over-ridden by the
component. User discretion is advised.`,name:"wrapperProps",required:!1,type:{name:'HTMLProps<null, "aria-label">'}}}}}catch{}const b=["1_25","9_25","25_25","1_5"],O={title:"Pagination",parameters:{viewport:{defaultViewport:"responsive"}}},w=t=>{const{type:e,state:a}=t,[r,n]=a.split("_").map(Number),o=e==="link"?{href:"?page=${page}"}:{onChange:()=>{},submit:e==="submit"},i=[e,r,n].join("-");return p.jsx(g,{current:r,pageCount:n,...o},i)},d={render:t=>p.jsx(w,{...t}),argTypes:{type:{name:"Button type",options:b,control:{type:"inline-radio",labels:{link:"Links",button:"Buttons",submit:"Submit buttons"}}},state:{name:"Status",options:b,control:{type:"radio",labels:{"1_25":"First page","9_25":"Page near the middie","25_25":"Last page","1_5":"Short list"}}}},args:{type:"link",state:"1_25"}};var f,y,L;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <PaginationStory {...args} />,
  argTypes: {
    type: {
      name: 'Button type',
      options: stateOptions,
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
}`,...(L=(y=d.parameters)==null?void 0:y.docs)==null?void 0:L.source}}};const H=["_Pagination"];export{d as _Pagination,H as __namedExportsOrder,O as default};
//# sourceMappingURL=Pagination.stories-db186b7f.js.map
