"use client";

import React from "react";

import NotFoundCatchAll from "@/app/[...404]/page";
import Loading from "@/Components/Loading";
import Standard from "@/Components/Template Standard/Standard";
import Grid from "@/Components/Template Grid/Grid";
import Modern from "@/Components/Template Modern/Modern";
import Box from "@/Components/Template Box/Box";

import usePortfolioQuery from "@/hooks/mypage/usePortfolioQuery";

const PortfolioPage = ({ params }: { params: { id: string } }) => {
    const { id } = params;
    const { portfolio, isLoading, isError } = usePortfolioQuery(id);

    if (isLoading) {
        return (
            <div className="absolute top-0 left-0 z-50 flex justify-center items-center w-screen h-screen bg-hihigray">
                <Loading />
            </div>
        );
    }

    if (isError) {
        return <NotFoundCatchAll />;
    }

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
