import axios from "axios";
import { BACK_BASE } from "../../../config/config.js";

export const ConsoleSummary = async (req,res)=>{
    try{
        const AccountNumber = req.headers.AccountNumber;
        const Product = req.headers.Product;

        const formData = {
            Product: Product,
            AccountNo: AccountNumber
        }
        const url = BACK_BASE + "/Auth/ConsoleSummary"
        const response = await axios.post(url, formData);
        return res.json({status: "success",  data: response.data.Data})
    }catch (error) {
        return res.json({ status: "server_fail", message: error.toString() });
      }
}