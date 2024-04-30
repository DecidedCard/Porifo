import { create } from "zustand";

type detailStore = {
    cardId: number | null;
    setCardId: (arg: number) => void;
    isOpenModal: boolean;
    setIsOpenModal: (arg: boolean) => void;
    isDeleteModalOpen: boolean;
    setIsDeleteModalOpen: (arg: boolean) => void;
    commentId: number | null;
    setCommentId: (arg: number) => void;
};

const useDetailStore = create<detailStore>()((set) => ({
    cardId: null,
    setCardId: (arg) => set({ cardId: arg }),
    isOpenModal: false,
    setIsOpenModal: (arg) => set({ isOpenModal: arg }),
    isDeleteModalOpen: false,
    setIsDeleteModalOpen: (arg) => set({ isDeleteModalOpen: arg }),
    commentId: null,
    setCommentId: (arg) => set({ commentId: arg }),
}));

export default useDetailStore;
