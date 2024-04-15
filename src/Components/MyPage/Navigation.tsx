import React, { useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";
import { TbPencilMinus } from "react-icons/tb";
import { RiLinkM } from "react-icons/ri";

const Navigation = ({ setNav }: { setNav: React.Dispatch<React.SetStateAction<string>> }) => {

    const [selectedNav, setSelectedNav] = useState("");

    const handleClick = (navItem: string) => {
        setNav(navItem);
        setSelectedNav(navItem);
    }

    return (
        <nav className="flex flex-col mt-20 items-start justify-start text-gray3 w-[240px] h-[200px] text-[16px]">
            <button
                onClick={() => handleClick("basicInfo")}
                className={`w-[220px] h-[40px] mb-3 flex items-center py-2 px-4 rounded-xl 
            ${selectedNav === "basicInfo" ? "bg-white text-black" : "bg-gray-100 text-gray-700"} hover:bg-white hover:text-black`}
            >
                <IoSettingsOutline className="mr-3" />기본정보</button>
            <button
                onClick={() => handleClick("introduce")}
                className={`w-[220px] h-[40px] mb-3 flex items-center py-2 px-4 rounded-xl 
            ${selectedNav === "introduce" ? "bg-white text-black" : "bg-gray-100 text-gray-700"} hover:bg-white hover:text-black`}
            >
                <AiOutlineMessage className="mr-3" />소개</button>
            <button
                onClick={() => handleClick("project")}
                className={`w-[220px] h-[40px] mb-3 flex items-center py-2 px-4 rounded-xl 
            ${selectedNav === "project" ? "bg-white text-black" : "bg-gray-100 text-gray-700"} hover:bg-white hover:text-black`}
            >
                <TbPencilMinus className="mr-3" />프로젝트</button>
            <button
                onClick={() => handleClick("url")}
                className={`w-[220px] h-[40px] mb-3 flex items-center py-2 px-4 rounded-xl 
            ${selectedNav === "url" ? "bg-white text-black" : "bg-gray-100 text-gray-700"} hover:bg-white hover:text-black`}
            >
                <RiLinkM className="mr-3" />URL</button>
        </nav>
    );
};

export default Navigation;
