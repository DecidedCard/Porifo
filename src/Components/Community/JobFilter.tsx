"use client";

import { useState } from "react";

import { useQueryClient } from "@tanstack/react-query";

import { QUERY_KEY } from "@/util/query_key";

import useJobFilterStore from "@/store/jobFilterStore";

export const SELECT_LIST = [
    { value: "*", name: "전체" },
    { value: "프론트앤드 개발자", name: "프론트앤드" },
    { value: "서버/백앤드 개발자", name: "서버/백앤드" },
    { value: "앱 개발자", name: "앱 개발자" },
    { value: "게임 개발자", name: "게임 개발자" },
];

const JobFilter = () => {
    const { setJobFilter } = useJobFilterStore();
    const [activeMenu, setActiveMenu] = useState("*");

    const queryClient = useQueryClient();

    //직무 변경 버튼
    const handleJobFilterBtn = (jobfilterValue: string) => {
        queryClient.removeQueries({ queryKey: [QUERY_KEY.communityPortfolio] });

        setActiveMenu(jobfilterValue);
        return setJobFilter(jobfilterValue);
    };

    return (
        <div className="flex flex-row gap-8 lg:ml-2 sm:w-full sm:justify-center sm:gap-5">
            {SELECT_LIST.map((item, idx) => {
                return (
                    <div className="flex flex-col " key={idx}>
                        <button
                            key={item.value}
                            onClick={() => handleJobFilterBtn(item.value)}
                            className={`h-8 ${
                                activeMenu === item.value ? "border-b-[1.5px] border-solid border-black" : ""
                            } `}
                        >
                            <div
                                className={`h-[48px] font-spoqaMedium font-medium text-base sm:text-[13px] ${
                                    activeMenu === item.value ? " text-black" : "text-gray3"
                                }`}
                            >
                                {item.name}
                            </div>
                        </button>
                    </div>
                );
            })}
        </div>
    );
};

export default JobFilter;
