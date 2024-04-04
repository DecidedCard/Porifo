import { supabase } from "@/util/supabase/clientSupabase";

export const getPortfolio = async (payload: any) => {
    const { getFromAndTo, filter, page, setPage, jobFilter, setJobFilter } = payload;
    const { from, to } = getFromAndTo();

    let query = supabase.from("portfolioInfo").select("*");

    if (filter === "최신순") {
        console.log("filter 실행됨");
        query = query.order("id", { ascending: false });
    }

    if (jobFilter) {
        console.log("jobFilter 실행됨");
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
