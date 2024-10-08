import React from 'react'
import CustomCard from '../../commonComponents/customCard'
import { Card, InputGroup, FormControl, Form, Button } from 'react-bootstrap';
import ServiceInput from '../../commonComponents/serviceInput';
import '../../../assets/css/ipoRequestStyle/appliedIpo.css'

export default function appliedIPO({itemArray}) {
  return (
    <CustomCard style={{
        backgroundColor: '#f7faff',
        border: '0.3px solid #cac7c9', 
        height: '30vh', 
        padding: '0px', 
        // overflowY: 'auto',
      }}
      >
        <div className="scroll-container">
          {itemArray?.map((item, index) => (
            <CustomCard key={index} padding={{padding: '5px'}} >
              {/* Instrument Name Row */}
              <div className="d-flex align-items-center mt-2">
                  <div className='d-flex align-items-left' >
                    <label className="label-text">Instrument Name</label>
                  </div>
            
                  <FormControl
                      value={item?.SecurityCode.toString()}
                      className="text-field" // Use flex-grow-1 to fill the remaining space
                      onChange={()=>{}}
                      disabled={true}
                      readOnly
                  />
              </div>

              {/* Application Amount Row */}
              <div className="d-flex align-items-center mt-3">
                  <div className='d-flex align-items-left'>
                    <label className="label-text">Application Amount</label>
                  </div>
                  <FormControl
                    value={item?.MinApplicationAmount?.toString()}
                    className="text-field"
                    placeholder="Enter Your Amount"
                    onChange={()=>{console.log('entered amount')}}
                    type="number"
                    readOnly={item?.MinApplicationAmount?.toString() === item?.MaxApplicationAmount?.toString()}
                    disabled={item?.MinApplicationAmount?.toString() === item?.MaxApplicationAmount?.toString()}
                  />
              </div>
            </CustomCard>
          ))}
        </div>

    </CustomCard>

  )
}
