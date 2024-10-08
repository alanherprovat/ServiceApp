import "../../../assets/css/withdrawalRequestStyle/withdrawalStyle.css";
import ServiceInput from "../../commonComponents/serviceInput";
import ServiceTitle from "../../commonComponents/ServiceTitle";
import {
  serviceTextField,
  formLabel,
} from "../../../assets/styles/CommonStyles";
import "../../../assets/css/serviceConsoleDashboardStyle.css";
import SubmitButton from "../../commonComponents/SubmitButton";
import withdrawalStore from "../../../store/withdrawalStore";
import ClientFinancialInfo from "./ClientFinancialInfo";
import DocumentPicker from "../../commonComponents/DocumentPicker";
import Selector from "../../commonComponents/Selector";
import { useState } from "react";
import { Link } from "react-router-dom";
import { allBankList } from "../../../Data/AllBankList";

const ChequeWithdrawal = () => {
  const [isSelected, setIsSelected] = useState(false);
  const [document, setDocument] = useState(null);
  const [differentAccount, setDifferentAccount] = useState(false);
  const [showClient, setShowClient] = useState(false);

  const handleRadioChange = () => {
    setIsSelected(!isSelected);
  };

  const handleDifferentAccount = () => {
    setDifferentAccount(!differentAccount);
  };
  return (
    <div
      style={{ backgroundColor: "#F6F8FA", height: "100%", width: "100%" }}
    >
      <div
        className="container d-flex flex-column mx-auto pt-5"
        style={{ minHeight: "100vh" }}
      >
        <ClientFinancialInfo />
        <ServiceTitle label="Cheque" />

        {!differentAccount ? (
          <>
            <div>
              <label className="serviceConsoleFormLabel">
                Client Bank Account Number
              </label>
              <ServiceInput
                value=""
                onChange={() => {}}
                className={serviceTextField}
                style={{ borderColor: "#526D82" }}
              />
            </div>

            <div>
              <label className="serviceConsoleFormLabel">
                Client Bank Name
              </label>
              <ServiceInput
                value=""
                onChange={() => {}}
                className={serviceTextField}
                style={{ borderColor: "#526D82" }}
              />
            </div>

            <div>
              <label className="serviceConsoleFormLabel">
                Client Bank Branch
              </label>
              <ServiceInput
                value=""
                onChange={() => {}}
                className={serviceTextField}
                style={{ borderColor: "#526D82" }}
              />
            </div>

            <div>
              <label className="serviceConsoleFormLabel">
                Client Bank Routing Number
              </label>
              <ServiceInput
                value=""
                onChange={() => {}}
                className={serviceTextField}
                style={{ borderColor: "#526D82" }}
              />
            </div>
          </>
        ) : (
          <>
            <div>
              <label className="serviceConsoleFormLabel">
                Client Bank Account Number
              </label>
              <ServiceInput
                value=""
                onChange={() => {}}
                className={serviceTextField}
                style={{ borderColor: "#526D82" }}
              />
            </div>

            <div>
              <label className="serviceConsoleFormLabel">Client Bank Name</label>
              <Selector
                label="Client Bank"
                placeholder="All Bank List"
                dropDownItems={allBankList}
                className={`${serviceTextField} py-2 px-2 w-100`}
                valueKey="bankID"
                nameKey="bankName"
                show={showClient}
                setShow={setShowClient}
              />
            </div>

            <div>
              <label className="serviceConsoleFormLabel">
                Client Bank Branch
              </label>
              <ServiceInput
                value=""
                onChange={() => {}}
                className={serviceTextField}
                style={{ borderColor: "#526D82" }}
              />
            </div>

            <div>
              <label className="serviceConsoleFormLabel">
                Client Bank Routing No
              </label>
              <ServiceInput
                value=""
                onChange={() => {}}
                className={serviceTextField}
                style={{ borderColor: "#526D82" }}
              />
            </div>
          </>
        )}

        <div>
          <input
            type="checkbox" // Use checkbox to allow toggling
            id="receiveCheque"
            checked={isSelected} // Reflect the selection state
            onChange={handleRadioChange} // Handle toggle on change
          />
          <label htmlFor="receiveCheque" className="ms-2">
            Receive cheque by others
          </label>
        </div>

        {isSelected && (
          <div>
            <label className="serviceConsoleFormLabel">Receiver's Name</label>
            <ServiceInput
              value=""
              onChange={() => {}}
              className={serviceTextField}
              style={{ borderColor: "#526D82" }}
            />
            <label className="serviceConsoleFormLabel mt-2">
              Receiver's Signature
            </label>
            <DocumentPicker
              document={document}
              setDocument={setDocument}
              label="Attach Receiver's Signature"
            />
          </div>
        )}

        {!differentAccount && (
          <div className="d-flex justify-content-center align-items-center mt-3">
            <p>
              Send to a different account?{" "}
              <span style={{cursor: "pointer"}} className="text-primary" onClick={handleDifferentAccount}>
                Click Here
              </span>
            </p>
          </div>
        )}

        <div className="mt-auto" style={{marginBottom: "60px"}}>
          <SubmitButton label="Submit" />
        </div>
      </div>
    </div>
  );
};

export default ChequeWithdrawal;
