import { Database } from "@/types/Supabase";
import type { SupabaseClient } from "@supabase/supabase-js";
import { ServerClientType } from "./supabase/serverClient";

const serverUserCheck = async (supabase: ServerClientType) => {
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
