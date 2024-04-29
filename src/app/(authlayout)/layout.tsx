"use client";

import React, { PropsWithChildren } from "react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import Loading from "@/Components/Loading";
import LoginCheckModal from "@/Components/LoginCheckModal";

import useLoginCheck from "@/hooks/mypage/useLoginCheck";
import { useRouter } from "next/navigation";

const AuthLayout = ({ children }: PropsWithChildren) => {
    const { user } = useLoginCheck();
    const router = useRouter();

    if (!user) {
        return <LoginCheckModal route="/" />;
    }

    if (!user.user_metadata.name && !user.user_metadata.user_name) {
        router.replace("/confirmEmail");
    } else if (!user.user_metadata.birthDate && !user.user_metadata.sex) {
        router.replace("/socialSetting");
    }

    return (
        <div>
            <Header />
            {children}
        </div>
    );
};

export default AuthLayout;
