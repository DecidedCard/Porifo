"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { useQuery, useQueryClient } from "@tanstack/react-query";

import Loading from "../Loading";

import { getHotDevelopers } from "@/util/supabase/community_filter_DB";
import { QUERY_KEY } from "@/util/query_key";

import useCardIdStore from "@/store/detailStore";

const Carousel = () => {
    const [currCarousel, setCurrCarousel] = useState(1);
    const [pixel, setPixel] = useState(488);
    const [carouselTransition, setCarouselTransition] = useState("transform 500ms ease-in-out");

    const { setCardId, setIsOpenModal } = useCardIdStore();

    const queryClient = useQueryClient();

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

    const dataStart = data?.[0];
    const dataSecond = data?.[1];
    const dataThird = data?.[2];
    const dataEnd = data?.[data.length - 1];
    const data2 = data?.[data.length - 2];
    const data3 = data?.[data.length - 3];

    const modifiedArray = [data3, data2, dataEnd, ...data!, dataStart, dataSecond, dataThird];

    const handleImageNextBtn = () => {
        const SliderLength = data!.length;
        const newCurr = currCarousel + 1; //현재 보고있는 index를 1씩 증가.
        setCurrCarousel(newCurr);
        setPixel(488);

        if (newCurr === SliderLength + 2) {
            moveToNthSlide(1);
        }

        setCarouselTransition("transform 500ms ease-in-out");
    };

    const handleImagePrevBtn = () => {
        const SliderLength = data!.length;
        const newCurr = currCarousel - 1;
        setCurrCarousel(newCurr);
        setPixel(570);

        if (newCurr === 0) {
            moveToNthSlide(SliderLength);
        }

        setCarouselTransition("transform 500ms ease-in-out");
    };

    const moveToNthSlide = (n: any) => {
        setTimeout(() => {
            setCarouselTransition("");
            setCurrCarousel(n);
        }, 500);
    };

    return (
        <>
            <div className="items-center justify-center relative mb-20">
                {/* 카드 */}
                <div className="flex w-screen gap-5 overflow-hidden">
                    {modifiedArray!.map((item: any, idx) => {
                        return (
                            <div
                                key={idx + 1}
                                className="flex flex-col gap-2 w-[550px] h-[364px] items-center justify-center shrink-0 cursor-pointer"
                                style={{
                                    transform: `translateX(-${currCarousel * pixel}px)`,
                                    transition: carouselTransition,
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
                                    width={500}
                                    height={300}
                                    alt="카드 프로필"
                                    src={item.profileImage}
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
                                                width={500}
                                                height={300}
                                                alt={`hotDeveloper-img-${idx}`}
                                                className="rounded-[50px] w-8 h-8"
                                                style={{ objectFit: "cover" }}
                                                src={item.profileImage}
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
                                                    <Image
                                                        width={24}
                                                        height={24}
                                                        alt="조회수 아이콘"
                                                        src="grayEye.svg"
                                                    />
                                                </div>
                                                <div className="text-gray">{item.viewCnt}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                {/* 이미지 넘기기 버튼 */}
                <button
                    onClick={handleImageNextBtn}
                    className="bg-[rgba(255,255,255,0.80)] rounded-[999px] p-2 flex flex-row gap-2 items-start justify-start shrink-0 absolute left-[1450px] top-[162px] lg:left-[1150px]"
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
                    className="bg-[rgba(255,255,255,0.80)] rounded-[999px] p-2 flex flex-row gap-2 items-start justify-start shrink-0 absolute left-[430px] top-[162px] lg:left-[150px]"
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
