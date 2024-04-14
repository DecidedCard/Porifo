"use client";
import useCardIdStore from "@/store/detailStore";
import { QUERY_KEY } from "@/util/query_key";
import { getComments } from "@/util/supabase/supabase_comments";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import CommentInput from "./CommentInput";
import useUserStore from "@/store/userStore";
import { userData } from "@/util/supabase/supabase_user";

const Comments = () => {
    const { cardId: id } = useCardIdStore();
    const { user } = useUserStore();
    const { data, isPending } = useQuery({
        queryKey: [QUERY_KEY.portfolidComments],
        queryFn: () => getComments({ id }),
    });

    if (isPending) {
        return <div>로딩중</div>;
    }
    return (
        <>
            <div className="bg-gray-1 w-[80%] rounded-2xl flex flex-col gap-5 pb-10">
                <CommentInput user={user} id={id} />
                <div className="border-[1px] border-solid border-gray2" />
                {/* 댓글리스트 */}
                {data?.length === 0 ? (
                    <div>댓글이 없어요</div>
                ) : (
                    data?.map((item) => {
                        return (
                            <div className="flex gap-3">
                                {/* profileImage */}
                                <img
                                    className="rounded-[50px] w-10 h-10 object-cover"
                                    src="https://heurm-tutorial.vlpt.us/images/default_thumbnail.png"
                                />
                                <div className="flex flex-col gap-1 flex-1 ">
                                    <div className="flex flex-row gap-2 items-center">
                                        <span>
                                            {/* user_name */}
                                            {item.user_name}
                                        </span>
                                        <span>
                                            {/* 몇일됬는지 */}
                                            {item.created_at}
                                        </span>
                                    </div>
                                    <div className="flex gap-2">
                                        <span>
                                            {/* comment */}
                                            {item.comment}
                                        </span>
                                    </div>
                                </div>
                                {/* 삭제버튼 */}
                                <img className="cursor-pointer" src="grayClose.svg" />
                            </div>
                        );
                    })
                )}
            </div>
        </>
    );
};

export default Comments;
