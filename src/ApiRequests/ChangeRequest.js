import { ErrorToast, SuccessToast } from "../components/CommonComponents/Toasts";
import axiosInstance from "../config/axioInstance"
import { extensionToMimeType } from "../config/ExtensionToMimeType";
export async function FetchAddressInfo() {
    try {
        const response = await axiosInstance.get('/fetchAddressInfo');
        console.log(response.data);
        return response.data.data;
    } catch (error) {
        console.log(error);
    }
}
export async function submitAddressChangeRequest(data) {
    try {
        console.log(data);
       const url="/changeAddressInfo"
       const Document = data.attachment
       console.log("sentAttachment",Document)
       const fileName = Document.split("/")[Document.split("/").length - 1];
    //    console.log("fileName", fileName);
       const mimeType = extensionToMimeType["." + fileName.split(".")[1]];
    //    console.log(fileName.split("."));
       console.log(mimeType);
       const file = {
         uri: Document,
         type: mimeType,
         name: fileName,
       };
       console.log("file", file);
       const formData = new FormData();
       formData.append("presentAddressID", data.presentAddressID);
       formData.append("presentAddress", data.presentAddress);
       formData.append("docFile", file);
       console.log("FormData",formData);
       const response = await axiosInstance.post(url,formData,{
        headers:{
            "content-Type": "multipart/form-data",
        }
       })
       console.log(response.data.message);
       if(response.data.status==="fail"){
        ErrorToast(response.data.message)
       }else{
        SuccessToast(response.data.message);
       }
       
       return response.data;
    } catch (error) {
        ErrorToast(error);
    }
}
export async function registeredBankInfo() {
    try {
       const response = await axiosInstance.get("/fetchBankInfo");
       console.log(response.data);
       return response.data.data;  
    } catch (error) {
        console.log(error)
    }
}
export async function submitBankRequest(data) {
    try {
        const url="/saveBankInformation";
        const Document = data.attachment
       console.log("sentAttachment",Document)
       const fileName = Document.split("/")[Document.split("/").length - 1];
    //    console.log("fileName", fileName);
       const mimeType = extensionToMimeType["." + fileName.split(".")[1]];
    //    console.log(fileName.split("."));
       console.log(mimeType);
       const file = {
         uri: Document,
         type: mimeType,
         name: fileName,
       };
       console.log("file", file);
       const formData = new FormData();
       formData.append("bankID", data.bankID);
       formData.append("bankAccName", data.bankAccName);
       formData.append("bankAccountNo",data.bankAccountNo);
       formData.append("branchID",data.branchID),
       formData.append("branchName",data.branchName),
       formData.append("routingNo",data.routingNo);
       formData.append("docFile", file);
       console.log("FormData",formData);
       const response = await axiosInstance.post(url,formData,{
        headers:{
            "content-Type": "multipart/form-data",
        }
       })
       console.log(response.data.message);
       if(response.data.status==="fail"){
        ErrorToast(response.data.message)
       }if(response.data.status==="server_fail"){
        ErrorToast(response.data.message)
       }else{
        SuccessToast(response.data.message);
       }
       
       return response.data;
    } catch (error) {
        console.log(error)
    }
}
export async function SignatureRequest(data) {
    try {
        const Document = data.attachment;
        const fileName = Document.split("/")[Document.split("/").length-1];
        console.log(fileName);
        const mimeType = extensionToMimeType["."+fileName.split(".")[1]];
        console.log(mimeType);
        const file = {
            uri: Document,
            type: mimeType,
            name: fileName,
          };
          console.log("file", file);
         const formData = new FormData();
         formData.append("docFile",file)
         const response = await axiosInstance.post("/changeSignature",formData,{
            headers:{
                "content-Type": "multipart/form-data",
            }

         })
         console.log(response.data.message);
       if(response.data.status==="fail"){
        ErrorToast(response.data.message)
       }if(response.data.status==="server_fail"){
        ErrorToast(response.data.message)
       }else{
        SuccessToast(response.data.message);
       }
         return response.data;
         
    } catch (error) {
        ErrorToast(error)
        console.log(error)
        return error;
    }
}

export async function GetTinInfo() {
    try {
        const response = await axiosInstance.get('/getTinNumber');
        console.log(response.data);
        return response.data.data;
    } catch (error) {
        console.log(error);
    }
}

export async function submitTinChangeRequest(data) {
    try {
       console.log(data);
       const url="/saveTinNumber"
       const Document = data.attachment
       console.log("sentAttachment",Document)
       const fileName = Document.split("/")[Document.split("/").length - 1];
    //    console.log("fileName", fileName);
       const mimeType = extensionToMimeType["." + fileName.split(".")[1]];
    //    console.log(fileName.split("."));
       console.log(mimeType);
       const file = {
         uri: Document,
         type: mimeType,
         name: fileName,
       };
       console.log("file", file);
       const formData = new FormData();
       formData.append("tinNo", data.tinNo);
       formData.append("docFile", file);
       console.log("FormData",formData);
       const response = await axiosInstance.post(url,formData,{
        headers:{
            "content-Type": "multipart/form-data",
        }
       })
       console.log(response.data.message);
       if(response.data.status==="fail"){
        ErrorToast(response.data.message)
       }else{
        SuccessToast(response.data.message);
       }
       
       return response.data;
    } catch (error) {
        console.error("Submission Error:", error); 
    ErrorToast("Error", error.message || "An error occurred while submitting the TIN change request.");
    }
}

export async function GetContactInfo() {
    try {
        const response = await axiosInstance.get('/getContactInfo');
        console.log(response.data);
        return response.data.data;
    } catch (error) {
        console.log(error);
    }
}

export async function SubmitContactInfoChangeRequest(data) {
    console.log("ContactInfo",data);
    const url = "/changeContactInfo";
    try {
    console.log("under try",data);
      const response = await axiosInstance.post(url, data);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Error:", error?.response?.data || error.message);
      ErrorToast(error?.response?.data || error.message);
    }
  }