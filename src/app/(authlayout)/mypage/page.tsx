"use client";

import React, { useEffect, useState } from "react";

import UserInfo from "@/Components/MyPage/UserInfo";
import Project from "@/Components/MyPage/Project";
import Introduction from "@/Components/MyPage/Introduction";
import Buttons from "@/Components/MyPage/Buttons";
import Navigation from "@/Components/MyPage/Navigation";
import PortfolioUrl from "@/Components/MyPage/PortfolioUrl";

import Image from "next/image";
import useLoginCheck from "@/hooks/mypage/useLoginCheck";

const MyPage = () => {
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

export default MyPage;
