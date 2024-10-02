import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CustomCard = ({ children, style }) => {
  return (
    <div className="card p-2 mb-3 w-100" style={{ borderColor: '#A9B8CEB2', borderWidth: '0.8px', ...style }}>
     {children}
    </div>
  
  );
};

export default CustomCard;
