"use client";
import React, { FormEvent, useState } from "react";
import { supabase } from "@/util/supabase/clientSupabase";
import { useRouter } from "next/navigation";
import SignUpItem from "@/Components/Sign/SignUpItem";
import useInput from "@/hooks/useInput";

import Button from "@/Components/Commen/Button";
import SocialSign from "@/Components/Sign/SocialSign";
import Image from "next/image";

const SignIn = () => {
    const [email, onChangeEmailHandler] = useInput();
    const [password, setPassword] = useState("");
    const [passowrdValid, setVassowrdValid] = useState(false);
    const router = useRouter();
    const findPassword = () => router.replace("/password_change");
    const onSubmitLoginUser = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const hasAllInput = email.trim() !== "" && password.trim() !== "";
        try {
            if (hasAllInput) {
                alert("값이 입력 되었습니다.");
            }
            const { error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });
            if (error) {
                console.error(error);
                throw new Error("로그인에 실패했습니다.");
            }

            return router.replace("/");
        } catch (error) {
            return Promise.reject(error);
        }
    };
    const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        const regex =
            /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
        if (regex.test(e.target.value)) {
            setVassowrdValid(true);
        } else {
            setVassowrdValid(false);
        }
    };
    return (
        <main>
            <div className="flex py-44 items-center justify-center bg-hihigray relative">
                <div className="rounded p-10 w-[500px] h-[750px] bg-white flex justify-center flex-col">
                    <form onSubmit={onSubmitLoginUser}>
                        <div className="flex justify-center">
                            <Image
                                width={0}
                                height={0}
                                className="w-[160px] h-[140px]"
                                src="formLogo.svg"
                                alt="로그인의 form 로고"
                                priority
                            />
                        </div>
                        <SignUpItem
                            setLabel="이메일"
                            type="email"
                            placeholder="이메일을 입력해주세요"
                            pattern="[a-zA-Z0-9]+[@][a-zA-Z0-9]+[.]+[a-zA-Z]+[.]*[a-zA-Z]*"
                            onChangeHandler={onChangeEmailHandler}
                        />

                        <SignUpItem
                            setLabel="비밀번호"
                            placeholder="비밀번호를 작성해주세요"
                            pattern="/^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
                        "
                            onChangeHandler={onChangePassword}
                            relative="relative"
                            eye="eye.svg"
                            eyeClose="eye_close.svg"
                        />
                        {!passowrdValid && password.length > 0 && (
                            <p className="text-slate-400 text-center text-[11px]">다시 입력해 주세요</p>
                        )}
                        <div
                            className="mx-9 mb-8 text-slate-400 float-right flex flex-row cursor-pointer"
                            onClick={findPassword}
                        >
                            <div className="mt-[1.5px]">비밀번호 찾기</div>
                            <Image
                                width={0}
                                height={0}
                                className="w-[20px] h-[20px]"
                                src="find_password_arrow.svg"
                                alt="페이지 이동 화살표"
                            />
                        </div>
                        <div className="w-[350px] mt-8 mb-6 mx-auto">
                            <Button text="로그인" border="none" color="primary" size="m" />
                        </div>
                    </form>
                    <SocialSign />
                    <div className="mx-auto">
                        아직 포리포의 회원이 아니신가요?{" "}
                        <a href="/signup_method" className=" ml-3 underline">
                            회원가입
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default SignIn;
