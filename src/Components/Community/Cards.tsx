"use client";

import React, { useEffect } from "react";
import Link from "next/link";

import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";

import { getPortfolio } from "../../util/supabase/community_filter_DB";
import { QUERY_KEY } from "@/util/query_key";

const Cards = ({ filterData }: { filterData: any }) => {
    const { filter, page, setPage, jobFilter, getFromAndTo } = filterData;

    //useInfiniteQuery
    const { isLoading, data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
        queryKey: [QUERY_KEY.communityPortfolio],
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

    const { ref, inView } = useInView();

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
                            <Link
                                href={`detail/${item.id}`}
                                className="border-2 mt-10 border-solid p-20 flex justify-center"
                            >
                                {item.name}
                            </Link>
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
