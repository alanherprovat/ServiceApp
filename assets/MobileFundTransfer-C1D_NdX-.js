import{r as t,j as e}from"./index-CZGoq2Fz.js";import{S as s}from"./serviceInput-DZVdzOL_.js";import{s as l}from"./CommonStyles-ByKm9A77.js";import{S as a}from"./Selector-CMeRNiq0.js";import{D as d}from"./DocumentPicker-BlnSCQrR.js";import{S as u}from"./ServiceTitle-BfflHc7P.js";import{S as x}from"./SubmitButton-5wFtTY3e.js";import{B as h}from"./BackGround-BkdymwjL.js";import"./ThemeProvider-DnwVL5-F.js";/* empty css                                     */import"./TransitionWrapper-CsIKzdet.js";import"./iconBase-WeuJrciy.js";const o=[{walletID:213,walletName:"Bkash LTD."},{walletID:234,walletName:"Nagad"},{bankID:272,walletName:"Upay"}];function g(){const[m,r]=t.useState(null),[i,c]=t.useState(!1),[n,p]=t.useState(!1);return e.jsx(h,{children:e.jsxs("div",{className:"d-flex flex-column mt-4 w-100",children:[e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx(u,{label:"MFS"}),e.jsx("label",{className:"serviceConsoleFormLabel",children:"Document"}),e.jsx(d,{document:m,setDocument:r,label:"Attach Deposit Document"}),e.jsx("div",{className:"mt-2"}),e.jsx("label",{className:"serviceConsoleFormLabel",children:"Amount"}),e.jsx(s,{value:"",placeholder:"Deposit Amount",onChange:()=>{},className:l,style:{borderColor:"#526D82",fontFamily:"k2d-regular"}}),e.jsx("div",{className:"mt-2"}),e.jsx(a,{label:"Select Deposit wallet",placeholder:"Deposit Wallet ",dropDownItems:o,className:`${l} px-2`,nameKey:"walletName",valueKey:"walletID",show:i,setShow:c}),e.jsx("div",{className:"mt-2"}),e.jsx(a,{label:"Select Client Wallet",placeholder:"Client Wallet",dropDownItems:o,className:`${l} px-2`,nameKey:"walletName",valueKey:"walletID",show:n,setShow:p}),e.jsx("div",{className:"mt-2"}),e.jsx("label",{className:"serviceConsoleFormLabel",children:"Wallet No."}),e.jsx(s,{value:"",placeholder:"Mobile Number",onChange:()=>{},className:l,style:{borderColor:"#526D82",fontFamily:"k2d-regular"}})]}),e.jsx("div",{style:{position:"relative",bottom:"0",left:"0",right:"0",display:"flex",justifyContent:"center"},children:e.jsx(x,{label:"Submit"})})]})})}export{g as default};
