"use client";

import Button from "@/Components/Commen/Button";
import Standard from "@/Components/Template one/Standard";
import Grid from "@/Components/Template two/Grid";
import useGuestButton from "@/hooks/guest/useGuestButton";
import { PortfolioInfo } from "@/types/PortfolioInfo";
import React, { useEffect, useState } from "react";

const ResultPage = () => {
    const [portfolio, setPortfolio] = useState<PortfolioInfo>();
    const { targetRef, toPDF } = useGuestButton();
    useEffect(() => {
        const localStorageItem = JSON.parse(localStorage.getItem("portfolio")!);
        if (localStorageItem) {
            setPortfolio(localStorageItem);
        }
    }, []);
    return (
        <>
            <div className="flex justify-center" ref={targetRef}>
                {portfolio?.template === "standard" && <Standard portfolio={portfolio} />}
                {portfolio?.template === "grid" && <Grid portfolio={portfolio} />}
            </div>
            <div className="flex gap-5 w-96 mx-auto mt-10">
                <Button text="url 복사" color="secondary" size="l" />
                <Button text="pdf 다운로드" color="primary" size="l" onClick={() => toPDF()} />
            </div>
        </>
    );
};

export default ResultPage;
