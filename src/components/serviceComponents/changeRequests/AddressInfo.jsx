import React from "react";
import "../../../assets/css/serviceConsoleDashboardStyle.css";
import DocumentPicker from "../../commonComponents/DocumentPicker";
import ServiceInput from "../../commonComponents/serviceInput";
import { useState } from "react";
import SubmitButton from "../../commonComponents/SubmitButton";

function AddressInfo() {
  const [document, setDocument] = useState(null);
  const [edit, setEdit] = useState(false);
  return (
    <div style={{ backgroundColor: "#F6F8FA", height: "100%", width: "100%" }}>
      <div
        className="container d-flex flex-column mx-auto pt-5"
        style={{ minHeight: "100vh" }}
      >
        <label className="serviceConsoleFormLabel mb-2">Present Address</label>
        <ServiceInput
          value=""
          rightIcon="pencil-square"
          rightIconPress={() => setEdit(!edit)}
          style={{ borderColor: "#526D82" }}
        />

        {edit && (
          <>
            <label className="serviceConsoleFormLabel my-2">
              Enter New Present Address
            </label>
            <ServiceInput
              value=""
              onChange={() => {}}
              style={{ borderColor: "#526D82" }}
            />
          </>
        )}

        <label className="serviceConsoleFormLabel my-2">Present Address</label>
        <ServiceInput value="" style={{ borderColor: "#526D82" }} readOnly />

        <label className="serviceConsoleFormLabel mt-2">Utility File</label>
        <DocumentPicker
          document={document}
          setDocument={setDocument}
          label="Attach Utility File"
        />

        <div className="mt-auto" style={{ marginBottom: "60px" }}>
          <SubmitButton label="Submit" />
        </div>
      </div>
    </div>
  );
}

export default AddressInfo;
