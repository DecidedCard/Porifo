import { useEffect, useRef } from "react";

import { useQuery } from "@tanstack/react-query";

import useCareerStore from "@/store/careerStore";
import useProjectsStore from "@/store/projectStore";
import useUserStore from "@/store/userStore";
import usePortfolioInfoStore from "@/store/portfolioInfoStore";

import { QUERY_KEY } from "@/util/query_key";
import { supabasePortfolioInfoRead } from "@/util/supabase/portfolioInfo_supabase_DB";
import { getFormattedDate } from "@/util/getformatDate";

import type { Career } from "@/types/Career";
import type { Project } from "@/types/Project";
import type { PortfolioInfo } from "@/types/PortfolioInfo";
import { Education } from "@/types/Education";
import useEducationStore from "@/store/educationStore";

const usePortfolioQuery = (id: string) => {
    const { user, setPortfolio, portfolio } = useUserStore();
    const { setInitialBasicInfo, setBirthday, setName, setTel, setEmail } = usePortfolioInfoStore();
    const { setInitialEducation } = useEducationStore();
    const { setProjectsInitial } = useProjectsStore();
    const { setInitialCareers } = useCareerStore();
    const localStorageItemRef = useRef<PortfolioInfo | null>(null);
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
            setInitialBasicInfo(portfolioData[0]);

            setPortfolio(portfolioData[0]);

            const education = portfolioData[0].education as Education[];
            if (education) {
                setInitialEducation(education);
            }

            const project = portfolioData[0].project as unknown as Project[];
            if (project) {
                setProjectsInitial(project);
            }

            const career = portfolioData[0].career as Career[];
            if (career) {
                setInitialCareers(career);
            }
        }
        if (user && !portfolio) {
            const birthDate = new Date(
                user.user_metadata.birthDate.replace("년", "-").replace("월", "-").replace("일", ""),
            );
            const formatBirthDay = getFormattedDate(birthDate)
                .replace(" ", "")
                .replace(" ", "")
                .replace(".", "-")
                .replace(".", "-")
                .replace(".", "");
            setBirthday(formatBirthDay);
            setName(user.user_metadata.name || user.user_metadata.user_name);
            if (user.user_metadata.phoneNumber) {
                setTel(user.user_metadata.phoneNumber);
            }
            setEmail(user.user_metadata.email);
        }
        const localStorageItem = JSON.parse(localStorage.getItem("portfolio")!) as PortfolioInfo;
        if (localStorageItem) {
            localStorageItemRef.current = localStorageItem;
        }
        if (localStorageItemRef.current && !portfolio) {
            const project = localStorageItemRef.current.project as unknown as Project[];
            const career = localStorageItemRef.current.career as Career[];
            const education = localStorageItemRef.current.education as Education[];

            setPortfolio({ ...localStorageItemRef.current });
            setInitialBasicInfo({ ...localStorageItemRef.current });
            if (education) {
                setInitialEducation({ ...education });
            }
            if (project) {
                setProjectsInitial([...project]);
            }
            if (career) {
                setInitialCareers([...career]);
            }
        }
    }, [
        user,
        portfolio,
        setPortfolio,
        portfolioData,
        setInitialEducation,
        setInitialCareers,
        setInitialBasicInfo,
        setProjectsInitial,
        setBirthday,
        setName,
        setTel,
        setEmail,
    ]);

    return { portfolio, isLoading, isError };
};

export default usePortfolioQuery;
