"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import Button from "@/Components/Commen/Button";

const Welcome = () => {
    const router = useRouter();

    const onClickLogin = (route: string) => router.replace(route);

    return (
        <main>
            <div className="flex py-44 items-center justify-center bg-gray_1 relative sm:py-0">
                <div className="rounded-2xl w-[500px] h-[600px] bg-white flex justify-center flex-col sm:items-center sm:w-full sm:h-screen">
                    <div className="flex justify-center sm:hidden">
                        <Image
                            className="w-[160px] h-[140px]"
                            width={0}
                            height={0}
                            src="/assets/image/signImage/formLogo.svg"
                            alt="form 로고 사진"
                        />
                    </div>

                    <p className="text-center mb-[40px] text-[108px]">👏</p>
                    <p className="text-center mb-[40px] text-P2_M sm:text-[20px] sm:mb-[20px] sm:leading-normal sm:font-medium">
                        포리포에 오신 것을 <br /> 환영합니다!
                    </p>

                    <div className="flex flex-col gap-4 w-[350px] mt-8 mb-6 mx-auto">
                        <Button
                            text="포트폴리오 작성하기"
                            color="primary"
                            disabled={false}
                            size="m"
                            onClick={() => onClickLogin("/mypage")}
                        />
                        <Button
                            text="포트폴리오 둘러보기"
                            border="none"
                            color="primary"
                            disabled={false}
                            size="m"
                            onClick={() => onClickLogin("/community")}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Welcome;
