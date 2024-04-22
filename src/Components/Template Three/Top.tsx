"use client";

import { useState } from "react";
import type { PortfolioInfo } from "@/types/PortfolioInfo";
import Image from "next/image";

const Top = ({ portfolio }: { portfolio: PortfolioInfo }) => {


    return (
        <div className="flex justify-between items-center w-[932px] h-[306px] bg-gray">
            <div className="flex flex-col gap-5 ml-[66px] items-start justify-start w-[500px]">
                <h1 className="leading-normal text-[30px] font-bold flex items-start justify-start">
                    한줄소개
                </h1>

                <div className="flex flex-row items-center justify-center gap-12">
                    <div className="flex flex-col items-center justify-center">
                        <h2 className="text-[22px] font-bold flex items-center justify-center">
                            이름
                        </h2>
                        <div className="bg-deepgray w-[60px] h-[1px] my-3"></div>
                        <p className="text-[14px] flex items-center justify-center">
                            직군
                        </p>
                    </div>

                    <address className="text-[14px] text-grayblack flex flex-col items-center justify-center">
                        <div className="flex flex-col items-center justify-center gap-3">
                            {/* {userInfo.tel && ( */}
                            <p className="flex items-center justify-center w-[140px]">
                                <Image
                                    src="/assets/image/tel.svg"
                                    alt="전화"
                                    width={24}
                                    height={24}
                                    className="object-cover w-6 h-6 mr-1"
                                />
                                번호
                            </p>
                            {/* )} */}
                            <p className="flex items-center justify-center w-[140px] pl-3">
                                <Image
                                    src="/assets/image/mail.svg"
                                    alt="메일"
                                    width={24}
                                    height={24}
                                    className="object-cover w-6 h-6 mr-1"
                                />
                                이메일
                            </p>
                        </div>
                    </address>

                </div>
            </div>
            <Image
                className="mr-[66px] w-[200px] h-[200px] relative object-cover"
                src="/assets/image/mainImage1.svg"
                alt="프로필 사진"
                width={200}
                height={200}
            />
        </div>
    );
};

export default Top;