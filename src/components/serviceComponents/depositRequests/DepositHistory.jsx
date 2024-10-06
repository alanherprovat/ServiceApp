import React from 'react'
import ServiceTitle from '../../commonComponents/ServiceTitle'

function DepositHistory() {
  return (
    <div
    className="container-fluid d-flex flex-column justify-content-between vh-100 w-100 mx-auto mt-4" // Bootstrap classes for centering and margin // Custom width style
  >
   
    
    <div className="d-flex flex-column position-relative" style={{ flexGrow: 0.5 }}>
    <ServiceTitle label="Deposit History"/>
    </div>
    </div>
  )
}

export default DepositHistory