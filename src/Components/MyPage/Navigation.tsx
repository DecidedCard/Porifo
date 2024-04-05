import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";
import { TbPencilMinus } from "react-icons/tb";
import { RiLinkM } from "react-icons/ri";

const Navigation = ({ setNav }: { setNav: React.Dispatch<React.SetStateAction<string>> }) => {
    return (
        <nav className="text-zinc-500 flex flex-col mt-10 border-slate-800">
            <button
                onClick={() => setNav("basicInfo")}
                className="w-[220px] h-[40px] mb-3 flex items-center py-2 px-4 bg-white rounded-xl hover:bg-gray-100"
            >
                <IoSettingsOutline className="mr-3"/>기본정보</button>
            <button
                onClick={() => setNav("introduce")}
                className="w-[220px] h-[40px] mb-3 flex items-center py-2 px-4 bg-white rounded-xl hover:bg-gray-100"
            >
                <AiOutlineMessage className="mr-3"/>소개</button>
            <button
                onClick={() => setNav("project")}
                className="w-[220px] h-[40px] mb-3 flex items-center py-2 px-4 bg-white rounded-xl hover:bg-gray-100"
            >
                <TbPencilMinus className="mr-3"/>프로젝트</button>
            <button
                onClick={() => setNav("url")}
                className="w-[220px] h-[40px] flex items-center py-2 px-4 bg-white rounded-xl hover:bg-gray-100"
            >
                <RiLinkM className="mr-3"/>URL</button>
        </nav>
    );
};

export default Navigation;
