"use client";

import React, { useEffect } from "react";

import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import { getPortfolio } from "./api";

const Cards = ({ filterData }: { filterData: any }) => {
    const { getFromAndTo, filter, page, setPage, jobFilter } = filterData;

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
        <>
            <div className="mt-8 flex flex-wrap gap-6 items-start justify-start shrink-0 relative pl-96 w-[1500px] ">
                {data?.pages.map((portfolio: any) => {
                    return portfolio.map((item: any) => {
                        return (
                            <div key={item.id} className=" w-[350px]">
                                <div className="flex flex-col gap-2 items-start justify-start flex-1 relative">
                                    <img
                                        className="rounded-2xl self-stretch shrink-0 h-60 relative"
                                        style={{
                                            background: "linear-gradient(to left, #d9d9d9, #d9d9d9)",
                                            objectFit: "cover",
                                        }}
                                        src="rectangle-1153.png"
                                    />
                                    <div className="flex flex-row items-center justify-between self-stretch shrink-0 relative">
                                        <div className="flex flex-row gap-2 items-center justify-start flex-1 relative">
                                            <img
                                                className="rounded-[50px] shrink-0 w-8 h-8 relative"
                                                style={{ objectFit: "cover" }}
                                                src="rectangle0.png"
                                            />
                                            <div className="text-graytext-black text-center font-body-p7m-font-family text-body-p7m-font-size leading-body-p7m-line-height font-body-p7m-font-weight relative flex items-center justify-center">
                                                {item.name}
                                            </div>
                                        </div>
                                        <div className="flex flex-row gap-4 items-center justify-end shrink-0 relative">
                                            <div className="flex flex-row gap-1 items-center justify-start shrink-0 relative">
                                                <div className="shrink-0 w-6 h-6 relative">
                                                    <img
                                                        className="w-[100%] h-[100%] absolute right-[0%] left-[0%] bottom-[0%] top-[0%] overflow-visible"
                                                        src="frame-13740.svg"
                                                    />
                                                </div>
                                                <div className="text-graytext-4 text-center font-body-p7r-font-family text-body-p7r-font-size leading-body-p7r-line-height font-body-p7r-font-weight relative flex items-center justify-center">
                                                    210
                                                </div>
                                            </div>
                                            <div className="flex flex-row gap-1 items-center justify-start shrink-0 relative">
                                                <img
                                                    className="shrink-0 w-6 h-6 relative overflow-visible"
                                                    src="icon-set1.svg"
                                                />
                                                <div className="text-graytext-4 text-center font-body-p7r-font-family text-body-p7r-font-size leading-body-p7r-line-height font-body-p7r-font-weight relative flex items-center justify-center">
                                                    1523
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    });
                })}
                <div ref={ref} />
                {isFetchingNextPage && <h3>Loding...</h3>}
            </div>
        </>
    );
};

export default Cards;
