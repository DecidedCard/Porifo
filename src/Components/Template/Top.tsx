"use client"

import { useState, useEffect } from "react";
import { IoCallOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { supabasePortfolioInfoRead } from "@/util/supabase/portfolioInfo_supabase_DB";

const Top = ({id}: {id: string}) => {
    
    const [userInfo, setUserInfo] = useState({
        name: '',
        tel: '',
        email: '',
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await supabasePortfolioInfoRead({ id: 'userId', value: id });

                    setUserInfo({
                        name: data[0].name || '',
                        tel: data[0].tel || '',
                        email: data[0].email || '',
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
                <div className="flex flex-row items-start justify-center self-stretch shrink-0">
                    
                    <img
                        className="rounded-full shrink-0 mr-5 w-36 h-36 relative"
                        src="https://i.pinimg.com/474x/88/44/0b/88440ba4a7ee6ef29f545ec01bec08cf.jpg"
                        alt="프로필 사진"
                    />

                    <div className="flex flex-col gap-5 items-start justify-center shrink-0 w-80 min-w-[320px] max-w-xs">
                        
                        <h1 className="leading-normal text-[30px] text-left font-bold flex items-center justify-start">
                            안녕하세요.
                            <br />
                            게임개발자 홍길동입니다.
                        </h1>

                        <div className="flex flex-col gap-4 items-start justify-start shrink-0 relative">
                            <div className="flex flex-col gap-0 items-start justify-start shrink-0 relative">
                                <h2 className="text-[22px] font-bold text-center relative flex items-center justify-center">
                                    {userInfo.name}
                                </h2>
                                <div className="bg-deepgray w-[60px] h-[1px] my-3"></div>
                                <p className="text-[14px] text-center relative flex items-center justify-center">
                                    게임개발자
                                </p>
                            </div>

                            <address className="text-[14px] text-grayblack flex flex-col items-start justify-start self-stretch shrink-0 relative">
                                <div className="flex flex-row items-center justify-start shrink-0 relative">
                                    <p className="text-center relative flex items-center justify-center mb-2">
                                       <IoCallOutline className="mr-2"/> {userInfo.tel}
                                    </p>
                                </div>

                                <div className="flex flex-row items-center justify-start shrink-0 relative">
                                    <p className="text-center relative flex items-center justify-center">
                                        <AiOutlineMail className="mr-2"/> {userInfo.email}
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
