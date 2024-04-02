"use client";

import useUserInfo from "@/hooks/mypage/useUserInfo";
import React from "react";

const UserInfo = () => {
    const {
        profile,
        onChangeNameHandler,
        onChangeProfileHandler,
        onChangeBirthdayHandler,
        onChangeTelHandler,
        onChangeSchoolHandler,
        onChangeClassHandler,
        onChangeJobHandler,
    } = useUserInfo();
    return (
        <main>
            <div>
                <input type="text" placeholder="이름" onChange={onChangeNameHandler} />
                <label htmlFor="profile" className="cursor-pointer">
                    프로필 이미지 등록하기
                </label>
                <input type="file" id="profile" className="hidden" value={profile} onChange={onChangeProfileHandler} />
                <input type="date" placeholder="생년월일" onChange={onChangeBirthdayHandler} />
                <input type="text" placeholder="전화번호" onChange={onChangeTelHandler} />
                <input type="text" placeholder="학교" onChange={onChangeSchoolHandler} />
                <input type="text" placeholder="전공" onChange={onChangeClassHandler} />
            </div>
        </main>
    );
};

export default UserInfo;
