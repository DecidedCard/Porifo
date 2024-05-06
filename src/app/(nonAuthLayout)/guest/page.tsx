"use client";

import React, { useEffect, useState } from "react";

import Introduction from "@/Components/MyPage/Introduction";
import Project from "@/Components/MyPage/Project";
import UserInfo from "@/Components/MyPage/UserInfo";
import PortfolioUrl from "@/Components/MyPage/PortfolioUrl";
import Navigation from "@/Components/MyPage/Navigation";
import Buttons from "@/Components/Guest/Buttons";

import useUserStore from "@/store/userStore";
import usePortfolioInfoStore from "@/store/portfolioInfoStore";

const Guest = () => {
    const { setPortfolio } = useUserStore();
    const { setReset } = usePortfolioInfoStore();
    const [nav, setNav] = useState("basicInfo");
    useEffect(() => {
        setPortfolio(null);
        setReset();
    }, [setPortfolio, setReset]);

    const onClickNextHandler = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        if (nav === "basicInfo") {
            setNav("introduce");
            return;
        }
        if (nav === "introduce") {
            setNav("project");
            return;
        }
        if (nav === "project") {
            setNav("url");
            return;
        }
    };

    const onClickPrevHandler = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        if (nav === "introduce") {
            setNav("basicInfo");
            return;
        }
        if (nav === "project") {
            setNav("introduce");
            return;
        }
        if (nav === "url") {
            setNav("project");
            return;
        }
    };

    return (
        <>
            <div className="flex justify-center bg-hihigray max-w-full min-h-full mx-auto sm:bg-white sm:flex-col sm:w-full">
                <Navigation setNav={setNav} />
                <div className="w-[800px] min-h-[750px] sm:w-full">
                    {nav === "basicInfo" && <UserInfo />}
                    {nav === "introduce" && <Introduction />}
                    {nav === "project" && <Project />}
                    {nav === "url" && <PortfolioUrl />}
                </div>
                <Buttons />
            </div>
            <div className="flex justify-center gap-20 mt-4 text-primary">
                <div className={`cursor-pointer ${nav === "basicInfo" && "opacity-0"}`} onClick={onClickPrevHandler}>
                    PREV
                </div>
                <div className={`cursor-pointer ${nav === "url" && "opacity-0"}`} onClick={onClickNextHandler}>
                    NEXT
                </div>
            </div>
        </>
    );
};

export default Guest;
