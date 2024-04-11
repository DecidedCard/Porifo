"use client"

import { useState, useEffect } from "react";
import { IoCallOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { supabasePortfolioInfoRead } from "@/util/supabase/portfolioInfo_supabase_DB";

const Top = ({ id }: { id: string }) => {

    const [userInfo, setUserInfo] = useState({
        name: '',
        tel: '',
        job: '',
        email: '',
        profileImage: '',
        oneLineIntroduce: '',
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await supabasePortfolioInfoRead({ id: 'userId', value: id });

                setUserInfo({
                    name: data[0].name || '',
                    tel: data[0].tel || '',
                    job: data[0].job || '',
                    email: data[0].email || '',
                    profileImage: data[0].profileImage || '',
                    oneLineIntroduce: data[0].oneLineIntroduce || '',
                });

            } catch (error) {
                console.error("사용자 정보를 가져오는 데 실패했습니다.", error);
            }
        };

        fetchData();
    }, []);

    return (
        <main className="mt-10">
            <div className="flex flex-col gap-8 items-center justify-center self-stretch shrink-0">
                <div className="flex flex-col items-center justify-center self-stretch shrink-0">

                    <img
                        className="rounded-full shrink-0 mr-5 w-[200px] h-[200px] relative"
                        src={userInfo.profileImage}
                        alt="프로필 사진"
                    />

                    <div className="flex flex-col gap-5 items-center justify-center shrink-0 w-80 min-w-[320px] max-w-xs">

                        <h1 className="leading-normal text-[30px] mt-5 font-bold flex items-center justify-start">
                            {userInfo.oneLineIntroduce}
                        </h1>

                        <div className="flex flex-col gap-4 items-center justify-center shrink-0 relative">
                            <div className="flex flex-col gap-0 items-center justify-center shrink-0 relative">
                                <h2 className="text-[22px] font-bold text-center relative flex items-center justify-center">
                                    {userInfo.name}
                                </h2>
                                <div className="bg-deepgray w-[60px] h-[1px] my-3"></div>
                                <p className="text-[14px] text-center relative flex items-center justify-center">
                                    {userInfo.job}
                                </p>
                            </div>

                            <address className="text-[14px] text-grayblack flex flex-row items-center justify-center self-stretch shrink-0 gap-5 relative">
                                <div className="flex flex-row items-center justify-start shrink-0 relative">
                                    <p className="text-center relative flex items-center justify-center">
                                        <IoCallOutline className="mr-2" /> {userInfo.tel}
                                    </p>
                                </div>

                                <div className="flex flex-row items-center justify-start shrink-0 relative">
                                    <p className="text-center relative flex items-center justify-center">
                                        <AiOutlineMail className="mr-2" /> {userInfo.email}
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
