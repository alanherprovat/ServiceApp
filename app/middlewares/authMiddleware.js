import { DecodeToken } from "../utility/tokenUtility.js";

export default (req, res, next) => {
  // Receive Token from cookies or headers
  let token = req.cookies.token;
  if (!token) {
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith("Bearer ")) {
      token = authHeader.split(" ")[1]; // Extract the token from the 'Bearer token' string
    }
  }

  // Token Decode
  let decoded = DecodeToken(token);

  // Request Header Email+UserID Add
  if (decoded === null) {
    return res.status(401).json({ status: "fail", message: "Unauthorized" });
  } else {
    const email = decoded["email"];
    const userId = decoded["userId"];
    const BaseCIF = decoded["BaseCIF"];
    const AccountNumber = decoded["AccountNumber"];
    const Product = decoded["Product"];
    req.headers.email = email;
    req.headers.userId = userId;
    req.headers.BaseCIF = BaseCIF;
    req.headers.AccountNumber = AccountNumber;
    req.headers.Product = Product;
    next();
  }
};
