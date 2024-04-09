"use client";
import React from "react";

const Dropdown = ({ props }: any) => {
    const { setFilter, setView } = props;
    const handleFilterChange = (value: string) => {
        return setFilter(value), setView(false);
    };
    return (
        <div className="list-none font-spoqaMedium font-bold border-solid border-2 border-t-0 border-gray2 rounded-xl ">
            {/* <select classNameName="border-2 border-rose-600 p-5" onChange={(e) => handleFilterOption(e.target.value)}>
                <option value="none" hidden>
                    {filter}
                </option>
                <option value="기본순">기본순</option>
                <option value="최신순">최신순</option>
            </select>
            {filterBtn.map((item) => {
                return (
                    <button key={item.value} className="m-2 border p-5" onClick={() => handleJobFilterBtn(item.value)}>
                        {item.name}
                    </button>
                );
            })} */}
            <li
                value="기본순"
                onClick={() => handleFilterChange("기본순")}
                className="p-4 hover:bg-hihigray rounded-xl cursor-pointer "
            >
                기본순
            </li>
            <li
                value="최신순"
                onClick={() => handleFilterChange("최신순")}
                className="p-4 hover:bg-hihigray rounded-xl cursor-pointer"
            >
                최신순
            </li>
            <li
                value="오래된 순"
                onClick={() => handleFilterChange("오래된 순")}
                className="p-4 hover:bg-hihigray rounded-xl cursor-pointer"
            >
                오래된 순
            </li>
        </div>
    );
};

export default Dropdown;
