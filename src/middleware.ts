import { NextResponse, NextRequest } from "next/server";

const supabaseURL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;

export const middleware = async (request: NextRequest) => {
    const response = NextResponse.next();

    // const supabase = createMiddlewareClient({ req: request, res: response });

    // const {
    //     data: { session },
    // } = await supabase.auth.getSession();

    const { pathname } = request.nextUrl;

    // if (!session && pathname.startsWith("/mypage")) {
    //     console.log("세션이 없는데 mypage에 들어옴");
    //     return NextResponse.redirect(new URL("/signin", request.nextUrl.basePath));
    // }

    // if (session && (pathname.startsWith("/signin") || pathname.startsWith("/signup"))) {
    //     console.log("세션은 있는데 signin singup 페이지에 들어옴");
    //     return NextResponse.redirect(new URL("/", request.nextUrl.basePath));
    // }

    // if (pathname === "mypage" && !user) {
    //     return NextResponse.redirect(new URL("/sigin", request.url));
    // }

    // Create a Supabase client configured to use cookies

    // Refresh session if expired - required for Server Components
    // return response;
};

export const config = {
    matcher: ["/mypage"],
};
