import { create } from "zustand";

const initialState = {
  registeredClientBankDropDownList: [],
  clientBankList: [],
  bankDropDownList: [],
  clientBankDropDownList: [],
  branchDropDownList: [],
  branchList: [],
};
const bankStore = create((set)=>({
    ...initialState,
    setRegisteredClientBankDropDownList: (data) =>
      set(() => ({ registeredClientBankDropDownList: data })),
    setBankDropDownList: (data) => set(() => ({ bankDropDownList: data })),
    setBranchDropDownList: (data) => set(() => ({ branchDropDownList: data })),
    setClientBankDropDownList: (data) =>
      set(() => ({ clientBankDropDownList: data })),
    setClientBankList: (data) => set(() => ({ clientBankList: data })),
    setBranchList: (data) => set(() => ({ branchList: data })),
}))
export default bankStore;