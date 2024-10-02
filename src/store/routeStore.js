import { create } from "zustand";

const initialState = {
  routeName: "",
};

const routeStore = create((set) => ({
  ...initialState,
  setRoutePath: (data) => set(() => ({ routeName: data })),
}));

export default routeStore;
