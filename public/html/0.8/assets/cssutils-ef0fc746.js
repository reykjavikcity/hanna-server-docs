import{a as g}from"./assets-83022afa.js";const m=Symbol(),S=/^[a-z0-9_-]+$/i,d=e=>e,p=e=>{const r=`--${e}`,t=`var(${r})`,s=()=>t;return{cssName:r,or:n=>n?t.replace(/\)$/,`, ${n})`):t,[m]:!0,toString:s,toJSON:s,getName:s}},o=(e,r)=>Object.entries(e).map(([t,s])=>{const n=r[t];return!n||s==null||s===!1?"":`${n.cssName}: ${String(s).trim()};
`}).join(""),b=e=>{if(e&&!/^\/\^.+\$\/[igm]*$/.test(String(e)))throw new Error("Custom variable name RegExp must check the whole name (i.e. start with a `^` and end with a `$`)")},u=(e,r=S)=>{if(!e||!r.test(e))throw new Error(`Only CSS variable names matching ${r} are allowed.
Disallowed name: ${e}`)},i=(e,r={})=>{b(r.nameRe);const{nameRe:t,toCSSName:s=d}=r,n=(r.namespace||"").replace(/[\s{};@():[\]]/g,""),c=Object.fromEntries(e.map(a=>(u(a,t),[a,p(n+s(a))])));return{vars:c,declare:a=>o(a,c),override:a=>o(a,c)}};i.isVar=e=>typeof e=="function"&&m in e;i.join=(...e)=>{const r=Object.assign({},...e.map(t=>t.vars));return{vars:r,declare:t=>o(t,r),override:t=>o(t,r)}};const _="0.8",v=_,l={nameRe:/^[a-z0-9$_-]+$/i,toCSSName:e=>e.replace(/_/g,"-").replace(/\$/g,"_"),namespace:""},$=(e,r)=>{let t=l;return r&&(r=r.trim().replace(/-+$/,"").replace(/_+$/,"__"),/_$/.test(r)||(r+="--"),t={...t,namespace:l.namespace+r}),i(e,t)},{isVar:E,join:N}=i;$.isVar=E;$.join=N;const f=`v${v}`,h=(e,r)=>{r=r||{};const t=(r.testingServer||g).replace(/\/$/,""),s=r.version||f,n=typeof e=="string"?e:e.join(",");return`${t}/bundle/${s}?m=${n.replace(/\s/g,"")}`};export{$ as b,h as g};
//# sourceMappingURL=cssutils-ef0fc746.js.map