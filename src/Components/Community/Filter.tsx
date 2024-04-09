"use client";

import React, { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

import Cards from "./Cards";
import { QUERY_KEY } from "@/util/query_key";

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

const Filter = () => {
    const [page, setPage] = useState(0);
    const [filter, setFilter] = useState("기본순");
    const [jobFilter, setJobFilter] = useState("");

    const queryClient = useQueryClient();

    //supabase range value
    const getFromAndTo = () => {
        const ITEM_PER_PAGE = 5;

        let from = page * ITEM_PER_PAGE; //0
        let to = from + ITEM_PER_PAGE; //6

        if (page > 0) {
            from += 1;
        }
        return { from, to };
    };

    //옵션 변경 핸들러
    const handleFilterOption = (filterValue: string) => {
        if (filterValue === "최신순") {
            return refetch("최신순");
        }
        if (filterValue === "기본순") {
            return refetch("기본순");
        }
    };

    //필터 옵션 변경시 refetch 함수
    const refetch = (filter: string) => {
        queryClient.removeQueries({ queryKey: [QUERY_KEY.communityPortfolio] });
        setPage(0);
        return setFilter(filter);
    };

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
            {/* <select classNameName="border-2 border-rose-600 p-5" onChange={(e) => handleFilterOption(e.target.value)}>
                <option value="none" hidden>
                    {filter}
                </option>
                <option value="기본순">기본순</option>
                <option value="최신순">최신순</option>
            </select>
            {filterBtn.map((item) => {
                return (
                    <button key={item.value} className="m-2 border p-5" onClick={() => handleJobFilterBtn(item.value)}>
                        {item.name}
                    </button>
                );
            })} */}
            <Cards filterData={{ getFromAndTo, filter, page, setPage, jobFilter }} />
        </>
    );
};

export default Filter;
