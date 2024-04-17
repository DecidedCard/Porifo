"use client";

import { useState } from "react";
import { PortfolioInfo } from "@/types/PortfolioInfo";
import Image from "next/image";

const URL = ({ portfolio }: { portfolio: PortfolioInfo }) => {
    const [userInfo, setUserInfo] = useState({
        blogLink: portfolio.blogLink,
        githubLink: portfolio.githubLink,
    });

    if (portfolio.blogLink || portfolio.githubLink) {
        return (
            <main className="flex my-10">
                <div className="flex flex-row items-start justify-start">
                    <div className="flex flex-col gap-2 items-start justify-start flex-1">
                        <div className="font-bold text-[22px]">URL</div>

                        <div className="bg-deepgray w-[804px] h-[1px] my-5"></div>

                        <div className="flex flex-col gap-2 items-start justify-start">
                            <div className="flex flex-col gap-5 items-start justify-start">
                                <div className="flex items-center text-[14px] text-neutral-500">
                                    <Image
                                        src="/assets/image/link.svg"
                                        alt="link"
                                        width={24}
                                        height={24}
                                        className="mr-1"
                                    />
                                    {userInfo.blogLink}
                                </div>
                                <div className="flex items-center text-[14px] text-neutral-500">
                                    <Image
                                        src="/assets/image/link.svg"
                                        alt="link"
                                        width={24}
                                        height={24}
                                        className="mr-1"
                                    />
                                    {userInfo.githubLink}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    } else {
        return null;
    }
};

export default URL;
