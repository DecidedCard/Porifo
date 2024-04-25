"use client";

import React, { PropsWithChildren } from "react";
import Header from "@/Components/Header";
import Loading from "@/Components/Loading";
import LoginCheckModal from "@/Components/LoginCheckModal";

import useLoginCheck from "@/hooks/mypage/useLoginCheck";

const AuthLayout = ({ children }: PropsWithChildren) => {
    const { isFetching, isError } = useLoginCheck();

    if (isFetching) {
        return (
            <div className="absolute top-0 left-0 z-50 flex justify-center items-center w-screen h-screen bg-hihigray">
                <Loading />
            </div>
        );
    }

    if (isError) {
        return (
            <div>
                <Header />
                <LoginCheckModal route="/" />
            </div>
        );
    }

    return <div>{children}</div>;
};

export default AuthLayout;
