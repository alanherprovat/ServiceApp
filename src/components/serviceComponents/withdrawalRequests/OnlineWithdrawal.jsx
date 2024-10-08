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
import RegisteredBankInfo from "./RegisteredBankInfo";

const OnlineWithdrawal = ({title}) => {
  return (
    <>
      <div
        style={{ backgroundColor: "#F6F8FA", height: "100%", width: "100%", overflowY: "auto" }}
      >
        <div
          className="container d-flex flex-column mx-auto mt-5"
          style={{ minHeight: "100vh" }}
        >
          <ClientFinancialInfo />

          <ServiceTitle label={title} />

          <RegisteredBankInfo />

          <div className="mt-auto" style={{ marginBottom: "60px" }}>
            <SubmitButton label="Submit" />
          </div>
        </div>
      </div>
    </>
  );
};

export default OnlineWithdrawal;
