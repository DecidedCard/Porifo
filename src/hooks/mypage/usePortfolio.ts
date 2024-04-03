import { supabasePortfolioInfoRead } from "@/util/supabase/supabase_DB";
import { useQuery } from "@tanstack/react-query";

import type { Portfolio } from "@/types/Portfolio";

const usePortfolio = (id: string) => {
    const queryKey = ["mypage/portfolio"];
    const {
        isError,
        isFetching,
        data: portfolio,
    } = useQuery({
        queryKey,
        queryFn: () => supabasePortfolioInfoRead({ id: "id", value: id }),
        retry: 0,
        refetchOnWindowFocus: false,
    });

    return { portfolio, isFetching, isError };
};

export default usePortfolio;
