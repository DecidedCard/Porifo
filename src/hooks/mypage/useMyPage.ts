import useUser from "@/store/userStore";
import { userData } from "@/util/supabase/supabase_user";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const useMyPage = async () => {
    const { setUser } = useUser();
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
    }, [setUser, data, isFetching, router, isError]);
};

export default useMyPage;
