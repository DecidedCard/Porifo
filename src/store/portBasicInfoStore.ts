import { create } from "zustand";

import type { BasicInfo } from "@/types/BasicInfo";

type Store = {
    basicInfo: BasicInfo;
    setBasicInfo: (arg: any) => void;
};

const initial = {
    name: "",
    profile: "",
    birthday: "",
    tel: "",
    school: "",
    class: "",
    introduce: "",
};

const useBasicInfo = create<Store>()((set) => ({
    basicInfo: initial,
    setBasicInfo: (arg) => set((state) => ({ basicInfo: { ...state.basicInfo, arg } })),
}));
