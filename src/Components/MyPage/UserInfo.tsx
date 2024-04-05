"use client";

import React from "react";

import Image from "next/image";
import useInfo from "@/hooks/mypage/useInfo";
import Button from "../Commen/Button";
import { SELECT_LIST } from "@/util/select_list";

const UserInfo = () => {
    const {
        basicInfo,
        onChangeNameHandler,
        onChangeProfileHandler,
        onChangeBirthdayHandler,
        onChangeTelHandler,
        onChangeSchoolHandler,
        onChangeClassHandler,
        onChangeSelectHandler,
    } = useInfo();
    return (
        <main className="bg-white rounded-2xl mt-10 ml-10 w-[700px]">
            <div className="flex flex-col">
                <p className="flex items-center justify-start pl-6 pt-6 text-2xl font-bold tracking-wider">기본 정보</p>
                <hr className="border border-neutral-100 my-6 mx-6" />
                <p className="pl-6 text-xl font-medium text-left relative flex items-center justify-start">내 정보</p>
                <div className="pl-6 pt-6 font-medium text-zinc-500 text-left relative w-[177px] flex items-center justify-start">
                    프로필 사진
                </div>
                <div className="flex justify-evenly items-center">
                    <div>
                        <label>이름: </label>
                        <input type="text" placeholder="이름" value={basicInfo.name!} onChange={onChangeNameHandler} />
                    </div>
                    <label htmlFor="text" className="cursor-pointer">
                        프로필 이미지 등록하기
                    </label>
                    {basicInfo.profileImage ? (
                        <Image
                            src={basicInfo.profileImage}
                            alt="프로필 사진 미리보기"
                            width={100}
                            height={100}
                            className="w-32 h-32 rounded-full"
                        />
                    ) : (
                        <div className="flex justify-center items-center bg-slate-600 w-20 h-20 rounded-full">
                            미리보기
                        </div>
                    )}
                    <input type="file" id="text" className="hidden" onChange={onChangeProfileHandler} />
                </div>
                <div className="flex">
                    <div>
                        <label>생년월일: </label>
                        <input
                            type="date"
                            placeholder="생년월일"
                            value={basicInfo.birthday!}
                            onChange={onChangeBirthdayHandler}
                        />
                    </div>
                    <div>
                        <label>전화번호: </label>
                        <input type="tel" placeholder="전화번호" value={basicInfo.tel!} onChange={onChangeTelHandler} />
                    </div>
                </div>
                <div>
                    <div className="flex">
                        <div>
                            <label>학교: </label>
                            <input
                                type="text"
                                placeholder="학교"
                                value={basicInfo.school!}
                                onChange={onChangeSchoolHandler}
                            />
                        </div>
                        <div>
                            <label>전공: </label>{" "}
                            <input
                                type="text"
                                placeholder="전공"
                                value={basicInfo.class!}
                                onChange={onChangeClassHandler}
                            />
                        </div>
                    </div>
                    <select value={basicInfo.job!} onChange={onChangeSelectHandler}>
                        {SELECT_LIST.map((item) => {
                            return (
                                <option key={item.value} value={item.value}>
                                    {item.name}
                                </option>
                            );
                        })}
                    </select>
                </div>
            </div>
        </main>
    );
};

export default UserInfo;
