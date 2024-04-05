const o="is",r=new Set(["is","en","pl"]);let e=o;const g=n=>n&&r.has(n)?n:void 0,a=(n,s)=>(console.error(`language '${n}' not supported`),s),c=(n,s)=>{const t=n.lang||e;return n.texts||s[t]||a(t,s[e])};export{e as D,g as e,c as g};
//# sourceMappingURL=i18n-d547729d.js.map
