"use client";

import React, { useEffect, useRef, useState } from "react";

import Image from "next/image";

import Button from "../Commen/Button";
import TemplateSelect from "./TemplateSelect";
import Preview from "./Preview";
import Standard from "../Template Standard/Standard";
import Grid from "../Template Grid/Grid";
import Modern from "../Template Modern/Modern";
import Box from "../Template Box/Box";

import useInfo from "@/hooks/mypage/useInfo";
import useTemplateSelect from "@/hooks/mypage/useTemplateSelect";

import { onClickCopyClipBoardHandler } from "@/util/urlCopy";
import { portfolioInputFormValidation } from "@/util/input_form_validation";

import { usePDF } from "react-to-pdf";
import { share } from "@/util/share";
import { warnNotify } from "@/util/toast";
import { Flip, ToastContainer } from "react-toastify";

const Buttons = () => {
    const { user, portfolio, basicInfo, portfolioPreview, disabled, upload, onClickInsertHandler, onClickShareToggle } =
        useInfo();
    const {
        templateSelectModal,
        setTemplateSelectModal,
        onClickTemplateModalToggleHandler,
        onClickTemplateSelectHandler,
    } = useTemplateSelect();
    const { targetRef, toPDF } = usePDF({ filename: "PORIFO_portfolio", page: { margin: 8 } });

    const [previewModal, setPreviewModal] = useState(false);

    const onClickUrlCopyHandler = () => {
        if (!portfolio?.id || portfolioInputFormValidation(portfolio)) {
            warnNotify({ title: "저장 및 필수사항을 입력해야됩니다." });
            return;
        }
        onClickCopyClipBoardHandler(`${process.env.NEXT_PUBLIC_BASE_URL}/create/${user?.id}`);
    };

    const onClickPdfDownloadHandler = () => {
        if (!portfolio?.id || portfolioInputFormValidation(portfolio)) {
            warnNotify({ title: "저장 및 필수사항을 입력해야됩니다." });
            return;
        }
        toPDF();
    };

    const onClickPreviewModal = () => {
        if (portfolioInputFormValidation(portfolioPreview)) {
            alert("정보를 입력해주시기 바랍니다.");
            return;
        }
        setPreviewModal(true);
    };

    return (
        <div className="flex flex-col">
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Flip}
            />
            <main className="relative flex flex-col items-center gap-5">
                <div className="flex flex-col mt-[80px] items-center border-slate-800 bg-white rounded-2xl sm:mt-10 h-[300px] pt-5 sm:h-fit">
                    <div className="absolute right-[115%] w-20 flex flex-row sm:left-0 sm:right-0 sm:h-fit sm:hidden">
                        <Button text="미리보기" size="s" color="black" onClick={onClickPreviewModal} fontSize="xs" />
                    </div>
                    <div className="w-52 h-[186px] bg-gray2 overflow-hidden rounded-[8px] sm:hidden sm:w-fit">
                        <div className="w-[168px] mx-auto">
                            <p className="text-xs font-medium text-gray4 pt-4">{basicInfo.template}</p>
                            <div className="pt-3">
                                <Image
                                    src={`/templateImage/${basicInfo.template}_template.png`}
                                    alt="템플릿 미리보기"
                                    width={208}
                                    height={186}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mt-2 w-52 sm:w-fit sm:mt-0">
                        <Button
                            text="템플릿 선택하기"
                            size="s"
                            color="primary"
                            fontSize="s"
                            onClick={onClickTemplateModalToggleHandler}
                        />
                    </div>

                    <div className="flex flex-row my-5 mb-5 text-[12px] sm:my-0">
                        <button
                            className="flex items-center pr-7 pl-5 rounded-xl tracking-tighter sm:pr-3"
                            onClick={onClickUrlCopyHandler}
                        >
                            <Image src="assets/image/link.svg" alt="link" width={24} height={24} className="mr-1" />
                            URL 복사
                        </button>
                        <button
                            className="flex items-center pl-7 pr-5 rounded-xl tracking-tighter sm:pl-0"
                            onClick={onClickPdfDownloadHandler}
                        >
                            <Image
                                src="assets/image/download.svg"
                                alt="download"
                                width={24}
                                height={24}
                                className="mr-1"
                            />
                            PDF로 저장
                        </button>
                    </div>
                </div>

                <div className="flex flex-col gap-3 bg-white p-4 rounded-[8px] sm:pb-10">
                    {upload ? (
                        <>
                            <div className="w-[208px] sm:w-[202px] sm:h-[48px]">
                                <Button text="업로드 중..." size="l" border="none" disabled />
                            </div>

                            <div className="w-[208px] sm:w-[202px] sm:h-[48px]">
                                <Button
                                    text={`${portfolio?.share ? "포리포 피드에 내리기" : "포리포 피드에 올리기"}`}
                                    size="l"
                                    border="none"
                                    disabled
                                />
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="w-[208px]">
                                <Button
                                    text={portfolio?.id ? "포트폴리오 수정하기" : "포트폴리오 저장하기"}
                                    size="l"
                                    border="none"
                                    color="primary"
                                    onClick={onClickInsertHandler}
                                />
                            </div>

                            <div className="w-[208px]">
                                <Button
                                    text={`${portfolio?.share ? "포리포 피드에 내리기" : "포리포 피드에 올리기"}`}
                                    size="l"
                                    border="none"
                                    color={!portfolio?.id || disabled ? "" : "primary"}
                                    onClick={onClickShareToggle}
                                    disabled={!portfolio?.id || disabled}
                                />
                                {(!portfolio?.id || disabled) && (
                                    <span className="text-xs text-red-400">필수항목을 입력해 주세요.</span>
                                )}
                            </div>
                            {/* 공유기능 테스트 */}
                            {basicInfo.name === "react4기" && (
                                <button onClick={() => share("테스트", "연습삼아", "https://www.porifo.com/")}>
                                    test
                                </button>
                            )}
                        </>
                    )}
                </div>
                {templateSelectModal && (
                    <TemplateSelect
                        templateSelectModal={templateSelectModal}
                        setTemplateSelectModal={setTemplateSelectModal}
                        onClickTemplateSelectHandler={onClickTemplateSelectHandler}
                    />
                )}
            </main>
            <div className="absolute top-0 left-0 opacity-0 -z-50">
                {portfolioPreview && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] overflow-y-auto rounded-2xl">
                        <div ref={targetRef} className="">
                            {portfolio?.template === "Standard" && <Standard portfolio={portfolio} />}
                            {portfolio?.template === "Grid" && <Grid portfolio={portfolio} />}
                            {portfolio?.template === "Modern" && <Modern portfolio={portfolio} />}
                            {portfolio?.template === "Box" && <Box portfolio={portfolio} />}
                        </div>
                    </div>
                )}
            </div>
            {previewModal && (
                <Preview
                    template={basicInfo.template!}
                    previewModal={previewModal}
                    setPreviewModal={setPreviewModal}
                    portfolio={portfolioPreview}
                />
            )}
        </div>
    );
};

export default Buttons;
