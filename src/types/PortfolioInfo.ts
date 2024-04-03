import type { Project } from "./Project";

export interface PortfolioInfo {
    id?: number;
    created_at?: Date;
    template: string;
    name: string;
    profileImage: string;
    imageFile: File | null;
    birthday: string;
    tel: string;
    school: string;
    class: string;
    introduce: string;
    job: string;
    blogLink: string;
    githubLink: string;
    project?: Project[];
    share: boolean;
}
