"use client";
import React, { useState } from "react";
import Dropdown from "./Dropdown";

const JobFilter = () => {
    const [filter, setFilter] = useState("기본순");
    const [view, setView] = useState(false);
    return (
        <div className="w-68 p-4 ml-20 mt-20 flex flex-col ">
            <span className="font-spoqaMedium text-black font-bold text-lg">정렬</span>
            <button className="font-spoqaMedium font-bold border-solid border-2 border-gray2 rounded-xl p-3 mt-2 w-58 ">
                <ul
                    className="flex gap-[125px]"
                    onClick={() => {
                        setView(!view);
                    }}
                >
                    {filter} {view ? <img src="arrow-up.svg" /> : <img src="arrow-down.svg" />}
                </ul>
            </button>
            {view && <Dropdown props={{ setFilter, setView }} />}
        </div>
    );
};

export default JobFilter;
