"use client";

import React, { ChangeEvent } from "react";
import Input from "../Commen/Input";
import useCareer from "@/hooks/mypage/useCareer";
import { MdClose } from "react-icons/md";

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
        <div className="flex flex-col gap-5">
            <p className="pl-6 text-xl font-medium text-left">업무 경력</p>
            {careers.map((career, careerIndex) => {
                return (
                    <div key={careerIndex} className="flex flex-col gap-5">
                        {careers.length >= 2 && (
                            <div className="w-[637px]" onClick={() => onClickMinusHandler(careerIndex)}>
                                <MdClose className="w-6 h-6 ml-auto text-grayblack" />
                            </div>
                        )}
                        <div className="flex">
                            <label className="pl-6 font-medium text-zinc-500 w-[177px]">회사이름</label>
                            <div className="flex flex-col gap-5 w-[460px]">
                                <Input
                                    type="text"
                                    placeholder="회사이름을 입력해주세요."
                                    size="big"
                                    value={career.company}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                        onChangeCompanyHandler(e, careerIndex)
                                    }
                                />
                                <div className="flex justify-between">
                                    <div className="w-[224px]">
                                        <Input
                                            type="text"
                                            size="big"
                                            placeholder="부서"
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
                                            value={career.position}
                                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                                onChangePositionHandler(e, careerIndex)
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex">
                            <label className="pl-6 font-medium text-zinc-500 relative w-[177px] flex items-center justify-start">
                                기간
                            </label>
                            <div className="w-[460px]">
                                <div className="flex justify-between">
                                    <div className="w-[224px]">
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

                                    <div className="w-[224px]">
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

                        <div className="flex items-start">
                            <label className="pl-6 pt-6 mb-2 font-medium text-zinc-500 relative w-[177px] flex items-center justify-start">
                                내용
                            </label>
                            <textarea
                                placeholder="구체적인 역할과 성과를 위주로 작성해 주세요."
                                value={career.comment}
                                onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                                    onChangeCommentHandler(e, careerIndex)
                                }
                                className="w-[460px] h-[140px] resize-none rounded-lg p-2 border border-solid border-zinc-300"
                            />
                        </div>
                    </div>
                );
            })}
            <div className="text-3xl mx-auto cursor-pointer" onClick={onClickAddHandler}>
                +
            </div>
        </div>
    );
};

export default Careers;
