"use client";

import React from "react";
import Image from "next/image";
import signInWithSocial from "@/util/sign/socialLogin";

type SocialSignType = { redirectTo: string; text: string; imageWidthNum: number; imageHeight: number; gap: number };

const SocialSign = ({ redirectTo, text, imageWidthNum, imageHeight, gap }: SocialSignType) => {
    const queryParams = {
        access_type: "offline",
        prompt: "consent",
    };

    return (
        <div>
            <div className="mx-auto mt-3 flex justify-center text-sm text-gray4 font-medium">{text}</div>
            <div className={`items-center justify-center mx-auto flex gap-${gap} w-[216px] h-[86px]`}>
                <Image
                    onClick={() => signInWithSocial("google", redirectTo, queryParams)}
                    className={`w-${imageWidthNum} h-${imageHeight} cursor-pointer rounded-2xl`}
                    width={imageWidthNum}
                    height={imageHeight}
                    src="/assets/image/google.svg"
                    alt="구글 로그인"
                />

                <Image
                    onClick={() => signInWithSocial("kakao", redirectTo)}
                    className={`w-${imageWidthNum} h-${imageHeight} cursor-pointer rounded-2xl`}
                    width={imageWidthNum}
                    height={imageHeight}
                    alt="카카오 로그인"
                    src="/assets/image/kakao.svg"
                />
                <Image
                    onClick={() => signInWithSocial("github", redirectTo)}
                    className={`w-${imageWidthNum} h-${imageHeight} cursor-pointer rounded-2xl`}
                    width={imageWidthNum}
                    height={imageHeight}
                    alt="깃허브 로그인"
                    src="/assets/image/github.svg"
                />
            </div>
        </div>
    );
};

export default SocialSign;
