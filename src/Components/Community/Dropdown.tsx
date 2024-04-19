"use client";

import { useQueryClient } from "@tanstack/react-query";

import { QUERY_KEY } from "@/util/query_key";

import useSupabaseRange from "@/hooks/useSupabaseRange";
import useJobFilterStore from "@/store/jobFilterStore";

const filterValue = [
    {
        value: "최신순",
    },
    {
        value: "오래된 순",
    },
    {
        value: "인기순",
    },
];

const Dropdown = ({ props }: any) => {
    const { setView } = props;
    const { setFilter } = useJobFilterStore();

    const queryClient = useQueryClient();

    //옵션 변경 핸들러
    const handleFilterOption = (filterValue: string) => {
        if (filterValue === "최신순") {
            return refetch("최신순");
        }
        if (filterValue === "오래된 순") {
            return refetch("오래된 순");
        }
        if (filterValue === "인기순") {
            return refetch("인기순");
        }
    };

    //필터 옵션 변경시 refetch 함수
    const refetch = (filter: string) => {
        queryClient.removeQueries({ queryKey: [QUERY_KEY.communityPortfolio] });
        return setFilter(filter);
    };

    const handleFilterChange = (value: string) => {
        return setFilter(value), setView(false), handleFilterOption(value);
    };

    return (
        <div className="list-none font-spoqaMedium font-bold border-solid border-2 border-t-0 border-gray2 rounded-xl ">
            {filterValue.map((item, idx) => {
                return (
                    <li
                        key={idx}
                        value={item.value}
                        onClick={() => handleFilterChange(item.value)}
                        className="p-4 hover:bg-hihigray rounded-xl cursor-pointer"
                    >
                        {item.value}
                    </li>
                );
            })}
        </div>
    );
};

export default Dropdown;
