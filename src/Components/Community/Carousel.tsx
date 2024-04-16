"use client";

import { useEffect, useRef, useState } from "react";

import { useQuery, useQueryClient } from "@tanstack/react-query";

import { getHotDevelopers } from "@/util/supabase/community_filter_DB";
import { QUERY_KEY } from "@/util/query_key";

import useCardIdStore from "@/store/detailStore";

const Carousel = () => {
    const [translateX, setTranslateX] = useState(0);

    const [currCarousel, setCurrCarousel] = useState(0);
    const [carouselTransition, setCarouselTransition] = useState("transform 500ms ease-in-out");
    const carouselRef = useRef(null);

    const { setCardId, setIsOpenModal } = useCardIdStore();

    const queryClient = useQueryClient();

    const { isPending, data } = useQuery({
        queryKey: ["hotDevelopers"],
        queryFn: getHotDevelopers,
        refetchOnWindowFocus: false,
    });

    if (isPending) {
        return <div>로딩 중 ... !!</div>;
    }

    const dataStart = data?.[0];
    const dataEnd = data?.[data.length - 1];
    const modifiedArray = [dataEnd, ...data!, dataStart];

    const handleImageNextBtn = () => {
        // const trans = 275;
        // if (translateX < -825) {
        //     return;
        // }
        // setTranslateX((prevTranslateX) => prevTranslateX - trans);

        const SliderLength = 5;
        const newCurr = currCarousel + 1; //현재 보고있는 index를 1씩 증가.
        setCurrCarousel(newCurr);

        if (newCurr === SliderLength + 1) {
            moveToNthSlide(0);
        }

        setCarouselTransition("transform 500ms ease-in-out");
    };

    const handleImagePrevBtn = () => {
        const SliderLength = 5;
        const newCurr = currCarousel - 1; //현재 보고있는 index를 1씩 증가.
        setCurrCarousel(newCurr);

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
                <div className="flex w-screen overflow-hidden" ref={carouselRef}>
                    {modifiedArray!.map((item: any, idx) => {
                        return (
                            <div
                                key={item.id}
                                className="flex flex-col gap-2 w-screen h-[364px] items-center justify-center shrink-0 cursor-pointer"
                                style={{
                                    transform: `translateX(-${currCarousel * 100}%)`,
                                    transition: carouselTransition,
                                }}
                                onClick={() => {
                                    setIsOpenModal(true),
                                        setCardId(item.id),
                                        queryClient.removeQueries({ queryKey: [QUERY_KEY.detailPortfolio] });
                                }}
                            >
                                {/* 카드 이미지 */}
                                <img
                                    className="rounded-2xl w-[100%] h-[100%] "
                                    style={{
                                        objectFit: "cover",
                                    }}
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
                                            <img
                                                className="rounded-[50px] w-8 h-8"
                                                style={{ objectFit: "cover" }}
                                                alt={`hotDeveloper-img-${idx}`}
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
                </div>

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
