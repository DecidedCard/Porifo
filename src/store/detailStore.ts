import { create } from "zustand";

type detailStore = {
    cardId: any;
    setCardId: (arg: string) => void;
    isOpenModal: any;
    setIsOpenModal: (arg: boolean) => void;
    isDeleteModalOpen: any;
    setIsDeleteModalOpen: (arg: boolean) => void;
    commentId: any;
    setCommentId: (arg: number) => void;
};

const useDetailStore = create<detailStore>()((set) => ({
    cardId: "",
    setCardId: (arg) => set({ cardId: arg }),
    isOpenModal: false,
    setIsOpenModal: (arg) => set({ isOpenModal: arg }),
    isDeleteModalOpen: false,
    setIsDeleteModalOpen: (arg) => set({ isDeleteModalOpen: arg }),
    commentId: null,
    setCommentId: (arg) => set({ commentId: arg }),
}));

export default useDetailStore;
