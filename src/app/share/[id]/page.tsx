"use client";

import React from "react";

import { useQuery } from "@tanstack/react-query";

import Loading from "@/Components/Loading";
import Standard from "@/Components/Template/Standard/Standard";
import Grid from "@/Components/Template/Grid/Grid";
import Modern from "@/Components/Template/Modern/Modern";
import Box from "@/Components/Template/Box/Box";

import { QUERY_KEY } from "@/util/query_key";
import { getDetailData } from "@/util/supabase/detail_supabase_DB";
import NotFoundCatchAll from "@/app/[...404]/page";

const PortfolioPage = ({ params }: { params: { id: number } }) => {
    const { id } = params;

    const { data, isLoading, isError }: any = useQuery({
        queryKey: [QUERY_KEY.detailPortfolio],
        queryFn: () => getDetailData({ id: "id", value: id }),
    });

    if (isLoading) {
        return (
            <div className="absolute top-0 left-0 z-50 flex justify-center items-center w-screen h-screen bg-hihigray">
                <Loading />
            </div>
        );
    }

    if (isError) {
        return (
            <div>
                <NotFoundCatchAll />
            </div>
        );
    }

    const portfolio = data[0];

    return (
        <div className="w-fit mx-auto">
            {portfolio?.template === "Standard" && <Standard portfolio={portfolio} />}
            {portfolio?.template === "Grid" && <Grid portfolio={portfolio} />}
            {portfolio?.template === "Modern" && <Modern portfolio={portfolio} />}
            {portfolio?.template === "Box" && <Box portfolio={portfolio} />}
        </div>
    );
};

export default PortfolioPage;
