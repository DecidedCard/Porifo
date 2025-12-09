"use client";

import React from "react";

import useEducation from "@/hooks/mypage/useEducation";
import EducationInputForm from "./EducationInputForm";

const Education = () => {
    const { education, onClickAddHandler } = useEducation();

    return (
        <div className="flex flex-col gap-5 sm:w-full">
            <p className="flex items-center w-[657px] h-[38px] text-xl font-medium sm:w-[45%] ">학력</p>
            {education.map((education, educationIndex) => {
                return (
                    <EducationInputForm key={educationIndex} education={education} educationIndex={educationIndex} />
                );
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

export default Education;
