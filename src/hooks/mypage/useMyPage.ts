import useUser from "@/store/userStore";
import { userData } from "@/util/supabase/supabase_user";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

const useMyPage = async () => {
    const { setUser } = useUser();
    const queryKey = ["myPage/user"];
    const { data } = useQuery({ queryKey, queryFn: userData, retry: 0, refetchOnWindowFocus: false });

    useEffect(() => {
        setUser(data);
    }, [setUser, data]);
};

export default useMyPage;
