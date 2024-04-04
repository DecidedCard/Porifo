import React from "react";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export const loginMiddleWare = (request: NextRequest) => {
    return NextResponse.redirect(new URL("/", request.url));
};

export const config = {
    matcher: ["/mypage", "/mypage/:id*"],
};
