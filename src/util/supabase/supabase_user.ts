import { supabase } from "./clientSupabase";

export const userData = async () => {
    const {
        data: { user },
    } = await supabase.auth.getUser();
    return user;
};
