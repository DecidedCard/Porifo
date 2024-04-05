import { QUERY_KEY } from "@/util/queryKey";
import { supabasePortfolioInfoRead } from "@/util/supabase/portfolioInfo_supabase_DB";
import { useQuery } from "@tanstack/react-query";

const usePortfolio = (id: string) => {
    const {
        isError,
        isFetching,
        data: portfolio,
    } = useQuery({
        queryKey: [QUERY_KEY.myPagePortfolio],
        queryFn: () => supabasePortfolioInfoRead({ id: "userId", value: id }),
        retry: 0,
        refetchOnWindowFocus: false,
    });

    return { portfolio, isFetching, isError };
};

export default usePortfolio;
