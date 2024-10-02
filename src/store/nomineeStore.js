import { create } from "zustand";

const initialState = {
  firstNominee: {
    title: "1st Nominee",
    name: "",
    mobileNo: "",
    relation: "",
    percentage: "",
  },
  secondNominee: {
    title: "2nd Nominee",
    name: "",
    mobileNo: "",
    relation: "",
    percentage: "",
  },
  thirdNominee: {
    title: "3rd Nominee",
    name: "",
    mobileNo: "",
    relation: "",
    percentage: "",
  },
  nomineeList: [],
};
const nomineeStore = create((set) => ({
  ...initialState,
  onChangefirstNominee: (data) =>
    set((state) => ({
      firstNominee: { ...state.firstNominee, ...data },
    })),

  onChangeSecondNominee: (data) =>
    set((state) => ({
      secondNominee: { ...state.secondNominee, ...data },
    })),
  onChangeThirdNominee: (data) =>
    set((state) => ({
      thirdNominee: { ...state.thirdNominee, ...data },
    })),

  addNominee: () =>
    set((state) => {
      // Start with the existing nomineeList

      const newNomineeList = [...state.nomineeList];

      // Check and add the first nominee if it has valid data
      if (state.firstNominee && state.firstNominee.name) {
        newNomineeList.push(state.firstNominee);
      }

      // Check and add the second nominee if it has valid data
      if (state.secondNominee && state.secondNominee.name) {
        newNomineeList.push(state.secondNominee);
      }

      // Check and add the third nominee if it has valid data
      if (state.thirdNominee && state.thirdNominee.name) {
        newNomineeList.push(state.thirdNominee);
      }

      // Return new state with updated nomineeList and clear nominees
      return {
        nomineeList: newNomineeList,
        firstNominee: initialState.firstNominee,
        secondNominee: initialState.secondNominee,
        thirdNominee: initialState.thirdNominee,
      };
    }),
  
  
}));
export default nomineeStore;
