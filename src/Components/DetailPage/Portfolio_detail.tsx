"use client";
import { QUERY_KEY } from "@/util/query_key";
import { supabasePortfolioInfoRead } from "@/util/supabase/portfolioInfo_supabase_DB";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const Portfolio_detail = ({ id }: { id: string }) => {
    const { data, isPending } = useQuery({
        queryKey: [QUERY_KEY.detailPortfolio],
        queryFn: () => supabasePortfolioInfoRead({ id: "id", value: id }),
    });

    if (isPending) {
        return <div>로딩중</div>;
    }

    return <div>Portfolio_detail</div>;
};

export default Portfolio_detail;
