import { lazy } from 'react';

export const authorizedRoutes = [
    {
        url: '',
        component: lazy(() => import('../components/Dashboard/Dashboard')),
    },
    {
        url: '/new-exchange',
        component: lazy(() => import('../components/MaintenanceAndSetting/Exchange/NewExchange')),
    },
    {
        url: '/exchange-list',
        component: lazy(() => import('../components/MaintenanceAndSetting/Exchange/ExchangeList')),
    },
    {
        url: '/new-depository',
        component: lazy(() => import('../components/MaintenanceAndSetting/Depository/NewDepository')),
    },
    {
        url: '/depository-list',
        component: lazy(() => import('../components/MaintenanceAndSetting/Depository/DepositoryList')),
    },
    {
        url: '/new-trading-platform',
        component: lazy(() => import('../components/MaintenanceAndSetting/TradingPlatform/NewTradingPlatform')),
    },
    {
        url: '/trading-platform-list',
        component: lazy(() => import('../components/MaintenanceAndSetting/TradingPlatform/TradingPlatformList')),
    },
    {
        url: '/new-index',
        component: lazy(() => import('../components/MaintenanceAndSetting/Index/NewIndex')),
    },
    {
        url: '/index-list',
        component: lazy(() => import('../components/MaintenanceAndSetting/Index/IndexList')),
    },
    {
        url: '/new-market',
        component: lazy(() => import('../components/MaintenanceAndSetting/Market/NewMarket')),
    },
    {
        url: '/market-list',
        component: lazy(() => import('../components/MaintenanceAndSetting/Market/MarketList')),
    },
    {
        url: '/new-broker',
        component: lazy(() => import('../components/MaintenanceAndSetting/Broker/NewBroker')),
    },
    {
        url: '/broker-list',
        component: lazy(() => import('../components/MaintenanceAndSetting/Broker/BrokerList')),
    },
    {
        url: '/new-equity-instrument',
        component: lazy(() => import('../components/MaintenanceAndSetting/EquityInstrument/NewEquityInstrument')),
    },
    {
        url: '/equity-instrument-list',
        component: lazy(() => import('../components/MaintenanceAndSetting/EquityInstrument/EquityInstrumentList')),
    },
    {
        url: '/equity-instrument-approval-list',
        component: lazy(() => import('../components/MaintenanceAndSetting/EquityInstrument/ApprovalList/EquityInstrumentApprovalList')),
    },
    {
        url: '/equity-instrument-approval-list/details',
        component: lazy(() => import('../components/MaintenanceAndSetting/EquityInstrument/ApprovalList/EquityInstrumentApprovalDetails')),
    },
    {
        url: '/new-mutual-fund',
        component: lazy(() => import('../components/MaintenanceAndSetting/MutualFund/NewMutualFund')),
    },
    {
        url: '/mutual-fund-list',
        component: lazy(() => import('../components/MaintenanceAndSetting/MutualFund/MutualFundList')),
    },
    {
        url: '/mutual-fund-approval-list',
        component: lazy(() => import('../components/MaintenanceAndSetting/MutualFund/ApprovalList/MutualFundApprovalList')),
    },
    {
        url: '/mutual-fund-approval-list/details',
        component: lazy(() => import('../components/MaintenanceAndSetting/MutualFund/ApprovalList/MutualFundApprovalDetails')),
    },
    {
        url: '/new-g-sec',
        component: lazy(() => import('../components/MaintenanceAndSetting/GSecInstrument/NewGSecInstrument')),
    },
    {
        url: '/g-sec-list',
        component: lazy(() => import('../components/MaintenanceAndSetting/GSecInstrument/GSecInstrumentList')),
    },
    {
        url: '/g-sec-approval-list',
        component: lazy(() => import('../components/MaintenanceAndSetting/GSecInstrument/ApprovalList/GSecApprovalList')),
    },
    {
        url: '/g-sec-approval-list/details',
        component: lazy(() => import('../components/MaintenanceAndSetting/GSecInstrument/ApprovalList/GSecApprovalDetails')),
    },
    {
        url: '/new-merchant-bank',
        component: lazy(() => import('../components/MaintenanceAndSetting/MerchantBank/NewMerchantBank')),
    },
    {
        url: '/merchant-bank-list',
        component: lazy(() => import('../components/MaintenanceAndSetting/MerchantBank/MerchantBankList')),
    },
    {
        url: '/new-bond',
        component: lazy(() => import('../components/MaintenanceAndSetting/BondInstrument/NewBondInstrument')),
    },
    {
        url: '/bond-list',
        component: lazy(() => import('../components/MaintenanceAndSetting/BondInstrument/BondInstrumentList')),
    },
    {
        url: '/bond-approval-list',
        component: lazy(() => import('../components/MaintenanceAndSetting/BondInstrument/ApprovalList/BondInstrumentApprovalList')),
    },
    {
        url: '/bond-approval-list/details',
        component: lazy(() => import('../components/MaintenanceAndSetting/BondInstrument/ApprovalList/BondInstrumentApprovalDetails')),
    },
    {
        url: '/new-amc',
        component: lazy(() => import('../components/MaintenanceAndSetting/AssetManagementCompany/NewAMC')),
    },
    {
        url: '/amc-list',
        component: lazy(() => import('../components/MaintenanceAndSetting/AssetManagementCompany/AMCList')),
    },
    {
        url: '/new-netting-setup',
        component: lazy(() => import('../components/MaintenanceAndSetting/NettingSetup/NewNettingSetup')),
    },
    {
        url: '/netting-setup-list',
        component: lazy(() => import('../components/MaintenanceAndSetting/NettingSetup/NettingSetupList')),
    },
    {
        url: '/new-settlement',
        component: lazy(() => import('../components/MaintenanceAndSetting/SettlementSchedule/NewSettlement')),
    },
    {
        url: '/settlement-list',
        component: lazy(() => import('../components/MaintenanceAndSetting/SettlementSchedule/SettlementList')),
    },
    {
        url: '/create-new-charge',
        component: lazy(() => import('../components/MaintenanceAndSetting/Charges/NewCharges/NewCharges')),
    },
    {
        url: '/charge-list',
        component: lazy(() => import('../components/MaintenanceAndSetting/Charges/ChargesList/ChargesList')),
    },
    {
        url: '/charge-approval-list',
        component: lazy(() => import('../components/MaintenanceAndSetting/Charges/ChargesApproval/ChargeApprovalList')),
    },
    {
        url: '/charge-approval-details',
        component: lazy(() => import('../components/MaintenanceAndSetting/Charges/ChargesApproval/ChargeApprovalDetails')),
    },
    {
        url: '/pe-ratio-update-cm',
        component: lazy(() => import('../components/MaintenanceAndSetting/InstrumentPeRatioSettingBulkFile/InstrumentPeRatioSettingBulkFile')),
    },
    {
        url: '/account-list-with-accrued-charge',
        component: lazy(() => import('../components/FinancialTransaction/Charges/AccruedAccount/AccruedAccountList')),
    },
    {
        url: '/upload-charge-file-for-accrual',
        component: lazy(() => import('../components/FinancialTransaction/Charges/UploadChargeFile/UploadChargeFile')),
    },
    {
        url: '/uploaded-accrued-charge-approval-list',
        component: lazy(() => import('../components/FinancialTransaction/Charges/UploadedChargeFileApproval/UploadedChargeApproval')),
    },
    {
        url: '/delete-accrued-charge',
        component: lazy(() => import('../components/FinancialTransaction/Charges/DeleteAccruedCharge/DeleteAccruedCharge')),
    },
    {
        url: '/deleted-accrued-charge-approval-list',
        component: lazy(() => import('../components/FinancialTransaction/Charges/DeletedAccruedChargeApprovalList/DeletedAccruedChargeApprovalList')),
    },
    {
        url: '/apply-accrued-charges',
        component: lazy(() => import('../components/FinancialTransaction/Charges/ApplyAccruedCharge/ApplyAccruedCharge')),
    },
    {
        url: '/applied-accrued-charges-approval-list',
        component: lazy(() => import('../components/FinancialTransaction/Charges/AppliedAccruedChargeApprovalList/AppliedAccruedChargeApprovalList')),
    },
    {
        url: '/manual-charge-apply',
        component: lazy(() => import('../components/FinancialTransaction/Charges/ManualChargeApply/ManualChargeApply')),
    },
    {
        url: '/manual-charge-apply-bulk-input',
        component: lazy(() => import('../components/FinancialTransaction/Charges/ManualChargeApplyBulkInput/ManualChargeApplyBulkInput')),
    },
    {
        url: '/applied-manual-charges-approval-list',
        component: lazy(() => import('../components/FinancialTransaction/Charges/ManualChargeApplyApproval/ManualChargeApplyApproval')),
    },
    {
        url: '/reversal-of-applied-charges-entries',
        component: lazy(() => import('../components/FinancialTransaction/Charges/ReverseAppliedCharges/ReverseAppliedCharges')),
    },
    {
        url: '/reversal-of-applied-charge-approval-list',
        component: lazy(() => import('../components/FinancialTransaction/Charges/ReverseAppliedChargesApproval/ReverseAppliedChargesApproval')),
    },
    {
        url: '/charge-adjustment',
        component: lazy(() => import('../components/FinancialTransaction/Charges/ChargeAdjustment/ChargeAdjustment')),
    },
    {
        url: '/charge-adjustment-approval-list',
        component: lazy(() => import('../components/FinancialTransaction/Charges/ChargeAdjustmentApproval/ChargeAdjustmentApproval')),
    },
    {
        url: '/charge-advance-il',
        component: lazy(() => import('../components/FinancialTransaction/Charges/ChargeAdvance/ChargeAdvance')),
    },
    {
        url: '/new-employee',
        component: lazy(() => import('../components/MaintenanceAndSetting/Employee/CreateEmployee')),
    },
    {
        url: '/employee-list',
        component: lazy(() => import('../components/MaintenanceAndSetting/Employee/EmployeeList')),
    },
    {
        url: '/new-ar',
        component: lazy(() => import('../components/MaintenanceAndSetting/ARSetup/NewAR/CreateAR')),
    },
    {
        url: '/ar-list',
        component: lazy(() => import('../components/MaintenanceAndSetting/ARSetup/ARList')),
    },
    {
        url: '/new-tws',
        component: lazy(() => import('../components/MaintenanceAndSetting/TWS/NewTWS/CreateTWS')),
    },
    {
        url: '/tws-list',
        component: lazy(() => import('../components/MaintenanceAndSetting/TWS/TWSList')),
    },

    //FOR USER ROLE, MODULE AND AUTHORITY
    {
        url: '/user-module',
        component: lazy(() => import('../components/UserManagement/UserManagement')),
    },
    // TRADE PROCESSING MODULE
    {
        url: '/bc-account-list-sl',
        component: lazy(() => import('../components/TradeProcessing/BrokerageCommissionSetupSL/AccountList/BcAccountListSL')),
    },
    {
        url: '/bc-account-list-sl/edit',
        component: lazy(() => import('../components/TradeProcessing/BrokerageCommissionSetupSL/AccountList/EditBcAccountSL')),
    },
    {
        url: '/bc-account-group-list',
        component: lazy(() => import('../components/TradeProcessing/BrokerageCommissionAccountGroup/AccountGroupList/BcAccountGroupList')),
    },
    {
        url: '/bc-account-group-list/edit',
        component: lazy(() => import('../components/TradeProcessing/BrokerageCommissionAccountGroup/AccountGroupList/EditBcAccountGroup')),
    },
    {
        url: '/bc-account-list-il',
        component: lazy(() => import('../components/TradeProcessing/BrokerageCommissionSetupIL/AccountList/BcAccountListIL')),
    },
    {
        url: '/bc-account-list-il/edit',
        component: lazy(() => import('../components/TradeProcessing/BrokerageCommissionSetupIL/AccountList/EditBcAccountIL')),
    },
    {
        url: '/bc-account-list-aml',
        component: lazy(() => import('../components/TradeProcessing/BrokerageCommissionSetupAML/AccountList/BcAccountListAML')),
    },
    {
        url: '/bc-account-list-aml/edit',
        component: lazy(() => import('../components/TradeProcessing/BrokerageCommissionSetupAML/AccountList/EditBcAccountAML')),
    },
    {
        url: '/bc-approval-list-sl',
        component: lazy(() => import('../components/TradeProcessing/BrokerageCommissionSetupSL/ApprovalList/BcApprovalListSL')),
    },
    {
        url: '/bc-approval-list-sl/details',
        component: lazy(() => import('../components/TradeProcessing/BrokerageCommissionSetupSL/ApprovalList/BcApprovalDetailsSL')),
    },
    {
        url: '/bc-account-group-approval-list',
        component: lazy(() => import('../components/TradeProcessing/BrokerageCommissionAccountGroup/AccountGroupApprovalList/BcAccountGroupApprovalList')),
    },
    {
        url: '/bc-account-group-approval-list/details',
        component: lazy(() => import('../components/TradeProcessing/BrokerageCommissionAccountGroup/AccountGroupApprovalList/BcAccountGroupApprovalDetails')),
    },
    {
        url: '/bc-approval-list-il',
        component: lazy(() => import('../components/TradeProcessing/BrokerageCommissionSetupIL/ApprovalList/BcApprovalListIL')),
    },
    {
        url: '/bc-approval-list-il/details',
        component: lazy(() => import('../components/TradeProcessing/BrokerageCommissionSetupIL/ApprovalList/BcApprovalDetailsIL')),
    },
    {
        url: '/upload-price-file',
        component: lazy(() => import('../components/TradeProcessing/PriceFileUpload/PriceFileUpload')),
    },
    {
        url: '/upload-trade-file-SL',
        component: lazy(() => import('../components/TradeProcessing/TradeFileUploadSL/TradeFileUpload')),
    },
    {
        url: '/approve-trade-data-SL',
        component: lazy(() => import('../components/TradeProcessing/TradeFileUploadSL/TradeFileApprove')),
    },
    {
        url: '/commission-amount-update-approval-sl',
        component: lazy(() => import('../components/TradeProcessing/TradeFileUploadSL/CommissionAmountUpdate/CommissionAmountUpdateApproval')),
    },
    {
        url: '/trade-correction-sl',
        component: lazy(() => import('../components/TradeProcessing/TradeFileUploadSL/TradeCorrection/TradeCorrection')),
    },
    {
        url: '/trade-correction-approval-sl',
        component: lazy(() => import('../components/TradeProcessing/TradeFileUploadSL/TradeCorrection/TradeCorrectionApproval')),
    },
    {
        url: '/trade-reversal-sl',
        component: lazy(() => import('../components/TradeProcessing/TradeFileUploadSL/TradeReversal/TradeReversal')),
    },
    {
        url: '/trade-reversal-approval-sl',
        component: lazy(() => import('../components/TradeProcessing/TradeFileUploadSL/TradeReversal/TradeReversalApproval')),
    },
    {
        url: '/import-omnibus-purchase-power-limit-sl',
        component: lazy(() => import('../components/TradeProcessing/ExportImportTradeDataSL/ImportOmnibusCashLimit')),
    },
    {
        url: '/import-omnibus-stock-limit-sl',
        component: lazy(() => import('../components/TradeProcessing/ExportImportTradeDataSL/ImportOmnibusStockLimit')),
    },

    {
        url: '/export-omnibus-purchase-power-limit-sl',
        component: lazy(() => import('../components/TradeProcessing/ExportImportTradeDataSL/ExportOmnibusCashLimit')),
    },
    {
        url: '/export-omnibus-stock-limit-sl',
        component: lazy(() => import('../components/TradeProcessing/ExportImportTradeDataSL/ExportOmnibusStockLimit')),
    },
    {
        url: '/export-client-registration-file-sl',
        component: lazy(() => import('../components/TradeProcessing/ExportImportTradeDataSL/ExportClientRegistrationFile')),
    },

    {
        url: '/report-foreign-trade',
        component: lazy(() => import('../components/TradeProcessing/Report/ReportForeignTrade')),
    },

    //Trade Settlement

    {
        url: '/trade-settlement-new-account-group',
        component: lazy(() => import('../components/TradeProcessing/TradeSettlement/NewAccountGroup/NewAccountGroup')),
    },
    {
        url: '/trade-settlement-account-group-list',
        component: lazy(() => import('../components/TradeProcessing/TradeSettlement/AccountGroupList/AccountGroupList')),
    },
    {
        url: '/trade-file-export',
        component: lazy(() => import('../components/TradeProcessing/TradeSettlement/TradeFileExport/TradeFileExport')),
    },
    {
        url: '/pay-in-file-generation',
        component: lazy(() => import('../components/TradeProcessing/TradeSettlement/PayInFileGeneration/PayInFileGeneration')),
    },
    {
        url: '/pay-out-file-generation',
        component: lazy(() => import('../components/TradeProcessing/TradeSettlement/PayOutFileGeneration/PayOutFileGeneration')),
    },

    // Foreign Accounts
    {
        url: '/foreign-trade-allocation-hawla-wise',
        component: lazy(() => import('../components/TradeProcessing/ForeignAccounts/ForeignTradeAllocation/HawlaWise/ForeignTradeAllocation')),
    },
    {
        url: '/foreign-trade-allocation-account-wise',
        component: lazy(() => import('../components/TradeProcessing/ForeignAccounts/ForeignTradeAllocation/AccountWise/ForeignTradeAllocation')),
    },
    {
        url: '/foreign-trade-allocation-approval',
        component: lazy(() => import('../components/TradeProcessing/ForeignAccounts/ForeignTradeApproval/ForeignTradeApproval')),
    },
    {
        url: '/foreign-trade-allocation-approval-details',
        component: lazy(() => import('../components/TradeProcessing/ForeignAccounts/ForeignTradeApproval/ApprovalDetails/ForeignTradeAllocationDetails')),
    },


    {
        url: '/upload-trade-file-IL',
        component: lazy(() => import('../components/TradeProcessing/TradeFileUploadIL/TradeFileUpload')),
    },
    {
        url: '/approve-trade-data-IL',
        component: lazy(() => import('../components/TradeProcessing/TradeFileUploadIL/TradeFileApprove')),
    },
    {
        url: '/trade-reversal-IL',
        component: lazy(() => import('../components/TradeProcessing/TradeFileUploadIL/TradeReversalIL/TradeReversalIL')),
    },
    {
        url: '/trade-reversal-approval-IL',
        component: lazy(() => import('../components/TradeProcessing/TradeFileUploadIL/TradeReversalIL/TradeReversalApprovalIL')),
    },
    {
        url: '/non-margin-trade-approval',
        component: lazy(() => import('../components/TradeProcessing/TradeFileUploadIL/NonMarginTradeApproval')),
    },
    {
        url: '/over-buy-trade-approval',
        component: lazy(() => import('../components/TradeProcessing/TradeFileUploadIL/OverbuyTradeApproval')),
    },
    {
        url: '/upload-trade-file-AML',
        component: lazy(() => import('../components/TradeProcessing/TradeFileUploadAML/TradeFileUploadAML')),
    },
    {
        url: '/approve-trade-data-AML',
        component: lazy(() => import('../components/TradeProcessing/TradeFileUploadAML/TradeFileApproveAML')),
    },
    {
        url: '/bc-approval-list-aml',
        component: lazy(() => import('../components/TradeProcessing/BrokerageCommissionSetupAML/ApprovalList/BcApprovalListAML')),
    },
    {
        url: '/bc-approval-list-aml/details',
        component: lazy(() => import('../components/TradeProcessing/BrokerageCommissionSetupAML/ApprovalList/BcApprovalDetailsAML')),
    },
    {
        url: '/trade-reversal-AML',
        component: lazy(() => import('../components/TradeProcessing/TradeFileUploadAML/TradeReversalAML/TradeReversalAML')),
    },
    {
        url: '/trade-reversal-approval-AML',
        component: lazy(() => import('../components/TradeProcessing/TradeFileUploadAML/TradeReversalAML/TradeReversalApprovalAML')),
    },
    {
        url: '/market-file-update',
        component: lazy(() => import('../components/TradeProcessing/TradeFileUploadAML/MarketFileUpdate/MarketFileUpdate')),
    },
    {
        url: '/market-file-update-log',
        component: lazy(() => import('../components/TradeProcessing/TradeFileUploadAML/MarketFileUpdateLog/MarketFileUpdateLog')),
    },
    {
        url: '/new-instrument-group',
        component: lazy(() => import('../components/TradeProcessing/InstrumentGroup/NewInstrumentGroup')),
    },
    {
        url: '/instrument-group-list',
        component: lazy(() => import('../components/TradeProcessing/InstrumentGroup/InstrumentGroupList')),
    },

    {
        url: '/instrument-group-approval-list',
        component: lazy(() => import('../components/TradeProcessing/InstrumentGroup/InstrumentGroupApprovalList')),
    },

    {
        url: '/instrument-group-approval-list/details',
        component: lazy(() => import('../components/TradeProcessing/InstrumentGroup/InstrumentGroupApprovalDetails')),
    },

    // IL
    {
        url: '/restriction-on-product-list',
        component: lazy(() => import('../components/TradeProcessing/RestrictionOnProduct/RestrictionOnProductList')),
    },
    {
        url: '/restriction-on-product-list/edit',
        component: lazy(() => import('../components/TradeProcessing/RestrictionOnProduct/EditRestrictionOnProduct')),
    },
    {
        url: '/restriction-on-product-approval',
        component: lazy(() => import('../components/TradeProcessing/RestrictionOnProduct/RestrictionOnProductApprovalList')),
    },
    {
        url: '/restriction-on-product-approval/detail',
        component: lazy(() => import('../components/TradeProcessing/RestrictionOnProduct/RestrictionOnProductApprovalDetails')),
    },

    {
        url: '/restriction-on-account-group-list',
        component: lazy(() => import('../components/TradeProcessing/RestrictionOnAccountGroup/RestrictionOnAccountGroupList')),
    },
    {
        url: '/restriction-on-account-group-list/edit',
        component: lazy(() => import('../components/TradeProcessing/RestrictionOnAccountGroup/EditRestrictionOnAccountGroup')),
    },
    {
        url: '/restriction-on-account-group-approval',
        component: lazy(() => import('../components/TradeProcessing/RestrictionOnAccountGroup/RestrictionOnAccountGroupApprovalList')),
    },
    {
        url: '/restriction-on-account-group-approval/detail',
        component: lazy(() => import('../components/TradeProcessing/RestrictionOnAccountGroup/RestrictionOnAccountGroupApprovalDetails')),
    },
    {
        url: '/restriction-on-account-list',
        component: lazy(() => import('../components/TradeProcessing/RestrictionOnAccount/RestrictionOnAccountList')),
    },
    {
        url: '/restriction-on-account-list/edit',
        component: lazy(() => import('../components/TradeProcessing/RestrictionOnAccount/EditRestrictionOnAccount')),
    },
    {
        url: '/restriction-on-account-approval',
        component: lazy(() => import('../components/TradeProcessing/RestrictionOnAccount/RestrictionOnAccountApprovalList')),
    },
    {
        url: '/restriction-on-account-approval/detail',
        component: lazy(() => import('../components/TradeProcessing/RestrictionOnAccount/RestrictionOnAccountApprovalDetails')),
    },
    {
        url: '/generate-sell-order',
        component: lazy(() => import('../components/TradeProcessing/OrderGeneration/ProductWise/GenerateSellOrderProductWise')),
    },
    {
        url: '/generate-buy-order',
        component: lazy(() => import('../components/TradeProcessing/OrderGeneration/ProductWise/GenerateBuyOrderProductWise')),
    },
    {
        url: '/generate-sell-order-account-wise',
        component: lazy(() => import('../components/TradeProcessing/OrderGeneration/AccountWise/GenerateSellOrderAccountWise')),
    },
    {
        url: '/generate-buy-order-account-wise',
        component: lazy(() => import('../components/TradeProcessing/OrderGeneration/AccountWise/GenerateBuyOrderAccountWise')),
    },
    {
        url: '/sell-allocation-on-account',
        component: lazy(() => import('../components/TradeProcessing/TradeAllocation/SellAllocationOnAccount_New')),
    },
    {
        url: '/sell-allocation-on-account-approval',
        component: lazy(() => import('../components/TradeProcessing/TradeAllocation/SellAllocationOnAccountApprovalList')),
    },
    {
        url: '/buy-allocation-on-account',
        component: lazy(() => import('../components/TradeProcessing/TradeAllocation/BuyAllocationOnAccount_New')),
    },
    {
        url: '/buy-allocation-on-account-approval',
        component: lazy(() => import('../components/TradeProcessing/TradeAllocation/BuyAllocationOnAccountApprovalList')),
    },
    {
        url: '/weekday-setup',
        component: lazy(() => import('../components/TradeProcessing/TransactionDateSetup/WeekdaySetup')),
    },
    {
        url: '/holiday-setup',
        component: lazy(() => import('../components/TradeProcessing/TransactionDateSetup/HolidayDaySetup')),
    },
    {
        url: '/exception-day-setup',
        component: lazy(() => import('../components/TradeProcessing/TransactionDateSetup/ExceptionDaySetup')),
    },
    {
        url: '/order-sheet-list',
        component: lazy(() => import('../components/TradeProcessing/OrderSheet/OrderSheetList')),
    },
    {
        url: '/order-sheet',
        component: lazy(() => import('../components/TradeProcessing/OrderSheet/NewOrderSheet')),
    },
    {
        url: '/order-sheet-approval-list',
        component: lazy(() => import('../components/TradeProcessing/OrderSheet/UnAuthorizedOrderSheetList')),
    },
    {
        url: '/order-sheet-management-entry',
        component: lazy(() => import('../components/TradeProcessing/OrderSheet/OrderSheetManagementEntry')),
    },
    {
        url: '/order-sheet-management-entry-approval-list',
        component: lazy(() => import('../components/TradeProcessing/OrderSheet/UnAuthorizedOrderSheetManagementEntryList')),
    },
    {
        url: '/release-sheet-approval-list',
        component: lazy(() => import('../components/TradeProcessing/OrderSheet/UnAuthorizedReleasedSheetList')),
    },
    {
        url: '/document-print-order',
        component: lazy(() => import('../components/TradeProcessing/OrderSheet/DocumentPrint')),
    },
    {
        url: '/release-order-sheet',
        component: lazy(() => import('../components/TradeProcessing/OrderSheet/ReleaseRemainingSheet')),
    },
    {
        url: '/create-customer',
        component: lazy(() => import('../components/Onboarding/Customer/CreateCustomer')),
    },
    {
        url: '/customer-list',
        component: lazy(() => import('../components/Onboarding/Customer/CustomerList')),
    },
    {
        url: '/unauthorized-customer-list',
        component: lazy(() => import('../components/Onboarding/Customer/UnAuthorizedCustomerList')),
    },
    {
        url: '/unauthorized-customer/details',
        component: lazy(() => import('../components/Onboarding/Customer/UnAuthorizedCustomerDetails')),
    },
    {
        url: '/create-account',
        component: lazy(() => import('../components/Onboarding/Account/CreateAccount')),
    },
    {
        url: '/account-list',
        component: lazy(() => import('../components/Onboarding/Account/AccountList')),
    },
    {
        url: '/unauthorized-account-list',
        component: lazy(() => import('../components/Onboarding/Account/UnAuthorizedAccountList')),
    },
    {
        url: '/unauthorized-account/details',
        component: lazy(() => import('../components/Onboarding/Account/UnAuthorizedAccountDetails')),
    },
    {
        url: '/account-info-list',
        component: lazy(() => import('../components/Onboarding/Account/AccountInfoList')),
    },
    {
        url: '/unauthorized-account-info-list',
        component: lazy(() => import('../components/Onboarding/Account/UnAuthorizedAccountInfoList')),
    },
    {
        url: '/account-info-details',
        component: lazy(() => import('../components/Onboarding/Account/AccountInfoUpdate/AccountInfoDetails')),
    },
    {
        url: '/unauthorized-account-info-details',
        component: lazy(() => import('../components/Onboarding/Account/UnauthorizedAccountInfo/UnauthorizedAccountInfoDetails')),
    },
    {
        url: '/installment-schedule-generate',
        component: lazy(() => import('../components/Onboarding/Account/InstallmentScheduleGenerate/InstallmentScheduleGenerate')),
    },
    {
        url: '/installment-schedule-list',
        component: lazy(() => import('../components/Onboarding/Account/InstallmentScheduleList')),
    },
    {
        url: '/installment-schedule-details',
        component: lazy(() => import('../components/Onboarding/Account/InstallmentScheduleDetails/InstallmentScheduleDetails')),
    },
    {
        url: '/unauthorized-installment-schedule-list',
        component: lazy(() => import('../components/Onboarding/Account/UnAuthorizedInstallmentScheduleList')),
    },
    {
        url: '/unauthorized-installment-schedule-details',
        component: lazy(() => import('../components/Onboarding/Account/UnAuthorizedInstallmentScheduleDetails')),
    },
    {
        url: '/bulk-defer-cancel',
        component: lazy(() => import('../components/Onboarding/Account/BulkDeferCancel')),
    },
    {
        url: '/unauthorized-defer-cancel-list',
        component: lazy(() => import('../components/Onboarding/Account/UnAuthorizedDeferCancelList')),
    },
    {
        url: '/new-account-group',
        component: lazy(() => import('../components/Onboarding/AccountGroup/NewAccountGroup')),
    },
    {
        url: '/account-group-list',
        component: lazy(() => import('../components/Onboarding/AccountGroup/AccountGroupList')),
    },
    {
        url: '/create-new-product',
        component: lazy(() => import('../components/Onboarding/Product/NewProduct')),
    },
    {
        url: '/product-list',
        component: lazy(() => import('../components/Onboarding/Product/ProductList')),
    },
    {
        url: '/list-products-unauthorized',
        component: lazy(() => import('../components/Onboarding/Product/UnAuthorizedProductList')),
    },
    {
        url: '/unauthorized-product/details',
        component: lazy(() => import('../components/Onboarding/Product/UnAuthorizedProductDetails')),
    },
    {
        url: '/bosetup',
        component: lazy(() => import('../components/Onboarding/CDBLFile/BoSetup')),
    },
    {
        url: '/BoSetupRegenerate',
        component: lazy(() => import('../components/Onboarding/CDBLFile/BoSetupRegenerate')),
    },
    {
        url: '/document-pending-approval-list',
        component: lazy(() => import('../components/Onboarding/Document/PendingApproval/PendingApprovalList')),
    },
    {
        url: '/document-pending-approval-details',
        component: lazy(() => import('../components/Onboarding/Document/PendingApproval/PendingApprovalDetails')),
    },
    {
        url: '/document-pending-upload-list',
        component: lazy(() => import('../components/Onboarding/Document/PendingUpload/PendingUploadList')),
    },
    {
        url: '/document-pending-upload-details',
        component: lazy(() => import('../components/Onboarding/Document/PendingUpload/PendingUploadDetails')),
    },
    {
        url: '/document-verification-list',
        component: lazy(() => import('../components/Onboarding/Document/DocVerification/DocumentVerificationList')),
    },
    {
        url: '/document-verification-details',
        component: lazy(() => import('../components/Onboarding/Document/DocVerification/DocumentVerificationDetails')),
    },
    {
        url: '/online-onboarding',
        component: lazy(() => import('../components/Onboarding/DataSync/OnlineOnboarding')),
    },
    {
        url: '/trading-service-subscription',
        component: lazy(() => import('../components/Onboarding/TradingServiceSubscription/TradingServiceSubscription')),
    },
    {
        url: '/sms-email-service',
        component: lazy(() => import('../components/Onboarding/SmsEmailService/SmsEmailService')),
    },
    {
        url: '/email-circulation-to-panel-broker-il',
        component: lazy(() => import('../components/Onboarding/PanelBrokerEmailService/PanelBrokerEmailService')),
    },
    {
        url: '/pending-account-list',
        component: lazy(() => import('../components/Onboarding/KYC/PendingAccountList')),
    },
    {
        url: '/kyc-input',
        component:localStorage.getItem("CompanyId") ==='3'? lazy(() =>import('../components/Onboarding/KYCIL/KYCInputIL/KYCInputIL') ) :
                  localStorage.getItem("CompanyId") === '4'? (lazy(() => import('../components/Onboarding/KYC/KYCInput/KYCInput'))) :
                  lazy(() => import('../components/Onboarding/KYCAML/KYCInputAML/KYCInputAML')),
    },
    {
        url: '/complete-account-list',
        component: lazy(() => import('../components/Onboarding/KYC/CompleteAccountList')),
    },
    {
        url: '/kyc-approval-list',
        component:localStorage.getItem("CompanyId") ==='3'? lazy(() =>import('../components/Onboarding/KYCIL/KYCApprovalIL/KYCApprovalListIL') ) :
                  (localStorage.getItem("CompanyId") === '4'&& lazy(() => import('../components/Onboarding/KYC/KYCApproval/KYCApprovalList')))
    },
    {
        url: '/kyc-approval-details',
        component:localStorage.getItem("CompanyId") ==='3'? lazy(() =>import('../components/Onboarding/KYCIL/KYCApprovalIL/KYCApprovalDetailsIL') ) :
                 (localStorage.getItem("CompanyId") === '4'&& lazy(() => import('../components/Onboarding/KYC/KYCApproval/KYCApprovalDetails')))
    },
    {
        url: '/kyc-review-list',
        component:localStorage.getItem("CompanyId") ==='3'? lazy(() =>import('../components/Onboarding/KYCIL/KYCReviewIL/KYCReviewListIL') ) :
            (localStorage.getItem("CompanyId") === '4'&& lazy(() => import('../components/Onboarding/KYC/KYCReview/KYCReviewList')))
    },
    {
        url: '/kyc-review-details',
        component:localStorage.getItem("CompanyId") ==='3'? lazy(() =>import('../components/Onboarding/KYCIL/KYCReviewIL/KYCReviewDetailsIL') ) :
            (localStorage.getItem("CompanyId") === '4'&& lazy(() => import('../components/Onboarding/KYC/KYCReview/KYCReviewDetails')))
    },
    {
        url: '/kyc-list',
        component: lazy(() => import('../components/Onboarding/KYCAML/KYCListAML')),
    },

    // FinancialTransaction

    // Fund Collection

    {
        url: '/new-fund-collection',
        component: lazy(() => import('../components/FinancialTransaction/FundCollection/NewFundCollection/NewFundCollection')),
    },
    {
        url: '/fund-collection-approval-list',
        component: lazy(() => import('../components/FinancialTransaction/FundCollection/FundCollectionApproval/FundCollectionApprovalList')),
    },
    {
        url: '/fund-collection-approval-details',
        component: lazy(() => import('../components/FinancialTransaction/FundCollection/FundCollectionApproval/FundCollectionApprovalDetails')),
    },
    {
        url: '/fund-collection-list',
        component: lazy(() => import('../components/FinancialTransaction/FundCollection/FundCollectionList/FundCollectionList')),
    },
    {
        url: '/deposit-to-bank-list',
        component: lazy(() => import('../components/FinancialTransaction/FundCollection/DepositToBank/DepositToBankList')),
    },
    {
        url: '/clear-deposit-list',
        component: lazy(() => import('../components/FinancialTransaction/FundCollection/ClearDeposit/ClearDepositList')),
    },
    {
        url: '/dishonor-deposit-list',
        component: lazy(() => import('../components/FinancialTransaction/FundCollection/DishonorDeposit/DishonorDepositList')),
    },
    {
        url: '/dishonor-deposit-resubmit-list',
        component: lazy(() => import('../components/FinancialTransaction/FundCollection/DishonorDepositResubmit/DishonorDepositResubmit')),
    },
    {
        url: '/collection-cancel-list',
        component: lazy(() => import('../components/FinancialTransaction/FundCollection/CollectionCancel/CollectionCancelList')),
    },
    {
        url: '/collection-cancel-approval-list',
        component: lazy(() => import('../components/FinancialTransaction/FundCollection/CollectionCancelApproval/CollectionCancelApprovalList')),
    },
    {
        url: '/bank-statement-upload',
        component: lazy(() => import('../components/FinancialTransaction/FundCollection/BankStatementUpload/BankStatementUpload')),
    },
    {
        url: '/installment-collection-marking',
        component: lazy(() => import('../components/FinancialTransaction/FundCollection/InstallmentCollectionMarking/InstallmentCollectionMarking')),
    },
    {
        url: '/schedule-tagging-approval-list',
        component: lazy(() => import('../components/FinancialTransaction/FundCollection/ScheduleTaggingApproval/ScheduleTaggingApproval')),
    },
    {
        url: '/generate-ddi-file',
        component: lazy(() => import('../components/FinancialTransaction/FundCollection/GenerateDDIFile/GenerateDDIFile')),
    },
    {
        url: '/upload-ddi-file',
        component: lazy(() => import('../components/FinancialTransaction/FundCollection/UploadDDIFile/UploadDDIFile')),
    },
    {
        url: '/installment-collection-approval-list',
        component: lazy(() => import('../components/FinancialTransaction/FundCollection/DDIFileApproval/DDIFileApproval')),
    },
    {
        url: '/ddi-file-list',
        component: lazy(() => import('../components/FinancialTransaction/FundCollection/DDIFileList/DDIFileList')),
    },
    {
        url: '/installment-for-2nd-ddi-pulling',
        component: lazy(() => import('../components/FinancialTransaction/FundCollection/InstallmentFor2ndDDIPulling/InstallmentFor2ndDDIPulling')),
    },


    // Fund Withdrawal
    {
        url: '/new-fund-withdrawal',
        component: lazy(() => import('../components/FinancialTransaction/FundWithdrawal/NewFundWithdrawal/NewFundWithdrawal')),
    },
    {
        url: '/fund-withdrawal-list',
        component: lazy(() => import('../components/FinancialTransaction/FundWithdrawal/FundWithdrawalList/FundWithdrawalList')),
    },
    {
        url: '/fund-withdrawal-approval-list',
        component: lazy(() => import('../components/FinancialTransaction/FundWithdrawal/FundWithdrawalApproval/FundWithdrawalApprovalList')),
    },
    {
        url: '/unauthorized-fund-withdrawal-details',
        component: lazy(() => import('../components/FinancialTransaction/FundWithdrawal/FundWithdrawalApproval/FundWithdrawalApprovalDetails')),
    },
    {
        url: '/prepare-withdrawal-list',
        component: lazy(() => import('../components/FinancialTransaction/FundWithdrawal/PrepareInstrument/PrepareInstrumentList')),
    },
    {
        url: '/prepare-withdrawal',
        component: lazy(() => import('../components/FinancialTransaction/FundWithdrawal/PrepareInstrument/PrepareInstrument')),
    },
    {
        url: '/load-cheque-leaf',
        component: lazy(() => import('../components/FinancialTransaction/FundWithdrawal/LoadChequeLeaf/LoadChequeLeaf')),
    },
    {
        url: '/release-loaded-cheque-leaf',
        component: lazy(() => import('../components/FinancialTransaction/FundWithdrawal/ReleaseLoadedChqLeaf/ReleaseLoadedChqLeaf')),
    },
    {
        url: '/validate-print-cheque',
        component: lazy(() => import('../components/FinancialTransaction/FundWithdrawal/ValidatePrintChq/ValidatePrintChqList')),
    },
    {
        url: '/generate-online-transfer',
        component: lazy(() => import('../components/FinancialTransaction/FundWithdrawal/GenerateOnlineTransfer/GenerateOnlineTransfer')),
    },
    {
        url: '/void-payment-instrument',
        component: lazy(() => import('../components/FinancialTransaction/FundWithdrawal/VoidPaymentInstrument/VoidPaymentInstrument')),
    },
    {
        url: '/void-payment-instrument-bulk',
        component: lazy(() => import('../components/FinancialTransaction/FundWithdrawal/VoidPaymentInstBulk/NewVoidPaymentInstBulk')),
    },
    {
        url: '/void-payment-approve',
        component: lazy(() => import('../components/FinancialTransaction/FundWithdrawal/VoidPaymentInstrumentApproval/VoidPaymentApprovalList')),
    },
    {
        url: '/approve-void-payment-bulk',
        component: lazy(() => import('../components/FinancialTransaction/FundWithdrawal/VoidPaymentBulkApproval/VoidPaymentBulkApprovalList')),
    },
    {
        url: '/post-online-transfer',
        component: lazy(() => import('../components/FinancialTransaction/FundWithdrawal/PostOnlineTransfer/PostOnlineTransfer')),
    },
    {
        url: '/cheque-clear',
        component: lazy(() => import('../components/FinancialTransaction/FundWithdrawal/ChequeClear/ChequeClear')),
    },

    // Equity Participation
    {
        url: '/company-equity-incorporation',
        component: lazy(() => import('../components/FinancialTransaction/EquityParticipation/EquityIncorporation/EquityIncorporation')),
    },
    {
        url: '/company-equity-incorporation-approval-list',
        component: lazy(() => import('../components/FinancialTransaction/EquityParticipation/EquityIncorporationApproval/EquityIncorporationApprovalList')),
    },
    {
        url: '/company-equity-deduction',
        component: lazy(() => import('../components/FinancialTransaction/EquityParticipation/EquityDeduction/EquityDeduction')),
    },
    {
        url: '/company-equity-deduction-approval-list',
        component: lazy(() => import('../components/FinancialTransaction/EquityParticipation/EquityDeductionApproval/EquityDeductionApprovalList')),
    },
    //Insurance Premium
    {
        url: '/insurance-premium-collection-generate-ddi-file',
        component: lazy(() => import('../components/FinancialTransaction/InsurancePremium/InsurancePremiumGenerateDDIFile/InsurancePremiumGenerateDDIFile')),
    },
    {
        url: '/insurance-premium-collection-upload-ddi-file',
        component: lazy(() => import('../components/FinancialTransaction/InsurancePremium/InsurancePremiumUploadDDIFile/InsurancePremiumUploadDDIFile')),
    },
    {
        url: '/insurance-ddi-file-approval-list',
        component: lazy(() => import('../components/FinancialTransaction/InsurancePremium/DDIFileApproval/DDIFileApproval')),
    },
    {
        url: '/insurance-ddi-file-list',
        component: lazy(() => import('../components/FinancialTransaction/InsurancePremium/InsuredInvestorList/InsuredInvestorList')),
    },
    //Operations
    {
        url: '/new-ipo-declare',
        component: lazy(() => import('../components/Operations/IPO/NewIpoSetup/NewIpo')),
    },
    {
        url: '/ipo-instrument-list',
        component: lazy(() => import('../components/Operations/IPO/IpoInstrumentList/IpoInstrumentList')),
    },
    {
        url: '/ipo-declaration-approval-list',
        component: lazy(() => import('../components/Operations/IPO/IPODeclarationApprovalList/IPODeclarationApprovalList')),
    },
    {
        url: '/ipo-declaration-approval-list-details',
        component: lazy(() => import('../components/Operations/IPO/IPODeclarationApprovalList/IpoDeclarationApprovalListDetails')),
    },
    {
        url: '/new-ipo-application-details',
        component: lazy(() => import('../components/Operations/IPO/IpoApplicationApprovalList/IpoApplicationApprovalListDetails')),
    },
    {
        url: '/new-ipo-application',
        component: lazy(() => import('../components/Operations/IPO/NewIpoApplication/NewIpoApplication')),
    },
    {
        url: '/new-ipo-application-bulk',
        component: lazy(() => import('../components/Operations/IPO/NewIpoApplicationBulk/NewIpoApplicationBulk')),
    },
    {
        url: '/ipo-application-approval-list',
        component: lazy(() => import('../components/Operations/IPO/IpoApplicationApprovalList/IpoApplicationApprovalList')),
    },
    {
        url: '/ipo-application-all-list',
        component: lazy(() => import('../components/Operations/IPO/IpoApplicationList/IpoApplicationList')),
    },
    {
        url: '/ipo-application-approval-list-details',
        component: lazy(() => import('../components/Operations/IPO/IpoApplicationApprovalList/IpoApplicationApprovalListDetails')),
    },
    {
        url: '/ipo-application-reversal-list',
        component: lazy(() => import('../components/Operations/IPO/IpoApplicationReversalList/IpoApplicationReversalList')),
    },
    {
        url: '/ipo-application-reversal-approval-list',
        component: lazy(() => import('../components/Operations/IPO/IpoAppReversalApprovalList/IpoAppReversalApprovalList')),
    },

    {
        url: '/ipo-lottery-result-upload',
        component: lazy(() => import('../components/Operations/IPO/IpoLotteryResultUpload/IpoLotteryResultUpload')),
    },
    {
        url: '/ipo-refund-approval-list',
        component: lazy(() => import('../components/Operations/IPO/IpoRefundApprovalList/IpoRefundApprovalList')),
    },

    {
        url: '/instrument-collection-list',
        component: lazy(() => import('../components/Operations/IPO/IpoInstrumentCollectionList/IpoInstrumentCollectionList')),
    },
    {
        url: '/collection-approval-list',
        component: lazy(() => import('../components/Operations/IPO/IpoCollectionApprovalList/IpoCollectionApprovalList')),
    },
    {
        url: '/fund-transfer-to-issuer-list',
        component: lazy(() => import('../components/Operations/IPO/FundTransferToIssuerList/FundTransferToIssuerList')),
    },



    //Done
    {
        url: '/new-book-building-app',
        component: lazy(() => import('../components/Operations/IPOBookBuilding/NewBookBuilding/NewBookBuilding')),
    },
    {
        url: '/new-book-building-subscription-app',
        component: lazy(() => import('../components/Operations/IPOBookBuilding/NewBookBuildingSubscription/NewBookBuildingSubscription')),
    },
    {
        url: '/book-building-approval-list',
        component: lazy(() => import('../components/Operations/IPOBookBuilding/BookBuildingApprovalList/BookBuildingApprovalList')),
    },
    {
        url: '/book-building-subscription-list',
        component: lazy(() => import('../components/Operations/IPOBookBuilding/BookBuildingSubscriptionList/BookBuildingSubscriptionList')),
    },

    {
        url: '/book-building-subscription-reversal-approval-list',
        component: lazy(() => import('../components/Operations/IPOBookBuilding/BookBuildingSubscriptionReversalApprovalList/BookBuildingSubscriptionReversalApprovalList')),
    },
    {
        url: '/book-building-allocation',
        component: lazy(() => import('../components/Operations/IPOBookBuilding/BookBuildingAllocationSubscriptionList/BookBuildingAllocationSubscriptionList')),
    },

    {
        url: '/new-book-building-allocation',
        component: lazy(() => import('../components/Operations/IPOBookBuilding/NewIpoBookBuildingAllocation/NewIpoBookBuildingAllocation')),
    },
    {
        url: '/book-building-allocation-list',
        component: lazy(() => import('../components/Operations/IPOBookBuilding/BookBuildingAllocationApprovalList/BookBuildingAllocationApprovalList')),
    },
    {
        url: '/refund-approval-list-il',
        component: lazy(() => import('../components/Operations/IPOBookBuilding/BookBuildingRefundApprovalList/BookBuildingRefundApprovalList')),
    },
    {
        url: '/book-building-collection-list',
        component: lazy(() => import('../components/Operations/IPOBookBuilding/BookBuildingCollectionList/BookBuildingCollectionList')),
    },
    {
        url: '/book-building-collection-approval-list',
        component: lazy(() => import('../components/Operations/IPOBookBuilding/BookBuildingCollectionApprovalList/BookBuildingCollectionApprovalList')),
    },
    //Pre-IPO
    {
        url: '/pre-ipo-application',
        component: lazy(() => import('../components/Operations/PreIpo/NewPreIpoApplication/NewPreIpoApplication')),
    },
    {
        url: '/pre-ipo-application-aml',
        component: lazy(() => import('../components/Operations/PreIpo/NewPreIpoApplicationAml/NewPreIpoApplicationAml')),
    },
    {
        url: '/pre-ipo-approval-list',
        component: lazy(() => import('../components/Operations/PreIpo/PreIpoApprovalList/PreIpoApprovalList')),
    },
    {
        url: '/list-for-reversal-subscription-pre-ipo',
        component: lazy(() => import('../components/Operations/PreIpo/PreIpoReversalList/PreIpoReversalList')),
    },
    {
        url: '/pre-ipo-subscription-reversal-approval-list',
        component: lazy(() => import('../components/Operations/PreIpo/PreIpoReversalApprovalList/PreIpoReversalApprovalList')),
    },
    {
        url: '/pre-ipo-allocation',
        component: lazy(() => import('../components/Operations/PreIpo/PreIpoAllocationList/PreIpoAllocationList')),
    },
    {
        url: '/new-pre-ipo-allocation',
        component: lazy(() => import('../components/Operations/PreIpo/NewIpoPreAllocation/NewIpoPreAllocation')),
    },
    {
        url: '/new-pre-ipo-allocation-aml',
        component: lazy(() => import('../components/Operations/PreIpo/NewIpoPreAllocationAml/NewIpoPreAllocationAml')),
    },
    {
        url: '/pre-ipo-allocation-list',
        component: lazy(() => import('../components/Operations/PreIpo/PreIpoAllocationApprovalList/PreIpoAllocationApprovalList')),
    },
    {
        url: '/pre-ipo-allocation-approval-list-aml-maker',
        component: lazy(() => import('../components/Operations/PreIpo/PreIpoAllocationApprovalForMakerList/PreIpoAllocationApprovalForMakerList')),
    },
    {
        url: '/pre-ipo-collection-list-il',
        component: lazy(() => import('../components/Operations/PreIpo/PreIpoCollectionListIL/PreIpoCollectionListIL')),
    },
    {
        url: '/pre-ipo-collection-approval-list-il',
        component: lazy(() => import('../components/Operations/PreIpo/PreIpoCollectionApprovalListIL/PreIpoCollectionApprovalListIL')),
    },
    {
        url: '/pre-ipo-collection-list-aml',
        component: lazy(() => import('../components/Operations/PreIpo/PreIpoCollectionListAml/PreIpoCollectionListAml')),
    },
    {
        url: '/pre-ipo-collection-approval-list-aml',
        component: lazy(() => import('../components/Operations/PreIpo/PreIpoCollectionApprovalListAml/PreIpoCollectionApprovalListAml')),
    },







    {
        url: '/new-instrument-setting',
        component: lazy(() => import('../components/Operations/CorporateActionRight/NewInstrumentSetting/NewInstrumentSetting')),
    },
    {
        url: '/corporate-instrument-list',
        component: lazy(() => import('../components/Operations/CorporateActionRight/CorporateInstrumentList/CorporateInstrumentList')),
    },
    {
        url: '/corporate-instrument-declaration-approval',
        component: lazy(() => import('../components/Operations/CorporateActionRight/DeclarationApprovalList/DeclarationApprovalList')),
    },
    {
        url: '/declaration-approval-list-details',
        component: lazy(() => import('../components/Operations/CorporateActionRight/DeclarationApprovalList/DeclarationApprovalListDetails')),
    },
    {
        url: '/new-rights-application',
        component: lazy(() => import('../components/Operations/CorporateActionRight/NewRightsApplication/NewRightsApplication')),
    },
    {
        url: '/rights-application-list',
        component: lazy(() => import('../components/Operations/CorporateActionRight/RightsApplicationList/RightsApplicationList')),
    },
    {
        url: '/corporate-application-all-list',
        component: lazy(() => import('../components/Operations/CorporateActionRight/RightsApplicationAllList/RightsApplicationAllList')),
    },
    {
        url: '/new-rights-application-details',
        component: lazy(() => import('../components/Operations/CorporateActionRight/RightsApplicationList/RightsApplicationApprovalDetails')),
    },
    {
        url: '/new-rights-application-details-aml',
        component: lazy(() => import('../components/Operations/CorporateActionRight/RightsApplicationList/RightsApplicationApprovalDetailsAml')),
    },
    {
        url: '/rights-application-reversal-list',
        component: lazy(() => import('../components/Operations/CorporateActionRight/CorporateRightReversalList/CorporateRightReversalList')),
    },
    {
        url: '/rights-application-reversal-approval-list',
        component: lazy(() => import('../components/Operations/CorporateActionRight/CorporateRightReversalApprovalList/CorporateRightReversalApprovalList')),
    },
    {
        url: '/new-rights-application-bulk',
        component: lazy(() => import('../components/Operations/CorporateActionRight/NewRightsApplicationBulk/NewRightsApplicationBulk')),
    },
    {
        url: '/rights-instrument-collection-list',
        component: lazy(() => import('../components/Operations/CorporateActionRight/RightsInstrumentCollectionList/RightsInstrumentCollectionList')),
    },
    {
        url: '/rights-collection-approval-list',
        component: lazy(() => import('../components/Operations/CorporateActionRight/RightsCollectionApprovalList/RightsCollectionApprovalList')),
    },
    {
        url: '/import-cdbl-transaction-files',
        component: lazy(() => import('../components/CDBLOperations/CDBLFiles/ImportCDBLTransactionFiles/ImportCDBLTransactionFiles')),
    },
    {
        url: '/import-cdbl-transaction-files-il',
        component: lazy(() => import('../components/CDBLOperations/CDBLFiles/ImportCDBLTransactionFilesIL/ImportCDBLTransactionFilesIL')),
    },
    {
        url: '/gsec-instrument-allotment',
        component: lazy(() => import('../components/Operations/OffMarketInstrumentTrading/GsecInstrumentAllotment/NewGsecInstrumentAllotment')),
    },
    {
        url: '/gsec-instrument-allotment-list',
        component: lazy(() => import('../components/Operations/OffMarketInstrumentTrading/GsecInstrumentAllotment/GsecInstrumentAllotmentList')),
    },
    {
        url: '/gsec-allotment-approval-list',
        component: lazy(() => import('../components/Operations/OffMarketInstrumentTrading/GsecAllotmentApproval/GsecAllotmentApprovalList')),
    },
    {
        url: '/unauthorized-gsec-allotment-details',
        component: lazy(() => import('../components/Operations/OffMarketInstrumentTrading/GsecAllotmentApproval/GsecAllotmentApprovalDetails')),
    },
    {
        url: '/unauthorized-gsec-allotment-details-bill',
        component: lazy(() => import('../components/Operations/TreasuryBill/GsecAllotmentApproval/GsecAllotmentApprovalDetails')),
    },
    {
        url: '/record-date-declaration',
        component: lazy(() => import('../components/Operations/OffMarketInstrumentTrading/RecordDateDeclaration/RecordDateDeclaration')),
    },
    {
        url: '/new-coupon-collection',
        component: lazy(() => import('../components/Operations/OffMarketInstrumentTrading/CouponCollection/NewCouponCollection')),
    },
    {
        url: '/coupon-collection-list',
        component: lazy(() => import('../components/Operations/OffMarketInstrumentTrading/CouponCollection/CouponCollectionList')),
    },
    {
        url: '/coupon-collection-approval-list',
        component: lazy(() => import('../components/Operations/OffMarketInstrumentTrading/CouponCollectionApproval/CouponCollectionApprovalList')),
    },
    {
        url: '/coupon-collection-reversal',
        component: lazy(() => import('../components/Operations/OffMarketInstrumentTrading/CouponCollectionReversal/CouponCollectionReversal')),
    },
    {
        url: '/coupon-collection-reversal-approval-list',
        component: lazy(() => import('../components/Operations/OffMarketInstrumentTrading/CouponCollectionReversalApproval/CouponCollectionReversalApprovalList')),
    },
    {
        url: '/off-market-instrument-sale',
        component: lazy(() => import('../components/Operations/OffMarketInstrumentTrading/OffMarketInstrumentSale/OffMarketInstrumentSale')),
    },
    {
        url: '/off-market-instrument-sale-list',
        component: lazy(() => import('../components/Operations/OffMarketInstrumentTrading/OffMarketInstrumentSale/OffMarketInstrumentSaleList')),
    },
    {
        url: '/off-market-instrument-sale-approval-list',
        component: lazy(() => import('../components/Operations/OffMarketInstrumentTrading/OffMarketInstrumentSaleApproval/OffMarketInstrumentSaleApprovalList')),
    },
    {
        url: '/instrument-redemption',
        component: lazy(() => import('../components/Operations/OffMarketInstrumentTrading/InstrumentRedemption/InstrumentRedemption')),
    },
    {
        url: '/instrument-redemption-list',
        component: lazy(() => localStorage.getItem("CompanyId") === "2" ? import('../components/Operations/OffMarketInstrumentTrading/InstrumentRedemptionList/InstrumentRedemptionListAML') : import('../components/Operations/OffMarketInstrumentTrading/InstrumentRedemptionList/InstrumentRedemptionList')),
    },
    {
        url: '/instrument-redemption-approval-list',
        component: lazy(() => localStorage.getItem("CompanyId") === "2" ? import('../components/Operations/OffMarketInstrumentTrading/InstrumentRedemptionApproval/InstrumentRedemptionApprovalListAML') : import('../components/Operations/OffMarketInstrumentTrading/InstrumentRedemptionApproval/InstrumentRedemptionApprovalList')),
    },
    {
        url: '/gsec-auction-declaration',
        component: lazy(() => import('../components/Operations/OffMarketInstrumentTrading/GSecAuctionDeclarationSL/NewGsecAuctionDeclaration')),
    },
    {
        url: '/auction-participant-application',
        component: lazy(() => import('../components/Operations/OffMarketInstrumentTrading/AuctionApplicationParticipant/NewAuctionApplicationParticipant')),
    },
    {
        url: '/auction-application-list',
        component: lazy(() => import('../components/Operations/OffMarketInstrumentTrading/AuctionApplicationParticipant/AuctionApplicationParticipantList')),
    },
    {
        url: '/auction-application-approval-list',
        component: lazy(() => import('../components/Operations/OffMarketInstrumentTrading/AuctionParticipantApproval/AuctionApplicationParticipantApprovalList')),
    },
    {
        url: '/auction-result-setup',
        component: lazy(() => import('../components/Operations/OffMarketInstrumentTrading/AuctionResultSetup/NewAuctionResult')),
    },
    {
        url: '/refund-allotment',
        component: lazy(() => import('../components/Operations/OffMarketInstrumentTrading/RefundAllotment/NewRefundAllotment')),
    },
    {
        url: '/refund-allotment-approval-list',
        component: lazy(() => import('../components/Operations/OffMarketInstrumentTrading/RefundAllotment/RefundAllotmentApprovalList')),
    },
    {
        url: '/instrument-partial-redemption',
        component: lazy(() => import('../components/Operations/TreasuryBill/InstrumentPartialRedemption/InstrumentPartialRedemption')),
    },
    {
        url: '/instrument-partial-redemption-list',
        component: lazy(() => import('../components/Operations/TreasuryBill/InstrumentPartialRedemption/InstrumentPartialRedemptionList')),
    },
    {
        url: '/instrument-partial-redemption-approval',
        component: lazy(() => import('../components/Operations/TreasuryBill/InstrumentPartialRedemptionApproval/InstrumentPartialRedemptionApprovalList')),
    },
    {
        url: '/gsec-instrument-allotment-bill',
        component: lazy(() => import('../components/Operations/TreasuryBill/GsecInstrumentAllotment/NewGsecInstrumentAllotment')),
    },
    {
        url: '/gsec-instrument-allotment-list-bill',
        component: lazy(() => import('../components/Operations/TreasuryBill/GsecInstrumentAllotment/GsecInstrumentAllotmentList')),
    },
    {
        url: '/gsec-allotment-approval-list-bill',
        component: lazy(() => import('../components/Operations/TreasuryBill/GsecAllotmentApproval/GsecAllotmentApprovalList')),
    },
    {
        url: '/off-market-instrument-sale-bill',
        component: lazy(() => import('../components/Operations/TreasuryBill/OffMarketInstrumentSale/OffMarketInstrumentSale')),
    },
    {
        url: '/off-market-instrument-sale-approval-bill',
        component: lazy(() => import('../components/Operations/TreasuryBill/OffMarketInstrumentSaleApproval/OffMarketInstrumentSaleApprovalList')),
    },
    {
        url: '/instrument-redemption-bill',
        component: lazy(() => import('../components/Operations/TreasuryBill/InstrumentRedemption/InstrumentRedemption')),
    },
    {
        url: '/instrument-redemption-list-bill',
        component: lazy(() => import('../components/Operations/TreasuryBill/InstrumentRedemption/InstrumentRedemptionList')),
    },
    {
        url: '/instrument-redemption-approval-bill',
        component: lazy(() => import('../components/Operations/TreasuryBill/InstrumentRedemptionApproval/InstrumentRedemptionApprovalList')),
    },
    {
        url: '/interest-payout-declaration',
        component: lazy(() => import('../components/Operations/PerpetualBond/InterestPayoutDeclaration/InterestPayoutDeclaration')),
    },
    {
        url: '/interest-payout-declaration-approval-list',
        component: lazy(() => import('../components/Operations/PerpetualBond/InterestPayoutDeclarationApproval/InterestPayoutDeclarationApprovalList')),
    },
    {
        url: '/interest-claim',
        component: lazy(() => import('../components/Operations/PerpetualBond/InterestClaim/NewInterestClaim')),
    },
    {
        url: '/interest-claim-list',
        component: lazy(() => import('../components/Operations/PerpetualBond/InterestClaim/InterestClaimList')),
    },
    {
        url: '/new-interest-collection',
        component: lazy(() => import('../components/Operations/PerpetualBond/InterestCollection/NewInterestCollection')),
    },
    {
        url: '/interest-collection-approval-list',
        component: lazy(() => import('../components/Operations/PerpetualBond/InterestCollectionApproval/InterestCollectionApprovalList')),
    },
    {
        url: '/interest-collection-reversal',
        component: lazy(() => import('../components/Operations/PerpetualBond/InterestCollectionReversal/InterestCollectionReversal')),
    },
    {
        url: '/interest-collection-reversal-approval-list',
        component: lazy(() => import('../components/Operations/PerpetualBond/InterestCollectionReversalApproval/InterestCollectionReversalApprovalList')),
    },
    {
        url: '/deposit-account-opening',
        component: lazy(() => import('../components/Operations/FDR/DepositAccountOpening/DepositAccountOpening')),
    },
    {
        url: '/deposit-account-opening-list',
        component: lazy(() => import('../components/Operations/FDR/DepositAccountOpeningList/DepositAccountOpeningList')),
    },
    {
        url: '/deposit-account-opening-approval-list',
        component: lazy(() => import('../components/Operations/FDR/DepositAccountOpeningApproval/DepositAccountOpeningApprovalList')),
    },
    {
        url: '/deposit-interest-collection',
        component: lazy(() => import('../components/Operations/FDR/DepositInterestCollection/NewDepositInterestCollection')),
    },
    {
        url: '/deposit-interest-collection-list',
        component: lazy(() => import('../components/Operations/FDR/DepositInterestCollection/DepositInterestCollectionList')),
    },
    {
        url: '/deposit-interest-collection-approval-list',
        component: lazy(() => import('../components/Operations/FDR/DepositInterestCollectionApproval/DepositInterestCollectionApprovalList')),
    },
    {
        url: '/deposit-interest-collection-reversal',
        component: lazy(() => import('../components/Operations/FDR/DepositInterestCollectionReversal/DepositInterestCollectionReversal')),
    },
    {
        url: '/deposit-interest-collection-reversal-approval-list',
        component: lazy(() => import('../components/Operations/FDR/DepositInterestCollectionReversalApproval/DepositInterestCollectionReversalApprovalList')),
    },
    {
        url: '/deposit-account-renewal',
        component: lazy(() => import('../components/Operations/FDR/DepositAccountRenewal/NewDepositAccountRenewal')),
    },
    {
        url: '/deposit-account-renewal-list',
        component: lazy(() => import('../components/Operations/FDR/DepositAccountRenewal/DepositAccountRenewalList')),
    },
    {
        url: '/deposit-account-renewal-approval',
        component: lazy(() => import('../components/Operations/FDR/DepositAccountRenewalApproval/DepositAccountRenewalApprovalList')),
    },
    {
        url: '/deposit-account-encashment',
        component: lazy(() => import('../components/Operations/FDR/DepositAccountEncashment/NewDepositAccountEncashment')),
    },
    {
        url: '/deposit-account-encashment-list',
        component: lazy(() => import('../components/Operations/FDR/DepositAccountEncashment/DepositAccountEncashmentList')),
    },
    {
        url: '/deposit-account-encashment-approval-list',
        component: lazy(() => import('../components/Operations/FDR/DepositAccountEncashmentApproval/DepositAccountEncashmentApprovalList')),
    },
    {
        url: '/new-stock-split',
        component: lazy(() => import('../components/Operations/StockSplit/NewStockSplit')),
    },
    {
        url: '/stock-split-approval-list',
        component: lazy(() => import('../components/Operations/StockSplit/StockSplitApprovalList')),
    },
    {
        url: '/stock-split-approval-details',
        component: lazy(() => import('../components/Operations/StockSplit/StockSplitApprovalDetails')),
    },
    {
        url: '/new-audit-inspection',
        component: lazy(() => import('../components/Operations/AuditInspection/NewAuditInspection/NewAuditInspection')),
    },
    {
        url: '/audit-inspection-list',
        component: lazy(() => import('../components/Operations/AuditInspection/AuditInspectionList')),
    },
    {
        url: '/new-regulatory-query',
        component: lazy(() => import('../components/Operations/RegulatoryQuery/NewRegulatoryQuery')),
    },
    {
        url: '/regulatory-query-list',
        component: lazy(() => import('../components/Operations/RegulatoryQuery/RegulatoryQueryList')),
    },
    {
        url: '/internal-fund-transfer-request',
        component: lazy(() => import('../components/Operations/InternalFundTransfer/InternalFundTransferRequest')),
    },
    {
        url: '/internal-fund-transfer-request-list',
        component: lazy(() => import('../components/Operations/InternalFundTransfer/InternalFundTransferApprovalList')),
    },
    {
        url: '/ipo-file-approval',
        component: lazy(() => import('../components/CDBLOperations/CDBLFiles/IpoFileApproval/IpoFileApproval')),
    },
    {
        url: '/rights-file-approval',
        component: lazy(() => import('../components/CDBLOperations/CDBLFiles/RightFileApproval/RightFileApproval')),
    },
    {
        url: '/chart-of-accounts',
        component: lazy(() => import('../components/Accounting/ChartOfAccountsEntry/ChartOfAccountsEntry')),
    },
    {
        url: '/chart-of-accounts-approval-list',
        component: lazy(() => import('../components/Accounting/ChartOfAccountsApprovalList/ChartOfAccountsApprovalList')),
    },
    {
        url: '/ledger-head-input',
        component: lazy(() => import('../components/Accounting/LedgerHeadEntry/LedgerHeadEntry')),
    },
    {
        url: '/ledger-head-approval-list',
        component: lazy(() => import('../components/Accounting/LedgerHeadApproval/LedgerHeadApprovalList')),
    },
    {
        url: '/change-voucher-date',
        component: lazy(() => import('../components/Accounting/ChangeVoucherDate/ChangeVoucherDate')),
    },
    {
        url: '/issue-general-voucher',
        component: lazy(() => localStorage.getItem("CompanyId") === "2" ? import('../components/Accounting/Voucher/IssueGeneralVoucherAML/IssueGeneralVoucherAML') : import('../components/Accounting/Voucher/IssueGeneralVoucher/IssueGeneralVoucher')),
    },
    {
        url: '/voucher-approval-list',
        component: lazy(() => import('../components/Accounting/Voucher/VoucherApproval/VoucherApprovalList')),
    },
    {
        url: '/voucher-approval-details',
        component: lazy(() => import('../components/Accounting/Voucher/VoucherApproval/VoucherApprovalDetails')),
    },
    {
        url: '/voucher-list',
        component: lazy(() => import('../components/Accounting/Voucher/VoucherList/VoucherList')),
    },
    {
        url: '/voucher-module',
        component: lazy(() => import('../components/Accounting/VoucherModule/VoucherModule')),
    },
    {
        url: '/create-account-for-admin',
        component: lazy(() => import('../components/Accounting/AdminAccounts/CreateAccounts/CreateAccounts')),
    },
    {
        url: '/admin-accounts-list',
        component: lazy(() => import('../components/Accounting/AdminAccounts/AccountsList')),
    },
    {
        url: '/admin-accounts-approval-list',
        component: lazy(() => import('../components/Accounting/AdminAccounts/AccountApproval/AccountsApprovalList')),
    },
    {
        url: '/admin-accounts-approval-details',
        component: lazy(() => import('../components/Accounting/AdminAccounts/AccountApproval/AccountApprovalDetails')),
    },
    {
        url: '/exchange-settlement-spot',
        component: lazy(() => import('../components/Accounting/TradeSettlement/ExchangeSettlement/Spot/ExchangeSettlementSpot')),
    },
    {
        url: '/exchange-settlement-regular',
        component: lazy(() => import('../components/Accounting/TradeSettlement/ExchangeSettlement/Regular/ExchangeSettlementRegular')),
    },
    {
        url: '/create-settlement-account',
        component: lazy(() => import('../components/Onboarding/Maintenance/CreateSettlementAccount/CreateSettlementAccount')),
    },
    {
        url: '/settlement-account-list',
        component: lazy(() => import('../components/Onboarding/Maintenance/SettlmentAccountList/SettlementAccountList')),
    },
    {
        url: '/merchant-bank-amc-settlement',
        component: lazy(() => import('../components/Accounting/TradeSettlement/MerchantBankAmcSettlement/MerchantBankAmcSettlement')),
    },
    {
        url: '/broker-settlement',
        component: lazy(() => import('../components/Accounting/TradeSettlement/BrokerSettlement/BrokerSettlement')),
    },
    {
        url: '/merchant-bank-amc-settlement-details',
        component: lazy(() => import('../components/Accounting/TradeSettlement/MerchantBankAmcSettlement/MerchantBankAmcSettlementDetails')),
    },
    {
        url: '/broker-settlement-details',
        component: lazy(() => import('../components/Accounting/TradeSettlement/BrokerSettlement/BrokerSettlementDetails')),
    },
    {
        url: '/foreign-trade-commission-sharing',
        component: lazy(() => import('../components/Accounting/CommissionSharing/ForeignTradeCommissionSharing/ForeignTradeCommissionSharing')),
    },
    {
        url: '/payable-commission',
        component: lazy(() => import('../components/Accounting/CommissionSharing/PayableCommission/PayableCommission')),
    },
    {
        url: '/new-dividend-declaration',
        component: lazy(() => import('../components/CDBLOperations/CorporateActionDividend/NewDividend/NewDividend')),
    },
    {
        url: '/dividend-declaration-approval-list',
        component: lazy(() => import('../components/CDBLOperations/CorporateActionDividend/DividendApprovalList/DividendApprovalList')),
    },
    {
        url: '/dividend-declaration-list',
        component: lazy(() => import('../components/CDBLOperations/CorporateActionDividend/DeclarationList/DeclarationList')),
    },
    {
        url: '/dividend-claim-list',
        component: lazy(() => import('../components/CDBLOperations/CorporateActionDividend/StockDividendClaimList/StockDividendClaimList')),
    },
    {
        url: '/claim-approval-list',
        component: lazy(() => import('../components/CDBLOperations/CorporateActionDividend/StockDividendClaimApprovalList/StockDividendClaimApprovalList')),
    },
    {
        url: '/cash-dividend-claim-list',
        component: lazy(() => import('../components/CDBLOperations/CorporateActionDividend/CashDividendClaimList/CashDividendClaimList')),
    },
    {
        url: '/cash-dividend-claim-approval-list',
        component: lazy(() => import('../components/CDBLOperations/CorporateActionDividend/CashDividendClaimApprovalList/CashDividendClaimApprovalList')),
    },
    {
        url: '/bonus-fraction-claim-list',
        component: lazy(() => import('../components/CDBLOperations/CorporateActionDividend/BonusFractionClaimList/BonusFractionClaimList')),
    },
    {
        url: '/bonus-fraction-claim-approval-list',
        component: lazy(() => import('../components/CDBLOperations/CorporateActionDividend/BonusFractionClaimApprovalList/BonusFractionClaimApprovalList')),
    },
    {
        url: '/bonus-fraction-collection-list',
        component: lazy(() => import('../components/CDBLOperations/CorporateActionDividend/BonusFractionCollectionList/BonusFractionCollectionList')),
    },
    {
        url: '/bonus-fraction-collection-reverse-list',
        component: lazy(() => import('../components/CDBLOperations/CorporateActionDividend/BonusFractionCollectionReverseList/BonusFractionCollectionReverseList')),
    },
    {
        url: '/bonus-fraction-collection-list-sl',
        component: lazy(() => import('../components/CDBLOperations/CorporateActionDividend/BonusFractionCollectionListSl/BonusFractionCollectionListSl')),
    },
    {
        url: '/bonus-fraction-collection-approval-list',
        component: lazy(() => import('../components/CDBLOperations/CorporateActionDividend/BonusFractionCollectionApprovalList/BonusFractionCollectionApprovalList')),
    },
    {
        url: '/cash-collection-list',
        component: lazy(() => import('../components/CDBLOperations/CorporateActionDividend/CashCollectionList/CashCollectionList')),
    },
    // {
    //     url: '/cash-collection-list',
    //     component: lazy(() => import('../components/CDBLOperations/CorporateActionDividend/CashCollectionListAml/CashCollectionListAml')),
    // },
    {
        url: '/cash-collection-list-sl',
        component: lazy(() => import('../components/CDBLOperations/CorporateActionDividend/CashCollectionListSl/CashCollectionListSl')),
    },
    {
        url: '/cash-collection-reversal-list',
        component: lazy(() => import('../components/CDBLOperations/CorporateActionDividend/CashCollectionReversalList/CashCollectionReversalList')),
    },
    {
        url: '/cash-collection-approval-list',
        component: lazy(() => import('../components/CDBLOperations/CorporateActionDividend/CashCollectionApprovalList/CashCollectionApprovalList')),
    },
    {
        url: '/transfer-transmission-list',
        component: lazy(() => import('../components/CDBLOperations/CDBLFiles/TransferTransmissionList/TransferTransmissionList')),
    },
    {
        url: '/transfer-transmission-approval-list',
        component: lazy(() => import('../components/CDBLOperations/CDBLFiles/TransferTransmissionApproval/TransferTransmissionApproval')),
    },
    {
        url: '/bonus-collection-list',
        component: lazy(() => import('../components/CDBLOperations/CorporateActionDividend/BonusCollectionList/BonusCollectionList')),
    },
    {
        url: '/bonus-collection-reverse-list',
        component: lazy(() => import('../components/CDBLOperations/CorporateActionDividend/BonusCollectionReverseList/BonusCollectionReverseList')),
    },
    {
        url: '/bonus-collection-approval-list',
        component: lazy(() => import('../components/CDBLOperations/CorporateActionDividend/BonusCollectionApprovalList/BonusCollectionApprovalList')),
    },
    {
        url: '/new-transfer-transmission',
        component: lazy(() => import('../components/CDBLOperations/CDBLFiles/NewTransferTransmission/NewTransferTransmission')),
    },
    {
        url: '/new-demat-instrument',
        component: lazy(() => import('../components/CDBLOperations/Demat/NewDematInstrument/NewDematInstrument')),
    },
    {
        url: '/demat-instrument-list',
        component: lazy(() => import('../components/CDBLOperations/Demat/DematInstrumentList/DematInstrumentList')),
    },
    {
        url: '/demat-instrument-approval-list',
        component: lazy(() => import('../components/CDBLOperations/Demat/DematInstrumentApprovalList/DematInstrumentApprovalList')),
    },
    {
        url: '/new-remat-instrument',
        component: lazy(() => import('../components/CDBLOperations/Remat/NewRematInstrument/NewRematInstrument')),
    },
    {
        url: '/remat-instrument-list',
        component: lazy(() => import('../components/CDBLOperations/Remat/RematInstrumentList/RematInstrumentList')),
    },
    {
        url: '/remat-instrument-approval-list',
        component: lazy(() => import('../components/CDBLOperations/Remat/RematInstrumentApprovalList/RematInstrumentApprovalList')),
    },
    // Instrument Elimination & Lock & Unlock
    {
        url: '/clients-instrument-elimination-list',
        component: lazy(() => import('../components/Settlement/InstrumentElimination/InstrumentEliminationList/InstrumentEliminationList')),
    },
    {
        url: '/clients-instrument-elimination-all-list',
        component: lazy(() => import('../components/Settlement/InstrumentElimination/InstrumentEliminationAllList/InstrumentEliminationAllList')),
    },
    {
        url: '/clients-instrument-elimination-approved-list',
        component: lazy(() => import('../components/Settlement/InstrumentElimination/InstrumentEliminationApprovalList/InstrumentEliminationApprovalList')),
    },
    {
        url: '/instrument-lock-setup',
        component: lazy(() => import('../components/Settlement/InstrumentLock/NewInstrumentLockSetup/NewInstrumentLockSetup')),
    },
    {
        url: '/instrument-lock-approval-list',
        component: lazy(() => import('../components/Settlement/InstrumentLock/InstrumentLockApprovalList/InstrumentLockApprovalList')),
    },
    {
        url: '/instrument-lock-list',
        component: lazy(() => import('../components/Settlement/InstrumentLock/InstrumentLockList/InstrumentLockList')),
    },
    {
        url: '/instrument-unlock-setup',
        component: lazy(() => import('../components/Settlement/InstrumentUnLock/NewInstrumentUnLockSetup/NewInstrumentUnLockSetup')),
    },
    {
        url: '/instrument-unlock-approval-list',
        component: lazy(() => import('../components/Settlement/InstrumentUnLock/InstrumentUnLockApprovalList/InstrumentUnLockApprovalList')),
    },
    {
        url: '/instrument-unlock-list',
        component: lazy(() => import('../components/Settlement/InstrumentUnLock/InstrumentUnLockList/InstrumentUnLockList')),
    },
    {
        url: '/new-instrument-conversation',
        component: lazy(() => import('../components/Settlement/InstrumentConversation/InstrumentConversationDeclaration/NewInstrumentConversation')),
    },
    {
        url: '/instrument-conversation-approval-list',
        component: lazy(() => import('../components/Settlement/InstrumentConversation/ConversationDeclarationApprovalList/InstrumentConversationDeclarationList')),
    },
    {
        url: '/instrument-conversion',
        component: lazy(() => import('../components/Settlement/InstrumentConversation/InstrumentConversion/InstrumentConversion')),
    },
    {
        url: '/instrument-conversion-list',
        component: lazy(() => import('../components/Settlement/InstrumentConversation/InstrumentConversionList/InstrumentConversionAllList')),
    },
    {
        url: '/instrument-conversion-approval-list',
        component: lazy(() => import('../components/Settlement/InstrumentConversation/InstrumentConversionApprovalList/InstrumentConversionApprovalList')),
    },
    {
        url: '/new-physical-instrument-collection',
        component: lazy(() => import('../components/Settlement/InstrumentCollection/NewPhyInstrumentCollection/NewPhyInstrumentCollection')),
    },
    {
        url: '/physical-instrument-collection-list',
        component: lazy(() => import('../components/Settlement/InstrumentCollection/PhyInstrumentCollectionList/PhyInstrumentCollectionList')),
    },
    {
        url: '/physical-instrument-collection-approval-list',
        component: lazy(() => import('../components/Settlement/InstrumentCollection/PhyInstrumentCollectionApprovalList/PhyInstrumentCollectionApprovalList')),
    },
    {
        url: '/new-physical-instrument-delivery',
        component: lazy(() => import('../components/Settlement/InstrumentDelivery/NewPhyInstrumentDelivery/NewPhyInstrumentDelivery')),
    },
    {
        url: '/physical-instrument-delivery-list',
        component: lazy(() => import('../components/Settlement/InstrumentDelivery/PhyInstrumentDeliveryList/PhyInstrumentDeliveryList')),
    },
    {
        url: '/physical-instrument-delivery-approval-list',
        component: lazy(() => import('../components/Settlement/InstrumentDelivery/PhyInstrumentDeliveryApprovalList/PhyInstrumentDeliveryApprovalList')),
    },
    {
        url: '/new-unit-fund-collection',
        component: lazy(() => import('../components/Settlement/UnitFundCollection/NewUnitFundCollection/NewUnitFundCollection')),
    },
    {
        url: '/unit-fund-collection-list',
        component: lazy(() => import('../components/Settlement/UnitFundCollection/UnitFundCollectionList/UnitFundCollectionList')),
    },
    {
        url: '/unit-fund-collection-approval-list',
        component: lazy(() => import('../components/Settlement/UnitFundCollection/UnitFundCollectionApprovalList/UnitFundCollectionApprovalList')),
    },
    {
        url: '/new-unit-fund-delivery',
        component: lazy(() => import('../components/Settlement/UnitFundDelivery/NewUnitFundDelivery/NewUnitFundDelivery')),
    },
    {
        url: '/unit-fund-delivery-list',
        component: lazy(() => import('../components/Settlement/UnitFundDelivery/UnitFundDeliveryList/UnitFundDeliveryList')),
    },
    {
        url: '/unit-fund-delivery-approval-list',
        component: lazy(() => import('../components/Settlement/UnitFundDelivery/UnitFundDeliveryApprovalList/UnitFundDeliveryApprovalList')),
    },
    //Fund Operation
    {
        url: '/new-mutual-fund-operation-input',
        component: lazy(() => import('../components/FundOperation/MutualFund/MutualFund/NewMutualFundInput/NewMutualFundInput')),
    },
    {
        url: '/mutual-fund-operation-approval-list',
        component: lazy(() => import('../components/FundOperation/MutualFund/MutualFund/MutualFundApproval/MutualFundApprovalList')),
    },
    {
        url: '/mutual-fund-operation-approval-details',
        component: lazy(() => import('../components/FundOperation/MutualFund/MutualFund/MutualFundApproval/MutualFundApprovalDetails')),
    },
    {
        url: '/mutual-fund-operation-list',
        component: lazy(() => import('../components/FundOperation/MutualFund/MutualFund/MutualFundList')),
    },
    {
        url: '/new-custodian-input',
        component: lazy(() => import('../components/FundOperation/Custodian/NewCustodianInput/NewCustodianInput')),
    },
    {
        url: '/custodian-approval-list',
        component: lazy(() => import('../components/FundOperation/Custodian/CustodianApprovalList/CustodianApprovalList')),
    },
    {
        url: '/custodian-approval-details',
        component: lazy(() => import('../components/FundOperation/Custodian/CustodianApprovalList/CustodianApprovalDetails')),
    },
    {
        url: '/custodian-list',
        component: lazy(() => import('../components/FundOperation/Custodian/CustodianList')),
    },
    {
        url: '/new-trustee-input',
        component: lazy(() => import('../components/FundOperation/Trustee/NewTrusteeInput/NewTrusteeInput')),
    },
    {
        url: '/trustee-approval-list',
        component: lazy(() => import('../components/FundOperation/Trustee/TrusteeApprovalList/TrusteeApprovalList')),
    },
    {
        url: '/trustee-approval-details',
        component: lazy(() => import('../components/FundOperation/Trustee/TrusteeApprovalList/TrusteeApprovalDetails')),
    },
    {
        url: '/trustee-list',
        component: lazy(() => import('../components/FundOperation/Trustee/TrusteeList')),
    },
    {
        url: '/new-fund-account-input',
        component: lazy(() => import('../components/FundOperation/FundAccount/CreateFundAccount/CreateFundAccount')),
    },
    {
        url: '/fund-account-approval-list',
        component: lazy(() => import('../components/FundOperation/FundAccount/FundAccountApproval/FundAccountsApprovalList')),
    },
    {
        url: '/fund-account-approval-details',
        component: lazy(() => import('../components/FundOperation/FundAccount/FundAccountApproval/FundAccountApprovalDetails')),
    },
    {
        url: '/fund-account-list',
        component: lazy(() => import('../components/FundOperation/FundAccount/FundAccountsList')),
    },
    {
        url: '/new-mutual-fund-setup',
        component: lazy(() => import('../components/FundOperation/MutualFundSetup/NewMutualFundSetup/NewMFSetup')),
    },
    {
        url: '/mutual-fund-setup-list',
        component: lazy(() => import('../components/FundOperation/MutualFundSetup/MutualFundSetupList')),
    },
    {
        url: '/mutual-fund-setup-approval-list',
        component: lazy(() => import('../components/FundOperation/MutualFundSetup/MutualFundSetupApproval/MutualFundSetupApprovalList')),
    },
    {
        url: '/mutual-fund-setup-approval-details',
        component: lazy(() => import('../components/FundOperation/MutualFundSetup/MutualFundSetupApproval/MutualFundSetupApprovalDetails')),
    },
    {
        url: '/accrued-interest-collection-against-each-bank-account',
        component: lazy(() => import('../components/FundOperation/InterestCollection/AccruedInterestCollection/AccruedInterestCollection')),
    },
    {
        url: '/interest-collection-adjustment-approval-list',
        component: lazy(() => import('../components/FundOperation/InterestCollection/InterestCollectionAdjustment/InterestCollectionAdjustmentApprovalList')),
    },
    {
        url: '/interest-collection-adjustment-list',
        component: lazy(() => import('../components/FundOperation/InterestCollection/InterestCollectionAdjustment/InterestCollectionAdjustmentList')),
    },
    {
        url: '/interest-collection-reversal-for-fund',
        component: lazy(() => import('../components/FundOperation/InterestCollection/InterestCollectionAdjustment/InterestCollectionReversalList')),
    },
    {
        url: '/interest-collection-reversal-approval-for-fund',
        component: lazy(() => import('../components/FundOperation/InterestCollection/InterestCollectionAdjustment/InterestCollectionReversalApprovalList')),
    },
    {
        url: '/formation-and-issue-expense-amortization-setup',
        component: lazy(() => import('../components/FundOperation/FormationAndIssueExpense/AmortizationSetup/FIExpenseAmortizationSetup')),
    },
    {
        url: '/formation-and-issue-expense-amortization-setup-list',
        component: lazy(() => import('../components/FundOperation/FormationAndIssueExpense/AmortizationSetupList/FIExpenseAmortizationSetupList')),
    },
    {
        url: '/formation-and-issue-expense-amortization-setup-approval-list',
        component: lazy(() => import('../components/FundOperation/FormationAndIssueExpense/AmortizationSetupApproval/FIExpenseAmortizationSetupApprovalList')),
    },
    {
        url: '/formation-and-issue-expense-amortization-setup-approval-details',
        component: lazy(() => import('../components/FundOperation/FormationAndIssueExpense/AmortizationSetupApproval/FIExpenseAmortizationSetupApprovalDetails')),
    },
    {
        url: '/dse-shariah-index-setup',
        component: lazy(() => import('../components/FundOperation/FormationAndIssueExpense/DSEShariahIndexSetup/DSEShariahIndexSetup')),
    },
    {
        url: '/dse-shariah-index-setup-approval',
        component: lazy(() => import('../components/FundOperation/FormationAndIssueExpense/DSEShariahIndexSetupApproval/DSEShariahIndexSetupApprovalList')),
    },
    {
        url: '/dse-shariah-index-setup-approval-details',
        component: lazy(() => import('../components/FundOperation/FormationAndIssueExpense/DSEShariahIndexSetupApproval/DSEShariahIndexSetupApprovalDetails')),
    },
    {
        url: '/advance-payment',
        component: lazy(() => import('../components/FundOperation/FeesPayment/AdvancePayment/NewAdvancePayment')),
    },
    {
        url: '/advance-payment-approval-list',
        component: lazy(() => import('../components/FundOperation/FeesPayment/AdvancePaymentApproval/AdvancePaymentApprovalList')),
    },
    {
        url: '/advance-payment-approval-details',
        component: lazy(() => import('../components/FundOperation/FeesPayment/AdvancePaymentApproval/AdvancePaymentApprovalDetails')),
    },
    {
        url: '/advance-payment-list',
        component: lazy(() => import('../components/FundOperation/FeesPayment/AdvancePaymentList/AdvancePaymentList')),
    },
    {
        url: '/advance-payment-details',
        component: lazy(() => import('../components/FundOperation/FeesPayment/AdvancePaymentList/AdvancePaymentDetails')),
    },
    {
        url: '/due-charge-payment',
        component: lazy(() => import('../components/FundOperation/FeesPayment/DueChargePayment/DueChargePayment')),
    },
    {
        url: '/due-charge-payment-list',
        component: lazy(() => import('../components/FundOperation/FeesPayment/DueChargePaymentList/DuePaymentList')),
    },
    {
        url: '/due-charge-payment-details',
        component: lazy(() => import('../components/FundOperation/FeesPayment/DueChargePaymentList/DuePaymentDetails')),
    },
    {
        url: '/due-charge-payment-approval',
        component: lazy(() => import('../components/FundOperation/FeesPayment/DueChargePaymentApproval/DuePaymentApprovalList')),
    },
    {
        url: '/due-charge-payment-approval-details',
        component: lazy(() => import('../components/FundOperation/FeesPayment/DueChargePaymentApproval/DuePaymentApprovalDetails')),
    },
    {
        url: '/interest-fees-accrual',
        component: lazy(() => import('../components/FundOperation/FeesPayment/InterestFeesAccrual/InterestFeesAccrual')),
    },
    {
        url: '/nav-process',
        component: lazy(() => import('../components/FundOperation/Nav/NavProcess/NavProcess')),
    },
    {
        url: '/nav-dashboard',
        component: lazy(() => import('../components/FundOperation/Nav/NavDashboard/NavDashboard')),
    },
    {
        url: '/lock-in-days-setup',
        component: lazy(() => import('../components/FundOperation/MutualFund/LockInDays/LockInDaysSetup/LockInDaysSetup')),
    },
    {
        url: '/lock-in-days-approval-list',
        component: lazy(() => import('../components/FundOperation/MutualFund/LockInDays/LockInDaysApproval/LockInDaysApprovalList')),
    },
    {
        url: '/lock-in-days-approval-details',
        component: lazy(() => import('../components/FundOperation/MutualFund/LockInDays/LockInDaysApproval/LockInDaysApprovalDetails')),
    },
    {
        url: '/lock-in-days-list',
        component: lazy(() => import('../components/FundOperation/MutualFund/LockInDays/LockInDaysList/LockInDaysList')),
    },
    {
        url: '/minimum-sale-surrender-unit-setup',
        component: lazy(() => import('../components/FundOperation/MutualFund/SaleUnit/MinimumSaleSurrenderUnitSetup/MinimumSaleSurrenderUnitSetup')),
    },
    {
        url: '/new-unit-issue-for-sale',
        component: lazy(() => import('../components/FundOperation/MutualFund/SaleUnit/NewUnitIssueForSale/NewUnitIssueForSale')),
    },
    {
        url: '/new-unit-purchase-list',
        component: lazy(() => import('../components/FundOperation/UnitPurchase/UnitPurchase/NewUnitPurchase/CollectionListForUnitPurchase')),
    },
    {
        url: '/new-unit-purchase',
        component: lazy(() => import('../components/FundOperation/UnitPurchase/UnitPurchase/NewUnitPurchase/NewUnitPurchase')),
    },
    {
        url: '/unit-purchase-list',
        component: lazy(() => import('../components/FundOperation/UnitPurchase/UnitPurchase/UnitPurchaseList')),
    },
    {
        url: '/unit-purchase-approval-list',
        component: lazy(() => import('../components/FundOperation/UnitPurchase/UnitPurchase/UnitPurchaseApproval/UnitPurchaseApprovalList')),
    },
    {
        url: '/unit-purchase-approval-details',
        component: lazy(() => import('../components/FundOperation/UnitPurchase/UnitPurchase/UnitPurchaseApproval/UnitPurchaseApprovalDetails')),
    },
    {
        url: '/unit-activation-request',
        component: lazy(() => import('../components/FundOperation/UnitPurchase/UnitActivationRequest/UnitActivationRequest')),
    },
    {
        url: '/unit-activation-approval',
        component: lazy(() => import('../components/FundOperation/UnitPurchase/UnitActivationRequest/UnitActivationApproval')),
    },
    {
        url: '/new-unit-surrender',
        component: lazy(() => import('../components/FundOperation/UnitSurrender/UnitSurrender/NewUnitSurrender/NewUnitSurrender')),
    },
    {
        url: '/unit-surrender-list',
        component: lazy(() => import('../components/FundOperation/UnitSurrender/UnitSurrender/UnitSurrenderList')),
    },
    {
        url: '/unit-surrender-approval-list',
        component: lazy(() => import('../components/FundOperation/UnitSurrender/UnitSurrender/UnitSurrenderApproval/UnitSurrenderApprovalList')),
    },
    {
        url: '/unit-surrender-approval-details',
        component: lazy(() => import('../components/FundOperation/UnitSurrender/UnitSurrender/UnitSurrenderApproval/UnitSurrenderApprovalDetails')),
    },
    {
        url: '/dividend-declaration-aml',
        component: lazy(() => import('../components/FundOperation/DividendDisbursement/DividendDeclaration/NewDividendDeclaration')),
    },
    {
        url: '/dividend-declaration-aml-list',
        component: lazy(() => import('../components/FundOperation/DividendDisbursement/DividendDeclaration/DividendDeclarationList')),
    },
    {
        url: '/dividend-declaration-aml-approval-list',
        component: lazy(() => import('../components/FundOperation/DividendDisbursement/DividendDeclarationApproval/DividendDeclarationApprovalList')),
    },
    {
        url: '/cash-dividend-distribution',
        component: lazy(() => import('../components/FundOperation/DividendDisbursement/CashDividendDistribution/CashDividendDistribution')),
    },
    {
        url: '/cash-dividend-distribution-list',
        component: lazy(() => import('../components/FundOperation/DividendDisbursement/CashDividendDistribution/CashDividendDistributionList')),
    },
    {
        url: '/cash-dividend-distribution-approval-list',
        component: lazy(() => import('../components/FundOperation/DividendDisbursement/CashDividendDistributionApproval/CashDividendDistributionApproval')),
    },
    {
        url: '/stock-dividend-distribution',
        component: lazy(() => import('../components/FundOperation/DividendDisbursement/StockDividendDistribution/StockDividendDistribution')),
    },
    {
        url: '/cip-dividend-distribution-list',
        component: lazy(() => import('../components/FundOperation/DividendDisbursement/StockDividendDistribution/StockDividendDistributionList')),
    },
    {
        url: '/stock-dividend-distribution-approval-list',
        component: lazy(() => import('../components/FundOperation/DividendDisbursement/StockDividendDistributionApproval/StockDividendDistributionApproval')),
    },
    {
        url: '/nav-update-through-file-upload',
        component: lazy(() => import('../components/FundOperation/OpenEndMutualFund/NavUpdateThroughFileUpload/NavUpdateThroughFileUpload')),
    },
    {
        url: '/nav-update-approval',
        component: lazy(() => import('../components/FundOperation/OpenEndMutualFund/NavUpdateApproval/NavUpdateApproval')),
    },
    {
        url: '/open-end-mutual-fund-receive',
        component: lazy(() => import('../components/FundOperation/OpenEndMutualFund/OpenEndMFReceive/OpenEndMFReceive')),
    },
    {
        url: '/open-end-mutual-fund-delivery',
        component: lazy(() => import('../components/FundOperation/OpenEndMutualFund/OpenEndMFDelivery/OpenEndMFDelivery')),
    },
    //Margin Operation
    {
        url: '/product-conversion',
        component: lazy(() => import('../components/MarginOperation/ProductConversion/NewProductConversation')),
    },
    {
        url: '/product-conversion-list',
        component: lazy(() => import('../components/MarginOperation/ProductConversion/ProductConversionList')),
    },
    {
        url: '/product-conversion-approval-list',
        component: lazy(() => import('../components/MarginOperation/ProductConversion/ProductConversionApprovalList')),
    },
    {
        url: '/unauthorized-product-conversion-details',
        component: lazy(() => import('../components/MarginOperation/ProductConversion/ProductConversionApprovalDetails')),
    },
    {
        url: '/new-margin-request',
        component: lazy(() => import('../components/MarginOperation/MarginRequest/NewMarginRequest/NewMarginRequest')),
    },
    {
        url: '/margin-request-list',
        component: lazy(() => import('../components/MarginOperation/MarginRequest/MarginRequestList')),
    },
    {
        url: '/margin-request-status',
        component: lazy(() => import('../components/MarginOperation/MarginRequest/MarginRequestStatus')),
    },
    {
        url: '/complete-margin-request',
        component: lazy(() => import('../components/MarginOperation/MarginRequest/CompleteMarginRequest/CompleteMarginRequestList')),
    },
    {
        url: '/complete-margin-request-details',
        component: lazy(() => import('../components/MarginOperation/MarginRequest/CompleteMarginRequest/CompleteMarginRequestDetails')),
    },
    {
        url: '/margin-monitoring',
        component: lazy(() => import('../components/MarginOperation/MarginRequest/MarginMonitoring')),
    },
    // Account settlement
    {
        url: '/account-suspend-request',
        component: lazy(() => import('../components/Operations/AccountSettlement/AccountSuspendRequest/NewAccountSuspendRequest')),
    },
    {
        url: '/account-suspend-approval-details',
        component: lazy(() => import('../components/Operations/AccountSettlement/AccountSuspendApprovalList/AccountSuspendApprovalDetails')),
    },
    {
        url: '/account-suspend-request-bulk',
        component: lazy(() => import('../components/Operations/AccountSettlement/AccountSuspendRequestBulk/NewAccountSuspendRequestBulk')),
    },
    {
        url: '/account-suspension-approval-list',
        component: lazy(() => import('../components/Operations/AccountSettlement/AccountSuspendApprovalList/AccountSuspendApprovalList')),
    },
    {
        url: '/suspended-account-list',
        component: lazy(() => import('../components/Operations/AccountSettlement/SuspendedAccountList/SuspendedAccountList')),
    },
    {
        url: '/suspension-withdrawal-request',
        component: lazy(() => import('../components/Operations/AccountSettlement/SuspensionWithdrawalRequest/NewSuspensionWithdrawalRequest')),
    },
    {
        url: '/suspension-withdrawal-request-bulk',
        component: lazy(() => import('../components/Operations/AccountSettlement/SuspensionWithdrawalRequestBulk/NewSuspensionWithdrawalRequestBulk')),
    },
    {
        url: '/suspension-withdrawal-approval-list',
        component: lazy(() => import('../components/Operations/AccountSettlement/SuspensionWithdrawalApprovalList/SuspensionWithdrawalApprovalList')),
    },
    {
        url: '/suspension-withdrawal-approval-details',
        component: lazy(() => import('../components/Operations/AccountSettlement/SuspensionWithdrawalApprovalList/SuspensionWithdrawalApprovalDetails')),
    },
    {
        url: '/suspension-withdrawal-list',
        component: lazy(() => import('../components/Operations/AccountSettlement/NewSuspensionWithdrawal/SuspensionWithdrawalList')),
    },
    {
        url: '/suspension-withdrawal-details',
        component: lazy(() => import('../components/Operations/AccountSettlement/NewSuspensionWithdrawal/SuspensionWithdrawalDetails')),
    },
    {
        url: '/account-closure-request',
        component: lazy(() => import('../components/Operations/AccountSettlement/AccountClosureRequest/NewAccountClosureRequest')),
    },
    {
        url: '/account-closure-request-bulk',
        component: lazy(() => import('../components/Operations/AccountSettlement/AccountClosureRequestBulk/NewAccountClosureRequestBulk')),
    },
    {
        url: '/account-closure-execution-request',
        component: lazy(() => import('../components/Operations/AccountSettlement/AccountClosureExecution/AccountClosureExecutionList')),
    },
    {
        url: '/account-closure-execution-request-details',
        component: lazy(() => import('../components/Operations/AccountSettlement/AccountClosureExecution/AccountClosureExecutionDetails')),
    },
    {
        url: '/account-closure-list',
        component: lazy(() => import('../components/Operations/AccountSettlement/AccountClosureList/AccountClosureList')),
    },
    // Reconciliation Report
    {
        url: '/stock-reconciliation',
        component: lazy(() => import('../components/Operations/Report/StockReconciliationReport')),
    },
    {
        url: '/payin-reconciliation',
        component: lazy(() => import('../components/Operations/Report/PayInReconciliationReport')),
    },
    {
        url: '/payout-reconciliation',
        component: lazy(() => import('../components/Operations/Report/PayOutReconciliationReport')),
    },
    {
        url: '/ipo-report',
        component: lazy(() => import('../components/Report/Operations/IpoReport')),
    },
    {
        url: '/clients-report',
        component: lazy(() => import('../components/Report/Operations/ClientReport')),
    },
    {
        url: '/corporate-action',
        component: lazy(() => import('../components/Report/Operations/CorporateAction')),
    },
    {
        url: '/management-report',
        component: lazy(() => import('../components/Report/Operations/ManagementReport')),
    },
    
    {
        url: '/finance-report',
        component: lazy(() => import('../components/Report/Accounting/FinanceReport')),
    },
    {
        url: '/customer-statement-report',
        component: lazy(() => import('../components/Report/CustomerStatement/CustomerStatementReport')),
    },
    {
        url: '/trade-report-sl',
        component: lazy(() => import('../components/Report/TradeReport/TradeReportSL')),
    },
    {
        url: '/trade-settlement',
        component: lazy(() => import('../components/Report/TradeReport/TradeSettlement')),
    }
    ,
    {
        url: '/trade-report-il',
        component: lazy(() => import('../components/Report/TradeReport/TradeReportIL')),
    },
    {
        url: '/instrument-report',
        component: lazy(() => import('../components/Report/TradeReport/InstrumentReport')),
    },
    {
        url: '/trade-allocation-il',
        component: lazy(() => import('../components/Report/TradeReport/TradeAllocationIL')),
    },
    {
        url: '/trade-report-aml',
        component: lazy(() => import('../components/Report/TradeReport/TradeReportAML')),
    },
    {
        url: '/accounting-report-aml',
        component: lazy(() => import('../components/Report/FinanceAML/AccountingReportAML')),
    },
    {
        url: '/compliance-report-aml',
        component: lazy(() => import('../components/Report/FinanceAML/ComplianceReportAML')),
    },
    {
        url: '/treasury-report-aml',
        component: lazy(() => import('../components/Report/FinanceAML/TreasuryReport')),
    },
    {
        url: '/new-rights-application-aml',
        component: lazy(() => import('../components/Operations/CorporateActionRight/NewRightsApplicationAml/NewRightsApplicationAml')),
    },

    {
        url: '/application-waiting-for-submission',
        component: lazy(() => import('../components/Operations/IPO/IpoSubmissionWaiting/IpoSubmissionWaiting')),
    },
    {
        url: '/submitted-applications',
        component: lazy(() => import('../components/Operations/IPO/SubmittedApplications/SubmittedApplications')),
    },
    {
        url: '/ipo-application-bulk-file',
        component: lazy(() => import('../components/Operations/IPO/IpoApplicationBulkFileUpload/IpoApplicationBulkFileUpload')),
    },
    //AML IPO
    {
        url: '/aml-application-approval-list',
        component: lazy(() => import('../components/Operations/IpoAml/BookBuildingApprovalList/BookBuildingApprovalList')),
    },
    {
        url: '/aml-subscription-reversal-list',
        component: lazy(() => import('../components/Operations/IpoAml/BookBuildingSubscriptionList/BookBuildingSubscriptionList')),
    },
    {
        url: '/aml-subscription-app',
        component: lazy(() => import('../components/Operations/IpoAml/NewBookBuildingSubscriptionAml/NewBookBuildingSubscriptionAml')),
    },
    {
        url: '/aml-reversal-approval-list',
        component: lazy(() => import('../components/Operations/IpoAml/BookBuildingSubscriptionReversalApprovalList/BookBuildingSubscriptionReversalApprovalList')),
    },
    {
        url: '/aml-ipo-allocation',
        component: lazy(() => import('../components/Operations/IpoAml/BookBuildingAllocationSubscriptionList/BookBuildingAllocationSubscriptionList')),
    },
    {
        url: '/aml-new-ipo-allocation',
        component: lazy(() => import('../components/Operations/IpoAml/NewIpoBookBuildingAllocationAml/NewIpoBookBuildingAllocationAml')),
    },
    {
        url: '/allocation-approval-list-aml-maker',
        component: lazy(() => import('../components/Operations/IpoAml/AllocationApprovalForMakerList/AllocationApprovalForMakerList')),
    },
    {
        url: '/aml-allocation-approval-list',
        component: lazy(() => import('../components/Operations/IpoAml/BookBuildingAllocationApprovalList/BookBuildingAllocationApprovalList')),
    },
    {
        url: '/aml-ipo-declartion',
        component: lazy(() => import('../components/Operations/IpoAml/NewIpoSetup/NewIpo')),
    },
    {
        url: '/aml-ipo-declaration-approval-list',
        component: lazy(() => import('../components/Operations/IpoAml/IPODeclarationApprovalList/IPODeclarationApprovalList')),
    },
    {
        url: '/aml-ipo-instrument-list',
        component: lazy(() => import('../components/Operations/IpoAml/IpoInstrumentList/IpoInstrumentList')),
    },
    {
        url: '/aml-ipo-declaration-approval-list-details',
        component: lazy(() => import('../components/Operations/IpoAml/IPODeclarationApprovalList/IpoDeclarationApprovalListDetails')),
    },
    {
        url: '/aml-instrument-collection-list',
        component: lazy(() => import('../components/Operations/IpoAml/IpoInstrumentCollectionList/IpoInstrumentCollectionList')),
    },
    {
        url: '/aml-collection-approval-list',
        component: lazy(() => import('../components/Operations/IpoAml/IpoCollectionApprovalList/IpoCollectionApprovalList')),
    },
    {
        url: '/aml-new-ipo-application',
        component: lazy(() => import('../components/Operations/IpoAml/NewIpoApplicationAml/NewIpoApplicationAml')),
    },
    {
        url: '/sms-generation',
        component: lazy(() => import('../components/Operations/SMS/SMSGeneration/SmsGenerationList')),
    },
    {
        url: '/sms-circulation',
        component: lazy(() => import('../components/Operations/SMS/SmsCirculation/SmsCirculationList')),
    },
    {
        url: '/sms-history',
        component: lazy(() => import('../components/Operations/SMS/SmsHistory/SmsHistoryList')),
    },
    {
        url: '/email-generation',
        component: lazy(() => import('../components/Operations/Email/EmailGeneration/EmailGenerationList')),
    },
    {
        url: '/email-circulation',
        component: lazy(() => import('../components/Operations/Email/EmailCirculation/EmailCirculationList')),
    },
    {
        url: '/email-history',
        component: lazy(() => import('../components/Operations/Email/EmailHistory/EmailHistoryList')),
    },
    //Instrument Split
    {
        url: '/instrument-split-declaration',
        component: lazy(() => import('../components/Settlement/InstrumentSplit/InstrumentSplitDeclaration/NewInstrumentSplit')),
    },
    {
        url: '/instrument-split-declaration-list',
        component: lazy(() => import('../components/Settlement/InstrumentSplit/SplitDeclarationApprovalList/SplitDeclarationApprovalList')),
    },
    {
        url: '/instrument-split',
        component: lazy(() => import('../components/Settlement/InstrumentSplit/InstrumentSplit/InstrumentSplit')),
    },
    {
        url: '/instrument-split-list',
        component: lazy(() => import('../components/Settlement/InstrumentSplit/InstrumentSplitList/InstrumentSplitList')),
    },
    {
        url: '/instrument-split-approval-list',
        component: lazy(() => import('../components/Settlement/InstrumentSplit/InstrumentSplitApprovalList/InstrumentSplitApprovalList')),
    },
    //Incremental MF
    {
        url: '/apply-incremental-mf-list',
        component: lazy(() => import('../components/FinancialTransaction/IncrementalMF/IncrementalMfList/IncrementalMfList')),
    },
    {
        url: '/approve-incremental-mf-list',
        component: lazy(() => import('../components/FinancialTransaction/IncrementalMF/IncrementalMfApprovalList/IncrementalMfApprovalList')),
    },
    {
        url: '/settlement-area-report',
        component: lazy(() => import('../components/Report/SettlementReport/SettlementAreaReport')),
    },
    {
        url: '/management-area-report',
        component: lazy(() => import('../components/Report/SettlementReport/ManagementAreaReport')),
    },
    {
        url: '/compliance-report',
        component: lazy(() => import('../components/Report/SettlementReport/ComplianceReport')),
    },
    {
        url: '/compliance-report',
        component: lazy(() => import('../components/Report/SettlementReport/ComplianceReport')),
    },
    {
        url: '/accounting',
        component: lazy(() => import('../components/Report/DSEUniformReport/AccountingReport')),
    },
    {
        url: '/stock-cdbl',
        component: lazy(() => import('../components/Report/DSEUniformReport/StockCDBLReport')),
    },{
        url: '/stock-portfolio',
        component: lazy(() => import('../components/Report/DSEUniformReport/StockPortfolioReport')),
    },{
        url: '/trade-stock',
        component: lazy(() => import('../components/Report/DSEUniformReport/TradeStockReport')),
    },{
        url: '/margin',
        component: lazy(() => import('../components/Report/DSEUniformReport/MarginReport')),
    },
    {
        url: '/rm-management',
        component: lazy(() => import('../components/Report/RmManagementReport/RmManagement')),
    },
    {
        url:'/exception-report',
        component: lazy(() => import('../components/EODProcess/Report/ExceptionReport')), // EODProcess Report handler
    },

    {
        url: '/management-report-underRMSection',
        component: lazy(() => import('../components/Report/RmManagementReport/ManagementReport')),
    },
    {
        url: '/portfolio-management',
        component: lazy(() => import('../components/Report/RmManagementReport/PortfolioManagement')),
    },
    {
        url: '/help-desk',
        component: lazy(() => import('../components/HelpDesk/HelpDesk')),
    },
    {
        url: '/test-module',
        component: lazy(() => import('../components/UserManagement/TestModule')),
    },
];
export const unAuthorizedRoutes = [
    {
        url: '/',
        component: lazy(() => import('../components/Login/Login'))
    },
    {
        url: '/login',
        component: lazy(() => import('../components/Login/Login'))
    }
]

