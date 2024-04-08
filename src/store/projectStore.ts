import { create } from "zustand";

import type { Project } from "@/types/Project";

type Store = {
    project: Project;
    projects: Omit<Project, "imagesFile">[];
    setProjectName: (arg: string) => void;
    setProjectImages: (arg: string[]) => void;
    setProjectImagesFile: (arg: File[]) => void;
    setProjectIntroduce: (arg: string) => void;
    setProjectDate: (arg: string) => void;
    setProjectDeployLink: (arg: string) => void;
    setProjectGithubLink: (arg: string) => void;
    setReset: () => void;
    setProjects: (arg: Project) => void;
    setProjectsInitial: (arg: Project[]) => void;
};

const initial = { name: "", images: [], imagesFile: [], introduce: "", date: "", githubLink: "", deployLink: "" };

const useProjectsStore = create<Store>()((set) => ({
    project: initial,
    projects: [],
    setProjectName: (arg) => set((item) => ({ project: { ...item.project, name: arg } })),
    setProjectImages: (arg) => set((item) => ({ project: { ...item.project, images: arg } })),
    setProjectImagesFile: (arg) => set((item) => ({ project: { ...item.project, imagesFile: arg } })),
    setProjectIntroduce: (arg) => set((item) => ({ project: { ...item.project, introduce: arg } })),
    setProjectDate: (arg) => set((item) => ({ project: { ...item.project, date: arg } })),
    setProjectDeployLink: (arg) => set((item) => ({ project: { ...item.project, deployLink: arg } })),
    setProjectGithubLink: (arg) => set((item) => ({ project: { ...item.project, githubLink: arg } })),
    setReset: () => set({ project: initial }),
    setProjects: (arg) => set((item) => ({ projects: [...item.projects, arg] })),
    setProjectsInitial: (arg) => set({ projects: [...arg] }),
}));

export default useProjectsStore;
