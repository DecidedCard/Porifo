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
            // queryClient.invalidateQueries({ queryKey: [QUERY_KEY.portfolioLikes] });
            queryClient.invalidateQueries({ queryKey: [QUERY_KEY.detailPortfolio] });
        },
    });

    if (isPending || load) {
        return <div>로딩중</div>;
    }

    //좋아요 눌렀는지 확인
    const checkLike = likes.find((item) => item === user?.user_metadata.email);
    if (!checkLike) {
        console.log("좋아요 안눌렀어요");
    }

    //좋아요 버튼 클릭
    const handleLikeBtn = () => {
        if (!user) {
            return alert("로그인이 필요한 서비스 입니다.");
        }
        const nowUserEmail = [...likes, user.user_metadata.email]; //현재 유저 email
        const likeUser = {
            id,
            user_email: nowUserEmail,
        };
        addLikeMutate.mutate(likeUser);
    };

    return (
        <>
            <div className="flex flex-col gap-4 items-center justify-center relative">
                <div className="flex flex-row gap-4 items-center justify-center shrink-0 relative">
                    {/* 좋아요 영역 */}
                    <button
                        onClick={handleLikeBtn}
                        className="bg-gray2 rounded-[999px] p-2 flex flex-col items-center w-32 hover:bg-gray3"
                    >
                        <div className="flex items-center justify-center w-20 h-10">
                            <Image src="grayHeart.svg" alt="좋아요 버튼" width={32} height={32} />
                        </div>
                        <span>좋아요</span>
                    </button>

                    {/* 공유하기 영역 */}
                    <button className="bg-gray2 rounded-[999px] p-2 flex flex-col items-center w-32 hover:bg-gray3">
                        <div className="flex items-center justify-center w-20 h-10">
                            <Image src="share.svg" alt="공유하기 버튼" width={28} height={28} />
                        </div>
                        <span>공유하기</span>
                    </button>
                </div>
                {/* 좋아요, 조회수, 댓글 개수 영역 */}
                <div className="flex gap-6">
                    <div className="flex gap-1">
                        <Image src="grayHeart.svg" alt="좋아요 개수" width={24} height={24} />
                        <span className="flex items-center justify-center">{portfolioInfo.likes.length}</span>
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
