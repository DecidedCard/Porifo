"use client";

import React from "react";

import useInfo from "@/hooks/myPage/useInfo";

const URL = () => {
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

export default URL;
