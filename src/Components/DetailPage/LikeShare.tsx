"use client";

import React from "react";

const LikeShare = () => {
    return (
        <>
            <div className="border-2 border-solid border-rose-500 flex flex-col gap-4 items-center justify-center relative">
                <div className="flex flex-row gap-4 items-center justify-center shrink-0 relative">
                    <div className="bg-gray-2 rounded-[999px] pt-2 pb-2 flex flex-col gap-0 items-center justify-start shrink-0 w-32 relative">
                        <div className="rounded-[999px] flex flex-row gap-2 items-center justify-center shrink-0 w-10 h-10 relative">
                            <div className="shrink-0 w-8 h-8 relative">
                                {/* 좋아요 이미지 */}
                                <img src="redHeart.svg" />
                            </div>
                        </div>
                        <div className="text-graytext-5 text-center font-body-p8m-font-family text-body-p8m-font-size leading-body-p8m-line-height font-body-p8m-font-weight relative flex items-center justify-center">
                            좋아요
                        </div>
                    </div>
                    <div className="bg-gray-2 rounded-[999px] pt-2 pb-2 flex flex-col gap-0 items-center justify-start shrink-0 w-32 relative">
                        <div className="rounded-[999px] flex flex-row gap-2 items-center justify-center shrink-0 w-10 h-10 relative">
                            <img className="shrink-0 w-8 h-8 relative overflow-visible" src="share.svg" />
                        </div>
                        <div className="text-graytext-5 text-center font-body-p8m-font-family text-body-p8m-font-size leading-body-p8m-line-height font-body-p8m-font-weight relative flex items-center justify-center">
                            공유하기
                        </div>
                    </div>
                </div>
                <div className="flex flex-row gap-6 items-center justify-end shrink-0 relative">
                    <div className="flex flex-row gap-1 items-center justify-start shrink-0 relative">
                        <div className="shrink-0 w-6 h-6 relative">
                            <img
                                className="w-[100%] h-[100%] absolute right-[0%] left-[0%] bottom-[0%] top-[0%] overflow-visible"
                                src="grayHeart.svg"
                            />
                        </div>
                        <div className="text-graytext-4 text-center font-body-p7r-font-family text-body-p7r-font-size leading-body-p7r-line-height font-body-p7r-font-weight relative flex items-center justify-center">
                            210
                        </div>
                    </div>
                    <div className="flex flex-row gap-1 items-center justify-start shrink-0 relative">
                        <img className="shrink-0 w-6 h-6 relative overflow-visible" src="grayEye.svg" />
                        <div className="text-graytext-4 text-center font-body-p7r-font-family text-body-p7r-font-size leading-body-p7r-line-height font-body-p7r-font-weight relative flex items-center justify-center">
                            1523
                        </div>
                    </div>
                    <div className="flex flex-row gap-1 items-center justify-end shrink-0 relative">
                        <img className="shrink-0 w-6 h-6 relative overflow-visible" src="icon-set4.svg" />
                        <div className="text-graytext-4 text-center font-body-p7r-font-family text-body-p7r-font-size leading-body-p7r-line-height font-body-p7r-font-weight relative flex items-center justify-center">
                            36
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LikeShare;
