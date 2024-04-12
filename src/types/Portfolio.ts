import type { Project } from "./Project";

export interface Portfolio {
    id: number;
    created_at: Date;
    template: string;
    name: string;
    profileImage: string;
    introduce: string;
    birthday: string;
    tel: string;
    school: string;
    class: string;
    job: string;
    blogLink: string;
    githubLinl: string;
    project: Project[];
    share: boolean;
}
