"use client";

import React, { ChangeEvent } from "react";

import { MdClose } from "react-icons/md";

import Input from "../Commen/Input";

import useCareer from "@/hooks/mypage/useCareer";

const Careers = () => {
    const {
        careers,
        onChangeCompanyHandler,
        onChangeDepartmentHandler,
        onChangePositionHandler,
        onChangeDateHandler,
        onChangeCommentHandler,
        onClickAddHandler,
        onClickMinusHandler,
    } = useCareer();
    return (
        <div className="flex flex-col gap-5 sm:w-full">
            <p className="flex items-center w-[657px] h-[38px] text-xl font-medium sm:w-[45%] ">업무 경력</p>
            {careers.map((career, careerIndex) => {
                return (
                    <div key={careerIndex} className="flex flex-col gap-4">
                        <div className="w-fit cursor-pointer ml-auto" onClick={() => onClickMinusHandler(careerIndex)}>
                            <MdClose className="w-6 h-6 ml-auto text-grayblack" />
                        </div>
                        <div className="flex mt-1 sm:flex-col sm:w-full sm:ml-0">
                            <label className="font-medium text-zinc-500 w-[177px] h-[32px] mt-2">회사이름</label>
                            <div className="flex flex-col gap-4 w-[460px] ml-3 sm:w-full sm:ml-0">
                                <Input
                                    type="text"
                                    placeholder="회사이름을 입력해주세요."
                                    size="big"
                                    maxLength={100}
                                    value={career.company}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                        onChangeCompanyHandler(e, careerIndex)
                                    }
                                />
                                <div className="flex justify-between sm:gap-2">
                                    <div className="w-[224px]">
                                        <Input
                                            type="text"
                                            size="big"
                                            placeholder="부서"
                                            maxLength={50}
                                            value={career.department}
                                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                                onChangeDepartmentHandler(e, careerIndex)
                                            }
                                        />
                                    </div>
                                    <div className="w-[224px]">
                                        <Input
                                            type="text"
                                            size="big"
                                            placeholder="직급/직책"
                                            maxLength={50}
                                            value={career.position}
                                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                                onChangePositionHandler(e, careerIndex)
                                            }
                                        />
                                    </div>
                                </div>
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
                                            value={career.date.slice(0, 7)}
                                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                                onChangeDateHandler(e, careerIndex)
                                            }
                                        />
                                    </div>

                                    <div className="w-[224px] sm:w-[49%]">
                                        <Input
                                            type="month"
                                            placeholder="YYYY.MM"
                                            size="big"
                                            name="endDate"
                                            value={career.date.slice(10)}
                                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                                onChangeDateHandler(e, careerIndex)
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-start mt-1 sm:flex-col sm:w-full sm:gap-4">
                            <label className="font-medium text-zinc-500 relative w-[177px] flex items-center justify-start mt-2">
                                내용
                            </label>
                            <div className="flex flex-col gap-1 w-[460px] sm:w-full">
                                <textarea
                                    placeholder="구체적인 역할과 성과를 위주로 작성해 주세요."
                                    maxLength={300}
                                    value={career.comment}
                                    onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                                        onChangeCommentHandler(e, careerIndex)
                                    }
                                    className="w-[460px] h-[140px] resize-none rounded-lg p-3 ml-3 text-[14px] border border-solid border-zinc-300 sm:w-full sm:ml-0"
                                />
                                <div className="ml-auto text-sm text-nonegray">{career.comment.length}/300</div>
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

export default Careers;
