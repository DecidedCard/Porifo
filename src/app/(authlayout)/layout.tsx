"use client";

import LoginCheckModal from "@/Components/LoginCheckModal";
import useLoginCheck from "@/hooks/mypage/useLoginCheck";
import Image from "next/image";
import React, { PropsWithChildren } from "react";

const AuthLayout = ({ children }: PropsWithChildren) => {
    const { isFetching, isError } = useLoginCheck();

    if (isFetching) {
        return (
            <div className="flex justify-center items-center w-screen h-screen">
                <Image src={"../porifo.svg"} alt="로딩 이미지" width={100} height={100} className="animate-bounce" />
            </div>
        );
    }

    if (isError) {
        return (
            <div>
                <LoginCheckModal route="/" />
            </div>
        );
    }

    return <div>{children}</div>;
};

export default AuthLayout;
