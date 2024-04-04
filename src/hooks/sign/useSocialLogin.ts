import { supabase } from "@/util/supabase/clientSupabase";

const useSocialLogin = () => {
    const signInWithGithub = async () => {
        const { error } = await supabase.auth.signInWithOAuth({
            provider: "github",
            options: {
                redirectTo: "http://localhost:3000/social_setting",
            },
        });
        try {
            if (error) {
                throw new Error("깃 허브 로그인 오류가 발생하였습니다.");
            }
        } catch (error) {
            console.log(error);
        }
    };

    const signInWithKakao = async () => {
        const { error } = await supabase.auth.signInWithOAuth({
            provider: "kakao",
            options: {
                redirectTo: "http://localhost:3000/social_setting",
            },
        });

        try {
            if (error) {
                throw new Error("카카오 로그인 오류가 발생하였습니다.");
            }
        } catch (error) {
            console.log(error);
        }
    };

    const signInWithGoogle = async () => {
        const { error } = await supabase.auth.signInWithOAuth({
            provider: "google",
            options: {
                redirectTo: "http://localhost:3000/social_setting",
                queryParams: {
                    access_type: "offline",
                    prompt: "consent",
                },
            },
        });

        try {
            if (error) {
                throw new Error("구글 로그인 중 오류가 발생하였습니다.");
            }
        } catch (error) {
            console.log(error);
        }
    };
    return { signInWithGithub, signInWithKakao, signInWithGoogle };
};

export default useSocialLogin;
