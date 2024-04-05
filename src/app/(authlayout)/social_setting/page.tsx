"use client";

import React, { useEffect, useState } from "react";
import { supabase } from "@/util/supabase/clientSupabase";
import { useRouter } from "next/navigation";

import useGetUser from "@/hooks/sign/useGetUser";
import useInput from "@/hooks/useInput";
import { signSettingValidation } from "@/util/sign/sign_validation";
const SocialSeting = () => {
    const [age, onChangeAgeHandler] = useInput();
    const [phoneNumber, onChangeNumberHandler] = useInput();
    const [sex, setSex] = useState("");
    const router = useRouter();
    useGetUser();

    const onClickeMale = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        setSex("남자");
    };

    const onClickeFeMale = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        setSex("여자");
    };

    const signUpNewUser = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            signSettingValidation({ phoneNumber, age, sex });

            await supabase.auth.updateUser({
                data: { age, phoneNumber, sex },
            });

            return router.replace("/");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form onSubmit={signUpNewUser}>
            <h1>추가 정보를 입력해 주세요.</h1>

            <div>
                <label>나이: </label>
                <input placeholder="나이를 입력해주세요" maxLength={2} onChange={onChangeAgeHandler} />
            </div>
            <div>
                <label>핸드폰 번호: </label>
                <input onChange={onChangeNumberHandler} maxLength={11} placeholder="-없이 작성해주세요" />
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
