import { supabase } from "@/util/supabase/clientSupabase";

export const getPortfolio = async (payload: any) => {
    const { filter, pageParam, jobFilter } = payload;

    const ITEM_PER_PAGE = 5;

    let from = pageParam * ITEM_PER_PAGE; //0
    let to = from + ITEM_PER_PAGE - 1; //6

    let query = supabase.from("portfolioInfo").select("*").eq("share", true);
    if (filter === "최신순") {
        query = query.order("created_at", { ascending: false });
    }

    if (jobFilter === "*") {
        query = query.order("created_at", { ascending: false });
        const { data } = await query.range(from, to);

        return data;
    }

    if (jobFilter === jobFilter) {
        query = query.order("created_at", { ascending: true }).eq("job", `${jobFilter}`);
    }

    const { data, error } = await query.range(from, to);

    if (error) {
        console.error(error);
        return null;
    }
    console.log(data);
    return data;
};

export const getHotDevelopers = async () => {
    let query = supabase.from("portfolioInfo").select("*").eq("share", true);
    const { data, error } = await query.order("id", { ascending: false }).range(0, 6);
    if (error) {
        console.error(error);
        return null;
    }
    return data;
};
