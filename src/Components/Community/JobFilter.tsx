"use client";

import { useState } from "react";

import useSupabaseRange from "@/hooks/useSupabaseRange";

import Dropdown from "./Dropdown";
import Image from "next/image";

const Filter = () => {
    const { filter } = useSupabaseRange();
    const [view, setView] = useState(false);

    return (
        <div className="w-68 p-4 ml-20 mt-20 flex flex-col lg:ml-10 ">
            <span className="font-spoqaMedium text-black font-bold text-lg">정렬</span>
            <button className="font-spoqaMedium font-bold border-solid border-2 border-gray2 rounded-xl p-3 mt-2 w-58 ">
                <ul
                    className="flex justify-between w-[180px]"
                    onClick={() => {
                        setView(!view);
                    }}
                >
                    {filter}{" "}
                    {view ? (
                        <Image src="arrow-up.svg" alt="화살표 아이콘" width={20} height={20} />
                    ) : (
                        <Image src="arrow-down.svg" alt="화살표 아이콘" width={20} height={20} />
                    )}
                </ul>
            </button>
            {view && <Dropdown props={{ setView }} />}
        </div>
    );
};

export default Filter;
