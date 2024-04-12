"use client";
import useCardIdStore from "@/store/detailStore";
import { QUERY_KEY } from "@/util/query_key";
import { getComments } from "@/util/supabase/supabase_comments";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const Comments = () => {
    const { cardId: id } = useCardIdStore();
    const { data, isPending } = useQuery({
        queryKey: [QUERY_KEY.portfolidComments],
        queryFn: () => getComments({ id }),
    });

    if (isPending) {
        return <div>로딩중</div>;
    }
    return <div>Comments</div>;
};

export default Comments;
