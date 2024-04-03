"use client";

import React, { useState } from "react";
import { supabase } from "@/util/supabase/clientSupabase";

import useInput from "@/hooks/useInput";
const SocialSeting = () => {
    const [name, onChangeNameHandler] = useInput();
    const [age, onChangeAgeHandler] = useInput();
    const [phoneNumber, onChangeNumberHandler] = useInput();
    const [sex, setSex] = useState("");

    const onClickeMale = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        setSex("남자");
        console.log(sex);
    };

    const onClickeFeMale = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        setSex("여자");
        console.log(sex);
    };

    const signUpNewUser = async (e: React.FormEvent) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={signUpNewUser}>
            <h1>추가 정보를 입력해 주세요.</h1>
            <div>
                <label>이름: </label>
                <input placeholder="이름을 작성해주세요" onChange={onChangeNameHandler} />
            </div>
            <div>
                <label>나이: </label>
                <input placeholder="나이를 입력해주세요" onChange={onChangeAgeHandler} />
            </div>
            <div>
                <label>핸드폰 번호: </label>
                <input onChange={onChangeNumberHandler} placeholder="핸드폰 번호를 작성해주세요" />
            </div>
            <div>
                <label>성별: </label>
                <button onClick={onClickeMale}>남자</button>
                <button onClick={onClickeFeMale}>여자</button>
            </div>
            <button>모두 작성해 주세요.</button>
        </form>
    );
};

export default SocialSeting;
