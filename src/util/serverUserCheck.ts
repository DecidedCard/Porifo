import type { SupabaseClient } from "@supabase/supabase-js";

const serverUserCheck = async (supabase: SupabaseClient) => {
    const {
        data: { user },
        error,
    } = await supabase.auth.getUser();
    if (error) {
        throw error;
    }
    return user;
};

export default serverUserCheck;
