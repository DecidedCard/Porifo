"use client";

import React, { ChangeEvent } from "react";

import { MdClose } from "react-icons/md";

import Input from "../Commen/Input";

import useCareer from "@/hooks/mypage/useCareer";
import CareerInputForm from "./CareerInputForm";

const Careers = () => {
    const { careers, onClickAddHandler } = useCareer();
    return (
        <div className="flex flex-col gap-5 sm:w-full">
            <p className="flex items-center w-[657px] h-[38px] text-black text-P5_M sm:w-[45%] ">업무 경력</p>
            {careers.map((career, careerIndex) => {
                return <CareerInputForm key={careerIndex} career={career} careerIndex={careerIndex} />;
            })}
            <div
                className="flex items-center justify-center rounded-full border-2 border-solid border-gray2 text-gray3 w-[32px] h-[32px] font-extralight pb-1 mt-1 text-3xl mx-auto cursor-pointer"
                onClick={onClickAddHandler}
            >
                +
            </div>
        </div>
    );
};

export default Careers;
