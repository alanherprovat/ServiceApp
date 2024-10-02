import React, { useState } from 'react'
import ServiceInput from '../../commonComponents/serviceInput'
import { formLabel, serviceTextField } from '../../../assets/styles/CommonStyles'
import Selector from '../../commonComponents/Selector'
import DocumentPicker from '../../commonComponents/DocumentPicker'
import ServiceTitle from '../../commonComponents/ServiceTitle'
import SubmitButton from '../../commonComponents/SubmitButton'
function FundTransfer() {
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
  const [document,setDocument] = useState(null)
  return (
    <div
    className="container-fluid d-flex flex-column mt-4 vh-100 justify-content-between" // Bootstrap classes for centering and margin // Custom width style
  >
    

    <div className="d-flex flex-column px-5" style={{ flexGrow: 0.5 }}>
    <ServiceTitle label="Fund Transfer"/>
    <label className={`${formLabel} mt-2`} style={{fontFamily:"K2d-Bold"}}>Document</label>
    <DocumentPicker document={document} setDocument={setDocument} label="Attach Bank Document"/>
      <label className={`${formLabel}`} style={{fontFamily:"K2d-Bold"}}>Amount</label>
     <ServiceInput
     value=""
     onChange={()=>{}}
     className={serviceTextField}
     />
     {/* <input
     className={serviceTextField}
     /> */}
     <Selector
     label="Select Deposit Bank"
     dropDownItems={bankList}
     className={`${serviceTextField} py-2 px-2`}
     />

     </div>
     <div
     className='flex-column px-5 my-2'
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

export default FundTransfer