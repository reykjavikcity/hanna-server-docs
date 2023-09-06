import{j as f}from"./jsx-runtime-f961835c.js";import{h as j}from"./index-603b371f.js";import{S as g}from"./ShareButtons-1d6dbe55.js";import"./index-f80c8c95.js";import"./hooks-d45327d9.js";import"./domid-a414b1fb.js";import"./classUtils-ef6e60eb.js";import"./i18n-f5d14da7.js";import"./addUrlParams-c54217db.js";import"./ObjectHelpers-f7b28faf.js";import"./_Link-b7c9c4c9.js";const F={title:"ShareButtons",parameters:{viewport:{defaultViewport:"responsive"}}},B=t=>{const{customLabel:d,customButtonText:b,facebook:r,twitter:m,linkedIn:i,email:n,customEmailSubject:p}=t,a=d?"Deila frétt":void 0,o=b?"${name} deiling":void 0,s=n&&p?"Áhugaverð frétt":void 0,S=j.useIsServerSide(),k=[r,m,i,n,a,o,s,S].join(","),x=a||o||s?{label:a,buttonLabel:o,emailSubject:s}:void 0;return f.jsx(g,{facebook:r,twitter:m,linkedin:i,email:n,texts:x,ssr:!1},k)},e={render:t=>f.jsx(B,{...t}),argTypes:{customLabel:{name:"Custom label"},customButtonText:{name:"Custom button text"},facebook:{name:"Facebook (default)"},twitter:{name:"Twitter (default)"},linkedIn:{name:"LinkedIn (default)"},email:{name:"E-mail"},customEmailSubject:{name:"Custom e-mail subject",if:{arg:"email",eq:!0}}},args:{customLabel:!1,customButtonText:!1,facebook:!0,twitter:!0,linkedIn:!1,email:!1,customEmailSubject:!1}};var u,l,c;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(c=(l=e.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const D=["_ShareButtons"];export{e as _ShareButtons,D as __namedExportsOrder,F as default};
//# sourceMappingURL=ShareButtons.stories-41e07970.js.map
