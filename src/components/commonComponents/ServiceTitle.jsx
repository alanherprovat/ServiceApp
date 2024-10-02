import React from 'react'

function ServiceTitle({label}) {
  return (
    <div
    className='d-flex justify-content-center border-bottom border-2 rounded-2 mx-2 my-4 custom-rounded'
    // style={{
    //     display:"flex",
    //     marginHorizontal: 10,
    //     justifyContent: "center",
    //     borderBottomWidth: 2,
    //     borderColor: "#526D82BF",
    //     borderBottomLeftRadius: 20,  // Slight rounding on the bottom-left corner
    //     borderBottomRightRadius: 20, // Slight rounding on the bottom-right corner
    //     marginVertical: 20,
    // }}
    >
        <text
        style={{
            fontFamily: "k2d-bold",
            fontSize: 20,
            textAlign: "center",

        }}
        >{label}</text>
    </div>
  )
}

export default ServiceTitle