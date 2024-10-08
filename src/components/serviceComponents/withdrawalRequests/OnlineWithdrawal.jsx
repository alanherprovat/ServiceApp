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

const OnlineWithdrawal = () => {
  return (
    <>
      <div
        style={{ backgroundColor: "#F6F8FA", height: "100%", width: "100%" }}
      >
        <div
          className="container d-flex flex-column mx-auto mt-5"
          style={{ minHeight: "100vh" }}
        >
          <ClientFinancialInfo />

          <ServiceTitle label="BFTN" />

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

          <div className="mt-auto" style={{ marginBottom: "60px" }}>
            <SubmitButton label="Submit" />
          </div>
        </div>
      </div>
    </>
  );
};

export default OnlineWithdrawal;
