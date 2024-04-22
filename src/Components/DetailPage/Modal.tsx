"use client";

import Image from "next/image";
import useUserStore from "@/store/userStore";
import useCardIdStore from "@/store/detailStore";
import { PortfolioInfo } from "@/types/PortfolioInfo";
import { QUERY_KEY } from "@/util/query_key";
import { getComments } from "@/util/supabase/supabase_comments";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { addLike, getLikes } from "@/util/supabase/detail_supabase_DB";
import { onClickCopyClipBoardHandler } from "@/util/urlCopy";
import Loading from "../Loading";

const Modal = ({ isVisible, onClose, children }: any) => {
    if (!isVisible) return null;
    const handleClose = (e: any) => {
        if (e.target.id === "wrapper") {
            onClose();
        }
    };
    const { cardId: id } = useCardIdStore();
    const { user } = useUserStore(); //로그인여부 확인
    const nowUser = user?.user_metadata.email; //로그인 유저의 email

    const queryClient = useQueryClient();

    const { data: likes, isPending } = useQuery({
        queryKey: [QUERY_KEY.portfolioLikes],
        queryFn: () => getLikes({ id: "id", value: id }),
    });

    //좋아요 추가
    const addLikeMutate = useMutation({
        mutationFn: addLike,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [QUERY_KEY.portfolioLikes] });
        },
    });

    if (isPending) {
        return <Loading />;
    }
    //좋아요 눌렀는지 확인
    const checkLike = likes!.find((item) => item === user?.user_metadata.email);

    //좋아요 버튼
    const handleLikeBtn = () => {
        if (!user) {
            return alert("로그인이 필요한 서비스 입니다."); //비회원일시
        }
        if (checkLike) {
            //좋아요를 이미 눌렀을 경우
            //현재 likes배열에서 내 이메일을 제거
            const deleteUserEmail = likes!.filter((item) => item !== nowUser);
            const likeUser = {
                id,
                user_email: deleteUserEmail,
            };
            addLikeMutate.mutate(likeUser);
            return;
        }
        const nowUserEmail = [...likes!, user!.user_metadata.email]; //현재 유저 email
        const likeUser = {
            id,
            user_email: nowUserEmail,
        };
        addLikeMutate.mutate(likeUser);
    };

    //댓글 버튼
    const handleCommentBtn = () => {};

    //공유하기 버튼
    const handleShareBtn = () => {
        onClickCopyClipBoardHandler(`${process.env.NEXT_PUBLIC_BASE_URL}/share/${id}`);
    };

    return (
        <div
            className="fixed inset-0 z-20 bg-realblack bg-opacity-25 backdrop-blur-xl flex items-center justify-center"
            id="wrapper"
            onClick={handleClose}
        >
            <button
                className="bg-[rgba(255,255,255,0.80)] rounded-[999px] w-[48px] h-[48px] p-2 flex flex-row gap-2 items-center justify-center shrink-0 absolute left-[22%] top-[25px] ease-in-out duration-300 hover:bg-nonegray hover:bg-opacity-20"
                style={{ boxShadow: "0px 4px 12px 0px rgba(0, 0, 0, 0.16)", backdropFilter: "blur(28px)" }}
                onClick={onClose}
            >
                <Image src="icon-set9.svg" alt="아이콘" width={25} height={25} />
            </button>
            {/* 오른쪽 */}
            <div className="absolute right-[22%] top-[25px] flex flex-col gap-[28px] ">
                {/* 좋아요 */}
                <div className="flex flex-col items-center justify-center gap-2">
                    <button
                        className="bg-[rgba(255,255,255,0.80)] w-[48px] h-[48px] rounded-[999px] p-2 flex flex-row gap-2 items-center justify-center ease-in-out duration-300 hover:bg-nonegray hover:bg-opacity-20"
                        style={{ boxShadow: "0px 4px 12px 0px rgba(0, 0, 0, 0.16)", backdropFilter: "blur(28px)" }}
                        onClick={handleLikeBtn}
                    >
                        {checkLike ? (
                            <Image src="redHeart.svg" alt="아이콘" width={30} height={30} />
                        ) : (
                            <Image src="assets/image/gray2Heart.svg" alt="아이콘" width={30} height={30} />
                        )}
                    </button>
                    <span className="text-white font-spoqaBold text-[12px]">좋아요</span>
                </div>
                {/* 댓글 */}
                <div className="flex flex-col items-center justify-center gap-2">
                    <button
                        className="bg-[rgba(255,255,255,0.80)] w-[48px] h-[48px] rounded-[999px] p-2 flex flex-row gap-2 items-center justify-center ease-in-out duration-300 hover:bg-nonegray hover:bg-opacity-20"
                        style={{ boxShadow: "0px 4px 12px 0px rgba(0, 0, 0, 0.16)", backdropFilter: "blur(28px)" }}
                        onClick={handleCommentBtn}
                    >
                        <Image src="blackComment.svg" alt="아이콘" width={26} height={26} />
                    </button>
                    <span className="text-white font-spoqaBold text-[12px]">댓글</span>
                </div>
                {/* 공유하기 */}
                <div className="flex flex-col items-center justify-center gap-2">
                    <button
                        className="bg-[rgba(255,255,255,0.80)] w-[48px] h-[48px] rounded-[999px] p-2 flex flex-row gap-2 items-center justify-center ease-in-out duration-300 hover:bg-nonegray hover:bg-opacity-20"
                        style={{ boxShadow: "0px 4px 12px 0px rgba(0, 0, 0, 0.16)", backdropFilter: "blur(28px)" }}
                        onClick={handleShareBtn}
                    >
                        <Image src="share.svg" alt="아이콘" width={25} height={25} />
                    </button>
                    <span className="text-white font-spoqaBold text-[12px]">공유하기</span>
                </div>
            </div>
            <div className="p-2 ">{children}</div>
        </div>
    );
};

export default Modal;
