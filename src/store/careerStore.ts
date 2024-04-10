import { create } from "zustand";

import type { Career } from "@/types/Career";

type Store = {
    careers: Career[];
    setCompany: (arg: string, index: number) => void;
    setDepartment: (arg: string, index: number) => void;
    setPosition: (arg: string, index: number) => void;
    setDate: (arg: string, index: number) => void;
    setComment: (arg: string, index: number) => void;
    setAddCareers: () => void;
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
    careers: [initial],
    setCompany: (arg, index) =>
        set((item) => ({
            careers: [
                ...item.careers.map((career, careerIndex) => {
                    if (careerIndex === index) {
                        return { ...career, company: arg };
                    } else {
                        return { ...career };
                    }
                }),
            ],
        })),
    setDepartment: (arg, index) =>
        set((item) => ({
            careers: [
                ...item.careers.map((career, careerIndex) => {
                    if (careerIndex === index) {
                        return { ...career, department: arg };
                    } else {
                        return { ...career };
                    }
                }),
            ],
        })),
    setPosition: (arg, index) =>
        set((item) => ({
            careers: [
                ...item.careers.map((career, careerIndex) => {
                    if (careerIndex === index) {
                        return { ...career, position: arg };
                    } else {
                        return { ...career };
                    }
                }),
            ],
        })),
    setDate: (arg, index) =>
        set((item) => ({
            careers: [
                ...item.careers.map((career, careerIndex) => {
                    if (careerIndex === index) {
                        return { ...career, date: arg };
                    } else {
                        return { ...career };
                    }
                }),
            ],
        })),
    setComment: (arg, index) =>
        set((item) => ({
            careers: [
                ...item.careers.map((career, careerIndex) => {
                    if (careerIndex === index) {
                        return { ...career, comment: arg };
                    } else {
                        return { ...career };
                    }
                }),
            ],
        })),
    setAddCareers: () => set((item) => ({ careers: [...item.careers, initial] })),
    setInitialCareers: (arg) => set({ careers: arg }),
}));

export default useCareerStore;
