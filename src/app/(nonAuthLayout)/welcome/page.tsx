"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import Button from "@/Components/Commen/Button";

const Welcome = () => {
    const router = useRouter();
    const onClickLogin = () => router.replace("/signin");
    return (
        <main>
            <div className="flex py-44 items-center justify-center bg-hihigray relative">
                <div className="rounded w-[500px] h-[600px] bg-white flex justify-center flex-col">
                    <div className="flex justify-center ">
                        <Image
                            className="w-[160px] h-[140px]"
                            width={0}
                            height={0}
                            src="formLogo.svg"
                            alt="form 로고 사진"
                        />
                    </div>

                    <p className="text-center mb-[40px] flex-row text-[108px]">👏</p>
                    <p className="text-center mb-[40px] flex-row text-[35px]">포리포에 오신 것을</p>
                    <p className="text-center mb-[40px] flex-row text-[35px]">환영합니다!</p>
                    <div className="w-[350px] mt-8 mb-6 mx-auto">
                        <Button
                            text="로그인 하기"
                            border="none"
                            color="primary"
                            disabled={false}
                            size="m"
                            onClick={onClickLogin}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Welcome;
