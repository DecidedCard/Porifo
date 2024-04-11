import { create } from "zustand";

import type { Project } from "@/types/Project";

type Store = {
    projects: Project[];
    setProjectName: (arg: string, index: number) => void;
    setProjectImages: (arg: string[], index: number) => void;
    setProjectImagesFile: (arg: File[], index: number) => void;
    setProjectIntroduce: (arg: string, index: number) => void;
    setProjectDate: (arg: string, index: number) => void;
    setProjectDeployLink: (arg: string, index: number) => void;
    setProjectGithubLink: (arg: string, index: number) => void;
    setAddProjects: () => void;
    setMinusProjects: (arg: number) => void;
    setProjectsInitial: (arg: Project[]) => void;
};

const initial = { name: "", images: [], imagesFile: [], introduce: "", date: "", githubLink: "", deployLink: "" };

const useProjectsStore = create<Store>()((set) => ({
    projects: [initial],
    setProjectName: (arg, index) =>
        set((item) => ({
            projects: [
                ...item.projects.map((project, idx) => {
                    if (idx === index) {
                        return { ...project, name: arg };
                    } else {
                        return { ...project };
                    }
                }),
            ],
        })),

    setProjectImages: (arg, index) =>
        set((item) => ({
            projects: [
                ...item.projects.map((project, idx) => {
                    if (idx === index) {
                        return { ...project, images: arg };
                    } else {
                        return { ...project };
                    }
                }),
            ],
        })),
    setProjectImagesFile: (arg, index) =>
        set((item) => ({
            projects: [
                ...item.projects.map((project, idx) => {
                    if (idx === index) {
                        return { ...project, imagesFile: arg };
                    } else {
                        return { ...project };
                    }
                }),
            ],
        })),
    setProjectIntroduce: (arg, index) =>
        set((item) => ({
            projects: [
                ...item.projects.map((project, idx) => {
                    if (idx === index) {
                        return { ...project, introduce: arg };
                    } else {
                        return { ...project };
                    }
                }),
            ],
        })),
    setProjectDate: (arg, index) =>
        set((item) => ({
            projects: [
                ...item.projects.map((project, idx) => {
                    if (idx === index) {
                        return { ...project, date: arg };
                    } else {
                        return { ...project };
                    }
                }),
            ],
        })),
    setProjectDeployLink: (arg, index) =>
        set((item) => ({
            projects: [
                ...item.projects.map((project, idx) => {
                    if (idx === index) {
                        return { ...project, deployLink: arg };
                    } else {
                        return { ...project };
                    }
                }),
            ],
        })),
    setProjectGithubLink: (arg, index) =>
        set((item) => ({
            projects: [
                ...item.projects.map((project, idx) => {
                    if (idx === index) {
                        return { ...project, githubLink: arg };
                    } else {
                        return { ...project };
                    }
                }),
            ],
        })),
    setAddProjects: () => set((item) => ({ projects: [...item.projects, initial] })),
    setMinusProjects: (arg) =>
        set((item) => ({
            projects: [...item.projects.filter((_, idx) => idx !== arg)],
        })),
    setProjectsInitial: (arg) => set({ projects: [...(arg || initial)] }),
}));

export default useProjectsStore;
