"use client";

import { useState } from "react";

import { useQueryClient } from "@tanstack/react-query";

import { QUERY_KEY } from "@/util/query_key";
import useSupabaseRange from "@/hooks/useSupabaseRange";

import Cards from "./Cards";
import useJobFilterStore from "@/store/jobFilterStore";

export const SELECT_LIST = [
    { value: "*", name: "전체" },
    { value: "프론트앤드 개발자", name: "프론트앤드" },
    { value: "서버/백앤드 개발자", name: "서버/백앤드" },
    { value: "앱 개발자", name: "앱 개발자" },
    { value: "게임 개발자", name: "게임 개발자" },
    // { value: "SW/솔루션 엔지니어", name: "SW/솔루션 엔지니어" },
    // { value: "정보보안 엔지니어", name: "정보보안 엔지니어" },
    // { value: "QA 엔지니어", name: "QA 엔지니어" },
    // { value: "기타", name: "기타" },
];

const JobFilter = () => {
    const { setPage } = useSupabaseRange();
    // const [jobFilter, setJobFilter] = useState("*");
    const { setJobFilter } = useJobFilterStore();
    const [activeMenu, setActiveMenu] = useState("*");

    const queryClient = useQueryClient();

    //직무 변경 버튼
    const handleJobFilterBtn = (jobfilterValue: string) => {
        queryClient.removeQueries({ queryKey: [QUERY_KEY.communityPortfolio] });
        setPage(0);
        setActiveMenu(jobfilterValue);
        return setJobFilter(jobfilterValue);
    };

    return (
        <div className="flex flex-row gap-10 ">
            {SELECT_LIST.map((item, idx) => {
                return (
                    <div className="flex flex-col" key={idx}>
                        <button
                            key={item.value}
                            onClick={() => handleJobFilterBtn(item.value)}
                            className={`h-9 ${
                                activeMenu === item.value ? "border-b-[3px] border-solid border-black" : ""
                            } `}
                        >
                            <div
                                className={`font-spoqaMedium font-bold text-xl ${
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
