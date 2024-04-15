"use client";

import React from "react";

import Image from "next/image";

import Input from "../Commen/Input";

import useInfo from "@/hooks/mypage/useInfo";
import { SELECT_LIST } from "@/util/select_list";

import Careers from "./Careers";
import Loading from "../Loading";

const UserInfo = () => {
    const {
        isFetching,
        basicInfo,
        onChangeNameHandler,
        onChangeEngNameHandler,
        onChangeProfileHandler,
        onChangeBirthdayHandler,
        onChangeEmailHandler,
        onChangeSelectHandler,
    } = useInfo();

    if (isFetching) {
        return (
            <div className="absolute top-0 left-0 z-50 flex justify-center items-center w-screen h-screen bg-hihigray">
                <Loading />
            </div>
        );
    }

    return (
        <main className="flex justify-center bg-white rounded-2xl mt-20 ml-[75px] w-[705px] min-h-[1128px] pb-5">
            <div className="flex flex-col gap-4">
                <h2 className="flex items-center w-[657px] h-[46px] text-[30px] mt-4 font-bold tracking-wider">기본 정보</h2>
                <hr className="w-[657px] mx-auto my-1 border border-neutral-100" />
                <p className="flex items-center w-[657px] h-[38px] text-xl font-medium">내 정보</p>

                <div className="flex">
                    <p className="flex items-center font-medium text-zinc-500 w-[177px] h-[32px]">프로필 사진</p>
                    <label htmlFor="profile" className="cursor-pointer">
                        {basicInfo.profileImage ? (
                            <Image
                                src={basicInfo.profileImage}
                                alt="프로필 사진 미리보기"
                                width={200}
                                height={200}
                                className="ml-3 w-[200px] h-[200px] rounded-2xl"
                            />
                        ) : (
                            <Image 
                            src="assets/image/mypagedefault.svg"
                            alt="기본 이미지"
                            width={200}
                            height={200}
                            className="ml-3 w-[200px] h-[200px] rounded-2xl"
                            />
                        )}
                    </label>
                    <input type="file" id="profile" className="hidden" onChange={onChangeProfileHandler} />
                </div>

                <div className="flex mt-1">
                    <label className="font-medium text-zinc-500 w-[177px] h-[32px] mt-2">이름</label>
                    <div className="w-[460px] ml-3">
                        <Input
                            type="text"
                            placeholder="이름을 입력해 주세요."
                            value={basicInfo.name!}
                            onChange={onChangeNameHandler}
                            size="big"
                        />
                    </div>
                </div>

                <div className="flex mt-1">
                    <label className="font-medium text-zinc-500 w-[177px] h-[32px] mt-2">영문이름</label>
                    <div className="w-[460px] ml-3">
                        <Input
                            type="text"
                            placeholder="영문 이름을 입력해 주세요."
                            value={basicInfo.englishName}
                            onChange={onChangeEngNameHandler}
                            size="big"
                        />
                    </div>
                </div>

                <div className="flex mt-1">
                    <label className="font-medium text-zinc-500 w-[177px] h-[32px] mt-2">생년월일</label>
                    <div className="w-[460px] ml-3">
                        <Input
                            type="date"
                            placeholder="생년월일을 입력해 주세요"
                            value={basicInfo.birthday!}
                            onChange={onChangeBirthdayHandler}
                            size="big"
                        />
                    </div>
                </div>

                <div className="flex mt-1">
                    <label className="font-medium text-zinc-500 w-[177px] h-[32px] mt-2">e-mail</label>
                    <div className="w-[460px] ml-3">
                        <Input
                            type="email"
                            placeholder="E-mail을 입력해 주세요."
                            value={basicInfo.email}
                            onChange={onChangeEmailHandler}
                            size="big"
                        />
                    </div>
                </div>
                <div className="flex mt-1">
                    <label className="font-medium text-zinc-500 w-[177px] h-[32px] mt-2">직군</label>
                    <select
                        className="font-medium ml-3 pl-2 text-zinc-500 w-[460px] h-14 rounded-lg border border-solid border-zinc-300"
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

                <hr className="w-[657px] mx-auto border border-neutral-100" />

                <Careers />
            </div>
        </main>
    );
};

export default UserInfo;
