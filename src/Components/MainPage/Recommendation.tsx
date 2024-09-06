"use client";

import React from "react";
import Image from "next/image";

import { useQuery } from "@tanstack/react-query";

import Loading from "../Loading";

import { QUERY_KEY } from "@/util/query_key";
import { getHotDevelopers } from "@/util/supabase/community_filter_DB";

import type { PortfolioInfo } from "@/types/PortfolioInfo";

const Recommendation = () => {
    const { isPending, data } = useQuery({
        queryKey: [QUERY_KEY.hotDevelopers],
        queryFn: getHotDevelopers,
        refetchOnWindowFocus: false,
    });

    if (isPending) {
        return (
            <div className="absolute top-0 left-0 z-50 flex justify-center items-center w-screen h-screen bg-hihigray">
                <Loading />
            </div>
        );
    }

    return (
        <main>
            <div className="flex flex-col items-center justify-center h-[466px] w-screen bg-gray-1 sm:mx-auto sm:h-[1100px]">
                <div className="flex flex-col items-start">
                    <p className="font-spoqaBold text-[40px] font-bold mb-10 sm:text-[22px] sm:-mb-[-30px] sm:mt-6">
                        포리포 추천, HOT🔥 개발자
                    </p>
                </div>

                <div className="flex flex-row gap-6 sm:flex-col">
                    {data?.slice(0, 4).map((developer: PortfolioInfo) => (
                        <React.Fragment key={developer.id}>
                            <div className="rounded-2xl w-[302px] h-[225px] overflow-hidden">
                                <div className="flex items-center justify-center">
                                    <div className="relative">
                                        <Image
                                            className="rounded-2xl ease-in-out duration-300 hover:scale-105 sm:w-[302px] h-[210px]"
                                            src={developer.profileImage || ""}
                                            alt="썸네일"
                                            width={302}
                                            height={210}
                                            style={{ objectFit: "cover" }}
                                        />
                                        <div
                                            className="absolute top-[120px] w-full h-[90px] bg-[#0000008F] rounded-bl-2xl rounded-br-2xl px-6 "
                                            style={{ backdropFilter: "var(--bgblur56-backdrop-filter, blur(28px))" }}
                                        >
                                            <div className="flex items-center mt-4">
                                                <div className="flex flex-col gap-4 flex-1">
                                                    <p className="text-body/P7_M text-white">
                                                        {developer.oneLineIntroduce!.length > 20
                                                            ? `${developer.oneLineIntroduce!.substring(0, 20)}...`
                                                            : developer.oneLineIntroduce}
                                                    </p>

                                                    <div className="flex justify-between w-full text-body/P9_R">
                                                        <div className="flex items-center gap-2">
                                                            <div className="text-white text-body/P9_M flex items-center font-medium">
                                                                {developer.name}
                                                            </div>
                                                        </div>

                                                        <div className="flex items-center ml-20 text-[10px]">
                                                            <Image
                                                                src="/assets/image/communityImage/grayHeart.svg"
                                                                alt="좋아요 아이콘"
                                                                width={24}
                                                                height={24}
                                                                className="mr-1"
                                                            />
                                                            <p className="text-white">{developer.likes!.length}</p>
                                                        </div>

                                                        <div className="flex items-center text-[10px]">
                                                            <Image
                                                                src="/assets/image/communityImage/grayEye.svg"
                                                                alt="조회수 아이콘"
                                                                width={24}
                                                                height={24}
                                                                className="mr-1"
                                                            />
                                                            <p className="text-white">{developer.viewCnt}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                    ))}
                </div>
            </div>

            <div className="flex flex-col items-start justify-start ml-[450px] mt-36 gap-4 sm:ml-10">
                <p className="flex items-center justify-center text-headline/H4_B sm:text-[20px]">
                    동료들이 올린 양질의 정보를
                    <br />
                    손쉽게 확인할 수 있어요
                </p>
                <p className="flex items-start justify-start pr-24 text-subhead/SH4 text-gray-4 sm:text-[10px]">
                    우리 옆의 동료도 이걸 쓰고 있을 수 있어요!
                </p>
            </div>
        </main>
    );
};

export default Recommendation;
