import{j as e,m as x}from"./getSVGtext-33d0ab58.js";import{B as j}from"./Bling-6cf9c1f2.js";import{T as b}from"./TextBlock-60ac502a.js";import{j as o}from"./assets-a330961d.js";import{H as l}from"./HiddenTiger-5148c601.js";import"./index-f80c8c95.js";import"./useGetSVGtext-0847a7d8.js";const n=r=>{const{title:p,features:s,wrapperProps:i}=r,f=s.length?s:[{name:"..."}];return e.jsxs(e.Fragment,{children:[e.jsx(j,{type:"snake-large",align:"left",vertical:"down-ish"}),e.jsxs("div",{...i,className:x("FeatureList",null,(i||{}).className),children:[e.jsx("h2",{className:"FeatureList__title",children:p}),e.jsx("ul",{className:"FeatureList__list",children:f.map(({name:_,icon:g,iconUrl:a},h)=>e.jsx("li",{className:"FeatureList__feature",style:a?{"--efnistakn":`url("${a}")`}:void 0,"data-efnistakn":a?void 0:g,children:_},h))})]})]})};try{n.displayName="FeatureList",n.__docgenInfo={description:"",displayName:"FeatureList",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},features:{defaultValue:null,description:"",name:"features",required:!0,type:{name:'{ icon?: "bygging_01" | "download_01" | "dyrahald_01" | "ferdalag_01" | "tonlist_01" | "tonlist_02" | "tonlist_03" | "fjarmal_01" | "fjarmal_02" | "fjarmal_03" | "fjarmal_04" | ... 65 more ... | undefined; iconUrl?: string | undefined; name: string; }[]'}},wrapperProps:{defaultValue:null,description:`Custom HTML attributes for the component's wrapper element.

Note, however, that some props may be intentionally
excluded from the list.

__WARNING:__
In some cases props added this way can break the component, og hurt its
accessibility.  Also, some props may get ignored, or over-ridden by the
component. User discretion is advised.`,name:"wrapperProps",required:!1,type:{name:"HTMLProps<null, never>"}},startSeen:{defaultValue:null,description:"@deprecated This prop does nothing nowadays (Will be removed in v0.11)",name:"startSeen",required:!1,type:{name:"boolean"}}}}}catch{}const w={title:"FeatureList",parameters:{controls:{hideNoControlsWarning:!0},css:{tokens:"FeatureList,TextBlock"}}},y=[{name:"Útiklefar",iconUrl:o("sund_utiklefi")},{name:"Frítt WiFi",icon:"wifi"},{name:"25 metra laug",iconUrl:o("sund_metralaug")},{name:"Sauna",icon:"sund_sauna"},{name:"Heitir pottar",icon:"sund_heiturpottur"},{name:"No icon specified"},{name:"Sala á sundfatnaði",icon:"sund_sundfot"},{name:"Barnalaug",icon:"sund_barnalaug"},{name:"Eimbað",icon:"sund_sauna"},{name:"Kaldur pottur",icon:"sund_kaldurpottur"}],d=r=>`{${r}}`,t={render:()=>e.jsxs(e.Fragment,{children:[e.jsxs(l,{children:[e.jsxs(b,{align:"right",children:[e.jsx("p",{children:"The feature icons are set as either:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Using ",e.jsxs("code",{children:['data-efnistakn="',d("icon_name"),'"']})]}),e.jsxs("li",{children:["Using ",e.jsxs("code",{children:[`style="--efnistakn: url('`,d("full_icon_url"),`');'"`]})]})]})]}),e.jsx("br",{})]}),e.jsx(n,{title:"Hvað er í boði í lauginni?",features:y}),e.jsxs(l,{children:[e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{})]})]})};var u,c,m;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <>
      <HiddenTiger>
        <TextBlock align="right">
          <p>The feature icons are set as either:</p>
          <ul>
            <li>
              Using <code>data-efnistakn="{token('icon_name')}"</code>
            </li>
            <li>
              Using <code>style="--efnistakn: url('{token('full_icon_url')}');'"</code>
            </li>
          </ul>
        </TextBlock>
        <br />
      </HiddenTiger>

      <FeatureList title="Hvað er í boði í lauginni?" features={features} />

      <HiddenTiger>
        <br />
        <br />
        <br />
        <br />
      </HiddenTiger>
    </>
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const B=["_FeatureList"];export{t as _FeatureList,B as __namedExportsOrder,w as default};
//# sourceMappingURL=FeatureList.stories-82201d8c.js.map
