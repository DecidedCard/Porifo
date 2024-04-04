import { supabase } from "@/util/supabase/clientSupabase";

export const getPortfolio = async (payload: any) => {
    const { getFromAndTo, filter, page, setPage, jobFilter } = payload;
    const { from, to } = getFromAndTo();

    if (filter === "기본순") {
        const { data, error } = await supabase.from("portfolioInfo").select("*").range(from, to);
        setPage(page + 1);
        if (jobFilter) {
            const { data, error } = await supabase
                .from("portfolioInfo")
                .select("*")
                .eq("job", `${jobFilter}`)
                .range(from, to);
            setPage(page + 1);
            if (error) {
                console.error(error);
            }
            return data;
        }
        if (error) {
            console.error(error);
        }
        return data;
    }
    if (filter === "최신순") {
        const { data, error } = await supabase
            .from("portfolioInfo")
            .select("*")
            .order("id", { ascending: false })
            .range(from, to);
        setPage(page + 1);
        if (jobFilter) {
            const { data, error } = await supabase
                .from("portfolioInfo")
                .select("*")
                .eq("job", `${jobFilter}`)
                .order("id", { ascending: false })
                .range(from, to);
            setPage(page + 1);
            if (error) {
                console.error(error);
            }
            return data;
        }
        if (error) {
            console.error(error);
        }
        return data;
    }
};
