"use client";

import React, { useEffect, useState } from "react";

import Button from "@/Components/Commen/Button";
import LoginCheckModal from "@/Components/LoginCheckModal";
import Standard from "@/Components/Template one/Standard";
import Grid from "@/Components/Template two/Grid";

import useGuestButton from "@/hooks/guest/useGuestButton";

import type { PortfolioInfo } from "@/types/PortfolioInfo";

const ResultPage = () => {
    const [portfolio, setPortfolio] = useState<PortfolioInfo>();
    const [loginCheckModal, setLoginCheckModal] = useState(false);
    const { targetRef, toPDF } = useGuestButton();
    useEffect(() => {
        const localStorageItem = JSON.parse(localStorage.getItem("portfolio")!);
        if (localStorageItem) {
            setPortfolio(localStorageItem);
        }
    }, []);
    return (
        <>
            <div className="flex justify-center w-fit mx-auto" ref={targetRef}>
                {portfolio?.template === "Standard" && <Standard portfolio={portfolio} />}
                {portfolio?.template === "Grid" && <Grid portfolio={portfolio} />}
            </div>
            <div className="flex gap-5 w-96 mx-auto mt-10">
                <Button text="url 복사" color="secondary" size="l" onClick={() => setLoginCheckModal(true)} />
                <Button text="pdf 다운로드" color="primary" size="l" onClick={() => toPDF()} />
            </div>
            {loginCheckModal && <LoginCheckModal route="/guest/result" setLoginCheckModal={setLoginCheckModal} />}
        </>
    );
};

export default ResultPage;
