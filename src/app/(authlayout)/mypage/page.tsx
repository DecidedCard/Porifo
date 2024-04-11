"use client";

import React, { useState } from "react";

import UserInfo from "@/Components/MyPage/UserInfo";
import Project from "@/Components/MyPage/Project";
import Introduction from "@/Components/MyPage/Introduction";
import Buttons from "@/Components/MyPage/Buttons";
import Navigation from "@/Components/MyPage/Navigation";
import PortfolioUrl from "@/Components/MyPage/PortfolioUrl";

import Image from "next/image";
import useLoginCheck from "@/hooks/mypage/useLoginCheck";

const MyPage = () => {
    const { isFetching, isError } = useLoginCheck();
    const [nav, setNav] = useState("basicInfo");

    if (isFetching) {
        return (
            <div className="flex justify-center items-center w-screen h-screen">
                <Image src={"../porifo.svg"} alt="로딩 이미지" width={100} height={100} className="animate-bounce" />
            </div>
        );
    }

    if (isError) {
        return <div>404 Not Found</div>;
    }

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
