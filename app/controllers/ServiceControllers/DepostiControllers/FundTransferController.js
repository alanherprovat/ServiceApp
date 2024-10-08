import axios from "axios";
import { BACK_BASE } from "../../../config/config.js";
import ValidationHelper from "../../../utility/validationUtility.js";

// fund transfer request for register client bank account.....
export const FundTransferRequest = async (req, res) => {
  try {
    const { DepositBankAccID, ClientBankAccID, Amount } = req.body;
    const docFile = req.file;
    const isValidImage = ValidationHelper.IsValidImageFileType(
      docFile.mimetype
    );
    if (!isValidImage) {
      return res.json({
        status: "imageFail",
        message:
          "Only image files (gif jpeg jpg tiff  png webp bmp pdf agif svg) are allowed.",
      });
    } else if (
      ValidationHelper.isNullOrUndefined(ClientBankAccID) ||
      ValidationHelper.isNullOrUndefined(DepositBankAccID) ||
      ValidationHelper.isNullOrUndefined(Amount)
    ) {
      return res.json({
        status: "fail",
        message: "Please fill all the fields",
      });
    } else if (
      ClientBankAccID === "" ||
      DepositBankAccID === "" ||
      Amount === ""
    ) {
      return res.json({
        status: "fail",
        message: "Please fill all the fields",
      });
    } else {
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
      const formData = {
        DepositBankAccID: DepositBankAccID,
        Amount: Amount,
        ProductID: Product,
        AccountNumber: AccountNumber,
        ClientBankAccID: ClientBankAccID,
        uri: fileDetails.uri,
        FileType: fyleTypeForm,
      };

      const url = `${BACK_BASE}/Deposit/FundTransfer`;
      const response = await axios.post(url, formData);
      if (response.data.Data.data === "request_successful") {
        res.json({ status: "success", message: "Deposit Successful" });
      } else {
        res.json({ status: "fail", message: "Something Went Wrong" });
      }
    }
  } catch (error) {
    res.json({ status: "server_fail", message: error.message });
  }
};

// cash deposit for non register bank client

export const ThirdPartyTransfer = async (req, res) => {
  try {
    const {
      DepositBankAccID,
      ClientBankAccID,
      ClientBranchID,
      ClientBranchName,
      RoutingNumber,
      ClientBankAccountName,
      Amount,
    } = req.body;
    const docFile = req.file;
    const isValidImage = ValidationHelper.IsValidImageFileType(
      docFile.mimetype
    );
    if (!isValidImage) {
      return res.json({
        status: "imageFail",
        message:
          "Only image files (gif jpeg jpg tiff  png webp bmp pdf agif svg) are allowed.",
      });
    } else if (
      ValidationHelper.isNullOrUndefined(ClientBankAccID) ||
      ValidationHelper.isNullOrUndefined(ClientBranchID) ||
      ValidationHelper.isNullOrUndefined(ClientBranchName) ||
      ValidationHelper.isNullOrUndefined(RoutingNumber) ||
      ValidationHelper.isNullOrUndefined(ClientBankAccountName) ||
      ValidationHelper.isNullOrUndefined(Amount) ||
      ValidationHelper.isNullOrUndefined(DepositBankAccID)
    ) {
      return res.json({
        status: "fail",
        message: "Please fill all the fields",
      });
    } else if (
      ClientBankAccID === "" ||
      ClientBranchID === "" ||
      ClientBranchName === "" ||
      RoutingNumber === "" ||
      ClientBankAccountName === "" ||
      Amount === "" ||
      DepositBankAccID === ""
    ) {
      return res.json({
        status: "fail",
        message: "Please fill all the fields",
      });
    } else {
      const fileDetails = {
        name: docFile.originalname,
        type: docFile.mimetype,
        uri: `${docFile.buffer.toString("base64")}`,
      };
      const url = BACK_BASE + "/Deposit/ThirdPartyFundTransfer";
      const AccountNumber = req.headers.AccountNumber;
      const Product = req.headers.Product;
      let fyleTypeForm = "";
      if (fileDetails.type.split("/")[0] === "image") {
        fyleTypeForm = "image";
      } else {
        fyleTypeForm = fileDetails.type.split("/")[1];
      }
      const thirdPartyBankInformation = {
        Product: Product,
        AccountNo: AccountNumber,
        DepositBankAccID: DepositBankAccID,
        BankID: ClientBankAccID,
        BankName: ClientBankAccountName,
        BranchID: ClientBranchID,
        BranchName: ClientBranchName,
        RoutingNo: RoutingNumber,
        Amount: Amount,
        uri: fileDetails.uri,
        FileType: fyleTypeForm,
      };

      const response = await axios.post(url, thirdPartyBankInformation, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.data.Data.data === "request_successful") {
        res.json({ status: "success", message: "Deposit Request Successful" });
      } else {
        res.json({ status: "fail", message: "Deposit Request Fail" });
      }
    }
  } catch (error) {
    res.json({
      status: "server_fail",
      message: error.response?.data?.message || error.message,
    });
  }
};
