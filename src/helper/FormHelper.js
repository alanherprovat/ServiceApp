import cogoToast from "cogo-toast";
import moment from "moment";
import {TodayDate} from "./Config";
import {ToWords} from "to-words";
import * as xlsx from "xlsx";
import store from "../redux/store/store";
import {HideLoader, ShowLoader} from "../redux/state-slice/settings/settings-slice";
import convert from "xml-js";
import {setTradeJsonFile} from "../redux/state-slice/TradeProcessing/trade-file/tradeFileUpload-slice";
import {ErrorAlert} from "./SaveAlert";

let OnlyAlphabet = /^[a-zA-Z ]*$/;
let EmailRegx = /\S+@\S+\.\S+/;
let OnlyNumberRegx = /^-?[0-9]\d*(\.\d+)?$/;
let validFileExtensions = ["jpg", "JPG", "jpeg", "JPEG", "PNG", "png"];
let MobileRegx = /^(?:\+?88|0088)?01[3456789]\d{8}$/;
let CommaSeperatedNumberRegx = /^(\d+\,?)+$/;
// let CommaSeperatedDecimalNumberRegx = /^(\-?\d+\,?\.?)+$/;
let CommaSeperatedDecimalNumberRegx = /^-?\d*(\,?\d+)+(\.\d+\,?)?$/;
let WebAddressRegx = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
let MaxLength = /^([0-9]*[.])?[0-9]{0,16}$/
let MaxLengthDecimalPoint = /^\d*(\.\d{0,4})?$/
let BOAcc = /^(\d){16}$/;
let NIDRegx = /^(\d{10}|\d{13}|\d{17})$/;
let TINRegx = /^(\d{12})$/;
let dateReg = /^\d{2}[.\/]\d{2}[.\/]\d{4}$/

class FormHelper {
    IsEmpty(value) {
        if (value === null || value === undefined) return true;
        return value?.length === 0;
    }

    IsZero(value) {
        return value === 0 || value === "0";
    }

    IsNegative(value) {
        return value < 0;
    }

    IsDate(value) {
        if (IsEmpty(value)) return false;
        else if(value.includes("_")) return false;
        else return dateReg.test(value);
    }

    IsMobile(value) {
        console.log(!MobileRegx.test(value));
        if (value === "" || value === null || value === undefined) return false;
        else return MobileRegx.test(value);
    }

    IsBOAcc(value) {
        if (IsEmpty(value)) return false;
        else return !BOAcc.test(value);
    }
    IsNID(value) {
        if (IsEmpty(value)) return false;
        else return !NIDRegx.test(value);
    }
    IsTIN(value) {
        if (IsEmpty(value)) return false;
        else return !TINRegx.test(value);
    }

    IsWebAddressRegx(value) {
        if (IsEmpty(value)) return false;
        else return !WebAddressRegx.test(value);
    }

    IsImageValid(imgExtension) {
        return validFileExtensions.includes(imgExtension);
    }

    IsNumber(value) {
        if (IsEmpty(value)) return false;
        else return OnlyNumberRegx.test(value);
    }

    IsAlphabet(value) {
        return OnlyAlphabet.test(value);
    }

    IsEmail(value) {
        if (IsEmpty(value)) return false;
        else return !EmailRegx.test(value);
    }

    IsCommaSeperatedNumbers(value) {
        if (value.toString() === "") return true;
        else return CommaSeperatedNumberRegx.test(value);
    }
    IsCommaSeperatedDecimalNumbers(value) {
        return CommaSeperatedDecimalNumberRegx.test(value);
    }

    IsMaxLength(value) {
        return MaxLength.test(value);
    }

    IsMaxLengthDecimalPoint(value) {
        return MaxLengthDecimalPoint.test(value);
    }

    ErrorToast(msg, time = 3) {
        cogoToast.error(msg, { position: "bottom-center", hideAfter: time });
    }

    SuccessToast(msg, time = 3) {
        cogoToast.success(msg, { position: "bottom-center", hideAfter: time });
    }

    HasCommonString(str1, str2) {
        let arr1 = str1.split(' ');
        let arr2 = str2.split(' ');
        return arr1.some(r=> arr2.includes(r));
    }

    IsFutureDate(date1){
        return  moment(TodayDate, 'YYYY-MM-DD').isBefore(moment(date1, 'DD/MM/YYYY').format("YYYY-MM-DD"));
    }

    IsFutureDateCompare(pastDate, futureDate){
        return  moment(pastDate, 'DD/MM/YYYY').isBefore(moment(futureDate, 'DD/MM/YYYY'));
    }

    AmountInWords(amount){
        const toWords = new ToWords({
            localeCode: 'en-IN',
            converterOptions: {
                currency: true,
                ignoreDecimal: false,
                ignoreZeroCurrency: false,
                doNotAddOnly: false,
                currencyOptions: { // can be used to override defaults for the selected locale
                    name: 'Taka',
                    plural: 'Taka',
                    symbol: '৳',
                    fractionalUnit: {
                        name: 'Poisa',
                        plural: 'Poisa',
                        symbol: '',
                    },
                }
            }
        });
        return amount ? toWords.convert(amount) : '';
    }

    XlsToJson(e, toJson){
        e.preventDefault();
        if (e.target.files.length > 0) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const data = e.target.result;
                const workbook = xlsx.read(data, {type: "array"});
                let sheetArr = [];
                debugger
                workbook.SheetNames.forEach((sheetName, index) => {
                    const worksheet = workbook.Sheets[sheetName];
                    sheetArr.push(xlsx.utils.sheet_to_json(worksheet,{raw: false}));
                })
                toJson(sheetArr)
            };
            reader.readAsArrayBuffer(e.target.files[0]);
        }
    }

    JsonToXls(json, excelName="Test",extension=".xlsx"){
        if(Array.isArray(json)){
            debugger
            const fileName = excelName + extension;
            const ws = xlsx.utils.json_to_sheet(json);
            const wb = xlsx.utils.book_new();
            xlsx.utils.book_append_sheet(wb, ws, excelName.split(" ").length > 1 ? excelName.split(" ")[0] + excelName.split(" ")[1] : excelName);
            xlsx.writeFile(wb, fileName);
        }
        else {
            let arrList = Object.keys(json);
            const fileName = excelName + extension;
            const wb = xlsx.utils.book_new();
            arrList.forEach(sheetName => {
                const ws = xlsx.utils.json_to_sheet(json[sheetName]);
                xlsx.utils.book_append_sheet(wb, ws, sheetName);
            })
            xlsx.writeFile(wb, fileName);
        }
    }
    JsonToXlsAndExcelUpload(json, excelName="Test",extension=".xlsx"){
        if(Array.isArray(json)){
            const fileName = excelName + extension;
            const ws = xlsx.utils.json_to_sheet(json);
            const wb = xlsx.utils.book_new();
            xlsx.utils.book_append_sheet(wb, ws, excelName.split(" ").length > 1 ? excelName.split(" ")[0] + excelName.split(" ")[1] : excelName);
            xlsx.writeFile(wb, fileName);
            let genexcelFile = xlsx.write(wb, {bookType: 'xlsx', type: 'array'});
            let file = new Blob([genexcelFile], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});
            let excelfile =new File([file], fileName,{type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});
            debugger
            return excelfile;

        }
        else {
            let arrList = Object.keys(json);
            const fileName = excelName + extension;
            const wb = xlsx.utils.book_new();
            arrList.forEach(sheetName => {
                const ws = xlsx.utils.json_to_sheet(json[sheetName]);
                xlsx.utils.book_append_sheet(wb, ws, sheetName);
            })
            xlsx.writeFile(wb, fileName);
            let genexcelFile = xlsx.write(wb, {bookType: 'xlsx', type: 'array'});
            let file = new Blob([genexcelFile], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
            let excelfile =new File([file], fileName,{type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});
            return excelfile;
        }
    }

    XmlToJson(e, toJson) {
        e.preventDefault();
        if(e.target.files.length > 0){
            let file = e.target.files[0];
            let reader = new FileReader();
            reader.onload = (e) => {
                let xmlFile = e.target.result;
                let result = convert.xml2json(xmlFile, {compact: true, spaces: 4});
                console.log(result);
                toJson(result);
            };
            reader.readAsText(file);
        }
    }



    InstallmentDateAutoFill(dayNo){
        let InstallmentStartDate;
        let currentDay= moment(TodayDate, 'YYYY-MM-DD').format("DD")
        let currentMonth= moment(TodayDate, 'YYYY-MM-DD').format("MM")
        let currentYear= moment(TodayDate, 'YYYY-MM-DD').format("YYYY")
        if(parseInt(dayNo) !== 0 || dayNo !== ""){
            if (parseInt(dayNo) < parseInt(currentDay)) {
                if (parseInt(currentMonth) === 12) {
                    InstallmentStartDate = ("0" + dayNo).slice(-2) + "/" + ("0" + (parseInt(currentMonth) + 1).toString()).slice(-2) + "/" + (parseInt(currentYear) + 1);
                } else
                    InstallmentStartDate = ("0" + dayNo).slice(-2) + "/" + ("0" + (parseInt(currentMonth) + 1).toString()).slice(-2) + "/" + currentYear;
            } else {
                InstallmentStartDate = ("0" + dayNo).slice(-2) + "/" + ("0" + (currentMonth).slice(-2)) + "/" + currentYear;
            }

        }
        else{
            InstallmentStartDate = "";
        }

        return InstallmentStartDate;
    }

    fileToBase64(file, base64){
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            console.log(reader.result);
            base64(reader.result);
        };
        reader.onerror = function (error) {
            base64("");
            console.log('Error: ', error);
        };
    }

}

export const {
    IsEmpty,
    IsZero,
    IsNegative,
    IsMobile,
    IsImageValid,
    IsWebAddressRegx,
    IsNumber,
    IsEmail,
    IsAlphabet,
    IsCommaSeperatedNumbers,
    IsCommaSeperatedDecimalNumbers,
    IsMaxLength,
    IsMaxLengthDecimalPoint,
    IsBOAcc,
    IsDate,
    ErrorToast,
    SuccessToast,
    HasCommonString,
    IsFutureDate,
    IsFutureDateCompare,
    AmountInWords,
    XlsToJson,
    JsonToXls,
    JsonToXlsAndExcelUpload,
    XmlToJson,
    fileToBase64,
    InstallmentDateAutoFill,
    IsNID,
    IsTIN
} = new FormHelper();