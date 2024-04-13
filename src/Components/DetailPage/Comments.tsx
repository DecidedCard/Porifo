"use client";
import useCardIdStore from "@/store/detailStore";
import { QUERY_KEY } from "@/util/query_key";
import { getComments } from "@/util/supabase/supabase_comments";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import CommentInput from "./CommentInput";

const Comments = () => {
    const { cardId: id } = useCardIdStore();
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
                <CommentInput />
                <div className="border-[1px] border-solid border-gray2" />
                {/* 댓글리스트 */}
                <div className="flex flex-row gap-3 items-start justify-start self-stretch shrink-0 relative">
                    {/* profileImage */}
                    <img className="rounded-[50px] shrink-0 w-10 h-10 relative object-cover" src="rectangle1.png" />
                    <div className="flex flex-col gap-1 items-start justify-start flex-1 relative">
                        <div className="flex flex-row gap-2 items-center justify-start shrink-0 relative">
                            <div className="text-graytext-5 text-left font-body-p8m-font-family text-body-p8m-font-size leading-body-p8m-line-height font-body-p8m-font-weight relative flex items-center justify-start">
                                {/* user_name */}
                                Dora
                            </div>
                            <div className="text-graytext-4 text-left font-body-p9r-font-family text-body-p9r-font-size leading-body-p9r-line-height font-body-p9r-font-weight relative flex items-center justify-start">
                                {/* 몇일됬는지 */}
                                1일 전
                            </div>
                        </div>
                        <div className="flex flex-row gap-2 items-start justify-start shrink-0 relative">
                            <div className="text-graytext-5 text-left font-body-p7r-font-family text-body-p7r-font-size leading-body-p7r-line-height font-body-p7r-font-weight relative flex items-center justify-start">
                                {/* comment */}
                                So nice!
                            </div>
                        </div>
                    </div>
                    {/* 삭제버튼 */}
                    <img className="shrink-0 w-5 h-5 relative overflow-visible" src="grayClose.svg" />
                </div>
            </div>
        </>
    );
};

export default Comments;
