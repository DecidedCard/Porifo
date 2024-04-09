import { supabase } from "@/util/supabase/clientSupabase";

export const getPortfolio = async (payload: any) => {
    const { getFromAndTo, filter, page, setPage, jobFilter } = payload;
    const { from, to } = getFromAndTo();

    let query = supabase.from("portfolioInfo").select("*");

    if (filter === "최신순") {
        query = query.order("id", { ascending: false });
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
