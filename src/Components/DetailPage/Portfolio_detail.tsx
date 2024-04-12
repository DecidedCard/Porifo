"use client";
import { QUERY_KEY } from "@/util/query_key";
import { supabasePortfolioInfoRead } from "@/util/supabase/portfolioInfo_supabase_DB";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import Comments from "./Comments";
import useCardIdStore from "@/store/detailStore";

const Portfolio_detail = () => {
    const { cardId: id } = useCardIdStore();
    const { data, isPending } = useQuery({
        queryKey: [QUERY_KEY.detailPortfolio],
        queryFn: () => supabasePortfolioInfoRead({ id: "id", value: id }),
    });

    if (isPending) {
        return <div>로딩중</div>;
    }

    const portfolioInfo = data![0];
    console.log(portfolioInfo.template);

    return (
        // 포트폴리오 영역
        <>
            <div>{portfolioInfo.id}</div>
            <Comments />
        </>
    );
};

export default Portfolio_detail;
