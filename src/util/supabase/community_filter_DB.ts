import { supabase } from "@/util/supabase/clientSupabase";

let query = supabase.from("portfolioInfo").select("*");

export const getPortfolio = async (payload: any) => {
    const { filter, jobFilter, getFromAndTo, page, setPage } = payload;
    const { from, to } = getFromAndTo();

    if (filter === "최신순") {
        query = query.order("id", { ascending: false });
    }
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
    const { data, error } = await query.order("id", { ascending: false }).range(0, 3);
    if (error) {
        console.error(error);
        return null;
    }
    return data;
};
