import{r as s,j as e,D as u,y as a,z as l,B as t,S as x}from"./index-CzUUUfa7.js";import{S as h}from"./ServiceTitle-IxwwEMlh.js";import{B as p}from"./BackGround-tGuDrY8w.js";const o=[{walletID:213,walletName:"Bkash LTD."},{walletID:234,walletName:"Nagad"},{bankID:272,walletName:"Upay"}];function N(){const[m,r]=s.useState(null),[c,i]=s.useState(!1),[n,d]=s.useState(!1);return e.jsx(p,{children:e.jsxs("div",{className:"d-flex flex-column mt-4 w-100",children:[e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx(h,{label:"MFS"}),e.jsx("label",{className:"serviceConsoleFormLabel",children:"Document"}),e.jsx(u,{document:m,setDocument:r,label:"Attach Deposit Document"}),e.jsx("div",{className:"mt-2"}),e.jsx("label",{className:"serviceConsoleFormLabel",children:"Amount"}),e.jsx(a,{value:"",placeholder:"Deposit Amount",onChange:()=>{},className:l,style:{borderColor:"#526D82",fontFamily:"k2d-regular"}}),e.jsx("div",{className:"mt-2"}),e.jsx(t,{label:"Select Deposit wallet",placeholder:"Deposit Wallet ",dropDownItems:o,className:`${l} px-2`,nameKey:"walletName",valueKey:"walletID",show:c,setShow:i}),e.jsx("div",{className:"mt-2"}),e.jsx(t,{label:"Select Client Wallet",placeholder:"Client Wallet",dropDownItems:o,className:`${l} px-2`,nameKey:"walletName",valueKey:"walletID",show:n,setShow:d}),e.jsx("div",{className:"mt-2"}),e.jsx("label",{className:"serviceConsoleFormLabel",children:"Wallet No."}),e.jsx(a,{value:"",placeholder:"Mobile Number",onChange:()=>{},className:l,style:{borderColor:"#526D82",fontFamily:"k2d-regular"}})]}),e.jsx("div",{style:{position:"relative",bottom:"0",left:"0",right:"0",display:"flex",justifyContent:"center"},children:e.jsx(x,{label:"Submit"})})]})})}export{N as default};
