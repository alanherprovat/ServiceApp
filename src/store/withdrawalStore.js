import {create} from 'zustand';

const initialState={

    maxWithdrawalAmount: "",
    withdrawalCheque:{
        withdrawalAmount:"",
    },
    withdrawalInfoBFTN: {
      withdrawalAmount: "",
      mode: "BFTN",
      clientBankAccID: "",
      clientBankAccNo: "",
      clientBankName: "",
      clientBankBranchName: "",
      clientBankRoutingNo: "",
    },

    withdrawalInfoRTGS: {
        withdrawalAmount: "",
        mode: "RTGS",
        clientBankAccID: "",
        clientBankAccNo: "",
        clientBankName: "",
        clientBankBranchName: "",
        clientBankRoutingNo: "",
      },

    clientWithdrawalBankData:{
        BankAccountID:'',
        BankAccountNo: '',
        BankAccountName: '',
        BankName:'',
        BankID: '',
        BranchName: '',
        BranchID: '',
        RoutingNumber: '',
        RoutingID:''
    },
    chequeReceiverData:{
        ReceiverName:'',
        imgName:'',
        image:''
    },
    clientBankList:[],
    bankDropDownList:[],
    clientBankDropDownList:[],
    branchDropDownList:[]
}
const withdrawalStore = create((set)=>({
    ...initialState,
    setBankDropDownList:(data)=> set(()=>({bankDropDownList:data})),
    setBranchDropDownList:(data)=>set(()=>({branchDropDownList:data})),

    setClientBankDropDownList:(data)=>set(()=>({clientBankDropDownList:data})),
    setClientBankList:(data)=>set(()=>({clientBankList:data})),


    onChangeClientwithdrawalBankData: (data) => set((state) => ({clientWithdrawalBankData: {...state.clientWithdrawalBankData, ...data}})),
    resetClientwithdrawalBankData:()=> set(() => ({ clientWithdrawalBankData: initialState.clientWithdrawalBankData })),
    
    onChangeChequeReceiverData:  (data) => set((state) => ({chequeReceiverData: {...state.chequeReceiverData, ...data}})),
    resetChequeReceiverData: () =>
        set(() => ({ chequeReceiverData: initialState.chequeReceiverData })),
    
    setMaxWithdrawalAmount: (data) => set(() => ({ maxWithdrawalAmount: data })),
    setRequestWithdrwalAmount: (data) => set(() => ({ withdrawalCheque: data })),
    onchangeRequestWithdrwalAmount: (data) => set((state) => ({withdrawalCheque:{...state.withdrawalCheque, ...data }} )),

    //onchangeRequestWithdrwalAmount: (data) => set(() => ({ requestWithdrwalAmount: data.requestWithdrwalAmount })),

    resetRequestWithdrwalAmount: ()=> set(() => ({ withdrawalCheque: initialState.withdrawalAmount })),

    onChangeWithdrawalInfoBFTN: (data) =>
    set((state) => ({ withdrawalInfoBFTN: { ...state.withdrawalInfoBFTN, ...data } })),

    onChangeWithdrawalInfoRTGS: (data) =>
        set((state) => ({ withdrawalInfoRTGS: { ...state.withdrawalInfoRTGS, ...data } })),
    }));

export default withdrawalStore;