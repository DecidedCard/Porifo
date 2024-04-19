"use client";

import React from "react";

import Loading from "@/Components/Loading";
import Standard from "@/Components/Template one/Standard";
import Grid from "@/Components/Template two/Grid";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "@/util/query_key";
import { getDetailData } from "@/util/supabase/detail_supabase_DB";

const PortfolioPage = ({ params }: { params: { id: string } }) => {
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
        return <div>에러!!!!</div>;
    }

    const portfolio = data[0];

    return (
        <div className="w-fit mx-auto">
            {portfolio?.template === "Standard" && <Standard portfolio={portfolio} />}
            {portfolio?.template === "Grid" && <Grid portfolio={portfolio} />}
        </div>
    );
};

export default PortfolioPage;