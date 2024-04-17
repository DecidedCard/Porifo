"use client";

import Image from "next/image";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { QUERY_KEY } from "@/util/query_key";
import { deleteComment, getComments } from "@/util/supabase/supabase_comments";

import useUserStore from "@/store/userStore";
import useCardIdStore from "@/store/detailStore";

import CommentInput from "./CommentInput";

const Comments = () => {
    const { cardId: id } = useCardIdStore();
    const { user } = useUserStore();

    const queryClient = useQueryClient();

    const deleteMutate = useMutation({
        mutationFn: deleteComment,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [QUERY_KEY.portfolidComments] });
        },
    });

    const { data, isPending } = useQuery({
        queryKey: [QUERY_KEY.portfolidComments],
        queryFn: () => getComments({ id }),
    });

    const handleDeleteBtn = (id: number) => {
        deleteMutate.mutate(id);
    };

    if (isPending) {
        return <div>로딩중</div>;
    }

    return (
        <>
            <div className="w-[80%] rounded-2xl flex flex-col gap-5 pb-10">
                <CommentInput user={user} id={id} queryClient={queryClient} />
                <div className="border-[1px] border-solid border-gray2" />
                {/* 댓글리스트 */}
                {data?.length === 0 ? (
                    <div>댓글이 없어요</div>
                ) : (
                    data?.map((item) => {
                        return (
                            <div key={item.id} className="flex gap-3">
                                {/* profileImage */}
                                <Image
                                    className="rounded-[50px] w-10 h-10 object-cover"
                                    src="https://heurm-tutorial.vlpt.us/images/default_thumbnail.png"
                                    alt="프로필"
                                    width={40}
                                    height={40}
                                />
                                <div className="flex flex-col gap-1 flex-1 ">
                                    <div className="flex flex-row gap-2 items-center">
                                        <span>
                                            {/* user_name */}
                                            {item.user_name}
                                        </span>
                                        <span>
                                            {/* 몇일됬는지 */}
                                            {/* {item.created_at} */}
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
                                {item.user_email === user?.email ? (
                                    <Image
                                        onClick={() => handleDeleteBtn(item.id)}
                                        className="cursor-pointer"
                                        src="grayClose.svg"
                                        alt="삭제 아이콘"
                                        width={40}
                                        height={40}
                                    />
                                ) : null}
                            </div>
                        );
                    })
                )}
            </div>
        </>
    );
};

export default Comments;
