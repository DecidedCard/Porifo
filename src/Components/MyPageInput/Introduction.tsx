"use client";

import React from "react";

import useUserInfo from "@/hooks/mypage/useUserInfo";

const Introduction = () => {
    const { onChangeIntroduceHandler } = useUserInfo();
    return (
        <div>
            <label>소개: </label>
            <input type="text" onChange={onChangeIntroduceHandler} />
        </div>
    );
};

export default Introduction;
