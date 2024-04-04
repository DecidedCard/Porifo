import useUser from "@/store/userStore";
import { supabasePortfolioInfoRead } from "@/util/supabase/portfolioInfo_supabase_DB";
import { userData } from "@/util/supabase/supabase_user";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const useMyPage = async () => {
    const { user, setPortfolio, setUser } = useUser();
    const router = useRouter();
    const queryKey = ["myPage/user"];
    const { isFetching, isError, data } = useQuery({
        queryKey,
        queryFn: userData,
        retry: 0,
        refetchOnWindowFocus: false,
    });

    useEffect(() => {
        setUser(data);
        if (!isFetching && isError) {
            alert("로그인을 해주시기 바랍니다.");
            router.replace("/signin");
        }

        if (user) {
            const set = async () => {
                try {
                    const portfolio = await supabasePortfolioInfoRead({ id: "userId", value: user.id });
                    setPortfolio(portfolio[0]);
                } catch (error) {
                    return error;
                }
            };
            set();
        }
    }, [setUser, setPortfolio, data, user, isFetching, router, isError]);
};

export default useMyPage;
