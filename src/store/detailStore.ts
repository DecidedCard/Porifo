import { create } from "zustand";

type Store = {
    cardId: any;
    setCardId: (arg: string) => void;
};

const useCardIdStore = create<Store>()((set) => ({
    cardId: "",
    setCardId: (arg) => set({ cardId: arg }),
}));

export default useCardIdStore;
