import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import cogoToast from "cogo-toast";
// import { useDispatch } from "react-redux";
// import {
//   setUserIdFromSession,
//   setOrgIdFromSession,
//   setUserEmailSession,
//   setUserMobileSession,
//   setFromForgot,
// } from "../redux/features/ChangesPasswordOnLogin/ChangedPasswordOnLogin.js";
import { BiLeftArrowAlt } from "react-icons/bi";

export default function ForgetPasswordPage() {
  // State hooks to manage form and loading state
  const [accountNumber, setAccountNumber] = useState([]);
  const [email, setEmail] = useState("");
  const [selectedOrgID, setSelectedOrgID] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  // Effect to fetch organizations on component mount
  // useEffect(() => {
  //   const fetchOrganizations = async () => {
  //     try {
  //       const res = await axios.get(`api/getOrganizations`);
  //       setOrganizations(res?.data?.data?.data?.data); // Set organizations in state
  //     } catch (error) {
  //       cogoToast.error("Failed to load organizations."); // Error handling
  //     }
  //   };
  //   fetchOrganizations();
  // }, []);

  // Function to handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Validation check for required fields
    if (!username || !selectedOrgID) {
      cogoToast.error("Please fill in all required fields.");
      return;
    }

    setLoading(true); // Set loading state to true
    try {
      // POST request to check username and organization ID
      const response = await axios.post(
        `/api/forgetpasswordcheck?UserName=${encodeURIComponent(
          username
        )}&OrgID=${encodeURIComponent(selectedOrgID)}`
      );
      setLoading(false); // Reset loading state

      const { status, data } = response.data;
      if (status === "success" && data.status === "Fail") {
        cogoToast.error("User not found"); // Handle user not found
      } else if (status === "success" && data.status === "Success") {
        cogoToast.success("OTP sent successfully!"); // Success message
        // Save user data in session storage
        sessionStorage.setItem("userid", data.data.UserId);
        sessionStorage.setItem("orgid", data.data.OrgID);
        sessionStorage.setItem("email", data.data.Email);
        sessionStorage.setItem("mobile", data.data.MobileNo);
        sessionStorage.setItem("username", username);
        sessionStorage.setItem("fromForgot", "true");

        // Dispatch actions to update Redux store
        dispatch(setUserIdFromSession(data.data.UserId));
        dispatch(setOrgIdFromSession(data.data.OrgID));
        dispatch(setUserEmailSession(data.data.Email));
        dispatch(setUserMobileSession(data.data.MobileNo));
        dispatch(setFromForgot(true));

        // Navigate to OTP page
        navigate("/otp");
      } else if (status === "server_fail") {
        cogoToast.error("Server Error"); // Handle server error
      }
    } catch (error) {
      setLoading(false); // Reset loading state in case of error
      cogoToast.error("An error occurred while sending OTP."); // Error handling
    }
  };

  return (
    <div className="otp-background">
      <Container className="d-flex justify-content-center align-items-center otp-container">
        <div className="otp-card position-relative">
          <BiLeftArrowAlt
            className="back-icon align-items-start position-absolute"
            style={{
              top: "5%",
              left: "15%",
              cursor: "pointer",
              color: "white",
              backgroundColor: "rgba(0,0,0,.7)",
              borderRadius: "50%",
            }}
            onClick={() => navigate(-1)}
          />
          <h2 className="text-center otp-title">Forgot Password</h2>
          <p className="text-center mt-4 text-black otp-description ">
            No worries! Enter your username & select your organization below. We
            will send you a code to reset your password.
          </p>
          <Form
            onSubmit={handleFormSubmit}
            className="d-flex justify-content-center flex-column align-items-center"
            style={{ marginLeft: "5%" }}
          >
            <Form.Group
              controlId="formEmail"
              className="mt-5"
              style={{ width: "80%" }}
            >
              <Form.Label className="ms-2">Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group
              controlId="formAccountNumber"
              className="mt-4"
              style={{ width: "80%" }}
            >
              <Form.Label className="ms-2">Account Number</Form.Label>
              <Form.Control
                type="text"
                name="accountNumber"
                placeholder="Enter Your Account Number"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
                required
              />
            </Form.Group>
            
            <Row className="mb-4">
              <Col className="text-center">
                <Button
                  type="submit"
                  className="mt-5 otp-verify-button verify"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Reset Instructions"}
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </Container>
    </div>
  );
}
