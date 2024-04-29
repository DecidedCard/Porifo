import { useEffect } from "react";

import useUserStore from "@/store/userStore";

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

    return { user };
};

export default useLoginCheck;
