import { create } from "zustand";

import type { PortfolioInfo } from "@/types/PortfolioInfo";

type Store = {
    basicInfo: PortfolioInfo;
    setTemplate: (arg: string) => void;
    setName: (arg: string) => void;
    setEngName: (arg: string) => void;
    setProfile: (arg: string) => void;
    setImageFile: (arg: File) => void;
    setBirthday: (arg: string) => void;
    setTel: (arg: string) => void;
    setEmail: (arg: string) => void;
    setOneLineIntroduce: (arg: string) => void;
    setIntroduce: (arg: string) => void;
    setJob: (arg: string) => void;
    setBlog: (arg: string) => void;
    setGithub: (arg: string) => void;
};

const initial = {
    template: "standard",
    name: "",
    englishName: "",
    profileImage: "",
    imageFile: null,
    birthday: "",
    tel: "",
    email: "",
    education: [],
    oneLineIntroduce: "",
    introduce: "",
    job: "",
    blogLink: "",
    githubLink: "",
    share: false,
    career: [],
};

const usePortfolioInfoStore = create<Store>()((set) => ({
    basicInfo: initial,
    setTemplate: (arg) => set((state) => ({ basicInfo: { ...state.basicInfo, template: arg } })),
    setName: (arg) => set((state) => ({ basicInfo: { ...state.basicInfo, name: arg } })),
    setEngName: (arg) => set((state) => ({ basicInfo: { ...state.basicInfo, englishName: arg } })),
    setProfile: (arg) => set((state) => ({ basicInfo: { ...state.basicInfo, profileImage: arg } })),
    setImageFile: (arg) => set((state) => ({ basicInfo: { ...state.basicInfo, imageFile: arg } })),
    setBirthday: (arg) => set((state) => ({ basicInfo: { ...state.basicInfo, birthday: arg } })),
    setTel: (arg) => set((state) => ({ basicInfo: { ...state.basicInfo, tel: arg } })),
    setEmail: (arg) => set((state) => ({ basicInfo: { ...state.basicInfo, email: arg } })),
    setOneLineIntroduce: (arg) => set((state) => ({ basicInfo: { ...state.basicInfo, oneLineIntroduce: arg } })),
    setIntroduce: (arg) => set((state) => ({ basicInfo: { ...state.basicInfo, introduce: arg } })),
    setJob: (arg) => set((state) => ({ basicInfo: { ...state.basicInfo, job: arg } })),
    setBlog: (arg) => set((state) => ({ basicInfo: { ...state.basicInfo, blogLink: arg } })),
    setGithub: (arg) => set((state) => ({ basicInfo: { ...state.basicInfo, githubLink: arg } })),
}));

export default usePortfolioInfoStore;
