import moment from "moment";
// import { Dimensions } from "react-native";

export const IsLoggedIn = true;
// export const BaseURL = 'https://app7.idlc.com:8888/api';
// export const BaseURL = 'http://192.168.115.119:5050/api';
// const {width,height} = Dimensions.get("window");
 export const BaseURL = 'http://192.168.115.60:5050/api';
export const getTotal = (array, parameter) => {
    if(parameter === undefined || parameter === null || parameter === '') {
        return (array?.reduce(function (accumulator, object) {
            return accumulator + parseFloat(object);
        }, 0) || 0);
    }
    else {
        return (array?.reduce(function (accumulator, object) {
            return accumulator + (typeof(object?.[parameter]) === "string" ? parseFloat(object?.[parameter]) : object?.[parameter]);
        }, 0) || 0);
    }
}
// export const isTablet = width>=600;
// export const isMobile = width<=600;
export const FormatDMY2YMD = (date) => moment(date, "DD MMM, YYYY").format('YYYY-MM-DD');
export const FormatYMD2DMY = (date) => moment(date, "YYYY-MM-DD").format('DD MMM, YYYY');