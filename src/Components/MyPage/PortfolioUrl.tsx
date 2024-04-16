"use client";

import React from "react";

import useInfo from "@/hooks/mypage/useInfo";
import Input from "../Commen/Input";

const PortfolioUrl = () => {
    const { basicInfo, onChangeBlogHandler, onChangeGithubHandler } = useInfo();
    return (
        <main className="flex justify-center bg-white rounded-2xl mt-20 ml-[75px] w-[705px] min-h-[536px] pb-5">
            <div className="flex flex-col gap-4">
                <h1 className="flex items-center w-[657px] h-[46px] text-[30px] mt-4 font-bold tracking-wider">URL</h1>
                <hr className="w-[657px] mx-auto my-1 border border-neutral-100" />
                <div className="flex mt-1">
                    <label className="font-medium text-zinc-500 w-[177px] h-[32px] mt-2">Blog</label>
                    <div className="w-[460px] ml-3">
                        <Input
                            type="url"
                            size="big"
                            placeholder="http://"
                            maxLength={200}
                            value={basicInfo.blogLink!}
                            onChange={onChangeBlogHandler}
                        />
                    </div>
                </div>
                <div className="flex mt-1">
                    <label className="font-medium text-zinc-500 w-[177px] h-[32px] mt-2">Github</label>
                    <div className="w-[460px] ml-3">
                        <Input
                            type="url"
                            size="big"
                            placeholder="http://"
                            maxLength={200}
                            value={basicInfo.githubLink!}
                            onChange={onChangeGithubHandler}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default PortfolioUrl;
