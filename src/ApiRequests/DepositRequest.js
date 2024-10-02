import axios from "axios";
import { BaseURL } from "../config/config";
import {
  ErrorToast,
  SuccessToast,
} from "../components/CommonComponents/Toasts";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { extensionToMimeType } from "../config/ExtensionToMimeType";
import axiosInstance from "../config/axioInstance";

export async function CashDeposit(data) {
  console.log(data);
  const url = "/cashdepositrequest";
  const Document = data.Attachment;
  console.log(Document);
  const fileName = Document.split("/")[Document.split("/").length - 1];
  console.log("fileName", fileName);
  const mimeType = extensionToMimeType["." + fileName.split(".")[1]];
  console.log(fileName.split(".")[1]);
  console.log(mimeType);
  let file = {
    uri: Document,
    type: mimeType,
    name: fileName,
  };
  console.log("file", file);
  const formData = new FormData();
  formData.append("cases", data.DepositType);
  formData.append("DepositBankAccID", data.DepositBankID);
  formData.append("DepositBankName",data.DepositBankName);
  formData.append("Amount", data.Amount);
  formData.append("docFile", file);
  console.log("FormData",formData);
  try {
    console.log("token");
    // const response = await axios.post("http://192.168.115.64:7046/api/Deposit/CashDepositRequest",formData,{
    const response = await axiosInstance.post(url, formData, {
      headers: {
        "content-Type": "multipart/form-data",
      },
    });
    console.log(response.data);
    if(response.data.status==="fail"){
        console.log("Error");
        ErrorToast(response.data.message);
    }else{
        SuccessToast(response.data.message);
    }
    
    // return response.data;
  } catch (error) {
    console.error("Error:", error?.response?.data || error.message);
    ErrorToast(error?.response?.data || error.message);
  }
}
export async function FundDepositRegisteredBank(data) {
  console.log(data);
  const url = "/fundtransferrequest";
  const Document = data.Attachment;
  console.log(Document);
  const fileName = Document.split("/")[Document.split("/").length - 1];
  console.log("fileName", fileName);
  const mimeType = extensionToMimeType["." + fileName.split(".")[1]];
  console.log(fileName.split(".")[1]);
  console.log(mimeType);
  let file = {
    uri: Document,
    type: mimeType,
    name: fileName,
  };
  console.log("file", file);
  const formData = new FormData();
  formData.append("cases", data.DepositType);
  formData.append("DepositBankAccID", data.DepositBankID);
  formData.append("ClientBankAccID", data.ClientBankID);
  formData.append("Amount", data.Amount);
  formData.append("docFile", file);
  console.log("FormData",formData);
  try {
    console.log("token");
    // const response = await axios.post("http://192.168.115.64:7046/api/Deposit/CashDepositRequest",formData,{
    const response = await axiosInstance.post(url, formData, {
      headers: {
        "content-Type": "multipart/form-data",
      },
    });
    console.log(response.data);
    if(response.data.status==="amountFail"){
        console.log("Error");
        ErrorToast(response.data.message);
    }else if(response.data.status==="imageFail"){
      ErrorToast(response.data.message);
    }else{
        SuccessToast(response.data.message);
    }
    
    return response.data;
    // return response.data;
  } catch (error) {
    console.error("Error:", error?.response?.data || error.message);
    ErrorToast(error?.response?.data || error.message);
  }
}
export async function FundDepositThirdParty(data) {
  console.log(data);
  const url = "/fundtransferrequestforunregistered";
  const Document = data.Attachment;
  console.log(Document);
  const fileName = Document.split("/")[Document.split("/").length - 1];
  console.log("fileName", fileName);
  const mimeType = extensionToMimeType["." + fileName.split(".")[1]];
  console.log(fileName.split(".")[1]);
  console.log(mimeType);
  let file = {
    uri: Document,
    type: mimeType,
    name: fileName,
  };
  console.log("file", file);
  const formData = new FormData();
  formData.append("cases", data.DepositType);
  formData.append("DepositBankAccID", data.DepositBankID);
  formData.append("ClientBankAccountName",data.ClientBankName);
  formData.append("ClientBankAccID", data.ClientBankID);
  formData.append("ClientBranchID",data.ClientBranchID);
  // ClientBranchName:clientBankData.BranchName,
  //         RoutingNumber:clientBankData.RoutingNumber
  formData.append("ClientBranchName",data.ClientBranchName),

  formData.append("RoutingNumber",data.RoutingNumber)
  formData.append("Amount", data.Amount);
  formData.append("docFile", file);
  console.log("FormData",formData);
  try {
    console.log("token");
    // const response = await axios.post("http://192.168.115.64:7046/api/Deposit/CashDepositRequest",formData,{
    const response = await axiosInstance.post(url, formData, {
      headers: {
        "content-Type": "multipart/form-data",
      },
    });
    console.log(response.data);
    if(response.data.status==="fail"){
        console.log("Error");
        ErrorToast(response.data.message);
    }else if(response.data.status==="imageFail"){
      ErrorToast(response.data.message);
    }else if(response.data.status==="server_fail"){
      ErrorToast(response.data.message);
    }else{
        SuccessToast(response.data.message);
    }
    
    return response.data.message;
    // return response.data;
  } catch (error) {
    console.error("Error:", error?.response?.data || error.message);
    ErrorToast(error?.response?.data || error.message);
  }
}