"use client";
import React, { useState } from "react";
import Dropdown from "./Dropdown";
import { ReactComponent as DownArrow } from "@/assets/arrow-down.svg";

const JobFilter = () => {
    const [view, setView] = useState(false);
    return (
        <div className=" border-solid border-2 border-slate-950 w-64 p-4 ml-20 mt-20">
            <span>정렬</span>
            <DownArrow />
            <ul
                onClick={() => {
                    setView(!view);
                }}
                className="border-solid border-2 border-rose-600"
            >
                반가워요, nickname 님! {view ? "⌃" : "⌄"}
                {/* view가 true면 올리는 아이콘, false면 내리는 아이콘 보여줌 */}
                {view && <Dropdown />}
                {/* view가 true일 때만 Dropdown 컴포넌트 렌더링 */}
            </ul>
        </div>
    );
};

export default JobFilter;
