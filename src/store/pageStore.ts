import { create } from "zustand";

type Store = {
    page: number;
    setPage: (arg: number) => void;
};

const usePageStore = create<Store>()((set) => ({
    page: 0,
    setPage: (arg) => set({ page: arg }),
}));

export default usePageStore;
