import React from 'react'
import SubmitButton from './SubmitButton'

function BackGround({children}) {
  return (
    <div
    className='container mx-auto'
    style={{
        backgroundColor:"#F6F8FA",
        minHeight:"100vh",
        minWidth:"100%",
        overflowY:"auto",
        paddingBottom:"80px"
    }}
    >{children}
    </div>
  )
}

export default BackGround