import axios from "axios";
import { BACK_BASE } from "../../../config/config.js";

export const IPOClientList = async (req, res) => {
  try {
    const AccountNumber = req.headers.AccountNumber;
    const Product = req.headers.Product;
    const ClinetInformation = {
      Product: Product,
      AccountNo: AccountNumber,
    };
    const urlForClientFinancialInfo = BACK_BASE + "/IPO/IPOClientFinancialInfo";
    const clientFinancialInfo = await axios.post(
      urlForClientFinancialInfo,
      ClinetInformation
    );

    const urlForIpoEligableClient = BACK_BASE + "/IPO/IPOEligibleClientList";
    const eligableClientForIPO = await axios.post(
      urlForIpoEligableClient,
      ClinetInformation
    );

    const responseData = {
      availableBalance: clientFinancialInfo?.data.Data.data[0].AvailableBalance,
      purchasePower: clientFinancialInfo?.data.Data.data[0].PurchasePower,
      IPOEligableClientList: eligableClientForIPO?.data.Data.data,
    };
    return res.json({ status: "success", data: responseData });
  } catch (error) {
    return res.json({ status: "server_fail", message: error.toString() });
  }
};

// submit for ipo / ipo request

export const IPORequest = async (req, res) => {
    try {
      const ipoRequest = req.body;
      const AccountNumber = req.headers.AccountNumber;
      const Product = req.headers.Product;
      const IPORequestSubmit = {
        accountNoProduct: {
          product: Product,
          accountNo: AccountNumber,
        },
        ipoInstApplicationReqs: ipoRequest,
      };
      const url = BACK_BASE + "/IPO/IPOApplicationRequest";
      const response = await axios.post(url, IPORequestSubmit);
  
      // Prepare the response array
      const mappedResponse = ipoRequest.map((val, index) => ({
        ipoInstrumentID: val.ipoInstrumentID,
        responseData: response.data.Data.data[index],
      }));
  
      if (response?.data?.Data?.status !== "Fail") {
        return res.json({
          status: "success",
          message: "IPO Request Successful",
          data: mappedResponse, 
        });
      } else {
        throw new Error("IPO Requests are unsuccessful");
      }
    } catch (error) {
      return res.json({ status: "server_fail", message: error.toString() });
    }
  };
  