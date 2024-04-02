"use client";
import React from "react";
import { supabase } from "@/util/supabase/clientSupabase";

const SignIn = () => {
    const signInWithGithub = async () => {
        ``;
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

    // const signInWithKakao = async () => {
    //     const { data, error } = await supabase.auth.signInWithOAuth({
    //         provider: "kakao",
    //     });
    //     console.log(data);
    //     try {
    //         if (error) {
    //             throw new Error("카카오 로그인 오류가 발생하였습니다.");
    //         }
    //         console.log(data);
    //         return;
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };
    return (
        <div>
            SignIn
            <button onClick={signInWithGithub}>깃허브 확인 버튼</button>
            {/*<button onClick={signInWithKakao}>카카오 확인 버튼</button>*/}
        </div>
    );
};

export default SignIn;
