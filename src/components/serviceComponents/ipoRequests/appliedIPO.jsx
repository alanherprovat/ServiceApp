import React from 'react'
import CustomCard from '../../commonComponents/customCard'
import { Card, InputGroup, FormControl, Form, Button } from 'react-bootstrap';
import '../../../assets/css/ipoRequestStyle/appliedIpo.css'

export default function appliedIPO({itemArray}) {
  return (
    <CustomCard style={{
        backgroundColor: '#f7faff',
        border: '0.3px solid #cac7c9', 
        height: '30vh', 
        padding: '10px', 
        overflowY: 'auto',
      }}
      >
        <div className="scroll-container">
        {itemArray?.map((item, index) => (
           <CustomCard key={index} style={{ marginHorizontal: 20}} >
            {/* Instrument Name Row */}
            <div className="d-flex align-items-center mt-3">
                <div className='d-flex align-items-right'>
                  <label className="label-text">Instrument Name</label>
                </div>
           
            <FormControl
                value={item?.SecurityCode}
                className="text-field" // Use flex-grow-1 to fill the remaining space
                readOnly
            />
            </div>




            {/* Application Amount Row */}
            <div className="d-flex align-items-center mt-3">
              <div className='d-flex align-items-right'>
                 <label className="label-text">Application Amount</label>
              </div>
              <FormControl
                value={item?.MinApplicationAmount?.toString()}
                className="text-field"
                placeholder="Enter Your Amount"
                type="number"
                readOnly={item?.MinApplicationAmount?.toString() === item?.MaxApplicationAmount?.toString()}
              />
            </div>
          </CustomCard>
        ))}
        </div>

    </CustomCard>

  )
}
