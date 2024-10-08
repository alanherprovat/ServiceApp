import axios from "axios";
import { BACK_BASE } from "../../../config/config.js";

// all bank name
export const AllBankAccount = async (req, res) => {
  try {
    const url = BACK_BASE + "/Deposit/AllBankList";
    const response = await axios.get(url);

    return res.json({
      status: "success",
      data: response.data.Data.data,
    });
  } catch (error) {
    res.json({ status: "server_fail", message: error.message });
  }
};

// all bank branch name

export const AllBankBranch = async (req, res) => {
  try {
    const { bankorgId } = req.params;
    const url = BACK_BASE + "/Deposit/GetBankBranchList";
    const response = await axios.post(url, bankorgId, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.json({
      status: "success",
      data: response.data.Data.data,
    });
  } catch (error) {
    res.json({ status: "server_fail", message: error.message });
  }
};

// bannk routing number

export const GetBankRoutingNumber = async (req, res) => {
  try {
    const { bankID, branchID } = req.params;
    const url = BACK_BASE + "/Deposit/GetBranchRoutingNo";
    const bankandbranchObject = {
      bankID: bankID,
      branchID: branchID,
    };
    const response = await axios.post(url, bankandbranchObject, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.json({
      status: "success",
      routingNumber: response.data.Data.data[0].routingNo,
    });
  } catch (error) {
    res.json({ status: "server_fail", message: error.message });
  }
};

// get bank information using bank routing

export const GetBankInfoUsingRouting = async (req, res) => {
  try {
    const { routingnumber } = req.params;

    const routingNumberString = routingnumber.toString();
    const url = `${BACK_BASE}/Deposit/GetThirdPartyBankInfo/RoutingNo`;

    const response = await axios.post(url, `"${routingNumberString}"`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    res.json(response.data.Data.data);
  } catch (error) {
    console.error("Error details:", error.response?.data || error.message);
    res.json({
      status: "server_fail",
      message: error.response?.data?.message || error.message,
    });
  }
};

// client Bank Information
export const ClientBankName = async (req, res) => {
  try {
    const{AccountNumber, Product} = req.body;
    
    const clientInformation = {
      product: Product,
      accountNo: AccountNumber,
    };
    const url = BACK_BASE + "/Deposit/ClientDepositBankInfo";
    const response = await axios.post(url, clientInformation);

    return res.json({
      status: "success",
      data: response.data.Data.data,
    });
  } catch (error) {
    res.json({ status: "server_fail", message: error.message });
  }
};

// IDLC Bank Accounts
export const DepostiBankAccount = async (req, res) => {
  try {
    const url = `${BACK_BASE}/Deposit/BankAccountInfoList`;
    const getDepositBankAccount = await axios.get(url);
    return res.json({
      status: "success",
      data: getDepositBankAccount.data.Data.data,
    });
  } catch (error) {
    return res.json({ status: "server_fail", message: error.toString() });
  }
};


// withdrawal client bank information
export const ClientBankInformationForWithdrawal = async (req, res) => {
  try{
    const {AccountNumber, Product} = req.body;
    
    const clientInformation = {
      Product: Product,
      AccountNo: AccountNumber
    }
    const url = BACK_BASE + "/Withdrawal/ClientWithdrawalBankInfo";
    const response = await axios.post(url, clientInformation);
    const responseData = {
      clientBankAccID: response.data.Data.data.ClientBankAccID,
      clientBankAccNo: response.data.Data.data.ClientBankAccNo,
      clientBankName: response.data.Data.data.ClientBankName,
      branchName: response.data.Data.data.BranchName,
      clientBankRoutingNo: response.data.Data.data.ClientBankRoutingNo,
    }
    res.json({status: "success", data: responseData});
 
  }catch (error) {
    return res.json({ status: "server_fail", message: error.toString() });
  }
}