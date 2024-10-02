import React, { useState } from 'react'
import ServiceInput from '../../commonComponents/serviceInput'
import { formLabel, serviceTextField } from '../../../assets/styles/CommonStyles'
import Selector from '../../commonComponents/Selector'
import DocumentPicker from '../../commonComponents/DocumentPicker'
import ServiceTitle from '../../commonComponents/ServiceTitle'
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
  const [document,setDocument] = useState(null)
  return (
    <div
    className="w-90 mx-auto mt-4" // Bootstrap classes for centering and margin // Custom width style
  >
    <ServiceTitle label="Cash Deposit"/>
    <div className="d-flex flex-column px-5" style={{ flexGrow: 0.5 }}>
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
     className={`${serviceTextField} py-2`}
     />
     <label className={`${formLabel} mt-2`} style={{fontFamily:"K2d-Bold"}}>Document</label>
     <DocumentPicker document={document} setDocument={setDocument} label="Attach Bank Document"/>
     </div>
    </div>
  )
}

export default CashDeposit