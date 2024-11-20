import{j as f}from"./jsx-runtime-f961835c.js";import{S as j}from"./ShareButtons-da794cb4.js";import{a as g}from"./browserSide-4379edd8.js";import"./_Link-b7c9c4c9.js";import"./index-f80c8c95.js";import"./_useMobileMenuToggling-7bb485b9.js";import"./getSVGtext-a8bc7f1c.js";import"./i18n-d547729d.js";import"./ObjectHelpers-f7b28faf.js";const _={title:"ShareButtons",parameters:{viewport:{defaultViewport:"responsive"}}},B=t=>{const{customLabel:d,customButtonText:b,facebook:r,twitter:m,linkedIn:u,email:n,customEmailSubject:p}=t,a=d?"Deila frétt":void 0,o=b?"${name} deiling":void 0,s=n&&p?"Áhugaverð frétt":void 0,S=g(),k=[r,m,u,n,a,o,s,S].join(","),x=a||o||s?{label:a,buttonLabel:o,emailSubject:s}:void 0;return f.jsx(j,{facebook:r,twitter:m,linkedin:u,email:n,texts:x,ssr:!1},k)},e={render:t=>f.jsx(B,{...t}),argTypes:{customLabel:{name:"Custom label"},customButtonText:{name:"Custom button text"},facebook:{name:"Facebook (default)"},twitter:{name:"Twitter (default)"},linkedIn:{name:"LinkedIn (default)"},email:{name:"E-mail"},customEmailSubject:{name:"Custom e-mail subject",if:{arg:"email",eq:!0}}},args:{customLabel:!1,customButtonText:!1,facebook:!0,twitter:!0,linkedIn:!1,email:!1,customEmailSubject:!1}};var i,l,c;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => <ShareButtonsStory {...args} />,
  argTypes: {
    customLabel: {
      name: 'Custom label'
    },
    customButtonText: {
      name: 'Custom button text'
    },
    facebook: {
      name: 'Facebook (default)'
    },
    twitter: {
      name: 'Twitter (default)'
    },
    linkedIn: {
      name: 'LinkedIn (default)'
    },
    email: {
      name: 'E-mail'
    },
    customEmailSubject: {
      name: 'Custom e-mail subject',
      if: {
        arg: 'email',
        eq: true
      }
    }
  },
  args: {
    customLabel: false,
    customButtonText: false,
    facebook: true,
    twitter: true,
    linkedIn: false,
    email: false,
    customEmailSubject: false
  }
}`,...(c=(l=e.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const q=["_ShareButtons"];export{e as _ShareButtons,q as __namedExportsOrder,_ as default};
//# sourceMappingURL=ShareButtons.stories-3bb4dc52.js.map
