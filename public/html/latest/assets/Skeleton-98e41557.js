import{j as a}from"./jsx-runtime-f961835c.js";import{r as v}from"./range-dbab87d5.js";import{m as p}from"./getSVGtext-6e71cb30.js";const s=(e,l,n)=>{if(!(e==null||isNaN(e)))return e=Math.round(e),e>l?l:e>=n?e:void 0},t=e=>{const l=s(e.height,20,2),n=s(e.gap,5,1),o=s(e.items,20,2)||1,{wrapperProps:u}=e,r=p("Skeleton",[e.text&&"text",l&&`height--${l}`,n&&`gap--${n}`],(u||{}).className);return o?a.jsx(a.Fragment,{children:v(1,o).map(i=>a.jsx("span",{className:r},i))}):a.jsx("span",{...u,className:r})};t.block=e=>a.jsx(t,{height:e});t.text=e=>a.jsx(t,{text:!0,height:e});try{t.displayName="Skeleton",t.__docgenInfo={description:`Renders a "skeleton" block (optionally styled as "lines of text"),
as a placeholder for content that is loading.`,displayName:"Skeleton",props:{text:{defaultValue:null,description:'Set this to `true` to render "lines of text", instead of a whole block',name:"text",required:!1,type:{name:"boolean"}},height:{defaultValue:null,description:`Sets the height of the skeleton block or the number of lines of text.

Each unit is approximately one "standard line-height"

Deafult: \`1\``,name:"height",required:!1,type:{name:"enum",value:[{value:"1"},{value:"9"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"},{value:"10"},{value:"11"},{value:"12"},{value:"13"},{value:"14"},{value:"15"},{value:"16"},{value:"17"},{value:"18"},{value:"19"},{value:"20"}]}},gap:{defaultValue:null,description:'Sets the space between multiple skeleton `items`, in units of\n "standard line-height"\n\n Default: `3`',name:"gap",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"}]}},items:{defaultValue:null,description:"Optionally render mutiple skeletons, of the same `type` and `height`",name:"items",required:!1,type:{name:"enum",value:[{value:"1"},{value:"9"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"},{value:"10"},{value:"11"},{value:"12"},{value:"13"},{value:"14"},{value:"15"},{value:"16"},{value:"17"},{value:"18"},{value:"19"},{value:"20"}]}},wrapperProps:{defaultValue:null,description:`Custom HTML attributes for the component's wrapper element.

Note, however, that some props may be intentionally
excluded from the list.

__WARNING:__
In some cases props added this way can break the component, og hurt its
accessibility.  Also, some props may get ignored, or over-ridden by the
component. User discretion is advised.`,name:"wrapperProps",required:!1,type:{name:"HTMLProps<null, never>"}}}}}catch{}export{t as S};
//# sourceMappingURL=Skeleton-98e41557.js.map
