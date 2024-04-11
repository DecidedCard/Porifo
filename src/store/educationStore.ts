import { Education } from "@/types/education";
import { create } from "zustand";

type Store = {
    education: Education[];
    setSchool: (arg: string, index: number) => void;
    setClass: (arg: string, index: number) => void;
    setDate: (arg: string, index: number) => void;
    setAddEducation: () => void;
    setMinusEducation: (arg: number) => void;
    setInitialEducation: (arg: Education[]) => void;
};

const initial: Education = {
    school: "",
    class: "",
    date: "",
};

const useEducationStore = create<Store>()((set) => ({
    education: [initial],
    setSchool: (arg, index) =>
        set((item) => ({
            education: [
                ...item.education.map((education, educationIndex) => {
                    if (educationIndex === index) {
                        return { ...education, school: arg };
                    } else {
                        return { ...education };
                    }
                }),
            ],
        })),
    setClass: (arg, index) =>
        set((item) => ({
            education: [
                ...item.education.map((education, educationIndex) => {
                    if (educationIndex === index) {
                        return { ...education, class: arg };
                    } else {
                        return { ...education };
                    }
                }),
            ],
        })),
    setDate: (arg, index) =>
        set((item) => ({
            education: [
                ...item.education.map((education, educationIndex) => {
                    if (educationIndex === index) {
                        return { ...education, date: arg };
                    } else {
                        return { ...education };
                    }
                }),
            ],
        })),
    setAddEducation: () => set((item) => ({ education: [...item.education, initial] })),
    setMinusEducation: (arg) => set((item) => ({ education: [...item.education.filter((_, idx) => idx !== arg)] })),
    setInitialEducation: (arg) => set({ education: [...arg] }),
}));

export default useEducationStore;
