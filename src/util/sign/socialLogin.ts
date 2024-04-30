import serverClient from "../supabase/serverClient";

import type { Provider } from "@supabase/supabase-js";

type QueryParams = {
    access_type: string;
    prompt: string;
};

const signInWithSocial = async (social: Provider, redirectTo: string, queryParams?: QueryParams) => {
    const supabase = serverClient();
    try {
        const { error } = await supabase.auth.signInWithOAuth({
            provider: social,
            options: {
                redirectTo,
                queryParams,
            },
        });

        if (error) {
            throw new Error("SNS 로그인 중 오류가 발생하였습니다.");
        }
    } catch (error) {
        console.log(error);
    }
};

export default signInWithSocial;
