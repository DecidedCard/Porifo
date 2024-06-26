import type { Career } from "./Career";
import type { Education } from "./Education";
import type { Project } from "./Project";
import type { Json } from "./Supabase";

export interface PortfolioInfo {
    id?: number;
    created_at?: string;
    template: string | null;
    name: string | null;
    englishName: string | null;
    profileImage: string | null;
    imageFile?: File | null;
    birthday: string | null;
    email: string | null;
    tel: string | null;
    oneLineIntroduce: string | null;
    introduce: string | null;
    skillTag: string[] | Json;
    job: string | null;
    blogLink: string | null;
    githubLink: string | null;
    project?: Project[] | Json;
    share: boolean | null;
    userId: string | null;
    career: Career[] | Json;
    education: Education[] | Json;
    viewCnt: number | null;
    likes: string[] | null;
    likesCnt: number | null;
}
