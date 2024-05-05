import { PortfolioInfo } from "@/types/PortfolioInfo";
import { supabase } from "./clientSupabase";

export const supabaseInsert = async (item: any) => {
    try {
        const { data, error } = await supabase.from("portfolioInfo").insert(item).select();
        if (error) {
            console.error(error);
            throw new Error(error.message);
        }
        return data;
    } catch (error) {
        Promise.reject(error);
    }
};

// 특정 값을 가져오거나 아니면 전체 값을 가져올 수 있도록 작성
export const supabasePortfolioInfoRead = async (col: { id: string; value: string }) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/portfolio/myPage`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id: col.id, value: col.value }),
        });
        const res = await response.json();
        return res.data;
    } catch (error) {
        console.log(error);
        return Promise.reject(error);
    }
};

export const supabasePortfolioUpdate = async (col: { arg: PortfolioInfo; value: string }) => {
    try {
        const { project, ...info } = col.arg;

        const { error } = await supabase
            .from("portfolioInfo")
            .update({ ...info, project: JSON.parse(JSON.stringify(project)) })
            .eq("userId", col.value);
        if (error) {
            console.error(error);
            throw new Error("업데이트를 하지 못했습니다.");
        }
    } catch (error) {
        Promise.reject(error);
    }
};
