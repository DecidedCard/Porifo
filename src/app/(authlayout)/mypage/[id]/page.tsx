import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse, NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
    const res = NextResponse.next();

    const supabase = createMiddlewareClient({ req, res });

    const {
        data: { session },
    } = await supabase.auth.getSession();

    // if (!session) {
    //     return NextResponse.rewrite(new URL("/siginin", req.url));
    // }

    console.log("session", session);

    if (!session && req.url === "/mypage") {
        return NextResponse.rewrite(new URL("/signin", req.url));
    }

    return res;
}
export const config = {
    matcher: ["/mypage", "/mypage/(.*)"],
};

// export const config = {
//     matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
// };
