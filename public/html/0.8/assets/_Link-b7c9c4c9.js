import{R as o}from"./index-f80c8c95.js";const s=e=>o.createElement("a",e);let n=s;const r=[],t=e=>{n=e||s,r.unshift(n)};t.pop=()=>{r.shift(),n=r[0]||s};try{n.displayName="Link",n.__docgenInfo={description:"",displayName:"Link",props:{}}}catch{}try{t.displayName="setLinkRenderer",t.__docgenInfo={description:`Allows you to set a callback function to wrapp <a href=""/> links with
a custom routing component.

Example use:

\`\`\`js
import { Link } from '@remix-run/react'; // or whatever :-)

setLinkRenderer((linkProps) => <Link to={props.href} {...linkProps} />);
\`\`\`

The link renderers are pushed to a simple stack, and if you want to unset
a custom renderer, use the \`setLinkRenderer.pop()\` method to go back to
the previous one. Example:

\`\`\`js
const BlockLinks = (props) =>
  <span className={props.className}>[Link temporarily out of order]</span>

setLinkRenderer(BlockLinks);
// ...render some Hanna components...
setLinkRenderer.pop(); // reset link rendering
\`\`\`

The default linkrenderer is defined as:

\`\`\`js
	(linkProps) => React.createElement('a', linkProps);
\`\`\`

...and you can explicitly switch to using this default by passing \`undefined\`
as an argument — like so:

\`\`\`js
setLinkRenderer(undefined); // pushes the default linkrenderer to the stack
\`\`\``,displayName:"setLinkRenderer",props:{}}}catch{}export{n as L};
//# sourceMappingURL=_Link-b7c9c4c9.js.map
