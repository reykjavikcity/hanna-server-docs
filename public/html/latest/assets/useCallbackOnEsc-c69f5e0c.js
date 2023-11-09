import{r as c}from"./index-f80c8c95.js";const u=e=>{const t=c.useRef(e),n=!!e;t.current=e,c.useEffect(()=>{if(!n)return;const r=s=>{s.key==="Escape"&&t.current&&t.current()};return document.addEventListener("keydown",r),()=>{document.removeEventListener("keydown",r)}},[n])};export{u};
//# sourceMappingURL=useCallbackOnEsc-c69f5e0c.js.map
