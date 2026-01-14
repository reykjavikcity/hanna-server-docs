import{j as e}from"./getSVGtext-33d0ab58.js";import{C as p}from"./CenterColumn-9d16e74f.js";import{C as d}from"./ContentImage-860296b8.js";import{c as g}from"./Gallery--landscape--large-1a6262ed.js";import{H as C}from"./HiddenTiger-5148c601.js";import"./index-f80c8c95.js";import"./_Image-8b101007.js";import"./useGetSVGtext-0847a7d8.js";const b={title:"ContentImage",parameters:{css:{tokens:"ContentImage,CenterColumn"}}},l={src:g,altText:"Elliðaárdalur alt text"},x="Long caption here to test how this can line-break at different screen sizesLong caption here to test how this can line-break at different screen sizes.",h="©2017 Jónína Jóhannesdóttir og Páll Pétursson",u=({captionText:n,photoCredit:i})=>{const m=n?x:void 0,c=i?h:void 0,o=e.jsx(d,{image:l,caption:m,credit:c});return e.jsx(C,{htmlDemo:o,visibleDemo:e.jsx(p,{children:o})})},t={render:n=>e.jsx(u,{...n}),argTypes:{captionText:{name:"Caption text"},photoCredit:{name:"Photo credit text"}},args:{captionText:!0,photoCredit:!0}};var r,a,s;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => <ContentImageStory {...args} />,
  argTypes: {
    captionText: {
      name: 'Caption text'
    },
    photoCredit: {
      name: 'Photo credit text'
    }
  },
  args: {
    captionText: true,
    photoCredit: true
  }
}`,...(s=(a=t.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const k=["_ContentImage"];export{t as _ContentImage,k as __namedExportsOrder,b as default};
//# sourceMappingURL=ContentImage.stories-c558f899.js.map
