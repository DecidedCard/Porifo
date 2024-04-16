"use client";

import React from "react";

import Loading from "@/Components/Loading";
import Standard from "@/Components/Template one/Standard";
import Grid from "@/Components/Template two/Grid";
import usePortfolioQuery from "@/hooks/mypage/usePortfolioQuery";

const PortfolioPage = ({ params }: { params: { id: string } }) => {
    const { id } = params;
    const { portfolio, isFetching, isError } = usePortfolioQuery(id);

    if (isFetching) {
        return (
            <div className="absolute top-0 left-0 z-50 flex justify-center items-center w-screen h-screen bg-hihigray">
                <Loading />
            </div>
        );
    }

    if (isError) {
        return <div>에러!!!!</div>;
    }

    return (
        <div>
            {portfolio?.template === "Standard" && <Standard portfolio={portfolio} />}
            {portfolio?.template === "Grid" && <Grid portfolio={portfolio} />}
        </div>
    );
};

export default PortfolioPage;
