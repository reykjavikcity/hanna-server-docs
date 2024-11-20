import{r as n}from"./index-f80c8c95.js";const o=(t,r)=>{const e=n.useRef(r),c=!!r;e.current=r,n.useEffect(()=>{if(!c||!t.current)return;const s=u=>{if(!t.current)return!1;t.current.contains(u.target)||e.current&&e.current(u)};return document.addEventListener("click",s),()=>{document.removeEventListener("click",s)}},[c,t])};export{o as u};
//# sourceMappingURL=useOnClickOutside-2e1471b7.js.map
