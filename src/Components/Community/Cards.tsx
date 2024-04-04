"use client";

import React, { useEffect, useState } from "react";

import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import { getPortfolio } from "./api";
import useInfo from "@/hooks/mypage/useInfo";

const Cards = () => {
    const [page, setPage] = useState(0);
    const [filter, setFilter] = useState("기본순");
    const [jobFilter, setJobFilter] = useState("직무 선택");

    const queryClient = useQueryClient();
    const { ref, inView } = useInView();

    const { selectList } = useInfo();
    const filterBtn = selectList.slice(1, selectList.length);

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
    //useInfiniteQuery
    const { isLoading, data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
        queryKey: ["portfolio"],
        queryFn: () => getPortfolio({ getFromAndTo, filter, page, setPage, jobFilter }),
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages) => {
            if (lastPage!.length < 5) {
                return null;
            }
            return allPages.length + 1;
        },
        refetchOnWindowFocus: false,
    });
    //inView && hasNextPage 둘다 true시 다음페이지 fetch
    useEffect(() => {
        if (inView && hasNextPage) {
            fetchNextPage();
        }
        return;
    }, [inView, hasNextPage]);

    //옵션 변경 핸들러
    const handleFilterOption = (filterValue: string) => {
        if (filterValue === "최신순") {
            return refetch("최신순");
        }
        if (filterValue === "기본순") {
            return refetch("기본순");
        } else {
            return refetch(filterValue);
        }
    };
    //직무 변경 버튼
    const handleJobFilterBtn = (jobfilterValue: string) => {
        console.log(jobfilterValue);
        queryClient.removeQueries({ queryKey: ["portfolio"] });
        setPage(0);
        return setJobFilter(jobfilterValue);
    };

    //필터 옵션 변경시 refetch 함수
    const refetch = (filter: string) => {
        queryClient.removeQueries({ queryKey: ["portfolio"] });
        setPage(0);
        return setFilter(filter);
    };

    if (isLoading) {
        return <div>로딩중 .. !</div>;
    }

    return (
        <div>
            <select className="border-2 border-rose-600 p-5" onChange={(e) => handleFilterOption(e.target.value)}>
                <option value="none" hidden>
                    {filter}
                </option>
                <option value="기본순">기본순</option>
                <option value="최신순">최신순</option>
            </select>
            {/* <select className="p-5" onChange={(e) => handleJobFilterOption(e.target.value)}>
                <option value="none" hidden>
                    {jobFilter}
                </option> */}
            {filterBtn.map((item) => {
                return (
                    <button
                        key={item.value}
                        onClick={(e: any) => handleJobFilterBtn(e.target.value)}
                        className="m-2 border p-5"
                        value={item.value}
                    >
                        {item.name}
                    </button>
                );
            })}
            {data?.pages.map((portfolio: any) => {
                return portfolio.map((item: any) => {
                    return (
                        <div key={item.id}>
                            <div className="border-2 border-solid p-20 flex justify-center">{item.name}</div>
                        </div>
                    );
                });
            })}
            <div ref={ref} />
            {isFetchingNextPage && <h3>Loding...</h3>}
        </div>
    );
};

export default Cards;
