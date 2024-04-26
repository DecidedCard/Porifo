"use client";

import { useRouter } from "next/navigation";

import Button from "@/Components/Commen/Button";

const SignRouterButton = () => {
    const router = useRouter();

    const emailSignUp = () => router.push("/signup");

    return (
        <div className="w-fit mt-8 mb-6 mx-auto sm:w-[340px]">
            <Button onClick={emailSignUp} text="이메일로 회원가입" size="m" />
        </div>
    );
};

export default SignRouterButton;
