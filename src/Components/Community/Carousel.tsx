"use client";

import { useState } from "react";
import Image from "next/image";

import { useQuery, useQueryClient } from "@tanstack/react-query";

import Loading from "../Loading";

import { getHotDevelopers } from "@/util/supabase/community_filter_DB";
import { QUERY_KEY } from "@/util/query_key";

import useCardIdStore from "@/store/detailStore";

const Carousel = () => {
    const [translateX, setTranslateX] = useState(0);

    const { setCardId, setIsOpenModal } = useCardIdStore();

    const queryClient = useQueryClient();

    const { isPending, data } = useQuery({
        queryKey: ["hotDevelopers"],
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

    const handleImagePrevBtn = () => {
        const trans = 275;
        if (translateX > 825) {
            return;
        }
        setTranslateX((prevTranslateX) => prevTranslateX + trans);
    };
    const handleImageNextBtn = () => {
        const trans = 275;
        if (translateX < -825) {
            return;
        }
        setTranslateX((prevTranslateX) => prevTranslateX - trans);
    };

    return (
        <>
            <div className="flex flex-row w-screen overflow-hidden gap-5 items-center justify-center relative mb-20">
                {/* 카드 */}
                {data!.map((item: any, idx) => {
                    return (
                        <div
                            key={item.id}
                            className="flex flex-col gap-2 w-[550px] h-[364px] items-center justify-center shrink-0 cursor-pointer"
                            style={{
                                transform: `translateX(${translateX}px)`,
                                transition: "transform 0.3s ease-in-out",
                            }}
                            onClick={() => {
                                setIsOpenModal(true),
                                    setCardId(item.id),
                                    queryClient.removeQueries({ queryKey: [QUERY_KEY.detailPortfolio] });
                            }}
                        >
                            {/* 카드 이미지 */}
                            <Image
                                className="rounded-2xl w-[100%] h-[100%] "
                                style={{
                                    objectFit: "cover",
                                }}
                                src={item.profileImage}
                                alt="카드 프로필"
                                width={500}
                                height={300}
                            />
                            {/* 블러박스 */}
                            <div
                                className="bg-[rgba(0,0,0,0.56)] rounded-br-2xl rounded-bl-2xl pt-4 pr-6 pb-4 pl-6 flex flex-col gap-3 absolute top-[238px]"
                                style={{ backdropFilter: "var(--bgblur56-backdrop-filter, blur(28px))" }}
                            >
                                {/* 한줄소개 */}
                                <div className="w-[500px] h-[50px] font-spoqaMedium text-white font-bold text-2xl flex items-center">
                                    <p className="truncate ...">{item.oneLineIntroduce}</p>
                                </div>
                                {/* 유저정보,좋아요,조회수 박스 */}
                                <div className="flex justify-between">
                                    <div className="flex gap-2">
                                        {/* 유저아바타 */}
                                        <Image
                                            className="rounded-[50px] w-8 h-8"
                                            style={{ objectFit: "cover" }}
                                            alt={`hotDeveloper-img-${idx}`}
                                            src={item.profileImage}
                                            width={500}
                                            height={300}
                                        />
                                        {/* 유저이름 */}
                                        <div className="font-spoqaMedium text-white font-bold flex items-center justify-center">
                                            {item.name}
                                        </div>
                                    </div>
                                    {/* 좋아요, 조회수 박스 */}
                                    <div className="flex gap-4">
                                        <div className="flex gap-1 items-center">
                                            <div className="shrink-0 w-6 h-6 relative">
                                                {/* 좋아요 */}
                                                {/* <img src="grayHeart.svg" /> */}
                                            </div>
                                            {/* <div className="text-gray">210</div> */}
                                        </div>
                                        <div className="flex gap-1 items-center">
                                            <div className="shrink-0 w-6 h-6 relative">
                                                {/* 조회수 */}
                                                {/* <img src="grayEye.svg" /> */}
                                            </div>
                                            {/* <div className="text-gray">1523</div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}

                {/* 이미지 넘기기 버튼 */}
                <button
                    onClick={handleImageNextBtn}
                    className="bg-[rgba(255,255,255,0.80)] rounded-[999px] p-2 flex flex-row gap-2 items-start justify-start shrink-0 absolute left-[1450px] top-[162px]"
                    style={{ boxShadow: "0px 4px 12px 0px rgba(0, 0, 0, 0.16)", backdropFilter: "blur(28px)" }}
                >
                    <Image
                        className="shrink-0 w-6 h-6 relative overflow-visible"
                        src="icon-set8.svg"
                        alt="아이콘"
                        width={30}
                        height={30}
                    />
                </button>
                <button
                    onClick={handleImagePrevBtn}
                    className="bg-[rgba(255,255,255,0.80)] rounded-[999px] p-2 flex flex-row gap-2 items-start justify-start shrink-0 absolute left-[430px] top-[162px]"
                    style={{ boxShadow: "0px 4px 12px 0px rgba(0, 0, 0, 0.16)", backdropFilter: "blur(28px)" }}
                >
                    <Image
                        className="shrink-0 w-6 h-6 relative overflow-visible"
                        src="icon-set9.svg"
                        alt="아이콘"
                        width={30}
                        height={30}
                    />
                </button>
            </div>
        </>
    );
};

export default Carousel;
