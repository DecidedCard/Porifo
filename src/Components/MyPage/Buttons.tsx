"use client";

import React, { useState } from "react";

import useInfo from "@/hooks/mypage/useInfo";
import Button from "../Commen/Button";
import { RiLinkM } from "react-icons/ri";
import { GrDownload } from "react-icons/gr";
import { onClickCopyClipBoardHandler } from "@/util/urlCopy";
import { usePDF } from "react-to-pdf";
import useTemplateSelect from "@/hooks/mypage/useTemplateSelect";
import TemplateSelect from "./TemplateSelect";
import Image from "next/image";
import Preview from "./Preview";
import { portfolioInputFormValidation } from "@/util/input_form_validation";

const Buttons = () => {
    const { user, portfolio, basicInfo, portfolioPreview, disabled, onClickInsertHandler, onClickShareToggle } =
        useInfo();
    const { templateSelectModal, onClickTemplateModalToggleHandler, onClickTemplateSelectHandler } =
        useTemplateSelect();
    const { targetRef, toPDF } = usePDF({ filename: "PORIFO_portfolio" });

    const [previewModal, setPreviewModal] = useState(false);

    const onClickUrlCopyHandler = () => {
        if (!portfolio?.id) {
            alert("저장을 해야 url을 제공해드릴 수 있습니다.");
            return;
        }
        onClickCopyClipBoardHandler(`${process.env.NEXT_PUBLIC_BASE_URL}/create/${user?.id}`);
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
            <main className="relative flex flex-col items-center gap-5">
                <div className="flex flex-col mt-[80px] items-center border-slate-800 bg-white rounded-2xl h-[300px] pt-5">
                    <div className="absolute right-[115%] w-20 flex flex-row">
                        <Button text="미리보기" size="s" color="black" onClick={onClickPreviewModal} fontSize="xs" />
                    </div>
                    <div className="w-52 h-[186px] bg-blue overflow-hidden rounded-[8px]">
                        <div className="w-[168px] mx-auto">
                            <p className="text-xs font-medium text-gray4 pt-4">{basicInfo.template}</p>
                            <div className="pt-3">
                                <Image
                                    src={`/${basicInfo.template}_template.png`}
                                    alt="템플릿 미리보기"
                                    width={208}
                                    height={186}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mt-2 w-52">
                        <Button
                            text="템플릿 선택하기"
                            size="s"
                            color="primary"
                            fontSize="s"
                            onClick={onClickTemplateModalToggleHandler}
                        />
                    </div>

                    <div className="flex flex-row my-5 mb-5 text-[12px]">
                        <button
                            className="flex items-center pr-7 pl-5 rounded-xl tracking-tighter"
                            onClick={onClickUrlCopyHandler}
                        >
                            <Image 
                            src="assets/image/link.svg"
                            alt="link"
                            width={24}
                            height={24}
                            className="mr-1"
                            /> 
                            URL 복사
                        </button>
                        <button
                            className="flex items-center pl-7 pr-5 rounded-xl tracking-tighter"
                            onClick={() => toPDF()}
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
                <div className="flex flex-col gap-3 bg-white p-4 rounded-[8px]">
                    <div className="w-[208px]">
                        <Button
                            text={portfolio?.id ? "이력서 수정하기" : "이력서 저장하기"}
                            size="l"
                            border="none"
                            color={disabled ? "" : "primary"}
                            onClick={onClickInsertHandler}
                            disabled={disabled}
                        />
                    </div>

                    <div className="w-[208px]">
                        <Button
                            text={`${portfolio?.share ? "포리포 피드에 내리기" : "포리포 피드에 올리기"}`}
                            size="l"
                            border="none"
                            color={portfolio ? "primary" : ""}
                            onClick={onClickShareToggle}
                            disabled={!portfolio}
                        />
                    </div>
                </div>
                {templateSelectModal && <TemplateSelect onClickTemplateSelectHandler={onClickTemplateSelectHandler} />}
            </main>
            <div className="absolute top-0 left-0 opacity-0 -z-50">
                {portfolioPreview && (
                    <Preview
                        template={basicInfo.template!}
                        setPreviewModal={setPreviewModal}
                        targetRef={targetRef}
                        portfolio={portfolioPreview}
                    />
                )}
            </div>
            {previewModal && (
                <Preview
                    template={basicInfo.template!}
                    setPreviewModal={setPreviewModal}
                    portfolio={portfolioPreview}
                />
            )}
        </div>
    );
};

export default Buttons;
