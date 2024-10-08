import {
  DepositRequestIcon,
  WithdrawalRequestIcon,
  IpoRequestIcon,
  ChangeRequestIcon,
} from "../../../config/svgIcons/ServiceConsoleIcons.jsx";
import "../../assets/css/serviceConsoleDashboardStyle.css";
import ServiceConsoleHistoryList from "../../helper/ServiceConsoleHistoryList.jsx";
import { Link } from "react-router-dom";

const ServiceConsoleDashboard = () => {
  return (
    <div className="container mx-auto mt-5">
      <div className="d-flex flex-column justify-content-center align-items-center gap-2">
        <div className="d-flex justify-content-center align-items-center gap-2 col-12">
          <div className="serviceSection w-50">
            <Link to="/depositRequest" style={{textDecoration: "none", color: "inherit"}}>
            <DepositRequestIcon />
            <p>Deposit Request</p>
            </Link>
          </div>

          <div className="serviceSection w-50">
            <Link to="/withdrawalRequest" style={{textDecoration: "none", color: "inherit"}}>
              <WithdrawalRequestIcon />
              <p>Withdrawal Request</p>
            </Link>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center gap-2 col-12">
          <div className="serviceSection w-50">
            <Link to="/" style={{textDecoration: "none", color: "inherit"}}>
            <IpoRequestIcon />
            <p>IPO Request</p>
            </Link>
          </div>

          <div className="serviceSection w-50">
            <Link to="/changeRequest" style={{textDecoration: "none", color: "inherit"}}>
            <ChangeRequestIcon />
            <p>Change Request</p>
            </Link>
          </div>
        </div>
      </div>

      <ServiceConsoleHistoryList />
    </div>
  );
};

export default ServiceConsoleDashboard;
