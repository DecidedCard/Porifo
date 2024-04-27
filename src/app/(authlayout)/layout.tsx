"use client";

import React, { PropsWithChildren } from "react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import Loading from "@/Components/Loading";
import LoginCheckModal from "@/Components/LoginCheckModal";

import useLoginCheck from "@/hooks/mypage/useLoginCheck";

const AuthLayout = ({ children }: PropsWithChildren) => {
    useLoginCheck();

    return (
        <div>
            <Header />
            {children}
        </div>
    );
};

export default AuthLayout;
