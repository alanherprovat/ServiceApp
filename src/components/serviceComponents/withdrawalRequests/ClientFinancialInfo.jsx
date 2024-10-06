import "../../../assets/css/withdrawalRequestStyle/withdrawalStyle.css";
import ServiceInput from "../../commonComponents/serviceInput";

const ClientFinancialInfo = () => {
    return ( 
        <>
        <div className="maxWithdrawalAmountContainer">
          <p>Max Withdrawal Amount</p>
          <p>1,20,000</p>
        </div>

        <div className="maxWithdrawalAmountContainer mt-2">
          <p>Withdrawal Amount</p>
          <ServiceInput
            value="Enter your amount"
            onChange={() => {}}
            className="amountInputTextField"
          />
        </div>
        </>
     );
}
 
export default ClientFinancialInfo;