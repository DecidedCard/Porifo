"use client";

import Button from "@/Components/Commen/Button";
import Introduction from "@/Components/MyPage/Introduction";
import Project from "@/Components/MyPage/Project";
import URL from "@/Components/MyPage/PortfolioUrl";
import UserInfo from "@/Components/MyPage/UserInfo";
import useInfo from "@/hooks/mypage/useInfo";
import React from "react";

const Guest = () => {
    const { onClickInsertHandler } = useInfo();
    return (
        <div>
            <UserInfo />
            <Introduction />
            <URL />
            <Project />
            <Button text={"저장하기"} onClick={onClickInsertHandler} />
        </div>
    );
};

export default Guest;
