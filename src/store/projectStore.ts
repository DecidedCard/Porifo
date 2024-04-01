import { create } from "zustand";

import type { Project } from "@/types/project";

type Store = {
    projects: Project[];
    setProjects: (arg: Project) => void;
};

const useProjects = create<Store>()((set) => ({
    projects: [],
    setProjects: (arg) => set((item) => ({ projects: [...item.projects, arg] })),
}));

export default useProjects;
