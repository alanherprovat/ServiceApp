import React, { useState } from 'react'
import ServiceInput from '../../commonComponents/serviceInput'
import { formLabel, serviceTextField } from '../../../assets/styles/CommonStyles'
import Selector from '../../commonComponents/Selector'
import DocumentPicker from '../../commonComponents/DocumentPicker'
import ServiceTitle from '../../commonComponents/ServiceTitle'
import SubmitButton from '../../commonComponents/SubmitButton'
function CashDeposit() {
  const bankList=[
    {
      "bankID":123,
      "bankName":"Dhaka Bank"
    },
    {
      "bankID":134,
      "bankName":"Brac Bank"
    },
    {
      "bankID":172,
      "bankName":"City Bank"
    },
  ]
  const [document,setDocument] = useState(null);
  const [showDeposit,setShowDeposit] = useState(false)
  return (
    <div
    className="container-fluid d-flex flex-column justify-content-between vh-100 w-100 w-sm-25 mx-auto mt-4" // Bootstrap classes for centering and margin // Custom width style
    style={{ overflowY: "auto" }}
  >
   
    
    <div className="d-flex flex-column position-relative" style={{ flexGrow: 0.5 }}>
    <ServiceTitle label="Cash Deposit"/>
    <label className={`${formLabel} mt-2`} style={{fontFamily:"K2d-Bold"}}>Document</label>
    <DocumentPicker document={document} setDocument={setDocument} label="Attach Bank Document"/>
      <label className={`${formLabel}`} style={{fontFamily:"K2d-Bold"}}>Amount</label>
     <ServiceInput
     value=""
     placeholder="Enter Deposit Amount"
     onChange={()=>{}}
     className={serviceTextField}
     style={{ borderColor: "#526D82",fontFamily:"k2d-regular" }}
     />
     {/* <input
     className={serviceTextField}
     /> */}
     <Selector
     label="Select Deposit Bank"
     placeholder="Deposit Banks"
     dropDownItems={bankList}
     className={`${serviceTextField} py-2`}
     nameKey="bankName"
     valueKey="bankID"
     show={showDeposit}
     setShow={setShowDeposit}
     />
    
     </div>
     <div
     className='flex-column my-2'
     style={{
      display:"flex",
      justifyContent:"center",
     }}
     >
     <SubmitButton label="Submit"/>
     </div>
    
    </div>
  )
}

export default CashDeposit