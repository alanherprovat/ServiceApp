import React from 'react';
import { MdCheck  } from 'react-icons/md'; 
import '../../assets/css/commonStyle/checkBox.css';

const CustomCheckbox = ({
  checked,
  onPress,
  containerStyle,
  checkboxStyle,
  textStyle,
  label,
  onboarding,
  ...props
}) => {
  return (
    <div
      className={`custom-checkbox-container d-flex align-items-center ${containerStyle}`}
      onClick={onPress}
      {...props}
    >
      <div
        className={`custom-checkbox ${checkboxStyle}`}
        style={{
          backgroundColor: checked ? (onboarding ? '#F27148CC' : '#2E8852') : '#76414133',
          position: 'relative', // Add relative positioning for better alignment
        }}
      >
        {checked && (
            <MdCheck size={12} color="white" />
          
        )}
      </div>
      {label && <span className={`custom-label ${textStyle}`}>{label}</span>}
    </div>
  );
};

export default CustomCheckbox;
