"use client";
import { QUERY_KEY } from "@/util/query_key";
import { addComment } from "@/util/supabase/supabase_comments";
import { useMutation } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";

const CommentInput = ({ user, id, queryClient }: any) => {
    const [comment, setComment] = useState("");
    const [disable, setDisable] = useState(true);

    useEffect(() => {
        if (user && comment.length > 0) {
            return setDisable(false);
        }
    }, [user, comment]);

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
        setComment("");
    };

    return (
        <div className=" flex w-[100%] pt-10">
            {/* 현재 로그인한 유저 프로필이미지 */}
            {/* <img className="rounded-[50px] w-10 h-10 object-cover mr-3" src="rectangle0.png" /> */}
            <div className="flex flex-col items-end justify-start flex-1 ">
                {/* 댓글인풋 */}
                {user ? (
                    <input
                        value={comment}
                        onChange={handleComment}
                        type="text"
                        placeholder="이 이력과 포트폴리오에 대해 어떻게 생각 하시나요?"
                        className="border-[2px] border-solid border-gray2 bg-gray-white rounded-lg self-stretch shrink-0 h-[78px]"
                    />
                ) : (
                    <input
                        value={comment}
                        type="text"
                        placeholder="로그인을 해주세요"
                        className="border-[2px] border-solid border-gray2 bg-gray-white rounded-lg self-stretch shrink-0 h-[78px]"
                    />
                )}

                {/* 댓글등록 버튼 */}
                <button
                    onClick={handleSubmitBtn}
                    disabled={disable}
                    className={
                        disable
                            ? "bg-gray rounded-lg text-gray2 text-center font-medium p-2 mt-2"
                            : "bg-primary rounded-lg text-white text-center font-medium p-2 mt-2"
                    }
                >
                    댓글 게시
                </button>
            </div>
        </div>
    );
};

export default CommentInput;
