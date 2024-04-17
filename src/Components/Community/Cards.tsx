"use client";

import React, { useEffect } from "react";
import Image from "next/image";

import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";

import { getPortfolio } from "../../util/supabase/community_filter_DB";
import { QUERY_KEY } from "@/util/query_key";
import useSupabaseRange from "@/hooks/useSupabaseRange";

import useCardIdStore from "@/store/detailStore";
import useJobFilterStore from "@/store/jobFilterStore";

import Modal from "../DetailPage/Modal";
import Portfolio_detail from "../DetailPage/Portfolio_detail";
import Loading from "../Loading";

const Cards = () => {
    //모달 상태
    const { setCardId, isOpenModal, setIsOpenModal } = useCardIdStore();

    const { jobFilter } = useJobFilterStore();
    const { from, to, filter } = useSupabaseRange();

    const queryClient = useQueryClient();

    const queryKeysToRemove = [QUERY_KEY.hotDevelopers, QUERY_KEY.communityPortfolio];

    const onModalClose = () => {
        setIsOpenModal(false);
        queryKeysToRemove.forEach((key) => {
            queryClient.invalidateQueries({ queryKey: [key] });
        });
    };

    // 모달 open일때 body스크롤 방지
    // if (isOpenModal) {
    //     document.body.style.overflow = "hidden";
    // } else {
    //     document.body.style.overflow = "auto";
    // }

    //useInfiniteQuery
    const { isPending, data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
        queryKey: [QUERY_KEY.communityPortfolio],
        queryFn: ({ pageParam }) => getPortfolio({ filter, jobFilter, from, to, pageParam }),
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
            <div className="absolute top-0 left-0 z-50 flex justify-center items-center w-screen h-screen bg-hihigray">
                <Loading />
            </div>
        );
    }

    return (
        <>
            <div className="mt-8 flex flex-wrap gap-6 w-[1280px] lg:w-[730px]">
                {data!.pages.map((portfolio: any) => {
                    return portfolio.map((item: any) => {
                        return (
                            <div
                                key={item.id}
                                className="cursor-pointer "
                                onClick={() => {
                                    setIsOpenModal(true),
                                        setCardId(item.id),
                                        queryClient.removeQueries({ queryKey: [QUERY_KEY.detailPortfolio] });
                                }}
                            >
                                <div className="flex flex-col gap-2">
                                    {/* 대표이미지 */}
                                    <Image
                                        className="rounded-2xl w-[350px] h-[220px]"
                                        style={{
                                            objectFit: "cover",
                                        }}
                                        src={item.profileImage}
                                        alt="포트폴리오 프로필"
                                        width={300}
                                        height={300}
                                    />
                                    <div className="flex flex-row items-center justify-between">
                                        <div className="flex flex-row gap-2">
                                            {/* 유저아바타 */}
                                            <Image
                                                className="rounded-[50px] w-8 h-8"
                                                style={{ objectFit: "cover" }}
                                                src={item.profileImage}
                                                alt="포트폴리오 프로필"
                                                width={300}
                                                height={300}
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
                                                    <Image
                                                        width={24}
                                                        height={24}
                                                        alt="좋아요 아이콘"
                                                        src="grayHeart.svg"
                                                    />
                                                </div>
                                                <span>210</span>
                                            </div>
                                            <div className="flex gap-1 items-center ">
                                                {/* 조회수 눈 */}
                                                <div className="w-6 h-6 ">
                                                    <Image width={24} height={24} alt="조회수" src="grayEye.svg" />
                                                </div>
                                                <span>{item.viewCnt}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    });
                })}
                {/* //모달섹션 */}
                <Modal isVisible={isOpenModal} onClose={onModalClose}>
                    <Portfolio_detail />
                </Modal>
            </div>
            <div ref={ref} />
            {isFetchingNextPage && <h3>Loding...</h3>}
        </>
    );
};

export default Cards;
