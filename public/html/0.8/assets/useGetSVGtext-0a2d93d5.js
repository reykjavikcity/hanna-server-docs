import{r as e}from"./index-f80c8c95.js";import{g as u}from"./getSVGtext-6e71cb30.js";const i=(t,f)=>{const[o,s]=e.useState(),n=e.useRef(t);return e.useEffect(()=>{t&&u(t,f).then(r=>{r&&t===n.current&&s({imageSrc:t,code:r})}),n.current=t,s(void 0)},[t]),o};export{i as u};
//# sourceMappingURL=useGetSVGtext-0a2d93d5.js.map
