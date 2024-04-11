"use client"

import { useState, useEffect } from "react";
import {supabasePortfolioInfoRead} from "@/util/supabase/portfolioInfo_supabase_DB"
import { RiLinkM } from "react-icons/ri";

const URL = ({id}: {id: string}) => {

    const [userInfo, setUserInfo] = useState({
        blogLink: '',
        githubLink: '',
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await supabasePortfolioInfoRead({ id: 'userId', value: id });

                setUserInfo({
                    blogLink: data[0].blogLink || '',
                    githubLink: data[0].githubLink || '',
                });

            } catch (error) {
                console.error("사용자 정보를 가져오는 데 실패했습니다.", error);
            }
        };

        fetchData();
    }, []);
    
    return (
        <main className="flex my-10">
            <div className="flex flex-row items-start justify-start self-stretch shrink-0 relative">
                <div className="flex flex-col gap-2 items-start justify-start flex-1 relative">
                    <div className="font-bold text-[22px] relative">
                        URL
                    </div>
                    <div className="bg-deepgray w-[804px] h-[1px] my-5"></div>
                    <div className="flex flex-col gap-2 items-start justify-start self-stretch shrink-0 relative">
                        
                        <div className="flex flex-col gap-5 items-center justify-start shrink-0 relative">

                            <div className="flex items-center justify-start text-[14px] text-neutral-500">
                                <RiLinkM className="mr-2"/> {userInfo.blogLink}
                            </div>
                            <div className="flex items-center justify-start text-[14px] text-neutral-500">
                                <RiLinkM className="mr-2"/> {userInfo.githubLink}
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </main>
    );
};

export default URL;