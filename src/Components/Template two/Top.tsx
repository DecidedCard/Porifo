"use client";

import { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { PortfolioInfo } from "@/types/PortfolioInfo";
import Image from "next/image";

const Top = ({ portfolio }: { portfolio: PortfolioInfo }) => {
    const [userInfo, setUserInfo] = useState({
        name: portfolio.name,
        job: portfolio.job,
        tel: portfolio.tel,
        email: portfolio.email,
        profileImage: portfolio.profileImage || "",
        oneLineIntroduce: portfolio.oneLineIntroduce,
    });

    return (
        <main className="mt-10">
            <div className="flex flex-col gap-8 items-center justify-center self-stretch shrink-0">
                <div className="flex flex-row items-start justify-center self-stretch shrink-0">
                    <Image
                        className="rounded-full shrink-0 mr-8 w-[200px] h-[200px] relative"
                        src={userInfo.profileImage}
                        alt="프로필 사진"
                        width={200}
                        height={200}
                    />

                    <div className="flex flex-col gap-5 items-start justify-center shrink-0 w-80 min-w-[320px] max-w-xs">
                        <h1 className="leading-normal text-[30px] text-left font-bold flex items-center justify-start">
                            {userInfo.oneLineIntroduce}
                        </h1>

                        <div className="flex flex-col gap-4 items-start justify-start shrink-0 relative">
                            <div className="flex flex-col gap-0 items-start justify-start shrink-0 relative">
                                <h2 className="text-[22px] font-bold text-center relative flex items-center justify-center">
                                    {userInfo.name}
                                </h2>
                                <div className="bg-deepgray w-[60px] h-[1px] my-3"></div>
                                <p className="text-[14px] text-center relative flex items-center justify-center">
                                    {userInfo.job}
                                </p>
                            </div>

                            <address className="text-[14px] text-grayblack flex flex-col items-start justify-start self-stretch shrink-0 relative">
                                <div className="flex flex-row items-center justify-start">
                                    <p className="text-center flex items-center justify-center mr-5">
                                        <Image
                                            src="assets/image/tel.svg"
                                            alt="전화"
                                            width={24}
                                            height={24}
                                            className="w-6 h-6 mr-1"
                                        />
                                        {userInfo.tel}
                                    </p>

                                    <p className="text-center flex items-center justify-center">
                                        <Image
                                            src="assets/image/mail.svg"
                                            alt="메일"
                                            width={24}
                                            height={24}
                                            className="w-6 h-6 mr-1"
                                        />
                                        {userInfo.email}
                                    </p>
                                </div>
                            </address>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Top;
