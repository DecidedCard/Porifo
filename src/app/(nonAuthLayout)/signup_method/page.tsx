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
                <div className="rounded p-10 w-[500px] h-[400px] bg-white flex justify-center flex-col">
                    <div className="flex justify-center ">
                        <img src="formLogo.svg" />
                    </div>
                    <SocialSign />
                    <h1 className={`${baseClass} ${afterClass} ${beforeClass}`}>또는</h1>
                    <div className="w-fit mt-8 mb-6 mx-auto">
                        <Button onClick={emailSignUp} text="이메일로 회원가입" size="m" width={350} />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default SignUp_Method;

const baseClass = "mx-auto my-8 flex basis-full justify-center items-center size-12 text-gray-300";

const afterClass =
    "after:bg-black after:content-[''] after:leading-[0px] after:text-[0px] after:mx-16 after:my-0 after:grow after:h-1";

const beforeClass =
    "before:bg-black before:content-[''] before:leading-[0px] before:text-[0px] before:mx-16 before:my-0 before:grow before:h-1";
