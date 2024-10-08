import {
    serviceTextField,
    formLabel,
  } from "../../../assets/styles/CommonStyles";
import ServiceInput from "../../commonComponents/serviceInput";
import "../../../assets/css/serviceConsoleDashboardStyle.css";

const RegisteredBankInfo = () => {
    return ( 
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
     );
}
 
export default RegisteredBankInfo;