import { QUERY_KEY } from "@/util/query_key";
import serverUserCheck from "@/util/serverUserCheck";
import { createClient } from "@/util/supabase/server";
import { User } from "@supabase/supabase-js";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const useUserCheck = () => {
    const queryClient = useQueryClient();
    const supabase = createClient();
    const { data: user } = useQuery({
        queryKey: [QUERY_KEY.myPageUser],
        queryFn: () => serverUserCheck(supabase),
        initialData: queryClient.getQueryData([QUERY_KEY.myPageUser]) as User,
    });
    console.log(user);
};

export default useUserCheck;
