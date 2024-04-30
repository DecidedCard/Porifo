"use client";

import React, { useEffect, useState } from "react";

import Button from "@/Components/Commen/Button";
import LoginCheckModal from "@/Components/LoginCheckModal";
import Standard from "@/Components/Template/Standard/Standard";
import Grid from "@/Components/Template/Grid/Grid";
import Box from "@/Components/Template/Box/Box";
import Modern from "@/Components/Template/Modern/Modern";

import useGuestButton from "@/hooks/guest/useGuestButton";

import { errorNotify, successNotify } from "@/util/toast";
import { portfolioInputFormValidation } from "@/util/input_form_validation";

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

    const onClickPdfDownloadHandler = () => {
        if (portfolioInputFormValidation(portfolio!)) {
            errorNotify({ title: "필수 항목을 모두 작성한 후 다운로드할 수 있습니다." });
            return;
        }
        successNotify({ title: "PDF를 다운로드 중입니다." });
        toPDF();
    };
    return (
        <>
            <div className="flex justify-center w-fit mx-auto" ref={targetRef}>
                {portfolio?.template === "Standard" && <Standard portfolio={portfolio} />}
                {portfolio?.template === "Grid" && <Grid portfolio={portfolio} />}
                {portfolio?.template === "Modern" && <Modern portfolio={portfolio} />}
                {portfolio?.template === "Box" && <Box portfolio={portfolio} />}
            </div>
            <div className="flex gap-5 w-96 mx-auto mt-10">
                <Button text="url 복사" color="secondary" size="l" onClick={() => setLoginCheckModal(true)} />
                <Button text="pdf 다운로드" color="primary" size="l" onClick={onClickPdfDownloadHandler} />
            </div>
            {loginCheckModal && <LoginCheckModal route="/guest/result" setLoginCheckModal={setLoginCheckModal} />}
        </>
    );
};

export default ResultPage;
