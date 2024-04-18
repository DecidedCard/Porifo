"use client";

import React from "react";
import Image from "next/image";

import signInWithSocial from "@/util/sign/socialLogin";

const SocialSign = ({ redirectTo }: { redirectTo: string }) => {
    const queryParams = {
        access_type: "offline",
        prompt: "consent",
    };

    return (
        <div>
            <div className="mx-auto flex justify-center mt-8 text-sm text-gray4 font-medium">간편하게 시작하기</div>
            <div className="mt-3 mb-8 justify-between mx-auto flex space-x-4 w-[144px] h-8">
                <Image
                    onClick={() => signInWithSocial("google", redirectTo, queryParams)}
                    className="w-[32px] h-[32px] cursor-pointer rounded-2xl"
                    width={32}
                    height={32}
                    src="/assets/image/google.svg"
                    alt="구글 로그인"
                />

                <Image
                    onClick={() => signInWithSocial("kakao", redirectTo)}
                    className="w-[32px] h-[32px] cursor-pointer rounded-2xl"
                    width={32}
                    height={32}
                    alt="카카오 로그인"
                    src="/assets/image/kakao.svg"
                />
                <Image
                    onClick={() => signInWithSocial("github", redirectTo)}
                    className="w-[32px] h-[32px] cursor-pointer rounded-2xl"
                    width={32}
                    height={32}
                    alt="깃허브 로그인"
                    src="/assets/image/github.svg"
                />
            </div>
        </div>
    );
};

export default SocialSign;
