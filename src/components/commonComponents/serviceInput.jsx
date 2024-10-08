import React, { useEffect, useRef, useState } from "react";
import { Form, InputGroup, Button } from "react-bootstrap";

const ServiceInput = (props) => {
  const {
    editable = true,
    leftIcon = null,
    rightIcon = null,
    leftIconPress = () => {},
    rightIconPress = () => {},
    className = '',
    value = '',
    onChange = () => {},
    style
  } = props;

  const [focusStyle, setFocusStyle] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    // Uncomment and modify these lines based on Redux usage for focus control
    // if (focusOn === props.id && errorMessage.length > 0) {
    //   inputRef.current.focus();
    // }
  }, [props.id]);
  return (
    <div >
      <InputGroup className={`${className}`} style={props.style}>
        {leftIcon && (
          <Button variant="outline-secondary" onClick={leftIconPress}>
            <i className={`bi bi-${leftIcon}`}></i> {/* Bootstrap Icons */}
          </Button>
        )}

        <Form.Control
          {...props}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          // className={className} 
          ref={inputRef}
          // onFocus={() => setFocusStyle(true)}
          // onBlur={() => setFocusStyle(false)}
          disabled={!editable}
          readOnly={props.readOnly}
          style={{
            backgroundColor: props.readOnly ? "#B7B5B699" : "#fff", 
            borderRight:!rightIcon ?"1px solid #526D82":"none",
            ...style, 
          }}
        />

        {rightIcon && (
          <button  style={{
            outline: "none",
            borderLeft: "none",
            borderRight: "1px solid #526D82",
            borderTop: "1px solid #526D82",
            borderBottom: "1px solid #526D82",
            borderTopRightRadius: 6,
            borderBottomRightRadius: 6,
            background: "#fff",
            paddingRight: "6px",
            cursor: "pointer"
          }}  onClick={rightIconPress}>
            <i className={`bi bi-${rightIcon}`}></i>
          </button>
        )}
      </InputGroup>
    </div>
  );
};

export default ServiceInput;
