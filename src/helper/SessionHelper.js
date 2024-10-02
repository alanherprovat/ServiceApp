import {BasePath} from "./Config";
import store from "../redux/store/store";
import {onChangeCompanyData, setCompanyData} from "../redux/state-slice/settings/userDetails-slice";

class SessionHelper{
    setToken=(Token)=>{
        localStorage.setItem('Token',Token)
    }
    getToken=()=>{
       return  localStorage.getItem('Token')
    }
    setUserDetails=(UserDetails)=>{
        localStorage.setItem('UserDetails',JSON.stringify(UserDetails))
    }
    getUserDetails=()=>{
        return JSON.parse(localStorage.getItem('UserDetails'))
    }
    removeSessions=()=>{
        localStorage.removeItem("Token");
        localStorage.removeItem("UserName");
        // localStorage.removeItem("CompanyId");
        // localStorage.removeItem("BranchId");
        // localStorage.removeItem("CompanyName");
        // localStorage.removeItem("ModuleID");
        // localStorage.removeItem("BranchName");
        // localStorage.clear();
        window.location.href=BasePath+"/login";
    }
}

export const {setToken,getToken,setUserDetails,getUserDetails,removeSessions}=new SessionHelper()