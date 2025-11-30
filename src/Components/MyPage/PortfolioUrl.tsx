"use client";

import React from "react";

import Input from "../Commen/Input";

import useInfo from "@/hooks/mypage/useInfo";

const PortfolioUrl = () => {
    const { basicInfo, onChangeBlogHandler, onChangeGithubHandler } = useInfo();
    return (
        <main className="flex justify-center bg-white rounded-2xl mt-20 mb-[200px] ml-[75px] w-[705px] pb-10 sm:w-full sm:ml-0 sm:mt-0 sm:pt-4 sm:pb-10 sm:px-4">
            <div className="flex flex-col gap-4 sm:w-full">
                <h1 className="flex items-center w-[657px] h-[46px] text-[30px] mt-4 text-black text-H5_B sm:w-full">
                    URL
                </h1>

                <hr className="w-full mx-auto my-1 border border-gray_2" />

                <div className="flex mt-1 sm:flex-col sm:w-full">
                    <label className="w-[177px] h-[32px] mt-2 text-gray_5 text-P6_M">Blog</label>
                    <div className="w-[460px] ml-3 sm:w-full sm:ml-0">
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
                <div className="flex mt-1 sm:flex-col sm:w-full">
                    <label className="w-[177px] h-[32px] mt-2 text-gray_5 text-P6_M">Github</label>
                    <div className="w-[460px] ml-3 sm:w-full sm:ml-0">
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
