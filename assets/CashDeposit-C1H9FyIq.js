import{r as o,j as e,S as m}from"./index-D-zwnoZQ.js";import{S as i,f as a,D as c,a as r,s as t,b as u}from"./ServiceTitle-DS-V774s.js";function b(){const s=[{bankID:123,bankName:"Dhaka Bank"},{bankID:134,bankName:"Brac Bank"},{bankID:172,bankName:"City Bank"}],[l,n]=o.useState(null);return e.jsxs("div",{className:"container-fluid d-flex flex-column justify-content-between vh-100 w-100 mx-auto mt-4",children:[e.jsxs("div",{className:"d-flex flex-column px-5 position-relative",style:{flexGrow:.5},children:[e.jsx(i,{label:"Cash Deposit"}),e.jsx("label",{className:`${a} mt-2`,style:{fontFamily:"K2d-Bold"},children:"Document"}),e.jsx(c,{document:l,setDocument:n,label:"Attach Bank Document"}),e.jsx("label",{className:`${a}`,style:{fontFamily:"K2d-Bold"},children:"Amount"}),e.jsx(r,{value:"",placeholder:"Enter Deposit Amount",onChange:()=>{},className:t,style:{borderColor:"#526D82",fontFamily:"k2d-regular"}}),e.jsx(u,{label:"Select Deposit Bank",dropDownItems:s,className:`${t} py-2`,nameKey:"bankName",valueKey:"bankID"})]}),e.jsx("div",{className:"flex-column px-5 my-2",style:{display:"flex",justifyContent:"center"},children:e.jsx(m,{label:"Submit"})})]})}export{b as default};
