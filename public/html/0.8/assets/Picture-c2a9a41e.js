import{j as u}from"./jsx-runtime-f961835c.js";import{I as c}from"./_Image-7c4cc8d6.js";const i=e=>!!e||e===0,m=function(e,...a){const s=a.length;return e.map((t,r)=>{if(r===s)return t;const n=a[r],o=Array.isArray(n)?n.filter(i).join(" "):typeof n=="function"?n():n;return t+String(i(o)?o:"")}).join("")},l=e=>u.jsx(c,{...e,bem:"Picture",modifier:e.contain&&"contain"});try{l.displayName="Picture",l.__docgenInfo={description:"",displayName:"Picture",props:{altText:{defaultValue:null,description:"",name:"altText",required:!1,type:{name:"string"}},sources:{defaultValue:null,description:"",name:"sources",required:!1,type:{name:"Source[]"}},src:{defaultValue:null,description:"The default image source to (lazy) load",name:"src",required:!1,type:{name:"string"}},preloadSrc:{defaultValue:null,description:"Eagerly-loaded placeholder/thunbnail to use until a `sources` item has been picked.",name:"preloadSrc",required:!1,type:{name:"string"}},inline:{defaultValue:null,description:"",name:"inline",required:!1,type:{name:"false"}},focalPoint:{defaultValue:null,description:"",name:"focalPoint",required:!1,type:{name:"string"}},contain:{defaultValue:null,description:"",name:"contain",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},wrapperProps:{defaultValue:null,description:`Custom HTML attributes for the component's wrapper element.

Note, however, that some props may be intentionally
excluded from the list.

__WARNING:__
In some cases props added this way can break the component, og hurt its
accessibility.  Also, some props may get ignored, or over-ridden by the
component. User discretion is advised.`,name:"wrapperProps",required:!1,type:{name:"HTMLProps<null, never>"}}}}}catch{}export{l as P,m as c};
//# sourceMappingURL=Picture-c2a9a41e.js.map
