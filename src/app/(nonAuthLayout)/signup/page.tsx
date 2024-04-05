"use client";

import React, { useEffect, useState } from "react";
import { supabase } from "@/util/supabase/clientSupabase";

import useInput from "@/hooks/useInput";
import { useRouter } from "next/navigation";
import { signUpValidation } from "@/util/sign/sign_validation";
const SignUp = () => {
    const [email, onChangeEmailHandler] = useInput();
    const [password, onChangePasswordHandler] = useInput();
    const [name, onChangeNameHandler] = useInput();
    const [age, onChangeAgeHandler] = useInput();
    const [phoneNumber, onChangeNumberHandler] = useInput();
    const [sex, setSex] = useState("");

    const router = useRouter();

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
        try {
            signUpValidation({ phoneNumber, age, email, password });
            const { error } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    emailRedirectTo: "http://localhost:3000/signin",
                    data: {
                        age,
                        user_name: name,
                        phoneNumber,
                        sex,
                    },
                },
            });

            if (error) {
                throw new Error();
            }
            return router.push("/signin");
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div>
            <form onSubmit={signUpNewUser}>
                <div>
                    <label>이메일: </label>
                    <input
                        placeholder="이메일을 작성해주세요"
                        pattern="[a-zA-Z0-9]+[@][a-zA-Z0-9]+[.]+[a-zA-Z]+[.]*[a-zA-Z]*"
                        type="email"
                        onChange={onChangeEmailHandler}
                    />
                </div>
                <div>
                    <label>비밀번호: </label>
                    <input placeholder="6자 이상 작성해주세요" type="password" onChange={onChangePasswordHandler} />
                </div>
                <div>
                    <label>이름: </label>
                    <input placeholder="이름을 작성해주세요" type="text" onChange={onChangeNameHandler} />
                </div>
                <div>
                    <label>나이: </label>
                    <input placeholder="나이를 입력해주세요" maxLength={2} onChange={onChangeAgeHandler} />
                </div>
                <div>
                    <label>성별: </label>
                    <button onClick={onClickeMale}>남자</button>
                    <button onClick={onClickeFeMale}>여자</button>
                </div>
                <div>
                    <label>핸드폰 번호: </label>
                    <input onChange={onChangeNumberHandler} maxLength={11} placeholder="-없이 작성해주세요" />
                </div>

                <button>확인</button>
            </form>
        </div>
    );
};

export default SignUp;
