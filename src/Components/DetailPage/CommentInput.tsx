"use client";

import { useEffect, useState } from "react";

import Image from "next/image";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { QUERY_KEY } from "@/util/query_key";
import { addComment } from "@/util/supabase/supabase_comments";
import type { User } from "@/types/User";

const CommentInput = ({ user, id }: { user: User | null; id: number }) => {
    const [comment, setComment] = useState("");
    const [disable, setDisable] = useState(true);

    const queryClient = useQueryClient();

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

    const handleComment = (e: React.ChangeEvent<HTMLInputElement>) => {
        setComment(e.target.value);
    };

    const handleSubmitBtn = () => {
        const commentValue = {
            comment,
            user_name: user!.user_metadata.name || user!.user_metadata.user_name,
            user_email: user!.email,
            profileImage: user!.user_metadata.profileImage,
            portfolio_id: id,
        };
        addMutate.mutate(commentValue);
        return setComment("");
    };

    return (
        <div className="w-full pt-10 ">
            <div className="flex flex-col flex-1 text-[14px]">
                {/* 댓글인풋 */}
                {user ? (
                    <div className="flex gap-2">
                        <Image
                            className="rounded-[50px] w-10 h-10 object-cover"
                            src={user!.user_metadata.profileImage}
                            alt="프로필"
                            width={40}
                            height={40}
                        />
                        <input
                            value={comment || ""}
                            onChange={handleComment}
                            type="text"
                            placeholder="이 이력과 포트폴리오에 대해 어떻게 생각 하시나요?"
                            className="border border-solid border-gray2 w-full rounded-lg self-stretch h-[78px] pl-3 sm:w-[368px] "
                        />
                    </div>
                ) : (
                    <input
                        type="text"
                        placeholder="로그인을 해주세요"
                        className="border-[2px] border-solid border-gray2 rounded-lg self-stretch h-[78px] pl-3"
                    />
                )}
                {/* 댓글등록 버튼 */}
                <div className="flex flex-row-reverse ">
                    <button
                        onClick={handleSubmitBtn}
                        disabled={disable}
                        className={
                            disable
                                ? "bg-gray flex items-center justify-center rounded-[4px] text-gray2 font-medium p-2 mt-2 w-[62px] h-[18px] text-[10px] "
                                : "bg-primary flex items-center justify-center rounded-[4px] text-white font-medium p-2 mt-2 w-[62px] h-[18px] text-[10px]"
                        }
                    >
                        댓글 게시
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CommentInput;
