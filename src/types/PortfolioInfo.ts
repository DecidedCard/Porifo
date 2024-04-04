import type { Project } from "./Project";
import { Json } from "./Supabase";

export interface PortfolioInfo {
    id?: number;
    created_at?: string;
    template: string | null;
    name: string | null;
    profileImage: string | null;
    imageFile?: File | null;
    birthday: string | null;
    tel: string | null;
    school: string | null;
    class: string | null;
    introduce: string | null;
    job: string | null;
    blogLink: string | null;
    githubLink: string | null;
    project?: Project[] | Json;
    share: boolean | null;
}
