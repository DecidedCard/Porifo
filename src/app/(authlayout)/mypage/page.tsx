"use client";

import React, { useState } from "react";

import UserInfo from "@/Components/MyPage/UserInfo";
import URL from "@/Components/MyPage/URL";
import Project from "@/Components/MyPage/Project";
import Introduction from "@/Components/MyPage/Introduction";
import Buttons from "@/Components/MyPage/Buttons";
import Navigation from "@/Components/MyPage/Navigation";

import useMyPage from "@/hooks/mypage/useMyPage";

const MyPage = () => {
    // const {} = useMyPage();
    const [nav, setNav] = useState("basicInfo");

    return (
        <div className="flex justify-center bg-hihigray max-w-7xl min-h-96 mx-auto">
            <Navigation setNav={setNav} />
            <div className="w-[800px]">
                {nav === "basicInfo" && <UserInfo />}
                {nav === "introduce" && <Introduction />}
                {nav === "project" && <Project />}
                {nav === "url" && <URL />}
            </div>
            <Buttons />
        </div>
    );
};

export default MyPage;
