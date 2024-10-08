import { HashRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../views/pages/LoginPage/LoginPage";
import OtpPage from "../views/pages/OTPPage/OtpPage";
import ForgetPasswordPage from "../views/pages/ForgetPasswordPage/ForgetPasswordPage";


const Web = () => {
 return(
    <HashRouter>
        <Routes>
            <Route path='/' element={<LoginPage/>} />
            <Route path='/forgetPassword' element={<ForgetPasswordPage/>} />
            <Route path='/otp' element={<OtpPage/>} />
        </Routes>
    </HashRouter>
 )
};
export default Web;
