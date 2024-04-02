"use client";

import React from "react";

import useInfo from "@/hooks/myPage/useInfo";

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
