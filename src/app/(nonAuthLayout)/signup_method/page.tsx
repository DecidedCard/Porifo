"use client";

import React from "react";
import SocialSign from "@/Components/Sign/SocialSign";
import Button from "@/Components/Commen/Button";
import { useRouter } from "next/navigation";

const SignUp_Method = () => {
    const router = useRouter();
    const emailSignUp = () => router.push("/signup");

    return (
        <main>
            <div className="flex py-44 items-center justify-center bg-hihigray relative">
                <div className="rounded w-[500px] h-[400px] bg-white flex justify-center flex-col">
                    <div className="flex justify-center ">
                        <img src="formLogo.svg" />
                    </div>
                    <SocialSign />

                    <div className="pr-2 pl-2 flex flex-row gap-2 mx-auto items-center justify-start self-stretch shrink-0 relative">
                        <div className="bg-gray2 w-[150px] h-[1px]"></div>

                        <div className="text-graytext-5 text-left relative flex items-center justify-start">또는</div>

                        <div className="bg-gray2 w-[150px] h-[1px]"></div>
                    </div>

                    <div className="w-fit mt-8 mb-6 mx-auto">
                        <Button onClick={emailSignUp} text="이메일로 회원가입" size="m" />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default SignUp_Method;
