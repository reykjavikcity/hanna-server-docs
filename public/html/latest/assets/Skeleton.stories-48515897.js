import{j as p}from"./jsx-runtime-f961835c.js";import{r as l}from"./index-f80c8c95.js";import{S as m}from"./Skeleton-e1e43676.js";import"./range-dbab87d5.js";import"./getSVGtext-6e71cb30.js";const{useArgs:g}=__STORYBOOK_MODULE_PREVIEW_API__,u=["block","text","circle"],s=[1,2,3,4,5,6,7,8,9,10],d=[1,2,3,4,5],x={title:"Skeleton",parameters:{controls:{hideNoControlsWarning:!0},viewport:{defaultViewport:"responsive"}}},f=({variant:r,height:o,items:e,gap:n})=>p.jsx(m,{height:o,items:e,text:r==="text",gap:n,circle:r==="circle"}),t={render:function(o){const[{variant:e},n]=g();return l.useEffect(()=>{e==="circle"&&(n({gap:void 0}),n({items:1}))},[n,e]),p.jsx(f,{...o})},argTypes:{variant:{name:"Variant",options:u,control:"inline-radio"},height:{name:"Height",options:s,control:"select"},items:{name:"Items",options:s,control:"select",if:{arg:"variant",neq:"circle"}},gap:{name:"Gap",options:d,control:"select",if:{arg:"items",neq:1}}},args:{variant:"block",height:6,items:1,gap:2}};var a,i,c;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: function Render(args) {
    const [{
      variant
    }, updateArgs] = useArgs();
    useEffect(() => {
      if (variant === 'circle') {
        updateArgs({
          gap: undefined
        });
        updateArgs({
          items: 1
        });
      }
    }, [updateArgs, variant]);
    return <SkeletonStory {...args} />;
  },
  argTypes: {
    variant: {
      name: 'Variant',
      options: variantOptions,
      control: 'inline-radio'
    },
    height: {
      name: 'Height',
      options: numbersOptions,
      control: 'select'
    },
    items: {
      name: 'Items',
      options: numbersOptions,
      control: 'select',
      if: {
        arg: 'variant',
        neq: 'circle'
      }
    },
    gap: {
      name: 'Gap',
      options: gapOptions,
      control: 'select',
      if: {
        arg: 'items',
        neq: 1
      }
    }
  },
  args: {
    variant: 'block',
    height: 6,
    items: 1,
    gap: 2
  }
}`,...(c=(i=t.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const k=["_Skeleton"];export{t as _Skeleton,k as __namedExportsOrder,x as default};
//# sourceMappingURL=Skeleton.stories-48515897.js.map
