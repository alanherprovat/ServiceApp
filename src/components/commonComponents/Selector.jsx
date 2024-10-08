import React, { useState } from "react";
import { dropDown, formLabel } from "../../assets/styles/CommonStyles";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "../../assets/css/modal.css";
import "../../assets/css/serviceConsoleDashboardStyle.css";
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
  const handleClose = () => setShow(false);
  const [selectedValue, setSelectedValue] = useState("");
  
  const handleSelectItem = (value) => {
    setSelectedValue(value);
    setShow(!show);
  };

  return (
    <>
      <label className="serviceConsoleFormLabel">
        {label}
      </label>

      <button
        onClick={() => setShow(!show)}
        className={`${className} d-flex py-2 my-2`}
        style={{
          fontFamily: "k2d-regular",
          borderColor: "#526D82",
          overflow: "hidden",
          backgroundColor: "#fff",
          fontSize: 8,
        }}
      >
        <text
          className="ms-1"
          style={{
            color: selectedValue ? "#000" : "#8D8F97",
            fontSize: 16,
          }}
        >
          {selectedValue ? selectedValue : placeholder}
        </text>
      </button>

      {show && (
        <Modal
          show={show}
          onHide={handleClose}
          centered // Vertically centers the modal
          dialogClassName="no-border-radius" // Custom class for modal
          contentClassName="modal-content-centered" // Custom class for modal content
        >
          <Modal.Body
            style={{
              maxHeight: "400px",
              overflowY: "auto",
            }}
          >
            {dropDownItems?.map((item, index) => {
              return (
                <div key={index} className={`${className} justify-content-center px-2`}>
                  <text
                    value={item[valueKey]}
                    style={{ fontFamily: "k2d-regular", color: "#655C5C", cursor: "pointer" }}
                    onClick={() => handleSelectItem(item[nameKey])}
                  >
                    {item[nameKey]}
                  </text>
                </div>
              );
            })}
          </Modal.Body>
        </Modal>
      )}
    </>
  );
}

export default Selector;
