import {
  DepositRequestIcon,
  WithdrawalRequestIcon,
  IpoRequestIcon,
  ChangeRequestIcon,
} from "../../../config/svgIcons/ServiceConsoleIcons.jsx";
import "../../assets/css/serviceConsoleDashboardStyle.css";
import ServiceConsoleHistoryList from "../../helper/ServiceConsoleHistoryList.jsx";

const ServiceConsoleDashboard = () => {
  return (
    <div className="container mx-auto mt-5">
      <div className="d-flex flex-column justify-content-center align-items-center gap-2">
        <div className="d-flex justify-content-center align-items-center gap-2 col-12">
          <div className="serviceSection w-50">
            <DepositRequestIcon />
            <p>Deposit Request</p>
          </div>

          <div className="serviceSection w-50">
            <WithdrawalRequestIcon />
            <p>Withdrawal Request</p>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center gap-2 col-12">
          <div className="serviceSection w-50">
            <IpoRequestIcon />
            <p>IPO Request</p>
          </div>

          <div className="serviceSection w-50">
            <ChangeRequestIcon />
            <p>Change Request</p>
          </div>
        </div>
      </div>

      <ServiceConsoleHistoryList />
    </div>
  );
};

export default ServiceConsoleDashboard;
