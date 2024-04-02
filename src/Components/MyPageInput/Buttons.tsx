"use client";

import React from "react";

import useInfo from "@/hooks/myPage/useInfo";

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
