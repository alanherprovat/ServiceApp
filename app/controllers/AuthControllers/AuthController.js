import axios from "axios";
import { DecodeToken, EncodeToken } from "../../utility/tokenUtility.js";
import { BACK_BASE } from "../../config/config.js";

export const DoUserLogin = async (req, res) => {
  try {
    const loginData = req.body;
    const url = BACK_BASE + "/Auth/DoUserLogin";
    const response = await axios.post(url, loginData);
    if (response.data.Data.status === "Fail") {
      return res.json({ status: response.data.Data.message });
    } else if (response.data.Data.status === "Success") {
      if (response.data.Data.data.TwoFA === true) {
        const data = {
          userId: response.data.Data.data.UserId,
          email: response.data.Data.data.Email.slice(0, 3) + '....@'+ response.data.Data.data.Email.split("@")[1],
          BaseCIF: response.data.Data.data.BaseCIF,
        };
        return res.json({ status: "twofaEnable", data: data });
      } else {
        const email = response.data.Data.data.Email;
        const userId = response.data.Data.data.UserId;
        const BaseCIF = response.data.Data.data.BaseCIF;
        const AccountNumber = response.data.Data.data.AccountNumber;
        const Product = response.data.Data.data.Product;
        const token = EncodeToken(
          email,
          userId,
          BaseCIF,
          AccountNumber,
          Product
        );
        let cookieOption = {
          // expires: new Date(Date.now() + 60 * 60 * 1000), // 1 hour 60*60*24*30
          expires: new Date(Date.now() + 60*60*24*30),
          httpOnly: false,
        };
        res.cookie("token", token, cookieOption);
        return res.json({
          status: response.data.Data.message,
          message: "User Login Successfully",
          userid: response.data.Data.data.UserId,
          account: response.data.Data.data.MultipleAccount,
          token: token,
        });
      }
    }
  } catch (error) {
    return res.json({ status: "server_fail", message: error.toString() });
  }
};

// verify jwt
export const verifyJWT = (req, res) => {
  try {
    let token = req.cookies.token;
    if (!token) {
      const authHeader = req.headers.authorization || "";
      if (!authHeader) {
        return res.json({
          status: "fail",
          message: "Authorization header missing",
        });
      }

      if (authHeader.startsWith("Bearer ")) {
        token = authHeader.split(" ")[1]; // Extract thpape token from the 'Bearer token' string
      } else {
        return res.json({
          status: "fail",
          message: "Invalid Authorization header format",
        });
      }
    }

    if (!token) {
      return res.json({ status: "fail", message: "Invalid Token" });
    } else {
      const verified = DecodeToken(token);
      if (verified) {
        return res.json({ status: "verified", message: "Success Token" });
      } else {
        return res.json({ status: "fail", message: "Invalid Token" });
      }
    }
  } catch (error) {
    return res.json({ status: "server_fail", message: error.toString() });
  }
};

// logout
export const logout = (req, res) => {
  try {
    
    let cookieOption = {
      // expires: new Date(Date.now() - 60 * 60 * 1000),
      expires: new Date(Date.now() - 60*60*24*30),
      httpOnly: false,
    };
    res.cookie("token", "", cookieOption);
    res.json({ status: "success", message: "Successfully Logout" });
  } catch (error) {
    return res.json({ status: "fail", message: error.toString() });
  }
};
