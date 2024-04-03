"use client";
import React, { FormEvent } from "react";
import { supabase } from "@/util/supabase/clientSupabase";
import useInput from "@/hooks/useInput";
import { useRouter } from "next/navigation";

const SignIn = () => {
    const [email, onChangeEmailHandler] = useInput();
    const [password, onChangePasswordHandler] = useInput();
    const router = useRouter();

    const signInWithGithub = async () => {
        const { error } = await supabase.auth.signInWithOAuth({
            provider: "github",
            options: {
                redirectTo: "http://localhost:3000/social_setting",
            },
        });
        try {
            if (error) {
                throw new Error("깃 허브 로그인 오류가 발생하였습니다.");
            }
        } catch (error) {
            console.log(error);
        }
    };

    const signInWithKakao = async () => {
        const { error } = await supabase.auth.signInWithOAuth({
            provider: "kakao",
            options: {
                redirectTo: "http://localhost:3000/social_setting",
            },
        });

        try {
            if (error) {
                throw new Error("카카오 로그인 오류가 발생하였습니다.");
            }
        } catch (error) {
            console.log(error);
        }
    };

    const signInWithGoogle = async () => {
        const { error } = await supabase.auth.signInWithOAuth({
            provider: "google",
            options: {
                redirectTo: "http://localhost:3000/social_setting",
                queryParams: {
                    access_type: "offline",
                    prompt: "consent",
                },
            },
        });

        try {
            if (error) {
                throw new Error("구글 로그인 중 오류가 발생하였습니다.");
            }
        } catch (error) {
            console.log(error);
        }
    };

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

            return router.replace("/social_setting");
        } catch (error) {
            return Promise.reject(error);
        }
    };

    return (
        <div>
            <form onSubmit={onSubmitLoginUser}>
                <div>
                    이메일:&nbsp;
                    <input value={email} placeholder="이메일을 작성해주세요" onChange={onChangeEmailHandler} />
                </div>
                <div>
                    비밀번호:&nbsp;
                    <input value={password} placeholder="비밀번호를 작성해주세요" onChange={onChangePasswordHandler} />
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
