import { create } from "zustand";

const initialState = {
  addressInfo: {
    contractID: "",
    presentAddressID:"",
    presentAddress: "",
    permanentAddress: "",
  },
  changedAddressInfo:{
    presentAddressID:"",
    presentAddress: "",
  },
  bankInfo:{
    bankAccName:'',
    bankAccountNo:'',
    bankBranch:'',
    bankID:'',
    branchID:'',
    routingNo:''
  },
  requestedBankInfo:{
    bankAccName:'',
    bankAccountNo:'',
    bankBranch:'',
    bankID:'',
    branchID:'',
    routingNo:''
  },
  contactInfo: {
    contractID: "",
    phoneNo: "",
    additionalPhoneNo: "",
    newAdditionalPhoneNo: "",
    email: "",
    additionalEmail: "",
    newAdditionalEmail: ""
  },
  tinInfo: {
    contractID: "",
    tinNo: "",
    newTinNo: ""
  }
};

const changeRequestStore = create((set) => ({
  ...initialState,
  onChangeAddressInfo: (data) =>set((state) => ({ addressInfo: { ...state.addressInfo, ...data } })),
  onChangeRequestedAddressInfo:(data)=>set((state) => ({changedAddressInfo: {...state.changedAddressInfo,...data}})),
  onChangeBankInfo: (data) => set((state)=>({bankInfo:{...state.bankInfo,...data}})),
  onChangeRequestedBankInfo:(data)=>set((state)=>({requestedBankInfo:{...state.requestedBankInfo,...data}})),

  onChangeContactInfo: (data) =>
    set((state) => ({ contactInfo: { ...state.contactInfo, ...data } })),

  onChangeTinInfo: (data) =>
    set((state) => ({ tinInfo: { ...state.tinInfo, ...data } })),
}));

export default changeRequestStore;
