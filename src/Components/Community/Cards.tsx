"use client";

import React, { useEffect } from "react";
import Image from "next/image";

import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";

import { getPortfolio } from "../../util/supabase/community_filter_DB";
import { QUERY_KEY } from "@/util/query_key";

import Modal from "../DetailPage/Modal";
import Portfolio_detail from "../DetailPage/PortfolioDetail";
import Loading from "../Loading";
import DeleteModal from "./DeleteModal";

import useDetailStore from "@/store/detailStore";
import useJobFilterStore from "@/store/jobFilterStore";

const Cards = () => {
    //모달 상태
    const { setCardId, setIsOpenModal } = useDetailStore();

    const { jobFilter, filter } = useJobFilterStore();

    const queryClient = useQueryClient();

    //모달 close시 캐시 업데이트
    const queryKeysToInvalidateQueries = [
        QUERY_KEY.hotDevelopers,
        QUERY_KEY.communityPortfolio,
        QUERY_KEY.portfolioLikes,
    ];

    const onModalClose = () => {
        setIsOpenModal(false);
        queryKeysToInvalidateQueries.forEach((key) => {
            queryClient.invalidateQueries({ queryKey: [key] });
        });
    };

    //useInfiniteQuery
    const { isPending, data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
        queryKey: [QUERY_KEY.communityPortfolio],
        queryFn: ({ pageParam }) => getPortfolio({ filter, jobFilter, pageParam }),
        initialPageParam: 0,
        getNextPageParam: (lastPage, allPages) => {
            if (lastPage!.length < 5) {
                return null;
            }
            return allPages.length;
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
    }, [inView, hasNextPage, fetchNextPage]);

    if (isPending) {
        return (
            <div className="flex justify-center items-center w-[1280px] h-[700px] sm:w-full bg-hihigray lg:w-[730px]">
                <Loading />
            </div>
        );
    }

    return (
        <>
            <div className="mt-8 flex flex-wrap gap-6 sm:w-full sm:justify-center w-[1280px] lg:w-[730px]">
                {data!.pages.map((portfolio) => {
                    return portfolio!.map((item: any) => {
                        return (
                            <div
                                key={item.id}
                                className="cursor-pointer"
                                onClick={() => {
                                    setIsOpenModal(true),
                                        setCardId(item.id),
                                        queryClient.removeQueries({ queryKey: [QUERY_KEY.detailPortfolio] });
                                }}
                            >
                                <div className="group relative flex flex-col gap-2 mb-8 sm:w-[330px] sm:h-[240px]">
                                    {/* 대표이미지 */}
                                    <Image
                                        className="rounded-2xl w-[324px] h-[240px] sm:w-full object-cover"
                                        src={item.profileImage}
                                        alt="포트폴리오 프로필"
                                        width={324}
                                        height={240}
                                    />

                                    <span className="absolute flex items-end py-5 px-4 w-full h-[240px] bg-black rounded-2xl bg-opacity-30 opacity-0 ease-in-out duration-300 group-hover:opacity-100 sm:opacity-100">
                                        <p className="w-[269px] text-ellipsis whitespace-nowrap overflow-hidden text-white text-SH5_M">
                                            {item.oneLineIntroduce}
                                        </p>
                                        <p className="w-[269px] absolute top-[20px] whitespace-nowrap overflow-hidden text-white text-P8_M">
                                            {`#${item.job.slice(0, -3)}`}
                                        </p>
                                    </span>
                                    <div className="flex flex-row items-center justify-between">
                                        <div className="flex flex-row gap-2">
                                            {/* 유저닉네임 */}
                                            <div className="flex items-center justify-start w-[100px] overflow-hidden whitespace-nowrap ml-2 text-P7_M">
                                                {item.name}
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="flex gap-1 items-center">
                                                {/* 좋아요 하트 */}
                                                <div className="w-6 h-6">
                                                    <Image
                                                        width={24}
                                                        height={24}
                                                        alt="좋아요 아이콘"
                                                        src="/assets/image/communityImage/grayHeart.svg"
                                                    />
                                                </div>
                                                <span className="text-gray_4 text-P7_R">{item.likes.length}</span>
                                            </div>
                                            <div className="flex gap-1 items-center">
                                                {/* 조회수 눈 */}
                                                <div className="w-6 h-6 ">
                                                    <Image
                                                        width={24}
                                                        height={24}
                                                        alt="조회수"
                                                        src="/assets/image/communityImage/grayEye.svg"
                                                    />
                                                </div>
                                                <span className="text-gray_4 text-P7_R">{item.viewCnt}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    });
                })}

                {/* //모달섹션 */}
                <DeleteModal>
                    <Modal onClose={onModalClose}>
                        <Portfolio_detail />
                    </Modal>
                </DeleteModal>
            </div>

            <div ref={ref} />
            {isFetchingNextPage && (
                <div className="flex justify-center">
                    <div className="w-[200px] sm:w-[100px] mt-8">
                        <Loading />
                    </div>
                </div>
            )}

            {data!.pages[0]!.length === 0 && (
                <div className="flex flex-col items-center mt-28 mr-40 mb-28 gap-4 sm:mr-0 ">
                    <div className="">
                        <Image src={"gray_warn_lined.svg"} alt="결과없음 아이콘" width={32} height={32} />
                    </div>
                    <div>
                        <span className="font-spoqaBold text-P7_M text-gray_4">조건에 맞는 프로필이 없습니다.</span>
                    </div>
                </div>
            )}
        </>
    );
};

export default Cards;
