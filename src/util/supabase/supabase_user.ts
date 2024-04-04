import { supabase } from "./clientSupabase";

export const userData = async () => {
    try {
        const {
            data: { user },
            error,
        } = await supabase.auth.getUser();
        if (error) {
            console.error(error);
            throw new Error("로그인을 해주시기 바랍니다.");
        }
        return user;
    } catch (error) {
        Promise.reject(error);
    }
};
