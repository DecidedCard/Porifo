import { useEffect } from "react";

import useUserStore from "@/store/userStore";

import { QUERY_KEY } from "@/util/query_key";
import { userData } from "@/util/supabase/supabase_user";

import { useQuery } from "@tanstack/react-query";

const useLoginCheck = () => {
    const { user, setUser } = useUserStore();
    const { isFetching, isError, data } = useQuery({
        queryKey: [QUERY_KEY.myPageUser],
        queryFn: userData,
        retry: 0,
        refetchOnWindowFocus: false,
    });

    useEffect(() => {
        if (data) {
            setUser({
                ...data,
                user_metadata: {
                    ...data.user_metadata,
                    profileImage:
                        data.user_metadata.profileImage || data.user_metadata.picture || data.user_metadata.avatar_url,
                },
            });
        }
    }, [setUser, data]);

    return { user, data, isFetching, isError };
};

export default useLoginCheck;
