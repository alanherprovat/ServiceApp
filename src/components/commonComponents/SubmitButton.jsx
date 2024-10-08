import React, { useState } from 'react';
import '../../assets/css/SubmitButton.css';

function SubmitButton({ label, onSubmit }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <button
        className="d-flex border-1 rounded-2 p-2 my-4 justify-content-center w-100"
        style={{
          fontFamily: 'K2d-Bold',
          backgroundColor: isHovered ? '#EF373FE5' : '#ffffff', 
          borderColor: '#EF373FE5',
          textAlign: 'center',
          color:isHovered?"white":"black",
          boxShadow: '0px 0px 12px #ABC2D473',
          transition: 'background-color 0.3s ease',
        }}
        onTouchStart={()=> setIsHovered(true)}
        onTouchEnd={()=>setIsHovered(false)}
        onClick={onSubmit} 
      >
        {label}
      </button>
    </>
  );
}

export default SubmitButton;
