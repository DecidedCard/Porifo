"use client";

import useUserInfo from "@/hooks/mypage/useUserInfo";
import React from "react";

const Buttons = () => {
    const { onClickInsertHandler } = useUserInfo();
    return (
        <>
            <button onClick={onClickInsertHandler}>저장하기</button>
            <button>공유하기</button>
        </>
    );
};

export default Buttons;
