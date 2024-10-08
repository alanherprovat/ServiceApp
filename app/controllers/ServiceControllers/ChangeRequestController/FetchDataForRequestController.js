// address info

import axios from "axios";
import { BACK_BASE } from "../../../config/config.js";

export const GetAddressInformationChange = async (req, res) => {
  try {
    const AccountNumber = req.headers.AccountNumber;
    const Product = req.headers.Product;
    const url = BACK_BASE + "/InfoChangeReq/FetchAccountInfo";
    const userInfo = {
      Product: Product,
      AccountNo: AccountNumber,
    };

    const response = await axios.post(url, userInfo);

    const Address = {
      permanentAddress: response.data.Data.data.PermanentAddress,
      presentAddressID: response.data.Data.data.PreAddressID,
      presentAddress: response.data.Data.data.PresentAddress,
    };

    res.json({ status: "success", data: Address });
  } catch (error) {
    return res.json({ status: "server_fail", message: error.toString() });
  }
};

// bank information

export const GetBankInformationChange = async (req, res) => {
  try {
    const AccountNumber = req.headers.AccountNumber;
    const Product = req.headers.Product;
    const url = BACK_BASE + "/Withdrawal/ClientWithdrawalBankInfo";
    const userInfo = {
      Product: Product,
      AccountNo: AccountNumber,
    };

    const response = await axios.post(url, userInfo);

    const BankInfo = {
      bankID: response.data.Data.data.ClientBankID,
      bankAccName: response.data.Data.data.ClientBankName,
      branchID: response.data.Data.data.ClientBranchID,
      bankBranch: response.data.Data.data.BranchName,
      routingNo: response.data.Data.data.ClientBankRoutingNo,
      bankAccountNo: response.data.Data.data.ClientBankAccNo,
    };
    return res.json({ status: "success", data: BankInfo });
  } catch (error) {
    return res.json({ status: "server_fail", message: error.toString() });
  }
};

// tin number

export const GetTinNumber = async (req, res) => {
  try {
    const AccountNumber = req.headers.AccountNumber;
    const Product = req.headers.Product;
    const url = BACK_BASE + "/InfoChangeReq/FetchAccountInfo";
    const userInfo = {
      Product: Product,
      AccountNo: AccountNumber,
    };

    const response = await axios.post(url, userInfo);

    const Address = {
      tinNo: response.data.Data.data.TINNo,
    };

    res.json({ status: "success", data: Address });
  } catch (error) {
    return res.json({ status: "server_fail", message: error.toString() });
  }
};

// get contact info

export const GetContactInformation = async (req, res) => {
  try {
    const AccountNumber = req.headers.AccountNumber;
    const Product = req.headers.Product;
    const url = BACK_BASE + "/InfoChangeReq/FetchAccountInfo";
    const userInfo = {
      Product: Product,
      AccountNo: AccountNumber,
    };

    const response = await axios.post(url, userInfo);

    const ContactInfo = {
      mobileNo: response.data.Data.data.MobileNo,
      altMobileNo: response.data.Data.data.AltMobileNo,
      emailAddress: response.data.Data.data.EmailAddress,
      altEmailAddress: response.data.Data.data.AltEmailAddress,
    };

    res.json({ status: "success", data: ContactInfo });
  } catch (error) {
    return res.json({ status: "server_fail", message: error.toString() });
  }
};
