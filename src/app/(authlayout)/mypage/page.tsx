"use client";

import React, { useState } from "react";

import UserInfo from "@/Components/MyPage/UserInfo";
import Project from "@/Components/MyPage/Project";
import Introduction from "@/Components/MyPage/Introduction";
import Buttons from "@/Components/MyPage/Buttons";
import Navigation from "@/Components/MyPage/Navigation";
import PortfolioUrl from "@/Components/MyPage/PortfolioUrl";
import Loading from "@/Components/Loading";

import useUserStore from "@/store/userStore";

import usePortfolioQuery from "@/hooks/mypage/usePortfolioQuery";

const MyPage = () => {
    const [nav, setNav] = useState("basicInfo");
    const { user } = useUserStore();

    const { isLoading } = usePortfolioQuery(user?.id!);

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

    if (isLoading) {
        return (
            <div className="absolute top-0 left-0 z-50 flex justify-center items-center w-full h-full bg-gray_1">
                <Loading />
            </div>
        );
    }

    return (
        <>
            <div className="relative top-20 flex justify-center gap-[75px] bg-gray_1 max-w-full min-h-[500px] sm:bg-white sm:flex-col sm:w-full">
                <Navigation setNav={setNav} />
                <div className="flex gap-5 pb-[200px] w-[800px] min-h-[750px] sm:w-full">
                    {nav === "basicInfo" && <UserInfo />}
                    {nav === "introduce" && <Introduction />}
                    {nav === "project" && <Project />}
                    {nav === "url" && <PortfolioUrl />}
                    <Buttons />
                </div>
            </div>
        </>
    );
};

export default MyPage;
