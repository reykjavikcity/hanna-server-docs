import{j as k}from"./jsx-runtime-f961835c.js";import{r as w,g as X}from"./index-f80c8c95.js";import{d as Z}from"./_useMobileMenuToggling-0971be40.js";import{g as ee,F as te}from"./FormField-4fd9b208.js";var W={};(function(e){/*! *****************************************************************************
	Copyright (c) Microsoft Corporation.

	Permission to use, copy, modify, and/or distribute this software for any
	purpose with or without fee is hereby granted.

	THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
	REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
	AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
	INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
	LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
	OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
	PERFORMANCE OF THIS SOFTWARE.
	***************************************************************************** */var t=function(l,a){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,n){o.__proto__=n}||function(o,n){for(var c in n)n.hasOwnProperty(c)&&(o[c]=n[c])},t(l,a)};function d(l,a){t(l,a);function o(){this.constructor=l}l.prototype=a===null?Object.create(a):(o.prototype=a.prototype,new o)}e.__assign=function(){return e.__assign=Object.assign||function(a){for(var o=arguments,n,c=1,v=arguments.length;c<v;c++){n=o[c];for(var h in n)Object.prototype.hasOwnProperty.call(n,h)&&(a[h]=n[h])}return a},e.__assign.apply(this,arguments)};function i(l,a){var o={};for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&a.indexOf(n)<0&&(o[n]=l[n]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,n=Object.getOwnPropertySymbols(l);c<n.length;c++)a.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(l,n[c])&&(o[n[c]]=l[n[c]]);return o}e.__extends=d,e.__rest=i})(W);var ne=function(e,t){var d=function(i){return!i||!i.length?"":typeof i=="string"?" "+e+"--"+i:i.map(d).join("")};return d(t)},G=ne,re=G,ae=function(e,t,d){return e+re(e,t)+(d?" "+d:"")},le=ae,$={};(function(e){Object.defineProperty(e,"__esModule",{value:!0});var t=w,d=Z;function i(r){return r&&typeof r=="object"&&"default"in r?r:{default:r}}var l=i(d),a=t.useId,o=a?function(r){var f=a();return r||f}:function(r){return t.useRef(r||l.default()).current},n=function(r){return t.useEffect(r,[])},c=function(r){var f=t.useRef(r);f.current=r,t.useEffect(function(){return function(){return f.current()}},[])},v=function(r,f){var p=t.useRef(!1),_=t.useRef(r);_.current=r,t.useEffect(function(){if(p.current)return _.current();p.current=!0},f)},h=function(r){return t.useRef(r).current},O=function(r){var f=t.useRef(r),p=!!r;f.current=r,t.useEffect(function(){if(p){var _=function(R){R.key==="Escape"&&f.current&&f.current()};return document.addEventListener("keydown",_),function(){document.removeEventListener("keydown",_)}}},[p])},V=function(r,f){return f===void 0&&(f="topContent"),n(function(){return document.documentElement.dataset[f]=r,function(){delete document.documentElement.dataset[f]}})},C=!0;e.DEFAULT_SSR_SUPPORT=C;var E=function(r,f,p){p===void 0&&(p=e.DEFAULT_SSR_SUPPORT);var _=t.useState(p?r:f);return n(function(){p===!0&&_[1](f)}),_},q=function(r){return E(!0,!1,r)[0]||void 0},m=function(r){return E(!1,!0,r)[0]||void 0},y=[],S=function(r){e.DEFAULT_SSR_SUPPORT=r??C,y.unshift(e.DEFAULT_SSR_SUPPORT)};S.pop=function(){y.shift(),e.DEFAULT_SSR_SUPPORT=y[0]!=null?y[0]:C},e.setDefaultSSR=S,e.useCallbackOnEsc=O,e.useClientState=E,e.useConst=h,e.useDomid=o,e.useIsBrowserSide=m,e.useIsServerSide=q,e.useNotifyTopContent=V,e.useOnMount=n,e.useOnUnmount=c,e.useOnUpdate=v})($);var M=W,g=w,ue=G,U=le,ie=$,oe=function(e,t){if(t!=null){var d=String(t);return e.find(function(i){return String(typeof i=="object"?i.value:i)===d})}},Y=function(e){return e.label!=null?e.label:String(e.value)},se="     ",de=function(e,t,d,i){var l,a=(t==null||t==="")&&d!=null?!1:(l=oe(e,t))!==null&&l!==void 0?l:d==null&&e[0],o;if(a!==!1&&a!=null){var n=typeof a=="object"?Y(a):String(a);n=n.trimRight(),o=i&&n?i(a):n}return(o??d)||se},ce=function(e,t,d){if(e)return t!=null?String(t):d!=null?String(d):!0},fe={opacity:1e-4,position:"absolute",bottom:0,left:0,width:"100%",height:"100%",top:"auto",right:"auto",margin:0,padding:0,border:0},me=function(e){var t=g.useState(!1),d=t[0],i=t[1],l=g.useRef(null),a=e.className,o=e.bem,n=o===void 0?"Selectbox":o,c=e.modifier,v=e.value,h=e.defaultValue,O=e.options,V=e.visibleFormat,C=e.ssr,E=e.onSelected,q=e.onChange,m=e.placeholder,y=e.readOnly,S=e.selectRef,r=S===void 0?l:S,f=M.__rest(e,["className","bem","modifier","value","defaultValue","options","visibleFormat","ssr","onSelected","onChange","placeholder","readOnly","selectRef"]),p=ie.useIsBrowserSide(C),_=g.useState(function(){return v??h}),R=_[0],P=_[1],N=ce(y,v,R),L=g.useMemo(function(){var u=O.map(function(b){return typeof b=="string"||typeof b=="number"?{value:b}:M.__assign({},b)});if(N!=null){var s=!1,I=typeof N=="string"?N:u[0].value;u.forEach(function(b){if(String(b.value)===I&&!s){s=!0;return}b.disabled=!0})}var Q=u.reduce(function(b,T,be){if(!T.group)return b.push(T),b;var x=b[b.length-1],D=x&&"title"in x?x:void 0;return D&&D.title===T.group?D.options.push(T):b.push({title:T.group,options:[T]}),b},[]);return{optionsNorm:u,groupedOptions:Q}},[O,N]),F=L.optionsNorm,z=L.groupedOptions,J=g.useMemo(function(){return de(O,R,m,V)},[R,O,m,V]),j=m!=null;g.useEffect(function(){var u,s;if(v==null){r.current&&P(r.current.value);return}if(v===""&&j){P("");return}if(F.find(function(I){return I.value===v})){P(v);return}if(j){P("");return}P((s=(u=F[0])===null||u===void 0?void 0:u.value)!==null&&s!==void 0?s:"")},[v,F,j]);var K=p?void 0:n?U(n,c,a):a,A=function(u,s){return g.createElement("option",{key:s,value:u.value!=null?u.value:"",disabled:u.disabled},Y(u).trimRight())},B=g.createElement("select",M.__assign({ref:r,className:K},f,{onFocus:function(u){var s;(s=e.onFocus)===null||s===void 0||s.call(e,u),i(!0)},onBlur:function(u){var s;(s=e.onBlur)===null||s===void 0||s.call(e,u),i(!1)},value:R,style:p&&fe,"data-fancy":p&&"",onChange:function(u){var s=u.currentTarget.selectedIndex-(m!=null?1:0);P(F[s].value),q&&q(u),E&&E(F[s].value,O[s])}}),m!=null&&g.createElement("option",{value:"",disabled:e.placeholderDisabled},m),z.map(function(u,s){return"title"in u?g.createElement("optgroup",{label:u.title,key:s},u.options.map(A)):A(u,s)}));return p?g.createElement("span",{className:U(n,c,a)+ue(n,[d&&"focused",e.disabled&&"disabled"]),style:{position:"relative"}},g.createElement("span",{className:U(n+"__value",!R&&R!==0&&"empty")},J),B):B},ve=me;const pe=X(ve),ye=e=>{const t=typeof e=="object"?e.value:e;return typeof t=="number"?String(t):t},H=e=>{const{onChange:t,fieldWrapperProps:d,...i}=ee(e),{value:l,defaultValue:a,placeholder:o,options:n}=i,c=w.useRef(null),v=i.selectRef||c,h=()=>l??a??ye(n[0]),[O,V]=w.useState(()=>!!h()),[C,E]=w.useState(()=>!h()&&!o);w.useEffect(()=>{setTimeout(()=>{var y;const m=v.current;m&&(V(!!m.value),E(!((y=m.selectedOptions[0])!=null&&y.text)))},0)},[v,l,a,n]);const q=m=>{var S;const y=m.currentTarget;V(!!y.value),E(!((S=y.selectedOptions[0])!=null&&S.text)),t&&t(m)};return k.jsx(te,{extraClassName:"Selectbox",empty:C,filled:O,...d,renderInput:(m,y,S)=>k.jsx(pe,{bem:m.input,ssr:e.ssr,onChange:q,...y,...S(i),selectRef:v})})};try{H.displayName="Selectbox",H.__docgenInfo={description:"",displayName:"Selectbox",props:{className:{defaultValue:null,description:`Container className - alongside "FormField"
Class-name for the <span> wrapper around the <select>`,name:"className",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string | Element"}},assistText:{defaultValue:null,description:"",name:"assistText",required:!1,type:{name:"string | Element"}},hideLabel:{defaultValue:null,description:"",name:"hideLabel",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"Disables all options except the currently selected one.",name:"readOnly",required:!1,type:{name:"boolean"}},invalid:{defaultValue:null,description:"",name:"invalid",required:!1,type:{name:"boolean"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string | Element"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},reqText:{defaultValue:null,description:`Hidden label prefix text to indicate that the field is required.

If your field is required but should not say so in its label
then set this prop to \`false\`

Default: \`"Þarf að fylla út"\``,name:"reqText",required:!1,type:{name:"string | false"}},id:{defaultValue:null,description:'Optional pre-determinted id="" for the __input',name:"id",required:!1,type:{name:"string"}},wrapperRef:{defaultValue:null,description:"@deprecated Use `*Props.wrapperProps.ref` instead (Will be removed in v0.11)\n\nRef object pointing to the outermost `.FormField` element",name:"wrapperRef",required:!1,type:{name:"RefObject<HTMLElement>"}},wrapperProps:{defaultValue:null,description:`Custom HTML attributes for the component's wrapper element.

Note, however, that some props may be intentionally
excluded from the list.

__WARNING:__
In some cases props added this way can break the component, og hurt its
accessibility.  Also, some props may get ignored, or over-ridden by the
component. User discretion is advised.`,name:"wrapperProps",required:!1,type:{name:"HTMLProps<null, never>"}},ssr:{defaultValue:null,description:`Indicates whether server-side rendering is supported or not.

The \`ssr-only\` value is useful for cases where you need
to demo the server-rendered version in a browser.`,name:"ssr",required:!1,type:{name:'boolean | "ssr-only"'}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string | number"}},placeholder:{defaultValue:null,description:`Generates a <option value="" /> at the start of the select's option list`,name:"placeholder",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | number"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"readonly O[]"}},placeholderDisabled:{defaultValue:null,description:"",name:"placeholderDisabled",required:!1,type:{name:"boolean"}},onSelected:{defaultValue:null,description:"Sugar alternative to `onChange`.\n\nIf placeholder option was selected, then `value === undefined`",name:"onSelected",required:!1,type:{name:'((value: O extends SelectboxOption<string | number> ? O["value"] : O, option: O) => void)'}},visibleFormat:{defaultValue:null,description:`Custom visual label formatter.

NOTE: The formatter is only called for non-empty labels
in order to make a \`<Selectbox/>\`'s "visibly empty" status more predictably
inferrable by reading \`selectRef.current?.selectedOptions[0].textContent\``,name:"visibleFormat",required:!1,type:{name:"((selected: O) => NonNullable<ReactNode>)"}},selectRef:{defaultValue:null,description:"Ref object that points to the native <select/> element",name:"selectRef",required:!1,type:{name:"RefObject<HTMLSelectElement>"}},small:{defaultValue:null,description:"",name:"small",required:!1,type:{name:"boolean"}}}}}catch{}export{H as S};
//# sourceMappingURL=Selectbox-2c89561d.js.map