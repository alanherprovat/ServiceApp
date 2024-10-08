import axios from "axios";
import { BACK_BASE } from "../../../config/config.js";
import ValidationHelper from "../../../utility/validationUtility.js";

// client financial bank info
export const ClientFinancialInfo = async (req, res) => {
  try {
    const AccountNumber = req.headers.AccountNumber;
    const Product = req.headers.Product;

    const url = BACK_BASE + "/Withdrawal/ClientFinancialInfo";
    const ClientInfo = {
      Product: Product,
      AccountNo: AccountNumber,
    };

    const response = await axios.post(url, ClientInfo);

    if (response.data.Data.status == "Ok") {
      res.json({
        status: "success",
        maxWithdrawalAmount: response.data.Data.data[0].MaxWithdrawalAmount,
      });
    } else {
      res.json({ status: "fail", message: "Something Went Wrong" });
    }
  } catch (error) {
    res.json({ status: "server_fail", message: error.message });
  }
};

// real time withdrawal request
export const RealTimeWithdrawRequest = async (req, res) => {
  try {
    const { clientBankAccID, amount, mode } = req.body;
    const AccountNumber = req.headers.AccountNumber;
    const Product = req.headers.Product;
    const financialInfoUrl = BACK_BASE + "/Withdrawal/ClientFinancialInfo";
    const clientFinancialInfo = await axios.post(financialInfoUrl,{
      Product: Product,
      AccountNo: AccountNumber,
    })
    if(clientFinancialInfo.data.Data.data[0].MaxWithdrawalAmount<amount){
      return res.json({status:"fail",message:"Amount is greater than maximum withdrawal amount"})
    }
    const BankInformation = {
      AccountNumber: AccountNumber,
      ProductID: Product,
      ClientBankAccID: clientBankAccID,
      Amount: amount,
      Mode: mode,
    };
    const url = BACK_BASE + "/Withdrawal/RealTime";
    const response = await axios.post(url, BankInformation);
    if (response.data.Data.data == "request_successful") {
      res.json({ status: "success", message: "Withdrawal Request Successful" });
    } else {
      res.json({ status: "fail", message: "Something Went Wrong" });
    }
  } catch (error) {
    res.json({ status: "server_fail", message: error.message });
  }
};

// registered bank information submit for cheque

export const RegisteredBankRequest = async (req, res) => {
  if (!req.file) {
    try {
      const { clientBankAccID, amount } = req.body;
    
      if (amount === "" || clientBankAccID === "") {
        return res.json({
          status: "fail",
          message: "Please fill all the fields",
        });
      } else if (
        ValidationHelper.isNullOrUndefined(amount) ||
        ValidationHelper.isNullOrUndefined(clientBankAccID)
      ) {
        return res.json({
          status: "fail",
          message: "Please fill all the fields",
        });
      } else {
        const AccountNumber = req.headers.AccountNumber;
        const Product = req.headers.Product;
        const BankInformation = {
          AccountNumber: AccountNumber,
          ProductID: Product,
          ClientBankAccID: clientBankAccID,
          Amount: amount,
          Amount: amount,
          ChequeReceiver: "self",
          ChequeReceiverName: "",
          uri: null,
          fileType: null,
        };
        
        const url = BACK_BASE + "/Withdrawal/ChequePayee/Registeredbank";
        const response = await axios.post(url, BankInformation);

        if (response.data.Data.data == "request_successful") {
          return res.json({
            status: "success",
            message: "Withdrawal Request Successful",
          });
        }
      }
    } catch (error) {
      return res.json({ status: "server_fail", message: error.message });
    }
  } else {
    try {
      const {
        clientBankAccID,
        amount,
        chequeReceiver,
        chequeReceiverName,
      } = req.body;

      const docFile = req.file;
      const isValidImage = ValidationHelper.IsValidImageFileType(
        docFile.mimetype
      );
      if (!isValidImage) {
        return res.json({
          status: "imageFail",
          message:
            "Only image files (gif jpeg jpg tiff  png webp bmp pdf agif svg heic) are allowed.",
        });
      } else if (
        amount === "" ||
        clientBankAccID === "" ||
        chequeReceiverName === "" ||
        chequeReceiver === ""
      ) {
        return res.json({
          status: "fail",
          message: "Please fill all the fields",
        });
      } else if (
        ValidationHelper.isNullOrUndefined(amount) ||
        ValidationHelper.isNullOrUndefined(clientBankAccID) ||
        ValidationHelper.isNullOrUndefined(chequeReceiverName) ||
        ValidationHelper.isNullOrUndefined(chequeReceiver)
      ) {
        return res.json({
          status: "fail",
          message: "Please fill all the fields",
        });
      } else {
        // Extracting file details
        const fileDetails = {
          name: docFile.originalname,
          type: docFile.mimetype,
          uri: `${docFile.buffer.toString("base64")}`,
        };
        const AccountNumber = req.headers.AccountNumber;
        const Product = req.headers.Product;
        let fyleTypeForm = "";
        if (fileDetails.type.split("/")[0] === "image") {
          fyleTypeForm = "image";
        } else {
          fyleTypeForm = fileDetails.type.split("/")[1];
        }

        const BankInformation = {
          AccountNumber: AccountNumber,
          ProductID: Product,
          ClientBankAccID: clientBankAccID,
          Amount: amount,
          ChequeReceiver: chequeReceiver,
          ChequeReceiverName: chequeReceiverName,
          FileType: fyleTypeForm,
          uri: fileDetails.uri,
        };
        const url = `${BACK_BASE}/Withdrawal/ChequePayee/Registeredbank`;

        const response = await axios.post(url, BankInformation);
        if (response.data.Data.data === "request_successful") {
          return res.json({ status: "success", message: "Deposit Successful" });
        } else {
          return res.json({ status: "fail", message: "Something Went Wrong" });
        }
      }
    } catch (error) {
      return res.json({ status: "server_fail", message: error.message });
    }
  }
};

// third party bank withdrawal request for cheque

export const ThirdPartyBankRequest = async (req, res) => {
  if (!req.file) {
    try {
      const { amount, bankAccNo, bankRoutingNo } = req.body;
      if (amount === "" || bankAccNo === "" || bankRoutingNo === "") {
        return res.json({
          status: "fail",
          message: "Please fill all the fields",
        });
      } else if (
        ValidationHelper.isNullOrUndefined(amount) ||
        ValidationHelper.isNullOrUndefined(bankAccNo) ||
        ValidationHelper.isNullOrUndefined(bankRoutingNo)
      ) {
        return res.json({
          status: "fail",
          message: "Please fill all the fields",
        });
      } else {
        const AccountNumber = req.headers.AccountNumber;
        const Product = req.headers.Product;
        const BankInformation = {
          AccountNumber: AccountNumber,
          ProductID: Product,
          BankAccNo: bankAccNo,
          BankRoutingNo: bankRoutingNo,
          Amount: amount,
          ChequeReceiverName: "",
          chequeReceiver: "self",
          uri: null,
          FileType: null,
        };
        const url = BACK_BASE + "/Withdrawal/ChequePayee/ThirdPartyBank";
        const response = await axios.post(url, BankInformation);

        if (response.data.Data.data == "request_successful") {
          return res.json({
            status: "success",
            message: "Withdrawal Request Successful",
          });
        }
      }
    } catch (error) {
      return res.json({ status: "server_fail", message: error.message });
    }
  } else {
    try {
      const {
        amount,
        bankAccNo,
        bankRoutingNo,
        chequeReceiverName,
        chequeReceiver,
      } = req.body;

      const docFile = req.file;
      const isValidImage = ValidationHelper.IsValidImageFileType(
        docFile.mimetype
      );
      if (!isValidImage) {
        return res.json({
          status: "imageFail",
          message:
            "Only image files (gif jpeg jpg tiff  png webp bmp pdf agif svg heic) are allowed.",
        });
      } else if (
        amount === "" ||
        bankAccNo === "" ||
        bankRoutingNo === "" ||
        chequeReceiverName === "" ||
        chequeReceiver === ""
      ) {
        return res.json({
          status: "fail",
          message: "Please fill all the fields",
        });
      } else if (
        ValidationHelper.isNullOrUndefined(amount) ||
        ValidationHelper.isNullOrUndefined(bankAccNo) ||
        ValidationHelper.isNullOrUndefined(bankRoutingNo) ||
        ValidationHelper.isNullOrUndefined(chequeReceiverName) ||
        ValidationHelper.isNullOrUndefined(chequeReceiver)
      ) {
        return res.json({
          status: "fail",
          message: "Please fill all the fields",
        });
      } else {
        // Extracting file details
        const fileDetails = {
          name: docFile.originalname,
          type: docFile.mimetype,
          uri: `${docFile.buffer.toString("base64")}`,
        };
        const AccountNumber = req.headers.AccountNumber;
        const Product = req.headers.Product;
        let fyleTypeForm = "";
        if (fileDetails.type.split("/")[0] === "image") {
          fyleTypeForm = "image";
        } else {
          fyleTypeForm = fileDetails.type.split("/")[1];
        }

        const BankInformation = {
          AccountNumber: AccountNumber,
          ProductID: Product,
          BankAccNo: bankAccNo,
          BankRoutingNo: bankRoutingNo,
          Amount: amount,
          ChequeReceiverName: chequeReceiverName,
          ChequeReceiver: chequeReceiver,
          FileType: fyleTypeForm,
          uri: fileDetails.uri,
        };

        const url = `${BACK_BASE}/Withdrawal/ChequePayee/ThirdPartyBank`;

        const response = await axios.post(url, BankInformation);
        if (response.data.Data.data === "request_successful") {
          return res.json({ status: "success", message: "Deposit Successful" });
        } else {
          return res.json({ status: "fail", message: "Something Went Wrong" });
        }
      }
    } catch (error) {
      return res.json({ status: "server_fail", message: error.message });
    }
  }
};
