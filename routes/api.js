import express from "express";
import * as AuthController from "../app/controllers/AuthControllers/AuthController.js";
import * as CashDepositController from "../app/controllers/ServiceControllers/DepostiControllers/CashDepositRequestController.js";
import * as FundTransferController from "../app/controllers/ServiceControllers/DepostiControllers/FundTransferController.js";
import * as BankInformationController from "../app/controllers/ServiceControllers/BankingInformationController/BankingInformationController.js";
import * as WithdrawalController from "../app/controllers/ServiceControllers/WithdrawControllers/WithdrawalController.js";
import * as IPOController from "../app/controllers/ServiceControllers/IPOController/IPOController.js";
import * as FetchDataForRequestController from "../app/controllers/ServiceControllers/ChangeRequestController/FetchDataForRequestController.js";
import * as SaveDataForRequestController from "../app/controllers/ServiceControllers/ChangeRequestController/SaveDataForRequestController.js";
import * as ControlSummary from "../app/controllers/ServiceControllers/ConsoleSummary/ConsoleSummary.js"
import AuthMiddleware from "../app/middlewares/authMiddleware.js";

import multer from "multer";
const router = express.Router();

// Set up multer storage and file handling
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// ----------------------- Banking Routes Start --------------------------
// client bank information (chaged)
router.post(
  "/clientbankinformation",
  AuthMiddleware,
  BankInformationController.ClientBankName
);
// all bank data using routing number
router.get(
  "/getbankinfousingrouting/:routingnumber",
  AuthMiddleware,
  BankInformationController.GetBankInfoUsingRouting
);

// idlc deposit bank account routes
router.get(
  "/depositbankaccount",
  AuthMiddleware,
  BankInformationController.DepostiBankAccount
);
// all bank account
router.get(
  "/allbankaccount",
  AuthMiddleware,
  BankInformationController.AllBankAccount
);
// bank branch names
router.get(
  "/bankbranchnames/:bankorgId",
  AuthMiddleware,
  BankInformationController.AllBankBranch
);
// get bank routing number
router.get(
  "/getbankroutingnumber/:bankID/:branchID",
  AuthMiddleware,
  BankInformationController.GetBankRoutingNumber
);
// client bank information for withdrawal (changed)
router.get(
  "/clientRegisteredBankInfo",
  AuthMiddleware,
  BankInformationController.ClientBankInformationForWithdrawal
);

// ------------------ Banking Routes End -----------------------

// -------------------------------------------------------------------------------------------------------------

// ----------- Authentication Request Start ------------------
// login routes
router.post("/doUserLogin", AuthController.DoUserLogin);
// logout routes
router.get("/logout", AuthMiddleware, AuthController.logout);

// verify jwt
router.get("/getJWTverify", AuthMiddleware, AuthController.verifyJWT);

// ----------- Authentication Request End ------------------

// --------------------------------------------------------------------------------------------------------------

// ----------- Deposit Apis Start ------------------

// ********************cash deposit request routes*****************
router.post(
  "/cashdepositrequest",
  AuthMiddleware,
  upload.single("docFile"),
  CashDepositController.CashDeposit
);

// ******************** Cash Deposit routes end *********************

// ******************** Fund Transfer routes start ********************

// fund transfer request routes for registered client
router.post(
  "/fundtransferrequest",
  AuthMiddleware,
  upload.single("docFile"),
  FundTransferController.FundTransferRequest
);

// fund transfer request routes for unregistered client/third party bank

router.post(
  "/fundtransferrequestforunregistered",
  AuthMiddleware,
  upload.single("docFile"),
  FundTransferController.ThirdPartyTransfer
);

// ******************** Fund Transfer routes end *****************

// ----------------------- Deposit Apis End --------------------------

// ----------------------- Withdrawal Apis Start --------------------------

// client financial information
router.get(
  "/clientFinancialInfo",
  AuthMiddleware,
  WithdrawalController.ClientFinancialInfo
);



// realtime withdrawal request

router.post(
  "/realTimeWithdrawRequest",
  AuthMiddleware,
  WithdrawalController.RealTimeWithdrawRequest
);

// register bank request submit

router.post('/registerBankRequest', AuthMiddleware, upload.single("docFile"), WithdrawalController.RegisteredBankRequest)
// third party bank request submit

router.post(
  "/thirdPartyBankRequest",
  AuthMiddleware,
  upload.single("docFile"),
  WithdrawalController.ThirdPartyBankRequest
);



// ----------------------- Withdrawal Apis End --------------------------

// -------------------------chagne request start ------------------------

// fetch address information for change request
router.get('/fetchAddressInfo', AuthMiddleware, FetchDataForRequestController.GetAddressInformationChange);
// address save
router.post('/changeAddressInfo', AuthMiddleware, upload.single("docFile"), SaveDataForRequestController.SaveAddressInformation)

// fetch bank request
router.get('/fetchBankInfo', AuthMiddleware, FetchDataForRequestController.GetBankInformationChange);
// save bank information
router.post('/saveBankInformation', AuthMiddleware, upload.single("docFile"), SaveDataForRequestController.SaveBankInformation);

// fetch tin number
router.get('/getTinNumber', AuthMiddleware, FetchDataForRequestController.GetTinNumber);
// save tin number
router.post('/saveTinNumber', AuthMiddleware, upload.single("docFile"), SaveDataForRequestController.SaveTinNumber);


// get contact information
router.get('/getContactInfo', AuthMiddleware, FetchDataForRequestController.GetContactInformation);
// change contact information
router.post('/changeContactInfo', AuthMiddleware, SaveDataForRequestController.ChangeContactInfo);

// signature change information

router.post('/changeSignature', AuthMiddleware, upload.single("docFile"), SaveDataForRequestController.ChangeSignature);

// ------------------------ change request end ---------------------------


// ------------------------ IPO Request Start ------------------------

router.get('/ipoClientInfo', AuthMiddleware, IPOController.IPOClientList);
router.post('/ipoRequest', AuthMiddleware, IPOController.IPORequest);

// -------------------- IPO Request End ------------------------

// ----------- console summary for all request ------------------

router.get('/consoleSummary', AuthMiddleware, ControlSummary.ConsoleSummary);

export default router;
