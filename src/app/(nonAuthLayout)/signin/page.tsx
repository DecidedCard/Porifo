"use client";
import React, { FormEvent } from "react";
import { supabase } from "@/util/supabase/clientSupabase";
import { useRouter } from "next/navigation";

import useInput from "@/hooks/useInput";
import Input from "@/Components/Commen/Input";
import Button from "@/Components/Commen/Button";
import SocialSign from "@/Components/Sign/SocialSign";

const SignIn = () => {
    const [email, onChangeEmailHandler] = useInput();
    const [password, onChangePasswordHandler] = useInput();
    const router = useRouter();
    const findPassword = () => {};
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

    return (
        <main>
            <div className="flex py-44 items-center justify-center bg-hihigray relative">
                <div className="rounded p-10 w-[500px] h-[600px] bg-white flex justify-center flex-col">
                    <div className="flex justify-center">
                        <img src="formLogo.svg" />
                    </div>
                    <form onSubmit={onSubmitLoginUser}>
                        <div className="flex mx-auto w-fit h-fit flex-col">
                            <label className="my-4">이메일</label>
                            <Input
                                type="email"
                                pattern="[a-zA-Z0-9]+[@][a-zA-Z0-9]+[.]+[a-zA-Z]+[.]*[a-zA-Z]*"
                                placeholder="이메일을 작성해주세요"
                                onChange={onChangeEmailHandler}
                                width={350}
                                color="black"
                                size="big"
                            />
                        </div>
                        <div className="mx-auto w-fit h-fit flex flex-col">
                            <label className="mt-8 mb-4">비밀번호</label>
                            <Input
                                type="password"
                                placeholder="비밀번호를 작성해주세요"
                                onChange={onChangePasswordHandler}
                                width={350}
                                color="black"
                                size="big"
                            />
                        </div>
                        <div className="mx-9 my-4 text-slate-400 float-right" onClick={findPassword}>
                            비밀번호 찾기 ►
                        </div>
                        <div className="w-fit mt-8 mb-6 mx-auto">
                            <Button text="로그인" border="none" color="primary" size="m" width={350} />
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
