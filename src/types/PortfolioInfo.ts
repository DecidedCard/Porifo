import type { Career } from "./Career";
import type { Project } from "./Project";
import { Json } from "./Supabase";

export interface PortfolioInfo {
    id?: number;
    created_at?: string;
    template: string | null;
    name: string | null;
    englishName: string | null;
    profileImage: string | null;
    imageFile?: File | null;
    birthday: string | null;
    tel: string | null;
    email: string | null;
    school: string | null;
    class: string | null;
    oneLineIntroduce: string | null;
    introduce: string | null;
    job: string | null;
    blogLink: string | null;
    githubLink: string | null;
    project?: Project[] | Json;
    share: boolean | null;
    career: Career[] | Json;
}
