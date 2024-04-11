"use client";

import React from "react";

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

const Buttons = () => {
    const { user, portfolio, onClickInsertHandler } = useInfo();
    const { templateSelectModal, onClickTemplateModalToggleHandler, onClickTemplateSelectHandler } =
        useTemplateSelect();
    const { targetRef, toPDF } = usePDF({ filename: "test" });

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
                            onClick={() => router.push(`/mypage/${user!.id}`)}
                            fontSize="xs"
                        />
                    </div>
                    <img
                        src="https://windowsforum.kr/files/attach/images/2966154/176/607/019/c83f9e8d412e31ae30d172b1b1d48f01.png"
                        className="w-[220px] min-h-[200px] rounded-2xl"
                    />

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

                <div className="text-white mt-5 bg-primary rounded-lg flex gap-2 items-center justify-center shrink-0 w-[250px] h-[50px] relative">
                    <button className="" onClick={onClickInsertHandler}>
                        {portfolio ? "수정하기" : "저장하기"}
                    </button>
                </div>

                <div className="text-white mt-3 bg-primary rounded-lg flex flex-row gap-2 items-center justify-center shrink-0 w-[250px] h-[50px] relative">
                    <input className="" type="checkbox" />
                    <label className="">공유하기</label>
                </div>
            </main>
            <div className="absolute top-0 left-0 opacity-0 -z-50">
                {portfolio && <Portfolio item={portfolio!} targetRef={targetRef} />}
            </div>
            {templateSelectModal && <TemplateSelect onClickTemplateSelectHandler={onClickTemplateSelectHandler} />}
        </div>
    );
};

export default Buttons;
