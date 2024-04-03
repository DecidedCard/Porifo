import { supabasePortfolioInfoRead } from "@/util/supabase/supabase_DB";
import { useQuery } from "@tanstack/react-query";

import type { Portfolio } from "@/types/Portfolio";
import { useState } from "react";

const usePortfolio = (id: string) => {
    const [info, setInfo] = useState();
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
