"use client";

import React, { useState } from "react";

import UserInfo from "@/Components/MyPageComponents/UserInfo";
import URL from "@/Components/MyPageComponents/URL";
import Project from "@/Components/MyPageComponents/Project";
import Introduction from "@/Components/MyPageComponents/Introduction";
import Buttons from "@/Components/MyPageComponents/Buttons";
import Navigation from "@/Components/MyPageComponents/Navigation";
import PdfButton from "@/Components/MyPageComponents/PdfButton";

import { usePDF } from "react-to-pdf";
import Portfolio from "@/Components/MyPageComponents/Portfolio";

const MyPage = () => {
    const [nav, setNav] = useState("basicInfo");
    const { targetRef, toPDF } = usePDF();

    return (
        <div className="flex justify-evenly max-w-7xl min-h-96 mx-auto mt-10">
            <Navigation setNav={setNav} />
            <div className="w-[800px]">
                {nav === "basicInfo" && <UserInfo />}
                {nav === "introduce" && <Introduction />}
                {nav === "project" && <Project />}
                {nav === "url" && <URL />}
            </div>
            <PdfButton toPDF={toPDF} />
            <Buttons />
            {/* <div ref={targetRef}>
                <Portfolio />
            </div> */}
        </div>
    );
};

export default MyPage;
