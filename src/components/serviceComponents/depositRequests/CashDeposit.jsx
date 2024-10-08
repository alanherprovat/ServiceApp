import React, { useState } from 'react'
import ServiceInput from '../../commonComponents/serviceInput'
import { formLabel, serviceTextField } from '../../../assets/styles/CommonStyles'
import Selector from '../../commonComponents/Selector'
import DocumentPicker from '../../commonComponents/DocumentPicker'
import ServiceTitle from '../../commonComponents/ServiceTitle'
import SubmitButton from '../../commonComponents/SubmitButton'
import BackGround from '../../commonComponents/BackGround'
import "../../../assets/css/serviceConsoleDashboardStyle.css"
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
   <BackGround>
     <div
    className="d-flex flex-column justify-content-between w-100 mx-auto mt-4" // Bootstrap classes for centering and margin // Custom width style
    style={{ minHeight:"100vh",overflowY:"auto"}}
  >
   
    
    <div className="d-flex flex-column position-relative" >
    <ServiceTitle label="Cash Deposit"/>
    <label className='serviceConsoleFormLabel'>Document</label>
    <DocumentPicker document={document} setDocument={setDocument} label="Attach Bank Document"/>
    <div className='mt-3'/>
      <label className="serviceConsoleFormLabel">Amount</label>
     <ServiceInput
     value=""
     placeholder="Enter Deposit Amount"
     onChange={()=>{}}
     className={serviceTextField}
     style={{ borderColor: "#526D82",fontFamily:"k2d-regular"}}
     />
     {/* <input
     className={serviceTextField}
     /> */}
     <div className='mt-2'/>
     <Selector
     label="Select Deposit Bank"
     placeholder="Deposit Banks"
     dropDownItems={bankList}
     className={serviceTextField}
     nameKey="bankName"
     valueKey="bankID"
     show={showDeposit}
     setShow={setShowDeposit}
     />
    
     </div>
     <div
     className='mt-auto'
        style={{
         paddingBottom:"10px"
        }}
      >
        <SubmitButton label="Submit" />
      </div>
    </div>
    </BackGround>
   
  )
}

export default CashDeposit