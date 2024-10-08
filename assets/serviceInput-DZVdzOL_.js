import{r,j as a}from"./index-CZGoq2Fz.js";import{u as y,c as p,b as X,d as Y}from"./ThemeProvider-DnwVL5-F.js";import{a as j,b as Z,F as z,P as I}from"./SubmitButton-5wFtTY3e.js";const P=["as","disabled"];function ee(e,t){if(e==null)return{};var s={};for(var o in e)if({}.hasOwnProperty.call(e,o)){if(t.indexOf(o)>=0)continue;s[o]=e[o]}return s}function te(e){return!e||e.trim()==="#"}function O({tagName:e,disabled:t,href:s,target:o,rel:n,role:l,onClick:c,tabIndex:u=0,type:d}){e||(s!=null||o!=null||n!=null?e="a":e="button");const i={tagName:e};if(e==="button")return[{type:d||"button",disabled:t},i];const f=m=>{if((t||e==="a"&&te(s))&&m.preventDefault(),t){m.stopPropagation();return}c==null||c(m)},h=m=>{m.key===" "&&(m.preventDefault(),f(m))};return e==="a"&&(s||(s="#"),t&&(s=void 0)),[{role:l??"button",disabled:void 0,tabIndex:t?void 0:u,href:s,target:e==="a"?o:void 0,"aria-disabled":t||void 0,rel:e==="a"?n:void 0,onClick:f,onKeyDown:h},i]}const se=r.forwardRef((e,t)=>{let{as:s,disabled:o}=e,n=ee(e,P);const[l,{tagName:c}]=O(Object.assign({tagName:s,disabled:o},n));return a.jsx(c,Object.assign({},n,l,{ref:t}))});se.displayName="Button";const R=r.forwardRef(({as:e,bsPrefix:t,variant:s="primary",size:o,active:n=!1,disabled:l=!1,className:c,...u},d)=>{const i=y(t,"btn"),[f,{tagName:h}]=O({tagName:e,disabled:l,...u}),m=h;return a.jsx(m,{...f,...u,ref:d,disabled:l,className:p(c,i,n&&"active",s&&`${i}-${s}`,o&&`${i}-${o}`,u.href&&l&&"disabled")})});R.displayName="Button";function oe(e,t){return r.Children.toArray(e).some(s=>r.isValidElement(s)&&s.type===t)}function ne({as:e,bsPrefix:t,className:s,...o}){t=y(t,"col");const n=X(),l=Y(),c=[],u=[];return n.forEach(d=>{const i=o[d];delete o[d];let f,h,m;typeof i=="object"&&i!=null?{span:f,offset:h,order:m}=i:f=i;const x=d!==l?`-${d}`:"";f&&c.push(f===!0?`${t}${x}`:`${t}${x}-${f}`),m!=null&&u.push(`order${x}-${m}`),h!=null&&u.push(`offset${x}-${h}`)}),[{...o,className:p(s,...c,...u)},{as:e,bsPrefix:t,spans:c}]}const T=r.forwardRef((e,t)=>{const[{className:s,...o},{as:n="div",bsPrefix:l,spans:c}]=ne(e);return a.jsx(n,{...o,ref:t,className:p(s,!c.length&&l)})});T.displayName="Col";const G=r.createContext(null);G.displayName="InputGroupContext";const C=r.forwardRef(({id:e,bsPrefix:t,className:s,type:o="checkbox",isValid:n=!1,isInvalid:l=!1,as:c="input",...u},d)=>{const{controlId:i}=r.useContext(j);return t=y(t,"form-check-input"),a.jsx(c,{...u,ref:d,type:o,id:e||i,className:p(s,t,n&&"is-valid",l&&"is-invalid")})});C.displayName="FormCheckInput";const N=r.forwardRef(({bsPrefix:e,className:t,htmlFor:s,...o},n)=>{const{controlId:l}=r.useContext(j);return e=y(e,"form-check-label"),a.jsx("label",{...o,ref:n,htmlFor:s||l,className:p(t,e)})});N.displayName="FormCheckLabel";const S=r.forwardRef(({id:e,bsPrefix:t,bsSwitchPrefix:s,inline:o=!1,reverse:n=!1,disabled:l=!1,isValid:c=!1,isInvalid:u=!1,feedbackTooltip:d=!1,feedback:i,feedbackType:f,className:h,style:m,title:x="",type:v="checkbox",label:w,children:g,as:W="input",...q},J)=>{t=y(t,"form-check"),s=y(s,"form-switch");const{controlId:B}=r.useContext(j),Q=r.useMemo(()=>({controlId:e||B}),[B,e]),L=!g&&w!=null&&w!==!1||oe(g,N),U=a.jsx(C,{...q,type:v==="switch"?"checkbox":v,ref:J,isValid:c,isInvalid:u,disabled:l,as:W});return a.jsx(j.Provider,{value:Q,children:a.jsx("div",{style:m,className:p(h,L&&t,o&&`${t}-inline`,n&&`${t}-reverse`,v==="switch"&&s),children:g||a.jsxs(a.Fragment,{children:[U,L&&a.jsx(N,{title:x,children:w}),i&&a.jsx(Z,{type:f,tooltip:d,children:i})]})})})});S.displayName="FormCheck";const F=Object.assign(S,{Input:C,Label:N}),E=r.forwardRef(({className:e,bsPrefix:t,as:s="div",...o},n)=>(t=y(t,"form-floating"),a.jsx(s,{ref:n,className:p(e,t),...o})));E.displayName="FormFloating";const k=r.forwardRef(({controlId:e,as:t="div",...s},o)=>{const n=r.useMemo(()=>({controlId:e}),[e]);return a.jsx(j.Provider,{value:n,children:a.jsx(t,{...s,ref:o})})});k.displayName="FormGroup";const D=r.forwardRef(({as:e="label",bsPrefix:t,column:s=!1,visuallyHidden:o=!1,className:n,htmlFor:l,...c},u)=>{const{controlId:d}=r.useContext(j);t=y(t,"form-label");let i="col-form-label";typeof s=="string"&&(i=`${i} ${i}-${s}`);const f=p(n,t,o&&"visually-hidden",s&&i);return l=l||d,s?a.jsx(T,{ref:u,as:"label",className:f,htmlFor:l,...c}):a.jsx(e,{ref:u,className:f,htmlFor:l,...c})});D.displayName="FormLabel";const M=r.forwardRef(({bsPrefix:e,className:t,id:s,...o},n)=>{const{controlId:l}=r.useContext(j);return e=y(e,"form-range"),a.jsx("input",{...o,type:"range",ref:n,className:p(t,e),id:s||l})});M.displayName="FormRange";const V=r.forwardRef(({bsPrefix:e,size:t,htmlSize:s,className:o,isValid:n=!1,isInvalid:l=!1,id:c,...u},d)=>{const{controlId:i}=r.useContext(j);return e=y(e,"form-select"),a.jsx("select",{...u,size:s,ref:d,className:p(o,e,t&&`${e}-${t}`,n&&"is-valid",l&&"is-invalid"),id:c||i})});V.displayName="FormSelect";const K=r.forwardRef(({bsPrefix:e,className:t,as:s="small",muted:o,...n},l)=>(e=y(e,"form-text"),a.jsx(s,{...n,ref:l,className:p(t,e,o&&"text-muted")})));K.displayName="FormText";const _=r.forwardRef((e,t)=>a.jsx(F,{...e,ref:t,type:"switch"}));_.displayName="Switch";const ae=Object.assign(_,{Input:F.Input,Label:F.Label}),A=r.forwardRef(({bsPrefix:e,className:t,children:s,controlId:o,label:n,...l},c)=>(e=y(e,"form-floating"),a.jsxs(k,{ref:c,className:p(t,e),controlId:o,...l,children:[s,a.jsx("label",{htmlFor:o,children:n})]})));A.displayName="FloatingLabel";const le={_ref:I.any,validated:I.bool,as:I.elementType},b=r.forwardRef(({className:e,validated:t,as:s="form",...o},n)=>a.jsx(s,{...o,ref:n,className:p(e,t&&"was-validated")}));b.displayName="Form";b.propTypes=le;const re=Object.assign(b,{Group:k,Control:z,Floating:E,Check:F,Switch:ae,Label:D,Text:K,Range:M,Select:V,FloatingLabel:A}),$=r.forwardRef(({className:e,bsPrefix:t,as:s="span",...o},n)=>(t=y(t,"input-group-text"),a.jsx(s,{ref:n,className:p(e,t),...o})));$.displayName="InputGroupText";const ce=e=>a.jsx($,{children:a.jsx(C,{type:"checkbox",...e})}),ie=e=>a.jsx($,{children:a.jsx(C,{type:"radio",...e})}),H=r.forwardRef(({bsPrefix:e,size:t,hasValidation:s,className:o,as:n="div",...l},c)=>{e=y(e,"input-group");const u=r.useMemo(()=>({}),[]);return a.jsx(G.Provider,{value:u,children:a.jsx(n,{ref:c,...l,className:p(o,e,t&&`${e}-${t}`,s&&"has-validation")})})});H.displayName="InputGroup";const ue=Object.assign(H,{Text:$,Radio:ie,Checkbox:ce}),pe=e=>{const{editable:t=!0,leftIcon:s=null,rightIcon:o=null,leftIconPress:n=()=>{},rightIconPress:l=()=>{},className:c="",value:u="",onChange:d=()=>{},style:i}=e;r.useState(!1);const f=r.useRef(null);return r.useEffect(()=>{},[e.id]),a.jsx("div",{children:a.jsxs(ue,{className:`${c}`,style:e.style,children:[s&&a.jsxs(R,{variant:"outline-secondary",onClick:n,children:[a.jsx("i",{className:`bi bi-${s}`})," "]}),a.jsx(re.Control,{...e,value:u,onChange:h=>d(h.target.value),ref:f,disabled:!t,readOnly:e.readOnly,style:{backgroundColor:e.readOnly?"#B7B5B699":"#fff",...i}}),o&&a.jsx(R,{variant:"outline-secondary",onClick:l,children:a.jsx("i",{className:`bi bi-${o}`})})]})})};export{pe as S};
