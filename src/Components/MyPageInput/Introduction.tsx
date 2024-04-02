"use client";

import useUserInfo from "@/hooks/mypage/useUserInfo";
import React from "react";

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
