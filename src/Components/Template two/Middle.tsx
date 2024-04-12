"use client";

import { useState, useEffect } from "react";
import { supabasePortfolioInfoRead } from "@/util/supabase/portfolioInfo_supabase_DB";
import { PortfolioInfo } from "@/types/PortfolioInfo";

const Middle = ({ portfolio }: { portfolio: PortfolioInfo }) => {
    const [userInfo, setUserInfo] = useState({
        introduce: portfolio.introduce,
    });

    return (
        <main>
            <div className="my-10 gap-16 flex flex-row items-start justify-start self-stretch shrink-0">
                <div className="flex flex-col items-start justify-start self-stretch shrink-0">
                    <p className="font-bold text-[22px] w-[] h-[]">기술스택</p>
                    <div className="bg-deepgray w-[370px] h-[1px] my-5"></div>
                </div>

                <div className="flex flex-col items-start justify-start">
                    <p className="font-bold text-[22px] w-[] h-[] text-left">자기소개</p>
                    <div className="bg-deepgray w-[370px] h-[1px] my-5"></div>
                    <p className="text-[14px] w-[382px] tracking-wide leading-normal">{userInfo.introduce}</p>
                    <div className="flex flex-row gap-2 items-start justify-start self-stretch shrink-0"></div>
                </div>
            </div>
        </main>
    );
};

export default Middle;
