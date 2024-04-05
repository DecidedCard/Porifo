import { supabase } from "@/util/supabase/clientSupabase";
import { Provider } from "@supabase/supabase-js";

type QueryParams = {
    access_type: string;
    prompt: string;
};

const usesignInWithSocial = async (social: Provider, queryParams?: QueryParams) => {
    const { error } = await supabase.auth.signInWithOAuth({
        provider: social,
        options: {
            redirectTo: "http://localhost:3000/social_setting",
            queryParams: queryParams,
        },
    });
    try {
        if (error) {
            throw new Error("소셜 로그인 오류가 발생하였습니다.");
        }
    } catch (error) {
        console.log(error);
    }
};
export default usesignInWithSocial;
