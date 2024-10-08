import React from "react";
import "../../assets/css/LoginForm.css"
import backgroundImage from "../../assets//images/loginbgimage.png";
import LoginForm from "../../components/LoginComponents/LoginForm";

export default function LoginPage() {
  return (
    <div
      style={{ height: "100vh" }}
      className="d-flex justify-content-center w-100 loginBackground"
    >
      <div className="d-flex flex-column justify-content-center align-items-center w-100">
        <img
          src={backgroundImage}
          className="position-relative  backgroundImage"
          style={{ width: "100%", height: "65%", marginTop:"10%" }}
        />
        <div className="position-absolute top-50 start-50 translate-middle loginformContainer">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
