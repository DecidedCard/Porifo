import { create } from "zustand";

type Store = {
    filter: string;
    setFilter: (arg: string) => void;
};

const useJobFilterStore = create<Store>()((set) => ({
    filter: "최신순",
    setFilter: (arg) => set({ filter: arg }),
}));

export default useJobFilterStore;
