import { supabase } from "./clientSupabase";

export const supabaseInsert = async (item: any) => {
    try {
        const { data, error } = await supabase.from("portfolioInfo").insert(item).select();
        if (error) {
            console.error(error);
            throw new Error("데이터를 저장하지 못 했습니다.");
        }
        return data;
    } catch (error) {
        Promise.reject(error);
    }
};

// 특정 값을 가져오거나 아니면 전체 값을 가져올 수 있도록 작성
export const supabasePortfolioInfoRead = async (col: { id: string; value: string }) => {
    try {
        const { data: portfolioInfo, error } = await supabase.from("portfolioInfo").select("*").eq(col.id, col.value);
        if (error) {
            console.error(error);
            throw new Error("에러가 발생했습니다.");
        }
        return portfolioInfo;
    } catch (error) {
        return Promise.reject(error);
    }
};