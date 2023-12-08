import{j as r}from"./jsx-runtime-f961835c.js";import{r as d}from"./index-f80c8c95.js";import{A as p}from"./Alert-853a7ffb.js";import"./getSVGtext-8f35f9ab.js";import{a as g}from"./ObjectHelpers-f7b28faf.js";import"./classUtils-ef6e60eb.js";import"./i18n-18e56484.js";import"./_Button-0c36286c.js";import"./_Link-b7c9c4c9.js";import"./env-5a2a565d.js";import"./browserSide-4379edd8.js";import"./_useMobileMenuToggling-0971be40.js";const L={title:"Alert",parameters:{viewport:{defaultViewport:"responsive"}}},f={info:()=>r.jsxs(r.Fragment,{children:["Information -",r.jsx("br",{})," Lorem ipsum ",r.jsx("a",{href:"",children:"dolor sit amet"})," consectetur adipisicing elit. Ipsum officia itaque odit necessitatibus soluta dolorum error deleniti rerum reiciendis assumenda!"]}),success:()=>r.jsxs(r.Fragment,{children:["Success - ",r.jsx("a",{href:"",children:"Bein útsending frá fundi borgarstjórnar"})," í Ráðhúsi Reykjavíkur ",r.jsx("strong",{children:"hefst kl. 14:00"})]}),warning:()=>r.jsxs(r.Fragment,{children:["Warning - Kosningar í fullum gangi. ",r.jsx("a",{href:"",children:"Flettu upp þínum kosningarstað"})]}),error:()=>r.jsx(r.Fragment,{children:"Error - Þú slóst eitthvað rangt inn, kjánaprik."}),critical:()=>r.jsxs(r.Fragment,{children:["Critical - Veðurviðvörun fyrir höfuðborgarsvæðið."," ",r.jsx("a",{href:"",children:"Sjá nánar á vedur.is"})]})},s={render:e=>{const n=e.closable,t=e.ssrButtons&&n,o=e.ssr;return r.jsx(d.Fragment,{children:g(f).map(([a,m],u)=>r.jsx(p,{type:a,closable:n,closeUrl:t?"?closeAlert="+(u+1):void 0,ssr:o?"ssr-only":void 0,children:m()},a))},""+n+t+o)},argTypes:{ssr:{name:"Server-side Markup"},closable:{name:"Closable alert"},ssrButtons:{name:"Server-side close buttons"}},args:{ssr:!0,closable:!1,ssrButtons:!1}};var i,l,c;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => {
    const closable = args.closable;
    const closeLink = args.ssrButtons && closable;
    const ssr = args.ssr;
    return <Fragment key={'' + closable + closeLink + ssr}>
        {ObjectEntries(alertDemos).map(([type, contentFn], i) => <Alert key={type} type={type} closable={closable} closeUrl={closeLink ? '?closeAlert=' + (i + 1) : undefined} ssr={ssr ? 'ssr-only' : undefined}>
            {contentFn()}
          </Alert>)}
      </Fragment>;
  },
  argTypes: {
    ssr: {
      name: 'Server-side Markup'
    },
    closable: {
      name: 'Closable alert'
    },
    ssrButtons: {
      name: 'Server-side close buttons'
    }
  },
  args: {
    ssr: true,
    closable: false,
    ssrButtons: false
  }
}`,...(c=(l=s.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const _=["_Alert"];export{s as _Alert,_ as __namedExportsOrder,L as default};
//# sourceMappingURL=Alert.stories-dce0eee9.js.map
