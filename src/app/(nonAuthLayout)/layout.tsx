"use client";

import useLoginCheck from "@/hooks/mypage/useLoginCheck";
import { useRouter } from "next/navigation";
import React, { PropsWithChildren } from "react";

const NonAuthLayout = ({ children }: PropsWithChildren) => {
    const { isFetching, isError } = useLoginCheck();
    const router = useRouter();
    if (isFetching) {
        return <>로딩중입니다...</>;
    }
    if (!isFetching && !isError) {
        router.replace("/mypage");
    }

    return <div>{children}</div>;
};

export default NonAuthLayout;
