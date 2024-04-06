import useUserStore from "@/store/userStore";
import { QUERY_KEY } from "@/util/query_key";
import { supabasePortfolioInfoRead } from "@/util/supabase/portfolioInfo_supabase_DB";
import { userData } from "@/util/supabase/supabase_user";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const useMyPage = async () => {
    const { setPortfolio, setUser } = useUserStore();
    const router = useRouter();
    const { isFetching, isError, data } = useQuery({
        queryKey: [QUERY_KEY.myPageUser],
        queryFn: userData,
        retry: 0,
        refetchOnWindowFocus: false,
    });

    useEffect(() => {
        if (!isFetching && isError) {
            alert("로그인을 해주시기 바랍니다.");
            router.replace("/signin");
        }

        if (data) {
            const set = async () => {
                try {
                    setUser(data);

                    const portfolio = await supabasePortfolioInfoRead({ id: "userId", value: data.id });
                    setPortfolio(portfolio[0]);
                } catch (error) {
                    return error;
                }
            };
            set();
        }
    }, [setUser, setPortfolio, data, isFetching, router, isError]);
};

export default useMyPage;
