import axios from "axios";
import { BACK_BASE } from "../../../config/config.js";
import ValidationHelper from "../../../utility/validationUtility.js";

// Your CashDeposit function

export const CashDeposit = async (req, res) => {
  try {
    const { cases, DepositBankAccID, Amount } = req.body;
    const docFile = req.file;

    const isValidImage = ValidationHelper.IsValidImageFileType(
      docFile.mimetype
    );

    // validation
    if (Number(Amount) < 500 || Number(Amount) > 450000) {
      return res.json({
        status: "fail",
        message: "Amount should be between 500 and 450000",
      });
    } else if (
      ValidationHelper.isNullOrUndefined(cases) ||
      ValidationHelper.isNullOrUndefined(DepositBankAccID) ||
      ValidationHelper.isNullOrUndefined(Amount)
    ) {
      return res.json({
        status: "fail",
        message: "Please fill all the fields",
      });
    } else if (cases === "" || DepositBankAccID === "" || Amount === "") {
      return res.json({
        status: "fail",
        message: "Please fill all the fields",
      });
    } else if (!isValidImage) {
      return res.json({
        status: "imageFail",
        message:
          "Only image files (gif jpeg jpg tiff  png webp bmp pdf agif svg) are allowed.",
      });
    } else {
      // Extracting file details
      const fileDetails = {
        name: docFile.originalname,
        type: docFile.mimetype,
        uri: `${docFile.buffer.toString("base64")}`,
      };

      const AccountNumber = req.headers.AccountNumber;
      const Product = req.headers.Product;
      let fyleTypeForm = "";
      if (fileDetails.type.split("/")[0] === "image") {
        fyleTypeForm = "image";
      } else {
        fyleTypeForm = fileDetails.type.split("/")[1];
      }
      const formData = {
        Cases: cases,
        DepositBankAccID: DepositBankAccID,
        Amount: Amount,
        Product: Product,
        AccountNo: AccountNumber,
        uri: fileDetails.uri,
        FileType: fyleTypeForm,
      };
      const url = `${BACK_BASE}/Deposit/CashDepositRequest`;

      const response = await axios.post(url, formData);
   
      if (response.data.Data.data === "request_successful") {
        res.json({ status: "success", message: "Deposit Successful" });
      } else {
        res.json({ status: "fail", message: "Something Went Wrong" });
      }
    }
  } catch (error) {
    res.json({ status: "server_fail", message: error.message });
  }
};
