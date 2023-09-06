import{j as i}from"./jsx-runtime-f961835c.js";import{r as n}from"./index-f80c8c95.js";import{W as S}from"./WizardStepper-e5e6bbcd.js";import"./classUtils-ef6e60eb.js";const d=["none","intro","step1","step2","step3","step4","step5"],k={title:"WizardStepper",parameters:{controls:{hideNoControlsWarning:!0},viewport:{defaultViewport:"responsive"}}},l=[{label:"Inngangur",clickable:!0,neutral:!0},{label:"Ástæða viðtals (never clickable)"},{label:"Bæta við gögnum",clickable:!0},{label:"Við höfum samband",clickable:!0},{label:'Aðeins meira (custom "done" status)',clickable:!0,done:!0},{label:"Staðfesting (always clickable)",clickable:"always"}];for(let e=0;e<l.length;e++);const m=e=>({none:-1,intro:0,step1:1,step2:2,step3:3,step4:4,step5:5})[e],u=({selectedStep:e})=>{let t=m(e);isNaN(t)&&(t=void 0);const[c,r]=n.useState(t);return n.useEffect(()=>{r(t)},[t]),i.jsx(S,{steps:l,activeStep:c,onClick:r,allowForwardSkip:!1,disableBacktrack:!1})},s={render:e=>i.jsx(u,{...e}),argTypes:{selectedStep:{name:"Active step",options:d,control:{type:"inline-radio",labels:{none:"None",intro:"Intro",step1:"Step 1",step2:"Step 2",step3:"Step 3",step4:"Step 4",step5:"Step 5"}}}},args:{selectedStep:"step1"}};var p,a,o;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <WizardStepperStory {...args} />,
  argTypes: {
    selectedStep: {
      name: 'Active step',
      options: stepsOptions,
      control: {
        type: 'inline-radio',
        labels: ({
          none: 'None',
          intro: 'Intro',
          step1: 'Step 1',
          step2: 'Step 2',
          step3: 'Step 3',
          step4: 'Step 4',
          step5: 'Step 5'
        } satisfies Record<SelectedStep, string>)
      }
    }
  },
  args: {
    selectedStep: 'step1'
  }
}`,...(o=(a=s.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const y=["_WizardStepper"];export{s as _WizardStepper,y as __namedExportsOrder,k as default};
//# sourceMappingURL=WizardStepper.stories-81eb82ab.js.map
