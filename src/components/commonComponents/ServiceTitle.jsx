import React from 'react'

function ServiceTitle({label}) {
  return (
    <div
    className='d-flex justify-content-center rounded-2 mx-2 my-4 custom-rounded'
    style={{
      borderBottom:"1px solid #526D82BF",
      //  boxShadow: "0 4px 4px rgba(82, 109, 130, 0.75)"
    }}
    >
        <p
        style={{
            fontFamily: "k2d-bold",
            fontSize: 20,
            textAlign: "center",

        }}
        >{label}</p>
    </div>
  )
}

export default ServiceTitle