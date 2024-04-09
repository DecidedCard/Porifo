"use client";
import useSupabaseRange from "@/hooks/useSupabaseRange";
import { QUERY_KEY } from "@/util/query_key";
import { useQueryClient } from "@tanstack/react-query";
import React from "react";

const Dropdown = ({ props }: any) => {
    const { setView } = props;
    const { setPage, setFilter } = useSupabaseRange();

    const queryClient = useQueryClient();

    //옵션 변경 핸들러
    const handleFilterOption = (filterValue: string) => {
        if (filterValue === "최신순") {
            return refetch("최신순");
        }
        if (filterValue === "오래된 순") {
            return refetch("오래된 순");
        }
    };

    //필터 옵션 변경시 refetch 함수
    const refetch = (filter: string) => {
        queryClient.removeQueries({ queryKey: [QUERY_KEY.communityPortfolio] });
        setPage(0);
        return setFilter(filter);
    };

    const handleFilterChange = (value: string) => {
        return setFilter(value), setView(false), handleFilterOption(value);
    };

    return (
        <div className="list-none font-spoqaMedium font-bold border-solid border-2 border-t-0 border-gray2 rounded-xl ">
            <li
                value="최신순"
                onClick={() => handleFilterChange("최신순")}
                className="p-4 hover:bg-hihigray rounded-xl cursor-pointer"
            >
                최신순
            </li>
            <li
                value="오래된 순"
                onClick={() => handleFilterChange("오래된 순")}
                className="p-4 hover:bg-hihigray rounded-xl cursor-pointer"
            >
                오래된 순
            </li>
            <li
                value="인기순"
                onClick={() => handleFilterChange("인기순")}
                className="p-4 hover:bg-hihigray rounded-xl cursor-pointer "
            >
                인기순
            </li>
        </div>
    );
};

export default Dropdown;
