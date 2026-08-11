import{j as p}from"./jsx-runtime-f961835c.js";import{m as v}from"./getSVGtext-6e71cb30.js";const f={none:"none",small:"small",default:"",medium:"",large:"large",xlarge:"xlarge"},g=e=>e&&!(Array.isArray(e)&&!e.length)||void 0,n=(e,r)=>e&&e!==r?f[e]:void 0,u=e=>{const{size:r,top:d,bottom:c,children:i,wrapperProps:t}=e,s=g(i);let a=n(s&&d),l=n(s&&c),o=!(a&&l)&&n(r,"none");!o&&a===l&&a!=="none"?(o=a,a=l=void 0):o&&(o===a&&(o=a,a=void 0),o===l&&(o=l,l=void 0));const m=v("VSpacer",[o,a&&`top--${a}`,l&&`bottom--${l}`],(t||{}).className);return s?p.jsx("div",{...t,className:m,children:i}):p.jsx("hr",{...t,className:m})};try{u.displayName="VSpacer",u.__docgenInfo={description:"",displayName:"VSpacer",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"xlarge"'},{value:'"default"'},{value:'"medium"'}]}},top:{defaultValue:null,description:"",name:"top",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"none"'},{value:'"large"'},{value:'"xlarge"'},{value:'"default"'},{value:'"medium"'}]}},bottom:{defaultValue:null,description:"",name:"bottom",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"none"'},{value:'"large"'},{value:'"xlarge"'},{value:'"default"'},{value:'"medium"'}]}},wrapperProps:{defaultValue:null,description:`Custom HTML attributes for the component's wrapper element.

Note, however, that some props may be intentionally
excluded from the list.

__WARNING:__
In some cases props added this way can break the component, og hurt its
accessibility.  Also, some props may get ignored, or over-ridden by the
component. User discretion is advised.`,name:"wrapperProps",required:!1,type:{name:"HTMLProps<null, never>"}}}}}catch{}export{u as V};
//# sourceMappingURL=VSpacer-e7b27ee5.js.map
