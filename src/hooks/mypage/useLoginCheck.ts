import { useEffect } from "react";

import useUserStore from "@/store/userStore";

import { QUERY_KEY } from "@/util/query_key";
import { userData } from "@/util/supabase/supabase_user";

import { useQuery } from "@tanstack/react-query";
import useUserCheck from "../useUserCheck";

const useLoginCheck = () => {
    const { setUser } = useUserStore();
    const user = useUserCheck();

    useEffect(() => {
        if (user) {
            setUser({
                ...user,
                user_metadata: {
                    ...user.user_metadata,
                    profileImage:
                        user.user_metadata.profileImage || user.user_metadata.picture || user.user_metadata.avatar_url,
                },
            });
        }
    }, [setUser, user]);
    console.log(user);

    return { user };
};

export default useLoginCheck;
