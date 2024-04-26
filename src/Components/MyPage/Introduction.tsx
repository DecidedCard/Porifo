"use client";

import React from "react";

import Image from "next/image";

import Input from "../Commen/Input";

import useInfo from "@/hooks/mypage/useInfo";

import { Flip, ToastContainer } from "react-toastify";

const Introduction = () => {
    const {
        basicInfo,
        skillTagInput,
        skill_tag,
        onChangeOneLineIntroduce,
        onChangeSkillTagInputHandler,
        onSubmitSkillTagHandler,
        onClickSkillTagDeleteHandler,
        onChangeIntroduceHandler,
        onClickSkillTagHandler,
    } = useInfo();

    const skillTag = basicInfo.skillTag as string[];

    return (
        <>
            <main className="flex justify-center bg-white rounded-2xl mt-20 ml-[75px] w-[705px] min-h-[673px] pb-10 sm:w-full sm:mx-auto sm:mt-0">
                <div className="flex flex-col gap-4">
                    <h2 className="flex items-center w-[657px] h-[46px] text-[30px] mt-4 font-bold tracking-wider sm:w-[40%] sm:ml-32">
                        소개
                    </h2>
                    <hr className="w-[657px] mx-auto my-1 border border-neutral-100 sm:w-[60%]" />
                    <div className="flex h-[82px] sm:w-[60%] sm:mx-auto">
                        <label className="flex font-medium text-zinc-500 w-[177px] h-[32px] mt-2">
                            한 줄 소개<span className="ml-1 text-[10px] text-red-500">★</span>
                        </label>
                        <div className="flex flex-col gap-1 w-[460px]">
                            <div className="w-[460px] ml-3 sm:w-full ">
                                <Input
                                    placeholder="본인만의 소개글을 작성해 보세요"
                                    size="big"
                                    type="text"
                                    maxLength={100}
                                    value={basicInfo.oneLineIntroduce}
                                    onChange={onChangeOneLineIntroduce}
                                />
                            </div>
                            <div className="ml-auto text-sm text-nonegray">
                                {basicInfo.oneLineIntroduce?.length || "0"}/100
                            </div>
                        </div>
                    </div>

                    <hr className="w-[657px] mx-auto my-1 border border-neutral-100 sm:w-[60%]" />

                    <div className="flex sm:w-[60%] sm:mx-auto">
                        <label className="flex font-medium text-zinc-500 w-[177px] h-[32px] mt-2">
                            자기소개<span className="ml-1 text-[10px] text-red-500">★</span>
                        </label>
                        <div className="flex flex-col gap-1 w-[460px] ">
                            <textarea
                                maxLength={800}
                                className="h-[334px] w-[460px] text-[14px] resize-none py-4 px-3 ml-3 border border-solid border-zinc-300 rounded-lg sm:w-full"
                                placeholder="직무 경험과 핵심 역량 등을 구체적으로 작성해 주세요"
                                value={basicInfo.introduce!}
                                onChange={onChangeIntroduceHandler}
                            />
                            <div className="ml-auto text-sm text-nonegray">
                                {basicInfo.introduce?.length || "0"}/800
                            </div>
                        </div>
                    </div>

                    <hr className="w-[657px] mx-auto border border-neutral-100 sm:w-[60%]" />

                    <div className="flex gap-3 h-36 sm:w-[432px] sm:flex-col sm:mx-auto sm:gap-4">
                        <label className="flex font-medium text-zinc-500 w-[177px] h-[32px] mt-2">
                            기술 스택<span className="ml-1 text-[10px] text-red-500">★</span>
                        </label>
                        <div className="group relative flex flex-col gap-2 w-[460px]">
                            <div className="flex justify-between items-center h-9 border border-solid border-zinc-300 rounded-[999px] py-1 px-2 sm:w-[432px]">
                                <Image src="/search.svg" alt="검색" width={24} height={24} className="top-1 left-2" />
                                <form onSubmit={(e) => onSubmitSkillTagHandler(e, skillTagInput)}>
                                    <input
                                        type="search"
                                        className=" w-[425px] h-8 rounded-[999px] text-sm focus:outline-none sm:px-2 sm:py-1"
                                        placeholder="커스텀 태그를 추가 할 수 있습니다."
                                        value={skillTagInput}
                                        onChange={onChangeSkillTagInputHandler}
                                    />
                                </form>
                            </div>

                            <div className="flex flex-wrap justify-between gap-2 w-[460px] h-11 overflow-hidden bg-white sm:content-center sm:justify-start sm:w-[432px]">
                                {skill_tag.map((item, idx) => {
                                    return (
                                        <div key={idx}>
                                            <div
                                                className="py-[2px] px-3 h-[18px] text-[10px] font-medium border border-solid border-nonegray rounded cursor-pointer"
                                                onClick={() => onClickSkillTagHandler(item)}
                                            >
                                                {item}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="flex flex-wrap gap-2 w-[460px] h-[44px] overflow-hidden sm:w-full sm:content-center">
                                {skillTag &&
                                    skillTag.map((item, idx) => {
                                        return (
                                            <div
                                                key={idx}
                                                className="flex gap-2 py-[2px] px-3 w-fit h-[18px] text-[10px] font-medium border border-solid border-primary rounded"
                                            >
                                                {item}
                                                <p
                                                    className="cursor-pointer"
                                                    onClick={() => onClickSkillTagDeleteHandler(item)}
                                                >
                                                    X
                                                </p>
                                            </div>
                                        );
                                    })}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
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
        </>
    );
};

export default Introduction;
