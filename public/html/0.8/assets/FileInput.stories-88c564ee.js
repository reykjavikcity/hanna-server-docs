import{j as g}from"./jsx-runtime-f961835c.js";import{r as f,R as ar}from"./index-f80c8c95.js";import{m as Ie}from"./classUtils-ef6e60eb.js";import{D as Se}from"./i18n-18e56484.js";import{P as m}from"./index-c89a1915.js";import{u as or}from"./getScrollbarWidth-70c1e033.js";import{g as lr,F as sr}from"./FormField-d640972f.js";import{f as ur}from"./knobs-764132b4.js";import"./getSVGtext-8f35f9ab.js";import"./env-5a2a565d.js";import"./browserSide-4379edd8.js";import"./_Link-b7c9c4c9.js";import"./cssutils-d90b972e.js";import"./assets-ca39b462.js";import"./themes-56ee0168.js";function K(e,r,n,t){function a(i){return i instanceof n?i:new n(function(l){l(i)})}return new(n||(n=Promise))(function(i,l){function u(v){try{s(t.next(v))}catch(y){l(y)}}function h(v){try{s(t.throw(v))}catch(y){l(y)}}function s(v){v.done?i(v.value):a(v.value).then(u,h)}s((t=t.apply(e,r||[])).next())})}function $(e,r){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},t,a,i,l;return l={next:u(0),throw:u(1),return:u(2)},typeof Symbol=="function"&&(l[Symbol.iterator]=function(){return this}),l;function u(s){return function(v){return h([s,v])}}function h(s){if(t)throw new TypeError("Generator is already executing.");for(;l&&(l=0,s[0]&&(n=0)),n;)try{if(t=1,a&&(i=s[0]&2?a.return:s[0]?a.throw||((i=a.return)&&i.call(a),0):a.next)&&!(i=i.call(a,s[1])).done)return i;switch(a=0,i&&(s=[s[0]&2,i.value]),s[0]){case 0:case 1:i=s;break;case 4:return n.label++,{value:s[1],done:!1};case 5:n.label++,a=s[1],s=[0];continue;case 7:s=n.ops.pop(),n.trys.pop();continue;default:if(i=n.trys,!(i=i.length>0&&i[i.length-1])&&(s[0]===6||s[0]===2)){n=0;continue}if(s[0]===3&&(!i||s[1]>i[0]&&s[1]<i[3])){n.label=s[1];break}if(s[0]===6&&n.label<i[1]){n.label=i[1],i=s;break}if(i&&n.label<i[2]){n.label=i[2],n.ops.push(s);break}i[2]&&n.ops.pop(),n.trys.pop();continue}s=r.call(e,n)}catch(v){s=[6,v],a=0}finally{t=i=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}}function cr(e,r){var n=typeof Symbol=="function"&&e[Symbol.iterator];if(!n)return e;var t=n.call(e),a,i=[],l;try{for(;(r===void 0||r-- >0)&&!(a=t.next()).done;)i.push(a.value)}catch(u){l={error:u}}finally{try{a&&!a.done&&(n=t.return)&&n.call(t)}finally{if(l)throw l.error}}return i}function fr(){for(var e=[],r=0;r<arguments.length;r++)e=e.concat(cr(arguments[r]));return e}var pr=new Map([["avi","video/avi"],["gif","image/gif"],["ico","image/x-icon"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["mkv","video/x-matroska"],["mov","video/quicktime"],["mp4","video/mp4"],["pdf","application/pdf"],["png","image/png"],["zip","application/zip"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]]);function oe(e,r){var n=dr(e);if(typeof n.path!="string"){var t=e.webkitRelativePath;Object.defineProperty(n,"path",{value:typeof r=="string"?r:typeof t=="string"&&t.length>0?t:e.name,writable:!1,configurable:!1,enumerable:!0})}return n}function dr(e){var r=e.name,n=r&&r.lastIndexOf(".")!==-1;if(n&&!e.type){var t=r.split(".").pop().toLowerCase(),a=pr.get(t);a&&Object.defineProperty(e,"type",{value:a,writable:!1,configurable:!1,enumerable:!0})}return e}var mr=[".DS_Store","Thumbs.db"];function gr(e){return K(this,void 0,void 0,function(){return $(this,function(r){return[2,vr(e)&&e.dataTransfer?br(e.dataTransfer,e.type):yr(e)]})})}function vr(e){return!!e.dataTransfer}function yr(e){var r=hr(e.target)?e.target.files?ce(e.target.files):[]:[];return r.map(function(n){return oe(n)})}function hr(e){return e!==null}function br(e,r){return K(this,void 0,void 0,function(){var n,t;return $(this,function(a){switch(a.label){case 0:return e.items?(n=ce(e.items).filter(function(i){return i.kind==="file"}),r!=="drop"?[2,n]:[4,Promise.all(n.map(Fr))]):[3,2];case 1:return t=a.sent(),[2,Te(Ke(t))];case 2:return[2,Te(ce(e.files).map(function(i){return oe(i)}))]}})})}function Te(e){return e.filter(function(r){return mr.indexOf(r.name)===-1})}function ce(e){for(var r=[],n=0;n<e.length;n++){var t=e[n];r.push(t)}return r}function Fr(e){if(typeof e.webkitGetAsEntry!="function")return Ce(e);var r=e.webkitGetAsEntry();return r&&r.isDirectory?$e(r):Ce(e)}function Ke(e){return e.reduce(function(r,n){return fr(r,Array.isArray(n)?Ke(n):[n])},[])}function Ce(e){var r=e.getAsFile();if(!r)return Promise.reject(e+" is not a File");var n=oe(r);return Promise.resolve(n)}function wr(e){return K(this,void 0,void 0,function(){return $(this,function(r){return[2,e.isDirectory?$e(e):Dr(e)]})})}function $e(e){var r=e.createReader();return new Promise(function(n,t){var a=[];function i(){var l=this;r.readEntries(function(u){return K(l,void 0,void 0,function(){var h,s,v;return $(this,function(y){switch(y.label){case 0:if(u.length)return[3,5];y.label=1;case 1:return y.trys.push([1,3,,4]),[4,Promise.all(a)];case 2:return h=y.sent(),n(h),[3,4];case 3:return s=y.sent(),t(s),[3,4];case 4:return[3,6];case 5:v=Promise.all(u.map(wr)),a.push(v),i(),y.label=6;case 6:return[2]}})})},function(u){t(u)})}i()})}function Dr(e){return K(this,void 0,void 0,function(){return $(this,function(r){return[2,new Promise(function(n,t){e.file(function(a){var i=oe(a,e.fullPath);n(i)},function(a){t(a)})})]})})}var _r=function(e,r){if(e&&r){var n=Array.isArray(r)?r:r.split(","),t=e.name||"",a=(e.type||"").toLowerCase(),i=a.replace(/\/.*$/,"");return n.some(function(l){var u=l.trim().toLowerCase();return u.charAt(0)==="."?t.toLowerCase().endsWith(u):u.endsWith("/*")?i===u.replace(/\/.*$/,""):a===u})}return!0};function He(e,r){return e.type==="application/x-moz-file"||_r(e,r)}function We(e,r,n){if(M(e.size)){if(M(r)&&M(n))return e.size>=r&&e.size<=n;if(M(r))return e.size>=r;if(M(n))return e.size<=n}return!0}function M(e){return e!=null}function jr(e){var r=e.files,n=e.accept,t=e.minSize,a=e.maxSize,i=e.multiple;return!i&&r.length>1?!1:r.every(function(l){return He(l,n)&&We(l,t,a)})}function ie(e){return typeof e.isPropagationStopped=="function"?e.isPropagationStopped():typeof e.cancelBubble<"u"?e.cancelBubble:!1}function re(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,function(r){return r==="Files"||r==="application/x-moz-file"}):!!e.target&&!!e.target.files}function Ae(e){e.preventDefault()}function xr(e){return e.indexOf("MSIE")!==-1||e.indexOf("Trident/")!==-1}function Er(e){return e.indexOf("Edge/")!==-1}function Pr(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window.navigator.userAgent;return xr(e)||Er(e)}function x(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return function(t){for(var a=arguments.length,i=new Array(a>1?a-1:0),l=1;l<a;l++)i[l-1]=arguments[l];return r.some(function(u){return!ie(t)&&u&&u.apply(void 0,[t].concat(i)),ie(t)})}}function ze(e){return Sr(e)||Ir(e)||Or()}function Or(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function Ir(e){if(Symbol.iterator in Object(e)||Object.prototype.toString.call(e)==="[object Arguments]")return Array.from(e)}function Sr(e){if(Array.isArray(e)){for(var r=0,n=new Array(e.length);r<e.length;r++)n[r]=e[r];return n}}function Tr(e,r){return zr(e)||Ar(e,r)||Cr()}function Cr(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function Ar(e,r){if(Symbol.iterator in Object(e)||Object.prototype.toString.call(e)==="[object Arguments]"){var n=[],t=!0,a=!1,i=void 0;try{for(var l=e[Symbol.iterator](),u;!(t=(u=l.next()).done)&&(n.push(u.value),!(r&&n.length===r));t=!0);}catch(h){a=!0,i=h}finally{try{!t&&l.return!=null&&l.return()}finally{if(a)throw i}}return n}}function zr(e){if(Array.isArray(e))return e}function Le(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,t)}return n}function _(e){for(var r=1;r<arguments.length;r++){var n=arguments[r]!=null?arguments[r]:{};r%2?Le(n,!0).forEach(function(t){fe(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Le(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function fe(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function ae(e,r){if(e==null)return{};var n=Lr(e,r),t,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],!(r.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}function Lr(e,r){if(e==null)return{};var n={},t=Object.keys(e),a,i;for(i=0;i<t.length;i++)a=t[i],!(r.indexOf(a)>=0)&&(n[a]=e[a]);return n}var B=f.forwardRef(function(e,r){var n=e.children,t=ae(e,["children"]),a=Ue(t),i=a.open,l=ae(a,["open"]);return f.useImperativeHandle(r,function(){return{open:i}},[i]),ar.createElement(f.Fragment,null,n(_({},l,{open:i})))});B.displayName="Dropzone";B.propTypes={children:m.func,accept:m.oneOfType([m.string,m.arrayOf(m.string)]),multiple:m.bool,preventDropOnDocument:m.bool,noClick:m.bool,noKeyboard:m.bool,noDrag:m.bool,noDragEventsBubbling:m.bool,minSize:m.number,maxSize:m.number,disabled:m.bool,getFilesFromEvent:m.func,onFileDialogCancel:m.func,onDragEnter:m.func,onDragLeave:m.func,onDragOver:m.func,onDrop:m.func,onDropAccepted:m.func,onDropRejected:m.func};var Rr={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,draggedFiles:[],acceptedFiles:[],rejectedFiles:[]};function Ue(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=e.accept,n=e.disabled,t=n===void 0?!1:n,a=e.getFilesFromEvent,i=a===void 0?gr:a,l=e.maxSize,u=l===void 0?1/0:l,h=e.minSize,s=h===void 0?0:h,v=e.multiple,y=v===void 0?!0:v,L=e.onDragEnter,R=e.onDragLeave,T=e.onDragOver,C=e.onDrop,k=e.onDropAccepted,F=e.onDropRejected,w=e.onFileDialogCancel,H=e.preventDropOnDocument,I=H===void 0?!0:H,W=e.noClick,U=W===void 0?!1:W,G=e.noKeyboard,A=G===void 0?!1:G,Y=e.noDrag,J=Y===void 0?!1:Y,q=e.noDragEventsBubbling,j=q===void 0?!1:q,p=f.useRef(null),d=f.useRef(null),V=f.useReducer(kr,Rr),N=Tr(V,2),P=N[0],E=N[1],Ye=P.isFocused,ve=P.isFileDialogActive,ye=P.draggedFiles,Q=f.useCallback(function(){d.current&&(E({type:"openDialog"}),d.current.value=null,d.current.click())},[E]),he=function(){ve&&setTimeout(function(){if(d.current){var c=d.current.files;c.length||(E({type:"closeDialog"}),typeof w=="function"&&w())}},300)};f.useEffect(function(){return window.addEventListener("focus",he,!1),function(){window.removeEventListener("focus",he,!1)}},[d,ve,w]);var be=f.useCallback(function(o){!p.current||!p.current.isEqualNode(o.target)||(o.keyCode===32||o.keyCode===13)&&(o.preventDefault(),Q())},[p,d]),Fe=f.useCallback(function(){E({type:"focus"})},[]),we=f.useCallback(function(){E({type:"blur"})},[]),De=f.useCallback(function(){U||(Pr()?setTimeout(Q,0):Q())},[d,U]),S=f.useRef([]),_e=function(c){p.current&&p.current.contains(c.target)||(c.preventDefault(),S.current=[])};f.useEffect(function(){return I&&(document.addEventListener("dragover",Ae,!1),document.addEventListener("drop",_e,!1)),function(){I&&(document.removeEventListener("dragover",Ae),document.removeEventListener("drop",_e))}},[p,I]);var je=f.useCallback(function(o){o.preventDefault(),o.persist(),ee(o),S.current.indexOf(o.target)===-1&&(S.current=[].concat(ze(S.current),[o.target])),re(o)&&Promise.resolve(i(o)).then(function(c){ie(o)&&!j||(E({draggedFiles:c,isDragActive:!0,type:"setDraggedFiles"}),L&&L(o))})},[i,L,j]),xe=f.useCallback(function(o){if(o.preventDefault(),o.persist(),ee(o),o.dataTransfer)try{o.dataTransfer.dropEffect="copy"}catch{}return re(o)&&T&&T(o),!1},[T,j]),Ee=f.useCallback(function(o){o.preventDefault(),o.persist(),ee(o);var c=S.current.filter(function(b){return b!==o.target&&p.current&&p.current.contains(b)});S.current=c,!(c.length>0)&&(E({isDragActive:!1,type:"setDraggedFiles",draggedFiles:[]}),re(o)&&R&&R(o))},[p,R,j]),X=f.useCallback(function(o){o.preventDefault(),o.persist(),ee(o),S.current=[],re(o)&&Promise.resolve(i(o)).then(function(c){if(!(ie(o)&&!j)){var b=[],D=[];c.forEach(function(O){He(O,r)&&We(O,s,u)?b.push(O):D.push(O)}),!y&&b.length>1&&D.push.apply(D,ze(b.splice(0))),E({acceptedFiles:b,rejectedFiles:D,type:"setFiles"}),C&&C(b,D,o),D.length>0&&F&&F(D,o),b.length>0&&k&&k(b,o)}}),E({type:"reset"})},[y,r,s,u,i,C,k,F,j]),z=function(c){return t?null:c},le=function(c){return A?null:z(c)},Z=function(c){return J?null:z(c)},ee=function(c){j&&c.stopPropagation()},Je=f.useMemo(function(){return function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},c=o.refKey,b=c===void 0?"ref":c,D=o.onKeyDown,O=o.onFocus,se=o.onBlur,ue=o.onClick,er=o.onDragEnter,rr=o.onDragOver,nr=o.onDragLeave,tr=o.onDrop,ir=ae(o,["refKey","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"]);return _(fe({onKeyDown:le(x(D,be)),onFocus:le(x(O,Fe)),onBlur:le(x(se,we)),onClick:z(x(ue,De)),onDragEnter:Z(x(er,je)),onDragOver:Z(x(rr,xe)),onDragLeave:Z(x(nr,Ee)),onDrop:Z(x(tr,X))},b,p),!t&&!A?{tabIndex:0}:{},{},ir)}},[p,be,Fe,we,De,je,xe,Ee,X,A,J,t]),Qe=f.useCallback(function(o){o.stopPropagation()},[]),Xe=f.useMemo(function(){return function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},c=o.refKey,b=c===void 0?"ref":c,D=o.onChange,O=o.onClick,se=ae(o,["refKey","onChange","onClick"]),ue=fe({accept:r,multiple:y,type:"file",style:{display:"none"},onChange:z(x(D,X)),onClick:z(x(O,Qe)),autoComplete:"off",tabIndex:-1},b,d);return _({},ue,{},se)}},[d,r,y,X,t]),Pe=ye.length,Oe=Pe>0&&jr({files:ye,accept:r,minSize:s,maxSize:u,multiple:y}),Ze=Pe>0&&!Oe;return _({},P,{isDragAccept:Oe,isDragReject:Ze,isFocused:Ye&&!t,getRootProps:Je,getInputProps:Xe,rootRef:p,inputRef:d,open:z(Q)})}function kr(e,r){switch(r.type){case"focus":return _({},e,{isFocused:!0});case"blur":return _({},e,{isFocused:!1});case"openDialog":return _({},e,{isFileDialogActive:!0});case"closeDialog":return _({},e,{isFileDialogActive:!1});case"setDraggedFiles":var n=r.isDragActive,t=r.draggedFiles;return _({},e,{draggedFiles:t,isDragActive:n});case"setFiles":return _({},e,{acceptedFiles:r.acceptedFiles,rejectedFiles:r.rejectedFiles});case"reset":return _({},e,{isFileDialogActive:!1,isDragActive:!1,draggedFiles:[],acceptedFiles:[],rejectedFiles:[]});default:return e}}const qr=Object.freeze(Object.defineProperty({__proto__:null,default:B,useDropzone:Ue},Symbol.toStringTag,{value:"Module"})),Ge="default"in B?B:qr;Ge.default;const Vr=Ge.useDropzone,Re=e=>{"preview"in e||(e.preview=e.type.includes("image/")?URL.createObjectURL(e):void 0)},ke=e=>{e.preview&&URL.revokeObjectURL(e.preview),delete e.preview},pe=1024,Nr=970/pe,qe=["Bytes","KB","MB","GB","TB","PB"],Mr={is:",",en:".",pl:","},Br=(e,r="is",n=2)=>{if(e===0)return"0 Bytes";const t=Math.min(Math.floor(Math.log(Math.abs(e)/Nr)/Math.log(pe)),qe.length-1),a=e/Math.pow(pe,t);return`${(parseFloat(a.toFixed(n))+"").replace(".",Mr[r]||1.1.toLocaleString(r)[1])} ${qe[t]}`},Kr=(e,r,n)=>{const t=n?e:[],a=[];return n||e.forEach(i=>{r.find(({name:l})=>l===i.name)?t.push(i):a.push(i)}),{fileList:a.concat(r),diff:t.length?{added:r,deleted:t}:{added:r}}},de=e=>{const{files:r,showFileSize:n,showImagePreviews:t,removeFileText:a,removeFile:i,formatBytes:l}=e;return r.length?g.jsx("ul",{className:"FileInput__filelist",children:r.map(u=>g.jsxs("li",{className:"FileInput__file",children:[g.jsx("button",{className:"FileInput__file-remove",type:"button",onClick:()=>i(u),"aria-label":`${a} ${u.name}`,children:a}),g.jsxs("span",{className:"FileInput__fileinfo",children:[t&&u.preview&&g.jsxs(g.Fragment,{children:[g.jsx("span",{className:"FileInput__preview",children:g.jsx("img",{src:u.preview,alt:""})})," "]}),g.jsx("span",{className:"FileInput__filename",children:u.name}),n&&g.jsxs("small",{className:"FileInput__filesize",children:[" - (",l(u.size),")"]})]})]},u.name))}):null};try{de.displayName="DefaultFileList",de.__docgenInfo={description:"",displayName:"DefaultFileList",props:{files:{defaultValue:null,description:"",name:"files",required:!0,type:{name:"CustomFile[]"}},showFileSize:{defaultValue:null,description:"",name:"showFileSize",required:!1,type:{name:"boolean"}},showImagePreviews:{defaultValue:null,description:"",name:"showImagePreviews",required:!1,type:{name:"boolean"}},removeFileText:{defaultValue:null,description:"",name:"removeFileText",required:!0,type:{name:"string"}},removeFile:{defaultValue:null,description:"",name:"removeFile",required:!0,type:{name:"(file: string | File) => void"}},formatBytes:{defaultValue:null,description:"",name:"formatBytes",required:!0,type:{name:"(bytes: number, lang?: string, decimals?: number) => string"}}}}}catch{}const Ve={is:"Fjarlægja",en:"Remove",pl:"Usuń"},$r=e=>{window.alert(`Error:
`+e.map(r=>r.name).join(", "))},ne=e=>{const r=new DataTransfer;return e.forEach(n=>{r.items.add(n)}),r.files},me=e=>{var q,j;const r=e.lang||Se,{dropzoneProps:n,multiple:t=((q=e.dropzoneProps)==null?void 0:q.multiple)??!0,accept:a=(j=e.dropzoneProps)==null?void 0:j.accept,dropzoneText:i,removeFileText:l=Ve[r]||Ve[Se],FileList:u=de,onFilesUpdated:h=()=>{},onFilesRejected:s,showFileSize:v,showImagePreviews:y,value:L=[],fieldWrapperProps:R,...T}=lr(e),C=or(e.id),k=f.useRef(null),F=f.useRef(null),w=L,[H,I]=f.useState(!1),{getRootProps:W,getInputProps:U,isDragReject:G,inputRef:A}=Vr({onDrop:p=>{p=p.map(d=>(Re(d),d)),J(p),I(!1)},onDropRejected:s||$r,onDragEnter:()=>{},onDragLeave:()=>{I(!1)},onDragOver:()=>{I(!0)},multiple:t,accept:a});w.forEach(Re),f.useEffect(()=>(F.current&&(F.current.files=ne(w)),()=>{w.forEach(ke)}),[w]);const Y=p=>{const d=[],V=typeof p!="string"?p.name:p,N=w.filter(P=>P.name!==V?!0:(d.push(P),ke(P),!1));F.current&&(F.current.files=ne(N)),h(N,{deleted:d})},J=p=>{const{fileList:d,diff:V}=Kr(w,p,!t);F.current&&(F.current.files=ne(d)),A.current&&(A.current.files=ne([])),h(d,V)};return g.jsx(sr,{extraClassName:Ie("FileInput",[t&&"multi"]),...R,id:C+"-fake",LabelTag:"h4",renderInput:(p,d)=>g.jsxs("div",{className:p.control,ref:k,children:[T.name?g.jsx("input",{className:"FileInput__input",name:T.name,id:C,ref:F,type:"file",style:{display:"none"},multiple:t||void 0,required:d.required}):null,g.jsx("input",{className:"FileInput__input--fake",...U(),tabIndex:void 0,style:void 0,multiple:t||void 0,...d,required:void 0})," ",g.jsx("div",{className:Ie("FileInput__dropzone",[H&&"highlight"]),...W({isDragReject:G}),tabIndex:void 0,children:g.jsx("p",{className:"FileInput__droptext",children:i})}),u&&g.jsx(u,{files:w,showFileSize:v,showImagePreviews:y,removeFileText:l,removeFile:Y,formatBytes:Br})]})})};try{me.displayName="FileInput",me.__docgenInfo={description:"",displayName:"FileInput",props:{className:{defaultValue:null,description:'Container className - alongside "FormField"',name:"className",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string | Element"}},assistText:{defaultValue:null,description:"",name:"assistText",required:!1,type:{name:"string | Element"}},hideLabel:{defaultValue:null,description:"",name:"hideLabel",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}},invalid:{defaultValue:null,description:"",name:"invalid",required:!1,type:{name:"boolean"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string | Element"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},reqText:{defaultValue:null,description:`Hidden label prefix text to indicate that the field is required.

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
to demo the server-rendered version in a browser.`,name:"ssr",required:!1,type:{name:"SSRSupport"}},multiple:{defaultValue:null,description:"Flags if the input should accept multiple, or just a single file at a time.\n\nDefault: `true`",name:"multiple",required:!1,type:{name:"boolean"}},accept:{defaultValue:null,description:`Accepted file mime type(s).

Default: no restrictions.`,name:"accept",required:!1,type:{name:"string | string[]"}},dropzoneText:{defaultValue:null,description:"",name:"dropzoneText",required:!0,type:{name:"string | Element"}},removeFileText:{defaultValue:null,description:"",name:"removeFileText",required:!1,type:{name:"string"}},lang:{defaultValue:null,description:"",name:"lang",required:!1,type:{name:"enum",value:[{value:'"is"'},{value:'"en"'},{value:'"pl"'}]}},showFileSize:{defaultValue:null,description:"",name:"showFileSize",required:!1,type:{name:"boolean"}},showImagePreviews:{defaultValue:null,description:"",name:"showImagePreviews",required:!1,type:{name:"boolean"}},FileList:{defaultValue:null,description:"",name:"FileList",required:!1,type:{name:"false | ((props: FileListProps) => Element | null)"}},onFilesUpdated:{defaultValue:null,description:"",name:"onFilesUpdated",required:!1,type:{name:"((files: File[], diff: { deleted?: File[]; added?: File[]; }) => void) | undefined"}},onFilesRejected:{defaultValue:null,description:"",name:"onFilesRejected",required:!1,type:{name:"((rejectedFiles: File[]) => void)"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"readonly File[]"}},dropzoneProps:{defaultValue:null,description:"@deprecated Use props `multiple`, `accept` instead  (Will be removed in v0.11)",name:"dropzoneProps",required:!1,type:{name:"{ accept?: string; multiple?: boolean; } | undefined"}}}}}catch{}const ge=ur({hideLabel:!0,small:!1,readOnly:!1}),sn={title:"Forms/FileInput",parameters:{viewport:{defaultViewport:"responsive"}}},Hr=e=>{const{showFileSize:r,showImagePreviews:n,allowMultipleFiles:t,allowedFileTypes:a}=e,i=ge.getProps(e),[l,u]=f.useState([]);return g.jsx(me,{...i,label:"Skrá skjöl",removeFileText:"Fjarlægja skjal",showFileSize:r,showImagePreviews:n,name:"files",value:l,onFilesUpdated:u,multiple:t,accept:a,dropzoneText:g.jsxs(g.Fragment,{children:["Dragðu gögn hingað eða ",g.jsx("strong",{children:"bættu"})," þeim við."]})})},te={render:e=>g.jsx(Hr,{...e}),argTypes:{...ge.argTypes,showFileSize:{name:"Show file size"},showImagePreviews:{name:"Show image previews"},allowMultipleFiles:{name:"Allow multiple files"},allowedFileTypes:{name:"Allowed file types",control:"text"}},args:{...ge.args,showFileSize:!1,showImagePreviews:!1,allowMultipleFiles:!0,allowedFileTypes:"image/*"}};var Ne,Me,Be;te.parameters={...te.parameters,docs:{...(Ne=te.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  render: args => <FileInputStory {...args} />,
  argTypes: {
    ...ffCtrls.argTypes,
    showFileSize: {
      name: 'Show file size'
    },
    showImagePreviews: {
      name: 'Show image previews'
    },
    allowMultipleFiles: {
      name: 'Allow multiple files'
    },
    allowedFileTypes: {
      name: 'Allowed file types',
      control: 'text'
    }
  },
  args: {
    ...ffCtrls.args,
    showFileSize: false,
    showImagePreviews: false,
    allowMultipleFiles: true,
    allowedFileTypes: 'image/*'
  }
}`,...(Be=(Me=te.parameters)==null?void 0:Me.docs)==null?void 0:Be.source}}};const un=["_FileInput"];export{te as _FileInput,un as __namedExportsOrder,sn as default};
//# sourceMappingURL=FileInput.stories-88c564ee.js.map