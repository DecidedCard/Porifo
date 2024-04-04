"use client";

import Button from "@/Components/Commen/Button";
import Introduction from "@/Components/MyPageComponents/Introduction";
import Project from "@/Components/MyPageComponents/Project";
import URL from "@/Components/MyPageComponents/URL";
import UserInfo from "@/Components/MyPageComponents/UserInfo";
import useInfo from "@/hooks/myPage/useInfo";
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
