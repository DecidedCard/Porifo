"use client";

import { useState } from "react";
import Image from "next/image";

import SocialSign from "@/Components/Sign/SocialSign";
import SignRouterButton from "@/Components/Sign/SignRouterButton";

import signCheckUserPortfolio from "@/util/sign/signCheckUserPortfolio";

const SignUpMethod = () => {
    const [redirectTo, setRedirecTo] = useState("");

    signCheckUserPortfolio({ setRedirecTo });

    return (
        <main>
            <div className="flex py-44 items-center justify-center bg-hihigray relative sm:flex sm:w-full sm:py-0">
                <div className="rounded-2xl w-[500px] h-[400px] bg-white flex justify-center flex-col sm:items-center sm:w-full sm:h-[844px]">
                    <div className="sm:flex sm:flex-col sm:items-center sm:justify-center sm:w-[416px] sm:h-[273px]">
                        <div className="flex justify-center sm:hidden">
                            <Image
                                className="w-[160px] h-[140px]"
                                width={0}
                                height={0}
                                src="formLogo.svg"
                                alt="form 로고 사진"
                            />
                        </div>

                        <SocialSign
                            redirectTo={redirectTo}
                            text="SNS 계정 회원가입"
                            imageWidthNum={40}
                            imageHeight={40}
                            gap={6}
                        />

                        <div className="px-2 flex flex-row gap-2 mx-auto items-center justify-start self-stretch shrink-0 relative sm:pr-0 sm:pl-0">
                            <div className="bg-gray2 w-[150px] h-[1px]"></div>

                            <div className="text-graytext-5 text-left relative flex items-center justify-start sm:text-[12px]">
                                또는
                            </div>

                            <div className="bg-gray2 w-[150px] h-[1px]"></div>
                        </div>

                        <SignRouterButton />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default SignUpMethod;
