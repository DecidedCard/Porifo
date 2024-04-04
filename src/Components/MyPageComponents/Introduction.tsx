"use client";

import React from "react";

import useInfo from "@/hooks/myPage/useInfo";

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
