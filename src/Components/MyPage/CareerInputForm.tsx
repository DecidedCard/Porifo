import React, { ChangeEvent, useEffect } from "react";

import { MdClose } from "react-icons/md";

import Input from "../Commen/Input";

import useCareer from "@/hooks/mypage/useCareer";

import type { Career } from "@/types/Career";

const CareerInputForm = ({ career, careerIndex }: { career: Career; careerIndex: number }) => {
    const {
        startDate,
        endDate,
        attending,
        setStartDate,
        setEndDate,
        setAttending,
        onChangeCompanyHandler,
        onChangeDepartmentHandler,
        onChangePositionHandler,
        onChangeDateHandler,
        onChangeCommentHandler,
        onClickMinusHandler,
    } = useCareer();

    useEffect(() => {
        if (career.date) {
            if (career.date.indexOf("재직") !== -1) {
                setStartDate(career.date.slice(0, 7));
                setAttending(true);
                return;
            }
            setStartDate(career.date.slice(0, 7));
            setEndDate(career.date.slice(10));
        }
    }, [career.date, setStartDate, setEndDate, setAttending]);

    return (
        <div>
            <div className="flex flex-col gap-4">
                {/* 추후 수정 */}
                <div className="w-fit cursor-pointer ml-auto" onClick={() => onClickMinusHandler(careerIndex)}>
                    <MdClose className="w-6 h-6 ml-auto text-grayblack" />
                </div>
                <div className="flex mt-1 sm:flex-col sm:w-full sm:ml-0">
                    <label className="w-[177px] h-[32px] mt-2 text-gray_5 text-P6_M">회사이름</label>
                    <div className="flex flex-col gap-4 w-[460px] ml-3 sm:w-full sm:ml-0">
                        <Input
                            type="text"
                            placeholder="회사이름을 입력해주세요."
                            size="big"
                            maxLength={100}
                            value={career.company}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeCompanyHandler(e, careerIndex)}
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
                    <label className="w-[177px] h-[32px] mt-2 text-gray_5 text-P6_M">기간</label>
                    <div className="w-[460px] ml-3 sm:w-full sm:ml-0">
                        <div className="flex justify-between sm:gap-2">
                            <div className="w-[224px] sm:w-[49%]">
                                <Input
                                    type="month"
                                    placeholder="YYYY.MM"
                                    size="big"
                                    name="startDate"
                                    value={startDate}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeDateHandler(e, careerIndex)}
                                />
                            </div>

                            <div className="w-[224px] sm:w-[49%]">
                                <Input
                                    type="month"
                                    placeholder="YYYY.MM"
                                    size="big"
                                    name="endDate"
                                    value={endDate}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeDateHandler(e, careerIndex)}
                                />
                            </div>
                        </div>
                        <div className="flex gap-1 mt-2">
                            <input
                                type="checkBox"
                                name="attending"
                                checked={attending}
                                onChange={(e) => onChangeDateHandler(e, careerIndex)}
                            />
                            <p>재직 중</p>
                        </div>
                    </div>
                </div>

                <div className="flex items-start mt-1 sm:flex-col sm:w-full sm:gap-4">
                    <label className="relative w-[177px] flex items-center justify-start mt-2 text-gray_5 text-P6_M">
                        내용
                    </label>
                    <div className="flex flex-col gap-1 w-[460px] sm:w-full">
                        <textarea
                            placeholder="구체적인 역할과 성과를 위주로 작성해 주세요."
                            maxLength={300}
                            value={career.comment}
                            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => onChangeCommentHandler(e, careerIndex)}
                            className="w-[460px] h-[140px] resize-none rounded-lg p-3 ml-3 text-[14px] border border-solid border-zinc-300 sm:w-full sm:ml-0"
                        />
                        <div className="ml-auto text-sm text-nonegray">{career.comment.length}/300</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CareerInputForm;
