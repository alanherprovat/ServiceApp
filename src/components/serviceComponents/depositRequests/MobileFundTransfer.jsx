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
import { walletList } from "../../../Data/walletList";
import BackGround from "../../commonComponents/BackGround";

function MFS() {
  const [document, setDocument] = useState(null);
  const [showDeposit,setShowDeposit] = useState(false);
  const [showClient,setShowClient] = useState(false);
  return (
    <BackGround>
         <div
      className="d-flex flex-column mt-4 w-100" // Bootstrap classes for centering and margin // Custom width style
    >
      <div className="d-flex flex-column">
        <ServiceTitle label="MFS" />
        <label
          className="serviceConsoleFormLabel"
        >
          Document
        </label>
        <DocumentPicker
          document={document}
          setDocument={setDocument}
          label="Attach Deposit Document"
        />
        <div className="mt-2"/>
        <label className="serviceConsoleFormLabel">
          Amount
        </label>
        <ServiceInput
          value=""
          placeholder="Deposit Amount"
          onChange={() => {}}
          className={serviceTextField}
          style={{ borderColor: "#526D82",fontFamily:"k2d-regular" }}
        />
        <div className="mt-2"/>
        <Selector
          label="Select Deposit wallet"
          placeholder="Deposit Wallet "
          dropDownItems={walletList}
          className={`${serviceTextField} px-2`}
          nameKey="walletName"
          valueKey="walletID"
          show={showDeposit}
          setShow={setShowDeposit}
        />
        <div className="mt-2"/>
        <Selector
          label="Select Client Wallet"
          placeholder="Client Wallet"
          dropDownItems={walletList}
          className={`${serviceTextField} px-2`}
          nameKey="walletName"
          valueKey="walletID"
          show={showClient}
          setShow={setShowClient}
        />
        <div className="mt-2"/>
        <label
          className="serviceConsoleFormLabel"
        >
          Wallet No.
        </label>
        <ServiceInput
          value=""
          placeholder="Mobile Number"
          onChange={() => {}}
          className={serviceTextField}
          style={{ borderColor: "#526D82",fontFamily:"k2d-regular"  }}
        />
      </div>
      <div
        style={{
          position: "relative", 
          bottom: "0",
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

export default MFS;
