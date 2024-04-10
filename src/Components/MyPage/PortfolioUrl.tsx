"use client";

import React from "react";

import useInfo from "@/hooks/mypage/useInfo";
import Input from "../Commen/Input";

const PortfolioUrl = () => {
    const { basicInfo, onChangeBlogHandler, onChangeGithubHandler } = useInfo();
    return (
        <main className="bg-white rounded-2xl mt-10 ml-9 w-[720px] pb-20">
            <div className="flex flex-col gap-10">
                <h1 className="flex items-center justify-start pl-6 pt-6 text-2xl font-bold tracking-wider">URL</h1>

                <div className="flex items-start">
                    <label className="pl-6 font-medium text-zinc-500 relative w-[177px] flex items-center justify-start">
                        Blog
                    </label>
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
                <div className="flex items-start">
                    <label className="pl-6 font-medium text-zinc-500 relative w-[177px] flex items-center justify-start">
                        Github
                    </label>
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
