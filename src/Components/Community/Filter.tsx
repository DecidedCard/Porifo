"use client";

import React, { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import Cards from "./Cards";
import { SELECT_LIST } from "@/util/select_list";

const Filter = () => {
    const [page, setPage] = useState(0);
    const [filter, setFilter] = useState("기본순");
    const [jobFilter, setJobFilter] = useState("");

    const queryClient = useQueryClient();

    const filterBtn = SELECT_LIST.slice(1, SELECT_LIST.length);

    //supabase range vlaue
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
        queryClient.removeQueries({ queryKey: ["portfolio"] });
        setPage(0);
        return setFilter(filter);
    };

    //직무 변경 버튼
    const handleJobFilterBtn = (jobfilterValue: string) => {
        queryClient.removeQueries({ queryKey: ["portfolio"] });
        setPage(0);
        return setJobFilter(jobfilterValue);
    };

    return (
        <>
            <select className="border-2 border-rose-600 p-5" onChange={(e) => handleFilterOption(e.target.value)}>
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
            })}
            <Cards filterData={{ getFromAndTo, filter, page, setPage, jobFilter }} />
        </>
    );
};

export default Filter;
