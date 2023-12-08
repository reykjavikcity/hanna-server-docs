const a=r=>[1,5,11,17,29,37].reduce((n,t)=>n+(r.charCodeAt(t%r.length)||32)-32,42),o=(r,n)=>{if(!Array.isArray(r)){const t=o(Object.keys(r),n);return r[t]}return r.length>1?r[a(n)%r.length]:r[0]};export{o as g};
//# sourceMappingURL=getStableRandomItem-5e7f6e22.js.map
