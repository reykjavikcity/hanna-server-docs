import{r as e}from"./index-f80c8c95.js";import{g as u}from"./getSVGtext-6e71cb30.js";const v=(t,o)=>{const[r,s]=e.useState(),n=e.useRef(t);return e.useEffect(()=>{t&&u(t,o).then(f=>{t===n.current&&s({imageSrc:t,code:f})}),n.current=t,s(void 0)},[t]),r};export{v as u};
//# sourceMappingURL=useGetSVGtext-67e54c68.js.map
