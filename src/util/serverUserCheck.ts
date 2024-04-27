import { createClient } from "./supabase/server";

const serverUserCheck = async () => {
    const supabase = createClient();
    const {
        data: { user },
        error,
    } = await supabase.auth.getUser();
    if (error) {
        console.error(error);
        throw error;
    }
};
