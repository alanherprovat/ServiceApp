import Papa from "papaparse";

const GenerateCsvFromJsonArray = (arr, fileName) => {
    const csv = Papa.unparse(arr, {header: true,});
    const blob = new Blob([csv]);
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob, { type: 'text/plain' });
    a.download = fileName+'.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
};

export default GenerateCsvFromJsonArray;