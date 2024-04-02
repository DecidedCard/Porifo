"use client";
import React from "react";
import { supabase } from "@/util/supabase/clientSupabase";
import useInput from "@/hooks/useInput";

const SignIn = () => {
    const [email, onChangeEmailHandler] = useInput();
    const [password, onChangePasswordHandler] = useInput();

    const signInWithGithub = async () => {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: "github",
        });
        try {
            if (error) {
                throw new Error("깃 허브 로그인 오류가 발생하였습니다.");
            }
            console.log(data);
            return;
        } catch (error) {
            console.log(error);
        }
    };

    const signInWithKakao = async () => {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: "kakao",
        });
        console.log(data);
        try {
            if (error) {
                throw new Error("카카오 로그인 오류가 발생하였습니다.");
            }
            console.log(data);
            return;
        } catch (error) {
            console.log(error);
        }
    };

    const onSubmitLoginUser = async () => {
        const {
            data: { user },
        } = await supabase.auth.getUser();

        console.log(user);
        alert("gkdl");
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
        </div>
    );
};

export default SignIn;
