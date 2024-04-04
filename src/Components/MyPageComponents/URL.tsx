"use client";

import useInfo from "@/hooks/mypage/useInfo";
import React from "react";

const URL = () => {
    const { onChangeBlogHandler, onChangeGithubHandler } = useInfo();
    return (
        <div>
            <label>Blog: </label>
            <input type="url" onChange={onChangeBlogHandler} />
            <label>Github: </label>
            <input type="url" onChange={onChangeGithubHandler} />
        </div>
    );
};

export default URL;
