import { create } from "zustand";

type Store = {
    filter: string;
    setFilter: (arg: string) => void;
    jobFilter: string;
    setJobFilter: (arg: string) => void;
};

const useJobFilterStore = create<Store>()((set) => ({
    filter: "최신순",
    setFilter: (arg) => set({ filter: arg }),
    jobFilter: "*",
    setJobFilter: (arg) => set({ jobFilter: arg }),
}));

export default useJobFilterStore;
