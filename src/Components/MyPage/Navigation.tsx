"use client";

import React, { useEffect, useState } from "react";

import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";
import { TbPencilMinus } from "react-icons/tb";
import { RiLinkM } from "react-icons/ri";

import usePortfolioInfoStore from "@/store/portfolioInfoStore";
import useProjectsStore from "@/store/projectStore";

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
        <nav className="flex flex-col mt-20 items-start justify-start text-gray-2 w-[240px] h-[200px] text-[16px] sm:sticky sm:top-0 sm:z-20 sm:mt-0 sm:grid sm:w-full sm:grid-cols-2 sm:gap-2 sm:bg-white sm:px-4 sm:py-4 sm:text-sm sm:font-medium sm:shadow-[0_8px_20px_rgba(15,23,42,0.06)]">
            <button
                onClick={() => handleClick("basicInfo")}
                className={`w-[220px] h-[40px] mb-3 flex items-center py-2 px-4 rounded-xl ease-in-out duration-500 sm:mb-0 sm:h-11 sm:w-full sm:justify-center sm:rounded-xl sm:px-0 sm:py-0
            ${
                selectedNav === "basicInfo" ? "bg-white text-black" : "bg-gray-100 text-gray-700"
            } hover:bg-white hover:text-black sm:hover:bg-gray`}
            >
                <div className="flex gap-4 sm:items-center sm:justify-center">
                    <IoSettingsOutline />
                    기본 정보
                    <span
                        className={`bg-red-400 ${
                            !basicInfo.name || !basicInfo.profileImage || emailCheck || basicInfo.job === "default"
                                ? "bg-opacity-80"
                                : "bg-opacity-0"
                        } w-3 h-3 rounded-full ease-in-out duration-500`}
                    ></span>
                </div>
            </button>
            <button
                onClick={() => handleClick("introduce")}
                className={`w-[220px] h-[40px] mb-3 flex items-center py-2 px-4 rounded-xl ease-in-out duration-500 sm:mb-0 sm:h-11 sm:w-full sm:justify-center sm:rounded-xl sm:px-0 sm:py-0
            ${
                selectedNav === "introduce" ? "bg-white text-black" : "bg-gray-100 text-gray-700"
            } hover:bg-white hover:text-black sm:hover:bg-gray`}
            >
                <div className="flex gap-4 sm:items-center sm:justify-center">
                    <AiOutlineMessage />
                    소개
                    <span
                        className={`bg-red-400 ${
                            !basicInfo.oneLineIntroduce ||
                            !basicInfo.introduce ||
                            JSON.parse(JSON.stringify(basicInfo.skillTag)).length === 0
                                ? "bg-opacity-80"
                                : "bg-opacity-0"
                        } ml-auto w-3 h-3 rounded-full ease-in-out duration-500`}
                    ></span>
                </div>
            </button>
            <button
                onClick={() => handleClick("project")}
                className={`w-[220px] h-[40px] mb-3 flex items-center py-2 px-4 rounded-xl ease-in-out duration-500 sm:mb-0 sm:h-11 sm:w-full sm:justify-center sm:rounded-xl sm:px-0 sm:py-0
            ${
                selectedNav === "project" ? "bg-white text-black" : "bg-gray-100 text-gray-700"
            } hover:bg-white hover:text-black sm:hover:bg-gray`}
            >
                <div className="flex gap-4 sm:items-center sm:justify-center">
                    <TbPencilMinus />
                    프로젝트
                    <span
                        className={`bg-red-400 ${
                            projectCheck ? "bg-opacity-80" : "bg-opacity-0"
                        } ml-auto w-3 h-3 rounded-full ease-in-out duration-500`}
                    ></span>
                </div>
            </button>
            <button
                onClick={() => handleClick("url")}
                className={`w-[220px] h-[40px] mb-3 flex items-center py-2 px-4 rounded-xl ease-in-out duration-500 sm:mb-0 sm:h-11 sm:w-full sm:justify-center sm:rounded-xl sm:px-0 sm:py-0
                ${
                    selectedNav === "url" ? "bg-white text-black" : "bg-gray-100 text-gray-700"
                } hover:bg-white hover:text-black sm:hover:bg-gray`}
            >
                <div className="flex gap-4 sm:items-center sm:justify-center">
                    <RiLinkM />
                    URL
                </div>
            </button>
        </nav>
    );
};

export default Navigation;
