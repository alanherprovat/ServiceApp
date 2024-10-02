import moment from "moment";
import {IsNumber} from "./FormHelper";
import React from "react";

export const BasePath = '/front';
// export const BasePath = '';

export const TodayDate = moment(new Date()).format("YYYY-MM-DD");
export const FutureDate = moment().add(1, "days").format("YYYY-MM-DD");
export const TodayDateMinus30Days = moment(new Date()).subtract(30, "days").format("YYYY-MM-DD");
export const ReverseCleaveDateFormat = (date) => moment(date, 'DD/MM/YYYY').format("YYYY-MM-DD");
export const DistinctArray = (arr, param) => [...new Set(arr.map((x) => x[param]))]
export const IsContainsArr = (arr, obj, param) => arr.find((item) => item?.[param] === obj[param])?.[param] === undefined;

export let keyPressed = "";
export function setKeyPressed(val){
    keyPressed = val;
}
export const FormatDMY2YMD = (date) => {
    return moment(date, "DD/MM/YYYY").format("YYYY-MM-DD");
}
export const FormatYMD2DMY = (date) => {
    return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
}
export const DateMinus30Days = (date, format) => {
    return moment(date, format).subtract(1, "month").format(format)
}
export const DateMinusX = (date, format, amount, unit) => {
    return moment(date, format).subtract(amount, unit).format(format)
}

export const SortArrayByParam = (arr, param, order) => {
    return order?
        (IsNumber(arr[0][param]) ? [...arr].sort((a,b) => a[param]-b[param]) :
            [...arr].sort((a, b) => (a[param]?.toString()).localeCompare(b[param]?.toString()))
        ) :
        (IsNumber(arr[0][param]) ? [...arr].sort((a,b) => b[param]-a[param]) :
            [...arr].sort((a, b) => (b[param]?.toString()).localeCompare(a[param]?.toString()))
        );
}
export const caseInsensitiveSort = (a, b) => {
    console.log(a, b);
    // return Number(a["AccountNo"]) - Number(b["AccountNo"]);
}
export const Capitalize = (str) => {
    return str.split(" ").map((word) => {
        return word[0].toUpperCase() + word.substring(1);
    }).join(" ");
}
export const getCommonArrElements = (arr1, arr2, parameter) => {
    const uniqueArray = [];
    arr1.forEach(ele1 => {
        arr2.forEach(ele2 => ele1[parameter] === ele2[parameter] && uniqueArray.push(ele1));
    });
    return uniqueArray;
}

export const deepCompare = (arg1, arg2) => {
    if (Object.prototype.toString.call(arg1) === Object.prototype.toString.call(arg2)){
        if (Object.prototype.toString.call(arg1) === '[object Object]' || Object.prototype.toString.call(arg1) === '[object Array]' ){
            if (Object.keys(arg1).length !== Object.keys(arg2).length ){
                return false;
            }
            return (Object.keys(arg1).every(function(key){
                return key !== "hoverContent" && deepCompare(arg1[key],arg2[key]);
            }));
        }
        return (arg1===arg2);
    }
    return false;
}

export const treeViewHoverContent = (child) => {
    return child?.length > 0 ? <ul className = 'p-1 m-0 w-100'>
        {
            child?.map((item, idx) =>
                <li className = {`${idx > 0 ? "border-start-xl pe-2 d-flex flex-row align-items-center" : ''} list-group-numbered text-xs font-weight-bold text-black w-auto text-nowrap py-1`}>
                    {idx > 0 && <hr className = 'p-0 m-0 bg-gray-900' width = {idx * 10} />}
                    {item}
                </li>)
        }
    </ul> : null
}

export const GetTotalRowData = (array, parameter ) => {
    let total = (array?.reduce(function (accumulator, object) {
        return accumulator + (typeof(object?.[parameter]) === "string" ? parseFloat(object?.[parameter]) : object?.[parameter]);
    }, 0) || 0)?.toLocaleString(undefined, {maximumFractionDigits: 2});
    console.log(total);
    return total;
}

export function FocusToInputId(id) {
    document.getElementById(id)?.focus();
}

export function MaxInput(target, maxVal) {
    if(target > maxVal){
        return maxVal;
    }
    else {
        return target;
    }
}

export const AutoFocusSelect = (props) => <select
    {...props}
    onChange = {(e) => {
        if(keyPressed !== null) FocusToInputId(props.nextFocusId);
        else setKeyPressed(props.nextFocusId);
        props.onChange(e);
    }}
    onMouseDown={() => setKeyPressed("")}
    onKeyDown={e => (e.keyCode === 38 || e.keyCode === 40) && setKeyPressed(null)}
    onBlur={() => setKeyPressed("")}
/>

export function Download(url, filename) {
    fetch(url)
        .then(response => response.blob())
        .then(blob => {
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = filename;
            link.click();
        })
        .catch(console.error);
}
