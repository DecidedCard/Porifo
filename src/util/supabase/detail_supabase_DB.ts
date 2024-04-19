import { PortfolioInfo } from "@/types/PortfolioInfo";
import { supabase } from "./clientSupabase";

export const getDetailData = async (col: { id: string; value: string }) => {
    try {
        const { data: portfolioInfo } = await supabase.from("portfolioInfo").select("*").eq(col.id, col.value);

        const { id, viewCnt }: PortfolioInfo = portfolioInfo![0];

        const { error } = await supabase
            .from("portfolioInfo")
            .update({ viewCnt: viewCnt! + 1 })
            .eq("id", id);
        if (error) {
            console.error(error);
            throw new Error("에러가 발생했습니다.");
        }

        return portfolioInfo;
    } catch (error) {
        return Promise.reject(error);
    }
};

//likes
export const getLikes = async (col: { id: string; value: string }) => {
    try {
        const { data: likesInfo } = await supabase.from("portfolioInfo").select("*").eq(col.id, col.value);

        const { likes } = likesInfo![0];

        return likes;
    } catch (error) {
        return Promise.reject(error);
    }
};

export const addLike = async (payload: any) => {
    const { id, user_email } = payload;
    const { data, error } = await supabase.from("portfolioInfo").update({ likes: user_email }).eq("id", id);
    if (error) {
        console.error(error);
        return null;
    }
    return data;
};
