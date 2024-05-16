import React, { ChangeEvent, useEffect } from "react";

import Input from "../Commen/Input";

import { MdClose } from "react-icons/md";

import useEducation from "@/hooks/mypage/useEducation";

import type { Education } from "@/types/Education";

const EducationInputForm = ({ education, educationIndex }: { education: Education; educationIndex: number }) => {
    const {
        startDate,
        endDate,
        attending,
        setStartDate,
        setEndDate,
        setAttending,
        onChangeSchoolHandler,
        onChangeClassHandler,
        onChangeDateHandler,
        onChangeCommentHandler,
        onClickMinusHandler,
    } = useEducation();

    useEffect(() => {
        if (education.date) {
            if (education.date.indexOf("재학") !== -1) {
                setStartDate(education.date.slice(0, 7));
                setAttending(true);
                return;
            }
            setStartDate(education.date.slice(0, 7));
            setEndDate(education.date.slice(10));
        }
    }, [education.date, setStartDate, setEndDate, setAttending]);

    return (
        <div>
            <div className="flex flex-col gap-4">
                <div className="w-fit cursor-pointer ml-auto" onClick={() => onClickMinusHandler(educationIndex)}>
                    <MdClose className="w-6 h-6 ml-auto text-grayblack" />
                </div>
                <div className="flex mt-1 sm:flex-col sm:w-full sm:ml-0">
                    <label className="font-medium text-zinc-500 w-[177px] h-[32px] mt-2">학교</label>
                    <div className="flex flex-col gap-4 w-[460px] ml-3 sm:w-full sm:ml-0">
                        <Input
                            type="text"
                            placeholder="학교를 입력해주세요."
                            size="big"
                            maxLength={50}
                            value={education.school}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeSchoolHandler(e, educationIndex)}
                        />
                    </div>
                </div>
                <div className="flex mt-1 sm:flex-col sm:w-full sm:ml-0">
                    <div className="flex flex-col gap-4 w-[460px] ml-auto mr-2 sm:w-full sm:ml-0">
                        <Input
                            type="text"
                            placeholder="전공 및 학위"
                            size="big"
                            maxLength={50}
                            value={education.class}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeClassHandler(e, educationIndex)}
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
                                    value={startDate}
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
                                    value={endDate}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                        onChangeDateHandler(e, educationIndex)
                                    }
                                />
                            </div>
                        </div>
                        <div className="flex gap-1 mt-2">
                            <input
                                type="checkBox"
                                name="attending"
                                checked={attending}
                                onChange={(e) => onChangeDateHandler(e, educationIndex)}
                            />
                            <p>재학 중</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-start mt-1 sm:flex-col sm:w-full sm:gap-4">
                    <label className="font-medium text-zinc-500 relative w-[177px] flex items-center justify-start mt-2">
                        내용
                    </label>
                    <div className="flex flex-col gap-1 w-[460px] sm:w-full">
                        <textarea
                            placeholder="성과를 위주로 작성해 주세요."
                            maxLength={300}
                            value={education.comment}
                            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                                onChangeCommentHandler(e, educationIndex)
                            }
                            className="w-[460px] h-[140px] resize-none rounded-lg p-3 ml-3 text-[14px] border border-solid border-zinc-300 sm:w-full sm:ml-0"
                        />
                        <div className="ml-auto text-sm text-nonegray">{education.comment.length}/300</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EducationInputForm;
