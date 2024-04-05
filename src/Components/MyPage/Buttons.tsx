"use client";

import React from "react";

import useInfo from "@/hooks/mypage/useInfo";
import { useRouter } from "next/navigation";
import { RiLinkM } from "react-icons/ri";
import { GrDownload } from "react-icons/gr";

const Buttons = () => {
    const { user, portfolio, onClickInsertHandler } = useInfo();
    const router = useRouter();
    return (
        <main className="flex flex-col items-center">
            <div className="pt-5 pl-3 pr-3 flex flex-col mt-10 items-center border-slate-800 bg-white rounded-2xl h-[350px]">
                <div className="flex flex-row">
                    <button
                        className="text-sm mr-3 w-[110px] h-[40px] rounded-lg border border-primary px-2 py-1 flex items-center justify-center text-primary font-medium leading-snug"
                    >템플릿 선택하기</button>
                    <button
                        className="text-sm w-[110px] h-[40px] rounded-lg border border-zinc-500 px-2 py-1 flex items-center justify-center text-zinc-500 leading-snug"
                        onClick={() => router.push(`/mypage/${user!.id}`)}
                    >미리보기</button>
                </div>
                <img
                    src="https://windowsforum.kr/files/attach/images/2966154/176/607/019/c83f9e8d412e31ae30d172b1b1d48f01.png"
                    className="mt-5 w-[220px] min-h-[200px] rounded-2xl"
                />
                <div className="flex flex-row mt-5 mb-5">
                    <button className="flex items-center py-2 px-4 rounded-xl text-zinc-500"><RiLinkM className="mr-2"/> URL 복사</button>
                    <button className="flex items-center py-2 px-4 rounded-xl text-zinc-500"><GrDownload className="mr-2"/> PDF로 저장</button>
                </div>
            </div>

            <div className="text-white mt-5 bg-primary rounded-lg flex gap-2 items-center justify-center shrink-0 w-[250px] h-[50px] relative">
                <button
                    className=""
                    onClick={onClickInsertHandler}>{portfolio ? "수정하기" : "저장하기"}</button>
            </div>

            <div className="text-white mt-3 bg-primary rounded-lg flex flex-row gap-2 items-center justify-center shrink-0 w-[250px] h-[50px] relative">
                <input
                    className=""
                    type="checkbox"
                />
                <label
                    className=""
                >공유하기</label>
            </div>

        </main>
    );
};

export default Buttons;
