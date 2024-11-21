import{j as e}from"./jsx-runtime-f961835c.js";import{A as i}from"./_AbstractCarousel-947e649c.js";import"./index-f80c8c95.js";import"./focusElm-346ced9a.js";import"./getPageScrollElm-bb23cb91.js";import"./throttle-99eb2ade.js";import"./getSVGtext-6e71cb30.js";import"./_useMobileMenuToggling-93fc22f5.js";import"./browserSide-4379edd8.js";import"./_Link-b7c9c4c9.js";const n=t=>e.jsx(i,{...t,bem:void 0,modifier:void 0,title:void 0});try{n.displayName="Carousel",n.__docgenInfo={description:"",displayName:"Carousel",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},scrollRight:{defaultValue:null,description:"@deprecated Ingored because never used (Will be removed in v0.11)",name:"scrollRight",required:!1,type:{name:"boolean"}},ssr:{defaultValue:null,description:`Indicates whether server-side rendering is supported or not.

The \`ssr-only\` value is useful for cases where you need
to demo the server-rendered version in a browser.`,name:"ssr",required:!1,type:{name:"SSRSupport"}},itemCount:{defaultValue:null,description:"Explicit number of items contained by the `children` prop\n\nUse this when your returned child elements are wrapped in a\n`<Fragment />` or some such.",name:"itemCount",required:!1,type:{name:"number"}},items:{defaultValue:null,description:"",name:"items",required:!1,type:{name:"I[]"}},childrenHTML:{defaultValue:null,description:"HTML content that should be dangerously inserted directly into the\n`__itemlist` element",name:"childrenHTML",required:!1,type:{name:"string"}},Component:{defaultValue:null,description:"",name:"Component",required:!1,type:{name:"((props: I & P) => ReactElement<any, string | JSXElementConstructor<any>> | null)"}},ComponentProps:{defaultValue:null,description:"",name:"ComponentProps",required:!1,type:{name:"Record<string, unknown>"}},wrapperProps:{defaultValue:null,description:`Custom HTML attributes for the component's wrapper element.

Note, however, that some props may be intentionally
excluded from the list.

__WARNING:__
In some cases props added this way can break the component, og hurt its
accessibility.  Also, some props may get ignored, or over-ridden by the
component. User discretion is advised.`,name:"wrapperProps",required:!1,type:{name:"HTMLProps<null, never>"}},startSeen:{defaultValue:null,description:"@deprecated This prop does nothing nowadays (Will be removed in v0.11)",name:"startSeen",required:!1,type:{name:"boolean"}}}}}catch{}const b={title:"Carousel",parameters:{controls:{hideNoControlsWarning:!0},viewport:{defaultViewport:"responsive"}}},l=()=>e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        .Carousel p {
          border: var(--border-default);
          background-color: var(--color-suld-25);
          padding: 1em;
          margin-right: var(--grid-gutter);
        }
        .Carousel strong {
          display: block;
          width: max-content;
        }
      `}),e.jsxs(n,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"one"})," Subtext"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"two"})," Yöva gäta stahrt sömwaer. Ut enim ad minim veniam, letsi Björk ifder svensk og latin makinen dehr graek."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"three"})," Ut enim ad minim veniam, letsi Björk ifder svensk og latin makinen dehr graek"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"four"})," Chockolate moose!"]})]})]}),r={render:()=>e.jsx(l,{})};var s,o,a;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <CarouselStory />
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const x=["_Carousel"];export{r as _Carousel,x as __namedExportsOrder,b as default};
//# sourceMappingURL=Carousel.stories-40318b0a.js.map
