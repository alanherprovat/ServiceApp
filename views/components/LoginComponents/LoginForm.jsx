import axios from "axios";
import "../../assets/css/LoginForm.css"
import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { FaEyeLowVision } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { IsEmpty } from "../../helper/FormHelper";
import cogoToast from "cogo-toast";
import { Spinner } from "react-bootstrap";
import { formDataToJSON } from "../../../app/utility/FormDataToJson";
import Swal from "sweetalert2";

export default function LoginForm() {
  // use state
  const [show, setShow] = useState(false);
  const [showSpiner, setShowSpiner] = useState(false);

  //   use hooks
  const navigate = useNavigate();
  // login submit
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    const isEmailEmpty = IsEmpty(email);
    const isPasswordEmpty = IsEmpty(password);

    if (isEmailEmpty) {
      cogoToast.error("Email cannot be empty.");
    } else if (isPasswordEmpty) {
      cogoToast.error("Password cannot be empty.");
    } else {
      try {
        setShowSpiner(true);
        const response = await axios.post(
          "/api/doUserLogin",
          formDataToJSON(formData)
        );
        setShowSpiner(false);
        if (response?.data.status == "invalid_credential") {
          Swal.fire({
            title: "Error!",
            text: `Invalid Credential`,
            icon: "error",
            confirmButtonText: "Ok",
          });
        } else if (response?.data?.status === "server_fail") {
          cogoToast.error(`Server Error`);
        } else if (response?.data?.status === "twofaEnable") {
            sessionStorage.setItem("userid", response?.data?.data?.userId);
            sessionStorage.setItem("email", response?.data?.data?.email);
            sessionStorage.setItem("baseCIF", response?.data?.data?.BaseCIF);
          
          //   dispatch(setUserIdFromSession(response?.data?.userID));
          //   dispatch(setOrgIdFromSession(response?.data?.orgID));
          //   dispatch(setUserEmailSession(response?.data?.email));
          //   dispatch(setUserMobileSession(response?.data?.mobile));
          //   dispatch(setJwtStatus(true));

          if (response?.data?.role === "Admin") {
            // dispatch(setRole("Admin"));
          }
          navigate("/otp/");
        } else {
          //   dispatch(setJwtStatus(true));
          if (response?.data?.data?.role === "Admin") {
            dispatch(setRole("Admin"));
          }
          cogoToast.success(`Login Successfull`);
          navigate("/");
        }
      } catch (error) {
        console.error("Login Error:", error);
      }
    }
  };
  return (
    <div className="loginform py-3">
      <form onSubmit={handleLoginSubmit}>
        <div className="d-flex justify-content-center">
          <img src={logo} alt="" srcset="" />
        </div>

        <div className="logininputs mt-5">
          {/* email field */}
          <div className="position-relative">
            <input
              type="email"
              placeholder="Email"
              className="px-5"
              name="email"
              autoFocus
              required
            />
            <div
              className="position-absolute"
              style={{ top: "20%", left: "2%" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
              >
                <path
                  d="M26.5009 5.93682H7.5005C6.42067 5.93682 5.38506 6.36578 4.6215 7.12934C3.85795 7.8929 3.42899 8.9285 3.42899 10.0083V23.58C3.42899 24.6599 3.85795 25.6955 4.6215 26.459C5.38506 27.2226 6.42067 27.6516 7.5005 27.6516H26.5009C27.5807 27.6516 28.6163 27.2226 29.3799 26.459C30.1434 25.6955 30.5724 24.6599 30.5724 23.58V10.0083C30.5724 8.9285 30.1434 7.8929 29.3799 7.12934C28.6163 6.36578 27.5807 5.93682 26.5009 5.93682ZM25.9445 8.65116L17.9643 16.6313C17.8381 16.7585 17.688 16.8595 17.5226 16.9284C17.3573 16.9973 17.1799 17.0328 17.0007 17.0328C16.8215 17.0328 16.6441 16.9973 16.4788 16.9284C16.3134 16.8595 16.1633 16.7585 16.0371 16.6313L8.05694 8.65116H25.9445ZM27.8581 23.58C27.8581 23.94 27.7151 24.2852 27.4606 24.5397C27.206 24.7942 26.8608 24.9372 26.5009 24.9372H7.5005C7.14056 24.9372 6.79535 24.7942 6.54083 24.5397C6.28632 24.2852 6.14333 23.94 6.14333 23.58V10.5648L14.1235 18.5449C14.8869 19.3074 15.9217 19.7357 17.0007 19.7357C18.0797 19.7357 19.1145 19.3074 19.8779 18.5449L27.8581 10.5648V23.58Z"
                  fill="#30384B"
                  fill-opacity="0.9"
                />
              </svg>
            </div>
          </div>
          {/* password field */}
          <div className="position-relative mt-4">
            <input
              type={`${show ? "text" : "password"}`}
              placeholder="Password"
              className="px-5"
              name="password"
              required
            />
            <div
              className="position-absolute"
              style={{
                right: "5%",
                top: "20%",
                cursor: "pointer",
                fontSize: "20px",
              }}
            >
              {show ? (
                <FaEye onClick={() => setShow(!show)} />
              ) : (
                <FaEyeLowVision onClick={() => setShow(!show)} />
              )}
            </div>
            <div
              className="position-absolute"
              style={{ top: "20%", left: "2%" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="33"
                viewBox="0 0 34 33"
                fill="none"
              >
                <path
                  d="M17.0369 17.7309C16.6769 17.7309 16.3317 17.8739 16.0772 18.1284C15.8227 18.3829 15.6797 18.7281 15.6797 19.088V23.1596C15.6797 23.5195 15.8227 23.8647 16.0772 24.1192C16.3317 24.3737 16.6769 24.5167 17.0369 24.5167C17.3968 24.5167 17.742 24.3737 17.9965 24.1192C18.251 23.8647 18.394 23.5195 18.394 23.1596V19.088C18.394 18.7281 18.251 18.3829 17.9965 18.1284C17.742 17.8739 17.3968 17.7309 17.0369 17.7309ZM23.8227 12.3022V9.58785C23.8227 7.78813 23.1078 6.06212 21.8352 4.78952C20.5626 3.51693 18.8366 2.80199 17.0369 2.80199C15.2371 2.80199 13.5111 3.51693 12.2385 4.78952C10.9659 6.06212 10.251 7.78813 10.251 9.58785V12.3022C9.17117 12.3022 8.13557 12.7311 7.37201 13.4947C6.60845 14.2583 6.17949 15.2939 6.17949 16.3737V25.8739C6.17949 26.9537 6.60845 27.9893 7.37201 28.7529C8.13557 29.5165 9.17117 29.9454 10.251 29.9454H23.8227C24.9025 29.9454 25.9382 29.5165 26.7017 28.7529C27.4653 27.9893 27.8942 26.9537 27.8942 25.8739V16.3737C27.8942 15.2939 27.4653 14.2583 26.7017 13.4947C25.9382 12.7311 24.9025 12.3022 23.8227 12.3022ZM12.9653 9.58785C12.9653 8.50801 13.3943 7.47241 14.1579 6.70885C14.9214 5.94529 15.957 5.51633 17.0369 5.51633C18.1167 5.51633 19.1523 5.94529 19.9159 6.70885C20.6794 7.47241 21.1084 8.50801 21.1084 9.58785V12.3022H12.9653V9.58785ZM25.1799 25.8739C25.1799 26.2338 25.0369 26.579 24.7824 26.8336C24.5279 27.0881 24.1827 27.2311 23.8227 27.2311H10.251C9.89106 27.2311 9.54586 27.0881 9.29134 26.8336C9.03682 26.579 8.89383 26.2338 8.89383 25.8739V16.3737C8.89383 16.0138 9.03682 15.6686 9.29134 15.414C9.54586 15.1595 9.89106 15.0165 10.251 15.0165H23.8227C24.1827 15.0165 24.5279 15.1595 24.7824 15.414C25.0369 15.6686 25.1799 16.0138 25.1799 16.3737V25.8739Z"
                  fill="#30384B"
                  fill-opacity="0.9"
                />
              </svg>
            </div>
          </div>
        </div>
        {/* forgot password */}
        <div className="d-flex justify-content-center mt-4 forgotpassword">
          <Link to='/forgetPassword' className="text-decoration-none">Forgot password?</Link>
        </div>
        {/* login button */}
        <div className="loginButton mt-4">
          <button className="py-2">
            {showSpiner ? (
              <Spinner />
            ) : (
              <>
                Login{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="33"
                  height="33"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M11.3196 9.60012V6.93345C11.3196 6.22621 11.6006 5.54793 12.1007 5.04783C12.6008 4.54774 13.279 4.26678 13.9863 4.26678H23.3196C24.0269 4.26678 24.7051 4.54774 25.2052 5.04783C25.7053 5.54793 25.9863 6.22621 25.9863 6.93345V22.9335C25.9863 23.6407 25.7053 24.319 25.2052 24.8191C24.7051 25.3192 24.0269 25.6001 23.3196 25.6001H13.9863C13.279 25.6001 12.6008 25.3192 12.1007 24.8191C11.6006 24.319 11.3196 23.6407 11.3196 22.9335V20.2668"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3.31963 14.9335H20.653M20.653 14.9335L16.653 10.9335M20.653 14.9335L16.653 18.9335"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </>
            )}
          </button>
        </div>
        {/* did not have an account */}
        <div className="didnothaveaccount mt-4">
          <p>
            Don`t have an account? <Link>Sign up</Link>
          </p>
        </div>
      </form>
    </div>
  );
}
