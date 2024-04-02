"use client";

import useUserInfo from "@/hooks/mypage/useUserInfo";
import React from "react";

const UserInfo = () => {
    const {
        onChangeNameHandler,
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
                <input type="date" placeholder="생년월일" onChange={onChangeBirthdayHandler} />
                <input type="text" placeholder="전화번호" onChange={onChangeTelHandler} />
                <input type="text" placeholder="학교" onChange={onChangeSchoolHandler} />
                <input type="text" placeholder="전공" onChange={onChangeClassHandler} />
            </div>
        </main>
    );
};

export default UserInfo;
