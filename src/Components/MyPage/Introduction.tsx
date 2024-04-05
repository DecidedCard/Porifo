"use client";

import useInfo from "@/hooks/mypage/useInfo";
import React from "react";

const Introduction = () => {
    const { basicInfo, onChangeIntroduceHandler } = useInfo();
    return (
        <div>
            <label>소개: </label>
            <input type="text" value={basicInfo.introduce!} onChange={onChangeIntroduceHandler} />
        </div>
    );
};

export default Introduction;
