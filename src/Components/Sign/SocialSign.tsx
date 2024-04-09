import React from "react";
import signInWithSocial from "@/util/sign/socialLogin";
import Image from "next/image";

const SocialSign = () => {
    const queryParams = {
        access_type: "offline",
        prompt: "consent",
    };

    return (
        <div>
            <div className="mx-auto flex justify-center mt-10">간편하게 시작하기</div>
            <div className="w-48 mt-5 mb-10 justify-between mx-auto flex space-x-4">
                <Image
                    onClick={() => signInWithSocial("google", queryParams)}
                    className="w-[40px] h-[40px] cursor-pointer rounded-2xl shrink-0 w-156 h-136 relative"
                    width={0}
                    height={0}
                    src="google.svg"
                    alt="구글 로그인"
                />

                <Image
                    onClick={() => signInWithSocial("kakao")}
                    className="w-[40px] h-[40px] cursor-pointer rounded-2xl shrink-0 w-156 h-136 relative"
                    width={0}
                    height={0}
                    alt="카카오 로그인"
                    src="kakao.svg"
                />
                <Image
                    onClick={() => signInWithSocial("github")}
                    className="w-[40px] h-[40px] cursor-pointer rounded-2xl shrink-0 w-156 h-136 relative"
                    width={0}
                    height={0}
                    alt="깃허브 로그인"
                    src="github.svg"
                />
            </div>
        </div>
    );
};

export default SocialSign;
