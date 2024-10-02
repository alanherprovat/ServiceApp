import axios from "axios";
import { BaseURL } from "../../public/config/config";
import axiosInstance from "../../public/config/axioInstance";

export async function IpoClientFinancialInfo() {
    try {
      const response = await axiosInstance.get("/ipoClientInfo");
    //   console.log("res",response.data)
      return response?.data?.data;
    } catch (error) {
      console.log(error);
    }
  }


  export async function IpoRequest(ipoRequest) {
    try {
      const response = await axiosInstance.post("/ipoRequest",ipoRequest);
       console.log("res",response?.data)
      return response?.data?.data;
    } catch (error) {
      console.log(error);
    }
  }
