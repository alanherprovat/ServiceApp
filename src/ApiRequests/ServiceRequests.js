import moment from "moment";
import axios from "axios";
import {BaseURL} from "../config/config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import utilityStore from "../store/utilityStore";

export async function GetServiceListRequest() {
    try{
        // utilityStore.getState().setIsLoading(true);
        // let userID = await AsyncStorage.getItem("UserID");

        // const result = await axios.get(BaseURL + "/RequestList");
        // console.log(result.data);
        // utilityStore.getState().setIsLoading(false);

        const result= {
            "Message": "",
            "Status": "OK",
            "Data": {
             "WithdrawalList": [
                {
                    "Request_type": "Withdrawal",
                    "Mode": "BFTN",
                    "Amount": 123757,
                    "MakeDate": "2024-09-11T16:20:15.193",
                    "CurrStatus": "Pending",
                    "ChequeReceiver": "",
                    "ChequeReceiverName": ""
                },
                {
                  "Request_type": "Withdrawal",
                  "Mode": "BFTN",
                  "Amount": 123757,
                  "MakeDate": "2024-09-11T16:20:17.287",
                  "CurrStatus": "Pending",
                  "ChequeReceiver": "",
                  "ChequeReceiverName": ""
                },
                {
                  "Request_type": "Withdrawal",
                  "Mode": "BFTN",
                  "Amount": 123757,
                  "MakeDate": "2024-09-11T16:20:18.63",
                  "CurrStatus": "Pending",
                  "ChequeReceiver": "",
                  "ChequeReceiverName": ""
                },
                {
                  "Request_type": "Withdrawal",
                  "Mode": "RTGS",
                  "Amount": 100005,
                  "MakeDate": "2024-09-11T16:20:48.673",
                  "CurrStatus": "Pending",
                  "ChequeReceiver": "",
                  "ChequeReceiverName": ""
                },
                {
                  "Request_type": "Withdrawal",
                  "Mode": "Registered Bank Cheque",
                  "Amount": 1224,
                  "MakeDate": "2024-09-11T16:20:56.847",
                  "CurrStatus": "Pending",
                  "ChequeReceiver": "self",
                  "ChequeReceiverName": ""
                },
                {
                  "Request_type": "Withdrawal",
                  "Mode": "Third Party Bank Cheque",
                  "Amount": 5445,
                  "MakeDate": "2024-09-11T16:21:28.28",
                  "CurrStatus": "Pending",
                  "ChequeReceiver": "self",
                  "ChequeReceiverName": ""
                },
                {
                  "Request_type": "Withdrawal",
                  "Mode": "BFTN",
                  "Amount": 554,
                  "MakeDate": "2024-09-12T10:32:20.937",
                  "CurrStatus": "Pending",
                  "ChequeReceiver": "",
                  "ChequeReceiverName": ""
                },
                {
                  "Request_type": "Withdrawal",
                  "Mode": "BFTN",
                  "Amount": 554,
                  "MakeDate": "2024-09-12T10:32:22.667",
                  "CurrStatus": "Pending",
                  "ChequeReceiver": "",
                  "ChequeReceiverName": ""
                },
                {
                  "Request_type": "Withdrawal",
                  "Mode": "BFTN",
                  "Amount": 554,
                  "MakeDate": "2024-09-12T10:32:26.593",
                  "CurrStatus": "Pending",
                  "ChequeReceiver": "",
                  "ChequeReceiverName": ""
                },
                {
                  "Request_type": "Withdrawal",
                  "Mode": "BFTN",
                  "Amount": 554,
                  "MakeDate": "2024-09-12T10:32:30.397",
                  "CurrStatus": "Pending",
                  "ChequeReceiver": "",
                  "ChequeReceiverName": ""
                },
                {
                  "Request_type": "Withdrawal",
                  "Mode": "RTGS",
                  "Amount": 100005,
                  "MakeDate": "2024-09-12T10:32:41.937",
                  "CurrStatus": "Pending",
                  "ChequeReceiver": "",
                  "ChequeReceiverName": ""
                },
                {
                  "Request_type": "Withdrawal",
                  "Mode": "RTGS",
                  "Amount": 100005,
                  "MakeDate": "2024-09-12T10:32:44.453",
                  "CurrStatus": "Pending",
                  "ChequeReceiver": "",
                  "ChequeReceiverName": ""
                },
                {
                  "Request_type": "Withdrawal",
                  "Mode": "RTGS",
                  "Amount": 100005,
                  "MakeDate": "2024-09-12T10:32:45.64",
                  "CurrStatus": "Pending",
                  "ChequeReceiver": "",
                  "ChequeReceiverName": ""
                },
                {
                  "Request_type": "Withdrawal",
                  "Mode": "Registered Bank Cheque",
                  "Amount": 21248,
                  "MakeDate": "2024-09-12T10:32:52.64",
                  "CurrStatus": "Pending",
                  "ChequeReceiver": "self",
                  "ChequeReceiverName": ""
                },
                {
                  "Request_type": "Withdrawal",
                  "Mode": "Third Party Bank Cheque",
                  "Amount": 8484848,
                  "MakeDate": "2024-09-12T10:33:31.963",
                  "CurrStatus": "Pending",
                  "ChequeReceiver": "self",
                  "ChequeReceiverName": ""
                }
              ],
              "DepositList": [],
              "IPOList": [
                {
                  "Request_type": "IPO Request",
                  "ApplicationAmount": 1000,
                  "ServiceCharge": 0,
                  "TotalApplicationAmount": 1000,
                  "ApplicationDate": "2024-09-11T16:21:42.207",
                  "Status": "Pending",
                  "InstrumentName": "Beximco 1st ZCB TR 5"
                },
                {
                  "Request_type": "IPO Request",
                  "ApplicationAmount": 50000,
                  "ServiceCharge": 0,
                  "TotalApplicationAmount": 50000,
                  "ApplicationDate": "2024-09-11T16:21:52.4",
                  "Status": "Pending",
                  "InstrumentName": "Beximco 1st ZCB TR 6"
                },
                {
                  "Request_type": "IPO Request",
                  "ApplicationAmount": 1000,
                  "ServiceCharge": 0,
                  "TotalApplicationAmount": 1000,
                  "ApplicationDate": "2024-09-11T16:21:52.433",
                  "Status": "Pending",
                  "InstrumentName": "Beximco 1st ZCB TR 5"
                },
                {
                  "Request_type": "IPO Request",
                  "ApplicationAmount": 10000,
                  "ServiceCharge": 5,
                  "TotalApplicationAmount": 10005,
                  "ApplicationDate": "2024-09-11T16:21:52.473",
                  "Status": "Pending",
                  "InstrumentName": "Techno Drugs Limited"
                },
                {
                  "Request_type": "IPO Request",
                  "ApplicationAmount": 50000,
                  "ServiceCharge": 0,
                  "TotalApplicationAmount": 50000,
                  "ApplicationDate": "2024-09-11T16:21:52.503",
                  "Status": "Pending",
                  "InstrumentName": "Beximco 1st ZCB TR 1"
                },
                {
                  "Request_type": "IPO Request",
                  "ApplicationAmount": 5000,
                  "ServiceCharge": 5,
                  "TotalApplicationAmount": 5005,
                  "ApplicationDate": "2024-09-11T16:21:52.53",
                  "Status": "Pending",
                  "InstrumentName": "Southeast Bank 1st Perpetual Bond"
                }
              ],
              "ChangeReq": [
                {
                  "RequestType": "Additional Email",
                  "UpdatedData": "a",
                  "MakeDate": "2024-09-11T16:26:46.75",
                  "CurrStatus": "Pending"
                },
                {
                  "RequestType": "Additional Email",
                  "UpdatedData": "d",
                  "MakeDate": "2024-09-11T15:25:31.897",
                  "CurrStatus": "Pending"
                },
                {
                  "RequestType": "Additional Email",
                  "UpdatedData": "Er@gmail.com",
                  "MakeDate": "2024-09-11T16:33:52.69",
                  "CurrStatus": "Pending"
                },
                {
                  "RequestType": "Additional Email",
                  "UpdatedData": "er@gmail.com",
                  "MakeDate": "2024-09-11T17:38:25.453",
                  "CurrStatus": "Pending"
                },
                {
                  "RequestType": "Additional Email",
                  "UpdatedData": "hello@gmail.com",
                  "MakeDate": "2024-09-11T17:50:45.81",
                  "CurrStatus": "Pending"
                },
                {
                  "RequestType": "Additional Email",
                  "UpdatedData": "hello@gmail.com",
                  "MakeDate": "2024-09-11T17:51:16.18",
                  "CurrStatus": "Pending"
                },
                {
                  "RequestType": "Additional Email",
                  "UpdatedData": "heytrr@gmail.com",
                  "MakeDate": "2024-09-11T16:31:36.597",
                  "CurrStatus": "Pending"
                },
                {
                  "RequestType": "Additional Email",
                  "UpdatedData": "idlc@idlc.com",
                  "MakeDate": "2024-09-11T15:28:02.82",
                  "CurrStatus": "Pending"
                },
                {
                  "RequestType": "Additional Email",
                  "UpdatedData": "ooo@gmail.com",
                  "MakeDate": "2024-09-11T16:34:17.973",
                  "CurrStatus": "Pending"
                },
                {
                  "RequestType": "Additional Email",
                  "UpdatedData": "ooo@gmail.com",
                  "MakeDate": "2024-09-11T16:34:18.807",
                  "CurrStatus": "Pending"
                },
                {
                  "RequestType": "Additional Email",
                  "UpdatedData": "s",
                  "MakeDate": "2024-09-11T16:30:17.117",
                  "CurrStatus": "Pending"
                },
                {
                  "RequestType": "Additional Email",
                  "UpdatedData": "s",
                  "MakeDate": "2024-09-11T16:30:21.853",
                  "CurrStatus": "Pending"
                },
                {
                  "RequestType": "Additional Email",
                  "UpdatedData": "s",
                  "MakeDate": "2024-09-11T16:30:58",
                  "CurrStatus": "Pending"
                },
                {
                  "RequestType": "Additional Email",
                  "UpdatedData": "s",
                  "MakeDate": "2024-09-11T17:37:31.15",
                  "CurrStatus": "Pending"
                },
                {
                  "RequestType": "Additional Email",
                  "UpdatedData": "s",
                  "MakeDate": "2024-09-11T17:45:11.88",
                  "CurrStatus": "Pending"
                },
                {
                  "RequestType": "Additional Email",
                  "UpdatedData": "s",
                  "MakeDate": "2024-09-11T17:45:44.41",
                  "CurrStatus": "Pending"
                },
                {
                  "RequestType": "Additional Email",
                  "UpdatedData": "s",
                  "MakeDate": "2024-09-11T17:45:48.733",
                  "CurrStatus": "Pending"
                },
                {
                  "RequestType": "Additional Email",
                  "UpdatedData": "z",
                  "MakeDate": "2024-09-11T16:27:07.32",
                  "CurrStatus": "Pending"
                },
                {
                  "RequestType": "Additional MobileNo",
                  "UpdatedData": "01813141414",
                  "MakeDate": "2024-09-11T17:38:25.45",
                  "CurrStatus": "Pending"
                },
                {
                  "RequestType": "Additional MobileNo",
                  "UpdatedData": "01813191729",
                  "MakeDate": "2024-09-11T16:30:14.333",
                  "CurrStatus": "Pending"
                },
                {
                  "RequestType": "Additional MobileNo",
                  "UpdatedData": "01813191729",
                  "MakeDate": "2024-09-11T16:32:38.877",
                  "CurrStatus": "Pending"
                },
                {
                  "RequestType": "Additional MobileNo",
                  "UpdatedData": "01813191729",
                  "MakeDate": "2024-09-11T16:35:54.95",
                  "CurrStatus": "Pending"
                },
                {
                  "RequestType": "Additional MobileNo",
                  "UpdatedData": "01813191729",
                  "MakeDate": "2024-09-11T17:50:29.56",
                  "CurrStatus": "Pending"
                },
                {
                  "RequestType": "Additional MobileNo",
                  "UpdatedData": "01818854644",
                  "MakeDate": "2024-09-11T16:33:20.28",
                  "CurrStatus": "Pending"
                },
                {
                  "RequestType": "Additional MobileNo",
                  "UpdatedData": "01818854644",
                  "MakeDate": "2024-09-11T16:34:17.97",
                  "CurrStatus": "Pending"
                },
                {
                  "RequestType": "Additional MobileNo",
                  "UpdatedData": "01818854644",
                  "MakeDate": "2024-09-11T16:34:18.803",
                  "CurrStatus": "Pending"
                },
                {
                  "RequestType": "Additional MobileNo",
                  "UpdatedData": "01919999999",
                  "MakeDate": "2024-09-11T17:51:16.18",
                  "CurrStatus": "Pending"
                },
                {
                  "RequestType": "Additional MobileNo",
                  "UpdatedData": "0458745",
                  "MakeDate": "2024-09-11T15:29:30.383",
                  "CurrStatus": "Pending"
                },
                {
                  "RequestType": "Additional MobileNo",
                  "UpdatedData": "123",
                  "MakeDate": "2024-09-11T15:14:12.35",
                  "CurrStatus": "Pending"
                },
                {
                  "RequestType": "Additional MobileNo",
                  "UpdatedData": "123",
                  "MakeDate": "2024-09-11T15:28:57.66",
                  "CurrStatus": "Pending"
                },
                {
                  "RequestType": "Additional MobileNo",
                  "UpdatedData": "1234",
                  "MakeDate": "2024-09-11T15:17:24.393",
                  "CurrStatus": "Pending"
                },
                {
                  "RequestType": "Additional MobileNo",
                  "UpdatedData": "1234",
                  "MakeDate": "2024-09-11T15:25:20.617",
                  "CurrStatus": "Pending"
                },
                {
                  "RequestType": "Additional MobileNo",
                  "UpdatedData": "1234",
                  "MakeDate": "2024-09-11T15:25:31.893",
                  "CurrStatus": "Pending"
                },
                {
                  "RequestType": "Additional MobileNo",
                  "UpdatedData": "1234",
                  "MakeDate": "2024-09-11T15:27:51.803",
                  "CurrStatus": "Pending"
                },
                {
                  "RequestType": "Additional MobileNo",
                  "UpdatedData": "1234",
                  "MakeDate": "2024-09-11T15:28:56.21",
                  "CurrStatus": "Pending"
                },
                {
                  "RequestType": "Additional MobileNo",
                  "UpdatedData": "12345",
                  "MakeDate": "2024-09-11T15:28:02.82",
                  "CurrStatus": "Pending"
                },
                {
                  "RequestType": "Additional MobileNo",
                  "UpdatedData": "a",
                  "MakeDate": "2024-09-11T16:24:04.85",
                  "CurrStatus": "Pending"
                },
                {
                  "RequestType": "Additional MobileNo",
                  "UpdatedData": "a",
                  "MakeDate": "2024-09-11T16:25:54.563",
                  "CurrStatus": "Pending"
                },
                {
                  "RequestType": "Additional MobileNo",
                  "UpdatedData": "a",
                  "MakeDate": "2024-09-11T16:26:36.557",
                  "CurrStatus": "Pending"
                },
                {
                  "RequestType": "Additional MobileNo",
                  "UpdatedData": "a",
                  "MakeDate": "2024-09-11T16:26:46.743",
                  "CurrStatus": "Pending"
                },
                {
                  "RequestType": "Additional MobileNo",
                  "UpdatedData": "a",
                  "MakeDate": "2024-09-11T16:26:57.537",
                  "CurrStatus": "Pending"
                },
                {
                  "RequestType": "Additional MobileNo",
                  "UpdatedData": "a",
                  "MakeDate": "2024-09-11T16:28:15.56",
                  "CurrStatus": "Pending"
                },
                {
                  "RequestType": "Additional MobileNo",
                  "UpdatedData": "a",
                  "MakeDate": "2024-09-11T16:28:29.49",
                  "CurrStatus": "Pending"
                },
                {
                  "RequestType": "Additional MobileNo",
                  "UpdatedData": "ds",
                  "MakeDate": "2024-09-11T17:45:48.73",
                  "CurrStatus": "Pending"
                },
                {
                  "RequestType": "Additional MobileNo",
                  "UpdatedData": "ds",
                  "MakeDate": "2024-09-11T17:45:52.93",
                  "CurrStatus": "Pending"
                },
                {
                  "RequestType": "Additional MobileNo",
                  "UpdatedData": "s",
                  "MakeDate": "2024-09-11T16:30:21.85",
                  "CurrStatus": "Pending"
                },
                {
                  "RequestType": "Additional MobileNo",
                  "UpdatedData": "s",
                  "MakeDate": "2024-09-11T16:30:28.027",
                  "CurrStatus": "Pending"
                },
                {
                  "RequestType": "Additional MobileNo",
                  "UpdatedData": "s",
                  "MakeDate": "2024-09-11T16:30:58",
                  "CurrStatus": "Pending"
                },
                {
                  "RequestType": "Signature",
                  "UpdatedData": "http://192.168.115.17/DSEApp/tmp/11686_signature_20240911_1300_BD846F2B.Jpeg",
                  "MakeDate": "2024-09-11T13:00:45.61",
                  "CurrStatus": "Pending"
                },
                {
                  "RequestType": "Signature",
                  "UpdatedData": "http://192.168.115.17/DSEApp/tmp/3650_signature_20240911_1115_F38A4B8A.Jpeg",
                  "MakeDate": "2024-09-11T11:15:28.997",
                  "CurrStatus": "Pending"
                },
                {
                  "RequestType": "Signature",
                  "UpdatedData": "http://192.168.115.17/DSEApp/tmp/3650_signature_20240911_1116_7912EE7D.Jpeg",
                  "MakeDate": "2024-09-11T11:16:52.76",
                  "CurrStatus": "Pending"
                },
                {
                  "RequestType": "Update bank Information",
                  "UpdatedData": "AB Bank Limited",
                  "MakeDate": "2024-09-11T12:21:38.857",
                  "CurrStatus": "Pending"
                },
                {
                  "RequestType": "Update bank Information",
                  "UpdatedData": "AB Bank Limited",
                  "MakeDate": "2024-09-11T12:22:41.663",
                  "CurrStatus": "Pending"
                },
                {
                  "RequestType": "Update bank Information",
                  "UpdatedData": "AB Bank Limited",
                  "MakeDate": "2024-09-11T16:40:07.583",
                  "CurrStatus": "Pending"
                },
                {
                  "RequestType": "Update bank Information",
                  "UpdatedData": "AHMED FUAD",
                  "MakeDate": "2024-09-10T12:43:07.077",
                  "CurrStatus": "Pending"
                },
                {
                  "RequestType": "Update bank Information",
                  "UpdatedData": "AHMED FUAD",
                  "MakeDate": "2024-09-10T13:55:16.85",
                  "CurrStatus": "Pending"
                },
                {
                  "RequestType": "Update bank Information",
                  "UpdatedData": "AHMED FUAD",
                  "MakeDate": "2024-09-10T14:09:47.37",
                  "CurrStatus": "Pending"
                },
                {
                  "RequestType": "Update bank Information",
                  "UpdatedData": "AHMED FUAD",
                  "MakeDate": "2024-09-10T14:19:57.127",
                  "CurrStatus": "Pending"
                },
                {
                  "RequestType": "Update bank Information",
                  "UpdatedData": "AHMED FUAD",
                  "MakeDate": "2024-09-10T14:20:37.2",
                  "CurrStatus": "Pending"
                },
                {
                  "RequestType": "Update bank Information",
                  "UpdatedData": "AHMED FUAD",
                  "MakeDate": "2024-09-10T15:39:12.253",
                  "CurrStatus": "Pending"
                },
                {
                  "RequestType": "Update bank Information",
                  "UpdatedData": "AHMED FUAD",
                  "MakeDate": "2024-09-10T15:39:49.69",
                  "CurrStatus": "Pending"
                },
                {
                  "RequestType": "Update present Address",
                  "UpdatedData": "Flat#B-1, House#22/1, North KafrulKafrul",
                  "MakeDate": "2024-09-10T16:57:01.527",
                  "CurrStatus": "Pending"
                },
                {
                  "RequestType": "Update present Address",
                  "UpdatedData": "Flat#B-1, House#22/1, North KafrulKafrul",
                  "MakeDate": "2024-09-10T16:58:04.897",
                  "CurrStatus": "Pending"
                },
                {
                  "RequestType": "Update present Address",
                  "UpdatedData": "FLAT= B-1, HS= 22/1, NORTH KAFRUL, DHAKA",
                  "MakeDate": "2024-09-10T11:20:11.5",
                  "CurrStatus": "Pending"
                },
                {
                  "RequestType": "Update present Address",
                  "UpdatedData": "FLAT= B-1, HS= 22/1, NORTH KAFRUL, DHAKA",
                  "MakeDate": "2024-09-10T11:46:13.46",
                  "CurrStatus": "Pending"
                },
                {
                  "RequestType": "Update present Address",
                  "UpdatedData": "gsg",
                  "MakeDate": "2024-08-25T17:15:17.593",
                  "CurrStatus": "Pending"
                },
                {
                  "RequestType": "Update present Address",
                  "UpdatedData": "Paltan , Dhaka",
                  "MakeDate": "2024-09-11T15:15:07.507",
                  "CurrStatus": "Pending"
                },
                {
                  "RequestType": "Update present Address",
                  "UpdatedData": "Paltan , Dhaka ",
                  "MakeDate": "2024-09-11T15:28:50.77",
                  "CurrStatus": "Pending"
                },
                {
                  "RequestType": "Update present Address",
                  "UpdatedData": "Paltan, DHAKA",
                  "MakeDate": "2024-09-10T12:18:04.457",
                  "CurrStatus": "Pending"
                },
                {
                  "RequestType": "Update present Address",
                  "UpdatedData": "Paltan, DHAKA",
                  "MakeDate": "2024-09-11T11:10:32.907",
                  "CurrStatus": "Pending"
                }
            ]
            }
          };
        if(result?.Status === "OK"){
            return result?.Data;
        }
        else return [];
    }
    catch (e) {
        utilityStore.getState().setIsLoading(false);
        return [];
    }
}


// export async function GetNotificationListRequest() {
//     try{
//         let userID = await AsyncStorage.getItem("UserID");
//         const result = await axios.get(BaseURL + "/notificaionlist");
//         // console.log(JSON.stringify(result?.data));
//         return result.data?.data || [];
//     }
//     catch (e) {
//         console.log(e);
//         return null;
//     }
// }


// export async function MarkNotificationRequest() {
//     try{
//         const result = await axios.post(BaseURL + "/MarkNotification");
//         console.log(JSON.stringify(result));
//         return true;
//     }
//     catch (e) {
//         console.log(e);
//         return false;
//     }
// }
// export async function GetContactListRequest() {
//     try{
//         let userID = await AsyncStorage.getItem("UserID");
//         const result = await axios.get("https://web.idlc.com/api/v1/get-branch?idlc_category=idlc");
//         return result.data?.details?.filter((item, idx) => idx !== 0) || [];
//     }
//     catch (e) {
//         console.log(e);
//         return null;
//     }
// }


