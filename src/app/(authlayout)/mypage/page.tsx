"use client";

import React, { useEffect, useState } from "react";

import UserInfo from "@/Components/MyPageComponents/UserInfo";
import URL from "@/Components/MyPageComponents/URL";
import Project from "@/Components/MyPageComponents/Project";
import Introduction from "@/Components/MyPageComponents/Introduction";
import Buttons from "@/Components/MyPageComponents/Buttons";
import Navigation from "@/Components/MyPageComponents/Navigation";
import useMyPage from "@/hooks/myPage/useMyPage";

const MyPage = () => {
    const [nav, setNav] = useState("basicInfo");

    return (
        <div className="flex gap-10 w-fit mx-auto">
            <Navigation setNav={setNav} />
            <div className="w-fit">
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
