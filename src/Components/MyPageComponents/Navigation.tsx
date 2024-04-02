"use client";

import useMyPage from "@/hooks/myPage/useMyPage";
import React from "react";

const Navigation = ({ setNav }: { setNav: React.Dispatch<React.SetStateAction<string>> }) => {
    return (
        <nav className="flex flex-col justify-evenly border border-solid border-slate-800">
            <button onClick={() => setNav("basicInfo")}>기본정보</button>
            <button onClick={() => setNav("introduce")}>소개</button>
            <button onClick={() => setNav("project")}>프로젝트</button>
            <button onClick={() => setNav("url")}>URL</button>
        </nav>
    );
};

export default Navigation;
