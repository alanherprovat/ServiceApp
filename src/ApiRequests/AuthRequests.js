import axios from "axios";
import { BaseURL } from "../config/config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ErrorToast, SuccessToast } from "../components/CommonComponents/Toasts";
import axiosInstance from "../config/axioInstance";

export const loginRequest = async(loginData)=>{
    try {
        console.log(loginData);
        const email = loginData.email;
        const password = loginData.password;
        console.log(email,password);
        const response = await axios.post(BaseURL+"/doUserLogin",{email,password});
        console.log(response.data.message);
        console.log(response.data.token);
        await AsyncStorage.setItem("UserToken",response.data.token);
        await AsyncStorage.setItem("UserData",JSON.stringify(response.data));
        SuccessToast(response.data.message);
        return response.data;
    } catch (error) {
        console.log("Error: ",e, JSON.stringify(e));
        await AsyncStorage.setItem('UserID', "");
        ErrorToast("Login Failed");
        return false;
    }
}
// /logout 
export const Logout = async()=>{
    console.log("logout invoked");
   try {
    console.log("Inside Try Block")
    const response = await axiosInstance.get("/logout");
    console.log(response.data);
    return response.data;
   } catch (error) {
    ErrorToast(error);
   }
}
export const jwtVerify = async () => {
    try {
        const response = await axiosInstance.get("/getJWTverify");
        // console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
        // await AsyncStorage.removeItem("UserToken");
    } 
}
