import useCareerStore from "@/store/careerStore";
import useProjectsStore from "@/store/projectStore";
import useUserStore from "@/store/userStore";
import { Career } from "@/types/Career";
import { Project } from "@/types/Project";
import { Education } from "@/types/education";
import { QUERY_KEY } from "@/util/query_key";
import { supabasePortfolioInfoRead } from "@/util/supabase/portfolioInfo_supabase_DB";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import useEducationStore from "@/store/educationStore";
import usePortfolioInfoStore from "@/store/portfolioInfoStore";

const usePortfolioQuery = (id: string) => {
    const { setPortfolio, portfolio } = useUserStore();
    const { setInitialBasicInfo } = usePortfolioInfoStore();
    const { setProjectsInitial } = useProjectsStore();
    const { setInitialCareers } = useCareerStore();
    const { setInitialEducation } = useEducationStore();
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
        if (portfolioData) {
            setPortfolio(portfolioData[0]);
        }
    }, [setPortfolio, portfolioData]);

    useEffect(() => {
        if (portfolio) {
            const project = portfolio.project as Project[];
            if (project) {
                setProjectsInitial(project);
            }

            const career = portfolio.career as Career[];

            if (career) {
                setInitialCareers(career);
            }
            const education = portfolio.education as Education[];

            if (education) {
                setInitialEducation(education);
            }

            setInitialBasicInfo(portfolio);
        }
    }, [portfolio, setInitialBasicInfo, setProjectsInitial, setInitialCareers, setInitialEducation]);

    return { portfolio, isFetching, isError };
};

export default usePortfolioQuery;