"use client";

import useUserStore from "@/store/userStore";
import useCardIdStore from "@/store/detailStore";
import { PortfolioInfo } from "@/types/PortfolioInfo";
import { QUERY_KEY } from "@/util/query_key";
import { getComments } from "@/util/supabase/supabase_comments";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import { addLike, getLikes } from "@/util/supabase/detail_supabase_DB";

const LikeShare = ({ portfolioInfo }: { portfolioInfo: PortfolioInfo }) => {
    const { user } = useUserStore(); //로그인여부 확인
    const { cardId: id } = useCardIdStore();

    const queryClient = useQueryClient();

    const nowUser = user?.user_metadata.email; //로그인 유저의 email

    //comment 갯수를 위한 query
    const { data, isPending } = useQuery({
        queryKey: [QUERY_KEY.portfolidComments],
        queryFn: () => getComments({ id }),
    });
    const { data: likes, isPending: load } = useQuery({
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

    if (isPending || load) {
        return <div>로딩중</div>;
    }

    //좋아요 눌렀는지 확인
    const checkLike = likes!.find((item) => item === user?.user_metadata.email);

    //좋아요 버튼 클릭
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

    return (
        <>
            <div className="flex flex-col gap-4 items-center justify-center mb-5">
                <div className="flex flex-row gap-4 items-center justify-center">
                    {/* 좋아요 영역 */}
                    <button
                        onClick={handleLikeBtn}
                        className="bg-gray rounded-[999px] py-2 flex flex-col items-center w-[128px] h-[73px] hover:bg-gray3"
                    >
                        <div className="flex items-center justify-center w-10 h-10">
                            {checkLike ? (
                                <Image src="redHeart.svg" alt="좋아요 버튼" width={32} height={32} className="w-8 h-8"/>
                            ) : (
                                <Image src="assets/image/gray2Heart.svg" alt="좋아요 버튼" width={32} height={32} className="w-8 h-8"/>
                            )}
                        </div>
                        <span className="text-xs text-gray4">좋아요</span>
                    </button>

                    {/* 공유하기 영역 */}
                    <button className="bg-gray rounded-[999px] py-2 flex flex-col items-center w-[128px] h-[73px] hover:bg-gray3">
                        <div className="flex items-center justify-center w-20 h-10">
                            <Image src="share.svg" alt="공유하기 버튼" width={28} height={28} />
                        </div>
                        <span className="text-xs text-gray4">공유하기</span>
                    </button>
                </div>
                {/* 좋아요, 조회수, 댓글 개수 영역 */}
                <div className="flex gap-8 text-[14px] text-gray3">
                    <div className="flex gap-1">
                        <Image src="grayHeart.svg" alt="좋아요 개수" width={24} height={24} />
                        <span className="flex items-center justify-center">{likes!.length}</span>
                    </div>
                    <div className="flex gap-1">
                        <Image src="grayEye.svg" alt="조회수" width={30} height={30} />
                        <span className="flex items-center justify-center"> {portfolioInfo.viewCnt}</span>
                    </div>
                    <div className="flex gap-1">
                        <Image src="grayComment.svg" alt="댓글수" width={24} height={24} />
                        <span className="flex items-center justify-center"> {data!.length}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LikeShare;
