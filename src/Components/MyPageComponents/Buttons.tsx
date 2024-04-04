"use client";

import React from "react";

import useInfo from "@/hooks/myPage/useInfo";
import { useRouter } from "next/navigation";

const Buttons = () => {
    const { user, onClickInsertHandler } = useInfo();
    const router = useRouter();
    return (
        <>
            <button onClick={onClickInsertHandler}>저장하기</button>
            <button>공유하기</button>
            <button onClick={() => router.push(`/mypage/${user!.id}`)}>미리보기</button>
        </>
    );
};

export default Buttons;
