"use client";
import { QUERY_KEY } from "@/util/query_key";
import { addComment } from "@/util/supabase/supabase_comments";
import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";

const CommentInput = ({ user, id, queryClient }: any) => {
    const [comment, setComment] = useState("");
    // 현재 로그인한 유저의 아바타를 가지고 와야함
    //추가 할때 user_name,comment,user_email,profileImage
    //로그인 상태인가? user로 판별

    const addMutate = useMutation({
        mutationFn: addComment,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [QUERY_KEY.portfolidComments] });
        },
    });

    const handleComment = (e: any) => {
        setComment(e.target.value);
    };

    const handleSubmitBtn = () => {
        const commentValue = {
            comment,
            user_name: user.user_metadata.user_name,
            user_email: user.email,
            profileImage: "https://heurm-tutorial.vlpt.us/images/default_thumbnail.png",
            portfolio_id: id,
        };
        addMutate.mutate(commentValue);
    };

    return (
        <div className=" flex w-[100%] pt-10">
            {/* 현재 로그인한 유저 프로필이미지 */}
            <img className="rounded-[50px] w-10 h-10 object-cover mr-3" src="rectangle0.png" />
            <div className="flex flex-col items-end justify-start flex-1 ">
                {/* 댓글인풋 */}
                <input
                    value={comment}
                    onChange={handleComment}
                    type="text"
                    placeholder={user ? "어떻게 생각 하시나요?" : "로그인을 해주세요"}
                    className="border-2 border-solid border-rose-500 bg-gray-white rounded-lg self-stretch shrink-0 h-[78px]"
                />
                {/* 댓글등록 버튼 */}
                <button onClick={handleSubmitBtn} className="border-solid border-2 border-sky-500 text-center p-3 mt-2">
                    댓글 게시
                </button>
            </div>
        </div>
    );
};

export default CommentInput;
