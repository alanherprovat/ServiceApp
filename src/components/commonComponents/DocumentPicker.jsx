import React, { useRef } from "react"; // Make sure to include your custom styles
import { IoMdClose } from "react-icons/io"
function DocumentPicker({ document,setDocument,label }) {
  const fileInputRef = useRef(null); // Create a ref for the hidden file input
  const handleFileChange = (event) => {
      setDocument(event.target.files[0]); // Pass the selected file to the parent component
  };

  const handleClick = () => {
    fileInputRef.current.click(); // Trigger the hidden file input when the button is clicked
  };
  const handleClose = ()=>{
    setDocument(null);
    fileInputRef.current.value = null
  }
  return (
    <div
    className="mt-2 py-2"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#C2AEAE",
        borderWidth: 2,
        borderRadius: 8,
        borderStyle: "dashed",
      }}
    >
      <input
        type="file"
        ref={fileInputRef} // Use the ref to reference the hidden file input
        onChange={handleFileChange}
        style={{ display: "none" }} // Hide the default file input
        accept=".jpg,.jpeg,.png"
      />
      {
        document?<text
        style={{
          fontFamily:"K2d-Bold",
          color:"#8D8F97",
          textAlign:"center"
        }}
        >{document.name}<sup onClick={handleClose}><IoMdClose/></sup></text>: <button
        onClick={handleClick}
        style={{
          backgroundColor: "transparent",
          fontSize:14,
          fontFamily: "K2d-Bold",
          border: "none",
          cursor: "pointer",
          color:"#655C5C"
        }}
      >
        {label}
      </button>
       
      }
   
    </div>
  );
}

export default DocumentPicker;
