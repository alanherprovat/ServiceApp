import React, { useState } from "react";
import ServiceInput from "../../commonComponents/serviceInput";
import {
  formLabel,
  serviceTextField,
} from "../../../assets/styles/CommonStyles";
import Selector from "../../commonComponents/Selector";
import DocumentPicker from "../../commonComponents/DocumentPicker";
import ServiceTitle from "../../commonComponents/ServiceTitle";
import SubmitButton from "../../commonComponents/SubmitButton";
import { allBankList, depositBankList } from "../../../Data/AllBankList";
import BackGround from "../../commonComponents/BackGround";
import "../../../assets/css/serviceConsoleDashboardStyle.css";
function FundTransfer() {
  const [document, setDocument] = useState(null);
  const [showDeposit,setShowDeposit] = useState(false);
  const [showClient,setShowClient] = useState(false);
  const [showBranch,setShowBranch] = useState(false);
  return (
     <BackGround>
      <div
      className="d-flex flex-column mt-4"
      style={{
        minheight: "100%", 
        overflowY: "auto",
      }}
    >
      <div className="d-flex flex-column">
        <ServiceTitle label="Fund Transfer" />
        <label
          className="serviceConsoleFormLabel"
        >
          Document
        </label>
        <DocumentPicker
          document={document}
          setDocument={setDocument}
          label="Attach Bank Document"
        />
        <div className="mt-3"/>
        <label className="serviceConsoleFormLabel">
          Amount
        </label>
        <ServiceInput
          value=""
          placeholder="Enter Deposit Amount"
          onChange={() => {}}
          className={serviceTextField}
          style={{ borderColor: "#526D82",fontFamily:"k2d-regular"}}
        />
        <div className="mt-2"/>
        <Selector
          label="Select Deposit Bank"
          placeholder="Deposit Bank List"
          dropDownItems={depositBankList}
          className={`${serviceTextField} px-2`}
          valueKey="bankID"
          nameKey="bankName"
          show={showDeposit}
          setShow={setShowDeposit}
        />
        <div className="mt-2"/>
        <Selector
          label="Client Bank"
          placeholder="All Bank List"
          dropDownItems={allBankList}
          className={`${serviceTextField} px-2`}
          valueKey="bankID"
          nameKey="bankName"
          show={showClient}
          setShow={setShowClient}
        />
        <div className="mt-2"/>
        <Selector
          label="Client Branch"
          placeholder="Branch List"
          dropDownItems={[]}
          className={`${serviceTextField} py-2 px-2`}
          show={showBranch}
          setShow={setShowBranch}
        />
        <div className="mt-2"/>
        <label
          className="serviceConsoleFormLabel"
        >
          Routing
        </label>
        <ServiceInput
          value=""
          placeholder="Bank Routing Number"
          onChange={() => {}}
          className={serviceTextField}
          style={{ borderColor: "#526D82",fontFamily:"k2d-regular"}}
        />
      </div>
      <div
        style={{
          position: "sticky", 
          bottom: "0px",
          left: "0",
          right: "0",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <SubmitButton label="Submit" />
      </div>
    </div>
    </BackGround>
    
    
  );
}

export default FundTransfer;
