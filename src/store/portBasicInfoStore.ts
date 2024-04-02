import { create } from "zustand";

import type { BasicInfo } from "@/types/BasicInfo";

type Store = {
    basicInfo: BasicInfo;
    setName: (arg: string) => void;
    setProfile: (arg: string) => void;
    setBirthday: (arg: string) => void;
    setTel: (arg: string) => void;
    setSchool: (arg: string) => void;
    setClass: (arg: string) => void;
    setIntroduce: (arg: string) => void;
    setJob: (arg: string) => void;
    setBlog: (arg: string) => void;
    setGithub: (arg: string) => void;
};

const initial = {
    name: "",
    profile: "",
    birthday: "",
    tel: "",
    school: "",
    class: "",
    introduce: "",
    job: "",
    blog: "",
    github: "",
};

const useBasicInfo = create<Store>()((set) => ({
    basicInfo: initial,
    setName: (arg) => set((state) => ({ basicInfo: { ...state.basicInfo, name: arg } })),
    setProfile: (arg) => set((state) => ({ basicInfo: { ...state.basicInfo, profile: arg } })),
    setBirthday: (arg) => set((state) => ({ basicInfo: { ...state.basicInfo, birthday: arg } })),
    setTel: (arg) => set((state) => ({ basicInfo: { ...state.basicInfo, tel: arg } })),
    setSchool: (arg) => set((state) => ({ basicInfo: { ...state.basicInfo, school: arg } })),
    setClass: (arg) => set((state) => ({ basicInfo: { ...state.basicInfo, class: arg } })),
    setIntroduce: (arg) => set((state) => ({ basicInfo: { ...state.basicInfo, introduce: arg } })),
    setJob: (arg) => set((state) => ({ basicInfo: { ...state.basicInfo, job: arg } })),
    setBlog: (arg) => set((state) => ({ basicInfo: { ...state.basicInfo, blog: arg } })),
    setGithub: (arg) => set((state) => ({ basicInfo: { ...state.basicInfo, github: arg } })),
}));

export default useBasicInfo;
