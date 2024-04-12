"use client";

import React from "react";

import useInfo from "@/hooks/mypage/useInfo";
import Input from "../Commen/Input";

const PortfolioUrl = () => {
    const { basicInfo, onChangeBlogHandler, onChangeGithubHandler } = useInfo();
    return (
        <main className="bg-white rounded-2xl mt-10 ml-9 w-[720px] pb-20">
            <div className="flex flex-col gap-5">
                <h1 className="flex items-center justify-start pl-6 pt-6 text-2xl font-bold tracking-wider">URL</h1>
                <hr className="border border-neutral-100" />
                <div className="flex">
                    <label className="pl-6 font-medium text-zinc-500 w-[177px]">Blog</label>
                    <div className="w-[460px]">
                        <Input
                            type="url"
                            size="big"
                            placeholder="http://"
                            value={basicInfo.blogLink!}
                            onChange={onChangeBlogHandler}
                        />
                    </div>
                </div>
                <div className="flex">
                    <label className="pl-6 font-medium text-zinc-500 w-[177px]">Github</label>
                    <div className="w-[460px]">
                        <Input
                            type="url"
                            size="big"
                            placeholder="http://"
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
