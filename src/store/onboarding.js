import {create} from 'zustand';

const initialState = {
    accountType: "Single A/C",
    accountSelected:"No",
    accountToggleButton: false,
    boChoice:{
        boValue:"newBo",
        boID:""
    },
    nomineeAdd: "No",
    personalInfo:{
        name:"Lorem Ipsum",
        fatherName:"Lorem Ipsum",
        motherName:"Lorem Ipsum",
        gender:"Male",
        NID:"1234567891234",
        phoneNo:"012345678234",
        email:"Lorem@Ipsum.com",
        occupation:"Lorem Ipsum",
        presentAddress:"Badda, Dhaka",
        permanentAddress:"Badda, Dhaka"
    },
    bankInfo:{
        bankAcNo:"1234567891234",
        bankName:"Brac Bank",
        branchName:"Motijheel,Dhaka",
        routingNo:"123456789"
    },
    jaInfo:{
        name:"Lorem Ipsum",
        fatherName:"Lorem Ipsum",
        motherName:"Lorem Ipsum",
        gender:"Male",
        NID:"1234567891234",
        phoneNo:"012345678234",
        email:"Lorem@Ipsum.com",
        occupation:"Lorem Ipsum",
        presentAddress:"Badda, Dhaka",
        permanentAddress:"Badda, Dhaka"
    }
}

const onboardingStore = create((set) => ({
    ...initialState,
    onChangeAccountType: (data) => set(() => ({ accountType: data })),
    onChangeSelectedAccount: (data) => set(() => ({ accountSelected: data })),
    onChangeAccountToggleButton: (data) => set(() => ({ accountToggleButton: data })),
    onChangeBoChoice:(data)=>set((state)=>({boChoice:{...state.boChoice,...data}})),
    onChangeNomineeAddd: (data) => set(() => ({ nomineeAdd: data })),
    onChangePersonalInformation:(data)=>set((state)=>({personalInfo:{...state.personalInfo,...data}})),
    onChangeBankInfo:(data)=>set((state)=>({bankInfo:{...state.bankInfo,...data}})),
    onChangeJaInformation:(data)=>set((state)=>({jaInfo:{...state.jaInfo,...data}}))
}))

export default onboardingStore;