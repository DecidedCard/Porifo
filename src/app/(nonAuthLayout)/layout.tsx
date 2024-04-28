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
        if (user?.user_metadata.birthDate === undefined && user?.user_metadata.sex === undefined) {
            router.replace("/socialSetting");
            return;
        }
        router.replace("/mypage");
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
