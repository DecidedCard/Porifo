"use client";

import useUserInfo from "@/hooks/mypage/useUserInfo";
import React from "react";

const URL = () => {
    const { onChangeBlogHandler, onChangeGithubHandler } = useUserInfo();
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
