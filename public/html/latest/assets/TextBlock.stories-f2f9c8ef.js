import{j as e}from"./jsx-runtime-f961835c.js";import{T as d}from"./TextBlock-44adff7b.js";import"./index-f80c8c95.js";import"./getSVGtext-6e71cb30.js";const m=["left","wide","right","labelled"],j={title:"text/TextBlock"},u=()=>e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"Testing a H2 headline"}),e.jsxs("p",{children:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quam voluptas necessitatibus ",e.jsx("a",{href:"",children:"Text link demo"})," in beatae distinctio cum!"]}),e.jsx("h3",{children:"Test h3 title"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Test bullet 1"}),e.jsxs("li",{children:["Test bullet 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, dolores esse animi laboriosam!"," "]}),e.jsx("li",{children:"Test bullet 3"})]}),e.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo"}),e.jsx("hr",{}),e.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo"}),e.jsx("h2",{children:"Testing a H2 headline"}),e.jsxs("p",{children:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo"," ",e.jsx("a",{href:"",children:"text with line wrapping "})," quam voluptas necessitatibus in beatae distinctio cum!"]}),e.jsx("h4",{children:"Test h4 title"}),e.jsx("blockquote",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quam voluptas necessitatibus in beatae distinctio cum!"})]}),p=({layout:i,smallText:r})=>{const t=i!=="left"?i:"",c=t==="wide"?{wide:!0}:t==="right"?{align:t}:t==="labelled"?{labelled:!0}:{},s=r||void 0;return e.jsx(d,{...c,small:s,children:u()},t+s)},l={render:i=>e.jsx(p,{...i}),argTypes:{layout:{name:"Layout",options:m,control:{type:"inline-radio",labels:{left:"Left",wide:"Wide",right:"Right aligned",labelled:"Labelled (H2 headings)"}}},smallText:{name:"Small text"}},args:{layout:"left",smallText:!1}};var n,a,o;l.parameters={...l.parameters,docs:{...(n=l.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => <TextBlockStory {...args} />,
  argTypes: {
    layout: {
      name: 'Layout',
      options: layoutOptions,
      control: {
        type: 'inline-radio',
        labels: ({
          left: 'Left',
          wide: 'Wide',
          right: 'Right aligned',
          labelled: 'Labelled (H2 headings)'
        } satisfies Record<Layout, string>)
      }
    },
    smallText: {
      name: 'Small text'
    }
  },
  args: {
    layout: 'left',
    smallText: false
  }
}`,...(o=(a=l.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const T=["_TextBlock"];export{l as _TextBlock,T as __namedExportsOrder,j as default};
//# sourceMappingURL=TextBlock.stories-f2f9c8ef.js.map
