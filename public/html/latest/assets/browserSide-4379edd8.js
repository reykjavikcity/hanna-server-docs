import{r as o}from"./index-f80c8c95.js";let a=!1;const l=!0;let f=l;const u=(e,t,s=f)=>{const r=o.useState(()=>s==="ssr-only"||s&&!a?e:t);return o.useEffect(()=>{a=!0,s!=="ssr-only"&&r[1](t)},[]),r},S=e=>u(!0,!1,e)[0]||void 0,d=e=>u(!1,!0,e)[0]||void 0;export{S as a,d as u};
//# sourceMappingURL=browserSide-4379edd8.js.map
