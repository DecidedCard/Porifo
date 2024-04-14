"use client";

import React, { useEffect, useState } from "react";

import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";

import { getPortfolio } from "../../util/supabase/community_filter_DB";
import { QUERY_KEY } from "@/util/query_key";
import useSupabaseRange from "@/hooks/useSupabaseRange";
import Modal from "../DetailPage/Modal";
import Portfolio_detail from "../DetailPage/Portfolio_detail";
import useCardIdStore from "@/store/detailStore";
import useUserStore from "@/store/userStore";
import { userData } from "@/util/supabase/supabase_user";

const Cards = ({ filterData }: { filterData: any }) => {
    //모달 상태
    const [isOpenModal, setIsOpenModal] = useState(false);
    const { setCardId } = useCardIdStore();

    const { jobFilter } = filterData;
    const { page, setPage, getFromAndTo, filter } = useSupabaseRange();

    // 모달 open일때 body스크롤 방지
    // if (isOpenModal) {
    //     document.body.style.overflow = "hidden";
    // } else {
    //     document.body.style.overflow = "auto";
    // }

    //useInfiniteQuery
    const { isLoading, data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
        queryKey: [QUERY_KEY.communityPortfolio],
        queryFn: () => getPortfolio({ filter, jobFilter, getFromAndTo, page, setPage }),
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages) => {
            if (lastPage!.length < 5) {
                return null;
            }
            return allPages.length + 1;
        },
        refetchOnWindowFocus: false,
    });

    const { ref, inView } = useInView();

    //inView && hasNextPage 둘다 true시 다음페이지 fetch
    useEffect(() => {
        if (inView && hasNextPage) {
            fetchNextPage();
        }
        return;
    }, [inView, hasNextPage]);

    if (isLoading) {
        return <div>로딩중 .. !</div>;
    }

    return (
        <>
            <div className="mt-8 flex flex-wrap gap-6 w-[1280px]">
                {data?.pages.map((portfolio: any) => {
                    return portfolio.map((item: any) => {
                        return (
                            <div
                                key={item.id}
                                className="w-[350px] cursor-pointer "
                                onClick={() => {
                                    setIsOpenModal(true), setCardId(item.id);
                                }}
                            >
                                <div className="flex flex-col gap-2">
                                    {/* 대표이미지 */}
                                    <img
                                        className="rounded-2xl"
                                        style={{
                                            objectFit: "cover",
                                        }}
                                        src="rectangle-1153.png"
                                    />
                                    <div className="flex flex-row items-center justify-between">
                                        <div className="flex flex-row gap-2">
                                            {/* 유저아바타 */}
                                            <img
                                                className="rounded-[50px] w-8 h-8"
                                                style={{ objectFit: "cover" }}
                                                src="rectangle0.png"
                                            />
                                            {/* 유저닉네임 */}
                                            <div className="text-graytext-black flex items-center justify-center">
                                                {item.name}
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="flex gap-1 items-center ">
                                                {/* 좋아요 하트 */}
                                                <div className="w-6 h-6 ">
                                                    <img src="grayHeart.svg" />
                                                </div>
                                                <span>210</span>
                                            </div>
                                            <div className="flex gap-1 items-center ">
                                                {/* 조회수 눈 */}
                                                <div className="w-6 h-6 ">
                                                    <img src="grayEye.svg" />
                                                </div>
                                                <span>1523</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    });
                })}
                {/* //모달섹션 */}
                <Modal isVisible={isOpenModal} onClose={() => setIsOpenModal(false)}>
                    <Portfolio_detail />
                </Modal>

                <div ref={ref} />
                {isFetchingNextPage && <h3>Loding...</h3>}
            </div>
        </>
    );
};

export default Cards;
