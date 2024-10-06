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

function MFS() {
  const [document, setDocument] = useState(null);
  const [showDeposit,setShowDeposit] = useState(false);
  const [showClient,setShowClient] = useState(false);
  return (
    <div
      className="container-fluid d-flex flex-column mt-4 vh-100 w-100" // Bootstrap classes for centering and margin // Custom width style
    >
      <div className="d-flex flex-column px-5" style={{ flexGrow: 0.5 }}>
        <ServiceTitle label="MFS" />
        <label
          className={`${formLabel} mt-2`}
          style={{ fontFamily: "K2d-Bold" }}
        >
          Document
        </label>
        <DocumentPicker
          document={document}
          setDocument={setDocument}
          label="Attach Deposit Document"
        />
        <label className={`${formLabel}`} style={{ fontFamily: "K2d-Bold" }}>
          Amount
        </label>
        <ServiceInput
          value=""
          placeholder="Deposit Amount"
          onChange={() => {}}
          className={serviceTextField}
          style={{ borderColor: "#526D82",fontFamily:"k2d-regular" }}
        />
        <Selector
          label="Select Deposit wallet"
          placeholder="Deposit Wallet "
          dropDownItems={walletList}
          className={`${serviceTextField} py-2 px-2`}
          nameKey="walletName"
          valueKey="walletID"
          show={showDeposit}
          setShow={setShowDeposit}
        />
        <Selector
          label="Select Client Wallet"
          placeholder="Client Wallet"
          dropDownItems={walletList}
          className={`${serviceTextField} py-2 px-2`}
          nameKey="walletName"
          valueKey="walletID"
          show={showClient}
          setShow={setShowClient}
        />
        <label
          className={`${formLabel} mt-2`}
          style={{ fontFamily: "K2d-Bold" }}
        >
          Wallet No.
        </label>
        <ServiceInput
          value=""
          placeholder="Mobile Number"
          onChange={() => {}}
          className={serviceTextField}
          style={{ borderColor: "#526D82",fontFamily:"k2d-regular" }}
        />
      </div>
      <div
        className="flex-column px-5 my-2"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <SubmitButton label="Submit" />
      </div>
    </div>
  );
}

export default MFS;
