import React from "react";

import { HydrationBoundary, dehydrate } from "@tanstack/react-query";

import cacheQueryClient from "@/util/cacheQueryClient";
import { QUERY_KEY } from "@/util/query_key";
import serverUserCheck from "@/util/serverUserCheck";
import { createClient } from "@/util/supabase/server";

import type { User } from "@supabase/supabase-js";

const Prefetch = async ({ children }: { children: React.ReactNode }) => {
    const queryClient = cacheQueryClient();
    const supabase = createClient();
    await queryClient.prefetchQuery<User | null>({
        queryKey: [QUERY_KEY.myPageUser],
        queryFn: () => serverUserCheck(supabase),
        retry: 0,
    });

    return <HydrationBoundary state={dehydrate(queryClient)}>{children}</HydrationBoundary>;
};

export default Prefetch;
