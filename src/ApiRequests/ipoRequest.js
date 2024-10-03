import axios from "axios";
import axiosInstance from "../../config/axioInstance";

export async function IpoClientFinancialInfo() {
    try {
      //const response = await axiosInstance.get("/ipoClientInfo");
    //   console.log("res",response.data)
    const response ={
      "data":{
        "data":{
          'availableBalance': 162218.6328,
          'purchasePower':162197.5328,
          'IPOEligableClientList':[
            {
            "InstrumentID": 549,
            "InstrumentName": "National Tea Company Ltd.",
            "SecurityCode": "NTC",
            "IPOType": "IPO- Gen. Public",
            "IPOStatus": "Approved",
            "ClientAccountType": "RB",
            "IPOInstrumentID": 40,
            "SubscriptionOpeningDate": "19/06/2024",
            "SubscriptionClosingDate": "19/08/2024",
            "CutOffDate": "13/06/2024",
            "RequiredMarketValueCutOffDate": 0,
            "MinApplicationAmount": 1000,
            "MaxApplicationAmount": 500000,
            "SubsciptionAmountMultipleOf": null,
            "MarketValue": 1136309.7
          },
          {
            "InstrumentID": 2347,
            "InstrumentName": "Beximco 1st ZCB TR 6",
            "SecurityCode": "BD3015BFZC61",
            "IPOType": "IPO- Gen. Public",
            "IPOStatus": "Approved",
            "ClientAccountType": "RB",
            "IPOInstrumentID": 39,
            "SubscriptionOpeningDate": "16/07/2024",
            "SubscriptionClosingDate": "18/07/2024",
            "CutOffDate": "14/07/2024",
            "RequiredMarketValueCutOffDate": 0,
            "MinApplicationAmount": 50000,
            "MaxApplicationAmount": 20000000,
            "SubsciptionAmountMultipleOf": null,
            "MarketValue": 1280072.9
          },
          {
            "InstrumentID": 2338,
            "InstrumentName": "Beximco 1st ZCB TR 5",
            "SecurityCode": "BEX1STZCBTR5",
            "IPOType": "IPO- Gen. Public",
            "IPOStatus": "Approved",
            "ClientAccountType": "RB",
            "IPOInstrumentID": 38,
            "SubscriptionOpeningDate": "16/06/2024",
            "SubscriptionClosingDate": "20/06/2024",
            "CutOffDate": "13/06/2024",
            "RequiredMarketValueCutOffDate": 0,
            "MinApplicationAmount": 1000,
            "MaxApplicationAmount": 1000000000,
            "SubsciptionAmountMultipleOf": null,
            "MarketValue": 1136309.7
          },
          {
            "InstrumentID": 2295,
            "InstrumentName": "Techno Drugs Limited",
            "SecurityCode": "TECHNODRUG",
            "IPOType": "IPO- Gen. Public",
            "IPOStatus": "Approved",
            "ClientAccountType": "RB",
            "IPOInstrumentID": 36,
            "SubscriptionOpeningDate": "09/06/2024",
            "SubscriptionClosingDate": "13/06/2024",
            "CutOffDate": "30/05/2024",
            "RequiredMarketValueCutOffDate": 50000,
            "MinApplicationAmount": 10000,
            "MaxApplicationAmount": 1000000,
            "SubsciptionAmountMultipleOf": null,
            "MarketValue": 1227577.4
          },
          {
            "InstrumentID": 2313,
            "InstrumentName": "Beximco 1st ZCB TR 1",
            "SecurityCode": "BEX1STZCBTR1",
            "IPOType": "IPO- Gen. Public",
            "IPOStatus": "Approved",
            "ClientAccountType": "RB",
            "IPOInstrumentID": 35,
            "SubscriptionOpeningDate": "01/05/2024",
            "SubscriptionClosingDate": "07/05/2024",
            "CutOffDate": "22/04/2024",
            "RequiredMarketValueCutOffDate": 10000,
            "MinApplicationAmount": 50000,
            "MaxApplicationAmount": 25000000,
            "SubsciptionAmountMultipleOf": null,
            "MarketValue": 1349119.6
          },
          {
            "InstrumentID": 2266,
            "InstrumentName": "Southeast Bank 1st Perpetual Bond",
            "SecurityCode": "SEB1PBOND",
            "IPOType": "IPO- Gen. Public",
            "IPOStatus": "Approved",
            "ClientAccountType": "RB",
            "IPOInstrumentID": 23,
            "SubscriptionOpeningDate": "18/02/2024",
            "SubscriptionClosingDate": "27/02/2024",
            "CutOffDate": "15/02/2024",
            "RequiredMarketValueCutOffDate": 0,
            "MinApplicationAmount": 5000,
            "MaxApplicationAmount": 500000000,
            "SubsciptionAmountMultipleOf": null,
            "MarketValue": 1177852.4
          },
          {
            "InstrumentID": 2247,
            "InstrumentName": "Asiatic Laboratories Limited",
            "SecurityCode": "ASIATICLAB",
            "IPOType": "IPO- Gen. Public",
            "IPOStatus": "Approved",
            "ClientAccountType": "RB",
            "IPOInstrumentID": 13,
            "SubscriptionOpeningDate": "04/02/2024",
            "SubscriptionClosingDate": "13/02/2024",
            "CutOffDate": "25/01/2024",
            "RequiredMarketValueCutOffDate": 0,
            "MinApplicationAmount": 10000,
            "MaxApplicationAmount": 10000,
            "SubsciptionAmountMultipleOf": null,
            "MarketValue": 698753.4
          },
          {
            "InstrumentID": 2252,
            "InstrumentName": "Intraco Refueling Convertible Bond",
            "SecurityCode": "INTRACOCB",
            "IPOType": "IPO- Gen. Public",
            "IPOStatus": "Order",
            "ClientAccountType": "RB",
            "IPOInstrumentID": 16,
            "SubscriptionOpeningDate": "04/02/2024",
            "SubscriptionClosingDate": "08/02/2024",
            "CutOffDate": "01/02/2024",
            "RequiredMarketValueCutOffDate": 0,
            "MinApplicationAmount": 100000,
            "MaxApplicationAmount": 10000000,
            "SubsciptionAmountMultipleOf": null,
            "MarketValue": 606483.9
          },
          {
            "InstrumentID": 2242,
            "InstrumentName": "NRB Bank PLC",
            "SecurityCode": "NRBBANK",
            "IPOType": "IPO- Gen. Public",
            "IPOStatus": "Approved",
            "ClientAccountType": "RB",
            "IPOInstrumentID": 9,
            "SubscriptionOpeningDate": "28/01/2024",
            "SubscriptionClosingDate": "04/02/2024",
            "CutOffDate": "18/01/2024",
            "RequiredMarketValueCutOffDate": 50000,
            "MinApplicationAmount": 10000,
            "MaxApplicationAmount": 100000000,
            "SubsciptionAmountMultipleOf": null,
            "MarketValue": 591421
          },
          {
            "InstrumentID": 2245,
            "InstrumentName": "IFIC Guaranteed Sreepur Township Green Zero Coupon Bond Tranche 2",
            "SecurityCode": "TR2GSTGZCB",
            "IPOType": "IPO- Gen. Public",
            "IPOStatus": "Approved",
            "ClientAccountType": "RB",
            "IPOInstrumentID": 12,
            "SubscriptionOpeningDate": "29/01/2024",
            "SubscriptionClosingDate": "30/01/2024",
            "CutOffDate": "25/01/2024",
            "RequiredMarketValueCutOffDate": 0,
            "MinApplicationAmount": 1,
            "MaxApplicationAmount": 10000000,
            "SubsciptionAmountMultipleOf": null,
            "MarketValue": 698753.4
          },
          {
            "InstrumentID": 2234,
            "InstrumentName": "UCB 2nd Perpetual Bond",
            "SecurityCode": "UCB2PBOND",
            "IPOType": "IPO- Gen. Public",
            "IPOStatus": "Approved",
            "ClientAccountType": "RB",
            "IPOInstrumentID": 6,
            "SubscriptionOpeningDate": "14/01/2024",
            "SubscriptionClosingDate": "22/01/2024",
            "CutOffDate": "11/01/2024",
            "RequiredMarketValueCutOffDate": 0,
            "MinApplicationAmount": 5000,
            "MaxApplicationAmount": 300000000,
            "SubsciptionAmountMultipleOf": null,
            "MarketValue": 523363.9
          },
          {
            "InstrumentID": 2219,
            "InstrumentName": "Best Holdings Limited",
            "SecurityCode": "BESTHLDNG",
            "IPOType": "IPO- Gen. Public",
            "IPOStatus": "Approved",
            "ClientAccountType": "RB",
            "IPOInstrumentID": 4,
            "SubscriptionOpeningDate": "14/01/2024",
            "SubscriptionClosingDate": "22/01/2024",
            "CutOffDate": "03/01/2024",
            "RequiredMarketValueCutOffDate": 50000,
            "MinApplicationAmount": 10000,
            "MaxApplicationAmount": 1500000,
            "SubsciptionAmountMultipleOf": null,
            "MarketValue": 413540.9
           }]
        }
      }
      }
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
