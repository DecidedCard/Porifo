"use client";

import React from "react";

import Image from "next/image";
import useInfo from "@/hooks/mypage/useInfo";
import Input from "../Commen/Input";
import { SELECT_LIST } from "@/util/select_list";

const UserInfo = () => {
    const {
        basicInfo,
        career,
        careers,
        careerStartDate,
        careerEndDate,
        onChangeNameHandler,
        onChangeEngNameHandler,
        onChangeProfileHandler,
        onChangeBirthdayHandler,
        onChangeTelHandler,
        onChangeEmailHandler,
        onChangeSchoolHandler,
        onChangeClassHandler,
        onChangeSelectHandler,
        onChangeCompanyHandler,
        onChangeDepartmentHandler,
        onChangePositionHandler,
        onChangeCommentHandler,
        onChangeCareerStartDate,
        onChangeCareerEndDate,
        onClickInsertCareersHandler,
    } = useInfo();

    return (
        <main className="bg-white rounded-2xl mt-10 ml-9 w-[720px] pb-20">
            <div className="flex flex-col">
                <p className="flex items-center justify-start pl-6 pt-6 text-2xl font-bold tracking-wider">기본 정보</p>
                <hr className="border border-neutral-100 m-6" />
                <p className="pl-6 text-xl font-medium text-left relative flex items-center justify-start">내 정보</p>

                <div className="flex flex-row items-start">
                    <p className="flex items-center justify-start pl-6 pt-6 font-medium text-zinc-500 relative w-[177px]">
                        프로필 사진
                    </p>
                    <label htmlFor="profile" className="cursor-pointer pt-6">
                        {basicInfo.profileImage ? (
                            <Image
                                src={basicInfo.profileImage}
                                alt="프로필 사진 미리보기"
                                width={100}
                                height={100}
                                className="w-[200px] h-[200px] rounded-2xl"
                            />
                        ) : (
                            <div className="flex justify-center items-center bg-zinc-500 w-[170px] h-[170px] rounded-2xl"></div>
                        )}
                    </label>
                    <input type="file" id="profile" className="hidden" onChange={onChangeProfileHandler} />
                </div>

                <div className="items-center">
                    <div className="flex">
                        <label className="pl-6 pt-6 mb-2 font-medium text-zinc-500 relative w-[177px] flex items-center justify-start">
                            이름
                        </label>
                        <div className="mt-10 w-[460px]">
                            <Input
                                type="text"
                                placeholder="이름을 입력해 주세요."
                                value={basicInfo.name!}
                                onChange={onChangeNameHandler}
                                size="big"
                                color=""
                            />
                        </div>
                    </div>
                </div>

                <div className="items-center">
                    <div className="flex">
                        <label className="pl-6 pt-6 mb-2 font-medium text-zinc-500 relative w-[177px] flex items-center justify-start">
                            영문이름
                        </label>
                        <div className="mt-10 w-[460px]">
                            <Input
                                type="text"
                                placeholder="영문 이름을 입력해 주세요."
                                value={basicInfo.englishName}
                                onChange={onChangeEngNameHandler}
                                size="big"
                            />
                        </div>
                    </div>

                    <input type="file" id="text" className="hidden" />
                </div>

                <div className="flex">
                    <label className="pl-6 pt-6 mb-2 font-medium text-zinc-500 relative w-[177px] flex items-center justify-start">
                        생년월일
                    </label>
                    <div className="mt-10 w-[460px]">
                        <Input
                            type="date"
                            placeholder="생년월일을 입력해 주세요"
                            value={basicInfo.birthday!}
                            onChange={onChangeBirthdayHandler}
                            size="big"
                        />
                    </div>
                </div>

                <div className="flex">
                    <label className="pl-6 pt-6 mb-2 font-medium text-zinc-500 relative w-[177px] flex items-center justify-start">
                        연락처
                    </label>
                    <div className="mt-10 w-[460px]">
                        <Input
                            type="tel"
                            placeholder="연락처를 입력해 주세요."
                            value={basicInfo.tel!}
                            onChange={onChangeTelHandler}
                            size="big"
                        />
                    </div>
                </div>

                <div className="flex">
                    <label className="pl-6 pt-6 mb-2 font-medium text-zinc-500 relative w-[177px] flex items-center justify-start">
                        e-mail
                    </label>
                    <div className="mt-10 w-[460px]">
                        <Input
                            type="tel"
                            placeholder="e-mail을 입력해 주세요."
                            value={basicInfo.email}
                            onChange={onChangeEmailHandler}
                            size="big"
                        />
                    </div>
                </div>
                <div className="flex items-center">
                    <label className="pl-6 pt-6 mb-2 font-medium text-zinc-500 relative w-[177px] flex items-center justify-start">
                        직군:
                    </label>
                    <select
                        className="flex font-medium text-zinc-500 relative w-[190px] items-center justify-start mt-6"
                        value={basicInfo.job!}
                        onChange={onChangeSelectHandler}
                    >
                        {SELECT_LIST.map((item) => {
                            return (
                                <option key={item.value} value={item.value}>
                                    {item.name}
                                </option>
                            );
                        })}
                    </select>
                </div>

                <hr className="border border-neutral-100 my-6 mx-6" />
                <p className="pl-6 text-xl font-medium text-left relative flex items-center justify-start">학력</p>

                <div className="flex">
                    <label className="pl-6 pt-6 mb-2 font-medium text-zinc-500 relative w-[177px] flex items-center justify-start">
                        학교
                    </label>
                    <div className="mt-10 w-[460px]">
                        <Input
                            type="text"
                            placeholder="학교를 입력해 주세요."
                            value={basicInfo.school!}
                            onChange={onChangeSchoolHandler}
                            size="big"
                        />
                    </div>
                </div>

                <div className="flex">
                    <label className="pl-6 pt-6 mb-2 font-medium text-zinc-500 relative w-[177px] flex items-center justify-start">
                        전공
                    </label>{" "}
                    <div className="mt-10 w-[460px]">
                        <Input
                            type="text"
                            placeholder="전공을 입력해 주세요."
                            value={basicInfo.class!}
                            onChange={onChangeClassHandler}
                            size="big"
                        />
                    </div>
                </div>

                <hr className="border border-neutral-100 my-6 mx-6" />

                <div className="flex flex-col gap-10">
                    <p className="pl-6 text-xl font-medium text-left relative flex items-center justify-start">
                        업무 경력
                    </p>

                    <div className="flex items-start">
                        <label className="pl-6 pt-6 font-medium text-zinc-500 relative w-[177px] flex items-center justify-start">
                            회사이름
                        </label>
                        <div className="flex flex-col gap-4 w-[460px]">
                            <Input
                                type="text"
                                placeholder="회사이름을 입력해주세요."
                                size="big"
                                value={career.company}
                                onChange={onChangeCompanyHandler}
                            />
                            <div className="flex justify-between">
                                <div className="w-[224px]">
                                    <Input
                                        type="text"
                                        size="big"
                                        placeholder="부서"
                                        value={career.department}
                                        onChange={onChangeDepartmentHandler}
                                    />
                                </div>
                                <div className="w-[224px]">
                                    <Input
                                        type="text"
                                        size="big"
                                        placeholder="직급/직책"
                                        value={career.position}
                                        onChange={onChangePositionHandler}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <label className="pl-6 pt-6 font-medium text-zinc-500 relative w-[177px] flex items-center justify-start">
                            기간
                        </label>
                        <div className="w-[460px]">
                            <div className="flex justify-between">
                                <div className="w-[224px]">
                                    <Input
                                        type="month"
                                        placeholder="YYYY.MM"
                                        size="big"
                                        value={careerStartDate}
                                        onChange={onChangeCareerStartDate}
                                    />
                                </div>

                                <div className="w-[224px]">
                                    <Input
                                        type="month"
                                        placeholder="YYYY.MM"
                                        size="big"
                                        value={careerEndDate}
                                        onChange={onChangeCareerEndDate}
                                    />
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <Input type="checkbox" />
                                <label>재직 중</label>
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
                            onChange={onChangeCommentHandler}
                            className="w-[460px] h-[140px] resize-none rounded-lg p-2 border border-solid border-zinc-300"
                        />
                    </div>
                    <div className="text-3xl mx-auto cursor-pointer" onClick={onClickInsertCareersHandler}>
                        +
                    </div>
                </div>
            </div>
        </main>
    );
};

export default UserInfo;
