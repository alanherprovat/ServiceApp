import React, { useState } from "react";
import { dropDown, formLabel } from "../../assets/styles/CommonStyles";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
function Selector({
  label,
  dropDownItems = [],
  
  className,
  placeholder,
  valueKey,
  nameKey,
  show,
  setShow,
}) {
  console.log(label, dropDownItems, valueKey, nameKey);
  const handleClose = () => setShow(false);
  const [selectedValue,setSelectedValue] = useState("");
  const handleSelectitem = (value) =>{
    setSelectedValue(value);
    setShow(!show)
  }
  return (
    <>
      <label className={`${formLabel} mt-2`} style={{ fontFamily: "K2d-Bold" }}>
        {label}
      </label>
      {/* <select
        name={selectedValue}
        className={`${className} border-1`}
        style={{
          fontFamily: "k2d-regular",
          borderColor: "#526D82",
          overflow:"hidden"
          // width: "100%",
        }}
      ><option value="" disabled selected>
       {placeholder}
    </option>
        {dropDownItems?.map((item, index) => {
          const bankID = item[valueKey];
          const bankName = item[nameKey];
          return (
            <option
              key={index}
              value={bankID}
              className={dropDown}
              style={{ fontFamily: "k2d-regular" }}
            >
              {bankName}
            </option>
          );
        })}
      </select> */}
      <button
        onClick={() => setShow(!show)}
        className={`${className} border-1 d-flex`}
        style={{
          fontFamily: "k2d-regular",
          borderColor: "#526D82",
          overflow: "hidden",
          // width: "100%",
        }}
      >
        {selectedValue?selectedValue:placeholder}
      </button>
      {show && (
        <Modal show={show} onHide={handleClose} centered>
          {dropDownItems?.map((item, index) => {
            return (
              <div className={`${className} justify-content-center`}>
                <text
                  key={index}
                  value={item[valueKey]}
                  style={{ fontFamily: "k2d-regular" }}
                  onClick={()=>handleSelectitem(item[nameKey])}
                >
                  {item[nameKey]}
                </text>
              </div>
            );
          })}
        </Modal>
      )}
    </>
  );
}

export default Selector;
