import { create } from "zustand";

import type { Project } from "@/types/Projects";

type Store = {
    project: Project;
    projects: Project[];
    setProjectName: (arg: string) => void;
    setProjectImage: (arg: string[]) => void;
    setProjectIntroduce: (arg: string) => void;
    setProjectDate: (arg: string) => void;
    setProjectDeployLink: (arg: string) => void;
    setProjectGithubLink: (arg: string) => void;

    setProjects: (arg: Project) => void;
};

const useProjects = create<Store>()((set) => ({
    project: { name: "", image: [], introduce: "", date: "", githubLink: "", deployLink: "" },
    projects: [],
    setProjectName: (arg) => set((item) => ({ project: { ...item.project, name: arg } })),
    setProjectImage: (arg) => set((item) => ({ project: { ...item.project, image: arg } })),
    setProjectIntroduce: (arg) => set((item) => ({ project: { ...item.project, introduce: arg } })),
    setProjectDate: (arg) => set((item) => ({ project: { ...item.project, date: arg } })),
    setProjectDeployLink: (arg) => set((item) => ({ project: { ...item.project, deployLink: arg } })),
    setProjectGithubLink: (arg) => set((item) => ({ project: { ...item.project, githubLink: arg } })),
    setProjects: (arg) => set((item) => ({ projects: [...item.projects, arg] })),
}));

export default useProjects;
