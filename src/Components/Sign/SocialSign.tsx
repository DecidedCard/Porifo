"use client";

import React from "react";
import Image from "next/image";
import signInWithSocial from "@/util/sign/socialLogin";

type SocialSignType = { redirectTo: string; text: string; imageWidthNum: number; imageHeightNum: number; gap: number };

const SocialSign = ({ redirectTo, text, imageWidthNum, imageHeightNum, gap }: SocialSignType) => {
    const queryParams = {
        access_type: "offline",
        prompt: "consent",
    };

    const socialData = [
        { image: "/assets/image/signImage/google.svg", alt: "구글 로그인" },
        { image: "/assets/image/signImage/kakao.svg", alt: "카카오 로그인" },
        { image: "/assets/image/signImage/github.svg", alt: "깃허브 로그인" },
    ];

    return (
        <div>
            <div className="mx-auto mt-3 flex justify-center text-body/P7_M text-gray-5">{text}</div>
            <div className={`items-center justify-center mx-auto flex gap-${gap} w-[216px] h-[86px]`}>
                {socialData.map((item, idx) => (
                    <Image
                        key={idx}
                        onClick={() => signInWithSocial("google", redirectTo, queryParams)}
                        className={`w-${imageWidthNum} h-${imageHeightNum} cursor-pointer rounded-2xl`}
                        width={imageWidthNum}
                        height={imageHeightNum}
                        src={item.image}
                        alt={item.alt}
                    />
                ))}
            </div>
        </div>
    );
};

export default SocialSign;
