"use client";

import HeaderNonAuth from "@/Components/HeaderNonAuth";
import Loading from "@/Components/Loading";
import useLoginCheck from "@/hooks/mypage/useLoginCheck";
import { useRouter } from "next/navigation";
import React, { PropsWithChildren } from "react";

const NonAuthLayout = ({ children }: PropsWithChildren) => {
    const { user } = useLoginCheck();
    const router = useRouter();

    if (user) {
        if (!user.user_metadata.name && !user.user_metadata.user_name) {
            router.replace("/confirmEmail");
            return;
        }
        if (!user.user_metadata.birthDate || !user.user_metadata.sex) {
            router.replace("/socialSetting");
            return;
        }
        router.replace("/");
    }

    return (
        <div>
            {" "}
            <HeaderNonAuth />
            {children}
        </div>
    );
};

export default NonAuthLayout;
