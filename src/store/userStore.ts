import { create } from "zustand";

import type { User } from "@/types/User";
import type { PortfolioInfo } from "@/types/PortfolioInfo";

type Store = {
    user: User | null;
    portfolio: PortfolioInfo | null;
    setUser: (arg: any) => void;
    setPortfolio: (arg: PortfolioInfo | null) => void;
};

const useUserStore = create<Store>()((set) => ({
    user: null,
    portfolio: null,
    setUser: (arg) => set({ user: arg }),
    setPortfolio: (arg) => set({ portfolio: arg }),
}));

export default useUserStore;
