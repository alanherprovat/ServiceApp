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
    <div style={{ backgroundColor: "#F6F8FA", height: "100%", width: "100%" ,overflowY:"auto"}}>
      <div
        className="container d-flex flex-column mx-auto pt-5"
        style={{ minHeight: "100vh"}}
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
          value="Brac Bank"
          onChange={() => {}}
          style={{ borderColor: "#526D82",fontFamily:"k2d-regular" }}
        />

        {editBank && (
          <>
            <label className="serviceConsoleFormLabel my-2">Updated Bank Name</label>
            <Selector
              placeholder="Select Bank Name"
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
          value="Motijheel"
          onChange={() => {}}
          style={{ borderColor: "#526D82",fontFamily:"k2d-regular" }}
        />

        {editBranch && (
          <>
            <label className="serviceConsoleFormLabel my-2">
              Updated Branch Name
            </label>
            <Selector
              placeholder="Select Branch Name"
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
          value="123456789"
          onChange={() => {}}
          style={{ borderColor: "#526D82",fontFamily:"k2d-regular" }}
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
          style={{ borderColor: "#526D82",fontFamily:"k2d-regular" ,borderWidth:1}}
        />

        {editAccountNo && (
          <>
            <label className="serviceConsoleFormLabel my-2">
              Enter New Account No
            </label>
            <ServiceInput style={{ borderColor: "#526D82",fontFamily:"k2d-regular" }} />
          </>
        )}

        <div className="mt-auto" style={{ marginBottom: "90px" }}>
          <SubmitButton label="Submit" />
        </div>
      </div>
    </div>
  );
}

export default BankInfo;
