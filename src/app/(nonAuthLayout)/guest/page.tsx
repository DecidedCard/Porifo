"use client";

import React, { useEffect, useState } from "react";

import Introduction from "@/Components/MyPage/Introduction";
import Project from "@/Components/MyPage/Project";
import UserInfo from "@/Components/MyPage/UserInfo";
import PortfolioUrl from "@/Components/MyPage/PortfolioUrl";
import Navigation from "@/Components/MyPage/Navigation";
import Buttons from "@/Components/Guest/Buttons";

import useUserStore from "@/store/userStore";

const Guest = () => {
    const { setPortfolio } = useUserStore();
    const [nav, setNav] = useState("basicInfo");

    useEffect(() => {
        setPortfolio(null);
    }, [setPortfolio]);

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
