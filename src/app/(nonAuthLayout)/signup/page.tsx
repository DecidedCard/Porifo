"use client";

import React, { useEffect, useState } from "react";
import { supabase } from "@/util/supabase/clientSupabase";

import useInput from "@/hooks/useInput";
import { useRouter } from "next/navigation";
import { signUpValidation } from "@/util/sign/sign_validation";
import Input from "@/Components/Commen/Input";
import Button from "@/Components/Commen/Button";

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
        <div className="flex py-44 items-center justify-center bg-hihigray relative">
            <div className="rounded p-10 w-[500px] h-[600px] bg-white flex justify-center flex-col">
                <form onSubmit={signUpNewUser}>
                    <div className="flex justify-center">
                        <img src="formLogo.svg" />
                    </div>
                    <div className="mx-auto w-fit h-fit flex flex-col">
                        <label>이메일</label>
                        <Input
                            type="email"
                            pattern="[a-zA-Z0-9]+[@][a-zA-Z0-9]+[.]+[a-zA-Z]+[.]*[a-zA-Z]*"
                            placeholder="이메일을 입력해주세요"
                            onChange={onChangeEmailHandler}
                            width={350}
                            color="black"
                            size="big"
                        />
                    </div>
                    <div className="mx-auto w-fit h-fit flex flex-col">
                        <label>비밀번호</label>
                        <Input
                            type="password"
                            placeholder="비밀번호를 8자 이상 작성해주세요"
                            onChange={onChangePasswordHandler}
                            width={350}
                            color="black"
                            size="big"
                        />
                    </div>
                    <div className="mx-auto w-fit h-fit flex flex-col">
                        <label>이름</label>
                        <Input
                            type="text"
                            placeholder="이름을 입력해주세요"
                            onChange={onChangeNameHandler}
                            width={350}
                            color="black"
                            size="big"
                        />
                    </div>
                    <div className="mx-auto w-fit h-fit flex flex-col">
                        <label>나이</label>
                        <Input
                            type="text"
                            placeholder="나이를 입력해주세요"
                            onChange={onChangeAgeHandler}
                            width={350}
                            color="black"
                            size="big"
                        />
                    </div>
                    <div className="mx-auto w-fit h-fit flex ">
                        <label>성별</label>
                        <div>
                            <input type="radio" />
                            <button onClick={onClickeMale}>남자</button>
                            <button onClick={onClickeFeMale}>여자</button>
                        </div>
                    </div>
                    <div className="mx-auto w-fit h-fit flex flex-col">
                        <label>핸드폰 번호</label>
                        <input onChange={onChangeNumberHandler} maxLength={11} placeholder="-없이 작성해주세요" />
                    </div>
                    <div className="w-fit mt-8 mb-6 mx-auto">
                        <Button text="가입하기" border="none" color="primary" size="m" width={350} />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
