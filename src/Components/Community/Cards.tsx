"use client";

import React, { useEffect } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";

import { getTodo } from "./api";

const Cards = () => {
    const { isLoading, data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
        queryKey: ["todos"],
        queryFn: getTodo,
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages) => {
            return allPages.length + 1;
        },
    });

    const { ref, inView } = useInView();

    useEffect(() => {
        if (inView && hasNextPage) {
            fetchNextPage();
        }
    }, [inView, hasNextPage]);

    if (isLoading) {
        return <div>로딩중 .. !</div>;
    }

    return (
        <div>
            {data?.pages.map((todos) => {
                return todos.map((item: any) => {
                    return (
                        <div key={item.id}>
                            <div className="border-2 border-solid p-10 flex justify-center">{item.title}</div>
                        </div>
                    );
                });
            })}

            <div ref={ref}></div>
            {isFetchingNextPage && <h3>Loding...</h3>}
        </div>
    );
};

export default Cards;
