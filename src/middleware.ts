import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { cookies } from "next/headers";
import { supabase } from "@/util/supabase/clientSupabase";
// import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";

export const middleware = async (request: NextRequest) => {
    const res = NextResponse.next();

    const user = await supabase.auth.getUser();
    console.log("user", user);
    const { pathname } = request.nextUrl;

    if (pathname === "mypage" && !user) {
        return NextResponse.redirect(new URL("/sigin", request.url));
    }
    return res;
    // Create a Supabase client configured to use cookies
    // const supabase = createMiddlewareClient({ req, res });

    // Refresh session if expired - required for Server Components
};

export const config = {
    matcher: ["/mypage"],
};
