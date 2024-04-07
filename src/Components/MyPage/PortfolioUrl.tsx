"use client";

import useInfo from "@/hooks/mypage/useInfo";
import React from "react";

const PortfolioUrl = () => {
    const { basicInfo, onChangeBlogHandler, onChangeGithubHandler } = useInfo();
    return (
        <div>
            <label>Blog: </label>
            <input type="url" value={basicInfo.blogLink!} onChange={onChangeBlogHandler} />
            <label>Github: </label>
            <input type="url" value={basicInfo.githubLink!} onChange={onChangeGithubHandler} />
        </div>
    );
};

export default PortfolioUrl;
