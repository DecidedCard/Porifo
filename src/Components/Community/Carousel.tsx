"use client";

import React, { useState } from "react";

import { getHotDevelopers } from "@/util/supabase/community_filter_DB";
import { useQuery } from "@tanstack/react-query";

const Carousel = () => {
    const [translateX, setTranslateX] = useState(0);
    const { isPending, data } = useQuery({
        queryKey: ["hotDevelopers"],
        queryFn: getHotDevelopers,
        refetchOnWindowFocus: false,
    });

    if (isPending) {
        return <div>로딩 중 ... !!</div>;
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
                {data!.map((item, idx) => {
                    return (
                        <div
                            key={item.id}
                            className="flex flex-col gap-2 w-[550px] h-[364px] items-center justify-center shrink-0"
                            style={{
                                transform: `translateX(${translateX}px)`,
                                transition: "transform 0.3s ease-in-out",
                            }}
                        >
                            {/* 카드 이미지 */}
                            <img
                                className="rounded-2xl "
                                style={{
                                    objectFit: "cover",
                                }}
                                src="rectangle-1150.png"
                            />
                            {/* 블러박스 */}
                            <div
                                className="border-2 border-solid border-sky-500 bg-[rgba(0,0,0,0.56)] rounded-br-2xl rounded-bl-2xl pt-4 pr-6 pb-4 pl-6 flex flex-col gap-3 absolute top-[234px]"
                                style={{ backdropFilter: "var(--bgblur56-backdrop-filter, blur(28px))" }}
                            >
                                {/* 한줄소개 */}
                                <div className="border-2 border-solid border-rose-700 w-[500px] h-[50px] font-spoqaMedium text-white font-bold text-2xl flex items-center">
                                    <p className="truncate ...">{item.oneLineIntroduce}</p>
                                </div>
                                {/* 유저정보,좋아요,조회수 박스 */}
                                <div className="flex justify-between">
                                    <div className="flex gap-2">
                                        {/* 유저아바타 */}
                                        <img
                                            className="rounded-[50px] w-8 h-8"
                                            style={{ objectFit: "cover" }}
                                            alt={`hotDeveloper-img-${idx}`}
                                            src="rectangle0.png"
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
                                                <img src="grayHeart.svg" />
                                            </div>
                                            <div className="text-gray">210</div>
                                        </div>
                                        <div className="flex gap-1 items-center">
                                            <div className="shrink-0 w-6 h-6 relative">
                                                {/* 조회수 */}
                                                <img src="grayEye.svg" />
                                            </div>
                                            <div className="text-gray">1523</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
                <div>안녕</div>

                {/* 이미지 넘기기 버튼 */}
                <button
                    onClick={handleImageNextBtn}
                    className="bg-[rgba(255,255,255,0.80)] rounded-[999px] p-2 flex flex-row gap-2 items-start justify-start shrink-0 absolute left-[1450px] top-[162px]"
                    style={{ boxShadow: "0px 4px 12px 0px rgba(0, 0, 0, 0.16)", backdropFilter: "blur(28px)" }}
                >
                    <img className="shrink-0 w-6 h-6 relative overflow-visible" src="icon-set8.svg" />
                </button>
                <button
                    onClick={handleImagePrevBtn}
                    className="bg-[rgba(255,255,255,0.80)] rounded-[999px] p-2 flex flex-row gap-2 items-start justify-start shrink-0 absolute left-[430px] top-[162px]"
                    style={{ boxShadow: "0px 4px 12px 0px rgba(0, 0, 0, 0.16)", backdropFilter: "blur(28px)" }}
                >
                    <img className="shrink-0 w-6 h-6 relative overflow-visible" src="icon-set9.svg" />
                </button>
            </div>
        </>
    );
};

export default Carousel;
