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
        </div>
    );
};

export default SocialSign;
