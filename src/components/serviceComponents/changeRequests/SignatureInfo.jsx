import ServiceInput from "../../commonComponents/serviceInput";
import "../../../assets/css/serviceConsoleDashboardStyle.css";
import DocumentPicker from "../../commonComponents/DocumentPicker";
import { useState } from "react";
import SubmitButton from "../../commonComponents/SubmitButton";

function SignatureInfo() {
  const [document, setDocument] = useState(null);

  return (
    <div style={{ backgroundColor: "#F6F8FA", height: "100%", width: "100%" ,overflowY:"auto"}}>
      <div className="container d-flex flex-column mx-auto pt-5" style={{ minHeight: '100vh' }}>
      <label className="serviceConsoleFormLabel mt-2">Signature</label>
      <DocumentPicker
        document={document}
        setDocument={setDocument}
        label="Attach Your Signature"
      />
      <div className="mt-auto" style={{marginBottom: "90px"}}>
        <SubmitButton label="Submit" />
      </div>
      </div>
    </div>
  )
}

export default SignatureInfo