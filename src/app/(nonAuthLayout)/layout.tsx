"use client";

import Loading from "@/Components/Loading";
import useLoginCheck from "@/hooks/mypage/useLoginCheck";
import { useRouter } from "next/navigation";
import React, { PropsWithChildren } from "react";

const NonAuthLayout = ({ children }: PropsWithChildren) => {
    const { user, isFetching, isError } = useLoginCheck();
    const router = useRouter();

    if (isFetching) {
        return (
            <div className="absolute top-0 left-0 z-50 flex justify-center items-center w-screen h-screen bg-hihigray">
                <Loading />
            </div>
        );
    }

    if (!isFetching && !isError) {
        if (user?.user_metadata.birthDate !== undefined && user?.user_metadata.sex !== undefined) {
            router.replace("/socialSetting");
            return;
        }
        router.replace("/mypage");
    }

    return <div>{children}</div>;
};

export default NonAuthLayout;
