import { PortfolioInfo } from "@/types/PortfolioInfo";
import { create } from "zustand";

type User = {
    app_metadata: { provider: string; providers: string[] };
    aud: string;
    confirmed_at: string;
    created_at: string;
    email: string;
    email_confirmed_at: string;
    id: string;
    updated_at: string;
    user_metadata: {
        age: string;
        email: string;
        phoneNumber: string;
        sex: string;
        sub: string;
    };
};

type Store = {
    user: User | null;
    portfolio: PortfolioInfo | null;
    setUser: (arg: any) => void;
    setPortfolio: (arg: PortfolioInfo) => void;
};

const useUser = create<Store>()((set) => ({
    user: null,
    portfolio: null,
    setUser: (arg) => set({ user: arg }),
    setPortfolio: (arg) => set({ portfolio: arg }),
}));

export default useUser;
