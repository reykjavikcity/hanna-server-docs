import{j as l}from"./jsx-runtime-f961835c.js";import{m as u}from"./getSVGtext-6e71cb30.js";import"./index-f80c8c95.js";const c={xsmall:"size--xsmall",small:"size--small",medium:void 0,large:"size--large"},m=e=>{let{percent:n,done:s}=e;s&&(n=100);let r,i,a;return n!=null&&(r=10,n=Math.max(0,Math.min(100,n)),i=Math.round(n/r),a=`${n}%`),l.jsx("span",{className:u("Progress",[e.spinner&&"spinner",s&&"done",e.size&&c[e.size]],e.className),role:"progressbar","aria-valuemax":r,"aria-valuenow":i,"aria-valuetext":a,"aria-label":e.ariaLabel||void 0,"aria-labelledby":e.ariaLabelledBy||void 0,id:e.id,children:a&&l.jsx("span",{className:"Progress__value",children:a})})};try{m.displayName="Progress",m.__docgenInfo={description:"",displayName:"Progress",props:{className:{defaultValue:null,description:"Custom class-name for the progress indicator element",name:"className",required:!1,type:{name:"string"}},percent:{defaultValue:null,description:'The value of the progress bar from 0-100.\nIf `undefined` the progress will show an "indeterminate" state.',name:"percent",required:!1,type:{name:"number"}},done:{defaultValue:null,description:'If the progress bar should display a "done" state',name:"done",required:!1,type:{name:"boolean"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!1,type:{name:"string"}},ariaLabelledBy:{defaultValue:null,description:"",name:"ariaLabelledBy",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},spinner:{defaultValue:null,description:"Renders the progress indicator as a circular spinner.",name:"spinner",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"The size of the progress spinner\n\nDefault: `medium`",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"medium"'},{value:'"xsmall"'}]}}}}}catch{}const f=["xsmall","small","medium","large"],x={title:"Progress",parameters:{viewport:{defaultViewport:"responsive"}}},t={render:e=>{const{done:n,indeterminate:s,percent:r,spinner:i,size:a}=e;return l.jsx(m,{...s?{}:n?{done:n}:{percent:r},...i?{spinner:!0,size:a}:{spinner:!1}})},argTypes:{spinner:{name:"Spinner variant"},size:{name:"Spinner size",options:f,control:{type:"inline-radio",labels:{xsmall:"Extra small",small:"Small",medium:"Medium (default)",large:"Large"}},if:{arg:"spinner",eq:!0}},indeterminate:{name:"Indeterminate state"},percent:{name:"Percent value",control:{type:"range",min:0,max:100,step:1},if:{arg:"indeterminate",eq:!1}},done:{name:"Done state",if:{arg:"indeterminate",eq:!1}}},args:{spinner:!1,size:"medium",indeterminate:!1,percent:17,done:!1}};var o,d,p;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => {
    const {
      done,
      indeterminate,
      percent,
      spinner,
      size
    } = args;
    return <Progress {...indeterminate ? {} : done ? {
      done
    } : {
      percent
    }} {...spinner ? {
      spinner: true,
      size
    } : {
      spinner: false
    }} />;
  },
  argTypes: {
    spinner: {
      name: 'Spinner variant'
    },
    size: {
      name: 'Spinner size',
      options: sizeOptions,
      control: {
        type: 'inline-radio',
        labels: ({
          xsmall: 'Extra small',
          small: 'Small',
          medium: 'Medium (default)',
          large: 'Large'
        } satisfies Record<SpinnerSize, string>)
      },
      if: {
        arg: 'spinner',
        eq: true
      }
    },
    indeterminate: {
      name: 'Indeterminate state'
    },
    percent: {
      name: 'Percent value',
      control: {
        type: 'range',
        min: 0,
        max: 100,
        step: 1
      },
      if: {
        arg: 'indeterminate',
        eq: false
      }
    },
    done: {
      name: 'Done state',
      if: {
        arg: 'indeterminate',
        eq: false
      }
    }
  },
  args: {
    spinner: false,
    size: 'medium',
    indeterminate: false,
    percent: 17,
    done: false
  }
}`,...(p=(d=t.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const z=["_Progress"];export{t as _Progress,z as __namedExportsOrder,x as default};
//# sourceMappingURL=Progress.stories-1d5acd74.js.map
