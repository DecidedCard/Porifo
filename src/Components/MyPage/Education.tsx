"use client";

import React, { ChangeEvent } from "react";

import { MdClose } from "react-icons/md";

import Input from "../Commen/Input";

import useEducation from "@/hooks/mypage/useEducation";

const Education = () => {
    const {
        education,
        onChangeSchoolHandler,
        onChangeClassHandler,
        onChangeDateHandler,
        onChangeCommentHandler,
        onClickAddHandler,
        onClickMinusHandler,
    } = useEducation();

    return (
        <div className="flex flex-col gap-5 sm:w-full">
            <p className="flex items-center w-[657px] h-[38px] text-xl font-medium sm:w-[45%] ">학력</p>
            {education.map((education, educationIndex) => {
                return (
                    <div key={educationIndex} className="flex flex-col gap-4">
                        <div
                            className="w-fit cursor-pointer ml-auto"
                            onClick={() => onClickMinusHandler(educationIndex)}
                        >
                            <MdClose className="w-6 h-6 ml-auto text-grayblack" />
                        </div>
                        <div className="flex mt-1 sm:flex-col sm:w-full sm:ml-0">
                            <label className="font-medium text-zinc-500 w-[177px] h-[32px] mt-2">학교</label>
                            <div className="flex flex-col gap-4 w-[460px] ml-3 sm:w-full sm:ml-0">
                                <Input
                                    type="text"
                                    placeholder="학교를 입력해주세요."
                                    size="big"
                                    maxLength={100}
                                    value={education.school}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                        onChangeSchoolHandler(e, educationIndex)
                                    }
                                />
                            </div>
                        </div>
                        <div className="flex mt-1 sm:flex-col sm:w-full sm:ml-0">
                            <div className="flex flex-col gap-4 w-[460px] ml-auto mr-2 sm:w-full sm:ml-0">
                                <Input
                                    type="text"
                                    placeholder="전공 및 학위"
                                    size="big"
                                    maxLength={100}
                                    value={education.class}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                        onChangeClassHandler(e, educationIndex)
                                    }
                                />
                            </div>
                        </div>

                        <div className="flex mt-1 sm:flex-col sm:w-full">
                            <label className="font-medium text-zinc-500 w-[177px] h-[32px] mt-2">기간</label>
                            <div className="w-[460px] ml-3 sm:w-full sm:ml-0">
                                <div className="flex justify-between sm:gap-2">
                                    <div className="w-[224px] sm:w-[49%]">
                                        <Input
                                            type="month"
                                            placeholder="YYYY.MM"
                                            size="big"
                                            name="startDate"
                                            value={education.date.slice(0, 7)}
                                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                                onChangeDateHandler(e, educationIndex)
                                            }
                                        />
                                    </div>

                                    <div className="w-[224px] sm:w-[49%]">
                                        <Input
                                            type="month"
                                            placeholder="YYYY.MM"
                                            size="big"
                                            name="endDate"
                                            value={education.date.slice(10)}
                                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                                onChangeDateHandler(e, educationIndex)
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
