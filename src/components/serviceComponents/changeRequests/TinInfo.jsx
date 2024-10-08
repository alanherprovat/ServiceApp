import ServiceInput from "../../commonComponents/serviceInput";
import "../../../assets/css/serviceConsoleDashboardStyle.css";
import DocumentPicker from "../../commonComponents/DocumentPicker";
import { useState } from "react";
import SubmitButton from "../../commonComponents/SubmitButton";

const TinInfo = () => {
  const [document, setDocument] = useState(null);
  const [edit, setEdit] = useState(false);

  return (
    <div style={{ backgroundColor: "#F6F8FA", height: "100%", width: "100%" }}>
    <div className="container d-flex flex-column mx-auto pt-5" style={{ minHeight: '100vh' }}>
      <label className="serviceConsoleFormLabel mb-2">TIN Number</label>
      <ServiceInput
        value="09857948561"
        rightIcon="pencil-square"
        rightIconPress={() => setEdit(!edit)}
        style={{ borderColor: "#526D82" }}
      />

      {edit && (
        <>
          <label className="serviceConsoleFormLabel my-2">
            Enter New TIN Number
          </label>
          <ServiceInput value="" onChange={() => {}} style={{ borderColor: "#526D82" }} />
        </>
      )}

      <label className="serviceConsoleFormLabel mt-2">TIN Certificate</label>
      <DocumentPicker
        document={document}
        setDocument={setDocument}
        label="Attach TIN Certificate"
      />

      <div className="mt-auto" style={{marginBottom: "60px"}}>
        <SubmitButton label="Submit" />
      </div>
    </div>
    </div>
  );
};

export default TinInfo;
