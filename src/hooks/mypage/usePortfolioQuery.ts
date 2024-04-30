import { useEffect } from "react";

import { useQuery } from "@tanstack/react-query";

import useCareerStore from "@/store/careerStore";
import useProjectsStore from "@/store/projectStore";
import useUserStore from "@/store/userStore";
import usePortfolioInfoStore from "@/store/portfolioInfoStore";

import { QUERY_KEY } from "@/util/query_key";
import { supabasePortfolioInfoRead } from "@/util/supabase/portfolioInfo_supabase_DB";

import type { Career } from "@/types/Career";
import type { Project } from "@/types/Project";

const usePortfolioQuery = (id: string) => {
    const { setPortfolio, portfolio } = useUserStore();
    const { setInitialBasicInfo } = usePortfolioInfoStore();
    const { setProjectsInitial } = useProjectsStore();
    const { setInitialCareers } = useCareerStore();
    const {
        isError,
        isLoading,
        data: portfolioData,
    } = useQuery({
        queryKey: [QUERY_KEY.myPagePortfolio],
        queryFn: () => supabasePortfolioInfoRead({ id: "userId", value: id }),
        enabled: !!id,
        retry: 0,
        refetchOnWindowFocus: false,
    });

    useEffect(() => {
        if (portfolioData && portfolioData?.length !== 0) {
            setPortfolio(portfolioData[0]);

            const project = portfolioData[0].project as unknown as Project[];
            setProjectsInitial(project);

            const career = portfolioData[0].career as Career[];
            setInitialCareers(career);

            setInitialBasicInfo(portfolioData[0]);
        }
    }, [setPortfolio, portfolioData, setInitialCareers, setInitialBasicInfo, setProjectsInitial]);

    return { portfolio, isLoading, isError };
};

export default usePortfolioQuery;
