import axios from "axios";
import { BaseURL } from "../config/config";
import axiosInstance from "../config/axioInstance";

export async function GetBankDetailsRequest(AccountNo) {
    try{
        // const result = await axios.get(BaseURL + "/BankDetails/BankDetails/"+AccountNo);
        let result = {
            "status": "success",
            "message": "Bank Read Successful",
            "data": {
                "idlcAccountNo": null,
                "bankAccountName": null,
                "bankName": null,
                "bankID": null,
                "branchName": null,
                "branchID": null,
                "routingNumber": null,
                "bankAccountNo": null
            }
        }
        
        return result?.data;
    }
    catch (e) {
        console.log(e);
        return null;
    }
}
 export async function GetDepositBankDetails(){
    
    try {
        const response  = await axiosInstance.get("/depositbankaccount");
        // console.log(response.data);
        return response?.data
    } catch (error) {
        console.log(error);
    }
 }
 export async function ClientBankDetails(){
    try {
        const response  = await axiosInstance.get("/clientbankinformation");
        console.log(response.data);
        return response?.data
    } catch (error) {
        console.log(error);
    }
 }
//  getbankinfousingrouting/:routingnumber
export async function ClientDetailsByRoutingNumber(routingNumber){
    console.log(routingNumber);
    try {
        const response = await axiosInstance.get(`/getbankinfousingrouting/${routingNumber}`)
        console.log(response.data)
        return response?.data;
    } catch (error) {
     console.log(error);   
    }
}
export async function GetAllBanks() {
    try {
        const response = await axiosInstance.get("/allbankaccount");
        return response?.data;
    } catch (error) {
        console.log(error);
    }
}
export async function GetBranch(bankOrgID) {
    try {
        const response = await axiosInstance.get(`/bankbranchnames/${bankOrgID}`)
        // console.log(response.data);
        return response?.data;
    } catch (error) {
        console.log(error);
    }
}


export async function GetClientRegisteredBankInformation(token){
    try {
        const response  = await axiosInstance.get("/clientRegisteredBankInfo");
        console.log(response.data);
        return response?.data
    } catch (error) {
        console.log(error);
    }
 }