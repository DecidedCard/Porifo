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

    setProjects: (arg: Project) => void;
};

const useProjects = create<Store>()((set) => ({
    project: { name: "", images: [], imagesFile: [], introduce: "", date: "", githubLink: "", deployLink: "" },
    projects: [],
    setProjectName: (arg) => set((item) => ({ project: { ...item.project, name: arg } })),
    setProjectImages: (arg) => set((item) => ({ project: { ...item.project, images: arg } })),
    setProjectImagesFile: (arg) => set((item) => ({ project: { ...item.project, imagesFile: arg } })),
    setProjectIntroduce: (arg) => set((item) => ({ project: { ...item.project, introduce: arg } })),
    setProjectDate: (arg) => set((item) => ({ project: { ...item.project, date: arg } })),
    setProjectDeployLink: (arg) => set((item) => ({ project: { ...item.project, deployLink: arg } })),
    setProjectGithubLink: (arg) => set((item) => ({ project: { ...item.project, githubLink: arg } })),
    setProjects: (arg) => set((item) => ({ projects: [...item.projects, arg] })),
}));

export default useProjects;
