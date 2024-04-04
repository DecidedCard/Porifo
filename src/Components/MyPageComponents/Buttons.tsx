"use client";

import useInfo from "@/hooks/mypage/useInfo";
import React from "react";

const Buttons = () => {
    const { onClickInsertHandler } = useInfo();
    return (
        <>
            <button onClick={onClickInsertHandler}>저장하기</button>
            <button>공유하기</button>
        </>
    );
};

export default Buttons;
