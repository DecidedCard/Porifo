"use client";

import useBasicInfo from "@/hooks/mypage/useBasicInfo";
import React from "react";

const Introduction = () => {
    const { introduce, onChangeIntroduceHandler } = useBasicInfo();
    return (
        <div>
            <label>소개: </label>
            <input type="text" value={introduce} onChange={onChangeIntroduceHandler} />
        </div>
    );
};

export default Introduction;
