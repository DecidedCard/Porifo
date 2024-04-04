"use client";

import React, { useEffect, useState } from "react";
import { supabase } from "@/util/supabase/clientSupabase";
import { useRouter } from "next/navigation";

import useGetUser from "@/hooks/sign/useGetUser";

import useInput from "@/hooks/useInput";
const SocialSeting = () => {
    const [age, onChangeAgeHandler] = useInput();
    const [phoneNumber, onChangeNumberHandler] = useInput();
    const [sex, setSex] = useState("");
    const router = useRouter();
    useGetUser();

    useEffect(() => {
        const token = localStorage.getItem("sb-cyhvfqdzonehvongdtow-auth-token") as string;

        console.log(JSON.parse(token).access_token);
    }, []);

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
        const { data, error } = await supabase.auth.updateUser({
            data: { age, phoneNumber, sex },
        });

        try {
            if (phoneNumber.length !== 11) {
                alert("핸드폰 번호를 정확히 입력해 주세요");
                return;
            }

            if (Number.isNaN(age) && Number.isNaN(phoneNumber)) {
                alert("숫자를 넣어주세요");
                return;
            }

            if (sex !== "" && age.trim() !== "" && phoneNumber.trim() !== "") {
                alert("값이 모두 입력되었습니다.");
            } else {
                alert("모두 입력이 되었습니다.");
                return;
            }
            console.log(data);
            if (error) {
                throw new Error();
            }
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
