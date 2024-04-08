import { Career } from "@/types/Career";
import { create } from "zustand";

type Store = {
    career: Career;
    careers: Career[];
    setCompany: (arg: string) => void;
    setDepartment: (arg: string) => void;
    setPosition: (arg: string) => void;
    setDate: (arg: string) => void;
    setComment: (arg: string) => void;
    setCareers: (arg: Career) => void;
    setResetCareer: () => void;
    setInitialCareers: (arg: Career[]) => void;
};

const initial: Career = {
    company: "",
    department: "",
    position: "",
    date: "",
    comment: "",
};

const useCareerStore = create<Store>()((set) => ({
    career: initial,
    careers: [],
    setCompany: (arg) => set((state) => ({ career: { ...state.career, company: arg } })),
    setDepartment: (arg) => set((state) => ({ career: { ...state.career, department: arg } })),
    setPosition: (arg) => set((state) => ({ career: { ...state.career, position: arg } })),
    setDate: (arg) => set((state) => ({ career: { ...state.career, date: arg } })),
    setComment: (arg) => set((state) => ({ career: { ...state.career, comment: arg } })),
    setCareers: (arg) => set((state) => ({ careers: [...state.careers, arg] })),
    setResetCareer: () => set({ career: initial }),
    setInitialCareers: (arg) => set({ careers: arg }),
}));

export default useCareerStore;
