export function formDataToJSON(formData) {
    const jsonObject = {};
    formData.forEach(function(value, key){
        jsonObject[key] = value;
    });
    return jsonObject;
}
