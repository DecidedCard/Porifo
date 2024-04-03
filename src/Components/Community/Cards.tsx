"use client";

import React, { useEffect, useState } from "react";

import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import { getPortfolio } from "./api";

const Cards = () => {
    const [page, setPage] = useState(0);
    const [filter, setFilter] = useState("기본순");

    const queryClient = useQueryClient();
    const { ref, inView } = useInView();

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
        queryFn: () => getPortfolio({ getFromAndTo, filter, page, setPage }),
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
            refetch("최신순");
        }
        if (filterValue === "기본순") {
            refetch("기본순");
        }
    };

    //필터 옵션 변경시 refetch 함수
    const refetch = (filter: string) => {
        queryClient.removeQueries({ queryKey: ["portfolio"] });
        setFilter(filter);
        setPage(0);
    };

    if (isLoading) {
        return <div>로딩중 .. !</div>;
    }

    return (
        <div>
            <select onChange={(e) => handleFilterOption(e.target.value)}>
                <option value="none" hidden>
                    {filter}
                </option>
                <option value="기본순">기본순</option>
                <option value="최신순">최신순</option>
            </select>
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
