import React from 'react'

function SubmitButton({label,onSubmit}) {
  return (
    <>
    <button
    className='d-flex border-1 rounded-2 border-danger p-2 my-4 justify-content-center bg-white w-100'
    style={{
        fontFamily:"K2d-Bold",
        textAlign:"center",
        boxShadow: "0px 0px 12px #ABC2D473"
    }}
    onClick={()=>{onSubmit()}}
    >

        {label}
    
    
    </button>
    
    </>
  )
}

export default SubmitButton