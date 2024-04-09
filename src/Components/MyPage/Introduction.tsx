"use client";

import useInfo from "@/hooks/mypage/useInfo";
import React from "react";
import Input from "../Commen/Input";

const Introduction = () => {
    const { basicInfo, onChangeIntroduceHandler } = useInfo();

    return (
        <main className="bg-white rounded-2xl mt-10 ml-9 w-[720px] pb-20">
            <div className="flex flex-col gap-10">
                <h1 className="flex items-center justify-start pl-6 pt-6 text-2xl font-bold tracking-wider">소개</h1>

                <div className="flex items-start">
                    <label className="pl-6 font-medium text-zinc-500 relative w-[177px] flex items-center justify-start">
                        한줄 소개
                    </label>
                    <div className="w-[460px]">
                        <Input placeholder="본인만의 소개글을 작성해 보세요" size="big" type="text" />
                    </div>
                </div>

                <div className="flex items-start">
                    <label className="pl-6 font-medium text-zinc-500 relative w-[177px] flex items-center justify-start">
                        자기소개
                    </label>
                    <textarea
                        className="h-[334px] w-[460px] resize-none p-2 border border-solid border-zinc-300 rounded-lg"
                        placeholder="본인만의 소개글을 작성해 보세요"
                        value={basicInfo.introduce!}
                        onChange={onChangeIntroduceHandler}
                    />
                </div>
            </div>
        </main>
    );
};

export default Introduction;
