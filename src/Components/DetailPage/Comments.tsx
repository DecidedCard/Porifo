"use client";

import Image from "next/image";

import { useQuery } from "@tanstack/react-query";

import { QUERY_KEY } from "@/util/query_key";
import { getComments } from "@/util/supabase/supabase_comments";

import useUserStore from "@/store/userStore";
import useDetailStore from "@/store/detailStore";

import CommentInput from "./CommentInput";

import type { User } from "@/types/User";

const Comments = () => {
    const { cardId: id, setIsDeleteModalOpen, setCommentId } = useDetailStore();
    const { user }: { user: User | null } = useUserStore();

    const { data, isPending } = useQuery({
        queryKey: [QUERY_KEY.portfolidComments],
        queryFn: () => getComments({ id: id! }),
    });

    const today = new Date();

    const getDaysAgo = (createdAt: string) => {
        const createdDate = new Date(createdAt); //연산을 위해 문자열 객체화
        const diffTime = Math.abs(today.getTime() - createdDate.getTime()); //현재 시간과 차이 절댓값
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); //24시간으로 나눔 ceil로 올림 정수 반환
        if (diffDays === 1) {
            return "오늘";
        }
        return `${diffDays}일 전`;
    };

    const handleDeleteBtn = (id: number) => {
        setIsDeleteModalOpen(true);
        setCommentId(id);
    };

    if (isPending) {
        return <div>로딩중</div>;
    }

    return (
        <>
            <div className="w-[80%] sm:w-full rounded-2xl flex flex-col gap-5 pb-10">
                <CommentInput user={user} id={id!} />
                <div className="border-[1px] border-solid border-gray2 mt-5 sm:mt-2 " />
                {/* 댓글리스트 */}
                {data!.length === 0 ? (
                    <div className="text-sm flex items-center justify-center text-gray3 mt-5 ">
                        자유로운 피드백을 남겨보세요 😎
                    </div>
                ) : (
                    data!.map((item) => {
                        return (
                            <div key={item.id} className="flex gap-3">
                                {/* profileImage */}
                                <Image
                                    className="rounded-[50px] w-10 h-10 object-cover"
                                    src={item.profileImage!}
                                    alt="프로필"
                                    width={40}
                                    height={40}
                                />
                                <div className="flex flex-col justify-center gap-1 flex-1 ">
                                    <div className="flex flex-row gap-2 items-center">
                                        <span className=" text-gray4 text-[12px] font-spoqaMedium font-medium">
                                            {/* user_name */}
                                            {item.user_name}
                                        </span>
                                        <span className="text-[10px] font-spoqaMedium font-normal text-gray3">
                                            {/* 몇일전 댓글인지 */}
                                            {getDaysAgo(item.created_at)}
                                        </span>
                                    </div>
                                    <div className="flex gap-2 text-gray4 font-spoqaMedium font-normal text-[14px]">
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
                                        src="/assets/image/communityImage/grayClose.svg"
                                        alt="삭제 아이콘"
                                        width={24}
                                        height={24}
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
