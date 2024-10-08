import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/Otp.css";
import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
import { formDataToJSON } from "../../../app/utility/FormDataToJson.js";
import cogoToast from "cogo-toast";
import { useNavigate } from "react-router-dom";
// import {
//   setOrgIdFromSession,
//   setUserIdFromSession,
//   setUserEmailSession,
//   setUserMobileSession,
// } from "../redux/features/ChangesPasswordOnLogin/ChangedPasswordOnLogin.js";
// import { setJwtStatus } from "../redux/features/JwtVerificationSlicer/JwtVerificationSlicer.js";

export default function OtpPage() {
  // demo
  useEffect(()=>{
    const verify = async ()=>{
      const res = await axios.get('/api/allbankaccounts');
  
    }
    verify();
  },[])
  // ----------------
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [counter, setCounter] = useState(60);
  const [resendVisible, setResendVisible] = useState(false);

  // Fetching data from Redux state
  //   const email = useSelector((state) => state.ChangedPasswordOnLogin.email);
  //   const fromForgot = useSelector(
  //     (state) => state.ChangedPasswordOnLogin.fromForgot
  //   );
  // get userid and orgid from redux
  //   const userId = useSelector((state) => state.ChangedPasswordOnLogin?.userId);
  // Fallback to sessionStorage if Redux state is not available
  //   const storedEmail = email || sessionStorage.getItem("email");

  //   // Masking email and mobile number
  //   const maskedEmail = storedEmail
  //     ? `${storedEmail.slice(0, 3)}...@gmail.com`
  //     : "N/A";

  // navigator

  const navigate = useNavigate();

  // redux dispatch

  //   const dispatch = useDispatch();

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    if (counter === 0) {
      setResendVisible(true);
    }
    return () => clearInterval(timer);
  }, [counter]);

  // hanlde otp code

  const handleOtpChange = (index) => (event) => {
    if (event.key === "Backspace") {
      // Handle backspace
      const newOtp = [...otp];

      newOtp[index] = "";

      // Clear current box
      setOtp(newOtp);

      // Move focus to the previous input box
      if (index > 0) {
        document.getElementById(`otp-input-${index - 1}`).focus();
      }
    } else {
      // Handle regular input
      const newOtp = [...otp];
      newOtp[index] = event.target.value.slice(-1); // Allow only one character
      setOtp(newOtp);

      // Move focus to the next input box
      if (event.target.value !== "") {
        if (index < otp.length - 1) {
          document.getElementById(`otp-input-${index + 1}`).focus();
        }
      }
    }
  };

  const handleFocus = (index) => {
    // Move cursor to the beginning of the input box on focus
    document.getElementById(`otp-input-${index}`).setSelectionRange(0, 0);
  };

  // resent button
  const handleResendButton = async () => {
    setCounter(60);
    setResendVisible(!resendVisible);
    const response = await axios.get(`/api/resendOtp/${userId}/${orgId}`);
    if (response.data.status === "server_fail") {
      cogoToast.error(`Server Error`);
    } else if (response.data.status === "fail") {
      cogoToast.error(`Something went wrong. Server is failed to send OTP`);
    } else {
      cogoToast.success(`Successfully Send OTP`);
    }
  };

  // handle otp verify

  const handleOtpVerify = async () => {
    const otpString = otp.join("");
    const formData = new FormData();
    formData.append("newOTP", otpString);

    const response = await axios.post(
      `/api/verifyotp/${userId}/${orgId}`,
      formDataToJSON(formData),
      {
        headers: {
          fromForgot: fromForgot,
        },
      }
    );

    if (response.data.status === "server_fail") {
      cogoToast.error(`Server Error`);
    } else if (response.data.status === "fail") {
      cogoToast.error(`Wrong OTP`);
    } else if (response.data.status === "fromForgot") {
      navigate("/setforgetpassword");
    } else {
      sessionStorage.clear();

      cogoToast.success(`OTP Verification Successful`);

      dispatch(setUserIdFromSession(""));
      dispatch(setOrgIdFromSession(""));
      dispatch(setUserEmailSession(""));
      dispatch(setUserMobileSession(""));
      dispatch(setJwtStatus(true));
      navigate("/"); // redirect to dashboard page
    }
  };
  return (
    <div className="otp-background">
      <Container className="d-flex justify-content-center align-items-center otp-container">
        <div className="otp-card">
          <h2 className="text-center otp-title">OTP Verification</h2>
          <p className="text-center mt-4 text-black otp-description">
            A 6-digit verification code has been sent to your email address
            starting with {/* <b>{maskedEmail}</b>. */}
          </p>
          <Form>
            <Row className="justify-content-center mb-4 otp-input-row">
              {otp?.map((value, index) => (
                <Col key={index} className="text-center p-0">
                  <input
                    id={`otp-input-${index}`}
                    type="text"
                    value={value}
                    placeholder="*"
                    onFocus={() => handleFocus(index)}
                    onChange={handleOtpChange(index)}
                    onKeyDown={handleOtpChange(index)} // Handle key events
                    maxLength={1} // Allow only one character
                    className="otp-input"
                  />
                </Col>
              ))}
            </Row>
            <Row className="mb-4">
              <Col className="text-center">
                <Button
                  className="mt-2 otp-verify-button verify"
                  style={{ width: "57%" }}
                  onClick={handleOtpVerify}
                >
                  Verify
                </Button>
              </Col>
            </Row>
            <Row className="text-center">
              <Col className="my-5">
                <span className="otp-resend-text">Didn't receive OTP?</span>
                {resendVisible ? (
                  <div>
                    <Button
                      variant="link"
                      onClick={handleResendButton}
                      style={{ color: "#092C70", fontWeight: "600" }}
                    >
                      Resend OTP
                    </Button>
                  </div>
                ) : (
                  <div>Request after {counter} sec.</div>
                )}
              </Col>
            </Row>
          </Form>
        </div>
      </Container>
    </div>
  );
}
