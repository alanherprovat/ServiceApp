import React from 'react'

function SubmitButton({label}) {
  return (
    <>
    <button
    className='d-flex border-1 rounded-2 border-danger p-2 my-4 justify-content-center bg-white'
    style={{
        fontFamily:"K2d-Bold"
    }}
    >
        <text
        style={{
            textAlign:"center"
        }}
        >
        {label}
        </text>
    
    </button>
    
    </>
  )
}

export default SubmitButton