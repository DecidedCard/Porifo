import { create } from "zustand";

type Store = {
    user: any;
    setUser: (arg: any) => void;
};

const useUser = create<Store>()((set) => ({
    user: {},
    setUser: (arg) => set({ user: arg }),
}));

export default useUser;
