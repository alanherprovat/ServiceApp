import React from 'react'
import SubmitButton from './SubmitButton'

function BackGround({children}) {
  return (
    <div
    className='container mx-auto'
    style={{
        backgroundColor:"#F6F8FA",
        minHeight:"100%",
        minWidth:"100%",
        overflowY:"scroll"
    }}
    >{children}
    </div>
  )
}

export default BackGround