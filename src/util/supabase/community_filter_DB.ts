import { supabase } from "@/util/supabase/clientSupabase";

export const getPortfolio = async (payload: any) => {
    const { filter, jobFilter, getFromAndTo, page, setPage } = payload;
    const { from, to } = getFromAndTo();

    let query = supabase.from("portfolioInfo").select("*").eq("share", true);
    if (filter === "최신순") {
        query = query.order("created_at", { ascending: false });
    }

    if (jobFilter === "*") {
        const { data } = await query.range(from, to);
        setPage(page + 1);
        return data;
    }

    if (jobFilter) {
        query = query.order("created_at", { ascending: true }).eq("job", `${jobFilter}`);
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
    let query = supabase.from("portfolioInfo").select("*").eq("share", true);
    const { data, error } = await query.order("id", { ascending: false }).range(0, 6);
    if (error) {
        console.error(error);
        return null;
    }
    return data;
};
