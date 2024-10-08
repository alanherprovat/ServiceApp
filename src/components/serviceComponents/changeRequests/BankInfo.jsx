import React from "react";
import ServiceInput from "../../commonComponents/serviceInput";
import "../../../assets/css/serviceConsoleDashboardStyle.css";
import DocumentPicker from "../../commonComponents/DocumentPicker";
import { useState } from "react";
import SubmitButton from "../../commonComponents/SubmitButton";
import Selector from "../../commonComponents/Selector";
import { allBankList } from "../../../Data/AllBankList";
import {
  serviceTextField,
  formLabel,
} from "../../../assets/styles/CommonStyles";

function BankInfo() {
  const [showClient, setShowClient] = useState(false);
  const [editBank, setEditBank] = useState(false);
  const [editBranch, setEditBranch] = useState(false);
  const [editRoutingNo, setEditRoutingNo] = useState(false);
  const [editAccountNo, setEditAccountNo] = useState(false);
  return (
    <div style={{ backgroundColor: "#F6F8FA", height: "100%", width: "100%" }}>
      <div
        className="container d-flex flex-column mx-auto pt-5"
        style={{ minHeight: "100vh" }}
      >
        <div className="d-flex justify-content-between align-items-center mb-2">
          <label className="serviceConsoleFormLabel">Bank Name</label>
          <i
            style={{ cursor: "pointer" }}
            className="bi bi-pencil-square"
            onClick={() => setEditBank(!editBank)}
          ></i>
        </div>

        <ServiceInput
          value=""
          onChange={() => {}}
          style={{ borderColor: "#526D82" }}
        />

        {editBank && (
          <>
            <label className="serviceConsoleFormLabel my-2">Bank Name</label>
            <Selector
              label="Client Bank"
              placeholder="Select Bank"
              dropDownItems={allBankList}
              className={`${serviceTextField} w-100`}
              valueKey="bankID"
              nameKey="bankName"
              show={showClient}
              setShow={setShowClient}
            />
          </>
        )}

        <div className="d-flex justify-content-between align-items-center my-2">
          <label className="serviceConsoleFormLabel">Branch Name</label>
          <i
            style={{ cursor: "pointer" }}
            className="bi bi-pencil-square"
            onClick={() => setEditBranch(!editBranch)}
          ></i>
        </div>

        <ServiceInput
          value=""
          onChange={() => {}}
          style={{ borderColor: "#526D82" }}
        />

        {editBranch && (
          <>
            <label className="serviceConsoleFormLabel my-2">
              Select Updated Branch
            </label>
            <Selector
              label="Client Bank"
              placeholder="Select Branch"
              dropDownItems={allBankList}
              className={`${serviceTextField} w-100`}
              valueKey="bankID"
              nameKey="bankName"
              show={showClient}
              setShow={setShowClient}
            />
          </>
        )}

        <div className="d-flex justify-content-between align-items-center my-2">
          <label className="serviceConsoleFormLabel">Routing No</label>
          <i
            style={{ cursor: "pointer" }}
            className="bi bi-pencil-square"
            onClick={() => setEditRoutingNo(!editRoutingNo)}
          ></i>
        </div>

        <ServiceInput
          value=""
          onChange={() => {}}
          style={{ borderColor: "#526D82" }}
        />

        {editRoutingNo && (
          <>
            <label className="serviceConsoleFormLabel my-2">
              Enter New Routing No
            </label>
            <ServiceInput
              value=""
              onChange={() => {}}
              style={{ borderColor: "#526D82" }}
            />
          </>
        )}

        <label className="serviceConsoleFormLabel my-2">Account No</label>
        <ServiceInput
          value="09857948561"
          rightIcon="pencil-square"
          rightIconPress={() => setEditAccountNo(!editAccountNo)}
          style={{ borderColor: "#526D82" }}
        />

        {editAccountNo && (
          <>
            <label className="serviceConsoleFormLabel my-2">
              Enter New Account No
            </label>
            <ServiceInput style={{ borderColor: "#526D82" }} />
          </>
        )}

        <div className="mt-auto" style={{ marginBottom: "60px" }}>
          <SubmitButton label="Submit" />
        </div>
      </div>
    </div>
  );
}

export default BankInfo;
