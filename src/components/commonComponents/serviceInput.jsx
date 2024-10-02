import React, { useEffect, useRef, useState } from "react";
import { Form, InputGroup, Button } from "react-bootstrap";
// import { useSelector, useDispatch } from 'react-redux'; // Assuming you are using Redux for utilityStore

const ServiceInput = (props) => {
  const {
    editable = true,
    leftIcon = null,
    rightIcon = null,
    leftIconPress = () => {},
    rightIconPress = () => {},
  } = props;

  const [focusStyle, setFocusStyle] = useState(false);
  const inputRef = useRef(null);
  
  const focusOn = useSelector(state => state.utilityStore.focusOn);
  const errorMessage = useSelector(state => state.utilityStore.errorMessage);
  const dispatch = useDispatch();

  useEffect(() => {
    if (focusOn === props.id && errorMessage.length > 0) {
      inputRef.current.focus();
    }
  }, [focusOn, props.id]);

  return (
    <div>
      <InputGroup className={`mb-3 ${focusStyle ? 'border-primary' : 'border-muted'}`}>
        {leftIcon && (
          <Button variant="outline-secondary" onClick={leftIconPress}>
            <i className={`bi bi-${leftIcon}`}></i> {/* Bootstrap Icons */}
          </Button>
        )}

        <Form.Control
          {...props}
          value={props.value}
          onChange={(e) => {
            props.onChangeText(e.target.value);
            if (errorMessage.length > 0) {
              dispatch({ type: 'SET_ERROR_MESSAGE', payload: "" });
              dispatch({ type: 'SET_FOCUS_ON', payload: "" });
            }
          }}
          ref={inputRef}
          onFocus={() => setFocusStyle(true)}
          onBlur={() => setFocusStyle(false)}
          disabled={!editable}
        />

        {rightIcon && (
          <Button variant="outline-secondary" onClick={rightIconPress}>
            <i className={`bi bi-${rightIcon}`}></i>
          </Button>
        )}
      </InputGroup>

      {/* {focusOn === props.id && errorMessage.length > 0 && (
        <div
          className="alert alert-danger d-flex align-items-center mt-2"
          role="alert"
        >
          <i className="bi bi-exclamation-circle-fill me-2"></i>
          <div>
            {errorMessage}
          </div>
        </div>
      )} */}
    </div>
  );
};

export default ServiceInput;
