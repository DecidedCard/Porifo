"use client";

import React from "react";

import useInfo from "@/hooks/myPage/useInfo";

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
