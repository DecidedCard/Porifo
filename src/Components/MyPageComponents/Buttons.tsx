"use client";

import React from "react";

import useInfo from "@/hooks/mypage/useInfo";
import { useRouter } from "next/navigation";

const Buttons = () => {
    const { user, portfolio, onClickInsertHandler } = useInfo();
    const router = useRouter();
    return (
        <>
            <button onClick={onClickInsertHandler}>{portfolio ? "수정하기" : "저장하기"}</button>
            <button>공유하기</button>
            <button onClick={() => router.push(`/mypage/${user!.id}`)}>미리보기</button>
        </>
    );
};

export default Buttons;
