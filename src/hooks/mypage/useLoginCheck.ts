import useUserStore from "@/store/userStore";
import { QUERY_KEY } from "@/util/query_key";
import { userData } from "@/util/supabase/supabase_user";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import usePortfolioQuery from "./usePortfolioQuery";

const useLoginCheck = () => {
    const { setUser } = useUserStore();
    const { isFetching, isError, data } = useQuery({
        queryKey: [QUERY_KEY.myPageUser],
        queryFn: userData,
        retry: 0,
        refetchOnWindowFocus: false,
    });

    useEffect(() => {
        if (data) {
            setUser(data);
        }
    }, [setUser, data]);

    return { isFetching, isError };
};

export default useLoginCheck;
