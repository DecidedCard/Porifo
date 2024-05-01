import { supabase } from "./clientSupabase";
import serverClient from "./serverClient";

export const userData = async () => {
    const {
        data: { user },
        error,
    } = await supabase.auth.getUser();
    if (error) {
        throw error;
    }
    return user;
};

export const userUpdate = async (arg: any) => {
    const supabase = serverClient();
    try {
        const { data, error } = await supabase.auth.updateUser({
            data: arg,
        });
        if (error) {
            console.error(error);
            throw new Error(error.message);
        }
        return data;
    } catch (error) {
        Promise.reject(error);
    }
};
