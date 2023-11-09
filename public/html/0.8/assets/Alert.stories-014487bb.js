import{j as r}from"./jsx-runtime-f961835c.js";import{r as d}from"./index-f80c8c95.js";import{A as u}from"./Alert-17548fd6.js";import"./getSVGtext-8f35f9ab.js";import{a as p}from"./ObjectHelpers-f7b28faf.js";import"./classUtils-ef6e60eb.js";import"./i18n-18e56484.js";import"./_Button-f001a419.js";import"./_Link-b7c9c4c9.js";import"./env-5a2a565d.js";import"./browserSide-4379edd8.js";import"./getScrollbarWidth-70c1e033.js";const w={title:"Alert",parameters:{viewport:{defaultViewport:"responsive"}}},g={info:()=>r.jsxs(r.Fragment,{children:["Information -",r.jsx("br",{})," Lorem ipsum ",r.jsx("a",{href:"",children:"dolor sit amet"})," consectetur adipisicing elit. Ipsum officia itaque odit necessitatibus soluta dolorum error deleniti rerum reiciendis assumenda!"]}),success:()=>r.jsxs(r.Fragment,{children:["Success - ",r.jsx("a",{href:"",children:"Bein útsending frá fundi borgarstjórnar"})," í Ráðhúsi Reykjavíkur ",r.jsx("strong",{children:"hefst kl. 14:00"})]}),warning:()=>r.jsxs(r.Fragment,{children:["Warning - Kosningar í fullum gangi. ",r.jsx("a",{href:"",children:"Flettu upp þínum kosningarstað"})]}),error:()=>r.jsx(r.Fragment,{children:"Error - Þú slóst eitthvað rangt inn, kjánaprik."}),critical:()=>r.jsxs(r.Fragment,{children:["Critical - Veðurviðvörun fyrir höfuðborgarsvæðið."," ",r.jsx("a",{href:"",children:"Sjá nánar á vedur.is"})]})},f=e=>{const t=e.closable,n=e.ssr&&t;return r.jsx(d.Fragment,{children:p(g).map(([a,c],m)=>r.jsx(u,{type:a,closable:t,closeUrl:n?"?closeAlert="+(m+1):void 0,children:c()},a))},""+t+n)},s={render:e=>r.jsx(f,{...e}),argTypes:{closable:{name:"Closable alert"},ssr:{name:"Server-side close buttons"}},args:{closable:!0,ssr:!1}};var i,o,l;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => <AlertStory {...args} />,
  argTypes: {
    closable: {
      name: 'Closable alert'
    },
    ssr: {
      name: 'Server-side close buttons'
    }
  },
  args: {
    closable: true,
    ssr: false
  }
}`,...(l=(o=s.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};const C=["_Alert"];export{s as _Alert,C as __namedExportsOrder,w as default};
//# sourceMappingURL=Alert.stories-014487bb.js.map
