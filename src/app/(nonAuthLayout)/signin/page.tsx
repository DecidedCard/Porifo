"use client";
import React, { FormEvent } from "react";
import { supabase } from "@/util/supabase/clientSupabase";
import useInput from "@/hooks/useInput";
import { useRouter } from "next/navigation";
import useSocialLogin from "@/hooks/sign/useSocialLogin";

const SignIn = () => {
    const [email, onChangeEmailHandler] = useInput();
    const [password, onChangePasswordHandler] = useInput();
    const router = useRouter();

    const { signInWithGithub, signInWithKakao, signInWithGoogle } = useSocialLogin();

    const onSubmitLoginUser = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });
            if (error) {
                console.error(error);
                throw new Error("로그인에 실패했습니다.");
            }

            console.log(data);

            return router.replace("/");
        } catch (error) {
            return Promise.reject(error);
        }
    };

    return (
        <div>
            <form onSubmit={onSubmitLoginUser}>
                <div>
                    이메일:&nbsp;
                    <input
                        value={email}
                        pattern="[a-zA-Z0-9]+[@][a-zA-Z0-9]+[.]+[a-zA-Z]+[.]*[a-zA-Z]*"
                        placeholder="이메일을 작성해주세요"
                        type="email"
                        onChange={onChangeEmailHandler}
                    />
                </div>
                <div>
                    비밀번호:&nbsp;
                    <input
                        value={password}
                        placeholder="비밀번호를 작성해주세요"
                        type="password"
                        onChange={onChangePasswordHandler}
                    />
                </div>
                <button>로그인</button>
            </form>
            <button onClick={signInWithGithub}>깃허브 로그인 버튼&nbsp;</button>
            <button onClick={signInWithKakao}>카카오 로그인 버튼</button>
            <button onClick={signInWithGoogle}>구글 로그인 버튼</button>
        </div>
    );
};

export default SignIn;
