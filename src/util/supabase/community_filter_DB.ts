import { supabase } from "@/util/supabase/clientSupabase";

export const getPortfolio = async (payload: any) => {
    const { filter, jobFilter, getFromAndTo, page, setPage } = payload;
    const { from, to } = getFromAndTo();

    let query = supabase.from("portfolioInfo").select("*");
    if (filter === "최신순") {
        query = query.order("id", { ascending: false });
    }
    // if (filter === "오래된 순") {
    //     query = query.order("id", { ascending: true });
    // }
    if (jobFilter === "*") {
        const { data } = await query.range(from, to);
        setPage(page + 1);
        return data;
    }

    if (jobFilter) {
        query = query.order("id", { ascending: true }).eq("job", `${jobFilter}`);
    }

    const { data, error } = await query.range(from, to);
    setPage(page + 1);

    if (error) {
        console.error(error);
        return null;
    }
    return data;
};

export const getHotDevelopers = async () => {
    let query = supabase.from("portfolioInfo").select("*");
    const { data, error } = await query.order("id", { ascending: false }).range(0, 6);
    if (error) {
        console.error(error);
        return null;
    }
    return data;
};
