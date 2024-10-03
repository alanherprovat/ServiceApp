import React from "react";
import { dropDown, formLabel } from "../../assets/styles/CommonStyles";

function Selector({ label, dropDownItems = [], selectedValue, className,placeholder,valueKey,nameKey }) {
  console.log(label, dropDownItems);
  return (
    <>
      <label className={`${formLabel} mt-2`} style={{ fontFamily: "K2d-Bold" }}>
        {label}
      </label>
      <select
        name={selectedValue}
        className={`${className} border-1`}
        style={{
          fontFamily: "k2d-regular",
          borderColor: "#526D82",
          display: "flex",
          height: "50px",
          width: "100%",
        }}
      ><option value="" disabled selected>
       {placeholder}
    </option>
        {dropDownItems?.map((item, index) => {
          return (
            <option
              key={index}
              value={item[valueKey]}
              className={dropDown}
              style={{ fontFamily: "k2d-regular" }}
            >
              {item[nameKey]}
            </option>
          );
        })}
      </select>
    </>
  );
}

export default Selector;
