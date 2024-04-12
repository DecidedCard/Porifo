"use client";

import { useState, useEffect } from "react";
import { RiLinkM } from "react-icons/ri";
import { PortfolioInfo } from "@/types/PortfolioInfo";

const URL = ({ portfolio }: { portfolio: PortfolioInfo }) => {
    const [userInfo] = useState({
        blogLink: portfolio.blogLink,
        githubLink: portfolio.githubLink,
    });

    return (
        <main className="flex">
            <div className="flex flex-row items-start justify-start self-stretch shrink-0 relative">
                <div className="flex flex-col items-start justify-start flex-1 relative">
                    <div className="font-bold text-[22px] relative">URL</div>
                    <div className="bg-deepgray w-[804px] h-[1px] my-5"></div>
                    <div className="flex flex-col items-start justify-start self-stretch shrink-0 relative">
                        <div className="flex flex-col gap-5 items-center justify-start shrink-0 relative">
                            <div className="flex items-center justify-start text-[14px] text-neutral-500">
                                <RiLinkM className="mr-2" /> {userInfo.blogLink}
                            </div>
                            <div className="flex items-center justify-start text-[14px] text-neutral-500">
                                <RiLinkM className="mr-2" /> {userInfo.githubLink}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default URL;
