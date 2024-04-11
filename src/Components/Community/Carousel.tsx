"use client";

import { getHotDevelopers } from "@/util/supabase/community_filter_DB";
import { useQuery } from "@tanstack/react-query";
import React, { useRef } from "react";

const Carousel = () => {
    const { isPending, data } = useQuery({
        queryKey: ["hotDevelopers"],
        queryFn: getHotDevelopers,
    });
    const SliderRef = useRef(null);

    if (isPending) {
        return <div>로딩 중 ... !!</div>;
    }

    return (
        <>
            <div
                id="slider"
                className="flex flex-row border-2 border-solid border-black w-screen overflow-hidden gap-5 items-center justify-center relative mb-20"
            >
                {/* 카드 */}
                {data!.map((item, idx) => {
                    return (
                        <div
                            ref={SliderRef}
                            key={item.id}
                            className="flex flex-col gap-2 items-center justify-center shrink-0 relative"
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
                                className="bg-[rgba(255,255,255,0.56)] rounded-br-2xl rounded-bl-2xl pt-4 pr-6 pb-4 pl-6 flex flex-col gap-4 items-start justify-start shrink-0 w-[550px] absolute left-0 top-[252px]"
                                style={{ backdropFilter: "var(--bgblur56-backdrop-filter, blur(28px))" }}
                            >
                                <div className=" text-center font-spoqaMedium text-black font-bold text-2xl relative flex items-center justify-center">
                                    {item.introduce}
                                </div>
                                <div className="flex flex-row items-center justify-between self-stretch shrink-0 relative">
                                    <div className="flex flex-row gap-2 items-center justify-start flex-1 relative">
                                        <img
                                            className="rounded-[50px] shrink-0 w-8 h-8 relative"
                                            style={{ objectFit: "cover" }}
                                            alt={`hotDeveloper-img-${idx}`}
                                            src="rectangle0.png"
                                        />
                                        <div className="font-spoqaMedium text-black font-bold text-center relative flex items-center justify-center">
                                            {item.name}
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-4 items-center justify-end shrink-0 relative">
                                        <div className="flex flex-row gap-1 items-center justify-start shrink-0 relative">
                                            <div className="shrink-0 w-6 h-6 relative">
                                                <img
                                                    className="w-[100%] h-[100%] absolute right-[0%] left-[0%] bottom-[0%] top-[0%] overflow-visible"
                                                    src="frame-13740.svg"
                                                />
                                            </div>
                                            <div className="text-graytext-black text-center font-body-p7r-font-family text-body-p7r-font-size leading-body-p7r-line-height font-body-p7r-font-weight relative flex items-center justify-center">
                                                210
                                            </div>
                                        </div>
                                        <div className="flex flex-row gap-1 items-center justify-start shrink-0 relative">
                                            <img
                                                className="shrink-0 w-6 h-6 relative overflow-visible"
                                                src="icon-set1.svg"
                                            />
                                            <div className="text-graytext-black text-center font-body-p7r-font-family text-body-p7r-font-size leading-body-p7r-line-height font-body-p7r-font-weight relative flex items-center justify-center">
                                                1523
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}

                {/* 이미지 넘기기 버튼 */}
                <div
                    onClick={() => {}}
                    className="bg-[rgba(255,255,255,0.80)] rounded-[999px] p-2 flex flex-row gap-2 items-start justify-start shrink-0 absolute left-[1450px] top-[162px]"
                    style={{ boxShadow: "0px 4px 12px 0px rgba(0, 0, 0, 0.16)", backdropFilter: "blur(28px)" }}
                >
                    <img className="shrink-0 w-6 h-6 relative overflow-visible" src="icon-set8.svg" />
                </div>
                <div
                    // onClick={handleImagePrevBtn}
                    className="bg-[rgba(255,255,255,0.80)] rounded-[999px] p-2 flex flex-row gap-2 items-start justify-start shrink-0 absolute left-[430px] top-[162px]"
                    style={{ boxShadow: "0px 4px 12px 0px rgba(0, 0, 0, 0.16)", backdropFilter: "blur(28px)" }}
                >
                    <img className="shrink-0 w-6 h-6 relative overflow-visible" src="icon-set9.svg" />
                </div>
            </div>
        </>
    );
};

export default Carousel;
