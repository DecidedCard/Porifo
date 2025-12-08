"use client";

import Image from "next/image";

import { useQuery } from "@tanstack/react-query";
import { Flip, ToastContainer } from "react-toastify";

import Loading from "../Loading";

import useLiked from "@/hooks/community/useLiked";

import { QUERY_KEY } from "@/util/query_key";
import { getComments } from "@/util/supabase/supabase_comments";
import { onClickCopyClipBoardHandler } from "@/util/urlCopy";

import type { PortfolioInfo } from "@/types/PortfolioInfo";

const LikeShare = ({ portfolioInfo }: { portfolioInfo: PortfolioInfo }) => {
    const { checkLike, id, likes, pending, handleLikeBtn } = useLiked();

    //comment 개수를 위한 query
    const { data, isPending } = useQuery({
        queryKey: [QUERY_KEY.portfolidComments],
        queryFn: () => getComments({ id: id! }),
    });

    if (isPending || pending) {
        return <Loading />;
    }

    return (
        <>
            <div className="flex flex-col gap-4 items-center justify-center mb-5">
                <div className="flex flex-row gap-4 items-center justify-center">
                    {/* 좋아요 영역 */}
                    <button
                        onClick={() => handleLikeBtn()}
                        className="bg-gray_2 rounded-[999px] py-2 flex flex-col items-center w-[128px] h-[73px] hover:bg-gray_4"
                    >
                        <div className="flex items-center justify-center w-10 h-10">
                            {checkLike ? (
                                <Image
                                    src="/assets/image/communityImage/redHeart.svg"
                                    alt="좋아요 버튼"
                                    width={32}
                                    height={32}
                                    className="w-8 h-8"
                                />
                            ) : (
                                <Image
                                    src="/assets/image/communityImage/lightGrayHeart.svg"
                                    alt="좋아요 버튼"
                                    width={32}
                                    height={32}
                                    className="w-8 h-8"
                                />
                            )}
                        </div>
                        <span className="text-P8_M text-gray_5">좋아요</span>
                    </button>

                    {/* 공유하기 영역 */}
                    <button
                        onClick={() => onClickCopyClipBoardHandler(`${process.env.NEXT_PUBLIC_BASE_URL}share/${id}`)}
                        className="bg-gray_2 rounded-[999px] py-2 flex flex-col items-center w-[128px] h-[73px] hover:bg-gray_4"
                    >
                        <div className="flex items-center justify-center w-20 h-10">
                            <Image
                                src="/assets/image/communityImage/share.svg"
                                alt="공유하기 버튼"
                                width={28}
                                height={28}
                            />
                        </div>
                        <span className="text-P8_M text-gray_5">공유하기</span>
                    </button>
                </div>
                {/* 좋아요, 조회수, 댓글 개수 영역 */}
                <div className="flex gap-8 text-P7_R text-gray_4">
                    <div className="flex gap-1">
                        <Image
                            src="/assets/image/communityImage/grayHeart.svg"
                            alt="좋아요 개수"
                            width={24}
                            height={24}
                        />
                        <span className="flex items-center justify-center">{likes!.length}</span>
                    </div>
                    <div className="flex gap-1">
                        <Image src="/assets/image/communityImage/grayEye.svg" alt="조회수" width={30} height={30} />
                        <span className="flex items-center justify-center"> {portfolioInfo.viewCnt}</span>
                    </div>
                    <div className="flex gap-1">
                        <Image src="/assets/image/communityImage/grayComment.svg" alt="댓글수" width={24} height={24} />
                        <span className="flex items-center justify-center">{data!.length}</span>
                    </div>
                </div>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Flip}
            />
        </>
    );
};

export default LikeShare;
