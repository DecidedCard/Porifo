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
    const { setInitialBasicInfo, basicInfo } = usePortfolioInfoStore();
    const { setProjectsInitial } = useProjectsStore();
    const { setInitialCareers } = useCareerStore();
    const {
        isError,
        isFetching,
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
        }
    }, [setPortfolio, portfolioData, portfolio]);

    useEffect(() => {
        if (
            portfolio &&
            !basicInfo.name &&
            !basicInfo.birthday &&
            !basicInfo.email &&
            !basicInfo.oneLineIntroduce &&
            !basicInfo.introduce
        ) {
            const project = portfolio.project as Project[];
            if (project) {
                setProjectsInitial(project);
            }

            const career = portfolio.career as Career[];

            if (career.length > 0) {
                setInitialCareers(career);
            }

            setInitialBasicInfo(portfolio);
        }
    }, [portfolio, basicInfo, setInitialBasicInfo, setProjectsInitial, setInitialCareers]);

    return { portfolio, isFetching, isError };
};

export default usePortfolioQuery;
