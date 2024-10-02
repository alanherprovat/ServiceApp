import { create } from "zustand";

const initialState = {
  depositBankData: {
    // BankAccountName: '',
    // BankAccountNo: '',
    BankID: "",
    Amount: "",
    BankName:""
    // BranchID: '',
    // BranchName: '',
    // RoutingNumber: '',
  },
  clientBankData: {
    BankAccountName: "",
    BankAccountNo: "",
    BankID: "",
    Amount: "",
    BranchID: "",
    BranchName: "",
    RoutingNumber: "",
  },
  registeredClientBankDropDownList:[],
  clientBankList: [],
  bankDropDownList: [],
  clientBankDropDownList: [],
  branchDropDownList: [],
  branchList:[]
};
const depositStore = create((set) => ({
  ...initialState,
  onChangeDepositBankData: (data) =>
    set((state) => ({
      depositBankData: { ...state.depositBankData, ...data },
    })),
  setRegisteredClientBankDropDownList: (data) => set(()=> ({ registeredClientBankDropDownList:data })),
  onChangeClientBankData: (data) => set((state) => ({ clientBankData: { ...state.clientBankData, ...data } })),
  setBankDropDownList: (data) => set(() => ({ bankDropDownList: data })),
  setBranchDropDownList: (data) => set(() => ({ branchDropDownList: data })),
  setClientBankDropDownList: (data) => set(() => ({ clientBankDropDownList: data })),
  setClientBankList: (data) => set(() => ({ clientBankList: data })),
  setBranchList: (data)=> set(()=>({branchList:data}))
}));
export default depositStore;
