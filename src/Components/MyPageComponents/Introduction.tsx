"use client";

import useInfo from "@/hooks/mypage/useInfo";
import React from "react";

const Introduction = () => {
    const { onChangeIntroduceHandler } = useInfo();
    return (
        <div>
            <label>소개: </label>
            <input type="text" onChange={onChangeIntroduceHandler} />
        </div>
    );
};

export default Introduction;
