// save adderss information

import axios from "axios";
import { BACK_BASE } from "../../../config/config.js";
import ValidationHelper from "../../../utility/validationUtility.js";

// save address information
export const SaveAddressInformation = async (req, res) => {
  try {
    const { presentAddressID, presentAddress } = req.body;
    const docFile = req.file;
    const isValidImage = ValidationHelper.IsValidImageFileType(
      docFile.mimetype
    );
    if (
      ValidationHelper.isNullOrUndefined(presentAddressID) ||
      ValidationHelper.isNullOrUndefined(presentAddress)
    ) {
      return res.json({
        status: "fail",
        message: "Please fill all the fields",
      });
    } else if (!isValidImage) {
      return res.json({
        status: "imageFail",
        message:
          "Only image files (gif jpeg jpg tiff  png webp bmp pdf agif svg) are allowed.",
      });
    } else {
      const fileDetails = {
        name: docFile.originalname,
        type: docFile.mimetype,
        uri: `${docFile.buffer.toString("base64")}`,
      };
      let fyleTypeForm = "";
      if (fileDetails.type.split("/")[0] === "image") {
        fyleTypeForm = "image";
      } else {
        fyleTypeForm = fileDetails.type.split("/")[1];
      }

      const AccountNumber = req.headers.AccountNumber;
      const Product = req.headers.Product;

      const formData = {
        AccountNo: AccountNumber,
        Product: Product,
        AddressID: presentAddressID,
        Address: presentAddress,
        Uri: fileDetails.uri,
        FileType: fyleTypeForm,
      };
      const url = BACK_BASE + "/InfoChangeReq/ChangeAddressInfo";
      const response = await axios.post(url, formData);
      if (response.data.Data.data === "request_successful") {
        res.json({
          status: "success",
          message: "Address Change Request Placed successfully",
        });
      } else {
        res.json({ status: "fail", message: "Something went wrong" });
      }
    }
  } catch (error) {
    return res.json({ status: "server_fail", message: error.toString() });
  }
};

// save bank information

export const SaveBankInformation = async (req, res) => {
  try {
    const {
      bankID,
      bankAccName,
      branchID,
      branchName,
      routingNo,
      bankAccountNo,
    } = req.body;

    const docFile = req.file;
    const isValidImage = ValidationHelper.IsValidImageFileType(
      docFile.mimetype
    );
    if (
      ValidationHelper.isNullOrUndefined(bankID) ||
      ValidationHelper.isNullOrUndefined(bankAccName) ||
      ValidationHelper.isNullOrUndefined(branchID) ||
      ValidationHelper.isNullOrUndefined(branchName) ||
      ValidationHelper.isNullOrUndefined(routingNo) ||
      ValidationHelper.isNullOrUndefined(bankAccountNo)
    ) {
      return res.json({
        status: "fail",
        message: "Please fill all the fields",
      });
    } else if (!isValidImage) {
      return res.json({
        status: "imageFail",
        message:
          "Only image files (gif jpeg jpg tiff  png webp bmp pdf agif svg) are allowed.",
      });
    } else {
      const fileDetails = {
        name: docFile.originalname,
        type: docFile.mimetype,
        uri: `${docFile.buffer.toString("base64")}`,
      };
      let fyleTypeForm = "";
      if (fileDetails.type.split("/")[0] === "image") {
        fyleTypeForm = "image";
      } else {
        fyleTypeForm = fileDetails.type.split("/")[1];
      }
      const AccountNumber = req.headers.AccountNumber;
      const Product = req.headers.Product;
      const formData = {
        AccountNo: AccountNumber,
        Product: Product,
        BankID: bankID,
        BankAccName: bankAccName,
        BranchID: branchID,
        BankBranch: branchName,
        RoutingNo: routingNo,
        BankAccountNo: bankAccountNo,
        Uri: fileDetails.uri,
        FileType: fyleTypeForm,
      };
      const url = BACK_BASE + "/InfoChangeReq/ChangeBankInfo";
      const response = await axios.post(url, formData);
      if (response.data.Data.data === "request_successful") {
        res.json({
          status: "success",
          message: "Bank Request Change Placed successfully",
        });
      } else {
        res.json({ status: "fail", message: "Something went wrong" });
      }
    }
  } catch (error) {
    return res.json({ status: "server_fail", message: error.toString() });
  }
};

// save tin number
export const SaveTinNumber = async (req, res) => {
  try {
    const { tinNo } = req.body;
    const docFile = req.file;
    const isValidImage = ValidationHelper.IsValidImageFileType(
      docFile.mimetype
    );
    if (ValidationHelper.isNullOrUndefined(tinNo)) {
      return res.json({
        status: "fail",
        message: "Please fill all the fields",
      });
    } else if (!isValidImage) {
      return res.json({
        status: "imageFail",
        message:
          "Only image files (gif jpeg jpg tiff  png webp bmp pdf agif svg) are allowed.",
      });
    } else {
      const fileDetails = {
        name: docFile.originalname,
        type: docFile.mimetype,
        uri: `${docFile.buffer.toString("base64")}`,
      };
      let fyleTypeForm = "";
      if (fileDetails.type.split("/")[0] === "image") {
        fyleTypeForm = "image";
      } else {
        fyleTypeForm = fileDetails.type.split("/")[1];
      }
      const AccountNumber = req.headers.AccountNumber;
      const Product = req.headers.Product;
      const formData = {
        accountNo: AccountNumber,
        product: Product,
        TinNo: tinNo,
        Uri: fileDetails.uri,
        FileType: fyleTypeForm,
      };
      const url = BACK_BASE + "/InfoChangeReq/ChangeTINNumber";
      const response = await axios.post(url, formData);
     
      if (response.data.Data.data === "request_successful") {
        res.json({
          status: "success",
          message: "TIN Change Request Placed successfully",
        });
      } else {
        res.json({ status: "fail", message: "Something went wrong" });
      }
    }
  } catch (error) {
    return res.json({ status: "server_fail", message: error.toString() });
  }
};

// save Contact Information
export const ChangeContactInfo = async (req, res) => {
  try {
    const { alternativePhone, alternativeEmail } = req.body;
    if (
      ValidationHelper.isNullOrUndefined(alternativePhone) ||
      ValidationHelper.isNullOrUndefined(alternativeEmail)
    ) {
      return res.json({
        status: "fail",
        message: "Please fill all the fields",
      });
    } else {
      const AccountNumber = req.headers.AccountNumber;
      const Product = req.headers.Product;

      const formData = {
        accountNo: AccountNumber,
        product: Product,
        phoneNo: alternativePhone,
        email: alternativeEmail,
      };

      const url = BACK_BASE + "/InfoChangeReq/ChangeContactInfo";
      const response = await axios.post(url, formData);
      
      if(response.data.Data.data === "contact_change_request_successful"){
        return res.json({status: "success", message: "Contact change request successful" });
      }
      else if(response.data.Data.data === "email_change_request_successful"){
        return res.json({status: "success", message: "Email change request successful" });
      }
      else if(response.data.Data.status === "Fail") {
        res.json({ status: "fail", message: response.data.Data.message });
      }
      else if (response.data.Data.status === "Ok") {
        res.json({
          status: "success",
          message: `Contact - ${response.data.Data.data.status_contact} & Email - ${response.data.Data.data.status_email}`,
        });
      }
      else {
        res.json({ status: "fail", message: "Something went wrong" });
      }
    }
  } catch (error) {
    return res.json({ status: "server_fail", message: error.toString() });
  }
};

// signature change

export const ChangeSignature = async (req, res) => {
  try {
    const AccountNumber = req.headers.AccountNumber;
    const Product = req.headers.Product;

    const url = BACK_BASE + "/InfoChangeReq/FetchAccountInfo";

    const userInfo = {
      Product: Product,
      AccountNo: AccountNumber,
    };

    const response = await axios.post(url, userInfo);
    const contractID = response.data.Data.data.ContractID;
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
    } else {
      const fileDetails = {
        name: docFile.originalname,
        type: docFile.mimetype,
        uri: `${docFile.buffer.toString("base64")}`,
      };
      let fyleTypeForm = "";
      if (fileDetails.type.split("/")[0] === "image") {
        fyleTypeForm = "image";
      } else {
        fyleTypeForm = fileDetails.type.split("/")[1];
      }
      const formData = {
        ContractID: contractID,
        Uri: fileDetails.uri,
        FileType: fyleTypeForm,
      };
      const url = BACK_BASE + "/InfoChangeReq/ChangeSignature";
      const response = await axios.post(url, formData);

      if (response.data.Data.data === "request_successful") {
        return res.json({
          status: "success",
          message: "Request Successful",
        });
      } else {
        return res.json({
          status: "fail",
          message: "Something Went Wrong",
        });
      }
    }
  } catch (error) {
    return res.json({ status: "server_fail", message: error.toString() });
  }
};
