import{j as s}from"./getSVGtext-33d0ab58.js";import{r as d}from"./index-f80c8c95.js";import{A as p}from"./Alert-d60e553c.js";import{a as g}from"./ObjectHelpers-f7b28faf.js";import"./i18n-d547729d.js";import"./_Button-ddfb139a.js";import"./_Link-b7c9c4c9.js";import"./env-5a2a565d.js";import"./browserSide-4379edd8.js";import"./_useMobileMenuToggling-af42c346.js";const B={title:"Alert",parameters:{viewport:{defaultViewport:"responsive"}}},f={info:()=>s.jsxs(s.Fragment,{children:["Information -",s.jsx("br",{})," Lorem ipsum ",s.jsx("a",{href:"",children:"dolor sit amet"})," consectetur adipisicing elit. Ipsum officia itaque odit necessitatibus soluta dolorum error deleniti rerum reiciendis assumenda!"]}),success:()=>s.jsxs(s.Fragment,{children:["Success - ",s.jsx("a",{href:"",children:"Bein útsending frá fundi borgarstjórnar"})," í Ráðhúsi Reykjavíkur ",s.jsx("strong",{children:"hefst kl. 14:00"})]}),warning:()=>s.jsxs(s.Fragment,{children:["Warning - Kosningar í fullum gangi. ",s.jsx("a",{href:"",children:"Flettu upp þínum kosningarstað"})]}),error:()=>s.jsx(s.Fragment,{children:"Error - Þú slóst eitthvað rangt inn, kjánaprik."}),critical:()=>s.jsxs(s.Fragment,{children:["Critical - Veðurviðvörun fyrir höfuðborgarsvæðið."," ",s.jsx("a",{href:"",children:"Sjá nánar á vedur.is"})]})},r={render:e=>{const n=e.closable,t=e.ssrButtons&&n,o=e.ssr;return s.jsx(d.Fragment,{children:g(f).map(([a,m],u)=>s.jsx(p,{type:a,closable:n,closeUrl:t?`?closeAlert=${u+1}`:void 0,ssr:o?"ssr-only":void 0,children:m()},a))},`${n}${t}${o}`)},argTypes:{ssr:{name:"Server-side Markup"},closable:{name:"Closable alert"},ssrButtons:{name:"Server-side close buttons"}},args:{ssr:!0,closable:!1,ssrButtons:!1}};var l,i,c;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => {
    const closable = args.closable;
    const closeLink = args.ssrButtons && closable;
    const ssr = args.ssr;
    return <Fragment key={\`\${closable}\${closeLink}\${ssr}\`}>
        {ObjectEntries(alertDemos).map(([type, contentFn], i) => <Alert key={type} type={type} closable={closable} closeUrl={closeLink ? \`?closeAlert=\${i + 1}\` : undefined} ssr={ssr ? 'ssr-only' : undefined}>
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
}`,...(c=(i=r.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const S=["_Alert"];export{r as _Alert,S as __namedExportsOrder,B as default};
//# sourceMappingURL=Alert.stories-eebe45b5.js.map
