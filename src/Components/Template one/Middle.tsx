"use client"

import { supabasePortfolioInfoRead } from "@/util/supabase/portfolioInfo_supabase_DB";
import { useState, useEffect } from "react";
import { Career } from '@/types/Career';

const Middle = ({ id }: { id: string }) => {

    const [userInfo, setUserInfo] = useState({
        introduce: '',
    });
    const [userCareer, setUserCareer] = useState<Career[]>(
        []
    );

    const experiences = [
        ...userCareer
    ];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await supabasePortfolioInfoRead({ id: 'userId', value: id });
                const career = data[0].career as Career[]
                setUserCareer(
                    career, 
                )
                setUserInfo({
                    introduce: data[0].introduce || '',
                });

            } catch (error) {
                console.error("사용자 정보를 가져오는 데 실패했습니다.", error);
            }
        };

        fetchData();
    }, []);


    return (
        <main>

            <div className="my-10 gap-16 flex flex-col items-start justify-start self-stretch shrink-0">

                <div className="flex flex-col items-start justify-start self-stretch shrink-0" >
                    <p className="font-bold text-[22px] w-[] h-[]">
                        프로젝트
                    </p>
                </div>

                <div className="flex flex-col items-start justify-start self-stretch shrink-0" >
                    <p className="font-bold text-[22px] w-[] h-[]">
                        기술스택
                    </p>
                </div>

                <div className="flex flex-col items-start justify-start self-stretch shrink-0" >
                    <p className="font-bold text-[22px] ">
                        업무경험
                    </p>
                    <div className="bg-deepgray w-[804px] h-[1px] my-5"></div>
                    <ol >
                        {experiences.map((experience, index) => (
                            <li key={index} className="flex relative">
                                <div className="flex w-full flex-col">
                                    {/* 제목과 날짜를 포함하는 영역 */}
                                    <div className="flex justify-between w-[804px]">
                                        <h3 className="text-[20px] font-semibold text-gray-900 mb-3">{experience.company}</h3>
                                        <time className="text-middlegray text-[12px] font-normal leading-none">{experience.date}</time>
                                    </div>

                                    {/* 설명과 상세 정보를 포함하는 영역 */}
                                    <div className="flex flex-col w-[480px]">
                                        <p className="text-[14px] font-normal mb-2 text-neutral-600">{experience.department} / {experience.position}</p>
                                        <div className="flex flex-col">
                                            <p className="font-normal text-neutral-500 leading-6 text-[12px]">
                                                ㅤ• {experience.comment}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>

                <div className="flex flex-col items-start justify-start">
                    <p className="font-bold text-[22px]">
                        자기소개
                    </p>
                    <div className="bg-deepgray w-[804px] h-[1px] my-5"></div>
                    <p className="text-[14px] w-[804px] tracking-wide leading-normal">{userInfo.introduce}</p>
                    <div className="flex flex-row gap-2 items-start justify-start self-stretch shrink-0">

                    </div>
                </div>
            </div>

        </main>
    );
};

export default Middle;
