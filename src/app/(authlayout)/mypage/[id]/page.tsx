"use client";

import usePortfolio from "@/hooks/myPage/usePortfolio";
import React from "react";

const Portfolio = ({ params }: { params: { id: string } }) => {
    const { id } = params;
    const { portfolio, isError, isFetching } = usePortfolio(id);

    if (isFetching) {
        return <div>로딩중입니다...</div>;
    }

    if (isError) {
        return <div>에러!</div>;
    }

    console.log(portfolio![0].name);

    return (
        <div>
            <div>
                <h2>
                    <label>이름: </label>
                </h2>
            </div>
        </div>
    );
};

export default Portfolio;
