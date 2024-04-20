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
        <nav className="flex flex-col mt-20 items-start justify-start text-gray3 w-[240px] h-[200px] text-[16px] sm:flex-row sm:flex-wrap sm:w-fit sm:mx-auto sm:justify-center sm:mt-3 sm:content-center sm:h-fit sm:z-10">
            <button
                onClick={() => handleClick("basicInfo")}
                className={`w-[220px] h-[40px] mb-3 flex items-center py-2 px-4 rounded-xl ease-in-out duration-500 sm:w-48
            ${
                selectedNav === "basicInfo" ? "bg-white text-black" : "bg-gray-100 text-gray-700"
            } hover:bg-white hover:text-black`}
            >
                <IoSettingsOutline className="mr-3" />
                기본정보
                <span
                    className={`bg-red-400 ${
                        !basicInfo.name || !basicInfo.profileImage || emailCheck || basicInfo.job === "default"
                            ? "bg-opacity-80"
                            : "bg-opacity-0"
                    } ml-auto w-3 h-3 rounded-full ease-in-out duration-500`}
                ></span>
            </button>
            <button
                onClick={() => handleClick("introduce")}
                className={`w-[220px] h-[40px] mb-3 flex items-center py-2 px-4 rounded-xl ease-in-out duration-500 sm:w-48
            ${
                selectedNav === "introduce" ? "bg-white text-black" : "bg-gray-100 text-gray-700"
            } hover:bg-white hover:text-black`}
            >
                <AiOutlineMessage className="mr-3" />
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
            </button>
            <button
                onClick={() => handleClick("project")}
                className={`w-[220px] h-[40px] mb-3 flex items-center py-2 px-4 rounded-xl ease-in-out duration-500 sm:w-48
            ${
                selectedNav === "project" ? "bg-white text-black" : "bg-gray-100 text-gray-700"
            } hover:bg-white hover:text-black`}
            >
                <TbPencilMinus className="mr-3" />
                프로젝트
                <span
                    className={`bg-red-400 ${
                        projectCheck ? "bg-opacity-80" : "bg-opacity-0"
                    } ml-auto w-3 h-3 rounded-full ease-in-out duration-500`}
                ></span>
            </button>
            <button
                onClick={() => handleClick("url")}
                className={`w-[220px] h-[40px] mb-3 flex items-center py-2 px-4 rounded-xl ease-in-out duration-500 sm:w-48
                selectedNav === "url" ? "bg-white text-black" : "bg-gray-100 text-gray-700"
            } hover:bg-white hover:text-black`}
            >
                <RiLinkM className="mr-3" />
                URL
            </button>
        </nav>
    );
};

export default Navigation;
