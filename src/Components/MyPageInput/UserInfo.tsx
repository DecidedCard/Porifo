"use client";

import React from "react";

import useUserInfo from "@/hooks/mypage/useUserInfo";

import Image from "next/image";

const UserInfo = () => {
    const {
        selectList,
        preview,
        onChangeNameHandler,
        onChangeProfileHandler,
        onChangeBirthdayHandler,
        onChangeTelHandler,
        onChangeSchoolHandler,
        onChangeClassHandler,
        onChangeSelectHandler,
    } = useUserInfo();
    return (
        <main>
            <div>
                <input type="text" placeholder="이름" onChange={onChangeNameHandler} />
                <label htmlFor="profile" className="cursor-pointer">
                    프로필 이미지 등록하기
                </label>
                {preview && <Image src={preview} alt="프로필 사진 미리보기" width={100} height={100} />}
                <input type="file" id="profile" className="hidden" onChange={onChangeProfileHandler} />
                <input type="date" placeholder="생년월일" onChange={onChangeBirthdayHandler} />
                <input type="text" placeholder="전화번호" onChange={onChangeTelHandler} />
                <input type="text" placeholder="학교" onChange={onChangeSchoolHandler} />
                <input type="text" placeholder="전공" onChange={onChangeClassHandler} />
                <select onChange={onChangeSelectHandler}>
                    {selectList.map((item) => {
                        return (
                            <option key={item.value} value={item.value}>
                                {item.name}
                            </option>
                        );
                    })}
                </select>
            </div>
        </main>
    );
};

export default UserInfo;
