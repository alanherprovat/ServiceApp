import SubmitButton from "../../commonComponents/SubmitButton";
import ServiceInput from "../../commonComponents/serviceInput";
import { useState } from "react";
import "../../../assets/css/serviceConsoleDashboardStyle.css";

const ContactInfo = () => {
  const [editPhone, setEditPhone] = useState(false);
  const [editEmail, setEditEmail] = useState(false);

  return (
    <div
    style={{ backgroundColor: "#F6F8FA", height: "100%", width: "100%" }}
    >
       <div
      className="container d-flex flex-column mx-auto pt-5"
      style={{ minHeight: "100vh" }}
    >
      <label className="serviceConsoleFormLabel mb-2" style={{fontFamily:"k2d-bold"}}>Phone Number</label>
      <ServiceInput readOnly value="09857948561" style={{ borderColor: "#526D82",fontFamily:"k2d-regular" }} />

      <label className="serviceConsoleFormLabel mb-2 mt-2" style={{fontFamily:"k2d-bold"}}>
        Additional Phone Number
      </label>
      <ServiceInput
        value="09857948561"
        style={{ borderColor: "#526D82",fontFamily:"k2d-regular"  }}
        rightIcon="pencil-square"
        rightIconPress={() => setEditPhone(!editPhone)}
      />

      {editPhone && (
        <>
          <label className="serviceConsoleFormLabel mb-2 mt-2" style={{fontFamily:"k2d-bold"}}>
            Enter New Additional Phone Number
          </label>
          <ServiceInput
            onChange={() => {}}
            style={{ borderColor: "#526D82",fontFamily:"k2d-regular" }}
          />
        </>
      )}

      <label className="serviceConsoleFormLabel mb-2 mt-2" style={{fontFamily:"k2d-bold"}}>Email</label>
      <ServiceInput readOnly value="aaa@gmail.com" style={{ borderColor: "#526D82",fontFamily:"k2d-regular" }} />

      <label className="serviceConsoleFormLabel mb-2 mt-2" style={{fontFamily:"k2d-bold"}}>
        Additional Email
      </label>
      <ServiceInput
        value="aba@gmail.com"
        style={{ borderColor: "#526D82",fontFamily:"k2d-regular" }}
        rightIcon="pencil-square"
        rightIconPress={() => setEditEmail(!editEmail)}
      />

      {editEmail && (
        <>
          <label className="serviceConsoleFormLabel mb-2 mt-2" style={{fontFamily:"k2d-bold"}}>
            Enter New Additional Email
          </label>
          <ServiceInput
            onChange={() => {}}
            style={{ borderColor: "#526D82",fontFamily:"k2d-regular" }}
          />
        </>
      )}

      <div className="mt-auto" style={{marginBottom: "60px"}}>
        <SubmitButton label="Submit" />
      </div>
    </div>
    </div>
  
  );
};

export default ContactInfo;
