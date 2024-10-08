import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CustomCard = ({ children, style,padding }) => {
  return (
    <div
      className='container'
      style={{
       maxWidth: '1280px', // Changed to camelCase
        // margin: '0 10px',
        padding: '1rem',
        ...padding
      }}
    >
      <div className="card p-2  mb-1 w-100" style={{ borderColor: '#A9B8CEB2', borderWidth: '0.8px', ...style }}>
        {children}
      </div>
    </div>
    
  
  );
};

export default CustomCard;
