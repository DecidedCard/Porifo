"use client";

import useInfo from "@/hooks/mypage/useInfo";
import React from "react";
import Input from "../Commen/Input";
import { SKILL_TAG } from "@/util/skill_tag";

const Introduction = () => {
    const {
        basicInfo,
        onChangeOneLineIntroduce,
        onClickSkillTagDeleteHandler,
        onChangeIntroduceHandler,
        onClickSkillTagHandler,
    } = useInfo();

    return (
        <main className="flex justify-center bg-white rounded-2xl mt-20 ml-[75px] w-[705px] min-h-[1128px] pb-5">
            <div className="flex flex-col gap-4">
                <h1 className="flex items-center w-[657px] h-[46px] text-[30px] mt-4 font-bold tracking-wider">소개</h1>
                <hr className="w-[657px] mx-auto my-1 border border-neutral-100" />
                <div className="flex h-[82px]">
                    <label className="font-medium text-zinc-500 w-[177px] h-[32px] mt-2">한 줄 소개</label>
                    <div className="w-[460px] ml-3">
                        <Input
                            placeholder="본인만의 소개글을 작성해 보세요"
                            size="big"
                            type="text"
                            value={basicInfo.oneLineIntroduce}
                            onChange={onChangeOneLineIntroduce}
                        />
                    </div>
                </div>

                <hr className="w-[657px] mx-auto my-1 border border-neutral-100" />

                <div className="flex">
                    <label className="font-medium text-zinc-500 w-[177px] h-[32px] mt-2">자기소개</label>
                    <textarea
                        className="h-[334px] w-[460px] text-[14px] resize-none py-4 px-3 ml-3 border border-solid border-zinc-300 rounded-lg"
                        placeholder="직무 경험과 핵심 역량 등을 구체적으로 작성해 주세요"
                        value={basicInfo.introduce!}
                        onChange={onChangeIntroduceHandler}
                    />
                </div>

                <hr className="w-[657px] mx-auto border border-neutral-100" />

                <div className="flex gap-3">
                    <label className="font-medium text-zinc-500 w-[177px] h-[32px] mt-2">기술 스택</label>
                    <div className="flex flex-wrap justify-between gap-2 w-[460px]">
                        {SKILL_TAG.map((item, idx) => {
                            return (
                                <div key={idx}>
                                    {JSON.parse(JSON.stringify(basicInfo.skillTag)).find(
                                        (tag: string) => tag === item,
                                    ) ? (
                                        <div
                                            key={idx}
                                            className="py-[2px] px-3 h-[22px] text-xs font-medium text-white border border-solid border-primary bg-primary rounded cursor-pointer"
                                            onClick={() => onClickSkillTagDeleteHandler(item)}
                                        >
                                            {item}
                                        </div>
                                    ) : (
                                        <div
                                            className="py-[2px] px-3 h-[22px] text-xs font-medium border border-solid border-nonegray rounded cursor-pointer"
                                            onClick={() => onClickSkillTagHandler(item)}
                                        >
                                            {item}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Introduction;
