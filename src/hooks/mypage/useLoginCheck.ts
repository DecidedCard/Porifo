import useUserStore from "@/store/userStore";
import { QUERY_KEY } from "@/util/query_key";
import { supabasePortfolioInfoRead } from "@/util/supabase/portfolioInfo_supabase_DB";
import { userData } from "@/util/supabase/supabase_user";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import usePortfolioQuery from "./usePortfolioQuery";

const useMyPage = () => {
    const { setPortfolio, setUser } = useUserStore();
    const router = useRouter();
    const { isFetching, isError, data } = useQuery({
        queryKey: [QUERY_KEY.myPageUser],
        queryFn: userData,
        retry: 0,
        refetchOnWindowFocus: false,
    });

    usePortfolioQuery(data?.id!);

    useEffect(() => {
        if (!isFetching && isError) {
            alert("로그인을 해주시기 바랍니다.");
            router.replace("/signin");
        }

        if (data) {
            setUser(data);
        }
    }, [setUser, data, isFetching, router, isError]);

    return { isFetching, isError };
};

export default useMyPage;
