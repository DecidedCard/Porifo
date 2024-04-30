"use client";

import React from "react";

import Image from "next/image";

import Careers from "./Careers";
import Input from "../Commen/Input";

import useInfo from "@/hooks/mypage/useInfo";

import { SELECT_LIST } from "@/util/select_list";

const UserInfo = () => {
    const {
        basicInfo,
        emailCheck,
        onChangeNameHandler,
        onChangeEngNameHandler,
        onChangeProfileHandler,
        onChangeBirthdayHandler,
        onChangeEmailHandler,
        onChangeTelHandler,
        onChangeSelectHandler,
    } = useInfo();

    return (
        <main className="flex justify-center bg-white rounded-2xl mt-20 ml-[75px] w-[705px] pb-10 sm:w-full sm:mx-auto sm:mt-0 sm:pt-4 sm:pb-10">
            <div className="flex flex-col gap-4">
                <h1 className="flex items-center w-[657px] h-[46px] text-[30px] mt-4 font-bold tracking-wider sm:w-full ">
                    기본 정보
                </h1>
                <hr className="w-[657px] mx-auto my-1 border border-neutral-100 sm:w-full" />
                <p className="flex items-center w-[657px] h-[38px] text-xl font-medium sm:w-[40%]">내 정보</p>

                <div className="flex sm:w-full">
                    <p className="flex font-medium text-zinc-500 w-[177px] h-[32px] sm:w-[100px]">
                        프로필 사진<span className="ml-1 text-[10px] text-red-500">★</span>
                    </p>
                    <label htmlFor="profile" className="cursor-pointer">
                        {basicInfo.profileImage ? (
                            <Image
                                src={basicInfo.profileImage}
                                alt="프로필 사진 미리보기"
                                width={200}
                                height={200}
                                className="ml-3 w-[200px] h-[200px] rounded-2xl object-cover sm:w-[150px] sm:h-[150px]"
                            />
                        ) : (
                            <Image
                                src="assets/image/mypagedefault.svg"
                                alt="기본"
                                width={200}
                                height={200}
                                className="ml-3 w-[200px] h-[200px] rounded-2xl sm:w-[150px] sm:h-[150px]"
                            />
                        )}
                    </label>
                    <input
                        type="file"
                        id="profile"
                        className="hidden"
                        onChange={onChangeProfileHandler}
                        accept="image/png, image/jpeg"
                    />
                </div>

                <div className="flex mt-1 sm:flex-col sm:w-full">
                    <label className="flex font-medium text-zinc-500 w-[177px] h-[32px] mt-2">
                        이름<span className="ml-1 text-[10px] text-red-500">★</span>
                    </label>
                    <div className="w-[460px] ml-3 sm:w-full sm:ml-0">
                        <Input
                            type="text"
                            placeholder="이름을 입력해 주세요."
                            maxLength={10}
                            value={basicInfo.name!}
                            onChange={onChangeNameHandler}
                            size="big"
                        />
                    </div>
                </div>

                <div className="flex mt-1 sm:flex-col sm:w-full">
                    <label className="flex font-medium text-zinc-500 w-[177px] h-[32px] mt-2">
                        e-mail<span className="ml-1 text-[10px] text-red-500">★</span>
                    </label>
                    <div className="w-[460px] ml-3 sm:w-full">
                        <Input
                            type="email"
                            placeholder="E-mail을 입력해 주세요. ex) email@example.com"
                            value={basicInfo.email}
                            onChange={onChangeEmailHandler}
                            color={`${emailCheck?.color ? emailCheck?.color : ""}`}
                            helperText={`${emailCheck?.helperText ? emailCheck?.helperText : ""}`}
                            size="big"
                            maxLength={30}
                        />
                    </div>
                </div>
                <div className="flex mt-1 sm:flex-col sm:w-full">
                    <label className="flex font-medium text-zinc-500 w-[177px] h-[32px] mt-2">
                        직군<span className="ml-1 text-[10px] text-red-500">★</span>
                    </label>
                    <select
                        className="font-medium ml-3 pl-2 text-zinc-500 w-[460px] h-14 rounded-lg border border-solid border-zinc-300 sm:w-full sm:ml-0"
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

                <div className="flex mt-1 sm:flex-col sm:w-full">
                    <label className="font-medium text-zinc-500 w-[177px] h-[32px] mt-2">영문이름</label>
                    <div className="w-[460px] ml-3 sm:w-full sm:ml-0">
                        <Input
                            type="text"
                            placeholder="영문 이름을 입력해 주세요."
                            maxLength={20}
                            value={basicInfo.englishName}
                            onChange={onChangeEngNameHandler}
                            size="big"
                        />
                    </div>
                </div>

                <div className="flex mt-1 sm:flex-col sm:w-full">
                    <label className="font-medium text-zinc-500 w-[177px] h-[32px] mt-2">생년월일</label>
                    <div className="w-[460px] ml-3 sm:w-full sm:ml-0">
                        <Input
                            type="date"
                            placeholder="생년월일을 입력해 주세요"
                            value={basicInfo.birthday!}
                            onChange={onChangeBirthdayHandler}
                            size="big"
                        />
                    </div>
                </div>

                <div className="flex mt-1 sm:flex-col sm:w-full">
                    <label className="font-medium text-zinc-500 w-[177px] h-[32px] mt-2">전화번호</label>
                    <div className="w-[460px] ml-3 sm:w-full sm:ml-0">
                        <Input
                            type="tel"
                            placeholder="전화번로를 입력해주세요. ex) 010-1234-5678"
                            size="big"
                            value={basicInfo.tel}
                            onChange={onChangeTelHandler}
                        />
                    </div>
                </div>

                <hr className="w-[657px] mx-auto border border-neutral-100 sm:w-full" />

                <Careers />
            </div>
        </main>
    );
};

export default UserInfo;
