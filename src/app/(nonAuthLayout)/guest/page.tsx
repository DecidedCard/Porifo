"use client";

import Introduction from "@/Components/MyPage/Introduction";
import Project from "@/Components/MyPage/Project";
import UserInfo from "@/Components/MyPage/UserInfo";
import React, { useState } from "react";
import PortfolioUrl from "@/Components/MyPage/PortfolioUrl";
import Navigation from "@/Components/MyPage/Navigation";
import Buttons from "@/Components/Guest/Buttons";

const Guest = () => {
    const [nav, setNav] = useState("basicInfo");
    return (
        <div className="flex justify-center bg-hihigray max-w-full min-h-full mx-auto">
            <Navigation setNav={setNav} />
            <div className="w-[800px]">
                {nav === "basicInfo" && <UserInfo />}
                {nav === "introduce" && <Introduction />}
                {nav === "project" && <Project />}
                {nav === "url" && <PortfolioUrl />}
            </div>
            <Buttons />
        </div>
    );
};

export default Guest;
