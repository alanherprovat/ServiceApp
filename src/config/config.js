import moment from "moment";

export const FormatDMY2YMD = (date) => moment(date, "DD MMM, YYYY").format('YYYY-MM-DD');
export const FormatYMD2DMY = (date) => moment(date, "YYYY-MM-DD").format('DD MMM, YYYY');