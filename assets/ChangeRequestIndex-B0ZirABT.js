import{r as l,j as e}from"./index-CZGoq2Fz.js";import g from"./ContactInfo-q6-Z2dhz.js";import y from"./TinInfo-sJRLHVIe.js";import{s as p,G as v,F as C,C as N,R as S,i as F,j as w,B as I,k,T as A,l as B,m as D,n as T,S as R,o as L,b as E,A as q}from"./ServiceIcons-jQbW_zZ6.js";/* empty css                                     */import{D as j}from"./DocumentPicker-BlnSCQrR.js";import{S as c}from"./serviceInput-DZVdzOL_.js";import{S as x}from"./SubmitButton-5wFtTY3e.js";import{S as u}from"./Selector-CMeRNiq0.js";import{a as h}from"./AllBankList-rHaLaLhR.js";import{s as b}from"./CommonStyles-ByKm9A77.js";import"./iconBase-WeuJrciy.js";import"./ThemeProvider-DnwVL5-F.js";import"./TransitionWrapper-CsIKzdet.js";function H(){const{serviceRequestsList:t,setServiceRequestsList:r}=p(),n={accountSubTitle:{fontFamily:"K2D-Regular",fontSize:"12px",fontWeight:"400"},accountButton:s=>({backgroundColor:s==="Pending"?"#ffd500":s==="Approved"?"##24834AF2":"#6c757d",borderRadius:"5px",padding:"2px 5px",marginRight:"10px",textAlign:"center"}),accountButtonText:{fontSize:"12px",color:"#000000"}};l.useEffect(()=>{(async()=>{let s=await v();console.log(s),r(s)})()},[]);const i=l.useMemo(()=>[{Header:"Request Type",accessor:"RequestType",align:"left"},{Header:"Date",accessor:"MakeDate",align:"center",cell:s=>e.jsx("span",{style:n.accountSubTitle,children:C(s)})},{Header:"Status",accessor:"CurrStatus",align:"right",cell:s=>e.jsx("div",{style:n.accountButton(s),children:s==="Pending"?e.jsx("span",{style:n.accountButtonText,children:"Pending"}):s==="waiting"?e.jsx("button",{className:"accountButtonText",children:"Confirm"}):e.jsx("span",{style:n.accountButtonText,children:s})})},{Header:"Updated Information",accessor:"UpdatedData",align:"full",collapsable:!0}],[t==null?void 0:t.ChangeReq]),d=l.useMemo(()=>t==null?void 0:t.ChangeReq,[t==null?void 0:t.ChangeReq]);return e.jsx("div",{style:{backgroundColor:"#F6F8FA",height:"100%",width:"100%"},children:e.jsxs(N,{style:{height:"70vh"},children:[e.jsx("div",{className:"d-flex justify-content-center w-100",style:{borderBottom:"1px solid #526D82BF"},children:e.jsx("p",{style:{fontSize:"20px",fontWeight:"600",color:"#000000"},children:"Ongoing Change Request"})}),d&&i&&e.jsx(S,{rows:d,columns:i})]})})}function P(){const[t,r]=l.useState(null),[n,i]=l.useState(!1);return e.jsx("div",{style:{backgroundColor:"#F6F8FA",height:"100%",width:"100%"},children:e.jsxs("div",{className:"container d-flex flex-column mx-auto pt-5",style:{minHeight:"100vh"},children:[e.jsx("label",{className:"serviceConsoleFormLabel mb-2",children:"Present Address"}),e.jsx(c,{value:"",rightIcon:"pencil-square",rightIconPress:()=>i(!n),style:{borderColor:"#526D82"}}),n&&e.jsxs(e.Fragment,{children:[e.jsx("label",{className:"serviceConsoleFormLabel my-2",children:"Enter New Present Address"}),e.jsx(c,{value:"",onChange:()=>{},style:{borderColor:"#526D82"}})]}),e.jsx("label",{className:"serviceConsoleFormLabel my-2",children:"Present Address"}),e.jsx(c,{value:"",style:{borderColor:"#526D82"},readOnly:!0}),e.jsx("label",{className:"serviceConsoleFormLabel my-2",children:"Utility File"}),e.jsx(j,{document:t,setDocument:r,label:"Attach Utility File"}),e.jsx("div",{className:"mt-auto",style:{marginBottom:"60px"},children:e.jsx(x,{label:"Submit"})})]})})}function M(){const[t,r]=l.useState(!1),[n,i]=l.useState(!1),[d,s]=l.useState(!1),[m,o]=l.useState(!1),[a,f]=l.useState(!1);return e.jsx("div",{style:{backgroundColor:"#F6F8FA",height:"100%",width:"100%"},children:e.jsxs("div",{className:"container d-flex flex-column mx-auto pt-5",style:{minHeight:"100vh"},children:[e.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-2",children:[e.jsx("label",{className:"serviceConsoleFormLabel",children:"Bank Name"}),e.jsx("i",{style:{cursor:"pointer"},className:"bi bi-pencil-square",onClick:()=>i(!n)})]}),e.jsx(c,{value:"",onChange:()=>{},style:{borderColor:"#526D82"}}),n&&e.jsxs(e.Fragment,{children:[e.jsx("label",{className:"serviceConsoleFormLabel my-2",children:"Bank Name"}),e.jsx(u,{label:"Client Bank",placeholder:"Select Bank",dropDownItems:h,className:`${b} w-100`,valueKey:"bankID",nameKey:"bankName",show:t,setShow:r})]}),e.jsxs("div",{className:"d-flex justify-content-between align-items-center my-2",children:[e.jsx("label",{className:"serviceConsoleFormLabel",children:"Branch Name"}),e.jsx("i",{style:{cursor:"pointer"},className:"bi bi-pencil-square",onClick:()=>s(!d)})]}),e.jsx(c,{value:"",onChange:()=>{},style:{borderColor:"#526D82"}}),d&&e.jsxs(e.Fragment,{children:[e.jsx("label",{className:"serviceConsoleFormLabel my-2",children:"Select Updated Branch"}),e.jsx(u,{label:"Client Bank",placeholder:"Select Branch",dropDownItems:h,className:`${b} w-100`,valueKey:"bankID",nameKey:"bankName",show:t,setShow:r})]}),e.jsxs("div",{className:"d-flex justify-content-between align-items-center my-2",children:[e.jsx("label",{className:"serviceConsoleFormLabel",children:"Routing No"}),e.jsx("i",{style:{cursor:"pointer"},className:"bi bi-pencil-square",onClick:()=>o(!m)})]}),e.jsx(c,{value:"",onChange:()=>{},style:{borderColor:"#526D82"}}),m&&e.jsxs(e.Fragment,{children:[e.jsx("label",{className:"serviceConsoleFormLabel my-2",children:"Enter New Routing No"}),e.jsx(c,{value:"",onChange:()=>{},style:{borderColor:"#526D82"}})]}),e.jsx("label",{className:"serviceConsoleFormLabel my-2",children:"Account No"}),e.jsx(c,{value:"09857948561",rightIcon:"pencil-square",rightIconPress:()=>f(!a),style:{borderColor:"#526D82"}}),a&&e.jsxs(e.Fragment,{children:[e.jsx("label",{className:"serviceConsoleFormLabel my-2",children:"Enter New Account No"}),e.jsx(c,{style:{borderColor:"#526D82"}})]}),e.jsx("div",{className:"mt-auto",style:{marginBottom:"60px"},children:e.jsx(x,{label:"Submit"})})]})})}function z(){const[t,r]=l.useState(null);return e.jsx("div",{style:{backgroundColor:"#F6F8FA",height:"100%",width:"100%"},children:e.jsxs("div",{className:"container d-flex flex-column mx-auto pt-5",style:{minHeight:"100vh"},children:[e.jsx("label",{className:"serviceConsoleFormLabel my-2",children:"Signature"}),e.jsx(j,{document:t,setDocument:r,label:"Attach Your Signature"}),e.jsx("div",{className:"mt-auto",style:{marginBottom:"60px"},children:e.jsx(x,{label:"Submit"})})]})})}function te(){const[t,r]=l.useState(0),n=l.useRef(null),i=[{key:"address-info",title:"Address",icon:e.jsx(F,{}),activeIcon:e.jsx(w,{}),content:()=>e.jsx(P,{})},{key:"bank-info",title:"Bank",icon:e.jsx(I,{}),activeIcon:e.jsx(k,{}),content:()=>e.jsx(M,{})},{key:"tin-info",title:"TIN",icon:e.jsx(A,{}),activeIcon:e.jsx(B,{}),content:()=>e.jsx(y,{})},{key:"contact-info",title:"Contact",icon:e.jsx(D,{}),activeIcon:e.jsx(T,{}),content:()=>e.jsx(g,{})},{key:"signature-info",title:"Signature",icon:e.jsx(R,{}),activeIcon:e.jsx(L,{}),content:()=>e.jsx(z,{})},{key:"history-info",title:"History",icon:e.jsx(E,{}),activeIcon:e.jsx(q,{}),content:()=>e.jsx(H,{})}],d=o=>{r(o),n.current&&n.current.scrollTo({left:o*window.innerWidth,behavior:"smooth"})},s=()=>{if(n.current){const o=n.current.scrollLeft,a=Math.round(o/window.innerWidth);r(a)}},m=(o,a)=>e.jsxs("button",{onClick:()=>d(a),className:`btn btn-white ${t===a?"text-danger":"text-muted"}`,style:{outline:"none",borderLeft:"none",borderRight:"none",borderBottom:"none",padding:"16px",borderTop:t===a?"2px solid #FF0008":"2px solid #FFF",backgroundColor:"transparent",cursor:"pointer",textAlign:"center",borderRadius:0,fontFamily:"k2d-bold",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"5px",fontSize:"10px"},children:[e.jsx("div",{children:t===a?o.activeIcon:o.icon}),e.jsx("text",{style:{fontSize:12},children:o.title})]},o.key);return e.jsxs("div",{className:"container-fluid d-flex flex-column vh-100 w-100 p-0",style:{flex:1},children:[e.jsx("div",{ref:n,className:"flex-grow-1 d-flex overflow-auto",style:{scrollSnapType:"x mandatory",width:"100%",overflowX:"scroll"},onScroll:s,children:i.map((o,a)=>e.jsx("div",{className:"flex-grow-1 d-flex justify-content-center mx-3",style:{minWidth:"100%",scrollSnapAlign:"start"},children:o.content()},o.key))}),e.jsx("div",{className:"d-flex justify-content-around bg-white position-fixed",style:{boxShadow:"0 4px 10px rgba(0, 0, 0, 0.3)",transition:"box-shadow 0.3s ease",width:"100%",left:0,right:0,bottom:0,overflowX:"auto"},children:i.map((o,a)=>m(o,a))})]})}export{te as default};
