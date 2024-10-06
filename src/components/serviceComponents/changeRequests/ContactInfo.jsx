import SubmitButton from "../../commonComponents/SubmitButton";
import ServiceInput from "../../commonComponents/serviceInput";
import { useState } from "react";
import "../../../assets/css/serviceConsoleDashboardStyle.css";

const ContactInfo = () => {
  const [editPhone, setEditPhone] = useState(false);
  const [editEmail, setEditEmail] = useState(false);

  return (
    <div
      className="container d-flex flex-column mx-auto"
      style={{ minHeight: "100vh" }}
    >
      <label className="serviceConsoleFormLabel mb-2">Phone Number</label>
      <ServiceInput value="09857948561" style={{ borderColor: "#526D82" }} />

      <label className="serviceConsoleFormLabel mb-2 mt-2">
        Additional Phone Number
      </label>
      <ServiceInput
        value="09857948561"
        style={{ borderColor: "#526D82" }}
        rightIcon="pencil-square"
        rightIconPress={() => setEditPhone(!editPhone)}
      />

      {editPhone && (
        <>
          <label className="serviceConsoleFormLabel mb-2 mt-2">
            Enter New Additional Phone Number
          </label>
          <ServiceInput
            onChange={() => {}}
            style={{ borderColor: "#526D82" }}
          />
        </>
      )}

      <label className="serviceConsoleFormLabel mb-2 mt-2">Email</label>
      <ServiceInput value="aaa@gmail.com" style={{ borderColor: "#526D82" }} />

      <label className="serviceConsoleFormLabel mb-2 mt-2">
        Additional Email
      </label>
      <ServiceInput
        value="aba@gmail.com"
        style={{ borderColor: "#526D82" }}
        rightIcon="pencil-square"
        rightIconPress={() => setEditEmail(!editEmail)}
      />

      {editEmail && (
        <>
          <label className="serviceConsoleFormLabel mb-2 mt-2">
            Enter New Additional Email
          </label>
          <ServiceInput
            onChange={() => {}}
            style={{ borderColor: "#526D82" }}
          />
        </>
      )}

      <div className="mt-auto mb-2">
        <SubmitButton label="Submit" />
      </div>
    </div>
  );
};

export default ContactInfo;
