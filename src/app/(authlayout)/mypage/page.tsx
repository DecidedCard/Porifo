"use client";

import React, { useState } from "react";

import UserInfo from "@/Components/MyPage/UserInfo";
import Project from "@/Components/MyPage/Project";
import Introduction from "@/Components/MyPage/Introduction";
import Buttons from "@/Components/MyPage/Buttons";
import Navigation from "@/Components/MyPage/Navigation";
import PortfolioUrl from "@/Components/MyPage/PortfolioUrl";
import useUserStore from "@/store/userStore";
import usePortfolioQuery from "@/hooks/mypage/usePortfolioQuery";
import Loading from "@/Components/Loading";

const MyPage = () => {
    const [nav, setNav] = useState("basicInfo");
    const { user } = useUserStore();

    const { isFetching } = usePortfolioQuery(user?.id!);

    if (isFetching) {
        return (
            <div className="absolute top-0 left-0 z-50 flex justify-center items-center w-screen h-screen bg-hihigray">
                <Loading />
            </div>
        );
    }

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
