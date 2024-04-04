import { create } from "zustand";

type Store = {
    user: {
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
    } | null;
    setUser: (arg: any) => void;
};

const useUser = create<Store>()((set) => ({
    user: null,
    setUser: (arg) => set({ user: arg }),
}));

export default useUser;
