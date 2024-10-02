import React from "react";
import { dropDown, formLabel } from "../../assets/styles/CommonStyles";

function Selector({ label, dropDownItems = [], selectedValue, className }) {
  console.log(label, dropDownItems);
  return (
    <>
      <label className={`${formLabel} mt-2`} style={{fontFamily:"K2d-Bold"}}>{label}</label>
      <select name={selectedValue} className={className} style={{fontFamily:"k2d-regular",borderColor:"#526D82",borderWidth:1}}>
        {dropDownItems?.map((item, index) => {
          return <option key={index} className={dropDown} style={{fontFamily:"k2d-regular"}}>{item.bankName}</option>;
        })}
      </select>
    </>
  );
}

export default Selector;
