"use client";

import { useState } from "react";
import type { PortfolioInfo } from "@/types/PortfolioInfo";
import Image from "next/image";

const URL = ({ portfolio }: { portfolio: PortfolioInfo }) => {
    const [userInfo] = useState({
        blogLink: portfolio.blogLink,
        githubLink: portfolio.githubLink,
    });

    if (portfolio.blogLink || portfolio.githubLink) {
        return (
            <main className="flex">
                <div className="flex flex-row items-start justify-start self-stretch shrink-0 relative">
                    <div className="flex flex-col items-start justify-start flex-1 relative">
                        <div className="font-bold text-[22px] relative">URL</div>
                        <div className="bg-deepgray w-[804px] h-[1px] my-5"></div>
                        <div className="flex flex-col items-start justify-start self-stretch shrink-0 relative">
                            <div className="flex flex-col gap-5 items-center justify-start shrink-0 relative">
                                <div className="flex items-center justify-start text-[14px] text-neutral-500">
                                    <Image
                                        src="/assets/image/link.svg"
                                        alt="link"
                                        width={24}
                                        height={24}
                                        className="mr-1"
                                    />
                                    {userInfo.blogLink}
                                </div>
                                <div className="flex items-center justify-start text-[14px] text-neutral-500">
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
        return null; // 또는 렌더링하고 싶은 다른 요소나 메시지를 반환할 수 있습니다.
    }
};

export default URL;
