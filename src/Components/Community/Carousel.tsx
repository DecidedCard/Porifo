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
                            className="flex flex-col gap-2  items-center justify-center shrink-0 relative"
                            style={{
                                transform: `translateX(${translateX}px)`,
                                transition: "transform 0.3s ease-in-out",
                            }}
                        >
                            <img
                                className="rounded-2xl shrink-0 w-[550px] h-[364px] relative "
                                style={{
                                    background: "liner-gradient(to left, #d9d9d9,#d9d9d9)",
                                    objectFit: "cover",
                                }}
                                src="rectangle-1150.png"
                            />
                            <div
                                className="bg-[rgba(0,0,0,0.56)] border-2 border-solid border-sky-500 rounded-br-2xl rounded-bl-2xl pt-4 pr-6 pb-4 pl-6 flex flex-col gap-3 items-start justify-start w-[550px] absolute left-0 top-[234px]"
                                style={{ backdropFilter: "var(--bgblur56-backdrop-filter, blur(28px))" }}
                            >
                                <div className=" text-center w-[500px] h-[50px]  border-2 border-solid border-rose-700  font-spoqaMedium text-white font-bold text-2xl relative flex items-center ">
                                    <p className="truncate ...">{item.oneLineIntroduce}</p>
                                </div>
                                <div className="flex flex-row items-center justify-between self-stretch shrink-0 relative">
                                    <div className="flex flex-row gap-2 items-center justify-start flex-1 relative">
                                        <img
                                            className="rounded-[50px] shrink-0 w-8 h-8 relative"
                                            style={{ objectFit: "cover" }}
                                            alt={`hotDeveloper-img-${idx}`}
                                            src="rectangle0.png"
                                        />
                                        <div className="font-spoqaMedium  text-white font-bold text-center relative flex items-center justify-center">
                                            {item.name}
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-4 items-center justify-end shrink-0 relative">
                                        <div className="flex flex-row gap-1 items-center justify-start shrink-0 relative">
                                            <div className="shrink-0 w-6 h-6 relative">
                                                <img
                                                    className="w-[100%] h-[100%] absolute right-[0%] left-[0%] bottom-[0%] top-[0%] overflow-visible"
                                                    src="grayHeart.svg"
                                                />
                                            </div>
                                            <div className="text-gray">210</div>
                                        </div>
                                        <div className="flex flex-row gap-1 items-center justify-start shrink-0 relative">
                                            <img
                                                className="shrink-0 w-6 h-6 relative overflow-visible"
                                                src="grayEye.svg"
                                            />
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
