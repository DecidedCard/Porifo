"use client";

import React from "react";

import Input from "../Commen/Input";

import useInfo from "@/hooks/mypage/useInfo";
import { SELECT_LIST } from "@/util/select_list";

import Image from "next/image";
import Careers from "./Careers";

const UserInfo = () => {
    const {
        basicInfo,
        onChangeNameHandler,
        onChangeEngNameHandler,
        onChangeProfileHandler,
        onChangeBirthdayHandler,
        onChangeTelHandler,
        onChangeEmailHandler,
        onChangeSelectHandler,
    } = useInfo();

    return (
        <main className="bg-white rounded-2xl mt-10 ml-9 w-[720px] pb-20">
            <div className="flex flex-col gap-6">
                <h2 className="pl-6 text-2xl font-bold tracking-wider">기본 정보</h2>
                <hr className="border border-neutral-100" />
                <p className="pl-6 text-xl font-medium text-left relative">내 정보</p>

                <div className="flex">
                    <p className="pl-6 font-medium text-zinc-500 w-[177px]">프로필 사진</p>
                    <label htmlFor="profile" className="cursor-pointer">
                        {basicInfo.profileImage ? (
                            <Image
                                src={basicInfo.profileImage}
                                alt="프로필 사진 미리보기"
                                width={200}
                                height={100}
                                className="w-[200px] h-[200px] rounded-2xl"
                            />
                        ) : (
                            <div className="flex justify-center items-center bg-zinc-500 w-[170px] h-[170px] rounded-2xl"></div>
                        )}
                    </label>
                    <input type="file" id="profile" className="hidden" onChange={onChangeProfileHandler} />
                </div>

                <div className="flex">
                    <label className="pl-6 font-medium text-zinc-500 w-[177px]">이름</label>
                    <div className="w-[460px]">
                        <Input
                            type="text"
                            placeholder="이름을 입력해 주세요."
                            value={basicInfo.name!}
                            onChange={onChangeNameHandler}
                            size="big"
                        />
                    </div>
                </div>

                <div className="flex">
                    <label className="pl-6 font-medium text-zinc-500 w-[177px]">영문이름</label>
                    <div className="w-[460px]">
                        <Input
                            type="text"
                            placeholder="영문 이름을 입력해 주세요."
                            value={basicInfo.englishName}
                            onChange={onChangeEngNameHandler}
                            size="big"
                        />
                    </div>
                </div>

                <div className="flex">
                    <label className="pl-6 font-medium text-zinc-500 relative w-[177px]">생년월일</label>
                    <div className="w-[460px]">
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
                    <label className="pl-6 font-medium text-zinc-500 w-[177px]">연락처</label>
                    <div className="w-[460px]">
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
                    <label className="pl-6 font-medium text-zinc-500 w-[177px]">e-mail</label>
                    <div className="w-[460px]">
                        <Input
                            type="email"
                            placeholder="E-mail을 입력해 주세요."
                            value={basicInfo.email}
                            onChange={onChangeEmailHandler}
                            size="big"
                        />
                    </div>
                </div>
                <div className="flex items-center">
                    <label className="pl-6 font-medium text-zinc-500 w-[177px]">직군:</label>
                    <select
                        className="font-medium text-zinc-500 relative w-[460px] h-14 border border-solid border-zinc-300"
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

                <hr className="border border-neutral-100" />

                <Careers />
            </div>
        </main>
    );
};

export default UserInfo;
