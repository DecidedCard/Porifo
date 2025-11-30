"use client";

import React, { useEffect, useState } from "react";

import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";
import { TbPencilMinus } from "react-icons/tb";
import { RiLinkM } from "react-icons/ri";

import usePortfolioInfoStore from "@/store/portfolioInfoStore";
import useProjectsStore from "@/store/projectStore";

const data = [
    { text: "기본 정보", icon: <IoSettingsOutline />, arg: "basicInfo" },
    { text: "소개", icon: <AiOutlineMessage />, arg: "introduce" },
    { text: "프로젝트", icon: <TbPencilMinus />, arg: "project" },
    { text: "URL", icon: <RiLinkM />, arg: "url" },
];

const Navigation = ({ setNav }: { setNav: React.Dispatch<React.SetStateAction<string>> }) => {
    const [selectedNav, setSelectedNav] = useState("basicInfo");
    const [projectCheck, setProjectCheck] = useState(false);
    const [emailCheck, setEmailCheck] = useState(false);
    const { basicInfo } = usePortfolioInfoStore();
    const { projects } = useProjectsStore();

    const handleClick = (navItem: string) => {
        setNav(navItem);
        setSelectedNav(navItem);
    };

    // project check
    useEffect(() => {
        const check = projects.map((projectItem) => {
            if (!projectItem.name || !projectItem.introduce || projectItem.date.length !== 23) {
                return true;
            } else {
                return false;
            }
        });

        if (check.find((item) => item === true)) {
            setProjectCheck(true);
        } else {
            setProjectCheck(false);
        }
    }, [projects]);

    useEffect(() => {
        if (!basicInfo.email) {
            setEmailCheck(true);
            return;
        } else {
            const regex = /[a-zA-Z0-9]+[@][a-zA-Z0-9]+[.]+[a-zA-Z]+[.]*[a-zA-Z]*/;

            if (!regex.test(basicInfo.email)) {
                setEmailCheck(true);
                return;
            }
            setEmailCheck(false);
        }
    }, [basicInfo.email]);

    return (
        <nav className="flex flex-col mt-20 items-start justify-start text-gray3 w-[240px] h-[200px] text-[16px] sm:flex-row sm:w-full sm:mx-auto sm:flex-wrap sm:items-center sm:justify-center sm:mt-8 sm:content-center sm:h-[56px] sm:p-2 sm:z-10 sm:text-sm sm:font-medium sm:gap-1">
            {data.map((i) => (
                <button
                    key={i.text}
                    onClick={() => handleClick(i.arg)}
                    className={`w-[220px] h-[40px] mb-3 flex items-center py-2 px-4 rounded-xl ease-in-out duration-500 sm:w-[49%] sm:justify-center sm:h-10 sm:rounded-lg sm:px-0 sm:py-0
            ${
                selectedNav === i.arg ? "bg-white text-black" : "bg-gray-100 text-gray-700"
            } hover:bg-white hover:text-black sm:hover:bg-gray`}
                >
                    <div className="flex gap-4 sm:flex sm:items-center sm:justify-center">
                        {i.icon}
                        {i.text}
                        {/* 추후 추가 작업 */}
                        <span
                            className={`bg-red-400 ${
                                !basicInfo.name || !basicInfo.profileImage || emailCheck || basicInfo.job === "default"
                                    ? "bg-opacity-80"
                                    : "bg-opacity-0"
                            } w-3 h-3 rounded-full ease-in-out duration-500`}
                        ></span>
                    </div>
                </button>
            ))}
        </nav>
    );
};

export default Navigation;
