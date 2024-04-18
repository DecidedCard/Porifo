
import React from 'react';
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "@/util/query_key";
import { getHotDevelopers } from "@/util/supabase/community_filter_DB";
import Loading from "../Loading";

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
            <div className="flex flex-col items-center justify-center h-[466px] w-screen bg-hihigray">
                <div className="flex flex-col gap-6 items-start">
                    <p className="font-spoqaBold text-[40px] font-bold mb-14">
                        포리포 추천, HOT🔥 개발자
                    </p>
                </div>

                <div className="flex flex-row gap-6">
                    {data?.slice(0, 4).map((developer: any, idx) => (
                        <React.Fragment key={idx}>
                            <div className="rounded-2xl w-[302px] h-[225px] overflow-hidden">
                                <div className="flex items-center justify-center">
                                    <div className="relative">
                                        <Image
                                            className="rounded-2xl ease-in-out duration-300 hover:scale-105"
                                            src={developer.profileImage || ""}
                                            alt="썸네일"
                                            width={302}
                                            height={210}
                                            style={{ objectFit: "cover" }}
                                        />
                                        <div
                                            className="absolute top-[136px] w-full h-[90px] bg-[#0000008F] rounded-bl-2xl rounded-br-2xl px-6"
                                            style={{ backdropFilter: "var(--bgblur56-backdrop-filter, blur(28px))" }}>
                                            <div className="flex items-center mt-5">
                                                <div className="flex flex-col gap-4 flex-1 text-sm">
                                                    <p className="text-white">{developer.oneLineIntroduce.length > 20
                                                        ? `${developer.oneLineIntroduce.substring(0, 20)}...`
                                                        : developer.oneLineIntroduce}</p>


                                                    <div className="flex justify-between w-full">
                                                        <div className="flex items-center gap-2">
                                                            <Image
                                                                className="rounded-full w-5 h-5"
                                                                src={developer.profileImage || ""}
                                                                alt="프로필 이미지"
                                                                width={20}
                                                                height={20}
                                                                style={{ objectFit: "cover" }}
                                                            />
                                                            <div className="text-white text-[10px] flex items-center">
                                                                {developer.name}
                                                            </div>
                                                        </div>

                                                        <div className="flex items-center ml-20 text-[10px]">
                                                            <Image
                                                                src="grayHeart.svg"
                                                                alt="좋아요 아이콘"
                                                                width={24}
                                                                height={24}
                                                                className="mr-1"
                                                            />
                                                            <p className="text-white">{developer.viewCnt}</p>
                                                        </div>

                                                        <div className="flex items-center text-[10px]">
                                                            <Image
                                                                src="grayEye.svg"
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

            <div className="flex flex-col items-start justify-start ml-[450px] mt-36 gap-4">
                <p className="flex items-center justify-center font-bold text-[40px] leading-normal">
                    동료들이 올린 양질의 정보를
                    <br />
                    손쉽게 확인할 수 있어요
                </p>
                <p className="text-gray3 leading-normal flex items-start justify-start pr-24 text-[20px]">
                    우리 옆의 동료도 이걸 쓰고 있을 수 있어요!
                </p>
            </div>


        </main>
    );
};

export default Recommendation;
