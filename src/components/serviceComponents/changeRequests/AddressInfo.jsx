import React from "react";
import "../../../assets/css/serviceConsoleDashboardStyle.css";
import DocumentPicker from "../../commonComponents/DocumentPicker";
import ServiceInput from "../../commonComponents/serviceInput";
import { useState } from "react";
import SubmitButton from "../../commonComponents/SubmitButton";
import { serviceTextField } from "../../../assets/styles/CommonStyles";

function AddressInfo() {
  const [document, setDocument] = useState(null);
  const [edit, setEdit] = useState(false);
  return (
    <div style={{ backgroundColor: "#F6F8FA", height: "100%", width: "100%",overflowY:"auto"}}>
      <div
        className="container d-flex flex-column mx-auto pt-5"
        style={{ minHeight: "100vh" }}
      >
        <label className="serviceConsoleFormLabel mb-2">Present Address</label>
        <ServiceInput
          value="Badda, Dhaka"
          rightIcon="pencil-square"
          rightIconPress={() => setEdit(!edit)}
          // className={`${serviceTextField} rounded-0`}
          style={{ fontFamily:"k2d-regular",borderColor: "#526D82",borderWidth:1 }}
        />

        {edit && (
          <>
            <label className="serviceConsoleFormLabel my-2">
              Enter New Present Address
            </label>
            <ServiceInput
              value="Badda,Dhaka"
              onChange={() => {}}
              style={{ fontFamily:"k2d-regular",borderColor: "#526D82" }}
            />
          </>
        )}

        <label className="serviceConsoleFormLabel my-2">Permanent Address</label>
        <ServiceInput value="Badda,Dhaka" style={{ fontFamily:"k2d-regular",borderColor: "#526D82" }} readOnly />

        <label className="serviceConsoleFormLabel mt-2">Utility File</label>
        <DocumentPicker
          document={document}
          setDocument={setDocument}
          label="Attach Utility File"
        />

        <div className="mt-auto" style={{ marginBottom: "90px" }}>
          <SubmitButton label="Submit" />
        </div>
      </div>
    </div>
  );
}

export default AddressInfo;
