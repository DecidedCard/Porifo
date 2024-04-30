import { useQuery, useQueryClient } from "@tanstack/react-query";

import { QUERY_KEY } from "@/util/query_key";
import serverUserCheck from "@/util/serverUserCheck";
import serverClient from "@/util/supabase/serverClient";

import type { User } from "@supabase/supabase-js";

const useUserCheck = () => {
    const queryClient = useQueryClient();
    const supabase = serverClient();
    const { data: user } = useQuery({
        queryKey: [QUERY_KEY.myPageUser],
        queryFn: () => serverUserCheck(supabase),
        initialData: queryClient.getQueryData([QUERY_KEY.myPageUser]) as User,
        retry: 0,
        refetchOnWindowFocus: false,
    });
    return user;
};

export default useUserCheck;
