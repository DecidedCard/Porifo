"use client";

import React, { useEffect } from "react";

import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import { getPortfolio } from "./api";

const Cards = ({ filterData }: { filterData: any }) => {
    const { getFromAndTo, filter, page, setPage, jobFilter } = filterData;

    const { ref, inView } = useInView();

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

    if (isLoading) {
        return <div>로딩중 .. !</div>;
    }

    return (
        <div>
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
