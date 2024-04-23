import { supabase } from "@/util/supabase/clientSupabase";

export const getPortfolio = async (payload: any) => {
    const { filter, pageParam, jobFilter } = payload;

    const ITEM_PER_PAGE = 5;

    let from = pageParam * ITEM_PER_PAGE; //0
    let to = from + ITEM_PER_PAGE - 1; //4

    let query = supabase.from("portfolioInfo").select("*").eq("share", true);
    if (filter === "최신순") {
        query = query.order("created_at", { ascending: false });
    }
    if (filter === "오래된 순") {
        query = query.order("created_at", { ascending: true });
    }
    if (filter === "인기순") {
        query = query.order("created_at", { ascending: false });
        const { data } = await query;

        let ascendingData = data?.sort((a, b) => b.likes!.length - a.likes!.length).splice(from, to);

        return ascendingData;
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
    return data;
};

export const getHotDevelopers = async () => {
    let query = supabase.from("portfolioInfo").select("*").eq("share", true);
    const { data, error } = await query.order("likes", { ascending: false });
    let ascendingData = data?.sort((a, b) => b.likes!.length - a.likes!.length).splice(0, 6);
    if (error) {
        console.error(error);
        return null;
    }

    return ascendingData;
};
