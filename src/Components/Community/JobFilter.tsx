"use client";

import { useState } from "react";

import useSupabaseRange from "@/hooks/useSupabaseRange";

import Dropdown from "./Dropdown";
import Image from "next/image";

const Filter = () => {
    const { filter } = useSupabaseRange();
    const [view, setView] = useState(false);

    return (
        <div className="mt-16 flex flex-col lg:ml-20">
            <span className="font-spoqaMedium text-black font-medium text-sm ml-1">정렬</span>
            <button className={`w-[192px] h-9 font-spoqaMedium border-solid border-2 border-gray2 p-3 mt-2 w-58 text-[12px] ${view ? ("rounded-tr-lg rounded-tl-lg") : ("rounded-[8px]")}`}
                onClick={() => {
                    setView(!view);
                }}
            >
                <ul className="flex justify-between items-center h-full">
                    {filter}{" "}
                    {view ? (
                        <Image src="arrow-up.svg" alt="화살표 아이콘" width={20} height={20} className="w-5 h-5"/>
                    ) : (
                        <Image src="arrow-down.svg" alt="화살표 아이콘" width={20} height={20} className="w-5 h-5"/>
                    )}
                </ul>
            </button>
            {view && <Dropdown props={{ setView }} />}
        </div>
    );
};

export default Filter;
