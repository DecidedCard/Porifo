"use client";

import React from "react";
import { useInfiniteQuery } from "@tanstack/react-query";

import { getTodo } from "./api";

const Cards = () => {
    const { isLoading, data, fetchNextPage, hasNextPage } = useInfiniteQuery({
        queryKey: ["todos"],
        queryFn: getTodo,
        initialPageParam: 19,
        getNextPageParam: (lastPage, allPages) => {
            return allPages.length + 1;
        },
    });

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
            {hasNextPage ? (
                <button className="p-10 text-red-600" onClick={() => fetchNextPage()}>
                    더 불러오기..
                </button>
            ) : (
                <div>마지막 페이지 입니다.</div>
            )}
        </div>
    );
};

export default Cards;
