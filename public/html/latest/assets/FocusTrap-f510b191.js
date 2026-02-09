import{j as p}from"./jsx-runtime-f961835c.js";import{f as d}from"./getSVGtext-6e71cb30.js";const c=t=>{const i=t.Tag||"span";return p.jsx(i,{className:"FocusTrap",tabIndex:0,onFocus:n=>{n.preventDefault();let e=n.currentTarget,u=Math.max(t.depth||1,1);for(;u--&&e;)e=e.parentElement;if(!e)return;const o=e.querySelectorAll(d.keyboardFocusableSelector),r=t.atTop?-1:1;let l=r<0?o.length-1:0,a;for(;a=o[l];){if(a.focus(),document.activeElement===a)return;l+=r}const s=e.matches("[tabindex]")?e:e.querySelector('[tabindex="-1"]')||e.closest("[tabindex]");s&&s.focus()}})};try{c.displayName="FocusTrap",c.__docgenInfo={description:`A focus trap element that can be used to keep keyboard focus within a
container block.

Make sure you only trap focus when a modal or dialog is open`,displayName:"FocusTrap",props:{Tag:{defaultValue:null,description:"The HTML tag to use for the trap element. (Default `<span />`)",name:"Tag",required:!1,type:{name:"enum",value:[{value:'"span"'},{value:'"li"'}]}},atTop:{defaultValue:null,description:"Set to `true` for focus traps positioned at the top of a container.",name:"atTop",required:!1,type:{name:"boolean"}},depth:{defaultValue:null,description:`How deep the trap is placed in the DOM tree beneath its container element.

This is useful when the trap needs to be placed inside an element that's
not a direct child of the desired trapping container.

Default: \`1\`  (i.e. use the parent element.)`,name:"depth",required:!1,type:{name:"number"}}}}}catch{}export{c as F};
//# sourceMappingURL=FocusTrap-f510b191.js.map
