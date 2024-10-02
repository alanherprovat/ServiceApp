
import {ErrorToast, IsNumber} from "./FormHelper";

export default async function ValidateFilter(validateFilterArr) {
    let valid = false;
    for(let i=0; i<validateFilterArr.length; i++){
        if (validateFilterArr[i].filterSearchMinVal.length > 0 && !IsNumber(validateFilterArr[i].filterSearchMinVal)) {
            ErrorToast('Min value should be number');
            document.getElementById('filterSearchMinVal'+i)?.classList.add('validateFocus');
            document.getElementById('filterSearchMinVal'+i).focus();
            valid = false;
            return false;
        } else if (validateFilterArr[i].filterSearchMaxVal.length > 0 &&!IsNumber(validateFilterArr[i].filterSearchMaxVal)) {
            ErrorToast('Max value should be number');
            document.getElementById('filterSearchMaxVal'+i).classList.add('validateFocus');
            document.getElementById('filterSearchMaxVal'+i).focus();
            valid = false;
            return false;
        } else if (validateFilterArr[i].filterSearchMaxVal.length > 0 && validateFilterArr[i].filterSearchMinVal.length > 0 && parseFloat(validateFilterArr[i].filterSearchMaxVal) < parseFloat(validateFilterArr[i].filterSearchMinVal)) {
            ErrorToast('Max value should be larger than Min value');
            document.getElementById('filterSearchMaxVal'+i).classList.add('validateFocus');
            document.getElementById('filterSearchMaxVal'+i).focus();
            valid = false;
            return false;
        } else if (validateFilterArr[i].filterType==="Date" && validateFilterArr[i].filterSearchDate === null) {
            ErrorToast('Please select a valid date');
            document.getElementById('filterSearchDate'+i).classList.add('validateFocus');
            document.getElementById('filterSearchDate'+i).focus();
            valid = false;
            return false;
        } else {
            valid = true;
        }
    }
    return valid;
}
