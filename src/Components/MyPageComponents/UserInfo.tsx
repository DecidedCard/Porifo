"use client";

import React from "react";

import Image from "next/image";
import useInfo from "@/hooks/mypage/useInfo";
import Button from "../Commen/Button";

const UserInfo = () => {
    const {
        basicInfo,
        selectList,
        onChangeNameHandler,
        onChangeProfileHandler,
        onChangeBirthdayHandler,
        onChangeTelHandler,
        onChangeSchoolHandler,
        onChangeClassHandler,
        onChangeSelectHandler,
    } = useInfo();
    return (
        <main>
            <div className="flex flex-col">
                <div className="flex justify-evenly items-center">
                    <div>
                        <label>이름: </label>
                        <input type="text" placeholder="이름" value={basicInfo.name!} onChange={onChangeNameHandler} />
                    </div>
                    <label htmlFor="profile" className="cursor-pointer">
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
                    <input type="file" id="profile" className="hidden" onChange={onChangeProfileHandler} />
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
                        {selectList.map((item) => {
                            return (
                                <option key={item.value} value={item.value}>
                                    {item.name}
                                </option>
                            );
                        })}
                    </select>
                    <Button text="테스트" border="none" />
                </div>
            </div>
        </main>
    );
};

export default UserInfo;
