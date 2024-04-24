import { create } from "zustand";

type detailStore = {
    cardId: any;
    setCardId: (arg: string) => void;
    isOpenModal: any;
    setIsOpenModal: (arg: boolean) => void;
    isDeleteModalOpen: any;
    setIsDeleteModalOpen: (arg: boolean) => void;
};

const useDetailStore = create<detailStore>()((set) => ({
    cardId: "",
    setCardId: (arg) => set({ cardId: arg }),
    isOpenModal: false,
    setIsOpenModal: (arg) => set({ isOpenModal: arg }),
    isDeleteModalOpen: false,
    setIsDeleteModalOpen: (arg) => set({ isDeleteModalOpen: arg }),
}));

export default useDetailStore;
