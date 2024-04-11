import useEducation from "@/hooks/mypage/useEducation";
import React, { ChangeEvent } from "react";
import Input from "../Commen/Input";
import { MdClose } from "react-icons/md";

const Education = () => {
    const {
        education,
        onChangeSchoolHandler,
        onChangeClassHandler,
        onChangeDateHandler,
        onClickAddHandler,
        onClickMinusHandler,
    } = useEducation();
    return (
        <div className="flex flex-col gap-5">
            {education.map((educationItem, educationIndex) => {
                return (
                    <div key={educationIndex} className="flex flex-col gap-5">
                        {education.length >= 2 && (
                            <div className="w-[637px]" onClick={() => onClickMinusHandler(educationIndex)}>
                                <MdClose className="w-6 h-6 ml-auto text-grayblack" />
                            </div>
                        )}
                        <div className="flex">
                            <label className="pl-6 font-medium text-zinc-500 w-[177px]">학교</label>
                            <div className="w-[460px]">
                                <Input
                                    type="text"
                                    placeholder="학교를 입력해 주세요."
                                    value={educationItem.school!}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                        onChangeSchoolHandler(e, educationIndex)
                                    }
                                    size="big"
                                />
                            </div>
                        </div>
                        <div className="flex">
                            <label className="pl-6 font-medium text-zinc-500 w-[177px]">전공</label>
                            <div className=" w-[460px]">
                                <Input
                                    type="text"
                                    placeholder="전공을 입력해 주세요."
                                    value={educationItem.class!}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                        onChangeClassHandler(e, educationIndex)
                                    }
                                    size="big"
                                />
                            </div>
                        </div>
                        <div className="flex">
                            <label className="pl-6 font-medium text-zinc-500 w-[177px]">기간</label>
                            <div className="w-[460px]">
                                <div className="flex justify-between">
                                    <div className="w-[224px]">
                                        <Input
                                            type="month"
                                            placeholder="YYYY.MM"
                                            size="big"
                                            name="startDate"
                                            value={educationItem.date.slice(0, 7)}
                                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                                onChangeDateHandler(e, educationIndex)
                                            }
                                        />
                                    </div>

                                    <div className="w-[224px]">
                                        <Input
                                            type="month"
                                            placeholder="YYYY.MM"
                                            size="big"
                                            name="endDate"
                                            value={educationItem.date.slice(10)}
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
            <div className="text-3xl mx-auto cursor-pointer" onClick={onClickAddHandler}>
                +
            </div>
        </div>
    );
};

export default Education;
