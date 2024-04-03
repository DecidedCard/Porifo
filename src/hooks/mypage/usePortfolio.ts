import { supabaseRead } from "@/util/supabase/supabase_DB";
import { useQuery } from "@tanstack/react-query";

const usePortfolio = (id: string) => {
    const queryKey = ["mypage/portfolio"];
    const {
        isError,
        isFetching,
        data: portfolio,
    } = useQuery({
        queryKey,
        queryFn: () => supabaseRead("portfolioInfo", { id: "id", value: id }),
        retry: 0,
        refetchOnWindowFocus: false,
    });

    return { portfolio, isFetching, isError };
};

export default usePortfolio;
