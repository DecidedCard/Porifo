import { useState, useEffect } from "react";
import { IoCallOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { supabasePortfolioInfoRead } from "@/util/supabase/portfolioInfo_supabase_DB";

const Top = () => {



    return (
        <main className="mt-10">
            <div className="flex flex-col gap-8 items-center justify-center self-stretch shrink-0">
                <div className="flex flex-col items-center justify-center self-stretch shrink-0">

                    <img
                        className="rounded-full shrink-0 mr-5 w-[200px] h-[200px] relative"
                        src="https://i.pinimg.com/474x/88/44/0b/88440ba4a7ee6ef29f545ec01bec08cf.jpg"
                        alt="프로필 사진"
                    />

                    <div className="flex flex-col gap-5 items-center justify-center shrink-0 w-80 min-w-[320px] max-w-xs">

                        <h1 className="leading-normal text-[30px] text-left font-bold flex items-center justify-start">
                            한 줄 소개
                        </h1>

                        <div className="flex flex-col gap-4 items-center justify-center shrink-0 relative">
                            <div className="flex flex-col gap-0 items-center justify-center shrink-0 relative">
                                <h2 className="text-[22px] font-bold text-center relative flex items-center justify-center">
                                    이름
                                </h2>
                                <div className="bg-deepgray w-[60px] h-[1px] my-3"></div>
                                <p className="text-[14px] text-center relative flex items-center justify-center">
                                    직업
                                </p>
                            </div>

                            <address className="text-[14px] text-grayblack flex flex-row items-center justify-center self-stretch shrink-0 gap-5 relative">
                                <div className="flex flex-row items-center justify-start shrink-0 relative">
                                    <p className="text-center relative flex items-center justify-center">
                                        <IoCallOutline className="mr-2" /> 010-0000-0000
                                    </p>
                                </div>

                                <div className="flex flex-row items-center justify-start shrink-0 relative">
                                    <p className="text-center relative flex items-center justify-center">
                                        <AiOutlineMail className="mr-2" /> example@naver.com
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
