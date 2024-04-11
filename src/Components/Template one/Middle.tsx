import WorkTimelineItem from "../TimeLine/WorkTimelineItem";
import { supabasePortfolioInfoRead } from "@/util/supabase/portfolioInfo_supabase_DB";
import { useState, useEffect } from "react";

const Middle = ({ id }: { id: string }) => {

    // const [userCareer, setUserCareer] = useState({
    //     company: '',
    //     department: '',
    //     position: '',
    //     comment: '',
    //     date: '',
    // });

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const data = await supabasePortfolioInfoRead({ id: 'userId', value: id });

    //             setUserCareer({
    //                 company: data[0].company || '',
    //                 department: data[0].department || '',
    //                 position: data[0].position || '',
    //             });

    //         } catch (error) {
    //             console.error("사용자 정보를 가져오는 데 실패했습니다.", error);
    //         }
    //     };

    //     fetchData();
    // }, []);

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
                    <p className="font-bold text-[22px] w-[] h-[]">
                        업무경험
                    </p>
                    <div className="bg-deepgray w-[804px] h-[1px] my-5"></div>
                </div>

                <div className="flex flex-col items-start justify-start">
                    <p className="font-bold text-[22px] w-[] h-[] text-left">
                        자기소개
                    </p>
                    <div className="bg-deepgray w-[804px] h-[1px] my-5"></div>
                    <div className="flex flex-row gap-2 items-start justify-start self-stretch shrink-0">

                    </div>
                </div>
            </div>

        </main>
    );
};

export default Middle;
