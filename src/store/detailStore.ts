import { create } from "zustand";

type detailStore = {
    cardId: any;
    setCardId: (arg: string) => void;
    isOpenModal: any;
    setIsOpenModal: (arg: boolean) => void;
};

const useDetailStore = create<detailStore>()((set) => ({
    cardId: "",
    setCardId: (arg) => set({ cardId: arg }),
    isOpenModal: false,
    setIsOpenModal: (arg) => set({ isOpenModal: arg }),
}));

export default useDetailStore;
