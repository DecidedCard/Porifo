"use client";

import React, { useState } from "react";

import useInfo from "@/hooks/mypage/useInfo";
import Button from "../Commen/Button";
import { useRouter } from "next/navigation";
import { RiLinkM } from "react-icons/ri";
import { GrDownload } from "react-icons/gr";
import { onClickCopyClipBoardHandler } from "@/util/urlCopy";
import { usePDF } from "react-to-pdf";
import Portfolio from "./Portfolio";
import useTemplateSelect from "@/hooks/mypage/useTemplateSelect";
import TemplateSelect from "./TemplateSelect";
import Image from "next/image";
import Preview from "./Preview";

const Buttons = () => {
    const { user, portfolio, basicInfo, disabled, onClickInsertHandler, onClickShareToggle } = useInfo();
    const { templateSelectModal, onClickTemplateModalToggleHandler, onClickTemplateSelectHandler } =
        useTemplateSelect();
    const { targetRef, toPDF } = usePDF({ filename: "test" });

    const [previewModal, setPreviewModal] = useState(false);

    const router = useRouter();
    return (
        <div className="flex flex-col">
            <main className="relative flex flex-col items-center ">
                <div className="pt-5 pl-3 pr-3 flex flex-col mt-10 items-center border-slate-800 bg-white rounded-2xl h-[350px]">
                    <div className="absolute right-[120%] w-20 flex flex-row">
                        <Button
                            text="미리보기"
                            size="s"
                            color="black"
                            onClick={() => setPreviewModal(true)}
                            fontSize="xs"
                        />
                    </div>
                    <div className="w-52 h-[186px] bg-blue overflow-hidden">
                        <div className="w-[168px] mx-auto">
                            <p className="text-xs font-medium">{basicInfo.template}</p>
                            <Image
                                src={`/${basicInfo.template}_template.png`}
                                alt="템플릿 미리보기"
                                width={200}
                                height={100}
                            />
                        </div>
                    </div>

                    <div className="mt-3 w-52">
                        <Button
                            text="템플릿 선택하기"
                            size="s"
                            color="primary"
                            fontSize="s"
                            onClick={onClickTemplateModalToggleHandler}
                        />
                    </div>

                    <div className="flex flex-row mt-5 mb-5">
                        <button
                            className="flex items-center py-2 px-4 rounded-xl text-zinc-500"
                            onClick={() => onClickCopyClipBoardHandler(`http://localhost:3000/create/${user?.id}`)}
                        >
                            <RiLinkM className="mr-2" /> URL 복사
                        </button>
                        <button
                            className="flex items-center py-2 px-4 rounded-xl text-zinc-500"
                            onClick={() => toPDF()}
                        >
                            <GrDownload className="mr-2" /> PDF로 저장
                        </button>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="w-[250px]">
                        {disabled ? (
                            <Button text={portfolio ? "수정하기" : "저장하기"} size="l" border="none" disabled />
                        ) : (
                            <Button
                                text={portfolio ? "수정하기" : "저장하기"}
                                size="l"
                                border="none"
                                color="primary"
                                onClick={onClickInsertHandler}
                            />
                        )}
                    </div>

                    <div className="w-[250px]">
                        {portfolio ? (
                            <Button
                                text={`${basicInfo.share ? "포리포 피드에서 내리기" : "포리포 피드에 올리기"}`}
                                size="l"
                                border="none"
                                color="primary"
                                onClick={onClickShareToggle}
                            />
                        ) : (
                            <Button text="포리포 피드에 올리기" size="l" border="none" disabled />
                        )}
                    </div>
                </div>
                {templateSelectModal && <TemplateSelect onClickTemplateSelectHandler={onClickTemplateSelectHandler} />}
            </main>
            <div className="absolute top-0 left-0 opacity-0 -z-50">
                {portfolio && <Portfolio item={portfolio!} targetRef={targetRef} />}
            </div>
            {previewModal && <Preview template={basicInfo.template!} id={user!.id} setPreviewModal={setPreviewModal} />}
        </div>
    );
};

export default Buttons;
