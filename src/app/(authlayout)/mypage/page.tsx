"use client";

import React, { useState } from "react";

import dynamic from "next/dynamic";

import Buttons from "@/Components/MyPage/Buttons";
import Navigation from "@/Components/MyPage/Navigation";

const UserInfo = dynamic(import("@/Components/MyPage/UserInfo"), { ssr: false });
const Introduction = dynamic(import("@/Components/MyPage/Introduction"), { ssr: false });
const Project = dynamic(import("@/Components/MyPage/Project"), { ssr: false });
const PortfolioUrl = dynamic(import("@/Components/MyPage/PortfolioUrl"), { ssr: false });

const MyPage = () => {
    const [nav, setNav] = useState("basicInfo");

    return (
        <div className="flex justify-center bg-hihigray max-w-full min-h-full mx-auto">
            <Navigation setNav={setNav} />
            <div className="w-[800px] min-h-[750px]">
                {nav === "basicInfo" && <UserInfo />}
                {nav === "introduce" && <Introduction />}
                {nav === "project" && <Project />}
                {nav === "url" && <PortfolioUrl />}
            </div>
            <Buttons />
        </div>
    );
};

export default MyPage;
