import { create } from "zustand";

const initialState = {
serviceRequestsList: [

],
}

const serviceRequestStore = create((set) => ({
    ...initialState,
    setServiceRequestsList: (data) => set(() => ({ serviceRequestsList: data })),
}));

export default serviceRequestStore;