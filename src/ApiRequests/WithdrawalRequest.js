import axios from "axios";
import { BaseURL } from "../config/config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axiosInstance from "../config/axioInstance";

//  /thirdPartyBankRequest for Cheque
export async function otherBankChequeReceivedByOther(data){
    const token = await AsyncStorage.getItem("UserToken");
    try {
        // console.log("first")
            const result = await axios.post(BaseURL + "/thirdPartyBankRequest", data,{
                headers:{
                    Authorization:`Bearer ${token}`
                }
                });

            console.log("axios response data", result.data);
            return result.data;
        }
        catch (error) {
            console.log("inside Catch block");
            console.log(error);   
        }
}

export async function otherBankChequeReceivedBySelf(data){
    // console.log(data)
    const token = await AsyncStorage.getItem("UserToken");
    try {
            const result = await axios.post(BaseURL + "/thirdPartyBankRequest", data,{
                headers:{
                    Authorization:`Bearer ${token}`
                }
                });

            console.log("axios response data", result.data);
            return result.data;
        }
        catch (error) {
            console.log("inside Catch block");
            console.log(error);   
        }
}

// /registerBankRequest for Cheque

export async function registeredBankChequeReceivedByOther(data){
    const token = await AsyncStorage.getItem("UserToken");
    try {
        // console.log("first")
            const result = await axios.post(BaseURL + "/registerBankRequest", data,{
                headers:{
                    Authorization:`Bearer ${token}`
                }
                });

            console.log("axios response data", result.data);
            return result.data;
        }
        catch (error) {
            console.log("inside Catch block");
            console.log(error);   
        }
}

export async function registeredBankChequeReceivedBySelf(data){
    console.log(data)
    const token = await AsyncStorage.getItem("UserToken");
    try {
            const result = await axios.post(BaseURL + "/registerBankRequest", data,{
                headers:{
                    Authorization:`Bearer ${token}`
                }
                });

            console.log("axios response data", result.data);
            return result.data;
        }
        catch (error) {
            console.log("inside Catch block");
            console.log(error);   
        }
}




// Bank financial info 
export async function ClientFinancialInfo() {
    const token = await AsyncStorage.getItem("UserToken");
    try {
      const response = await axiosInstance.get("/clientFinancialInfo");
      return response?.data?.maxWithdrawalAmount;
    } catch (error) {
      console.log(error);
    }
  }



  //rtgs /beftn
  export async function SubmitWithdrawalApplication(data) {
    console.log("SubmitWithdrawalApplication",data);
    const url = "/realTimeWithdrawRequest";
    try {
      console.log("withdraw");
      const response = await axiosInstance.post(url, data);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Error:", error?.response?.data || error.message);
      ErrorToast(error?.response?.data || error.message);
    }
  }