import {create} from "zustand";

const initialState= {
    loginData:{
        email:"",
        password:""
    },
    forgetPasswordData:{
        email:"",
        accountNo:""
    },
    accountList:[],
    isAuthenticated:false
}

const authStore = create(set=>({
    ...initialState,

    setAuthStatus:(authStatus)=>set({isAuthenticated:authStatus}),
    onChangeForgetData:(data)=>set((state)=>({forgetPasswordData:{...state.forgetPasswordData,...data}})),
    onChangeLoginData:(data)=>set((state)=>({loginData:{...state.loginData,...data}})),
    onChangeAccountList:(data)=>set({accountList:data}),
    resetLoginData:()=>set(()=>initialState)
}))

export default authStore;