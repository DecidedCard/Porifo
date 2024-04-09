"use client";

import React, { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

import Cards from "./Cards";

import { QUERY_KEY } from "@/util/query_key";
import useSupabaseRange from "@/hooks/useSupabaseRange";

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
    const [jobFilter, setJobFilter] = useState("");

    const queryClient = useQueryClient();

    //직무 변경 버튼
    const handleJobFilterBtn = (jobfilterValue: string) => {
        queryClient.removeQueries({ queryKey: [QUERY_KEY.communityPortfolio] });
        setPage(0);
        return setJobFilter(jobfilterValue);
    };

    return (
        <>
            <div className="flex flex-row gap-10 items-start justify-start relative">
                {SELECT_LIST.map((item) => {
                    return (
                        <button
                            key={item.value}
                            onClick={() => handleJobFilterBtn(item.value)}
                            className="p-2 flex flex-col gap-2 items-center justify-start shrink-0 h-12 relative "
                        >
                            <div className="text-center font-spoqaMedium text-black font-bold text-xl leading-subhead-sh5-line-height relative min-w-[40px] flex items-center justify-center">
                                {item.name}
                            </div>
                        </button>
                    );
                })}
            </div>
            <Cards filterData={{ jobFilter }} />
        </>
    );
};

export default JobFilter;
