"use client";

import React, { useState } from "react";

import UserInfo from "@/Components/MyPageComponents/UserInfo";
import URL from "@/Components/MyPageComponents/URL";
import Project from "@/Components/MyPageComponents/Project";
import Introduction from "@/Components/MyPageComponents/Introduction";
import Buttons from "@/Components/MyPageComponents/Buttons";
import Navigation from "@/Components/MyPageComponents/Navigation";

import useMyPage from "@/hooks/mypage/useMyPage";

const MyPage = () => {
    const {} = useMyPage();
    const [nav, setNav] = useState("basicInfo");

    return (
        <div className="flex justify-evenly max-w-7xl min-h-96 mx-auto mt-10">
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
