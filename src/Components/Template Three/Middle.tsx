"use client"

import { PortfolioInfo } from "@/types/PortfolioInfo";
import Image from "next/image";

const Middle = ({ portfolio }: { portfolio: PortfolioInfo }) => {
    return (
        <div>
            <div className="my-10 ml-5 gap-16 flex flex-row items-start justify-start">

                <div className="flex flex-col items-start justify-start">
                    <p className="font-bold text-[22px]">기술스택</p>
                    <div className="bg-deepgray w-[370px] h-[1px] my-5"></div>
                    <div className="flex flex-row flex-wrap text-primary text-[12px] w-[382px] h-fit gap-4 ">
                        {/* {userSkillTags.map((tag, index) => ( */}
                            <span className="flex items-center justify-center py-1 px-3 bg-black rounded-lg text-white h-9">태그</span>
                        {/* ))} */}
                    </div>
                </div>





                <div className="flex flex-col items-start justify-start">
                    <p className="font-bold text-[22px] text-left">자기소개</p>
                    <div className="bg-deepgray w-[370px] h-[1px] my-5"></div>
                    <p className="text-[14px] w-[382px] tracking-wide leading-normal">자기소개</p>
                    <div className="flex flex-row gap-2 items-start justify-start self-stretch shrink-0"></div>
                </div>
            </div>
        </div>
    );
};

export default Middle;