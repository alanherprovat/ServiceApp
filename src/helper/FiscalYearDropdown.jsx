import React, {useEffect, useState} from 'react';

const FiscalYearDropdown = ({startYear, endYear, onChange, className, id}) => {
    const [year, setYear] = useState("");
    const [yearList, setYearList] = useState([]);

    useEffect(() => {
        CalculateFiscalYear();
    }, []);

    const CalculateFiscalYear = () => {
        let arr = [];
        for(let i=parseInt(endYear)-1; i>=parseInt(startYear); i=i-1){
            let obj = {
                startYear: i+'-07-01',
                endYear: (i+1)+'-06-30',
                label: i+'-'+(i+1)
            }
            arr.push(obj);
        }
        setYearList(arr);
    }

    return (
        <select
            value={year}
            onChange={(e) => {
                let data = JSON.parse(e.target.selectedOptions[0].getAttribute('data'));
                setYear(e.target.value);
                onChange(data);
            }}
            className={`form-select form-select-sm animated zoomIn ${className}`}
            id={id}
        >
            {yearList.map((item, idx) =>
                <option key={idx} data={JSON.stringify(item)} value={item?.label} > {item?.label} < /option>
            )}
        </select>
    );
};

export default FiscalYearDropdown;