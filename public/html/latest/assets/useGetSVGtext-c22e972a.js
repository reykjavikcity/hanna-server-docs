import{r as e}from"./index-f80c8c95.js";import{g as u}from"./getSVGtext-8f35f9ab.js";const v=(t,o)=>{const[r,s]=e.useState(),n=e.useRef(t);return e.useEffect(()=>{t&&u(t,o).then(f=>{t===n.current&&s({imageSrc:t,code:f})}),n.current=t,s(void 0)},[t]),r};export{v as u};
//# sourceMappingURL=useGetSVGtext-c22e972a.js.map
