"use client";

import useMyPage from "@/hooks/myPage/useMyPage";
import React, { PropsWithChildren } from "react";

const AuthLayout = ({ children }: PropsWithChildren) => {
    const {} = useMyPage();
    return <div>{children}</div>;
};

export default AuthLayout;
