import {create} from 'zustand';

const initialState = {
    isLoading: false,
    focusOn: "",
    errorMessage: "",
    dropDown:false,
    selectedItem:"",
    language: "English",
    selectedLanguage: "",
    languageDropDown: false
}

const utilityStore = create(set => ({
    ...initialState,
    setIsLoading: (data) => set(() => ({isLoading: data})),
    setFocusOn: (data) => set(() => ({focusOn: data})),
    setErrorMessage: (data) => set(() => ({errorMessage: data})),
    resetFocus:()=>set(() => ({focusOn: initialState.focusOn})),
    setDropDown:(data)=>set(()=>({dropDown:data})),
    setLanguageDropDown:(data)=>set(()=>({languageDropDown:data})),
    setSelectedItem:(data)=>set(()=>({selectedItem:data})),
    setSelectedLanguage:(data)=>set(()=>({selectedLanguage:data})),
    onChangeLanguage: (newLanguage) => set((state) => ({ language: newLanguage })),
   
}));

export default utilityStore;