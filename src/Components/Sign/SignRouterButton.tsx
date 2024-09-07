"use client";

import { useRouter } from "next/navigation";

import Button from "@/Components/Commen/Button";

const SignRouterButton = () => {
    const router = useRouter();

    const emailSignUp = () => router.push("/signup");

    return (
        <div className="w-full mt-8 mb-6 mx-auto text-body/P6_M text-gray-4 sm:w-[340px]">
            <Button onClick={emailSignUp} text="이메일로 회원가입" size="extra" color="gray3" border />
        </div>
    );
};

export default SignRouterButton;
