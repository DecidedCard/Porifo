"use client";
import React, { FormEvent } from "react";
import { supabase } from "@/util/supabase/clientSupabase";
import useInput from "@/hooks/useInput";
import { useRouter } from "next/navigation";
import signInWithSocial from "@/util/sign/socialLogin";
import Input from "@/Components/Commen/Input";
import Button from "@/Components/Commen/Button";

const SignIn = () => {
    const [email, onChangeEmailHandler] = useInput();
    const [password, onChangePasswordHandler] = useInput();
    const router = useRouter();

    const queryParams = {
        access_type: "offline",
        prompt: "consent",
    };

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
                <div className="p-10 w-[600px] h-[500px] bg-white flex justify-center flex-col">
                    <div className="flex justify-center">
                        <img src="porifo.svg" />
                    </div>
                    <form onSubmit={onSubmitLoginUser}>
                        <div className="flex w-fit h-fit flex-col">
                            <label className="my-4">이메일</label>
                            <Input
                                type="email"
                                pattern="[a-zA-Z0-9]+[@][a-zA-Z0-9]+[.]+[a-zA-Z]+[.]*[a-zA-Z]*"
                                placeholder="이메일을 작성해주세요"
                                onChange={onChangeEmailHandler}
                                width={500}
                                color="black"
                                size="big"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="mt-8 mb-4">비밀번호</label>
                            <Input
                                type="password"
                                placeholder="비밀번호를 작성해주세요"
                                onChange={onChangePasswordHandler}
                                width={500}
                                color="black"
                                size="big"
                            />
                        </div>
                        <div className="w-fit mt-8 mb-6 mx-auto">
                            <Button text="로그인" border="none" color="primary" size="m" width={250} />
                        </div>
                    </form>
                    <div>간편하게 시작하기</div>
                    <div className="w-48 my-5 justify-between mx-auto flex space-x-4">
                        <img
                            onClick={() => signInWithSocial("google", queryParams)}
                            className="rounded-2xl shrink-0 w-156 h-136 relative"
                            src="google.svg"
                        />
                        <img
                            onClick={() => signInWithSocial("kakao")}
                            className="rounded-2xl shrink-0 w-156 h-136 relative"
                            src="kakao.svg"
                        />
                        <img
                            onClick={() => signInWithSocial("github")}
                            className="rounded-2xl shrink-0 w-156 h-136 relative"
                            src="github.svg"
                        />
                    </div>
                    <div>아직 포리포의 회원이 아니신가요?</div>
                </div>
            </div>
        </main>
    );
};

export default SignIn;
