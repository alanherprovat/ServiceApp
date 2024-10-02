import {create} from "zustand";

const initialState= {
    ipoClientFinancialInfo:{
        availableBalance:"",
        purchasePower:"",
        IPOEligableClientList:[]
    },
}

const ipoStore = create(set=>({
    ...initialState,
    setIpoClientFinancialInfo:(data)=>set({ipoClientFinancialInfo:data}),
    onChangeIpoClientFinancialInfo:(data)=>set((state)=>({ipoClientFinancialInfo:{...state.ipoClientFinancialInfo,...data}})),
    resetIpoClientFinancialInfo:()=>set(()=>initialState)
}))

export default ipoStore;