import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import {BaseURL} from "../config/config";
import {ErrorToast, SuccessToast} from "../components/CommonComponents/Toasts";

export async function LoginRequest(reqData) {
    try{
        console.log(reqData);
        const result = await axios.post(BaseURL + "/Login", reqData);
        console.log(result.data);
        await AsyncStorage.setItem('UserID', result.data?.data?.userId);
        await AsyncStorage.setItem('Cookies', result?.request?.["responseHeaders"]?.["Set-Cookie"]);
        SuccessToast(result.data?.data?.message);
        return true;
    }
    catch (e) {
        console.log("Error: ",e, JSON.stringify(e));
        await AsyncStorage.setItem('UserID', "");
        ErrorToast("Login Failed");
        return false;
    }
}

export async function ReadProfile() {
    try{
        let UserID = await AsyncStorage.getItem("UserID");
        const result = await axios.get(BaseURL +"/ReadProfile");
        return result.data?.data;
    }
    catch (e) {
        console.log(e);
        return null;
    }
}
export async function SendOtpRequest(reqData) {
    try{
        const result = await axios.post(BaseURL + "/SendOtp", reqData);
        console.log(result.data);
        return result?.data?.data;
    }
    catch (e) {
        console.log(e);
        return null;
    }
}
export async function VerifyOtpRequest(reqData) {
    try{
        console.log(reqData);
        const result = await axios.post(BaseURL + "/VerifyOtp", reqData);
        console.log(result?.data);
        return {valid: result?.data?.status === 'success', message: result?.data?.message};
    }
    catch (e) {
        console.log(e);
        return {valid: false, message: ""};
    }
}
export async function NewPasswordRequest(reqData) {
    try{
        console.log(reqData);
        const result = await axios.post(BaseURL + "/ResetPassword", reqData);
        console.log(result);
        return {valid: true, message: result?.data.message};
    }
    catch (e) {
        console.log(e);
        return {valid: false, message: ""};
    }
}