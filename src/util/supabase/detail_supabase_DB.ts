import { PortfolioInfo } from "@/types/PortfolioInfo";
import { supabase } from "./clientSupabase";

export const getDetailData = async (col: { id: string; value: string }) => {
    try {
        const { data: portfolioInfo, error: er } = await supabase
            .from("portfolioInfo")
            .select("*")
            .eq(col.id, col.value);
        if (er) {
            console.error(er);
            throw new Error("에러가 발생했습니다.");
        }
        const { id, viewCnt }: PortfolioInfo = portfolioInfo[0];
        console.log("viewCnt", viewCnt);
        // if () {
        //     // const { data, error } = await supabase
        //     //     .from("portfolioInfo")
        //     //     .upsert({ id: detailData.id, viewCnt: detailData.viewCnt + 1 })
        //     //     .select("*");

        // }
        console.log("portfolioInfo", portfolioInfo);

        return portfolioInfo;
    } catch (error) {
        return Promise.reject(error);
    }
};
