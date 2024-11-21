import{j as r}from"./jsx-runtime-f961835c.js";import{R as _}from"./index-f80c8c95.js";import{d as B,f as v}from"./assets-83022afa.js";import{B as S}from"./_Block-774d2301.js";import{a as j}from"./constants-e90fe5b2.js";import{T as x,f as b,g as p,s as u}from"./_dummyData-f2c921fc.js";import{t as L}from"./knobs-65c9100b.js";import"./getSVGtext-6e71cb30.js";import"./_Button-a24e90fa.js";import"./_Link-b7c9c4c9.js";import"./_Image-d0ff28fc.js";import"./useGetSVGtext-67e54c68.js";import"./cssutils-ef0fc746.js";import"./themes-56ee0168.js";import"./range-dbab87d5.js";import"./getStableRandomItem-5e7f6e22.js";const m=e=>{const{align:t,content:o,shapes:n,image:s,wrapperProps:a}=e,T=t&&j[t]?t:"right",I=Array.isArray(o)?{content:o}:{content:o,image:n?{src:B(n),inline:!0}:s||{}};return r.jsx(S,{wrapperProps:a,bem:"IslandBlock",modifier:`align--${T}`,...I})};try{m.displayName="IslandBlock",m.__docgenInfo={description:"",displayName:"IslandBlock",props:{align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"right"'},{value:'"left"'}]}},content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"BlockItem | BlockItem[]"}},shapes:{defaultValue:null,description:"",name:"shapes",required:!1,type:{name:"enum",value:[{value:'"esjan"'},{value:'"blokkir"'},{value:'"bru"'},{value:'"fjoll"'},{value:'"folk"'},{value:'"gogn"'},{value:'"gotur"'},{value:'"hofnin"'},{value:'"husthok"'},{value:'"kubbar"'},{value:'"leikvollur"'},{value:'"perlan"'},{value:'"radhusid"'},{value:'"rolo"'},{value:'"sjorinn"'},{value:'"sund"'}]}},image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"ImageProps"}},wrapperProps:{defaultValue:null,description:`Custom HTML attributes for the component's wrapper element.

Note, however, that some props may be intentionally
excluded from the list.

__WARNING:__
In some cases props added this way can break the component, og hurt its
accessibility.  Also, some props may get ignored, or over-ridden by the
component. User discretion is advised.`,name:"wrapperProps",required:!1,type:{name:"HTMLProps<null, never>"}},startSeen:{defaultValue:null,description:"@deprecated This prop does nothing nowadays (Will be removed in v0.11)",name:"startSeen",required:!1,type:{name:"boolean"}}}}}catch{}const w=["svg-asset","textonly"],E=["left","right"],O=[0,1,2,3],X={title:"IslandBlock",parameters:{css:{tokens:"IslandBlock"}}},P=e=>{const t=e.layout,o=e.summaryText||void 0,n=e.links,s={title:b,summary:o&&p("html","strong"),buttons:u.slice(0,n)},a=e.type==="textonly"?{content:[s,{...s,title:`${x} 2`}]}:{content:s,shapes:v[3]};return r.jsx(m,{align:t,...a})},l={render:e=>r.jsx(P,{...e}),argTypes:{type:{name:"Type",options:w,control:{type:"inline-radio",labels:{"svg-asset":"Fornheimur SVG image",textonly:"Two text boxes"}}},layout:{name:"Layout",options:E,control:{type:"inline-radio",labels:{left:"Left",right:"Right"}}},summaryText:{name:"Summary text"},links:{name:"Links",options:O,control:"inline-radio"},...L},args:{type:"svg-asset",layout:"right",summaryText:!0,links:2}},c=e=>e%3?"html":e%2?"text":void 0,R=["svg-asset","textonly"].reduce((e,t)=>(["right","left"].forEach(o=>{const n=2*e.length+1,s={title:b,summary:p(c(n),"a"),buttons:u.slice(0,1+(n+2)%3)};if(t==="textonly"){const a={title:`${x} 2`,summary:p(c(n+1),"strong"),buttons:u.slice(0,1+(n+3)%3)};e.push({align:o,content:[s,a]})}else e.push({align:o,content:s,shapes:v[3]})}),e),[]),N=()=>r.jsxs(r.Fragment,{children:[" ",R.map((e,t)=>r.jsxs(_.Fragment,{children:[r.jsx(m,{...e}),`

`]},t))]}),i={render:()=>r.jsx(N,{}),parameters:{controls:{hideNoControlsWarning:!0}}};var d,y,g;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <IslandBlockStory {...args} />,
  argTypes: {
    type: {
      name: 'Type',
      options: typeOptions,
      control: {
        type: 'inline-radio',
        labels: ({
          'svg-asset': 'Fornheimur SVG image',
          textonly: 'Two text boxes'
        } satisfies Record<ControlProps['type'], string>)
      }
    },
    layout: {
      name: 'Layout',
      options: layoutOptions,
      control: {
        type: 'inline-radio',
        labels: ({
          left: 'Left',
          right: 'Right'
        } satisfies Record<ControlProps['layout'], string>)
      }
    },
    summaryText: {
      name: 'Summary text'
    },
    links: {
      name: 'Links',
      options: linksOptions,
      control: 'inline-radio'
    },
    ...themeArgTypes
  },
  args: {
    type: 'svg-asset',
    layout: 'right',
    summaryText: true,
    links: 2
  }
}`,...(g=(y=l.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var h,f,k;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <IslandBlockExamplesStory />,
  parameters: {
    controls: {
      hideNoControlsWarning: true
    }
  }
}`,...(k=(f=i.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};const Y=["_IslandBlock","_IslandBlock_Examples"];export{l as _IslandBlock,i as _IslandBlock_Examples,Y as __namedExportsOrder,X as default};
//# sourceMappingURL=IslandBlock.stories-3c0ddc40.js.map
